import { Component, OnInit } from '@angular/core';
import { SingUpService } from 'src/app/services/sing-up.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.stock);
    this.getTotal()
  }

  constructor(
    private stockService: SingUpService
  ) { }

  stock: any = this.stockService.stock;
  total = 0;


  // FUNCIONES

  // Funcion par obtener el total de los productos
  getTotal() {
    for (let i = 0; i < 10; i++) {
      if (this.stock[i].id !== undefined) {
        this.total = this.total + (parseInt(this.stock[i].price) * parseInt(this.stock[i].userStock));
      }
    }
  }
  // Funcion par traer las imagenes de los productos y retornarlo en la varible images en forma de arrays de objetos
  getOneImage(gId: string) {
    this.stockService.getOneImage(gId).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => console.log('Imagen')
    })
  }

}

/* 

[
  {
    "id": "1",
    "name": "Postre de Maracuya",
    "price": 5000,
    "userStock": 3,
    "img": {
      "1": [
        "https://mundorecetas365.com/wp-content/uploads/2021/11/como-hacer-postre-de-maracuya-1.png",
        "https://cdn0.recetasgratis.net/es/posts/2/3/9/postre_de_maracuya_con_galletas_y_gelatina_58932_600_square.jpg",
        "https://revistaprimetime.com/wp-content/uploads/2019/10/Postredemaracuya-CortesiaCocinaVital.jpg"
      ]
    }
  },
  {
    "id": "2",
    "name": "Tiramisu",
    "price": 7000,
    "userStock": 3,
    "img": {
      "2": [
        "https://sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg",
        "https://www.ilolay.com.ar/uploads/recetas/1658880862-Tiramisu.jpg",
        "https://img2.rtve.es/i/?w=1600&i=1635859279860.jpg"
      ]
    }
  },
  {
    "id": "3",
    "name": "Postre de limon",
    "price": 5000,
    "userStock": 2,
    "img": {
      "3": [
        "https://i.pinimg.com/736x/ac/1f/e7/ac1fe7458dbf1cac140ac07cf55f413d.jpg",
        "https://i.ytimg.com/vi/GUnW4_7xfEQ/maxresdefault.jpg",
        "https://2.bp.blogspot.com/-mkG1h2YivTM/W3BArhzRWuI/AAAAAAAAQCM/zsXCHqfkY90_ETAfFcD5OCFAdCHGH7ojwCLcBGAs/s1600/Postre%2Blimon%2B_%2B10.JPG"
      ]
    }
  },
  {
    "id": "4",
    "name": "Flan",
    "price": 4000,
    "userStock": 3,
    "img": {
      "4": [
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM1oC2GcSEXeQOQd0P8KlNvpIqMIxNnqsEwOZ470cYGVCfepzo1IF2rfHGp9JtFajz9JVCtiC_6Ot4S-ECmhQkK0OecfpPSqR6mX67AXay0e7jrnTU2ilDKr_NvNhohTz9RrsGabXi3tuOofcCI_rlf9iMG0n819BVoqVRPm1mOcZ2CBuRREMNjxL_Ow/s1600/flan-queso-crema-receta.JPG",
        "https://cdn0.recetasgratis.net/es/posts/0/8/8/flan_de_caramelo_casero_50880_600_square.jpg",
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Creamy-Caramel-Flan_EXPS_FT20_2197_F_0723_1-4.jpg"
      ]
    }
  },
  {
    "id": "5",
    "name": "Postre tres leches",
    "price": 8000,
    "userStock": 3,
    "img": {
      "5": [
        "https://i.ytimg.com/vi/n0ymEFZJBho/maxresdefault.jpg",
        "https://www.elespectador.com/resizer/UvZjf8aZUlBPua4K01LNHiBN2Do=/arc-anglerfish-arc2-prod-elespectador/public/3PJDG5WXZZCR7I3L4X3C3E3NBE.jpg",
        "https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/09/pastel-tres-leches.jpg"
      ]
    }
  },
  {
    "id": "6",
    "name": "Selva Negra",
    "price": 8000,
    "userStock": 3,
    "img": {
      "6": [
        "https://www.menudospeques.net/images/cocinaynutricion/tarta-selva-negra-receta.jpg",
        "https://www.comedera.com/wp-content/uploads/2022/09/shutterstock_1666023019.jpg",
        "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2021-03/foresta-nera-storia.jpg"
      ]
    }
  },
  {
    "id": "7",
    "name": "Postre de frutos rojos",
    "price": 5000,
    "userStock": 3,
    "img": {
      "7": [
        "https://static-sevilla.abc.es/media/gurmesevilla/2014/01/tarta-queso-rojos.jpg",
        "https://img.recetascomidas.com/recetas/640_480/tarta-de-queso-con-frutas-del-bosque.jpg",
        "https://i0.wp.com/www.todocooking.com/wp-content/uploads/2020/06/Tarta-de-queso-y-frutos-rojos-2020-02.jpg?resize=800%2C530&ssl=1&is-pending-load=1"
      ]
    }
  },
  {
    "id": "8",
    "name": "Milhojas",
    "price": 6000,
    "userStock": 3,
    "img": {
      "8": [
        "https://imag.bonviveur.com/racion-de-milhojas-de-chocolate.jpg",
        "https://recetas123.net/wp-content/uploads/mil-hojas.jpg",
        "https://4.bp.blogspot.com/-LI5Rw8H57Dc/VzTsd1woX4I/AAAAAAAABYs/eb4ynYH4tGcDJcALkY9SQfgfE1I8QjWjwCLcB/s1600/milhojas-de-merengue-y-crema-pastelera.jpg"
      ]
    }
  },
  {
    "id": "9",
    "name": "Leche asada",
    "price": 4500,
    "userStock": 2,
    "img": {
      "9": [
        "https://img-global.cpcdn.com/recipes/0f99cfcae26f39f5/400x400cq70/photo.jpg",
        "https://www.gourmet.cl/wp-content/uploads/2018/03/Leche-Asada-Web.jpg",
        "https://okdiario.com/img/2019/12/03/receta-de-leche-asada-en-microondas-1.jpg"
      ]
    }
  },
  {
    "id": "10",
    "name": "Esponjado de naranja",
    "price": 4000,
    "userStock": 3,
    "img": {
      "10": [
        "https://cdn1.cocina-familiar.com/recetas/postre-cremoso-y-facil-de-naranja.JPG",
        "https://3.bp.blogspot.com/-y36H4JqTKmY/WmWglj14HwI/AAAAAAAAHO4/tULKH4uH2dopfEjM7KtTHNWZiuT2fzkogCLcBGAs/s1600/manjar-naranja-maicena-venezolano.jpeg",
        "https://www.hogarmania.com/archivos/201911/karl6465-crema-de-naranja-y-canela-1280x720x80xX.jpg"
      ]
    }
  }
]

*/