import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoboardPage } from './infoboard.page';

const routes: Routes = [
  {
    path: '',
    component: InfoboardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoboardPageRoutingModule {}
