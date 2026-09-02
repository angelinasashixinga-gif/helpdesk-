import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoLegivel',
  standalone: true
})
export class EstadoLegivelPipe implements PipeTransform {

  transform(valor: string): string {

    const mapa: Record<string, string> = {
      'aberto': 'Aberto',
      'em-processo': 'Em Processo',
      'resolvido': 'Resolvido',
      'fechado': 'Fechado'
    };

    return mapa[valor] ?? valor;
  }
}