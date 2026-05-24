import { Injectable } from '@angular/core';

export interface Restaurante {
  id: number;
  nombre: string;
  texto: string;
  imagen: string;
  emoji: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  // Centralizamos los datos que antes estaban en el componente
  private restaurantes: Restaurante[] = [
    { id: 1, nombre: 'Seafood Express', texto: 'Los mejores mariscos y comida de mar de la ciudad.', imagen: 'assets/seafood.jpg', emoji: '🦞', categoria: 'Mariscos' },
    { id: 2, nombre: 'Burger Place', texto: 'Hamburguesas artesanales con carne premium.', imagen: 'assets/burger.jpg', emoji: '🍔', categoria: 'Rápida' },
    { id: 3, nombre: 'Cocktail Lounge', texto: 'Bebidas premium, cócteles y un ambiente inigualable.', imagen: 'assets/drinks.jpg', emoji: '🍸', categoria: 'Bar' },
    { id: 4, nombre: 'Pizzeria Bella', texto: 'Auténtica pizza italiana al horno de leña con ingredientes seleccionados.', imagen: 'assets/pizza.jpg', emoji: '🍕', categoria: 'Italiana' },
    { id: 5, nombre: 'Sweet Delights', texto: 'Pastelería fina, postres artesanales y el mejor café para tus tardes.', imagen: 'assets/dessert.jpg', emoji: '🍰', categoria: 'Café & Postres' },
    { id: 6, nombre: 'Green & Fresh', texto: 'Opciones saludables, ensaladas personalizadas y opciones 100% veganas.', imagen: 'assets/salad.jpg', emoji: '🥗', categoria: 'Saludable' }
  ];

  constructor() { }

  // Método para obtener todos los restaurantes
  getRestaurantes(): Restaurante[] {
    return this.restaurantes;
  }

  // Método clave para el componente de detalles
  getRestaurantePorId(id: number): Restaurante | undefined {
    return this.restaurantes.find(r => r.id === id);
  }
}