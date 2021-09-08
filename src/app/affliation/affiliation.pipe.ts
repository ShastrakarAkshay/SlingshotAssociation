import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(modalArray: any, searchKey: string): any {
    if (!searchKey) {
      return modalArray;
    }
    modalArray = modalArray.filter((item) => {
      const key = searchKey.toLowerCase().trim();
      if (item.name.toLowerCase().includes(key)) {
        return item;
      }
    });
    return modalArray;
  }
}
