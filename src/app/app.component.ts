import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'SlingshotAssociation';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.manageSession();
  }

  ngAfterViewInit() {
    firebase.analytics().logEvent('start_app', {
      username: 'akshay'
    })
  }

}
