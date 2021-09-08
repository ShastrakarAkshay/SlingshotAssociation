import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  public menu: any[] = [
    {
      name: 'Home',
      link: '/',
      isActive: false,
    },
    {
      name: 'Sports',
      link: '/sports',
      isActive: false,
    },
    {
      name: 'Affiliation',
      link: ';affiliation',
      isActive: false,
    },
    {
      name: 'Committee',
      link: '/committee',
      isActive: false,
    },
    {
      name: 'Dashboard',
      link: '/admin',
      isActive: false,
    },
    {
      name: 'Gallery',
      link: '',
      isActive: false,
    },
    {
      name: 'Contact us',
      link: '/contact',
      isActive: false,
    },
  ];

  constructor(private auth: AuthService, private _dialog: MatDialog) {}

  ngOnInit() {
    this.auth.isLoggedIn();
    this.auth.isUserLoggedIn.subscribe((data) => (this.isLoggedIn = data));
    this.navbarCollapseHide();
  }

  signOut() {
    let dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to logout?', type: 'confirm' },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.auth.signOut();
      }
    });
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
