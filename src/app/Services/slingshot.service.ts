import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SlingshotService {
  
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

  getAvailabelDistricts() {
    return this.firestore.collection('districtList', ref => ref.where('isRegistered', '==', false).orderBy('name')).snapshotChanges();
  }

  getRegisteredDistricts() {
    return this.firestore.collection('districtList', ref => ref.where('isRegistered', '==', true).orderBy('name')).snapshotChanges();
  }

  getDistrictNameById(distArr, id): string {
    let distName: string;
    distArr.forEach(dist => {
      if (dist.id === id) {
        distName = dist.name;
      }
    });
    return distName;
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
