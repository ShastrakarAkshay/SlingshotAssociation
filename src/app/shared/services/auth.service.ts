import { Injectable, NgZone, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private firestore: AngularFirestore,
    private dialog: MatDialog,
    private toastr: ToastrService
    ) { }

  signUp(data): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        delete data.password; delete data.terms; delete data.confirmPassword; data.isApproved = false;
        this.firestore.collection("RegistrationRequests").doc(result.user.uid).set(data);
        this.dialog.open(PopupDialog, {
          width: '80%'
        });
      }).catch((error) => {
        console.log(error)
        this.toastr.error(error.message)
      });
  }

  signIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/admin']);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}


@Component({
  selector: 'popup-dialog',
  templateUrl: 'popup-views/registration-popup.html'
})
export class PopupDialog implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<PopupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {
    dialogRef.disableClose = true;
  }

  ngOnInit() { }

  onNoClick() {
    this.dialogRef.close();
    this.router.navigateByUrl('/login');
  }
}
