import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer = {
    name: 'Simpson, Homer',
    details: 'Homers Details',
    hobbies: ['Beer', 'Duff', 'Sleep']
  };

  constructor() { }

  ngOnInit() {
  }

}
