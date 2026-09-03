import { Component, computed, inject } from '@angular/core';
import { TicketService } from '../service/ticket.service.ts.ts/ticket.service';
import { CartaoEstatistica } from '../../components/cartao-estatistica/cartao-estatistica';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [CartaoEstatistica, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  private servico = inject(TicketService);

  totalTickets = this.servico.totalTickets;

  totalAbertos = this.servico.ticketsAbertos;

  totalCriticos = this.servico.totalCriticos;

  totalProgresso = this.servico.totalCriticos;

  totalResolvidos = this.servico.ticketsResolvidos;

  totalFechados = this.servico.ticketsFechados

  percentagemResolvidos = computed(() => {

    const total = this.totalTickets();

    if (total === 0) {
      return 0;
    }

    return Math.round(
      (this.totalResolvidos() / total) * 100
    );
  });
}