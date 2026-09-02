import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TicketCard } from '../../components/ticket-card/ticket-card';
import { TicketService } from '../service/ticket.service.ts.ts/ticket.service';

@Component({
  selector: 'app-lista-tickets',
  imports: [TicketCard],
  templateUrl: './lista-tickets.html',
  styleUrl: './lista-tickets.css'
})
export class ListaTickets {

  private servico = inject(TicketService);
  private route = inject(ActivatedRoute);

  tickets = this.servico.ticketsReadonly;

  filtro = this.route.snapshot.queryParamMap.get('filtro');

  ticketsFiltrados = computed(() => {

    const todosTickets = this.tickets();

    switch (this.filtro) {

      case 'critica':
        return todosTickets.filter(
          ticket => ticket.prioridade === 'critica'
        );

      case 'aberto':
        return todosTickets.filter(
          ticket => ticket.estado === 'aberto'
        );

      case 'resolvido':
        return todosTickets.filter(
          ticket => ticket.estado === 'resolvido'
        );

      case 'em-progresso':
        return todosTickets.filter(
          ticket => ticket.estado === 'em-progresso'
        );

      case 'total':
      default:
        return todosTickets;
    }
  });
}