import {CustomerModel} from './customer.model';
import {FormBuilder, Validators} from '@angular/forms';

export class Customer implements CustomerModel {
  firstname: string;
  id: number;
  name: string;

  static toFormGroup(customer: Customer = new Customer()) {
    const builder = new FormBuilder();
    return builder.group({
        firstname: builder.control(customer.firstname),
        name: builder.control(customer.name, Validators.required)
      }

    );
  }
}
