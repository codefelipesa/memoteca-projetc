import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.css']
})
export class PensamentoCardComponent {

  pensamento = {
    conteudo : 'Eu amo minha namorada',
    autoria: 'Namorado de Kakau',
    modelo: 'modelo2'
  }

}
