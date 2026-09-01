import { Injectable, computed, signal } from '@angular/core';
import { Ticket, EstadoTicket, TECNICOS_MOCK } from '../../../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tickets = signal<Ticket[]>([
  
  ]);

  readonly ticketsReadonly = this.tickets.asReadonly();

  readonly totalTickets = computed(() =>
    this.tickets().length
  );

  readonly ticketsAbertos = computed(() =>
    this.tickets().filter(t => t.estado === 'aberto').length
  );

  readonly ticketsEmProcesso = computed(() =>
    this.tickets().filter(t => t.estado === 'em-progresso').length
  );

  readonly ticketsResolvidos = computed(() =>
    this.tickets().filter(t => t.estado === 'resolvido').length
  );

  readonly ticketsFechados = computed(() =>
    this.tickets().filter(t => t.estado === 'fechado').length
  );

  readonly ticketsCriticos = computed(() =>
    this.tickets().filter(t => t.prioridade === 'critica').length
  );

  listar(): Ticket[] {
    return this.tickets();
  }

  obterPorId(id: number) {
    return this.tickets().find(ticket => ticket.id === id);
  }

  criar(ticket: Ticket): void {
    this.tickets.update(tickets => [
      ...tickets,
      ticket
    ]);
  }

  atualizarEstado(id: number, estado: EstadoTicket): void {
    this.tickets.update(tickets =>
      tickets.map(ticket =>
        ticket.id === id
          ? { ...ticket, estado }
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