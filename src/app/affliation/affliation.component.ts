import { Component, OnInit } from '@angular/core';
import { AffilationService } from '../Services/affilation.service';
import { AffiliatedMembers } from './affiliation.interface';
import { SlingshotService } from '../shared/services/slingshot.service';
import { DistrictConfig } from '../shared/interfaces/slingshot.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-affliation',
  templateUrl: './affliation.component.html',
  styleUrls: ['./affliation.component.scss']
})
export class AffliationComponent implements OnInit {

  private selectedDistrict: DistrictConfig[] = [];
  private registeredDistrictsList: Array<any> = [];
  private showSpinner: boolean = false;

  constructor(private _service: SlingshotService, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.showSpinner = true;
    this._spinner.show();
    this.getRegisteredDistrictList();
  }

  // Fetch all registered districts list
  getRegisteredDistrictList() {
    this._service.getRegisteredDistricts().subscribe(data => {
      data.map(item => {
        this.registeredDistrictsList.push(item.payload.doc.data());
      });
      this._spinner.hide();
      this.showSpinner = false;
    });
  }

  getDistrictInfo(id) {
    this._service.getRegisteredDistrictInfoById(id).subscribe(config => {
      this.selectedDistrict = [];
      config.map(data => {
        console.log(data.payload.doc.data())
        this.selectedDistrict.push(data.payload.doc.data());
      });
      console.log("selectedDistrict")
      console.log(this.selectedDistrict)
    })
  }

  searchDistrict(distName) {
    
  }

}
