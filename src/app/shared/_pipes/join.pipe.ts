import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appJoin'
})
export class JoinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && Array.isArray(value)) {
      const arr: any[] = value;
      return arr.join(', ');
    }
    return value;
  }

}
