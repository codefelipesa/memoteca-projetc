import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../interface-pensamento';
import { ServicePensamentoService } from '../service-pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-pensamentos',
  templateUrl: './delete-pensamentos.component.html',
  styleUrls: ['./delete-pensamentos.component.css']
})
export class DeletePensamentosComponent implements OnInit  {
  pensamento : Pensamento = {
    id : 0,
    conteudo: '',
    autoria: '',
    modelo:''
  }

  constructor(
    private service : ServicePensamentoService, // Para fazer a comunicação com o serviço
    private router :  Router, // Para realizar o redirecionamento
    private route : ActivatedRoute // Fornece informações sobre os paramêtros, rotas e caminhos sobre os cards 
    ){}

    ngOnInit():void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>
      this.pensamento = pensamento)
    }

  excluirPensamento(){
    this.service.excluir(this.pensamento.id!).subscribe(()=>{
      this.router.navigate(['/listarPensamentos'])
    })

    
  }
  cancelar(){
    this.router.navigate(['/listarPensamentos'])
    
  }
}
