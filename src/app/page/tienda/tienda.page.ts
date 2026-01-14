import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TiendaPage {

  categorias = ['Todos', 'Hombre', 'Mujer', 'Deportivo', 'Casual'];
  categoriaSeleccionada = 'Todos';

  productos = [
    {
      nombre: 'Urban Sneaker',
      categoria: 'Hombre',
      precio: 59.99,
      imagen: 'assets/img/zapato1.jpg',
    },
    {
      nombre: 'Street Runner',
      categoria: 'Deportivo',
      precio: 72.50,
      imagen: 'assets/img/zapato2.jpg',
    },
    {
      nombre: 'Classic Style',
      categoria: 'Casual',
      precio: 65.00,
      imagen: 'assets/img/zapato3.jpg',
    },
    {
      nombre: 'Urban Woman',
      categoria: 'Mujer',
      precio: 68.90,
      imagen: 'assets/img/zapato4.jpg',
    },
  ];

  productosFiltrados = [...this.productos];

  filtrarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;

    if (categoria === 'Todos') {
      this.productosFiltrados = [...this.productos];
    } else {
      this.productosFiltrados = this.productos.filter(
        p => p.categoria === categoria
      );
    }
  }

  buscarProducto(event: any) {
    const texto = event.target.value.toLowerCase();

    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(texto)
    );
  }
}
