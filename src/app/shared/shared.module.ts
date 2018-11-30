import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasLettersDirective } from './_directives/has-letters.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [HasLettersDirective],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HasLettersDirective,
    HttpClientModule
  ]
})
export class SharedModule { }
