import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservar',
  imports: [CommonModule, RouterModule],
  templateUrl: './reservar.html',
  styleUrls: ['./reservar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reservar {
    tab: number = 1; // Inicia en la pestaña "Restaurante"
    confirmarReserva() {
      alert('¡Reserva realizada con éxito!');
      this.tab = 1;
    }
}

