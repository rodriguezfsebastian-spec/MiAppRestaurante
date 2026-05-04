import { Component, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="bottom-nav">
      <!-- Usamos una clase dinámica para pintar de rosa el botón activo -->
      <div class="nav-item" 
           [class.active]="currentRoute === '/perfil'" 
           (click)="navegar('perfil')">
        Perfil
      </div>
      
      <div class="nav-item" 
           [class.active]="currentRoute === '/restaurantes'" 
           (click)="navegar('restaurantes')">
        Restaurantes
      </div>
      
      <div class="nav-item" 
           [class.active]="currentRoute === '/reservar'" 
           (click)="navegar('reservar')">
        Reservar
      </div>
    </nav>
  `,
styles: [`
.bottom-nav {
    display: flex !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 65px;
    background-color: #f1f1f1;
    z-index: 999999;
    border-top: 1px solid #ddd;
  }
    .nav-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #888;
      font-size: 14px;
      cursor: pointer;
      font-family: Arial, sans-serif;
    }
    .active {
      color: #ff5a60 !important;
      font-weight: bold;
    }
  `]
})
export class Navbar {
  private router = inject(Router);
  currentRoute: string = '';

  constructor() {
    // Detecta en qué página estamos para iluminar el botón correcto
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  navegar(ruta: string) {
    this.router.navigate([`/${ruta}`]);
  }
}