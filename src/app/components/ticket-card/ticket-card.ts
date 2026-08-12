import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  imports: [],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css',
})
export class TicketCard {
  ticket = {
    id: 1,
    titulo: 'Impressora do 2.º piso não imprime',
    descricao: 'A impressora HP LaserJet apresenta erro ao imprimir.',
    categoria: 'harware',
    tecnico: 'João Manuel'
  };
}
