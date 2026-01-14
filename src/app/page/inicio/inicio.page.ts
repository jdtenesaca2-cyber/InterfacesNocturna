import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class InicioPage {

  categorias = [
  {
    nombre: 'Hombre',
    icono: 'man-outline',
    img: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
  },
  {
    nombre: 'Mujer',
    icono: 'woman-outline',
    img: 'https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg',
  },
  {
    nombre: 'Deportivo',
    icono: 'walk-outline',
    img: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
  },
  {
    nombre: 'Casual',
    icono: 'sparkles-outline',
    img: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg',
  },
];

destacados = [
  {
    nombre: 'Urban Sneaker',
    precio: 59.99,
    imagen: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg',
  },
  {
    nombre: 'Street Runner',
    precio: 72.5,
    imagen: 'https://images.pexels.com/photos/19090/pexels-photo.jpg',
  },
];

  constructor(private router: Router) {}

  irATienda() {
    this.router.navigate(['/tienda']);
  }
}
