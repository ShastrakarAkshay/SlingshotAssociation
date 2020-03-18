import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any[] = [1, 2, 3, 4];
  private members: any[] = [
    {
      name: 'Mr. Bipin Chaudhari',
      role: 'President',
      email: 'xyz@gmail.com',
      mobile: '',
      class: 'active',
      pic: './assets/images/members/bipin-chaudhari.jpg'
    },
    {
      name: 'Mr. Vikas Shelke',
      role: 'General Secretory',
      email: 'xyz@gmail.com',
      mobile: '',
      class: '',
      pic: './assets/images/members/vikas-shelke.jpg'
    },
    {
      name: 'Mr. Lalit Dhoke',
      role: 'Vice President',
      email: 'xyz@gmail.com',
      mobile: '',
      class: '',
      pic: './assets/images/members/lalit-dhoke.jpg'
    },
    {
      name: 'Mr. Sham Khemaskar',
      role: 'Treasurer',
      email: 'xyz@gmail.com',
      mobile: '',
      class: '',
      pic: './assets/images/user-pic.jpg'
    },
    {
      name: 'Mr. Pravin Dighade',
      role: 'Join Secretory',
      email: 'xyz@gmail.com',
      mobile: '',
      class: '',
      pic: './assets/images/user-pic.jpg'
    },
    {
      name: 'Mr. Sunil Shinde',
      role: 'Representative',
      email: 'xyz@gmail.com',
      mobile: '',
      class: '',
      pic: './assets/images/user-pic.jpg'
    }
  ];

  districtList: any[] = [];

  constructor(private slingshotService: SlingshotService) {

  }

  ngOnInit() {
  }

}
