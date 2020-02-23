import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  districtName: string;
  showTitle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onDistrictChange(distName){
    this.districtName = distName;
    this.showTitle = true;
  }

}
