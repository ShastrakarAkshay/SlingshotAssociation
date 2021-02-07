import { Injectable, NgZone, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginResource = new BehaviorSubject<any>('');
  private masterResource = new BehaviorSubject<any>('');
  public isUserLoggedIn = this.loginResource.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private firestore: AngularFirestore,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private snackbar: MatSnackBar
  ) { }

  signUp(data): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        // Do something...
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
        switch (error.code) {
          case 'auth/user-not-found': this.toastr.error('User Not Found'); break;
          case 'auth/wrong-password': this.toastr.error('Wrong Password'); break;
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
    if (user && localStorage.getItem('master-token') !== '${slingshot}') {
      this.loginResource.next(true);
    } else {
      this.loginResource.next(false);
      localStorage.removeItem('login-token');
      localStorage.removeItem('user-id');
      localStorage.removeItem('login-time');
    }
    return user;
  }

  resetPassword(email: any) {
    return new Observable<any>(subsciber => {
      this.afAuth.auth.sendPasswordResetEmail(email).then(
        () => {
          this.snackbar.open('Password reset link sent to your email !!', '', {
            duration: 3000,
            panelClass: ['red-snackbar'],
            verticalPosition: 'top'
          });
          subsciber.next(true);
          subsciber.complete();
        },
        err => {
          if (err.code === 'auth/user-not-found') {
            this.snackbar.open('Invalid user', '', {
              duration: 3000,
              panelClass: ['red-snackbar'],
              verticalPosition: 'top'
            });
          }
          subsciber.next(false);
          subsciber.complete();
        }
      );
    });
  }

  manageSession() {
    if (localStorage.getItem('login-time')) {
      let timeStamp = Number(new Date().getTime());
      let loginTime = Number(localStorage.getItem('login-time'));
      const difference = ((timeStamp - loginTime) / 1000) / 60;
      if (difference > 120) {
        // expire session after 2 hour
        this.signOut();
        this.router.navigate(['/login']);
        this.snackbar.open('Session expired!', '', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
    }
  }

}