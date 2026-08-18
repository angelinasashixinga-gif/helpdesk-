import { Component, input, output } from '@angular/core';
import { Ticket, EstadoTicket } from '../../models/ticket.model';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-ticket-card',
  imports: [NgClass],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css',
})
export class TicketCard {

  ticket = input.required<Ticket>();

  mostrarDetalhes = input(false);

  estadoAlterado = output<EstadoTicket>();

  ticketRemovido = output<number>();


  proximoEstado(): void {

    const fluxo: EstadoTicket[] = [
      'aberto',
      'em-progresso',
      'resolvido',
      'fechado'
    ];

    const atual = fluxo.indexOf(this.ticket().estado);

    const seguinte =
      fluxo[Math.min(atual + 1, fluxo.length - 1)];

    console.log('Novo estado:', seguinte);

    this.estadoAlterado.emit(seguinte);
  }


  remover(): void {

    console.log('ELIMINAR CLICADO');

    this.ticketRemovido.emit(this.ticket().id);
  }

}