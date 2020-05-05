import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'eventTitle', 'eventDate', 'status', 'actions'];

  private eventData: any[] = [];
  private showSpinner: boolean = false;

  constructor(private _dialog: MatDialog, private _service: SlingshotService, private _spinner: NgxSpinnerService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.showSpinner = true;
    this._spinner.show();

    this._service.getAllEvents().subscribe(data => {
      this.eventData = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      this.dataSource.data = this.validateDelete(this.eventData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      this.showSpinner = false;
      this._spinner.hide();
    })
  }

  validateDelete(eventData) {
    eventData.forEach(item => {
      item.isDelete = true;
      let eventDate = new Date(item.eventDate);
      let currentDate = new Date();
      if (eventDate < currentDate) {
        item.isDelete = false;
      }
    });
    return eventData;
  }

  createEvent() {
    this._dialog.open(CreateEventDialog, {
      autoFocus: false,
      width: '60%'
    });
  }

  deleteEventById(id, isDelete) {
    if (!isDelete) {
      return;
    }
    
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete?', type: 'confirm' },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._service.deleteEventById(id);
        this._toastr.info("Event Deleted Successfully.");
      }
    });
  }

  editEvent(event: any) {
    this._dialog.open(CreateEventDialog, {
      autoFocus: false,
      width: '99%',
      data: event
    });
  }

}


@Component({
  selector: 'create-event-dialog',
  templateUrl: 'dialogs/create-event.html',
  styles: [`* {
    font-family: "Didact Gothic", sans-serif;
  }
  .mat-dialog-container {
    margin-top: 100px !important;
  }
  `]
})
export class CreateEventDialog implements OnInit {
  private eventForm: FormGroup;
  private eventData: any;
  private isEdit: boolean = false;

  constructor(
    public _dialogRef: MatDialogRef<CreateEventDialog>,
    private _service: SlingshotService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private utility: UtilityService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    _dialogRef.disableClose = true;
    this.eventData = data;
  }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      eventTitle: ['', Validators.required],
      eventAddress: ['', Validators.required],
      eventDate: ['', Validators.required],
      contactPersons: ['', Validators.required],
      contactNumbers: ['', Validators.required],
      status: ['', Validators.required]
    });

    if (this.eventData) {
      this.eventForm.setValue({
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

  createEvent() {
    if (this.eventForm.invalid) {
      return;
    }
    let formData = this.eventForm.value;
    formData['createdDate'] = this.utility.convertDateToEPOC(new Date());
    this._service.createEvent(formData);
    this._toastr.success("Event Created Successfully.");
    this.close();
  }

  updateEvent() {
    if (this.eventForm.invalid) {
      return;
    }
    this._service.updateEventById(this.eventData.id, this.eventForm.value);
    this._toastr.success("Event Updated Successfully.");
    this.close();
  }
}

