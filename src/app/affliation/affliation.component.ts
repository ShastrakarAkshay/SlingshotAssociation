import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-affliation',
  templateUrl: './affliation.component.html',
  styleUrls: ['./affliation.component.scss']
})
export class AffliationComponent implements OnInit {

  private selectedDistrictInfo: any;
  private registeredDistrictsList: any[] = [];
  private showSpinner: boolean = false;

  constructor(private _service: SlingshotService, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.selectedDistrictInfo = {
      approvedOn: '',
      requestedDistrict: { id: '', name: '' },
      members: [{ firstName: '', middleName: '', lastName: '', email: '', mobile: '', role: ' ', documents: { photo: { documentURL: '' } } }]
    }
    this.getRegisteredDistrictList();
    window.scrollTo(0, 0);
  }

  getRegisteredDistrictList() {
    this.spinnerShow();
    this._service.getRegisteredDistricts().subscribe(data => {
      data.map((item, index) => {
        this.registeredDistrictsList.push({ ...item.payload.doc.data(), isActive: false });
        if (index === 0) {
          this.getDistrictInfo(this.registeredDistrictsList[0].id);
        }
      });
      this.spinnerHide();
    });
  }

  getDistrictInfo(id) {
    this.spinnerShow();
    this.registeredDistrictsList.forEach(district => {
      district.isActive = false;
      if (district.id === id) {
        district.isActive = true;
      }
    });
    this._service.getRegisteredDistrictInfoById(id).subscribe(config => {
      this.selectedDistrictInfo = config.payload.data();
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
