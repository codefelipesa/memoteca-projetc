import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PensamentosComponent } from './componentes/pensamentos/pensamentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoCardComponent } from './componentes/pensamentos/pensamento-card/pensamento-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletePensamentosComponent } from './componentes/pensamentos/delete-pensamentos/delete-pensamentos.component';
import { EditarPensamentosComponent } from './componentes/pensamentos/editar-pensamentos/editar-pensamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PensamentosComponent,
    ListarPensamentoComponent,
    PensamentoCardComponent,
    DeletePensamentosComponent,
    EditarPensamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
