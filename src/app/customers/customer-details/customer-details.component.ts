import {Component, Input, OnInit} from '@angular/core';
import {CustomerModel} from '../_models/customer.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customerDetails: CustomerModel;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit() {
    this.router.navigate(
        ['customers/', this.customerDetails.id]);
  }

}
