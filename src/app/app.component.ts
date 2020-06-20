import { Component, AfterViewInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'SlingshotAssociation';

  constructor() {
    firebase.analytics().logEvent('start_app_constructor', {
      username: 'akshay'
    })
  }

  ngAfterViewInit() {
    firebase.analytics().logEvent('start_app', {
      username: 'akshay'
    })
  }
}
