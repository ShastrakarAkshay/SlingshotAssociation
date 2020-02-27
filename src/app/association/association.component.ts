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
  private isFileValid1: boolean;
  private isFileValid2: boolean;
  private isFileValid3: boolean;
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
      mobile: ['', [Validators.required, Validators.pattern(/\d{10}/)]],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/\d{6}/)]],
      aadhaarNo: ['', [Validators.required, Validators.pattern(/\d{12}/)]],
      panNo: ['', [Validators.required, Validators.pattern(/[0-9 a-z A-Z]{10}/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      file1: ['', Validators.required],
      file2: ['', Validators.required],
      file3: ['', Validators.required]
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
    if (this.registerForm.invalid && !this.isFileValid1 && !this.isFileValid2 && !this.isFileValid3) {
      return;
    }

    // form registration logic
  }

  onFormReset() {
    this.registerForm.reset();
  }

  fileUpload(e, doc) {
    const file = e.target.files[0];

    if (doc == 'doc1')
      this.isFileValid1 = false;
    else if (doc == 'doc2')
      this.isFileValid2 = false;
    else if (doc == 'doc3')
      this.isFileValid3 = false;

    if (file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg') {
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
