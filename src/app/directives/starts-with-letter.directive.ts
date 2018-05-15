import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Customer} from '../customers/customer';
import {StartsWithLetterValidator} from '../validators/starts-with-letter-validator';

@Directive({
  selector: '[appStartsWithLetter]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => StartsWithLetterDirective), multi: true }]
})
export class StartsWithLetterDirective implements Validator {
  validate(c: AbstractControl): ValidationErrors {
    return StartsWithLetterValidator()(c);
  }

  constructor() { }

}
