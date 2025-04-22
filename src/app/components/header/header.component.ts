import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor() {
    console.log('HeaderComponent cargado');
  }
  @Output() routeChange = new EventEmitter<string>();

  rutas = [
    { id: 'peliculas', nombre: 'Películas' },
    { id: 'series', nombre: 'Series' },
    { id: 'favoritos', nombre: 'Favoritos' },
    { id: 'generos', nombre: 'Géneros' }
  ];

  navigate(route: string) {
    if (route === 'cerrar-sesion') {
      window.location.href = '/';
    } else {
      window.scrollTo(0, 0);
      this.routeChange.emit(route);
    }
  }
}
