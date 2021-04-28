import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LehrerPage } from './lehrer.page';

const routes: Routes = [
  {
    path: '',
    component: LehrerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LehrerPageRoutingModule {}
