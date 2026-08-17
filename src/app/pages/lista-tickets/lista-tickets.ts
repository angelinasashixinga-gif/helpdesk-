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