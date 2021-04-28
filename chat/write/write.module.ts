import { WriteComponent } from './write.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  declarations: [WriteComponent],
  exports: [WriteComponent],
})
export class WriteComponentModule {}
