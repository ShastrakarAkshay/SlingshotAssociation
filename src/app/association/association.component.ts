import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DistrictConfig } from '../shared/interfaces/slingshot.interface';
import { SlingshotService } from '../shared/services/slingshot.service';
import { AuthService } from '../shared/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmDialogComponent } from '../shared/dialogs/confirm-dialog/confirm-dialog.component';
import { UtilityService } from '../shared/services/utility.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, take, last, switchMap } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss'],
})
export class AssociationComponent implements OnInit {
  showForm: boolean = false;
  disabledRegBtn: boolean = true;

  isFileValid1: boolean;
  isFileValid2: boolean;
  isFileValid3: boolean;
  availableDistricts: Array<any> = [];
  registerForm: FormGroup;
  allDistricts: Array<any> = [];
  isChecked: boolean = false;
  selectedDistrict: DistrictConfig;
  showSpinner: boolean = false;
  documents = {};

  aadhharEvent: Event;
  panEvent: Event;
  photoEvent: Event;
  downloadURL: Observable<string>;

  registeredDistrictId: any;

  constructor(
    private slingshotService: SlingshotService,
    private firestore: AngularFirestore,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    @Inject(AngularFireStorage) private afStorage: AngularFireStorage,
    private firebase: AngularFirestore,
    private dialog: MatDialog,
    private router: Router,
    private utility: UtilityService,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.show_spinner();
    this.getAvailableDistrictList();
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/\d{10}/)]],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/\d{6}/)]],
      aadhaarNo: ['', [Validators.required, Validators.pattern(/\d{12}/)]],
      panNo: ['', [Validators.required, Validators.pattern(/[0-9 a-z A-Z]{10}/)]],
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', Validators.required],
      file1: ['', Validators.required],
      file2: ['', Validators.required],
      file3: ['', Validators.required],
      terms: ['', Validators.required],
      gender: ['', Validators.required],
    });
    // {
    //   validator: ConfirmPasswordValidator.MatchPassword
    // });
  }

  // fetch all available district list
  async getAvailableDistrictList() {
    await this.slingshotService.getAvailabelDistricts().subscribe((data) => {
      data.map((item) => {
        this.availableDistricts.push(item.payload.doc.data());
      });
      this.hide_spinner();
    });

    this.slingshotService.getAllDistricts().subscribe((data) => {
      data.map((item) => {
        this.allDistricts.push(item.payload.doc.data());
      });
    });
  }

  show_spinner() {
    this.showSpinner = true;
    this._spinner.show();
  }

  hide_spinner() {
    this._spinner.hide();
    this.showSpinner = false;
  }

  onDistrictChange(id) {
    this.disabledRegBtn = false;
    this.availableDistricts.forEach((dist) => {
      if (dist.id === id) {
        this.selectedDistrict = dist;
      }
    });
  }

  registerDistrict() {
    this.showForm = true;
    window.scrollTo(0, 570);
  }

  onFormSubmit() {
    // stop here if form is invalid
    if (
      this.registerForm.invalid ||
      !this.isFileValid1 ||
      !this.isFileValid2 ||
      !this.isFileValid3 ||
      !this.isChecked
    ) {
      return;
    }
    this.saveFormData();
  }

  saveFormData() {
    this.show_spinner();
    let formData = this.prepareFormData(this.registerForm.value);
    this.slingshotService.registerAffiliationRequest(formData).then((res) => {
      console.log('data saved successfully');
      this.registeredDistrictId = res.id;
      this.hide_spinner();
      this.uploadAdhaar(this.aadhharEvent);
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: { message: 'Do you want to approve user?', type: 'register' },
        autoFocus: false,
        width: '80%',
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.router.navigateByUrl('/');
        }
      });
    });
  }

  prepareFormData(data: any): any {
    return {
      requestedDistrict: {
        id: this.selectedDistrict.id,
        name: this.selectedDistrict.name,
      },
      members: [
        {
          id: Date.now(),
          role: 'President',
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          dateOfBirth: this.utility.convertDateToEPOC(data.dateOfBirth),
          gender: data.gender,
          email: data.email,
          mobile: data.mobile,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2,
          city: data.city,
          district: data.district,
          pin: data.pin,
          aadhaarNo: data.aadhaarNo,
          panNo: data.panNo,
          documents: {},
        },
      ],
      docs: null,
      approvedOn: '',
      approvedBy: '',
      createdDate: this.utility.convertDateToEPOC(new Date()),
      modifiedBy: '',
      status: 'Pending',
    };
  }

  onFormReset() {
    this.registerForm.reset();
  }

  validateFileUpload(e, doc) {
    const file = e.target.files[0];
    if (doc == 'doc1') {
      this.isFileValid1 = false;
      this.aadhharEvent = e;
    } else if (doc == 'doc2') {
      this.isFileValid2 = false;
      this.panEvent = e;
    } else if (doc == 'doc3') {
      this.isFileValid3 = false;
      this.photoEvent = e;
    }
    if ((file && file.type == 'image/png') || file.type == 'image/jpg' || file.type == 'image/jpeg') {
      if (file.size <= 1000000)
        if (doc == 'doc1') this.isFileValid1 = true;
        else if (doc == 'doc2') this.isFileValid2 = true;
        else if (doc == 'doc3') this.isFileValid3 = true;
    }
  }

  uploadAdhaar(event) {
    return new Promise<any>((resolve, reject) => {
      var uniqueId = Date.now();
      let id = uniqueId;
      const file = event.target.files[0];
      const filePath = `Affiliations/${id}`;
      const fileRef = this.afStorage.ref(filePath);
      const task = this.afStorage.upload(filePath, file);
      task
        .snapshotChanges()
        .pipe(
          last(),
          switchMap(() => fileRef.getDownloadURL())
        )
        .subscribe((url) => {
          this.documents['adhaar'] = { id: id, documentURL: url };
          this.uploadPan(this.panEvent);
        });
    });
  }

  uploadPan(event) {
    return new Promise<any>((resolve, reject) => {
      var uniqueId = Date.now();
      let id = uniqueId;
      const file = event.target.files[0];
      const filePath = `Affiliations/${id}`;
      const fileRef = this.afStorage.ref(filePath);
      const task = this.afStorage.upload(filePath, file);
      task
        .snapshotChanges()
        .pipe(
          last(),
          switchMap(() => fileRef.getDownloadURL())
        )
        .subscribe((url) => {
          this.documents['pan'] = { id: id, documentURL: url };
          this.uploadPhoto(this.photoEvent);
        });
    });
  }

  uploadPhoto(event) {
    return new Promise<any>((resolve, reject) => {
      var uniqueId = Date.now();
      let id = uniqueId;
      const file = event.target.files[0];
      const filePath = `Affiliations/${id}`;
      const fileRef = this.afStorage.ref(filePath);
      const task = this.afStorage.upload(filePath, file);
      task
        .snapshotChanges()
        .pipe(
          last(),
          switchMap(() => fileRef.getDownloadURL())
        )
        .subscribe((url) => {
          this.documents['photo'] = { id: id, documentURL: url };
          this.firestore
            .collection('AffiliationRequests')
            .doc(this.registeredDistrictId)
            .update({ docs: this.documents })
            .then((res) => {});
        });
    });
  }
}
