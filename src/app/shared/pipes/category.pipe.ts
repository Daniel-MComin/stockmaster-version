import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    switch(value){
      case 'Eletrônico': return 'cable';
      case ' Alimento': return 'code'
    }
    return 'code';
  }

}
