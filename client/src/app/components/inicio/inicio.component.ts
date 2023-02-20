import { Component, OnInit } from '@angular/core';
import { SingUpService } from 'src/app/services/sing-up.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  constructor(private services: SingUpService) { }

  ngOnInit(): void {
    // Ejecutamos la función apenas cargue la pagina para que renderice todos los productos
    this.getProducts()
    // Ejecutamos la función apenas cargue la pagina para que renderice todas las imagenes
    this.getImage()
  }

  // Array que contendrá toda la información de los productos en forma de objetos
  products: any = []
  // Array que contendrá todas las imagenes de los productos en forma de objetos
  images: any = {}

  // Funcion par traer el producto con la id y retornarlo en la varible product
  getProducts() {
    this.services.getProducts().subscribe({
      next: (v) => this.products = v,
      error: (e) => console.log(e)
    })
  }

  // Funcion par traer las imagenes de los productos y retornarlo en la varible images en forma de arrays de objetos
  getImage() {
    this.services.getImages().subscribe({
      next: (v) => this.images = v,
      error: (e) => console.log(e)
    })
  }

}
