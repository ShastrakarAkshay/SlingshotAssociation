import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../Services/slingshot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list:any [] = [1,2,3,4];
  members:any [] = [1,2,3,4];

  districtList: any [] = [];

  constructor(private s: SlingshotService) {
    s.addDist().subscribe(data => {
      data.map(item => {
        this.districtList.push(item.payload.doc.data());
      })
      console.log(this.districtList)
    })
   }

  ngOnInit() {
  }

}
