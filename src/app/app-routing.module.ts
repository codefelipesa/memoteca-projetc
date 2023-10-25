import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensamentosComponent } from './componentes/pensamentos/pensamentos.component';
import { PensamentoCardComponent } from './componentes/pensamentos/pensamento-card/pensamento-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamentos',
    pathMatch: 'full'
  },
  {
    path: 'pensamentos',
    component: PensamentosComponent
  },
  {
    path: 'listarPensamentos',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos-mural',
    component: PensamentoCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
