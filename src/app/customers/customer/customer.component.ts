import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  // customer = {
  //   name: 'Simpson, Homer',
  //   details: 'Homers Details',
  //   hobbies: ['Beer', 'Duff', 'Sleep']
  // };

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  get customer(): Customer {
    return this.customerService.getById(0);
  }

}
