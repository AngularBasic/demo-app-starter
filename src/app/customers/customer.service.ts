import { Injectable } from '@angular/core';
import {Customer} from './customer';

@Injectable()
export class CustomerService {

  constructor() { }

  customers: Customer[] = [
    {
      name: 'Simpson',
      firstname: 'Homer',
      email: 'homer@simpson.com',
      numberOfOrders: 10,
      id: 1,
      hobbies: ['Beer', 'Duff', 'Sleep'],
      details: 'This is Homer Simpsons Details'
    },
    {
      name: 'Simpson',
      firstname: 'Marge',
      email: 'marge@simpson.com',
      numberOfOrders: 10,
      id: 2,
      hobbies: ['??'],
      details: 'This is Marge Simpsons Details'
    }
  ];

  getAll(): Customer[] {
    return this.customers;
  }

  getById(id: number): Customer {
    const filtered = this.customers.filter(c => c.id === id);
    if (filtered.length === 1) {
      return filtered[0];
    }
    return null;
  }
}
