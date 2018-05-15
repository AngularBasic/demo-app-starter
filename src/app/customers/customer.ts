import {FormBuilder, Validators} from '@angular/forms';
import {StartsWithLetterValidator} from '../validators/starts-with-letter-validator';

export class Customer {
  id: number;
  name: string;
  numberOfOrders = 0;
  email: string;

  firstname?: string;

  static toFormGroup(customer = new Customer()) {
    const builder = new FormBuilder();
    return builder.group({
      id: builder.control(customer.id),
      name: builder.control(customer.name, Validators.required),
      firstname: builder.control(customer.firstname, StartsWithLetterValidator('X')),
      numberOfOrders: builder.control(customer.numberOfOrders, Validators.min(0)),
      email: builder.control(customer.email, [Validators.required, Validators.email])
    });
  }

}
