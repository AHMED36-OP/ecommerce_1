import { Pipe, PipeTransform } from '@angular/core';
import { Proudect } from './interface/proudect';

@Pipe({
  name: 'searchproudect'
})

// [{}]
export class SearchproudectPipe implements PipeTransform {
  transform(Proudects:Proudect[] ,text:string): Proudect[] {

    return Proudects.filter( (item)=>
      item.title.toLowerCase().includes(text.toLowerCase())
    )
  }

}
