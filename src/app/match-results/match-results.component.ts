import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';

@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.scss']
})
export class MatchResultsComponent implements OnInit {

  private matchResults: any[] = [];
  
  constructor(private _service: SlingshotService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getAllResultRecords();
  }

  getAllResultRecords() {
    this._service.getAllMatchResults().subscribe(data => {
      this.matchResults = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
    })
  }

}
