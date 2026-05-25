import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestauranteService, Restaurante } from '../services/restaurante';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reservar.html',
  styleUrls: ['./reservar.css']
})
export class Reservar implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private restaurantService = inject(RestauranteService);

  restaurante?: Restaurante;
  tab: number = 1; // Control de tus estados (Restaurante, Información, Lugar)

  ngOnInit() {
    // Capturamos el ID de la URL usando la "foto" del paramMap como dice tu guía
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurante = this.restaurantService.getRestaurantePorId(id);
  }

  confirmarReserva() {
    alert(`¡Tu reserva en ${this.restaurante?.nombre} ha sido confirmada!`);
    this.router.navigate(['/restaurantes']);
  }
}
