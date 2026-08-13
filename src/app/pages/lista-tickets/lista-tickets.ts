import { Component, signal } from '@angular/core';
import { Ticket, TICKETS_MOCK } from '../../models/ticket.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-tickets',
  imports: [RouterOutlet, ListaTickets],
  templateUrl: './lista-tickets.html',
  styleUrl: './lista-tickets.css',
})
export class ListaTickets {
  tickets = signal<Ticket[]>(TICKETS_MOCK);

  totalTickets = signal(0);

  constructor() {
    this.totalTickets.set(this.tickets().length);
  }
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

 this.tickets.update(lista => [...lista, novoTicket]);
 this.totalTickets.set(this.tickets().length);
}

limparLista() {
  this.tickets.set([]);
  this.totalTickets.set(0);
}

}
