import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';
import { ModalDataService } from '../shared/services/modal-data.service';
import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any[] = [1, 2, 3, 4];
  districtList: any[] = [];
  private members: any[] = [];
  private eventData: any[] = [];

  constructor(private _service: SlingshotService, private _dataService: ModalDataService, private _utility: UtilityService) {
  }

  ngOnInit() {
    this.getAllEvents();
    this.members = this._dataService.getAssociationMembers();
  }

  getAllEvents() {
    this._service.getActiveEvents().subscribe(data => {
      data.map(item => {
        this.eventData.push({ id: item.payload.doc.id, ...item.payload.doc.data() })
      });
    })
  }
}
