import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StartsWithLetterDirective} from '../directives/starts-with-letter.directive';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {CustomersRoutingModule} from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {CustomerService} from './customer.service';
import {JoinPipe} from '../pipes/join.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    CustomersRoutingModule
  ],
  exports: [
    CustomerComponent,
    CustomerFormComponent
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerFormComponent,
    StartsWithLetterDirective,
    CustomerListComponent,
    JoinPipe
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }
