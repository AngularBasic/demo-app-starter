import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {MinXlettersValidator} from '../_validators/min.x.letters.validator';

@Directive({
  selector: '[appHasLetters]',
  providers: [{provide: NG_VALIDATORS,
    useExisting: HasLettersDirective,
    multi: true}]
})
export class HasLettersDirective implements Validator {

  @Input('appHasLetters') appHasLetters = 1;

  constructor() { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return MinXlettersValidator(this.appHasLetters)(control);
  }

}
