import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private mockQuestions: Question[] = [
    new Question(1, 'What is your name?', 'text', []),
    new Question(2, 'Which languages do you speak?', 'multiple', [
      { text: 'English', selected: false },
      { text: 'Spanish', selected: false },
      { text: 'French', selected: false }
    ],),
    new Question(3, 'What is your gender?', 'single', [
      { text: 'Male', selected: false },
      { text: 'Female', selected: false },
      { text: 'Other', selected: false }
    ])];

  constructor() { }

  getQuestions(): Observable<Question[]> {
    return of(this.mockQuestions);
  }
}
