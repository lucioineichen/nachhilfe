import { WriteComponentModule } from './../chat/write/write.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritChatPageRoutingModule } from './favorit-chat-routing.module';

import { FavoritChatPage } from './favorit-chat.page';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritChatPageRoutingModule,
    WriteComponentModule,
  ],
  declarations: [FavoritChatPage],
})
export class FavoritChatPageModule {}
