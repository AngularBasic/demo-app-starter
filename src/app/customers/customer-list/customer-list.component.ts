import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from '../_service/customer.service';
import {Observable} from 'rxjs/internal/Observable';
import {CustomerModel} from '../_models/customer.model';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subscription} from 'rxjs/internal/Subscription';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  constructor(private customerService: CustomerService) { }

  private customersSubject: BehaviorSubject<CustomerModel[]> =
    new BehaviorSubject<CustomerModel[]>([]);

  private unfilteredCustomersSubject: BehaviorSubject<CustomerModel[]> =
    new BehaviorSubject<CustomerModel[]>([]);

  private subscriptions: Subscription[] = [];
  private searchSubject = new BehaviorSubject<string>('');

  searchTerm = new FormControl();

  ngOnInit() {

    const s = this.customerService.getCustomersAsync().subscribe(customers => {
      console.log('list-component gets customers', customers);
      this.unfilteredCustomersSubject.next(customers);
      this.customersSubject.next(customers);
    });
    this.subscriptions.push(s);
    const s2 = this.searchTerm.valueChanges
      .pipe(
        debounceTime(250)
      )
      .subscribe(newValue => {
        console.log('seearch', newValue);
        const list = this.unfilteredCustomersSubject.value;
        const filteredList = list.filter(f => f.firstname.includes(newValue) || f.name.includes(newValue));
        this.customersSubject.next(filteredList);
        this.searchSubject.next(newValue);
    });
    this.subscriptions.push(s2);
  }

  get customers(): Observable<CustomerModel[]> {
    return this.customersSubject.asObservable();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => {
      s.unsubscribe();
    });
  }

}
