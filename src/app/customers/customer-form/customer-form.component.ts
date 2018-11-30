import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {Customer} from '../_models/customer';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {CustomerService} from '../_service/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
          private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this.myForm = Customer.toFormGroup();
    this.route.paramMap.pipe(
        map((value: ParamMap) => Number(value.get('id'))),
      )
      .subscribe((value: number) => {
        console.log('route', value);
        const id = value;
        // const customer = this.customerService.getCustomer(id);
        this.customerService.getCustomerAsync(id).subscribe(asyncCustomer => {
          this.myForm = Customer.toFormGroup(<Customer>asyncCustomer);

      });
    });
  }

  submitUser() {
    console.log('submitted myForm:', this.myForm);
  }

  getClass(obj: AbstractControl) {
    // console.log('obj', obj);
    if (obj.valid) {
      return 'green';
    }
    return 'red';
  }

}
