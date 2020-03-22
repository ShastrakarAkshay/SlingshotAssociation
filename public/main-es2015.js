(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"admin\">\r\n    <div class=\"mt-5\">\r\n        <div class=\"row justify-content-center\">\r\n            <h2><strong>Welcome Akshay Shastrakar</strong></h2>\r\n        </div>\r\n        <div class=\"row actions justify-content-center mt-3\">\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./requests\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Requests <span class=\"badge badge-primary\">{{requestCount}}</span></h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./events\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Events</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./match\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Match Results</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./enquiries\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Enquiries <span class=\"badge badge-primary\">{{enquiryCount}}</span></h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./profile\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Profile</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"container mt-5 bg-light\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"approval\">\r\n    <div class=\"container\">\r\n        <div class=\"text-center\">\r\n            <h2><strong>Approval Requests</strong></h2>\r\n        </div>\r\n        <div class=\"row justify-content-end mt-5\">\r\n            <div class=\"col-sm-4 col-xs-12\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" #searchKey (keyup)=\"filterResult(searchKey.value)\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"data-table mt-3 mb-5\" style=\"border:1px solid #00000017;\">\r\n            <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"index\">\r\n                    <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{i+1}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\" width=\"40%\" class=\"empNameLink pointer text-capitalize\">\r\n                        {{element.firstName}} {{element.lastName}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Weight Column -->\r\n                <ng-container matColumnDef=\"requestedDistrict.name\">\r\n                    <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Requested For </th>\r\n                    <td mat-cell *matCellDef=\"let element\" width=\"30%\" class=\"text-capitalize\"> {{element.requestedDistrict.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Symbol Column -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\r\n                    <td mat-cell *matCellDef=\"let element\" width=\"20%\">\r\n                        <div class=\"row p-2\">\r\n                            <a class=\"btn text-info pointer\" (click)=\"getPersonInfo(element)\">View</a>\r\n                            <a class=\"btn text-danger pointer\" (click)=\"deleteRequest(element)\">Delete</a>\r\n                        </div>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\r\n            </table>\r\n            <mat-paginator [length]=\"100 \" [pageSize]=\"5 \" [pageSizeOptions]=\"[5, 10, 25, 50] \" showFirstLastButtons>\r\n            </mat-paginator>\r\n        </div>\r\n\r\n        <div *ngIf=\"showSpinner\">\r\n            <ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\r\n            </ngx-spinner>\r\n        </div>\r\n    </div>\r\n\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"text-center\"><strong>Requested For \"{{personData.requestedDistrict.name}}\" District</strong></h3>\r\n<hr>\r\n<mat-dialog-content>\r\n    <table class=\"table table-responsive table-borderless\" width=\"100%\">\r\n        <tbody>\r\n            <tr>\r\n                <td width=\"30%\" class=\"text-right\"><strong>Name</strong></td>\r\n                <td width=\"70%\" class=\"text-capitalize\">{{personData.firstName}} {{personData.middleName}} {{personData.lastName}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"text-right\"><strong>Address</strong></td>\r\n                <td width=\"70%\" class=\"text-capitalize\">{{personData.addressLine1}}, {{personData.addressLine2}}, {{personData.city}}, {{personData.district}}, Pin Code - {{personData.pin}}.</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"text-right\"><strong>Email</strong></td>\r\n                <td width=\"70%\">{{personData.email}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"text-right\"><strong>Mobile</strong></td>\r\n                <td width=\"70%\">{{personData.mobile}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"text-right\"><strong>Date of Birth</strong></td>\r\n                <td width=\"70%\">{{personData.dateOfBirth}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"text-right\"><strong>PAN No.</strong></td>\r\n                <td width=\"70%\" class=\"text-uppercase\">{{personData.panNo}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"text-right\"><strong>Aadhaar No.</strong></td>\r\n                <td width=\"70%\">{{personData.aadhaarNo}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class=\"text-center mt-3 mb-3\">\r\n        <button mat-raised-button class=\"btn sling-btn\" (click)=\"approveDistrict(personData)\">Approve</button>\r\n        <button mat-raised-button class=\"btn sling-btn ml-3\" (click)=\"close()\">Close</button>\r\n    </div>\r\n</mat-dialog-content>\r\n\r\n<div *ngIf=\"showSpinner\">\r\n    <ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\r\n    </ngx-spinner>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/enquiries/enquiries.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/enquiries/enquiries.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"enquiries\">\r\n    <div class=\"container\">\r\n        <div class=\"text-center\">\r\n            <h2><strong>Enquiries</strong></h2>\r\n        </div>\r\n        <div class=\"data-table mt-5 mb-5\" style=\"border:1px solid #00000017;\">\r\n            <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"index\">\r\n                    <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\" width=\"5%\"> {{i+1}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"empNameLink pointer text-capitalize\">\r\n                        {{element.firstName}} {{element.lastName}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Weight Column -->\r\n                <ng-container matColumnDef=\"email\">\r\n                    <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Email </th>\r\n                    <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\"> {{element.email}} </td>\r\n                </ng-container>\r\n\r\n                 <!-- Weight Column -->\r\n                 <ng-container matColumnDef=\"mobile\">\r\n                    <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Mobile </th>\r\n                    <td mat-cell *matCellDef=\"let element\" width=\"10%\" class=\"text-capitalize\"> {{element.mobile}} </td>\r\n                </ng-container>\r\n\r\n                 <!-- Weight Column -->\r\n                 <ng-container matColumnDef=\"message\">\r\n                    <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Message </th>\r\n                    <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"text-capitalize\"> {{element.message}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Symbol Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\r\n                    <td mat-cell *matCellDef=\"let element\" width=\"15%\">\r\n                        <div class=\"row p-2\">\r\n                            <a class=\"btn text-info pointer\">View</a>\r\n                            <a class=\"btn text-danger pointer\">Delete</a>\r\n                        </div>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\r\n            </table>\r\n            <mat-paginator [length]=\"100 \" [pageSize]=\"5 \" [pageSizeOptions]=\"[5, 10, 25, 50] \" showFirstLastButtons>\r\n            </mat-paginator>\r\n        </div>\r\n\r\n        <div *ngIf=\"showSpinner\">\r\n            <ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\r\n            </ngx-spinner>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"events\">\n    <div class=\"container\">\n        <h2>Events</h2>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"match\">\n    <div class=\"container\">\n        <h2>Match Results</h2>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"affiliation-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"head-sec text-center\">\r\n            <h2>Affiliated Districts</h2>\r\n            <p class=\"text-muted\">Some districts are not affiliated yet, for affiliation please contact.</p>\r\n            <div class=\"d-flex justify-content-center search-sec h-100\" *ngIf=\"false\">\r\n                <div class=\"searchbar\">\r\n                    <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Search...\" #search (keyup)=\"searchDistrict(search.value)\">\r\n                    <a class=\"search_icon\"><i class=\"fa fa-search\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row dist-sec mt-3 justify-content-center\">\r\n            <div class=\"col-sm-4\" *ngFor=\"let dist of registeredDistrictsList\">\r\n                <div class=\"card mt-3 text-white bg-dark\" (click)=\"getDistrictInfo(dist.id)\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">{{dist.name}}</h4>\r\n                        <p class=\"card-text\"> <a href=\"#\" class=\"action-button\">read more</a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <i class=\"fa fa-caret-down text-center\"></i>\r\n        </div>\r\n\r\n        <div class=\"dist-info jumbotron\">\r\n            <div>\r\n                <h2 class=\"text-center\">{{districtInfo.districtName}}</h2>\r\n                <div class=\"row raw-info justify-content-center mt-5\">\r\n                    <div class=\"col-sm-8\">\r\n                        <p class=\"text-justify\">This district is registered under \"Slingshot Sports Association of Maharashtra, India\" affilated to - \"Indian Slingshot Sport Federation\", \"Asian Slingshot Sport Federation\", \"World organizes Slingshot Sport Federation. Affiliated\r\n                            on Date - {{districtInfo.approvedOn}}\"</p>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-8\">\r\n                        <p>icons</p>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"text-center mt-4\">\r\n                    <h4><strong> <i class=\"fa fa-user-circle\"></i> Members</strong></h4>\r\n                </div>\r\n                <div class=\"row justify-content-center text-center\">\r\n                    <div class=\"col-sm-4\" *ngFor=\"let member of selectedDistrict\">\r\n                        <div class=\"card card-cascade\">\r\n                            <div class=\"view view-cascade overlay\">\r\n                                <div class=\"img-area mt-5\">\r\n                                    <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body card-body-cascade text-center\">\r\n                                <h4 class=\"card-title text-capitalize\"><strong>Mr. {{member.firstName}} {{member.lastName}}</strong></h4>\r\n                                <span class=\"font-weight-bold text-capitalize text-info\">({{member.role}})</span><br>\r\n                                <span class=\"font-weight-bold\">{{member.email}}</span><br>\r\n                                <span class=\"font-weight-bold\">{{member.mobile}}</span>\r\n                                <div class=\"social-icons mt-3\">\r\n                                    <i class=\"fa fa-phone\" [matTooltip]=\"member.mobile\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-envelope\" [matTooltip]=\"member.email\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"spinner-area\" *ngIf=\"showSpinner\">\r\n        <ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\r\n        </ngx-spinner>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/association/association.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/association/association.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"association\">\r\n    <div class=\"jumbotron dist-area\">\r\n        <div class=\"row justify-content-center p-2\">\r\n            <div class=\"col-sm-5 alert alert-info text-center\">\r\n                Note: Districts that are already registered are not available in the list.\r\n            </div>\r\n        </div>\r\n        <h2 class=\"text-center title mt-5\">Join Us</h2>\r\n        <h3 class=\"text-center mt-3 reg-title\"><strong>Select District To Register</strong></h3>\r\n        <div class=\"row justify-content-center mt-4\">\r\n            <div class=\"col-sm-5\">\r\n                <select class=\"form-control\" height=\"50px\" (change)=\"onDistrictChange($event.target.value)\">\r\n                    <option selected disabled>Select District</option>\r\n                    <option *ngFor=\"let dist of availableDistricts\" value=\"{{dist.id}}\">{{dist.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row text-center justify-content-center mt-2\">\r\n            <div class=\"col-sm-2\">\r\n                <input type=\"button\" class=\"btn form-control reg-button\" value=\"Register\" height=\"50px\" (click)=\"registerDistrict()\" [disabled]=\"disabledRegBtn\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container form-area mt-5\" *ngIf=\"showForm\">\r\n        <h4 class=\"text-center title\">Affiliation For \"{{selectedDistrict.name}}\" District</h4>\r\n        <form id=\"regForm\" class=\"mt-4\" [formGroup]=\"registerForm\">\r\n            <h2 class=\"text-center\">Registration Form</h2>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>First Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{'is-invalid':registerForm.get('firstName').touched && registerForm.get('firstName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Middle Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"middleName\" [ngClass]=\"{'is-invalid':registerForm.get('middleName').touched && registerForm.get('middleName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Last Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{'is-invalid':registerForm.get('lastName').touched && registerForm.get('lastName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Date of Birth</label>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"date\" class=\"form-control\" formControlName=\"dateOfBirth\" [ngClass]=\"{'is-invalid':registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').invalid}\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-secondary\" type=\"button\">\r\n                                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>Mobile No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" matTooltip=\"Mobile Number use for password recovery & notifications!\" matTooltipPosition=\"above\" class=\"form-control\" formControlName=\"mobile\" maxlength=\"10\" [ngClass]=\"{'is-invalid':registerForm.get('mobile').touched && registerForm.get('mobile').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('mobile').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('mobile').invalid && !registerForm.get('mobile').errors?.required\">\r\n                                Invalid Mobile Number</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <label>Address Line 1</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"addressLine1\" [ngClass]=\"{'is-invalid':registerForm.get('addressLine1').touched && registerForm.get('addressLine1').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <label>Address Line 2</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"addressLine2\" [ngClass]=\"{'is-invalid':registerForm.get('addressLine2').touched && registerForm.get('addressLine2').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>City</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"city\" [ngClass]=\"{'is-invalid':registerForm.get('city').touched && registerForm.get('city').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>District</label>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" formControlName=\"district\" [ngClass]=\"{'is-invalid':registerForm.get('district').touched && registerForm.get('district').invalid}\">\r\n                            <option selected disabled>select district</option>\r\n                            <option *ngFor=\"let dist of allDistricts\" value=\"{{dist.name}}\">{{dist.name}}</option>\r\n                        </select>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Pin Code</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pin\" maxlength=\"6\" [ngClass]=\"{'is-invalid':registerForm.get('pin').touched && registerForm.get('pin').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('pin').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('pin').invalid && !registerForm.get('pin').errors?.required\">\r\n                                    Invalid Pin Code</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Aadhaar No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"aadhaarNo\" maxlength=\"12\" [ngClass]=\"{'is-invalid':registerForm.get('aadhaarNo').touched && registerForm.get('aadhaarNo').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('aadhaarNo').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('aadhaarNo').invalid && !registerForm.get('aadhaarNo').errors?.required\">\r\n                                    Invalid Aadhaar No.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>PAN No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"panNo\" maxlength=\"10\" [ngClass]=\"{'is-invalid':registerForm.get('panNo').touched && registerForm.get('panNo').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('panNo').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('panNo').invalid && !registerForm.get('panNo').errors?.required\">\r\n                                    Invalid PAN No.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row mt-4 mb-3\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>Email</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':registerForm.get('email').touched && registerForm.get('email').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('email').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('email').invalid && !registerForm.get('email').errors?.required\">\r\n                                    Invalid email.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Password</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{'is-invalid':registerForm.get('password').touched && registerForm.get('password').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('password').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('password').hasError('minlength') && !registerForm.get('password').errors?.required\">\r\n                            Minimum 8 characters required</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Confirm Password</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{'is-invalid':registerForm.get('confirmPassword').touched && registerForm.get('confirmPassword').invalid && registerForm.get('confirmPassword').errors?.isConfirmPassword}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Password not matched\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>Aadhar Card</strong></label>\r\n                    <input type=\"file\" id=\"files1\" name=\"files1\" (input)=\"validateFileUpload($event, 'doc1')\" formControlName=\"file1\" [ngClass]=\"{'is-invalid':registerForm.get('file1').touched && registerForm.get('file1').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file1').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>PAN Card</strong></label>\r\n                    <input type=\"file\" id=\"files2\" name=\"files2\" formControlName=\"file2\" (input)=\"validateFileUpload($event, 'doc2')\" [ngClass]=\"{'is-invalid':registerForm.get('file2').touched && registerForm.get('file2').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file2').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>Passport Photo</strong></label>\r\n                    <input type=\"file\" id=\"files3\" name=\"files3\" formControlName=\"file3\" (input)=\"validateFileUpload($event, 'doc3')\" [ngClass]=\"{'is-invalid':registerForm.get('file3').touched && registerForm.get('file3').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file3').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid1 || registerForm.get('file1').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                   Adhaar Card: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid2 || registerForm.get('file2').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                   PAN Card: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid3 || registerForm.get('file3').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                   Photo: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row  mt-5\">\r\n                <div class=\"col-sm-12\">\r\n                    <mat-checkbox [(ngModel)]=\"isChecked\" formControlName=\"terms\">Accept Terms & Conditions</mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"mt-5 text-center\">\r\n                <input type=\"button\" class=\"btn act-btn\" value=\"Register\" height=\"50px\" (click)=\"onFormSubmit()\" [disabled]=\"!registerForm.valid || !isFileValid1 || !isFileValid2 || !isFileValid3 || !isChecked\">\r\n                <input type=\"button\" class=\"btn act-btn ml-2\" value=\"clear\" height=\"50px\" (click)=\"onFormReset()\">\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"spinner-area\" *ngIf=\"showSpinner\">\r\n        <ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\r\n        </ngx-spinner>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"contact-us\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2>Contact Us</h2>\r\n    </div>\r\n    <div class=\"container mt-5\">\r\n        <div class=\"association-info text-center\">\r\n            <h2>Contact Our Association</h2>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-map-marker\"></i></span>\r\n                    <br>\r\n                    <p>Matoshree Niwas, Dhamangaon By-Pass, Pimpalgaon, Yavatmal, Maharashtra, Pin Code - 445001.</p>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-phone\"></i></span>\r\n                    <br>\r\n                    <p>8180008641, 9511663616, 8432146555</p>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-envelope\"></i></span>\r\n                    <br>\r\n                    <p style=\"word-wrap: break-word;\">slingshot.maha@gmail.com</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"user-info text-center mt-5\">\r\n            <h2>Our Members</h2>\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-sm-6 col-md-4 card-col\" *ngFor=\"let member of members\">\r\n                    <div class=\"card card-cascade\">\r\n                        <div class=\"view view-cascade overlay\">\r\n                            <div class=\"img-area mt-5\">\r\n                                <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body card-body-cascade text-center\">\r\n                            <h4 class=\"mt-3\"><strong>{{member.name}}</strong></h4>\r\n                            <span class=\"text-info\">({{member.role}})</span>\r\n                            <br>\r\n                            <span>{{member.email}}</span>\r\n                            <div class=\"social-icons mt-3\">\r\n                                <i class=\"fa fa-phone\" [matTooltip]=\"member.mobile\" matTooltipPosition=\"above\"></i>\r\n                                <i class=\"fa fa-envelope\" [matTooltip]=\"member.email\" matTooltipPosition=\"above\"></i>\r\n                                <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"contact-form mt-5\">\r\n            <div class=\"text-center\">\r\n                <h2>Get in touch</h2>\r\n            </div>\r\n            <div class=\"row mt-5 mb-5\">\r\n                <div class=\"col-md-6\">\r\n                    <iframe\r\n                        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.296419656939!2d78.1262283696957!3d20.4118795880123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3ef4606797df5%3A0x99fdaa3c4f6b7d9d!2sPimpalgaon%2C%20Yavatmal%2C%20Maharashtra%20445001!5e0!3m2!1sen!2sin!4v1583593786510!5m2!1sen!2sin\"\r\n                        width=\"100%\" class=\"shadow map\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"\r\n                        allowfullscreen=\"\"></iframe>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <form [formGroup]=\"contactForm\" class=\"contactForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control field\" placeholder=\"First Name\"\r\n                                        formControlName=\"firstName\"\r\n                                        [ngClass]=\"{'is-invalid':contactForm.get('firstName')?.touched && contactForm.get('firstName').invalid}\">\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        Field is required\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control field\" placeholder=\"Last Name\"\r\n                                        formControlName=\"lastName\"\r\n                                        [ngClass]=\"{'is-invalid':contactForm.get('lastName')?.touched && contactForm.get('lastName').invalid}\">\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        Field is required\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control field\" placeholder=\"Email\"\r\n                                        formControlName=\"email\"\r\n                                        [ngClass]=\"{'is-invalid':contactForm.get('email')?.touched && contactForm.get('email').invalid}\">\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        <span *ngIf=\"contactForm.get('email').errors?.required\">Field is required</span>\r\n                                        <span\r\n                                            *ngIf=\"contactForm.get('email').invalid && !contactForm.get('email').errors?.required\">\r\n                                            Invalid email.</span>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control field\" placeholder=\"Mobile\"\r\n                                        formControlName=\"mobile\" minlength=\"10\" maxlength=\"10\"\r\n                                        [ngClass]=\"{'is-invalid':contactForm.get('mobile')?.touched && contactForm.get('mobile').invalid}\">\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        <span *ngIf=\"contactForm.get('mobile').errors?.required\">Field is\r\n                                            required</span>\r\n                                        <span\r\n                                            *ngIf=\"contactForm.get('mobile').invalid && !contactForm.get('mobile').errors?.required\">\r\n                                            Invalid Mobile Number</span>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <textarea rows=\"4\" cols=\"50\" class=\"form-control\" placeholder=\"Message\"\r\n                                        formControlName=\"message\"\r\n                                        [ngClass]=\"{'is-invalid':contactForm.get('message')?.touched && contactForm.get('message').invalid}\"></textarea>\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        Field is required\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"button\" mat-raised-button class=\"btn sling-btn\" name=\"Send\"\r\n                                    value=\"Send\" (click)=\"sendEnquiry()\" [disabled]=\"!contactForm.valid\">\r\n                                <input type=\"button\" mat-raised-button class=\"btn sling-btn ml-2\" name=\"clear\"\r\n                                    value=\"Clear\" (click)=\"clearForm()\">\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>gallery works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home\">\r\n    <section id=\"banner-area\">\r\n        <div id=\"banner-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>SET YOUR GOAL WITH SLINGSHOT</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">read more</a> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner2.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>GET SLINGSHOT AFFILIATION</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">REGISTER</a> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner3.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>ENJOY PLAYING SLINGSHOT</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">read more</a> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#banner-carousel\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#banner-carousel\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"register-area\">\r\n        <div class=\"reg-panel\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"cta_content d-flex  flex-column align-items-md-center align-items-start text-center justify-content-start\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/logo.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"reg_text pt-3\">Affiliation Open For All District (Maharashtra)</div>\r\n                            <div class=\"mx-auto\"> <a class=\"action-button reg-btn mt-3\" routerLink=\"/association\">Register</a></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"welcome-area\" class=\"bg-offwhite wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-1 member-box\">\r\n                    <div class=\"ico-box active\">\r\n                        <figure class=\"d-flex justify-content-center mt-3\">\r\n                            <img class=\"shake-hand\" src=\"./assets/images/hand-shake.png\" alt=\"\">\r\n                        </figure>\r\n                        <header class=\"entry-header\">\r\n                            <h3 class=\"entry-title-box\">Become a part of Slingshot</h3>\r\n                        </header>\r\n                        <!-- <div class=\"entry-content\">\r\n                            <a class=\"btn outline mt-4\">Signup</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title welcome-title text-center\">Welcome to Association</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">We provide affiliation of slingshot game for the districts in Maharashtra. This is comes under Slingshot Sports Association of Maharashtra. To avail the affiliation please register. For the registered members of district we\r\n                                provide management of the participants and game information through this website. Get latest updates of matches and events. So Hurry Up to get Affiliation. </p>\r\n                        </div>\r\n                        <!-- <div class=\"entry-footer mt-2\">\r\n                            <a routerLink=\"association\" class=\"action-button\">read more</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"game-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title text-center\">About Game</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">In INDIA, We are playing this game from our childhood. We have enjoyed lots of moment with this game to hit the target. Now lets make this game as our sports. We provide the opportunity to compete the people with this game,\r\n                                and achieve some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra, India<strong>\"</strong>. Please read the rules for this game before you start. </p>\r\n                        </div>\r\n                        <div class=\"entry-footer mt-2\">\r\n                            <a routerLink=\"sports\" class=\"action-button\">read more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-1 slingshot-box\">\r\n                    <img class=\"img shadow rounded\" src=\"./assets/images/slingshot1.jpg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"results-area\" class=\"wrapper-box bg-offwhite\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Latest Match Results</strong></h2>\r\n            </div>\r\n            <ul class=\"list-group mt-4\">\r\n                <li class=\"list-group-item mt-1\" *ngFor=\"let item of list\">\r\n                    <div class=\"event-panel row pt-3\">\r\n                        <div class=\"col-sm-4 align-items-center text-center justify-content-start\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\r\n                            </div>\r\n                            <span>Akshay Shastrakar</span>\r\n                            <br>\r\n                            <span>(Yavatmal)</span>\r\n                        </div>\r\n                        <div class=\"col-sm-4 text-center res-sec\">\r\n                            <div class=\"result\" style=\"font-size: 35px;\r\n                            font-weight: bold;\">8 : 3</div>\r\n                            <div>August 25, 2018</div>\r\n                            <div class=\"row text-center justify-content-center\">\r\n                                <p><i class=\"fa fa-map-marker\"></i> Nehru Stadium, Vitthal Nagar, Yavatmal. Maharashtra.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4 text-center align-items-center justify-content-end\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\r\n                            </div>\r\n                            <span>Rameshwar Udgire</span>\r\n                            <br>\r\n                            <span>(Nagpur)</span>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"text-center mt-2\">\r\n                <a routerLink=\"/results\" class=\"action-button\">view more</a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"member-area\" class=\"wrapper-box bg-offwhite\" hidden>\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Our Members</strong></h2>\r\n            </div>\r\n            <div class=\"row justify-content-center mt-5\">\r\n                <div class=\"col-sm-3 col-md-3 card-col\" *ngFor=\"let user of members\">\r\n                    <div class=\"card card-cascade bg-offwhite mt-2\">\r\n                        <div class=\"view view-cascade overlay\">\r\n                            <div class=\"img-area mt-5\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body card-body-cascade text-center\">\r\n                            <h4 class=\"mt-1\"><strong>Mr. Lalit Dhoke</strong></h4>\r\n                            <span>(General Secretory)</span>\r\n                            <br>\r\n                            <span>lalit.dhoke@gmail.com</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n\r\n    <section id=\"testimonial-area\">\r\n        <div class=\"img-overlay text-center\">\r\n            <div class=\"container\">\r\n                <div class=\"text-center\">\r\n                    <h2><strong>Our Members</strong></h2>\r\n                </div>\r\n                <div id=\"contactCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                    <ol class=\"carousel-indicators user-indicators\">\r\n                        <li data-target=\"#contactCourousel\" *ngFor=\"let member of members; let i = index\" [ngClass]=\"member.class\"></li>\r\n                    </ol>\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item pb-5\" *ngFor=\"let member of members\" [ngClass]=\"member.class\">\r\n                            <div class=\"img-area\">\r\n                                <img [src]=\"member.pic\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">{{member.name}}</h3>\r\n                                <span class=\"text-info\">({{member.role}})</span>\r\n                                <br>\r\n                                <span>{{member.email}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"carousel-control-prev\" href=\"#contactCourousel\" role=\"button\" data-slide=\"prev\">\r\n                        <i class=\"fa fa-caret-square-o-left\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"carousel-control-next\" href=\"#contactCourousel\" role=\"button\" data-slide=\"next\">\r\n                        <i class=\"fa fa-caret-square-o-right\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"events-area\" class=\"wrapper-box bg-offwhite\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Upcomming Events</strong></h2>\r\n            </div>\r\n            <div id=\"eventsCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators user-indicators\" hidden>\r\n                    <li data-target=\"#eventsCourousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"carousel-item active\">\r\n                        <div class=\"carousel-caption\">\r\n                            <div class=\"jumbotron bg-white\">\r\n                                <h5 class=\"text-uppercase\"><strong>event title</strong></h5>\r\n                                <div class=\"row justify-content-center mt-4\">\r\n                                    <div class=\"p-2 img-container\">\r\n                                        <img src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"260px\">\r\n                                        <div class=\"img-text\">\r\n                                            <h1><span class=\"badge\">14 <br /> Jan</span></h1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"p-2\">\r\n                                        <div class=\"info text-left\">\r\n                                            <span><strong><i class=\"fa fa-map-marker pr-1\"></i>Address</strong></span>\r\n                                            <p>Gandhi Nagar, Yavatmal, Maharashtra, Pin 445001.</p>\r\n                                            <span><strong><i class=\"fa fa-user pr-1\"></i>Contact Persons</strong></span>\r\n                                            <p>Vikas Shelke, Akshay Shastrakar</p>\r\n                                            <span><strong><i class=\"fa fa-phone pr-1\"></i>Phone</strong></span>\r\n                                            <p>9767986750, 9876767543</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-item\">\r\n                        <div class=\"carousel-caption\">\r\n                            <div class=\"jumbotron bg-white\">\r\n                                <h5><strong>EVENT TITLE</strong></h5>\r\n                                <div class=\"row justify-content-center mt-4\">\r\n                                    <div class=\"p-2 img-container\">\r\n                                        <img src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"260px\">\r\n                                        <div class=\"img-text\">\r\n                                            <h1><span class=\"badge\">14 <br /> Jan</span></h1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"p-2\">\r\n                                        <div class=\"info text-left\">\r\n                                            <span><strong><i class=\"fa fa-map-marker pr-1\"></i>Address</strong></span>\r\n                                            <p>Gandhi Nagar, Yavatmal, Maharashtra, Pin 445001.</p>\r\n                                            <span><strong><i class=\"fa fa-user pr-1\"></i>Contact Persons</strong></span>\r\n                                            <p>Vikas Shelke, Akshay Shastrakar</p>\r\n                                            <span><strong><i class=\"fa fa-phone pr-1\"></i>Phone</strong></span>\r\n                                            <p>9767986750, 9876767543</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-item\">\r\n                        <div class=\"carousel-caption\">\r\n                            <div class=\"jumbotron bg-white\">\r\n                                <h5><strong>EVENT TITLE</strong></h5>\r\n                                <div class=\"row justify-content-center mt-4\">\r\n                                    <div class=\"p-2 img-container\">\r\n                                        <img src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"260px\">\r\n                                        <div class=\"img-text\">\r\n                                            <h1><span class=\"badge\">14 <br /> Jan</span></h1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"p-2\">\r\n                                        <div class=\"info text-left\">\r\n                                            <span><strong><i class=\"fa fa-map-marker pr-1\"></i>Address</strong></span>\r\n                                            <p>Gandhi Nagar, Yavatmal, Maharashtra, Pin 445001.</p>\r\n                                            <span><strong><i class=\"fa fa-user pr-1\"></i>Contact Persons</strong></span>\r\n                                            <p>Vikas Shelke, Akshay Shastrakar</p>\r\n                                            <span><strong><i class=\"fa fa-phone pr-1\"></i>Phone</strong></span>\r\n                                            <p>9767986750, 9876767543</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a class=\"carousel-control-prev action-icon\" href=\"#eventsCourousel\" role=\"button\" data-slide=\"prev\">\r\n                    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"carousel-control-next action-icon\" href=\"#eventsCourousel\" role=\"button\" data-slide=\"next\">\r\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"gallery-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Gallery</strong></h2>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-6\">\r\n                    <img class=\"rounded\" src=\"./assets/images/ad.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n                <div class=\"col-sm-6 img-right\">\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/weapon-1.jpg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/weapon-2.jpg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"footer\">\r\n    <div class=\"row mb-5\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"ft-logo\">\r\n                <span class=\"main-title\">Slingshot</span><span class=\"sub-title\">Association</span>\r\n            </div>\r\n            <div class=\"ft-social mt-4\">\r\n                <span>SOCIAL CONNECT</span>\r\n                <div class=\"social-icons mt-3\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                    <i class=\"fa fa-instagram\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-5 contact\">\r\n            <h3>Contact<span> us</span></h3>\r\n            <div class=\"info\">\r\n                <p><i class=\"fa fa-map-marker pr-3\"></i>Matoshree Niwas, Pimpalgaon, Yavatmal.</p>\r\n                <p><i class=\"fa fa-phone pr-3\"></i>8180008641, 9511663616</p>\r\n                <p><i class=\"fa fa-envelope pr-3\"></i>slingshot.maha@gmail.com</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3 subscribe\">\r\n            <h3>Subscribe<span> us</span></h3>\r\n            <div class=\"sub\">\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\" required>\r\n                <input type=\"button\" class=\"btn btn-block action-button\" name=\"Subscribe\" value=\"Subscribe\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ft-credit\">\r\n        <hr class=\"hr\">\r\n        <p class=\"text-center\">Designed By Akshay Shastrakar | akshay.shastrakar1@gmail.com</p>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light fixed-top shadow\">\r\n    <div class='navbar-brand'>\r\n        <span class='navbar-title ml-2'><span class=\"main-title\">Slingshot</span><span class=\"sub-title\">Association</span></span>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/affiliation\">Affiliation</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n                <a class=\"nav-link\" routerLink=\"/admin\">Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/sports\">Sports</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#gallery-area\">Gallery</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/contact\">Contact us</a>\r\n            </li>\r\n        </ul>\r\n        <button class=\"btn outline\" *ngIf=\"isLoggedIn\" (click)=\"signOut()\">Logout</button>\r\n        <button class=\"btn outline\" routerLink=\"/login\" *ngIf=\"!isLoggedIn\">Login</button>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"jumbotron mt-5 p-5 shadow\">\r\n            <div class=\"login-page\" #loginPage>\r\n                <h2 class=\"text-center\">Sign in</h2>\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-5 mt-3\">\r\n                        <form [formGroup]=\"loginForm\">\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"enter email\" height=\"50px\" [ngClass]=\"{'is-invalid':loginForm.get('email').touched && loginForm.get('email').invalid}\">\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        <span *ngIf=\"loginForm.get('email').errors?.required\">Field is\r\n                                            required</span>\r\n                                    <span *ngIf=\"loginForm.get('email').invalid && !loginForm.get('email').errors?.required\">\r\n                                            Invalid email.</span>\r\n                                    </span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"enter password\" formControlName=\"password\" [ngClass]=\"{'is-invalid':loginForm.get('password').touched && loginForm.get('password').invalid}\" height=\"50px\">\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        Field is required\r\n                                    </span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"button\" class=\"btn form-control\" value=\"Login\" (click)=\"login()\" [disabled]=\"!loginForm.valid\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <a class=\"text-muted forgotPass\" (click)=\"forgotPassword()\">Forgot Password?</a>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"forget-pass-page\" #forgetPassPage hidden>\r\n                <h2 class=\"text-center\">Forgot Password</h2>\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-5 mt-3\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"enter email\" height=\"50px\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"enter password\" height=\"50px\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"confirm password\" height=\"50px\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"button\" class=\"btn form-control\" value=\"Reset\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col mt-3 text-center\">\r\n                            <span (click)=\"forgotPassword()\" matTooltip=\"Back\"><i class=\"fa fa-arrow-circle-o-left\"\r\n                                    style=\"font-size: 30px;\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/match-results/match-results.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match-results/match-results.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>match-results works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"type==='confirm'\">\n    <mat-dialog-content>\n        <h4 class=\"text-center\">{{message}}</h4>\n    </mat-dialog-content>\n    <div class=\"text-right mt-2\">\n        <button mat-stroked-button class=\"btn\" [mat-dialog-close]=\"true\">Yes</button>\n        <button mat-stroked-button class=\"btn ml-3\" (click)=\"close()\">No</button>\n    </div>\n</div>\n\n<div class=\"text-center p-2\" *ngIf=\"type==='register'\">\n    <h1>Successfully Registered !!</h1>\n    <h5>Once it gets approved you will get notified.</h5>\n    <h5>Thank You!</h5>\n    <button class=\"btn mt-4\" style=\"background-color: #ff8b23; color: #fff;\" mat-button [mat-dialog-close]=\"true\">OK</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"game\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2 class=\"page-title\">Slingshot Sports Association of Maharashtra</h2>\r\n    </div>\r\n\r\n    <div class=\"container wrapper\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-sm-6 text-center\">\r\n                <img class=\"sling-img shadow rounded\" src=\"./assets/images/slingshot2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-sm-6 game-info pt-5\">\r\n                <h4>Slingshot</h4>\r\n                <p class=\"text-justify mt-4\">In INDIA, We are playing this game from our childhood. We have enjoyed lots\r\n                    of moment with this game to hit the target. Now lets make this game as our sports. We provide the\r\n                    opportunity to compete the people with this game, and achieve\r\n                    some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra,\r\n                    India<strong>\"</strong>. Please read the rules for this game before you start.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"category mt-5 wrapper bg-offwhite\">\r\n        <h4 class=\"text-center\"><strong>Categories of Slingshot</strong> </h4>\r\n        <div class=\"row mt-4 cat-cards justify-content-center\">\r\n            <div class=\"col-sm-2 col-xs-3 mt-2\">\r\n                <div class=\"card text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Category 1</h5>\r\n                        <h5 class=\"card-title\"><strong>Sub-Junior</strong></h5>\r\n                        <div>\r\n                            <span>10 Feet</span>\r\n                            <p>(Under 10Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-6 mt-2\">\r\n                <div class=\"card text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Category 2</h5>\r\n                        <h5 class=\"card-title\"><strong>Teenager</strong></h5>\r\n                        <div>\r\n                            <span>15 Feet</span>\r\n                            <p>(10Yr - 14Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-6 mt-2\">\r\n                <div class=\"card  text-center\">\r\n                    <div class=\"card-body \">\r\n                        <h5 class=\"card-title\">Category 3</h5>\r\n                        <h5 class=\"card-title\"><strong>Junior</strong></h5>\r\n                        <div>\r\n                            <span>20 Feet</span>\r\n                            <p>(15Yr - 18Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-6 mt-2\">\r\n                <div class=\"card  text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Category 4</h5>\r\n                        <h5 class=\"card-title\"><strong>Senior</strong></h5>\r\n                        <div>\r\n                            <span>30 Feet</span>\r\n                            <p>(18Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-6 mt-2\">\r\n                <div class=\"card  text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Category 5</h5>\r\n                        <h5 class=\"card-title\"><strong>Master</strong></h5>\r\n                        <div>\r\n                            <span>30 Feet</span>\r\n                            <p>(35Yr Age)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"rules mt-5\">\r\n            <h4 class=\"text-center\"><strong>Rules of Game</strong> </h4>\r\n            <div class=\"row mt-4 justify-content-center\">\r\n                <!-- <div class=\"col-sm-4 mt-2\">\r\n                    <img class=\"img rounded\" src=\"./assets/images/rule3.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-sm-4 mt-2\">\r\n                    <img class=\"img rounded\" src=\"./assets/images/rule1.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-sm-4 mt-2\">\r\n                    <img class=\"img rounded\" src=\"./assets/images/rule2.png\" alt=\"\">\r\n                </div> -->\r\n                <div class=\"col-sm-10\">\r\n\r\n                    <ul class=\"list-group mt-4\">\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td><span class=\"circle mr-3\">1</span></td>\r\n                                    <td class=\"text-justify\"> स्पर्धकाने शुट लाईनच्या मागे उभे राहणे अनिवार्य आहे,\r\n                                        अन्यथा त्या स्पर्धकाला\r\n                                        स्पर्धेतून बाहेर\r\n                                        करण्यात\r\n                                        येईल.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item  p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td> <span class=\"circle mr-3\">2</span></td>\r\n                                    <td class=\"text-justify\">जर एखाद्या प्रवर्गात स्पर्धा नसेल तर त्या स्पर्धकाला सहभागी\r\n                                        प्रमाणपत्र देण्यात\r\n                                        येईल\r\n                                        किंवा\r\n                                        त्याला\r\n                                        पुढील स्पर्धेसाठी पाठवण्यात येईल.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td><span class=\"circle mr-3\">3</span></td>\r\n                                    <td class=\"text-justify\">\r\n                                        प्रत्येक फेरीमध्ये स्पर्धकाला 5 मिनिटांचा वेळ दिला जाईल, त्या वेळेत त्यांना दहा\r\n                                        गोट्या\r\n                                        लक्ष्यावर\r\n                                        माराव्या लागतील.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td> <span class=\"circle mr-3\">4</span></td>\r\n                                    <td class=\"text-justify\">\r\n                                        जर दोन किंवा त्यापेक्षा अधिक स्पर्धकांना सारखे गुण मिळाले असतील आणि पंचांना\r\n                                        निर्णय\r\n                                        घेणे होत\r\n                                        नसेल तर\r\n                                        तिसरी फेरी घेतल्या जाईल किंवा कमी वयाच्या स्पर्धकाला विजेसेपद दिल्या जाईल.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td><span class=\"circle mr-3\">5</span></td>\r\n                                    <td class=\"text-justify\">\r\n                                        सर्व स्पर्धकांनी स्वतःच्या सुरक्षिततेसाठी ग्लासेस आणि विचलित करणारे आवाज\r\n                                        नियंत्रक\r\n                                        साधन सोबत\r\n                                        आणने\r\n                                        अनिवार्य आहे.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td> <span class=\"circle mr-3\">6</span></td>\r\n                                    <td class=\"text-justify\">\r\n                                        एक फेरी ही 5 मिनिटांची असेल, जेव्हा वेळ निरीक्षक गोळीबार करून अथवा शिट्टी वाजवून\r\n                                        जाहीर करेल\r\n                                        तेव्हा\r\n                                        सुरुवात होईल.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td> <span class=\"circle mr-3\">7</span></td>\r\n                                    <td class=\"text-justify\">\r\n                                        तांत्रिक समिती (पंच) या समितीमध्ये पाच सदस्य असतील , त्यामध्ये 1 न्यायाधीश , 1\r\n                                        वेळ\r\n                                        निरीक्षक,\r\n                                        1 रेषा\r\n                                        निरीक्षक व 2 निरिक्षक असतील.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td><span class=\"circle mr-3\">8</span></td>\r\n                                    <td class=\"text-justify\"> फेरीच्या वेळी लक्षाला काही नुकसान झाल्यास आवश्यक असेल तर\r\n                                        पंच तांत्रिक समिती\r\n                                        निर्णय घेऊन लक्ष\r\n                                        बदलवून\r\n                                        दुसरे लक्ष्य लावुन ती फेरी त्याच वेळेपासून व पाच गुणांपासून चालू करण्यात येईल.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td><span class=\"circle mr-3\">9</span></td>\r\n                                    <td class=\"text-justify\">\r\n                                        गरज भासल्यास तांत्रिक समितीला दुसरी फेरी घेता येईल.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td><span class=\"circle-10 mr-3\">10</span></td>\r\n                                    <td class=\"text-justify\">\r\n                                        लक्ष्यावर दिलेल्या मर्यादेपेक्षा जास्त मारा केल्यास गुणांसाठी वैध योग्य लक्षवेध\r\n                                        आत\r\n                                        मोजल्या\r\n                                        जातील.\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5 text-justify\">\r\n                            <span class=\"text-danger\">स्पष्टीकरण : </span> समजा एखाद्या स्पर्धकाने 5 मिनिटांमध्ये 15\r\n                            लक्ष्यवेध केलेत, या 15 लक्ष्यवेधांमध्ये 3\r\n                            गुणांच्या वर्तुळात 3, 4 गुणांच्या वर्तुळात 3, 5 गुणांच्या वर्तुळात 1 व 8,9,10 गुणांच्या\r\n                            वर्तुळात प्रत्येकी 2 लक्ष्यवेध केले असेल तर अशा प्रसंगात अंतिम गुण मोजताना 3,4,5,6 या\r\n                            गुणांच्या वर्तुळातील वेध व 8 गुणांच्या\r\n                            वर्तुळातील कुठलाही एक वेध मोजले जातील आणि त्यानुसार स्पर्धकांचे गुण ठरविल्या जातील.\r\n                        </li>\r\n                    </ul>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-5 mt-5 bg-offwhite\">\r\n        <h4 class=\"text-center\"><strong>Equipments of Slingshot</strong> </h4>\r\n        <div class=\"row\">\r\n\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n#admin {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  overflow-x: hidden;\n}\n#admin .actions .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#admin .actions .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#admin .actions .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#admin .actions .card:hover {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#admin .actions .card:hover .card-title {\n  color: #ff8b23;\n}\n#admin .actions .badge {\n  background-color: #ff8b23;\n}\n@media only screen and (max-width: 768px) {\n  #admin .actions {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBQ3hFQTtFQUNJLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDJFSjtBQ3pFUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQyRVo7QUMxRVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJGTkw7RUVPSyxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FENEVoQjtBQzFFWTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FENEVoQjtBQ3pFUTtFQUNJLGVBQUE7RUFDQSx3REFBQTtBRDJFWjtBQzFFWTtFQUNJLGNGeEJMO0FDb0dYO0FDekVRO0VBQ0kseUJGNUJEO0FDdUdYO0FDdEVBO0VBR1E7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VEdUVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLnNsaW5nLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xufVxuXG4jYWRtaW4ge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4jYWRtaW4gLmFjdGlvbnMgLmNhcmQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jYWRtaW4gLmFjdGlvbnMgLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNhZG1pbiAuYWN0aW9ucyAuY2FyZDpob3ZlcjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbiNhZG1pbiAuYWN0aW9ucyAuY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4jYWRtaW4gLmFjdGlvbnMgLmNhcmQ6aG92ZXIgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNhZG1pbiAuYWN0aW9ucyAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNhZG1pbiAuYWN0aW9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNhZG1pbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0aC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIC4xNSkhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgI2FkbWluIHtcclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");



let AdminComponent = class AdminComponent {
    constructor(_service) {
        this._service = _service;
        this.requestCount = 0;
        this.enquiryCount = 0;
        this.userID = localStorage.getItem('user-id');
    }
    ngOnInit() {
        this._service.getAffiliationRequests().subscribe(data => {
            this.requestCount = data.length;
        });
        this._service.getEnquiries().subscribe(data => {
            this.enquiryCount = data.length;
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/affiliation-requests/affiliation-requests.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/affiliation-requests/affiliation-requests.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#approval {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  margin-bottom: 100px;\n}\n#approval .data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWZmaWxpYXRpb24tcmVxdWVzdHMvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxhZG1pblxcYWZmaWxpYXRpb24tcmVxdWVzdHNcXGFmZmlsaWF0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZmZpbGlhdGlvbi1yZXF1ZXN0cy9hZmZpbGlhdGlvbi1yZXF1ZXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ1E7RUFDSSwwQkFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWZmaWxpYXRpb24tcmVxdWVzdHMvYWZmaWxpYXRpb24tcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwcm92YWwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgLmRhdGEtdGFibGUge1xyXG4gICAgICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIjYXBwcm92YWwge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuI2FwcHJvdmFsIC5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/affiliation-requests/affiliation-requests.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/affiliation-requests/affiliation-requests.component.ts ***!
  \******************************************************************************/
/*! exports provided: AffiliationRequestsComponent, DistrictApprovalDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliationRequestsComponent", function() { return AffiliationRequestsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictApprovalDialog", function() { return DistrictApprovalDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");










let AffiliationRequestsComponent = class AffiliationRequestsComponent {
    constructor(_service, _dialog, _spinner, _toastr) {
        this._service = _service;
        this._dialog = _dialog;
        this._spinner = _spinner;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'name', 'requestedDistrict.name', 'actions'];
        this.affiliatinRequests = [];
        this.totalCount = 0;
        this.showSpinner = false;
    }
    ngOnInit() {
        this.showSpinner = true;
        this._spinner.show();
        this.getAffiliationRequestData();
    }
    getAffiliationRequestData() {
        this._service.getAffiliationRequests().subscribe(data => {
            this.affiliatinRequests = data.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            this.dataSource.data = this.affiliatinRequests;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this._spinner.hide();
            this.showSpinner = false;
        });
    }
    filterResult(serachKey) {
        this.dataSource.filter = serachKey.trim().toLowerCase();
    }
    getPersonInfo(personData) {
        this._dialog.open(DistrictApprovalDialog, {
            data: personData,
            autoFocus: false
        });
    }
    deleteRequest(personData) {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to delete record?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._toastr.success('Request Deleted Successfully.');
            }
        });
    }
};
AffiliationRequestsComponent.ctorParameters = () => [
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], AffiliationRequestsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], AffiliationRequestsComponent.prototype, "sort", void 0);
AffiliationRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-affiliation-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./affiliation-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./affiliation-requests.component.scss */ "./src/app/admin/affiliation-requests/affiliation-requests.component.scss")).default]
    })
], AffiliationRequestsComponent);

let DistrictApprovalDialog = class DistrictApprovalDialog {
    constructor(_dialogRef, _service, _spinner, _dialog, data) {
        this._dialogRef = _dialogRef;
        this._service = _service;
        this._spinner = _spinner;
        this._dialog = _dialog;
        this.data = data;
        _dialogRef.disableClose = true;
        this.personData = data;
    }
    ngOnInit() { }
    close() {
        this._dialogRef.close();
    }
    approveDistrict(personData) {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to approve user?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                personData.approvedOn = new Date();
                this._service.approveDistrict(personData);
            }
        });
    }
};
DistrictApprovalDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
];
DistrictApprovalDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'district-approval-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialogs/district-approval.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html")).default,
        styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }\n  .mat-dialog-container {\n    margin-top: 100px !important;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], DistrictApprovalDialog);



/***/ }),

/***/ "./src/app/admin/enquiries/enquiries.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/enquiries/enquiries.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#enquiries {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n#enquiries .data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW5xdWlyaWVzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcYWRtaW5cXGVucXVpcmllc1xcZW5xdWlyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9lbnF1aXJpZXMvZW5xdWlyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURDUTtFQUNJLDBCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9lbnF1aXJpZXMvZW5xdWlyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VucXVpcmllcyB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgLmRhdGEtdGFibGUge1xyXG4gICAgICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIjZW5xdWlyaWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4jZW5xdWlyaWVzIC5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/enquiries/enquiries.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/enquiries/enquiries.component.ts ***!
  \********************************************************/
/*! exports provided: EnquiriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesComponent", function() { return EnquiriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let EnquiriesComponent = class EnquiriesComponent {
    constructor(_service, _spinner) {
        this._service = _service;
        this._spinner = _spinner;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'name', 'email', 'mobile', 'message', 'action'];
        this.enquiries = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.showSpinner = true;
        this._spinner.show();
        this._service.getEnquiries().subscribe(data => {
            this.enquiries = data.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            this.dataSource.data = this.enquiries;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this._spinner.hide();
            this.showSpinner = false;
        });
    }
};
EnquiriesComponent.ctorParameters = () => [
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], EnquiriesComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], EnquiriesComponent.prototype, "sort", void 0);
EnquiriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enquiries',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enquiries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/enquiries/enquiries.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enquiries.component.scss */ "./src/app/admin/enquiries/enquiries.component.scss")).default]
    })
], EnquiriesComponent);



/***/ }),

/***/ "./src/app/admin/events/events.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/events/events.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#events {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZXZlbnRzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcYWRtaW5cXGV2ZW50c1xcZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2V2ZW50cyB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59IiwiI2V2ZW50cyB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/events/events.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/events/events.component.ts ***!
  \**************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventsComponent = class EventsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events.component.scss */ "./src/app/admin/events/events.component.scss")).default]
    })
], EventsComponent);



/***/ }),

/***/ "./src/app/admin/match-event-results/match-event-results.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/match-event-results/match-event-results.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#match {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWF0Y2gtZXZlbnQtcmVzdWx0cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxtYXRjaC1ldmVudC1yZXN1bHRzXFxtYXRjaC1ldmVudC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9tYXRjaC1ldmVudC1yZXN1bHRzL21hdGNoLWV2ZW50LXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hdGNoLWV2ZW50LXJlc3VsdHMvbWF0Y2gtZXZlbnQtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXRjaCB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59IiwiI21hdGNoIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/match-event-results/match-event-results.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/match-event-results/match-event-results.component.ts ***!
  \****************************************************************************/
/*! exports provided: MatchEventResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchEventResultsComponent", function() { return MatchEventResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatchEventResultsComponent = class MatchEventResultsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MatchEventResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-match-event-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./match-event-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./match-event-results.component.scss */ "./src/app/admin/match-event-results/match-event-results.component.scss")).default]
    })
], MatchEventResultsComponent);



/***/ }),

/***/ "./src/app/admin/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/admin/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/affliation/affliation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/affliation/affliation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n::-webkit-scrollbar {\n  width: 3px;\n}\n.action-button {\n  display: inline-block;\n  padding: 8px 30px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.img-area img {\n  width: 100%;\n}\n.fa-caret-down {\n  font-size: 20px;\n}\n#affiliation-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 130px;\n}\n#affiliation-sec .head-sec h2,\n#affiliation-sec .dist-info h2 {\n  font-family: \"Righteous\";\n}\n#affiliation-sec .head-sec .text-muted {\n  font-size: 20px;\n}\n#affiliation-sec .card .card-text {\n  display: none;\n}\n#affiliation-sec .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#affiliation-sec .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#affiliation-sec .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#affiliation-sec .card:hover {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#affiliation-sec .card:hover .card-title {\n  color: #ff8b23;\n}\n#affiliation-sec .search-sec .searchbar {\n  margin-bottom: auto;\n  margin-top: auto;\n  height: 45px;\n  background-color: #353b48;\n  border-radius: 30px;\n  padding: 3px;\n}\n#affiliation-sec .search-sec .search_input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  caret-color: transparent;\n  line-height: 40px;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n#affiliation-sec .search-sec .searchbar:hover > .search_input {\n  padding: 0 10px;\n  width: 300px;\n  caret-color: red;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n#affiliation-sec .search-sec .searchbar:hover > .search_icon {\n  background: white;\n  color: #ff8b23;\n}\n#affiliation-sec .search-sec .search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  color: white;\n  text-decoration: none;\n}\n#affiliation-sec .dist-sec {\n  width: 100%;\n  max-height: 300px;\n  padding-left: 30px;\n  overflow: hidden;\n}\n#affiliation-sec .dist-sec:hover {\n  overflow-y: scroll;\n}\n#affiliation-sec .dist-info .social-icons i {\n  padding: 10px;\n}\n#affiliation-sec .dist-info .social-icons i:hover {\n  color: #e74c3c;\n}\n#affiliation-sec .dist-info.jumbotron {\n  margin: 70px 30px 70px 30px;\n}\n@media only screen and (max-width: 768px) {\n  #affiliation-sec .search-sec .searchbar:hover > .search_input {\n    width: 250px;\n  }\n  #affiliation-sec .dist-info .card {\n    margin-top: 30px;\n  }\n  #affiliation-sec .dist-info.jumbotron {\n    margin: 30px 0px 70px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWZmbGlhdGlvbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYWZmbGlhdGlvbi9hZmZsaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZmZsaWF0aW9uL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcYWZmbGlhdGlvblxcYWZmbGlhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBQ3hFQTtFQUNJLFVBQUE7QUQyRUo7QUN4RUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJGUU87RUVQUCxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRDJFSjtBQ3hFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDJFSjtBQzFFSTtFQUNJLFdBQUE7QUQ0RVI7QUN4RUE7RUFDSSxlQUFBO0FEMkVKO0FDeEVBO0VBQ0ksd0NBQUE7RUFDQSxpQkFBQTtBRDJFSjtBQzFFSTs7RUFFSSx3QkFBQTtBRDRFUjtBQzFFSTtFQUNJLGVBQUE7QUQ0RVI7QUMxRUk7RUFDSSxhQUFBO0FENEVSO0FDMUVJO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDRFUjtBQzNFUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkZoREQ7RUVpREMsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBRDZFWjtBQzNFUTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FENkVaO0FDMUVJO0VBQ0ksZUFBQTtFQUNBLHdEQUFBO0FENEVSO0FDM0VRO0VBQ0ksY0ZsRUQ7QUMrSVg7QUN6RVE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEMkVaO0FDekVRO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QUQyRVo7QUN6RVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBRDJFWjtBQ3pFUTtFQUNJLGlCQUFBO0VBQ0EsY0ZoR0Q7QUMyS1g7QUN6RVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FEMkVaO0FDeEVJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDBFUjtBQ3pFUTtFQUNJLGtCQUFBO0FEMkVaO0FDdkVRO0VBQ0ksYUFBQTtBRHlFWjtBQ3hFWTtFQUNJLGNBQUE7QUQwRWhCO0FDdkVRO0VBQ0ksMkJBQUE7QUR5RVo7QUNwRUE7RUFJWTtJQUNJLFlBQUE7RURvRWQ7RUNoRVU7SUFDSSxnQkFBQTtFRGtFZDtFQ2hFVTtJQUNJLHlCQUFBO0VEa0VkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZmZsaWF0aW9uL2FmZmxpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmEtY2FyZXQtZG93biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2FmZmlsaWF0aW9uLXNlYyB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5oZWFkLXNlYyBoMixcbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuaGVhZC1zZWMgLnRleHQtbXV0ZWQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5jYXJkIC5jYXJkLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6aG92ZXI6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6aG92ZXIgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaGJhciB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2I0ODtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogM3B4O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoX2lucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiAwO1xuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgY2FyZXQtY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNmZjhiMjM7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hfaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5kaXN0LXNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1zZWM6aG92ZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5kaXN0LWluZm8gLnNvY2lhbC1pY29ucyBpIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyAuc29jaWFsLWljb25zIGk6aG92ZXIge1xuICBjb2xvcjogI2U3NGMzYztcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mby5qdW1ib3Ryb24ge1xuICBtYXJnaW46IDcwcHggMzBweCA3MHB4IDMwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pbnB1dCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gICNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAjYWZmaWxpYXRpb24tc2VjIC5kaXN0LWluZm8uanVtYm90cm9uIHtcbiAgICBtYXJnaW46IDMwcHggMHB4IDcwcHggMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZGNiOWU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaW1nLWFyZWEge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jYWZmaWxpYXRpb24tc2VjIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICAgIC5oZWFkLXNlYyBoMixcclxuICAgIC5kaXN0LWluZm8gaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiXHJcbiAgICB9XHJcbiAgICAuaGVhZC1zZWMgLnRleHQtbXV0ZWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5jYXJkIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQ6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAuMTUpIWltcG9ydGFudDtcclxuICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1zZWMge1xyXG4gICAgICAgIC5zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNiNDg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaF9pbnB1dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgY2FyZXQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2hiYXI6aG92ZXI+LnNlYXJjaF9pbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBjYXJldC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaGJhcjpob3Zlcj4uc2VhcmNoX2ljb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaF9pY29uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGlzdC1zZWMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpc3QtaW5mbyB7XHJcbiAgICAgICAgLnNvY2lhbC1pY29ucyBpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2U3NGMzYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNzBweCAzMHB4IDcwcHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgI2FmZmlsaWF0aW9uLXNlYyB7XHJcbiAgICAgICAgLnNlYXJjaC1zZWMge1xyXG4gICAgICAgICAgICAuc2VhcmNoYmFyOmhvdmVyPi5zZWFyY2hfaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXN0LWluZm8ge1xyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5qdW1ib3Ryb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweCA3MHB4IDBweDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/affliation/affliation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/affliation/affliation.component.ts ***!
  \****************************************************/
/*! exports provided: AffliationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffliationComponent", function() { return AffliationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let AffliationComponent = class AffliationComponent {
    constructor(_service, _spinner) {
        this._service = _service;
        this._spinner = _spinner;
        this.selectedDistrict = [];
        this.registeredDistrictsList = [];
        this.showSpinner = false;
        this.districtInfo = { districtName: '', approvedOn: '' };
    }
    ngOnInit() {
        this.spinnerShow();
        this.getRegisteredDistrictList();
    }
    getRegisteredDistrictList() {
        this._service.getRegisteredDistricts().subscribe(data => {
            data.map((item, index) => {
                this.registeredDistrictsList.push(item.payload.doc.data());
                if (index === 0) {
                    this.getDistrictInfo(this.registeredDistrictsList[0].id);
                }
            });
            this.spinnerHide();
        });
    }
    getDistrictInfo(id) {
        this.spinnerShow();
        this._service.getRegisteredDistrictInfoById(id).subscribe(config => {
            this.selectedDistrict = [];
            config.map((data, index) => {
                this.selectedDistrict.push(data.payload.doc.data());
                if (index === 0) {
                    this.districtInfo = { districtName: this.selectedDistrict[0].requestedDistrict.name, approvedOn: this.selectedDistrict[0].approvedOn };
                }
            });
            this.spinnerHide();
        });
    }
    searchDistrict(distName) { }
    spinnerShow() {
        this.showSpinner = true;
        this._spinner.show();
    }
    spinnerHide() {
        this._spinner.hide();
        this.showSpinner = false;
    }
};
AffliationComponent.ctorParameters = () => [
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
AffliationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-affliation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./affliation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./affliation.component.scss */ "./src/app/affliation/affliation.component.scss")).default]
    })
], AffliationComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./affliation/affliation.component */ "./src/app/affliation/affliation.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slingshot/slingshot.component */ "./src/app/slingshot/slingshot.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _association_association_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./association/association.component */ "./src/app/association/association.component.ts");
/* harmony import */ var _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./match-results/match-results.component */ "./src/app/match-results/match-results.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/affiliation-requests/affiliation-requests.component */ "./src/app/admin/affiliation-requests/affiliation-requests.component.ts");
/* harmony import */ var _admin_events_events_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/events/events.component */ "./src/app/admin/events/events.component.ts");
/* harmony import */ var _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/enquiries/enquiries.component */ "./src/app/admin/enquiries/enquiries.component.ts");
/* harmony import */ var _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/match-event-results/match-event-results.component */ "./src/app/admin/match-event-results/match-event-results.component.ts");
/* harmony import */ var _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/profile/profile.component */ "./src/app/admin/profile/profile.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/guards/login.guard */ "./src/app/shared/guards/login.guard.ts");



















const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'affiliation',
        component: _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_4__["AffliationComponent"]
    },
    {
        path: 'contact',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
    },
    {
        path: 'sports',
        component: _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_6__["SlingshotComponent"]
    },
    {
        path: 'gallery',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
    },
    {
        path: 'association',
        component: _association_association_component__WEBPACK_IMPORTED_MODULE_8__["AssociationComponent"]
    },
    {
        path: 'results',
        component: _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_9__["MatchResultsComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        canActivate: [_shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_18__["LoginGuard"]]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'requests', pathMatch: 'full' },
            { path: 'requests', component: _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_12__["AffiliationRequestsComponent"] },
            { path: 'events', component: _admin_events_events_component__WEBPACK_IMPORTED_MODULE_13__["EventsComponent"] },
            { path: 'match', component: _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_15__["MatchEventResultsComponent"] },
            { path: 'enquiries', component: _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_14__["EnquiriesComponent"] },
            { path: 'profile', component: _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"] }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'SlingshotAssociation';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./affliation/affliation.component */ "./src/app/affliation/affliation.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slingshot/slingshot.component */ "./src/app/slingshot/slingshot.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _association_association_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./association/association.component */ "./src/app/association/association.component.ts");
/* harmony import */ var _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./match-results/match-results.component */ "./src/app/match-results/match-results.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/affiliation-requests/affiliation-requests.component */ "./src/app/admin/affiliation-requests/affiliation-requests.component.ts");
/* harmony import */ var _admin_events_events_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/events/events.component */ "./src/app/admin/events/events.component.ts");
/* harmony import */ var _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/enquiries/enquiries.component */ "./src/app/admin/enquiries/enquiries.component.ts");
/* harmony import */ var _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/match-event-results/match-event-results.component */ "./src/app/admin/match-event-results/match-event-results.component.ts");
/* harmony import */ var _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/profile/profile.component */ "./src/app/admin/profile/profile.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");








































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_12__["AffliationComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"],
            _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_15__["SlingshotComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"],
            _association_association_component__WEBPACK_IMPORTED_MODULE_17__["AssociationComponent"],
            _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_18__["MatchResultsComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["DistrictApprovalDialog"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
            _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["AffiliationRequestsComponent"],
            _admin_events_events_component__WEBPACK_IMPORTED_MODULE_26__["EventsComponent"],
            _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_27__["EnquiriesComponent"],
            _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_28__["MatchEventResultsComponent"],
            _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
            _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_39__["ConfirmDialogComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"].forRoot(),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_36__["NgxSpinnerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__["MatDatepickerModule"]
        ],
        entryComponents: [_admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["DistrictApprovalDialog"], _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_39__["ConfirmDialogComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/association/association.component.scss":
/*!********************************************************!*\
  !*** ./src/app/association/association.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n#association {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#association .jumbotron {\n  margin-bottom: 0 !important;\n  padding-bottom: 150px !important;\n}\n#association .dist-area {\n  border-radius: 0rem;\n}\n#association .title {\n  font-family: \"Righteous\", cursive;\n}\n#association .form-area {\n  padding: 100px;\n  padding-top: 0px !important;\n}\n#association #regForm {\n  border: 1px solid gray;\n  padding: 50px;\n}\n#association .reg-button,\n#association .act-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n#association .spinner-area {\n  background-color: #e9ecef;\n}\n@media only screen and (max-width: 768px) {\n  #association .form-area {\n    padding: 10px;\n  }\n  #association #regForm {\n    padding: 20px;\n  }\n  #association .reg-title {\n    font-size: 1.2rem !important;\n  }\n  #association .reg-button {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzb2NpYXRpb24vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2Fzc29jaWF0aW9uL2Fzc29jaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hc3NvY2lhdGlvbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFzc29jaWF0aW9uXFxhc3NvY2lhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBQ3hFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7QUQyRUo7QUMxRUk7RUFDSSwyQkFBQTtFQUNBLGdDQUFBO0FENEVSO0FDMUVJO0VBQ0ksbUJBQUE7QUQ0RVI7QUMxRUk7RUFDSSxpQ0FBQTtBRDRFUjtBQzFFSTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtBRDRFUjtBQzFFSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtBRDRFUjtBQzFFSTs7RUFFSSx5QkZSRztFRVNILFdBQUE7QUQ0RVI7QUMxRUk7RUFDSSx5QkFBQTtBRDRFUjtBQ3hFQTtFQUdRO0lBQ0ksYUFBQTtFRHlFVjtFQ3ZFTTtJQUNJLGFBQUE7RUR5RVY7RUN2RU07SUFDSSw0QkFBQTtFRHlFVjtFQ3ZFTTtJQUNJLHFCQUFBO0VEeUVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hc3NvY2lhdGlvbi9hc3NvY2lhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLnNsaW5nLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xufVxuXG4jYXNzb2NpYXRpb24ge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4jYXNzb2NpYXRpb24gLmp1bWJvdHJvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG4jYXNzb2NpYXRpb24gLmRpc3QtYXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDByZW07XG59XG4jYXNzb2NpYXRpb24gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG59XG4jYXNzb2NpYXRpb24gLmZvcm0tYXJlYSB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4jYXNzb2NpYXRpb24gI3JlZ0Zvcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuI2Fzc29jaWF0aW9uIC5yZWctYnV0dG9uLFxuI2Fzc29jaWF0aW9uIC5hY3QtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG4jYXNzb2NpYXRpb24gLnNwaW5uZXItYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2Fzc29jaWF0aW9uIC5mb3JtLWFyZWEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgI2Fzc29jaWF0aW9uICNyZWdGb3JtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gICNhc3NvY2lhdGlvbiAucmVnLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICB9XG4gICNhc3NvY2lhdGlvbiAucmVnLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNhc3NvY2lhdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRpc3QtYXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjcmVnRm9ybSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZy1idXR0b24sXHJcbiAgICAuYWN0LWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLnNwaW5uZXItYXJlYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlc1xyXG4gICAgI2Fzc29jaWF0aW9uIHtcclxuICAgICAgICAuZm9ybS1hcmVhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3JlZ0Zvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVnLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZy1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/association/association.component.ts":
/*!******************************************************!*\
  !*** ./src/app/association/association.component.ts ***!
  \******************************************************/
/*! exports provided: AssociationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationComponent", function() { return AssociationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-password.validator */ "./src/app/association/confirm-password.validator.ts");
/* harmony import */ var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let AssociationComponent = class AssociationComponent {
    constructor(slingshotService, formBuilder, auth, _spinner) {
        this.slingshotService = slingshotService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this._spinner = _spinner;
        this.showForm = false;
        this.disabledRegBtn = true;
        this.availableDistricts = [];
        this.allDistricts = [];
        this.isChecked = false;
        this.showSpinner = false;
    }
    ngOnInit() {
        this._spinner.show();
        this.showSpinner = true;
        this.getAvailableDistrictList();
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d{10}/)]],
            addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressLine2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d{6}/)]],
            aadhaarNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d{12}/)]],
            panNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9 a-z A-Z]{10}/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: _confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__["ConfirmPasswordValidator"].MatchPassword
        });
    }
    // fetch all available district list
    getAvailableDistrictList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.slingshotService.getAvailabelDistricts().subscribe(data => {
                data.map(item => { this.availableDistricts.push(item.payload.doc.data()); });
                this._spinner.hide();
                this.showSpinner = false;
            });
            this.slingshotService.getAllDistricts().subscribe(data => {
                data.map(item => { this.allDistricts.push(item.payload.doc.data()); });
            });
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
        delete formData.terms;
        delete formData.confirmPassword;
        delete formData.requestedDistrict.isRegistered;
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
};
AssociationComponent.ctorParameters = () => [
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_4__["SlingshotService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
AssociationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-association',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./association.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/association/association.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./association.component.scss */ "./src/app/association/association.component.scss")).default]
    })
], AssociationComponent);



/***/ }),

/***/ "./src/app/association/confirm-password.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/association/confirm-password.validator.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ConfirmPasswordValidator {
    static MatchPassword(control) {
        let password = control.get('password').value;
        let confirmPassword = control.get('confirmPassword').value;
        if (password != confirmPassword) {
            control.get('confirmPassword').setErrors({ isConfirmPassword: true });
        }
    }
}


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n  border-radius: 0em !important;\n}\n#contact-us {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#contact-us .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#contact-us .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#contact-us .img-area img {\n  width: 100%;\n}\n#contact-us .social-icons i {\n  padding: 10px;\n}\n#contact-us .social-icons i:hover {\n  color: #ff8b23;\n}\n#contact-us .association-info h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .association-info i {\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 50%;\n  text-align: center;\n  background: #1b1919;\n  margin-right: 15px;\n  width: 60px;\n  color: #fff;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#contact-us .association-info p {\n  font-size: 20px;\n  margin-top: 20px;\n}\n#contact-us .user-info h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .user-info .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#contact-us .user-info .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#contact-us .user-info .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#contact-us .user-info .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#contact-us .contact-form {\n  margin-top: 80px !important;\n}\n#contact-us .contact-form h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .contact-form .field {\n  height: 50px;\n}\n#contact-us .contact-form .field,\n#contact-us .contact-form textarea {\n  border-radius: 0em;\n}\n#contact-us .contact-form .field:hover,\n#contact-us .contact-form textarea:hover,\n#contact-us .contact-form .action-button:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;\n}\n#contact-us .contact-form .map {\n  border-radius: 0.3em;\n}\n@media only screen and (max-width: 768px) {\n  #contact-us .user-info .card {\n    margin-top: 20px;\n  }\n  #contact-us .card-col {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  #contact-us .contactForm {\n    margin-top: 50px;\n  }\n  #contact-us .contact-form {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LXVzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcY29udGFjdC11c1xcY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBQ3hFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZZTztFRVhQLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FEMkVKO0FDeEVBO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtBRDJFSjtBQzFFSTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FENEVSO0FDMUVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FENEVSO0FDM0VRO0VBQ0ksV0FBQTtBRDZFWjtBQzFFSTtFQUNJLGFBQUE7QUQ0RVI7QUMxRUk7RUFDSSxjRnRCRztBQ2tHWDtBQ3pFUTtFQUNJLHdCQUFBO0FEMkVaO0FDekVRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7QUQyRVo7QUN4RVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUQwRVo7QUN0RVE7RUFDSSx3QkFBQTtBRHdFWjtBQ3RFUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUR3RVo7QUN2RVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJGakVMO0VFa0VLLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0NBQUE7QUR5RWhCO0FDdkVZO0VBQ0ksT0FBQTtFQUNBLFFBQUE7QUR5RWhCO0FDdkVZO0VBQ0ksd0RBQUE7QUR5RWhCO0FDckVJO0VBQ0ksMkJBQUE7QUR1RVI7QUN0RVE7RUFDSSx3QkFBQTtBRHdFWjtBQ3RFUTtFQUNJLFlBQUE7QUR3RVo7QUN0RVE7O0VBRUksa0JBQUE7QUR3RVo7QUN0RVE7OztFQUdJLHVEQUFBO0FEd0VaO0FDdEVRO0VBQ0ksb0JBQUE7QUR3RVo7QUNuRUE7RUFJWTtJQUNJLGdCQUFBO0VEbUVkO0VDaEVNO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFRGtFVjtFQ2hFTTtJQUNJLGdCQUFBO0VEa0VWO0VDaEVNO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFRGtFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiR0aC1jb2xvcjogI2ZmOGIyMztcclxuJHRoLWNvbG9yLWRhcms6ICNmZjM2MDA7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG59XHJcblxyXG5cclxuLyogVGhlbWUtQ29sb3JzICovXHJcblxyXG4uYmctb2Zmd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjNmNTtcclxufVxyXG5cclxuLnNsaW5nLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBMb2dvLVRleHQgKi9cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBkaWFsb2cgY3NzXHJcbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwZW0gIWltcG9ydGFudDtcbn1cblxuI2NvbnRhY3QtdXMge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4jY29udGFjdC11cyAuanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyNSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMGVtO1xufVxuI2NvbnRhY3QtdXMgLmltZy1hcmVhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNjb250YWN0LXVzIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNjb250YWN0LXVzIC5zb2NpYWwtaWNvbnMgaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jY29udGFjdC11cyAuc29jaWFsLWljb25zIGk6aG92ZXIge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNjb250YWN0LXVzIC5hc3NvY2lhdGlvbi1pbmZvIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XG59XG4jY29udGFjdC11cyAuYXNzb2NpYXRpb24taW5mbyBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzFiMTkxOTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuI2NvbnRhY3QtdXMgLmFzc29jaWF0aW9uLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiNjb250YWN0LXVzIC51c2VyLWluZm8gaDIge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcbn1cbiNjb250YWN0LXVzIC51c2VyLWluZm8gLmNhcmQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jY29udGFjdC11cyAudXNlci1pbmZvIC5jYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xuICBoZWlnaHQ6IDRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG4jY29udGFjdC11cyAudXNlci1pbmZvIC5jYXJkOmhvdmVyOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuI2NvbnRhY3QtdXMgLnVzZXItaW5mbyAuY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcbn1cbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gaDIge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcbn1cbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gLmZpZWxkIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSAuZmllbGQsXG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMGVtO1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSAuZmllbGQ6aG92ZXIsXG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIHRleHRhcmVhOmhvdmVyLFxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSAuYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG59XG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIC5tYXAge1xuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjY29udGFjdC11cyAudXNlci1pbmZvIC5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gICNjb250YWN0LXVzIC5jYXJkLWNvbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgI2NvbnRhY3QtdXMgLmNvbnRhY3RGb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gICNjb250YWN0LXVzIC5jb250YWN0LWZvcm0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjb250YWN0LXVzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAuanVtYm90cm9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMzI1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMGVtO1xyXG4gICAgfVxyXG4gICAgLmltZy1hcmVhIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIGk6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICB9XHJcbiAgICAuYXNzb2NpYXRpb24taW5mbyB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYjE5MTk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAuMTUpIWltcG9ydGFudDtcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkLFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmllbGQ6aG92ZXIsXHJcbiAgICAgICAgdGV4dGFyZWE6aG92ZXIsXHJcbiAgICAgICAgLmFjdGlvbi1idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFwIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvL21vYmlsZSBkZXZpY2VcclxuICAgICNjb250YWN0LXVzIHtcclxuICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1jb2wge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");




let ContactUsComponent = class ContactUsComponent {
    constructor(formBuilder, _service) {
        this.formBuilder = formBuilder;
        this._service = _service;
        this.members = [
            {
                name: 'Mr. Bipin Chaudhari',
                role: 'President',
                email: 'xyz@gmail.com',
                mobile: '',
                class: 'active'
            },
            {
                name: 'Mr. Vikas Shelke',
                role: 'General Secretory',
                email: 'xyz@gmail.com',
                mobile: '',
                class: ''
            },
            {
                name: 'Mr. Lalit Dhoke',
                role: 'Vice President',
                email: 'xyz@gmail.com',
                mobile: '',
                class: ''
            },
            {
                name: 'Mr. Sham Khemaskar',
                role: 'Treasurer',
                email: 'xyz@gmail.com',
                mobile: '',
                class: ''
            },
            {
                name: 'Mr. Pravin Dighade',
                role: 'Join Secretory',
                email: 'xyz@gmail.com',
                mobile: '',
                class: ''
            },
            {
                name: 'Mr. Sunil Shinde',
                role: 'Representative',
                email: 'xyz@gmail.com',
                mobile: '',
                class: ''
            }
        ];
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d{10}/)]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    clearForm() {
        this.contactForm.reset();
    }
    sendEnquiry() {
        this._service.sendEnquiry(this.contactForm.value);
        this.clearForm();
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"] }
];
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryComponent = class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
};
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.home {\n  width: 100%;\n}\n.carousel-indicators .active {\n  background-color: #ff8b23;\n}\n.action-button {\n  display: inline-block;\n  padding: 13px 47px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.entry-title {\n  font-weight: bold;\n}\n.entry-content {\n  font-size: 18px;\n}\n.wrapper-box {\n  padding: 96px 0;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#banner-area {\n  margin-top: 80px;\n}\n#banner-area .carousel-item {\n  background: no-repeat center center scroll;\n  background-size: cover;\n  -webkit-background-size: cover;\n}\n#banner-area .carousel-caption:hover {\n  background-color: #0000009c;\n}\n#banner-area .carousel-caption {\n  bottom: 35%;\n  background-color: #2423236e;\n  padding: 30px;\n}\n#banner-area .carousel-caption h5 {\n  font-size: 45px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n#register-area {\n  padding-left: 85px;\n  padding-right: 85px;\n}\n#register-area .reg-panel {\n  border-top: solid 1px #ffffff;\n  border-bottom: solid 1px #ffffff;\n  padding-top: 64px;\n  padding-bottom: 56px;\n}\n#register-area .reg_text {\n  font-weight: 400;\n  line-height: 1.2;\n  font-size: 34px;\n  font-family: \"Righteous\", cursive;\n}\n#register-area .action-button {\n  font-size: 18px;\n}\n#register-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#register-area .img-area img {\n  width: 100%;\n}\n#register-area .img-area:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n#welcome-area .ico-box {\n  height: 100%;\n  padding: 40px;\n  border-radius: 24px;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  border: 0;\n  background: -webkit-gradient(linear, right top, left top, from(#ff5a00), to(#ff3600));\n  background: linear-gradient(270deg, #ff5a00 0%, #ff3600 100%);\n  color: #fff;\n}\n#welcome-area .ico-box .shake-hand {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  height: 20%;\n  width: 20%;\n}\n#welcome-area .ico-box .outline {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #fff;\n  font-size: 16px;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 2px;\n  padding: 12px 48px;\n  text-transform: uppercase;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n#welcome-area .ico-box .outline:hover {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n#game-area .img {\n  width: 100%;\n}\n#game-area .img:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  -webkit-transition: -webkit-transform 0.5s ease-out;\n  transition: -webkit-transform 0.5s ease-out;\n  transition: transform 0.5s ease-out;\n  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\n}\n#game-area .slingshot-box {\n  overflow: hidden;\n  border-radius: 0.25rem !important;\n}\n#testimonial-area {\n  font-family: \"Didact Gothic\", sans-serif;\n  position: relative;\n  color: #000;\n  overflow: hidden;\n  width: 100%;\n  background-size: cover;\n}\n#testimonial-area .carousel .fa {\n  font-size: 20px;\n  color: #0000007a;\n}\n#testimonial-area .carousel-indicators li {\n  background-color: #0a01018c;\n}\n#testimonial-area .carousel-indicators li.active {\n  background-color: #ff8b23;\n}\n#testimonial-area .img-overlay {\n  padding: 50px 0px;\n}\n#testimonial-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#testimonial-area .img-area img {\n  width: 100%;\n}\n#testimonial-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n#testimonial-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n#results-area .img-area {\n  width: 80px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#results-area .img-area img {\n  width: 100%;\n}\n#results-area .list-group-item:hover {\n  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;\n}\n#results-area .list-group-item:hover .result {\n  color: #ff3600;\n}\n#member-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#member-area .img-area img {\n  width: 100%;\n}\n#member-area .card {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#member-area .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#member-area .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#member-area .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#events-area .action-icon .fa {\n  font-size: 25px;\n  color: #0000007a;\n}\n#events-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n#events-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n#events-area .badge {\n  padding: 1.25em 0.7em !important;\n}\n#events-area .img-container {\n  position: relative;\n}\n#events-area .img-container .img-text {\n  width: 84%;\n  position: absolute;\n  /* Position the background text */\n  top: 12%;\n  /* At the bottom. Use top:0 to append it to the top */\n  left: 8%;\n  background: black;\n  /* Fallback color */\n  background: rgba(0, 0, 0, 0.5);\n  /* Black background with 0.5 opacity */\n  color: #f1f1f1;\n  /* Grey text */\n}\n#events-area .info p {\n  max-width: 600px;\n}\n#gallery-area .img-right .row {\n  padding: 17px;\n}\n#gallery-area .img-right .row:first-child {\n  padding-top: 0px !important;\n}\n@media only screen and (max-width: 992px) {\n  #banner-area .carousel-caption {\n    bottom: 50px;\n  }\n\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-box {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n\n  #register-area {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  #register-area .reg_text {\n    font-size: 20px;\n  }\n  #register-area .reg-btn {\n    font-size: 14px;\n    padding: 10px 40px;\n  }\n\n  #banner-area .carousel-caption {\n    display: none;\n  }\n\n  .shake-hand {\n    height: 25% !important;\n    width: 25% !important;\n  }\n\n  .res-sec {\n    background-color: #0000000a;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  #events-area .info {\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: center !important;\n  }\n\n  #gallery-area .img-right .row:first-child {\n    padding-top: 34px !important;\n  }\n\n  #results-area .list-group-item {\n    margin-top: 0.6rem !important;\n  }\n}\n@media only screen and (min-width: 992px) {\n  #welcome-area .member-box {\n    padding-right: 50px;\n    padding-left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBQ3hFQTtFQUNJLFdBQUE7QUQyRUo7QUN2RUk7RUFDSSx5QkZTRztBQ2lFWDtBQ3RFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZFTztFRURQLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEeUVKO0FDdEVBO0VBQ0ksaUJBQUE7QUR5RUo7QUN0RUE7RUFDSSxlQUFBO0FEeUVKO0FDdEVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBRHlFSjtBQ3RFQTtFQUNJLGdCQUFBO0FEeUVKO0FDeEVJO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FEMEVSO0FDeEVJO0VBQ0ksMkJBQUE7QUQwRVI7QUN4RUk7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FEMEVSO0FDekVRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUQyRVo7QUN0RUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FEeUVKO0FDeEVJO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQwRVI7QUN4RUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FEMEVSO0FDeEVJO0VBQ0ksZUFBQTtBRDBFUjtBQ3hFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FEMEVSO0FDekVRO0VBQ0ksV0FBQTtBRDJFWjtBQ3hFSTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsK0JBQUE7RUFBQSw0REFBQTtBRDBFUjtBQ3JFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxTQUFBO0VBQ0EscUZBQUE7RUFBQSw2REFBQTtFQUNBLFdBQUE7QUR3RVI7QUN2RVE7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUR5RVo7QUN2RVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUR5RVo7QUN2RVE7RUFDSSxZQUFBO0VBQ0EsbUJGaEhEO0VFaUhDLG1CQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRHlFWjtBQ25FSTtFQUNJLFdBQUE7QURzRVI7QUNwRUk7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsbURBQUE7RUFBQSwyQ0FBQTtFQUFBLG1DQUFBO0VBQUEsb0VBQUE7QURzRVI7QUNwRUk7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0FEc0VSO0FDbEVBO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBRG9FSjtBQ2xFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRG9FWjtBQ2hFUTtFQUNJLDJCQUFBO0FEa0VaO0FDaEVRO0VBQ0kseUJGeEpEO0FDME5YO0FDL0RJO0VBQ0ksaUJBQUE7QURpRVI7QUMvREk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURpRVI7QUNoRVE7RUFDSSxXQUFBO0FEa0VaO0FDL0RJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEaUVSO0FDL0RJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRGlFUjtBQzVESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEK0RSO0FDOURRO0VBQ0ksV0FBQTtBRGdFWjtBQzVEUTtFQUNJLDBEQUFBO0FEOERaO0FDN0RZO0VBQ0ksY0ZwTUE7QUNtUWhCO0FDeERJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEMkRSO0FDMURRO0VBQ0ksV0FBQTtBRDREWjtBQ3pESTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEMkRSO0FDMURRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CRnRPRDtFRXVPQyxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FENERaO0FDMURRO0VBQ0ksT0FBQTtFQUNBLFFBQUE7QUQ0RFo7QUMxRFE7RUFDSSx3REFBQTtBRDREWjtBQ3JEUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRHdEWjtBQ3JESTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRHVEUjtBQ3JESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUR1RFI7QUNyREk7RUFDSSxnQ0FBQTtBRHVEUjtBQ3JESTtFQUNJLGtCQUFBO0FEdURSO0FDdERRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0VBQ0EscURBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRHdEWjtBQ3BEUTtFQUNJLGdCQUFBO0FEc0RaO0FDaERJO0VBQ0ksYUFBQTtBRG1EUjtBQ2xEUTtFQUNJLDJCQUFBO0FEb0RaO0FDL0NBO0VBR1E7SUFDSSxZQUFBO0VEZ0RWOztFQzVDTTtJQUNJLGlCQUFBO0VEK0NWO0FBQ0Y7QUMzQ0E7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUQ0Q047RUMzQ007SUFDSSxpQkFBQTtFRDZDVjs7RUMxQ0U7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VENkNOO0VDNUNNO0lBQ0ksZUFBQTtFRDhDVjtFQzVDTTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFRDhDVjs7RUMxQ007SUFDSSxhQUFBO0VENkNWOztFQzFDRTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7RUQ2Q047O0VDM0NFO0lBQ0ksMkJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VEOENOOztFQzNDTTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFRDhDVjs7RUN6Q1U7SUFDSSw0QkFBQTtFRDRDZDs7RUN2Q007SUFDSSw2QkFBQTtFRDBDVjtBQUNGO0FDdENBO0VBRVE7SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0VEdUNWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmhvbWUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxM3B4IDQ3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZGNiOWU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVudHJ5LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbnRyeS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ud3JhcHBlci1ib3gge1xuICBwYWRkaW5nOiA5NnB4IDA7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xufVxuXG4jYmFubmVyLWFyZWEge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1pdGVtIHtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOWM7XG59XG4jYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICBib3R0b206IDM1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjMyMzZlO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIGg1IHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4jcmVnaXN0ZXItYXJlYSB7XG4gIHBhZGRpbmctbGVmdDogODVweDtcbiAgcGFkZGluZy1yaWdodDogODVweDtcbn1cbiNyZWdpc3Rlci1hcmVhIC5yZWctcGFuZWwge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTZweDtcbn1cbiNyZWdpc3Rlci1hcmVhIC5yZWdfdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG59XG4jcmVnaXN0ZXItYXJlYSAuYWN0aW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiNyZWdpc3Rlci1hcmVhIC5pbWctYXJlYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuI3JlZ2lzdGVyLWFyZWEgLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3JlZ2lzdGVyLWFyZWEgLmltZy1hcmVhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuXG4jd2VsY29tZS1hcmVhIC5pY28tYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY1YTAwIDAlLCAjZmYzNjAwIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbn1cbiN3ZWxjb21lLWFyZWEgLmljby1ib3ggLnNoYWtlLWhhbmQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDIwJTtcbn1cbiN3ZWxjb21lLWFyZWEgLmljby1ib3ggLm91dGxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBwYWRkaW5nOiAxMnB4IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cbiN3ZWxjb21lLWFyZWEgLmljby1ib3ggLm91dGxpbmU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuI2dhbWUtYXJlYSAuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jZ2FtZS1hcmVhIC5pbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xufVxuI2dhbWUtYXJlYSAuc2xpbmdzaG90LWJveCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuI3Rlc3RpbW9uaWFsLWFyZWEge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMwMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsIC5mYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDEwMThjO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5pbWctb3ZlcmxheSB7XG4gIHBhZGRpbmc6IDUwcHggMHB4O1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmltZy1hcmVhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBjb2xvcjogIzAwMDtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuI3Jlc3VsdHMtYXJlYSAuaW1nLWFyZWEge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jcmVzdWx0cy1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNyZXN1bHRzLWFyZWEgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4jcmVzdWx0cy1hcmVhIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIgLnJlc3VsdCB7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4jbWVtYmVyLWFyZWEgLmltZy1hcmVhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNtZW1iZXItYXJlYSAuaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jbWVtYmVyLWFyZWEgLmNhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jbWVtYmVyLWFyZWEgLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNtZW1iZXItYXJlYSAuY2FyZDpob3ZlcjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbiNtZW1iZXItYXJlYSAuY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuXG4jZXZlbnRzLWFyZWEgLmFjdGlvbi1pY29uIC5mYSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbn1cbiNldmVudHMtYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgY29sb3I6ICMwMDA7XG59XG4jZXZlbnRzLWFyZWEgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuI2V2ZW50cy1hcmVhIC5iYWRnZSB7XG4gIHBhZGRpbmc6IDEuMjVlbSAwLjdlbSAhaW1wb3J0YW50O1xufVxuI2V2ZW50cy1hcmVhIC5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2V2ZW50cy1hcmVhIC5pbWctY29udGFpbmVyIC5pbWctdGV4dCB7XG4gIHdpZHRoOiA4NCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogUG9zaXRpb24gdGhlIGJhY2tncm91bmQgdGV4dCAqL1xuICB0b3A6IDEyJTtcbiAgLyogQXQgdGhlIGJvdHRvbS4gVXNlIHRvcDowIHRvIGFwcGVuZCBpdCB0byB0aGUgdG9wICovXG4gIGxlZnQ6IDglO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggMC41IG9wYWNpdHkgKi9cbiAgY29sb3I6ICNmMWYxZjE7XG4gIC8qIEdyZXkgdGV4dCAqL1xufVxuI2V2ZW50cy1hcmVhIC5pbmZvIHAge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4jZ2FsbGVyeS1hcmVhIC5pbWctcmlnaHQgLnJvdyB7XG4gIHBhZGRpbmc6IDE3cHg7XG59XG4jZ2FsbGVyeS1hcmVhIC5pbWctcmlnaHQgLnJvdzpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC53cmFwcGVyLWJveCAuZW50cnktdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyLWJveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLndyYXBwZXItYm94IC5lbnRyeS10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cblxuICAjcmVnaXN0ZXItYXJlYSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gICNyZWdpc3Rlci1hcmVhIC5yZWdfdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gICNyZWdpc3Rlci1hcmVhIC5yZWctYnRuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICB9XG5cbiAgI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNoYWtlLWhhbmQge1xuICAgIGhlaWdodDogMjUlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJlcy1zZWMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwYTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAjZXZlbnRzLWFyZWEgLmluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2dhbGxlcnktYXJlYSAuaW1nLXJpZ2h0IC5yb3c6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAzNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjcmVzdWx0cy1hcmVhIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDAuNnJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICN3ZWxjb21lLWFyZWEgLm1lbWJlci1ib3gge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbi5ob21lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEzcHggNDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5lbnRyeS10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVudHJ5LWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ud3JhcHBlci1ib3gge1xyXG4gICAgcGFkZGluZzogOTZweCAwO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2Jhbm5lci1hcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWNhcHRpb246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5YztcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBib3R0b206IDM1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMzIzNmU7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNyZWdpc3Rlci1hcmVhIHtcclxuICAgIHBhZGRpbmctbGVmdDogODVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDg1cHg7XHJcbiAgICAucmVnLXBhbmVsIHtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTZweDtcclxuICAgIH1cclxuICAgIC5yZWdfdGV4dCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbWctYXJlYTpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN3ZWxjb21lLWFyZWEge1xyXG4gICAgLmljby1ib3gge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cztcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNTUsIDkwLCAwLCAxKSAwJSwgcmdiYSgyNTUsIDU0LCAwLCAxKSAxMDAlKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAuc2hha2UtaGFuZCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3V0bGluZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggNDhweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3V0bGluZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jZ2FtZS1hcmVhIHtcclxuICAgIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZzpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgLnNsaW5nc2hvdC1ib3gge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4jdGVzdGltb25pYWwtYXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy1jb250YWN0cy5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLmNhcm91c2VsIHtcclxuICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwN2E7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDEwMThjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaS5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltZy1vdmVybGF5IHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgIH1cclxuICAgIC5pbWctYXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNyZXN1bHRzLWFyZWEge1xyXG4gICAgLmltZy1hcmVhIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLnJlc3VsdCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRoLWNvbG9yLWRhcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNtZW1iZXItYXJlYSB7XHJcbiAgICAuaW1nLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNldmVudHMtYXJlYSB7XHJcbiAgICAuYWN0aW9uLWljb24ge1xyXG4gICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxuICAgIC5iYWRnZSB7XHJcbiAgICAgICAgcGFkZGluZzogMS4yNWVtIDAuN2VtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5pbWctdGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLyogUG9zaXRpb24gdGhlIGJhY2tncm91bmQgdGV4dCAqL1xyXG4gICAgICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICAgICAgLyogQXQgdGhlIGJvdHRvbS4gVXNlIHRvcDowIHRvIGFwcGVuZCBpdCB0byB0aGUgdG9wICovXHJcbiAgICAgICAgICAgIGxlZnQ6IDglO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIDAuNSBvcGFjaXR5ICovXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgICAgICAvKiBHcmV5IHRleHQgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jZ2FsbGVyeS1hcmVhIHtcclxuICAgIC5pbWctcmlnaHQgLnJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMTdweDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLy8gdGFibGV0IGRldmljZXNcclxuICAgICNiYW5uZXItYXJlYSB7XHJcbiAgICAgICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndyYXBwZXItYm94IHtcclxuICAgICAgICAuZW50cnktdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgLndyYXBwZXItYm94IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAuZW50cnktdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjcmVnaXN0ZXItYXJlYSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIC5yZWdfdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZy1idG4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjYmFubmVyLWFyZWEge1xyXG4gICAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2hha2UtaGFuZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucmVzLXNlYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDBhO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgICNldmVudHMtYXJlYSB7XHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNnYWxsZXJ5LWFyZWEge1xyXG4gICAgICAgIC5pbWctcmlnaHQgLnJvdyB7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDM0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNyZXN1bHRzLWFyZWEge1xyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgI3dlbGNvbWUtYXJlYSB7XHJcbiAgICAgICAgLm1lbWJlci1ib3gge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");



let HomeComponent = class HomeComponent {
    constructor(slingshotService) {
        this.slingshotService = slingshotService;
        this.list = [1, 2, 3, 4];
        this.members = [
            {
                name: 'Mr. Bipin Chaudhari',
                role: 'President',
                email: 'xyz@gmail.com',
                mobile: '',
                class: 'active',
                pic: './assets/images/members/bipin-chaudhari.jpg'
            },
            {
                name: 'Mr. Vikas Shelke',
                role: 'General Secretory',
                email: 'xyz@gmail.com',
                mobile: '',
                class: '',
                pic: './assets/images/members/vikas-shelke.jpg'
            },
            {
                name: 'Mr. Lalit Dhoke',
                role: 'Vice President',
                email: 'xyz@gmail.com',
                mobile: '',
                class: '',
                pic: './assets/images/members/lalit-dhoke.jpg'
            },
            {
                name: 'Mr. Sham Khemaskar',
                role: 'Treasurer',
                email: 'xyz@gmail.com',
                mobile: '',
                class: '',
                pic: './assets/images/user-pic.jpg'
            },
            {
                name: 'Mr. Pravin Dighade',
                role: 'Join Secretory',
                email: 'xyz@gmail.com',
                mobile: '',
                class: '',
                pic: './assets/images/user-pic.jpg'
            },
            {
                name: 'Mr. Sunil Shinde',
                role: 'Representative',
                email: 'xyz@gmail.com',
                mobile: '',
                class: '',
                pic: './assets/images/user-pic.jpg'
            }
        ];
        this.districtList = [];
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n#footer {\n  padding: 70px 70px 20px 70px;\n  background: #000;\n  color: #fff;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#footer .hr {\n  background-color: #fff;\n}\n#footer .action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n}\n#footer .contact h3,\n#footer .subscribe h3 {\n  color: #ff3600;\n}\n#footer .contact h3 span,\n#footer .subscribe h3 span {\n  color: #fff;\n}\n#footer .social-icons i {\n  padding: 10px;\n  border-radius: 50%;\n  font-size: 20px;\n  text-align: center;\n  background: red;\n  margin-right: 15px;\n  width: 40px;\n  color: #fff;\n}\n#footer .social-icons .fa-twitter {\n  background: #55ACEE;\n}\n#footer .social-icons .fa-linkedin {\n  background: #007bb5;\n}\n#footer .social-icons .fa-facebook {\n  background: #3B5998;\n}\n#footer .social-icons .fa-youtube {\n  background: #bb0000;\n}\n@media only screen and (max-width: 768px) {\n  #footer {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n  #footer .contact,\n#footer .subscribe {\n    margin-top: 50px;\n  }\n  #footer .info,\n#footer .sub {\n    margin-top: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) {\n  #footer .info,\n#footer .sub {\n    margin-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7O0VBRUksWUFBQTtBQ0FKO0FER0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQ0FKO0FESUEsMkVBQUE7QUFJQTtFQUNJLFVBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7QUNKSjtBRE9DO0VBQ0csZ0JBQUE7QUNKSjtBRE9DO0VBQ0csbUJBQUE7QUNKSjtBRFFBLGlCQUFBO0FBRUE7RUFDSSxtQkFBQTtBQ05KO0FEU0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNOSjtBRFVBLGNBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0E7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUko7QURXQTs7RUFFSSxZQUFBO0FDUko7QURXQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtBQ1JKO0FEWUE7RUFDSSwwQ0FBQTtBQ1RKO0FEWUE7RUFDSSx3QkFBQTtBQ1RKO0FDdkVBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBRDBFSjtBQ3pFSTtFQUNJLHNCQUFBO0FEMkVSO0FDekVJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRkdHO0VFRkgsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEMkVSO0FDdkVROztFQUNJLGNBQUE7QUQwRVo7QUN6RVk7O0VBQ0ksV0FBQTtBRDRFaEI7QUN2RVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRHlFWjtBQ3ZFUTtFQUNJLG1CQUFBO0FEeUVaO0FDdkVRO0VBQ0ksbUJBQUE7QUR5RVo7QUN2RVE7RUFDSSxtQkFBQTtBRHlFWjtBQ3ZFUTtFQUNJLG1CQUFBO0FEeUVaO0FDcEVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VEdUVOO0VDdEVNOztJQUVJLGdCQUFBO0VEd0VWO0VDdEVNOztJQUVJLGdCQUFBO0VEd0VWO0FBQ0Y7QUNwRUE7RUFFUTs7SUFFSSxrQkFBQTtFRHFFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuI2Zvb3RlciB7XG4gIHBhZGRpbmc6IDcwcHggNzBweCAyMHB4IDcwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG59XG4jZm9vdGVyIC5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4jZm9vdGVyIC5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2Zvb3RlciAuY29udGFjdCBoMyxcbiNmb290ZXIgLnN1YnNjcmliZSBoMyB7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuI2Zvb3RlciAuY29udGFjdCBoMyBzcGFuLFxuI2Zvb3RlciAuc3Vic2NyaWJlIGgzIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyBpIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyAuZmEtdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XG59XG4jZm9vdGVyIC5zb2NpYWwtaWNvbnMgLmZhLWxpbmtlZGluIHtcbiAgYmFja2dyb3VuZDogIzAwN2JiNTtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyAuZmEtZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIC5mYS15b3V0dWJlIHtcbiAgYmFja2dyb3VuZDogI2JiMDAwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjZm9vdGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgfVxuICAjZm9vdGVyIC5jb250YWN0LFxuI2Zvb3RlciAuc3Vic2NyaWJlIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gICNmb290ZXIgLmluZm8sXG4jZm9vdGVyIC5zdWIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI2Zvb3RlciAuaW5mbyxcbiNmb290ZXIgLnN1YiB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDcwcHggNzBweCAyMHB4IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLmhyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDQ1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QsXHJcbiAgICAuc3Vic2NyaWJlIHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS10d2l0dGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWxpbmtlZGluIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWZhY2Vib29rIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXlvdXR1YmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLmNvbnRhY3QsXHJcbiAgICAgICAgLnN1YnNjcmliZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLFxyXG4gICAgICAgIC5zdWIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgLmluZm8sXHJcbiAgICAgICAgLnN1YiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.navbar-light .navbar-toggler {\n  border: none;\n}\n.collapsing {\n  -webkit-transition: height 0.6s;\n  transition: height 0.6s;\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-title:hover {\n  cursor: pointer;\n}\n#navbarNav a.nav-link {\n  font-size: 13px !important;\n  font-weight: 500;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n#navbarNav a.nav-link:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 2px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#navbarNav a.nav-link:hover:before {\n  left: 0px;\n  right: 0;\n}\n#navbarNav a.nav-link:hover {\n  color: #ff8b23;\n}\n.navbar {\n  height: 80px;\n  width: 100%;\n  background-color: #fff;\n}\n.navbar-collapse {\n  background: inherit;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.outline:hover {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #ff8b23;\n  border-color: #ff8b23;\n  border-style: solid;\n  border-width: 2px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.outline {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 350ms ease 0s;\n  transition: all 350ms ease 0s;\n  text-transform: uppercase;\n  padding: 7px 20px;\n  margin-left: 30px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 992px) {\n  .outline {\n    margin-left: 0px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n  }\n\n  .navbar-collapse {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-top: 70px;\n    margin-right: 20px;\n    padding-top: 20px;\n  }\n\n  .navbar-light .navbar-nav .nav-link {\n    padding-top: 15px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .navbar li {\n    padding-left: 13px;\n    padding-right: 13px;\n  }\n\n  .navbar-brand {\n    padding-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9uYXZiYXIvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7O0VBRUksWUFBQTtBQ0FKO0FER0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQ0FKO0FESUEsMkVBQUE7QUFJQTtFQUNJLFVBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7QUNKSjtBRE9DO0VBQ0csZ0JBQUE7QUNKSjtBRE9DO0VBQ0csbUJBQUE7QUNKSjtBRFFBLGlCQUFBO0FBRUE7RUFDSSxtQkFBQTtBQ05KO0FEU0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNOSjtBRFVBLGNBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0E7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUko7QURXQTs7RUFFSSxZQUFBO0FDUko7QURXQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtBQ1JKO0FEWUE7RUFDSSwwQ0FBQTtBQ1RKO0FEWUE7RUFDSSx3QkFBQTtBQ1RKO0FDeEVBO0VBQ0ksWUFBQTtBRDJFSjtBQ3hFQTtFQUNJLCtCQUFBO0VBQUEsdUJBQUE7QUQyRUo7QUN4RUE7RUFDSSx5QkFBQTtBRDJFSjtBQ3hFQTtFQUNJLGVBQUE7QUQyRUo7QUN4RUE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRDJFSjtBQzFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkZuQkc7RUVvQkgsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBRDRFUjtBQzFFSTtFQUNJLFNBQUE7RUFDQSxRQUFBO0FENEVSO0FDMUVJO0VBQ0ksY0ZqQ0c7QUM2R1g7QUN4RUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FEMkVKO0FDeEVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEMkVKO0FDeEVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxjRnJETztFRXNEUCxxQkZ0RE87RUV1RFAsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUQyRUo7QUN4RUE7RUFDSSxZQUFBO0VBQ0EsbUJGOURPO0VFK0RQLG1CQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUQyRUo7QUN4RUE7RUFFSTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFRDBFTjs7RUN4RUU7SUFDSSx3REFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUQyRU47O0VDekVFO0lBQ0ksaUJBQUE7RUQ0RU47QUFDRjtBQ3pFQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFRDBFTjs7RUN4RUU7SUFDSSxrQkFBQTtFRDJFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb2xsYXBzaW5nIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNnM7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLm5hdmJhci10aXRsZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25hdmJhck5hdiBhLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiNuYXZiYXJOYXYgYS5uYXYtbGluazpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuI25hdmJhck5hdiBhLm5hdi1saW5rOmhvdmVyOmJlZm9yZSB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDA7XG59XG4jbmF2YmFyTmF2IGEubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cblxuLm5hdmJhciB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5vdXRsaW5lOmhvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZjhiMjM7XG4gIGJvcmRlci1jb2xvcjogI2ZmOGIyMztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuLm91dGxpbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAub3V0bGluZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG5cbiAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uYXZiYXIgbGkge1xuICAgIHBhZGRpbmctbGVmdDogMTNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNvbGxhcHNpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNnM7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcclxufVxyXG5cclxuLm5hdmJhci10aXRsZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNuYXZiYXJOYXYgYS5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ub3V0bGluZTpob3ZlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbn1cclxuXHJcbi5vdXRsaW5lIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICR0aC1jb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZSAwcztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAvL21vYmlsZSBkZXZpY2VcclxuICAgIC5vdXRsaW5lIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC8vZGVza3RvcFxyXG4gICAgLm5hdmJhciBsaSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");





let NavbarComponent = class NavbarComponent {
    constructor(auth, _dialog) {
        this.auth = auth;
        this._dialog = _dialog;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.auth.isLoggedIn();
        this.auth.isUserLoggedIn.subscribe(data => this.isLoggedIn = data);
        this.navbarCollapseHide();
    }
    signOut() {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to logout?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.auth.signOut();
            }
        });
    }
    navbarCollapseHide() {
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
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/layout/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n#login-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  background-color: #fff;\n}\n#login-sec .container {\n  padding-top: 40px;\n  padding-bottom: 50px;\n}\n#login-sec input {\n  height: 50px;\n}\n#login-sec .btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n#login-sec .forgotPass:hover {\n  color: #000 !important;\n  cursor: pointer;\n}\n@media only screen and (max-width: 768px) {\n  #login-sec .container {\n    padding: 15px 30px 20px 30px !important;\n  }\n  #login-sec .container .p-5 {\n    padding: 3rem 0.5rem 3rem 0.5rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBQ3hFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBRDJFSjtBQzFFSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUQ0RVI7QUMxRUk7RUFDSSxZQUFBO0FENEVSO0FDMUVJO0VBQ0kseUJGR0c7RUVGSCxXQUFBO0FENEVSO0FDekVRO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FEMkVaO0FDdEVBO0VBR1E7SUFDSSx1Q0FBQTtFRHVFVjtFQ3RFVTtJQUNJLDJDQUFBO0VEd0VkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLnNsaW5nLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xufVxuXG4jbG9naW4tc2VjIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuI2xvZ2luLXNlYyAuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuI2xvZ2luLXNlYyBpbnB1dCB7XG4gIGhlaWdodDogNTBweDtcbn1cbiNsb2dpbi1zZWMgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2xvZ2luLXNlYyAuZm9yZ290UGFzczpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjbG9naW4tc2VjIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAjbG9naW4tc2VjIC5jb250YWluZXIgLnAtNSB7XG4gICAgcGFkZGluZzogM3JlbSAwLjVyZW0gM3JlbSAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4jbG9naW4tc2VjIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5mb3Jnb3RQYXNzIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAjbG9naW4tc2VjIHtcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAucC01IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMC41cmVtIDNyZW0gMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, auth) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.auth = auth;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    forgotPassword() {
        this.loginPage.nativeElement.hidden = !this.loginPage.nativeElement.hidden;
        this.forgetPassPage.nativeElement.hidden = !this.forgetPassPage.nativeElement.hidden;
    }
    login() {
        if (this.loginForm.invalid) {
            return;
        }
        const formData = this.loginForm.value;
        this.auth.signIn(formData.email, formData.password);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginPage', { static: false })
], LoginComponent.prototype, "loginPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('forgetPassPage', { static: false })
], LoginComponent.prototype, "forgetPassPage", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/match-results/match-results.component.scss":
/*!************************************************************!*\
  !*** ./src/app/match-results/match-results.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoLXJlc3VsdHMvbWF0Y2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/match-results/match-results.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/match-results/match-results.component.ts ***!
  \**********************************************************/
/*! exports provided: MatchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchResultsComponent", function() { return MatchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatchResultsComponent = class MatchResultsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MatchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-match-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./match-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/match-results/match-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./match-results.component.scss */ "./src/app/match-results/match-results.component.scss")).default]
    })
], MatchResultsComponent);



/***/ }),

/***/ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(_dialogRef, data) {
        this._dialogRef = _dialogRef;
        this.data = data;
        _dialogRef.disableClose = true;
        this.message = data.message;
        this.type = data.type;
    }
    close() {
        this._dialogRef.close();
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'confirm-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html")).default,
        styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate() {
        if (localStorage.getItem('login-token')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/guards/login.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/guards/login.guard.ts ***!
  \**********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");




let LoginGuard = class LoginGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate() {
        if (!localStorage.getItem('login-token')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/');
            return false;
        }
    }
};
LoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");










let AuthService = class AuthService {
    constructor(afAuth, router, ngZone, firestore, dialog, toastr) {
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.firestore = firestore;
        this.dialog = dialog;
        this.toastr = toastr;
        this.loginResource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.isUserLoggedIn = this.loginResource.asObservable();
    }
    signUp(data) {
        return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
            .then((result) => {
            delete data.password;
            this.firestore.collection("AffiliationRequests").doc(result.user.uid).set(Object.assign({ role: 'President' }, data));
            let dialogRef = this.dialog.open(_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
                data: { message: 'Do you want to approve user?', type: 'register' },
                autoFocus: false,
                width: '80%'
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.router.navigateByUrl('/login');
                }
            });
        }).catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                this.toastr.error('Email address already in used.');
            }
            else {
                this.toastr.error(error.message);
            }
        });
    }
    signIn(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then((result) => {
                this.router.navigate(['/admin']);
                localStorage.setItem('login-token', result.user.uid);
                localStorage.setItem('user-id', result.user.uid);
                this.isLoggedIn();
            }).catch((error) => {
                switch (error.code) {
                    case 'auth/user-not-found':
                        this.toastr.error('User Not Found');
                        break;
                    case 'auth/wrong-password':
                        this.toastr.error('Wrong Password');
                        break;
                }
            });
        });
    }
    signOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.auth.signOut();
            this.router.navigate(['/login']);
            this.isLoggedIn();
        });
    }
    isLoggedIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).toPromise();
            if (user) {
                this.loginResource.next(true);
            }
            else {
                this.loginResource.next(false);
                localStorage.removeItem('login-token');
                localStorage.removeItem('user-id');
            }
            return user;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/slingshot.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/slingshot.service.ts ***!
  \******************************************************/
/*! exports provided: SlingshotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlingshotService", function() { return SlingshotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let SlingshotService = class SlingshotService {
    constructor(firestore, _toastr) {
        this.firestore = firestore;
        this._toastr = _toastr;
        this.districtList = [
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
    }
    addDist() {
        // console.log('service called');
        // this.districtList.forEach((item, index) => {
        //   this.firestore.collection("DistrictList").add(item).then(ref => {
        //     ref.set({ id: ref.id }, { merge: true });
        //   });
        // });
    }
    getAllDistricts() {
        return this.firestore.collection('DistrictList', ref => ref.orderBy('name', 'asc')).snapshotChanges();
    }
    getAvailabelDistricts() {
        return this.firestore.collection('DistrictList', ref => ref.where('isRegistered', '==', false).orderBy('name', 'asc')).snapshotChanges();
    }
    getRegisteredDistricts() {
        return this.firestore.collection('DistrictList', ref => ref.where('isRegistered', '==', true).orderBy('name', 'asc')).snapshotChanges();
    }
    getDistrictById(distArr, id) {
        let district;
        distArr.forEach(dist => { if (dist.id === id) {
            district = dist;
        } });
        return district;
    }
    getRegisteredDistrictInfoById(id) {
        return this.firestore.collection("ApprovedDistricts").doc(id).collection('Members').snapshotChanges();
    }
    districtRegistration(data, userID) {
        // this.firestore.collection("AffiliationRequests").add(data);
        this.firestore.collection("AffiliationRequests").doc(userID).set(data);
    }
    getAffiliationRequests() {
        return this.firestore.collection("AffiliationRequests", ref => ref.orderBy('firstName', 'asc')).snapshotChanges();
    }
    getUserById(id) {
        return this.firestore.collection('AffiliationRequests').doc(id).get();
    }
    approveDistrict(data) {
        this.firestore.doc('ApprovedDistricts/' + data.requestedDistrict.id).collection('Members').get().subscribe(config => {
            // 1. check district id is already exist or not
            if (config.size === 0) {
                // If not exist then add
                this.firestore.collection('ApprovedDistricts').doc(data.requestedDistrict.id).collection('Members').doc(data.id).set(data);
                // Update isRegister flag in district list
                this.firestore.collection('DistrictList').doc(data.requestedDistrict.id).update({ isRegistered: true });
                // Delete user data from RegistrationRequests collection
                this.firestore.collection('AffiliationRequests').doc(data.id).delete();
                this._toastr.success("District Approved Successfully.");
            }
            else {
                this._toastr.error("District is already allocated.");
            }
        });
    }
    sendEnquiry(data) {
        this.firestore.collection('Enquiries').add(data);
    }
    getEnquiries() {
        return this.firestore.collection('Enquiries').snapshotChanges();
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
};
SlingshotService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
SlingshotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SlingshotService);



/***/ }),

/***/ "./src/app/slingshot/slingshot.component.scss":
/*!****************************************************!*\
  !*** ./src/app/slingshot/slingshot.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#game {\n  font-family: \"Didact Gothic\", sans-serif;\n  overflow-x: hidden;\n  margin-top: 80px;\n}\n#game .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#game .card:hover,\n#game .list-group-item:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n#game .sling-img {\n  width: 80%;\n}\n#game .img {\n  width: 100%;\n}\n#game .category {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n#game .circle {\n  border-radius: 50%;\n  padding: 5px 10px 5px 10px;\n  font-weight: bold;\n  color: #fff;\n  background-color: #000;\n}\n#game .circle-10 {\n  border-radius: 50%;\n  padding: 5px 7px 5px 7px;\n  font-weight: bold;\n  color: #fff;\n  background-color: #000;\n}\n#game .list-group-item {\n  font-size: 18px !important;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .sling-img {\n    width: 100% !important;\n  }\n\n  .game-info {\n    margin-top: 20px;\n    padding-top: 0px !important;\n  }\n\n  .cat-cards {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n\n  .page-title {\n    font-size: 1.2rem !important;\n  }\n\n  .list-group-item {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpbmdzaG90L0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcc2xpbmdzaG90XFxzbGluZ3Nob3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NsaW5nc2hvdC9zbGluZ3Nob3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFFOztFQUVFLDZDQUFBO0FDRUo7QURBRTtFQUNFLFVBQUE7QUNFSjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FEQUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFFO0VBQ0UsMEJBQUE7QUNFSjtBREVBO0VBRUU7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDQUY7O0VERUE7SUFDRSxzQkFBQTtFQ0NGOztFRENBO0lBQ0UsZ0JBQUE7SUFDQSwyQkFBQTtFQ0VGOztFREFBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ0dGOztFRERBO0lBQ0UsNEJBQUE7RUNJRjs7RURGQTtJQUNFLDZCQUFBO0lBQ0EsOEJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2xpbmdzaG90L3NsaW5nc2hvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNnYW1lIHtcclxuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMzI1ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBlbTtcclxuICB9XHJcbiAgLmNhcmQ6aG92ZXIsXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIC5zbGluZy1pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC5jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmNpcmNsZS0xMCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA1cHggN3B4IDVweCA3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvL21vYmlsZSBkZXZpY2VcclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAuc2xpbmctaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5nYW1lLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhdC1jYXJkcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIjZ2FtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2dhbWUgLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn1cbiNnYW1lIC5jYXJkOmhvdmVyLFxuI2dhbWUgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbiNnYW1lIC5zbGluZy1pbWcge1xuICB3aWR0aDogODAlO1xufVxuI2dhbWUgLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2dhbWUgLmNhdGVnb3J5IHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuI2dhbWUgLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbiNnYW1lIC5jaXJjbGUtMTAge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweCA3cHggNXB4IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuI2dhbWUgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5zbGluZy1pbWcge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZ2FtZS1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXQtY2FyZHMge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/slingshot/slingshot.component.ts":
/*!**************************************************!*\
  !*** ./src/app/slingshot/slingshot.component.ts ***!
  \**************************************************/
/*! exports provided: SlingshotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlingshotComponent", function() { return SlingshotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlingshotComponent = class SlingshotComponent {
    constructor() { }
    ngOnInit() {
    }
};
SlingshotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slingshot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slingshot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slingshot.component.scss */ "./src/app/slingshot/slingshot.component.scss")).default]
    })
], SlingshotComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\Other\SlingshotAssociation\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map