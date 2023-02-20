import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/modules/Form';
// Servicio para realizar los metodos http
import { SingUpService } from '../../services/sing-up.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

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

  /* ---------------------------------------------- VALIDACIONES ---------------------------------------------- */

  // Definimos de que tipo y que contendrá la variable form
  // y esta contendrá todos los datos y validaciones del formulario

  form: FormGroup = new FormGroup({})

  // Definimos el contenido del formulario y sus validators 

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(4), Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      password: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(4), Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(7), Validators.pattern(/^[0-9+]+$/)]],
      email: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(4), Validators.email, Validators.pattern(/^[a-zA-Z0-9-_@. ]+$/)]],
      address: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(4), Validators.pattern(/^[a-zA-Z0-9- ]+$/)]],
    })
  }

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }
  
  get phoneControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get addressControl(): FormControl {
    return this.form.get('address') as FormControl;
  }

  /* ----------------------------------------- FIN DE LAS VALIDACIONES ---------------------------------------- */

  // Instanciamos el objeto que le mandaremos a la api
  user: Register = {
    username: '',
    password: '',
    phone: '',
    email: '',
    root: true,
    address: '',
  }


  // Creamos una función que será llamada por el boton enviar y lo que hace es enviar
  // la información del formulario al backend

  saveForm() {
    this.singUpService.updateAdmin(this.user).subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/']);
      },
      error: (e) => console.log(e),
      complete: () => alert('Ss han actualizado las credenciales del administrador')
    })

  }
}

