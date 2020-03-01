import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SlingshotService {
  
  constructor(private firestore: AngularFirestore) { }

  addDist() {
    console.log('service called');
    // this.districtList.forEach((item, index) => {
    //   this.firestore.collection("districtList").add(item).then(ref => {
    //     ref.set({ id: ref.id }, { merge: true });
    //   });
    // });
  }
  
  getAllDistricts() {
    return this.firestore.collection('districtList', ref => ref.orderBy('name')).snapshotChanges();

  }

  getAvailabelDistricts(): any {
    return this.firestore.collection('districtList', ref => ref.where('isRegistered', '==', false).orderBy('name')).snapshotChanges();
  }

  getRegisteredDistricts(): any {
    return this.firestore.collection('districtList', ref => ref.where('isRegistered', '==', true).orderBy('name')).snapshotChanges();
  }

  getDistrictById(distArr, id): any {
    let district;
    distArr.forEach(dist => {if (dist.id === id) {district = dist}});
    return district;
  }

  districtRegistration(data: any){
    this.firestore.collection("RegistrationRequests").add(data);
  }

  getDistrictInfoById(id: string) {
    return null;
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
