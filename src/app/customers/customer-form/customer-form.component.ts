import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Customer} from '../_models/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = Customer.toFormGroup();
  }

  submitUser() {
    console.log('submitted form:', this.form);
  }

}
