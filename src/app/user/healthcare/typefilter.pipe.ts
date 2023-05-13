import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(health: any, depertment: string): any {
    if(depertment=="All")
    return health;

    return health.filter((x:any)=>x.depertment == depertment)
  }

 

}
