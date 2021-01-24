import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'SlingshotAssociation';
  isAppActivated: boolean = false;
  isLoading: boolean = false;

  constructor(private _auth: AuthService, private _firestore: AngularFirestore) { }

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
    this._firestore.collection('AppSettings').doc('sa-settings-00001').get().subscribe(res => {
      this.isAppActivated =  res.get('isAppActivated');
      this.isLoading = false;
    })
  }

}
