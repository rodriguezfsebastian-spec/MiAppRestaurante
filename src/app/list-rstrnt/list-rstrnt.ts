import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
export class ListRstrnt {
  private router = inject(Router);

  items = [
    { id: 1, texto: 'Restaurante xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx' },
    { id: 2, texto: 'Restaurante xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx' },
    { id: 3, texto: 'Restaurante xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx' }
  ];

irADetalle(id: number) {
  this.router.navigate(['/restaurante', id]);
}
}