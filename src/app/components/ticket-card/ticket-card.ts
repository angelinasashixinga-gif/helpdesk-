import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  Ticket,
  EstadoTicket
} from '../../models/ticket.model';

import { EstadoLegivelPipe } from '../../pipes/estado-legivel-pipe';
import { TicketService } from '../../pages/service/ticket.service.ts.ts/ticket.service';

@Component({
  selector: 'app-ticket-card',
  imports: [
    CommonModule,
    RouterLink,
    EstadoLegivelPipe
  ],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css'
})
export class TicketCard {

  private servico = inject(TicketService);

  ticket = input.required<Ticket>();

  mostrarDetalhes = input(true);

  proximoEstado(): void {

    const ticketAtual = this.ticket();

    let novoEstado: EstadoTicket;

    switch (ticketAtual.estado) {

      case 'aberto':
        novoEstado = 'em-progresso';
        break;

      case 'em-progresso':
        novoEstado = 'resolvido';
        break;

      case 'resolvido':
        novoEstado = 'fechado';
        break;

      case 'fechado':
        return;

    }

    this.servico.atualizarEstado(
      ticketAtual.id,
      novoEstado
    );
  }

  remover(): void {

    const ticketAtual = this.ticket();

    this.servico.remover(ticketAtual.id);
  }
}