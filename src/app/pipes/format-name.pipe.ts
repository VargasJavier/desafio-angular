import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName',
})
export class FormatNamePipe implements PipeTransform {
  transform(value: string, apellido: string = 'Vargas'): string {
    return `${value} ${apellido}`;
  }
}
