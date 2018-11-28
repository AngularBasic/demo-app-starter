import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomersModule { }
