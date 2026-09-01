import { Component, computed, inject } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { CartaoEstatistica } from '../../components/cartao-estatistica/cartao-estatistica';

@Component({
  selector: 'app-dashboard',
  imports: [CartaoEstatistica],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private servico = inject(TicketService);

  tickets = this.servico.ticketsReadonly;

  totalTickets = this.servico.totalTickets;

  totalAbertos = this.servico.ticketsAbertos;

  totalCriticos = this.servico.ticketsCriticos;

  percentagemResolvidos = computed(() => {

    const total = this.tickets().length;

    if (total === 0) {
      return 0;
    }

    const resolvidos = this.tickets()
      .filter(ticket => ticket.estado === 'resolvido')
      .length;

    return Math.round((resolvidos / total) * 100);
  });
  ticketsPorEstado = computed(() => {
  const estados = [
    'aberto',
    'em-processo',
    'resolvido',
    'fechado'
  ];

  return estados.map(estado => ({
    estado,
    total: this.tickets().filter(t => t.estado === estado).length
  }));
});
maisAntigosPorResolver = computed(() =>
  [...this.tickets()]
    .filter(
      t => t.estado === 'aberto' || t.estado === 'em-processo'
    )
    .sort(
      (a, b) =>
        a.dataCriacao.getTime() - b.dataCriacao.getTime()
    )
    .slice(0, 3)
);
}