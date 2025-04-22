import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../services/tmdb.service';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  titulo = 'Bienvenido';
  descripcion = 'Streaming';

  constructor(private tmdbService: TmdbService) {}

  cambiarVista(ruta: string) {
    switch (ruta) {
      case 'peliculas':
        this.titulo = 'Películas';
        this.descripcion = 'No existe vista películas';
        break;
      case 'series':
        this.titulo = 'Series';
        this.descripcion = 'Aquí van las series';
        break;
      case 'favoritos':
        this.titulo = 'Favoritos';
        this.descripcion = 'Tu lista de favoritos';
        break;
      case 'generos':
        this.titulo = 'Géneros';
        this.descripcion = 'Pues los géneros';
        break;
      default:
        this.titulo = 'Bienvenido';
        this.descripcion = 'Streaming';
    }
  }

  ngOnInit() {
    this.tmdbService.getMovies().subscribe((response) => {
      this.movies = response.results;
      console.log('Películas TMDB:', this.movies);
    });
  }
  


  hideCard(index: number): void {
    const card = document.getElementById(`card-${index}`);
    if (card) {
      card.style.display = 'none';
    }
  }

  viewCard(index: number): void {
    const card = document.getElementById(`card-${index}`);
    if (card) {
      card.style.display = 'block';
    }
  }
}