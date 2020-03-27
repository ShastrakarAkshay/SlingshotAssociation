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
      mobile: '9404141861',
      class: 'active',
      pic: './assets/images/members/bipin-chaudhari.jpg'
    },
    {
      name: 'Mr. Lalit Dhoke',
      role: 'Vice President',
      email: 'xyz@gmail.com',
      mobile: '9588430982',
      class: '',
      pic: './assets/images/members/lalit-dhoke.jpg'
    },
    {
      name: 'Mr. Manikraj Landge',
      role: 'Vice President',
      email: 'xyz@gmail.com',
      mobile: '9004409664',
      class: '',
      pic: './assets/images/user-pic-default.png'
    },
    {
      name: 'Mr. Vikas Shelke',
      role: 'General Secretory',
      email: 'vikasshelke313918@gmail.com',
      mobile: '8432146555',
      class: '',
      pic: './assets/images/members/vikas-shelke.jpg'
    },
    {
      name: 'Mr. Sham Khemaskar',
      role: 'Treasurer',
      email: 'xyz@gmail.com',
      mobile: '9823545618',
      class: '',
      pic: './assets/images/user-pic-default.png'
    },
    {
      name: 'Mr. Pravin Dighade',
      role: 'Join Secretory',
      email: 'xyz@gmail.com',
      mobile: '8830993120',
      class: '',
      pic: './assets/images/members/pravin-dighade.jpg'
    },
    {
      name: 'Mr. Suraj Kadukar',
      role: 'Representative',
      email: 'xyz@gmail.com',
      mobile: '9370155501',
      class: '',
      pic: './assets/images/members/suraj-kadukar.jpg'
    },
    {
      name: 'Mr. Sunil Shinde',
      role: 'Representative',
      email: 'xyz@gmail.com',
      mobile: '8888424233',
      class: '',
      pic: './assets/images/members/sunil-shinde.jpg'
    },
    {
      name: 'Mr. Giriraj Gupta',
      role: 'Representative',
      email: 'xyz@gmail.com',
      mobile: '9049228777',
      class: '',
      pic: './assets/images/members/giriraj-gupta.jpg'
    },
    {
      name: 'Miss Snehal Khantade',
      role: 'Member',
      email: 'xyz@gmail.com',
      mobile: '9552822470',
      class: '',
      pic: './assets/images/members/snehal-khantade.jpg'
    },
    {
      name: 'Mr. Praful Kodape',
      role: 'Member',
      email: 'xyz@gmail.com',
      mobile: '9673398819',
      class: '',
      pic: './assets/images/user-pic-default.png'
    }
  ];

  districtList: any[] = [];
  private eventData: any[] = [];

  constructor(private _service: SlingshotService) {
  }

  ngOnInit() {
    this.getAllEvents();
    console.log(this.eventData)
  }

  getAllEvents() {
    this._service.getAllEvents().subscribe(data => {
      data.map(item => {
        this.eventData.push({ id: item.payload.doc.id, ...item.payload.doc.data() })
      });
    })
  }
}
