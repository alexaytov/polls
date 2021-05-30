import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollService } from '../services/poll/poll.service';

import { CreatePollPage } from './create-poll.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePollPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, FormsModule],
  providers: []
})
export class CreatePollPageRoutingModule {}
