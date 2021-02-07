import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginPage', { static: false }) loginPage: ElementRef;
  @ViewChild('forgetPassPage', { static: false }) forgetPassPage: ElementRef;

  private loginForm: FormGroup;
  private resetForm: FormGroup;
  private showSpinner: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private _spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.resetForm = this.formBuilder.group({
      emailaddress: ['', [Validators.required, Validators.email]]
    });
  }

  forgotPassword() {
    this.loginPage.nativeElement.hidden = !this.loginPage.nativeElement.hidden;
    this.forgetPassPage.nativeElement.hidden = !this.forgetPassPage.nativeElement.hidden;
    this.resetForm.setValue({
      emailaddress: this.loginForm.get('email').value
    })
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const formData = this.loginForm.value;
    this.show_spinner();
    this.afAuth.auth.signInWithEmailAndPassword(formData.email, formData.password)
      .then((result) => {
        this.router.navigate(['/admin']);
        localStorage.setItem('login-token', result.user.uid);
        localStorage.setItem('uid', result.user.uid);
        localStorage.setItem('login-time', new Date().getTime().toString());
        localStorage.removeItem('master-token');
        this.auth.isLoggedIn();
        this.hide_spinner();
      }).catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found': this.toastr.error('User Not Found'); break;
          case 'auth/wrong-password': this.toastr.error('Wrong Password'); break;
        }
        this.hide_spinner();
      })
  }

  reserPassword() {
    const email = this.resetForm.controls['emailaddress'].value;
    this.auth.resetPassword(email).subscribe(data => {
      if (data) {
        this.forgotPassword();
      }
    });
  }

  show_spinner() {
    this.showSpinner = true;
    this._spinner.show();
  }

  hide_spinner() {
    this._spinner.hide();
    this.showSpinner = false;
  }

}
