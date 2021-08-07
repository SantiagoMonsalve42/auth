import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }
  miFormulario: FormGroup = this.fb.group({
    name: ['juan',[Validators.required,Validators.minLength(4)]],
    email: ['sas@sas.com',[Validators.required,Validators.email]],
    password: ['123456',[Validators.required,Validators.minLength(6)]]
  });

  registro(){
    this.router.navigateByUrl('/dashboard');
  }
}
