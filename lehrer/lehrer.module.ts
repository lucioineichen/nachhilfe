import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LehrerPageRoutingModule } from './lehrer-routing.module';

import { LehrerPage } from './lehrer.page';
import { FavoriteComponentModule } from '../favorit/favorite.module';
import { ReviewsModule } from '../reviews/reviews.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LehrerPageRoutingModule,
    FavoriteComponentModule,
    ReviewsModule,
  ],
  declarations: [LehrerPage],
})
export class LehrerPageModule {}
