import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./create-poll/create-poll.module').then(m => m.CreatePollPageModule),
  },
  {
    path: 'poll/:id',
    loadChildren: () => import('./poll/poll.module').then( m => m.PollPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
