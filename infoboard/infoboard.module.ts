import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoboardPageRoutingModule } from './infoboard-routing.module';

import { InfoboardPage } from './infoboard.page';
import { StudentpostComponent } from './studentpost/studentpost.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InfoboardPageRoutingModule],
  declarations: [InfoboardPage, StudentpostComponent],
})
export class InfoboardPageModule {}
