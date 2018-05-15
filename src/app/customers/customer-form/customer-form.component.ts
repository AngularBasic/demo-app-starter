import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  form: FormGroup;

  x: number;
  y: Customer;

  constructor() { }

  ngOnInit() {
    this.form = Customer.toFormGroup();
    this.x = 5;
    try {
      this.y.email = 'Hello';
    } catch (e) {
      console.log('err', e);
    }
  }

  getClass(): string {
    return this.x<10 ? 'red' : 'green';
}
  submit() {
    console.log('submit', this.form);
  }
}
