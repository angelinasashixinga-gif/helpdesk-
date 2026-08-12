/*
main.ts: é o ponto de entrada da aplicação angular.
É reponsável por iniciar a aplicção.

app.config.ts: contém as configurações e providers usados pela aplição.

app.routes.ts: define as rotas e as páginas que podem ser acessadas 
através da navegação da aplicação.

Selector: 'app-root' é o nome da tag do html que represente este componente.
usado no index.html <app-rot></app-root> para o angular saber onde injetar
a aplicação.
*/

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('helpdesk-app');
  
}
