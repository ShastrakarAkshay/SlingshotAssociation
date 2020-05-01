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
import { AngularFirestore } from '@angular/fire/firestore';
import * as rxjs from 'rxjs/operators'
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-affiliation-requests',
  templateUrl: './affiliation-requests.component.html',
  styleUrls: ['./affiliation-requests.component.scss']
})
export class AffiliationRequestsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'districtName', 'name', 'mobile', 'status', 'actions'];

  dataSource2 = new MatTableDataSource();
  displayedColumns2: string[] = ['index', 'districtName', 'member', 'approvedOn', 'status', 'actions'];

  dataSource3 = new MatTableDataSource();
  displayedColumns3: string[] = ['index', 'districtName', 'member', 'approvedOn', 'status'];

  private affiliatinRequests: any[] = [];
  private approvedDistricts: any[] = [];
  private oldAffiliations: any[] = [];
  private totalCount: number = 0;
  private showSpinner: boolean = false;

  constructor(private _service: SlingshotService, private _dialog: MatDialog, private _spinner: NgxSpinnerService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.getAffiliationRequestData();
    this.getApprovedDistrictInfo();
    this.getOldAffiliations();
  }

  getAffiliationRequestData() {
    this.show_spinner();
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
      this.hide_spinner();
    })
  }

  getApprovedDistrictInfo() {
    this.show_spinner();
    this._service.getApprovedDistrictInfo().subscribe(data => {
      this.approvedDistricts = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      console.log(this.approvedDistricts)
      this.dataSource2.data = this.approvedDistricts;
      this.dataSource2.sort = this.sort;
      this.dataSource2.paginator = this.paginator;
      this.hide_spinner();
    })
  }

  getOldAffiliations() {
    this.show_spinner();
    this._service.getOldAffiliations().subscribe(data => {
      this.oldAffiliations = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      this.dataSource3.data = this.oldAffiliations;
      this.dataSource3.sort = this.sort;
      this.dataSource3.paginator = this.paginator;
      this.hide_spinner();
    })
  }


  filterResult(serachKey: string) {
    this.dataSource.filter = serachKey.trim().toLowerCase();
  }

  getPersonInfo(personData: any) {
    this._dialog.open(DistrictApprovalDialog, {
      data: { distInfo: personData, flag: false },
      autoFocus: false,
      width: '99%'
    });
  }

  getRegisteredDistrctInfo(personData: any) {
    this._dialog.open(DistrictApprovalDialog, {
      data: { distInfo: personData, flag: true },
      autoFocus: false,
      width: '99%'
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
        this._toastr.info("Request Deleted Successfully.");
      }
    });
  }

  show_spinner() {
    this.showSpinner = true;
    this._spinner.show();
  }

  hide_spinner() {
    this._spinner.hide();
    this.showSpinner = false;
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
  public flag: boolean = false;
  public title: string = '';
  constructor(
    public _dialogRef: MatDialogRef<DistrictApprovalDialog>,
    private _service: SlingshotService,
    private _spinner: NgxSpinnerService,
    private _dialog: MatDialog,
    private _toastr: ToastrService,
    private firestore: AngularFirestore,
    private utility: UtilityService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    _dialogRef.disableClose = true;
    this.personData = data.distInfo;
    this.flag = data.flag;
    if (this.flag) {
      this.title = this.personData.requestedDistrict.name;
    } else {
      this.title = 'Requested For "' + this.personData.requestedDistrict.name + '" District';
    }
  }

  ngOnInit() { }

  close() {
    this._dialogRef.close();
  }

  approveDistrict(districtData: any) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to approve?', type: 'confirm' },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        districtData.approvedOn = this.utility.convertDateToEPOC(new Date());
        districtData.approvedBy = 'username';
        districtData.status = 'approved';
        this._service.approveDistrict(districtData).pipe(rxjs.take(1)).subscribe(data => {
          if (!data.payload.exists) {
            this.firestore.collection('ApprovedDistricts').doc(districtData.requestedDistrict.id).set({ ...districtData, id: districtData.requestedDistrict.id });
            this.firestore.collection('DistrictList').doc(districtData.requestedDistrict.id).update({ isRegistered: true });
            this.firestore.collection('AffiliationRequests').doc(districtData.id).delete();
            this._toastr.success('Approved Successfully');
            this.close();
          } else {
            this._toastr.error('District is already allocated');
          }
        });
      }
    });
  }

  deleteAffiliation() {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete affiliation?', type: 'confirm' },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._service.deleteDistrictAffiliation(this.personData);
        this._toastr.error('Affiliation Canceled Successfully');
        this.close();
      }
    });
  }
}
