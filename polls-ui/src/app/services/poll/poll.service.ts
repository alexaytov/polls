/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll } from 'src/app/model/poll.model';
import { Observable } from 'rxjs';
import { PollResult } from 'src/app/model/poll-result.model';

const POLL_ENDPOINT = 'http://localhost:9090/poll';
// const POLL_ENDPOINT = 'https://aleks.free.beeceptor.com';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  createPoll(poll: Poll): Observable<Object> {
    return this.http.post<Object>(`${POLL_ENDPOINT}`, poll);
  }

  getPollResults(id: string): Observable<PollResult> {
    return this.http.get<PollResult>(`${POLL_ENDPOINT}/${id}/results`);
  }

  submitPoll(id: string): Observable<Object> {
    return this.http.post<Object>(`${POLL_ENDPOINT}/${id}/response`, id);
  }
}