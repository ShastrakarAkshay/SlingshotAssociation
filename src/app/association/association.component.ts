import { Component, OnInit } from '@angular/core';
import { SlingshotService } from '../Services/slingshot.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  showForm: boolean = false;
  disabledRegBtn: boolean = true;

  private districtName: string;
  private availableDistricts: Array<any> = [];
  private registerForm: FormGroup;
  private allDistricts: Array<any> = [];

  constructor(private slingshotService: SlingshotService, private formBuilder: FormBuilder) {
    this.getAvailableDistrictList();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      mobile: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pin: ['', Validators.required],
      aadhaarNo: ['', Validators.required],
      panNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  // fetch all available district list
  getAvailableDistrictList() {
    this.slingshotService.getAvailabelDistricts().subscribe(data => {
      data.map(item => {
        this.availableDistricts.push(item.payload.doc.data());
      });
    });

    this.slingshotService.getAllDistricts().subscribe(data => {
      data.map(item => {
        this.allDistricts.push(item.payload.doc.data());
      });
    });

  }

  onDistrictChange(id) {
    this.disabledRegBtn = false;
    this.districtName = this.slingshotService.getDistrictNameById(this.availableDistricts, id);
  }

  registerDistrict() {
    this.showForm = true;
  }

  onFormSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  onFormReset() {
    this.registerForm.reset();
  }

}
