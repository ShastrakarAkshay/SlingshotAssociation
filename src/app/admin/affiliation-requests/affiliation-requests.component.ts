import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { AngularFirestore } from '@angular/fire/firestore';
import * as rxjs from 'rxjs/operators';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-affiliation-requests',
  templateUrl: './affiliation-requests.component.html',
  styleUrls: ['./affiliation-requests.component.scss'],
})
export class AffiliationRequestsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'index',
    'districtName',
    'name',
    'mobile',
    'status',
    'actions',
  ];

  affiliatinRequests: any[] = [];
  showSpinner: boolean = false;

  constructor(
    private _service: SlingshotService,
    private _dialog: MatDialog,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getAffiliationRequestData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAffiliationRequestData() {
    this.show_spinner();
    this._service.getAffiliationRequests().subscribe((data) => {
      this.affiliatinRequests = data.map((item, index) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
          index: index + 1,
        };
      });
      this.dataSource = new MatTableDataSource(this.affiliatinRequests);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: any, filter) => {
        let dataSource =
          data.requestedDistrict.name +
          data.members[0].firstName +
          ' ' +
          data.members[0].middleName +
          ' ' +
          data.members[0].lastName;
        dataSource = dataSource.toLowerCase();
        return dataSource.includes(filter);
      };
      this.hide_spinner();
    });
  }

  filterResult(searchKey: string) {
    searchKey = searchKey.replace(/  +/g, ' ');
    this.dataSource.filter = searchKey.trim().toLowerCase();
  }

  getPersonInfo(personData: any) {
    this._dialog.open(DistrictApprovalDialog, {
      data: { distInfo: personData, flag: false },
      autoFocus: false,
      width: '99%',
    });
  }

  getRegisteredDistrctInfo(personData: any) {
    this._dialog.open(DistrictApprovalDialog, {
      data: { distInfo: personData, flag: true },
      autoFocus: false,
      width: '99%',
    });
  }

  deleteRequest(id: any, data: any) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete?', type: 'confirm' },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._service.deleteRequestById(id, data.docs);
        this._toastr.info('Request Deleted Successfully.');
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
})
export class DistrictApprovalDialog implements OnInit {
  personData: any;
  public flag: boolean = false;
  public title: string = '';
  public isReadOnly: boolean = false;
  constructor(
    public _dialogRef: MatDialogRef<DistrictApprovalDialog>,
    private _service: SlingshotService,
    private _spinner: NgxSpinnerService,
    private _dialog: MatDialog,
    private _toastr: ToastrService,
    private firestore: AngularFirestore,
    private utility: UtilityService,
    private afStorage: AngularFireStorage,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    // _dialogRef.disableClose = true;
    this.personData = data.distInfo;
    this.flag = data.flag;
    this.isReadOnly = data.readOnly;
    if (this.flag) {
      this.title = this.personData.requestedDistrict.name;
    } else {
      this.title =
        'Requested For "' +
        this.personData.requestedDistrict.name +
        '" District';
    }
  }

  ngOnInit() {}

  close() {
    this._dialogRef.close();
  }

  approveDistrict(districtData: any) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to approve?', type: 'confirm' },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        districtData.approvedOn = this.utility.convertDateToEPOC(new Date());
        districtData.members[0].documents = districtData.docs;
        districtData.status = 'approved';
        districtData.approvedBy = 'username';
        delete districtData.docs;
        this._service
          .approveDistrict(districtData)
          .pipe(rxjs.take(1))
          .subscribe((data) => {
            if (!data.payload.exists) {
              this.firestore
                .collection('ApprovedDistricts')
                .doc(districtData.requestedDistrict.id)
                .set({
                  ...districtData,
                  id: districtData.requestedDistrict.id,
                });
              this.firestore
                .collection('DistrictList')
                .doc(districtData.requestedDistrict.id)
                .update({ isRegistered: true });
              this.firestore
                .collection('AffiliationRequests')
                .doc(districtData.id)
                .delete();
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
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._service.deleteDistrictAffiliation(this.personData);
        this._toastr.error('Affiliation Canceled Successfully');
        this.close();
      }
    });
  }

  preview(url) {
    if (url) {
      window.open(url);
    }
  }

  addMember(personData) {
    this._dialog.open(AddMemberDialog, {
      data: personData,
      autoFocus: false,
      width: '99%',
    });
  }

  deleteUser(id) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete?', type: 'confirm' },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let deletedMember = this.personData.members.filter(
          (res) => res.id === id
        );
        this.personData.members = this.personData.members.filter(
          (res) => res.id !== id
        );
        if (deletedMember[0].documents) {
          this.afStorage.storage
            .ref()
            .child(`Affiliations/${deletedMember[0].documents.photo.id}`)
            .delete();
        }
        this._service.addAffiliationMember(
          this.personData.requestedDistrict.id,
          this.personData.members
        );
        this._toastr.info('Member Deleted Successfully.');
      }
    });
  }
}

@Component({
  selector: 'app-approved-districts',
  templateUrl: 'views/approved-districts.html',
  styleUrls: ['./affiliation-requests.component.scss'],
})
export class ApprovedDistrictComponent implements OnInit {
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;
  dataSource2 = new MatTableDataSource();
  displayedColumns2: string[] = [
    'index',
    'districtName',
    'member',
    'approvedOn',
    'status',
    'actions',
  ];

  approvedDistricts: any[] = [];
  showSpinner: boolean = false;

  constructor(
    private _service: SlingshotService,
    private _spinner: NgxSpinnerService,
    private _dialog: MatDialog,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getApprovedDistrictInfo();
  }

  getApprovedDistrictInfo() {
    this.show_spinner();
    this._service.getApprovedDistrictInfo().subscribe((data) => {
      this.approvedDistricts = data.map((item, index) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
          index: index + 1,
        };
      });
      this.dataSource2 = new MatTableDataSource(this.approvedDistricts);
      this.dataSource2.sort = this.sort2;
      this.dataSource2.paginator = this.paginator2;
      this.dataSource2.filterPredicate = (data: any, filter) => {
        let dataSource =
          data.requestedDistrict.name +
          data.members[0].firstName +
          ' ' +
          data.members[0].middleName +
          ' ' +
          data.members[0].lastName;
        dataSource = dataSource.toLowerCase();
        return dataSource.includes(filter);
      };
      this.hide_spinner();
    });
  }

  filterResult(searchKey: string) {
    searchKey = searchKey.replace(/  +/g, ' ');
    this.dataSource2.filter = searchKey.trim().toLowerCase();
  }

  getRegisteredDistrctInfo(personData: any) {
    this._dialog.open(DistrictApprovalDialog, {
      data: { distInfo: personData, flag: true },
      autoFocus: false,
      width: '99%',
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
  selector: 'app-rejected-affiliation',
  templateUrl: 'views/rejected-affiliation.html',
  styleUrls: ['./affiliation-requests.component.scss'],
})
export class RejectedAffiliationComponent implements OnInit {
  @ViewChild(MatPaginator) paginator3: MatPaginator;
  @ViewChild(MatSort) sort3: MatSort;
  dataSource3 = new MatTableDataSource();
  displayedColumns3: string[] = [
    'index',
    'districtName',
    'member',
    'approvedOn',
    'status',
    'action',
  ];

  oldAffiliations: any[] = [];
  showSpinner: boolean = false;

  constructor(
    private _service: SlingshotService,
    private _spinner: NgxSpinnerService,
    private _dialog: MatDialog,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getOldAffiliations();
  }

  getOldAffiliations() {
    this.show_spinner();
    this._service.getOldAffiliations().subscribe((data) => {
      this.oldAffiliations = data.map((item, index) => {
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id,
          index: index + 1,
        };
      });
      this.dataSource3 = new MatTableDataSource(this.oldAffiliations);
      this.dataSource3.sort = this.sort3;
      this.dataSource3.paginator = this.paginator3;
      this.dataSource3.filterPredicate = (data: any, filter) => {
        let dataSource =
          data.requestedDistrict.name +
          data.members[0].firstName +
          ' ' +
          data.members[0].middleName +
          ' ' +
          data.members[0].lastName;
        dataSource = dataSource.toLowerCase();
        return dataSource.includes(filter);
      };
      this.hide_spinner();
    });
  }

  filterResult(searchKey: string) {
    searchKey = searchKey.replace(/  +/g, ' ');
    this.dataSource3.filter = searchKey.trim().toLowerCase();
  }

  getRegisteredDistrctInfo(personData: any) {
    this._dialog.open(DistrictApprovalDialog, {
      data: { distInfo: personData, flag: true, readOnly: true },
      autoFocus: false,
      width: '99%',
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

  deleteAffiliation(districtData) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete forever?', type: 'confirm' },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._service.deleteAffiliationForever(districtData);
        this._toastr.info('Affiliation data deleted.');
      }
    });
  }
}

@Component({
  selector: 'add-member-dialog',
  templateUrl: 'dialogs/add-member.html',
})
export class AddMemberDialog implements OnInit {
  personData: any;
  registerForm: FormGroup;
  allDistricts: any[] = [];
  event: any;
  showSpinner: boolean = false;
  isFileValid: boolean = true;

  constructor(
    public _dialogRef: MatDialogRef<DistrictApprovalDialog>,
    private _service: SlingshotService,
    private _toastr: ToastrService,
    private formBuilder: FormBuilder,
    private utility: UtilityService,
    private afStorage: AngularFireStorage,
    private _spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.personData = data;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/\d{10}/)]],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/\d{6}/)]],
      aadhaarNo: ['', [Validators.required, Validators.pattern(/\d{12}/)]],
      panNo: [
        '',
        [Validators.required, Validators.pattern(/[0-9 a-z A-Z]{10}/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
    });
    this._service.getAllDistricts().subscribe((data) => {
      data.map((item) => {
        this.allDistricts.push(item.payload.doc.data());
      });
    });
  }

  close() {
    this._dialogRef.close();
  }

  addMemberData(docs) {
    if (this.registerForm.invalid) {
      return;
    }
    let formData = this.getFormData(this.registerForm.value, docs);
    let members: any[] = this.personData.members;
    members.push(formData);
    this._service.addAffiliationMember(
      this.personData.requestedDistrict.id,
      members
    );
    this._toastr.success('Member Added Successfully.');
    this.close();
    this.hide_spinner();
  }

  getFormData(data, docs): any {
    return {
      id: Date.now(),
      role: 'Secretory',
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      dateOfBirth: this.utility.convertDateToEPOC(data.dateOfBirth),
      gender: data.gender,
      email: data.email,
      mobile: data.mobile,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      city: data.city,
      district: data.district,
      pin: data.pin,
      aadhaarNo: data.aadhaarNo,
      panNo: data.panNo,
      documents: docs,
    };
  }

  validatefile(event) {
    this.isFileValid = true;
    const file = event.target.files[0];
    if (
      (file && file.type == 'image/png') ||
      file.type == 'image/jpg' ||
      (file.type == 'image/jpeg' && file.size <= 1000000)
    ) {
      this.event = event;
    } else {
      this.isFileValid = false;
    }
  }

  uploadPhoto() {
    this.show_spinner();
    if (this.event) {
      return new Promise<any>((resolve, reject) => {
        var uniqueId = Date.now();
        let id = uniqueId;
        const file = this.event.target.files[0];
        const filePath = `Affiliations/${id}`;
        const fileRef = this.afStorage.ref(filePath);
        const task = this.afStorage.upload(filePath, file);
        task
          .snapshotChanges()
          .pipe(
            rxjs.last(),
            rxjs.switchMap(() => fileRef.getDownloadURL())
          )
          .subscribe((url) => {
            let docs = { photo: { id: id, documentURL: url } };
            this.addMemberData(docs);
          });
      });
    } else {
      let docs = null;
      this.addMemberData(docs);
    }
  }

  show_spinner() {
    this.showSpinner = true;
    this._spinner.show();
  }

  hide_spinner()                           {
                             this._spinner.hide();
    this.showSpinner =                                            false;
  }
}
