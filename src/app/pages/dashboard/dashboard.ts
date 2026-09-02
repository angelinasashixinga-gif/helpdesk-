import { Component, computed, inject } from '@angular/core';
import { TicketService } from '../service/ticket.service/ticket.service';
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
    'em-progresso',
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
      t => t.estado === 'aberto' || t.estado === 'em-progresso'
    )
    .sort(
      (a, b) =>
        a.dataCriacao.getTime() - b.dataCriacao.getTime()
    )
    .slice(0, 3)
); 
ticketsPorTecnico = computed(() => {

  const mapa = new Map<string, number>();

  for (const ticket of this.tickets()) {

    const nome = ticket.tecnico ?? 'Por atribuir';

    mapa.set(
      nome,
      (mapa.get(nome) ?? 0) + 1
    );
  }

  return [...mapa.entries()].map(([nome, total]) => ({
    nome,
    total
  }));
});
}