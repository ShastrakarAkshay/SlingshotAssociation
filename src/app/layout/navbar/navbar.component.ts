import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private isLoggedIn: boolean = false;

  constructor(
    private auth: AuthService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.auth.isLoggedIn();
    this.auth.isUserLoggedIn.subscribe(data => this.isLoggedIn = data);
    this.navbarCollapseHide();
  }

  signOut() {
    this._dialog.open(LogouDialog, {
      autoFocus: false
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



@Component({
  selector: 'logout-dialog',
  templateUrl: 'logout-dialog.html',
  styles: [`* {
    font-family: "Didact Gothic", sans-serif;
  }`]
})
export class LogouDialog implements OnInit {

  constructor(private _router: Router,  private _auth: AuthService, public _dialogRef: MatDialogRef<LogouDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {
    _dialogRef.disableClose = true;
  }

  ngOnInit() { }

  close() {
    this._dialogRef.close();
  }

  sigOut(){
    this.close();
    this._auth.signOut();
  }
}
