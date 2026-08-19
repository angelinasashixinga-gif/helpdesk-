import { Component, signal, computed} from '@angular/core';
import {Ticket, TICKETS_MOCK, EstadoTicket} from '../../models/ticket.model';
import { TicketCard } from '../../components/ticket-card/ticket-card';

@Component({
  selector: 'app-lista-tickets',
  imports: [TicketCard],
  templateUrl: './lista-tickets.html',
  styleUrl: './lista-tickets.css',
})
export class ListaTickets {

  tickets = signal<Ticket[]>(TICKETS_MOCK);

  totalTickets = computed(() => this.tickets().length);

  termoPesquisa = signal('');

  filtroEstado = signal('todos');

  filtroPrioridade = signal('todas');

  filtrarPrioridade(event: Event): void {
    const valor =
    (event.target as HTMLSelectElement).value;

    this.filtroPrioridade.set(valor);
  }

  filtrar(estado: string): void {
    this.filtroEstado.set(estado);
  }
  contarPorEstado(estado: EstadoTicket): number {
  return this.tickets().filter(ticket =>
     ticket.estado === estado).length;
}
limparFiltros(): void {
  this.termoPesquisa.set('');
  this.filtroEstado.set('todos');
  this.filtroPrioridade.set('todas');
}
  

  pesquisar(event: Event): void {
  const valor = (event.target as HTMLInputElement).value;

  this.termoPesquisa.set(valor);
}
ticketsFiltrados = computed(() => {

  const termo = this.termoPesquisa().toLowerCase();
  const estado = this.filtroEstado();
  const prioridade = this.filtroPrioridade();

  return this.tickets().filter(ticket => {

    const correspondePesquisa =
      ticket.titulo.toLowerCase().includes(termo) ||
      ticket.descricao.toLowerCase().includes(termo);

    const correspondeEstado =
      estado === 'todos' ||
      ticket.estado === estado;

    const correspondePrioridade =
      prioridade === 'todas' ||
      ticket.prioridade === prioridade;

    return correspondePesquisa &&
           correspondeEstado &&
           correspondePrioridade;
  });

});
totalAbertos = computed(() =>
  this.tickets().filter(
    ticket => ticket.estado === 'aberto'
  ).length
);

totalCriticos = computed(() =>
  this.tickets().filter(
    ticket => ticket.prioridade === 'critica'
  ).length
);

percentagemResolvidos = computed(() => {

  const total = this.tickets().length;

  if (total === 0) {
    return 0;
  }

  const resolvidos = this.tickets().filter(
    ticket => ticket.estado === 'resolvido'
  ).length;

  return Math.round((resolvidos / total) * 100);
});

ticketsSemTecnico = computed(() =>
  this.tickets().filter(
    ticket => ticket.tecnico === null
  ).length
);

  adicionarTicket() {

    const novoTicket: Ticket = {
      id: this.tickets().length + 1,
      titulo: 'Novo ticket de teste',
      descricao: 'Ticket criado através do botão.',
      prioridade: 'baixa',
      estado: 'aberto',
      tecnico: null,
      categoria: 'software',
      dataCriacao: new Date()
    };

    this.tickets.update(lista => [
      ...lista,
      novoTicket
    ]);

    console.log(this.tickets)
    // Atualiza o total
  }

  limparLista() {

    this.tickets.set([]);

    // Atualiza o total para zero
  }

  alterarEstado(id: number, novoEstado: EstadoTicket):
   void {

    this.tickets.update(lista =>
      lista.map(ticket =>
        ticket.id === id
          ? { ...ticket, estado: novoEstado }
          : ticket
      )
    );
  }

  removerTicket(id: number): void {

    this.tickets.update(lista =>
      lista.filter(ticket => ticket.id !== id)
    );

   
  }
}