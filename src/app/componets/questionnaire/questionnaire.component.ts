import { Component, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  form: FormGroup;
  fields: FieldModel;
  constructor(private httpClient: HttpClient,
    private formControlService: FormControlService) { }

  ngOnInit() {
    this.getFields();
  }

  getFields(){
    this.httpClient.get('/assets/questionnaire.json')
    .pipe(map((fields: FieldModel[])=>{
      return fields.map(field=>{
        return new FieldModel(field)
      })
    }))
    .subscribe((fields: any)=>{
      this.fields = fields;
      this.form = this.formControlService.getFormGroupObject(fields);

      console.log(this.form)
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }


}
