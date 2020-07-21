import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';
import { ModalDataService } from '../shared/services/modal-data.service';
import { UtilityService } from '../shared/services/utility.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  districtList: any[] = [];
  private members: any[] = [];
  private eventData: any[] = [];
  private matchResults: any[] = [];
  private showSpinner: boolean = false;

  constructor(private _service: SlingshotService, private _dataService: ModalDataService, private _utility: UtilityService, private _spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.getAllResultRecords();
    this.getAllEvents();
    this.members = this._dataService.getAssociationMembers();
  }

  getAllEvents() {
    // this.show_spinner();
    this._service.getActiveEvents().subscribe(data => {
      data.map(item => {
        this.eventData.push({ id: item.payload.doc.id, ...item.payload.doc.data() })
      });
      // this.hide_spinner();
    })
  }

  getAllResultRecords() {
    // this.show_spinner();
    this._service.getFiveMatchResults().subscribe(data => {
      this.matchResults = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      // this.hide_spinner();
    })
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
