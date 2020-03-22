import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SlingshotService } from '../shared/services/slingshot.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

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

  private contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private _service: SlingshotService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/\d{10}/)]],
      message: ['', Validators.required]
    });
  }

  clearForm() {
    this.contactForm.reset();
  }

  sendEnquiry() {
    this._service.sendEnquiry(this.contactForm.value);
    this.clearForm();
  }



}
