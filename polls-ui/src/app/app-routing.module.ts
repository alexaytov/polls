import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-poll',
    loadChildren: () => import('./create-poll/create-poll.module').then(m => m.CreatePollPageModule),
  },
  {
    path: 'poll/:id',
    loadChildren: () => import('./poll/poll.module').then(m => m.PollPageModule)
  },
  {
    path: 'poll-results/:id',
    loadChildren: () => import('./poll-results/poll-results.module').then(m => m.PollResultsPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorPageModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'create-poll' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
