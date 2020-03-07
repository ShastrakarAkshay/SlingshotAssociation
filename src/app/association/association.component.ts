import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DistrictConfig } from '../shared/interfaces/slingshot.interface';
import { SlingshotService } from '../shared/services/slingshot.service';
import { AuthService } from '../shared/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  showForm: boolean = false;
  disabledRegBtn: boolean = true;

  private isFileValid1: boolean;
  private isFileValid2: boolean;
  private isFileValid3: boolean;
  private availableDistricts: Array<any> = [];
  private registerForm: FormGroup;
  private allDistricts: Array<any> = [];
  private isChecked: boolean = false;
  private selectedDistrict: DistrictConfig;
  private showSpinner: boolean = false;

  constructor(
    private slingshotService: SlingshotService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private _spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this._spinner.show();
    this.showSpinner = true;
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
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      file1: ['', Validators.required],
      file2: ['', Validators.required],
      file3: ['', Validators.required],
      terms: ['', Validators.required]
    }, {
      validator: ConfirmPasswordValidator.MatchPassword
    });
  }

  // fetch all available district list
  getAvailableDistrictList() {
    this.slingshotService.getAvailabelDistricts().subscribe(data => {
      data.map(item => { this.availableDistricts.push(item.payload.doc.data()) });
      this._spinner.hide();
      this.showSpinner = false;
    });

    this.slingshotService.getAllDistricts().subscribe(data => {
      data.map(item => { this.allDistricts.push(item.payload.doc.data()) });
    });

  }

  onDistrictChange(id) {
    this.disabledRegBtn = false;
    this.selectedDistrict = this.slingshotService.getDistrictById(this.availableDistricts, id);
  }

  registerDistrict() {
    this.showForm = true;
  }

  onFormSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid || !this.isFileValid1 || !this.isFileValid2 || !this.isFileValid3 || !this.isChecked) {
      return;
    }

    // create authentication user in firebase
    let formData = this.registerForm.value;
    formData['requestedDistrict'] = this.selectedDistrict;
    this.auth.signUp(formData);
  }

  onFormReset() {
    this.registerForm.reset();
  }

  validateFileUpload(e, doc) {
    const file = e.target.files[0];
    if (doc == 'doc1')
      this.isFileValid1 = false;
    else if (doc == 'doc2')
      this.isFileValid2 = false;
    else if (doc == 'doc3')
      this.isFileValid3 = false;
    if (file && file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg') {
      if (file.size <= 1000000)
        if (doc == 'doc1')
          this.isFileValid1 = true;
        else if (doc == 'doc2')
          this.isFileValid2 = true;
        else if (doc == 'doc3')
          this.isFileValid3 = true;
    }
  }
}
