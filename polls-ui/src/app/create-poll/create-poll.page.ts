import { UtilsService } from './../services/utils.service';
import { MessageResultComponent } from './../message-result/message-result.component';
import { PopoverController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/ban-types */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Poll } from '../model/poll.model';
import { Question } from '../model/question.model';
import { PollService } from '../services/poll/poll.service';
import { Answer } from '../model/answer.model';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.page.html',
  styleUrls: ['./create-poll.page.scss'],
})
export class CreatePollPage implements OnInit {

  poll = new Poll();
  loading;

  constructor(
    private loadingController: LoadingController,
    private popoverController: PopoverController,
    private pollService: PollService,
    private utilsService: UtilsService) { }

  ngOnInit() {
  }

  async createPoll() {
    await this.showLoading();

    this.pollService.createPoll(this.poll)
      .subscribe({
        next: (poll: { [key: string]: any }) => {
          this.hideLoading();
          this.showResult(`/poll/${poll.id}`);
        },
        error: err => {
          this.hideLoading();
          this.showResult(err.message);
        }
      });
  }

  addQuestion() {
    this.poll.questions.push(new Question());
  }

  addAnswer(questionId: number) {
    this.poll.questions[questionId].answers.push(new Answer());
  }

  trackByFn(index, item) {
    return index; // or item
  }

  async showResult(text: string) {
    const params = {
      value: text,
      link: true
    };
    await this.utilsService.showResult(MessageResultComponent, params);
  }

  async showLoading() {
    await this.utilsService.showLoading();
  }

  async hideLoading() {
    await this.utilsService.hideLoading();
  }

}
