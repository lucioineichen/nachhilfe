import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritChatPage } from './favorit-chat.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritChatPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritChatPageRoutingModule {}
