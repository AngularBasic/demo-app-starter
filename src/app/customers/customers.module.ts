import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CustomerComponent],
  declarations: [CustomerComponent, CustomerDetailsComponent]
})
export class CustomersModule { }
