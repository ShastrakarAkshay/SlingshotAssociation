import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  districtName: string;
  showForm: boolean = false;
  disabledRegBtn: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onDistrictChange(distName){
    this.districtName = distName;
    this.disabledRegBtn = false;
  }
  
  registerDistrict(){
    this.showForm = true;
  }

}
