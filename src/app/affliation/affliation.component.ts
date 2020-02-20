import { Component, OnInit } from '@angular/core';
import { AffilationService } from '../Services/affilation.service';
import { AffiliatedMembers } from './affiliation.interface';

@Component({
  selector: 'app-affliation',
  templateUrl: './affliation.component.html',
  styleUrls: ['./affliation.component.scss']
})
export class AffliationComponent implements OnInit {

  disticts: any;
  distInfo: any;
  members: AffiliatedMembers;

  constructor(private affiliationService: AffilationService) { }

  ngOnInit() {
    this.disticts = this.affiliationService.getRegisteredDistricts();
    this.distInfo = this.affiliationService.getDistrictInfo();
    this.members = this.distInfo.members;
    console.log(this.members)
  }

}
