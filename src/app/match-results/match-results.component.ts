import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.scss']
})
export class MatchResultsComponent implements OnInit {

  private matchResults: any[] = [];
  private showSpinner:boolean = false;
  
  constructor(private _service: SlingshotService, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getAllResultRecords();
  }

  getAllResultRecords() {
    this.show_spinner();
    this._service.getAllMatchResults().subscribe(data => {
      this.matchResults = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      this.hide_spinner();
    })
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
