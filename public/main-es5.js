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


    __webpack_exports__["default"] = "<section id=\"admin\" class=\"bg-offwhite pb-5\">\r\n    <div class=\"mt-5\">\r\n        <div class=\"row justify-content-center\">\r\n            <h2><strong>Welcome To Association</strong></h2>\r\n        </div>\r\n        <div class=\"row actions justify-content-center mt-3 p-3\">\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./requests\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Affiliation</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./events\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Events</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./match\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Match Results</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./refree\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Refree</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./enquiries\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Enquiries</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"card mt-3 text-white bg-dark\" routerLink=\"./profile\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Profile</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"mt-5 bg-light pl-3 pr-3\">\r\n    <router-outlet></router-outlet>\r\n</div>";
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


    __webpack_exports__["default"] = "<section id=\"approval\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Approval Requests <span\r\n                        class=\"badge badge-primary\">{{affiliatinRequests.length}}</span></strong></h2>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"row justify-content-end mt-5\">\r\n        <div class=\"col-sm-4 col-xs-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" #searchKey\r\n                (keyup)=\"filterResult(searchKey.value)\">\r\n        </div>\r\n    </div> -->\r\n    <div class=\"data-table mb-5 mt-3 table-responsive\" style=\"border:1px solid #00000017;\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{i+1}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"districtName\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Requested For </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"text-capitalize\">\r\n                    {{element.requestedDistrict.name}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.members[0].firstName}} {{element.members[0].middleName}} {{element.members[0].lastName}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"mobile\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Mobile </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.members[0].mobile}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"status\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Status </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"10%\" class=\"text-capitalize text-info\">\r\n                    {{element.status}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Symbol Column -->\r\n            <ng-container matColumnDef=\"actions\" class=\"pull-right\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\">\r\n                    <div class=\"row p-2\">\r\n                        <a class=\"btn text-info pointer\" (click)=\"getPersonInfo(element)\" matTooltip=\"Edit\"\r\n                            matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\r\n                        <a class=\"btn text-danger pointer\" (click)=\"deleteRequest(element.id)\" matTooltip=\"Delete\"\r\n                            matTooltipPosition=\"above\"><i class=\"fa fa-trash text-danger\"></i></a>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"100 \" [pageSize]=\"5 \" [pageSizeOptions]=\"[5, 10, 25, 50] \" showFirstLastButtons>\r\n        </mat-paginator>\r\n    </div>\r\n\r\n    <!-- TABLE SECTION 2 -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Affiliated Districts <span\r\n                        class=\"badge badge-primary\">{{approvedDistricts.length}}</span></strong></h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"data-table mb-5 mt-3 table-responsive\" style=\"border:1px solid #00000017;\">\r\n        <table mat-table [dataSource]=\"dataSource2\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{i+1}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"districtName\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> District Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.requestedDistrict.name}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"member\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Member Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"30%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.members[0].firstName}} {{element.members[0].middleName}} {{element.members[0].lastName}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"approvedOn\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Approved On </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\">\r\n                    {{element.approvedOn | date: 'dd'}}-{{element.approvedOn | date:'MMM'}}-{{element.approvedOn | date: 'yyyy'}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"status\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Status </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"15%\" class=\"text-capitalize text-info\">\r\n                    {{element.status}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Symbol Column -->\r\n            <ng-container matColumnDef=\"actions\" class=\"pull-right\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"10%\">\r\n                    <div class=\"row p-2\">\r\n                        <a class=\"btn text-info pointer\" (click)=\"getRegisteredDistrctInfo(element)\" matTooltip=\"View\"\r\n                            matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns2; let i = index\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"100 \" [pageSize]=\"5 \" [pageSizeOptions]=\"[5, 10, 25, 50] \" showFirstLastButtons>\r\n        </mat-paginator>\r\n    </div>\r\n\r\n    <!-- TABLE SECTION 3 -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Old Affiliations <span\r\n                        class=\"badge badge-primary\">{{oldAffiliations.length}}</span></strong></h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"data-table mb-5 mt-3 table-responsive\" style=\"border:1px solid #00000017;\">\r\n        <table mat-table [dataSource]=\"dataSource3\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{i+1}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"districtName\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> District Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.requestedDistrict.name}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"member\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Member Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"30%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.members[0].firstName}} {{element.members[0].middleName}} {{element.members[0].lastName}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"approvedOn\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Approved On </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"35%\" class=\"text-capitalize\">\r\n                    {{element.approvedOn | date: 'dd'}}-{{element.approvedOn | date:'MMM'}}-{{element.approvedOn | date: 'yyyy'}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"status\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Status </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"35%\" class=\"text-capitalize text-danger\">\r\n                    {{element.status}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns3; let i = index\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"100 \" [pageSize]=\"5 \" [pageSizeOptions]=\"[5, 10, 25, 50] \" showFirstLastButtons>\r\n        </mat-paginator>\r\n    </div>\r\n\r\n    <div *ngIf=\"showSpinner\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAffiliationRequestsDialogsDistrictApprovalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"text-center bg-dark text-white p-3 text-capitalize\">{{title}}</h3>\r\n<mat-dialog-content>\r\n    <table class=\"table table-bordered mt-3\" width=\"100%\">\r\n        <tbody>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Name</strong></td>\r\n                <td width=\"70%\" class=\"text-capitalize\">{{personData.members[0].firstName}} {{personData.members[0].middleName}} {{personData.members[0].lastName}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Address</strong></td>\r\n                <td width=\"70%\" class=\"text-capitalize\">{{personData.members[0].addressLine1}}, {{personData.members[0].addressLine2}}, {{personData.members[0].city}}, {{personData.members[0].district}}, Pin Code - {{personData.members[0].pin}}.</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Email</strong></td>\r\n                <td width=\"70%\">{{personData.members[0].email}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Mobile</strong></td>\r\n                <td width=\"70%\">{{personData.members[0].mobile}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Date of Birth</strong></td>\r\n                <td width=\"70%\">\r\n                    {{personData.members[0].dateOfBirth | date: 'dd'}}-{{personData.members[0].dateOfBirth | date: 'MMM'}}-{{personData.members[0].dateOfBirth | date: 'yyy'}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>PAN No.</strong></td>\r\n                <td width=\"70%\" class=\"text-uppercase\">{{personData.members[0].panNo}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\" class=\"\"><strong>Aadhaar No.</strong></td>\r\n                <td width=\"70%\">{{personData.members[0].aadhaarNo}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</mat-dialog-content>\r\n\r\n<div mat-dialog-actions class=\"pb-4 row justify-content-center\">\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"approveDistrict(personData)\" *ngIf=\"!flag\">Approve</button>\r\n    <button mat-button class=\"btn btn-danger\" (click)=\"deleteAffiliation(personData)\" *ngIf=\"flag\">Delete Affiliatioin</button>\r\n    <button mat-button class=\"btn sling-btn ml-2\" (click)=\"close()\">Close</button>\r\n</div>\r\n\r\n<div *ngIf=\"showSpinner\">\r\n    <ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\r\n    </ngx-spinner>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/enquiries/enquiries.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/enquiries/enquiries.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminEnquiriesEnquiriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"enquiries\">\r\n    <div class=\"\">\r\n        <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Enquiries <span class=\"badge badge-primary\">{{enquiries.length}}</span></strong></h2>\r\n    </div>\r\n    <div class=\"data-table mt-4 mb-5 table-responsive\" style=\"border:1px solid #00000017;\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\r\n\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\r\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"5%\"> {{i+1}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"15%\" class=\"empNameLink pointer text-capitalize\">\r\n                    {{element.firstName}} {{element.lastName}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"email\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Email </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"15%\" class=\"text-capitalize\"> {{element.email}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"mobile\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Mobile </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"10%\" class=\"text-capitalize\"> {{element.mobile}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"message\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Message </th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"40%\" class=\"text-capitalize\"> {{element.message}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"action\" class=\"pull-right\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\r\n                <td mat-cell *matCellDef=\"let element\" width=\"5%\">\r\n                    <div class=\"row p-2\">\r\n                        <a class=\"btn text-danger pointer\" (click)=\"deleteEnquiryById(element.id)\" matTooltip=\"Delete\" matTooltipPosition=\"above\"><i class=\"fa fa-trash text-danger\"></i></a>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"100\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\" showFirstLastButtons>\r\n        </mat-paginator>\r\n    </div>\r\n\r\n    <div *ngIf=\"showSpinner\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/dialogs/create-event.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/dialogs/create-event.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminEventsDialogsCreateEventHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center p-3 bg-dark text-white\">Create Event</h2>\r\n\r\n<mat-dialog-content>\r\n    <form [formGroup]=\"eventForm\">\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Event Title</strong></label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"eventTitle\" [ngClass]=\"{'is-invalid':eventForm.get('eventTitle').touched && eventForm.get('eventTitle').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Event Addresss</strong></label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"eventAddress\" [ngClass]=\"{'is-invalid':eventForm.get('eventAddress').touched && eventForm.get('eventAddress').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Event Date</strong></label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"date\" class=\"form-control\" formControlName=\"eventDate\" [ngClass]=\"{'is-invalid':eventForm.get('eventDate').touched && eventForm.get('eventDate').invalid}\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-secondary\" type=\"button\">\r\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label> <strong>Contact Persons</strong> </label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"contactPersons\" [ngClass]=\"{'is-invalid':eventForm.get('contactPersons').touched && eventForm.get('contactPersons').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Contact Numbers</strong></label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"contactNumbers\" [ngClass]=\"{'is-invalid':eventForm.get('contactNumbers').touched && eventForm.get('contactNumbers').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label><strong>Status</strong></label>\r\n                <div class=\"form-group\">\r\n                    <select formControlName=\"status\" class=\"form-control\" [ngClass]=\"{'is-invalid':eventForm.get('status').touched && eventForm.get('status').invalid}\">\r\n                        <option value=\"\" selected disabled>Select status</option>\r\n                        <option value=\"Active\" class=\"text-success\">Active</option>\r\n                        <option value=\"Inactive\" class=\"text-danger\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n<div mat-dialog-actions class=\"pb-4 pt-4 row justify-content-center\">\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"createEvent()\" [disabled]=\"!eventForm.valid\" *ngIf=\"!isEdit\">Create</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"updateEvent()\" [disabled]=\"!eventForm.valid\" *ngIf=\"isEdit\">Update</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"close()\" cdkFocusInitial>Close</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminEventsEventsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"events\">\n    <div class=\"row justify-content-between\">\n        <div class=\"col-6\">\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Events <span class=\"badge badge-primary\">{{eventData.length}}</span></strong></h2>\n        </div>\n        <div class=\"col-6\">\n            <button (click)=\"createEvent()\" class=\"btn sling-btn pull-right\">Create events</button>\n        </div>\n    </div>\n    <div class=\"data-table mt-3 mb-5 table-responsive\" style=\"border:1px solid #00000017;\">\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"index\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{i+1}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"eventTitle\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Event Title </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"40%\" class=\"empNameLink pointer text-capitalize\">\n                    {{element.eventTitle}}</td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"eventDate\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Event Date </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\">\n                    {{element.eventDate | date: 'dd'}}-{{element.eventDate | date:'MMM'}}-{{element.eventDate | date: 'yyyy'}}\n             </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"status\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Status </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize font-weight-bold text-success\"\n                    [ngClass]=\"{'text-danger':element.status === 'Inactive'}\"> {{element.status}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"actions\" class=\"text-right\">\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\">\n                    <div class=\"row p-2\">\n                        <a class=\"btn text-info pointer\" (click)=\"editEvent(element)\" matTooltip=\"Edit\" matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\n                        <a class=\"btn text-danger pointer\" (click)=\"deleteEventById(element.id)\" matTooltip=\"Delete\" matTooltipPosition=\"above\"><i class=\"fa fa-trash text-danger\"></i></a>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\n        </table>\n        <mat-paginator [length]=\"100\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\">\n        </mat-paginator>\n    </div>\n</section>\n\n<div *ngIf=\"showSpinner\">\n    <app-spinner></app-spinner>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMatchEventResultsMatchEventResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"match\">\n    <div class=\"container\">\n        <h2>Match Results</h2>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>profile works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/dialogs/add-refree-dialog.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/dialogs/add-refree-dialog.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRefreePanelDialogsAddRefreeDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center p-3 bg-dark text-white\">Add Refree</h2>\r\n\r\n<mat-dialog-content>\r\n    <form id=\"regForm\" class=\"mt-4\" [formGroup]=\"refreeForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">First Name</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"firstName\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('firstName').touched && refreeForm.get('firstName').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">Middle Name</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"middleName\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('middleName').touched && refreeForm.get('middleName').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">Last Name</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('lastName').touched && refreeForm.get('lastName').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"font-weight-bold\">Email</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':refreeForm.get('email').touched && refreeForm.get('email').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"refreeForm.get('email').errors?.required\">Field is required</span>\r\n                    <span *ngIf=\"refreeForm.get('email').invalid && !refreeForm.get('email').errors?.required\">\r\n                                Invalid email.</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"font-weight-bold\">Mobile No.</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"mobile\" maxlength=\"10\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('mobile').touched && refreeForm.get('mobile').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"refreeForm.get('mobile').errors?.required\">Field is required</span>\r\n                        <span\r\n                            *ngIf=\"refreeForm.get('mobile').invalid && !refreeForm.get('mobile').errors?.required\">\r\n                            Invalid Mobile Number</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <label class=\"font-weight-bold\">Address</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"address\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('address').touched && refreeForm.get('address').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">City</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"city\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('city').touched && refreeForm.get('city').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">District</label>\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"district\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('district').touched && refreeForm.get('district').invalid}\">\r\n                        <option selected disabled>select district</option>\r\n                        <option *ngFor=\"let dist of allDistricts\" value=\"{{dist.name}}\">{{dist.name}}</option>\r\n                    </select>\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        Field is required\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <label class=\"font-weight-bold\">Pin Code</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"pin\" maxlength=\"6\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('pin').touched && refreeForm.get('pin').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"refreeForm.get('pin').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"refreeForm.get('pin').invalid && !refreeForm.get('pin').errors?.required\">\r\n                            Invalid Pin Code</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"font-weight-bold\">Aadhaar No.</label>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"aadhaarNo\" maxlength=\"12\"\r\n                        [ngClass]=\"{'is-invalid':refreeForm.get('aadhaarNo').touched && refreeForm.get('aadhaarNo').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"refreeForm.get('aadhaarNo').errors?.required\">Field is required</span>\r\n                        <span\r\n                            *ngIf=\"refreeForm.get('aadhaarNo').invalid && !refreeForm.get('aadhaarNo').errors?.required\">\r\n                            Invalid Aadhaar No.</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"font-weight-bold\">Date of Birth</label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"date\" class=\"form-control\" formControlName=\"dateOfBirth\"\r\n                            [ngClass]=\"{'is-invalid':refreeForm.get('dateOfBirth').touched && refreeForm.get('dateOfBirth').invalid}\"\r\n                            max=\"Date.now()\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-secondary\" type=\"button\">\r\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col-sm-4 mt-3\">\r\n                <label class=\"font-weight-bold\"><strong>Passport Photo</strong></label>\r\n                <input type=\"file\" id=\"files3\" name=\"files\" formControlName=\"file\"\r\n                    [ngClass]=\"{'is-invalid':refreeForm.get('file').touched && refreeForm.get('file').invalid}\">\r\n                <span class=\"invalid-feedback alert alert-danger\">\r\n                    <span *ngIf=\"refreeForm.get('file').errors?.required\">Field is required</span>\r\n                </span>\r\n            </div>\r\n        </div> -->\r\n    </form>\r\n</mat-dialog-content>\r\n<div mat-dialog-actions class=\"pb-4 pt-4 row justify-content-center\">\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"addRefree()\" [disabled]=\"!refreeForm.valid\"\r\n        *ngIf=\"!isEdit\">Create</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"updateRefree()\" [disabled]=\"!refreeForm.valid\"\r\n        *ngIf=\"isEdit\">Update</button>\r\n    <button mat-button class=\"btn sling-btn\" (click)=\"close()\" cdkFocusInitial>Close</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/refree-panel.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/refree-panel.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRefreePanelRefreePanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"refree-panel\">\n    <div class=\"row justify-content-between\">\n        <div class=\"col-6\">\n            <h2><strong><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Referee <span class=\"badge badge-primary\">{{refreeData.length}}</span></strong></h2>\n        </div>\n        <div class=\"col-6\">\n            <button (click)=\"addRefree()\" class=\"btn sling-btn pull-right\">Add Refree</button>\n        </div>\n    </div>\n    <div class=\"data-table mt-3 mb-5 table-responsive\" style=\"border:1px solid #00000017;\">\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\" width=\"100%\">\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"index\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> # </th>\n                <td mat-cell *matCellDef=\"let element; let i = index\" width=\"10%\"> {{i+1}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Name </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"25%\" class=\"empNameLink pointer text-capitalize\">\n                    {{element.name}}</td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"email\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Email </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\"> {{element.email}} </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"mobile\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> Mobile </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"20%\" class=\"text-capitalize\"> {{element.mobile}} </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"district\">\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\"> District </th>\n                <td mat-cell *matCellDef=\"let element\" width=\"10%\" class=\"text-capitalize\"> {{element.district}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"actions\">\n                <th mat-header-cell *matHeaderCellDef class=\"bg-dark text-white\">Action</th>\n                <td mat-cell *matCellDef=\"let element\" width=\"15%\">\n                    <div class=\"row p-2\">\n                        <a class=\"btn text-info pointer\" (click)=\"editRefree(element)\" matTooltip=\"Edit\"\n                            matTooltipPosition=\"above\"><i class=\"fa fa-pencil\"></i></a>\n                        <a class=\"btn text-danger pointer\" (click)=\"deleteRefree(element.id)\" matTooltip=\"Delete\"\n                            matTooltipPosition=\"above\"><i class=\"fa fa-trash text-danger\"></i></a>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"></tr>\n        </table>\n        <mat-paginator [length]=\"100\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 50]\">\n        </mat-paginator>\n    </div>\n</section>\n\n<div *ngIf=\"showSpinner\">\n    <app-spinner></app-spinner>\n</div>";
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


    __webpack_exports__["default"] = "<section id=\"affiliation-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"head-sec text-center\">\r\n            <h2>Affiliated Districts</h2>\r\n            <p class=\"text-muted\">Some districts are not affiliated yet, for affiliation please contact.</p>\r\n            <div class=\"d-flex justify-content-center search-sec h-100\" *ngIf=\"false\">\r\n                <div class=\"searchbar\">\r\n                    <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Search...\" #search (keyup)=\"searchDistrict(search.value)\">\r\n                    <a class=\"search_icon\"><i class=\"fa fa-search\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row dist-sec mt-3 justify-content-center\">\r\n            <div class=\"col-sm-4\" *ngFor=\"let dist of registeredDistrictsList\">\r\n                <div class=\"card mt-3 text-white bg-dark\" (click)=\"getDistrictInfo(dist.id)\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">{{dist.name}}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <i class=\"fa fa-caret-down text-center\"></i>\r\n        </div>\r\n\r\n        <div class=\"dist-info jumbotron\">\r\n            <div>\r\n                <h2 class=\"text-center\"><i class=\"fa fa-bullseye mr-2\"></i>{{selectedDistrictInfo.requestedDistrict.name}}</h2>\r\n                <div class=\"row raw-info justify-content-center mt-5\">\r\n                    <div class=\"col-sm-8\">\r\n                        <p class=\"text-justify\">This district is registered under \"Slingshot Sports Association of Maharashtra, India\" affilated to - \"Indian Slingshot Sport Federation\", \"Asian Slingshot Sport Federation\", \"World organizes Slingshot Sport Federation. Affiliated\r\n                            on Date - {{selectedDistrictInfo.approvedOn}}\"</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center mt-4\">\r\n                    <h4><strong> <i class=\"fa fa-user-circle\"></i> Members</strong></h4>\r\n                </div>\r\n                <div class=\"row justify-content-center text-center\">\r\n                    <div class=\"col-sm-4\" *ngFor=\"let member of selectedDistrictInfo.members\">\r\n                        <div class=\"card card-cascade\">\r\n                            <div class=\"view view-cascade overlay\">\r\n                                <div class=\"img-area mt-5\">\r\n                                    <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body card-body-cascade text-center\">\r\n                                <h4 class=\"card-title text-capitalize\"><strong>Mr. {{member.firstName}} {{member.lastName}}</strong></h4>\r\n                                <span class=\"font-weight-bold text-capitalize text-info\">({{member.role}})</span><br>\r\n                                <span class=\"font-weight-bold\">{{member.email}}</span><br>\r\n                                <span class=\"font-weight-bold\">{{member.mobile}}</span>\r\n                                <div class=\"social-icons mt-3\">\r\n                                    <i class=\"fa fa-phone\" [matTooltip]=\"member.mobile\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-envelope\" [matTooltip]=\"member.email\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"spinner-area\" *ngIf=\"showSpinner\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n</section>";
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


    __webpack_exports__["default"] = "<section id=\"association\">\r\n    <div class=\"jumbotron dist-area\">\r\n        <div class=\"row justify-content-center p-2\">\r\n            <div class=\"col-sm-5 alert alert-info text-center\">\r\n                Note: Districts that are already registered are not available in the list.\r\n            </div>\r\n        </div>\r\n        <h2 class=\"text-center title mt-5\">Join Us</h2>\r\n        <h3 class=\"text-center mt-3 reg-title\"><strong>Select District To Register</strong></h3>\r\n        <div class=\"row justify-content-center mt-4\">\r\n            <div class=\"col-sm-5\">\r\n                <select class=\"form-control\" height=\"50px\" (change)=\"onDistrictChange($event.target.value)\">\r\n                    <option selected disabled>Select District</option>\r\n                    <option *ngFor=\"let dist of availableDistricts\" value=\"{{dist.id}}\">{{dist.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row text-center justify-content-center mt-2\">\r\n            <div class=\"col-sm-2\">\r\n                <input type=\"button\" class=\"btn form-control reg-button\" value=\"Register\" height=\"50px\"\r\n                    (click)=\"registerDistrict()\" [disabled]=\"disabledRegBtn\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container form-area mt-5\" *ngIf=\"showForm\">\r\n        <h4 class=\"text-center title\">Affiliation For \"{{selectedDistrict.name}}\" District</h4>\r\n        <form id=\"regForm\" class=\"mt-4\" [formGroup]=\"registerForm\">\r\n            <h2 class=\"text-center\">Registration Form</h2>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>First Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"firstName\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('firstName').touched && registerForm.get('firstName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Middle Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"middleName\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('middleName').touched && registerForm.get('middleName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Last Name</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"lastName\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('lastName').touched && registerForm.get('lastName').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Email</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('email').touched && registerForm.get('email').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('email').errors?.required\">Field is required</span>\r\n                            <span\r\n                                *ngIf=\"registerForm.get('email').invalid && !registerForm.get('email').errors?.required\">\r\n                                Invalid email.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>Mobile No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" matTooltip=\"Mobile Number use for notifications!\"\r\n                            matTooltipPosition=\"above\" class=\"form-control\" formControlName=\"mobile\" maxlength=\"10\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('mobile').touched && registerForm.get('mobile').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('mobile').errors?.required\">Field is required</span>\r\n                            <span\r\n                                *ngIf=\"registerForm.get('mobile').invalid && !registerForm.get('mobile').errors?.required\">\r\n                                Invalid Mobile Number</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Gender</label>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" formControlName=\"gender\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('gender').touched && registerForm.get('gender').invalid}\">\r\n                            <option selected disabled>Select Gender</option>\r\n                            <option value=\"Male\">Male</option>\r\n                            <option value=\"Female\">Female</option>\r\n                            <option value=\"Other\">Other</option>\r\n                        </select>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>Date of Birth</label>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"date\" class=\"form-control\" formControlName=\"dateOfBirth\"\r\n                                [ngClass]=\"{'is-invalid':registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').invalid}\"\r\n                                max=\"Date.now()\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-secondary\" type=\"button\">\r\n                                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <span class=\"invalid-feedback alert alert-danger\">\r\n                                Field is required\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <label>Address Line 1</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"addressLine1\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('addressLine1').touched && registerForm.get('addressLine1').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <label>Address Line 2</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"addressLine2\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('addressLine2').touched && registerForm.get('addressLine2').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>City</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-capitalize\" formControlName=\"city\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('city').touched && registerForm.get('city').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>District</label>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" formControlName=\"district\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('district').touched && registerForm.get('district').invalid}\">\r\n                            <option selected disabled>select district</option>\r\n                            <option *ngFor=\"let dist of allDistricts\" value=\"{{dist.name}}\">{{dist.name}}</option>\r\n                        </select>\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Field is required\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Pin Code</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pin\" maxlength=\"6\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('pin').touched && registerForm.get('pin').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('pin').errors?.required\">Field is required</span>\r\n                            <span *ngIf=\"registerForm.get('pin').invalid && !registerForm.get('pin').errors?.required\">\r\n                                Invalid Pin Code</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <label>Aadhaar No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"aadhaarNo\" maxlength=\"12\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('aadhaarNo').touched && registerForm.get('aadhaarNo').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('aadhaarNo').errors?.required\">Field is required</span>\r\n                            <span\r\n                                *ngIf=\"registerForm.get('aadhaarNo').invalid && !registerForm.get('aadhaarNo').errors?.required\">\r\n                                Invalid Aadhaar No.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <label>PAN No.</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control text-uppercase\" formControlName=\"panNo\" maxlength=\"10\"\r\n                            [ngClass]=\"{'is-invalid':registerForm.get('panNo').touched && registerForm.get('panNo').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            <span *ngIf=\"registerForm.get('panNo').errors?.required\">Field is required</span>\r\n                            <span\r\n                                *ngIf=\"registerForm.get('panNo').invalid && !registerForm.get('panNo').errors?.required\">\r\n                                Invalid PAN No.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <hr>\r\n            <div class=\"row mt-4 mb-3\">\r\n                <div class=\"col-sm-4\">\r\n                    <label>Email</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':registerForm.get('email').touched && registerForm.get('email').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('email').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('email').invalid && !registerForm.get('email').errors?.required\">\r\n                                    Invalid email.</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Password</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{'is-invalid':registerForm.get('password').touched && registerForm.get('password').invalid}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                                <span *ngIf=\"registerForm.get('password').errors?.required\">Field is required</span>\r\n                        <span *ngIf=\"registerForm.get('password').hasError('minlength') && !registerForm.get('password').errors?.required\">\r\n                            Minimum 8 characters required</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <label>Confirm Password</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{'is-invalid':registerForm.get('confirmPassword').touched && registerForm.get('confirmPassword').invalid && registerForm.get('confirmPassword').errors?.isConfirmPassword}\">\r\n                        <span class=\"invalid-feedback alert alert-danger\">\r\n                            Password not matched\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"row mt-3\">\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>Aadhar Card</strong></label>\r\n                    <input type=\"file\" id=\"files1\" name=\"files1\" (input)=\"validateFileUpload($event, 'doc1')\"\r\n                        formControlName=\"file1\"\r\n                        [ngClass]=\"{'is-invalid':registerForm.get('file1').touched && registerForm.get('file1').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file1').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>PAN Card</strong></label>\r\n                    <input type=\"file\" id=\"files2\" name=\"files2\" formControlName=\"file2\"\r\n                        (input)=\"validateFileUpload($event, 'doc2')\"\r\n                        [ngClass]=\"{'is-invalid':registerForm.get('file2').touched && registerForm.get('file2').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file2').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <label for=\"\"><strong>Passport Photo</strong></label>\r\n                    <input type=\"file\" id=\"files3\" name=\"files3\" formControlName=\"file3\"\r\n                        (input)=\"validateFileUpload($event, 'doc3')\"\r\n                        [ngClass]=\"{'is-invalid':registerForm.get('file3').touched && registerForm.get('file3').invalid}\">\r\n                    <span class=\"invalid-feedback alert alert-danger\">\r\n                        <span *ngIf=\"registerForm.get('file3').errors?.required\">Field is required</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid1 || registerForm.get('file1').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                    Adhaar Card: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid2 || registerForm.get('file2').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                    PAN Card: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"isFileValid3 || registerForm.get('file3').errors?.required\">\r\n                <span class=\"col-sm-12 alert alert-danger m-3\">\r\n                    Photo: File format should be .png .jpeg .jpg and less than 1MB.\r\n                </span>\r\n            </div>\r\n            <div class=\"row  mt-5\">\r\n                <div class=\"col-sm-12\">\r\n                    <mat-checkbox [(ngModel)]=\"isChecked\" formControlName=\"terms\">Accept Terms & Conditions\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"mt-5 text-center\">\r\n                <input type=\"button\" class=\"btn act-btn pr-4 pl-4\" value=\"Register\" height=\"50px\"\r\n                    (click)=\"onFormSubmit()\"\r\n                    [disabled]=\"!registerForm.valid || !isFileValid1 || !isFileValid2 || !isFileValid3 || !isChecked\">\r\n                <input type=\"button\" class=\"btn act-btn ml-2 pr-4 pl-4\" value=\"clear\" height=\"50px\"\r\n                    (click)=\"onFormReset()\">\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"spinner-area\" *ngIf=\"showSpinner\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommitteeCommitteeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"committee\">\n    <div class=\"jumbotron text-center\">\n        <h2 class=\"page-title\">Slingshot Sports Association Members of Maharashtra</h2>\n    </div>\n    <div class=\"container mb-5\">\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Association Members</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of members; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\">{{member.name}}</td> \n                    <td width=\"40%\">{{member.role}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Referee Committee</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let referee of referees; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\">{{referee.firstName}} {{referee.middleName}} {{referee.lastName}}</td> \n                    <td width=\"40%\">{{referee.district}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Coaches Panel</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of members; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\">{{member.name}}</td> \n                    <td width=\"40%\">{{member.role}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Affiliation Committee</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of members; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\">{{member.name}}</td> \n                    <td width=\"40%\">{{member.role}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Technical Committee</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of members; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\">{{member.name}}</td> \n                    <td width=\"40%\">{{member.role}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"mt-5\">\n            <h5 class=\"font-weight-bold\"><i class=\"fa fa-gg-circle mr-2\" aria-hidden=\"true\"></i>Selection Committee</h5>\n            <table class=\"table table-bordered mt-3\">\n                <tr *ngFor=\"let member of members; let i = index;\" class=\"bg-white\">\n                    <td width=\"10%\">{{ i+1 }}</td>\n                    <td width=\"50%\">{{member.name}}</td> \n                    <td width=\"40%\">{{member.role}}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</section>";
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


    __webpack_exports__["default"] = "<section id=\"contact-us\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2>Contact Us</h2>\r\n    </div>\r\n    <div class=\"container mt-5\">\r\n        <div class=\"association-info text-center\">\r\n            <h2>Contact Our Association</h2>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-map-marker\"></i></span>\r\n                    <br>\r\n                    <p>Matoshree Niwas, Dhamangaon By-Pass, Pimpalgaon, Yavatmal, Maharashtra, Pin Code - 445001.</p>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-phone\"></i></span>\r\n                    <br>\r\n                    <p>8180008641, 9511663616, 8432146555</p>\r\n                </div>\r\n                <div class=\"col-sm-4 mt-3\">\r\n                    <span><i class=\"fa fa-envelope\"></i></span>\r\n                    <br>\r\n                    <p style=\"word-wrap: break-word;\">slingshot.maha@gmail.com</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section id=\"contact-us1\" class=\"bg-offwhite pt-3 pb-5\">\r\n    <div class=\"container\">\r\n        <div class=\"user-info text-center mt-5\">\r\n            <h2>Our Members</h2>\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-sm-6 col-md-4 card-col\" *ngFor=\"let member of members\">\r\n                    <div class=\"card card-cascade\">\r\n                        <div class=\"view view-cascade overlay\">\r\n                            <div class=\"img-area mt-5\">\r\n                                <img [src]=\"member.pic\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body card-body-cascade text-center\">\r\n                            <h4 class=\"mt-3 member-name\"><strong>{{member.name}}</strong></h4>\r\n                            <span class=\"text-info font-weight-bold\">({{member.role}})</span>\r\n                            <br>\r\n                            <span>{{member.email}}</span>\r\n                            <div class=\"social-icons mt-3\">\r\n                                <i class=\"fa fa-phone\" [matTooltip]=\"member.mobile\" matTooltipPosition=\"above\"></i>\r\n                                <i class=\"fa fa-envelope\" [matTooltip]=\"member.email\" matTooltipPosition=\"above\"></i>\r\n                                <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section id=\"contact-us2\" class=\"container\">\r\n    <div class=\"contact-form mt-5\">\r\n        <div class=\"text-center\">\r\n            <h2>Get in touch</h2>\r\n        </div>\r\n        <div class=\"row mt-5 mb-5\">\r\n            <div class=\"col-md-6\">\r\n                <iframe\r\n                    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.296419656939!2d78.1262283696957!3d20.4118795880123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3ef4606797df5%3A0x99fdaa3c4f6b7d9d!2sPimpalgaon%2C%20Yavatmal%2C%20Maharashtra%20445001!5e0!3m2!1sen!2sin!4v1583593786510!5m2!1sen!2sin\"\r\n                    width=\"100%\" class=\"shadow map\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"\r\n                    allowfullscreen=\"\"></iframe>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <form [formGroup]=\"contactForm\" class=\"contactForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control field\" placeholder=\"First Name\"\r\n                                    formControlName=\"firstName\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('firstName')?.touched && contactForm.get('firstName').invalid}\">\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    Field is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control field\" placeholder=\"Last Name\"\r\n                                    formControlName=\"lastName\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('lastName')?.touched && contactForm.get('lastName').invalid}\">\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    Field is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control field\" placeholder=\"Email\"\r\n                                    formControlName=\"email\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('email')?.touched && contactForm.get('email').invalid}\">\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    <span *ngIf=\"contactForm.get('email').errors?.required\">Field is required</span>\r\n                                    <span\r\n                                        *ngIf=\"contactForm.get('email').invalid && !contactForm.get('email').errors?.required\">\r\n                                        Invalid email.</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control field\" placeholder=\"Mobile\"\r\n                                    formControlName=\"mobile\" minlength=\"10\" maxlength=\"10\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('mobile')?.touched && contactForm.get('mobile').invalid}\">\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    <span *ngIf=\"contactForm.get('mobile').errors?.required\">Field is\r\n                                        required</span>\r\n                                    <span\r\n                                        *ngIf=\"contactForm.get('mobile').invalid && !contactForm.get('mobile').errors?.required\">\r\n                                        Invalid Mobile Number</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <textarea rows=\"4\" cols=\"50\" class=\"form-control\" placeholder=\"Message\"\r\n                                    formControlName=\"message\"\r\n                                    [ngClass]=\"{'is-invalid':contactForm.get('message')?.touched && contactForm.get('message').invalid}\"></textarea>\r\n                                <span class=\"invalid-feedback alert alert-danger\">\r\n                                    Field is required\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-sm-12\">\r\n                            <input type=\"button\" mat-raised-button class=\"btn sling-btn\" name=\"Send\" value=\"Send\"\r\n                                (click)=\"sendEnquiry()\" [disabled]=\"!contactForm.valid\">\r\n                            <input type=\"button\" mat-raised-button class=\"btn sling-btn ml-2\" name=\"clear\" value=\"Clear\"\r\n                                (click)=\"clearForm()\">\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
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


    __webpack_exports__["default"] = "<section class=\"home\">\r\n    <section id=\"banner-area\">\r\n        <div id=\"banner-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>SET YOUR GOAL WITH SLINGSHOT</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">read more</a> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner2.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>GET SLINGSHOT AFFILIATION</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">REGISTER</a> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption pt-5 pb-5\">\r\n                        <h5>ENJOY PLAYING SLINGSHOT</h5>\r\n                        <!-- <a href=\"#\" class=\"action-button\">read more</a> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#banner-carousel\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#banner-carousel\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"register-area\">\r\n        <div class=\"reg-panel\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"cta_content d-flex  flex-column align-items-md-center align-items-start text-center justify-content-start\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/logo.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"reg_text pt-3\">Affiliation Open For All District (Maharashtra)</div>\r\n                            <div class=\"mx-auto\"> <a class=\"action-button reg-btn mt-3\" routerLink=\"/association\">Register</a></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"welcome-area\" class=\"bg-offwhite wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-1 member-box\">\r\n                    <div class=\"ico-box active\">\r\n                        <figure class=\"d-flex justify-content-center mt-3\">\r\n                            <img class=\"shake-hand\" src=\"./assets/images/hand-shake.png\" alt=\"\">\r\n                        </figure>\r\n                        <header class=\"entry-header\">\r\n                            <h3 class=\"entry-title-box\">Become a part of Slingshot</h3>\r\n                        </header>\r\n                        <!-- <div class=\"entry-content\">\r\n                            <a class=\"btn outline mt-4\">Signup</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title welcome-title text-center\">Welcome to Association</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">We provide affiliation of slingshot game for the districts in Maharashtra. This is comes under Slingshot Sports Association of Maharashtra. To avail the affiliation please register. For the registered members of district we\r\n                                provide management of the participants and game information through this website. Get latest updates of matches and events. So Hurry Up to get Affiliation. </p>\r\n                        </div>\r\n                        <!-- <div class=\"entry-footer mt-2\">\r\n                            <a routerLink=\"association\" class=\"action-button\">read more</a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"game-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title text-center\">About Game</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">In INDIA, We are playing this game from our childhood. We have enjoyed lots of moment with this game to hit the target. Now lets make this game as our sports. We provide the opportunity to compete the people with this game,\r\n                                and achieve some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra, India<strong>\"</strong>. Please read the rules for this game before you start. </p>\r\n                        </div>\r\n                        <div class=\"entry-footer mt-2\">\r\n                            <a routerLink=\"sports\" class=\"action-button\">read more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-1 slingshot-box\">\r\n                    <img class=\"img shadow rounded\" src=\"./assets/images/slingshot1.jpg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"results-area\" class=\"wrapper-box bg-offwhite\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Latest Match Results</strong></h2>\r\n            </div>\r\n            <ul class=\"list-group mt-4\">\r\n                <li class=\"list-group-item mt-1\" *ngFor=\"let item of list\">\r\n                    <div class=\"event-panel row pt-3\">\r\n                        <div class=\"col-sm-4 align-items-center text-center justify-content-start\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\r\n                            </div>\r\n                            <span>Akshay Shastrakar</span>\r\n                            <br>\r\n                            <span>(Yavatmal)</span>\r\n                        </div>\r\n                        <div class=\"col-sm-4 text-center res-sec\">\r\n                            <div class=\"result\" style=\"font-size: 35px;\r\n                            font-weight: bold;\">8 : 3</div>\r\n                            <div>August 25, 2018</div>\r\n                            <div class=\"row text-center justify-content-center\">\r\n                                <p><i class=\"fa fa-map-marker\"></i> Nehru Stadium, Vitthal Nagar, Yavatmal. Maharashtra.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4 text-center align-items-center justify-content-end\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic-default.png\" alt=\"\">\r\n                            </div>\r\n                            <span>Rameshwar Udgire</span>\r\n                            <br>\r\n                            <span>(Nagpur)</span>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"text-center mt-2\">\r\n                <a routerLink=\"/results\" class=\"action-button\">view more</a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"member-area\" class=\"wrapper-box bg-offwhite\" hidden>\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Our Members</strong></h2>\r\n            </div>\r\n            <div class=\"row justify-content-center mt-5\">\r\n                <div class=\"col-sm-3 col-md-3 card-col\" *ngFor=\"let user of members\">\r\n                    <div class=\"card card-cascade bg-offwhite mt-2\">\r\n                        <div class=\"view view-cascade overlay\">\r\n                            <div class=\"img-area mt-5\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body card-body-cascade text-center\">\r\n                            <h4 class=\"mt-1\"><strong>Mr. Lalit Dhoke</strong></h4>\r\n                            <span>(General Secretory)</span>\r\n                            <br>\r\n                            <span>lalit.dhoke@gmail.com</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n\r\n    <section id=\"testimonial-area\">\r\n        <div class=\"img-overlay text-center\">\r\n            <div class=\"container\">\r\n                <div class=\"text-center\">\r\n                    <h2><strong>Our Members</strong></h2>\r\n                </div>\r\n                <div id=\"contactCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                    <ol class=\"carousel-indicators user-indicators\">\r\n                        <li data-target=\"#contactCourousel\" *ngFor=\"let member of members; let i = index\" [ngClass]=\"member.class\"></li>\r\n                    </ol>\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item pb-5\" *ngFor=\"let member of members\" [ngClass]=\"member.class\">\r\n                            <div class=\"img-area\">\r\n                                <img [src]=\"member.pic\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">{{member.name}}</h3>\r\n                                <span class=\"text-info\">({{member.role}})</span>\r\n                                <br>\r\n                                <span>{{member.email}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"carousel-control-prev\" href=\"#contactCourousel\" role=\"button\" data-slide=\"prev\">\r\n                        <i class=\"fa fa-caret-square-o-left\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"carousel-control-next\" href=\"#contactCourousel\" role=\"button\" data-slide=\"next\">\r\n                        <i class=\"fa fa-caret-square-o-right\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"events-area\" class=\"wrapper-box bg-offwhite\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Upcomming Events</strong></h2>\r\n            </div>\r\n            <div id=\"eventsCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators user-indicators\" hidden>\r\n                    <li data-target=\"#eventsCourousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"carousel-item\" *ngFor=\"let event of eventData; let i = index\" [ngClass]=\"{'active': i === 0}\">\r\n                        <div class=\"carousel-caption\">\r\n                            <div class=\"jumbotron bg-white\">\r\n                                <h5 class=\"text-uppercase\"><strong><i class=\"fa fa-bullseye mr-2\" aria-hidden=\"true\"></i>{{event.eventTitle}}</strong></h5>\r\n                                <div class=\"row justify-content-center mt-4\">\r\n                                    <div class=\"p-2 img-container\">\r\n                                        <img src=\"./assets/images/slingshot3.jpg\" alt=\"\" width=\"260px\">\r\n                                        <div class=\"img-text\">\r\n                                            <h1><span class=\"badge\">\r\n                                                {{event.eventDate | date: 'dd'}}<br />\r\n                                                {{event.eventDate | date: 'MMM'}}\r\n                                            </span></h1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"p-2\">\r\n                                        <div class=\"info text-left\">\r\n                                            <span><strong><i class=\"fa fa-map-marker pr-1\"></i>Address</strong></span>\r\n                                            <p class=\"text-capitalize\">{{event.eventAddress}}</p>\r\n                                            <span><strong><i class=\"fa fa-user pr-1\"></i>Contact Persons</strong></span>\r\n                                            <p class=\"text-capitalize\">{{event.contactPersons}}</p>\r\n                                            <span><strong><i class=\"fa fa-phone pr-1\"></i>Phone</strong></span>\r\n                                            <p>{{event.contactNumbers}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a class=\"carousel-control-prev action-icon\" href=\"#eventsCourousel\" role=\"button\" data-slide=\"prev\">\r\n                    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"carousel-control-next action-icon\" href=\"#eventsCourousel\" role=\"button\" data-slide=\"next\">\r\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"gallery-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h2><strong>Gallery</strong></h2>\r\n            </div>\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-sm-6\">\r\n                    <img class=\"rounded\" src=\"./assets/images/ad.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n                <div class=\"col-sm-6 img-right\">\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/weapon-1.jpg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/weapon-2.jpg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                    <div class=\"row\"><img class=\"rounded\" src=\"./assets/images/bg-ground.jpeg\" alt=\"\" width=\"100%\" height=\"231px\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n</section>";
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


    __webpack_exports__["default"] = "<section id=\"footer\">\r\n    <div class=\"row mb-5\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"ft-logo\">\r\n                <span class=\"main-title\">Slingshot</span><span class=\"sub-title\">Association</span>\r\n            </div>\r\n            <div class=\"ft-social mt-4\">\r\n                <span>SOCIAL CONNECT</span>\r\n                <div class=\"social-icons mt-3\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                    <i class=\"fa fa-instagram\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-5 contact\">\r\n            <h3>Contact<span> us</span></h3>\r\n            <div class=\"info\">\r\n                <p><i class=\"fa fa-map-marker pr-3\"></i>Matoshree Niwas, Pimpalgaon, Yavatmal.</p>\r\n                <p><i class=\"fa fa-phone pr-3\"></i>8180008641, 9511663616</p>\r\n                <p><i class=\"fa fa-envelope pr-3\"></i>slingshot.maha@gmail.com</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3 subscribe\">\r\n            <h3>Subscribe<span> us</span></h3>\r\n            <div class=\"sub\">\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\" required>\r\n                <input type=\"button\" class=\"btn btn-block action-button\" name=\"Subscribe\" value=\"Subscribe\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ft-credit\">\r\n        <hr class=\"hr\">\r\n        <p class=\"text-center\">Designed By Akshay Shastrakar | akshay.shastrakar1@gmail.com</p>\r\n    </div>\r\n</section>";
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


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top shadow\">\r\n    <div class='navbar-brand'>\r\n        <span class='navbar-title ml-2'><span class=\"main-title\">Slingshot</span><span\r\n                class=\"sub-title\">Association</span></span>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/sports\">Sports</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/affiliation\">Affiliation</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/committee\">Committee</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n                <a class=\"nav-link\" routerLink=\"/admin\">Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#gallery-area\">Gallery</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/contact\">Contact us</a>\r\n            </li>\r\n        </ul>\r\n        <button class=\"btn outline\" routerLink=\"/association\">Register</button>\r\n        <button class=\"btn outline ml-2\" routerLink=\"/login\" *ngIf=\"!isLoggedIn\">Login</button>\r\n        <button class=\"btn outline ml-2\" *ngIf=\"isLoggedIn\" (click)=\"signOut()\">Logout</button>\r\n    </div>\r\n</nav>";
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


    __webpack_exports__["default"] = "<section id=\"login-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"jumbotron mt-5 p-5 shadow\">\r\n            <div class=\"login-page\" #loginPage>\r\n                <h2 class=\"text-center\">Sign in</h2>\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-5 mt-3\">\r\n                        <form [formGroup]=\"loginForm\">\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"enter email\" height=\"50px\" [ngClass]=\"{'is-invalid':loginForm.get('email').touched && loginForm.get('email').invalid}\">\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        <span *ngIf=\"loginForm.get('email').errors?.required\">Field is\r\n                                            required</span>\r\n                                    <span *ngIf=\"loginForm.get('email').invalid && !loginForm.get('email').errors?.required\">\r\n                                            Invalid email.</span>\r\n                                    </span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"enter password\" formControlName=\"password\" [ngClass]=\"{'is-invalid':loginForm.get('password').touched && loginForm.get('password').invalid}\" height=\"50px\">\r\n                                    <span class=\"invalid-feedback alert alert-danger\">\r\n                                        Field is required\r\n                                    </span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"button\" class=\"btn form-control\" value=\"Login\" (click)=\"login()\" [disabled]=\"!loginForm.valid\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <a class=\"text-muted forgotPass\" (click)=\"forgotPassword()\">Forgot Password?</a>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"forget-pass-page\" #forgetPassPage hidden>\r\n                <h2 class=\"text-center\">Forgot Password</h2>\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-5 mt-3\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"enter email\" height=\"50px\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"enter password\" height=\"50px\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"confirm password\" height=\"50px\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"button\" class=\"btn form-control\" value=\"Reset\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col mt-3 text-center\">\r\n                            <span (click)=\"forgotPassword()\" matTooltip=\"Back\"><i class=\"fa fa-arrow-circle-o-left\"\r\n                                    style=\"font-size: 30px;\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngx-spinner bdOpacity=\"0.3\" bdColor=\"#00000030\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\" [fullScreen]=\"true\">\n</ngx-spinner>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDialogsConfirmDialogConfirmDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"type==='confirm'\">\n    <mat-dialog-content>\n        <h4 class=\"text-center\">{{message}}</h4>\n    </mat-dialog-content>\n    <div class=\"text-right mt-2\">\n        <button mat-stroked-button class=\"btn\" [mat-dialog-close]=\"true\">Yes</button>\n        <button mat-stroked-button class=\"btn ml-3\" (click)=\"close()\">No</button>\n    </div>\n</div>\n\n<div class=\"text-center p-2\" *ngIf=\"type==='register'\">\n    <h1>Successfully Registered !!</h1>\n    <h5>Once it gets approved you will get notified.</h5>\n    <h5>Thank You!</h5>\n    <button class=\"btn mt-4\" style=\"background-color: #ff8b23; color: #fff;\" mat-button [mat-dialog-close]=\"true\">OK</button>\n</div>";
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


    __webpack_exports__["default"] = "<section id=\"game\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h2 class=\"page-title\">Slingshot Sports Association of Maharashtra</h2>\r\n    </div>\r\n\r\n    <div class=\"container wrapper\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-sm-6 text-center\">\r\n                <img class=\"sling-img shadow rounded\" src=\"./assets/images/slingshot2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-sm-6 game-info pt-5\">\r\n                <h4>Slingshot</h4>\r\n                <p class=\"text-justify mt-4\">In INDIA, We are playing this game from our childhood. We have enjoyed lots\r\n                    of moment with this game to hit the target. Now lets make this game as our sports. We provide the\r\n                    opportunity to compete the people with this game, and achieve\r\n                    some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra,\r\n                    India<strong>\"</strong>. Please read the rules for this game before you start.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"category mt-5 wrapper bg-offwhite\">\r\n        <h4 class=\"text-center\"><strong>Categories of Slingshot</strong> </h4>\r\n        <div class=\"row mt-4 cat-cards justify-content-center\">\r\n            <div class=\"col-sm-2 col-xs-3 mt-2\" *ngFor=\"let cat of categories\">\r\n                <div class=\"card text-center\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">{{cat.categoryName}}</h5>\r\n                        <h5 class=\"card-title category-title\"><strong>{{cat.categoryTitle}}</strong></h5>\r\n                        <div>\r\n                            <span>{{cat.distance}}</span>\r\n                            <p>{{cat.age}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"rules mt-5\">\r\n            <h4 class=\"text-center\"><strong>Rules of Game</strong> </h4>\r\n            <div class=\"row mt-4 justify-content-center\">\r\n                <div class=\"col-sm-12\">\r\n                    <ul class=\"list-group mt-4\">\r\n                        <li class=\"list-group-item p-5\" *ngFor=\"let rule of rules; let i = index;\"\r\n                            [ngClass]=\"{'mt-1': i > 0}\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td><span class=\"circle mr-3\"> {{ i+1 }} </span></td>\r\n                                    <td class=\"text-justify\">{{rule}}</td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                        <li class=\"list-group-item p-5 text-justify  mt-1\">\r\n                            <span class=\"text-danger\">स्पष्टीकरण : </span> समजा एखाद्या स्पर्धकाने 5 मिनिटांमध्ये 15\r\n                            लक्ष्यवेध केलेत, या 15 लक्ष्यवेधांमध्ये 3\r\n                            गुणांच्या वर्तुळात 3, 4 गुणांच्या वर्तुळात 3, 5 गुणांच्या वर्तुळात 1 व 8,9,10 गुणांच्या\r\n                            वर्तुळात प्रत्येकी 2 लक्ष्यवेध केले असेल तर अशा प्रसंगात अंतिम गुण मोजताना 3,4,5,6 या\r\n                            गुणांच्या वर्तुळातील वेध व 8 गुणांच्या\r\n                            वर्तुळातील कुठलाही एक वेध मोजले जातील आणि त्यानुसार स्पर्धकांचे गुण ठरविल्या जातील.\r\n                        </li>\r\n                    </ul>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-5 mt-5 bg-offwhite equipment\">\r\n        <h4 class=\"text-center\"><strong>Equipments of Slingshot</strong> </h4>\r\n        <div class=\"container\">\r\n            <div class=\"row mt-4\">\r\n                <div class=\"col-sm-3\">\r\n                    <img src=\"./assets/images/tool1.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <img src=\"./assets/images/tool2.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <img src=\"./assets/images/tool3.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <img src=\"./assets/images/tool4.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-4\">\r\n                <div class=\"col-sm-3\">\r\n                    <img src=\"./assets/images/tool5.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <img src=\"./assets/images/tool6.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <img src=\"./assets/images/tool7.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <img src=\"./assets/images/tool8.jpg\" width=\"100%\" class=\"rounded tool\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#admin {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  overflow-x: hidden;\n}\n#admin .actions .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#admin .actions .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#admin .actions .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#admin .actions .card:hover {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#admin .actions .card:hover .card-title {\n  color: #ff8b23;\n}\n#admin .actions .badge {\n  background-color: #ff8b23;\n}\n@media only screen and (max-width: 768px) {\n  #admin .actions {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBRGFJO0VBQ0ksMEJBQUE7QUNWUjtBQzVFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRCtFSjtBQzdFUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQrRVo7QUM5RVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJGTkw7RUVPSyxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FEZ0ZoQjtBQzlFWTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FEZ0ZoQjtBQzdFUTtFQUNJLGVBQUE7RUFDQSx3REFBQTtBRCtFWjtBQzlFWTtFQUNJLGNGeEJMO0FDd0dYO0FDN0VRO0VBQ0kseUJGNUJEO0FDMkdYO0FDMUVBO0VBR1E7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VEMkVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jYWRtaW4ge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbiNhZG1pbiAuYWN0aW9ucyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNhZG1pbiAuYWN0aW9ucyAuY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgaGVpZ2h0OiA0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuI2FkbWluIC5hY3Rpb25zIC5jYXJkOmhvdmVyOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuI2FkbWluIC5hY3Rpb25zIC5jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNhZG1pbiAuYWN0aW9ucyAuY2FyZDpob3ZlciAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmY4YjIzO1xufVxuI2FkbWluIC5hY3Rpb25zIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2FkbWluIC5hY3Rpb25zIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuI2FkbWluIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAuMTUpIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvL21vYmlsZSBkZXZpY2VcclxuICAgICNhZG1pbiB7XHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
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
    /* harmony import */


    var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(_service) {
        _classCallCheck(this, AdminComponent);

        this._service = _service;
        this.userID = localStorage.getItem('user-id');
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"]
      }];
    };

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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#approval {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  margin-bottom: 100px;\n}\n#approval .badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWZmaWxpYXRpb24tcmVxdWVzdHMvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FmZmlsaWF0aW9uLXJlcXVlc3RzL2FmZmlsaWF0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZmZpbGlhdGlvbi1yZXF1ZXN0cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxhZmZpbGlhdGlvbi1yZXF1ZXN0c1xcYWZmaWxpYXRpb24tcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURTQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ05KO0FEVUEsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUko7QURXQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdBOztFQUVJLFlBQUE7QUNSSjtBRFdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUko7QURZQTtFQUNJLDBDQUFBO0FDVEo7QURZQTtFQUNJLHdCQUFBO0FDVEo7QURhSTtFQUNJLDBCQUFBO0FDVlI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM5RUk7RUFDSSx5QkZVRztBQ3NFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FmZmlsaWF0aW9uLXJlcXVlc3RzL2FmZmlsaWF0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiR0aC1jb2xvcjogI2ZmOGIyMztcclxuJHRoLWNvbG9yLWRhcms6ICNmZjM2MDA7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG59XHJcblxyXG5cclxuLyogVGhlbWUtQ29sb3JzICovXHJcblxyXG4uYmctb2Zmd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjNmNTtcclxufVxyXG5cclxuLnNsaW5nLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBMb2dvLVRleHQgKi9cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDU0LCAwLCAxKTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBkaWFsb2cgY3NzXHJcbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHtcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG59XG5cbi8qIFRoZW1lLUNvbG9ycyAqL1xuLmJnLW9mZndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmNTtcbn1cblxuLnNsaW5nLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBMb2dvLVRleHQgKi9cbi5tYWluLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbiNhcHByb3ZhbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4jYXBwcm92YWwgLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuI2FwcHJvdmFsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/affiliation-requests/affiliation-requests.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/affiliation-requests/affiliation-requests.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AffiliationRequestsComponent, DistrictApprovalDialog */

  /***/
  function srcAppAdminAffiliationRequestsAffiliationRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AffiliationRequestsComponent", function () {
      return AffiliationRequestsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistrictApprovalDialog", function () {
      return DistrictApprovalDialog;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/services/utility.service */
    "./src/app/shared/services/utility.service.ts");

    var AffiliationRequestsComponent =
    /*#__PURE__*/
    function () {
      function AffiliationRequestsComponent(_service, _dialog, _spinner, _toastr) {
        _classCallCheck(this, AffiliationRequestsComponent);

        this._service = _service;
        this._dialog = _dialog;
        this._spinner = _spinner;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'districtName', 'name', 'mobile', 'status', 'actions'];
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns2 = ['index', 'districtName', 'member', 'approvedOn', 'status', 'actions'];
        this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns3 = ['index', 'districtName', 'member', 'approvedOn', 'status'];
        this.affiliatinRequests = [];
        this.approvedDistricts = [];
        this.oldAffiliations = [];
        this.totalCount = 0;
        this.showSpinner = false;
      }

      _createClass(AffiliationRequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAffiliationRequestData();
          this.getApprovedDistrictInfo();
          this.getOldAffiliations();
        }
      }, {
        key: "getAffiliationRequestData",
        value: function getAffiliationRequestData() {
          var _this = this;

          this.show_spinner();

          this._service.getAffiliationRequests().subscribe(function (data) {
            _this.affiliatinRequests = data.map(function (item) {
              return Object.assign({
                id: item.payload.doc.id
              }, item.payload.doc.data());
            });
            _this.dataSource.data = _this.affiliatinRequests;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;

            _this.hide_spinner();
          });
        }
      }, {
        key: "getApprovedDistrictInfo",
        value: function getApprovedDistrictInfo() {
          var _this2 = this;

          this.show_spinner();

          this._service.getApprovedDistrictInfo().subscribe(function (data) {
            _this2.approvedDistricts = data.map(function (item) {
              return Object.assign({
                id: item.payload.doc.id
              }, item.payload.doc.data());
            });
            console.log(_this2.approvedDistricts);
            _this2.dataSource2.data = _this2.approvedDistricts;
            _this2.dataSource2.sort = _this2.sort;
            _this2.dataSource2.paginator = _this2.paginator;

            _this2.hide_spinner();
          });
        }
      }, {
        key: "getOldAffiliations",
        value: function getOldAffiliations() {
          var _this3 = this;

          this.show_spinner();

          this._service.getOldAffiliations().subscribe(function (data) {
            _this3.oldAffiliations = data.map(function (item) {
              return Object.assign({
                id: item.payload.doc.id
              }, item.payload.doc.data());
            });
            _this3.dataSource3.data = _this3.oldAffiliations;
            _this3.dataSource3.sort = _this3.sort;
            _this3.dataSource3.paginator = _this3.paginator;

            _this3.hide_spinner();
          });
        }
      }, {
        key: "filterResult",
        value: function filterResult(serachKey) {
          this.dataSource.filter = serachKey.trim().toLowerCase();
        }
      }, {
        key: "getPersonInfo",
        value: function getPersonInfo(personData) {
          this._dialog.open(DistrictApprovalDialog, {
            data: {
              distInfo: personData,
              flag: false
            },
            autoFocus: false,
            width: '99%'
          });
        }
      }, {
        key: "getRegisteredDistrctInfo",
        value: function getRegisteredDistrctInfo(personData) {
          this._dialog.open(DistrictApprovalDialog, {
            data: {
              distInfo: personData,
              flag: true
            },
            autoFocus: false,
            width: '99%'
          });
        }
      }, {
        key: "deleteRequest",
        value: function deleteRequest(id) {
          var _this4 = this;

          var dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            data: {
              message: 'Do you want to delete?',
              type: 'confirm'
            },
            autoFocus: false
          });

          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this4._service.deleteRequestById(id);

              _this4._toastr.info("Request Deleted Successfully.");
            }
          });
        }
      }, {
        key: "show_spinner",
        value: function show_spinner() {
          this.showSpinner = true;

          this._spinner.show();
        }
      }, {
        key: "hide_spinner",
        value: function hide_spinner() {
          this._spinner.hide();

          this.showSpinner = false;
        }
      }]);

      return AffiliationRequestsComponent;
    }();

    AffiliationRequestsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], AffiliationRequestsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: false
    })], AffiliationRequestsComponent.prototype, "sort", void 0);
    AffiliationRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-affiliation-requests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./affiliation-requests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/affiliation-requests.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./affiliation-requests.component.scss */
      "./src/app/admin/affiliation-requests/affiliation-requests.component.scss")).default]
    })], AffiliationRequestsComponent);

    var DistrictApprovalDialog =
    /*#__PURE__*/
    function () {
      function DistrictApprovalDialog(_dialogRef, _service, _spinner, _dialog, _toastr, firestore, utility, data) {
        _classCallCheck(this, DistrictApprovalDialog);

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
        } else {
          this.title = 'Requested For "' + this.personData.requestedDistrict.name + '" District';
        }
      }

      _createClass(DistrictApprovalDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this._dialogRef.close();
        }
      }, {
        key: "approveDistrict",
        value: function approveDistrict(districtData) {
          var _this5 = this;

          var dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            data: {
              message: 'Do you want to approve?',
              type: 'confirm'
            },
            autoFocus: false
          });

          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              districtData.approvedOn = _this5.utility.convertDateToEPOC(new Date());
              districtData.approvedBy = 'username';
              districtData.status = 'approved';

              _this5._service.approveDistrict(districtData).pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"](1)).subscribe(function (data) {
                if (!data.payload.exists) {
                  _this5.firestore.collection('ApprovedDistricts').doc(districtData.requestedDistrict.id).set(Object.assign({}, districtData, {
                    id: districtData.requestedDistrict.id
                  }));

                  _this5.firestore.collection('DistrictList').doc(districtData.requestedDistrict.id).update({
                    isRegistered: true
                  });

                  _this5.firestore.collection('AffiliationRequests').doc(districtData.id).delete();

                  _this5._toastr.success('Approved Successfully');

                  _this5.close();
                } else {
                  _this5._toastr.error('District is already allocated');
                }
              });
            }
          });
        }
      }, {
        key: "deleteAffiliation",
        value: function deleteAffiliation() {
          var _this6 = this;

          var dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            data: {
              message: 'Do you want to delete affiliation?',
              type: 'confirm'
            },
            autoFocus: false
          });

          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this6._service.deleteDistrictAffiliation(_this6.personData);

              _this6._toastr.error('Affiliation Canceled Successfully');

              _this6.close();
            }
          });
        }
      }]);

      return DistrictApprovalDialog;
    }();

    DistrictApprovalDialog.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
      }, {
        type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]
      }, {
        type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DistrictApprovalDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'district-approval-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialogs/district-approval.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/affiliation-requests/dialogs/district-approval.html")).default,
      styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }\n  .mat-dialog-container {\n    margin-top: 100px !important;\n  }\n  "]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))], DistrictApprovalDialog);
    /***/
  },

  /***/
  "./src/app/admin/enquiries/enquiries.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/admin/enquiries/enquiries.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminEnquiriesEnquiriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#enquiries {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n#enquiries .badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW5xdWlyaWVzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hZG1pbi9lbnF1aXJpZXMvZW5xdWlyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9lbnF1aXJpZXMvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxhZG1pblxcZW5xdWlyaWVzXFxlbnF1aXJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURTQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ05KO0FEVUEsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUko7QURXQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdBOztFQUVJLFlBQUE7QUNSSjtBRFdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUko7QURZQTtFQUNJLDBDQUFBO0FDVEo7QURZQTtFQUNJLHdCQUFBO0FDVEo7QURhSTtFQUNJLDBCQUFBO0FDVlI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM5RUk7RUFDSSx5QkZVRztBQ3NFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VucXVpcmllcy9lbnF1aXJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuI2VucXVpcmllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuI2VucXVpcmllcyAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4jZW5xdWlyaWVzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAuYmFkZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/enquiries/enquiries.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/enquiries/enquiries.component.ts ***!
    \********************************************************/

  /*! exports provided: EnquiriesComponent */

  /***/
  function srcAppAdminEnquiriesEnquiriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnquiriesComponent", function () {
      return EnquiriesComponent;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var EnquiriesComponent =
    /*#__PURE__*/
    function () {
      function EnquiriesComponent(_service, _spinner, _dialog, _toastr) {
        _classCallCheck(this, EnquiriesComponent);

        this._service = _service;
        this._spinner = _spinner;
        this._dialog = _dialog;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'name', 'email', 'mobile', 'message', 'action'];
        this.enquiries = [];
        this.showSpinner = false;
      }

      _createClass(EnquiriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.showSpinner = true;

          this._spinner.show();

          this._service.getEnquiries().subscribe(function (data) {
            _this7.enquiries = data.map(function (item) {
              return Object.assign({
                id: item.payload.doc.id
              }, item.payload.doc.data());
            });
            _this7.dataSource.data = _this7.enquiries;
            _this7.dataSource.sort = _this7.sort;
            _this7.dataSource.paginator = _this7.paginator;

            _this7._spinner.hide();

            _this7.showSpinner = false;
          });
        }
      }, {
        key: "deleteEnquiryById",
        value: function deleteEnquiryById(id) {
          var _this8 = this;

          var dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
            data: {
              message: 'Do you want to delete?',
              type: 'confirm'
            },
            autoFocus: false
          });

          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this8._service.deleteEnquiryById(id);

              _this8._toastr.info("Enquiry Deleted Successfully.");
            }
          });
        }
      }]);

      return EnquiriesComponent;
    }();

    EnquiriesComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], EnquiriesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: false
    })], EnquiriesComponent.prototype, "sort", void 0);
    EnquiriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-enquiries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./enquiries.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/enquiries/enquiries.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./enquiries.component.scss */
      "./src/app/admin/enquiries/enquiries.component.scss")).default]
    })], EnquiriesComponent);
    /***/
  },

  /***/
  "./src/app/admin/events/events.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/admin/events/events.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminEventsEventsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#events {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n#events .badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZXZlbnRzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hZG1pbi9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9ldmVudHMvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxhZG1pblxcZXZlbnRzXFxldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURTQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ05KO0FEVUEsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUko7QURXQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdBOztFQUVJLFlBQUE7QUNSSjtBRFdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUko7QURZQTtFQUNJLDBDQUFBO0FDVEo7QURZQTtFQUNJLHdCQUFBO0FDVEo7QURhSTtFQUNJLDBCQUFBO0FDVlI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM5RUk7RUFDSSx5QkZVRztBQ3NFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuI2V2ZW50cyB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuI2V2ZW50cyAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4jZXZlbnRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAuYmFkZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/events/events.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/events/events.component.ts ***!
    \**************************************************/

  /*! exports provided: EventsComponent, CreateEventDialog */

  /***/
  function srcAppAdminEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEventDialog", function () {
      return CreateEventDialog;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/utility.service */
    "./src/app/shared/services/utility.service.ts");

    var EventsComponent =
    /*#__PURE__*/
    function () {
      function EventsComponent(_dialog, _service, _spinner, _toastr) {
        _classCallCheck(this, EventsComponent);

        this._dialog = _dialog;
        this._service = _service;
        this._spinner = _spinner;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'eventTitle', 'eventDate', 'status', 'actions'];
        this.eventData = [];
        this.showSpinner = false;
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllEvents();
        }
      }, {
        key: "getAllEvents",
        value: function getAllEvents() {
          var _this9 = this;

          this.showSpinner = true;

          this._spinner.show();

          this._service.getAllEvents().subscribe(function (data) {
            _this9.eventData = data.map(function (item) {
              return Object.assign({
                id: item.payload.doc.id
              }, item.payload.doc.data());
            });
            _this9.dataSource.data = _this9.eventData;
            _this9.dataSource.sort = _this9.sort;
            _this9.dataSource.paginator = _this9.paginator;
            _this9.showSpinner = false;

            _this9._spinner.hide();
          });
        }
      }, {
        key: "createEvent",
        value: function createEvent() {
          this._dialog.open(CreateEventDialog, {
            autoFocus: false,
            width: '60%'
          });
        }
      }, {
        key: "deleteEventById",
        value: function deleteEventById(id) {
          var _this10 = this;

          var dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], {
            data: {
              message: 'Do you want to delete?',
              type: 'confirm'
            },
            autoFocus: false
          });

          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this10._service.deleteEventById(id);

              _this10._toastr.info("Event Deleted Successfully.");
            }
          });
        }
      }, {
        key: "editEvent",
        value: function editEvent(event) {
          this._dialog.open(CreateEventDialog, {
            autoFocus: false,
            width: '99%',
            data: event
          });
        }
      }]);

      return EventsComponent;
    }();

    EventsComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      static: false
    })], EventsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
      static: false
    })], EventsComponent.prototype, "sort", void 0);
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./events.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/events.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./events.component.scss */
      "./src/app/admin/events/events.component.scss")).default]
    })], EventsComponent);

    var CreateEventDialog =
    /*#__PURE__*/
    function () {
      function CreateEventDialog(_dialogRef, _service, formBuilder, _toastr, utility, data) {
        _classCallCheck(this, CreateEventDialog);

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

      _createClass(CreateEventDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }, {
        key: "close",
        value: function close() {
          this._dialogRef.close();
        }
      }, {
        key: "createEvent",
        value: function createEvent() {
          if (this.eventForm.invalid) {
            return;
          }

          this._service.createEvent(this.eventForm.value);

          this._toastr.success("Event Created Successfully.");

          this.close();
        }
      }, {
        key: "updateEvent",
        value: function updateEvent() {
          if (this.eventForm.invalid) {
            return;
          }

          this._service.updateEventById(this.eventData.id, this.eventForm.value);

          this._toastr.success("Event Updated Successfully.");

          this.close();
        }
      }]);

      return CreateEventDialog;
    }();

    CreateEventDialog.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
      }, {
        type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    CreateEventDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'create-event-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialogs/create-event.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/events/dialogs/create-event.html")).default,
      styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }\n  .mat-dialog-container {\n    margin-top: 100px !important;\n  }\n  "]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CreateEventDialog);
    /***/
  },

  /***/
  "./src/app/admin/match-event-results/match-event-results.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/match-event-results/match-event-results.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMatchEventResultsMatchEventResultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#match {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWF0Y2gtZXZlbnQtcmVzdWx0cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFkbWluXFxtYXRjaC1ldmVudC1yZXN1bHRzXFxtYXRjaC1ldmVudC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9tYXRjaC1ldmVudC1yZXN1bHRzL21hdGNoLWV2ZW50LXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hdGNoLWV2ZW50LXJlc3VsdHMvbWF0Y2gtZXZlbnQtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXRjaCB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59IiwiI21hdGNoIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/match-event-results/match-event-results.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/match-event-results/match-event-results.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MatchEventResultsComponent */

  /***/
  function srcAppAdminMatchEventResultsMatchEventResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchEventResultsComponent", function () {
      return MatchEventResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MatchEventResultsComponent =
    /*#__PURE__*/
    function () {
      function MatchEventResultsComponent() {
        _classCallCheck(this, MatchEventResultsComponent);
      }

      _createClass(MatchEventResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MatchEventResultsComponent;
    }();

    MatchEventResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-match-event-results',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./match-event-results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/match-event-results/match-event-results.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./match-event-results.component.scss */
      "./src/app/admin/match-event-results/match-event-results.component.scss")).default]
    })], MatchEventResultsComponent);
    /***/
  },

  /***/
  "./src/app/admin/profile/profile.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/admin/profile/profile.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppAdminProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/admin/profile/profile.component.scss")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/admin/refree-panel/refree-panel.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/admin/refree-panel/refree-panel.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminRefreePanelRefreePanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#refree-panel {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n#refree-panel .badge {\n  background-color: #ff8b23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVmcmVlLXBhbmVsL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hZG1pbi9yZWZyZWUtcGFuZWwvcmVmcmVlLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9yZWZyZWUtcGFuZWwvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxhZG1pblxccmVmcmVlLXBhbmVsXFxyZWZyZWUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTs7RUFFSSxZQUFBO0FDQUo7QURHQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQSwyRUFBQTtBQUlBO0VBQ0ksVUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0M7RUFDRyxnQkFBQTtBQ0pKO0FET0M7RUFDRyxtQkFBQTtBQ0pKO0FEUUEsaUJBQUE7QUFFQTtFQUNJLG1CQUFBO0FDTko7QURTQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ05KO0FEVUEsY0FBQTtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUko7QURXQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdBOztFQUVJLFlBQUE7QUNSSjtBRFdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0FDUko7QURZQTtFQUNJLDBDQUFBO0FDVEo7QURZQTtFQUNJLHdCQUFBO0FDVEo7QURhSTtFQUNJLDBCQUFBO0FDVlI7QUM1RUE7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQrRUo7QUM5RUk7RUFDSSx5QkZVRztBQ3NFWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZnJlZS1wYW5lbC9yZWZyZWUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuI3JlZnJlZS1wYW5lbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuI3JlZnJlZS1wYW5lbCAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4jcmVmcmVlLXBhbmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAuYmFkZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/refree-panel/refree-panel.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/refree-panel/refree-panel.component.ts ***!
    \**************************************************************/

  /*! exports provided: RefreePanelComponent, AddRefreeDialog */

  /***/
  function srcAppAdminRefreePanelRefreePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefreePanelComponent", function () {
      return RefreePanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRefreeDialog", function () {
      return AddRefreeDialog;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");

    var RefreePanelComponent =
    /*#__PURE__*/
    function () {
      function RefreePanelComponent(_dialog, _service, _spinner, _toastr) {
        _classCallCheck(this, RefreePanelComponent);

        this._dialog = _dialog;
        this._service = _service;
        this._spinner = _spinner;
        this._toastr = _toastr;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['index', 'name', 'email', 'mobile', 'district', 'actions'];
        this.refreeData = [];
        this.showSpinner = false;
      }

      _createClass(RefreePanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this._showSpinner();

          this._service.getAllRefrees().subscribe(function (data) {
            _this11.refreeData = data.map(function (item) {
              return Object.assign({
                id: item.payload.doc.id,
                name: item.payload.doc.data().firstName + ' ' + item.payload.doc.data().middleName + ' ' + item.payload.doc.data().lastName
              }, item.payload.doc.data());
            });
            _this11.dataSource.data = _this11.refreeData;
            _this11.dataSource.sort = _this11.sort;
            _this11.dataSource.paginator = _this11.paginator;

            _this11._hideSpinner();
          });
        }
      }, {
        key: "addRefree",
        value: function addRefree() {
          this._dialog.open(AddRefreeDialog, {
            autoFocus: false,
            width: '99%'
          });
        }
      }, {
        key: "editRefree",
        value: function editRefree(refreeData) {
          this._dialog.open(AddRefreeDialog, {
            autoFocus: false,
            width: '99%',
            data: refreeData
          });
        }
      }, {
        key: "deleteRefree",
        value: function deleteRefree(id) {
          var _this12 = this;

          var dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], {
            data: {
              message: 'Do you want to delete?',
              type: 'confirm'
            },
            autoFocus: false
          });

          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this12._service.deleteRefreeById(id);

              _this12._toastr.info("Refree Deleted Successfully.");
            }
          });
        }
      }, {
        key: "_showSpinner",
        value: function _showSpinner() {
          this._spinner.show();

          this.showSpinner = true;
        }
      }, {
        key: "_hideSpinner",
        value: function _hideSpinner() {
          this.showSpinner = false;

          this._spinner.hide();
        }
      }]);

      return RefreePanelComponent;
    }();

    RefreePanelComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__["SlingshotService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], RefreePanelComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: false
    })], RefreePanelComponent.prototype, "sort", void 0);
    RefreePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refree-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./refree-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/refree-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./refree-panel.component.scss */
      "./src/app/admin/refree-panel/refree-panel.component.scss")).default]
    })], RefreePanelComponent);

    var AddRefreeDialog =
    /*#__PURE__*/
    function () {
      function AddRefreeDialog(_dialogRef, _service, formBuilder, _toastr, data) {
        _classCallCheck(this, AddRefreeDialog);

        this._dialogRef = _dialogRef;
        this._service = _service;
        this.formBuilder = formBuilder;
        this._toastr = _toastr;
        this.data = data;
        this.isEdit = false;
        this.allDistricts = [];
        _dialogRef.disableClose = true;
        this.refreeData = data;
      }

      _createClass(AddRefreeDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

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

          this._service.getAllDistricts().subscribe(function (data) {
            data.map(function (item) {
              _this13.allDistricts.push(item.payload.doc.data());
            });
          });
        }
      }, {
        key: "close",
        value: function close() {
          this._dialogRef.close();
        }
      }, {
        key: "addRefree",
        value: function addRefree() {
          if (this.refreeForm.invalid) {
            return;
          }

          this._service.addRefree(this.refreeForm.value);

          this._toastr.success("Refree Added Successfully.");

          this.close();
        }
      }, {
        key: "updateRefree",
        value: function updateRefree() {
          if (this.refreeForm.invalid) {
            return;
          }

          this._service.updateRefreeById(this.refreeData.id, this.refreeForm.value);

          this._toastr.success("Refree Updated Successfully.");

          this.close();
        }
      }]);

      return AddRefreeDialog;
    }();

    AddRefreeDialog.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }, {
        type: src_app_shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_6__["SlingshotService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddRefreeDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'add-refree-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialogs/add-refree-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refree-panel/dialogs/add-refree-dialog.html")).default,
      styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }\n  .mat-dialog-container {\n    margin-top: 100px !important;\n  }\n  "]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))], AddRefreeDialog);
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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n::-webkit-scrollbar {\n  width: 3px;\n}\n.action-button {\n  display: inline-block;\n  padding: 8px 30px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.img-area img {\n  width: 100%;\n}\n.fa-caret-down {\n  font-size: 20px;\n}\n#affiliation-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 130px;\n}\n#affiliation-sec .head-sec h2,\n#affiliation-sec .dist-info h2 {\n  font-family: \"Righteous\";\n}\n#affiliation-sec .head-sec .text-muted {\n  font-size: 20px;\n}\n#affiliation-sec .card .card-text {\n  display: none;\n}\n#affiliation-sec .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#affiliation-sec .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#affiliation-sec .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#affiliation-sec .card:hover {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#affiliation-sec .card:hover .card-title {\n  color: #ff8b23;\n}\n#affiliation-sec .search-sec .searchbar {\n  margin-bottom: auto;\n  margin-top: auto;\n  height: 45px;\n  background-color: #353b48;\n  border-radius: 30px;\n  padding: 3px;\n}\n#affiliation-sec .search-sec .search_input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  caret-color: transparent;\n  line-height: 40px;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n#affiliation-sec .search-sec .searchbar:hover > .search_input {\n  padding: 0 10px;\n  width: 300px;\n  caret-color: red;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n#affiliation-sec .search-sec .searchbar:hover > .search_icon {\n  background: white;\n  color: #ff8b23;\n}\n#affiliation-sec .search-sec .search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  color: white;\n  text-decoration: none;\n}\n#affiliation-sec .dist-sec {\n  width: 100%;\n  max-height: 300px;\n  padding-left: 30px;\n  overflow: hidden;\n}\n#affiliation-sec .dist-sec:hover {\n  overflow-y: scroll;\n}\n#affiliation-sec .dist-info .social-icons i {\n  padding: 10px;\n}\n#affiliation-sec .dist-info .social-icons i:hover {\n  color: #e74c3c;\n}\n#affiliation-sec .dist-info.jumbotron {\n  margin: 70px 30px 70px 30px;\n}\n@media only screen and (max-width: 768px) {\n  #affiliation-sec .search-sec .searchbar:hover > .search_input {\n    width: 250px;\n  }\n  #affiliation-sec .dist-info .card {\n    margin-top: 30px;\n  }\n  #affiliation-sec .dist-info.jumbotron {\n    margin: 30px 0px 70px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWZmbGlhdGlvbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYWZmbGlhdGlvbi9hZmZsaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZmZsaWF0aW9uL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcYWZmbGlhdGlvblxcYWZmbGlhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBRGFJO0VBQ0ksMEJBQUE7QUNWUjtBQzVFQTtFQUNJLFVBQUE7QUQrRUo7QUM1RUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJGUU87RUVQUCxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRCtFSjtBQzVFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRCtFSjtBQzlFSTtFQUNJLFdBQUE7QURnRlI7QUM1RUE7RUFDSSxlQUFBO0FEK0VKO0FDNUVBO0VBQ0ksd0NBQUE7RUFDQSxpQkFBQTtBRCtFSjtBQzlFSTs7RUFFSSx3QkFBQTtBRGdGUjtBQzlFSTtFQUNJLGVBQUE7QURnRlI7QUM5RUk7RUFDSSxhQUFBO0FEZ0ZSO0FDOUVJO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRGdGUjtBQy9FUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkZoREQ7RUVpREMsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBRGlGWjtBQy9FUTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FEaUZaO0FDOUVJO0VBQ0ksZUFBQTtFQUNBLHdEQUFBO0FEZ0ZSO0FDL0VRO0VBQ0ksY0ZsRUQ7QUNtSlg7QUM3RVE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEK0VaO0FDN0VRO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QUQrRVo7QUM3RVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBRCtFWjtBQzdFUTtFQUNJLGlCQUFBO0VBQ0EsY0ZoR0Q7QUMrS1g7QUM3RVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FEK0VaO0FDNUVJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDhFUjtBQzdFUTtFQUNJLGtCQUFBO0FEK0VaO0FDM0VRO0VBQ0ksYUFBQTtBRDZFWjtBQzVFWTtFQUNJLGNBQUE7QUQ4RWhCO0FDM0VRO0VBQ0ksMkJBQUE7QUQ2RVo7QUN4RUE7RUFJWTtJQUNJLFlBQUE7RUR3RWQ7RUNwRVU7SUFDSSxnQkFBQTtFRHNFZDtFQ3BFVTtJQUNJLHlCQUFBO0VEc0VkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZmZsaWF0aW9uL2FmZmxpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmEtY2FyZXQtZG93biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2FmZmlsaWF0aW9uLXNlYyB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5oZWFkLXNlYyBoMixcbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuaGVhZC1zZWMgLnRleHQtbXV0ZWQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5jYXJkIC5jYXJkLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6aG92ZXI6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6aG92ZXIgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaGJhciB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2I0ODtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogM3B4O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoX2lucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiAwO1xuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgY2FyZXQtY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNmZjhiMjM7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hfaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5kaXN0LXNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1zZWM6aG92ZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5kaXN0LWluZm8gLnNvY2lhbC1pY29ucyBpIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyAuc29jaWFsLWljb25zIGk6aG92ZXIge1xuICBjb2xvcjogI2U3NGMzYztcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mby5qdW1ib3Ryb24ge1xuICBtYXJnaW46IDcwcHggMzBweCA3MHB4IDMwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pbnB1dCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gICNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAjYWZmaWxpYXRpb24tc2VjIC5kaXN0LWluZm8uanVtYm90cm9uIHtcbiAgICBtYXJnaW46IDMwcHggMHB4IDcwcHggMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZGNiOWU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaW1nLWFyZWEge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jYWZmaWxpYXRpb24tc2VjIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICAgIC5oZWFkLXNlYyBoMixcclxuICAgIC5kaXN0LWluZm8gaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiXHJcbiAgICB9XHJcbiAgICAuaGVhZC1zZWMgLnRleHQtbXV0ZWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5jYXJkIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQ6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAuMTUpIWltcG9ydGFudDtcclxuICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1zZWMge1xyXG4gICAgICAgIC5zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNiNDg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaF9pbnB1dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgY2FyZXQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2hiYXI6aG92ZXI+LnNlYXJjaF9pbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBjYXJldC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaGJhcjpob3Zlcj4uc2VhcmNoX2ljb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaF9pY29uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGlzdC1zZWMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpc3QtaW5mbyB7XHJcbiAgICAgICAgLnNvY2lhbC1pY29ucyBpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2U3NGMzYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNzBweCAzMHB4IDcwcHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgI2FmZmlsaWF0aW9uLXNlYyB7XHJcbiAgICAgICAgLnNlYXJjaC1zZWMge1xyXG4gICAgICAgICAgICAuc2VhcmNoYmFyOmhvdmVyPi5zZWFyY2hfaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXN0LWluZm8ge1xyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5qdW1ib3Ryb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweCA3MHB4IDBweDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
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


    var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var AffliationComponent =
    /*#__PURE__*/
    function () {
      function AffliationComponent(_service, _spinner) {
        _classCallCheck(this, AffliationComponent);

        this._service = _service;
        this._spinner = _spinner;
        this.registeredDistrictsList = [];
        this.showSpinner = false;
      }

      _createClass(AffliationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedDistrictInfo = {
            approvedOn: '',
            requestedDistrict: {
              id: '',
              name: ''
            },
            members: [{
              firstName: '',
              middleName: '',
              lastName: '',
              email: '',
              mobile: '',
              role: ' '
            }]
          };
          this.getRegisteredDistrictList();
          window.scrollTo(0, 0);
        }
      }, {
        key: "getRegisteredDistrictList",
        value: function getRegisteredDistrictList() {
          var _this14 = this;

          this.spinnerShow();

          this._service.getRegisteredDistricts().subscribe(function (data) {
            data.map(function (item, index) {
              _this14.registeredDistrictsList.push(item.payload.doc.data());

              if (index === 0) {
                _this14.getDistrictInfo(_this14.registeredDistrictsList[0].id);
              }
            });

            _this14.spinnerHide();
          });
        }
      }, {
        key: "getDistrictInfo",
        value: function getDistrictInfo(id) {
          var _this15 = this;

          this.spinnerShow();

          this._service.getRegisteredDistrictInfoById(id).subscribe(function (config) {
            _this15.selectedDistrictInfo = config.payload.data();

            _this15.spinnerHide();
          });
        }
      }, {
        key: "searchDistrict",
        value: function searchDistrict(distName) {}
      }, {
        key: "spinnerShow",
        value: function spinnerShow() {
          this.showSpinner = true;

          this._spinner.show();
        }
      }, {
        key: "spinnerHide",
        value: function spinnerHide() {
          this._spinner.hide();

          this.showSpinner = false;
        }
      }]);

      return AffliationComponent;
    }();

    AffliationComponent.ctorParameters = function () {
      return [{
        type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
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
    /* harmony import */


    var _admin_events_events_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin/events/events.component */
    "./src/app/admin/events/events.component.ts");
    /* harmony import */


    var _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin/enquiries/enquiries.component */
    "./src/app/admin/enquiries/enquiries.component.ts");
    /* harmony import */


    var _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/match-event-results/match-event-results.component */
    "./src/app/admin/match-event-results/match-event-results.component.ts");
    /* harmony import */


    var _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin/profile/profile.component */
    "./src/app/admin/profile/profile.component.ts");
    /* harmony import */


    var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");
    /* harmony import */


    var _shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/guards/login.guard */
    "./src/app/shared/guards/login.guard.ts");
    /* harmony import */


    var _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/refree-panel/refree-panel.component */
    "./src/app/admin/refree-panel/refree-panel.component.ts");
    /* harmony import */


    var _committee_committee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./committee/committee.component */
    "./src/app/committee/committee.component.ts");

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
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
      canActivate: [_shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_18__["LoginGuard"]]
    }, {
      path: 'committee',
      component: _committee_committee_component__WEBPACK_IMPORTED_MODULE_20__["CommitteeComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
      canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'requests',
        pathMatch: 'full'
      }, {
        path: 'requests',
        component: _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_12__["AffiliationRequestsComponent"]
      }, {
        path: 'events',
        component: _admin_events_events_component__WEBPACK_IMPORTED_MODULE_13__["EventsComponent"]
      }, {
        path: 'match',
        component: _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_15__["MatchEventResultsComponent"]
      }, {
        path: 'enquiries',
        component: _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_14__["EnquiriesComponent"]
      }, {
        path: 'profile',
        component: _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"]
      }, {
        path: 'refree',
        component: _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_19__["RefreePanelComponent"]
      }]
    }, {
      path: '**',
      redirectTo: '',
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
    /* harmony import */


    var _admin_events_events_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin/events/events.component */
    "./src/app/admin/events/events.component.ts");
    /* harmony import */


    var _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin/enquiries/enquiries.component */
    "./src/app/admin/enquiries/enquiries.component.ts");
    /* harmony import */


    var _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin/match-event-results/match-event-results.component */
    "./src/app/admin/match-event-results/match-event-results.component.ts");
    /* harmony import */


    var _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin/profile/profile.component */
    "./src/app/admin/profile/profile.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./shared/dialogs/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./admin/refree-panel/refree-panel.component */
    "./src/app/admin/refree-panel/refree-panel.component.ts");
    /* harmony import */


    var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./shared/components/spinner/spinner.component */
    "./src/app/shared/components/spinner/spinner.component.ts");
    /* harmony import */


    var _committee_committee_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./committee/committee.component */
    "./src/app/committee/committee.component.ts");

    var APP_DIALOGS = [_admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["DistrictApprovalDialog"], _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_39__["ConfirmDialogComponent"], _admin_events_events_component__WEBPACK_IMPORTED_MODULE_26__["CreateEventDialog"], _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_40__["AddRefreeDialog"]];
    var MATERIAL_MODULES = [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__["MatDatepickerModule"]];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_12__["AffliationComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"], _slingshot_slingshot_component__WEBPACK_IMPORTED_MODULE_15__["SlingshotComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"], _association_association_component__WEBPACK_IMPORTED_MODULE_17__["AssociationComponent"], _match_results_match_results_component__WEBPACK_IMPORTED_MODULE_18__["MatchResultsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"], _admin_affiliation_requests_affiliation_requests_component__WEBPACK_IMPORTED_MODULE_25__["AffiliationRequestsComponent"], _admin_events_events_component__WEBPACK_IMPORTED_MODULE_26__["EventsComponent"], _admin_enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_27__["EnquiriesComponent"], _admin_match_event_results_match_event_results_component__WEBPACK_IMPORTED_MODULE_28__["MatchEventResultsComponent"], _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"], _admin_refree_panel_refree_panel_component__WEBPACK_IMPORTED_MODULE_40__["RefreePanelComponent"]].concat(APP_DIALOGS, [_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_41__["SpinnerComponent"], _committee_committee_component__WEBPACK_IMPORTED_MODULE_42__["CommitteeComponent"]]),
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig), ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_36__["NgxSpinnerModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"]].concat(MATERIAL_MODULES),
      entryComponents: APP_DIALOGS,
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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#association {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#association .jumbotron {\n  margin-bottom: 0 !important;\n  padding-bottom: 150px !important;\n}\n#association .dist-area {\n  border-radius: 0rem;\n}\n#association .title {\n  font-family: \"Righteous\", cursive;\n}\n#association .form-area {\n  padding: 100px;\n  padding-top: 0px !important;\n}\n#association #regForm {\n  border: 1px solid gray;\n  padding: 50px;\n}\n#association .reg-button,\n#association .act-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n#association .spinner-area {\n  background-color: #e9ecef;\n}\n#association input, #association select {\n  height: 50px;\n}\n@media only screen and (max-width: 768px) {\n  #association .form-area {\n    padding: 10px;\n  }\n  #association #regForm {\n    padding: 20px;\n  }\n  #association .reg-title {\n    font-size: 1.2rem !important;\n  }\n  #association .reg-button {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzb2NpYXRpb24vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2Fzc29jaWF0aW9uL2Fzc29jaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hc3NvY2lhdGlvbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFzc29jaWF0aW9uXFxhc3NvY2lhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBRGFJO0VBQ0ksMEJBQUE7QUNWUjtBQzVFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7QUQrRUo7QUM5RUk7RUFDSSwyQkFBQTtFQUNBLGdDQUFBO0FEZ0ZSO0FDOUVJO0VBQ0ksbUJBQUE7QURnRlI7QUM5RUk7RUFDSSxpQ0FBQTtBRGdGUjtBQzlFSTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtBRGdGUjtBQzlFSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtBRGdGUjtBQzlFSTs7RUFFSSx5QkZSRztFRVNILFdBQUE7QURnRlI7QUM5RUk7RUFDSSx5QkFBQTtBRGdGUjtBQzlFSTtFQUNJLFlBQUE7QURnRlI7QUM1RUE7RUFHUTtJQUNJLGFBQUE7RUQ2RVY7RUMzRU07SUFDSSxhQUFBO0VENkVWO0VDM0VNO0lBQ0ksNEJBQUE7RUQ2RVY7RUMzRU07SUFDSSxxQkFBQTtFRDZFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXNzb2NpYXRpb24vYXNzb2NpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuI2Fzc29jaWF0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2Fzc29jaWF0aW9uIC5qdW1ib3Ryb24ge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweCAhaW1wb3J0YW50O1xufVxuI2Fzc29jaWF0aW9uIC5kaXN0LWFyZWEge1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xufVxuI2Fzc29jaWF0aW9uIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xufVxuI2Fzc29jaWF0aW9uIC5mb3JtLWFyZWEge1xuICBwYWRkaW5nOiAxMDBweDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuI2Fzc29jaWF0aW9uICNyZWdGb3JtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogNTBweDtcbn1cbiNhc3NvY2lhdGlvbiAucmVnLWJ1dHRvbixcbiNhc3NvY2lhdGlvbiAuYWN0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2Fzc29jaWF0aW9uIC5zcGlubmVyLWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xufVxuI2Fzc29jaWF0aW9uIGlucHV0LCAjYXNzb2NpYXRpb24gc2VsZWN0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNhc3NvY2lhdGlvbiAuZm9ybS1hcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gICNhc3NvY2lhdGlvbiAjcmVnRm9ybSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAjYXNzb2NpYXRpb24gLnJlZy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgfVxuICAjYXNzb2NpYXRpb24gLnJlZy1idXR0b24ge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4jYXNzb2NpYXRpb24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIC5qdW1ib3Ryb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kaXN0LWFyZWEge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDByZW07XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tYXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3JlZ0Zvcm0ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgIH1cclxuICAgIC5yZWctYnV0dG9uLFxyXG4gICAgLmFjdC1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5zcGlubmVyLWFyZWEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICB9XHJcbiAgICBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZXNcclxuICAgICNhc3NvY2lhdGlvbiB7XHJcbiAgICAgICAgLmZvcm0tYXJlYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNyZWdGb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZy10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWctYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/association/association.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/association/association.component.ts ***!
    \******************************************************/

  /*! exports provided: AssociationComponent */

  /***/
  function srcAppAssociationAssociationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssociationComponent", function () {
      return AssociationComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/dialogs/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/services/utility.service */
    "./src/app/shared/services/utility.service.ts");

    var AssociationComponent =
    /*#__PURE__*/
    function () {
      function AssociationComponent(slingshotService, formBuilder, auth, dialog, router, utility, _spinner) {
        _classCallCheck(this, AssociationComponent);

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

      _createClass(AssociationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
          }); // {
          //   validator: ConfirmPasswordValidator.MatchPassword
          // });
        } // fetch all available district list

      }, {
        key: "getAvailableDistrictList",
        value: function getAvailableDistrictList() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.slingshotService.getAvailabelDistricts().subscribe(function (data) {
                      data.map(function (item) {
                        _this16.availableDistricts.push(item.payload.doc.data());
                      });

                      _this16._spinner.hide();

                      _this16.showSpinner = false;
                    });

                  case 2:
                    this.slingshotService.getAllDistricts().subscribe(function (data) {
                      data.map(function (item) {
                        _this16.allDistricts.push(item.payload.doc.data());
                      });
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onDistrictChange",
        value: function onDistrictChange(id) {
          var _this17 = this;

          this.disabledRegBtn = false;
          this.availableDistricts.forEach(function (dist) {
            if (dist.id === id) {
              _this17.selectedDistrict = dist;
            }
          });
        }
      }, {
        key: "registerDistrict",
        value: function registerDistrict() {
          this.showForm = true;
          window.scrollTo(0, 570);
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          var _this18 = this;

          // stop here if form is invalid
          if (this.registerForm.invalid || !this.isFileValid1 || !this.isFileValid2 || !this.isFileValid3 || !this.isChecked) {
            return;
          }

          var formData = this.prepareFormData(this.registerForm.value);
          this.slingshotService.registerAffiliationRequest(formData);
          var dialogRef = this.dialog.open(_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
            data: {
              message: 'Do you want to approve user?',
              type: 'register'
            },
            autoFocus: false,
            width: '80%'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this18.router.navigateByUrl('/home');
            }
          });
        }
      }, {
        key: "prepareFormData",
        value: function prepareFormData(data) {
          return {
            requestedDistrict: {
              id: this.selectedDistrict.id,
              name: this.selectedDistrict.name
            },
            members: [{
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
            }],
            approvedOn: '',
            approvedBy: '',
            modifiedOn: this.utility.convertDateToEPOC(new Date()),
            modifiedBy: '',
            status: 'Pending'
          };
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
        type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_5__["SlingshotService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
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
    /***/
  },

  /***/
  "./src/app/committee/committee.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/committee/committee.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommitteeCommitteeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#committee {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#committee .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n@media only screen and (max-width: 768px) {\n  .page-title {\n    font-size: 1.2rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWl0dGVlL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcY29tbWl0dGVlXFxjb21taXR0ZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1pdHRlZS9jb21taXR0ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUo7QURFQTtFQUVFO0lBQ0UsNEJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tbWl0dGVlL2NvbW1pdHRlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb21taXR0ZWUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIC5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiI2NvbW1pdHRlZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbiNjb21taXR0ZWUgLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/committee/committee.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/committee/committee.component.ts ***!
    \**************************************************/

  /*! exports provided: CommitteeComponent */

  /***/
  function srcAppCommitteeCommitteeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommitteeComponent", function () {
      return CommitteeComponent;
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


    var _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/modal-data.service */
    "./src/app/shared/services/modal-data.service.ts");
    /* harmony import */


    var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");

    var CommitteeComponent =
    /*#__PURE__*/
    function () {
      function CommitteeComponent(dataModal, _service) {
        _classCallCheck(this, CommitteeComponent);

        this.dataModal = dataModal;
        this._service = _service;
        this.members = [];
        this.referees = [];
      }

      _createClass(CommitteeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          window.scrollTo(0, 0);
          this.members = this.dataModal.getAssociationMembers();

          this._service.getAllRefrees().subscribe(function (data) {
            _this19.referees = data.map(function (item) {
              return Object.assign({
                id: item.payload.doc.id
              }, item.payload.doc.data());
            });
          });
        }
      }]);

      return CommitteeComponent;
    }();

    CommitteeComponent.ctorParameters = function () {
      return [{
        type: _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_2__["ModalDataService"]
      }, {
        type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"]
      }];
    };

    CommitteeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-committee',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./committee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./committee.component.scss */
      "./src/app/committee/committee.component.scss")).default]
    })], CommitteeComponent);
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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n.action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n  border-radius: 0em !important;\n}\n#contact-us, #contact-us1, #contact-us2 {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n}\n#contact-us .jumbotron, #contact-us1 .jumbotron, #contact-us2 .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#contact-us .img-area, #contact-us1 .img-area, #contact-us2 .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#contact-us .img-area img, #contact-us1 .img-area img, #contact-us2 .img-area img {\n  width: 100%;\n}\n#contact-us .social-icons i, #contact-us1 .social-icons i, #contact-us2 .social-icons i {\n  padding: 10px;\n}\n#contact-us .social-icons i:hover, #contact-us1 .social-icons i:hover, #contact-us2 .social-icons i:hover {\n  color: #ff8b23;\n}\n#contact-us .association-info h2, #contact-us1 .association-info h2, #contact-us2 .association-info h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .association-info i, #contact-us1 .association-info i, #contact-us2 .association-info i {\n  font-size: 30px;\n  padding: 15px;\n  border-radius: 50%;\n  text-align: center;\n  background: #1b1919;\n  margin-right: 15px;\n  width: 60px;\n  color: #fff;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#contact-us .association-info p, #contact-us1 .association-info p, #contact-us2 .association-info p {\n  font-size: 20px;\n  margin-top: 20px;\n}\n#contact-us .user-info h2, #contact-us1 .user-info h2, #contact-us2 .user-info h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .user-info .card, #contact-us1 .user-info .card, #contact-us2 .user-info .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#contact-us .user-info .card:before, #contact-us1 .user-info .card:before, #contact-us2 .user-info .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#contact-us .user-info .card:hover:before, #contact-us1 .user-info .card:hover:before, #contact-us2 .user-info .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#contact-us .user-info .card:hover, #contact-us1 .user-info .card:hover, #contact-us2 .user-info .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#contact-us .user-info .card:hover .member-name, #contact-us1 .user-info .card:hover .member-name, #contact-us2 .user-info .card:hover .member-name {\n  color: #ff8b23;\n}\n#contact-us .contact-form, #contact-us1 .contact-form, #contact-us2 .contact-form {\n  margin-top: 80px !important;\n}\n#contact-us .contact-form h2, #contact-us1 .contact-form h2, #contact-us2 .contact-form h2 {\n  font-family: \"Righteous\";\n}\n#contact-us .contact-form .field, #contact-us1 .contact-form .field, #contact-us2 .contact-form .field {\n  height: 50px;\n}\n#contact-us .contact-form .field,\n#contact-us .contact-form textarea, #contact-us1 .contact-form .field,\n#contact-us1 .contact-form textarea, #contact-us2 .contact-form .field,\n#contact-us2 .contact-form textarea {\n  border-radius: 0em;\n}\n#contact-us .contact-form .field:hover,\n#contact-us .contact-form textarea:hover,\n#contact-us .contact-form .action-button:hover, #contact-us1 .contact-form .field:hover,\n#contact-us1 .contact-form textarea:hover,\n#contact-us1 .contact-form .action-button:hover, #contact-us2 .contact-form .field:hover,\n#contact-us2 .contact-form textarea:hover,\n#contact-us2 .contact-form .action-button:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;\n}\n#contact-us .contact-form .map, #contact-us1 .contact-form .map, #contact-us2 .contact-form .map {\n  border-radius: 0.3em;\n}\n@media only screen and (max-width: 768px) {\n  #contact-us .user-info .card, #contact-us1 .user-info .card, #contact-us2 .user-info .card {\n    margin-top: 20px;\n  }\n  #contact-us .card-col, #contact-us1 .card-col, #contact-us2 .card-col {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  #contact-us .contactForm, #contact-us1 .contactForm, #contact-us2 .contactForm {\n    margin-top: 50px;\n  }\n  #contact-us .contact-form, #contact-us1 .contact-form, #contact-us2 .contact-form {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LXVzL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcY29udGFjdC11c1xcY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBRGFJO0VBQ0ksMEJBQUE7QUNWUjtBQzVFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZZUztFRVhULGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FEK0VGO0FDNUVBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtBRCtFRjtBQzlFRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEZ0ZKO0FDOUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEZ0ZKO0FDL0VJO0VBQ0UsV0FBQTtBRGlGTjtBQzlFRTtFQUNFLGFBQUE7QURnRko7QUM5RUU7RUFDRSxjRnRCTztBQ3NHWDtBQzdFSTtFQUNFLHdCQUFBO0FEK0VOO0FDN0VJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7QUQrRU47QUM3RUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUQrRU47QUMzRUk7RUFDRSx3QkFBQTtBRDZFTjtBQzNFSTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQ2RU47QUM1RU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJGaEVHO0VFaUVILFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0NBQUE7QUQ4RVI7QUM1RU07RUFDRSxPQUFBO0VBQ0EsUUFBQTtBRDhFUjtBQzVFTTtFQUNFLHdEQUFBO0FEOEVSO0FDN0VRO0VBQ0UsY0ZoRkM7QUMrSlg7QUMxRUU7RUFDRSwyQkFBQTtBRDRFSjtBQzNFSTtFQUNFLHdCQUFBO0FENkVOO0FDM0VJO0VBQ0UsWUFBQTtBRDZFTjtBQzNFSTs7OztFQUVFLGtCQUFBO0FEK0VOO0FDN0VJOzs7Ozs7O0VBR0UsdURBQUE7QURtRk47QUNqRkk7RUFDRSxvQkFBQTtBRG1GTjtBQzlFQTtFQUlNO0lBQ0UsZ0JBQUE7RUQ4RU47RUMzRUU7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VENkVKO0VDM0VFO0lBQ0UsZ0JBQUE7RUQ2RUo7RUMzRUU7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VENkVKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBlbSAhaW1wb3J0YW50O1xufVxuXG4jY29udGFjdC11cywgI2NvbnRhY3QtdXMxLCAjY29udGFjdC11czIge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4jY29udGFjdC11cyAuanVtYm90cm9uLCAjY29udGFjdC11czEgLmp1bWJvdHJvbiwgI2NvbnRhY3QtdXMyIC5qdW1ib3Ryb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMzI1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwZW07XG59XG4jY29udGFjdC11cyAuaW1nLWFyZWEsICNjb250YWN0LXVzMSAuaW1nLWFyZWEsICNjb250YWN0LXVzMiAuaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2NvbnRhY3QtdXMgLmltZy1hcmVhIGltZywgI2NvbnRhY3QtdXMxIC5pbWctYXJlYSBpbWcsICNjb250YWN0LXVzMiAuaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jY29udGFjdC11cyAuc29jaWFsLWljb25zIGksICNjb250YWN0LXVzMSAuc29jaWFsLWljb25zIGksICNjb250YWN0LXVzMiAuc29jaWFsLWljb25zIGkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI2NvbnRhY3QtdXMgLnNvY2lhbC1pY29ucyBpOmhvdmVyLCAjY29udGFjdC11czEgLnNvY2lhbC1pY29ucyBpOmhvdmVyLCAjY29udGFjdC11czIgLnNvY2lhbC1pY29ucyBpOmhvdmVyIHtcbiAgY29sb3I6ICNmZjhiMjM7XG59XG4jY29udGFjdC11cyAuYXNzb2NpYXRpb24taW5mbyBoMiwgI2NvbnRhY3QtdXMxIC5hc3NvY2lhdGlvbi1pbmZvIGgyLCAjY29udGFjdC11czIgLmFzc29jaWF0aW9uLWluZm8gaDIge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcbn1cbiNjb250YWN0LXVzIC5hc3NvY2lhdGlvbi1pbmZvIGksICNjb250YWN0LXVzMSAuYXNzb2NpYXRpb24taW5mbyBpLCAjY29udGFjdC11czIgLmFzc29jaWF0aW9uLWluZm8gaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxYjE5MTk7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNjb250YWN0LXVzIC5hc3NvY2lhdGlvbi1pbmZvIHAsICNjb250YWN0LXVzMSAuYXNzb2NpYXRpb24taW5mbyBwLCAjY29udGFjdC11czIgLmFzc29jaWF0aW9uLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiNjb250YWN0LXVzIC51c2VyLWluZm8gaDIsICNjb250YWN0LXVzMSAudXNlci1pbmZvIGgyLCAjY29udGFjdC11czIgLnVzZXItaW5mbyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxuI2NvbnRhY3QtdXMgLnVzZXItaW5mbyAuY2FyZCwgI2NvbnRhY3QtdXMxIC51c2VyLWluZm8gLmNhcmQsICNjb250YWN0LXVzMiAudXNlci1pbmZvIC5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2NvbnRhY3QtdXMgLnVzZXItaW5mbyAuY2FyZDpiZWZvcmUsICNjb250YWN0LXVzMSAudXNlci1pbmZvIC5jYXJkOmJlZm9yZSwgI2NvbnRhY3QtdXMyIC51c2VyLWluZm8gLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNjb250YWN0LXVzIC51c2VyLWluZm8gLmNhcmQ6aG92ZXI6YmVmb3JlLCAjY29udGFjdC11czEgLnVzZXItaW5mbyAuY2FyZDpob3ZlcjpiZWZvcmUsICNjb250YWN0LXVzMiAudXNlci1pbmZvIC5jYXJkOmhvdmVyOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuI2NvbnRhY3QtdXMgLnVzZXItaW5mbyAuY2FyZDpob3ZlciwgI2NvbnRhY3QtdXMxIC51c2VyLWluZm8gLmNhcmQ6aG92ZXIsICNjb250YWN0LXVzMiAudXNlci1pbmZvIC5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4jY29udGFjdC11cyAudXNlci1pbmZvIC5jYXJkOmhvdmVyIC5tZW1iZXItbmFtZSwgI2NvbnRhY3QtdXMxIC51c2VyLWluZm8gLmNhcmQ6aG92ZXIgLm1lbWJlci1uYW1lLCAjY29udGFjdC11czIgLnVzZXItaW5mbyAuY2FyZDpob3ZlciAubWVtYmVyLW5hbWUge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0sICNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtLCAjY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcbn1cbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gaDIsICNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtIGgyLCAjY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSAuZmllbGQsICNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtIC5maWVsZCwgI2NvbnRhY3QtdXMyIC5jb250YWN0LWZvcm0gLmZpZWxkIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuI2NvbnRhY3QtdXMgLmNvbnRhY3QtZm9ybSAuZmllbGQsXG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIHRleHRhcmVhLCAjY29udGFjdC11czEgLmNvbnRhY3QtZm9ybSAuZmllbGQsXG4jY29udGFjdC11czEgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSwgI2NvbnRhY3QtdXMyIC5jb250YWN0LWZvcm0gLmZpZWxkLFxuI2NvbnRhY3QtdXMyIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAwZW07XG59XG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIC5maWVsZDpob3ZlcixcbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gdGV4dGFyZWE6aG92ZXIsXG4jY29udGFjdC11cyAuY29udGFjdC1mb3JtIC5hY3Rpb24tYnV0dG9uOmhvdmVyLCAjY29udGFjdC11czEgLmNvbnRhY3QtZm9ybSAuZmllbGQ6aG92ZXIsXG4jY29udGFjdC11czEgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYTpob3ZlcixcbiNjb250YWN0LXVzMSAuY29udGFjdC1mb3JtIC5hY3Rpb24tYnV0dG9uOmhvdmVyLCAjY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSAuZmllbGQ6aG92ZXIsXG4jY29udGFjdC11czIgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYTpob3ZlcixcbiNjb250YWN0LXVzMiAuY29udGFjdC1mb3JtIC5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbn1cbiNjb250YWN0LXVzIC5jb250YWN0LWZvcm0gLm1hcCwgI2NvbnRhY3QtdXMxIC5jb250YWN0LWZvcm0gLm1hcCwgI2NvbnRhY3QtdXMyIC5jb250YWN0LWZvcm0gLm1hcCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNjb250YWN0LXVzIC51c2VyLWluZm8gLmNhcmQsICNjb250YWN0LXVzMSAudXNlci1pbmZvIC5jYXJkLCAjY29udGFjdC11czIgLnVzZXItaW5mbyAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAjY29udGFjdC11cyAuY2FyZC1jb2wsICNjb250YWN0LXVzMSAuY2FyZC1jb2wsICNjb250YWN0LXVzMiAuY2FyZC1jb2wge1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gICNjb250YWN0LXVzIC5jb250YWN0Rm9ybSwgI2NvbnRhY3QtdXMxIC5jb250YWN0Rm9ybSwgI2NvbnRhY3QtdXMyIC5jb250YWN0Rm9ybSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAjY29udGFjdC11cyAuY29udGFjdC1mb3JtLCAjY29udGFjdC11czEgLmNvbnRhY3QtZm9ybSwgI2NvbnRhY3QtdXMyIC5jb250YWN0LWZvcm0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCA0NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NvbnRhY3QtdXMsICNjb250YWN0LXVzMSwgI2NvbnRhY3QtdXMyIHtcclxuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICAuanVtYm90cm9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMGVtO1xyXG4gIH1cclxuICAuaW1nLWFyZWEge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMgaSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuc29jaWFsLWljb25zIGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICB9XHJcbiAgLmFzc29jaWF0aW9uLWluZm8ge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIjtcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMWIxOTE5O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudXNlci1pbmZvIHtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGgtY29sb3I7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5tZW1iZXItbmFtZSB7XHJcbiAgICAgICAgICBjb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGFjdC1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XHJcbiAgICB9XHJcbiAgICAuZmllbGQge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZmllbGQsXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBlbTtcclxuICAgIH1cclxuICAgIC5maWVsZDpob3ZlcixcclxuICAgIHRleHRhcmVhOmhvdmVyLFxyXG4gICAgLmFjdGlvbi1idXR0b246aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1hcCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC8vbW9iaWxlIGRldmljZVxyXG4gICNjb250YWN0LXVzLCAjY29udGFjdC11czEsICNjb250YWN0LXVzMiB7XHJcbiAgICAudXNlci1pbmZvIHtcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0Rm9ybSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");
    /* harmony import */


    var _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/modal-data.service */
    "./src/app/shared/services/modal-data.service.ts");

    var ContactUsComponent =
    /*#__PURE__*/
    function () {
      function ContactUsComponent(formBuilder, _service, dataService) {
        _classCallCheck(this, ContactUsComponent);

        this.formBuilder = formBuilder;
        this._service = _service;
        this.dataService = dataService;
        this.members = [];
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }, {
        key: "clearForm",
        value: function clearForm() {
          this.contactForm.reset();
        }
      }, {
        key: "sendEnquiry",
        value: function sendEnquiry() {
          this._service.sendEnquiry(this.contactForm.value);

          this.clearForm();
        }
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_3__["SlingshotService"]
      }, {
        type: _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_4__["ModalDataService"]
      }];
    };

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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n.home {\n  width: 100%;\n}\n.carousel-indicators .active {\n  background-color: #ff8b23;\n}\n.action-button {\n  display: inline-block;\n  padding: 13px 47px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.entry-title {\n  font-weight: bold;\n}\n.entry-content {\n  font-size: 18px;\n}\n.wrapper-box {\n  padding: 96px 0;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#banner-area {\n  margin-top: 80px;\n}\n#banner-area .carousel-item {\n  background: no-repeat center center scroll;\n  background-size: cover;\n  -webkit-background-size: cover;\n}\n#banner-area .carousel-caption:hover {\n  background-color: #0000009c;\n}\n#banner-area .carousel-caption {\n  bottom: 35%;\n  background-color: #2423236e;\n  padding: 30px;\n}\n#banner-area .carousel-caption h5 {\n  font-size: 45px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n#register-area {\n  padding-left: 85px;\n  padding-right: 85px;\n}\n#register-area .reg-panel {\n  border-top: solid 1px #ffffff;\n  border-bottom: solid 1px #ffffff;\n  padding-top: 64px;\n  padding-bottom: 56px;\n}\n#register-area .reg_text {\n  font-weight: 400;\n  line-height: 1.2;\n  font-size: 34px;\n  font-family: \"Righteous\", cursive;\n}\n#register-area .action-button {\n  font-size: 18px;\n}\n#register-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#register-area .img-area img {\n  width: 100%;\n}\n#register-area .img-area:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n#welcome-area .ico-box {\n  height: 100%;\n  padding: 40px;\n  border-radius: 24px;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  border: 0;\n  background: -webkit-gradient(linear, right top, left top, from(#ff5a00), to(#ff3600));\n  background: linear-gradient(270deg, #ff5a00 0%, #ff3600 100%);\n  color: #fff;\n}\n#welcome-area .ico-box .shake-hand {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  height: 20%;\n  width: 20%;\n}\n#welcome-area .ico-box .outline {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #fff;\n  font-size: 16px;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 2px;\n  padding: 12px 48px;\n  text-transform: uppercase;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n#welcome-area .ico-box .outline:hover {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n#game-area .img {\n  width: 100%;\n}\n#game-area .img:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  -webkit-transition: -webkit-transform 0.5s ease-out;\n  transition: -webkit-transform 0.5s ease-out;\n  transition: transform 0.5s ease-out;\n  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\n}\n#game-area .slingshot-box {\n  overflow: hidden;\n  border-radius: 0.25rem !important;\n}\n#testimonial-area {\n  font-family: \"Didact Gothic\", sans-serif;\n  position: relative;\n  color: #000;\n  overflow: hidden;\n  width: 100%;\n  background-size: cover;\n}\n#testimonial-area .carousel .fa {\n  font-size: 20px;\n  color: #0000007a;\n}\n#testimonial-area .carousel-indicators li {\n  background-color: #0a01018c;\n}\n#testimonial-area .carousel-indicators li.active {\n  background-color: #ff8b23;\n}\n#testimonial-area .img-overlay {\n  padding: 50px 0px;\n}\n#testimonial-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#testimonial-area .img-area img {\n  width: 100%;\n}\n#testimonial-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n#testimonial-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n#results-area .img-area {\n  width: 80px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#results-area .img-area img {\n  width: 100%;\n}\n#results-area .list-group-item:hover {\n  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;\n}\n#results-area .list-group-item:hover .result {\n  color: #ff3600;\n}\n#member-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#member-area .img-area img {\n  width: 100%;\n}\n#member-area .card {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n#member-area .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#member-area .card:hover:before {\n  left: 0;\n  right: 0;\n}\n#member-area .card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n#events-area .action-icon .fa {\n  font-size: 25px;\n  color: #0000007a;\n}\n#events-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n#events-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n#events-area .badge {\n  padding: 1.25em 0.7em !important;\n}\n#events-area .img-container {\n  position: relative;\n}\n#events-area .img-container .img-text {\n  width: 84%;\n  position: absolute;\n  /* Position the background text */\n  top: 12%;\n  /* At the bottom. Use top:0 to append it to the top */\n  left: 8%;\n  background: black;\n  /* Fallback color */\n  background: rgba(0, 0, 0, 0.6);\n  /* Black background with 0.5 opacity */\n  color: #f1f1f1;\n  /* Grey text */\n}\n#events-area .info p {\n  max-width: 600px;\n}\n#gallery-area .img-right .row {\n  padding: 17px;\n}\n#gallery-area .img-right .row:first-child {\n  padding-top: 0px !important;\n}\n@media only screen and (max-width: 992px) {\n  #banner-area .carousel-caption {\n    bottom: 50px;\n  }\n\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-box {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n\n  #register-area {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  #register-area .reg_text {\n    font-size: 20px;\n  }\n  #register-area .reg-btn {\n    font-size: 14px;\n    padding: 10px 40px;\n  }\n\n  #banner-area .carousel-caption {\n    display: none;\n  }\n\n  .shake-hand {\n    height: 25% !important;\n    width: 25% !important;\n  }\n\n  .res-sec {\n    background-color: #0000000a;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  #events-area .info {\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: center !important;\n  }\n\n  #gallery-area .img-right .row:first-child {\n    padding-top: 34px !important;\n  }\n\n  #results-area .list-group-item {\n    margin-top: 0.6rem !important;\n  }\n}\n@media only screen and (min-width: 992px) {\n  #welcome-area .member-box {\n    padding-right: 50px;\n    padding-left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBRGFJO0VBQ0ksMEJBQUE7QUNWUjtBQzVFQTtFQUNJLFdBQUE7QUQrRUo7QUMzRUk7RUFDSSx5QkZTRztBQ3FFWDtBQzFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZFTztFRURQLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FENkVKO0FDMUVBO0VBQ0ksaUJBQUE7QUQ2RUo7QUMxRUE7RUFDSSxlQUFBO0FENkVKO0FDMUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBRDZFSjtBQzFFQTtFQUNJLGdCQUFBO0FENkVKO0FDNUVJO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FEOEVSO0FDNUVJO0VBQ0ksMkJBQUE7QUQ4RVI7QUM1RUk7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FEOEVSO0FDN0VRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUQrRVo7QUMxRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FENkVKO0FDNUVJO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUQ4RVI7QUM1RUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FEOEVSO0FDNUVJO0VBQ0ksZUFBQTtBRDhFUjtBQzVFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FEOEVSO0FDN0VRO0VBQ0ksV0FBQTtBRCtFWjtBQzVFSTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsK0JBQUE7RUFBQSw0REFBQTtBRDhFUjtBQ3pFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxTQUFBO0VBQ0EscUZBQUE7RUFBQSw2REFBQTtFQUNBLFdBQUE7QUQ0RVI7QUMzRVE7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUQ2RVo7QUMzRVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUQ2RVo7QUMzRVE7RUFDSSxZQUFBO0VBQ0EsbUJGaEhEO0VFaUhDLG1CQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRDZFWjtBQ3ZFSTtFQUNJLFdBQUE7QUQwRVI7QUN4RUk7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsbURBQUE7RUFBQSwyQ0FBQTtFQUFBLG1DQUFBO0VBQUEsb0VBQUE7QUQwRVI7QUN4RUk7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0FEMEVSO0FDdEVBO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBRHdFSjtBQ3RFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRHdFWjtBQ3BFUTtFQUNJLDJCQUFBO0FEc0VaO0FDcEVRO0VBQ0kseUJGeEpEO0FDOE5YO0FDbkVJO0VBQ0ksaUJBQUE7QURxRVI7QUNuRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURxRVI7QUNwRVE7RUFDSSxXQUFBO0FEc0VaO0FDbkVJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEcUVSO0FDbkVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRHFFUjtBQ2hFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEbUVSO0FDbEVRO0VBQ0ksV0FBQTtBRG9FWjtBQ2hFUTtFQUNJLDBEQUFBO0FEa0VaO0FDakVZO0VBQ0ksY0ZwTUE7QUN1UWhCO0FDNURJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEK0RSO0FDOURRO0VBQ0ksV0FBQTtBRGdFWjtBQzdESTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEK0RSO0FDOURRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CRnRPRDtFRXVPQyxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FEZ0VaO0FDOURRO0VBQ0ksT0FBQTtFQUNBLFFBQUE7QURnRVo7QUM5RFE7RUFDSSx3REFBQTtBRGdFWjtBQ3pEUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRDREWjtBQ3pESTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRDJEUjtBQ3pESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUQyRFI7QUN6REk7RUFDSSxnQ0FBQTtBRDJEUjtBQ3pESTtFQUNJLGtCQUFBO0FEMkRSO0FDMURRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0VBQ0EscURBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRDREWjtBQ3hEUTtFQUNJLGdCQUFBO0FEMERaO0FDcERJO0VBQ0ksYUFBQTtBRHVEUjtBQ3REUTtFQUNJLDJCQUFBO0FEd0RaO0FDbkRBO0VBR1E7SUFDSSxZQUFBO0VEb0RWOztFQ2hETTtJQUNJLGlCQUFBO0VEbURWO0FBQ0Y7QUMvQ0E7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RURnRE47RUMvQ007SUFDSSxpQkFBQTtFRGlEVjs7RUM5Q0U7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VEaUROO0VDaERNO0lBQ0ksZUFBQTtFRGtEVjtFQ2hETTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFRGtEVjs7RUM5Q007SUFDSSxhQUFBO0VEaURWOztFQzlDRTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7RURpRE47O0VDL0NFO0lBQ0ksMkJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VEa0ROOztFQy9DTTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFRGtEVjs7RUM3Q1U7SUFDSSw0QkFBQTtFRGdEZDs7RUMzQ007SUFDSSw2QkFBQTtFRDhDVjtBQUNGO0FDMUNBO0VBRVE7SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0VEMkNWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmhvbWUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxM3B4IDQ3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZGNiOWU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVudHJ5LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbnRyeS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ud3JhcHBlci1ib3gge1xuICBwYWRkaW5nOiA5NnB4IDA7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xufVxuXG4jYmFubmVyLWFyZWEge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1pdGVtIHtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOWM7XG59XG4jYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICBib3R0b206IDM1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjMyMzZlO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIGg1IHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4jcmVnaXN0ZXItYXJlYSB7XG4gIHBhZGRpbmctbGVmdDogODVweDtcbiAgcGFkZGluZy1yaWdodDogODVweDtcbn1cbiNyZWdpc3Rlci1hcmVhIC5yZWctcGFuZWwge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTZweDtcbn1cbiNyZWdpc3Rlci1hcmVhIC5yZWdfdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG59XG4jcmVnaXN0ZXItYXJlYSAuYWN0aW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiNyZWdpc3Rlci1hcmVhIC5pbWctYXJlYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuI3JlZ2lzdGVyLWFyZWEgLmltZy1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3JlZ2lzdGVyLWFyZWEgLmltZy1hcmVhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuXG4jd2VsY29tZS1hcmVhIC5pY28tYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY1YTAwIDAlLCAjZmYzNjAwIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbn1cbiN3ZWxjb21lLWFyZWEgLmljby1ib3ggLnNoYWtlLWhhbmQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDIwJTtcbn1cbiN3ZWxjb21lLWFyZWEgLmljby1ib3ggLm91dGxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBwYWRkaW5nOiAxMnB4IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cbiN3ZWxjb21lLWFyZWEgLmljby1ib3ggLm91dGxpbmU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuI2dhbWUtYXJlYSAuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jZ2FtZS1hcmVhIC5pbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xufVxuI2dhbWUtYXJlYSAuc2xpbmdzaG90LWJveCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuI3Rlc3RpbW9uaWFsLWFyZWEge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMwMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsIC5mYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDEwMThjO1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5pbWctb3ZlcmxheSB7XG4gIHBhZGRpbmc6IDUwcHggMHB4O1xufVxuI3Rlc3RpbW9uaWFsLWFyZWEgLmltZy1hcmVhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBjb2xvcjogIzAwMDtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuI3Jlc3VsdHMtYXJlYSAuaW1nLWFyZWEge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jcmVzdWx0cy1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNyZXN1bHRzLWFyZWEgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4jcmVzdWx0cy1hcmVhIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIgLnJlc3VsdCB7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4jbWVtYmVyLWFyZWEgLmltZy1hcmVhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNtZW1iZXItYXJlYSAuaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jbWVtYmVyLWFyZWEgLmNhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jbWVtYmVyLWFyZWEgLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNtZW1iZXItYXJlYSAuY2FyZDpob3ZlcjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbiNtZW1iZXItYXJlYSAuY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuXG4jZXZlbnRzLWFyZWEgLmFjdGlvbi1pY29uIC5mYSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbn1cbiNldmVudHMtYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgY29sb3I6ICMwMDA7XG59XG4jZXZlbnRzLWFyZWEgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuI2V2ZW50cy1hcmVhIC5iYWRnZSB7XG4gIHBhZGRpbmc6IDEuMjVlbSAwLjdlbSAhaW1wb3J0YW50O1xufVxuI2V2ZW50cy1hcmVhIC5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2V2ZW50cy1hcmVhIC5pbWctY29udGFpbmVyIC5pbWctdGV4dCB7XG4gIHdpZHRoOiA4NCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogUG9zaXRpb24gdGhlIGJhY2tncm91bmQgdGV4dCAqL1xuICB0b3A6IDEyJTtcbiAgLyogQXQgdGhlIGJvdHRvbS4gVXNlIHRvcDowIHRvIGFwcGVuZCBpdCB0byB0aGUgdG9wICovXG4gIGxlZnQ6IDglO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggMC41IG9wYWNpdHkgKi9cbiAgY29sb3I6ICNmMWYxZjE7XG4gIC8qIEdyZXkgdGV4dCAqL1xufVxuI2V2ZW50cy1hcmVhIC5pbmZvIHAge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4jZ2FsbGVyeS1hcmVhIC5pbWctcmlnaHQgLnJvdyB7XG4gIHBhZGRpbmc6IDE3cHg7XG59XG4jZ2FsbGVyeS1hcmVhIC5pbWctcmlnaHQgLnJvdzpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC53cmFwcGVyLWJveCAuZW50cnktdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyLWJveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLndyYXBwZXItYm94IC5lbnRyeS10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cblxuICAjcmVnaXN0ZXItYXJlYSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gICNyZWdpc3Rlci1hcmVhIC5yZWdfdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gICNyZWdpc3Rlci1hcmVhIC5yZWctYnRuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICB9XG5cbiAgI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNoYWtlLWhhbmQge1xuICAgIGhlaWdodDogMjUlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJlcy1zZWMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwYTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAjZXZlbnRzLWFyZWEgLmluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2dhbGxlcnktYXJlYSAuaW1nLXJpZ2h0IC5yb3c6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAzNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjcmVzdWx0cy1hcmVhIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDAuNnJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICN3ZWxjb21lLWFyZWEgLm1lbWJlci1ib3gge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbi5ob21lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEzcHggNDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5lbnRyeS10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVudHJ5LWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ud3JhcHBlci1ib3gge1xyXG4gICAgcGFkZGluZzogOTZweCAwO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2Jhbm5lci1hcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWNhcHRpb246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5YztcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBib3R0b206IDM1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMzIzNmU7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNyZWdpc3Rlci1hcmVhIHtcclxuICAgIHBhZGRpbmctbGVmdDogODVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDg1cHg7XHJcbiAgICAucmVnLXBhbmVsIHtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTZweDtcclxuICAgIH1cclxuICAgIC5yZWdfdGV4dCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbWctYXJlYTpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN3ZWxjb21lLWFyZWEge1xyXG4gICAgLmljby1ib3gge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cztcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNTUsIDkwLCAwLCAxKSAwJSwgcmdiYSgyNTUsIDU0LCAwLCAxKSAxMDAlKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAuc2hha2UtaGFuZCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3V0bGluZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggNDhweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3V0bGluZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jZ2FtZS1hcmVhIHtcclxuICAgIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZzpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgLnNsaW5nc2hvdC1ib3gge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4jdGVzdGltb25pYWwtYXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy1jb250YWN0cy5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLmNhcm91c2VsIHtcclxuICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwN2E7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDEwMThjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaS5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltZy1vdmVybGF5IHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgIH1cclxuICAgIC5pbWctYXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNyZXN1bHRzLWFyZWEge1xyXG4gICAgLmltZy1hcmVhIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLnJlc3VsdCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRoLWNvbG9yLWRhcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNtZW1iZXItYXJlYSB7XHJcbiAgICAuaW1nLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNldmVudHMtYXJlYSB7XHJcbiAgICAuYWN0aW9uLWljb24ge1xyXG4gICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxuICAgIC5iYWRnZSB7XHJcbiAgICAgICAgcGFkZGluZzogMS4yNWVtIDAuN2VtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5pbWctdGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLyogUG9zaXRpb24gdGhlIGJhY2tncm91bmQgdGV4dCAqL1xyXG4gICAgICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICAgICAgLyogQXQgdGhlIGJvdHRvbS4gVXNlIHRvcDowIHRvIGFwcGVuZCBpdCB0byB0aGUgdG9wICovXHJcbiAgICAgICAgICAgIGxlZnQ6IDglO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIDAuNSBvcGFjaXR5ICovXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgICAgICAvKiBHcmV5IHRleHQgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jZ2FsbGVyeS1hcmVhIHtcclxuICAgIC5pbWctcmlnaHQgLnJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMTdweDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLy8gdGFibGV0IGRldmljZXNcclxuICAgICNiYW5uZXItYXJlYSB7XHJcbiAgICAgICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndyYXBwZXItYm94IHtcclxuICAgICAgICAuZW50cnktdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgLndyYXBwZXItYm94IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAuZW50cnktdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjcmVnaXN0ZXItYXJlYSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIC5yZWdfdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZy1idG4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjYmFubmVyLWFyZWEge1xyXG4gICAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2hha2UtaGFuZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucmVzLXNlYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDBhO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgICNldmVudHMtYXJlYSB7XHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNnYWxsZXJ5LWFyZWEge1xyXG4gICAgICAgIC5pbWctcmlnaHQgLnJvdyB7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDM0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNyZXN1bHRzLWFyZWEge1xyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgI3dlbGNvbWUtYXJlYSB7XHJcbiAgICAgICAgLm1lbWJlci1ib3gge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
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


    var _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/slingshot.service */
    "./src/app/shared/services/slingshot.service.ts");
    /* harmony import */


    var _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/modal-data.service */
    "./src/app/shared/services/modal-data.service.ts");
    /* harmony import */


    var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/utility.service */
    "./src/app/shared/services/utility.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(_service, _dataService, _utility) {
        _classCallCheck(this, HomeComponent);

        this._service = _service;
        this._dataService = _dataService;
        this._utility = _utility;
        this.list = [1, 2, 3, 4];
        this.districtList = [];
        this.members = [];
        this.eventData = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllEvents();
          this.members = this._dataService.getAssociationMembers();
        }
      }, {
        key: "getAllEvents",
        value: function getAllEvents() {
          var _this20 = this;

          this._service.getActiveEvents().subscribe(function (data) {
            data.map(function (item) {
              _this20.eventData.push(Object.assign({
                id: item.payload.doc.id
              }, item.payload.doc.data()));
            });
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _shared_services_slingshot_service__WEBPACK_IMPORTED_MODULE_2__["SlingshotService"]
      }, {
        type: _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_3__["ModalDataService"]
      }, {
        type: _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#footer {\n  padding: 70px 70px 20px 70px;\n  background: #000;\n  color: #fff;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#footer .hr {\n  background-color: #fff;\n}\n#footer .action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n}\n#footer .contact h3,\n#footer .subscribe h3 {\n  color: #ff3600;\n}\n#footer .contact h3 span,\n#footer .subscribe h3 span {\n  color: #fff;\n}\n#footer .social-icons i {\n  padding: 10px;\n  border-radius: 50%;\n  font-size: 20px;\n  text-align: center;\n  background: red;\n  margin-right: 15px;\n  width: 40px;\n  color: #fff;\n}\n#footer .social-icons .fa-twitter {\n  background: #55ACEE;\n}\n#footer .social-icons .fa-linkedin {\n  background: #007bb5;\n}\n#footer .social-icons .fa-facebook {\n  background: #3B5998;\n}\n#footer .social-icons .fa-youtube {\n  background: #bb0000;\n}\n@media only screen and (max-width: 768px) {\n  #footer {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n  #footer .contact,\n#footer .subscribe {\n    margin-top: 50px;\n  }\n  #footer .info,\n#footer .sub {\n    margin-top: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) {\n  #footer .info,\n#footer .sub {\n    margin-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7O0VBRUksWUFBQTtBQ0FKO0FER0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQ0FKO0FESUEsMkVBQUE7QUFJQTtFQUNJLFVBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7QUNKSjtBRE9DO0VBQ0csZ0JBQUE7QUNKSjtBRE9DO0VBQ0csbUJBQUE7QUNKSjtBRFFBLGlCQUFBO0FBRUE7RUFDSSxtQkFBQTtBQ05KO0FEU0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNOSjtBRFVBLGNBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0E7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUko7QURXQTs7RUFFSSxZQUFBO0FDUko7QURXQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtBQ1JKO0FEWUE7RUFDSSwwQ0FBQTtBQ1RKO0FEWUE7RUFDSSx3QkFBQTtBQ1RKO0FEYUk7RUFDSSwwQkFBQTtBQ1ZSO0FDM0VBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBRDhFSjtBQzdFSTtFQUNJLHNCQUFBO0FEK0VSO0FDN0VJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRkdHO0VFRkgsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEK0VSO0FDM0VROztFQUNJLGNBQUE7QUQ4RVo7QUM3RVk7O0VBQ0ksV0FBQTtBRGdGaEI7QUMzRVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRDZFWjtBQzNFUTtFQUNJLG1CQUFBO0FENkVaO0FDM0VRO0VBQ0ksbUJBQUE7QUQ2RVo7QUMzRVE7RUFDSSxtQkFBQTtBRDZFWjtBQzNFUTtFQUNJLG1CQUFBO0FENkVaO0FDeEVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VEMkVOO0VDMUVNOztJQUVJLGdCQUFBO0VENEVWO0VDMUVNOztJQUVJLGdCQUFBO0VENEVWO0FBQ0Y7QUN4RUE7RUFFUTs7SUFFSSxrQkFBQTtFRHlFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuI2Zvb3RlciB7XG4gIHBhZGRpbmc6IDcwcHggNzBweCAyMHB4IDcwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG59XG4jZm9vdGVyIC5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4jZm9vdGVyIC5hY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2Zvb3RlciAuY29udGFjdCBoMyxcbiNmb290ZXIgLnN1YnNjcmliZSBoMyB7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuI2Zvb3RlciAuY29udGFjdCBoMyBzcGFuLFxuI2Zvb3RlciAuc3Vic2NyaWJlIGgzIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyBpIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyAuZmEtdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XG59XG4jZm9vdGVyIC5zb2NpYWwtaWNvbnMgLmZhLWxpbmtlZGluIHtcbiAgYmFja2dyb3VuZDogIzAwN2JiNTtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyAuZmEtZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIC5mYS15b3V0dWJlIHtcbiAgYmFja2dyb3VuZDogI2JiMDAwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjZm9vdGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgfVxuICAjZm9vdGVyIC5jb250YWN0LFxuI2Zvb3RlciAuc3Vic2NyaWJlIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gICNmb290ZXIgLmluZm8sXG4jZm9vdGVyIC5zdWIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI2Zvb3RlciAuaW5mbyxcbiNmb290ZXIgLnN1YiB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDcwcHggNzBweCAyMHB4IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLmhyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDQ1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoLWNvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QsXHJcbiAgICAuc3Vic2NyaWJlIHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS10d2l0dGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWxpbmtlZGluIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWZhY2Vib29rIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXlvdXR1YmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLmNvbnRhY3QsXHJcbiAgICAgICAgLnN1YnNjcmliZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLFxyXG4gICAgICAgIC5zdWIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgLmluZm8sXHJcbiAgICAgICAgLnN1YiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n.navbar-light .navbar-toggler {\n  border: none;\n}\n.collapsing {\n  -webkit-transition: height 0.6s;\n  transition: height 0.6s;\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-title:hover {\n  cursor: pointer;\n}\n#navbarNav a.nav-link {\n  font-size: 13px !important;\n  font-weight: 500;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n#navbarNav a.nav-link:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 2px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n#navbarNav a.nav-link:hover:before {\n  left: 0px;\n  right: 0;\n}\n#navbarNav a.nav-link:hover {\n  color: #ff8b23;\n}\n.navbar {\n  height: 80px;\n  width: 100%;\n  background-color: #fff;\n}\n.navbar-collapse {\n  background: inherit;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.outline:hover {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #ff8b23;\n  border-color: #ff8b23;\n  border-style: solid;\n  border-width: 2px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.outline {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 350ms ease 0s;\n  transition: all 350ms ease 0s;\n  text-transform: uppercase;\n  padding: 7px 20px;\n  margin-left: 30px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 992px) {\n  .outline {\n    margin-left: 0px !important;\n    margin-top: 20px;\n    margin-bottom: 30px;\n  }\n\n  .navbar-collapse {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-top: 70px;\n    margin-right: 20px;\n    padding-top: 20px;\n  }\n\n  .navbar-light .navbar-nav .nav-link {\n    padding-top: 15px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .navbar li {\n    padding-left: 13px;\n    padding-right: 13px;\n  }\n\n  .navbar-brand {\n    padding-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9uYXZiYXIvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7O0VBRUksWUFBQTtBQ0FKO0FER0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQ0FKO0FESUEsMkVBQUE7QUFJQTtFQUNJLFVBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7QUNKSjtBRE9DO0VBQ0csZ0JBQUE7QUNKSjtBRE9DO0VBQ0csbUJBQUE7QUNKSjtBRFFBLGlCQUFBO0FBRUE7RUFDSSxtQkFBQTtBQ05KO0FEU0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNOSjtBRFVBLGNBQUE7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0E7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUko7QURXQTs7RUFFSSxZQUFBO0FDUko7QURXQTtFQUNJLFNBQUE7RUFDQSxpREFBQTtBQ1JKO0FEWUE7RUFDSSwwQ0FBQTtBQ1RKO0FEWUE7RUFDSSx3QkFBQTtBQ1RKO0FEYUk7RUFDSSwwQkFBQTtBQ1ZSO0FDNUVBO0VBQ0ksWUFBQTtBRCtFSjtBQzVFQTtFQUNJLCtCQUFBO0VBQUEsdUJBQUE7QUQrRUo7QUM1RUE7RUFDSSx5QkFBQTtBRCtFSjtBQzVFQTtFQUNJLGVBQUE7QUQrRUo7QUM1RUE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRCtFSjtBQzlFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkZuQkc7RUVvQkgsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBRGdGUjtBQzlFSTtFQUNJLFNBQUE7RUFDQSxRQUFBO0FEZ0ZSO0FDOUVJO0VBQ0ksY0ZqQ0c7QUNpSFg7QUM1RUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FEK0VKO0FDNUVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEK0VKO0FDNUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxjRnJETztFRXNEUCxxQkZ0RE87RUV1RFAsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUQrRUo7QUM1RUE7RUFDSSxZQUFBO0VBQ0EsbUJGOURPO0VFK0RQLG1CQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUQrRUo7QUM1RUE7RUFFSTtJQUNJLDJCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFRDhFTjs7RUM1RUU7SUFDSSx3REFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUQrRU47O0VDN0VFO0lBQ0ksaUJBQUE7RURnRk47QUFDRjtBQzdFQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFRDhFTjs7RUM1RUU7SUFDSSxrQkFBQTtFRCtFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xvYmFsIGNvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuJHRoLWNvbG9yOiAjZmY4YjIzO1xyXG4kdGgtY29sb3ItZGFyazogI2ZmMzYwMDtcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjhiMjM7XHJcbn1cclxuXHJcblxyXG4vKiBUaGVtZS1Db2xvcnMgKi9cclxuXHJcbi5iZy1vZmZ3aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xyXG59XHJcblxyXG4uc2xpbmctYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIExvZ28tVGV4dCAqL1xyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gR2xvYmFsIGRpYWxvZyBjc3NcclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbn1cblxuLyogVGhlbWUtQ29sb3JzICovXG4uYmctb2Zmd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y1O1xufVxuXG4uc2xpbmctYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIExvZ28tVGV4dCAqL1xuLm1haW4tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmMzYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb2xsYXBzaW5nIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNnM7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLm5hdmJhci10aXRsZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25hdmJhck5hdiBhLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiNuYXZiYXJOYXYgYS5uYXYtbGluazpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuI25hdmJhck5hdiBhLm5hdi1saW5rOmhvdmVyOmJlZm9yZSB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDA7XG59XG4jbmF2YmFyTmF2IGEubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cblxuLm5hdmJhciB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5vdXRsaW5lOmhvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZjhiMjM7XG4gIGJvcmRlci1jb2xvcjogI2ZmOGIyMztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuLm91dGxpbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAub3V0bGluZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cblxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhciBsaSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gIH1cblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29sbGFwc2luZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC42cztcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG59XHJcblxyXG4ubmF2YmFyLXRpdGxlOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI25hdmJhck5hdiBhLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aC1jb2xvcjtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmhvdmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAkdGgtY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6ICR0aC1jb2xvcjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxufVxyXG5cclxuLm91dGxpbmUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogJHRoLWNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgLm91dGxpbmUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAvL2Rlc2t0b3BcclxuICAgIC5uYXZiYXIgbGkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgfVxyXG59Il19 */";
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
    /* harmony import */


    var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/dialogs/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(auth, _dialog) {
        _classCallCheck(this, NavbarComponent);

        this.auth = auth;
        this._dialog = _dialog;
        this.isLoggedIn = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.auth.isLoggedIn();
          this.auth.isUserLoggedIn.subscribe(function (data) {
            return _this21.isLoggedIn = data;
          });
          this.navbarCollapseHide();
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var _this22 = this;

          var dialogRef = this._dialog.open(src_app_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            data: {
              message: 'Do you want to logout?',
              type: 'confirm'
            },
            autoFocus: false
          });

          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this22.auth.signOut();
            }
          });
        }
      }, {
        key: "navbarCollapseHide",
        value: function navbarCollapseHide() {
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

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#login-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 80px;\n  background-color: #fff;\n}\n#login-sec .container {\n  padding-top: 40px;\n  padding-bottom: 50px;\n}\n#login-sec input {\n  height: 50px;\n}\n#login-sec .btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n#login-sec .forgotPass:hover {\n  color: #000 !important;\n  cursor: pointer;\n}\n@media only screen and (max-width: 768px) {\n  #login-sec .container {\n    padding: 15px 30px 20px 30px !important;\n  }\n  #login-sec .container .p-5 {\n    padding: 3rem 0.5rem 3rem 0.5rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBRGFJO0VBQ0ksMEJBQUE7QUNWUjtBQzVFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBRCtFSjtBQzlFSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QURnRlI7QUM5RUk7RUFDSSxZQUFBO0FEZ0ZSO0FDOUVJO0VBQ0kseUJGR0c7RUVGSCxXQUFBO0FEZ0ZSO0FDN0VRO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FEK0VaO0FDMUVBO0VBR1E7SUFDSSx1Q0FBQTtFRDJFVjtFQzFFVTtJQUNJLDJDQUFBO0VENEVkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jbG9naW4tc2VjIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuI2xvZ2luLXNlYyAuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuI2xvZ2luLXNlYyBpbnB1dCB7XG4gIGhlaWdodDogNTBweDtcbn1cbiNsb2dpbi1zZWMgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2xvZ2luLXNlYyAuZm9yZ290UGFzczpob3ZlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjbG9naW4tc2VjIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAjbG9naW4tc2VjIC5jb250YWluZXIgLnAtNSB7XG4gICAgcGFkZGluZzogM3JlbSAwLjVyZW0gM3JlbSAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4jbG9naW4tc2VjIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5mb3Jnb3RQYXNzIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAjbG9naW4tc2VjIHtcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAucC01IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMC41cmVtIDNyZW0gMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, formBuilder, auth) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.auth = auth;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scrollTo(0, 0);
          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          this.loginPage.nativeElement.hidden = !this.loginPage.nativeElement.hidden;
          this.forgetPassPage.nativeElement.hidden = !this.forgetPassPage.nativeElement.hidden;
        }
      }, {
        key: "login",
        value: function login() {
          if (this.loginForm.invalid) {
            return;
          }

          var formData = this.loginForm.value;
          this.auth.signIn(formData.email, formData.password);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
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
  "./src/app/shared/components/spinner/spinner.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSpinnerSpinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/spinner/spinner.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
    \****************************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSharedComponentsSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpinnerComponent =
    /*#__PURE__*/
    function () {
      function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner.component.scss */
      "./src/app/shared/components/spinner/spinner.component.scss")).default]
    })], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppSharedDialogsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ConfirmDialogComponent =
    /*#__PURE__*/
    function () {
      function ConfirmDialogComponent(_dialogRef, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this._dialogRef = _dialogRef;
        this.data = data;
        _dialogRef.disableClose = true;
        this.message = data.message;
        this.type = data.type;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "close",
        value: function close() {
          this._dialogRef.close();
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'confirm-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html")).default,
      styles: ["* {\n    font-family: \"Didact Gothic\", sans-serif;\n  }"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ConfirmDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, auth) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.auth = auth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (localStorage.getItem('login-token')) {
            return true;
          } else {
            this.router.navigateByUrl('/login');
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/guards/login.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/guards/login.guard.ts ***!
    \**********************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppSharedGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var LoginGuard =
    /*#__PURE__*/
    function () {
      function LoginGuard(router, auth) {
        _classCallCheck(this, LoginGuard);

        this.router = router;
        this.auth = auth;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!localStorage.getItem('login-token')) {
            return true;
          } else {
            this.router.navigateByUrl('/');
            return false;
          }
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginGuard);
    /***/
  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afAuth, router, ngZone, firestore, dialog, toastr) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.firestore = firestore;
        this.dialog = dialog;
        this.toastr = toastr;
        this.loginResource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.isUserLoggedIn = this.loginResource.asObservable();
      }

      _createClass(AuthService, [{
        key: "signUp",
        value: function signUp(data) {
          return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password).then(function (result) {// Do something...
          });
        }
      }, {
        key: "signIn",
        value: function signIn(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (result) {
                      _this23.router.navigate(['/admin']);

                      localStorage.setItem('login-token', result.user.uid);
                      localStorage.setItem('user-id', result.user.uid);

                      _this23.isLoggedIn();
                    }).catch(function (error) {
                      switch (error.code) {
                        case 'auth/user-not-found':
                          _this23.toastr.error('User Not Found');

                          break;

                        case 'auth/wrong-password':
                          _this23.toastr.error('Wrong Password');

                          break;
                      }
                    });

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.auth.signOut();

                  case 2:
                    this.router.navigate(['/login']);
                    this.isLoggedIn();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var user;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).toPromise();

                  case 2:
                    user = _context4.sent;

                    if (user) {
                      this.loginResource.next(true);
                    } else {
                      this.loginResource.next(false);
                      localStorage.removeItem('login-token');
                      localStorage.removeItem('user-id');
                    }

                    return _context4.abrupt("return", user);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/services/modal-data.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/modal-data.service.ts ***!
    \*******************************************************/

  /*! exports provided: ModalDataService */

  /***/
  function srcAppSharedServicesModalDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDataService", function () {
      return ModalDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalDataService =
    /*#__PURE__*/
    function () {
      function ModalDataService() {
        _classCallCheck(this, ModalDataService);

        this.MEMBERS = [{
          name: 'Mr. Bipin Chaudhari',
          role: 'President',
          email: 'xyz@gmail.com',
          mobile: '9404141861',
          class: 'active',
          pic: './assets/images/members/bipin-chaudhari.jpg'
        }, {
          name: 'Mr. Lalit Dhoke',
          role: 'Vice President',
          email: 'xyz@gmail.com',
          mobile: '9588430982',
          class: '',
          pic: './assets/images/members/lalit-dhoke.jpg'
        }, {
          name: 'Mr. Manikraj Landge',
          role: 'Vice President',
          email: 'xyz@gmail.com',
          mobile: '9004409664',
          class: '',
          pic: './assets/images/user-pic-default.png'
        }, {
          name: 'Mr. Vikas Shelke',
          role: 'General Secretory',
          email: 'vikasshelke313918@gmail.com',
          mobile: '8432146555',
          class: '',
          pic: './assets/images/members/vikas-shelke.jpg'
        }, {
          name: 'Mr. Sham Khemaskar',
          role: 'Treasurer',
          email: 'xyz@gmail.com',
          mobile: '9823545618',
          class: '',
          pic: './assets/images/user-pic-default.png'
        }, {
          name: 'Mr. Pravin Dighade',
          role: 'Join Secretory',
          email: 'xyz@gmail.com',
          mobile: '8830993120',
          class: '',
          pic: './assets/images/members/pravin-dighade.jpg'
        }, {
          name: 'Mr. Suraj Kadukar',
          role: 'Representative',
          email: 'xyz@gmail.com',
          mobile: '9370155501',
          class: '',
          pic: './assets/images/members/suraj-kadukar.jpg'
        }, {
          name: 'Mr. Sunil Shinde',
          role: 'Representative',
          email: 'xyz@gmail.com',
          mobile: '8888424233',
          class: '',
          pic: './assets/images/members/sunil-shinde.jpg'
        }, {
          name: 'Mr. Giriraj Gupta',
          role: 'Representative',
          email: 'xyz@gmail.com',
          mobile: '9049228777',
          class: '',
          pic: './assets/images/members/giriraj-gupta.jpg'
        }, {
          name: 'Miss. Snehal Khantade',
          role: 'Member',
          email: 'xyz@gmail.com',
          mobile: '9552822470',
          class: '',
          pic: './assets/images/members/snehal-khantade.jpg'
        }, {
          name: 'Mr. Praful Kodape',
          role: 'Member',
          email: 'xyz@gmail.com',
          mobile: '9673398819',
          class: '',
          pic: './assets/images/user-pic-default.png'
        }];
        this.CATEGORIES = [{
          categoryName: 'Category 1',
          categoryTitle: 'Sub-Junior',
          distance: '10 Feet',
          age: '(Under 10Yr Age)'
        }, {
          categoryName: 'Category 2',
          categoryTitle: 'Teenager',
          distance: '15 Feet',
          age: '(10Yr - 14Yr Age)'
        }, {
          categoryName: 'Category 3',
          categoryTitle: 'Junior',
          distance: '20 Feet',
          age: '(15Yr - 18Yr Age)'
        }, {
          categoryName: 'Category 4',
          categoryTitle: 'Senior',
          distance: '30 Feet',
          age: '(18Yr Age)'
        }, {
          categoryName: 'Category 5',
          categoryTitle: 'Master',
          distance: '30 Feet',
          age: '(35Yr Age)'
        }];
        this.RULES = ['स्पर्धकाने शुट लाईनच्या मागे उभे राहणे अनिवार्य आहे, अन्यथा त्या स्पर्धकाला स्पर्धेतून बाहेर करण्यात येईल.', 'जर एखाद्या प्रवर्गात स्पर्धा नसेल तर त्या स्पर्धकाला सहभागी प्रमाणपत्र देण्यात येईल किंवा त्याला पुढील स्पर्धेसाठी पाठवण्यात येईल.', 'प्रत्येक फेरीमध्ये स्पर्धकाला 5 मिनिटांचा वेळ दिला जाईल, त्या वेळेत त्यांना दहा गोट्या लक्ष्यावर माराव्या लागतील.', 'जर दोन किंवा त्यापेक्षा अधिक स्पर्धकांना सारखे गुण मिळाले असतील आणि पंचांना निर्णय घेणे होत नसेल तर तिसरी फेरी घेतल्या जाईल किंवा कमी वयाच्या स्पर्धकाला विजेसेपद दिल्या जाईल.', 'सर्व स्पर्धकांनी स्वतःच्या सुरक्षिततेसाठी ग्लासेस आणि विचलित करणारे आवाज नियंत्रक साधन सोबत आणने अनिवार्य आहे.', 'एक फेरी ही 5 मिनिटांची असेल, जेव्हा वेळ निरीक्षक गोळीबार करून अथवा शिट्टी वाजवून जाहीर करेल तेव्हा सुरुवात होईल.', 'तांत्रिक समिती (पंच) या समितीमध्ये पाच सदस्य असतील, त्यामध्ये 1 न्यायाधीश, 1 वेळ निरीक्षक, 1 रेषा निरीक्षक व 2 निरिक्षक असतील.', 'फेरीच्या वेळी लक्षाला काही नुकसान झाल्यास आवश्यक असेल तर पंच तांत्रिक समिती निर्णय घेऊन लक्ष बदलवून दुसरे लक्ष्य लावुन ती फेरी त्याच वेळेपासून व पाच गुणांपासून चालू करण्यात येईल.', 'गरज भासल्यास तांत्रिक समितीला दुसरी फेरी घेता येईल.', 'लक्ष्यावर दिलेल्या मर्यादेपेक्षा जास्त मारा केल्यास गुणांसाठी वैध योग्य लक्षवेध आत मोजल्या जातील.'];
      }

      _createClass(ModalDataService, [{
        key: "getAssociationMembers",
        value: function getAssociationMembers() {
          return this.MEMBERS;
        }
      }, {
        key: "getSlingshotCategories",
        value: function getSlingshotCategories() {
          return this.CATEGORIES;
        }
      }, {
        key: "getSlingshotRules",
        value: function getSlingshotRules() {
          return this.RULES;
        }
      }]);

      return ModalDataService;
    }();

    ModalDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ModalDataService);
    /***/
  },

  /***/
  "./src/app/shared/services/slingshot.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/slingshot.service.ts ***!
    \******************************************************/

  /*! exports provided: SlingshotService */

  /***/
  function srcAppSharedServicesSlingshotServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var SlingshotService =
    /*#__PURE__*/
    function () {
      function SlingshotService(firestore, _toastr) {
        _classCallCheck(this, SlingshotService);

        this.firestore = firestore;
        this._toastr = _toastr;
        this.districtList = [{
          id: 'SLINGSHOTMH0001',
          name: 'Ahmednagar',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0002',
          name: 'Akola',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0003',
          name: 'Amravati',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0004',
          name: 'Aurangabad',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0005',
          name: 'Bhandara',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0006',
          name: 'Buldhana',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0007',
          name: 'Chandrapur',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0008',
          name: 'Dhule',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0009',
          name: 'Gadchiroli',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0010',
          name: 'Gondia',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0011',
          name: 'Hingoli',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0012',
          name: 'Jalgaon',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0013',
          name: 'Jalna',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0014',
          name: 'Kolhapur',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0015',
          name: 'Latur',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0016',
          name: 'Mumbai',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0017',
          name: 'Nagpur',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0018',
          name: 'Nanded',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0019',
          name: 'Nandurbar',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0020',
          name: 'Nashik',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0021',
          name: 'Osmanabad',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0022',
          name: 'Palghar',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0023',
          name: 'Parbhani',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0024',
          name: 'Pune',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0025',
          name: 'Raigad',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0026',
          name: 'Alibag',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0027',
          name: 'Ratnagiri',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0028',
          name: 'Sangli',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0029',
          name: 'Satara',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0030',
          name: 'Sindhudurg',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0031',
          name: 'Oros',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0032',
          name: 'Solapur',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0033',
          name: 'Thane',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0034',
          name: 'Wardha',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0035',
          name: 'Washim',
          isRegistered: false
        }, {
          id: 'SLINGSHOTMH0036',
          name: 'Yavatmal',
          isRegistered: false
        }];
      } // addDist() {
      //   this.districtList.forEach((item, index) => {
      //     this.firestore.collection('DistrictList').doc(item.id).set(item);
      //   });
      // }


      _createClass(SlingshotService, [{
        key: "getAllDistricts",
        value: function getAllDistricts() {
          return this.firestore.collection('DistrictList', function (ref) {
            return ref.orderBy('name', 'asc');
          }).snapshotChanges();
        }
      }, {
        key: "getAvailabelDistricts",
        value: function getAvailabelDistricts() {
          return this.firestore.collection('DistrictList', function (ref) {
            return ref.where('isRegistered', '==', false);
          }).snapshotChanges();
        }
      }, {
        key: "getRegisteredDistricts",
        value: function getRegisteredDistricts() {
          return this.firestore.collection('DistrictList', function (ref) {
            return ref.where('isRegistered', '==', true);
          }).snapshotChanges();
        }
      }, {
        key: "getRegisteredDistrictInfoById",
        value: function getRegisteredDistrictInfoById(id) {
          return this.firestore.collection('ApprovedDistricts').doc(id).snapshotChanges();
        }
      }, {
        key: "districtRegistration",
        value: function districtRegistration(data, userID) {
          this.firestore.collection("AffiliationRequests").doc(userID).set(data);
        }
      }, {
        key: "getAffiliationRequests",
        value: function getAffiliationRequests() {
          return this.firestore.collection("AffiliationRequests").snapshotChanges();
        }
      }, {
        key: "deleteRequestById",
        value: function deleteRequestById(id) {
          this.firestore.collection('AffiliationRequests').doc(id).delete();
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return this.firestore.collection('AffiliationRequests').doc(id).get();
        }
      }, {
        key: "registerAffiliationRequest",
        value: function registerAffiliationRequest(data) {
          this.firestore.collection("AffiliationRequests").add(data);
        }
      }, {
        key: "approveDistrict",
        value: function approveDistrict(districtData) {
          return this.firestore.collection('ApprovedDistricts').doc(districtData.requestedDistrict.id).snapshotChanges();
        }
      }, {
        key: "getApprovedDistrictInfo",
        value: function getApprovedDistrictInfo() {
          return this.firestore.collection('ApprovedDistricts').snapshotChanges();
        }
      }, {
        key: "deleteDistrictAffiliation",
        value: function deleteDistrictAffiliation(data) {
          this.firestore.collection('OLD_AFFILIATIONS').add(Object.assign({}, data, {
            status: 'rejected'
          }));
          this.firestore.collection('DistrictList').doc(data.requestedDistrict.id).update({
            isRegistered: false
          });
          this.firestore.collection('ApprovedDistricts').doc(data.requestedDistrict.id).delete();
        }
      }, {
        key: "getOldAffiliations",
        value: function getOldAffiliations() {
          return this.firestore.collection('OLD_AFFILIATIONS').snapshotChanges();
        } // ----------------- ENQUIRIES ---------------

      }, {
        key: "sendEnquiry",
        value: function sendEnquiry(data) {
          this.firestore.collection('Enquiries').add(data);
        }
      }, {
        key: "getEnquiries",
        value: function getEnquiries() {
          return this.firestore.collection('Enquiries').snapshotChanges();
        }
      }, {
        key: "deleteEnquiryById",
        value: function deleteEnquiryById(id) {
          this.firestore.collection('Enquiries').doc(id).delete();
        } // ----------------- EVENTS ---------------

      }, {
        key: "createEvent",
        value: function createEvent(event) {
          this.firestore.collection('Events').add(event);
        }
      }, {
        key: "getAllEvents",
        value: function getAllEvents() {
          return this.firestore.collection('Events').snapshotChanges();
        }
      }, {
        key: "getActiveEvents",
        value: function getActiveEvents() {
          return this.firestore.collection('Events', function (ref) {
            return ref.where('status', '==', 'Active');
          }).snapshotChanges();
        }
      }, {
        key: "deleteEventById",
        value: function deleteEventById(id) {
          this.firestore.collection('Events').doc(id).delete();
        }
      }, {
        key: "updateEventById",
        value: function updateEventById(id, data) {
          this.firestore.collection('Events').doc(id).update(data);
        } // ----------------- REFREE ---------------

      }, {
        key: "addRefree",
        value: function addRefree(data) {
          this.firestore.collection('Refree').add(data);
        }
      }, {
        key: "getAllRefrees",
        value: function getAllRefrees() {
          return this.firestore.collection('Refree').snapshotChanges();
        }
      }, {
        key: "updateRefreeById",
        value: function updateRefreeById(id, data) {
          this.firestore.collection('Refree').doc(id).update(data);
        }
      }, {
        key: "deleteRefreeById",
        value: function deleteRefreeById(id) {
          this.firestore.collection('Refree').doc(id).delete();
        }
      }]);

      return SlingshotService;
    }();

    SlingshotService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    SlingshotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SlingshotService);
    /***/
  },

  /***/
  "./src/app/shared/services/utility.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/utility.service.ts ***!
    \****************************************************/

  /*! exports provided: UtilityService */

  /***/
  function srcAppSharedServicesUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilityService =
    /*#__PURE__*/
    function () {
      function UtilityService() {
        _classCallCheck(this, UtilityService);
      }

      _createClass(UtilityService, [{
        key: "convertDateToEPOC",
        value: function convertDateToEPOC(date) {
          var dateObj = new Date(date);
          return dateObj.getTime();
        }
      }, {
        key: "getDateFromEpoc",
        value: function getDateFromEpoc(timestamp) {
          var dateObj = new Date(timestamp);
          var date = dateObj.getMonth() + 1 + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();
          return date;
        }
      }]);

      return UtilityService;
    }();

    UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilityService);
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


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #f8f9fa;\n}\n/* -------------------------- global colors ----------------------------- */\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ff8b23;\n}\n/* Theme-Colors */\n.bg-offwhite {\n  background: #edf3f5;\n}\n.sling-btn {\n  background-color: #ff8b23;\n  color: #fff;\n}\n/* Logo-Text */\n.main-title {\n  font-family: \"Righteous\", cursive;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #ff3600;\n}\n.sub-title {\n  font-family: \"Didact Gothic\", sans-serif;\n  letter-spacing: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: relative;\n  padding-left: 2px;\n  font-weight: bold;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.69) !important;\n}\n.cdk-overlay-container {\n  z-index: 2000 !important;\n}\n.data-table .mat-header-cell {\n  font-size: 15px !important;\n}\n#game {\n  font-family: \"Didact Gothic\", sans-serif;\n  overflow-x: hidden;\n  margin-top: 80px;\n}\n#game .jumbotron {\n  background-color: #212325 !important;\n  color: #fff;\n  border-radius: 0em;\n}\n#game .card:hover,\n#game .list-group-item:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n#game .card:hover .category-title,\n#game .list-group-item:hover .category-title {\n  color: #ff3600;\n}\n#game .sling-img {\n  width: 80%;\n}\n#game .img {\n  width: 100%;\n}\n#game .category {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n#game .circle {\n  border-radius: 50%;\n  padding: 5px 10px 5px 10px;\n  font-weight: bold;\n  color: #fff;\n  background-color: #000;\n}\n#game .circle-10 {\n  border-radius: 50%;\n  padding: 5px 7px 5px 7px;\n  font-weight: bold;\n  color: #fff;\n  background-color: #000;\n}\n#game .list-group-item {\n  font-size: 18px !important;\n}\n#game .tool:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .sling-img {\n    width: 100% !important;\n  }\n\n  .game-info {\n    margin-top: 20px;\n    padding-top: 0px !important;\n  }\n\n  .cat-cards {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n\n  .page-title {\n    font-size: 1.2rem !important;\n  }\n\n  .list-group-item {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n\n  .tool {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpbmdzaG90L0M6XFxXb3Jrc3BhY2VcXE90aGVyXFxTbGluZ3Nob3RBc3NvY2lhdGlvbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9zbGluZ3Nob3Qvc2xpbmdzaG90LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zbGluZ3Nob3QvQzpcXFdvcmtzcGFjZVxcT3RoZXJcXFNsaW5nc2hvdEFzc29jaWF0aW9uL3NyY1xcYXBwXFxzbGluZ3Nob3RcXHNsaW5nc2hvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNBSjtBREdBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBLDJFQUFBO0FBSUE7RUFDSSxVQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQztFQUNHLGdCQUFBO0FDSko7QURPQztFQUNHLG1CQUFBO0FDSko7QURRQSxpQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTko7QURVQSxjQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7O0VBRUksWUFBQTtBQ1JKO0FEV0E7RUFDSSxTQUFBO0VBQ0EsaURBQUE7QUNSSjtBRFlBO0VBQ0ksMENBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7QUNUSjtBRGFJO0VBQ0ksMEJBQUE7QUNWUjtBQzNFQTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDhFRjtBQzdFRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEK0VKO0FDN0VFOztFQUVFLDZDQUFBO0FEK0VKO0FDOUVJOztFQUNFLGNGRVU7QUMrRWhCO0FDOUVFO0VBQ0UsVUFBQTtBRGdGSjtBQzlFRTtFQUNFLFdBQUE7QURnRko7QUM5RUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEZ0ZKO0FDOUVFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FEZ0ZKO0FDOUVFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FEZ0ZKO0FDOUVFO0VBQ0UsMEJBQUE7QURnRko7QUM3RUU7RUFDRSx3REFBQTtBRCtFSjtBQzNFQTtFQUVFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFRDZFRjs7RUMzRUE7SUFDRSxzQkFBQTtFRDhFRjs7RUM1RUE7SUFDRSxnQkFBQTtJQUNBLDJCQUFBO0VEK0VGOztFQzdFQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RURnRkY7O0VDOUVBO0lBQ0UsNEJBQUE7RURpRkY7O0VDL0VBO0lBQ0UsNkJBQUE7SUFDQSw4QkFBQTtFRGtGRjs7RUMvRUE7SUFDRSxnQkFBQTtFRGtGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2xpbmdzaG90L3NsaW5nc2hvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbG9iYWwgY29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kdGgtY29sb3I6ICNmZjhiMjM7XHJcbiR0aC1jb2xvci1kYXJrOiAjZmYzNjAwO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxufVxyXG5cclxuXHJcbi8qIFRoZW1lLUNvbG9ycyAqL1xyXG5cclxuLmJnLW9mZndoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYzZjU7XHJcbn1cclxuXHJcbi5zbGluZy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogTG9nby1UZXh0ICovXHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA1NCwgMCwgMSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyBHbG9iYWwgZGlhbG9nIGNzc1xyXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdsb2JhbCBjb2xvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xufVxuXG4vKiBUaGVtZS1Db2xvcnMgKi9cbi5iZy1vZmZ3aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjU7XG59XG5cbi5zbGluZy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogTG9nby1UZXh0ICovXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmYzNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSkgIWltcG9ydGFudDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGEtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4jZ2FtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuI2dhbWUgLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn1cbiNnYW1lIC5jYXJkOmhvdmVyLFxuI2dhbWUgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbiNnYW1lIC5jYXJkOmhvdmVyIC5jYXRlZ29yeS10aXRsZSxcbiNnYW1lIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIgLmNhdGVnb3J5LXRpdGxlIHtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG4jZ2FtZSAuc2xpbmctaW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cbiNnYW1lIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNnYW1lIC5jYXRlZ29yeSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbiNnYW1lIC5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4jZ2FtZSAuY2lyY2xlLTEwIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHggN3B4IDVweCA3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbiNnYW1lIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cbiNnYW1lIC50b29sOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLnNsaW5nLWltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5nYW1lLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNhdC1jYXJkcyB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIH1cblxuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC50b29sIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4jZ2FtZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIC5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwZW07XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVyLFxyXG4gIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgY29sb3I6ICR0aC1jb2xvci1kYXJrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2xpbmctaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICAuY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5jaXJjbGUtMTAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4IDdweCA1cHggN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudG9vbDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvL21vYmlsZSBkZXZpY2VcclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAuc2xpbmctaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5nYW1lLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhdC1jYXJkcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRvb2wge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */";
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
    /* harmony import */


    var _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/modal-data.service */
    "./src/app/shared/services/modal-data.service.ts");

    var SlingshotComponent =
    /*#__PURE__*/
    function () {
      function SlingshotComponent(dataService) {
        _classCallCheck(this, SlingshotComponent);

        this.dataService = dataService;
        this.categories = [];
        this.rules = [];
      }

      _createClass(SlingshotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.categories = this.dataService.getSlingshotCategories();
          this.rules = this.dataService.getSlingshotRules();
          window.scrollTo(0, 0);
        }
      }]);

      return SlingshotComponent;
    }();

    SlingshotComponent.ctorParameters = function () {
      return [{
        type: _shared_services_modal_data_service__WEBPACK_IMPORTED_MODULE_2__["ModalDataService"]
      }];
    };

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
    /*! C:\Workspace\Other\SlingshotAssociation\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map