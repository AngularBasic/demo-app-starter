import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App Root
import { AppComponent } from './app.component';
import {CustomersModule} from './customers/customers.module';
import {StartsWithLetterDirective} from './directives/starts-with-letter.directive';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {AppRoutingModuleModule} from './app-routing-module.module';
import {HomeModule} from './home/home.module';
import {AuthGuard} from './guards/auth.guard';


@NgModule({
  imports: [
    BrowserModule,
    CustomersModule,
    HomeModule,
    AppRoutingModuleModule
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
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

