import { Routes } from '@angular/router';
import { ListaTickets } from './pages/lista-tickets/lista-tickets';
import { TicketCard } from './components/ticket-card/ticket-card';

export const routes: Routes = [

  {
    path: 'tickets',
    component: ListaTickets
  }
];
