import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// ---------------------------------------- GUARDS ----------------------------------------
// Inyectable que se usará para proteger las rutas del user (en caso de que no se haya iniciado sesion)
import { UserGuard } from './guards/user.guard';
// Inyectable que se usará para proteger las rutas del admin (en caso de que no se haya iniciado sesion)
import { AdminGuard } from './guards/admin.guard';
// ------------------------------------- FIN GUARDS ---------------------------------------
// ------------------------------------- COMPONENTS ---------------------------------------
import { CarritoComponent } from './components/carrito/carrito.component';
import { InicioComponent } from './components/inicio/inicio.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
// ------------------------------------- FIN COMPONENTS ------------------------------------

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'shoppingcart',
    component: CarritoComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'editAdmin',
    component: EditAdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'product/:id',
    component: OneProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }