import { Component } from '@angular/core';
import { SingUpService } from 'src/app/services/sing-up.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Función para saber si existe el item token en el local storage

  userValidator: boolean = !!localStorage.getItem('token');

  logOut() {
    localStorage.removeItem('token');
    location.reload();
  }

  nav : string = ''

  constructor() {
  }

 move() {
  if (localStorage.getItem('token') == 'true') {
    return true
  } else {
    return false
  }
 }

}
