import { UtilsService } from './../services/utils.service';
import { PollService } from './../services/poll/poll.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PollResult } from './../model/poll-result.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.page.html',
  styleUrls: ['./poll-results.page.scss'],
})
export class PollResultsPage implements OnInit {

  pollResult: PollResult;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private utilsService: UtilsService,
    private pollService: PollService) { }

  async ngOnInit() {
    await this.utilsService.showLoading();

    const pollId = this.route.snapshot.paramMap.get('id');

    this.pollService.getPollResults(pollId).subscribe({
      next: (pollResult: PollResult) => {
        this.pollResult = pollResult;
        this.utilsService.hideLoading();
      },
      error: err => {
        console.log(err.message);
        this.utilsService.hideLoading();
        const navigationExtras: NavigationExtras = { state: { message: err.message } };
        this.router.navigate(['error'], navigationExtras);
      }
    });
  }

  test() {
    console.log(this.pollResult.questions);
  }

}
