import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questionnaireForm: FormGroup;
  questionnaireList: any = [];
  questionnaireValue: any = [];
  is_submit:boolean

  constructor(
    private questionnaireService: QuestionnaireService
    ) { }

  ngOnInit() {
    this.getQuestionnaire();
  }

  getQuestionnaire()
  {
    this.questionnaireService.getQuestionnaire().subscribe(
      res => {
        console.log(res)
        this.questionnaireForm = new FormGroup({});
        this.questionnaireList = res['item'];
        this.buildFinalForm()
      },
      error => {
        console.log(error)
      }
    )
  }
  buildFinalForm(){
    let group={}    
    this.questionnaireList.forEach(x=>{
      group[x.linkId]= new FormControl()    
    })
    this.questionnaireForm = new FormGroup(group);
  }

  onSubmit() {
    this.is_submit = true;
    this.questionnaireValue= this.questionnaireForm.value;
    console.log(this.questionnaireForm.value);
  }


}
