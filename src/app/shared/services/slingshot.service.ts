import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlingshotService {

  constructor(private firestore: AngularFirestore, private _toastr: ToastrService) { }
  districtList = [
    { name: 'Ahmednagar', isRegistered: false },
    { name: 'Akola', isRegistered: false },
    { name: 'Amravati', isRegistered: false },
    { name: 'Aurangabad', isRegistered: false },
    { name: 'Bhandara', isRegistered: false },
    { name: 'Buldhana', isRegistered: false },
    { name: 'Chandrapur', isRegistered: false },
    { name: 'Dhule', isRegistered: false },
    { name: 'Gadchiroli', isRegistered: false },
    { name: 'Gondia', isRegistered: false },
    { name: 'Hingoli', isRegistered: false },
    { name: 'Jalgaon', isRegistered: false },
    { name: 'Jalna', isRegistered: false },
    { name: 'Kolhapur', isRegistered: false },
    { name: 'Latur', isRegistered: false },
    { name: 'Mumbai', isRegistered: false },
    { name: 'Nagpur', isRegistered: false },
    { name: 'Nanded', isRegistered: false },
    { name: 'Nandurbar', isRegistered: false },
    { name: 'Nashik', isRegistered: false },
    { name: 'Osmanabad', isRegistered: false },
    { name: 'Palghar', isRegistered: false },
    { name: 'Parbhani', isRegistered: false },
    { name: 'Pune', isRegistered: false },
    { name: 'Raigad', isRegistered: false },
    { name: 'Alibag', isRegistered: false },
    { name: 'Ratnagiri', isRegistered: false },
    { name: 'Sangli', isRegistered: false },
    { name: 'Satara', isRegistered: false },
    { name: 'Sindhudurg', isRegistered: false },
    { name: 'Oros', isRegistered: false },
    { name: 'Solapur', isRegistered: false },
    { name: 'Thane', isRegistered: false },
    { name: 'Wardha', isRegistered: false },
    { name: 'Washim', isRegistered: false },
    { name: 'Yavatmal', isRegistered: false }
  ];
  addDist() {
    // console.log('service called');
    // this.districtList.forEach((item, index) => {
    //   this.firestore.collection("DistrictList").add(item).then(ref => {
    //     ref.set({ id: ref.id }, { merge: true });
    //   });
    // });
  }

  getAllDistricts(): any {
    return this.firestore.collection('DistrictList', ref => ref.orderBy('name', 'asc')).snapshotChanges();

  }

  getAvailabelDistricts(): any {
    return this.firestore.collection('DistrictList', ref => ref.where('isRegistered', '==', false).orderBy('name', 'asc')).snapshotChanges();
  }

  getRegisteredDistricts(): any {
    return this.firestore.collection('DistrictList', ref => ref.where('isRegistered', '==', true).orderBy('name', 'asc')).snapshotChanges();
  }

  getDistrictById(distArr: any, id: string): any {
    let district;
    distArr.forEach(dist => { if (dist.id === id) { district = dist } });
    return district;
  }

  getRegisteredDistrictInfoById(id: string): any {
    return this.firestore.collection("ApprovedDistricts").doc(id).collection('Members').snapshotChanges();
  }

  districtRegistration(data: any, userID: any) {
    // this.firestore.collection("AffiliationRequests").add(data);
    this.firestore.collection("AffiliationRequests").doc(userID).set(data);
  }

  getAffiliationRequests(): any {
    return this.firestore.collection("AffiliationRequests", ref => ref.orderBy('firstName', 'asc')).snapshotChanges();
  }

  getUserById(id: string): any {
    return this.firestore.collection('AffiliationRequests').doc(id).get();
  }

  approveDistrict(data: any): any {
    this.firestore.doc('ApprovedDistricts/' + data.requestedDistrict.id).collection('Members').get().subscribe(config => {
      // 1. check district id is already exist or not
      if (config.size === 0) {
        // If not exist then add
        this.firestore.collection('ApprovedDistricts').doc(data.requestedDistrict.id).collection('Members').doc(data.id).set(data);
        // Update isRegister flag in district list
        this.firestore.collection('DistrictList').doc(data.requestedDistrict.id).update({ isRegistered: true });
        // Delete user data from RegistrationRequests collection
        this.firestore.collection('AffiliationRequests').doc(data.id).delete();
        this._toastr.success("District Approved Successfully.")
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
