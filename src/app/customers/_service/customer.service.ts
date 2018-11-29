import { Injectable } from '@angular/core';
import {CustomerModel} from '../_models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: CustomerModel[];

  constructor() {
    this.customers = [{id: 1, name: 'Homer Simpson' }];
  }

  getCustomer(id: number): CustomerModel {
    console.log('get customer', id);
    const list =  this.customers.filter(
      c => c.id === id);
    return list.length > 0 ? list[0] : null;
  }
}
