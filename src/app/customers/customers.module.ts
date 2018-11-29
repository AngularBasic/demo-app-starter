import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CustomersRoutingModule} from './customers-routing.module';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule,
    // for forms:
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomersModule { }
