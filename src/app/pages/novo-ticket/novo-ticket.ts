import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {Categoria,Prioridade,TECNICOS_MOCK} from '../../models/ticket.model';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-novo-ticket',
  imports: [FormsModule],
  templateUrl: './novo-ticket.html',
  styleUrl: './novo-ticket.css'
})
export class NovoTicketComponent {
  formularioValido = computed(() =>
  this.titulo().trim().length >= 5 &&
  this.descricao().trim().length >= 10
);

  private servico = inject(TicketService);
  private router = inject(Router);

  titulo = signal('');
  descricao = signal('');

  prioridade = signal<Prioridade>('media');

  categoria = signal<Categoria>('software');

  tecnico = signal<string | null>(null);

  prioridades: Prioridade[] = [
    'baixa',
    'media',
    'alta',
    'critica'
  ];

  categorias: Categoria[] = [
    'hardware',
    'software',
    'rede',
    'acesso'
  ];

  tecnicos = TECNICOS_MOCK;
  guardar(): void {

  if (!this.formularioValido()) {
    return;
  }

  this.servico.criar({
    titulo: this.titulo(),
    descricao: this.descricao(),
    prioridade: this.prioridade(),
    categoria: this.categoria(),
    estado: 'aberto',
    tecnico: this.tecnico()
  });

  this.router.navigate(['/tickets']);
}
}