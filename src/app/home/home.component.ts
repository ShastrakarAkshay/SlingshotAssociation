import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';
import { ModalDataService } from '../shared/services/modal-data.service';
import { UtilityService } from '../shared/services/utility.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  districtList: any[] = [];
  members: any[] = [];
  eventData: any[] = [];
  matchResults: any[] = [];
  showSpinner: boolean = false;
  flashEventURL: string;

  constructor(
    private _service: SlingshotService,
    private _dataService: ModalDataService,
    private _utility: UtilityService,
    private _spinner: NgxSpinnerService,
    private _afStorage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.getFlashEvent();
    this.getAllResultRecords();
    this.getAllEvents();
    this.members = this._dataService.getAssociationMembers();
  }

  getAllEvents() {
    // this.show_spinner();
    this._service.getActiveEvents().subscribe((data) => {
      data.map((item) => {
        this.eventData.push({
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        });
      });
      // this.hide_spinner();
    });
  }

  getAllResultRecords() {
    // this.show_spinner();
    this._service.getFiveMatchResults().subscribe((data) => {
      this.matchResults = data.map((item) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
      // this.hide_spinner();
    });
  }

  _showSpinner() {
    this.showSpinner = true;
    this._spinner.show();
  }

  _hideSpinner() {
    this._spinner.hide();
    this.showSpinner = false;
  }

  getFlashEvent() {
    this._afStorage.storage
      .ref('FlashEvents/')
      .listAll()
      .then((result) => {
        result.items.forEach((item) => {
          const ref = this._afStorage.storage
            .ref()
            .child('FlashEvents/' + item.name);
          ref.getDownloadURL().then((url) => {
            this.flashEventURL = url;
          });
        });
      });
  }
}
