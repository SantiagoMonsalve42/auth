import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }
  error(mensaje: string){
    Swal.fire({
      title: 'Error!',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
  
}
