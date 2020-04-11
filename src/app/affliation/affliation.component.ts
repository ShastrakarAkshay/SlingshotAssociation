import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-affliation',
  templateUrl: './affliation.component.html',
  styleUrls: ['./affliation.component.scss']
})
export class AffliationComponent implements OnInit {

  private selectedDistrict: any[] = [];
  private registeredDistrictsList: any[] = [];
  private showSpinner: boolean = false;
  private districtInfo: any = { districtName: '', approvedOn: '' };

  constructor(private _service: SlingshotService, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getRegisteredDistrictList();
    window.scrollTo(0, 0);
  }

  getRegisteredDistrictList() {
    this.spinnerShow();
    this._service.getRegisteredDistricts().subscribe(data => {
      data.map((item, index) => {
        this.registeredDistrictsList.push(item.payload.doc.data());
        if (index === 0) {
          this.getDistrictInfo(this.registeredDistrictsList[0].id);
        }
      });
      this.spinnerHide();
    });
  }

  getDistrictInfo(id) {
    this.spinnerShow();
    this._service.getRegisteredDistrictInfoById(id).subscribe(config => {
      this.selectedDistrict = [];
      config.map((data, index) => {
        this.selectedDistrict.push(data.payload.doc.data());
        if (index === 0) {
          this.districtInfo = { districtName: this.selectedDistrict[0].requestedDistrict.name, approvedOn: this.selectedDistrict[0].approvedOn }
        }
      });
      this.spinnerHide();
    });
  }

  searchDistrict(distName) { }

  spinnerShow() {
    this.showSpinner = true;
    this._spinner.show();
  }

  spinnerHide() {
    this._spinner.hide();
    this.showSpinner = false;
  }

}
