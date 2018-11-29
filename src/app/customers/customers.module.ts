import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerFormComponent,
  ],
  imports: [
    CommonModule,
    // for forms:
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomersModule { }
