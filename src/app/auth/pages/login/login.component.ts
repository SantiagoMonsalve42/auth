import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



import { SesionService } from '../../services/sesion.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: SesionService,
              private alertservice: AlertsService) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    email: ['test1@test.com',[Validators.required,Validators.email]],
    password: ['123456',[Validators.required,Validators.minLength(6)]]
  });


  login(): void{   
    const {email,password} = this.miFormulario.value;
    this.service.iniciarSesion(email,password)
        .subscribe(data => {
          if(data){
              this.router.navigateByUrl('/dashboard');
          }else{
            console.log(data)
            this.alertservice.error("Email o contraseña invalidos, verifique e intente nuevamente");
          }
        })
  }

  
}
