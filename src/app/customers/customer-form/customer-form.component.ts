import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {Customer} from '../_models/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myForm = Customer.toFormGroup();
  }

  submitUser() {
    console.log('submitted myForm:', this.myForm);
  }

  getClass(obj: AbstractControl) {
    // console.log('obj', obj);
    if (obj.valid) {
      return 'green';
    }
    return 'red';
  }

}
