/* eslint-disable no-underscore-dangle */
import { Question } from './question.model';

export class Poll {
  name: string;
  questions: Question[];

  constructor() {
    this.name = '';
    this.questions = [];
  }
}
