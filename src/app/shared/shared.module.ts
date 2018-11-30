import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasLettersDirective } from './_directives/has-letters.directive';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HasLettersDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    HasLettersDirective,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
