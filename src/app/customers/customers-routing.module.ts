import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';

const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/:id', component: CustomerFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CustomersRoutingModule { }
