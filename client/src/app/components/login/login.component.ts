import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SingUpService } from 'src/app/services/sing-up.service';
import { Login } from 'src/app/modules/Form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* --------------------------------------- VALIDACIONES --------------------------------------- */

  // Definimos de que tipo y que contendrá la variable form
  // y esta contendrá todos los datos y validaciones del formulario

  form: FormGroup = new FormGroup({})

  // Definimos el contenido del formulario y sus validators

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(4), Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      password: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(4), Validators.pattern(/^[a-zA-Z0-9 ]+$/)]]
    })

    // Este observable me imprimirá en la consola los cambios hechos por el usuario
    /*this.form.valueChanges
      // El debouceTime añade un delay de 0.5s para que solo se manden las peticiones luego de ese tiempo de inactividad,
      // En este caso cuando deje de escribir
      .pipe(
        debounceTime(500)
      )
      // Nos suscribimos para analizar los cambios del formulario y los imprimimos en pantalla
      .subscribe(value => {
        console.log(value);
      });*/
  }

  // Metodos get para retornar el dato en forma de FormControl para validarlor arriba

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  /* ------------------------------------FIN DE LAS VALIDACIONES -------------------------------- */

  // Inyectamos el servicio 'SingUpService' para acceder a sus metodos
  // Especificamente el metodo loginClient

  constructor(
    private singUpService: SingUpService,
    // Inyectamos 
    private formBuilder: FormBuilder,
    // Iniciamos el router para poder redirigir al user luego del login
    private router: Router
  ) { }

  ngOnInit(): void {
    // Iniciamos la función de las validaciones
    this.buildForm()
  }

  // Declaramos el objeto user con la interfaz login

  user: Login = {
    username: '',
    password: ''
  }

  // Creamos una función que será llamada por el boton enviar y lo que hace es enviar
  // la información del formulario al backend

  saveForm() {
    this.singUpService.loginClient(this.user).subscribe({
      next: (v) => {
        console.log(v)
        console.log(v.root);
        if (v.root === true) {
          console.log('admin');
          localStorage.setItem('token', v.root);
          this.router.navigate(['/']);
          setTimeout(() => {
            location.reload();
          }, 0);
        } else if (v.root === false){
          console.log('no admin');
          localStorage.setItem('token', v.root);
          this.router.navigate(['/shoppingcart']);
          setTimeout(() => {
            location.reload();
          }, 0);
        } 
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })

  }

}