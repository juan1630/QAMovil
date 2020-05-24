import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPreguntasPageRoutingModule } from './ver-preguntas-routing.module';

import { VerPreguntasPage } from './ver-preguntas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPreguntasPageRoutingModule
  ],
  declarations: [VerPreguntasPage]
})
export class VerPreguntasPageModule {}
