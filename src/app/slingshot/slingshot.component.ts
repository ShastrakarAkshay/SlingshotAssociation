import { Component, OnInit } from '@angular/core';
import { ModalDataService } from '../shared/services/modal-data.service';

@Component({
  selector: 'app-slingshot',
  templateUrl: './slingshot.component.html',
  styleUrls: ['./slingshot.component.scss'],
})
export class SlingshotComponent implements OnInit {
  categories: any[] = [];
  rules: any[] = [];

  constructor(private dataService: ModalDataService) {}

  ngOnInit() {
    this.categories = this.dataService.getSlingshotCategories();
    this.rules = this.dataService.getSlingshotRules();
    window.scrollTo(0, 0);
  }
}
