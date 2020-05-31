import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SlingshotService {

  constructor(private firestore: AngularFirestore, private _toastr: ToastrService, private storage: AngularFireStorage) { }
  districtList = [
    { id: 'SLINGSHOTMH0001', name: 'Ahmednagar', isRegistered: false },
    { id: 'SLINGSHOTMH0002', name: 'Akola', isRegistered: false },
    { id: 'SLINGSHOTMH0003', name: 'Amravati', isRegistered: false },
    { id: 'SLINGSHOTMH0004', name: 'Aurangabad', isRegistered: false },
    { id: 'SLINGSHOTMH0005', name: 'Bhandara', isRegistered: false },
    { id: 'SLINGSHOTMH0006', name: 'Buldhana', isRegistered: false },
    { id: 'SLINGSHOTMH0007', name: 'Chandrapur', isRegistered: false },
    { id: 'SLINGSHOTMH0008', name: 'Dhule', isRegistered: false },
    { id: 'SLINGSHOTMH0009', name: 'Gadchiroli', isRegistered: false },
    { id: 'SLINGSHOTMH0010', name: 'Gondia', isRegistered: false },
    { id: 'SLINGSHOTMH0011', name: 'Hingoli', isRegistered: false },
    { id: 'SLINGSHOTMH0012', name: 'Jalgaon', isRegistered: false },
    { id: 'SLINGSHOTMH0013', name: 'Jalna', isRegistered: false },
    { id: 'SLINGSHOTMH0014', name: 'Kolhapur', isRegistered: false },
    { id: 'SLINGSHOTMH0015', name: 'Latur', isRegistered: false },
    { id: 'SLINGSHOTMH0016', name: 'Mumbai', isRegistered: false },
    { id: 'SLINGSHOTMH0017', name: 'Nagpur', isRegistered: false },
    { id: 'SLINGSHOTMH0018', name: 'Nanded', isRegistered: false },
    { id: 'SLINGSHOTMH0019', name: 'Nandurbar', isRegistered: false },
    { id: 'SLINGSHOTMH0020', name: 'Nashik', isRegistered: false },
    { id: 'SLINGSHOTMH0021', name: 'Osmanabad', isRegistered: false },
    { id: 'SLINGSHOTMH0022', name: 'Palghar', isRegistered: false },
    { id: 'SLINGSHOTMH0023', name: 'Parbhani', isRegistered: false },
    { id: 'SLINGSHOTMH0024', name: 'Pune', isRegistered: false },
    { id: 'SLINGSHOTMH0025', name: 'Raigad', isRegistered: false },
    { id: 'SLINGSHOTMH0026', name: 'Alibag', isRegistered: false },
    { id: 'SLINGSHOTMH0027', name: 'Ratnagiri', isRegistered: false },
    { id: 'SLINGSHOTMH0028', name: 'Sangli', isRegistered: false },
    { id: 'SLINGSHOTMH0029', name: 'Satara', isRegistered: false },
    { id: 'SLINGSHOTMH0030', name: 'Sindhudurg', isRegistered: false },
    { id: 'SLINGSHOTMH0031', name: 'Oros', isRegistered: false },
    { id: 'SLINGSHOTMH0032', name: 'Solapur', isRegistered: false },
    { id: 'SLINGSHOTMH0033', name: 'Thane', isRegistered: false },
    { id: 'SLINGSHOTMH0034', name: 'Wardha', isRegistered: false },
    { id: 'SLINGSHOTMH0035', name: 'Washim', isRegistered: false },
    { id: 'SLINGSHOTMH0036', name: 'Yavatmal', isRegistered: false }
  ];

  // addDist() {
  //   this.districtList.forEach((item, index) => {
  //     this.firestore.collection('DistrictList').doc(item.id).set(item);
  //   });
  // }

  getAllDistricts(): any {
    return this.firestore.collection('DistrictList', ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  getAvailabelDistricts(): any {
    return this.firestore.collection('DistrictList', ref => ref.where('isRegistered', '==', false)).snapshotChanges();
  }

  getRegisteredDistricts(): any {
    return this.firestore.collection('DistrictList', ref => ref.where('isRegistered', '==', true)).snapshotChanges();
  }

  getRegisteredDistrictInfoById(id: string): any {
    return this.firestore.collection('ApprovedDistricts').doc(id).snapshotChanges();
  }

  districtRegistration(data: any, userID: any) {
    this.firestore.collection("AffiliationRequests").doc(userID).set(data);
  }

  getAffiliationRequests(): any {
    return this.firestore.collection("AffiliationRequests").snapshotChanges();
  }

  deleteRequestById(id: any, doc: any): any {
    this.firestore.collection('AffiliationRequests').doc(id).delete();
    // delete images from storage
    if(doc && doc.length){
      this.storage.storage.ref().child(`Affiliations/${doc.adhaar.id}`).delete();
      this.storage.storage.ref().child(`Affiliations/${doc.pan.id}`).delete();
      this.storage.storage.ref().child(`Affiliations/${doc.photo.id}`).delete();
    }
  }

  getUserById(id: string): any {
    return this.firestore.collection('AffiliationRequests').doc(id).get();
  }

  registerAffiliationRequest(data: any) {
    return this.firestore.collection("AffiliationRequests").add(data);
  }

  approveDistrict(districtData: any): any {
    return this.firestore.collection('ApprovedDistricts').doc(districtData.requestedDistrict.id).snapshotChanges();
  }

  getApprovedDistrictInfo(): any {
    return this.firestore.collection('ApprovedDistricts').snapshotChanges();
  }

  deleteDistrictAffiliation(data: any): any {
    this.firestore.collection('OLD_AFFILIATIONS').add({ ...data, status: 'rejected' });
    this.firestore.collection('DistrictList').doc(data.requestedDistrict.id).update({ isRegistered: false });
    this.firestore.collection('ApprovedDistricts').doc(data.requestedDistrict.id).delete();
  }

  getOldAffiliations(): any {
    return this.firestore.collection('OLD_AFFILIATIONS').snapshotChanges();
  }

  addAffiliationMember(districtId, membersData) {
    this.firestore.collection('ApprovedDistricts').doc(districtId).update({ members: membersData });
  }

  // ----------------- ENQUIRIES ---------------

  sendEnquiry(data: any) {
    this.firestore.collection('Enquiries').add(data);
  }

  getEnquiries(): any {
    return this.firestore.collection('Enquiries', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
  }

  deleteEnquiryById(id: any) {
    this.firestore.collection('Enquiries').doc(id).delete();
  }

  // ----------------- EVENTS ---------------

  createEvent(event) {
    this.firestore.collection('Events').add(event);
  }

  getAllEvents(): any {
    return this.firestore.collection('Events', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
  }

  getActiveEvents(): any {
    return this.firestore.collection('Events', ref => ref.where('status', '==', 'Active')).snapshotChanges();
  }

  deleteEventById(id: any): any {
    this.firestore.collection('Events').doc(id).delete();
  }

  updateEventById(id: any, data: any) {
    this.firestore.collection('Events').doc(id).update(data);
  }

  updateEventStatusById(id: any, status_desc: string) {
    this.firestore.collection('Events').doc(id).update({
      status: status_desc
    })
  }

  // ----------------- REFREE ---------------

  addRefree(data: any) {
    this.firestore.collection('Refree').add(data);
  }

  getAllRefrees(): any {
    return this.firestore.collection('Refree', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
  }

  updateRefreeById(id: any, data: any) {
    this.firestore.collection('Refree').doc(id).update(data);
  }

  deleteRefreeById(id: any): any {
    this.firestore.collection('Refree').doc(id).delete();
  }

  // ----------------- MATCH RESULTS ---------------
  addMatchResults(data: any) {
    this.firestore.collection('MatchResults').add(data);
  }

  getAllMatchResults(): any {
    return this.firestore.collection('MatchResults', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
  }

  getFiveMatchResults(): any {
    return this.firestore.collection('MatchResults', ref => ref.orderBy('createdDate', 'desc').limit(5)).snapshotChanges();
  }

  deleteMatchResultById(id: any): any {
    this.firestore.collection('MatchResults').doc(id).delete();
  }

  updateMatchResults(id: any, data: any) {
    this.firestore.collection('MatchResults').doc(id).update(data);
  }

}
