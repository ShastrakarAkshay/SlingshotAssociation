import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private isLoggedIn: boolean = false;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.isLoggedIn();
    this.auth.isUserLoggedIn.subscribe(data => this.isLoggedIn = data);
    this.navbarCollapseHide();
  }

  signOut() {
    this.auth.signOut();
  }

  navbarCollapseHide() {
    $('.navbar-nav, .outline').on('click', function () {
      if (!$(this).hasClass('dropdown-toggle')) {
        $('.navbar-collapse').collapse('hide');
      }
    });

    $(document).on('click', function () {
      if (!$(this).hasClass('dropdown-toggle')) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  }
}
