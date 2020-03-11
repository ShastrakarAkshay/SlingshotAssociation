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
      mobile: '',
      class: 'active'
    },
    {
      name: 'Mr. Vikas Shelke',
      role: 'General Secretory',
      email: 'xyz@gmail.com',
      mobile: '',
      class: ''
    },
    {
      name: 'Mr. Lalit Dhoke',
      role: 'Vice President',
      email: 'xyz@gmail.com',
      mobile: '',
      class: ''
    },
    {
      name: 'Mr. Sham Khemaskar',
      role: 'Treasurer',
      email: 'xyz@gmail.com',
      mobile: '',
      class: ''
    },
    {
      name: 'Mr. Pravin Dighade',
      role: 'Join Secretory',
      email: 'xyz@gmail.com',
      mobile: '',
      class: ''
    },
    {
      name: 'Mr. Sunil Shinde',
      role: 'Representative',
      email: 'xyz@gmail.com',
      mobile: '',
      class: ''
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
