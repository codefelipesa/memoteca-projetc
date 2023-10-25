import { Component, Input } from '@angular/core';
import { Pensamento } from '../interface-pensamento';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.css']
})
export class PensamentoCardComponent {

  @Input() pensamento : Pensamento = {
    id: 1,
    conteudo : 'Eu amo minha namorada',
    autoria: 'Namorado de Kakau',
    modelo: 'modelo2'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    } 
    return 'pensamento-p'
  }

}
