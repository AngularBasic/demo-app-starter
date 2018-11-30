import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appJoin'
})
export class JoinPipe implements PipeTransform {

  transform(value: any, seperator = ', ', second = 1, third = 3): any {
    if (value && Array.isArray(value)) {
      const arr: any[] = value;
      return arr.join(seperator);
    }
    return value;
  }

}
