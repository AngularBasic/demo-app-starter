import {Component, Input, OnInit} from '@angular/core';
import {CustomerModel} from '../_models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customerDetails: CustomerModel;

  constructor() { }

  ngOnInit() {
  }

}
