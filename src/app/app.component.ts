import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from './shared/services/auth.service';
import { SlingshotService } from './shared/services/slingshot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'SlingshotAssociation';
  isAppActivated: boolean = false;
  isLoading: boolean = false;

  constructor(private _auth: AuthService, private _slingshotService: SlingshotService) { }

  ngOnInit() {
    this._auth.manageSession();
    this.getAppSettings();
  }

  ngAfterViewInit() {
    firebase.analytics().logEvent('start_app', {
      username: 'akshay'
    })
  }
  
  getAppSettings() {
    this.isLoading = true;
    this._slingshotService.getAppSettings().subscribe(res => {
      this.isAppActivated = res.payload.get('isAppActivated');
      this.isLoading = false;
    })
  }

}
