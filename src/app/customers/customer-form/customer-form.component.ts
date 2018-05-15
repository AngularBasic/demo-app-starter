import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Customer} from '../customer';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';
import {CustomerService} from '../customer.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit, OnDestroy {


  form: FormGroup;

  x: number;
  y: Customer;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.form = Customer.toFormGroup();

    const s = this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      map((id: number) => this.customerService.getById(id))
  ).subscribe((customer: Customer) => {
      if (customer) {
        this.form.patchValue(customer);
      }
    });

    this.subscriptions.push(s);



    this.x = 5;
    try {
      this.y.email = 'Hello';
    } catch (e) {
      console.log('err', e);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getClass(): string {
    return this.x < 10 ? 'red' : 'green';
}
  submit() {
    console.log('submit', this.form);
  }
}
