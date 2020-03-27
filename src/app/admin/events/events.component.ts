import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'eventTitle', 'eventDate', 'actions'];

  private eventData: any[] = [];

  constructor(private _dialog: MatDialog, private _service: SlingshotService, private _spinner: NgxSpinnerService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this._service.getAllEvents().subscribe(data => {
      this.eventData = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      this.dataSource.data = this.eventData;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  createEvent() {
    this._dialog.open(CreateEventDialog, {
      autoFocus: false,
      width: '60%'
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
  constructor(
    public _dialogRef: MatDialogRef<CreateEventDialog>,
    private _service: SlingshotService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    _dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      eventTitle: ['', Validators.required],
      eventAddress: ['', Validators.required],
      eventDate: ['', Validators.required],
      contactPersons: ['', Validators.required],
      contactNumbers: ['', Validators.required]
    });
  }

  close() {
    this._dialogRef.close();
  }

  createEvent() {
    if (this.eventForm.invalid) {
      return;
    }

    this._service.createEvent(this.eventForm.value);
    this.close();
  }
}

