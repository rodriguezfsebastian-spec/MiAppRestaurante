import { Component, computed, inject, signal, ChangeDetectorRef } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Navbar } from './navbar/navbar'; 
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); // Ayuda a forzar la actualización visual
  
  // Usamos una variable booleana simple
  mostrarNavbar: boolean = false;

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Log para que veas en consola qué ruta está detectando
        console.log('Ruta actual:', event.urlAfterRedirects);
        
        const url = event.urlAfterRedirects;
        // Si la URL contiene 'login' o está vacía, ocultamos (false)
        this.mostrarNavbar = !(url === '/' || url === '/login' || url === '' || url.includes('login'));
        
        // Forzamos a Angular a que refresque la pantalla
        this.cdr.detectChanges();
      }
    });
  }
}