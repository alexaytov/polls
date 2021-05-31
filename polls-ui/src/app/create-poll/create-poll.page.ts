/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/ban-types */
import { ResultMessage } from './../model/result-message.model';
import { UtilsService } from './../services/utils.service';
import { MessageResultComponent } from './../message-result/message-result.component';
import { Component, OnInit } from '@angular/core';
import { Poll } from '../model/poll.model';
import { Question } from '../model/question.model';
import { PollService } from '../services/poll/poll.service';
import { Answer } from '../model/answer.model';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.page.html',
  styleUrls: ['./create-poll.page.scss'],
})
export class CreatePollPage implements OnInit {

  poll = new Poll();
  loading;
  createdPoll = false;
  createdPollName: string;
  createdPollId: string;

  constructor(
    private pollService: PollService,
    private utilsService: UtilsService) { }

  ngOnInit() {
  }

  async createPoll() {
    if (!this.isValidPoll(this.poll)) {
      this.showError('A poll has to have at least one question with at least one answer and don\'t forget an interesting name');
      return;
    }

    await this.showLoading();

    this.pollService.createPoll(this.poll)
      .subscribe({
        next: (poll: { [key: string]: any }) => {
          this.hideLoading();
          this.utilsService.showInfoAlert('Success', `Poll ${poll.name} successfully created`);
          this.showPollData(poll.id, poll.name);
        },
        error: err => {
          this.hideLoading();
          this.showError(err.message);
        }
      });
  }

  isValidPoll(poll: Poll): boolean {
    if (!poll.name || !poll.questions || poll.questions.length === 0) {
      return false;
    }

    let valid = true;
    poll.questions.forEach(q => {
      if (!q.answers || q.answers.length === 0) {
        valid = false;
        return;
      }
    });

    return valid;
  }

  writeToClipboard = async (text) => {
    await Clipboard.write({
      string: text
    });
  };

  copyPollToClipboard(pollId: string) {
    this.writeToClipboard(`${this.getBasePath()}/poll/${pollId}`);
  }

  copyPollResultsToClipboard(pollId: string) {
    this.writeToClipboard(`${this.getBasePath()}/poll-results/${pollId}`);
  }

  getBasePath(): string {
    return window.location.origin;
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

  async showError(error: string, plainTextErr: string = '') {
    await this.utilsService.showResult(MessageResultComponent, {
      messages: [new ResultMessage(error, false, plainTextErr)]
    });
  }

  showPollData(pollId: string, pollName: string) {
    this.createdPoll = true;
    console.log(pollName);
    console.log(pollId);
    this.createdPollName = pollName;
    this.createdPollId = pollId;
  }

  async showLoading() {
    await this.utilsService.showLoading();
  }

  async hideLoading() {
    await this.utilsService.hideLoading();
  }

}
