import { Injectable, NgZone, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginResource = new BehaviorSubject<any>('');
  public isUserLoggedIn = this.loginResource.asObservable();

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
        delete data.password;
        this.firestore.collection("AffiliationRequests").doc(result.user.uid).set({role: 'President', ...data});

        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: { message: 'Do you want to approve user?', type: 'register' },
          autoFocus: false,
          width: '80%'
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.router.navigateByUrl('/login');
          }
        });
      }).catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          this.toastr.error('Email address already in used.')
        } else {
          this.toastr.error(error.message);
        }
      });
  }

  async signIn(email, password) {
    return await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/admin']);
        localStorage.setItem('login-token', result.user.uid);
        localStorage.setItem('user-id', result.user.uid);
        this.isLoggedIn();
      }).catch((error) => {
        switch(error.code){
          case 'auth/user-not-found' : this.toastr.error('User Not Found'); break;
          case 'auth/wrong-password' : this.toastr.error('Wrong Password'); break;
        }
      })
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
    this.isLoggedIn();
  }

  async isLoggedIn(): Promise<any> {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
    if (user) {
      this.loginResource.next(true);
    } else {
      this.loginResource.next(false);
      localStorage.removeItem('login-token');
      localStorage.removeItem('user-id');
    }
    return user;
  }
}