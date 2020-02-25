import { Component, OnInit } from '@angular/core';
import { AffilationService } from '../Services/affilation.service';
import { AffiliatedMembers } from './affiliation.interface';
import { SlingshotService } from '../Services/slingshot.service';
import { DistrictConfig } from '../Interfaces/slingshot.interface';

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


  private registeredDistricts: Array<any> = [];

  constructor(private affiliationService: AffilationService, private slingshotService: SlingshotService) { }

  ngOnInit() {
    this.disticts = this.affiliationService.getRegisteredDistricts();
    this.distInfo = this.affiliationService.getDistrictInfo();
    this.distName = this.distInfo.distName;
    this.members = this.distInfo.members;

    this.getRegisteredDistrictList();
  }

  getRegisteredDistrictList() {
    this.slingshotService.getAvailabelDistricts().subscribe(data => {
      data.map(item => {
        this.registeredDistricts.push(item.payload.doc.data());
      });
    });

    console.log(this.registeredDistricts)
  }

  getDistInfo(dist) {
    this.distName = dist;
  }

  searchDistrict(distName) {
    this.disticts.map(name => {
      if (distName.toLowerCase().includes(name.toLowerCase())) {
      }
    });
  }

}
