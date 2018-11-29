import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerModel } from '../_models/customer.model';
import {CustomerService} from '../_service/customer.service';

@Component({
  selector: 'app-customer',
  template: `
    <p>Customer: {{ customer?.name }}</p>
    <p>
      customer works!
      Hello
    </p>

    <div></div>

    <app-customer-details [customerDetails]="customer"></app-customer-details>
    <hr/>
    <app-customer-form></app-customer-form>
  `,
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {

  _internalCustomer: CustomerModel;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this._internalCustomer = this.customerService.getCustomer(1);
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }

  get customer(): CustomerModel {
    return this._internalCustomer;
  }
}
