import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): unknown {
    let cyear :any=new Date().getFullYear();
    let byear:any=new Date(value).getFullYear();
    let userAge=cyear-byear;
    return userAge ;

}
}