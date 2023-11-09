import { OnInit, Component} from '@angular/core';
import { Pensamento } from './interface-pensamento';
import { ServicePensamentoService } from './service-pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {
  
  formulario! :FormGroup; // Atributo Obrigatório

  constructor(private service : ServicePensamentoService, 
    private router: Router,
    private formBuilder : FormBuilder
    ){}

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        conteudo: ['',Validators.compose(
          [
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/)
          ])],
        autoria: ['',Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])],
        modelo: ['modelo1',[Validators.required]]
      })
    }

  criarPensamento(){
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
    this.service.criar(this.formulario.value).subscribe(()=>{
      this.router.navigate(['/listarPensamentos'])
    })}
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
