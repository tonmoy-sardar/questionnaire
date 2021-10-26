import { Injectable } from '@angular/core';
import { FieldModel } from '../models/field.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  getFormGroupObject(fields: FieldModel[]){
    let formGroup = {};
    fields.forEach(field=>{
      formGroup[field.linkId] = new FormControl('')
    });
    return new FormGroup(formGroup);
  }

}