import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss'],
})
export class EnquiriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'index',
    'name',
    'email',
    'mobile',
    'message',
    'action',
  ];
  enquiries: any[] = [];
  showSpinner: boolean = false;

  constructor(
    private _service: SlingshotService,
    private _spinner: NgxSpinnerService,
    private _dialog: MatDialog,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.showSpinner = true;
    this._spinner.show();
    this._service.getEnquiries().subscribe((data) => {
      this.enquiries = data.map((item, index) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
          index: index + 1,
        };
      });
      this.dataSource.data = this.enquiries;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this._spinner.hide();
      this.showSpinner = false;
    });
  }

  deleteEnquiryById(id) {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to delete?', type: 'confirm' },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._service.deleteEnquiryById(id);
        this._toastr.info('Enquiry Deleted Successfully.');
      }
    });
  }
}
