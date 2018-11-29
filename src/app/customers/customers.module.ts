import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CustomersRoutingModule} from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {CustomerService} from './_service/customer.service';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerFormComponent,
    CustomerListComponent,
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
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }
