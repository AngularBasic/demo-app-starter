import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
    // this.http.get<Customer[]>('api/customers').subscribe(customers => {
    //   this.customers = customers;
    // });
  }

  customers: Customer[];

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('api/customers');
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('api/customers', customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('api/customers', customer);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`api/customers/${id}`);
    // const filtered = this.customers.filter(c => c.id === id);
    //     // if (filtered.length === 1) {
    //     //   return filtered[0];
    //     // }
    //     // return null;
  }
}
