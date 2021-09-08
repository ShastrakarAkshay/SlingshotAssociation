import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  enquiryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.enquiryForm = this.formBuilder.group({
      message: ['', Validators.required],
    });
  }
}
