export class ResultMessage {
  value: string;
  plainText: string;
  link: boolean;

  constructor(value: string, link = false, plainText = '') {
    this.value = value;
    this.link = link;
    this.plainText = plainText;
  }
}
