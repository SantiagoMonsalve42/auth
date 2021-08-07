import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/auth/services/sesion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [ `
    *{
      margin: 15px;
    }
  `
  ]
})
export class DashboardComponent {

  get user(){
    return this.service.user;
  }

  constructor(private router: Router,
              private service: SesionService){}

  logout(): void{
    this.router.navigateByUrl('/auth/login');
  }

}
