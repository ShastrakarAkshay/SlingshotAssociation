import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SlingshotService } from 'src/app/shared/services/slingshot.service';

@Component({
  selector: 'app-affiliation-requests',
  templateUrl: './affiliation-requests.component.html',
  styleUrls: ['./affiliation-requests.component.scss']
})
export class AffiliationRequestsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['index', 'name', 'email', 'actions'];

  private affiliatinRequests: any[] = [];
  private totalCount: number = 0;

  constructor(private _service: SlingshotService) { }

  ngOnInit() {
    this.getAffiliationRequestData();
  }

  getAffiliationRequestData() {
    this._service.getAffiliationRequests().subscribe(data => {
      this.affiliatinRequests = data.map(item => {
        return {
          id: item.payload.doc.id,
          index: Number(item.payload.newIndex) + 1,
          name: item.payload.doc.get('firstName') + ' ' + item.payload.doc.get('lastName'),
          ...item.payload.doc.data()
        }
      });
      console.log(this.affiliatinRequests)
      this.dataSource.data = this.affiliatinRequests;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  filterResult(serachKey: string) {
    this.dataSource.filter = serachKey.trim().toLowerCase();
  }

}
