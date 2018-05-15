import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appJoin'
})
export class JoinPipe implements PipeTransform {

  transform(value: any, seperator = ', '): any {
    if (value && Array.isArray(value)) {
      return value.join(seperator);
    }
    return '';
  }

}
