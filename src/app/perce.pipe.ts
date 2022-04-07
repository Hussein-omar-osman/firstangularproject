import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perce',
})
export class PercePipe implements PipeTransform {
  transform(value: number, stock: number, dec: number) {
    return ((value / stock) * 100).toFixed(dec);
  }
}
