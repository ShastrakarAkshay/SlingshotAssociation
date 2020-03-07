function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"admin\">\n    <div class=\"container mt-5\">\n        <div class=\"row actions\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <a routerLink=\"./requests\">approval Requests</a>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <a routerLink=\"./requests\">LInk2</a>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <a routerLink=\"./requests\">link3</a>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <a routerLink=\"./requests\">Link4</a>\n            </div>\n        </div>\n        <div class=\"row mt-5 bg-light\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAffiliationRequestsAffiliationRequestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"approval\">\n    <div class=\"container\">\n        <h2>approval requests</h2>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAffliationAffliationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"affiliation-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"head-sec text-center\">\r\n            <h2>Affiliated Districts</h2>\r\n            <p class=\"text-muted\">Some districts are not affiliated yet, for affiliation please contact.</p>\r\n            <div class=\"d-flex justify-content-center search-sec h-100\">\r\n                <div class=\"searchbar\">\r\n                    <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Search...\" #search (keyup)=\"searchDistrict(search.value)\">\r\n                    <a class=\"search_icon\"><i class=\"fa fa-search\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row dist-sec mt-3\">\r\n            <div class=\"col-sm-4\" *ngFor=\"let dist of registeredDistricts\">\r\n                <div class=\"card mt-3 text-white bg-dark\" (click)=\"getDistrictInfo(dist.id)\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">{{dist.name}}</h4>\r\n                        <p class=\"card-text\"> <a href=\"#\" class=\"action-button\">read more</a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <i class=\"fa fa-caret-down text-center\"></i>\r\n        </div>\r\n\r\n        <div class=\"dist-info jumbotron\">\r\n            <div>\r\n                <h2 class=\"text-center\">{{selectedDistrict?.name}}</h2>\r\n                <div class=\"row raw-info justify-content-center mt-5\">\r\n                    <div class=\"col-sm-8\">\r\n                        <p class=\"text-justify\">This district is registered under \"Slingshot Sports Association of Maharashtra, India\" affilated to - \"Indian Slingshot Sport Federation\", \"Asian Slingshot Sport Federation\", \"World organizes Slingshot Sport Federation. Affiliated\r\n                            on Date - {{distInfo.affiliatedOn}}.\"</p>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-8\">\r\n                        <p>icons</p>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"text-center mt-4\">\r\n                    <h4><strong> <i class=\"fa fa-user-circle\"></i> Members</strong></h4>\r\n                </div>\r\n                <div class=\"row justify-content-center text-center\">\r\n                    <div class=\"col-sm-4\" *ngFor=\"let member of members\">\r\n                        <div class=\"card card-cascade\">\r\n                            <div class=\"view view-cascade overlay\">\r\n                                <div class=\"img-area mt-5\">\r\n                                    <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body card-body-cascade text-center\">\r\n                                <h4 class=\"card-title\"><strong>{{member.name}}</strong></h4>\r\n                                <h6 class=\"font-weight-bold indigo-text py-2\">{{member.role}}</h6>\r\n                                <div class=\"social-icons mt-3\">\r\n                                    <i class=\"fa fa-phone\" [matTooltip]=\"member.mobile\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-envelope\" [matTooltip]=\"member.email\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-facebook\" [matTooltip]=\"member.fb\" matTooltipPosition=\"above\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/association/association.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/association/association.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAssociationAssociationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"association\">\r\n    <div class=\"jumbotron dist-area\">\r\n        <h2 class=\"text-center title\">Join Us</h2>\r\n        <h3 class=\"text-center mt-3 reg-title\"><strong>Select District To Register</strong></h3>\r\n        <div class=\"row justify-content-center mt-4\">\r\n            <div class=\"col-sm-5\">\r\n                <select class=\"form-control\" height=\"50px\" (change)=\"onDistrictChange($event.target.value)\">\r\n                    <option selected disabled>Select District</option>\r\n                    <option *ngFor=\"let dist of availableDistricts\" value=\"{{dist.id}}\">{{dist.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row text-center justify-content-center mt-2\">\r\n            <div class=\"col-sm-2\">\r\n                <input type=\"button\" class=\"btn form-control reg-button\" value=\"Register\" height=\"50px\" (click)=\"registerDistrict()\" [disabled]=\"disabledRegBtn\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container form-area mt-5\" *ngIf=\"showForm\">\r\n        <h4 class=\"text-center title\">Affiliation For \"{{selectedDistrict.name}}\" District</h4>\r\n        <form id=\"regForm\" class=\"mt-4\" [formGroup]=\"registerForm\">\r\n            <h2 class=\"text-center\">Registration Form</h2>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>First Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{'is-invalid':registerForm.get('firstName').touched && registerForm.get('firstName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Middle Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"middleName\" [ngClass]=\"{'is-invalid':registerForm.get('middleName').touched && registerForm.get('middleName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Last Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{'is-invalid':registerForm.get('lastName').touched && registerForm.get('lastName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Date of Birth</label>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"date\" class=\"form-control\" formControlName=\"dateOfBirth\" [ngClass]=\"{'is-invalid':registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').invalid}\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-secondary\" type=\"button\">\r\n                                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>Mobile No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" matTooltip=\"Mobile Number use for password recovery & notifications!\" matTooltipPosition=\"above\" class=\"form-control\" formControlName=\"mobile\" maxlength=\"10\" [ngClass]=\"{'is-invalid':registerForm.get('mobile').touched && registerForm.get('mobile').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('mobile').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('mobile').invalid && !registerForm.get('mobile').errors?.required\">\r\n                                Invalid Mobile Number</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <label>Address Line 1</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"addressLine1\" [ngClass]=\"{'is-invalid':registerForm.get('addressLine1').touched && registerForm.get('addressLine1').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <label>Address Line 2</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"addressLine2\" [ngClass]=\"{'is-invalid':registerForm.get('addressLine2').touched && registerForm.get('addressLine2').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>City</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"city\" [ngClass]=\"{'is-invalid':registerForm.get('city').touched && registerForm.get('city').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>District</label>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" formControlName=\"district\" [ngClass]=\"{'is-invalid':registerForm.get('district').touched && registerForm.get('district').invalid}\">\r\n                            <option selected disabled>select district</option>\r\n                            <option *ngFor=\"let dist of allDistricts\" value=\"{{dist.name}}\">{{dist.name}}</option>\r\n                        </select>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Pin Code</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pin\" maxlength=\"6\" [ngClass]=\"{'is-invalid':registerForm.get('pin').touched && registerForm.get('pin').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('pin').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('pin').invalid && !registerForm.get('pin').errors?.required\">\r\n                                    Invalid Pin Code</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Aadhaar No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"aadhaarNo\" maxlength=\"12\" [ngClass]=\"{'is-invalid':registerForm.get('aadhaarNo').touched && registerForm.get('aadhaarNo').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('aadhaarNo').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('aadhaarNo').invalid && !registerForm.get('aadhaarNo').errors?.required\">\r\n                                    Invalid Aadhaar No.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>PAN No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"panNo\" maxlength=\"10\" [ngClass]=\"{'is-invalid':registerForm.get('panNo').touched && registerForm.get('panNo').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('panNo').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('panNo').invalid && !registerForm.get('panNo').errors?.required\">\r\n                                    Invalid PAN No.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row mt-4 mb-3\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>Email</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':registerForm.get('email').touched && registerForm.get('email').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('email').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('email').invalid && !registerForm.get('email').errors?.required\">\r\n                                    Invalid email.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Password</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{'is-invalid':registerForm.get('password').touched && registerForm.get('password').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('password').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('password').hasError('minlength') && !registerForm.get('password').errors?.required\">\r\n                            Minimum 8 characters required</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Confirm Password</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{'is-invalid':registerForm.get('confirmPassword').touched && registerForm.get('confirmPassword').invalid && registerForm.get('confirmPassword').errors?.isConfirmPassword}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Password not matched\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>Aadhar Card</strong></label>\r\n                    <input type=\"file\" id=\"files1\" name=\"files1\" (input)=\"validateFileUpload($event, 'doc1')\" formControlName=\"file1\" [ngClass]=\"{'is-invalid':registerForm.get('file1').touched && registerForm.get('file1').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file1').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>PAN Card</strong></label>\r\n                    <input type=\"file\" id=\"files2\" name=\"files2\" formControlName=\"file2\" (input)=\"validateFileUpload($event, 'doc2')\" [ngClass]=\"{'is-invalid':registerForm.get('file2').touched && registerForm.get('file2').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file2').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>Passport Photo</strong></label>\r\n                    <input type=\"file\" id=\"files3\" name=\"files3\" formControlName=\"file3\" (input)=\"validateFileUpload($event, 'doc3')\" [ngClass]=\"{'is-invalid':registerForm.get('file3').touched && registerForm.get('file3').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file3').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid1 || registerForm.get('file1').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                   Adhaar Card: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid2 || registerForm.get('file2').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                   PAN Card: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid3 || registerForm.get('file3').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                   Photo: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row  mt-5\">\r\n                <div class=\"col-sm-12\">\r\n                    <mat-checkbox [(ngModel)]=\"isChecked\" formControlName=\"terms\">Accept Terms & Conditions</mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"mt-5 text-center\">\r\n                <input type=\"button\" class=\"btn act-btn\" value=\"Register\" height=\"50px\" (click)=\"onFormSubmit()\" [disabled]=\"!registerForm.valid || !isFileValid1 || !isFileValid2 || !isFileValid3 || !isChecked\">\r\n                <input type=\"button\" class=\"btn act-btn ml-2\" value=\"clear\" height=\"50px\" (click)=\"onFormReset()\">\r\n            </div>\r\n        </form>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/association/registration-popup.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/association/registration-popup.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAssociationRegistrationPopupHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center p-2\" style=\"font-family: 'Didact Gothic', sans-serif\">\r\n    <h1>Successfully Registered !!</h1>\r\n    <h5>Once it gets approved you will get notified.</h5>\r\n    <h5>Thank You!</h5>\r\n    <button class=\"btn mt-4\" style=\"background-color: #ff8b23; color: #fff;\" mat-button (click)=\"onNoClick()\">OK</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"contact-us\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2>Contact Us</h2>\r\n    </div>\r\n    <div class=\"container mt-5\">\r\n        <div class=\"association-info text-center\">\r\n            <h2>Contact Our Association</h2>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-map-marker\"></i></span>\r\n                    <br>\r\n                    <p>Adarsh Nagar, Yavatmal, Maharashtra, India. Pin - 445001.</p>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-phone\"></i></span>\r\n                    <br>\r\n                    <p>9767986750, 9876567876</p>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-envelope\"></i></span>\r\n                    <br>\r\n                    <p style=\"word-wrap: break-word;\">support@slingshotassociation.com</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"user-info text-center mt-5\">\r\n            <h2>Our Members</h2>\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-sm-6 col-md-3 card-col\" *ngFor=\"let user of users\">\r\n                    <div class=\"card card-cascade\">\r\n                        <div class=\"view view-cascade overlay\">\r\n                            <div class=\"img-area mt-5\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body card-body-cascade text-center\">\r\n                            <h4 class=\"mt-3\"><strong>Mr. Lalit Dhoke</strong></h4>\r\n                            <span>(General Secretory)</span>\r\n                            <br>\r\n                            <span>lalit.dhoke@gmail.com</span>\r\n                            <div class=\"social-icons mt-3\">\r\n                                <i class=\"fa fa-phone\" matTooltip=\"9767986750\" matTooltipPosition=\"above\"></i>\r\n                                <i class=\"fa fa-envelope\" matTooltip=\"example@gmail.com\" matTooltipPosition=\"above\"></i>\r\n                                <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"contact-form mt-5\">\r\n            <div class=\"text-center\">\r\n                <h2>Get in touch</h2>\r\n            </div>\r\n            <div class=\"row mt-5 mb-5\">\r\n                <div class=\"col-md-6\">\r\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.411540644868!2d78.12331016498716!3d20.407138940141095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3ef5069c2f4d3%3A0x64917a602369d8c0!2sVeddharini%20Primary%2C%20Madhyamik%20%26%20uccha%20Madhyamik%20Vidhyalay%2CPimpalgaon%2CYavatmal!5e0!3m2!1sen!2sin!4v1582019705692!5m2!1sen!2sin\"\r\n                        width=\"100%\" class=\"shadow map\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" allowfullscreen=\"\"></iframe>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <form action=\"\" class=\"contactForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control field\" placeholder=\"First Name\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control field\" placeholder=\"Last Name\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control field\" placeholder=\"Email\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control field\" placeholder=\"Mobile\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <textarea rows=\"4\" cols=\"50\" class=\"form-control\" placeholder=\"Message\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"button\" class=\"btn action-button\" name=\"Send\" value=\"Send\">\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>gallery works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"home\">\r\n    <section id=\"banner-area\">\r\n        <div id=\"banner-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>SET YOUR GOAL WITH SLINGSHOT</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">read more</a> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner2.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>GET SLINGSHOT AFFILIATION</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">REGISTER</a> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner3.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>ENJOY PLAYING SLINGSHOT</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">read more</a> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#banner-carousel\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#banner-carousel\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"register-area\">\r\n        <div class=\"reg-panel\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"cta_content d-flex  flex-column align-items-md-center align-items-start text-center justify-content-start\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/logo.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"reg_text pt-3\">Affiliation Open For All District (Maharashtra)</div>\r\n                            <div class=\"mx-auto\"> <a class=\"action-button reg-btn mt-3\" routerLink=\"association\">Register</a></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"welcome-area\" class=\"bg-offwhite wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-1 member-box\">\r\n                    <div class=\"ico-box active\">\r\n                        <figure class=\"d-flex justify-content-center mt-3\">\r\n                            <img class=\"shake-hand\" src=\"./assets/images/hand-shake.png\" alt=\"\">\r\n                        </figure>\r\n                        <header class=\"entry-header\">\r\n                            <h3 class=\"entry-title-box\">Become a part of Slingshot</h3>\r\n                        </header>\r\n                        <!-- <div class=\"entry-content\">\r\n                            <a class=\"btn outline mt-4\">Signup</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title welcome-title text-center\">Welcome to Association</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">We provide affiliation of slingshot game for the districts in Maharashtra. This is comes under Slingshot Sports Association of Maharashtra. To avail the affiliation please register. For the registered members of district we\r\n                                provide management of the participants and game information through this website. Get latest updates of matches and events. So Hurry Up to get Affiliation. </p>\r\n                        </div>\r\n                        <!-- <div class=\"entry-footer mt-2\">\r\n                            <a routerLink=\"association\" class=\"action-button\">read more</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"game-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title text-center\">About Game</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">In INDIA, We are playing this game from our childhood. We have enjoyed lots of moment with this game to hit the target. Now lets make this game as our sports. We provide the opportunity to compete the people with this game,\r\n                                and achieve some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra, India<strong>\"</strong>. Please read the rules for this game before you start. </p>\r\n                        </div>\r\n                        <div class=\"entry-footer mt-2\">\r\n                            <a routerLink=\"sports\" class=\"action-button\">read more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-1 slingshot-box\">\r\n                    <img class=\"img shadow rounded\" src=\"./assets/images/slingshot1.jpg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"results-area\" class=\"wrapper-box bg-offwhite\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Latest Match Results</strong></h2>\r\n            </div>\r\n            <ul class=\"list-group mt-4\">\r\n                <li class=\"list-group-item mt-1\" *ngFor=\"let item of list\">\r\n                    <div class=\"event-panel row pt-3\">\r\n                        <div class=\"col-sm-4 align-items-center text-center justify-content-start\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                            <span>Akshay Shastrakar</span>\r\n                            <br>\r\n                            <span>(Yavatmal)</span>\r\n                        </div>\r\n                        <div class=\"col-sm-4 text-center res-sec\">\r\n                            <div class=\"result\" style=\"font-size: 35px;\r\n                            font-weight: bold;\">8 : 3</div>\r\n                            <div>August 25, 2018</div>\r\n                            <div class=\"row text-center justify-content-center\">\r\n                                <p><i class=\"fa fa-map-marker\"></i> Nehru Stadium, Vitthal Nagar, Yavatmal. Maharashtra.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4 text-center align-items-center justify-content-end\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                            <span>Rameshwar Udgire</span>\r\n                            <br>\r\n                            <span>(Nagpur)</span>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"text-center mt-2\">\r\n                <a routerLink=\"results\" class=\"action-button\">view more</a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"member-area\" class=\"wrapper-box bg-offwhite\" hidden>\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Our Members</strong></h2>\r\n            </div>\r\n            <div class=\"row justify-content-center mt-5\">\r\n                <div class=\"col-sm-3 col-md-3 card-col\" *ngFor=\"let user of members\">\r\n                    <div class=\"card card-cascade bg-offwhite mt-2\">\r\n                        <div class=\"view view-cascade overlay\">\r\n                            <div class=\"img-area mt-5\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body card-body-cascade text-center\">\r\n                            <h4 class=\"mt-1\"><strong>Mr. Lalit Dhoke</strong></h4>\r\n                            <span>(General Secretory)</span>\r\n                            <br>\r\n                            <span>lalit.dhoke@gmail.com</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n\r\n    <section id=\"testimonial-area\">\r\n        <div class=\"img-overlay text-center\">\r\n            <div class=\"container\">\r\n                <div class=\"text-center\">\r\n                    <h2><strong>Our Members</strong></h2>\r\n                </div>\r\n                <div id=\"contactCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                    <ol class=\"carousel-indicators user-indicators\">\r\n                        <li data-target=\"#contactCourousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                        <li data-target=\"#contactCourousel\" data-slide-to=\"1\"></li>\r\n                        <li data-target=\"#contactCourousel\" data-slide-to=\"2\"></li>\r\n                    </ol>\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item active pb-5\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">Mr. Vikas Shelke</h3>\r\n                                <span>(Secretory)</span>\r\n                                <br>\r\n                                <span>vikas.shelke@gmail.com</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"carousel-item pb-5\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">Mr. Bipin Chaudhari</h3>\r\n                                <span>(General Secretory)</span>\r\n                                <br>\r\n                                <span>bipin.chaudhari@gmail.com</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"carousel-item pb-5\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">Mr. Lalit Dhoke</h3>\r\n                                <span>(General Secretory)</span>\r\n                                <br>\r\n                                <span>lalit.dhoke@gmail.com</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"carousel-control-prev\" href=\"#contactCourousel\" role=\"button\" data-slide=\"prev\">\r\n                        <i class=\"fa fa-caret-square-o-left\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"carousel-control-next\" href=\"#contactCourousel\" role=\"button\" data-slide=\"next\">\r\n                        <i class=\"fa fa-caret-square-o-right\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"events-area\" class=\"wrapper-box bg-offwhite\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Upcomming Events</strong></h2>\r\n            </div>\r\n            <div id=\"eventsCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators user-indicators\" hidden>\r\n                    <li data-target=\"#eventsCourousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"carousel-item active\">\r\n                        <div class=\"carousel-caption\">\r\n                            <div class=\"jumbotron bg-white\">\r\n                                <h5 class=\"text-uppercase\"><strong>event title</strong></h5>\r\n                                <div class=\"row justify-content-center mt-4\">\r\n                                    <div class=\"p-2 img-container\">\r\n                                        <img src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"260px\">\r\n                                        <div class=\"img-text\">\r\n                                            <h1><span class=\"badge\">14 <br /> Jan</span></h1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"p-2\">\r\n                                        <div class=\"info text-left\">\r\n                                            <span><strong><i class=\"fa fa-map-marker pr-1\"></i>Address</strong></span>\r\n                                            <p>Gandhi Nagar, Yavatmal, Maharashtra, Pin 445001.</p>\r\n                                            <span><strong><i class=\"fa fa-user pr-1\"></i>Contact Persons</strong></span>\r\n                                            <p>Vikas Shelke, Akshay Shastrakar</p>\r\n                                            <span><strong><i class=\"fa fa-phone pr-1\"></i>Phone</strong></span>\r\n                                            <p>9767986750, 9876767543</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-item\">\r\n                        <div class=\"carousel-caption\">\r\n                            <div class=\"jumbotron bg-white\">\r\n                                <h5><strong>EVENT TITLE</strong></h5>\r\n                                <div class=\"row justify-content-center mt-4\">\r\n                                    <div class=\"p-2 img-container\">\r\n                                        <img src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"260px\">\r\n                                        <div class=\"img-text\">\r\n                                            <h1><span class=\"badge\">14 <br /> Jan</span></h1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"p-2\">\r\n                                        <div class=\"info text-left\">\r\n                                            <span><strong><i class=\"fa fa-map-marker pr-1\"></i>Address</strong></span>\r\n                                            <p>Gandhi Nagar, Yavatmal, Maharashtra, Pin 445001.</p>\r\n                                            <span><strong><i class=\"fa fa-user pr-1\"></i>Contact Persons</strong></span>\r\n                                            <p>Vikas Shelke, Akshay Shastrakar</p>\r\n                                            <span><strong><i class=\"fa fa-phone pr-1\"></i>Phone</strong></span>\r\n                                            <p>9767986750, 9876767543</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-item\">\r\n                        <div class=\"carousel-caption\">\r\n                            <div class=\"jumbotron bg-white\">\r\n                                <h5><strong>EVENT TITLE</strong></h5>\r\n                                <div class=\"row justify-content-center mt-4\">\r\n                                    <div class=\"p-2 img-container\">\r\n                                        <img src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"260px\">\r\n                                        <div class=\"img-text\">\r\n                                            <h1><span class=\"badge\">14 <br /> Jan</span></h1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"p-2\">\r\n                                        <div class=\"info text-left\">\r\n                                            <span><strong><i class=\"fa fa-map-marker pr-1\"></i>Address</strong></span>\r\n                                            <p>Gandhi Nagar, Yavatmal, Maharashtra, Pin 445001.</p>\r\n                                            <span><strong><i class=\"fa fa-user pr-1\"></i>Contact Persons</strong></span>\r\n                                            <p>Vikas Shelke, Akshay Shastrakar</p>\r\n                                            <span><strong><i class=\"fa fa-phone pr-1\"></i>Phone</strong></span>\r\n                                            <p>9767986750, 9876767543</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a class=\"carousel-control-prev action-icon\" href=\"#eventsCourousel\" role=\"button\" data-slide=\"prev\">\r\n                    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"carousel-control-next action-icon\" href=\"#eventsCourousel\" role=\"button\" data-slide=\"next\">\r\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"gallery-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Gallery</strong></h2>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-6\">\r\n                    <img class=\"rounded\" src=\"./assets/images/ad.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n                <div class=\"col-sm-6 img-right\">\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/weapon-1.jpg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/weapon-2.jpg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"footer\">\r\n    <div class=\"row mb-5\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"ft-logo\">\r\n                <span class=\"main-title\">Slingshot</span><span class=\"sub-title\">Association</span>\r\n            </div>\r\n            <div class=\"ft-social mt-4\">\r\n                <span>SOCIAL CONNECT</span>\r\n                <div class=\"social-icons mt-3\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                    <i class=\"fa fa-instagram\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-5 contact\">\r\n            <h3>Contact<span> us</span></h3>\r\n            <div class=\"info\">\r\n                <p><i class=\"fa fa-map-marker pr-3\"></i>Yavatmal, Maharashtra, India. Pin 445001.</p>\r\n                <p><i class=\"fa fa-phone pr-3\"></i>9767986750</p>\r\n                <p><i class=\"fa fa-envelope pr-3\"></i>support@ssassociation.com</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3 subscribe\">\r\n            <h3>Subscribe<span> us</span></h3>\r\n            <div class=\"sub\">\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\" required>\r\n                <input type=\"button\" class=\"btn btn-block action-button\" name=\"Subscribe\" value=\"Subscribe\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ft-credit\">\r\n        <hr class=\"hr\">\r\n        <p class=\"text-center\">Designed By Akshay Shastrakar | akshay.shastrakar1@gmail.com</p>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top shadow\">\r\n    <div class='navbar-brand'>\r\n        <span class='navbar-title ml-2'><span class=\"main-title\">Slingshot</span><span class=\"sub-title\">Association</span></span>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"affiliation\">Affiliation</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"sports\">Sports</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#gallery-area\">Gallery</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"contact\">Contact us</a>\r\n            </li>\r\n        </ul>\r\n        <button class=\"btn outline\" routerLink=\"login\">Login</button>\r\n    </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"login-sec\">\n    <div class=\"container\">\n        <div class=\"jumbotron mt-5 p-5 shadow\">\n            <div class=\"login-page\" #loginPage>\n                <h2 class=\"text-center\">Sign in</h2>\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-sm-5 mt-3\">\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <input type=\"email\" class=\"form-control\" placeholder=\"enter email\" height=\"50px\">\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"enter password\" height=\"50px\">\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <input type=\"button\" class=\"btn form-control\" value=\"Login\" (click)=\"login()\">\n                            </div>\n                        </div>\n                        <div class=\"col text-center\">\n                            <a class=\"text-muted forgotPass\" (click)=\"forgotPassword()\">Forgot Password?</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"forget-pass-page\" #forgetPassPage hidden>\n                <h2 class=\"text-center\">Forgot Password</h2>\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-sm-5 mt-3\">\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <input type=\"email\" class=\"form-control\" placeholder=\"enter email\" height=\"50px\">\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"enter password\" height=\"50px\">\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"confirm password\" height=\"50px\">\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <input type=\"button\" class=\"btn form-control\" value=\"Reset\">\n                            </div>\n                        </div>\n                        <div class=\"col mt-3 text-center\">\n                            <span (click)=\"forgotPassword()\" matTooltip=\"Back\"><i class=\"fa fa-arrow-circle-o-left\" style=\"font-size: 30px;\"></i></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/match-results/match-results.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match-results/match-results.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMatchResultsMatchResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>match-results works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSlingshotSlingshotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"game\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2 class=\"page-title\">Slingshot Sports Association of Maharashtra</h2>\r\n    </div>\r\n\r\n    <div class=\"container wrapper\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-sm-6 text-center\">\r\n                <img class=\"sling-img shadow rounded\" src=\"./assets/images/slingshot2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-sm-6 game-info pt-5\">\r\n                <h4>Slingshot</h4>\r\n                <p class=\"text-justify mt-4\">In INDIA, We are playing this game from our childhood. We have enjoyed lots of moment with this game to hit the target. Now lets make this game as our sports. We provide the opportunity to compete the people with this game, and achieve\r\n                    some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra, India<strong>\"</strong>. Please read the rules for this game before you start.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"category mt-5 wrapper bg-offwhite\">\r\n        <h3 class=\"text-center\">Categories of Slingshot</h3>\r\n        <div class=\"row mt-4 cat-cards justify-content-center\">\r\n            <div class=\"col-sm-2 col-xs-3 mt-2\">\r\n                <div class=\"card text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Category 1</h5>\r\n                        <h5 class=\"card-title\"><strong>Sub-Junior</strong></h5>\r\n                        <div>\r\n                            <span>10 Feet</span>\r\n                            <p>(Under 10Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-6 mt-2\">\r\n                <div class=\"card text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Category 2</h5>\r\n                        <h5 class=\"card-title\"><strong>Teenager</strong></h5>\r\n                        <div>\r\n                            <span>15 Feet</span>\r\n                            <p>(10Yr - 14Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-6 mt-2\">\r\n                <div class=\"card  text-center\">\r\n                    <div class=\"card-body \">\r\n                        <h5 class=\"card-title\">Category 3</h5>\r\n                        <h5 class=\"card-title\"><strong>Junior</strong></h5>\r\n                        <div>\r\n                            <span>20 Feet</span>\r\n                            <p>(15Yr - 18Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-6 mt-2\">\r\n                <div class=\"card  text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Category 4</h5>\r\n                        <h5 class=\"card-title\"><strong>Senior</strong></h5>\r\n                        <div>\r\n                            <span>30 Feet</span>\r\n                            <p>(18Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-6 mt-2\">\r\n                <div class=\"card  text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Category 5</h5>\r\n                        <h5 class=\"card-title\"><strong>Master</strong></h5>\r\n                        <div>\r\n                            <span>30 Feet</span>\r\n                            <p>(35Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container wrapper\">\r\n        <div class=\"rules mt-5\">\r\n            <h3 class=\"text-center\">Rules of Game</h3>\r\n            <div class=\"row mt-4\">\r\n                <div class=\"col-sm-4 mt-2\">\r\n                    <img class=\"img rounded\" src=\"./assets/images/rule3.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-sm-4 mt-2\">\r\n                    <img class=\"img rounded\" src=\"./assets/images/rule1.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-sm-4 mt-2\">\r\n                    <img class=\"img rounded\" src=\"./assets/images/rule2.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-5 mt-5 bg-offwhite\">\r\n        <h3 class=\"text-center\">Equipments of Slingshot</h3>\r\n        <div class=\"row\">\r\n\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Services/affilation.service.ts":
  /*!************************************************!*\
    !*** ./src/app/Services/affilation.service.ts ***!
    \************************************************/

  /*! exports provided: AffilationService */

  /***/
  function srcAppServicesAffilationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AffilationService", function () {
      return AffilationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AffilationService =
    /*#__PURE__*/
    function () {
      function AffilationService() {
        _classCallCheck(this, AffilationService);

        this.registeredDist = ['Yavatmal', 'Wardha', 'Nagpur', 'Pusad', 'Aurangabad', 'Latur'];
        this.distInfo = {
          distName: 'Yavatmal',
          affiliatedOn: '18 Jan 2020',
          members: [{
            name: 'Akshay Shastrakar',
            role: 'President',
            mobile: '9767986750',
            email: 'akshay.shastrakar1@gmail.com',
            fb: 'akshay@fb'
          }, {
            name: 'Vikas Shelke',
            role: 'Vice-President',
            mobile: '9878654567',
            email: 'vikas.shelke@gmail.com',
            fb: 'vikas@fb'
          }]
        };
      }

      _createClass(AffilationService, [{
        key: "getRegisteredDistricts",
        value: function getRegisteredDistricts() {
          return this.registeredDist;
        }
      }, {
        key: "getDistrictInfo",
        value: function getDistrictInfo() {
          return this.distInfo;
        }
      }]);

      return AffilationService;
    }();

    AffilationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AffilationService);
    /***/
  },

  /***/
  "./src/app/Services/slingshot.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Services/slingshot.service.ts ***!
    \***********************************************/

  /*! exports provided: SlingshotService */

  /***/
  function srcAppServicesSlingshotServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlingshotService", function () {
      return SlingshotService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var SlingshotService =
    /*#__PURE__*/
    function () {
      function SlingshotService(firestore) {
        _classCallCheck(this, SlingshotService);

        this.firestore = firestore;
      }

      _createClass(SlingshotService, [{
        key: "addDist",
        value: function addDist() {
          console.log('service called'); // this.districtList.forEach((item, index) => {
          //   this.firestore.collection("districtList").add(item).then(ref => {
          //     ref.set({ id: ref.id }, { merge: true });
          //   });
          // });
        }
      }, {
        key: "getAllDistricts",
        value: function getAllDistricts() {
          return this.firestore.collection('districtList', function (ref) {
            return ref.orderBy('name');
          }).snapshotChanges();
        }
      }, {
        key: "getAvailabelDistricts",
        value: function getAvailabelDistricts() {
          return this.firestore.collection('districtList', function (ref) {
            return ref.where('isRegistered', '==', false).orderBy('name');
          }).snapshotChanges();
        }
      }, {
        key: "getRegisteredDistricts",
        value: function getRegisteredDistricts() {
          return this.firestore.collection('districtList', function (ref) {
            return ref.where('isRegistered', '==', true).orderBy('name');
          }).snapshotChanges();
        }
      }, {
        key: "getDistrictById",
        value: function getDistrictById(distArr, id) {
          var district;
          distArr.forEach(function (dist) {
            if (dist.id === id) {
              district = dist;
            }
          });
          return district;
        }
      }, {
        key: "districtRegistration",
        value: function districtRegistration(data) {
          this.firestore.collection("RegistrationRequests").add(data);
        }
      }, {
        key: "getDistrictInfoById",
        value: function getDistrictInfoById(id) {
          return null;
        }
      }, {
        key: "getLatestMatchResults",
        value: function getLatestMatchResults() {
          // return only 3 or 4 latest records (winning)
          return null;
        }
      }, {
        key: "getAllMatchesResults",
        value: function getAllMatchesResults() {
          return null;
        }
      }, {
        key: "getUpcommingEvents",
        value: function getUpcommingEvents() {
          return null;
        }
      }, {
        key: "getAssociationMemberList",
        value: function getAssociationMemberList() {
          return null;
        }
      }]);

      return SlingshotService;
    }();

    SlingshotService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    SlingshotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SlingshotService);
    /***/
  },

  /***/
  "./src/app/admin/admin.component.scss":
  /*!********************************************!*\
    !*** ./src/app/admin/admin.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#admin {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFdvcmtzcGFjZVxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZG1pbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSIsIiNhZG1pbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/admin/admin.component.scss")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/affiliation-requests/affiliation-requests.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/affiliation-requests/affiliation-requests.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAffiliationRequestsAffiliationRequestsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#approval {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWZmaWxpYXRpb24tcmVxdWVzdHMvQzpcXFdvcmtzcGFjZVxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxhZmZpbGlhdGlvbi1yZXF1ZXN0c1xcYWZmaWxpYXRpb24tcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FmZmlsaWF0aW9uLXJlcXVlc3RzL2FmZmlsaWF0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWZmaWxpYXRpb24tcmVxdWVzdHMvYWZmaWxpYXRpb24tcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwcm92YWwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn0iLCIjYXBwcm92YWwge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/affiliation-requests/affiliation-requests.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/affiliation-requests/affiliation-requests.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AffiliationRequestsComponent */

  /***/
  function srcAppAdminAffiliationRequestsAffiliationRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AffiliationRequestsComponent", function () {
      return AffiliationRequestsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AffiliationRequestsComponent =
    /*#__PURE__*/
    function () {
      function AffiliationRequestsComponent() {
        _classCallCheck(this, AffiliationRequestsComponent);
      }

      _createClass(AffiliationRequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AffiliationRequestsComponent;
    }();

    AffiliationRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-affiliation-requests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./affiliation-requests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./affiliation-requests.component.scss */
      "./src/app/admin/affiliation-requests/affiliation-requests.component.scss")).default]
    })], AffiliationRequestsComponent);
    /***/
  },

  /***/
  "./src/app/affliation/affliation.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/affliation/affliation.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAffliationAffliationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n::-webkit-scrollbar {\n  width: 3px;\n}\n.action-button {\n  display: inline-block;\n  padding: 8px 30px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.img-area img {\n  width: 100%;\n}\n.fa-caret-down {\n  font-size: 20px;\n}\n#affiliation-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 130px;\n}\n#affiliation-sec .head-sec h2,\n#affiliation-sec .dist-info h2 {\n  font-family: \"Righteous\";\n}\n#affiliation-sec .head-sec .text-muted {\n  font-size: 20px;\n}\n#affiliation-sec .card .card-text {\n  display: none;\n}\n#affiliation-sec .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#affiliation-sec .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#affiliation-sec .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#affiliation-sec .card:hover {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#affiliation-sec .card:hover .card-title {\n  color: #ff8b23;\n}\n#affiliation-sec .search-sec .searchbar {\n  margin-bottom: auto;\n  margin-top: auto;\n  height: 45px;\n  background-color: #353b48;\n  border-radius: 30px;\n  padding: 3px;\n}\n#affiliation-sec .search-sec .search_input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  caret-color: transparent;\n  line-height: 40px;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n#affiliation-sec .search-sec .searchbar:hover > .search_input {\n  padding: 0 10px;\n  width: 300px;\n  caret-color: red;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n#affiliation-sec .search-sec .searchbar:hover > .search_icon {\n  background: white;\n  color: #ff8b23;\n}\n#affiliation-sec .search-sec .search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  color: white;\n  text-decoration: none;\n}\n#affiliation-sec .dist-sec {\n  width: 100%;\n  max-height: 300px;\n  padding-left: 30px;\n  overflow: hidden;\n}\n#affiliation-sec .dist-sec:hover {\n  overflow-y: scroll;\n}\n#affiliation-sec .dist-info .social-icons i {\n  padding: 10px;\n}\n#affiliation-sec .dist-info .social-icons i:hover {\n  color: #e74c3c;\n}\n#affiliation-sec .dist-info.jumbotron {\n  margin: 70px 30px 70px 30px;\n}\n@media only screen and (max-width: 768px) {\n  #affiliation-sec .search-sec .searchbar:hover > .search_input {\n    width: 250px;\n  }\n  #affiliation-sec .dist-info .card {\n    margin-top: 30px;\n  }\n  #affiliation-sec .dist-info.jumbotron {\n    margin: 30px 0px 70px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWZmbGlhdGlvbi9DOlxcV29ya3NwYWNlXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hZmZsaWF0aW9uL2FmZmxpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FmZmxpYXRpb24vQzpcXFdvcmtzcGFjZVxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFmZmxpYXRpb25cXGFmZmxpYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBQzNEQTtFQUNJLFVBQUE7QUQ4REo7QUMzREE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJGUU87RUVQUCxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRDhESjtBQzNEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDhESjtBQzdESTtFQUNJLFdBQUE7QUQrRFI7QUMzREE7RUFDSSxlQUFBO0FEOERKO0FDM0RBO0VBQ0ksd0NBQUE7RUFDQSxpQkFBQTtBRDhESjtBQzdESTs7RUFFSSx3QkFBQTtBRCtEUjtBQzdESTtFQUNJLGVBQUE7QUQrRFI7QUM3REk7RUFDSSxhQUFBO0FEK0RSO0FDN0RJO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRCtEUjtBQzlEUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkZoREQ7RUVpREMsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBRGdFWjtBQzlEUTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FEZ0VaO0FDN0RJO0VBQ0ksZUFBQTtFQUNBLHdEQUFBO0FEK0RSO0FDOURRO0VBQ0ksY0ZsRUQ7QUNrSVg7QUM1RFE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEOERaO0FDNURRO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QUQ4RFo7QUM1RFE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBRDhEWjtBQzVEUTtFQUNJLGlCQUFBO0VBQ0EsY0ZoR0Q7QUM4Slg7QUM1RFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FEOERaO0FDM0RJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDZEUjtBQzVEUTtFQUNJLGtCQUFBO0FEOERaO0FDMURRO0VBQ0ksYUFBQTtBRDREWjtBQzNEWTtFQUNJLGNBQUE7QUQ2RGhCO0FDMURRO0VBQ0ksMkJBQUE7QUQ0RFo7QUN2REE7RUFJWTtJQUNJLFlBQUE7RUR1RGQ7RUNuRFU7SUFDSSxnQkFBQTtFRHFEZDtFQ25EVTtJQUNJLHlCQUFBO0VEcURkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZmZsaWF0aW9uL2FmZmxpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDNweDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmRjYjllO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pbWctYXJlYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mYS1jYXJldC1kb3duIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jYWZmaWxpYXRpb24tc2VjIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmhlYWQtc2VjIGgyLFxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5oZWFkLXNlYyAudGV4dC1tdXRlZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQgLmNhcmQtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgaGVpZ2h0OiA0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZDpob3ZlcjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZDpob3ZlciAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmY4YjIzO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYjQ4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hfaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pbnB1dCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBjYXJldC1jb2xvcjogcmVkO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaF9pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3Qtc2VjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jYWZmaWxpYXRpb24tc2VjIC5kaXN0LXNlYzpob3ZlciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyAuc29jaWFsLWljb25zIGkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvIC5zb2NpYWwtaWNvbnMgaTpob3ZlciB7XG4gIGNvbG9yOiAjZTc0YzNjO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvLmp1bWJvdHJvbiB7XG4gIG1hcmdpbjogNzBweCAzMHB4IDcwcHggMzBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2lucHV0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvIC5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gICNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mby5qdW1ib3Ryb24ge1xuICAgIG1hcmdpbjogMzBweCAwcHggNzBweCAwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pbWctYXJlYSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmEtY2FyZXQtZG93biB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNhZmZpbGlhdGlvbi1zZWMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgLmhlYWQtc2VjIGgyLFxyXG4gICAgLmRpc3QtaW5mbyBoMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCJcclxuICAgIH1cclxuICAgIC5oZWFkLXNlYyAudGV4dC1tdXRlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIC4xNSkhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXNlYyB7XHJcbiAgICAgICAgLnNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2I0ODtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoX2lucHV0IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaGJhcjpob3Zlcj4uc2VhcmNoX2lucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGNhcmV0LWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoYmFyOmhvdmVyPi5zZWFyY2hfaWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoX2ljb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXN0LXNlYyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGlzdC1pbmZvIHtcclxuICAgICAgICAuc29jaWFsLWljb25zIGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuanVtYm90cm9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA3MHB4IDMwcHggNzBweCAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAjYWZmaWxpYXRpb24tc2VjIHtcclxuICAgICAgICAuc2VhcmNoLXNlYyB7XHJcbiAgICAgICAgICAgIC5zZWFyY2hiYXI6aG92ZXI+LnNlYXJjaF9pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc3QtaW5mbyB7XHJcbiAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4IDcwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/affliation/affliation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/affliation/affliation.component.ts ***!
    \****************************************************/

  /*! exports provided: AffliationComponent */

  /***/
  function srcAppAffliationAffliationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AffliationComponent", function () {
      return AffliationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_affilation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/affilation.service */
    "./src/app/Services/affilation.service.ts");
    /* harmony import */


    var _Services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/slingshot.service */
    "./src/app/Services/slingshot.service.ts");

    var AffliationComponent =
    /*#__PURE__*/
    function () {
      function AffliationComponent(affiliationService, slingshotService) {
        _classCallCheck(this, AffliationComponent);

        this.affiliationService = affiliationService;
        this.slingshotService = slingshotService;
        this.registeredDistricts = [];
      }

      _createClass(AffliationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.disticts = this.affiliationService.getRegisteredDistricts();
          this.distInfo = this.affiliationService.getDistrictInfo();
          this.members = this.distInfo.members;
          this.getRegisteredDistrictList(); // if (this.registeredDistricts.length > 0) {
          //   this.getDistrictInfo(this.registeredDistricts[0].id);
          // }
        } // Fetch all registered districts list

      }, {
        key: "getRegisteredDistrictList",
        value: function getRegisteredDistrictList() {
          var _this = this;

          this.slingshotService.getAvailabelDistricts().subscribe(function (data) {
            data.map(function (item) {
              _this.registeredDistricts.push(item.payload.doc.data());
            });
          });
        }
      }, {
        key: "getDistrictInfo",
        value: function getDistrictInfo(id) {
          this.selectedDistrict = this.slingshotService.getDistrictById(this.registeredDistricts, id);
        }
      }, {
        key: "searchDistrict",
        value: function searchDistrict(distName) {
          this.disticts.map(function (name) {
            if (distName.toLowerCase().includes(name.toLowerCase())) {}
          });
        }
      }]);

      return AffliationComponent;
    }();

    AffliationComponent.ctorParameters = function () {
      return [{
        type: _Services_affilation_service__WEBPACK_IMPORTED_MODULE_2__["AffilationService"]
      }, {
        type: _Services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"]
      }];
    };

    AffliationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-affliation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./affliation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./affliation.component.scss */
      "./src/app/affliation/affliation.component.scss")).default]
    })], AffliationComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./affliation/affliation.component */
    "./src/app/affliation/affliation.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slingshot/slingshot.component */
    "./src/app/slingshot/slingshot.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _association_association_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./association/association.component */
    "./src/app/association/association.component.ts");
    /* harmony import */


    var _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./match-results/match-results.component */
    "./src/app/match-results/match-results.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin/affiliation-requests/affiliation-requests.component */
    "./src/app/admin/affiliation-requests/affiliation-requests.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'affiliation',
      component: _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_4__["AffliationComponent"]
    }, {
      path: 'contact',
      component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
    }, {
      path: 'sports',
      component: _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_6__["SlingshotComponent"]
    }, {
      path: 'gallery',
      component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
    }, {
      path: 'association',
      component: _association_association_component__WEBPACK_IMPORTED_MODULE_8__["AssociationComponent"]
    }, {
      path: 'results',
      component: _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_9__["MatchResultsComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
      children: [{
        path: "",
        redirectTo: "requests",
        pathMatch: "full"
      }, {
        path: "requests",
        component: _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_12__["AffiliationRequestsComponent"]
      }]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'SlingshotAssociation';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout/navbar/navbar.component */
    "./src/app/layout/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./affliation/affliation.component */
    "./src/app/affliation/affliation.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./slingshot/slingshot.component */
    "./src/app/slingshot/slingshot.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _association_association_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./association/association.component */
    "./src/app/association/association.component.ts");
    /* harmony import */


    var _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./match-results/match-results.component */
    "./src/app/match-results/match-results.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin/affiliation-requests/affiliation-requests.component */
    "./src/app/admin/affiliation-requests/affiliation-requests.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_12__["AffliationComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"], _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_15__["SlingshotComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"], _association_association_component__WEBPACK_IMPORTED_MODULE_17__["AssociationComponent"], _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_18__["MatchResultsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _association_association_component__WEBPACK_IMPORTED_MODULE_17__["PopupDialog"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"], _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["AffiliationRequestsComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"]],
      entryComponents: [_association_association_component__WEBPACK_IMPORTED_MODULE_17__["PopupDialog"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/association/association.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/association/association.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAssociationAssociationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n#association {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#association .jumbotron {\n  margin-bottom: 0rem !important;\n}\n#association .dist-area {\n  border-radius: 0rem;\n}\n#association .title {\n  font-family: \"Righteous\", cursive;\n}\n#association .form-area {\n  padding: 100px;\n  padding-top: 0px !important;\n}\n#association #regForm {\n  border: 1px solid gray;\n  padding: 50px;\n}\n#association .reg-button,\n#association .act-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n@media only screen and (max-width: 768px) {\n  #association .form-area {\n    padding: 10px;\n  }\n  #association #regForm {\n    padding: 20px;\n  }\n  #association .reg-title {\n    font-size: 1.2rem !important;\n  }\n  #association .reg-button {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzb2NpYXRpb24vQzpcXFdvcmtzcGFjZVxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYXNzb2NpYXRpb24vYXNzb2NpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fzc29jaWF0aW9uL0M6XFxXb3Jrc3BhY2VcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxhc3NvY2lhdGlvblxcYXNzb2NpYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBQzNEQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7QUQ4REo7QUM3REk7RUFDSSw4QkFBQTtBRCtEUjtBQzdESTtFQUNJLG1CQUFBO0FEK0RSO0FDN0RJO0VBQ0ksaUNBQUE7QUQrRFI7QUM3REk7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7QUQrRFI7QUM3REk7RUFDSSxzQkFBQTtFQUNBLGFBQUE7QUQrRFI7QUM3REk7O0VBRUkseUJGUEc7RUVRSCxXQUFBO0FEK0RSO0FDM0RBO0VBR1E7SUFDSSxhQUFBO0VENERWO0VDMURNO0lBQ0ksYUFBQTtFRDREVjtFQzFETTtJQUNJLDRCQUFBO0VENERWO0VDMURNO0lBQ0kscUJBQUE7RUQ0RFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fzc29jaWF0aW9uL2Fzc29jaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiR0aC1jb2xvcjogI2ZmOGIyMztcclxuJHRoLWNvbG9yLWRhcms6ICNmZjM2MDA7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG59XHJcblxyXG5cclxuLyogVGhlbWUtQ29sb3JzICovXHJcblxyXG4uYmctb2Zmd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjNmNTtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuI2Fzc29jaWF0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2Fzc29jaWF0aW9uIC5qdW1ib3Ryb24ge1xuICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4jYXNzb2NpYXRpb24gLmRpc3QtYXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDByZW07XG59XG4jYXNzb2NpYXRpb24gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG59XG4jYXNzb2NpYXRpb24gLmZvcm0tYXJlYSB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4jYXNzb2NpYXRpb24gI3JlZ0Zvcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuI2Fzc29jaWF0aW9uIC5yZWctYnV0dG9uLFxuI2Fzc29jaWF0aW9uIC5hY3QtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2Fzc29jaWF0aW9uIC5mb3JtLWFyZWEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgI2Fzc29jaWF0aW9uICNyZWdGb3JtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gICNhc3NvY2lhdGlvbiAucmVnLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICB9XG4gICNhc3NvY2lhdGlvbiAucmVnLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNhc3NvY2lhdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRpc3QtYXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjcmVnRm9ybSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZy1idXR0b24sXHJcbiAgICAuYWN0LWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvL21vYmlsZSBkZXZpY2VzXHJcbiAgICAjYXNzb2NpYXRpb24ge1xyXG4gICAgICAgIC5mb3JtLWFyZWEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjcmVnRm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWctdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVnLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/association/association.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/association/association.component.ts ***!
    \******************************************************/

  /*! exports provided: AssociationComponent, PopupDialog */

  /***/
  function srcAppAssociationAssociationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssociationComponent", function () {
      return AssociationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupDialog", function () {
      return PopupDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/slingshot.service */
    "./src/app/Services/slingshot.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./confirm-password.validator */
    "./src/app/association/confirm-password.validator.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AssociationComponent =
    /*#__PURE__*/
    function () {
      function AssociationComponent(slingshotService, formBuilder, dialog) {
        _classCallCheck(this, AssociationComponent);

        this.slingshotService = slingshotService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.showForm = false;
        this.disabledRegBtn = true;
        this.availableDistricts = [];
        this.allDistricts = [];
        this.isChecked = false;
        this.getAvailableDistrictList();
      }

      _createClass(AssociationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\d{10}/)]],
            addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressLine2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\d{6}/)]],
            aadhaarNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\d{12}/)]],
            panNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/[0-9 a-z A-Z]{10}/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          }, {
            validator: _confirm_password_validator__WEBPACK_IMPORTED_MODULE_4__["ConfirmPasswordValidator"].MatchPassword
          });
        } // fetch all available district list

      }, {
        key: "getAvailableDistrictList",
        value: function getAvailableDistrictList() {
          var _this2 = this;

          this.slingshotService.getAvailabelDistricts().subscribe(function (data) {
            data.map(function (item) {
              _this2.availableDistricts.push(item.payload.doc.data());
            });
          });
          this.slingshotService.getAllDistricts().subscribe(function (data) {
            data.map(function (item) {
              _this2.allDistricts.push(item.payload.doc.data());
            });
          });
        }
      }, {
        key: "onDistrictChange",
        value: function onDistrictChange(id) {
          this.disabledRegBtn = false;
          this.selectedDistrict = this.slingshotService.getDistrictById(this.availableDistricts, id);
        }
      }, {
        key: "registerDistrict",
        value: function registerDistrict() {
          this.showForm = true;
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          // stop here if form is invalid
          if (this.registerForm.invalid || !this.isFileValid1 || !this.isFileValid2 || !this.isFileValid3 || !this.isChecked) {
            return;
          } // form registration logic


          this.slingshotService.districtRegistration(Object.assign({
            RequestedDistrict: {
              id: this.selectedDistrict.id,
              name: this.selectedDistrict.name
            }
          }, this.registerForm.value));
          this.dialog.open(PopupDialog, {
            width: '80%'
          });
        }
      }, {
        key: "onFormReset",
        value: function onFormReset() {
          this.registerForm.reset();
        }
      }, {
        key: "validateFileUpload",
        value: function validateFileUpload(e, doc) {
          var file = e.target.files[0];
          if (doc == 'doc1') this.isFileValid1 = false;else if (doc == 'doc2') this.isFileValid2 = false;else if (doc == 'doc3') this.isFileValid3 = false;

          if (file && file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg') {
            if (file.size <= 1000000) if (doc == 'doc1') this.isFileValid1 = true;else if (doc == 'doc2') this.isFileValid2 = true;else if (doc == 'doc3') this.isFileValid3 = true;
          }
        }
      }]);

      return AssociationComponent;
    }();

    AssociationComponent.ctorParameters = function () {
      return [{
        type: _Services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    AssociationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-association',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./association.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/association/association.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./association.component.scss */
      "./src/app/association/association.component.scss")).default]
    })], AssociationComponent);

    var PopupDialog =
    /*#__PURE__*/
    function () {
      function PopupDialog(router, dialogRef, data) {
        _classCallCheck(this, PopupDialog);

        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        dialogRef.disableClose = true;
      }

      _createClass(PopupDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
          this.router.navigateByUrl('/login');
        }
      }]);

      return PopupDialog;
    }();

    PopupDialog.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    PopupDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'popup-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration-popup.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/association/registration-popup.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))], PopupDialog);
    /***/
  },

  /***/
  "./src/app/association/confirm-password.validator.ts":
  /*!***********************************************************!*\
    !*** ./src/app/association/confirm-password.validator.ts ***!
    \***********************************************************/

  /*! exports provided: ConfirmPasswordValidator */

  /***/
  function srcAppAssociationConfirmPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
      return ConfirmPasswordValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ConfirmPasswordValidator =
    /*#__PURE__*/
    function () {
      function ConfirmPasswordValidator() {
        _classCallCheck(this, ConfirmPasswordValidator);
      }

      _createClass(ConfirmPasswordValidator, null, [{
        key: "MatchPassword",
        value: function MatchPassword(control) {
          var password = control.get('password').value;
          var confirmPassword = control.get('confirmPassword').value;

          if (password != confirmPassword) {
            control.get('confirmPassword').setErrors({
              isConfirmPassword: true
            });
          }
        }
      }]);

      return ConfirmPasswordValidator;
    }();
    /***/

  },

  /***/
  "./src/app/contact-us/contact-us.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactUsContactUsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n  border-radius: 0em !important;\n}\n#contact-us {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#contact-us .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#contact-us .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#contact-us .img-area img {\n  width: 100%;\n}\n#contact-us .social-icons i {\n  padding: 10px;\n}\n#contact-us .social-icons i:hover {\n  color: #ff8b23;\n}\n#contact-us .association-info h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .association-info i {\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 50%;\n  text-align: center;\n  background: #1b1919;\n  margin-right: 15px;\n  width: 60px;\n  color: #fff;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#contact-us .association-info p {\n  font-size: 20px;\n  margin-top: 20px;\n}\n#contact-us .user-info h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .user-info .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#contact-us .user-info .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#contact-us .user-info .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#contact-us .user-info .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#contact-us .contact-form {\n  margin-top: 80px !important;\n}\n#contact-us .contact-form h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .contact-form .field {\n  height: 50px;\n}\n#contact-us .contact-form .field,\n#contact-us .contact-form textarea {\n  border-radius: 0em;\n}\n#contact-us .contact-form .field:hover,\n#contact-us .contact-form textarea:hover,\n#contact-us .contact-form .action-button:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;\n}\n#contact-us .contact-form .map {\n  border-radius: 0.3em;\n}\n@media only screen and (max-width: 768px) {\n  #contact-us .user-info .card {\n    margin-top: 20px;\n  }\n  #contact-us .card-col {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  #contact-us .contactForm {\n    margin-top: 50px;\n  }\n  #contact-us .contact-form {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9DOlxcV29ya3NwYWNlXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtdXMvQzpcXFdvcmtzcGFjZVxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBQzNEQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZZTztFRVhQLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FEOERKO0FDM0RBO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtBRDhESjtBQzdESTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEK0RSO0FDN0RJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEK0RSO0FDOURRO0VBQ0ksV0FBQTtBRGdFWjtBQzdESTtFQUNJLGFBQUE7QUQrRFI7QUM3REk7RUFDSSxjRnRCRztBQ3FGWDtBQzVEUTtFQUNJLHdCQUFBO0FEOERaO0FDNURRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7QUQ4RFo7QUMzRFE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUQ2RFo7QUN6RFE7RUFDSSx3QkFBQTtBRDJEWjtBQ3pEUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQyRFo7QUMxRFk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJGakVMO0VFa0VLLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0NBQUE7QUQ0RGhCO0FDMURZO0VBQ0ksT0FBQTtFQUNBLFFBQUE7QUQ0RGhCO0FDMURZO0VBQ0ksd0RBQUE7QUQ0RGhCO0FDeERJO0VBQ0ksMkJBQUE7QUQwRFI7QUN6RFE7RUFDSSx3QkFBQTtBRDJEWjtBQ3pEUTtFQUNJLFlBQUE7QUQyRFo7QUN6RFE7O0VBRUksa0JBQUE7QUQyRFo7QUN6RFE7OztFQUdJLHVEQUFBO0FEMkRaO0FDekRRO0VBQ0ksb0JBQUE7QUQyRFo7QUN0REE7RUFJWTtJQUNJLGdCQUFBO0VEc0RkO0VDbkRNO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFRHFEVjtFQ25ETTtJQUNJLGdCQUFBO0VEcURWO0VDbkRNO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFRHFEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiR0aC1jb2xvcjogI2ZmOGIyMztcclxuJHRoLWNvbG9yLWRhcms6ICNmZjM2MDA7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG59XHJcblxyXG5cclxuLyogVGhlbWUtQ29sb3JzICovXHJcblxyXG4uYmctb2Zmd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjNmNTtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBlbSAhaW1wb3J0YW50O1xufVxuXG4jY29udGFjdC11cyB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbiNjb250YWN0LXVzIC5qdW1ib3Ryb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMzI1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwZW07XG59XG4jY29udGFjdC11cyAuaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2NvbnRhY3QtdXMgLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2NvbnRhY3QtdXMgLnNvY2lhbC1pY29ucyBpIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiNjb250YWN0LXVzIC5zb2NpYWwtaWNvbnMgaTpob3ZlciB7XG4gIGNvbG9yOiAjZmY4YjIzO1xufVxuI2NvbnRhY3QtdXMgLmFzc29jaWF0aW9uLWluZm8gaDIge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcbn1cbiNjb250YWN0LXVzIC5hc3NvY2lhdGlvbi1pbmZvIGkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMWIxOTE5O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4jY29udGFjdC11cyAuYXNzb2NpYXRpb24taW5mbyBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuI2NvbnRhY3QtdXMgLnVzZXItaW5mbyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxuI2NvbnRhY3QtdXMgLnVzZXItaW5mbyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNjb250YWN0LXVzIC51c2VyLWluZm8gLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNjb250YWN0LXVzIC51c2VyLWluZm8gLmNhcmQ6aG92ZXI6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4jY29udGFjdC11cyAudXNlci1pbmZvIC5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogODBweCAhaW1wb3J0YW50O1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSAuZmllbGQge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIC5maWVsZCxcbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAwZW07XG59XG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIC5maWVsZDpob3ZlcixcbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gdGV4dGFyZWE6aG92ZXIsXG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIC5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbn1cbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gLm1hcCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNjb250YWN0LXVzIC51c2VyLWluZm8gLmNhcmQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgI2NvbnRhY3QtdXMgLmNhcmQtY29sIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAjY29udGFjdC11cyAuY29udGFjdEZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCA0NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NvbnRhY3QtdXMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIC5qdW1ib3Ryb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbiAgICB9XHJcbiAgICAuaW1nLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWwtaWNvbnMgaSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5zb2NpYWwtaWNvbnMgaTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIH1cclxuICAgIC5hc3NvY2lhdGlvbi1pbmZvIHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFiMTkxOTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIC4xNSkhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmllbGQsXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZDpob3ZlcixcclxuICAgICAgICB0ZXh0YXJlYTpob3ZlcixcclxuICAgICAgICAuYWN0aW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXAge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgI2NvbnRhY3QtdXMge1xyXG4gICAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactUsComponent =
    /*#__PURE__*/
    function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);

        this.users = [1, 2, 3];
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-us.component.scss */
      "./src/app/contact-us/contact-us.component.scss")).default]
    })], ContactUsComponent);
    /***/
  },

  /***/
  "./src/app/gallery/gallery.component.scss":
  /*!************************************************!*\
    !*** ./src/app/gallery/gallery.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGalleryGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/gallery/gallery.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/gallery/gallery.component.ts ***!
    \**********************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GalleryComponent =
    /*#__PURE__*/
    function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryComponent;
    }();

    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gallery.component.scss */
      "./src/app/gallery/gallery.component.scss")).default]
    })], GalleryComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.home {\n  width: 100%;\n}\n.carousel-indicators .active {\n  background-color: #ff8b23;\n}\n.action-button {\n  display: inline-block;\n  padding: 13px 47px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.entry-title {\n  font-weight: bold;\n}\n.entry-content {\n  font-size: 18px;\n}\n.wrapper-box {\n  padding: 96px 0;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#banner-area {\n  margin-top: 80px;\n}\n#banner-area .carousel-item {\n  background: no-repeat center center scroll;\n  background-size: cover;\n  -webkit-background-size: cover;\n}\n#banner-area .carousel-caption:hover {\n  background-color: #0000009c;\n}\n#banner-area .carousel-caption {\n  bottom: 35%;\n  background-color: #2423236e;\n  padding: 30px;\n}\n#banner-area .carousel-caption h5 {\n  font-size: 45px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n#register-area {\n  padding-left: 85px;\n  padding-right: 85px;\n}\n#register-area .reg-panel {\n  border-top: solid 1px #ffffff;\n  border-bottom: solid 1px #ffffff;\n  padding-top: 64px;\n  padding-bottom: 56px;\n}\n#register-area .reg_text {\n  font-weight: 400;\n  line-height: 1.2;\n  font-size: 34px;\n  font-family: \"Righteous\", cursive;\n}\n#register-area .action-button {\n  font-size: 18px;\n}\n#register-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#register-area .img-area img {\n  width: 100%;\n}\n#register-area .img-area:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n#welcome-area .ico-box {\n  height: 100%;\n  padding: 40px;\n  border-radius: 24px;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  border: 0;\n  background: -webkit-gradient(linear, right top, left top, from(#ff5a00), to(#ff3600));\n  background: linear-gradient(270deg, #ff5a00 0%, #ff3600 100%);\n  color: #fff;\n}\n#welcome-area .ico-box .shake-hand {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  height: 20%;\n  width: 20%;\n}\n#welcome-area .ico-box .outline {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #fff;\n  font-size: 16px;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 2px;\n  padding: 12px 48px;\n  text-transform: uppercase;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n#welcome-area .ico-box .outline:hover {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n#game-area .img {\n  width: 100%;\n}\n#game-area .img:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  -webkit-transition: -webkit-transform 0.5s ease-out;\n  transition: -webkit-transform 0.5s ease-out;\n  transition: transform 0.5s ease-out;\n  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\n}\n#game-area .slingshot-box {\n  overflow: hidden;\n  border-radius: 0.25rem !important;\n}\n#testimonial-area {\n  font-family: \"Didact Gothic\", sans-serif;\n  position: relative;\n  color: #000;\n  overflow: hidden;\n  width: 100%;\n  background-size: cover;\n}\n#testimonial-area .carousel .fa {\n  font-size: 20px;\n  color: #0000007a;\n}\n#testimonial-area .carousel-indicators li {\n  background-color: #0a01018c;\n}\n#testimonial-area .carousel-indicators li.active {\n  background-color: #ff8b23;\n}\n#testimonial-area .img-overlay {\n  padding: 50px 0px;\n}\n#testimonial-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#testimonial-area .img-area img {\n  width: 100%;\n}\n#testimonial-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n#testimonial-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n#results-area .img-area {\n  width: 80px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#results-area .img-area img {\n  width: 100%;\n}\n#results-area .list-group-item:hover {\n  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;\n}\n#results-area .list-group-item:hover .result {\n  color: #ff3600;\n}\n#member-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#member-area .img-area img {\n  width: 100%;\n}\n#member-area .card {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#member-area .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#member-area .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#member-area .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#events-area .action-icon .fa {\n  font-size: 25px;\n  color: #0000007a;\n}\n#events-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n#events-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n#events-area .badge {\n  padding: 1.25em 0.7em !important;\n}\n#events-area .img-container {\n  position: relative;\n}\n#events-area .img-container .img-text {\n  width: 84%;\n  position: absolute;\n  /* Position the background text */\n  top: 12%;\n  /* At the bottom. Use top:0 to append it to the top */\n  left: 8%;\n  background: black;\n  /* Fallback color */\n  background: rgba(0, 0, 0, 0.5);\n  /* Black background with 0.5 opacity */\n  color: #f1f1f1;\n  /* Grey text */\n}\n#events-area .info p {\n  max-width: 600px;\n}\n#gallery-area .img-right .row {\n  padding: 17px;\n}\n#gallery-area .img-right .row:first-child {\n  padding-top: 0px !important;\n}\n@media only screen and (max-width: 992px) {\n  #banner-area .carousel-caption {\n    bottom: 50px;\n  }\n\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-box {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n\n  #register-area {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  #register-area .reg_text {\n    font-size: 20px;\n  }\n  #register-area .reg-btn {\n    font-size: 14px;\n    padding: 10px 40px;\n  }\n\n  #banner-area .carousel-caption {\n    display: none;\n  }\n\n  .shake-hand {\n    height: 25% !important;\n    width: 25% !important;\n  }\n\n  .res-sec {\n    background-color: #0000000a;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  #events-area .info {\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: center !important;\n  }\n\n  #gallery-area .img-right .row:first-child {\n    padding-top: 34px !important;\n  }\n\n  #results-area .list-group-item {\n    margin-top: 0.6rem !important;\n  }\n}\n@media only screen and (min-width: 992px) {\n  #welcome-area .member-box {\n    padding-right: 50px;\n    padding-left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcV29ya3NwYWNlXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvQzpcXFdvcmtzcGFjZVxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBQzNEQTtFQUNJLFdBQUE7QUQ4REo7QUMxREk7RUFDSSx5QkZTRztBQ29EWDtBQ3pEQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZFTztFRURQLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FENERKO0FDekRBO0VBQ0ksaUJBQUE7QUQ0REo7QUN6REE7RUFDSSxlQUFBO0FENERKO0FDekRBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBRDRESjtBQ3pEQTtFQUNJLGdCQUFBO0FENERKO0FDM0RJO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FENkRSO0FDM0RJO0VBQ0ksMkJBQUE7QUQ2RFI7QUMzREk7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FENkRSO0FDNURRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUQ4RFo7QUN6REE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FENERKO0FDM0RJO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQ2RFI7QUMzREk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FENkRSO0FDM0RJO0VBQ0ksZUFBQTtBRDZEUjtBQzNESTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FENkRSO0FDNURRO0VBQ0ksV0FBQTtBRDhEWjtBQzNESTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsK0JBQUE7RUFBQSw0REFBQTtBRDZEUjtBQ3hESTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxTQUFBO0VBQ0EscUZBQUE7RUFBQSw2REFBQTtFQUNBLFdBQUE7QUQyRFI7QUMxRFE7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUQ0RFo7QUMxRFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUQ0RFo7QUMxRFE7RUFDSSxZQUFBO0VBQ0EsbUJGaEhEO0VFaUhDLG1CQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRDREWjtBQ3RESTtFQUNJLFdBQUE7QUR5RFI7QUN2REk7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsbURBQUE7RUFBQSwyQ0FBQTtFQUFBLG1DQUFBO0VBQUEsb0VBQUE7QUR5RFI7QUN2REk7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0FEeURSO0FDckRBO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBRHVESjtBQ3JEUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRHVEWjtBQ25EUTtFQUNJLDJCQUFBO0FEcURaO0FDbkRRO0VBQ0kseUJGeEpEO0FDNk1YO0FDbERJO0VBQ0ksaUJBQUE7QURvRFI7QUNsREk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURvRFI7QUNuRFE7RUFDSSxXQUFBO0FEcURaO0FDbERJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEb0RSO0FDbERJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRG9EUjtBQy9DSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEa0RSO0FDakRRO0VBQ0ksV0FBQTtBRG1EWjtBQy9DUTtFQUNJLDBEQUFBO0FEaURaO0FDaERZO0VBQ0ksY0ZwTUE7QUNzUGhCO0FDM0NJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEOENSO0FDN0NRO0VBQ0ksV0FBQTtBRCtDWjtBQzVDSTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEOENSO0FDN0NRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CRnRPRDtFRXVPQyxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FEK0NaO0FDN0NRO0VBQ0ksT0FBQTtFQUNBLFFBQUE7QUQrQ1o7QUM3Q1E7RUFDSSx3REFBQTtBRCtDWjtBQ3hDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRDJDWjtBQ3hDSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRDBDUjtBQ3hDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUQwQ1I7QUN4Q0k7RUFDSSxnQ0FBQTtBRDBDUjtBQ3hDSTtFQUNJLGtCQUFBO0FEMENSO0FDekNRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0VBQ0EscURBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRDJDWjtBQ3ZDUTtFQUNJLGdCQUFBO0FEeUNaO0FDbkNJO0VBQ0ksYUFBQTtBRHNDUjtBQ3JDUTtFQUNJLDJCQUFBO0FEdUNaO0FDbENBO0VBR1E7SUFDSSxZQUFBO0VEbUNWOztFQy9CTTtJQUNJLGlCQUFBO0VEa0NWO0FBQ0Y7QUM5QkE7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUQrQk47RUM5Qk07SUFDSSxpQkFBQTtFRGdDVjs7RUM3QkU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VEZ0NOO0VDL0JNO0lBQ0ksZUFBQTtFRGlDVjtFQy9CTTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFRGlDVjs7RUM3Qk07SUFDSSxhQUFBO0VEZ0NWOztFQzdCRTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7RURnQ047O0VDOUJFO0lBQ0ksMkJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VEaUNOOztFQzlCTTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFRGlDVjs7RUM1QlU7SUFDSSw0QkFBQTtFRCtCZDs7RUMxQk07SUFDSSw2QkFBQTtFRDZCVjtBQUNGO0FDekJBO0VBRVE7SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0VEMEJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uaG9tZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEzcHggNDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZW50cnktdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVudHJ5LWNvbnRlbnQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53cmFwcGVyLWJveCB7XG4gIHBhZGRpbmc6IDk2cHggMDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNiYW5uZXItYXJlYSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4jYmFubmVyLWFyZWEgLmNhcm91c2VsLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNiYW5uZXItYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5Yztcbn1cbiNiYW5uZXItYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGJvdHRvbTogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMzIzNmU7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4jYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24gaDUge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbiNyZWdpc3Rlci1hcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiA4NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4NXB4O1xufVxuI3JlZ2lzdGVyLWFyZWEgLnJlZy1wYW5lbCB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmZmZmZjtcbiAgcGFkZGluZy10b3A6IDY0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1NnB4O1xufVxuI3JlZ2lzdGVyLWFyZWEgLnJlZ190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbn1cbiNyZWdpc3Rlci1hcmVhIC5hY3Rpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuI3JlZ2lzdGVyLWFyZWEgLmltZy1hcmVhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4jcmVnaXN0ZXItYXJlYSAuaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jcmVnaXN0ZXItYXJlYSAuaW1nLWFyZWE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG5cbiN3ZWxjb21lLWFyZWEgLmljby1ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjVhMDAgMCUsICNmZjM2MDAgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuI3dlbGNvbWUtYXJlYSAuaWNvLWJveCAuc2hha2UtaGFuZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMjAlO1xufVxuI3dlbGNvbWUtYXJlYSAuaWNvLWJveCAub3V0bGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIHBhZGRpbmc6IDEycHggNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuI3dlbGNvbWUtYXJlYSAuaWNvLWJveCAub3V0bGluZTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuXG4jZ2FtZS1hcmVhIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNnYW1lLWFyZWEgLmltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG59XG4jZ2FtZS1hcmVhIC5zbGluZ3Nob3QtYm94IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4jdGVzdGltb25pYWwtYXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuY2Fyb3VzZWwgLmZhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDAwMDdhO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwMTAxOGM7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmltZy1vdmVybGF5IHtcbiAgcGFkZGluZzogNTBweCAwcHg7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4jcmVzdWx0cy1hcmVhIC5pbWctYXJlYSB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNyZXN1bHRzLWFyZWEgLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3Jlc3VsdHMtYXJlYSAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNyZXN1bHRzLWFyZWEgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciAucmVzdWx0IHtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbiNtZW1iZXItYXJlYSAuaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI21lbWJlci1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNtZW1iZXItYXJlYSAuY2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNtZW1iZXItYXJlYSAuY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgaGVpZ2h0OiA0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuI21lbWJlci1hcmVhIC5jYXJkOmhvdmVyOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuI21lbWJlci1hcmVhIC5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbiNldmVudHMtYXJlYSAuYWN0aW9uLWljb24gLmZhIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzAwMDAwMDdhO1xufVxuI2V2ZW50cy1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBjb2xvcjogIzAwMDtcbn1cbiNldmVudHMtYXJlYSAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4jZXZlbnRzLWFyZWEgLmJhZGdlIHtcbiAgcGFkZGluZzogMS4yNWVtIDAuN2VtICFpbXBvcnRhbnQ7XG59XG4jZXZlbnRzLWFyZWEgLmltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jZXZlbnRzLWFyZWEgLmltZy1jb250YWluZXIgLmltZy10ZXh0IHtcbiAgd2lkdGg6IDg0JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBQb3NpdGlvbiB0aGUgYmFja2dyb3VuZCB0ZXh0ICovXG4gIHRvcDogMTIlO1xuICAvKiBBdCB0aGUgYm90dG9tLiBVc2UgdG9wOjAgdG8gYXBwZW5kIGl0IHRvIHRoZSB0b3AgKi9cbiAgbGVmdDogOCU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCAwLjUgb3BhY2l0eSAqL1xuICBjb2xvcjogI2YxZjFmMTtcbiAgLyogR3JleSB0ZXh0ICovXG59XG4jZXZlbnRzLWFyZWEgLmluZm8gcCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbiNnYWxsZXJ5LWFyZWEgLmltZy1yaWdodCAucm93IHtcbiAgcGFkZGluZzogMTdweDtcbn1cbiNnYWxsZXJ5LWFyZWEgLmltZy1yaWdodCAucm93OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNiYW5uZXItYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLndyYXBwZXItYm94IC5lbnRyeS10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXItYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICAud3JhcHBlci1ib3ggLmVudHJ5LXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxuXG4gICNyZWdpc3Rlci1hcmVhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgI3JlZ2lzdGVyLWFyZWEgLnJlZ190ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgI3JlZ2lzdGVyLWFyZWEgLnJlZy1idG4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIH1cblxuICAjYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2hha2UtaGFuZCB7XG4gICAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmVzLXNlYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDBhO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gICNldmVudHMtYXJlYSAuaW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjZ2FsbGVyeS1hcmVhIC5pbWctcmlnaHQgLnJvdzpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDM0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gICNyZXN1bHRzLWFyZWEgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMC42cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI3dlbGNvbWUtYXJlYSAubWVtYmVyLWJveCB7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLmhvbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTNweCA0N3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmRjYjllO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVudHJ5LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZW50cnktY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi53cmFwcGVyLWJveCB7XHJcbiAgICBwYWRkaW5nOiA5NnB4IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jYmFubmVyLWFyZWEge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDljO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIGJvdHRvbTogMzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDIzMjM2ZTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI3JlZ2lzdGVyLWFyZWEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogODVweDtcclxuICAgIC5yZWctcGFuZWwge1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ190ZXh0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5pbWctYXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltZy1hcmVhOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxuICAgIH1cclxufVxyXG5cclxuI3dlbGNvbWUtYXJlYSB7XHJcbiAgICAuaWNvLWJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDI1NSwgOTAsIDAsIDEpIDAlLCByZ2JhKDI1NSwgNTQsIDAsIDEpIDEwMCUpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC5zaGFrZS1oYW5kIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdXRsaW5lIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCA0OHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdXRsaW5lOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNnYW1lLWFyZWEge1xyXG4gICAgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1nOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgICAuc2xpbmdzaG90LWJveCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN0ZXN0aW1vbmlhbC1hcmVhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLWNvbnRhY3RzLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAuY2Fyb3VzZWwge1xyXG4gICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwMTAxOGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLW92ZXJsYXkge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1hcmVhIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuI3Jlc3VsdHMtYXJlYSB7XHJcbiAgICAuaW1nLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAucmVzdWx0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGgtY29sb3ItZGFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI21lbWJlci1hcmVhIHtcclxuICAgIC5pbWctYXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2V2ZW50cy1hcmVhIHtcclxuICAgIC5hY3Rpb24taWNvbiB7XHJcbiAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDdhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjI1ZW0gMC43ZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmltZy10ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvKiBQb3NpdGlvbiB0aGUgYmFja2dyb3VuZCB0ZXh0ICovXHJcbiAgICAgICAgICAgIHRvcDogMTIlO1xyXG4gICAgICAgICAgICAvKiBBdCB0aGUgYm90dG9tLiBVc2UgdG9wOjAgdG8gYXBwZW5kIGl0IHRvIHRoZSB0b3AgKi9cclxuICAgICAgICAgICAgbGVmdDogOCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICAgICAgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggMC41IG9wYWNpdHkgKi9cclxuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIC8qIEdyZXkgdGV4dCAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNnYWxsZXJ5LWFyZWEge1xyXG4gICAgLmltZy1yaWdodCAucm93IHtcclxuICAgICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAvLyB0YWJsZXQgZGV2aWNlc1xyXG4gICAgI2Jhbm5lci1hcmVhIHtcclxuICAgICAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAud3JhcHBlci1ib3gge1xyXG4gICAgICAgIC5lbnRyeS10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAud3JhcHBlci1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIC5lbnRyeS10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNyZWdpc3Rlci1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgLnJlZ190ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVnLWJ0biB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNiYW5uZXItYXJlYSB7XHJcbiAgICAgICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaGFrZS1oYW5kIHtcclxuICAgICAgICBoZWlnaHQ6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yZXMtc2VjIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMGE7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgI2V2ZW50cy1hcmVhIHtcclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2dhbGxlcnktYXJlYSB7XHJcbiAgICAgICAgLmltZy1yaWdodCAucm93IHtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI3Jlc3VsdHMtYXJlYSB7XHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAjd2VsY29tZS1hcmVhIHtcclxuICAgICAgICAubWVtYmVyLWJveCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/slingshot.service */
    "./src/app/Services/slingshot.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(slingshotService) {
        _classCallCheck(this, HomeComponent);

        this.slingshotService = slingshotService;
        this.list = [1, 2, 3, 4];
        this.members = [1, 2, 3, 4];
        this.districtList = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _Services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/layout/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n#footer {\n  padding: 70px;\n  background: #000;\n  color: #fff;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#footer .hr {\n  background-color: #fff;\n}\n#footer .action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n}\n#footer .contact h3,\n#footer .subscribe h3 {\n  color: #ff3600;\n}\n#footer .contact h3 span,\n#footer .subscribe h3 span {\n  color: #fff;\n}\n#footer .social-icons i {\n  padding: 10px;\n  border-radius: 50%;\n  font-size: 20px;\n  text-align: center;\n  background: red;\n  margin-right: 15px;\n  width: 40px;\n  color: #fff;\n}\n#footer .social-icons .fa-twitter {\n  background: #55ACEE;\n}\n#footer .social-icons .fa-linkedin {\n  background: #007bb5;\n}\n#footer .social-icons .fa-facebook {\n  background: #3B5998;\n}\n#footer .social-icons .fa-youtube {\n  background: #bb0000;\n}\n@media only screen and (max-width: 768px) {\n  #footer {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n  #footer .contact,\n#footer .subscribe {\n    margin-top: 50px;\n  }\n  #footer .info,\n#footer .sub {\n    margin-top: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) {\n  #footer .info,\n#footer .sub {\n    margin-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9DOlxcV29ya3NwYWNlXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9DOlxcV29ya3NwYWNlXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcbGF5b3V0XFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFVBLGNBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0E7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUko7QURXQTs7RUFFSSxZQUFBO0FDUko7QURXQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtBQ1JKO0FDMURBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FENkRKO0FDNURJO0VBQ0ksc0JBQUE7QUQ4RFI7QUM1REk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJGR0c7RUVGSCxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUQ4RFI7QUMxRFE7O0VBQ0ksY0FBQTtBRDZEWjtBQzVEWTs7RUFDSSxXQUFBO0FEK0RoQjtBQzFEUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FENERaO0FDMURRO0VBQ0ksbUJBQUE7QUQ0RFo7QUMxRFE7RUFDSSxtQkFBQTtBRDREWjtBQzFEUTtFQUNJLG1CQUFBO0FENERaO0FDMURRO0VBQ0ksbUJBQUE7QUQ0RFo7QUN2REE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUQwRE47RUN6RE07O0lBRUksZ0JBQUE7RUQyRFY7RUN6RE07O0lBRUksZ0JBQUE7RUQyRFY7QUFDRjtBQ3ZEQTtFQUVROztJQUVJLGtCQUFBO0VEd0RWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcblxyXG4vKiBMb2dvLVRleHQgKi9cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNmb290ZXIge1xuICBwYWRkaW5nOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xufVxuI2Zvb3RlciAuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuI2Zvb3RlciAuYWN0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNmb290ZXIgLmNvbnRhY3QgaDMsXG4jZm9vdGVyIC5zdWJzY3JpYmUgaDMge1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cbiNmb290ZXIgLmNvbnRhY3QgaDMgc3BhbixcbiNmb290ZXIgLnN1YnNjcmliZSBoMyBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG59XG4jZm9vdGVyIC5zb2NpYWwtaWNvbnMgaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4jZm9vdGVyIC5zb2NpYWwtaWNvbnMgLmZhLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIC5mYS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XG59XG4jZm9vdGVyIC5zb2NpYWwtaWNvbnMgLmZhLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyAuZmEteW91dHViZSB7XG4gIGJhY2tncm91bmQ6ICNiYjAwMDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2Zvb3RlciB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIH1cbiAgI2Zvb3RlciAuY29udGFjdCxcbiNmb290ZXIgLnN1YnNjcmliZSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAjZm9vdGVyIC5pbmZvLFxuI2Zvb3RlciAuc3ViIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNmb290ZXIgLmluZm8sXG4jZm9vdGVyIC5zdWIge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIC5ociB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA0NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LFxyXG4gICAgLnN1YnNjcmliZSB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtdHdpdHRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NUFDRUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS1saW5rZWRpbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDdiYjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS1mYWNlYm9vayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS15b3V0dWJlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JiMDAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICNmb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC5jb250YWN0LFxyXG4gICAgICAgIC5zdWJzY3JpYmUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5mbyxcclxuICAgICAgICAuc3ViIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICNmb290ZXIge1xyXG4gICAgICAgIC5pbmZvLFxyXG4gICAgICAgIC5zdWIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/layout/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layout/navbar/navbar.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/layout/navbar/navbar.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.navbar-light .navbar-toggler {\n  border: none;\n}\n.collapsing {\n  -webkit-transition: height 0.6s;\n  transition: height 0.6s;\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-title:hover {\n  cursor: pointer;\n}\n#navbarNav a.nav-link {\n  font-size: 13px !important;\n  font-weight: 500;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n#navbarNav a.nav-link:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 2px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#navbarNav a.nav-link:hover:before {\n  left: 0px;\n  right: 0;\n}\n#navbarNav a.nav-link:hover {\n  color: #ff8b23;\n}\n.navbar {\n  height: 80px;\n  width: 100%;\n  background-color: #fff;\n}\n.navbar-collapse {\n  background: inherit;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.outline:hover {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #ff8b23;\n  border-color: #ff8b23;\n  border-style: solid;\n  border-width: 2px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.outline {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 350ms ease 0s;\n  transition: all 350ms ease 0s;\n  text-transform: uppercase;\n  padding: 7px 20px;\n  margin-left: 30px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 992px) {\n  .outline {\n    margin-left: 0px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n  }\n\n  .navbar-collapse {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-top: 70px;\n    margin-right: 20px;\n    padding-top: 20px;\n  }\n\n  .navbar-light .navbar-nav .nav-link {\n    padding-top: 15px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .navbar li {\n    padding-left: 13px;\n    padding-right: 13px;\n  }\n\n  .navbar-brand {\n    padding-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9DOlxcV29ya3NwYWNlXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L25hdmJhci9DOlxcV29ya3NwYWNlXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcbGF5b3V0XFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFVBLGNBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0E7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUko7QURXQTs7RUFFSSxZQUFBO0FDUko7QURXQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtBQ1JKO0FDMURBO0VBQ0UsWUFBQTtBRDZERjtBQzFEQTtFQUFlLCtCQUFBO0VBQUEsdUJBQUE7QUQ4RGY7QUMzREE7RUFDSSx5QkFBQTtBRDhESjtBQzNEQTtFQUNFLGVBQUE7QUQ4REY7QUMzREE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRDhERjtBQzdERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkZuQk87RUVvQlAsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBRCtESjtBQzdERTtFQUNFLFNBQUE7RUFDQSxRQUFBO0FEK0RKO0FDNURFO0VBQ0UsY0ZsQ087QUNnR1g7QUMxREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FENkRGO0FDMURBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FENkRGO0FDMURBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxjRnREUztFRXVEVCxxQkZ2RFM7RUV3RFQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUQ2REY7QUMxREE7RUFDRSxZQUFBO0VBQ0EsbUJGL0RTO0VFZ0VULG1CQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUQ2REY7QUMxREE7RUFFRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFRDRERjs7RUMxREE7SUFDRSx3REFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUQ2REY7O0VDM0RBO0lBQ0UsaUJBQUE7RUQ4REY7QUFDRjtBQzNEQTtFQUVFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFRDRERjs7RUMxREE7SUFDRSxrQkFBQTtFRDZERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbGxhcHNpbmcge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC42cztcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ubmF2YmFyLXRpdGxlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbmF2YmFyTmF2IGEubmF2LWxpbmsge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuI25hdmJhck5hdiBhLm5hdi1saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG4jbmF2YmFyTmF2IGEubmF2LWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMDtcbn1cbiNuYXZiYXJOYXYgYS5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmY4YjIzO1xufVxuXG4ubmF2YmFyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLm91dGxpbmU6aG92ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmOGIyMztcbiAgYm9yZGVyLWNvbG9yOiAjZmY4YjIzO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuXG4ub3V0bGluZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2UgMHM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5vdXRsaW5lIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cblxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhciBsaSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gIH1cblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2xsYXBzaW5nIHsgIHRyYW5zaXRpb246IGhlaWdodCAwLjZzOyB9ICBcclxuXHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbn1cclxuXHJcbi5uYXZiYXItdGl0bGU6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI25hdmJhck5hdiBhLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gICY6aG92ZXI6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmhvdmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJHRoLWNvbG9yO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG59XHJcblxyXG4ub3V0bGluZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICR0aC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgLm91dGxpbmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC8vZGVza3RvcFxyXG4gIC5uYXZiYXIgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppLayoutNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.navbar-nav, .outline').on('click', function () {
            if (!$(this).hasClass('dropdown-toggle')) {
              $('.navbar-collapse').collapse('hide');
            }
          });
          $(document).on('click', function () {
            if (!$(this).hasClass('dropdown-toggle')) {
              $('.navbar-collapse').collapse('hide');
            }
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/layout/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n#login-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  background-color: #fff;\n}\n#login-sec .container {\n  padding-top: 40px;\n  padding-bottom: 50px;\n}\n#login-sec input {\n  height: 50px;\n}\n#login-sec .btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n#login-sec .forgotPass:hover {\n  color: #000 !important;\n  cursor: pointer;\n}\n@media only screen and (max-width: 768px) {\n  #login-sec .container {\n    padding: 15px 30px 20px 30px !important;\n  }\n  #login-sec .container .p-5 {\n    padding: 3rem 0.5rem 3rem 0.5rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFdvcmtzcGFjZVxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL0M6XFxXb3Jrc3BhY2VcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBQzNEQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBRDhESjtBQzdESTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUQrRFI7QUM3REk7RUFDSSxZQUFBO0FEK0RSO0FDN0RJO0VBQ0kseUJGR0c7RUVGSCxXQUFBO0FEK0RSO0FDNURRO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FEOERaO0FDekRBO0VBR1E7SUFDSSx1Q0FBQTtFRDBEVjtFQ3pEVTtJQUNJLDJDQUFBO0VEMkRkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcblxyXG4vKiBMb2dvLVRleHQgKi9cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNsb2dpbi1zZWMge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4jbG9naW4tc2VjIC5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4jbG9naW4tc2VjIGlucHV0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuI2xvZ2luLXNlYyAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG4jbG9naW4tc2VjIC5mb3Jnb3RQYXNzOmhvdmVyIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNsb2dpbi1zZWMgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xuICB9XG4gICNsb2dpbi1zZWMgLmNvbnRhaW5lciAucC01IHtcbiAgICBwYWRkaW5nOiAzcmVtIDAuNXJlbSAzcmVtIDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNsb2dpbi1zZWMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmZvcmdvdFBhc3Mge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvL21vYmlsZSBkZXZpY2VcclxuICAgICNsb2dpbi1zZWMge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHggMjBweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5wLTUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwLjVyZW0gM3JlbSAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          this.loginPage.nativeElement.hidden = !this.loginPage.nativeElement.hidden;
          this.forgetPassPage.nativeElement.hidden = !this.forgetPassPage.nativeElement.hidden;
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigateByUrl('/admin');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginPage', {
      static: false
    })], LoginComponent.prototype, "loginPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('forgetPassPage', {
      static: false
    })], LoginComponent.prototype, "forgetPassPage", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/match-results/match-results.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/match-results/match-results.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMatchResultsMatchResultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoLXJlc3VsdHMvbWF0Y2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/match-results/match-results.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/match-results/match-results.component.ts ***!
    \**********************************************************/

  /*! exports provided: MatchResultsComponent */

  /***/
  function srcAppMatchResultsMatchResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchResultsComponent", function () {
      return MatchResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MatchResultsComponent =
    /*#__PURE__*/
    function () {
      function MatchResultsComponent() {
        _classCallCheck(this, MatchResultsComponent);
      }

      _createClass(MatchResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MatchResultsComponent;
    }();

    MatchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-match-results',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./match-results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/match-results/match-results.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./match-results.component.scss */
      "./src/app/match-results/match-results.component.scss")).default]
    })], MatchResultsComponent);
    /***/
  },

  /***/
  "./src/app/slingshot/slingshot.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/slingshot/slingshot.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSlingshotSlingshotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#game {\n  font-family: \"Didact Gothic\", sans-serif;\n  overflow-x: hidden;\n  margin-top: 80px;\n}\n#game .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#game .cat-cards .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n#game .sling-img {\n  width: 80%;\n}\n#game .img {\n  width: 100%;\n}\n#game .category {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .sling-img {\n    width: 100% !important;\n  }\n\n  .game-info {\n    margin-top: 20px;\n    padding-top: 0px !important;\n  }\n\n  .cat-cards {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n\n  .page-title {\n    font-size: 1.2rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpbmdzaG90L0M6XFxXb3Jrc3BhY2VcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxzbGluZ3Nob3RcXHNsaW5nc2hvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2xpbmdzaG90L3NsaW5nc2hvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQ1E7RUFDSSw2Q0FBQTtBQ0NaO0FERUk7RUFDSSxVQUFBO0FDQVI7QURFSTtFQUNJLFdBQUE7QUNBUjtBREVJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQ0FSO0FESUE7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUNGTjs7RURJRTtJQUNJLHNCQUFBO0VDRE47O0VER0U7SUFDSSxnQkFBQTtJQUNBLDJCQUFBO0VDQU47O0VERUU7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VDQ047O0VEQ0U7SUFDSSw0QkFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zbGluZ3Nob3Qvc2xpbmdzaG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dhbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIC5qdW1ib3Ryb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbiAgICB9XHJcbiAgICAuY2F0LWNhcmRzIHtcclxuICAgICAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2xpbmctaW1nIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvL21vYmlsZSBkZXZpY2VcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5zbGluZy1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZ2FtZS1pbmZvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jYXQtY2FyZHMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIjZ2FtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2dhbWUgLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn1cbiNnYW1lIC5jYXQtY2FyZHMgLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4jZ2FtZSAuc2xpbmctaW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cbiNnYW1lIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNnYW1lIC5jYXRlZ29yeSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAuc2xpbmctaW1nIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmdhbWUtaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2F0LWNhcmRzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgfVxuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/slingshot/slingshot.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/slingshot/slingshot.component.ts ***!
    \**************************************************/

  /*! exports provided: SlingshotComponent */

  /***/
  function srcAppSlingshotSlingshotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlingshotComponent", function () {
      return SlingshotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SlingshotComponent =
    /*#__PURE__*/
    function () {
      function SlingshotComponent() {
        _classCallCheck(this, SlingshotComponent);
      }

      _createClass(SlingshotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SlingshotComponent;
    }();

    SlingshotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slingshot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slingshot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slingshot.component.scss */
      "./src/app/slingshot/slingshot.component.scss")).default]
    })], SlingshotComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyAwZVLXEgIUKB3ENEZtKEDGv4hxDWW0nc0',
        authDomain: 'slingshot-association.firebaseapp.com',
        databaseURL: 'https://slingshot-association.firebaseio.com',
        projectId: 'slingshot-association',
        storageBucket: 'slingshot-association.appspot.com',
        messagingSenderId: '529992012588',
        appId: '1:529992012588:web:a84d4364498957bbd1d289',
        measurementId: 'G-HCNPQGHM7Q'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Workspace\SlingshotAssociation\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map