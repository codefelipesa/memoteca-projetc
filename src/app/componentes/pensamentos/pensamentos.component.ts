import { Component} from '@angular/core';
import { Pensamento } from './interface-pensamento';
import { ServicePensamentoService } from './service-pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent {

  pensamento: Pensamento = {
    conteudo :'',
    autoria: '',
    modelo : 'modelo1' 
  }
  
  constructor(private service : ServicePensamentoService, private router: Router){}

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamentos'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamentos'])
  }


}
