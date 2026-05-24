import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteService, Restaurante  } from '../services/restaurante';


@Component({
  selector: 'app-restaurant-detalle',
  standalone: true,
  imports: [], // Añade CommonModule si usas directivas clásicas como *ngIf
  templateUrl: './restaurante-detalle.html',
  styleUrls: ['./restaurante-detalle.css']
})
export class RestauranteDetalle implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private restaurantService = inject(RestauranteService);

  restaurante?: Restaurante;

  ngOnInit() {
    // Capturamos el ID de la URL (ej: /restaurante/1)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurante = this.restaurantService.getRestaurantePorId(id);
  }

  irAReservar() {
    this.router.navigate(['/reservar']);
  }

  volver() {
    this.router.navigate(['/restaurantes']);
  }
}