import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-affiliation-requests',
  templateUrl: './affiliation-requests.component.html',
  styleUrls: ['./affiliation-requests.component.scss']
})
export class AffiliationRequestsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'name', 'email', 'actions'];

  private affiliatinRequests: any[] = [];
  private totalCount: number = 0;
  private showSpinner:boolean = false;

  constructor(private _service: SlingshotService, private _dialog: MatDialog, private _spinner: NgxSpinnerService) { }

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
          index: Number(item.payload.newIndex) + 1,
          name: item.payload.doc.get('firstName') + ' ' + item.payload.doc.get('lastName'),
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

  getPersonInfo(personData: string) {
    const dialogConfig = new MatDialogConfig();
    this._dialog.open(DistrictApprovalDialog, {
      width: '80%',
      data: personData
    });
  }

}



@Component({
  selector: 'district-approval-dialog',
  templateUrl: 'district-approval.html',
  styles: [`* {
    font-family: "Didact Gothic", sans-serif;
  }`]
})
export class DistrictApprovalDialog implements OnInit {

  private personData: any;
  constructor(private _router: Router, public _dialogRef: MatDialogRef<DistrictApprovalDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {
    _dialogRef.disableClose = true;
    this.personData = data;
  }

  ngOnInit() { }

  close() {
    this._dialogRef.close();
  }
}
