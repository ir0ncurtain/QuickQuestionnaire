export interface Option {
  text: string;
  selected: boolean;
}

export class Question {
  id: number;
  text: string;
  type: string;
  options: Option[];
  answer: string;

  constructor(id: number, text: string, type: string, options: Option[]) {
    this.id = id;
    this.text = text;
    this.type = type;
    this.options = options;
    this.answer = '';
  }
}
