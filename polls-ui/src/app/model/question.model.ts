import { Answer } from './answer.model';

/* eslint-disable no-underscore-dangle */
export class Question {
  question: string;
  answers: Answer[];

  constructor(text: string = '', answers: Answer[] = []) {
    this.question = text;
    this.answers = answers;
  }
}
