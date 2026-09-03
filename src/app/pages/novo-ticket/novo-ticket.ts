import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TicketService } from '../service/ticket.service.ts.ts/ticket.service';
import { Ticket, Prioridade,Categoria } from '../../models/ticket.model';

@Component({
  selector: 'app-novo-ticket',
  imports: [FormsModule],
  templateUrl: './novo-ticket.html',
  styleUrl: './novo-ticket.css'
})
export class NovoTicketComponent {

  private servico = inject(TicketService);
  private router = inject(Router);

  titulo = '';
  descricao = '';
  prioridade: Prioridade = 'media';
  categoria: Categoria = 'hardware';

  criarTicket(): void {

    if (!this.titulo.trim() || !this.descricao.trim()) {
      return;
    }

    const novoTicket: Ticket = {
      id: Date.now(),
      titulo: this.titulo,
      descricao: this.descricao,
      prioridade: this.prioridade,
      categoria: this.categoria,
      estado: 'aberto',
      tecnico: '',
      dataCriacao: new Date()
    };

    this.servico.criar(novoTicket);

    this.router.navigate(['/tickets']);
  }

  cancelar(): void {
    this.router.navigate(['/tickets']);
  }
}