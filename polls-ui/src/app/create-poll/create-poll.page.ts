/* eslint-disable @typescript-eslint/ban-types */
import { PreloadAllModules, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Poll } from '../model/poll.model';
import { Question } from '../model/question.model';
import { PollService } from '../services/poll/poll.service';
import { AnswerResult } from '../model/answer-result.model';
import { Answer } from '../model/answer.model';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { OverlayBaseController } from '@ionic/angular/util/overlay';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.page.html',
  styleUrls: ['./create-poll.page.scss'],
})
export class CreatePollPage implements OnInit {

  poll = new Poll();
  loading;

  constructor(private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
     private pollService: PollService) { }

  ngOnInit() {
  }

  createPoll() {
    this.showLoading();

    console.log(this.poll);
    this.pollService.createPoll(this.poll)
    .subscribe({
      next: (poll: {[key: string]: any}) => {
        this.hideLoading();
        this.showResult(`${this.router.url}/poll/${poll.id}`);
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
    const alert = await this.alertController.create({
      header: 'Result',
      message: text,
      buttons: [
        {
          text: 'ok'
        }
      ]
    });

    await alert.present();
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await this.loading.present();
  }

  async hideLoading() {
    await this.loading.dismiss();
  }

}
