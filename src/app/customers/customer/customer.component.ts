import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerModel } from '../_models/customer.model';

@Component({
  selector: 'app-customer',
  template: `
  <p>Customer: {{ customer?.name }}</p>

  `,
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {


  customer: CustomerModel;

  constructor() {
    this.customer = { id: 1, name: "Homer Simpson" };
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }
}
