import { Pipe, PipeTransform } from '@angular/core';

export interface Country {
  nombre: string;
  codigo: string;
  bandera: string;
}

@Pipe({
  name: 'transformar',
})
export class TransformarPipe implements PipeTransform {
  paises: Country[] = [
    {
      nombre: 'Perú',
      codigo: '(+51)',
      bandera: '🇵🇪',
    },
    {
      nombre: 'Colombia',
      codigo: '(+57)',
      bandera: '🇨🇴',
    },
    {
      nombre: 'Chile',
      codigo: '(+56)',
      bandera: '🇨🇱',
    },
    {
      nombre: 'Brasil',
      codigo: '(+55)',
      bandera: '🇧🇷',
    },
    {
      nombre: 'México',
      codigo: '(+52)',
      bandera: '🇲🇽',
    },
    {
      nombre: 'Argentina',
      codigo: '(+54)',
      bandera: '🇦🇷',
    },
    {
      nombre: 'España',
      codigo: '(+34)',
      bandera: '🇪🇸',
    },
  ];

  transform(value: any): string {
    let data = this.paises.find((e) => e.nombre === value);
    return data?.bandera || '🇵🇪';
  }
}
