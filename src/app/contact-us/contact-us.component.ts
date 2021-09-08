import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SlingshotService } from "../shared/services/slingshot.service";
import { ModalDataService } from "../shared/services/modal-data.service";
import { UtilityService } from "../shared/services/utility.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  members: any[] = [];
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _service: SlingshotService,
    private dataService: ModalDataService,
    private _utility: UtilityService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.members = this.dataService.getAssociationMembers();
    this.contactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required, Validators.pattern(/\d{10}/)]],
      message: ["", Validators.required],
    });
  }

  clearForm() {
    this.contactForm.reset();
  }

  sendEnquiry() {
    let formData = this.contactForm.value;
    formData["createdDate"] = this._utility.convertDateToEPOC(new Date());
    this._service.sendEnquiry(formData);
    this.clearForm();
  }
}
