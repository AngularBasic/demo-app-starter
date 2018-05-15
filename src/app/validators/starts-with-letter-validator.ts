import {AbstractControl, ValidatorFn} from '@angular/forms';

export function StartsWithLetterValidator(letter: string = 'm'): ValidatorFn {
  return (control: AbstractControl) => {
    const val = control.value;
    if (!val) {
      return {letter: true};
    }
    if (val.substr(0, 1).toLowerCase() !== letter.toLowerCase()) {
      return {letter: {value: val, expected: letter, actual: val.substr(0, 1)}};
    }
    return null;
  };
}
