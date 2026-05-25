import { ChangeDetectionStrategy, Component, inject, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import  { GoogleMapsService } from  '../services/google-maps'; //Importamos el servicio de google maps previamente creaado
import { CommonModule } from '@angular/common'; //importa para poder redireccionar con *ngIf
import { RouterModule } from '@angular/router';
import { RestauranteService, Restaurante } from '../services/restaurante';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

declare var google: any;


@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './reservar.html',
  styleUrls: ['./reservar.css']
})
export class Reservar implements OnInit {

  //Inyeccion de dependencias
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private restaurantService = inject(RestauranteService);
  private googleMapsService = inject(GoogleMapsService);
  private cdr = inject(ChangeDetectorRef);

  restaurante?: Restaurante;
  tab: number = 1; // Control de tus estados (Restaurante, Información, Lugar)

  // Buscamos el contenedor del mapa en el HTML
  @ViewChild('mapContainer', { static: false }) mapElement!: ElementRef;
  map: any;

  ngOnInit() {
    // Capturamos el ID de la URL usando la "foto" del paramMap como dice tu guía
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurante = this.restaurantService.getRestaurantePorId(id);
  }
// Función unificada para cambiar de pestaña
  cambiarTab(numeroTab: number) {
    this.tab = numeroTab;

    // Si el usuario va a la pestaña de ubicación (tab 3)
    if (this.tab === 3) {
      // Forzamos a Angular a renderizar el *ngIf="tab === 3" en el HTML inmediatamente
      this.cdr.detectChanges(); 
      
      // Cargamos el script y el mapa dinámicamente
      this.googleMapsService.loadScript()
        .then(() => {
          this.inicializarMapa();
        })
        .catch(err => console.error('Error cargando Google Maps:', err));
    }
  }

  inicializarMapa() {
    // Si el elemento no existe en el DOM, evitamos que rompa la app
    if (!this.mapElement) return;

    // Coordenadas por defecto (Bogotá). 
    // TIP: Si tu interfaz "Restaurante" tiene latitud y longitud, podrías usar: 
    // this.restaurante?.latitud o similar en lugar de coordenadas fijas.
    const coordenadasRestaurante = { lat: 4.6097, lng: -74.0817 };

    const opcionesDelMapa = {
      center: coordenadasRestaurante,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Renderizamos el mapa en el div
    this.map = new google.maps.Map(this.mapElement.nativeElement, opcionesDelMapa);

    // Añadimos el pin del restaurante
    new google.maps.Marker({
      position: coordenadasRestaurante,
      map: this.map,
      title: this.restaurante?.nombre || 'Restaurante seleccionado'
    });
  }

  confirmarReserva() {
    alert(`¡Tu reserva en ${this.restaurante?.nombre} ha sido confirmada!`);
    this.router.navigate(['/restaurantes']);
  }
}