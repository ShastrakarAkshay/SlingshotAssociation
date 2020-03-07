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
  private userData: UserConfig;

  constructor(private _service: SlingshotService) {
    this.userID = localStorage.getItem('user-id');
  }

  ngOnInit() {
    this._service.getUserById(this.userID).subscribe(config => {
    
    });
    console.log(this.userData)
  }
}
