import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'SlingshotAssociation';
  
  ngAfterViewInit() {
    firebase.analytics().logEvent('start_app', {
      username: 'akshay'
    })
  }
}
