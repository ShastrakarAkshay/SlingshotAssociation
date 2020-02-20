import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffilationService {

  registeredDist = ['Yavatmal', 'Wardha', 'Nagpur', 'Pusad', 'Aurangabad', 'Latur'];

  distInfo = {
    distName: 'Yavatmal',
    affiliatedOn: '18 Jan 2020',
    members: [
      {
        name: 'Akshay Shastrakar',
        role: 'President',
        mobile: '9767986750',
        email: 'akshay.shastrakar1@gmail.com',
        fb: 'akshay@fb'
      },
      {
        name: 'Vikas Shelke',
        role: 'Vice-President',
        mobile: '9878654567',
        email: 'vikas.shelke@gmail.com',
        fb: 'vikas@fb'
      }
    ]
  };

  constructor() { }

  getRegisteredDistricts() {
    return this.registeredDist;
  }

  getDistrictInfo() {
    return this.distInfo;
  }


}
