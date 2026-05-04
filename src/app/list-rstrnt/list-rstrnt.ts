import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-rstrnt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-rstrnt.html',
  styles: [`
    .main-container { padding: 15px; background: #fff; min-height: 100vh; }
    
    /* Buscador superior */
    .search-bar {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 25px;
      margin-bottom: 20px;
      font-size: 14px;
      outline: none;
    }

    .section-title { color: #ff5a60; font-weight: bold; margin-bottom: 15px; }

    /* Tarjetas estilo Mockup */
    .restaurant-card {
      background: white;
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 15px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      cursor: pointer;
    }

    .restaurant-card h3 { margin: 0; font-size: 16px; color: #333; }
    .restaurant-card p { margin: 5px 0 0; font-size: 13px; color: #777; line-height: 1.4; }
  `]
})
export class ListRstrnt {
  private router = inject(Router);

  // Lista basada en tus "Restaurante xxxxx"
  items = [
    { id: 1, texto: 'Restaurante xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx' },
    { id: 2, texto: 'Restaurante xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx' },
    { id: 3, texto: 'Restaurante xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx' }
  ];

  irAReservar() {
    this.router.navigate(['/reservar']);
  }
}