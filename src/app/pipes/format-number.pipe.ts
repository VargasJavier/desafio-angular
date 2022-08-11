import { Pipe, PipeTransform } from '@angular/core';
export interface Country {
  nombre: string;
  codigo: string;
  bandera: string;
}

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
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

  transform(value: string, pais: string = 'Perú'): string {
    let data = this.paises.find((e) => e.nombre === pais);
    let phone = [value.slice(0, 3), value.slice(3, 6), value.slice(6, 9)];
    return `${data?.codigo || '(+51)'} ${phone.join(' ')}`;
  }
}
