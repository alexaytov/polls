/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll } from 'src/app/model/poll.model';
import { Observable } from 'rxjs';
import { PollResult } from 'src/app/model/poll-result.model';
import { PollSubmission } from 'src/app/model/poll-submission.model';

const POLL_ENDPOINT = 'http://localhost:9090/poll';
// const POLL_ENDPOINT = 'https://aleks.free.beeceptor.com';
// const POLL_ENDPOINT = 'https://requestinspector.com/inspect/01f6z069f8m2x1j799mdny9wkq';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  createPoll(poll: Poll): Observable<Object> {
    return this.http.post<Object>(`${POLL_ENDPOINT}`, poll);
  }

  getPoll(pollId: string): Observable<Poll> {
    return this.http.get<Poll>(`${POLL_ENDPOINT}/${pollId}`);
  }

  getPollResults(id: string): Observable<PollResult> {
    return this.http.get<PollResult>(`${POLL_ENDPOINT}/${id}/results`);
  }

  submitPoll(id: string, submission: PollSubmission): Observable<Object> {
    return this.http.post<Object>(`${POLL_ENDPOINT}/${id}/submission`, submission);
  }
}
