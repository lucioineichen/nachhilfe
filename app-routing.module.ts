import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'tutor/:id',
    loadChildren: () =>
      import('./lehrer/lehrer.module').then((m) => m.LehrerPageModule),
  },
  {
    path: 'student/:id',
    loadChildren: () =>
      import('./schueler/schueler.module').then((m) => m.SchuelerPageModule),
  },
  {
    path: 'chat/:id',
    loadChildren: () =>
      import('./chat/chat.module').then((m) => m.ChatPageModule),
  },
  {
    path: 'favorit-chat',
    loadChildren: () =>
      import('./favorit-chat/favorit-chat.module').then(
        (m) => m.FavoritChatPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
