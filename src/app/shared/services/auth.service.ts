import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private firestore: AngularFirestore) { }

    signUp(data) : any {
      return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
        .then((result) => {
          this.firestore.collection("RegistrationRequests").doc(userID).set(data);
        }).catch((error) => {
          window.alert(error.message)
          return null;
        })
    }
}
