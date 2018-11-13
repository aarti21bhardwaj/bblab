import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWith'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], term: string): any[] {
    return value.filter((x: any) => x.first_name.toLowerCase().startsWith(term.toLowerCase()))

  }

}
