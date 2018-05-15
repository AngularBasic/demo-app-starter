import { Injectable } from '@angular/core';
import {Customer} from './customer';

@Injectable()
export class CustomerService {

  constructor() { }

  getById(id: number): Customer {
    return <Customer>{
      name: 'Simpson',
      firstname: 'Homer',
      email: 'homer@simpson.com',
      numberOfOrders: 10,
      id: 1,
      hobbies: ['Beer', 'Duff', 'Sleep'],
      details: 'This is Homer Simpsons Details'
    };
  }
}
