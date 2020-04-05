import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-refree-panel',
  templateUrl: './refree-panel.component.html',
  styleUrls: ['./refree-panel.component.scss']
})
export class RefreePanelComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'eventTitle', 'eventDate', 'status', 'actions'];

  private refreeData: any[] = [];
  private showSpinner:boolean = false;
  
  constructor(private _dialog: MatDialog, private _service: SlingshotService, private _spinner: NgxSpinnerService, private _toastr: ToastrService) { }

  ngOnInit() {
  }

  addRefree() {
    this._dialog.open(AddRefreeDialog, {
      autoFocus: false,
      width: '60%'
    });
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
  private eventData: any;
  private isEdit: boolean = false;

  constructor(
    public _dialogRef: MatDialogRef<AddRefreeDialog>,
    private _service: SlingshotService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    _dialogRef.disableClose = true;
    this.eventData = data;
  }

  ngOnInit() {
    this.refreeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      emial: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      aadhaarNo: ['', Validators.required],
      district: ['', Validators.required]
    });

    if (this.eventData) {
      this.refreeForm.setValue({
        eventTitle: this.eventData.eventTitle,
        eventAddress: this.eventData.eventAddress,
        eventDate: this.eventData.eventDate,
        contactPersons: this.eventData.contactPersons,
        contactNumbers: this.eventData.contactNumbers,
        status: this.eventData.status
      });
      this.isEdit = true;
    }
  }

  close() {
    this._dialogRef.close();
  }

  AddRefree() {
    if (this.refreeForm.invalid) {
      return;
    }
    this._service.createEvent(this.refreeForm.value);
    this.close();
  }

  updateRefree() {
    if(this.refreeForm.invalid){
      return;
    }
    this._service.updateEventById(this.eventData.id, this.refreeForm.value);
    this.close();
  }
}


