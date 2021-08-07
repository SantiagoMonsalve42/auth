import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SesionService } from '../auth/services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  
  constructor(private sesionService: SesionService,
              private router: Router){} 

  canActivate(): Observable<boolean> | boolean{
    console.log("canactive");
    return this.sesionService.validarToken()
                .pipe(
                  tap(valid =>{
                    if(!valid){
                      this.router.navigateByUrl("/auth");
                    }
                  }
                  )
                );      
  }
  
  canLoad(): Observable<boolean>| boolean {
    console.log("canload");
    return this.sesionService.validarToken()
              .pipe(
                tap(valid =>{
                  if(!valid){
                    this.router.navigateByUrl("/auth");
                  }
                }
                )
              );
  }

}
