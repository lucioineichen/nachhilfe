import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchuelerPageRoutingModule } from './schueler-routing.module';

import { SchuelerPage } from './schueler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchuelerPageRoutingModule
  ],
  declarations: [SchuelerPage]
})
export class SchuelerPageModule {}
