import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoLegivel',
  standalone: true
})
export class EstadoLegivelPipe implements PipeTransform {

  private mapa: Record<string, string> = {
    'aberto': 'Aberto',
    'em-progresso': 'Em Progresso',
    'resolvido': 'Resolvido',
    'fechado': 'Fechado'
  };

  transform(valor: string): string {
    return this.mapa[valor] ?? valor;
  }
}