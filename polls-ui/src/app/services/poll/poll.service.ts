/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll } from 'src/app/model/poll.model';
import { Observable } from 'rxjs';
import { PollResult } from 'src/app/model/poll-result.model';
import { PollSubmission } from 'src/app/model/poll-submission.model';

// const POLL_ENDPOINT = 'http://localhost:9090/poll';
const POLL_ENDPOINT = 'http://192.168.56.1:9090/poll'; // emulator configuration

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
    return this.http.get<PollResult>(`${POLL_ENDPOINT}/${id}/result`);
  }

  submitPoll(id: string, submission: PollSubmission): Observable<Object> {
    return this.http.post<Object>(`${POLL_ENDPOINT}/${id}/submission`, submission);
  }
}
