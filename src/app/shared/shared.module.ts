import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasLettersDirective } from './_directives/has-letters.directive';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JoinPipe } from './_pipes/join.pipe';

@NgModule({
  declarations: [
    HasLettersDirective,
    JoinPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    HasLettersDirective,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    JoinPipe,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
