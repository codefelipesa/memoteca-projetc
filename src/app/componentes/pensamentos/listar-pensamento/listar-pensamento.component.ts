import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../interface-pensamento';
import { ServicePensamentoService } from '../service-pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
    listaPensamentos : Pensamento[] =  []

    constructor(private service :  ServicePensamentoService){}

    ngOnInit(): void {
      this.service.listar().subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
      } )
    }

   }
