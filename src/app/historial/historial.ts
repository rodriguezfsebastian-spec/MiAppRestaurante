import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrls: ['./historial.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Historial {
  // Estado para el mes activo en el historial
  mesActivo = signal<'Enero' | 'Febrero' | 'Marzo'>('Febrero');

  // Datos de ejemplo para el perfil del usuario
  usuario = {
    nombres: 'xxxxxx',
    apellidos: 'xxxxxx',
    telefono: 'xxxxxx',
    direccion: 'xxxxxx',
  };

  // Datos de ejemplo para los restaurantes favoritos
  favoritos = [
    { nombre: 'xxxxxx' },
    { nombre: 'xxxxxx' },
    { nombre: 'xxxxxx' },
    { nombre: 'xxxxxx' },
  ];

  // Datos de ejemplo para el historial de reservas
  historial = {
    Enero: [{ valor: 'xxxxx' }, { valor: 'xxxxx' }],
    Febrero: [{ valor: 'xxxx' }, { valor: 'xxxx' }],
    Marzo: [{ valor: 'xxx' }],
  };

  // Cambia el mes activo
  cambiarMes(mes: 'Enero' | 'Febrero' | 'Marzo') {
    this.mesActivo.set(mes);
  }
}
