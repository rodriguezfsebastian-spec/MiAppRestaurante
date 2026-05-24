import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ListRstrnt } from './list-rstrnt/list-rstrnt';
import { Historial } from './historial/historial';
import { Reservar } from './reservar/reservar';
import { RestauranteDetalle } from './restaurante-detalle/restaurante-detalle';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'restaurantes', component: ListRstrnt },
  { path: 'perfil', component: Historial },
  { path: 'reservar', component: Reservar },
  { path: 'restaurante/:id', component: RestauranteDetalle },
  { path: 'reservar/:id', component: Reservar }
];