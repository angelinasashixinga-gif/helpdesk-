import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../service/ticket.service.ts.ts/ticket.service';
import { DatePipe } from '@angular/common';
import { EstadoLegivelPipe } from '../../pipes/estado-legivel-pipe';

@Component({
  selector: 'app-detalhe-ticket',
  imports: [
    DatePipe,
    EstadoLegivelPipe
  ],
  templateUrl: './detalhe-ticket.html',
  styleUrl: './detalhe-ticket.css'
})
export class DetalheTicketComponent {

  private rota = inject(ActivatedRoute);

  private router = inject(Router);

  private servico = inject(TicketService);

  ticket = this.servico.obterPorId(
    Number(this.rota.snapshot.paramMap.get('id'))
  );

  voltar(): void {
    this.router.navigate(['/tickets']);
  }
}