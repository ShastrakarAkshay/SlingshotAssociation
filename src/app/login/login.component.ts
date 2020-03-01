import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginPage',{static:false}) loginPage: ElementRef;
  @ViewChild('forgetPassPage',{static:false}) forgetPassPage: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  forgotPassword() {
    this.loginPage.nativeElement.hidden =  !this.loginPage.nativeElement.hidden;
    this.forgetPassPage.nativeElement.hidden =  !this.forgetPassPage.nativeElement.hidden;
  }

  login(){
    this.router.navigateByUrl('/admin');
  }

}
