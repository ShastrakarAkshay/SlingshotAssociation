import { Component, OnInit, Inject } from '@angular/core';
import { ModalDataService } from '../shared/services/modal-data.service';
import { SlingshotService } from '../shared/services/slingshot.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {

  members: any[] = [];
  referees: any[] = [];
  committee: any[] = [];
  showSpinner: boolean = false;

  constructor(private dataModal: ModalDataService, private _service: SlingshotService, private _dialog: MatDialog, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.show_spinner();
    this.members = this.dataModal.getAssociationMembers();
    this.committee = this.dataModal.getAllCommitte();
    this._service.getAllRefrees().subscribe(data => {
      this.referees = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      this.hide_spinner();
    })
  }

  show_spinner() {
    this.showSpinner = true;
    this._spinner.show();
  }

  hide_spinner() {
    this._spinner.hide();
    this.showSpinner = false;
  }

  getRefereeInfo(referee: any) {
    this._dialog.open(RefereeDialog, {
      autoFocus: false,
      data: referee
    })
  }

}

@Component({
  selector: 'commitee-member-dialog',
  templateUrl: 'dialogs/committee-member.html',
  styleUrls: ['./committee.component.scss']
})
export class RefereeDialog implements OnInit {

  referee: any;

  constructor(
    public _dialogRef: MatDialogRef<RefereeDialog>,
    private _spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    // this._dialogRef.disableClose = true;
    this.referee = data;
  }

  ngOnInit() { }

  close() {
    this._dialogRef.close();
  }
}
