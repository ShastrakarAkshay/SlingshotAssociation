import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  organizationMembers: [
    {
      name: 'Mr. Vikas Shelke',
      role: 'General Secretory',
      mobile: '9767986750',
      email: 'akshay.shastrakar1@gmail.com',
      fb: 'akshay@fb'
    },
    {
      name: 'Mr. Bipin Chaudhari',
      role: 'President',
      mobile: '9767986750',
      email: 'akshay.shastrakar1@gmail.com',
      fb: 'akshay@fb'
    },
    {
      name: 'Mr. Lalit Dhoke',
      role: 'Vice President',
      mobile: '9767986750',
      email: 'akshay.shastrakar1@gmail.com',
      fb: 'akshay@fb'
    },
    {
      name: 'Mr. Sham Khemaskar',
      role: 'Treasurer',
      mobile: '9767986750',
      email: 'akshay.shastrakar1@gmail.com',
      fb: 'akshay@fb'
    },
    {
      name: 'Mr. Pravin Dighade',
      role: 'Joint Secretory',
      mobile: '9767986750',
      email: 'akshay.shastrakar1@gmail.com',
      fb: 'akshay@fb'
    },
    {
      name: 'Mr. Sunil Shinde',
      role: 'Representative',
      mobile: '9767986750',
      email: 'akshay.shastrakar1@gmail.com',
      fb: 'akshay@fb'
    }
  ];

  constructor() { }
}
