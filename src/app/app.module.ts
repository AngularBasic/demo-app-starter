import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App Root
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoggingInterceptor} from './shared/_interceptors/logging.interceptor';

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
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

