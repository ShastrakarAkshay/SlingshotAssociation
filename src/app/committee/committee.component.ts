import { Component, OnInit } from '@angular/core';
import { ModalDataService } from '../shared/services/modal-data.service';
import { SlingshotService } from '../shared/services/slingshot.service';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {

  members: any[] = [];
  referees: any[] = [];

  constructor(private dataModal: ModalDataService, private _service: SlingshotService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.members = this.dataModal.getAssociationMembers();
    this._service.getAllRefrees().subscribe(data => {
      this.referees = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
    })
  }

}
