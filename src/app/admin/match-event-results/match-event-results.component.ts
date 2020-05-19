import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmDialogComponent } from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { ModalDataService } from 'src/app/shared/services/modal-data.service';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-match-event-results',
  templateUrl: './match-event-results.component.html',
  styleUrls: ['./match-event-results.component.scss']
})
export class MatchEventResultsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'eventName', 'candidateName', 'district', 'score', 'rank', 'action'];

  private results: any[] = [];
  private showSpinner: boolean = false;

  constructor(private _dialog: MatDialog,
    private _service: SlingshotService,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService) {

  }

  ngOnInit() {
    this.getAllResultRecords();
  }

  getAllResultRecords() {
    this._service.getAllMatchResults().subscribe(data => {
      this.results = data.map((item, index) => {
        return {
          id: item.payload.doc.id,
          index: index + 1,
          ...item.payload.doc.data()
        }
      });
      this.dataSource.data = this.results;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  addMatchRecord() {
    this._dialog.open(MatchResultsDialog, {
      autoFocus: false,
      width: '99%'
    });
  }

  editMatchResult(resultData) {
    this._dialog.open(MatchResultsDialog, {
      autoFocus: false,
      width: '99%',
      data: resultData
    });
  }

  deleteResultById(id) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete?', type: 'confirm' },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._service.deleteMatchResultById(id);
        this._toastr.info("Result Deleted Successfully.");
      }
    });
  }


}

@Component({
  selector: 'results-dialog',
  templateUrl: 'dialogs/results-dialog.html',
  styleUrls: ['./match-event-results.component.scss']
})
export class MatchResultsDialog implements OnInit {
  private resultForm: FormGroup;
  private allDistricts: any[] = [];
  private allEvents: any[] = [];
  private isEdit: boolean = false;
  private selectedEvent: any;
  private resultData: any;
  private ageCategory: any[] = [];
  @ViewChild('event', { static: false }) event: ElementRef;

  constructor(
    public _dialogRef: MatDialogRef<MatchResultsDialog>,
    private formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _service: SlingshotService,
    private _utility: UtilityService,
    private _modalService: ModalDataService,
    private _mdIconRegistry: MatIconRegistry,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this._dialogRef.disableClose = true;
    this.resultData = data;
    this._mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit() {
    this.resultForm = this.formBuilder.group({
      eventId: ['', Validators.required],
      candidateName: ['', Validators.required],
      candidateDistrict: ['', Validators.required],
      candidateDOB: ['', Validators.required],
      candidateCertificateNo: ['', Validators.required],
      candidateRank: ['', Validators.required],
      candidateScore: ['', Validators.required],
      ageCategory: ['', Validators.required]
    });
    this._service.getAllDistricts().subscribe(data => {
      data.map(item => { this.allDistricts.push(item.payload.doc.data()) });
    });
    this.getAllEvents();
    this.ageCategory = this._modalService.getSlingshotCategories();
    if (this.resultData) {
      this.resultForm.setValue({
        eventId: this.resultData.eventInfo.id,
        candidateName: this.resultData.name,
        candidateDistrict: this.resultData.district,
        candidateDOB: this.resultData.dateOfBirth,
        candidateCertificateNo: this.resultData.certificateNo,
        candidateRank: this.resultData.rank,
        candidateScore: this.resultData.score,
        ageCategory: this.resultData.ageCategory
      })
      this.isEdit = true;
      this.selectedEvent = this.resultData.eventInfo;
    }
  }

  getData(formData): any {
    return {
      eventInfo: {
        ...this.selectedEvent
      },
      name: formData.candidateName,
      district: formData.candidateDistrict,
      dateOfBirth: formData.candidateDOB,
      certificateNo: formData.candidateCertificateNo,
      ageCategory: formData.ageCategory,
      rank: formData.candidateRank,
      score: formData.candidateScore
    }
  }

  getAllEvents() {
    this._service.getAllEvents().subscribe(data => {
      this.allEvents = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
    })
  }

  onEventChange() {
    this.allEvents.forEach(item => {
      if (item.id === this.event.nativeElement.value) {
        this.selectedEvent = item;
      }
    })
  }

  close() {
    this._dialogRef.close();
  }

  addResult() {
    if (this.resultForm.invalid) {
      return;
    }
    this._service.addMatchResults({ ...this.getData(this.resultForm.value), createdDate: this._utility.convertDateToEPOC(new Date()) });
    this._toastr.success("Result Added Successfully.");
    this.close();
  }

  updateResult() {
    if (this.resultForm.invalid) {
      return;
    }
    this._service.updateMatchResults(this.resultData.id, this.getData(this.resultForm.value));
    this._toastr.success("Result Updated Successfully.");
    this.close();
  }
}

