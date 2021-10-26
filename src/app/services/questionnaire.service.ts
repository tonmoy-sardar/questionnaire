import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(
    private http: HttpClient,
  ) { }

  getQuestionnaire() {
    return this.http.get('/assets/questionnaire.json');
  }
}
