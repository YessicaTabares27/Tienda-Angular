import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modules/Form';
import { SingUpService } from 'src/app/services/sing-up.service';


@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  constructor(
    // Inyectamos ActivatedRoute para poder tomar el parametro de la url y asignarlo a una variable (id)
    private route: ActivatedRoute,
    // Inyectamos SingUpService para usar los metodos http (getOneProduct) y así traer los datos de
    // los productos desde la base de datos
    private services: SingUpService
  ) {
  }


  // Variables que determinarán si el usuario esta logeado y que tipo de loggin es, esto
  // Para mostrar una u otra caracteristica

  adminConfirmation: boolean = localStorage.getItem('token') == 'true';
  userConfirmation: boolean = localStorage.getItem('token') == 'false';

  // Variable que será usada para identificar que producto traer
  id: any = '';
  // Variable que alojará toda la información de un producto
  product: any = {}
  // Array que contendrá todas las imagenes de los productos en forma de objetos
  images: any = {}

  
  ngOnInit(): void {
    // Función para que la variable id tenga el parametro de la url
    this.id = this.route.snapshot.paramMap.get('id');
    // Función que llamará el producto con la id
    this.getOneProduct(this.id);
    this.getOneImage(this.id);
    this.arrayStock = this.services.stock;
    this.getUserStock(this.id);
  }

  // Función para traer el valor del stock del usuario 
  getUserStock(gId:number){
    if (_isNumberValue(this.services.getUserStock(gId))) {
      this.userStock = this.services.getUserStock(gId);
    }
  } 

  // Funcion par traer el producto con la id y retornarlo en la varible product
  getOneProduct(gId: string) {
    this.services.getOneProduct(gId).subscribe({
      next: (v) => this.product = v,
      error: (e) => console.log(e)
    })
  }

  // Funcion par traer las imagenes de los productos y retornarlo en la varible images en forma de arrays de objetos
  getOneImage(gId: string) {
    this.services.getOneImage(gId).subscribe({
      next: (v) => this.images = v,
      error: (e) => console.log(e)
    })
  }

  // Función para enviar al backend el stock (Todos)
  updateProduct(gId: string, jStock: Product) {
    this.services.updateProduct(gId, jStock).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
    })
  }

  // Función para guardar los cambios del stock
  saveChanges() {
    this.updateProduct(this.id, this.product)
  }


  /* ---------------------------------------------------- STOCK ---------------------------------------------------- */

  // Función para añadir stock

  addStock() {
    if (this.product.stock < 50) {
      this.product.stock += 1;
    } else { alert('No se puede sumar mas del stock maximo') }
  }

  // Función para remover stock

  removeStock() {
    if (0 < this.product.stock) {
      this.product.stock -= 1;
    } else { alert('No se puede restar mas') }
  }

  // Función para cambiar el minimo stock

  addMinStock() {
    this.product.stockMin += 1;
  }

  // Función para cambiar el minimo stock

  removeMinStock() {
    if (0 < this.product.stockMin) {
      this.product.stockMin -= 1;
    } else { alert('No se puede restar mas') }
  }

  // Función para cambiar el maximo stock

  addMaxStock() {
    this.product.stockMax += 1;
  }

  // Función para cambiar el maximo stock

  removeMaxStock() {
    if (0 < this.product.stockMax) {
      this.product.stockMax -= 1;
    } else { alert('No se puede restar mas') }
  }

  // User

  // Array que contendrá los valores de la id del producto y el stock del user para subir al localstorage
  arrayStock: any = [];
  // Variable para gestionar el numero de productos que quiere llevar el cliente
  userStock: number = 0;

  // Función para añadirle 1 stock a la variable userStock
  addUserStock() {
    this.userStock += 1;
  }

  // Función para restarle 1 stock a la variable userStock
  removeUserStock() {
    if (0 < this.userStock) {
      this.userStock -= 1;
    } else { alert('No se puede restar mas') }
  }

  // Función para añadir al array un objeto con la id y el numero de stocks del producto
  imp() {
    this.arrayStock[this.id - 1].id = this.id;
    this.arrayStock[this.id - 1].name = this.product.name
    this.arrayStock[this.id - 1].price = this.product.price
    this.arrayStock[this.id - 1].userStock = this.userStock;
    this.arrayStock[this.id - 1].img = this.images;
    this.services.getStock(this.arrayStock);
    console.log(this.services.stock);
  }
  /* -------------------------------------------------- FIN STOCK -------------------------------------------------- */


}
