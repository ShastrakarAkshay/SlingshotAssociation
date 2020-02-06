import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.navbar-nav, .outline').on('click', function() {
      if (!$(this).hasClass('dropdown-toggle')) {
        $('.navbar-collapse').collapse('hide');
      }
    });

    $(document).on('click', function() {
      if (!$(this).hasClass('dropdown-toggle')) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  }

}
