import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StartsWithLetterDirective} from '../directives/starts-with-letter.directive';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    CustomerComponent,
    CustomerFormComponent
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerFormComponent,
    StartsWithLetterDirective
  ]
})
export class CustomersModule { }
