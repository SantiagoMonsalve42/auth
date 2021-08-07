import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { sesion, user } from '../interfaces/sesion-interfaces';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  url: string = environment.baseUrl;
  private _user!: user; 

  get user(){
    return {...this._user};
  }

  constructor(private http: HttpClient) { }

  iniciarSesion(email: string, password: string): Observable<boolean>{
    return this.http.post<sesion>(this.url+"/auth",{email,password})
                    .pipe(
                        tap( resp => {
                          sessionStorage.setItem('tk',resp.token!);
                          if(resp.ok){
                            this._user = {
                              name: resp.name!,
                              uid: resp.uid!
                            }
                          }
                        } ),
                        map( resp => resp.ok),
                        catchError(error => of(false))
                    );
  }

  validarToken(): Observable<boolean>{
    const headers = new HttpHeaders()
        .set('x-api-key', sessionStorage.getItem('tk')||'');
    return this.http.get<sesion>(this.url+"/auth",{headers})
                .pipe(
                  map( resp => {

                    return resp.ok
                  }),
                  catchError(error => of(false))
                );
  }
  
}
