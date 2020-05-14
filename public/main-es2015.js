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
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"admin\" class=\"bg-offwhite pb-5\">\r\n    <div class=\"mt-5\">\r\n        <div class=\"row justify-content-center\">\r\n            <h2><strong>Welcome To Association</strong></h2>\r\n        </div>\r\n        <div class=\"row actions justify-content-center mt-3 p-3\">\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./requests\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Affiliation</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./events\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Events</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./match\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Match Results</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./refree\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Refree</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./enquiries\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Enquiries</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./support\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Support</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"mt-5 bg-light pl-3 pr-3\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"approval\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Approval Requests <span\r\n                        class=\"badge badge-primary\">{{affiliatinRequests.length}}</span></strong></h2>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"row justify-content-end mt-5\">\r\n        <div class=\"col-sm-4 col-xs-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" #searchKey\r\n                (keyup)=\"filterResult(searchKey.value)\">\r\n        </div>\r\n    </div> -->\r\n    <div class=\"data-table mb-5 mt-3 table-responsive\" style=\"border:1px solid #00000017;\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{element.index}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"districtName\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Requested For </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"text-capitalize\">\r\n                    {{element.requestedDistrict.name}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.members[0].firstName}} {{element.members[0].middleName}} {{element.members[0].lastName}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"mobile\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Mobile </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.members[0].mobile}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"status\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Status </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"10%\" class=\"text-capitalize text-info\">\r\n                    {{element.status}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"actions\" class=\"pull-right\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\">\r\n                    <div class=\"row p-2\">\r\n                        <a class=\"btn text-info pointer\" (click)=\"getPersonInfo(element)\" matTooltip=\"Edit\"\r\n                            matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\r\n                        <a class=\"btn text-danger pointer\" (click)=\"deleteRequest(element.id)\" matTooltip=\"Delete\"\r\n                            matTooltipPosition=\"above\"><i class=\"fa fa-trash text-danger\"></i></a>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\r\n        </table>\r\n        <mat-paginator #paginator1 [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\">\r\n        </mat-paginator>\r\n    </div>\r\n\r\n    <!-- TABLE SECTION 2 -->\r\n    <app-approved-districts></app-approved-districts>\r\n\r\n    <!-- TABLE SECTION 3 -->\r\n    <app-rejected-affiliation></app-rejected-affiliation>\r\n\r\n</section>\r\n\r\n<div *ngIf=\"showSpinner\">\r\n    <app-spinner></app-spinner>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"text-center bg-dark text-white p-3 text-capitalize\">{{title}}</h3>\r\n<mat-dialog-content>\r\n    <table class=\"table table-bordered mt-3\" width=\"100%\">\r\n        <tbody>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Name</strong></td>\r\n                <td width=\"70%\" class=\"text-capitalize\">{{personData.members[0].firstName}} {{personData.members[0].middleName}} {{personData.members[0].lastName}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Address</strong></td>\r\n                <td width=\"70%\" class=\"text-capitalize\">{{personData.members[0].addressLine1}}, {{personData.members[0].addressLine2}}, {{personData.members[0].city}}, {{personData.members[0].district}}, Pin Code - {{personData.members[0].pin}}.</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Email</strong></td>\r\n                <td width=\"70%\">{{personData.members[0].email}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Mobile</strong></td>\r\n                <td width=\"70%\">{{personData.members[0].mobile}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Date of Birth</strong></td>\r\n                <td width=\"70%\">\r\n                    {{personData.members[0].dateOfBirth | date: 'dd'}}-{{personData.members[0].dateOfBirth | date: 'MMM'}}-{{personData.members[0].dateOfBirth | date: 'yyy'}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>PAN No.</strong></td>\r\n                <td width=\"70%\" class=\"text-uppercase\">{{personData.members[0].panNo}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Aadhaar No.</strong></td>\r\n                <td width=\"70%\">{{personData.members[0].aadhaarNo}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions class=\"pb-4 row justify-content-center\">\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"approveDistrict(personData)\" *ngIf=\"!flag\">Approve</button>\r\n    <button mat-button class=\"btn btn-danger\" (click)=\"deleteAffiliation(personData)\" *ngIf=\"flag\">Delete Affiliatioin</button>\r\n    <button mat-button class=\"btn sling-btn ml-2\" (click)=\"close()\">Close</button>\r\n</div>\r\n\r\n<div *ngIf=\"showSpinner\">\r\n    <ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\r\n    </ngx-spinner>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/views/approved-districts.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/views/approved-districts.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Affiliated Districts <span\r\n                    class=\"badge badge-primary\">{{approvedDistricts.length}}</span></strong></h2>\r\n    </div>\r\n</div>\r\n<div class=\"data-table mb-5 mt-3 table-responsive\" style=\"border:1px solid #00000017;\">\r\n    <table mat-table [dataSource]=\"dataSource2\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n        <ng-container matColumnDef=\"index\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n            <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{element.index}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"districtName\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> District Name </th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\r\n                {{element.requestedDistrict.name}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"member\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Member Name </th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"30%\" class=\"empNameLink pointer text-capitalize\">\r\n                {{element.members[0].firstName}} {{element.members[0].middleName}} {{element.members[0].lastName}}\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"approvedOn\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Approved On </th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\">\r\n                {{element.approvedOn | date: 'dd'}}-{{element.approvedOn | date:'MMM'}}-{{element.approvedOn | date: 'yyyy'}}\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Status </th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"15%\" class=\"text-capitalize text-info\">\r\n                {{element.status}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\" class=\"pull-right\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"10%\">\r\n                <div class=\"row p-2\">\r\n                    <a class=\"btn text-info pointer\" (click)=\"getRegisteredDistrctInfo(element)\" matTooltip=\"View\"\r\n                        matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\r\n                </div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns2; let i = index\"></tr>\r\n    </table>\r\n    <mat-paginator #paginator2 [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\">\r\n    </mat-paginator>\r\n</div>\r\n\r\n<div *ngIf=\"showSpinner\">\r\n    <app-spinner></app-spinner>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/views/rejected-affiliation.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/views/rejected-affiliation.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Old Affiliations <span\r\n                    class=\"badge badge-primary\">{{oldAffiliations.length}}</span></strong></h2>\r\n    </div>\r\n</div>\r\n<div class=\"data-table mb-5 mt-3 table-responsive\" style=\"border:1px solid #00000017;\">\r\n    <table mat-table [dataSource]=\"dataSource3\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n        <ng-container matColumnDef=\"index\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n            <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{element.index}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"districtName\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> District Name </th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\r\n                {{element.requestedDistrict.name}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"member\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Member Name </th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"30%\" class=\"empNameLink pointer text-capitalize\">\r\n                {{element.members[0].firstName}} {{element.members[0].middleName}} {{element.members[0].lastName}}\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"approvedOn\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Approved On </th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"35%\" class=\"text-capitalize\">\r\n                {{element.approvedOn | date: 'dd'}}-{{element.approvedOn | date:'MMM'}}-{{element.approvedOn | date: 'yyyy'}}\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Status </th>\r\n            <td mat-cell *matCellDef=\"let element\" width=\"35%\" class=\"text-capitalize text-danger\">\r\n                {{element.status}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns3; let i = index\"></tr>\r\n    </table>\r\n    <mat-paginator #paginator3 [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\">\r\n    </mat-paginator>\r\n</div>\r\n\r\n<div *ngIf=\"showSpinner\">\r\n    <app-spinner></app-spinner>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/enquiries/enquiries.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/enquiries/enquiries.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"enquiries\">\r\n    <div class=\"\">\r\n        <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Enquiries <span\r\n                    class=\"badge badge-primary\">{{enquiries.length}}</span></strong></h2>\r\n    </div>\r\n    <div class=\"data-table mt-4 mb-5 table-responsive\" style=\"border:1px solid #00000017;\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"5%\"> {{element.index}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"15%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.firstName}} {{element.lastName}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"email\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Email </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"15%\" class=\"text-lowercase\"> {{element.email}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"mobile\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Mobile </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"10%\" class=\"text-capitalize\"> {{element.mobile}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"message\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Message </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"40%\" class=\"text-capitalize\"> {{element.message}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"action\" class=\"pull-right\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"5%\">\r\n                    <div class=\"row p-2\">\r\n                        <a class=\"btn text-danger pointer\" (click)=\"deleteEnquiryById(element.id)\" matTooltip=\"Delete\"\r\n                            matTooltipPosition=\"above\"><i class=\"fa fa-trash text-danger\"></i></a>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"100\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\" showFirstLastButtons>\r\n        </mat-paginator>\r\n    </div>\r\n\r\n    <div *ngIf=\"showSpinner\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/dialogs/create-event.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/dialogs/create-event.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center p-3 bg-dark text-white\">Create Event</h2>\r\n\r\n<mat-dialog-content>\r\n    <form [formGroup]=\"eventForm\">\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Event Title</strong></label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"eventTitle\"\r\n                        [ngClass]=\"{'is-invalid':eventForm.get('eventTitle').touched && eventForm.get('eventTitle').invalid}\"\r\n                        [readonly]=\"!eventData.isDelete\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Event Addresss</strong></label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"eventAddress\"\r\n                        [ngClass]=\"{'is-invalid':eventForm.get('eventAddress').touched && eventForm.get('eventAddress').invalid}\"\r\n                        [readonly]=\"!eventData.isDelete\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Event Date</strong></label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"date\" class=\"form-control\" formControlName=\"eventDate\"\r\n                            [ngClass]=\"{'is-invalid':eventForm.get('eventDate').touched && eventForm.get('eventDate').invalid}\"\r\n                            [readonly]=\"!eventData.isDelete\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-secondary\" type=\"button\">\r\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label> <strong>Contact Persons</strong> </label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"contactPersons\"\r\n                        [ngClass]=\"{'is-invalid':eventForm.get('contactPersons').touched && eventForm.get('contactPersons').invalid}\"\r\n                        [readonly]=\"!eventData.isDelete\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Contact Numbers</strong></label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"contactNumbers\"\r\n                        [ngClass]=\"{'is-invalid':eventForm.get('contactNumbers').touched && eventForm.get('contactNumbers').invalid}\"\r\n                        [readonly]=\"!eventData.isDelete\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Status</strong></label>\r\n                <div class=\"form-group\">\r\n                    <select formControlName=\"status\" class=\"form-control\"\r\n                        [ngClass]=\"{'is-invalid':eventForm.get('status').touched && eventForm.get('status').invalid}\">\r\n                        <option value=\"\" selected disabled>Select status</option>\r\n                        <option value=\"Active\" class=\"text-success\">Active</option>\r\n                        <option value=\"Inactive\" class=\"text-danger\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n<div mat-dialog-actions class=\"pb-4 pt-4 row justify-content-center\">\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"createEvent()\" [disabled]=\"!eventForm.valid\"\r\n        *ngIf=\"!isEdit\">Create</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"updateEvent()\"\r\n        [disabled]=\"!eventForm.valid\" *ngIf=\"isEdit\">Update</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"close()\" cdkFocusInitial>Close</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"events\">\n    <div class=\"row justify-content-between\">\n        <div class=\"col-6\">\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Events <span\n                        class=\"badge badge-primary\">{{eventData.length}}</span></strong></h2>\n        </div>\n        <div class=\"col-6\">\n            <button (click)=\"createEvent()\" class=\"btn sling-btn pull-right\">Create events</button>\n        </div>\n    </div>\n    <div class=\"data-table mt-3 mb-5 table-responsive\" style=\"border:1px solid #00000017;\">\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"index\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{element.index}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"eventTitle\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Event Title </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"40%\" class=\"empNameLink pointer text-capitalize\">\n                    {{element.eventTitle}}</td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"eventDate\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Event Date </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\">\n                    {{element.eventDate | date: 'dd'}}-{{element.eventDate | date:'MMM'}}-{{element.eventDate | date: 'yyyy'}}\n                </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"status\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Status </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize font-weight-bold text-success\"\n                    [ngClass]=\"{'text-danger':element.status === 'Inactive'}\"> {{element.status}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"actions\" class=\"text-right\">\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\">\n                    <div class=\"row p-2\">\n                        <a class=\"btn text-info pointer\" (click)=\"editEvent(element)\" matTooltip=\"Edit\"\n                            matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\n                        <button class=\"btn text-danger pointer\" (click)=\"deleteEventById(element.id, element.isDelete)\"\n                            matTooltip=\"Delete\" matTooltipPosition=\"above\" [disabled]=\"!element.isDelete\"><i\n                                class=\"fa fa-trash text-danger\"></i></button>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\n        </table>\n        <mat-paginator [length]=\"100\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\">\n        </mat-paginator>\n    </div>\n</section>\n\n<div *ngIf=\"showSpinner\">\n    <app-spinner></app-spinner>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/dialogs/results-dialog.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/dialogs/results-dialog.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center p-3 bg-dark text-white\">Add Result</h2>\r\n\r\n<mat-dialog-content>\r\n    <form class=\"mt-4\" [formGroup]=\"resultForm\">\r\n        <div class=\"row justify-content-center\">\r\n            <label class=\"font-weight-bold text-center\">SELECT EVENT</label>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"eventId\" (change)=\"onEventChange($event)\" #event>\r\n                        <option selected disabled value=\"\">Select Event</option>\r\n                        <option *ngFor=\"let event of allEvents\" [value]=\"event.id\">{{event.eventTitle}}\r\n                            ({{event.eventDate}})</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3 bg-light p-5\">\r\n            <div class=\"col-sm-6\">\r\n                <!-- Winner candidate -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <label class=\"font-weight-bold\">Candidate Name</label>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"candidateName\"\r\n                                [ngClass]=\"{'is-invalid':resultForm.get('candidateName').touched && resultForm.get('candidateName').invalid}\">\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <label class=\"font-weight-bold\">District</label>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-control\" formControlName=\"candidateDistrict\"\r\n                                [ngClass]=\"{'is-invalid':resultForm.get('candidateDistrict').touched && resultForm.get('candidateDistrict').invalid}\">\r\n                                <option selected disabled>select district</option>\r\n                                <option *ngFor=\"let dist of allDistricts\" value=\"{{dist.name}}\">{{dist.name}}</option>\r\n                            </select>\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <label class=\"font-weight-bold\">Certificate No.</label>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control text-capitalize\"\r\n                                formControlName=\"candidateCertificateNo\"\r\n                                [ngClass]=\"{'is-invalid':resultForm.get('candidateCertificateNo').touched && resultForm.get('candidateCertificateNo').invalid}\">\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <label class=\"font-weight-bold\">Date Of Birth</label>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"date\" class=\"form-control\" formControlName=\"candidateDOB\"\r\n                                [ngClass]=\"{'is-invalid':resultForm.get('candidateDOB').touched && resultForm.get('candidateDOB').invalid}\">\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 text-center\">\r\n                <!-- Result Area -->\r\n                <h1 class=\"text-center\">\r\n                    <i class=\"fa fa-trophy\"></i>\r\n                </h1>\r\n                <h3 class=\"font-weight-bold text-center mt-3\">SCORE</h3>\r\n                <div class=\"row text-center mt-3\">\r\n                    <div class=\"col-sm-12\">\r\n                        <input type=\"text\" class=\"w-box text-center font-weight-bold\" formControlName=\"candidateScore\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row justify-content-center mt-3\">\r\n                    <div class=\"col-sm-8 text-center\">\r\n                        <label class=\"font-weight-bold text-center\">Age Category</label>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-control\" formControlName=\"ageCategory\"\r\n                                [ngClass]=\"{'is-invalid':resultForm.get('ageCategory').touched && resultForm.get('ageCategory').invalid}\">\r\n                                <option disabled selected value=\"\">Select category</option>\r\n                                <option *ngFor=\"let cat of ageCategory\" value=\"{{cat.categoryTitle}} {{cat.age}}\">\r\n                                    {{cat.categoryTitle}} {{cat.age}}</option>\r\n                            </select>\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-8\">\r\n                        <label class=\"font-weight-bold\">Select Rank</label>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-control\" formControlName=\"candidateRank\"\r\n                                [ngClass]=\"{'is-invalid':resultForm.get('candidateRank').touched && resultForm.get('candidateRank').invalid}\">\r\n                                <option disabled selected value=\"\">Select Rank</option>\r\n                                <option value=\"First Rank (Gold)\">First Rank (Gold)</option>\r\n                                <option value=\"Second Rank (Siver)\">Second Rank (Siver)</option>\r\n                                <option value=\"Third Rank (Bronze I)\">Third Rank (Bronze I)</option>\r\n                                <option value=\"Fourth Rank (Bronze II)\">Fourth Rank (Bronze II)</option>\r\n                            </select>\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n<div mat-dialog-actions class=\"pb-4 pt-4 row justify-content-center\">\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"addResult()\" [disabled]=\"!resultForm.valid\"\r\n        *ngIf=\"!isEdit\">Create</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"updateResult()\" [disabled]=\"!resultForm.valid\"\r\n        *ngIf=\"isEdit\">Update</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"close()\" cdkFocusInitial>Close</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"match\">\n    <div class=\"row justify-content-between\">\n        <div class=\"col-6\">\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Match Results <span\n                        class=\"badge badge-primary\">{{results.length}}</span></strong></h2>\n        </div>\n        <div class=\"col-6\">\n            <button (click)=\"addMatchRecord()\" class=\"btn sling-btn pull-right\">Add Record</button>\n        </div>\n    </div>\n    <div class=\"data-table mt-4 mb-5 table-responsive\" style=\"border:1px solid #00000017;\">\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\n\n            <ng-container matColumnDef=\"index\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"5%\"> {{element.index}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"eventName\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Event Name </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\n                    {{element.eventInfo.eventTitle}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"candidateName\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> CandidateName </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\"> {{element.name}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"district\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> District </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"13%\" class=\"text-capitalize\"> {{element.district}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"score\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Score </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"8%\" class=\"text-capitalize\"> {{element.score}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"rank\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Rank </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"14%\" class=\"text-capitalize\"> {{element.rank}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\" class=\"pull-right\">\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\n                <td mat-cell *matCellDef=\"let element\" width=\"10%\">\n                    <div class=\"row p-2\">\n                        <a class=\"btn text-info pointer\" (click)=\"editMatchResult(element)\" matTooltip=\"Edit\"\n                            matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\n                        <a class=\"btn text-danger pointer\" (click)=\"deleteResultById(element.id)\" matTooltip=\"Delete\"\n                            matTooltipPosition=\"above\"><i class=\"fa fa-trash text-danger\"></i></a>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\n        </table>\n        <mat-paginator [length]=\"100\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\" showFirstLastButtons>\n        </mat-paginator>\n    </div>\n\n    <div *ngIf=\"showSpinner\">\n        <app-spinner></app-spinner>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/dialogs/add-refree-dialog.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/dialogs/add-refree-dialog.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center p-3 bg-dark text-white\">Add Refree</h2>\r\n\r\n<mat-dialog-content>\r\n    <form id=\"regForm\" class=\"mt-4\" [formGroup]=\"refreeForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">First Name</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"firstName\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('firstName').touched && refreeForm.get('firstName').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">Middle Name</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"middleName\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('middleName').touched && refreeForm.get('middleName').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold text-capitalize\">Last Name</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('lastName').touched && refreeForm.get('lastName').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"font-weight-bold\">Email</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"email\" class=\"form-control text-lowercase\" formControlName=\"email\" [ngClass]=\"{'is-invalid':refreeForm.get('email').touched && refreeForm.get('email').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"refreeForm.get('email').errors?.required\">Field is required</span>\r\n                    <span *ngIf=\"refreeForm.get('email').invalid && !refreeForm.get('email').errors?.required\">\r\n                                Invalid email.</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"font-weight-bold\">Mobile No.</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"mobile\" maxlength=\"10\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('mobile').touched && refreeForm.get('mobile').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"refreeForm.get('mobile').errors?.required\">Field is required</span>\r\n                        <span\r\n                            *ngIf=\"refreeForm.get('mobile').invalid && !refreeForm.get('mobile').errors?.required\">\r\n                            Invalid Mobile Number</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label class=\"font-weight-bold\">Address</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"address\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('address').touched && refreeForm.get('address').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">City</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"city\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('city').touched && refreeForm.get('city').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">District</label>\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"district\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('district').touched && refreeForm.get('district').invalid}\">\r\n                        <option selected disabled>select district</option>\r\n                        <option *ngFor=\"let dist of allDistricts\" value=\"{{dist.name}}\">{{dist.name}}</option>\r\n                    </select>\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">Pin Code</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"pin\" maxlength=\"6\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('pin').touched && refreeForm.get('pin').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"refreeForm.get('pin').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"refreeForm.get('pin').invalid && !refreeForm.get('pin').errors?.required\">\r\n                            Invalid Pin Code</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"font-weight-bold\">Aadhaar No.</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"aadhaarNo\" maxlength=\"12\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('aadhaarNo').touched && refreeForm.get('aadhaarNo').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"refreeForm.get('aadhaarNo').errors?.required\">Field is required</span>\r\n                        <span\r\n                            *ngIf=\"refreeForm.get('aadhaarNo').invalid && !refreeForm.get('aadhaarNo').errors?.required\">\r\n                            Invalid Aadhaar No.</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"font-weight-bold\">Date of Birth</label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"date\" class=\"form-control\" formControlName=\"dateOfBirth\"\r\n                            [ngClass]=\"{'is-invalid':refreeForm.get('dateOfBirth').touched && refreeForm.get('dateOfBirth').invalid}\"\r\n                            max=\"Date.now()\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-secondary\" type=\"button\">\r\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col-sm-4 mt-3\">\r\n                <label class=\"font-weight-bold\"><strong>Passport Photo</strong></label>\r\n                <input type=\"file\" id=\"files3\" name=\"files\" formControlName=\"file\"\r\n                    [ngClass]=\"{'is-invalid':refreeForm.get('file').touched && refreeForm.get('file').invalid}\">\r\n                <span class=\"invalid-feedback alert alert-danger\">\r\n                    <span *ngIf=\"refreeForm.get('file').errors?.required\">Field is required</span>\r\n                </span>\r\n            </div>\r\n        </div> -->\r\n    </form>\r\n</mat-dialog-content>\r\n<div mat-dialog-actions class=\"pb-4 pt-4 row justify-content-center\">\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"addRefree()\" [disabled]=\"!refreeForm.valid\"\r\n        *ngIf=\"!isEdit\">Create</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"updateRefree()\" [disabled]=\"!refreeForm.valid\"\r\n        *ngIf=\"isEdit\">Update</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"close()\" cdkFocusInitial>Close</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/refree-panel.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/refree-panel.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"refree-panel\">\n    <div class=\"row justify-content-between\">\n        <div class=\"col-6\">\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Referee <span class=\"badge badge-primary\">{{refreeData.length}}</span></strong></h2>\n        </div>\n        <div class=\"col-6\">\n            <button (click)=\"addRefree()\" class=\"btn sling-btn pull-right\">Add Refree</button>\n        </div>\n    </div>\n    <div class=\"data-table mt-3 mb-5 table-responsive\" style=\"border:1px solid #00000017;\">\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"index\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{element.index}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Name </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\n                    {{element.name}}</td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"email\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Email </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\"> {{element.email}} </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"mobile\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Mobile </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\"> {{element.mobile}} </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"district\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> District </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"10%\" class=\"text-capitalize\"> {{element.district}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"actions\">\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\n                <td mat-cell *matCellDef=\"let element\" width=\"15%\">\n                    <div class=\"row p-2\">\n                        <a class=\"btn text-info pointer\" (click)=\"editRefree(element)\" matTooltip=\"Edit\"\n                            matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\n                        <a class=\"btn text-danger pointer\" (click)=\"deleteRefree(element.id)\" matTooltip=\"Delete\"\n                            matTooltipPosition=\"above\"><i class=\"fa fa-trash text-danger\"></i></a>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\n        </table>\n        <mat-paginator [length]=\"100\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\">\n        </mat-paginator>\n    </div>\n</section>\n\n<div *ngIf=\"showSpinner\">\n    <app-spinner></app-spinner>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"affiliation-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"head-sec text-center\">\r\n            <h2>Affiliated Districts</h2>\r\n            <p class=\"text-muted\">Some districts are not affiliated yet, for affiliation please contact.</p>\r\n            <div class=\"d-flex justify-content-center search-sec h-100\" *ngIf=\"false\">\r\n                <div class=\"searchbar\">\r\n                    <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Search...\" #search (keyup)=\"searchDistrict(search.value)\">\r\n                    <a class=\"search_icon\"><i class=\"fa fa-search\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row dist-sec mt-3 justify-content-center\">\r\n            <div class=\"col-sm-4\" *ngFor=\"let dist of registeredDistrictsList\">\r\n                <div class=\"card mt-3 text-white bg-dark\" (click)=\"getDistrictInfo(dist.id)\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">{{dist.name}}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <i class=\"fa fa-caret-down text-center\"></i>\r\n        </div>\r\n\r\n        <div class=\"dist-info jumbotron\">\r\n            <div>\r\n                <h2 class=\"text-center\"><i class=\"fa fa-bullseye mr-2\"></i>{{selectedDistrictInfo.requestedDistrict.name}}</h2>\r\n                <div class=\"row raw-info justify-content-center mt-5\">\r\n                    <div class=\"col-sm-8\">\r\n                        <p class=\"text-justify\">This district is registered under \"Slingshot Sports Association of Maharashtra, India\" affilated to - \"Indian Slingshot Sport Federation\", \"Asian Slingshot Sport Federation\", \"World organizes Slingshot Sport Federation. Affiliated\r\n                            on Date - {{selectedDistrictInfo.approvedOn | date: 'dd'}}/{{selectedDistrictInfo.approvedOn | date:'MMM'}}/{{selectedDistrictInfo.approvedOn | date: 'yyyy'}}\"\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center mt-4\">\r\n                    <h4><strong> <i class=\"fa fa-user-circle\"></i> Members</strong></h4>\r\n                </div>\r\n                <div class=\"row justify-content-center text-center\">\r\n                    <div class=\"col-sm-4\" *ngFor=\"let member of selectedDistrictInfo.members\">\r\n                        <div class=\"card card-cascade\">\r\n                            <div class=\"view view-cascade overlay\">\r\n                                <div class=\"img-area mt-5\">\r\n                                    <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body card-body-cascade text-center\">\r\n                                <h4 class=\"card-title text-capitalize\"><strong>Mr. {{member.firstName}} {{member.lastName}}</strong></h4>\r\n                                <span class=\"font-weight-bold text-capitalize text-info\">({{member.role}})</span><br>\r\n                                <span class=\"font-weight-bold\">{{member.email}}</span><br>\r\n                                <span class=\"font-weight-bold\">{{member.mobile}}</span>\r\n                                <div class=\"social-icons mt-3\">\r\n                                    <i class=\"fa fa-phone\" [matTooltip]=\"member.mobile\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-envelope\" [matTooltip]=\"member.email\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"spinner-area\" *ngIf=\"showSpinner\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n</section>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"association\">\r\n    <div class=\"jumbotron dist-area\">\r\n        <div class=\"row justify-content-center p-2\">\r\n            <div class=\"col-sm-5 alert alert-info text-center\">\r\n                Note: Districts that are already registered are not available in the list.\r\n            </div>\r\n        </div>\r\n        <h2 class=\"text-center title mt-5\">Join Us</h2>\r\n        <h3 class=\"text-center mt-3 reg-title\"><strong>Select District To Register</strong></h3>\r\n        <div class=\"row justify-content-center mt-4\">\r\n            <div class=\"col-sm-5\">\r\n                <select class=\"form-control\" height=\"50px\" (change)=\"onDistrictChange($event.target.value)\">\r\n                    <option selected disabled>Select District</option>\r\n                    <option *ngFor=\"let dist of availableDistricts\" value=\"{{dist.id}}\">{{dist.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row text-center justify-content-center mt-2\">\r\n            <div class=\"col-sm-2\">\r\n                <input type=\"button\" class=\"btn form-control reg-button\" value=\"Register\" height=\"50px\"\r\n                    (click)=\"registerDistrict()\" [disabled]=\"disabledRegBtn\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container form-area mt-5\" *ngIf=\"showForm\">\r\n        <h4 class=\"text-center title\">Affiliation For \"{{selectedDistrict.name}}\" District</h4>\r\n        <form id=\"regForm\" class=\"mt-4\" [formGroup]=\"registerForm\">\r\n            <h2 class=\"text-center\">Registration Form</h2>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>First Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"firstName\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('firstName').touched && registerForm.get('firstName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Middle Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"middleName\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('middleName').touched && registerForm.get('middleName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Last Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"lastName\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('lastName').touched && registerForm.get('lastName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Email</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('email').touched && registerForm.get('email').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('email').errors?.required\">Field is required</span>\r\n                            <span\r\n                                *ngIf=\"registerForm.get('email').invalid && !registerForm.get('email').errors?.required\">\r\n                                Invalid email.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>Mobile No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" matTooltip=\"Mobile Number use for notifications!\"\r\n                            matTooltipPosition=\"above\" class=\"form-control\" formControlName=\"mobile\" maxlength=\"10\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('mobile').touched && registerForm.get('mobile').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('mobile').errors?.required\">Field is required</span>\r\n                            <span\r\n                                *ngIf=\"registerForm.get('mobile').invalid && !registerForm.get('mobile').errors?.required\">\r\n                                Invalid Mobile Number</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Gender</label>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" formControlName=\"gender\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('gender').touched && registerForm.get('gender').invalid}\">\r\n                            <option selected disabled>Select Gender</option>\r\n                            <option value=\"Male\">Male</option>\r\n                            <option value=\"Female\">Female</option>\r\n                            <option value=\"Other\">Other</option>\r\n                        </select>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>Date of Birth</label>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"date\" class=\"form-control\" formControlName=\"dateOfBirth\"\r\n                                [ngClass]=\"{'is-invalid':registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').invalid}\"\r\n                                max=\"Date.now()\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-secondary\" type=\"button\">\r\n                                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <label>Address Line 1</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"addressLine1\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('addressLine1').touched && registerForm.get('addressLine1').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <label>Address Line 2</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"addressLine2\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('addressLine2').touched && registerForm.get('addressLine2').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>City</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"city\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('city').touched && registerForm.get('city').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>District</label>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" formControlName=\"district\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('district').touched && registerForm.get('district').invalid}\">\r\n                            <option selected disabled>select district</option>\r\n                            <option *ngFor=\"let dist of allDistricts\" value=\"{{dist.name}}\">{{dist.name}}</option>\r\n                        </select>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Pin Code</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pin\" maxlength=\"6\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('pin').touched && registerForm.get('pin').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('pin').errors?.required\">Field is required</span>\r\n                            <span *ngIf=\"registerForm.get('pin').invalid && !registerForm.get('pin').errors?.required\">\r\n                                Invalid Pin Code</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Aadhaar No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"aadhaarNo\" maxlength=\"12\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('aadhaarNo').touched && registerForm.get('aadhaarNo').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('aadhaarNo').errors?.required\">Field is required</span>\r\n                            <span\r\n                                *ngIf=\"registerForm.get('aadhaarNo').invalid && !registerForm.get('aadhaarNo').errors?.required\">\r\n                                Invalid Aadhaar No.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>PAN No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-uppercase\" formControlName=\"panNo\" maxlength=\"10\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('panNo').touched && registerForm.get('panNo').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('panNo').errors?.required\">Field is required</span>\r\n                            <span\r\n                                *ngIf=\"registerForm.get('panNo').invalid && !registerForm.get('panNo').errors?.required\">\r\n                                Invalid PAN No.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <hr>\r\n            <div class=\"row mt-4 mb-3\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>Email</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':registerForm.get('email').touched && registerForm.get('email').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('email').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('email').invalid && !registerForm.get('email').errors?.required\">\r\n                                    Invalid email.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Password</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{'is-invalid':registerForm.get('password').touched && registerForm.get('password').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('password').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('password').hasError('minlength') && !registerForm.get('password').errors?.required\">\r\n                            Minimum 8 characters required</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Confirm Password</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{'is-invalid':registerForm.get('confirmPassword').touched && registerForm.get('confirmPassword').invalid && registerForm.get('confirmPassword').errors?.isConfirmPassword}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Password not matched\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"row mt-3\">\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>Aadhar Card</strong></label>\r\n                    <input type=\"file\" id=\"files1\" name=\"files1\" (input)=\"validateFileUpload($event, 'doc1')\"\r\n                        formControlName=\"file1\"\r\n                        [ngClass]=\"{'is-invalid':registerForm.get('file1').touched && registerForm.get('file1').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file1').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>PAN Card</strong></label>\r\n                    <input type=\"file\" id=\"files2\" name=\"files2\" formControlName=\"file2\"\r\n                        (input)=\"validateFileUpload($event, 'doc2')\"\r\n                        [ngClass]=\"{'is-invalid':registerForm.get('file2').touched && registerForm.get('file2').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file2').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>Passport Photo</strong></label>\r\n                    <input type=\"file\" id=\"files3\" name=\"files3\" formControlName=\"file3\"\r\n                        (input)=\"validateFileUpload($event, 'doc3')\"\r\n                        [ngClass]=\"{'is-invalid':registerForm.get('file3').touched && registerForm.get('file3').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file3').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid1 || registerForm.get('file1').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                    Adhaar Card: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid2 || registerForm.get('file2').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                    PAN Card: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid3 || registerForm.get('file3').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                    Photo: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row  mt-5\">\r\n                <div class=\"col-sm-12\">\r\n                    <mat-checkbox [(ngModel)]=\"isChecked\" formControlName=\"terms\">Accept Terms & Conditions\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"mt-5 text-center\">\r\n                <input type=\"button\" class=\"btn act-btn pr-4 pl-4\" value=\"Register\" height=\"50px\"\r\n                    (click)=\"onFormSubmit()\"\r\n                    [disabled]=\"!registerForm.valid || !isFileValid1 || !isFileValid2 || !isFileValid3 || !isChecked\">\r\n                <input type=\"button\" class=\"btn act-btn ml-2 pr-4 pl-4\" value=\"clear\" height=\"50px\"\r\n                    (click)=\"onFormReset()\">\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"spinner-area\" *ngIf=\"showSpinner\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"committee\">\n    <div class=\"jumbotron text-center\">\n        <h2 class=\"page-title\">Slingshot Sports Association Members of Maharashtra</h2>\n    </div>\n    <div class=\"container mb-5\">\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Affiliation Members</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of committee.AFFILIATION_COMMITTEE; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\" class=\"text-capitalize\">{{member.name}}</td>\n                    <td width=\"40%\" class=\"text-center\">{{member.mobile}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Tournament Technical\n                commmitee</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of committee.TOURNAMENT_TECHNICAL_COMMITTEE; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\" class=\"text-capitalize\">{{member.name}}</td>\n                    <td width=\"40%\" class=\"text-center\">{{member.mobile}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Tournament Organizer\n                committee</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of committee.TOURNAMENT_ORGANIZER_COMMITTEE; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\" class=\"text-capitalize\">{{member.name}}</td>\n                    <td width=\"40%\" class=\"text-center\">{{member.mobile}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Selection Committee</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of committee.SELECTION_COMMITTEE; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\" class=\"text-capitalize\">{{member.name}}</td>\n                    <td width=\"40%\" class=\"text-center\">{{member.mobile}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Official Referee</h5>\n            <table class=\"table table-bordered mt-3 referee-table\">\n                <tr *ngFor=\"let referee of referees; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\" class=\"referee-name text-capitalize pointer\">\n                        <i class=\"fa fa-user-circle\"></i>\n                        {{referee.firstName}} {{referee.middleName}} {{referee.lastName}}\n                    </td>\n                    <td width=\"25%\" class=\"text-center\">{{referee.mobile}}</td>\n                    <td width=\"15%\" class=\"text-center text-info pointer\">view</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"contact-us\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2>Contact Us</h2>\r\n    </div>\r\n    <div class=\"container mt-5\">\r\n        <div class=\"association-info text-center\">\r\n            <h2>Contact Our Association</h2>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-map-marker\"></i></span>\r\n                    <br>\r\n                    <p>Matoshree Niwas, Dhamangaon By-Pass, Pimpalgaon, Yavatmal, Maharashtra, Pin Code - 445001.</p>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-phone\"></i></span>\r\n                    <br>\r\n                    <p>8180008641, 9511663616, 8432146555</p>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-envelope\"></i></span>\r\n                    <br>\r\n                    <p style=\"word-wrap: break-word;\">slingshot.maha@gmail.com</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section id=\"contact-us1\" class=\"bg-offwhite pt-3 pb-5\">\r\n    <div class=\"container\">\r\n        <div class=\"user-info text-center mt-5\">\r\n            <h2>Our Members</h2>\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-sm-6 col-md-4 card-col\" *ngFor=\"let member of members\">\r\n                    <div class=\"card card-cascade\">\r\n                        <div class=\"view view-cascade overlay\">\r\n                            <div class=\"img-area mt-5\">\r\n                                <img [src]=\"member.pic\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body card-body-cascade text-center\">\r\n                            <h4 class=\"mt-3 member-name\"><strong>{{member.name}}</strong></h4>\r\n                            <span class=\"text-info font-weight-bold\">({{member.role}})</span>\r\n                            <br>\r\n                            <span>{{member.email}}</span>\r\n                            <div class=\"social-icons mt-3\">\r\n                                <i class=\"fa fa-phone\" [matTooltip]=\"member.mobile\" matTooltipPosition=\"above\"></i>\r\n                                <i class=\"fa fa-envelope\" [matTooltip]=\"member.email\" matTooltipPosition=\"above\"></i>\r\n                                <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section id=\"contact-us2\" class=\"container\">\r\n    <div class=\"contact-form mt-5\">\r\n        <div class=\"text-center\">\r\n            <h2>Get in touch</h2>\r\n        </div>\r\n        <div class=\"row mt-5 mb-5\">\r\n            <div class=\"col-md-6\">\r\n                <iframe\r\n                    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.296419656939!2d78.1262283696957!3d20.4118795880123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3ef4606797df5%3A0x99fdaa3c4f6b7d9d!2sPimpalgaon%2C%20Yavatmal%2C%20Maharashtra%20445001!5e0!3m2!1sen!2sin!4v1583593786510!5m2!1sen!2sin\"\r\n                    width=\"100%\" class=\"shadow map\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"\r\n                    allowfullscreen=\"\"></iframe>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <form [formGroup]=\"contactForm\" class=\"contactForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control field\" placeholder=\"First Name\"\r\n                                    formControlName=\"firstName\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('firstName')?.touched && contactForm.get('firstName').invalid}\">\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    Field is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control field\" placeholder=\"Last Name\"\r\n                                    formControlName=\"lastName\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('lastName')?.touched && contactForm.get('lastName').invalid}\">\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    Field is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control field\" placeholder=\"Email\"\r\n                                    formControlName=\"email\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('email')?.touched && contactForm.get('email').invalid}\">\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    <span *ngIf=\"contactForm.get('email').errors?.required\">Field is required</span>\r\n                                    <span\r\n                                        *ngIf=\"contactForm.get('email').invalid && !contactForm.get('email').errors?.required\">\r\n                                        Invalid email.</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control field\" placeholder=\"Mobile\"\r\n                                    formControlName=\"mobile\" minlength=\"10\" maxlength=\"10\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('mobile')?.touched && contactForm.get('mobile').invalid}\">\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    <span *ngIf=\"contactForm.get('mobile').errors?.required\">Field is\r\n                                        required</span>\r\n                                    <span\r\n                                        *ngIf=\"contactForm.get('mobile').invalid && !contactForm.get('mobile').errors?.required\">\r\n                                        Invalid Mobile Number</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <textarea rows=\"4\" cols=\"50\" class=\"form-control\" placeholder=\"Message\"\r\n                                    formControlName=\"message\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('message')?.touched && contactForm.get('message').invalid}\"></textarea>\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    Field is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-sm-12\">\r\n                            <input type=\"button\" mat-raised-button class=\"btn sling-btn\" name=\"Send\" value=\"Send\"\r\n                                (click)=\"sendEnquiry()\" [disabled]=\"!contactForm.valid\">\r\n                            <input type=\"button\" mat-raised-button class=\"btn sling-btn ml-2\" name=\"clear\" value=\"Clear\"\r\n                                (click)=\"clearForm()\">\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home\">\r\n    <section id=\"banner-area\">\r\n        <div id=\"banner-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>SET YOUR GOAL WITH SLINGSHOT</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">read more</a> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner2.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>GET SLINGSHOT AFFILIATION</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">REGISTER</a> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>ENJOY PLAYING SLINGSHOT</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">read more</a> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#banner-carousel\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#banner-carousel\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"register-area\">\r\n        <div class=\"reg-panel\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"cta_content d-flex  flex-column align-items-md-center align-items-start text-center justify-content-start\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/logo.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"reg_text pt-3\">Affiliation Open For All District (Maharashtra)</div>\r\n                            <div class=\"mx-auto\"> <a class=\"action-button reg-btn mt-3\" routerLink=\"/association\">Register</a></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"welcome-area\" class=\"bg-offwhite wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-1 member-box\">\r\n                    <div class=\"ico-box active\">\r\n                        <figure class=\"d-flex justify-content-center mt-3\">\r\n                            <img class=\"shake-hand\" src=\"./assets/images/hand-shake.png\" alt=\"\">\r\n                        </figure>\r\n                        <header class=\"entry-header\">\r\n                            <h3 class=\"entry-title-box\">Become a part of Slingshot</h3>\r\n                        </header>\r\n                        <!-- <div class=\"entry-content\">\r\n                            <a class=\"btn outline mt-4\">Signup</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title welcome-title text-center\">Welcome to Association</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">We provide affiliation of slingshot game for the districts in Maharashtra. This is comes under Slingshot Sports Association of Maharashtra. To avail the affiliation please register. For the registered members of district we\r\n                                provide management of the participants and game information through this website. Get latest updates of matches and events. So Hurry Up to get Affiliation. </p>\r\n                        </div>\r\n                        <!-- <div class=\"entry-footer mt-2\">\r\n                            <a routerLink=\"association\" class=\"action-button\">read more</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"game-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title text-center\">About Game</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">In INDIA, We are playing this game from our childhood. We have enjoyed lots of moment with this game to hit the target. Now lets make this game as our sports. We provide the opportunity to compete the people with this game,\r\n                                and achieve some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra, India<strong>\"</strong>. Please read the rules for this game before you start. </p>\r\n                        </div>\r\n                        <div class=\"entry-footer mt-2\">\r\n                            <a routerLink=\"sports\" class=\"action-button\">read more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-1 slingshot-box\">\r\n                    <img class=\"img shadow rounded\" src=\"./assets/images/slingshot1.jpg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"results-area\" class=\"wrapper-box bg-offwhite\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong> <i class=\"fa fa-trophy mr-2\" aria-hidden=\"true\"></i>Latest Match Results</strong></h2>\r\n            </div>\r\n            <app-score-board [result]=\"matchResults\"></app-score-board>\r\n\r\n            <div class=\"text-center mt-2\">\r\n                <a routerLink=\"/results\" class=\"action-button\">view more</a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"member-area\" class=\"wrapper-box bg-offwhite\" *ngIf=\"false\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Our Members</strong></h2>\r\n            </div>\r\n            <div class=\"row justify-content-center mt-5\">\r\n                <div class=\"col-sm-3 col-md-3 card-col\" *ngFor=\"let user of members\">\r\n                    <div class=\"card card-cascade bg-offwhite mt-2\">\r\n                        <div class=\"view view-cascade overlay\">\r\n                            <div class=\"img-area mt-5\">\r\n                                <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body card-body-cascade text-center\">\r\n                            <h4 class=\"mt-1\"><strong>Mr. Lalit Dhoke</strong></h4>\r\n                            <span>(General Secretory)</span>\r\n                            <br>\r\n                            <span>lalit.dhoke@gmail.com</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n\r\n    <section id=\"testimonial-area\">\r\n        <div class=\"img-overlay text-center\">\r\n            <div class=\"container\">\r\n                <div class=\"text-center\">\r\n                    <h2><strong>Our Members</strong></h2>\r\n                </div>\r\n                <div id=\"contactCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                    <ol class=\"carousel-indicators user-indicators\">\r\n                        <li data-target=\"#contactCourousel\" *ngFor=\"let member of members; let i = index\" [ngClass]=\"member.class\"></li>\r\n                    </ol>\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item pb-5\" *ngFor=\"let member of members\" [ngClass]=\"member.class\">\r\n                            <div class=\"img-area\">\r\n                                <img [src]=\"member.pic\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">{{member.name}}</h3>\r\n                                <span class=\"text-info\">({{member.role}})</span>\r\n                                <br>\r\n                                <span>{{member.email}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"carousel-control-prev\" href=\"#contactCourousel\" role=\"button\" data-slide=\"prev\">\r\n                        <i class=\"fa fa-caret-square-o-left\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"carousel-control-next\" href=\"#contactCourousel\" role=\"button\" data-slide=\"next\">\r\n                        <i class=\"fa fa-caret-square-o-right\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"events-area\" class=\"wrapper-box bg-offwhite\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Upcomming Events</strong></h2>\r\n            </div>\r\n            <div id=\"eventsCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators user-indicators\" hidden>\r\n                    <li data-target=\"#eventsCourousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"carousel-item\" *ngFor=\"let event of eventData; let i = index\" [ngClass]=\"{'active': i === 0}\">\r\n                        <div class=\"carousel-caption\">\r\n                            <div class=\"jumbotron bg-white\">\r\n                                <h5 class=\"text-uppercase\"><strong><i class=\"fa fa-bullseye mr-2\" aria-hidden=\"true\"></i>{{event.eventTitle}}</strong></h5>\r\n                                <div class=\"row justify-content-center mt-4\">\r\n                                    <div class=\"p-2 img-container\">\r\n                                        <img src=\"./assets/images/slingshot3.jpg\" alt=\"\" width=\"260px\">\r\n                                        <div class=\"img-text\">\r\n                                            <h1><span class=\"badge\">\r\n                                                {{event.eventDate | date: 'dd'}}<br />\r\n                                                {{event.eventDate | date: 'MMM'}}\r\n                                            </span></h1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"p-2\">\r\n                                        <div class=\"info text-left\">\r\n                                            <span><strong><i class=\"fa fa-map-marker pr-1\"></i>Address</strong></span>\r\n                                            <p class=\"text-capitalize\">{{event.eventAddress}}</p>\r\n                                            <span><strong><i class=\"fa fa-user pr-1\"></i>Contact Persons</strong></span>\r\n                                            <p class=\"text-capitalize\">{{event.contactPersons}}</p>\r\n                                            <span><strong><i class=\"fa fa-phone pr-1\"></i>Phone</strong></span>\r\n                                            <p>{{event.contactNumbers}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a class=\"carousel-control-prev action-icon\" href=\"#eventsCourousel\" role=\"button\" data-slide=\"prev\">\r\n                    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"carousel-control-next action-icon\" href=\"#eventsCourousel\" role=\"button\" data-slide=\"next\">\r\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"gallery-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Gallery</strong></h2>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-6\">\r\n                    <img class=\"rounded\" src=\"./assets/images/ad.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n                <div class=\"col-sm-6 img-right\">\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/weapon-1.jpg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/weapon-2.jpg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <div *ngIf=\"showSpinner\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n\r\n</section>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light fixed-top shadow\">\r\n    <div class='navbar-brand'>\r\n        <span class='navbar-title ml-2'><span class=\"main-title\">Slingshot</span><span\r\n                class=\"sub-title\">Association</span></span>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/sports\">Sports</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/affiliation\">Affiliation</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/committee\">Committee</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n                <a class=\"nav-link\" routerLink=\"/admin\">Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#gallery-area\">Gallery</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/contact\">Contact us</a>\r\n            </li>\r\n        </ul>\r\n        <button class=\"btn outline\" routerLink=\"/association\">Register</button>\r\n        <button class=\"btn outline ml-2\" routerLink=\"/login\" *ngIf=\"!isLoggedIn\">Login</button>\r\n        <button class=\"btn outline ml-2\" *ngIf=\"isLoggedIn\" (click)=\"signOut()\">Logout</button>\r\n    </div>\r\n</nav>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"match-results\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2 class=\"page-title\">Score Board</h2>\r\n    </div>\r\n    <div class=\"container mb-5\">\r\n        <app-score-board [result]=\"matchResults\"></app-score-board>\r\n    </div>\r\n</section>\r\n\r\n<div *ngIf=\"showSpinner\">\r\n    <app-spinner></app-spinner>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/score-board/score-board.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/score-board/score-board.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"result-area\">\n    <ul class=\"list-group mt-4\">\n        <li class=\"list-group-item mt-1\" *ngFor=\"let item of result; let i=index;\">\n            <span class=\"index font-weight-bold\">{{i+1}}</span>\n            <div class=\"event-panel row pt-3 pb-3\">\n                <div class=\"col-sm-4 align-items-center text-center justify-content-start\">\n                    <div class=\"img-area\">\n                        <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\n                    </div>\n                    <span class=\"text-capitalize font-weight-bold\">{{item.name}}</span>\n                    <br>\n                    <span>({{item.district}})</span>\n                </div>\n                <div class=\"col-sm-4 text-center\">\n                    <div class=\"result\" style=\"font-size: 30px;font-weight: bold;\">score : {{item.score}}</div>\n                    <span class=\"font-weight-bold\">Category : {{item.ageCategory}}</span> <br>\n                    <span class=\"text-rank font-weight-bold mt-2\"><i class=\"fa fa-star mr-1\" aria-hidden=\"true\"></i>{{item.rank}}</span>\n                </div>\n                <div class=\"col-sm-4 text-center justify-content-end event-sec\">\n                    <h5 class=\"font-weight-bold\">event</h5>\n                    <div>\"{{item.eventInfo.eventTitle}}\"</div>\n                    <div>{{item.eventInfo.eventDate}}</div>\n                    <div class=\"row text-center justify-content-center\">\n                        <p class=\"text-capitalize\"><i class=\"fa fa-map-marker\"></i> \n                            {{item.eventInfo.eventAddress}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"type==='confirm'\">\n    <mat-dialog-content>\n        <h4 class=\"text-center\">{{message}}</h4>\n    </mat-dialog-content>\n    <div class=\"text-right mt-2\">\n        <button mat-stroked-button class=\"btn\" [mat-dialog-close]=\"true\">Yes</button>\n        <button mat-stroked-button class=\"btn ml-3\" (click)=\"close()\">No</button>\n    </div>\n</div>\n\n<div class=\"text-center p-2\" *ngIf=\"type==='register'\">\n    <h1>Registration Successful !!</h1>\n    <h5>Once it gets approved you will get notified.</h5>\n    <h5>Thank You!</h5>\n    <button class=\"btn mt-4\" style=\"background-color: #ff8b23; color: #fff;\" mat-button [mat-dialog-close]=\"true\">OK</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"game\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2 class=\"page-title\">Slingshot Sports Association of Maharashtra</h2>\r\n    </div>\r\n\r\n    <div class=\"container wrapper\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-sm-6 text-center\">\r\n                <img class=\"sling-img shadow rounded\" src=\"./assets/images/slingshot2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-sm-6 game-info pt-5\">\r\n                <h4><i class=\"fa fa-bullseye mr-2\"></i>Slingshot</h4>\r\n                <p class=\"text-justify mt-4\">In INDIA, We are playing this game from our childhood. We have enjoyed lots\r\n                    of moment with this game to hit the target. Now lets make this game as our sports. We provide the\r\n                    opportunity to compete the people with this game, and achieve\r\n                    some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra,\r\n                    India<strong>\"</strong>. Please read the rules for this game before you start.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"category mt-5 wrapper bg-offwhite\">\r\n        <h4 class=\"text-center\"><strong>Categories of Slingshot</strong> </h4>\r\n        <div class=\"row mt-4 cat-cards justify-content-center\">\r\n            <div class=\"col-sm-2 col-xs-3 mt-2\" *ngFor=\"let cat of categories\">\r\n                <div class=\"card text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">{{cat.categoryName}}</h5>\r\n                        <h5 class=\"card-title category-title\"><strong>{{cat.categoryTitle}}</strong></h5>\r\n                        <div>\r\n                            <span>{{cat.distance}}</span>\r\n                            <p>{{cat.age}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"rules mt-5\">\r\n            <h4 class=\"text-center\"><strong>Rules of Game</strong> </h4>\r\n            <div class=\"row mt-4 justify-content-center\">\r\n                <div class=\"col-sm-12\">\r\n                    <ul class=\"list-group mt-4\">\r\n                        <li class=\"list-group-item p-5\" *ngFor=\"let rule of rules; let i = index;\"\r\n                            [ngClass]=\"{'mt-1': i > 0}\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td><span class=\"circle mr-3\"> {{ i+1 }} </span></td>\r\n                                    <td class=\"text-justify\">{{rule}}</td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5 text-justify  mt-1\">\r\n                            <span class=\"text-danger\">स्पष्टीकरण : </span> समजा एखाद्या स्पर्धकाने 5 मिनिटांमध्ये 15\r\n                            लक्ष्यवेध केलेत, या 15 लक्ष्यवेधांमध्ये 3\r\n                            गुणांच्या वर्तुळात 3, 4 गुणांच्या वर्तुळात 3, 5 गुणांच्या वर्तुळात 1 व 8,9,10 गुणांच्या\r\n                            वर्तुळात प्रत्येकी 2 लक्ष्यवेध केले असेल तर अशा प्रसंगात अंतिम गुण मोजताना 3,4,5,6 या\r\n                            गुणांच्या वर्तुळातील वेध व 8 गुणांच्या\r\n                            वर्तुळातील कुठलाही एक वेध मोजले जातील आणि त्यानुसार स्पर्धकांचे गुण ठरविल्या जातील.\r\n                        </li>\r\n                    </ul>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-5 mt-5 bg-offwhite equipment\">\r\n        <h4 class=\"text-center\"><strong>Equipments of Slingshot</strong> </h4>\r\n        <div class=\"container\">\r\n            <div class=\"row mt-4 justify-content-center\">\r\n                <div class=\"col text-center\">\r\n                    <img src=\"./assets/images/tool1.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                    <img src=\"./assets/images/tool2.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                    <img src=\"./assets/images/tool3.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                    <img src=\"./assets/images/tool4.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-4 justify-content-center row-bottom\">\r\n                <div class=\"col text-center\">\r\n                    <img src=\"./assets/images/tool5.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                    <img src=\"./assets/images/tool6.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                    <img src=\"./assets/images/tool7.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                    <img src=\"./assets/images/tool8.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"support\">\n    <div class=\"container mb-5\">\n        <h1 class=\"title  text-center\">Developer Contact</h1>\n        <div class=\"row mt-5 justify-content-center  text-center\">\n            <div class=\"col-sm-6\">\n                <div class=\"img-area\">\n                    <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\n                </div>\n                <h4 class=\"mt-3 member-name\"><strong>Mr. Akshay Shalikram Shastrakar</strong></h4>\n                <span class=\"text-info font-weight-bold\">(Software Developer)</span><br>\n                <span>akshay.shastrakar1@gmail.com</span><br>\n                <span>9767986750</span>\n                <div class=\"social-icons mt-3\">\n                    <i class=\"fa fa-phone ml-3 mr-3 icon-circle\" matTooltip=\"9767986750\" matTooltipPosition=\"above\"></i>\n                    <i class=\"fa fa-envelope ml-3 mr-3 icon-circle\" matTooltip=\"akshay.shastrakar1@gmail.com\"\n                        matTooltipPosition=\"above\"></i>\n                    <i class=\"fa fa-facebook ml-3 mr-3 icon-circle\" matTooltip=\"facebook\"\n                        matTooltipPosition=\"above\"></i>\n                </div>\n            </div>\n        </div>\n        <form [formGroup]=\"enquiryForm\">\n            <div class=\"row justify-content-center mt-5\">\n                <div class=\"col-sm-6\">\n                    <h3 class=\"text-center\">Ask Question?</h3>\n                    <div class=\"form-group\">\n                        <textarea rows=\"4\" cols=\"50\" class=\"form-control\" placeholder=\"enter message\" formControlName=\"message\">\n                    </textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <input type=\"button\" mat-raised-button class=\"btn sling-btn pl-3 pr-3\" name=\"clear\" value=\"Send\"\n                     [disabled]=\"!enquiryForm.valid\">\n            </div>\n        </form>\n    </div>\n</section>");

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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#admin {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  overflow-x: hidden;\n}\n#admin .actions .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#admin .actions .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#admin .actions .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#admin .actions .card:hover {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#admin .actions .card:hover .card-title {\n  color: #ff8b23;\n}\n#admin .actions .badge {\n  background-color: #ff8b23;\n}\n@media only screen and (max-width: 768px) {\n  #admin .actions {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzVFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRCtFSjtBQzdFUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQrRVo7QUM5RVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJGUEw7RUVRSyxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FEZ0ZoQjtBQzlFWTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FEZ0ZoQjtBQzdFUTtFQUNJLGVBQUE7RUFDQSx3REFBQTtBRCtFWjtBQzlFWTtFQUNJLGNGekJMO0FDeUdYO0FDN0VRO0VBQ0kseUJGN0JEO0FDNEdYO0FDMUVBO0VBR1E7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VEMkVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiR0aC1jb2xvcjogI2ZmOGIyMztcclxuJHRoLWNvbG9yLWRhcms6ICNmZjM2MDA7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG59XHJcblxyXG5cclxuLyogVGhlbWUtQ29sb3JzICovXHJcblxyXG4uYmctb2Zmd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjNmNTtcclxufVxyXG5cclxuLnNsaW5nLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBMb2dvLVRleHQgKi9cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBkaWFsb2cgY3NzXHJcbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHtcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLnNsaW5nLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbiNhZG1pbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuI2FkbWluIC5hY3Rpb25zIC5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2FkbWluIC5hY3Rpb25zIC5jYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xuICBoZWlnaHQ6IDRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG4jYWRtaW4gLmFjdGlvbnMgLmNhcmQ6aG92ZXI6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4jYWRtaW4gLmFjdGlvbnMgLmNhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuI2FkbWluIC5hY3Rpb25zIC5jYXJkOmhvdmVyIC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZjhiMjM7XG59XG4jYWRtaW4gLmFjdGlvbnMgLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjYWRtaW4gLmFjdGlvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4jYWRtaW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0aC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIC4xNSkhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgI2FkbWluIHtcclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

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
        this.userID = localStorage.getItem('user-id');
    }
    ngOnInit() {
        // TO DO....
        // check first use is logged in or not
        // if not logged in then remove all localstorage and redirect to login page
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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#approval {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  margin-bottom: 100px;\n}\n.badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWZmaWxpYXRpb24tcmVxdWVzdHMvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FmZmlsaWF0aW9uLXJlcXVlc3RzL2FmZmlsaWF0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZmZpbGlhdGlvbi1yZXF1ZXN0cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxhZmZpbGlhdGlvbi1yZXF1ZXN0c1xcYWZmaWxpYXRpb24tcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTs7RUFFSSxZQUFBO0FDQ0o7QURFQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0hKO0FETUE7RUFDSSxtQkFBQTtBQ0hKO0FETUM7RUFDRyxnQkFBQTtBQ0hKO0FETUM7RUFDRyxtQkFBQTtBQ0hKO0FET0EsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEU0EsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEo7QURVQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFVBOztFQUVJLFlBQUE7QUNQSjtBRFVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUEo7QURXQTtFQUNJLDBDQUFBO0FDUko7QURXQTtFQUNJLHdCQUFBO0FDUko7QURZSTtFQUNJLDBCQUFBO0FDVFI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM1RUE7RUFDSSx5QkZPTztBQ3dFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FmZmlsaWF0aW9uLXJlcXVlc3RzL2FmZmlsaWF0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuI2FwcHJvdmFsIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuI2FwcHJvdmFsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/affiliation-requests/affiliation-requests.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/affiliation-requests/affiliation-requests.component.ts ***!
  \******************************************************************************/
/*! exports provided: AffiliationRequestsComponent, DistrictApprovalDialog, ApprovedDistrictComponent, RejectedAffiliationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliationRequestsComponent", function() { return AffiliationRequestsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictApprovalDialog", function() { return DistrictApprovalDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedDistrictComponent", function() { return ApprovedDistrictComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedAffiliationComponent", function() { return RejectedAffiliationComponent; });
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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");













let AffiliationRequestsComponent = class AffiliationRequestsComponent {
    constructor(_service, _dialog, _spinner, _toastr) {
        this._service = _service;
        this._dialog = _dialog;
        this._spinner = _spinner;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'districtName', 'name', 'mobile', 'status', 'actions'];
        this.affiliatinRequests = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.getAffiliationRequestData();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    getAffiliationRequestData() {
        this.show_spinner();
        this._service.getAffiliationRequests().subscribe(data => {
            this.affiliatinRequests = data.map((item, index) => {
                return Object.assign({ id: item.payload.doc.id, index: index + 1 }, item.payload.doc.data());
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.affiliatinRequests);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.hide_spinner();
        });
    }
    filterResult(serachKey) {
        this.dataSource.filter = serachKey.trim().toLowerCase();
    }
    getPersonInfo(personData) {
        this._dialog.open(DistrictApprovalDialog, {
            data: { distInfo: personData, flag: false },
            autoFocus: false,
            width: '99%'
        });
    }
    getRegisteredDistrctInfo(personData) {
        this._dialog.open(DistrictApprovalDialog, {
            data: { distInfo: personData, flag: true },
            autoFocus: false,
            width: '99%'
        });
    }
    deleteRequest(id) {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to delete?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._service.deleteRequestById(id);
                this._toastr.info("Request Deleted Successfully.");
            }
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
    constructor(_dialogRef, _service, _spinner, _dialog, _toastr, firestore, utility, data) {
        this._dialogRef = _dialogRef;
        this._service = _service;
        this._spinner = _spinner;
        this._dialog = _dialog;
        this._toastr = _toastr;
        this.firestore = firestore;
        this.utility = utility;
        this.data = data;
        this.flag = false;
        this.title = '';
        _dialogRef.disableClose = true;
        this.personData = data.distInfo;
        this.flag = data.flag;
        if (this.flag) {
            this.title = this.personData.requestedDistrict.name;
        }
        else {
            this.title = 'Requested For "' + this.personData.requestedDistrict.name + '" District';
        }
    }
    ngOnInit() { }
    close() {
        this._dialogRef.close();
    }
    approveDistrict(districtData) {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to approve?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                districtData.approvedOn = this.utility.convertDateToEPOC(new Date());
                districtData.approvedBy = 'username';
                districtData.status = 'approved';
                this._service.approveDistrict(districtData).pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"](1)).subscribe(data => {
                    if (!data.payload.exists) {
                        this.firestore.collection('ApprovedDistricts').doc(districtData.requestedDistrict.id).set(Object.assign({}, districtData, { id: districtData.requestedDistrict.id }));
                        this.firestore.collection('DistrictList').doc(districtData.requestedDistrict.id).update({ isRegistered: true });
                        this.firestore.collection('AffiliationRequests').doc(districtData.id).delete();
                        this._toastr.success('Approved Successfully');
                        this.close();
                    }
                    else {
                        this._toastr.error('District is already allocated');
                    }
                });
            }
        });
    }
    deleteAffiliation() {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to delete affiliation?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._service.deleteDistrictAffiliation(this.personData);
                this._toastr.error('Affiliation Canceled Successfully');
                this.close();
            }
        });
    }
};
DistrictApprovalDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
    { type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
];
DistrictApprovalDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'district-approval-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialogs/district-approval.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html")).default,
        styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }\n  .mat-dialog-container {\n    margin-top: 100px !important;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], DistrictApprovalDialog);

let ApprovedDistrictComponent = class ApprovedDistrictComponent {
    constructor(_service, _spinner, _dialog, _toastr) {
        this._service = _service;
        this._spinner = _spinner;
        this._dialog = _dialog;
        this._toastr = _toastr;
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns2 = ['index', 'districtName', 'member', 'approvedOn', 'status', 'actions'];
        this.approvedDistricts = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.getApprovedDistrictInfo();
    }
    getApprovedDistrictInfo() {
        this.show_spinner();
        this._service.getApprovedDistrictInfo().subscribe(data => {
            this.approvedDistricts = data.map((item, index) => {
                return Object.assign({ id: item.payload.doc.id, index: index + 1 }, item.payload.doc.data());
            });
            this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.approvedDistricts);
            this.dataSource2.sort = this.sort2;
            this.dataSource2.paginator = this.paginator2;
            this.hide_spinner();
        });
    }
    getRegisteredDistrctInfo(personData) {
        this._dialog.open(DistrictApprovalDialog, {
            data: { distInfo: personData, flag: true },
            autoFocus: false,
            width: '99%'
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
};
ApprovedDistrictComponent.ctorParameters = () => [
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], ApprovedDistrictComponent.prototype, "paginator2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], ApprovedDistrictComponent.prototype, "sort2", void 0);
ApprovedDistrictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-approved-districts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./views/approved-districts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/views/approved-districts.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./affiliation-requests.component.scss */ "./src/app/admin/affiliation-requests/affiliation-requests.component.scss")).default]
    })
], ApprovedDistrictComponent);

let RejectedAffiliationComponent = class RejectedAffiliationComponent {
    constructor(_service, _spinner, _dialog, _toastr) {
        this._service = _service;
        this._spinner = _spinner;
        this._dialog = _dialog;
        this._toastr = _toastr;
        this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns3 = ['index', 'districtName', 'member', 'approvedOn', 'status'];
        this.oldAffiliations = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.getOldAffiliations();
    }
    getOldAffiliations() {
        this.show_spinner();
        this._service.getOldAffiliations().subscribe(data => {
            this.oldAffiliations = data.map((item, index) => {
                return Object.assign({ id: item.payload.doc.id, index: index + 1 }, item.payload.doc.data());
            });
            this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.oldAffiliations);
            this.dataSource3.sort = this.sort3;
            this.dataSource3.paginator = this.paginator3;
            this.hide_spinner();
        });
    }
    getRegisteredDistrctInfo(personData) {
        this._dialog.open(DistrictApprovalDialog, {
            data: { distInfo: personData, flag: true },
            autoFocus: false,
            width: '99%'
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
};
RejectedAffiliationComponent.ctorParameters = () => [
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], RejectedAffiliationComponent.prototype, "paginator3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], RejectedAffiliationComponent.prototype, "sort3", void 0);
RejectedAffiliationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rejected-affiliation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./views/rejected-affiliation.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/views/rejected-affiliation.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./affiliation-requests.component.scss */ "./src/app/admin/affiliation-requests/affiliation-requests.component.scss")).default]
    })
], RejectedAffiliationComponent);



/***/ }),

/***/ "./src/app/admin/enquiries/enquiries.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/enquiries/enquiries.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#enquiries {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n#enquiries .badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW5xdWlyaWVzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hZG1pbi9lbnF1aXJpZXMvZW5xdWlyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9lbnF1aXJpZXMvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxhZG1pblxcZW5xdWlyaWVzXFxlbnF1aXJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTs7RUFFSSxZQUFBO0FDQ0o7QURFQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0hKO0FETUE7RUFDSSxtQkFBQTtBQ0hKO0FETUM7RUFDRyxnQkFBQTtBQ0hKO0FETUM7RUFDRyxtQkFBQTtBQ0hKO0FET0EsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEU0EsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEo7QURVQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFVBOztFQUVJLFlBQUE7QUNQSjtBRFVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUEo7QURXQTtFQUNJLDBDQUFBO0FDUko7QURXQTtFQUNJLHdCQUFBO0FDUko7QURZSTtFQUNJLDBCQUFBO0FDVFI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM5RUk7RUFDSSx5QkZTRztBQ3VFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VucXVpcmllcy9lbnF1aXJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jZW5xdWlyaWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4jZW5xdWlyaWVzIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNlbnF1aXJpZXMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgfVxyXG59Il19 */");

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");










let EnquiriesComponent = class EnquiriesComponent {
    constructor(_service, _spinner, _dialog, _toastr) {
        this._service = _service;
        this._spinner = _spinner;
        this._dialog = _dialog;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'name', 'email', 'mobile', 'message', 'action'];
        this.enquiries = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.showSpinner = true;
        this._spinner.show();
        this._service.getEnquiries().subscribe(data => {
            this.enquiries = data.map((item, index) => {
                return Object.assign({ id: item.payload.doc.id, index: index + 1 }, item.payload.doc.data());
            });
            this.dataSource.data = this.enquiries;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this._spinner.hide();
            this.showSpinner = false;
        });
    }
    deleteEnquiryById(id) {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to delete?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._service.deleteEnquiryById(id);
                this._toastr.info("Enquiry Deleted Successfully.");
            }
        });
    }
};
EnquiriesComponent.ctorParameters = () => [
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#events {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n#events .badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZXZlbnRzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hZG1pbi9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9ldmVudHMvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxhZG1pblxcZXZlbnRzXFxldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTs7RUFFSSxZQUFBO0FDQ0o7QURFQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0hKO0FETUE7RUFDSSxtQkFBQTtBQ0hKO0FETUM7RUFDRyxnQkFBQTtBQ0hKO0FETUM7RUFDRyxtQkFBQTtBQ0hKO0FET0EsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEU0EsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEo7QURVQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFVBOztFQUVJLFlBQUE7QUNQSjtBRFVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUEo7QURXQTtFQUNJLDBDQUFBO0FDUko7QURXQTtFQUNJLHdCQUFBO0FDUko7QURZSTtFQUNJLDBCQUFBO0FDVFI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM5RUk7RUFDSSx5QkZTRztBQ3VFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jZXZlbnRzIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4jZXZlbnRzIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNldmVudHMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/events/events.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/events/events.component.ts ***!
  \**************************************************/
/*! exports provided: EventsComponent, CreateEventDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventDialog", function() { return CreateEventDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");












let EventsComponent = class EventsComponent {
    constructor(_dialog, _service, _spinner, _toastr) {
        this._dialog = _dialog;
        this._service = _service;
        this._spinner = _spinner;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'eventTitle', 'eventDate', 'status', 'actions'];
        this.eventData = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.getAllEvents();
    }
    getAllEvents() {
        this.showSpinner = true;
        this._spinner.show();
        this._service.getAllEvents().subscribe(data => {
            this.eventData = data.map((item, index) => {
                return Object.assign({ id: item.payload.doc.id, index: index + 1 }, item.payload.doc.data());
            });
            this.dataSource.data = this.validateDelete(this.eventData);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.showSpinner = false;
            this._spinner.hide();
        });
    }
    validateDelete(eventData) {
        eventData.forEach(item => {
            item.isDelete = true;
            let eventDate = new Date(item.eventDate);
            let currentDate = new Date();
            if (eventDate < currentDate) {
                item.isDelete = false;
            }
        });
        return eventData;
    }
    createEvent() {
        this._dialog.open(CreateEventDialog, {
            autoFocus: false,
            width: '60%'
        });
    }
    deleteEventById(id, isDelete) {
        if (!isDelete) {
            return;
        }
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to delete?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._service.deleteEventById(id);
                this._toastr.info("Event Deleted Successfully.");
            }
        });
    }
    editEvent(event) {
        this._dialog.open(CreateEventDialog, {
            autoFocus: false,
            width: '99%',
            data: event
        });
    }
};
EventsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: false })
], EventsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: false })
], EventsComponent.prototype, "sort", void 0);
EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events.component.scss */ "./src/app/admin/events/events.component.scss")).default]
    })
], EventsComponent);

let CreateEventDialog = class CreateEventDialog {
    constructor(_dialogRef, _service, formBuilder, _toastr, utility, data) {
        this._dialogRef = _dialogRef;
        this._service = _service;
        this.formBuilder = formBuilder;
        this._toastr = _toastr;
        this.utility = utility;
        this.data = data;
        this.isEdit = false;
        _dialogRef.disableClose = true;
        this.eventData = data;
    }
    ngOnInit() {
        this.eventForm = this.formBuilder.group({
            eventTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            eventAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            eventDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            contactPersons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            contactNumbers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        if (this.eventData) {
            this.eventForm.setValue({
                eventTitle: this.eventData.eventTitle,
                eventAddress: this.eventData.eventAddress,
                eventDate: this.eventData.eventDate,
                contactPersons: this.eventData.contactPersons,
                contactNumbers: this.eventData.contactNumbers,
                status: this.eventData.status
            });
            this.isEdit = true;
        }
    }
    close() {
        this._dialogRef.close();
    }
    createEvent() {
        if (this.eventForm.invalid) {
            return;
        }
        let formData = this.eventForm.value;
        formData['createdDate'] = this.utility.convertDateToEPOC(new Date());
        this._service.createEvent(formData);
        this._toastr.success("Event Created Successfully.");
        this.close();
    }
    updateEvent() {
        if (this.eventForm.invalid) {
            return;
        }
        if (this.eventData.isDelete) {
            this._service.updateEventById(this.eventData.id, this.eventForm.value);
        }
        else {
            this._service.updateEventStatusById(this.eventData.id, this.eventForm.get('status').value);
        }
        this._toastr.success("Event Updated Successfully.");
        this.close();
    }
};
CreateEventDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
CreateEventDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'create-event-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialogs/create-event.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/dialogs/create-event.html")).default,
        styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }\n  .mat-dialog-container {\n    margin-top: 100px !important;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], CreateEventDialog);



/***/ }),

/***/ "./src/app/admin/match-event-results/match-event-results.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/match-event-results/match-event-results.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#match {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n#match .badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWF0Y2gtZXZlbnQtcmVzdWx0cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYWRtaW4vbWF0Y2gtZXZlbnQtcmVzdWx0cy9tYXRjaC1ldmVudC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9tYXRjaC1ldmVudC1yZXN1bHRzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcYWRtaW5cXG1hdGNoLWV2ZW50LXJlc3VsdHNcXG1hdGNoLWV2ZW50LXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTs7RUFFSSxZQUFBO0FDQ0o7QURFQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0hKO0FETUE7RUFDSSxtQkFBQTtBQ0hKO0FETUM7RUFDRyxnQkFBQTtBQ0hKO0FETUM7RUFDRyxtQkFBQTtBQ0hKO0FET0EsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEU0EsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEo7QURVQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFVBOztFQUVJLFlBQUE7QUNQSjtBRFVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUEo7QURXQTtFQUNJLDBDQUFBO0FDUko7QURXQTtFQUNJLHdCQUFBO0FDUko7QURZSTtFQUNJLDBCQUFBO0FDVFI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM5RUk7RUFDSSx5QkZTRztBQ3VFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hdGNoLWV2ZW50LXJlc3VsdHMvbWF0Y2gtZXZlbnQtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiR0aC1jb2xvcjogI2ZmOGIyMztcclxuJHRoLWNvbG9yLWRhcms6ICNmZjM2MDA7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG59XHJcblxyXG5cclxuLyogVGhlbWUtQ29sb3JzICovXHJcblxyXG4uYmctb2Zmd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjNmNTtcclxufVxyXG5cclxuLnNsaW5nLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBMb2dvLVRleHQgKi9cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBkaWFsb2cgY3NzXHJcbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHtcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLnNsaW5nLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbiNtYXRjaCB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuI21hdGNoIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNtYXRjaCB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgLmJhZGdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/match-event-results/match-event-results.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/match-event-results/match-event-results.component.ts ***!
  \****************************************************************************/
/*! exports provided: MatchEventResultsComponent, MatchResultsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchEventResultsComponent", function() { return MatchEventResultsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchResultsDialog", function() { return MatchResultsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");
/* harmony import */ var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var src_app_shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/modal-data.service */ "./src/app/shared/services/modal-data.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");














let MatchEventResultsComponent = class MatchEventResultsComponent {
    constructor(_dialog, _service, _spinner, _toastr) {
        this._dialog = _dialog;
        this._service = _service;
        this._spinner = _spinner;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'eventName', 'candidateName', 'district', 'score', 'rank', 'action'];
        this.results = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.getAllResultRecords();
    }
    getAllResultRecords() {
        this._service.getAllMatchResults().subscribe(data => {
            this.results = data.map((item, index) => {
                return Object.assign({ id: item.payload.doc.id, index: index + 1 }, item.payload.doc.data());
            });
            this.dataSource.data = this.results;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
    }
    addMatchRecord() {
        this._dialog.open(MatchResultsDialog, {
            autoFocus: false,
            width: '99%'
        });
    }
    editMatchResult(resultData) {
        this._dialog.open(MatchResultsDialog, {
            autoFocus: false,
            width: '99%',
            data: resultData
        });
    }
    deleteResultById(id) {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to delete?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._service.deleteMatchResultById(id);
                this._toastr.info("Result Deleted Successfully.");
            }
        });
    }
};
MatchEventResultsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: false })
], MatchEventResultsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: false })
], MatchEventResultsComponent.prototype, "sort", void 0);
MatchEventResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-match-event-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./match-event-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./match-event-results.component.scss */ "./src/app/admin/match-event-results/match-event-results.component.scss")).default]
    })
], MatchEventResultsComponent);

let MatchResultsDialog = class MatchResultsDialog {
    constructor(_dialogRef, formBuilder, _toastr, _service, _utility, _modalService, _mdIconRegistry, data) {
        this._dialogRef = _dialogRef;
        this.formBuilder = formBuilder;
        this._toastr = _toastr;
        this._service = _service;
        this._utility = _utility;
        this._modalService = _modalService;
        this._mdIconRegistry = _mdIconRegistry;
        this.data = data;
        this.allDistricts = [];
        this.allEvents = [];
        this.isEdit = false;
        this.ageCategory = [];
        this._dialogRef.disableClose = true;
        this.resultData = data;
        this._mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    ngOnInit() {
        this.resultForm = this.formBuilder.group({
            eventId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            candidateName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            candidateDistrict: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            candidateDOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            candidateCertificateNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            candidateRank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            candidateScore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ageCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this._service.getAllDistricts().subscribe(data => {
            data.map(item => { this.allDistricts.push(item.payload.doc.data()); });
        });
        this.getAllEvents();
        this.ageCategory = this._modalService.getSlingshotCategories();
        if (this.resultData) {
            this.resultForm.setValue({
                eventId: this.resultData.eventInfo.id,
                candidateName: this.resultData.name,
                candidateDistrict: this.resultData.district,
                candidateDOB: this.resultData.dateOfBirth,
                candidateCertificateNo: this.resultData.certificateNo,
                candidateRank: this.resultData.rank,
                candidateScore: this.resultData.score,
                ageCategory: this.resultData.ageCategory
            });
            this.isEdit = true;
            this.selectedEvent = this.resultData.eventInfo;
        }
    }
    getData(formData) {
        return {
            eventInfo: Object.assign({}, this.selectedEvent),
            name: formData.candidateName,
            district: formData.candidateDistrict,
            dateOfBirth: formData.candidateDOB,
            certificateNo: formData.candidateCertificateNo,
            ageCategory: formData.ageCategory,
            rank: formData.candidateRank,
            score: formData.candidateScore
        };
    }
    getAllEvents() {
        this._service.getAllEvents().subscribe(data => {
            this.allEvents = data.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
    onEventChange() {
        this.allEvents.forEach(item => {
            if (item.id === this.event.nativeElement.value) {
                this.selectedEvent = item;
            }
        });
    }
    close() {
        this._dialogRef.close();
    }
    addResult() {
        if (this.resultForm.invalid) {
            return;
        }
        this._service.addMatchResults(Object.assign({}, this.getData(this.resultForm.value), { createdDate: this._utility.convertDateToEPOC(new Date()) }));
        this._toastr.success("Result Added Successfully.");
        this.close();
    }
    updateResult() {
        if (this.resultForm.invalid) {
            return;
        }
        this._service.updateMatchResults(this.resultData.id, this.getData(this.resultForm.value));
        this._toastr.success("Result Updated Successfully.");
        this.close();
    }
};
MatchResultsDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__["SlingshotService"] },
    { type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: src_app_shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_12__["ModalDataService"] },
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconRegistry"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('event', { static: false })
], MatchResultsDialog.prototype, "event", void 0);
MatchResultsDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'results-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialogs/results-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/dialogs/results-dialog.html")).default,
        styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }\n  .mat-dialog-container {\n    margin-top: 100px !important;\n  }\n  .w-box {\n    width: 50px;\n    height: 50px;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], MatchResultsDialog);



/***/ }),

/***/ "./src/app/admin/refree-panel/refree-panel.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/refree-panel/refree-panel.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#refree-panel {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n#refree-panel .badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVmcmVlLXBhbmVsL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hZG1pbi9yZWZyZWUtcGFuZWwvcmVmcmVlLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9yZWZyZWUtcGFuZWwvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxhZG1pblxccmVmcmVlLXBhbmVsXFxyZWZyZWUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTs7RUFFSSxZQUFBO0FDQ0o7QURFQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQ0o7QURHQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0hKO0FETUE7RUFDSSxtQkFBQTtBQ0hKO0FETUM7RUFDRyxnQkFBQTtBQ0hKO0FETUM7RUFDRyxtQkFBQTtBQ0hKO0FET0EsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEU0EsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEo7QURVQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFVBOztFQUVJLFlBQUE7QUNQSjtBRFVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUEo7QURXQTtFQUNJLDBDQUFBO0FDUko7QURXQTtFQUNJLHdCQUFBO0FDUko7QURZSTtFQUNJLDBCQUFBO0FDVFI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM5RUk7RUFDSSx5QkZTRztBQ3VFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZnJlZS1wYW5lbC9yZWZyZWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jcmVmcmVlLXBhbmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4jcmVmcmVlLXBhbmVsIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNyZWZyZWUtcGFuZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/refree-panel/refree-panel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/refree-panel/refree-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: RefreePanelComponent, AddRefreeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreePanelComponent", function() { return RefreePanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRefreeDialog", function() { return AddRefreeDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");












let RefreePanelComponent = class RefreePanelComponent {
    constructor(_dialog, _service, _spinner, _toastr) {
        this._dialog = _dialog;
        this._service = _service;
        this._spinner = _spinner;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'name', 'email', 'mobile', 'district', 'actions'];
        this.refreeData = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this._showSpinner();
        this._service.getAllRefrees().subscribe(data => {
            this.refreeData = data.map((item, index) => {
                return Object.assign({ id: item.payload.doc.id, index: index + 1, name: item.payload.doc.data().firstName + ' ' + item.payload.doc.data().middleName + ' ' + item.payload.doc.data().lastName }, item.payload.doc.data());
            });
            this.dataSource.data = this.refreeData;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this._hideSpinner();
        });
    }
    addRefree() {
        this._dialog.open(AddRefreeDialog, {
            autoFocus: false,
            width: '99%'
        });
    }
    editRefree(refreeData) {
        this._dialog.open(AddRefreeDialog, {
            autoFocus: false,
            width: '99%',
            data: refreeData
        });
    }
    deleteRefree(id) {
        let dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], {
            data: { message: 'Do you want to delete?', type: 'confirm' },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._service.deleteRefreeById(id);
                this._toastr.info("Refree Deleted Successfully.");
            }
        });
    }
    _showSpinner() {
        this._spinner.show();
        this.showSpinner = true;
    }
    _hideSpinner() {
        this.showSpinner = false;
        this._spinner.hide();
    }
};
RefreePanelComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], RefreePanelComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], RefreePanelComponent.prototype, "sort", void 0);
RefreePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refree-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./refree-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/refree-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./refree-panel.component.scss */ "./src/app/admin/refree-panel/refree-panel.component.scss")).default]
    })
], RefreePanelComponent);

let AddRefreeDialog = class AddRefreeDialog {
    constructor(_dialogRef, _service, formBuilder, utility, _toastr, data) {
        this._dialogRef = _dialogRef;
        this._service = _service;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this._toastr = _toastr;
        this.data = data;
        this.isEdit = false;
        this.allDistricts = [];
        _dialogRef.disableClose = true;
        this.refreeData = data;
    }
    ngOnInit() {
        this.refreeForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(/\d{10}/)]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(/\d{6}/)]],
            aadhaarNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(/\d{12}/)]]
        });
        if (this.refreeData) {
            this.refreeForm.setValue({
                firstName: this.refreeData.firstName,
                middleName: this.refreeData.middleName,
                lastName: this.refreeData.lastName,
                email: this.refreeData.email,
                mobile: this.refreeData.mobile,
                address: this.refreeData.address,
                city: this.refreeData.city,
                district: this.refreeData.district,
                pin: this.refreeData.pin,
                aadhaarNo: this.refreeData.aadhaarNo,
                dateOfBirth: this.refreeData.dateOfBirth
            });
            this.isEdit = true;
        }
        this._service.getAllDistricts().subscribe(data => {
            data.map(item => { this.allDistricts.push(item.payload.doc.data()); });
        });
    }
    close() {
        this._dialogRef.close();
    }
    addRefree() {
        if (this.refreeForm.invalid) {
            return;
        }
        let formData = this.refreeForm.value;
        formData['createdDate'] = this.utility.convertDateToEPOC(new Date());
        this._service.addRefree(formData);
        this._toastr.success("Refree Added Successfully.");
        this.close();
    }
    updateRefree() {
        if (this.refreeForm.invalid) {
            return;
        }
        this._service.updateRefreeById(this.refreeData.id, this.refreeForm.value);
        this._toastr.success("Refree Updated Successfully.");
        this.close();
    }
};
AddRefreeDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__["SlingshotService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
AddRefreeDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-refree-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialogs/add-refree-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/dialogs/add-refree-dialog.html")).default,
        styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }\n  .mat-dialog-container {\n    margin-top: 100px !important;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], AddRefreeDialog);



/***/ }),

/***/ "./src/app/affliation/affliation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/affliation/affliation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n::-webkit-scrollbar {\n  width: 3px;\n}\n.action-button {\n  display: inline-block;\n  padding: 8px 30px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.img-area img {\n  width: 100%;\n}\n.fa-caret-down {\n  font-size: 20px;\n}\n#affiliation-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 130px;\n}\n#affiliation-sec .head-sec h2,\n#affiliation-sec .dist-info h2 {\n  font-family: \"Righteous\";\n}\n#affiliation-sec .head-sec .text-muted {\n  font-size: 20px;\n}\n#affiliation-sec .card .card-text {\n  display: none;\n}\n#affiliation-sec .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#affiliation-sec .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#affiliation-sec .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#affiliation-sec .card:hover {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#affiliation-sec .card:hover .card-title {\n  color: #ff8b23;\n}\n#affiliation-sec .search-sec .searchbar {\n  margin-bottom: auto;\n  margin-top: auto;\n  height: 45px;\n  background-color: #353b48;\n  border-radius: 30px;\n  padding: 3px;\n}\n#affiliation-sec .search-sec .search_input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  caret-color: transparent;\n  line-height: 40px;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n#affiliation-sec .search-sec .searchbar:hover > .search_input {\n  padding: 0 10px;\n  width: 300px;\n  caret-color: red;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n#affiliation-sec .search-sec .searchbar:hover > .search_icon {\n  background: white;\n  color: #ff8b23;\n}\n#affiliation-sec .search-sec .search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  color: white;\n  text-decoration: none;\n}\n#affiliation-sec .dist-sec {\n  width: 100%;\n  max-height: 300px;\n  padding-left: 30px;\n  overflow: hidden;\n}\n#affiliation-sec .dist-sec:hover {\n  overflow-y: scroll;\n}\n#affiliation-sec .dist-info .social-icons i {\n  padding: 10px;\n}\n#affiliation-sec .dist-info .social-icons i:hover {\n  color: #e74c3c;\n}\n#affiliation-sec .dist-info.jumbotron {\n  margin: 70px 30px 70px 30px;\n}\n@media only screen and (max-width: 768px) {\n  #affiliation-sec .search-sec .searchbar:hover > .search_input {\n    width: 250px;\n  }\n  #affiliation-sec .dist-info .card {\n    margin-top: 30px;\n  }\n  #affiliation-sec .dist-info.jumbotron {\n    margin: 30px 0px 70px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWZmbGlhdGlvbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYWZmbGlhdGlvbi9hZmZsaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZmZsaWF0aW9uL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcYWZmbGlhdGlvblxcYWZmbGlhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzVFQTtFQUNJLFVBQUE7QUQrRUo7QUM1RUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJGT087RUVOUCxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRCtFSjtBQzVFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRCtFSjtBQzlFSTtFQUNJLFdBQUE7QURnRlI7QUM1RUE7RUFDSSxlQUFBO0FEK0VKO0FDNUVBO0VBQ0ksd0NBQUE7RUFDQSxpQkFBQTtBRCtFSjtBQzlFSTs7RUFFSSx3QkFBQTtBRGdGUjtBQzlFSTtFQUNJLGVBQUE7QURnRlI7QUM5RUk7RUFDSSxhQUFBO0FEZ0ZSO0FDOUVJO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRGdGUjtBQy9FUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkZqREQ7RUVrREMsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBRGlGWjtBQy9FUTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FEaUZaO0FDOUVJO0VBQ0ksZUFBQTtFQUNBLHdEQUFBO0FEZ0ZSO0FDL0VRO0VBQ0ksY0ZuRUQ7QUNvSlg7QUM3RVE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEK0VaO0FDN0VRO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QUQrRVo7QUM3RVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBRCtFWjtBQzdFUTtFQUNJLGlCQUFBO0VBQ0EsY0ZqR0Q7QUNnTFg7QUM3RVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FEK0VaO0FDNUVJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDhFUjtBQzdFUTtFQUNJLGtCQUFBO0FEK0VaO0FDM0VRO0VBQ0ksYUFBQTtBRDZFWjtBQzVFWTtFQUNJLGNBQUE7QUQ4RWhCO0FDM0VRO0VBQ0ksMkJBQUE7QUQ2RVo7QUN4RUE7RUFJWTtJQUNJLFlBQUE7RUR3RWQ7RUNwRVU7SUFDSSxnQkFBQTtFRHNFZDtFQ3BFVTtJQUNJLHlCQUFBO0VEc0VkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZmZsaWF0aW9uL2FmZmxpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDNweDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmRjYjllO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pbWctYXJlYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mYS1jYXJldC1kb3duIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jYWZmaWxpYXRpb24tc2VjIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmhlYWQtc2VjIGgyLFxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5oZWFkLXNlYyAudGV4dC1tdXRlZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQgLmNhcmQtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgaGVpZ2h0OiA0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZDpob3ZlcjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZDpob3ZlciAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmY4YjIzO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYjQ4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hfaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pbnB1dCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBjYXJldC1jb2xvcjogcmVkO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaF9pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3Qtc2VjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jYWZmaWxpYXRpb24tc2VjIC5kaXN0LXNlYzpob3ZlciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyAuc29jaWFsLWljb25zIGkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvIC5zb2NpYWwtaWNvbnMgaTpob3ZlciB7XG4gIGNvbG9yOiAjZTc0YzNjO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvLmp1bWJvdHJvbiB7XG4gIG1hcmdpbjogNzBweCAzMHB4IDcwcHggMzBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2lucHV0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvIC5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gICNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mby5qdW1ib3Ryb24ge1xuICAgIG1hcmdpbjogMzBweCAwcHggNzBweCAwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pbWctYXJlYSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmEtY2FyZXQtZG93biB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNhZmZpbGlhdGlvbi1zZWMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgLmhlYWQtc2VjIGgyLFxyXG4gICAgLmRpc3QtaW5mbyBoMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCJcclxuICAgIH1cclxuICAgIC5oZWFkLXNlYyAudGV4dC1tdXRlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIC4xNSkhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXNlYyB7XHJcbiAgICAgICAgLnNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2I0ODtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoX2lucHV0IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaGJhcjpob3Zlcj4uc2VhcmNoX2lucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGNhcmV0LWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoYmFyOmhvdmVyPi5zZWFyY2hfaWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoX2ljb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXN0LXNlYyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGlzdC1pbmZvIHtcclxuICAgICAgICAuc29jaWFsLWljb25zIGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuanVtYm90cm9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA3MHB4IDMwcHggNzBweCAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAjYWZmaWxpYXRpb24tc2VjIHtcclxuICAgICAgICAuc2VhcmNoLXNlYyB7XHJcbiAgICAgICAgICAgIC5zZWFyY2hiYXI6aG92ZXI+LnNlYXJjaF9pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc3QtaW5mbyB7XHJcbiAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4IDcwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

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
        this.registeredDistrictsList = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.selectedDistrictInfo = {
            approvedOn: '',
            requestedDistrict: { id: '', name: '' },
            members: [{ firstName: '', middleName: '', lastName: '', email: '', mobile: '', role: ' ' }]
        };
        this.getRegisteredDistrictList();
        window.scrollTo(0, 0);
    }
    getRegisteredDistrictList() {
        this.spinnerShow();
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
            this.selectedDistrictInfo = config.payload.data();
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
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/guards/login.guard */ "./src/app/shared/guards/login.guard.ts");
/* harmony import */ var _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/refree-panel/refree-panel.component */ "./src/app/admin/refree-panel/refree-panel.component.ts");
/* harmony import */ var _committee_committee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./committee/committee.component */ "./src/app/committee/committee.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");





















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
        canActivate: [_shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_17__["LoginGuard"]]
    },
    {
        path: 'committee',
        component: _committee_committee_component__WEBPACK_IMPORTED_MODULE_19__["CommitteeComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'requests', pathMatch: 'full' },
            { path: 'requests', component: _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_12__["AffiliationRequestsComponent"] },
            { path: 'events', component: _admin_events_events_component__WEBPACK_IMPORTED_MODULE_13__["EventsComponent"] },
            { path: 'match', component: _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_15__["MatchEventResultsComponent"] },
            { path: 'enquiries', component: _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_14__["EnquiriesComponent"] },
            { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_20__["SupportComponent"] },
            { path: 'refree', component: _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_18__["RefreePanelComponent"] }
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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/refree-panel/refree-panel.component */ "./src/app/admin/refree-panel/refree-panel.component.ts");
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/components/spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");
/* harmony import */ var _committee_committee_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./committee/committee.component */ "./src/app/committee/committee.component.ts");
/* harmony import */ var _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./score-board/score-board.component */ "./src/app/score-board/score-board.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");












































const APP_DIALOGS = [
    //dialogs
    _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["DistrictApprovalDialog"],
    _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_38__["ConfirmDialogComponent"],
    _admin_events_events_component__WEBPACK_IMPORTED_MODULE_26__["CreateEventDialog"],
    _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_39__["AddRefreeDialog"],
    _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_28__["MatchResultsDialog"],
    //child components
    _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["ApprovedDistrictComponent"],
    _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["RejectedAffiliationComponent"]
];
const MATERIAL_MODULES = [
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__["MatDatepickerModule"]
];
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
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
            _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["AffiliationRequestsComponent"],
            _admin_events_events_component__WEBPACK_IMPORTED_MODULE_26__["EventsComponent"],
            _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_27__["EnquiriesComponent"],
            _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_28__["MatchEventResultsComponent"],
            _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_39__["RefreePanelComponent"],
            ...APP_DIALOGS,
            _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_40__["SpinnerComponent"],
            _committee_committee_component__WEBPACK_IMPORTED_MODULE_41__["CommitteeComponent"],
            _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_42__["ScoreBoardComponent"],
            _support_support_component__WEBPACK_IMPORTED_MODULE_43__["SupportComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_30__["ToastrModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_35__["NgxSpinnerModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_29__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            ...MATERIAL_MODULES
        ],
        entryComponents: APP_DIALOGS,
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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#association {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#association .jumbotron {\n  margin-bottom: 0 !important;\n  padding-bottom: 150px !important;\n}\n#association .dist-area {\n  border-radius: 0rem;\n}\n#association .title {\n  font-family: \"Righteous\", cursive;\n}\n#association .form-area {\n  padding: 100px;\n  padding-top: 0px !important;\n}\n#association #regForm {\n  border: 1px solid gray;\n  padding: 50px;\n}\n#association .reg-button,\n#association .act-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n#association .spinner-area {\n  background-color: #e9ecef;\n}\n#association input, #association select {\n  height: 50px;\n}\n@media only screen and (max-width: 768px) {\n  #association .form-area {\n    padding: 10px;\n  }\n  #association #regForm {\n    padding: 20px;\n  }\n  #association .reg-title {\n    font-size: 1.2rem !important;\n  }\n  #association .reg-button {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzb2NpYXRpb24vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2Fzc29jaWF0aW9uL2Fzc29jaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hc3NvY2lhdGlvbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFzc29jaWF0aW9uXFxhc3NvY2lhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzVFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7QUQrRUo7QUM5RUk7RUFDSSwyQkFBQTtFQUNBLGdDQUFBO0FEZ0ZSO0FDOUVJO0VBQ0ksbUJBQUE7QURnRlI7QUM5RUk7RUFDSSxpQ0FBQTtBRGdGUjtBQzlFSTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtBRGdGUjtBQzlFSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtBRGdGUjtBQzlFSTs7RUFFSSx5QkZURztFRVVILFdBQUE7QURnRlI7QUM5RUk7RUFDSSx5QkFBQTtBRGdGUjtBQzlFSTtFQUNJLFlBQUE7QURnRlI7QUM1RUE7RUFHUTtJQUNJLGFBQUE7RUQ2RVY7RUMzRU07SUFDSSxhQUFBO0VENkVWO0VDM0VNO0lBQ0ksNEJBQUE7RUQ2RVY7RUMzRU07SUFDSSxxQkFBQTtFRDZFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXNzb2NpYXRpb24vYXNzb2NpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jYXNzb2NpYXRpb24ge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4jYXNzb2NpYXRpb24gLmp1bWJvdHJvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG4jYXNzb2NpYXRpb24gLmRpc3QtYXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDByZW07XG59XG4jYXNzb2NpYXRpb24gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG59XG4jYXNzb2NpYXRpb24gLmZvcm0tYXJlYSB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4jYXNzb2NpYXRpb24gI3JlZ0Zvcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuI2Fzc29jaWF0aW9uIC5yZWctYnV0dG9uLFxuI2Fzc29jaWF0aW9uIC5hY3QtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG4jYXNzb2NpYXRpb24gLnNwaW5uZXItYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG4jYXNzb2NpYXRpb24gaW5wdXQsICNhc3NvY2lhdGlvbiBzZWxlY3Qge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2Fzc29jaWF0aW9uIC5mb3JtLWFyZWEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgI2Fzc29jaWF0aW9uICNyZWdGb3JtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gICNhc3NvY2lhdGlvbiAucmVnLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICB9XG4gICNhc3NvY2lhdGlvbiAucmVnLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNhc3NvY2lhdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRpc3QtYXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjcmVnRm9ybSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZy1idXR0b24sXHJcbiAgICAuYWN0LWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLnNwaW5uZXItYXJlYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIH1cclxuICAgIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlc1xyXG4gICAgI2Fzc29jaWF0aW9uIHtcclxuICAgICAgICAuZm9ybS1hcmVhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3JlZ0Zvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVnLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZy1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");










let AssociationComponent = class AssociationComponent {
    constructor(slingshotService, formBuilder, auth, dialog, router, utility, _spinner) {
        this.slingshotService = slingshotService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.dialog = dialog;
        this.router = router;
        this.utility = utility;
        this._spinner = _spinner;
        this.showForm = false;
        this.disabledRegBtn = true;
        this.availableDistricts = [];
        this.allDistricts = [];
        this.isChecked = false;
        this.showSpinner = false;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
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
            // password: ['', [Validators.required, Validators.minLength(8)]],
            // confirmPassword: ['', Validators.required],
            file1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // {
        //   validator: ConfirmPasswordValidator.MatchPassword
        // });
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
        this.availableDistricts.forEach(dist => { if (dist.id === id) {
            this.selectedDistrict = dist;
        } });
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
        let dialogRef = this.dialog.open(_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
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
    prepareFormData(data) {
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
            createdDate: this.utility.convertDateToEPOC(new Date()),
            modifiedBy: '',
            status: 'Pending'
        };
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
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
AssociationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-association',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./association.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/association/association.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./association.component.scss */ "./src/app/association/association.component.scss")).default]
    })
], AssociationComponent);



/***/ }),

/***/ "./src/app/committee/committee.component.scss":
/*!****************************************************!*\
  !*** ./src/app/committee/committee.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#committee {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#committee .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#committee .referee-table > tr:hover .referee-name {\n  color: #17a2b8;\n}\n#committee .pointer {\n  cursor: pointer;\n}\n@media only screen and (max-width: 768px) {\n  .page-title {\n    font-size: 1.2rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWl0dGVlL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcY29tbWl0dGVlXFxjb21taXR0ZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1pdHRlZS9jb21taXR0ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUo7QURDSTtFQUNFLGNBQUE7QUNDTjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FES0E7RUFFRTtJQUNFLDRCQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1pdHRlZS9jb21taXR0ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29tbWl0dGVlIHtcclxuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICAuanVtYm90cm9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMGVtO1xyXG4gIH1cclxuICAucmVmZXJlZS10YWJsZSA+IHRyOmhvdmVyIHtcclxuICAgIC5yZWZlcmVlLW5hbWUge1xyXG4gICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvL21vYmlsZSBkZXZpY2VcclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIjY29tbWl0dGVlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2NvbW1pdHRlZSAuanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyNSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMGVtO1xufVxuI2NvbW1pdHRlZSAucmVmZXJlZS10YWJsZSA+IHRyOmhvdmVyIC5yZWZlcmVlLW5hbWUge1xuICBjb2xvcjogIzE3YTJiODtcbn1cbiNjb21taXR0ZWUgLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/committee/committee.component.ts":
/*!**************************************************!*\
  !*** ./src/app/committee/committee.component.ts ***!
  \**************************************************/
/*! exports provided: CommitteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteeComponent", function() { return CommitteeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/modal-data.service */ "./src/app/shared/services/modal-data.service.ts");
/* harmony import */ var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");




let CommitteeComponent = class CommitteeComponent {
    constructor(dataModal, _service) {
        this.dataModal = dataModal;
        this._service = _service;
        this.members = [];
        this.referees = [];
        this.committee = [];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.members = this.dataModal.getAssociationMembers();
        this.committee = this.dataModal.getAllCommitte();
        console.log(this.committee);
        this._service.getAllRefrees().subscribe(data => {
            this.referees = data.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
};
CommitteeComponent.ctorParameters = () => [
    { type: _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_2__["ModalDataService"] },
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"] }
];
CommitteeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-committee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./committee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./committee.component.scss */ "./src/app/committee/committee.component.scss")).default]
    })
], CommitteeComponent);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n.action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n  border-radius: 0em !important;\n}\n#contact-us, #contact-us1, #contact-us2 {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#contact-us .jumbotron, #contact-us1 .jumbotron, #contact-us2 .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#contact-us .img-area, #contact-us1 .img-area, #contact-us2 .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#contact-us .img-area img, #contact-us1 .img-area img, #contact-us2 .img-area img {\n  width: 100%;\n}\n#contact-us .social-icons i, #contact-us1 .social-icons i, #contact-us2 .social-icons i {\n  padding: 10px;\n}\n#contact-us .social-icons i:hover, #contact-us1 .social-icons i:hover, #contact-us2 .social-icons i:hover {\n  color: #ff8b23;\n}\n#contact-us .association-info h2, #contact-us1 .association-info h2, #contact-us2 .association-info h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .association-info i, #contact-us1 .association-info i, #contact-us2 .association-info i {\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 50%;\n  text-align: center;\n  background: #1b1919;\n  margin-right: 15px;\n  width: 60px;\n  color: #fff;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#contact-us .association-info p, #contact-us1 .association-info p, #contact-us2 .association-info p {\n  font-size: 20px;\n  margin-top: 20px;\n}\n#contact-us .user-info h2, #contact-us1 .user-info h2, #contact-us2 .user-info h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .user-info .card, #contact-us1 .user-info .card, #contact-us2 .user-info .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#contact-us .user-info .card:before, #contact-us1 .user-info .card:before, #contact-us2 .user-info .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#contact-us .user-info .card:hover:before, #contact-us1 .user-info .card:hover:before, #contact-us2 .user-info .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#contact-us .user-info .card:hover, #contact-us1 .user-info .card:hover, #contact-us2 .user-info .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#contact-us .user-info .card:hover .member-name, #contact-us1 .user-info .card:hover .member-name, #contact-us2 .user-info .card:hover .member-name {\n  color: #ff8b23;\n}\n#contact-us .contact-form, #contact-us1 .contact-form, #contact-us2 .contact-form {\n  margin-top: 80px !important;\n}\n#contact-us .contact-form h2, #contact-us1 .contact-form h2, #contact-us2 .contact-form h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .contact-form .field, #contact-us1 .contact-form .field, #contact-us2 .contact-form .field {\n  height: 50px;\n}\n#contact-us .contact-form .field,\n#contact-us .contact-form textarea, #contact-us1 .contact-form .field,\n#contact-us1 .contact-form textarea, #contact-us2 .contact-form .field,\n#contact-us2 .contact-form textarea {\n  border-radius: 0em;\n}\n#contact-us .contact-form .field:hover,\n#contact-us .contact-form textarea:hover,\n#contact-us .contact-form .action-button:hover, #contact-us1 .contact-form .field:hover,\n#contact-us1 .contact-form textarea:hover,\n#contact-us1 .contact-form .action-button:hover, #contact-us2 .contact-form .field:hover,\n#contact-us2 .contact-form textarea:hover,\n#contact-us2 .contact-form .action-button:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;\n}\n#contact-us .contact-form .map, #contact-us1 .contact-form .map, #contact-us2 .contact-form .map {\n  border-radius: 0.3em;\n}\n@media only screen and (max-width: 768px) {\n  #contact-us .user-info .card, #contact-us1 .user-info .card, #contact-us2 .user-info .card {\n    margin-top: 20px;\n  }\n  #contact-us .card-col, #contact-us1 .card-col, #contact-us2 .card-col {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  #contact-us .contactForm, #contact-us1 .contactForm, #contact-us2 .contactForm {\n    margin-top: 50px;\n  }\n  #contact-us .contact-form, #contact-us1 .contact-form, #contact-us2 .contact-form {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LXVzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcY29udGFjdC11c1xcY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzVFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZXUztFRVZULGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FEK0VGO0FDNUVBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtBRCtFRjtBQzlFRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEZ0ZKO0FDOUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEZ0ZKO0FDL0VJO0VBQ0UsV0FBQTtBRGlGTjtBQzlFRTtFQUNFLGFBQUE7QURnRko7QUM5RUU7RUFDRSxjRnZCTztBQ3VHWDtBQzdFSTtFQUNFLHdCQUFBO0FEK0VOO0FDN0VJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7QUQrRU47QUM3RUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUQrRU47QUMzRUk7RUFDRSx3QkFBQTtBRDZFTjtBQzNFSTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQ2RU47QUM1RU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJGakVHO0VFa0VILFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0NBQUE7QUQ4RVI7QUM1RU07RUFDRSxPQUFBO0VBQ0EsUUFBQTtBRDhFUjtBQzVFTTtFQUNFLHdEQUFBO0FEOEVSO0FDN0VRO0VBQ0UsY0ZqRkM7QUNnS1g7QUMxRUU7RUFDRSwyQkFBQTtBRDRFSjtBQzNFSTtFQUNFLHdCQUFBO0FENkVOO0FDM0VJO0VBQ0UsWUFBQTtBRDZFTjtBQzNFSTs7OztFQUVFLGtCQUFBO0FEK0VOO0FDN0VJOzs7Ozs7O0VBR0UsdURBQUE7QURtRk47QUNqRkk7RUFDRSxvQkFBQTtBRG1GTjtBQzlFQTtFQUlNO0lBQ0UsZ0JBQUE7RUQ4RU47RUMzRUU7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VENkVKO0VDM0VFO0lBQ0UsZ0JBQUE7RUQ2RUo7RUMzRUU7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VENkVKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMGVtICFpbXBvcnRhbnQ7XG59XG5cbiNjb250YWN0LXVzLCAjY29udGFjdC11czEsICNjb250YWN0LXVzMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbiNjb250YWN0LXVzIC5qdW1ib3Ryb24sICNjb250YWN0LXVzMSAuanVtYm90cm9uLCAjY29udGFjdC11czIgLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn1cbiNjb250YWN0LXVzIC5pbWctYXJlYSwgI2NvbnRhY3QtdXMxIC5pbWctYXJlYSwgI2NvbnRhY3QtdXMyIC5pbWctYXJlYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jY29udGFjdC11cyAuaW1nLWFyZWEgaW1nLCAjY29udGFjdC11czEgLmltZy1hcmVhIGltZywgI2NvbnRhY3QtdXMyIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNjb250YWN0LXVzIC5zb2NpYWwtaWNvbnMgaSwgI2NvbnRhY3QtdXMxIC5zb2NpYWwtaWNvbnMgaSwgI2NvbnRhY3QtdXMyIC5zb2NpYWwtaWNvbnMgaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jY29udGFjdC11cyAuc29jaWFsLWljb25zIGk6aG92ZXIsICNjb250YWN0LXVzMSAuc29jaWFsLWljb25zIGk6aG92ZXIsICNjb250YWN0LXVzMiAuc29jaWFsLWljb25zIGk6aG92ZXIge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNjb250YWN0LXVzIC5hc3NvY2lhdGlvbi1pbmZvIGgyLCAjY29udGFjdC11czEgLmFzc29jaWF0aW9uLWluZm8gaDIsICNjb250YWN0LXVzMiAuYXNzb2NpYXRpb24taW5mbyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxuI2NvbnRhY3QtdXMgLmFzc29jaWF0aW9uLWluZm8gaSwgI2NvbnRhY3QtdXMxIC5hc3NvY2lhdGlvbi1pbmZvIGksICNjb250YWN0LXVzMiAuYXNzb2NpYXRpb24taW5mbyBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzFiMTkxOTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuI2NvbnRhY3QtdXMgLmFzc29jaWF0aW9uLWluZm8gcCwgI2NvbnRhY3QtdXMxIC5hc3NvY2lhdGlvbi1pbmZvIHAsICNjb250YWN0LXVzMiAuYXNzb2NpYXRpb24taW5mbyBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuI2NvbnRhY3QtdXMgLnVzZXItaW5mbyBoMiwgI2NvbnRhY3QtdXMxIC51c2VyLWluZm8gaDIsICNjb250YWN0LXVzMiAudXNlci1pbmZvIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XG59XG4jY29udGFjdC11cyAudXNlci1pbmZvIC5jYXJkLCAjY29udGFjdC11czEgLnVzZXItaW5mbyAuY2FyZCwgI2NvbnRhY3QtdXMyIC51c2VyLWluZm8gLmNhcmQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jY29udGFjdC11cyAudXNlci1pbmZvIC5jYXJkOmJlZm9yZSwgI2NvbnRhY3QtdXMxIC51c2VyLWluZm8gLmNhcmQ6YmVmb3JlLCAjY29udGFjdC11czIgLnVzZXItaW5mbyAuY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgaGVpZ2h0OiA0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuI2NvbnRhY3QtdXMgLnVzZXItaW5mbyAuY2FyZDpob3ZlcjpiZWZvcmUsICNjb250YWN0LXVzMSAudXNlci1pbmZvIC5jYXJkOmhvdmVyOmJlZm9yZSwgI2NvbnRhY3QtdXMyIC51c2VyLWluZm8gLmNhcmQ6aG92ZXI6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4jY29udGFjdC11cyAudXNlci1pbmZvIC5jYXJkOmhvdmVyLCAjY29udGFjdC11czEgLnVzZXItaW5mbyAuY2FyZDpob3ZlciwgI2NvbnRhY3QtdXMyIC51c2VyLWluZm8gLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNjb250YWN0LXVzIC51c2VyLWluZm8gLmNhcmQ6aG92ZXIgLm1lbWJlci1uYW1lLCAjY29udGFjdC11czEgLnVzZXItaW5mbyAuY2FyZDpob3ZlciAubWVtYmVyLW5hbWUsICNjb250YWN0LXVzMiAudXNlci1pbmZvIC5jYXJkOmhvdmVyIC5tZW1iZXItbmFtZSB7XG4gIGNvbG9yOiAjZmY4YjIzO1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSwgI2NvbnRhY3QtdXMxIC5jb250YWN0LWZvcm0sICNjb250YWN0LXVzMiAuY29udGFjdC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogODBweCAhaW1wb3J0YW50O1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSBoMiwgI2NvbnRhY3QtdXMxIC5jb250YWN0LWZvcm0gaDIsICNjb250YWN0LXVzMiAuY29udGFjdC1mb3JtIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XG59XG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIC5maWVsZCwgI2NvbnRhY3QtdXMxIC5jb250YWN0LWZvcm0gLmZpZWxkLCAjY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSAuZmllbGQge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIC5maWVsZCxcbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gdGV4dGFyZWEsICNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtIC5maWVsZCxcbiNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtIHRleHRhcmVhLCAjY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSAuZmllbGQsXG4jY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn1cbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gLmZpZWxkOmhvdmVyLFxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYTpob3ZlcixcbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gLmFjdGlvbi1idXR0b246aG92ZXIsICNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtIC5maWVsZDpob3ZlcixcbiNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtIHRleHRhcmVhOmhvdmVyLFxuI2NvbnRhY3QtdXMxIC5jb250YWN0LWZvcm0gLmFjdGlvbi1idXR0b246aG92ZXIsICNjb250YWN0LXVzMiAuY29udGFjdC1mb3JtIC5maWVsZDpob3ZlcixcbiNjb250YWN0LXVzMiAuY29udGFjdC1mb3JtIHRleHRhcmVhOmhvdmVyLFxuI2NvbnRhY3QtdXMyIC5jb250YWN0LWZvcm0gLmFjdGlvbi1idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSAubWFwLCAjY29udGFjdC11czEgLmNvbnRhY3QtZm9ybSAubWFwLCAjY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSAubWFwIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2NvbnRhY3QtdXMgLnVzZXItaW5mbyAuY2FyZCwgI2NvbnRhY3QtdXMxIC51c2VyLWluZm8gLmNhcmQsICNjb250YWN0LXVzMiAudXNlci1pbmZvIC5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gICNjb250YWN0LXVzIC5jYXJkLWNvbCwgI2NvbnRhY3QtdXMxIC5jYXJkLWNvbCwgI2NvbnRhY3QtdXMyIC5jYXJkLWNvbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgI2NvbnRhY3QtdXMgLmNvbnRhY3RGb3JtLCAjY29udGFjdC11czEgLmNvbnRhY3RGb3JtLCAjY29udGFjdC11czIgLmNvbnRhY3RGb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gICNjb250YWN0LXVzIC5jb250YWN0LWZvcm0sICNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtLCAjY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLmFjdGlvbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDQ1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jY29udGFjdC11cywgI2NvbnRhY3QtdXMxLCAjY29udGFjdC11czIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIC5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbiAgfVxyXG4gIC5pbWctYXJlYSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLnNvY2lhbC1pY29ucyBpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMgaTpob3ZlciB7XHJcbiAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gIH1cclxuICAuYXNzb2NpYXRpb24taW5mbyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxYjE5MTk7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC51c2VyLWluZm8ge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aC1jb2xvcjtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLm1lbWJlci1uYW1lIHtcclxuICAgICAgICAgIGNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWN0LWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcclxuICAgIH1cclxuICAgIC5maWVsZCB7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5maWVsZCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMGVtO1xyXG4gICAgfVxyXG4gICAgLmZpZWxkOmhvdmVyLFxyXG4gICAgdGV4dGFyZWE6aG92ZXIsXHJcbiAgICAuYWN0aW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWFwIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgI2NvbnRhY3QtdXMsICNjb250YWN0LXVzMSwgI2NvbnRhY3QtdXMyIHtcclxuICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtY29sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RGb3JtIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/modal-data.service */ "./src/app/shared/services/modal-data.service.ts");
/* harmony import */ var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");






let ContactUsComponent = class ContactUsComponent {
    constructor(formBuilder, _service, dataService, _utility) {
        this.formBuilder = formBuilder;
        this._service = _service;
        this.dataService = dataService;
        this._utility = _utility;
        this.members = [];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.members = this.dataService.getAssociationMembers();
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
        let formData = this.contactForm.value;
        formData['createdDate'] = this._utility.convertDateToEPOC(new Date());
        this._service.sendEnquiry(formData);
        this.clearForm();
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"] },
    { type: _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_4__["ModalDataService"] },
    { type: _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n.home {\n  width: 100%;\n}\n.carousel-indicators .active {\n  background-color: #ff8b23;\n}\n.action-button {\n  display: inline-block;\n  padding: 13px 47px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.entry-title {\n  font-weight: bold;\n}\n.entry-content {\n  font-size: 18px;\n}\n.wrapper-box {\n  padding: 96px 0;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#banner-area {\n  margin-top: 80px;\n}\n#banner-area .carousel-item {\n  background: no-repeat center center scroll;\n  background-size: cover;\n  -webkit-background-size: cover;\n}\n#banner-area .carousel-caption:hover {\n  background-color: #0000009c;\n}\n#banner-area .carousel-caption {\n  bottom: 35%;\n  background-color: #2423236e;\n  padding: 30px;\n}\n#banner-area .carousel-caption h5 {\n  font-size: 45px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n#register-area {\n  padding-left: 85px;\n  padding-right: 85px;\n}\n#register-area .reg-panel {\n  border-top: solid 1px #ffffff;\n  border-bottom: solid 1px #ffffff;\n  padding-top: 64px;\n  padding-bottom: 56px;\n}\n#register-area .reg_text {\n  font-weight: 400;\n  line-height: 1.2;\n  font-size: 34px;\n  font-family: \"Righteous\", cursive;\n}\n#register-area .action-button {\n  font-size: 18px;\n}\n#register-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#register-area .img-area img {\n  width: 100%;\n}\n#register-area .img-area:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n#welcome-area .ico-box {\n  height: 100%;\n  padding: 40px;\n  border-radius: 24px;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  border: 0;\n  background: -webkit-gradient(linear, right top, left top, from(#ff5a00), to(#ff3600));\n  background: linear-gradient(270deg, #ff5a00 0%, #ff3600 100%);\n  color: #fff;\n}\n#welcome-area .ico-box .shake-hand {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  height: 20%;\n  width: 20%;\n}\n#welcome-area .ico-box .outline {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #fff;\n  font-size: 16px;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 2px;\n  padding: 12px 48px;\n  text-transform: uppercase;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n#welcome-area .ico-box .outline:hover {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n#game-area .img {\n  width: 100%;\n}\n#game-area .img:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  -webkit-transition: -webkit-transform 0.5s ease-out;\n  transition: -webkit-transform 0.5s ease-out;\n  transition: transform 0.5s ease-out;\n  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\n}\n#game-area .slingshot-box {\n  overflow: hidden;\n  border-radius: 0.25rem !important;\n}\n#testimonial-area {\n  font-family: \"Didact Gothic\", sans-serif;\n  position: relative;\n  color: #000;\n  overflow: hidden;\n  width: 100%;\n  background-size: cover;\n}\n#testimonial-area .carousel .fa {\n  font-size: 20px;\n  color: #0000007a;\n}\n#testimonial-area .carousel-indicators li {\n  background-color: #0a01018c;\n}\n#testimonial-area .carousel-indicators li.active {\n  background-color: #ff8b23;\n}\n#testimonial-area .img-overlay {\n  padding: 50px 0px;\n}\n#testimonial-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#testimonial-area .img-area img {\n  width: 100%;\n}\n#testimonial-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n#testimonial-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n#results-area .img-area {\n  width: 80px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#results-area .img-area img {\n  width: 100%;\n}\n#results-area .list-group-item:hover {\n  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;\n}\n#results-area .list-group-item:hover .result {\n  color: #ff3600;\n}\n#member-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#member-area .img-area img {\n  width: 100%;\n}\n#member-area .card {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#member-area .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#member-area .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#member-area .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#events-area .action-icon .fa {\n  font-size: 25px;\n  color: #0000007a;\n}\n#events-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n#events-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n#events-area .badge {\n  padding: 1.25em 0.7em !important;\n}\n#events-area .img-container {\n  position: relative;\n}\n#events-area .img-container .img-text {\n  width: 84%;\n  position: absolute;\n  /* Position the background text */\n  top: 12%;\n  /* At the bottom. Use top:0 to append it to the top */\n  left: 8%;\n  background: black;\n  /* Fallback color */\n  background: rgba(0, 0, 0, 0.6);\n  /* Black background with 0.5 opacity */\n  color: #f1f1f1;\n  /* Grey text */\n}\n#events-area .info p {\n  max-width: 600px;\n}\n#gallery-area .img-right .row {\n  padding: 17px;\n}\n#gallery-area .img-right .row:first-child {\n  padding-top: 0px !important;\n}\n@media only screen and (max-width: 992px) {\n  #banner-area .carousel-caption {\n    bottom: 50px;\n  }\n\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-box {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n\n  #register-area {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  #register-area .reg_text {\n    font-size: 20px;\n  }\n  #register-area .reg-btn {\n    font-size: 14px;\n    padding: 10px 40px;\n  }\n\n  #banner-area .carousel-caption {\n    display: none;\n  }\n\n  .shake-hand {\n    height: 25% !important;\n    width: 25% !important;\n  }\n\n  .res-sec {\n    background-color: #0000000a;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  #events-area .info {\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: center !important;\n  }\n\n  #gallery-area .img-right .row:first-child {\n    padding-top: 34px !important;\n  }\n\n  #results-area .list-group-item {\n    margin-top: 0.6rem !important;\n  }\n}\n@media only screen and (min-width: 992px) {\n  #welcome-area .member-box {\n    padding-right: 50px;\n    padding-left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzVFQTtFQUNJLFdBQUE7QUQrRUo7QUMzRUk7RUFDSSx5QkZRRztBQ3NFWDtBQzFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZDTztFRUFQLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FENkVKO0FDMUVBO0VBQ0ksaUJBQUE7QUQ2RUo7QUMxRUE7RUFDSSxlQUFBO0FENkVKO0FDMUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBRDZFSjtBQzFFQTtFQUNJLGdCQUFBO0FENkVKO0FDNUVJO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FEOEVSO0FDNUVJO0VBQ0ksMkJBQUE7QUQ4RVI7QUM1RUk7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FEOEVSO0FDN0VRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUQrRVo7QUMxRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FENkVKO0FDNUVJO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQ4RVI7QUM1RUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FEOEVSO0FDNUVJO0VBQ0ksZUFBQTtBRDhFUjtBQzVFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FEOEVSO0FDN0VRO0VBQ0ksV0FBQTtBRCtFWjtBQzVFSTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsK0JBQUE7RUFBQSw0REFBQTtBRDhFUjtBQ3pFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxTQUFBO0VBQ0EscUZBQUE7RUFBQSw2REFBQTtFQUNBLFdBQUE7QUQ0RVI7QUMzRVE7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUQ2RVo7QUMzRVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUQ2RVo7QUMzRVE7RUFDSSxZQUFBO0VBQ0EsbUJGakhEO0VFa0hDLG1CQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRDZFWjtBQ3ZFSTtFQUNJLFdBQUE7QUQwRVI7QUN4RUk7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsbURBQUE7RUFBQSwyQ0FBQTtFQUFBLG1DQUFBO0VBQUEsb0VBQUE7QUQwRVI7QUN4RUk7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0FEMEVSO0FDdEVBO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBRHdFSjtBQ3RFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRHdFWjtBQ3BFUTtFQUNJLDJCQUFBO0FEc0VaO0FDcEVRO0VBQ0kseUJGekpEO0FDK05YO0FDbkVJO0VBQ0ksaUJBQUE7QURxRVI7QUNuRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURxRVI7QUNwRVE7RUFDSSxXQUFBO0FEc0VaO0FDbkVJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEcUVSO0FDbkVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRHFFUjtBQ2hFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEbUVSO0FDbEVRO0VBQ0ksV0FBQTtBRG9FWjtBQ2hFUTtFQUNJLDBEQUFBO0FEa0VaO0FDakVZO0VBQ0ksY0ZyTUE7QUN3UWhCO0FDNURJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEK0RSO0FDOURRO0VBQ0ksV0FBQTtBRGdFWjtBQzdESTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEK0RSO0FDOURRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CRnZPRDtFRXdPQyxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FEZ0VaO0FDOURRO0VBQ0ksT0FBQTtFQUNBLFFBQUE7QURnRVo7QUM5RFE7RUFDSSx3REFBQTtBRGdFWjtBQ3pEUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRDREWjtBQ3pESTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRDJEUjtBQ3pESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUQyRFI7QUN6REk7RUFDSSxnQ0FBQTtBRDJEUjtBQ3pESTtFQUNJLGtCQUFBO0FEMkRSO0FDMURRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0VBQ0EscURBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRDREWjtBQ3hEUTtFQUNJLGdCQUFBO0FEMERaO0FDcERJO0VBQ0ksYUFBQTtBRHVEUjtBQ3REUTtFQUNJLDJCQUFBO0FEd0RaO0FDbkRBO0VBR1E7SUFDSSxZQUFBO0VEb0RWOztFQ2hETTtJQUNJLGlCQUFBO0VEbURWO0FBQ0Y7QUMvQ0E7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RURnRE47RUMvQ007SUFDSSxpQkFBQTtFRGlEVjs7RUM5Q0U7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VEaUROO0VDaERNO0lBQ0ksZUFBQTtFRGtEVjtFQ2hETTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFRGtEVjs7RUM5Q007SUFDSSxhQUFBO0VEaURWOztFQzlDRTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7RURpRE47O0VDL0NFO0lBQ0ksMkJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VEa0ROOztFQy9DTTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFRGtEVjs7RUM3Q1U7SUFDSSw0QkFBQTtFRGdEZDs7RUMzQ007SUFDSSw2QkFBQTtFRDhDVjtBQUNGO0FDMUNBO0VBRVE7SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0VEMkNWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uaG9tZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEzcHggNDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZW50cnktdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVudHJ5LWNvbnRlbnQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53cmFwcGVyLWJveCB7XG4gIHBhZGRpbmc6IDk2cHggMDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNiYW5uZXItYXJlYSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4jYmFubmVyLWFyZWEgLmNhcm91c2VsLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNiYW5uZXItYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5Yztcbn1cbiNiYW5uZXItYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGJvdHRvbTogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMzIzNmU7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4jYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24gaDUge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbiNyZWdpc3Rlci1hcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiA4NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4NXB4O1xufVxuI3JlZ2lzdGVyLWFyZWEgLnJlZy1wYW5lbCB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmZmZmZjtcbiAgcGFkZGluZy10b3A6IDY0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1NnB4O1xufVxuI3JlZ2lzdGVyLWFyZWEgLnJlZ190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbn1cbiNyZWdpc3Rlci1hcmVhIC5hY3Rpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuI3JlZ2lzdGVyLWFyZWEgLmltZy1hcmVhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4jcmVnaXN0ZXItYXJlYSAuaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jcmVnaXN0ZXItYXJlYSAuaW1nLWFyZWE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG5cbiN3ZWxjb21lLWFyZWEgLmljby1ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjVhMDAgMCUsICNmZjM2MDAgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuI3dlbGNvbWUtYXJlYSAuaWNvLWJveCAuc2hha2UtaGFuZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMjAlO1xufVxuI3dlbGNvbWUtYXJlYSAuaWNvLWJveCAub3V0bGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIHBhZGRpbmc6IDEycHggNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuI3dlbGNvbWUtYXJlYSAuaWNvLWJveCAub3V0bGluZTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuXG4jZ2FtZS1hcmVhIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNnYW1lLWFyZWEgLmltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG59XG4jZ2FtZS1hcmVhIC5zbGluZ3Nob3QtYm94IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4jdGVzdGltb25pYWwtYXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuY2Fyb3VzZWwgLmZhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDAwMDdhO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwMTAxOGM7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmltZy1vdmVybGF5IHtcbiAgcGFkZGluZzogNTBweCAwcHg7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4jcmVzdWx0cy1hcmVhIC5pbWctYXJlYSB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNyZXN1bHRzLWFyZWEgLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3Jlc3VsdHMtYXJlYSAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNyZXN1bHRzLWFyZWEgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciAucmVzdWx0IHtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbiNtZW1iZXItYXJlYSAuaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI21lbWJlci1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNtZW1iZXItYXJlYSAuY2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNtZW1iZXItYXJlYSAuY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgaGVpZ2h0OiA0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuI21lbWJlci1hcmVhIC5jYXJkOmhvdmVyOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuI21lbWJlci1hcmVhIC5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbiNldmVudHMtYXJlYSAuYWN0aW9uLWljb24gLmZhIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzAwMDAwMDdhO1xufVxuI2V2ZW50cy1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBjb2xvcjogIzAwMDtcbn1cbiNldmVudHMtYXJlYSAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4jZXZlbnRzLWFyZWEgLmJhZGdlIHtcbiAgcGFkZGluZzogMS4yNWVtIDAuN2VtICFpbXBvcnRhbnQ7XG59XG4jZXZlbnRzLWFyZWEgLmltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jZXZlbnRzLWFyZWEgLmltZy1jb250YWluZXIgLmltZy10ZXh0IHtcbiAgd2lkdGg6IDg0JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBQb3NpdGlvbiB0aGUgYmFja2dyb3VuZCB0ZXh0ICovXG4gIHRvcDogMTIlO1xuICAvKiBBdCB0aGUgYm90dG9tLiBVc2UgdG9wOjAgdG8gYXBwZW5kIGl0IHRvIHRoZSB0b3AgKi9cbiAgbGVmdDogOCU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCAwLjUgb3BhY2l0eSAqL1xuICBjb2xvcjogI2YxZjFmMTtcbiAgLyogR3JleSB0ZXh0ICovXG59XG4jZXZlbnRzLWFyZWEgLmluZm8gcCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbiNnYWxsZXJ5LWFyZWEgLmltZy1yaWdodCAucm93IHtcbiAgcGFkZGluZzogMTdweDtcbn1cbiNnYWxsZXJ5LWFyZWEgLmltZy1yaWdodCAucm93OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNiYW5uZXItYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLndyYXBwZXItYm94IC5lbnRyeS10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXItYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuICAud3JhcHBlci1ib3ggLmVudHJ5LXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxuXG4gICNyZWdpc3Rlci1hcmVhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgI3JlZ2lzdGVyLWFyZWEgLnJlZ190ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgI3JlZ2lzdGVyLWFyZWEgLnJlZy1idG4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIH1cblxuICAjYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2hha2UtaGFuZCB7XG4gICAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmVzLXNlYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDBhO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gICNldmVudHMtYXJlYSAuaW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjZ2FsbGVyeS1hcmVhIC5pbWctcmlnaHQgLnJvdzpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDM0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gICNyZXN1bHRzLWFyZWEgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMC42cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI3dlbGNvbWUtYXJlYSAubWVtYmVyLWJveCB7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLmhvbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTNweCA0N3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmRjYjllO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVudHJ5LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZW50cnktY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi53cmFwcGVyLWJveCB7XHJcbiAgICBwYWRkaW5nOiA5NnB4IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jYmFubmVyLWFyZWEge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDljO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIGJvdHRvbTogMzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDIzMjM2ZTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI3JlZ2lzdGVyLWFyZWEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogODVweDtcclxuICAgIC5yZWctcGFuZWwge1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ190ZXh0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5pbWctYXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltZy1hcmVhOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxuICAgIH1cclxufVxyXG5cclxuI3dlbGNvbWUtYXJlYSB7XHJcbiAgICAuaWNvLWJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDI1NSwgOTAsIDAsIDEpIDAlLCByZ2JhKDI1NSwgNTQsIDAsIDEpIDEwMCUpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC5zaGFrZS1oYW5kIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdXRsaW5lIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCA0OHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdXRsaW5lOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNnYW1lLWFyZWEge1xyXG4gICAgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1nOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgICAuc2xpbmdzaG90LWJveCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN0ZXN0aW1vbmlhbC1hcmVhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLWNvbnRhY3RzLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAuY2Fyb3VzZWwge1xyXG4gICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwMTAxOGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLW92ZXJsYXkge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1hcmVhIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuI3Jlc3VsdHMtYXJlYSB7XHJcbiAgICAuaW1nLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAucmVzdWx0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGgtY29sb3ItZGFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI21lbWJlci1hcmVhIHtcclxuICAgIC5pbWctYXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2V2ZW50cy1hcmVhIHtcclxuICAgIC5hY3Rpb24taWNvbiB7XHJcbiAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDdhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjI1ZW0gMC43ZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmltZy10ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvKiBQb3NpdGlvbiB0aGUgYmFja2dyb3VuZCB0ZXh0ICovXHJcbiAgICAgICAgICAgIHRvcDogMTIlO1xyXG4gICAgICAgICAgICAvKiBBdCB0aGUgYm90dG9tLiBVc2UgdG9wOjAgdG8gYXBwZW5kIGl0IHRvIHRoZSB0b3AgKi9cclxuICAgICAgICAgICAgbGVmdDogOCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICAgICAgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggMC41IG9wYWNpdHkgKi9cclxuICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIC8qIEdyZXkgdGV4dCAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNnYWxsZXJ5LWFyZWEge1xyXG4gICAgLmltZy1yaWdodCAucm93IHtcclxuICAgICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAvLyB0YWJsZXQgZGV2aWNlc1xyXG4gICAgI2Jhbm5lci1hcmVhIHtcclxuICAgICAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAud3JhcHBlci1ib3gge1xyXG4gICAgICAgIC5lbnRyeS10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAud3JhcHBlci1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIC5lbnRyeS10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNyZWdpc3Rlci1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgLnJlZ190ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVnLWJ0biB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNiYW5uZXItYXJlYSB7XHJcbiAgICAgICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaGFrZS1oYW5kIHtcclxuICAgICAgICBoZWlnaHQ6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yZXMtc2VjIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMGE7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgI2V2ZW50cy1hcmVhIHtcclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2dhbGxlcnktYXJlYSB7XHJcbiAgICAgICAgLmltZy1yaWdodCAucm93IHtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI3Jlc3VsdHMtYXJlYSB7XHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAjd2VsY29tZS1hcmVhIHtcclxuICAgICAgICAubWVtYmVyLWJveCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony import */ var _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/modal-data.service */ "./src/app/shared/services/modal-data.service.ts");
/* harmony import */ var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");






let HomeComponent = class HomeComponent {
    constructor(_service, _dataService, _utility, _spinner) {
        this._service = _service;
        this._dataService = _dataService;
        this._utility = _utility;
        this._spinner = _spinner;
        this.districtList = [];
        this.members = [];
        this.eventData = [];
        this.matchResults = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        this.getAllResultRecords();
        this.getAllEvents();
        this.members = this._dataService.getAssociationMembers();
    }
    getAllEvents() {
        this.show_spinner();
        this._service.getActiveEvents().subscribe(data => {
            data.map(item => {
                this.eventData.push(Object.assign({ id: item.payload.doc.id }, item.payload.doc.data()));
            });
            this.hide_spinner();
        });
    }
    getAllResultRecords() {
        this.show_spinner();
        this._service.getFiveMatchResults().subscribe(data => {
            this.matchResults = data.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            this.hide_spinner();
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
};
HomeComponent.ctorParameters = () => [
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"] },
    { type: _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_3__["ModalDataService"] },
    { type: _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#footer {\n  padding: 70px 70px 20px 70px;\n  background: #000;\n  color: #fff;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#footer .hr {\n  background-color: #fff;\n}\n#footer .action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n}\n#footer .contact h3,\n#footer .subscribe h3 {\n  color: #ff3600;\n}\n#footer .contact h3 span,\n#footer .subscribe h3 span {\n  color: #fff;\n}\n#footer .social-icons i {\n  padding: 10px;\n  border-radius: 50%;\n  font-size: 20px;\n  text-align: center;\n  background: red;\n  margin-right: 15px;\n  width: 40px;\n  color: #fff;\n}\n#footer .social-icons .fa-twitter {\n  background: #55ACEE;\n}\n#footer .social-icons .fa-linkedin {\n  background: #007bb5;\n}\n#footer .social-icons .fa-facebook {\n  background: #3B5998;\n}\n#footer .social-icons .fa-youtube {\n  background: #bb0000;\n}\n@media only screen and (max-width: 768px) {\n  #footer {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n  #footer .contact,\n#footer .subscribe {\n    margin-top: 50px;\n  }\n  #footer .info,\n#footer .sub {\n    margin-top: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) {\n  #footer .info,\n#footer .sub {\n    margin-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7O0VBRUksWUFBQTtBQ0NKO0FERUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQ0NKO0FER0EsMkVBQUE7QUFJQTtFQUNJLFVBQUE7QUNISjtBRE1BO0VBQ0ksbUJBQUE7QUNISjtBRE1DO0VBQ0csZ0JBQUE7QUNISjtBRE1DO0VBQ0csbUJBQUE7QUNISjtBRE9BLGlCQUFBO0FBRUE7RUFDSSxtQkFBQTtBQ0xKO0FEUUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNMSjtBRFNBLGNBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1BKO0FEVUE7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUEo7QURVQTs7RUFFSSxZQUFBO0FDUEo7QURVQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtBQ1BKO0FEV0E7RUFDSSwwQ0FBQTtBQ1JKO0FEV0E7RUFDSSx3QkFBQTtBQ1JKO0FEWUk7RUFDSSwwQkFBQTtBQ1RSO0FDM0VBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBRDhFSjtBQzdFSTtFQUNJLHNCQUFBO0FEK0VSO0FDN0VJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRkVHO0VFREgsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEK0VSO0FDM0VROztFQUNJLGNBQUE7QUQ4RVo7QUM3RVk7O0VBQ0ksV0FBQTtBRGdGaEI7QUMzRVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRDZFWjtBQzNFUTtFQUNJLG1CQUFBO0FENkVaO0FDM0VRO0VBQ0ksbUJBQUE7QUQ2RVo7QUMzRVE7RUFDSSxtQkFBQTtBRDZFWjtBQzNFUTtFQUNJLG1CQUFBO0FENkVaO0FDeEVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VEMkVOO0VDMUVNOztJQUVJLGdCQUFBO0VENEVWO0VDMUVNOztJQUVJLGdCQUFBO0VENEVWO0FBQ0Y7QUN4RUE7RUFFUTs7SUFFSSxrQkFBQTtFRHlFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jZm9vdGVyIHtcbiAgcGFkZGluZzogNzBweCA3MHB4IDIwcHggNzBweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbn1cbiNmb290ZXIgLmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbiNmb290ZXIgLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jZm9vdGVyIC5jb250YWN0IGgzLFxuI2Zvb3RlciAuc3Vic2NyaWJlIGgzIHtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG4jZm9vdGVyIC5jb250YWN0IGgzIHNwYW4sXG4jZm9vdGVyIC5zdWJzY3JpYmUgaDMgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIGkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIC5mYS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyAuZmEtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIC5mYS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG59XG4jZm9vdGVyIC5zb2NpYWwtaWNvbnMgLmZhLXlvdXR1YmUge1xuICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNmb290ZXIge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB9XG4gICNmb290ZXIgLmNvbnRhY3QsXG4jZm9vdGVyIC5zdWJzY3JpYmUge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgI2Zvb3RlciAuaW5mbyxcbiNmb290ZXIgLnN1YiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAjZm9vdGVyIC5pbmZvLFxuI2Zvb3RlciAuc3ViIHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbiNmb290ZXIge1xyXG4gICAgcGFkZGluZzogNzBweCA3MHB4IDIwcHggNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICAuaHIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdCxcclxuICAgIC5zdWJzY3JpYmUge1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXR3aXR0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtbGlua2VkaW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtZmFjZWJvb2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEteW91dHViZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiYjAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAuY29udGFjdCxcclxuICAgICAgICAuc3Vic2NyaWJlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm8sXHJcbiAgICAgICAgLnN1YiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjZm9vdGVyIHtcclxuICAgICAgICAuaW5mbyxcclxuICAgICAgICAuc3ViIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n.navbar-light .navbar-toggler {\n  border: none;\n}\n.collapsing {\n  -webkit-transition: height 0.6s;\n  transition: height 0.6s;\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-title:hover {\n  cursor: pointer;\n}\n#navbarNav a.nav-link {\n  font-size: 13px !important;\n  font-weight: 500;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n#navbarNav a.nav-link:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 2px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#navbarNav a.nav-link:hover:before {\n  left: 0px;\n  right: 0;\n}\n#navbarNav a.nav-link:hover {\n  color: #ff8b23;\n}\n.navbar {\n  height: 80px;\n  width: 100%;\n  background-color: #fff;\n}\n.navbar-collapse {\n  background: inherit;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.outline:hover {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #ff8b23;\n  border-color: #ff8b23;\n  border-style: solid;\n  border-width: 2px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.outline {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 350ms ease 0s;\n  transition: all 350ms ease 0s;\n  text-transform: uppercase;\n  padding: 7px 20px;\n  margin-left: 30px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 992px) {\n  .outline {\n    margin-left: 0px !important;\n    margin-top: 20px;\n    margin-bottom: 30px;\n  }\n\n  .navbar-collapse {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-top: 70px;\n    margin-right: 20px;\n    padding-top: 20px;\n  }\n\n  .navbar-light .navbar-nav .nav-link {\n    padding-top: 15px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .navbar li {\n    padding-left: 13px;\n    padding-right: 13px;\n  }\n\n  .navbar-brand {\n    padding-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9uYXZiYXIvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7O0VBRUksWUFBQTtBQ0NKO0FERUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQ0NKO0FER0EsMkVBQUE7QUFJQTtFQUNJLFVBQUE7QUNISjtBRE1BO0VBQ0ksbUJBQUE7QUNISjtBRE1DO0VBQ0csZ0JBQUE7QUNISjtBRE1DO0VBQ0csbUJBQUE7QUNISjtBRE9BLGlCQUFBO0FBRUE7RUFDSSxtQkFBQTtBQ0xKO0FEUUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNMSjtBRFNBLGNBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1BKO0FEVUE7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUEo7QURVQTs7RUFFSSxZQUFBO0FDUEo7QURVQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtBQ1BKO0FEV0E7RUFDSSwwQ0FBQTtBQ1JKO0FEV0E7RUFDSSx3QkFBQTtBQ1JKO0FEWUk7RUFDSSwwQkFBQTtBQ1RSO0FDNUVBO0VBQ0ksWUFBQTtBRCtFSjtBQzVFQTtFQUNJLCtCQUFBO0VBQUEsdUJBQUE7QUQrRUo7QUM1RUE7RUFDSSx5QkFBQTtBRCtFSjtBQzVFQTtFQUNJLGVBQUE7QUQrRUo7QUM1RUE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRCtFSjtBQzlFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkZwQkc7RUVxQkgsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBRGdGUjtBQzlFSTtFQUNJLFNBQUE7RUFDQSxRQUFBO0FEZ0ZSO0FDOUVJO0VBQ0ksY0ZsQ0c7QUNrSFg7QUM1RUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FEK0VKO0FDNUVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEK0VKO0FDNUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxjRnRETztFRXVEUCxxQkZ2RE87RUV3RFAsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUQrRUo7QUM1RUE7RUFDSSxZQUFBO0VBQ0EsbUJGL0RPO0VFZ0VQLG1CQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUQrRUo7QUM1RUE7RUFFSTtJQUNJLDJCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFRDhFTjs7RUM1RUU7SUFDSSx3REFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUQrRU47O0VDN0VFO0lBQ0ksaUJBQUE7RURnRk47QUFDRjtBQzdFQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFRDhFTjs7RUM1RUU7SUFDSSxrQkFBQTtFRCtFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbGxhcHNpbmcge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC42cztcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ubmF2YmFyLXRpdGxlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbmF2YmFyTmF2IGEubmF2LWxpbmsge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuI25hdmJhck5hdiBhLm5hdi1saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG4jbmF2YmFyTmF2IGEubmF2LWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMDtcbn1cbiNuYXZiYXJOYXYgYS5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmY4YjIzO1xufVxuXG4ubmF2YmFyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLm91dGxpbmU6aG92ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmOGIyMztcbiAgYm9yZGVyLWNvbG9yOiAjZmY4YjIzO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuXG4ub3V0bGluZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2UgMHM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5vdXRsaW5lIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgfVxuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2xsYXBzaW5nIHtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjZzO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XHJcbn1cclxuXHJcbi5uYXZiYXItdGl0bGU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbmF2YmFyTmF2IGEubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIH1cclxuICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxufVxyXG5cclxuLm91dGxpbmU6aG92ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG59XHJcblxyXG4ub3V0bGluZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2UgMHM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAub3V0bGluZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC8vZGVza3RvcFxyXG4gICAgLm5hdmJhciBsaSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#login-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  background-color: #fff;\n}\n#login-sec .container {\n  padding-top: 40px;\n  padding-bottom: 50px;\n}\n#login-sec input {\n  height: 50px;\n}\n#login-sec .btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n#login-sec .forgotPass:hover {\n  color: #000 !important;\n  cursor: pointer;\n}\n@media only screen and (max-width: 768px) {\n  #login-sec .container {\n    padding: 15px 30px 20px 30px !important;\n  }\n  #login-sec .container .p-5 {\n    padding: 3rem 0.5rem 3rem 0.5rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzVFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBRCtFSjtBQzlFSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QURnRlI7QUM5RUk7RUFDSSxZQUFBO0FEZ0ZSO0FDOUVJO0VBQ0kseUJGRUc7RUVESCxXQUFBO0FEZ0ZSO0FDN0VRO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FEK0VaO0FDMUVBO0VBR1E7SUFDSSx1Q0FBQTtFRDJFVjtFQzFFVTtJQUNJLDJDQUFBO0VENEVkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiR0aC1jb2xvcjogI2ZmOGIyMztcclxuJHRoLWNvbG9yLWRhcms6ICNmZjM2MDA7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG59XHJcblxyXG5cclxuLyogVGhlbWUtQ29sb3JzICovXHJcblxyXG4uYmctb2Zmd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjNmNTtcclxufVxyXG5cclxuLnNsaW5nLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBMb2dvLVRleHQgKi9cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBkaWFsb2cgY3NzXHJcbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHtcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLnNsaW5nLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbiNsb2dpbi1zZWMge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4jbG9naW4tc2VjIC5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4jbG9naW4tc2VjIGlucHV0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuI2xvZ2luLXNlYyAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG4jbG9naW4tc2VjIC5mb3Jnb3RQYXNzOmhvdmVyIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNsb2dpbi1zZWMgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xuICB9XG4gICNsb2dpbi1zZWMgLmNvbnRhaW5lciAucC01IHtcbiAgICBwYWRkaW5nOiAzcmVtIDAuNXJlbSAzcmVtIDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNsb2dpbi1zZWMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmZvcmdvdFBhc3Mge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvL21vYmlsZSBkZXZpY2VcclxuICAgICNsb2dpbi1zZWMge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHggMjBweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5wLTUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwLjVyZW0gM3JlbSAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

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
        window.scrollTo(0, 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#match-results {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#match-results .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2gtcmVzdWx0cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbWF0Y2gtcmVzdWx0cy9tYXRjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRjaC1yZXN1bHRzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcbWF0Y2gtcmVzdWx0c1xcbWF0Y2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzVFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7QUQrRUo7QUM5RUk7RUFDSSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRGdGUiIsImZpbGUiOiJzcmMvYXBwL21hdGNoLXJlc3VsdHMvbWF0Y2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiR0aC1jb2xvcjogI2ZmOGIyMztcclxuJHRoLWNvbG9yLWRhcms6ICNmZjM2MDA7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG59XHJcblxyXG5cclxuLyogVGhlbWUtQ29sb3JzICovXHJcblxyXG4uYmctb2Zmd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjNmNTtcclxufVxyXG5cclxuLnNsaW5nLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBMb2dvLVRleHQgKi9cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBkaWFsb2cgY3NzXHJcbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHtcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLnNsaW5nLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbiNtYXRjaC1yZXN1bHRzIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI21hdGNoLXJlc3VsdHMgLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuI21hdGNoLXJlc3VsdHMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIC5qdW1ib3Ryb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony import */ var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/slingshot.service */ "./src/app/shared/services/slingshot.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let MatchResultsComponent = class MatchResultsComponent {
    constructor(_service, _spinner) {
        this._service = _service;
        this._spinner = _spinner;
        this.matchResults = [];
        this.showSpinner = false;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getAllResultRecords();
    }
    getAllResultRecords() {
        this.show_spinner();
        this._service.getAllMatchResults().subscribe(data => {
            this.matchResults = data.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            this.hide_spinner();
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
};
MatchResultsComponent.ctorParameters = () => [
    { type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
MatchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-match-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./match-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/match-results/match-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./match-results.component.scss */ "./src/app/match-results/match-results.component.scss")).default]
    })
], MatchResultsComponent);



/***/ }),

/***/ "./src/app/score-board/score-board.component.scss":
/*!********************************************************!*\
  !*** ./src/app/score-board/score-board.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#result-area .img-area {\n  width: 80px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#result-area .img-area img {\n  width: 100%;\n}\n#result-area .list-group-item:hover {\n  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;\n}\n#result-area .list-group-item:hover .result {\n  color: #ff3600;\n}\n#result-area .text-rank {\n  color: #ff3600;\n}\n@media only screen and (max-width: 768px) {\n  #result-area .list-group-item {\n    margin-top: 0.6rem !important;\n  }\n  #result-area .event-sec {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtYm9hcmQvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3Njb3JlLWJvYXJkL3Njb3JlLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY29yZS1ib2FyZC9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXHNjb3JlLWJvYXJkXFxzY29yZS1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzNFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEOEVSO0FDN0VRO0VBQ0ksV0FBQTtBRCtFWjtBQzNFUTtFQUNJLDBEQUFBO0FENkVaO0FDNUVZO0VBQ0ksY0FBQTtBRDhFaEI7QUMxRUk7RUFDSSxjRkxRO0FDaUZoQjtBQ3hFQTtFQUdRO0lBQ0ksNkJBQUE7RUR5RVY7RUN2RU07SUFDSSxnQkFBQTtFRHlFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2NvcmUtYm9hcmQvc2NvcmUtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jcmVzdWx0LWFyZWEgLmltZy1hcmVhIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3Jlc3VsdC1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNyZXN1bHQtYXJlYSAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNyZXN1bHQtYXJlYSAubGlzdC1ncm91cC1pdGVtOmhvdmVyIC5yZXN1bHQge1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cbiNyZXN1bHQtYXJlYSAudGV4dC1yYW5rIHtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3Jlc3VsdC1hcmVhIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDAuNnJlbSAhaW1wb3J0YW50O1xuICB9XG4gICNyZXN1bHQtYXJlYSAuZXZlbnQtc2VjIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNyZXN1bHQtYXJlYSB7XHJcbiAgICAuaW1nLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAucmVzdWx0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGgtY29sb3ItZGFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LXJhbmsge1xyXG4gICAgICAgIGNvbG9yOiAkdGgtY29sb3ItZGFyaztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAjcmVzdWx0LWFyZWEge1xyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjZyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV2ZW50LXNlYyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/score-board/score-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/score-board/score-board.component.ts ***!
  \******************************************************/
/*! exports provided: ScoreBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreBoardComponent", function() { return ScoreBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let ScoreBoardComponent = class ScoreBoardComponent {
    constructor(_spinner) {
        this._spinner = _spinner;
        this.result = [];
    }
    ngOnInit() {
    }
};
ScoreBoardComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScoreBoardComponent.prototype, "result", void 0);
ScoreBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-score-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/score-board/score-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score-board.component.scss */ "./src/app/score-board/score-board.component.scss")).default]
    })
], ScoreBoardComponent);



/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/components/spinner/spinner.component.scss")).default]
    })
], SpinnerComponent);



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
            // Do something...
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

/***/ "./src/app/shared/services/modal-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/modal-data.service.ts ***!
  \*******************************************************/
/*! exports provided: ModalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDataService", function() { return ModalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalDataService = class ModalDataService {
    constructor() {
        this.MEMBERS = [
            {
                name: 'Mr. Bipin Chaudhari',
                role: 'President',
                email: 'xyz@gmail.com',
                mobile: '9404141861',
                class: 'active',
                pic: './assets/images/members/bipin-chaudhari.jpg'
            },
            {
                name: 'Mr. Lalit Dhoke',
                role: 'Vice President',
                email: 'xyz@gmail.com',
                mobile: '9588430982',
                class: '',
                pic: './assets/images/members/lalit-dhoke.jpg'
            },
            {
                name: 'Mr. Manikraj Landge',
                role: 'Vice President',
                email: 'xyz@gmail.com',
                mobile: '9004409664',
                class: '',
                pic: './assets/images/user-pic-default.png'
            },
            {
                name: 'Mr. Vikas Shelke',
                role: 'General Secretory',
                email: 'vikasshelke313918@gmail.com',
                mobile: '8432146555',
                class: '',
                pic: './assets/images/members/vikas-shelke.jpg'
            },
            {
                name: 'Mr. Sham Khemaskar',
                role: 'Treasurer',
                email: 'xyz@gmail.com',
                mobile: '9823545618',
                class: '',
                pic: './assets/images/user-pic-default.png'
            },
            {
                name: 'Mr. Pravin Dighade',
                role: 'Join Secretory',
                email: 'xyz@gmail.com',
                mobile: '8830993120',
                class: '',
                pic: './assets/images/members/pravin-dighade.jpg'
            },
            {
                name: 'Mr. Suraj Kadukar',
                role: 'Representative',
                email: 'xyz@gmail.com',
                mobile: '9370155501',
                class: '',
                pic: './assets/images/members/suraj-kadukar.jpg'
            },
            {
                name: 'Mr. Sunil Shinde',
                role: 'Representative',
                email: 'xyz@gmail.com',
                mobile: '8888424233',
                class: '',
                pic: './assets/images/members/sunil-shinde.jpg'
            },
            {
                name: 'Mr. Giriraj Gupta',
                role: 'Representative',
                email: 'xyz@gmail.com',
                mobile: '9049228777',
                class: '',
                pic: './assets/images/members/giriraj-gupta.jpg'
            },
            {
                name: 'Miss. Snehal Khantade',
                role: 'Member',
                email: 'xyz@gmail.com',
                mobile: '9552822470',
                class: '',
                pic: './assets/images/members/snehal-khantade.jpg'
            },
            {
                name: 'Mr. Praful Kodape',
                role: 'Member',
                email: 'xyz@gmail.com',
                mobile: '9673398819',
                class: '',
                pic: './assets/images/user-pic-default.png'
            }
        ];
        this.CATEGORIES = [
            {
                categoryName: 'Category 1',
                categoryTitle: 'Sub-Junior',
                distance: '10 Feet',
                age: '(Under 10Yr Age)'
            },
            {
                categoryName: 'Category 2',
                categoryTitle: 'Teenager',
                distance: '15 Feet',
                age: '(11Yr - 14Yr Age)'
            },
            {
                categoryName: 'Category 3',
                categoryTitle: 'Junior',
                distance: '20 Feet',
                age: '(15Yr - 18Yr Age)'
            },
            {
                categoryName: 'Category 4',
                categoryTitle: 'Senior',
                distance: '30 Feet',
                age: '(18Yr+ Age)'
            },
            {
                categoryName: 'Category 5',
                categoryTitle: 'Master',
                distance: '30 Feet',
                age: '(35Yr+ Age)'
            }
        ];
        this.RULES = [
            'स्पर्धकाने शुट लाईनच्या मागे उभे राहणे अनिवार्य आहे, अन्यथा त्या स्पर्धकाला स्पर्धेतून बाहेर करण्यात येईल.',
            'जर एखाद्या प्रवर्गात स्पर्धा नसेल तर त्या स्पर्धकाला सहभागी प्रमाणपत्र देण्यात येईल किंवा त्याला पुढील स्पर्धेसाठी पाठवण्यात येईल.',
            'प्रत्येक फेरीमध्ये स्पर्धकाला 5 मिनिटांचा वेळ दिला जाईल, त्या वेळेत त्यांना दहा गोट्या लक्ष्यावर माराव्या लागतील.',
            'जर दोन किंवा त्यापेक्षा अधिक स्पर्धकांना सारखे गुण मिळाले असतील आणि पंचांना निर्णय घेणे होत नसेल तर तिसरी फेरी घेतल्या जाईल किंवा कमी वयाच्या स्पर्धकाला विजेसेपद दिल्या जाईल.',
            'सर्व स्पर्धकांनी स्वतःच्या सुरक्षिततेसाठी ग्लासेस आणि विचलित करणारे आवाज नियंत्रक साधन सोबत आणने अनिवार्य आहे.',
            'एक फेरी ही 5 मिनिटांची असेल, जेव्हा वेळ निरीक्षक गोळीबार करून अथवा शिट्टी वाजवून जाहीर करेल तेव्हा सुरुवात होईल.',
            'तांत्रिक समिती (पंच) या समितीमध्ये पाच सदस्य असतील, त्यामध्ये 1 न्यायाधीश, 1 वेळ निरीक्षक, 1 रेषा निरीक्षक व 2 निरिक्षक असतील.',
            'फेरीच्या वेळी लक्षाला काही नुकसान झाल्यास आवश्यक असेल तर पंच तांत्रिक समिती निर्णय घेऊन लक्ष बदलवून दुसरे लक्ष्य लावुन ती फेरी त्याच वेळेपासून व पाच गुणांपासून चालू करण्यात येईल.',
            'गरज भासल्यास तांत्रिक समितीला दुसरी फेरी घेता येईल.',
            'लक्ष्यावर दिलेल्या मर्यादेपेक्षा जास्त मारा केल्यास गुणांसाठी वैध योग्य लक्षवेध आत मोजल्या जातील.',
        ];
        this.COMMITTEE = {
            AFFILIATION_COMMITTEE: [
                { name: 'Mr. Bipin Anil Chaudhari', mobile: '' },
                { name: 'Mr. Vikas Vinod Shelke', mobile: '' },
                { name: 'Mr. Manikraj Landage', mobile: '' },
                { name: 'Mr. Shyam Digambar Khemaskar', mobile: '' },
                { name: 'Mr. Sunil Bhagwan Shinde', mobile: '' },
                { name: 'Miss. Snehal Yogiraj Khantade', mobile: '' }
            ],
            TOURNAMENT_TECHNICAL_COMMITTEE: [
                { name: 'Mr. Manikraj Landage', mobile: '' },
                { name: 'Mr. Suraj Prakashrao Kadukar', mobile: '' },
                { name: 'Mr. Giriraj Ganesh Gupta', mobile: '' },
                { name: 'Mr. Tanshu Sanjiv Jhasi', mobile: '' },
                { name: 'Miss. Preksha Balkrushna Shetti', mobile: '' },
                { name: 'Miss. Srushti Vinod Gupta', mobile: '' },
                { name: 'Mr. Suraj Kanojiya', mobile: '' }
            ],
            TOURNAMENT_ORGANIZER_COMMITTEE: [
                { name: 'Mr. Sunil Bhagwan Shinde', mobile: '' },
                { name: 'Mr. Padmakar Kamble', mobile: '' },
                { name: 'Mr. Akash Upadhe', mobile: '' },
                { name: 'Mr. Mayur Santosh Meshram', mobile: '' },
                { name: 'Miss. Sayali Sunil Shinde', mobile: '' },
                { name: 'Mr. Sunil Kalabante', mobile: '' },
                { name: 'Mr. Rushikesh Uttamrao Bansod', mobile: '' }
            ],
            SELECTION_COMMITTEE: [
                { name: 'Mr. Shyam Digambar Khemaskar', mobile: '' },
                { name: 'Mr. Lalit Dhoke', mobile: '' },
                { name: 'Miss. Snehal Yogiraj Khantade', mobile: '' },
                { name: 'Miss. Samiksha Raju Patil', mobile: '' },
                { name: 'Mr. Tushar tanaji Durge', mobile: '' },
                { name: 'Mr. Rakesh Dattuji Chapattiwar', mobile: '' },
                { name: 'Mr. Ashvin Siddham Shettiwar', mobile: '' },
                { name: 'Mr. Saurabh Ramteke', mobile: '' },
            ],
            OFFICIAL_REFEREE: [
                { name: 'Miss. Akansha Raju Patil', mobile: '' },
                { name: 'Miss. Minal Gajan Nagrale', mobile: '' },
                { name: 'Mr. Mayur Santosh Meshram', mobile: '' },
                { name: 'Mr. Prajwal Lalit Dhoke', mobile: '' },
                { name: 'Miss. Sayali Sanjay Savadh', mobile: '' },
                { name: 'Miss. Riya manoj Godale', mobile: '' },
                { name: 'Mr. Abhishek Joshi', mobile: '' },
                { name: 'Miss. Kiran Kabdi', mobile: '' },
                { name: 'Mr. Dinesh Soyade', mobile: '' },
                { name: 'Mr. Ishu Shittewar', mobile: '' },
            ]
        };
    }
    getAssociationMembers() {
        return this.MEMBERS;
    }
    getSlingshotCategories() {
        return this.CATEGORIES;
    }
    getSlingshotRules() {
        return this.RULES;
    }
    getAllCommitte() {
        return this.COMMITTEE;
    }
};
ModalDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalDataService);



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
            { id: 'SLINGSHOTMH0001', name: 'Ahmednagar', isRegistered: false },
            { id: 'SLINGSHOTMH0002', name: 'Akola', isRegistered: false },
            { id: 'SLINGSHOTMH0003', name: 'Amravati', isRegistered: false },
            { id: 'SLINGSHOTMH0004', name: 'Aurangabad', isRegistered: false },
            { id: 'SLINGSHOTMH0005', name: 'Bhandara', isRegistered: false },
            { id: 'SLINGSHOTMH0006', name: 'Buldhana', isRegistered: false },
            { id: 'SLINGSHOTMH0007', name: 'Chandrapur', isRegistered: false },
            { id: 'SLINGSHOTMH0008', name: 'Dhule', isRegistered: false },
            { id: 'SLINGSHOTMH0009', name: 'Gadchiroli', isRegistered: false },
            { id: 'SLINGSHOTMH0010', name: 'Gondia', isRegistered: false },
            { id: 'SLINGSHOTMH0011', name: 'Hingoli', isRegistered: false },
            { id: 'SLINGSHOTMH0012', name: 'Jalgaon', isRegistered: false },
            { id: 'SLINGSHOTMH0013', name: 'Jalna', isRegistered: false },
            { id: 'SLINGSHOTMH0014', name: 'Kolhapur', isRegistered: false },
            { id: 'SLINGSHOTMH0015', name: 'Latur', isRegistered: false },
            { id: 'SLINGSHOTMH0016', name: 'Mumbai', isRegistered: false },
            { id: 'SLINGSHOTMH0017', name: 'Nagpur', isRegistered: false },
            { id: 'SLINGSHOTMH0018', name: 'Nanded', isRegistered: false },
            { id: 'SLINGSHOTMH0019', name: 'Nandurbar', isRegistered: false },
            { id: 'SLINGSHOTMH0020', name: 'Nashik', isRegistered: false },
            { id: 'SLINGSHOTMH0021', name: 'Osmanabad', isRegistered: false },
            { id: 'SLINGSHOTMH0022', name: 'Palghar', isRegistered: false },
            { id: 'SLINGSHOTMH0023', name: 'Parbhani', isRegistered: false },
            { id: 'SLINGSHOTMH0024', name: 'Pune', isRegistered: false },
            { id: 'SLINGSHOTMH0025', name: 'Raigad', isRegistered: false },
            { id: 'SLINGSHOTMH0026', name: 'Alibag', isRegistered: false },
            { id: 'SLINGSHOTMH0027', name: 'Ratnagiri', isRegistered: false },
            { id: 'SLINGSHOTMH0028', name: 'Sangli', isRegistered: false },
            { id: 'SLINGSHOTMH0029', name: 'Satara', isRegistered: false },
            { id: 'SLINGSHOTMH0030', name: 'Sindhudurg', isRegistered: false },
            { id: 'SLINGSHOTMH0031', name: 'Oros', isRegistered: false },
            { id: 'SLINGSHOTMH0032', name: 'Solapur', isRegistered: false },
            { id: 'SLINGSHOTMH0033', name: 'Thane', isRegistered: false },
            { id: 'SLINGSHOTMH0034', name: 'Wardha', isRegistered: false },
            { id: 'SLINGSHOTMH0035', name: 'Washim', isRegistered: false },
            { id: 'SLINGSHOTMH0036', name: 'Yavatmal', isRegistered: false }
        ];
    }
    // addDist() {
    //   this.districtList.forEach((item, index) => {
    //     this.firestore.collection('DistrictList').doc(item.id).set(item);
    //   });
    // }
    getAllDistricts() {
        return this.firestore.collection('DistrictList', ref => ref.orderBy('name', 'asc')).snapshotChanges();
    }
    getAvailabelDistricts() {
        return this.firestore.collection('DistrictList', ref => ref.where('isRegistered', '==', false)).snapshotChanges();
    }
    getRegisteredDistricts() {
        return this.firestore.collection('DistrictList', ref => ref.where('isRegistered', '==', true)).snapshotChanges();
    }
    getRegisteredDistrictInfoById(id) {
        return this.firestore.collection('ApprovedDistricts').doc(id).snapshotChanges();
    }
    districtRegistration(data, userID) {
        this.firestore.collection("AffiliationRequests").doc(userID).set(data);
    }
    getAffiliationRequests() {
        return this.firestore.collection("AffiliationRequests").snapshotChanges();
    }
    deleteRequestById(id) {
        this.firestore.collection('AffiliationRequests').doc(id).delete();
    }
    getUserById(id) {
        return this.firestore.collection('AffiliationRequests').doc(id).get();
    }
    registerAffiliationRequest(data) {
        this.firestore.collection("AffiliationRequests").add(data);
    }
    approveDistrict(districtData) {
        return this.firestore.collection('ApprovedDistricts').doc(districtData.requestedDistrict.id).snapshotChanges();
    }
    getApprovedDistrictInfo() {
        return this.firestore.collection('ApprovedDistricts').snapshotChanges();
    }
    deleteDistrictAffiliation(data) {
        this.firestore.collection('OLD_AFFILIATIONS').add(Object.assign({}, data, { status: 'rejected' }));
        this.firestore.collection('DistrictList').doc(data.requestedDistrict.id).update({ isRegistered: false });
        this.firestore.collection('ApprovedDistricts').doc(data.requestedDistrict.id).delete();
    }
    getOldAffiliations() {
        return this.firestore.collection('OLD_AFFILIATIONS').snapshotChanges();
    }
    // ----------------- ENQUIRIES ---------------
    sendEnquiry(data) {
        this.firestore.collection('Enquiries').add(data);
    }
    getEnquiries() {
        return this.firestore.collection('Enquiries', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
    }
    deleteEnquiryById(id) {
        this.firestore.collection('Enquiries').doc(id).delete();
    }
    // ----------------- EVENTS ---------------
    createEvent(event) {
        this.firestore.collection('Events').add(event);
    }
    getAllEvents() {
        return this.firestore.collection('Events', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
    }
    getActiveEvents() {
        return this.firestore.collection('Events', ref => ref.where('status', '==', 'Active')).snapshotChanges();
    }
    deleteEventById(id) {
        this.firestore.collection('Events').doc(id).delete();
    }
    updateEventById(id, data) {
        this.firestore.collection('Events').doc(id).update(data);
    }
    updateEventStatusById(id, status_desc) {
        this.firestore.collection('Events').doc(id).update({
            status: status_desc
        });
    }
    // ----------------- REFREE ---------------
    addRefree(data) {
        this.firestore.collection('Refree').add(data);
    }
    getAllRefrees() {
        return this.firestore.collection('Refree', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
    }
    updateRefreeById(id, data) {
        this.firestore.collection('Refree').doc(id).update(data);
    }
    deleteRefreeById(id) {
        this.firestore.collection('Refree').doc(id).delete();
    }
    // ----------------- MATCH RESULTS ---------------
    addMatchResults(data) {
        this.firestore.collection('MatchResults').add(data);
    }
    getAllMatchResults() {
        return this.firestore.collection('MatchResults', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
    }
    getFiveMatchResults() {
        return this.firestore.collection('MatchResults', ref => ref.orderBy('createdDate', 'desc').limit(5)).snapshotChanges();
    }
    deleteMatchResultById(id) {
        this.firestore.collection('MatchResults').doc(id).delete();
    }
    updateMatchResults(id, data) {
        this.firestore.collection('MatchResults').doc(id).update(data);
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

/***/ "./src/app/shared/services/utility.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/utility.service.ts ***!
  \****************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilityService = class UtilityService {
    constructor() { }
    convertDateToEPOC(date) {
        var dateObj = new Date(date);
        return dateObj.getTime();
    }
    getDateFromEpoc(timestamp) {
        let dateObj = new Date(timestamp);
        let date = (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();
        return date;
    }
};
UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilityService);



/***/ }),

/***/ "./src/app/slingshot/slingshot.component.scss":
/*!****************************************************!*\
  !*** ./src/app/slingshot/slingshot.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#game {\n  font-family: \"Didact Gothic\", sans-serif;\n  overflow-x: hidden;\n  margin-top: 80px;\n}\n#game .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#game .card:hover,\n#game .list-group-item:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n#game .card:hover .category-title,\n#game .list-group-item:hover .category-title {\n  color: #ff3600;\n}\n#game .sling-img {\n  width: 80%;\n}\n#game .img {\n  width: 100%;\n}\n#game .category {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n#game .circle {\n  border-radius: 50%;\n  padding: 5px 10px 5px 10px;\n  font-weight: bold;\n  color: #fff;\n  background-color: #000;\n}\n#game .circle-10 {\n  border-radius: 50%;\n  padding: 5px 7px 5px 7px;\n  font-weight: bold;\n  color: #fff;\n  background-color: #000;\n}\n#game .list-group-item {\n  font-size: 18px !important;\n}\n#game .tool:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .sling-img {\n    width: 100% !important;\n  }\n\n  .game-info {\n    margin-top: 20px;\n    padding-top: 0px !important;\n  }\n\n  .cat-cards {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n\n  .page-title {\n    font-size: 1.2rem !important;\n  }\n\n  .list-group-item {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n\n  .tool {\n    margin-top: 10px !important;\n    width: 120px !important;\n    height: 120px !important;\n  }\n\n  .row-bottom {\n    margin-top: 0px !important;\n  }\n\n  .col {\n    padding: 1rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpbmdzaG90L0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9zbGluZ3Nob3Qvc2xpbmdzaG90LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zbGluZ3Nob3QvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxzbGluZ3Nob3RcXHNsaW5nc2hvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzNFQTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDhFRjtBQzdFRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEK0VKO0FDN0VFOztFQUVFLDZDQUFBO0FEK0VKO0FDOUVJOztFQUNFLGNGQ1U7QUNnRmhCO0FDOUVFO0VBQ0UsVUFBQTtBRGdGSjtBQzlFRTtFQUNFLFdBQUE7QURnRko7QUM5RUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEZ0ZKO0FDOUVFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FEZ0ZKO0FDOUVFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FEZ0ZKO0FDOUVFO0VBQ0UsMEJBQUE7QURnRko7QUM3RUU7RUFDRSx3REFBQTtBRCtFSjtBQzNFQTtFQUVFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFRDZFRjs7RUMzRUE7SUFDRSxzQkFBQTtFRDhFRjs7RUM1RUE7SUFDRSxnQkFBQTtJQUNBLDJCQUFBO0VEK0VGOztFQzdFQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RURnRkY7O0VDOUVBO0lBQ0UsNEJBQUE7RURpRkY7O0VDL0VBO0lBQ0UsNkJBQUE7SUFDQSw4QkFBQTtFRGtGRjs7RUMvRUE7SUFDRSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0Esd0JBQUE7RURrRkY7O0VDaEZBO0lBQ0UsMEJBQUE7RURtRkY7O0VDakZBO0lBQ0Usd0JBQUE7RURvRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NsaW5nc2hvdC9zbGluZ3Nob3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jZ2FtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2dhbWUgLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn1cbiNnYW1lIC5jYXJkOmhvdmVyLFxuI2dhbWUgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbiNnYW1lIC5jYXJkOmhvdmVyIC5jYXRlZ29yeS10aXRsZSxcbiNnYW1lIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIgLmNhdGVnb3J5LXRpdGxlIHtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG4jZ2FtZSAuc2xpbmctaW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cbiNnYW1lIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNnYW1lIC5jYXRlZ29yeSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbiNnYW1lIC5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4jZ2FtZSAuY2lyY2xlLTEwIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHggN3B4IDVweCA3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbiNnYW1lIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cbiNnYW1lIC50b29sOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLnNsaW5nLWltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5nYW1lLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNhdC1jYXJkcyB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIH1cblxuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC50b29sIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJvdy1ib3R0b20ge1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbCB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4jZ2FtZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIC5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVyLFxyXG4gIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgY29sb3I6ICR0aC1jb2xvci1kYXJrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2xpbmctaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICAuY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5jaXJjbGUtMTAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4IDdweCA1cHggN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudG9vbDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvL21vYmlsZSBkZXZpY2VcclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAuc2xpbmctaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5nYW1lLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhdC1jYXJkcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRvb2wge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yb3ctYm90dG9tIHtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29sIHtcclxuICAgIHBhZGRpbmc6IDFyZW0haW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */");

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
/* harmony import */ var _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/modal-data.service */ "./src/app/shared/services/modal-data.service.ts");



let SlingshotComponent = class SlingshotComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.categories = [];
        this.rules = [];
    }
    ngOnInit() {
        this.categories = this.dataService.getSlingshotCategories();
        this.rules = this.dataService.getSlingshotRules();
        window.scrollTo(0, 0);
    }
};
SlingshotComponent.ctorParameters = () => [
    { type: _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_2__["ModalDataService"] }
];
SlingshotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slingshot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slingshot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slingshot/slingshot.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slingshot.component.scss */ "./src/app/slingshot/slingshot.component.scss")).default]
    })
], SlingshotComponent);



/***/ }),

/***/ "./src/app/support/support.component.scss":
/*!************************************************!*\
  !*** ./src/app/support/support.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#support {\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#support .title {\n  font-family: \"Righteous\";\n}\n#support .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#support .img-area img {\n  width: 100%;\n}\n#support .icon-circle {\n  padding: 10px;\n  border-radius: 50%;\n  font-size: 20px;\n  text-align: center;\n  background: black;\n  margin-right: 15px;\n  width: 40px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcG9ydC9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdXBwb3J0L0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcc3VwcG9ydFxcc3VwcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVJLFlBQUE7QUNDSjtBREVBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjtBREdBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQztFQUNHLGdCQUFBO0FDSEo7QURNQztFQUNHLG1CQUFBO0FDSEo7QURPQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTEo7QURTQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUE7O0VBRUksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNQSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRFlJO0VBQ0ksMEJBQUE7QUNUUjtBQzVFQTtFQUNJLHdDQUFBO0FEK0VKO0FDOUVJO0VBQ0ksd0JBQUE7QURnRlI7QUM5RUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURnRlI7QUMvRVE7RUFDRSxXQUFBO0FEaUZWO0FDN0VNO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEK0VSIiwiZmlsZSI6InNyYy9hcHAvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuI3N1cHBvcnQge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG59XG4jc3VwcG9ydCAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcbn1cbiNzdXBwb3J0IC5pbWctYXJlYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jc3VwcG9ydCAuaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jc3VwcG9ydCAuaWNvbi1jaXJjbGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbiNzdXBwb3J0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcclxuICAgIH1cclxuICAgIC5pbWctYXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb24tY2lyY2xlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SupportComponent = class SupportComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.enquiryForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
};
SupportComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.component.scss */ "./src/app/support/support.component.scss")).default]
    })
], SupportComponent);



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
        apiKey: "AIzaSyBBxCGm7ikvSRr0zxcAVF3J6XLwBdAxitE",
        authDomain: "slingshot-association-maha.firebaseapp.com",
        databaseURL: "https://slingshot-association-maha.firebaseio.com",
        projectId: "slingshot-association-maha",
        storageBucket: "slingshot-association-maha.appspot.com",
        messagingSenderId: "932012418325",
        appId: "1:932012418325:web:b293d4927597ad32e4351c",
        measurementId: "G-T7T1NC0YNJ"
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