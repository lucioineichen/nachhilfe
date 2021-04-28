import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeinprofilPageRoutingModule } from './meinprofil-routing.module';

import { MeinprofilPage } from './meinprofil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeinprofilPageRoutingModule
  ],
  declarations: [MeinprofilPage]
})
export class MeinprofilPageModule {}
