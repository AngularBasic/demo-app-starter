import { Injectable } from '@angular/core';
import {CustomerModel} from '../_models/customer.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: CustomerModel[];

  private customersSubject: BehaviorSubject<CustomerModel[]> =
    new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.customers = [];
    this._load();
  }

  private _load() {
    this.http.get<CustomerModel[]>('/api/customers')
      .subscribe((result: CustomerModel[]) => {
        console.log('customers loaded', result);
        this.customers = result;

        this.customersSubject.next(result);

      });
  }

  getCustomersAsync(): Observable<CustomerModel[]> {
    return this.customersSubject.asObservable();
  }

  createCustomer(customer: CustomerModel) {
    this.http.post('/api/customers', customer).subscribe(result => {
      this._load();
    });
  }

  updateCustomer(customer: CustomerModel) {
    this.http.put('/api/customers', customer).subscribe(result => {
      this._load();
    });
  }

  getCustomer(id: number): CustomerModel {
    console.log('get customer', id);
    const list =  this.customers.filter(
      c => c.id === id);
    return list.length > 0 ? list[0] : null;
  }
}
