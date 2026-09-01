import { Routes } from '@angular/router';
import { ListaTickets } from './pages/lista-tickets/lista-tickets';
import { TicketCard } from './components/ticket-card/ticket-card';
import { Dashboard } from './pages/dashboard/dashboard';
import { NovoTicket } from './pages/novo-ticket/novo-ticket';
import { DetalheTicket } from './pages/detalhe-ticket/detalhe-ticket';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';

export const routes: Routes = [

  // {
  //   path: 'tickets',
  //   component: ListaTickets
  // }
   {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },



  {
    path: 'tickets',
    component: TicketCard,
    title: 'Tickets'
    
  },

  {
    path: 'tickets/novo',
    component: NovoTicket,
    title: 'Novo Ticket'
  },

  {
    path: 'tickets/:id',
    component: DetalheTicket,
    title: 'Detalhe do Ticket'
  },

  {
    path: '**',
    component: NaoEncontrado,
    title: 'Página não encontrada'
  },
  {
    path: '**',
    component: Dashboard,
  },

];
