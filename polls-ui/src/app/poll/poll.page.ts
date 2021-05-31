import { ResultMessage } from './../model/result-message.model';
import { MessageResultComponent } from './../message-result/message-result.component';
import { UtilsService } from './../services/utils.service';
/* eslint-disable @typescript-eslint/ban-types */
import { PollService } from './../services/poll/poll.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poll } from '../model/poll.model';
import { PollSubmission } from '../model/poll-submission.model';
import { QuestionAnswer } from '../model/question-answer.model';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.page.html',
  styleUrls: ['./poll.page.scss'],
})
export class PollPage implements OnInit {

  poll: Poll;
  error: { [key: string]: any };
  disableSubmit = true;

  // questionId : answerId
  answers: { [key: string]: string } = {};

  constructor(private activatedRoute: ActivatedRoute,
    private pollService: PollService,
    private utilsService: UtilsService) { }

  ngOnInit() {
    const pollId = this.activatedRoute.snapshot.paramMap.get('id');

    this.pollService.getPoll(pollId).subscribe(
      {
        next: poll => {
          this.poll = poll;
        },
        error: err => {
          this.error = err;
        }
      }
    );
  }

  async submit() {
    await this.utilsService.showLoading();

    this.pollService.submitPoll(this.poll.id, this.map(this.answers)).subscribe(
      {
        next: () => {
          this.utilsService.hideLoading();
          this.utilsService.showResult(MessageResultComponent, {
            messages: [new ResultMessage('Successfully submitted poll')],
          });
        },
        error: err => {
          this.utilsService.hideLoading();
          this.utilsService.showResult(MessageResultComponent, {
            messages: [new ResultMessage(err.message, false, 'An error occurred')]
          });
        }
      });
  }

  selectAnswer(questionId: string, answerId: string) {
    this.answers[questionId] = answerId;

    if (this.poll.questions.length === Object.keys(this.answers).length) {
      this.disableSubmit = false;
    }
  }

  map(answers: { [key: string]: string }): PollSubmission {
    const submission = new PollSubmission();

    Object.keys(answers).forEach(questionId => {
      submission.answers.push(new QuestionAnswer(questionId, answers[questionId]));
    });

    return submission;
  }

}
