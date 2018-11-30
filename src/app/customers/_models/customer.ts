import {CustomerModel} from './customer.model';
import {FormBuilder, Validators} from '@angular/forms';
import {MinXlettersValidator} from '../../shared/_validators/min.x.letters.validator';

export class Customer implements CustomerModel {
  firstname: string;
  id: number;
  name: string;
  email?: string;
  numberOfOrders: number;
  hobbies: string[];

  static toFormGroup(customer: Customer = new Customer()) {
    const builder = new FormBuilder();
    return builder.group({
        firstname: builder.control(customer.firstname, MinXlettersValidator(2)),
        name: builder.control(customer.name, Validators.required),
        email: builder.control(customer.email)
      }

    );
  }
}
