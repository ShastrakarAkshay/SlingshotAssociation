import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginPage',{static:false}) loginPage: ElementRef;
  @ViewChild('forgetPassPage',{static:false}) forgetPassPage: ElementRef;

  private loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  
  forgotPassword() {
    this.loginPage.nativeElement.hidden =  !this.loginPage.nativeElement.hidden;
    this.forgetPassPage.nativeElement.hidden =  !this.forgetPassPage.nativeElement.hidden;
  }

  login(){
    if(this.loginForm.invalid) {
      return;
    }

    const formData = this.loginForm.value;
    this.router.navigateByUrl('/admin');
  }

}
