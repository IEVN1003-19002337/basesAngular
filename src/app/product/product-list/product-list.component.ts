import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saludo de variable";

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 puertas familiares",
      "year":"febrero 3 2022",
      "precio":20000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://carsline.com.mx/wp-content/uploads/2023/10/03Nissan-Sentra-Exclusive-Morado-2020-6831.jpg"
    },
    {
      "productoId":2,
      "Modelo":'A4',
      "Descripcion":"2 puertas",
      "year":"marzo 3 2023",
      "precio":30000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://i0.wp.com/egdautomoviles.com/wp-content/uploads/2023/08/IMG_4028.jpg?fit=2048%2C1538&ssl=1"
    },
    {
      "productoId":3,
      "Modelo":'Rio',
      "Descripcion":"4 puertas familiar",
      "year":"agosto 3 2022",
      "precio":60000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://mma.prnewswire.com/media/2062949/Kia_America_2023_Rio.jpg?p=facebook"
    },
  ]
}
