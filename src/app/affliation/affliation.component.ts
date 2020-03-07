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

  disticts: any;
  distInfo: any;
  members: AffiliatedMembers;
  distName: string;

  private selectedDistrict: DistrictConfig;
  private registeredDistricts: Array<any> = [];
  private showSpinner: boolean = false;

  constructor(private affiliationService: AffilationService, private slingshotService: SlingshotService, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.disticts = this.affiliationService.getRegisteredDistricts();
    this.distInfo = this.affiliationService.getDistrictInfo();
    this.members = this.distInfo.members;

    this.showSpinner = true;
    this._spinner.show();
    this.getRegisteredDistrictList();
  }

  // Fetch all registered districts list
  getRegisteredDistrictList() {
    this.slingshotService.getAvailabelDistricts().subscribe(data => {
      data.map(item => {
        this.registeredDistricts.push(item.payload.doc.data());
      });
      this._spinner.hide();
      this.showSpinner = false;
    });
  }

  getDistrictInfo(id) {
    this.selectedDistrict = this.slingshotService.getDistrictById(this.registeredDistricts, id);
  }

  searchDistrict(distName) {
    this.disticts.map(name => {
      if (distName.toLowerCase().includes(name.toLowerCase())) {
      }
    });
  }

}
