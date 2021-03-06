import { MessageResultComponent } from './../message-result/message-result.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePollPageRoutingModule } from './create-poll-routing.module';
import { CreatePollPage } from './create-poll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePollPageRoutingModule
  ],
  declarations: [
    CreatePollPage,
    MessageResultComponent
  ],
  providers: [
  ]
})
export class CreatePollPageModule { }
