import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlingshotService {

  constructor(private firestore: AngularFirestore, private _toastr: ToastrService) { }

  addDist() {
    console.log('service called');
    // this.districtList.forEach((item, index) => {
    //   this.firestore.collection("districtList").add(item).then(ref => {
    //     ref.set({ id: ref.id }, { merge: true });
    //   });
    // });
  }

  getAllDistricts(): any {
    return this.firestore.collection('districtList', ref => ref.orderBy('name')).snapshotChanges();

  }

  getAvailabelDistricts(): any {
    return this.firestore.collection('districtList', ref => ref.where('isRegistered', '==', false).orderBy('name')).snapshotChanges();
  }

  getRegisteredDistricts(): any {
    return this.firestore.collection('districtList', ref => ref.where('isRegistered', '==', true).orderBy('name')).snapshotChanges();
  }

  getDistrictById(distArr: any, id: string): any {
    let district;
    distArr.forEach(dist => { if (dist.id === id) { district = dist } });
    return district;
  }

  getDistrictInfoById(id: string): any {
    return this.firestore.collection("districtList").doc(id);
  }

  districtRegistration(data: any, userID: any) {
    // this.firestore.collection("RegistrationRequests").add(data);
    this.firestore.collection("RegistrationRequests").doc(userID).set(data);
  }

  getAffiliationRequests(): any {
    return this.firestore.collection("RegistrationRequests", ref => ref.orderBy('firstName', 'asc')).snapshotChanges();
  }

  getUserById(id: string): any {
    return this.firestore.collection('RegistrationRequests').doc(id).get();
  }

  approveDistrict(data: any): any {
    this.firestore.doc('RegisteredDistricts/' + data.requestedDistrict.id).collection('Members').get().subscribe(config => {
      // 1. check district id is already exist or not
      if (config.size === 0) {
        // If not exist then add
        this.firestore.collection('RegisteredDistricts').doc(data.requestedDistrict.id).collection('Members').doc(data.id).set(data);
        // Update isRegister flag in district list
        this.firestore.collection('districtList').doc(data.requestedDistrict.id).update({ isRegistered: true });
        // Delete user data from RegistrationRequests collection
        this.firestore.collection('RegistrationRequests').doc(data.id).delete();
      } else {
        this._toastr.error("District is already allocated.");
      }
    });
  }

  getLatestMatchResults() {
    // return only 3 or 4 latest records (winning)
    return null;
  }

  getAllMatchesResults() {
    return null;
  }

  getUpcommingEvents() {
    return null;
  }

  getAssociationMemberList() {
    return null;
  }
}
