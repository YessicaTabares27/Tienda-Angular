//-------------------------- Modulos para la correcta funcionalidad del programa--------------------

// Modulo configurar el inyector y copilador, además de trasmitir las importaciones
import { NgModule } from '@angular/core';
// Exporta la infraestructura requerida para todas las aplicaciones de Angular. Incluido por defecto 
// en todas las aplicaciones Angular creadas con el newcomando CLI.
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modulo para configurar las rutas de la aplicación web
import { AppRoutingModule } from './app-routing.module';
// Modulo para poder gestionar los metodos http
import { HttpClientModule } from '@angular/common/http';
// Modulo para validar y hacer reactivos los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ----------------------------- Modulo para estetica -----------------------------------

// Modulo que importa las funcionalidades de angular material, el resto de ...
// ... modulos estan separados en el archivo src/app/material.module.ts
import { MaterialModule } from './material.module';
// ----------------------------- Injectables --------------------------------------------

// Modulo que inyecta las peticiones a la api
import { SingUpService } from './services/sing-up.service';
// Modulo que se usará para proteger las rutas del user (en caso de que no se haya iniciado sesion)
import { UserGuard } from './guards/user.guard';
// Modulo que se usará para proteger las rutas del admin (en caso de que no se haya iniciado sesion)
import { AdminGuard } from './guards/admin.guard';
// ---------------------------- Componentes ---------------------------------------------

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoComponent } from './components/carrito/carrito.component'
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';


// @NgModule es un modulo que define que componentes, servicios, etc. quiere exportar
@NgModule({
  // Sección para importar los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarritoComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    OneProductComponent,
    EditAdminComponent
  ],
  // Sección para importar los modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // Sección para importar los servicios
  providers: [
    SingUpService,
    UserGuard,
    AdminGuard
  ],
  // Sección para hacia la cual se exportaran todos los archivos anteriores
  bootstrap: [AppComponent]
})
export class AppModule { }
