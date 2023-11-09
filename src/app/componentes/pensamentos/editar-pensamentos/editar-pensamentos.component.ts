import { Component,OnInit } from '@angular/core';
import { ServicePensamentoService } from '../service-pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-editar-pensamentos',
  templateUrl: './editar-pensamentos.component.html',
  styleUrls: ['./editar-pensamentos.component.css']
})
export class EditarPensamentosComponent implements OnInit{
  formulario! : FormGroup;
  
  constructor(
    private service : ServicePensamentoService, // Para fazer a comunicação com o serviço
    private router :  Router, // Para realizar o redirecionamento
    private route : ActivatedRoute, // Fornece informações sobre os paramêtros, rotas e caminhos sobre os cards
    private formBuilder : FormBuilder

  ){}
  
  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)

        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo]
      })
    })
  }


  editarPensamento(){
    this.service.editar(this.formulario.value).subscribe(()=>{
      this.router.navigate(['/listarPensamentos'])
    })
  }
  cancelar(){
    this.router.navigate(['/listarPensamentos'])
    
  }


  habilitarBotao() : string {
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__disabled'
    }
  }

}
