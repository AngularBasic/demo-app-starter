import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasLettersDirective } from './_directives/has-letters.directive';

@NgModule({
  declarations: [HasLettersDirective],
  imports: [
    CommonModule
  ],
  exports: [HasLettersDirective]
})
export class SharedModule { }
