import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollResultsPage } from './poll-results.page';

const routes: Routes = [
  {
    path: '',
    component: PollResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollResultsPageRoutingModule {}
