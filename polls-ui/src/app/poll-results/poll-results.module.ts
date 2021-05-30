import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollResultsPageRoutingModule } from './poll-results-routing.module';

import { PollResultsPage } from './poll-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollResultsPageRoutingModule
  ],
  declarations: [PollResultsPage]
})
export class PollResultsPageModule {}
