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
    private dialog: MatDialog,
    private router: Router,
    private utility: UtilityService,
    private _spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
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
      // password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', Validators.required],
      file1: ['', Validators.required],
      file2: ['', Validators.required],
      file3: ['', Validators.required],
      terms: ['', Validators.required],
      gender: ['', Validators.required]
    });
    // {
    //   validator: ConfirmPasswordValidator.MatchPassword
    // });
  }

  // fetch all available district list
  async getAvailableDistrictList() {
    await this.slingshotService.getAvailabelDistricts().subscribe(data => {
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
    this.availableDistricts.forEach(dist => { if (dist.id === id) { this.selectedDistrict = dist } });
  }

  registerDistrict() {
    this.showForm = true;
    window.scrollTo(0, 570);
  }

  onFormSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid || !this.isFileValid1 || !this.isFileValid2 || !this.isFileValid3 || !this.isChecked) {
      return;
    }

    let formData = this.prepareFormData(this.registerForm.value);
    this.slingshotService.registerAffiliationRequest(formData);
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Do you want to approve user?', type: 'register' },
      autoFocus: false,
      width: '80%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  prepareFormData(data: any): any {
    return {
      requestedDistrict: {
        id: this.selectedDistrict.id,
        name: this.selectedDistrict.name
      },
      members: [
        {
          id: this.selectedDistrict.id + 'Member01',
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
          documents: {}
        }
      ],
      approvedOn: '',
      approvedBy: '',
      modifiedOn: this.utility.convertDateToEPOC(new Date()),
      modifiedBy: '',
      status: 'Pending'
    }
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
