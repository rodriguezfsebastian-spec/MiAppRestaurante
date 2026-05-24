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
    { id: 3, nombre: 'Cocktail Lounge', texto: 'Bebidas premium, cócteles y un ambiente inigualable.', imagen: 'assets/drinks.jpg', emoji: '🍹', categoria: 'Bar' }
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