import { Pipe, PipeTransform } from '@angular/core';
import { EstadoTicket } from '../models/ticket.model';

@Pipe({
  name: 'estadoLegivel',
  standalone: true
})
export class EstadoLegivelPipe implements PipeTransform {

  transform(estado: EstadoTicket): string {
    switch (estado) {
      case 'aberto':
        return 'Aberto';

      case 'em-progresso':
        return 'Em processo';

      case 'resolvido':
        return 'Resolvido';

      case 'fechado':
        return 'Fechado';

      default:
        return estado;
    }
  }
}