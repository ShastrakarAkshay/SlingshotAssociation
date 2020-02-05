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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/affliation/affliation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"affiliation-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"head-sec text-center\">\r\n            <h2>Affiliated Districts</h2>\r\n            <p class=\"text-muted\">Some districts are not affiliated yet, for affiliation please contact.</p>\r\n            <div class=\"d-flex justify-content-center search-sec h-100\">\r\n                <div class=\"searchbar\">\r\n                    <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Search...\">\r\n                    <a class=\"search_icon\"><i class=\"fa fa-search\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row dist-sec mt-3\">\r\n            <div class=\"col-sm-4\" *ngFor=\"let item of list\">\r\n                <div class=\"card mt-3 text-white bg-dark\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">Yavatmal</h4>\r\n                        <p class=\"card-text\"> <a href=\"#\" class=\"action-button\">read more</a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <i class=\"fa fa-caret-down text-center\"></i>\r\n        </div>\r\n\r\n        <div class=\"dist-info jumbotron\">\r\n            <div>\r\n                <h2 class=\"text-center\">Yavatmal</h2>\r\n                <div class=\"row raw-info justify-content-center mt-5\">\r\n                    <div class=\"col-sm-8\">\r\n                        <p class=\"text-justify\">This district is registered under \"Slingshot Sports Association of Maharashtra, India\" affilated to - \"Indian Slingshot Sport Federation\", \"Asian Slingshot Sport Federation\", \"World organizes Slingshot Sport Federation. Affiliated\r\n                            on Date - 18 Jan 2020.\"</p>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-8\">\r\n                        <p>icons</p>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"text-center mt-4\">\r\n                    <h4><strong> <i class=\"fa fa-user-circle\"></i> Members</strong></h4>\r\n                </div>\r\n                <div class=\"row justify-content-center text-center\">\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"card card-cascade\">\r\n                            <div class=\"view view-cascade overlay\">\r\n                                <div class=\"img-area mt-5\">\r\n                                    <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"card-body card-body-cascade text-center\">\r\n                                <h4 class=\"card-title\"><strong>Billy Coleman</strong></h4>\r\n                                <h6 class=\"font-weight-bold indigo-text py-2\">Web developer</h6>\r\n                                <div class=\"social-icons mt-3\">\r\n                                    <i class=\"fa fa-phone\" matTooltip=\"9767986750\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-envelope\" matTooltip=\"example@gmail.com\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"card card-cascade\">\r\n                            <div class=\"view view-cascade overlay\">\r\n                                <div class=\"img-area mt-5\">\r\n                                    <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"card-body card-body-cascade text-center\">\r\n                                <h4 class=\"card-title\"><strong>Billy Coleman</strong></h4>\r\n                                <h6 class=\"font-weight-bold indigo-text py-2\">Web developer</h6>\r\n                                <div class=\"social-icons mt-3\">\r\n                                    <i class=\"fa fa-phone\" matTooltip=\"9767986750\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-envelope\" matTooltip=\"example@gmail.com\" matTooltipPosition=\"above\"></i>\r\n                                    <i class=\"fa fa-facebook\" matTooltip=\"facebook\" matTooltipPosition=\"above\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about-us works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home\">\r\n    <section id=\"banner-area\">\r\n        <div id=\"banner-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#banner-carousel\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption\">\r\n                        <h5>SET YOUR GOAL WITH SLINGSHOT</h5>\r\n                        <a href=\"#\" class=\"action-button\">read more</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption\">\r\n                        <h5>GET SLINGSHOT AFFILIATION</h5>\r\n                        <a href=\"#\" class=\"action-button\">REGISTER</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"./assets/images/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                    <div class=\"carousel-caption\">\r\n                        <h5>ENJOY PLAYING SLINGSHOT</h5>\r\n                        <a href=\"#\" class=\"action-button\">read more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#banner-carousel\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#banner-carousel\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"register-area\">\r\n        <div class=\"reg-panel\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"cta_content d-flex  flex-column align-items-md-center align-items-start text-center justify-content-start\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/logo.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"reg_text pt-3\">Affiliation Open For All District (Maharashtra)</div>\r\n                            <div class=\"mx-auto\"> <a href=\"#\" class=\"action-button reg-btn mt-3\">Register</a></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"welcome-area\" class=\"bg-offwhite wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-1 member-box\">\r\n                    <div class=\"ico-box active\">\r\n                        <figure class=\"d-flex justify-content-center mt-3\">\r\n                            <img class=\"shake-hand\" src=\"./assets/images/hand-shake.png\" alt=\"\">\r\n                        </figure>\r\n                        <header class=\"entry-header\">\r\n                            <h3 class=\"entry-title-box\">Become a part of Slingshot</h3>\r\n                        </header>\r\n                        <div class=\"entry-content\">\r\n                            <a class=\"btn outline mt-4\">Signup</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title welcome-title text-center\">Welcome to Association</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">We provide affiliation of slingshot game for the districts in Maharashtra. This is comes under Slingshot Sports Association of Maharashtra. To avail the affiliation please register. For the registered members of district we\r\n                                provide management of the participants and game information through this website. Get latest updates of matches and events. So Hurry Up to get Affiliation. </p>\r\n                        </div>\r\n                        <div class=\"entry-footer mt-2\">\r\n                            <a href=\"#\" class=\"action-button\">read more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"game-area\" class=\"wrapper-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\r\n                    <div class=\"welcome-content\">\r\n                        <header class=\"entry-header\">\r\n                            <h2 class=\"entry-title text-center\">About Game</h2>\r\n                        </header>\r\n                        <div class=\"entry-content mt-4\">\r\n                            <p class=\"text-justify\">In INDIA, We are playing this game from our childhood. We have enjoyed lots of moment with this game to hit the target. Now lets make this game as our sports. We provide the opportunity to compete the people with this game,\r\n                                and achieve some position in this game under the <strong>\"</strong>Slingshot Sports Association of Maharashtra, India<strong>\"</strong>. Please read the rules for this game before you start. </p>\r\n                        </div>\r\n                        <div class=\"entry-footer mt-2\">\r\n                            <a href=\"#\" class=\"action-button\">read more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6 order-1 slingshot-box\">\r\n                    <img class=\"img shadow rounded\" src=\"./assets/images/slingshot.jpg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"events-area\" class=\"wrapper-box\">\r\n\r\n\r\n    </section>\r\n\r\n    <section id=\"testimonial-area\">\r\n        <div class=\"img-overlay text-center\">\r\n            <div class=\"container\">\r\n                <div id=\"contactCourousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n                    <ol class=\"carousel-indicators user-indicators\">\r\n                        <li data-target=\"#contactCourousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                        <li data-target=\"#contactCourousel\" data-slide-to=\"1\"></li>\r\n                        <li data-target=\"#contactCourousel\" data-slide-to=\"2\"></li>\r\n                    </ol>\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item active pb-5\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">Mr. Vikas Shelke</h3>\r\n                                <span>(Secretory)</span>\r\n                                <br>\r\n                                <span>vikas.shelke@gmail.com</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"carousel-item pb-5\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">Mr. Bipin Chaudhari</h3>\r\n                                <span>(General Secretory)</span>\r\n                                <br>\r\n                                <span>bipin.chaudhari@gmail.com</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"carousel-item pb-5\">\r\n                            <div class=\"img-area\">\r\n                                <img src=\"./assets/images/user-pic.jpg\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"mt-3\">Mr. Lalit Dhoke</h3>\r\n                                <span>(General Secretory)</span>\r\n                                <br>\r\n                                <span>lalit.dhoke@gmail.com</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"carousel-control-prev\" href=\"#contactCourousel\" role=\"button\" data-slide=\"prev\">\r\n                        <i class=\"fa fa-caret-square-o-left\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"carousel-control-next\" href=\"#contactCourousel\" role=\"button\" data-slide=\"next\">\r\n                        <i class=\"fa fa-caret-square-o-right\" aria-hidden=\"true\"></i>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"event-area\">\r\n\r\n    </section>\r\n\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"footer\">\r\n    <div class=\"row mb-5\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"ft-logo\">\r\n                <span class=\"main-title\">Slingshot</span><span class=\"sub-title\">Association</span>\r\n            </div>\r\n            <div class=\"ft-social mt-4\">\r\n                <span>SOCIAL CONNECT</span>\r\n                <div class=\"social-icons mt-3\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                    <i class=\"fa fa-youtube\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-5 contact\">\r\n            <h3>Contact<span> us</span></h3>\r\n            <div class=\"info\">\r\n                <p><i class=\"fa fa-map-marker pr-3\"></i>Yavatmal, Maharashtra, India. Pin 445001.</p>\r\n                <p><i class=\"fa fa-phone pr-3\"></i>9767986750</p>\r\n                <p><i class=\"fa fa-envelope pr-3\"></i>support@ssassociation.com</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3 subscribe\">\r\n            <h3>Subscribe<span> us</span></h3>\r\n            <div class=\"sub\">\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\" required>\r\n                <input type=\"button\" class=\"btn btn-block action-button\" name=\"Subscribe\" value=\"Subscribe\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ft-credit\">\r\n        <hr class=\"hr\">\r\n        <p class=\"text-center\">Designed By Akshay Shastrakar | akshay.shastrakar1@gmail.com</p>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light sticky-top shadow\">\r\n    <div class='navbar-brand'>\r\n        <span class='navbar-title ml-2'><span class=\"main-title\">Slingshot</span><span class=\"sub-title\">Association</span></span>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"affiliation\">Affiliation</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/\">Sports</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/\">Gallary</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/contact\">Contact us</a>\r\n            </li>\r\n        </ul>\r\n        <a class=\"btn outline\">Login</a>\r\n    </div>\r\n</nav>");

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

/***/ "./src/app/affliation/affliation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/affliation/affliation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-scrollbar {\n  width: 3px;\n}\n\n.action-button {\n  display: inline-block;\n  padding: 8px 30px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n\n.img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.img-area img {\n  width: 100%;\n}\n\n.fa-caret-down {\n  font-size: 20px;\n}\n\n#affiliation-sec {\n  font-family: \"Didact Gothic\", sans-serif;\n  margin-top: 50px;\n}\n\n#affiliation-sec .head-sec h2,\n#affiliation-sec .dist-info h2 {\n  font-family: \"Righteous\";\n}\n\n#affiliation-sec .head-sec .text-muted {\n  font-size: 20px;\n}\n\n#affiliation-sec .card .card-text {\n  display: none;\n}\n\n#affiliation-sec .card {\n  margin-top: 30px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n\n#affiliation-sec .card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 4px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n\n#affiliation-sec .card:hover:before {\n  left: 0;\n  right: 0;\n}\n\n#affiliation-sec .card:hover {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n#affiliation-sec .card:hover .card-title {\n  color: #ff8b23;\n}\n\n#affiliation-sec .search-sec .searchbar {\n  margin-bottom: auto;\n  margin-top: auto;\n  height: 45px;\n  background-color: #353b48;\n  border-radius: 30px;\n  padding: 3px;\n}\n\n#affiliation-sec .search-sec .search_input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  caret-color: transparent;\n  line-height: 40px;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n\n#affiliation-sec .search-sec .searchbar:hover > .search_input {\n  padding: 0 10px;\n  width: 300px;\n  caret-color: red;\n  -webkit-transition: width 0.4s linear;\n  transition: width 0.4s linear;\n}\n\n#affiliation-sec .search-sec .searchbar:hover > .search_icon {\n  background: white;\n  color: #e74c3c;\n}\n\n#affiliation-sec .search-sec .search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  color: white;\n  text-decoration: none;\n}\n\n#affiliation-sec .dist-sec {\n  width: 100%;\n  height: 300px;\n  padding-left: 30px;\n  overflow: hidden;\n}\n\n#affiliation-sec .dist-sec:hover {\n  overflow-y: scroll;\n}\n\n#affiliation-sec .dist-info .social-icons i {\n  padding: 10px;\n}\n\n#affiliation-sec .dist-info .social-icons i:hover {\n  color: #e74c3c;\n}\n\n#affiliation-sec .dist-info.jumbotron {\n  margin: 70px 30px 70px 30px;\n}\n\n@media only screen and (max-width: 768px) {\n  #affiliation-sec .search-sec .searchbar:hover > .search_input {\n    width: 250px;\n  }\n  #affiliation-sec .dist-info .card {\n    margin-top: 30px;\n  }\n  #affiliation-sec .dist-info.jumbotron {\n    margin: 30px 0px 70px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWZmbGlhdGlvbi9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGFmZmxpYXRpb25cXGFmZmxpYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FmZmxpYXRpb24vYWZmbGlhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7QUNFUjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURBSTs7RUFFSSx3QkFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtBQ0VSOztBREFJO0VBQ0ksYUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VSOztBRERRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQ0daOztBRERRO0VBQ0ksT0FBQTtFQUNBLFFBQUE7QUNHWjs7QURBSTtFQUNJLGVBQUE7RUFDQSx3REFBQTtBQ0VSOztBRERRO0VBQ0ksY0FBQTtBQ0daOztBRENRO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NaOztBRENRO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QUNDWjs7QURDUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FDQ1o7O0FEQ1E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNDWjs7QURDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDWjs7QURFSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBRENRO0VBQ0ksa0JBQUE7QUNDWjs7QURHUTtFQUNJLGFBQUE7QUNEWjs7QURFWTtFQUNJLGNBQUE7QUNBaEI7O0FER1E7RUFDSSwyQkFBQTtBQ0RaOztBRE1BO0VBSVk7SUFDSSxZQUFBO0VDTmQ7RURVVTtJQUNJLGdCQUFBO0VDUmQ7RURVVTtJQUNJLHlCQUFBO0VDUmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FmZmxpYXRpb24vYWZmbGlhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmRjYjllO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmltZy1hcmVhIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYS1jYXJldC1kb3duIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI2FmZmlsaWF0aW9uLXNlYyB7XHJcbiAgICBmb250LWZhbWlseTogJ0RpZGFjdCBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIC5oZWFkLXNlYyBoMixcclxuICAgIC5kaXN0LWluZm8gaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiXHJcbiAgICB9XHJcbiAgICAuaGVhZC1zZWMgLnRleHQtbXV0ZWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5jYXJkIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgLjE1KSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmOGIyMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXNlYyB7XHJcbiAgICAgICAgLnNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2I0ODtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoX2lucHV0IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaGJhcjpob3Zlcj4uc2VhcmNoX2lucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGNhcmV0LWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoYmFyOmhvdmVyPi5zZWFyY2hfaWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2U3NGMzYztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaF9pY29uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGlzdC1zZWMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGlzdC1pbmZvIHtcclxuICAgICAgICAuc29jaWFsLWljb25zIGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuanVtYm90cm9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA3MHB4IDMwcHggNzBweCAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgICAjYWZmaWxpYXRpb24tc2VjIHtcclxuICAgICAgICAuc2VhcmNoLXNlYyB7XHJcbiAgICAgICAgICAgIC5zZWFyY2hiYXI6aG92ZXI+LnNlYXJjaF9pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc3QtaW5mbyB7XHJcbiAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4IDcwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogM3B4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZGNiOWU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmltZy1hcmVhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZhLWNhcmV0LWRvd24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNhZmZpbGlhdGlvbi1zZWMge1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5oZWFkLXNlYyBoMixcbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuaGVhZC1zZWMgLnRleHQtbXV0ZWQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5jYXJkIC5jYXJkLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6aG92ZXI6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmNhcmQ6aG92ZXIgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmOGIyMztcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaGJhciB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2I0ODtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogM3B4O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuc2VhcmNoLXNlYyAuc2VhcmNoX2lucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiAwO1xuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLnNlYXJjaC1zZWMgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgY2FyZXQtY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNlNzRjM2M7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hfaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jYWZmaWxpYXRpb24tc2VjIC5kaXN0LXNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jYWZmaWxpYXRpb24tc2VjIC5kaXN0LXNlYzpob3ZlciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mbyAuc29jaWFsLWljb25zIGkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvIC5zb2NpYWwtaWNvbnMgaTpob3ZlciB7XG4gIGNvbG9yOiAjZTc0YzNjO1xufVxuI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvLmp1bWJvdHJvbiB7XG4gIG1hcmdpbjogNzBweCAzMHB4IDcwcHggMzBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjYWZmaWxpYXRpb24tc2VjIC5zZWFyY2gtc2VjIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2lucHV0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgI2FmZmlsaWF0aW9uLXNlYyAuZGlzdC1pbmZvIC5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gICNhZmZpbGlhdGlvbi1zZWMgLmRpc3QtaW5mby5qdW1ib3Ryb24ge1xuICAgIG1hcmdpbjogMzBweCAwcHggNzBweCAwcHg7XG4gIH1cbn0iXX0= */");

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


let AffliationComponent = class AffliationComponent {
    constructor() {
        this.list = [1, 1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6];
    }
    ngOnInit() {
    }
};
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






const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "affiliation",
        component: _affliation_affliation_component__WEBPACK_IMPORTED_MODULE_4__["AffliationComponent"]
    },
    {
        path: "contact",
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
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
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */");

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


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  width: 100%;\n}\n\n.carousel-indicators .active {\n  background-color: #ff8b23;\n}\n\n.action-button {\n  display: inline-block;\n  padding: 13px 47px;\n  background-color: #ff8b23;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-bottom: 4px solid #fdcb9e;\n  margin-top: 10px;\n  text-decoration: none;\n}\n\n.entry-title {\n  font-weight: bold;\n}\n\n.entry-content {\n  font-size: 18px;\n}\n\n.wrapper-box {\n  padding: 96px 0;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n\n#banner-area .carousel-item {\n  background: no-repeat center center scroll;\n  background-size: cover;\n  -webkit-background-size: cover;\n}\n\n#banner-area .carousel-caption:hover {\n  background-color: #0000009c;\n}\n\n#banner-area .carousel-caption {\n  bottom: 35%;\n  background-color: #2423236e;\n  padding: 30px;\n}\n\n#banner-area .carousel-caption h5 {\n  font-size: 45px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n#register-area {\n  padding-left: 85px;\n  padding-right: 85px;\n}\n\n#register-area .reg-panel {\n  border-top: solid 1px #FFFFFF;\n  border-bottom: solid 1px #FFFFFF;\n  padding-top: 64px;\n  padding-bottom: 56px;\n}\n\n#register-area .reg_text {\n  font-weight: 400;\n  line-height: 1.2;\n  font-size: 34px;\n  font-family: \"Righteous\", cursive;\n}\n\n#register-area .action-button {\n  font-size: 18px;\n}\n\n#register-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n#register-area .img-area img {\n  width: 100%;\n}\n\n#register-area .img-area:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n\n#welcome-area .ico-box {\n  height: 100%;\n  padding: 40px;\n  border-radius: 24px;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  border: 0;\n  background: -webkit-gradient(linear, right top, left top, from(#ff5a00), to(#ff3600));\n  background: linear-gradient(270deg, #ff5a00 0%, #ff3600 100%);\n  color: #fff;\n}\n\n#welcome-area .ico-box .shake-hand {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  height: 20%;\n  width: 20%;\n}\n\n#welcome-area .ico-box .outline {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #fff;\n  font-size: 16px;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 2px;\n  padding: 12px 48px;\n  text-transform: uppercase;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n\n#welcome-area .ico-box .outline:hover {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n\n#game-area .img {\n  width: 100%;\n}\n\n#game-area .img:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  -webkit-transition: -webkit-transform 0.5s ease-out;\n  transition: -webkit-transform 0.5s ease-out;\n  transition: transform 0.5s ease-out;\n  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\n}\n\n#game-area .slingshot-box {\n  overflow: hidden;\n  border-radius: 0.25rem !important;\n}\n\n#testimonial-area {\n  font-family: \"Didact Gothic\", sans-serif;\n  position: relative;\n  background: #fff;\n  color: #000;\n  overflow: hidden;\n  width: 100%;\n  background-size: cover;\n}\n\n#testimonial-area .carousel .fa {\n  font-size: 20px;\n  color: #0000007a;\n}\n\n#testimonial-area .carousel-indicators li {\n  background-color: #0a01018c;\n}\n\n#testimonial-area .carousel-indicators li.active {\n  background-color: #ff8b23;\n}\n\n#testimonial-area .img-overlay {\n  padding: 50px 0px;\n}\n\n#testimonial-area .img-area {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n#testimonial-area .img-area img {\n  width: 100%;\n}\n\n#testimonial-area .carousel-caption {\n  position: static;\n  padding-bottom: 15px;\n  padding-top: 0;\n  color: #000;\n}\n\n#testimonial-area .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n\n#events-area {\n  background: yellow;\n}\n\n@media only screen and (max-width: 992px) {\n  #banner-area .carousel-caption {\n    bottom: 50px;\n  }\n\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .wrapper-box {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .wrapper-box .entry-title {\n    padding-top: 50px;\n  }\n\n  #register-area {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  #register-area .reg_text {\n    font-size: 20px;\n  }\n  #register-area .reg-btn {\n    font-size: 14px;\n    padding: 10px 40px;\n  }\n\n  #banner-area .carousel-caption {\n    display: none;\n  }\n\n  .shake-hand {\n    height: 25% !important;\n    width: 25% !important;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  #welcome-area .member-box {\n    padding-right: 50px;\n    padding-left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLFdBQUE7QUNDUjs7QURHUTtFQUNJLHlCQUFBO0FDQVo7O0FESUk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0RSOztBRElJO0VBQ0ksaUJBQUE7QUNEUjs7QURJSTtFQUNJLGVBQUE7QUNEUjs7QURJSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7QUNEUjs7QURLUTtFQUNJLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0ZaOztBRElRO0VBQ0ksMkJBQUE7QUNGWjs7QURJUTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNGWjs7QURHWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRGhCOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0hSOztBRElRO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNGWjs7QURJUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNGWjs7QURJUTtFQUNJLGVBQUE7QUNGWjs7QURJUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0FDRGhCOztBRElRO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtFQUNBLCtDQUFBO0VBQUEsdUNBQUE7RUFBQSwrQkFBQTtFQUFBLDREQUFBO0FDRlo7O0FET1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLHFGQUFBO0VBQUEsNkRBQUE7RUFDQSxXQUFBO0FDSlo7O0FES1k7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNIaEI7O0FES1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNIaEI7O0FES1k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNIaEI7O0FEU1E7RUFDSSxXQUFBO0FDTlo7O0FEUVE7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsbURBQUE7RUFBQSwyQ0FBQTtFQUFBLG1DQUFBO0VBQUEsb0VBQUE7QUNOWjs7QURRUTtFQUNJLGdCQUFBO0VBQ0EsaUNBQUE7QUNOWjs7QURVSTtFQUNJLHdDQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ1JSOztBRFVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDUmhCOztBRFlZO0VBQ0ksMkJBQUE7QUNWaEI7O0FEWVk7RUFDSSx5QkFBQTtBQ1ZoQjs7QURhUTtFQUNJLGlCQUFBO0FDWFo7O0FEYVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYWjs7QURZWTtFQUNJLFdBQUE7QUNWaEI7O0FEYVE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNYWjs7QURhUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNYWjs7QURlSTtFQUVJLGtCQUFBO0FDYlI7O0FEZ0JJO0VBR1E7SUFDSSxZQUFBO0VDZmQ7O0VEbUJVO0lBQ0ksaUJBQUE7RUNoQmQ7QUFDRjs7QURvQkk7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUNuQlY7RURvQlU7SUFDSSxpQkFBQTtFQ2xCZDs7RURxQk07SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VDbEJWO0VEbUJVO0lBQ0ksZUFBQTtFQ2pCZDtFRG1CVTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQ2pCZDs7RURxQlU7SUFDSSxhQUFBO0VDbEJkOztFRHFCTTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7RUNsQlY7QUFDRjs7QURxQkk7RUFFUTtJQUNJLG1CQUFBO0lBQ0Esa0JBQUE7RUNwQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuaG9tZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3Rpb24tYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCA0N3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZGNiOWU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lbnRyeS10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lbnRyeS1jb250ZW50IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53cmFwcGVyLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogOTZweCAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNiYW5uZXItYXJlYSB7XHJcbiAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcm91c2VsLWNhcHRpb246aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICAgICAgYm90dG9tOiAzNSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDIzMjM2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNyZWdpc3Rlci1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDg1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogODVweDtcclxuICAgICAgICAucmVnLXBhbmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRkZGRkZGO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDU2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWdfdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZy1hcmVhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgLjE1KSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWFyZWE6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICN3ZWxjb21lLWFyZWEge1xyXG4gICAgICAgIC5pY28tYm94IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMjU1LCA5MCwgMCwgMSkgMCUsIHJnYmEoMjU1LCA1NCwgMCwgMSkgMTAwJSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAuc2hha2UtaGFuZCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdXRsaW5lIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCA0OHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3V0bGluZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgI2dhbWUtYXJlYSB7XHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpbmdzaG90LWJveCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjdGVzdGltb25pYWwtYXJlYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmctY29udGFjdHMuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAuY2Fyb3VzZWwge1xyXG4gICAgICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTAxMDE4YztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLW92ZXJsYXkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZy1hcmVhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgI2V2ZW50cy1hcmVhIHtcclxuICAgICAgICAvL2Nzc1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIC8vIHRhYmxldCBkZXZpY2VzXHJcbiAgICAgICAgI2Jhbm5lci1hcmVhIHtcclxuICAgICAgICAgICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53cmFwcGVyLWJveCB7XHJcbiAgICAgICAgICAgIC5lbnRyeS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC8vbW9iaWxlIGRldmljZVxyXG4gICAgICAgIC53cmFwcGVyLWJveCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgLmVudHJ5LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNyZWdpc3Rlci1hcmVhIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgLnJlZ190ZXh0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVnLWJ0biB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI2Jhbm5lci1hcmVhIHtcclxuICAgICAgICAgICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2hha2UtaGFuZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAjd2VsY29tZS1hcmVhIHtcclxuICAgICAgICAgICAgLm1lbWJlci1ib3gge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCIuaG9tZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEzcHggNDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZkY2I5ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZW50cnktdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVudHJ5LWNvbnRlbnQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53cmFwcGVyLWJveCB7XG4gIHBhZGRpbmc6IDk2cHggMDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNiYW5uZXItYXJlYSAuY2Fyb3VzZWwtaXRlbSB7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDljO1xufVxuI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgYm90dG9tOiAzNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDIzMjM2ZTtcbiAgcGFkZGluZzogMzBweDtcbn1cbiNiYW5uZXItYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbiBoNSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuI3JlZ2lzdGVyLWFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDg1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDg1cHg7XG59XG4jcmVnaXN0ZXItYXJlYSAucmVnLXBhbmVsIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNGRkZGRkY7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRkZGRkZGO1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDU2cHg7XG59XG4jcmVnaXN0ZXItYXJlYSAucmVnX3RleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xufVxuI3JlZ2lzdGVyLWFyZWEgLmFjdGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4jcmVnaXN0ZXItYXJlYSAuaW1nLWFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbiNyZWdpc3Rlci1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNyZWdpc3Rlci1hcmVhIC5pbWctYXJlYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbn1cblxuI3dlbGNvbWUtYXJlYSAuaWNvLWJveCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZmNWEwMCAwJSwgI2ZmMzYwMCAxMDAlKTtcbiAgY29sb3I6ICNmZmY7XG59XG4jd2VsY29tZS1hcmVhIC5pY28tYm94IC5zaGFrZS1oYW5kIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiAyMCU7XG59XG4jd2VsY29tZS1hcmVhIC5pY28tYm94IC5vdXRsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgcGFkZGluZzogMTJweCA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG4jd2VsY29tZS1hcmVhIC5pY28tYm94IC5vdXRsaW5lOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG5cbiNnYW1lLWFyZWEgLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2dhbWUtYXJlYSAuaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbn1cbiNnYW1lLWFyZWEgLnNsaW5nc2hvdC1ib3gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbiN0ZXN0aW1vbmlhbC1hcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5jYXJvdXNlbCAuZmEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwMDAwN2E7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTAxMDE4Yztcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiMjM7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuaW1nLW92ZXJsYXkge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbn1cbiN0ZXN0aW1vbmlhbC1hcmVhIC5pbWctYXJlYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jdGVzdGltb25pYWwtYXJlYSAuaW1nLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgY29sb3I6ICMwMDA7XG59XG4jdGVzdGltb25pYWwtYXJlYSAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbiNldmVudHMtYXJlYSB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjYmFubmVyLWFyZWEgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC53cmFwcGVyLWJveCAuZW50cnktdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyLWJveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLndyYXBwZXItYm94IC5lbnRyeS10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cblxuICAjcmVnaXN0ZXItYXJlYSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gICNyZWdpc3Rlci1hcmVhIC5yZWdfdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gICNyZWdpc3Rlci1hcmVhIC5yZWctYnRuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICB9XG5cbiAgI2Jhbm5lci1hcmVhIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNoYWtlLWhhbmQge1xuICAgIGhlaWdodDogMjUlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICN3ZWxjb21lLWFyZWEgLm1lbWJlci1ib3gge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG59Il19 */");

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


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
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
/* harmony default export */ __webpack_exports__["default"] = ("#footer {\n  padding: 70px;\n  background: #000;\n  color: #fff;\n  font-family: \"Didact Gothic\", sans-serif;\n}\n#footer .hr {\n  background-color: #fff;\n}\n#footer .action-button {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #ff8b23;\n  font-size: 17px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-top: 10px;\n  text-decoration: none;\n}\n#footer .contact h3,\n#footer .subscribe h3 {\n  color: #ff3600;\n}\n#footer .contact h3 span,\n#footer .subscribe h3 span {\n  color: #fff;\n}\n#footer .social-icons i {\n  padding: 10px;\n  border-radius: 50%;\n  font-size: 20px;\n  text-align: center;\n  background: red;\n  margin-right: 15px;\n  width: 40px;\n  color: #fff;\n}\n#footer .social-icons .fa-twitter {\n  background: #55ACEE;\n}\n#footer .social-icons .fa-linkedin {\n  background: #007bb5;\n}\n#footer .social-icons .fa-facebook {\n  background: #3B5998;\n}\n#footer .social-icons .fa-youtube {\n  background: #bb0000;\n}\n@media only screen and (max-width: 768px) {\n  #footer {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n  #footer .contact,\n#footer .subscribe {\n    margin-top: 50px;\n  }\n  #footer .info,\n#footer .sub {\n    margin-top: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) {\n  #footer .info,\n#footer .sub {\n    margin-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGxheW91dFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FDQ0o7QURBSTtFQUNJLHNCQUFBO0FDRVI7QURBSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0VSO0FERVE7O0VBQ0ksY0FBQTtBQ0NaO0FEQVk7O0VBQ0ksV0FBQTtBQ0doQjtBREVRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBWjtBREVRO0VBQ0ksbUJBQUE7QUNBWjtBREVRO0VBQ0ksbUJBQUE7QUNBWjtBREVRO0VBQ0ksbUJBQUE7QUNBWjtBREVRO0VBQ0ksbUJBQUE7QUNBWjtBREtBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VDRk47RURHTTs7SUFFSSxnQkFBQTtFQ0RWO0VER007O0lBRUksZ0JBQUE7RUNEVjtBQUNGO0FES0E7RUFFUTs7SUFFSSxrQkFBQTtFQ0pWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xyXG4gICAgcGFkZGluZzogNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICAuaHIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YjIzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QsXHJcbiAgICAuc3Vic2NyaWJlIHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgNTQsIDAsIDEpO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS10d2l0dGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWxpbmtlZGluIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWZhY2Vib29rIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXlvdXR1YmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLmNvbnRhY3QsXHJcbiAgICAgICAgLnN1YnNjcmliZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLFxyXG4gICAgICAgIC5zdWIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgLmluZm8sXHJcbiAgICAgICAgLnN1YiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIjZm9vdGVyIHtcbiAgcGFkZGluZzogNzBweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkRpZGFjdCBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbn1cbiNmb290ZXIgLmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbiNmb290ZXIgLmFjdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGIyMztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jZm9vdGVyIC5jb250YWN0IGgzLFxuI2Zvb3RlciAuc3Vic2NyaWJlIGgzIHtcbiAgY29sb3I6ICNmZjM2MDA7XG59XG4jZm9vdGVyIC5jb250YWN0IGgzIHNwYW4sXG4jZm9vdGVyIC5zdWJzY3JpYmUgaDMgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIGkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIC5mYS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcbn1cbiNmb290ZXIgLnNvY2lhbC1pY29ucyAuZmEtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xufVxuI2Zvb3RlciAuc29jaWFsLWljb25zIC5mYS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG59XG4jZm9vdGVyIC5zb2NpYWwtaWNvbnMgLmZhLXlvdXR1YmUge1xuICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNmb290ZXIge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB9XG4gICNmb290ZXIgLmNvbnRhY3QsXG4jZm9vdGVyIC5zdWJzY3JpYmUge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgI2Zvb3RlciAuaW5mbyxcbiNmb290ZXIgLnN1YiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAjZm9vdGVyIC5pbmZvLFxuI2Zvb3RlciAuc3ViIHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".navbar-light .navbar-toggler {\n  border: none;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar-title:hover {\n  cursor: pointer;\n}\n\n#navbarNav a.nav-link {\n  font-size: 13px !important;\n  font-weight: 500;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n\n#navbarNav a.nav-link:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #ff8b23;\n  height: 2px;\n  -webkit-transition-property: left right;\n  transition-property: left right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n\n#navbarNav a.nav-link:hover:before {\n  left: 0px;\n  right: 0;\n}\n\n#navbarNav a.nav-link:hover {\n  color: #ff8b23;\n}\n\n.navbar {\n  height: 80px;\n  width: 100%;\n  background-color: #fff;\n}\n\n.navbar-collapse {\n  background: inherit;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.outline:hover {\n  position: relative;\n  z-index: 3;\n  background: transparent;\n  color: #ff8b23;\n  border-color: #ff8b23;\n  border-style: solid;\n  border-width: 2px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n\n.outline {\n  color: white;\n  background: #ff8b23;\n  border-color: white;\n  -webkit-transition: all 350ms ease 0s;\n  transition: all 350ms ease 0s;\n  text-transform: uppercase;\n  padding: 7px 20px;\n  margin-left: 30px;\n  font-size: 14px;\n}\n\n@media only screen and (max-width: 992px) {\n  .outline {\n    margin-left: 0px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n  }\n\n  .navbar-collapse {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-top: 70px;\n    margin-right: 20px;\n    padding-top: 20px;\n  }\n\n  .navbar-light .navbar-nav .nav-link {\n    padding-top: 15px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .navbar li {\n    padding-left: 13px;\n    padding-right: 13px;\n  }\n\n  .navbar-brand {\n    padding-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9DOlxcV29ya3NwYWNlXFxPdGhlclxcU2xpbmdzaG90QXNzb2NpYXRpb24vc3JjXFxhcHBcXGxheW91dFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FDRUo7O0FEQUU7RUFDRSxTQUFBO0VBQ0EsUUFBQTtBQ0VKOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFFRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0RGOztFREdBO0lBQ0Usd0RBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxRQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDQUY7O0VERUE7SUFDRSxpQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFFRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUNERjs7RURHQTtJQUNFLGtCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG59XHJcblxyXG4ubmF2YmFyLXRpdGxlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNuYXZiYXJOYXYgYS5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCByaWdodDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmY4YjIzO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmhvdmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2ZmOGIyMztcclxuICBib3JkZXItY29sb3I6ICNmZjhiMjM7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbn1cclxuXHJcbi5vdXRsaW5lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI2ZmOGIyMztcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLy9tb2JpbGUgZGV2aWNlXHJcbiAgLm91dGxpbmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC8vZGVza3RvcFxyXG4gIC5uYXZiYXIgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5uYXZiYXItdGl0bGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuYXZiYXJOYXYgYS5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4jbmF2YmFyTmF2IGEubmF2LWxpbms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZjhiMjM7XG4gIGhlaWdodDogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbiNuYXZiYXJOYXYgYS5uYXYtbGluazpob3ZlcjpiZWZvcmUge1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwO1xufVxuI25hdmJhck5hdiBhLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZjhiMjM7XG59XG5cbi5uYXZiYXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWNvbGxhcHNlIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4ub3V0bGluZTpob3ZlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmY4YjIzO1xuICBib3JkZXItY29sb3I6ICNmZjhiMjM7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG5cbi5vdXRsaW5lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZmY4YjIzO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZSAwcztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm91dGxpbmUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgfVxuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgfVxufSJdfQ== */");

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


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/layout/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



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