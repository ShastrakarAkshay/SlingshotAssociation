import { Component, OnInit } from '@angular/core';
import { AffilationService } from '../Services/affilation.service';
import { AffiliatedMembers } from './affiliation.interface';
import { SlingshotService } from '../Services/slingshot.service';
import { DistrictConfig } from '../Interfaces/slingshot.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  private districtName: string;
  private districtInfo: any;
  private registeredDistricts: Array<any> = [];

  constructor(private affiliationService: AffilationService, private slingshotService: SlingshotService) { }

  ngOnInit() {
    this.disticts = this.affiliationService.getRegisteredDistricts();
    this.distInfo = this.affiliationService.getDistrictInfo();
    this.members = this.distInfo.members;
    this.getRegisteredDistrictList();
    // if (this.registeredDistricts.length > 0) {
    //   this.getDistrictInfo(this.registeredDistricts[0].id);
    // }
  }

  // Fetch all registered districts list
  getRegisteredDistrictList() {
    this.slingshotService.getAvailabelDistricts().subscribe(data => {
      data.map(item => {
        this.registeredDistricts.push(item.payload.doc.data());
      });
    });
  }

  getDistrictInfo(id) {
    this.districtName =  this.slingshotService.getDistrictNameById(this.registeredDistricts, id);
  }

  searchDistrict(distName) {
    this.disticts.map(name => {
      if (distName.toLowerCase().includes(name.toLowerCase())) {
      }
    });
  }

}
