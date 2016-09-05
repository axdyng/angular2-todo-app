import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus',
  pure: false
})

export class StatusPipe implements PipeTransform {
  transform(value: any, statusChange:boolean): any {
    if(value.length === 0) {
      return value;
    }
    else {
      return value.filter( (item:any) => item.status === statusChange )
    }
    // old method
    // let filteredArr:any = [];
    // for(let item of value) {
    //   if(item.status === statusChange) {
    //     filteredArr.push(item);
    //   }
    // }
    // return filteredArr;
  }
}
