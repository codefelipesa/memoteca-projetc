import { Component } from '@angular/core';
import { Pensamento } from './interface-pensamento';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent {

  pensamento: Pensamento = {
    id: 1,
    conteudo :'Eu Te Amo Meu Amor',
    autoria: 'Namorado da Kakau',
    modelo : '' 
  }
  

  criarPensamento(){}


}
