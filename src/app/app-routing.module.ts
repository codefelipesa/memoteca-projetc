import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensamentosComponent } from './componentes/pensamentos/pensamentos.component';
import { PensamentoCardComponent } from './componentes/pensamentos/pensamento-card/pensamento-card.component';
import { DeletePensamentosComponent } from './componentes/pensamentos/delete-pensamentos/delete-pensamentos.component';
import { EditarPensamentosComponent } from './componentes/pensamentos/editar-pensamentos/editar-pensamentos.component';

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
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeletePensamentosComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentosComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
