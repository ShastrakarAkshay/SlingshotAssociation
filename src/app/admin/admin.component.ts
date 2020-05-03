import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';
import { UserConfig } from '../shared/interfaces/slingshot.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private userID: string;
 
  constructor(private _service: SlingshotService) {
    this.userID = localStorage.getItem('user-id');
  }

  ngOnInit() {
    // TO DO....
    // check first use is logged in or not
    // if not logged in then remove all localstorage and redirect to login page
  } 
}
