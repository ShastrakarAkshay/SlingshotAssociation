import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmDialogComponent } from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-refree-panel',
  templateUrl: './refree-panel.component.html',
  styleUrls: ['./refree-panel.component.scss']
})
export class RefreePanelComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'name', 'email', 'mobile', 'district', 'actions'];

  private refreeData: any[] = [];
  private showSpinner: boolean = false;

  constructor(private _dialog: MatDialog, private _service: SlingshotService, private _spinner: NgxSpinnerService, private _toastr: ToastrService) { }

  ngOnInit() {

    this._showSpinner();
    this._service.getAllRefrees().subscribe(data => {
      this.refreeData = data.map((item, index) => {
        return {
          id: item.payload.doc.id,
          index: index + 1,
          name: item.payload.doc.data().firstName + ' ' + item.payload.doc.data().middleName + ' ' + item.payload.doc.data().lastName,
          ...item.payload.doc.data()
        }
      });
      this.dataSource.data = this.refreeData;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this._hideSpinner();
    })
  }

  addRefree() {
    this._dialog.open(AddRefreeDialog, {
      autoFocus: false,
      width: '99%'
    });
  }

  editRefree(refreeData) {
    this._dialog.open(AddRefreeDialog, {
      autoFocus: false,
      width: '99%',
      data: refreeData
    });
  }

  deleteRefree(id:any){
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete?', type: 'confirm' },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._service.deleteRefreeById(id);
        this._toastr.info("Refree Deleted Successfully.");
      }
    });
  }

  _showSpinner() {
    this._spinner.show();
    this.showSpinner = true;
  }

  _hideSpinner() {
    this.showSpinner = false;
    this._spinner.hide();
  }

}



@Component({
  selector: 'add-refree-dialog',
  templateUrl: 'dialogs/add-refree-dialog.html',
  styles: [`* {
    font-family: "Didact Gothic", sans-serif;
  }
  .mat-dialog-container {
    margin-top: 100px !important;
  }
  `]
})
export class AddRefreeDialog implements OnInit {
  private refreeForm: FormGroup;
  private refreeData: any;
  private isEdit: boolean = false;
  private allDistricts: any[] = [];

  constructor(
    public _dialogRef: MatDialogRef<AddRefreeDialog>,
    private _service: SlingshotService,
    private formBuilder: FormBuilder,
    private utility: UtilityService,
    private _toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    // _dialogRef.disableClose = true;
    this.refreeData = data;
  }

  ngOnInit() {
    this.refreeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/\d{10}/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/\d{6}/)]],
      aadhaarNo: ['', [Validators.required, Validators.pattern(/\d{12}/)]]
    });

    if (this.refreeData) {
      this.refreeForm.setValue({
        firstName: this.refreeData.firstName,
        middleName: this.refreeData.middleName,
        lastName: this.refreeData.lastName,
        email: this.refreeData.email,
        mobile: this.refreeData.mobile,
        address: this.refreeData.address,
        city: this.refreeData.city,
        district: this.refreeData.district,
        pin: this.refreeData.pin,
        aadhaarNo: this.refreeData.aadhaarNo,
        dateOfBirth: this.refreeData.dateOfBirth
      });
      this.isEdit = true;
    }

    this._service.getAllDistricts().subscribe(data => {
      data.map(item => { this.allDistricts.push(item.payload.doc.data()) });
    });
  }

  close() {
    this._dialogRef.close();
  }

  addRefree() {
    if (this.refreeForm.invalid) {
      return;
    }
    let formData = this.refreeForm.value;
    formData['createdDate'] = this.utility.convertDateToEPOC(new Date());
    this._service.addRefree(formData);
    this._toastr.success("Refree Added Successfully.");
    this.close();
  }

  updateRefree() {
    if (this.refreeForm.invalid) {
      return;
    }

    this._service.updateRefreeById(this.refreeData.id, this.refreeForm.value);
    this._toastr.success("Refree Updated Successfully.");
    this.close();
  }
}


