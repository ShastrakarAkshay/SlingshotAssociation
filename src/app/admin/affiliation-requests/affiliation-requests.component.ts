import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-affiliation-requests',
  templateUrl: './affiliation-requests.component.html',
  styleUrls: ['./affiliation-requests.component.scss']
})
export class AffiliationRequestsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'name', 'requestedDistrict.name', 'actions'];

  private affiliatinRequests: any[] = [];
  private totalCount: number = 0;
  private showSpinner: boolean = false;

  constructor(private _service: SlingshotService, private _dialog: MatDialog, private _spinner: NgxSpinnerService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.showSpinner = true;
    this._spinner.show();
    this.getAffiliationRequestData();
  }

  getAffiliationRequestData() {
    this._service.getAffiliationRequests().subscribe(data => {
      this.affiliatinRequests = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      this.dataSource.data = this.affiliatinRequests;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this._spinner.hide();
      this.showSpinner = false;
    })
  }

  filterResult(serachKey: string) {
    this.dataSource.filter = serachKey.trim().toLowerCase();
  }

  getPersonInfo(personData: any) {
    this._dialog.open(DistrictApprovalDialog, {
      data: personData,
      autoFocus: false
    });
  }

  deleteRequest(id: any) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete?', type: 'confirm' },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._service.deleteRequestById(id);
      }
    });
  }

}
@Component({
  selector: 'district-approval-dialog',
  templateUrl: 'dialogs/district-approval.html',
  styles: [`* {
    font-family: "Didact Gothic", sans-serif;
  }
  .mat-dialog-container {
    margin-top: 100px !important;
  }
  `]
})
export class DistrictApprovalDialog implements OnInit {
  private personData: any;
  constructor(
    public _dialogRef: MatDialogRef<DistrictApprovalDialog>,
    private _service: SlingshotService,
    private _spinner: NgxSpinnerService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    _dialogRef.disableClose = true;
    this.personData = data;
  }

  ngOnInit() { }

  close() {
    this._dialogRef.close();
  }

  approveDistrict(personData: any) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to approve user?', type: 'confirm' },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        personData.approvedOn = new Date();
        this._service.approveDistrict(personData);
      }
    });
  }
}
