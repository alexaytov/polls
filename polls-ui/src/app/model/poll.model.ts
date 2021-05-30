/* eslint-disable no-underscore-dangle */
import { Question } from './question.model';

export class Poll {
  id: string;
  name: string;
  questions: Question[];

  constructor() {
    this.name = '';
    this.questions = [];
  }
}
