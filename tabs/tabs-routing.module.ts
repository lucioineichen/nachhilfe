import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'nachhilfelehrer',
        loadChildren: () =>
          import('../nachhilfelehrer/nachhilfelehrer.module').then(
            (m) => m.NachhilfelehrerPageModule
          ),
      },
      {
        path: 'infoboard',
        loadChildren: () =>
          import('../infoboard/infoboard.module').then(
            (m) => m.InfoboardPageModule
          ),
      },
      {
        path: 'nachrichten',
        loadChildren: () =>
          import('../nachrichten/nachrichten.module').then(
            (m) => m.NachrichtenPageModule
          ),
      },
      {
        path: 'meinprofil',
        loadChildren: () =>
          import('../meinprofil/meinprofil.module').then(
            (m) => m.MeinprofilPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/nachhilfelehrer',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/nachhilfelehrer',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
