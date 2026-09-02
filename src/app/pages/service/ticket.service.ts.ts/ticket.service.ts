import { Injectable, computed, signal } from '@angular/core';
import {
  Ticket,
  EstadoTicket,
  TICKETS_MOCK,
} from '../../../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tickets = signal<Ticket[]>([...TICKETS_MOCK]);

  readonly ticketsReadonly = this.tickets.asReadonly();

  readonly totalTickets = computed(() =>
    this.tickets().length
  );

  readonly ticketsAbertos = computed(() =>
    this.tickets().filter(ticket => ticket.estado === 'aberto').length
  );

readonly totalCriticos = computed(() =>
  this.tickets().filter(
    ticket => ticket.prioridade === 'critica'
  ).length
);


  readonly ticketsProgresso = computed(() =>
    this.tickets().filter(ticket => ticket.estado === 'em-progresso').length
  );

  readonly ticketsResolvidos = computed(() =>
    this.tickets().filter(ticket => ticket.estado === 'resolvido').length
  );

  readonly ticketsFechados = computed(() =>
    this.tickets().filter(ticket => ticket.estado === 'fechado').length
  );

  listar(): Ticket[] {
    return this.tickets();
  }

  obterPorId(id: number): Ticket | undefined {
    return this.tickets().find(ticket => ticket.id === id);
  }

  criar(ticket: Ticket): void {
    this.tickets.update(tickets => [...tickets, ticket]);
  }

 atualizarEstado(id: number, estado: EstadoTicket): void {

  this.tickets.update(tickets =>
    tickets.map(ticket =>
      ticket.id === id
        ? {
            ...ticket,
            estado: estado
          }
        : ticket
    )
  );
}

  atribuirTecnico(id: number, nome: string): void {
    this.tickets.update(tickets =>
      tickets.map(ticket =>
        ticket.id === id
          ? { ...ticket, tecnico: nome }
          : ticket
      )
    );
  }

  remover(id: number): void {

  this.tickets.update(tickets =>
    tickets.filter(ticket => ticket.id !== id)
  );
}
}