import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-barra-navegacao',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './barra-navegacao.html',
  styleUrl: './barra-navegacao.css',
})
export class BarraNavegacao {}
