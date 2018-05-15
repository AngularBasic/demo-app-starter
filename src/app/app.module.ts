import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App Root
import { AppComponent } from './app.component';
import {CustomersModule} from './customers/customers.module';
import {StartsWithLetterDirective} from './directives/starts-with-letter.directive';
import {MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    CustomersModule,
    // MatInputModule,
    // MatFormFieldModule
  ],
  declarations: [
    AppComponent,
  ],
  exports: [
    // MatInputModule,
    // MatFormFieldModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

