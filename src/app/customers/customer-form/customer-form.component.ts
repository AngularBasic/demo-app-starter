import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
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

  getClass() {
    if (this.myForm.controls.firstname.valid) {
      return 'green';
    }
    return 'red';
  }

}
