import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPreguntasPage } from './ver-preguntas.page';

const routes: Routes = [
  {
    path: '',
    component: VerPreguntasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPreguntasPageRoutingModule {}
