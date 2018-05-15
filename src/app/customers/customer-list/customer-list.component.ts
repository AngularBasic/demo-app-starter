import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  constructor(private customerService: CustomerService, private router: Router) {}

  private customersSubject = new BehaviorSubject<Customer[]>([]);

  oldCustomers: Customer[] = [];

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    // einfach
    const s1 = this.customerService.getAll().subscribe(customers => {
      this.oldCustomers = customers;
    });
    // "kompliziert"
    const s2 = this.customerService.getAll().subscribe(customers => {
      this.customersSubject.next(customers);
    });
    this.subscriptions.push(s1, s2);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  get customers(): Observable<Customer[]> {
     return this.customersSubject.asObservable();
  }

  addNewCustomer() {
    this.router.navigateByUrl('/customers/0');
  }

}
