import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RestauranteService, Restaurante } from '../services/restaurante';

@Component({
  selector: 'app-list-rstrnt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-rstrnt.html',
  styles: [`
    .main-container { min-height: 100vh; background-color: #fff; }

    .search-container { border-radius: 25px; overflow: hidden; border: 1px solid #ff5a60; }
    .search-bar-bootstrap { border: none !important; box-shadow: none !important; }
    .input-group-text { border: none !important; color: #ff5a60; }

    .section-title { color: #ff5a60; font-weight: bold; }

    .restaurant-card {
      border: 1px solid #eee !important;
      border-radius: 12px !important;
      transition: transform 0.2s;
      cursor: pointer;
    }

    .restaurant-card:hover {
      transform: translateY(-3px);
      border-color: #ff5a60 !important;
    }

    .card-title { color: #333; }
  `]
})
export class ListRstrnt implements OnInit {
  private router = inject(Router);
  private restaurantService = inject(RestauranteService); // 1. Inyectamos el servicio aquí

  //Declaramos la variable vacía indicando que será un arreglo de Restaurantes
  items: Restaurante[] = []; 

  ngOnInit() {
    //Al iniciar, traemos la información real del servicio
    this.items = this.restaurantService.getRestaurantes();
  }

  irADetalle(id: number) {
    this.router.navigate(['/restaurante', id]);
  }
}
