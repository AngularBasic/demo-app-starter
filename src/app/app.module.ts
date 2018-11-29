import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App Root
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    CustomersModule,
    AppRoutingModule,
    HomeModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

