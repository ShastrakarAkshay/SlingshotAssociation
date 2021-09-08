import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  convertDateToEPOC(date: any): any {
    var dateObj = new Date(date);
    return dateObj.getTime();
  }

  getDateFromEpoc(timestamp: any): any {
    let dateObj = new Date(timestamp);
    let date =
      dateObj.getMonth() +
      1 +
      '/' +
      dateObj.getDate() +
      '/' +
      dateObj.getFullYear();
    return date;
  }
}
