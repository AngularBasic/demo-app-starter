import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {combineLatest} from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  constructor(private customerService: CustomerService, private router: Router) {}

  private customersSubject = new BehaviorSubject<Customer[]>([]);
  private searchSubject = new BehaviorSubject<string>('');

  oldCustomers: Customer[] = [];

  private subscriptions: Subscription[] = [];

  searchTerm = new FormControl();

  ngOnInit() {
    // einfach
    const s1 = this.customerService.getAll().subscribe(customers => {
      this.oldCustomers = customers;
    });
    // "kompliziert"
    const s2 = this.customerService.getAll().subscribe(customers => {
      this.customersSubject.next(customers);
    });
    this.searchTerm.valueChanges.pipe(
      debounceTime(250)
    ).subscribe(text => {
      console.log('text', text);
      this.searchSubject.next(text);
    });
    this.subscriptions.push(s1, s2);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  get customers(): Observable<Customer[]> {
     // return this.customersSubject.asObservable();
    return combineLatest(this.searchSubject, this.customersSubject, (searchText: string, customers: Customer[]) => {
      return customers.filter(cust => !searchText || cust.name.toLowerCase().includes(searchText.toLowerCase()));
    });
  }

  addNewCustomer() {
    this.router.navigateByUrl('/customers/0');
  }

}
