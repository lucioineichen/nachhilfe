import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchuelerPage } from './schueler.page';

const routes: Routes = [
  {
    path: '',
    component: SchuelerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchuelerPageRoutingModule {}
