import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../Services/slingshot.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  districtName: string;
  showForm: boolean = false;
  disabledRegBtn: boolean = true;

  private availableDistricts: Array<any> = [];

  constructor(private slingshotService: SlingshotService) { 
    this.getAvailableDistrictList();
  }

  ngOnInit() {
  }

  getAvailableDistrictList() {
    this.slingshotService.getAvailabelDistricts().subscribe(data => {
      data.map(item => {
        this.availableDistricts.push(item.payload.doc.data());
      });
    });
  }

  onDistrictChange(event) {
    this.disabledRegBtn = false;
  }

  registerDistrict() {
    this.showForm = true;
  }

}
