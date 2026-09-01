import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cartao-estatistica',
  imports: [],
  templateUrl: './cartao-estatistica.html',
  styleUrl: './cartao-estatistica.css'
})
export class CartaoEstatistica {

  titulo = input<string>('');
  valor = input<number>(0);
  cor = input<string>('#3498db');
  icone = input<string>('');
}