import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Seja Bem Vindo';
  description = 'Imagem de Co-Working';
  url = 'https://casacor.abril.com.br/wp-content/uploads/sites/7/2021/08/urban-airport-08.jpg?quality=80&strip=info&w=1024';

}
