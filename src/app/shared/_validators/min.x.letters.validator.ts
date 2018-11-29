import {AbstractControl, ValidatorFn} from '@angular/forms';

export function MinXlettersValidator(count: number = 1): ValidatorFn {
  return (control: AbstractControl) => {
    const val = control.value;
    if (!val) {
      return {number: true};
    }
    const str = '' + val;
    if (str.length < count ) {
      return {number: {value: val, expected: count, actual: str.length}};
    }
    return null;
  };
}
