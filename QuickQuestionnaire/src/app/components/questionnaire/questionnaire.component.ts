import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questions: Question[] = [];
  answers: Answer[] = [];

  constructor(
    private questionnaireService: QuestionnaireService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionnaireService.getQuestions()
      .subscribe(questions => {
        this.questions = questions;
        this.answers = questions.map(q => new Answer());
        this.changeDetector.detectChanges();
      });
  }
}
