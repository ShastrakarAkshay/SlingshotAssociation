import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affliation',
  templateUrl: './affliation.component.html',
  styleUrls: ['./affliation.component.scss']
})
export class AffliationComponent implements OnInit {

  list: any[]=[1,1,2,3,4,5,6,2,3,4,5,6];
  constructor() { }

  ngOnInit() {
  }

}
