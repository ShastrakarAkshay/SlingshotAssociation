import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {

  private refree: any[] = [1, 2, 3, 4, 5];
  
  constructor() { }

  ngOnInit() {
  }

}
