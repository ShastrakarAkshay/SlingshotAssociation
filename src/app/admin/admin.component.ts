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
  private requestCount: number = 0;
  private enquiryCount: number = 0;
  private eventCount: number = 0;
  private refreeCount: number = 0;

  constructor(private _service: SlingshotService) {
    this.userID = localStorage.getItem('user-id');
  }

  ngOnInit() {
    this._service.getAffiliationRequests().subscribe(data => {
      this.requestCount = data.length;
    });

    this._service.getEnquiries().subscribe(data => {
      this.enquiryCount = data.length;
    });

    this._service.getAllEvents().subscribe(data => {
      this.eventCount = data.length;
    })

    this._service.getAllRefrees().subscribe(data => {
      this.refreeCount = data.length;
    })
  }
}
