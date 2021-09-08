import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AuthService } from './shared/services/auth.service';
import { SlingshotService } from './shared/services/slingshot.service';

const master = 'M@ster#Slingshot#13$181195$13#';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'SlingshotAssociation';
  isAppActivated: boolean = false;
  isLoading: boolean = false;

  constructor(
    private _auth: AuthService,
    private _afAuth: AngularFireAuth,
    private _slingshotService: SlingshotService
  ) {}

  ngOnInit() {
    this._provideSecurityRulesByAuth();
    this._auth.manageSession();
    this.getAppSettings();
  }

  ngAfterViewInit() {
    firebase.analytics().logEvent('start_app', {
      username: 'akshay',
    });
  }

  getAppSettings() {
    this.isLoading = true;
    this._slingshotService.getAppSettings().subscribe((res) => {
      this.isAppActivated = res.payload.get('isAppActivated');
      this.isLoading = false;
    });
  }

  private _provideSecurityRulesByAuth() {
    // this._afAuth.auth.signInWithEmailAndPassword("master@slingshot.com", master)
    // .then(res => {
    // console.log('Master Authenticated !');
    localStorage.setItem('master-token', '${slingshot}');
    // })
  }
}
