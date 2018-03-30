webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leasing_application_leasing_application_component__ = __webpack_require__("./src/app/leasing-application/leasing-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lease_status_lease_status_component__ = __webpack_require__("./src/app/lease-status/lease-status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'leaseForm', component: __WEBPACK_IMPORTED_MODULE_2__leasing_application_leasing_application_component__["a" /* LeasingApplicationComponent */] },
    { path: 'leaseStatus', component: __WEBPACK_IMPORTED_MODULE_3__lease_status_lease_status_component__["a" /* LeaseStatusComponent */] },
    // {path: 'home', component: HomeComponent},
    // {path: 'leaseStatus', component: LeaseStatusComponent},
    { path: '', redirectTo: 'leaseForm', pathMatch: 'full' },
    { path: 'leaseForm/leaseStatus', redirectTo: 'leaseStatus', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Exo');\r\n@import url('https://fonts.googleapis.com/css?family=Roboto');\r\nh1{\r\n  margin: 0%;\r\n  padding: 2%;\r\n  padding-bottom: 1.5%;\r\n  color: #F35B1C;\r\n  font-family: 'Exo';\r\n  font-size: 30px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">Vehicle Leasing</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <!--<li routerLinkActive=\"active\"><a routerLink=\"home\" routerLinkActive=\"active\">Home</a></li>-->\r\n      <li routerLinkActive=\"active\"><a routerLink=\"leaseForm\" >Lease Form</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"leaseStatus\">Search Lease</a></li>\r\n    </ul>\r\n    <!--<ul class=\"nav navbar-nav navbar-right\">-->\r\n    <!--<li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>-->\r\n    <!--<li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>-->\r\n    <!--</ul>-->\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div>\r\n    <h1>\r\n        Vehicle Leasing\r\n    </h1>\r\n  </div>\r\n  <!--<app-leasing-form ></app-leasing-form>-->\r\n\r\n<!--<app-leasing-application></app-leasing-application>-->\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Lease Calculator';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leasing_form_leasing_form_component__ = __webpack_require__("./src/app/leasing-form/leasing-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__leasing_application_leasing_application_component__ = __webpack_require__("./src/app/leasing-application/leasing-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__leasing_application_lease_form_lease_form_component__ = __webpack_require__("./src/app/leasing-application/lease-form/lease-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__leasing_application_lease_summary_lease_summary_component__ = __webpack_require__("./src/app/leasing-application/lease-summary/lease-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__leasing_application_business_form_business_form_component__ = __webpack_require__("./src/app/leasing-application/business-form/business-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__leasing_application_confirmation_page_confirmation_page_component__ = __webpack_require__("./src/app/leasing-application/confirmation-page/confirmation-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__leasing_application_private_form_private_form_component__ = __webpack_require__("./src/app/leasing-application/private-form/private-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__leasing_application_error_module_error_module_component__ = __webpack_require__("./src/app/leasing-application/error-module/error-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lease_status_lease_status_component__ = __webpack_require__("./src/app/lease-status/lease-status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__leasing_form_leasing_form_component__["a" /* LeasingFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__leasing_application_leasing_application_component__["a" /* LeasingApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__leasing_application_lease_form_lease_form_component__["a" /* LeaseFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__leasing_application_lease_summary_lease_summary_component__["a" /* LeaseSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_14__leasing_application_business_form_business_form_component__["a" /* BusinessFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__leasing_application_confirmation_page_confirmation_page_component__["a" /* ConfirmationPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__leasing_application_private_form_private_form_component__["a" /* PrivateFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__leasing_application_error_module_error_module_component__["a" /* ErrorModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_19__lease_status_lease_status_component__["a" /* LeaseStatusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["c" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["c" /* ModalModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_vehicle_service__["a" /* VehicleService */], __WEBPACK_IMPORTED_MODULE_17__services_lease_service__["a" /* LeaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__leasing_application_error_module_error_module_component__["a" /* ErrorModuleComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/lease-status/lease-status.component.css":
/***/ (function(module, exports) {

module.exports = ".status_div{\r\n  display: block;\r\n  margin-left: 20px;\r\n}\r\nh2{\r\n  margin-bottom: 30px;\r\n}\r\nhr{\r\n  color: black;\r\n}\r\nh3{\r\n  margin-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/lease-status/lease-status.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"navbar-form\">\r\n  <label>Your application ID : </label>\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" [(ngModel)]=\"leaseID\" name=\"leaseID\" class=\"form-control\">\r\n  </div>\r\n  <button type=\"submit\" (click)=\"onSearchClick()\" class=\"btn btn-default\">Search</button>\r\n</form>\r\n\r\n<div class=\"status_div\" *ngIf=\"response!=null && infoIsShown && !isError\">\r\n  <h2 *ngIf=\"response.applicationStatus == null; then statusNull;else statusNotNull\"></h2>\r\n  <ng-template #statusNotNull><b>Status: </b>{{response.applicationStatus}}</ng-template>\r\n  <ng-template #statusNull><b>Status: </b>not found</ng-template>\r\n\r\n<h4 *ngIf=\"response.customerType == 'Private'\"><b>Customer: </b>{{response.firstName}} {{response.lastName}}</h4>\r\n  <h4 *ngIf=\"response.customerType == 'Business'\"><b>Customer: </b>{{response.companyName}} {{response.companyCode}}</h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">CUSTOMER TYPE</div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.customerType}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">ASSET TYPE</div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.assetType}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">BRAND</div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.brand}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">MODEL</div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.model}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">YEAR</div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.year}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">ENGINE POWER  </div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.enginePower}} kW</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">ASSET PRICE </div>\r\n    <div class=\"col-xs-7 borderdiv\"> {{response.assetPrice}} €</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">ADVANCE PAYMENT PERCENTAGE</div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.advancePaymentPercentage}} %</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">ADVANCE PAYMENT AMOUNT</div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.advancePaymentAmount}} €</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">LEASE PERIOD </div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.leasePeriod}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">MARGIN </div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.margin}} %</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">CONTRACT FEE </div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.contractFee}} €</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">PAYMENT DATE </div>\r\n    <div class=\"col-xs-7 borderdiv\">{{response.paymentDate}}</div>\r\n  </div>\r\n</div>\r\n<div class=\"status_div\" *ngIf=\"infoIsShown && isError\">\r\n  <h3>Wrong lease id. Try again</h3>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/lease-status/lease-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaseStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaseStatusComponent = /** @class */ (function () {
    function LeaseStatusComponent(leaseService) {
        this.leaseService = leaseService;
        this.infoIsShown = false;
        this.isError = false;
    }
    LeaseStatusComponent.prototype.ngOnInit = function () {
    };
    LeaseStatusComponent.prototype.onSearchClick = function () {
        var _this = this;
        this.leaseService.getLeaseByUniqueId(this.leaseID).then(function (data) {
            _this.response = data;
            _this.isError = false;
            _this.infoIsShown = true;
        }, function (error) {
            _this.isError = true;
            _this.infoIsShown = true;
        });
    };
    LeaseStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lease-status',
            template: __webpack_require__("./src/app/lease-status/lease-status.component.html"),
            styles: [__webpack_require__("./src/app/lease-status/lease-status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_lease_service__["a" /* LeaseService */]])
    ], LeaseStatusComponent);
    return LeaseStatusComponent;
}());



/***/ }),

/***/ "./src/app/leasing-application/business-form/business-form.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n#address{\r\n  /* margin: 8px 0 0 0; */\r\n  font-size: 14px;\r\n}\r\n\r\n.form-check{\r\n  margin-top : 10px;\r\n}\r\n\r\n.btn{\r\n  background-color: #F58321;\r\n  color: white;\r\n  min-width: 80px;\r\n  font-family: 'Exo';\r\n  margin-left: 26%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.button-group{\r\n  margin: 15px 90px;\r\n}\r\n\r\n#phoneNumber{\r\n  display: inline !important;\r\n}\r\n\r\n/* pagrindines formos stilius */\r\n\r\n.container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\nform{\r\n  padding-top: 2%;\r\n}\r\n\r\n.customerType{\r\n  font-size: 18px;\r\n}\r\n\r\n.dropDown label{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 2.3%;\r\n  /* height: auto; */\r\n}\r\n\r\nlabel{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 0%;\r\n  /* height: auto; */\r\n}\r\n\r\ninput,select{\r\n  font-family: 'Roboto';\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  padding: 0%;\r\n  border-radius: 0%;\r\n\r\n  /* height: 110%; */\r\n\r\n  /* font-size: 14px; */\r\n}\r\n\r\nspan{\r\n  float:right;\r\n}\r\n\r\n.form-group {\r\n  border-bottom: 1px solid #F58321;\r\n  margin: 0%;\r\n  padding-top:2%;\r\n\r\n}\r\n\r\n.notBorder{\r\n  border-bottom: none;\r\n\r\n}\r\n\r\n.type{\r\n  margin-bottom: 2.5%;\r\n\r\n}\r\n\r\n.typetext{\r\n  font-size: 19px;\r\n}\r\n\r\n.form-group div{\r\n  padding: 0%;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: inherit;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\ndiv input{\r\n  border-bottom: none;\r\n}\r\n\r\n.radioBlock{\r\n  margin-top: 2.5%;\r\n  margin-bottom: 2.5%;\r\n  display: block;\r\n\r\n}\r\n\r\n.radioInline{\r\n  margin-right: 5%;\r\n\r\n\r\n}\r\n\r\nlabel > input {\r\n  display: none;\r\n}\r\n\r\nlabel > i {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n  vertical-align: middle;\r\n  border: 2px solid #F58321;\r\n  -webkit-box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n          box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n  -webkit-transition: .25s;\r\n  transition: .25s;\r\n}\r\n\r\nlabel > input:checked + i {\r\n  background: #F58321;\r\n}\r\n\r\nlabel:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/* summary style */\r\n\r\n/* .summary .container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.summary .container div div{\r\n  margin-top:0.5%;\r\n  padding-left: 0%;\r\n  /* border-bottom: 1px solid #F58321; */\r\n\r\n}\r\n\r\n.summary .container .borderdiv{\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.summary .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n/* .SummaryButtons{\r\n  margin-top: 1.5%;\r\n  border-bottom: none;\r\n} */\r\n\r\n/* .privatePersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.privatePersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* .businessPersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.businessPersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* #summary{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n/*\r\n  #ok{\r\n    font-family: \"Exo\";\r\n  } */\r\n\r\n.OK .container{\r\n  margin-top: 10%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n"

/***/ }),

/***/ "./src/app/leasing-application/business-form/business-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Business form-->\r\n<div class=\"businessPersonalInfo\" *ngIf=\"showElement && leaseService.leaseObject.customerType === 'Business'\">\r\n  <div class=\"container\">\r\n    <form class=\"form-horizontal\"  [formGroup]=\"businessCustomerForm\">\r\n      <div class=\"col-xs-12 title\" >\r\n        <h3>PERSONAL INFORMATION</h3>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"companyName\" class=\"control-label col-xs-4\">COMPANY NAME</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"companyName\"\r\n            id=\"companyName\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('companyName').invalid && (businessCustomerForm.get('companyName').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Invalid company name. Required field.</span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"companyCode\" class=\"control-label col-xs-4\">COMPANY CODE</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"companyCode\"\r\n            id=\"companyCode\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span  class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('companyCode').invalid && (businessCustomerForm.get('companyCode').touched || showErrorMessages)\"\r\n               class=\"label label-warning\">Invalid company code. Required field.</span>\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\" class=\"control-label col-xs-4\">EMAIL</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"email\"\r\n            id=\"bussinessEmail\"\r\n            class=\"form-control\"\r\n            type=\"email\">\r\n        </div>\r\n        <span class=\"col-xs-3\"\r\n              *ngIf=\"businessCustomerForm.get('email').invalid && (businessCustomerForm.get('email').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Invalid email. Required field.</span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"phoneNumber\" class=\"control-label col-xs-4\">PHONE NUMBER</label>\r\n\r\n        <div  id=\"phoneNumber\" class=\"col-xs-5\">\r\n          <label class=\" control-label col-xs-1\" style=\"background-color:#d3d3d3;\">+</label>\r\n          <div class=\"col-xs-8\" style=\"border-bottom: none;\">\r\n            <input\r\n              formControlName=\"phoneNumber\"\r\n              id=\"businessPhoneNumber\"\r\n              class=\"form-control bfh-phone\"\r\n              type=\"text\">\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-xs-5\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-plus\"></i></span>\r\n          <input\r\n            formControlName=\"phoneNumber\"\r\n            id=\"businessPhoneNumber\"\r\n            class=\"form-control bfh-phone\"\r\n            type=\"text\">\r\n          </div> -->\r\n        <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('phoneNumber').invalid && (businessCustomerForm.get('phoneNumber').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <label class=\"control-label col-xs-4\" id=\"address\">ADDRESS</label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"street\" class=\"control-label col-xs-4\">street</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"street\"\r\n            id=\"businessStreet\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('street').invalid && (businessCustomerForm.get('street').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Invalid street. Required field.</span>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"city\" class=\"control-label col-xs-4\">city</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"city\"\r\n            id=\"businessCity\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('city').invalid && (businessCustomerForm.get('city').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Invalid city. Required field.</span>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"postCode\" class=\"control-label col-xs-4\">post code</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"postCode\"\r\n            id=\"businessPostCode\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('postCode').invalid && (businessCustomerForm.get('postCode').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Invalid post code. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"country\" class=\"control-label col-xs-4\">country</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"country\"\r\n            id=\"businessCountry\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('country').invalid && (businessCustomerForm.get('country').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Invalid country. Required field.</span>\r\n\r\n      </div>\r\n\r\n      <!-- <div class=\"form-group button-group row\" >\r\n        <div class=\"col-xs-offset-3\">\r\n          <button (click)=\"goBackToSummary()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n          <button (click)=\"submit()\" [disabled]=\"!businessCustomerForm.valid\" name=\"submit2\" type=\"submit\" class=\"btn\">Submit</button>\r\n        </div>\r\n      </div> -->\r\n\r\n    </form>\r\n    <div class=\"form-group button-group row \" style=\"border-bottom:none; margin-top:2%;\">\r\n      <div class=\"col-xs-1 SummaryButtons\" style=\"border-bottom:none; margin-top:2%;\">\r\n        <button  (click)=\"goBackToSummary()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n      </div>\r\n      <div class=\"col-xs-offset-9 col-xs-2 SummaryButtons\"  style=\"border-bottom:none; margin-top:2%;\">\r\n        <button style=\"margin-left:38%;\"  (click)=\"submit()\" name=\"submit2\" type=\"submit\" class=\"btn\">Submit</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/leasing-application/business-form/business-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessFormComponent = /** @class */ (function () {
    function BusinessFormComponent(leaseService) {
        this.leaseService = leaseService;
        this.lithuanianRegex = '^[a-zA-Z0-9ĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
        this.emailRegex = '^(([^<>()[\\]\\\\.,;:\\s@\\"]+' +
            '(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
        this.cityRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
        this.postCodeRegex = '[a-zA-Z0-9\\-]*';
        this.streetRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž0-9\\s\\.\\-]+$';
        this.phoneNumberRegex = '^[0-9]{11}';
        this.onlyNumbersRegex = '^[0-9]{9}$';
        this.showErrorMessages = false;
        this.businessSubmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.businessBackToSummary = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    BusinessFormComponent.prototype.ngOnInit = function () {
        this.businessCustomerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'companyName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.lithuanianRegex)]),
            'companyCode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.onlyNumbersRegex)]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.emailRegex)]),
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.phoneNumberRegex)]),
            'street': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.streetRegex)]),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.cityRegex)]),
            'postCode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.postCodeRegex)]),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.cityRegex)])
        });
    };
    BusinessFormComponent.prototype.submit = function () {
        if (this.businessCustomerForm.valid) {
            var businessCustomerObject = {
                companyName: this.businessCustomerForm.get('companyName').value,
                companyCode: this.businessCustomerForm.get('companyCode').value,
                email: this.businessCustomerForm.get('email').value,
                phoneNumber: this.businessCustomerForm.get('phoneNumber').value,
                street: this.businessCustomerForm.get('street').value,
                city: this.businessCustomerForm.get('city').value,
                postCode: this.businessCustomerForm.get('postCode').value,
                country: this.businessCustomerForm.get('country').value
            };
            this.leaseService.customerObject = businessCustomerObject;
            this.businessSubmitted.emit(businessCustomerObject);
        }
        else {
            this.showErrorMessages = true;
        }
    };
    BusinessFormComponent.prototype.goBackToSummary = function () {
        this.businessBackToSummary.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BusinessFormComponent.prototype, "showElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], BusinessFormComponent.prototype, "businessSubmitted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], BusinessFormComponent.prototype, "businessBackToSummary", void 0);
    BusinessFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-business-form',
            template: __webpack_require__("./src/app/leasing-application/business-form/business-form.component.html"),
            styles: [__webpack_require__("./src/app/leasing-application/business-form/business-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_lease_service__["a" /* LeaseService */]])
    ], BusinessFormComponent);
    return BusinessFormComponent;
}());



/***/ }),

/***/ "./src/app/leasing-application/confirmation-page/confirmation-page.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n#address{\r\n  /* margin: 8px 0 0 0; */\r\n  font-size: 14px;\r\n}\r\n\r\n.form-check{\r\n  margin-top : 10px;\r\n}\r\n\r\n.btn{\r\n  background-color: #F58321;\r\n  color: white;\r\n  min-width: 80px;\r\n  font-family: 'Exo';\r\n  margin-left: 26%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.button-group{\r\n  margin: 15px 90px;\r\n}\r\n\r\n#phoneNumber{\r\n  display: inline !important;\r\n}\r\n\r\n/* pagrindines formos stilius */\r\n\r\n.container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\nform{\r\n  padding-top: 2%;\r\n}\r\n\r\n.customerType{\r\n  font-size: 18px;\r\n}\r\n\r\n.dropDown label{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 2.3%;\r\n  /* height: auto; */\r\n}\r\n\r\nlabel{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 0%;\r\n  /* height: auto; */\r\n}\r\n\r\ninput,select{\r\n  font-family: 'Roboto';\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  padding: 0%;\r\n  border-radius: 0%;\r\n\r\n  /* height: 110%; */\r\n\r\n  /* font-size: 14px; */\r\n}\r\n\r\nspan{\r\n  float:right;\r\n}\r\n\r\n.form-group {\r\n  border-bottom: 1px solid #F58321;\r\n  margin: 0%;\r\n  padding-top:2%;\r\n\r\n}\r\n\r\n.notBorder{\r\n  border-bottom: none;\r\n\r\n}\r\n\r\n.type{\r\n  margin-bottom: 2.5%;\r\n\r\n}\r\n\r\n.typetext{\r\n  font-size: 19px;\r\n}\r\n\r\n.form-group div{\r\n  padding: 0%;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: inherit;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\ndiv input{\r\n  border-bottom: none;\r\n}\r\n\r\n.radioBlock{\r\n  margin-top: 2.5%;\r\n  margin-bottom: 2.5%;\r\n  display: block;\r\n\r\n}\r\n\r\n.radioInline{\r\n  margin-right: 5%;\r\n\r\n\r\n}\r\n\r\nlabel > input {\r\n  display: none;\r\n}\r\n\r\nlabel > i {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n  vertical-align: middle;\r\n  border: 2px solid #F58321;\r\n  -webkit-box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n          box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n  -webkit-transition: .25s;\r\n  transition: .25s;\r\n}\r\n\r\nlabel > input:checked + i {\r\n  background: #F58321;\r\n}\r\n\r\nlabel:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/* summary style */\r\n\r\n/* .summary .container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.summary .container div div{\r\n  margin-top:0.5%;\r\n  padding-left: 0%;\r\n  /* border-bottom: 1px solid #F58321; */\r\n\r\n}\r\n\r\n.summary .container .borderdiv{\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.summary .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n/* .SummaryButtons{\r\n  margin-top: 1.5%;\r\n  border-bottom: none;\r\n} */\r\n\r\n/* .privatePersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.privatePersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* .businessPersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.businessPersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* #summary{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n/*\r\n  #ok{\r\n    font-family: \"Exo\";\r\n  } */\r\n\r\n.OK .container{\r\n  margin-top: 10%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n"

/***/ }),

/***/ "./src/app/leasing-application/confirmation-page/confirmation-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"OK\">\r\n  <div *ngIf=\"leaseService.leaseObject.customerType == 'Private'\" class=\"container\">\r\n      <h3 class=\"text-center\">Dear customer,</h3>\r\n      <h3 class=\"text-center\">Your application has been accepted and is being processed right now. You should receive the decision within 3 days.</h3>\r\n      <h3 class=\"text-center\">Your application indetification number is {{leaseService.response.uniqueId}}</h3>\r\n      <h3 class=\"text-center\">You can see your application status with this ID on <a routerLink=\"leaseStatus\">page</a></h3>\r\n  </div>\r\n  <div *ngIf=\"leaseService.leaseObject.customerType == 'Business'\" class=\"container\">\r\n    <h3 class=\"text-center\">Dear customer,</h3>\r\n    <h3 class=\"text-center\">Your application has been accepted and is being processed right now. You should receive the decision within 5 days.</h3>\r\n    <h3 class=\"text-center\">You should receive decision within 5 days.</h3>\r\n    <h3 class=\"text-center\">Your application identification number is {{leaseService.response.uniqueId}}</h3>\r\n    <h3 class=\"text-center\">You can see your application status with this ID on <a routerLink=\"leaseStatus\">page</a></h3>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/leasing-application/confirmation-page/confirmation-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationPageComponent = /** @class */ (function () {
    function ConfirmationPageComponent(leaseService) {
        this.leaseService = leaseService;
    }
    ConfirmationPageComponent.prototype.ngOnInit = function () {
    };
    ConfirmationPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirmation-page',
            template: __webpack_require__("./src/app/leasing-application/confirmation-page/confirmation-page.component.html"),
            styles: [__webpack_require__("./src/app/leasing-application/confirmation-page/confirmation-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_lease_service__["a" /* LeaseService */]])
    ], ConfirmationPageComponent);
    return ConfirmationPageComponent;
}());



/***/ }),

/***/ "./src/app/leasing-application/error-module/error-module.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/leasing-application/error-module/error-module.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-box\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">ERROR</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    The application was not submitted due to server technical error. Please try agan later.\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onOkay()\">Okay</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/leasing-application/error-module/error-module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorModuleComponent = /** @class */ (function () {
    function ErrorModuleComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
    }
    ErrorModuleComponent.prototype.ngOnInit = function () {
        this.onClose = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    };
    ErrorModuleComponent.prototype.onOkay = function () {
        this.onClose.next(true);
        this._bsModalRef.hide();
    };
    ErrorModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-module',
            template: __webpack_require__("./src/app/leasing-application/error-module/error-module.component.html"),
            styles: [__webpack_require__("./src/app/leasing-application/error-module/error-module.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalRef */]])
    ], ErrorModuleComponent);
    return ErrorModuleComponent;
}());



/***/ }),

/***/ "./src/app/leasing-application/lease-form/lease-form.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n#address{\r\n  /* margin: 8px 0 0 0; */\r\n  font-size: 14px;\r\n}\r\n\r\n.form-check{\r\n  margin-top : 10px;\r\n}\r\n\r\n.btn{\r\n  background-color: #F58321;\r\n  color: white;\r\n  min-width: 80px;\r\n  font-family: 'Exo';\r\n  margin-left: 26%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.button-group{\r\n  margin: 15px 90px;\r\n}\r\n\r\n#phoneNumber{\r\n  display: inline !important;\r\n}\r\n\r\n/* pagrindines formos stilius */\r\n\r\n.container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\nform{\r\n  padding-top: 2%;\r\n}\r\n\r\n.customerType{\r\n  font-size: 18px;\r\n}\r\n\r\n.dropDown label{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 2.3%;\r\n  /* height: auto; */\r\n}\r\n\r\nlabel{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 0%;\r\n  /* height: auto; */\r\n}\r\n\r\ninput,select{\r\n  font-family: 'Roboto';\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  padding: 0%;\r\n  border-radius: 0%;\r\n\r\n  /* height: 110%; */\r\n\r\n  /* font-size: 14px; */\r\n}\r\n\r\nspan{\r\n  float:right;\r\n}\r\n\r\n.form-group {\r\n  border-bottom: 1px solid #F58321;\r\n  margin: 0%;\r\n  padding-top:2%;\r\n\r\n}\r\n\r\n.notBorder{\r\n  border-bottom: none;\r\n\r\n}\r\n\r\n.type{\r\n  margin-bottom: 2.5%;\r\n\r\n}\r\n\r\n.typetext{\r\n  font-size: 19px;\r\n}\r\n\r\n.form-group div{\r\n  padding: 0%;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: inherit;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\ndiv input{\r\n  border-bottom: none;\r\n}\r\n\r\n.radioBlock{\r\n  margin-top: 2.5%;\r\n  margin-bottom: 2.5%;\r\n  display: block;\r\n\r\n}\r\n\r\n.radioInline{\r\n  margin-right: 5%;\r\n\r\n\r\n}\r\n\r\nlabel > input {\r\n  display: none;\r\n}\r\n\r\nlabel > i {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n  vertical-align: middle;\r\n  border: 2px solid #F58321;\r\n  -webkit-box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n          box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n  -webkit-transition: .25s;\r\n  transition: .25s;\r\n}\r\n\r\nlabel > input:checked + i {\r\n  background: #F58321;\r\n}\r\n\r\nlabel:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/* summary style */\r\n\r\n/* .summary .container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.summary .container div div{\r\n  margin-top:0.5%;\r\n  padding-left: 0%;\r\n  /* border-bottom: 1px solid #F58321; */\r\n\r\n}\r\n\r\n.summary .container .borderdiv{\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.summary .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n/* .SummaryButtons{\r\n  margin-top: 1.5%;\r\n  border-bottom: none;\r\n} */\r\n\r\n/* .privatePersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.privatePersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* .businessPersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.businessPersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* #summary{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n/*\r\n  #ok{\r\n    font-family: \"Exo\";\r\n  } */\r\n\r\n.OK .container{\r\n  margin-top: 10%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n"

/***/ }),

/***/ "./src/app/leasing-application/lease-form/lease-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"showElement\">\r\n  <form class=\"form-horizontal\" [formGroup]=\"leaseForm\">\r\n    <div class=\"col-xs-6\" >\r\n      <div class=\"form-group notBorder type\">\r\n        <label for=\"customerType\" class=\" typetext col-xs-12\">CUSTOMER TYPE</label>\r\n\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('customerType').invalid && showErrorMessages\"\r\n              class=\"label label-warning\">Required field.</span>\r\n\r\n        <div class=\"col-xs-6\">\r\n          <label class=\"radioBlock\" *ngFor=\"let customerType of customerTypes\">\r\n            <input\r\n              (change) = \"onCustomerTypeChange()\"\r\n              formControlName=\"customerType\"\r\n              type=\"radio\"\r\n              [value]=\"customerType\">\r\n            <i></i>\r\n            {{customerType}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group notBorder\">\r\n        <label for=\"assetType\" class=\"col-xs-12\">ASSET TYPE</label>\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('assetType').invalid && showErrorMessages\"\r\n              class=\"label label-warning\">Required field.</span>\r\n        <div class=\"col-xs-6\">\r\n          <label class=\"radioBlock\" *ngFor=\"let assetType of assetTypes\">\r\n            <input\r\n              formControlName=\"assetType\"\r\n              type=\"radio\"\r\n              [value]=\"assetType\">\r\n            <i></i>\r\n            {{assetType}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group dropDown\">\r\n        <label for=\"brand\" class=\"col-xs-6\">BRAND</label>\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('brand').invalid && showErrorMessages\"\r\n              class=\"label label-warning\">Required field.</span>\r\n        <div class=\"col-xs-6\">\r\n          <select [formControlName]=\"'brand'\" [(ngModel)]=\"selectedBrand\" (ngModelChange)=\"getCarModelsByBrand($event)\"\r\n                  id=\"brand\" name=\"brand\"\r\n                  class=\"select form-control\">\r\n            <option selected=\"\" value=\"\" selected disabled hidden></option>\r\n            <option *ngFor=\"let brand of brands\" [value]=\"brand\">{{brand}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group dropDown\">\r\n        <label for=\"model\" class=\"col-xs-6\">MODEL</label>\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('model').invalid && showErrorMessages\"\r\n              class=\"label label-warning\">Required field.</span>\r\n        <div class=\"col-xs-6\">\r\n          <select [formControlName]=\"'model'\" [(ngModel)]=\"selectedModel\" id=\"model\" name=\"model\"\r\n                  class=\"select form-control\">\r\n            <option value=\"\" selected disabled hidden></option>\r\n            <option *ngFor=\"let model of modelsBySelectedBrand\" [value]=\"model\">{{model}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group dropDown\">\r\n        <label for=\"year\" class=\"col-xs-6\">YEAR</label>\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('year').invalid && showErrorMessages\"\r\n              class=\"label label-warning\">Required field.</span>\r\n        <div class=\"col-xs-6\">\r\n          <select [formControlName]=\"'year'\" [(ngModel)]=\"selectedYear\" id=\"year\" name=\"year\"\r\n                  class=\"select form-control\">\r\n            <option value=\"\" selected disabled hidden></option>\r\n            <option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"enginePower\" class=\"col-xs-6\">ENGINE POWER kW</label>\r\n        <span class=\"col-xs-6\" *ngIf=\"leaseForm.get('enginePower').invalid && (leaseForm.get('enginePower').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Only numeric values. Minimum 10, maximum 1000. Required field.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            formControlName=\"enginePower\"\r\n            id=\"enginePower\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-6\" >\r\n      <div class=\"form-group\">\r\n        <label for=\"assetPrice\" class=\"col-xs-4\">ASSET PRICE €</label>\r\n        <span class=\"col-xs-8\"\r\n              *ngIf=\"(leaseForm.get('assetPrice').invalid && (leaseForm.get('assetPrice').touched || showErrorMessages)\r\n               && leaseForm.get('customerType').value == null)\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('customerType').value == 'Private' && leaseForm.get('assetPrice').invalid && (leaseForm.get('assetPrice').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Lowest asset price for private customers is 5000. Maximum is 1000000.</span>\r\n        <span class=\"col-xs-6\" *ngIf=\"leaseForm.get('customerType').value == 'Business' && leaseForm.get('assetPrice').invalid && (leaseForm.get('assetPrice').touched  || showErrorMessages)\"\r\n              class=\"label label-warning\">Lowest asset price for business customers is 10000. Maximum is 1000000.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            formControlName=\"assetPrice\"\r\n            id=\"assetPrice\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"advancePaymentPercentage\" class=\"col-xs-7\">ADVANCE PAYMENT PERCENTAGE</label>\r\n        <span class=\"col-xs-5\" style=\"padding:0%;margin:0%;\"\r\n              *ngIf=\"leaseForm.get('advancePaymentPercentage').invalid && (leaseForm.get('advancePaymentPercentage').touched\r\n              || showErrorMessages)\"\r\n              class=\"label label-warning\">Enter number between 10 and 30.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            (change)=\"keyUpAdvancePaymentAmount()\"\r\n            formControlName=\"advancePaymentPercentage\"\r\n            id=\"advancePaymentPercentage\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"advancePaymentAmount\" class=\"col-xs-7\">ADVANCE PAYMENT AMOUNT €</label>\r\n        <span *ngIf=\"leaseForm.get('advancePaymentAmount').invalid && (leaseForm.get('advancePaymentAmount').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            (change)=\"keyUpAdvancePaymentPercentage()\"\r\n            formControlName=\"advancePaymentAmount\"\r\n            id=\"advancePaymentAmount\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          <!--<span *ngIf=\"leaseForm.get('advancePaymentAmount').invalid && leaseForm.get('advancePaymentAmount').touched\"-->\r\n          <!--class=\"label label-warning\">Only numeric values. Required field.</span>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label  class=\"col-xs-6\">LEASE PERIOD</label>\r\n\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"col-xs-6\">\r\n            <input style=\"margin-top:4%\"  [formControlName]=\"'leasePeriod'\" type=\"range\" min=\"6\" max=\"84\"  step=\"6\" class=\"slider\" #rangevalue (input)=\"pitch($event)\" value=\"6\">\r\n          </div>\r\n          <div class=\"col-xs-6\">\r\n            <input style=\"background-color: white; margin-left:2%;\" class=\"form-control\" type=\"text\" readonly value=\"{{ rangevalue.value }} months\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"margin\" class=\"col-xs-6\">MARGIN %</label>\r\n        <span class=\"col-xs-6\" *ngIf=\"leaseForm.get('margin').invalid && (leaseForm.get('margin').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Enter number between 3.2 and 100.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            formControlName=\"margin\"\r\n            id=\"margin\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"contractFee\" class=\"col-xs-6\">CONTRACT FEE €</label>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            formControlName=\"contractFee\"\r\n            readonly\r\n            id=\"contractFee\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group notBorder\">\r\n        <label for=\"paymentDate\" class=\"col-xs-6\">PAYMENT DATE</label>\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('paymentDate').invalid && showErrorMessages\"\r\n              class=\"label label-warning\">Required field.</span>\r\n        <div class=\"col-xs-12\">\r\n          <label class=\"radioInline\" *ngFor=\"let paymentDate of paymentDates\">\r\n            <input\r\n              formControlName=\"paymentDate\"\r\n              type=\"radio\"\r\n              [value]=\"paymentDate\">\r\n            <i></i>\r\n            {{paymentDate}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row notBorder\">\r\n        <div class=\"col-xs-offset-9 col-xs-3\">\r\n          <button\r\n            name=\"submit\"\r\n            type=\"button\"\r\n            (click)=\"goToSummary()\"\r\n            class=\"btn btn-dark\">Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div>\r\n  <label for=\"calculatorFinancingAmount\" class=\"col-xs-6\">Financing amount:</label>\r\n  <div class=\"col-xs-12\">\r\n    <input\r\n      readonly\r\n      (ngModel)=\"financingAmount\"\r\n      name=\"financingAmount\"\r\n      value=\"{{financingAmount}}\"\r\n      id=\"calculatorFinancingAmount\"\r\n      class=\"calculator-control form-control\"\r\n      type=\"text\">\r\n  </div>\r\n  <label for=\"calculatorContractFee\" class=\"col-xs-6\">Contract fee:</label>\r\n  <div class=\"col-xs-12\">\r\n    <input\r\n      readonly\r\n      value=\"{{leaseForm.get('contractFee').value}}\"\r\n      id=\"calculatorContractFee\"\r\n      class=\"calculator-control form-control\"\r\n      type=\"text\">\r\n  </div>\r\n  <label for=\"calculatorTotalInterest\" class=\"col-xs-6\">Total interest:</label>\r\n  <div class=\"col-xs-12\">\r\n    <input\r\n      readonly\r\n      (ngModel)=\"totalInterest\"\r\n      name=\"totalInterest\"\r\n      value={{totalInterest}}\r\n      id=\"calculatorTotalInterest\"\r\n      class=\"calculator-control form-control\"\r\n      type=\"text\">\r\n  </div>\r\n  <label for=\"calculatorTotalMonthlyPayment\" class=\"col-xs-6\">Total monthly payment:</label>\r\n  <div class=\"col-xs-12\">\r\n    <input\r\n      (ngModel)=\"totalMonthlyPayment\"\r\n      value={{totalMonthlyPayment}}\r\n      readonly\r\n      name=\"totalMonthlyPayment\"\r\n      id=\"calculatorTotalMonthlyPayment\"\r\n      class=\"calculator-control form-control\"\r\n      type=\"text\">\r\n  </div>\r\n</div>\r\n<button\r\n  [disabled]=\"!leaseForm.get('assetPrice').valid || !leaseForm.get('margin').valid || !leaseForm.get('leasePeriod').valid || !leaseForm.get('advancePaymentAmount').valid\"\r\n  (click)=\"calculatePreliminaryLeasingAmount()\"\r\n  class=\"btn btn-dark\">Calculate\r\n\r\n</button>\r\n\r\n<!--[disabled]=\"!leaseForm.valid\"-->\r\n"

/***/ }),

/***/ "./src/app/leasing-application/lease-form/lease-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaseFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaseFormComponent = /** @class */ (function () {
    function LeaseFormComponent(vehicleService, leaseService) {
        this.vehicleService = vehicleService;
        this.leaseService = leaseService;
        this.validationRegex = '^([1-9])\\d*(?:\\.\\d{1,2})?\\s*$';
        this.customerTypes = ['Private', 'Business'];
        this.assetTypes = ['New', 'Used'];
        this.paymentDates = [15, 30];
        this.years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
        this.showErrorMessages = false;
        this.nextToSummary = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LeaseFormComponent.prototype.ngOnInit = function () {
        this.leaseForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'customerType': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'assetType': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null),
            'brand': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'model': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'enginePower': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(1000)]),
            'assetPrice': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(1000000), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex)]),
            'advancePaymentPercentage': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](10, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(30),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(10)]),
            'advancePaymentAmount': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]),
            'leasePeriod': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](6, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'margin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](3.2, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(100),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(3.2)]),
            'contractFee': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](200, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'paymentDate': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.loadVehicles();
        this.onChanges();
    };
    LeaseFormComponent.prototype.getCarModelsByBrand = function (brand) {
        var _this = this;
        this.vehicleService.changeScrollValue ? this.selectedModel = '' : this.vehicleService.changeScrollValue = true;
        this.modelsBySelectedBrand = [];
        if (this.listVehicle != null) {
            this.listVehicle.forEach(function (data) {
                if (data['groupValue'] === brand) {
                    _this.modelsBySelectedBrand.push(data['text']);
                }
            });
        }
    };
    LeaseFormComponent.prototype.onCustomerTypeChange = function () {
        if (this.leaseForm.get('customerType').value === 'Private') {
            this.leaseForm.get('assetPrice').clearValidators();
            this.leaseForm.get('assetPrice')
                .setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(5000), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(1000000), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex)]);
            this.leaseForm.get('assetPrice').updateValueAndValidity();
        }
        else {
            this.leaseForm.get('assetPrice').clearValidators();
            this.leaseForm.get('assetPrice')
                .setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(10000), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(1000000), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex)]);
            this.leaseForm.get('assetPrice').updateValueAndValidity();
        }
    };
    LeaseFormComponent.prototype.loadVehicles = function () {
        var _this = this;
        this.vehicleService.getAllVehicleInfo()
            .then(function (data) {
            _this.listVehicle = data;
            var temp = [];
            _this.listVehicle.forEach(function (data) { return temp.push(data['groupValue']); });
            _this.brands = Array.from(new Set(temp));
        });
    };
    LeaseFormComponent.prototype.goToSummary = function () {
        if (this.leaseForm.valid) {
            this.showErrorMessages = false;
            var leaseFormObject = {
                customerType: this.leaseForm.get('customerType').value,
                assetType: this.leaseForm.get('assetType').value,
                vehicleBrand: this.leaseForm.get('brand').value,
                model: this.leaseForm.get('model').value,
                year: this.leaseForm.get('year').value,
                enginePower: this.leaseForm.get('enginePower').value,
                assetPrice: this.leaseForm.get('assetPrice').value,
                advancePaymentPercentage: this.leaseForm.get('advancePaymentPercentage').value,
                advancePaymentAmount: this.leaseForm.get('advancePaymentAmount').value,
                leasePeriod: this.leaseForm.get('leasePeriod').value,
                margin: this.leaseForm.get('margin').value,
                contractFee: this.leaseForm.get('contractFee').value,
                paymentDate: this.leaseForm.get('paymentDate').value,
            };
            this.leaseService.leaseObject = leaseFormObject;
            this.nextToSummary.emit();
        }
        else {
            this.showErrorMessages = true;
        }
    };
    LeaseFormComponent.prototype.onChanges = function () {
        var _this = this;
        this.leaseForm.get('assetPrice').valueChanges.subscribe(function (val) {
            if (_this.leaseForm.get('assetPrice').valid) {
                _this.value = val * (1 / 100);
                if (_this.value > _this.leaseForm.get('contractFee').value && _this.value > 200) {
                    _this.leaseForm.get('contractFee').patchValue(_this.value.toFixed(2));
                }
                if (_this.value > 200) {
                    _this.leaseForm.get('contractFee').patchValue(_this.value.toFixed(2));
                }
                else {
                    _this.leaseForm.get('contractFee').patchValue(200);
                }
                if (_this.leaseForm.get('assetPrice').valid) {
                    _this.leaseForm.get('advancePaymentAmount').patchValue((val * (_this.leaseForm.get('advancePaymentPercentage').value / 100))
                        .toFixed(2));
                }
                else {
                    _this.leaseForm.get('advancePaymentAmount').patchValue('');
                }
            }
            else {
                _this.leaseForm.get('contractFee').patchValue(200);
                _this.leaseForm.get('advancePaymentAmount').patchValue('');
            }
        });
    };
    LeaseFormComponent.prototype.keyUpAdvancePaymentAmount = function () {
        if (this.leaseForm.get('advancePaymentPercentage').valid) {
            this.value = this.leaseForm.get('assetPrice').value * (this.leaseForm.get('advancePaymentPercentage').value / 100);
            this.leaseForm.get('advancePaymentAmount').patchValue(this.value.toFixed(2));
        }
        else {
            this.leaseForm.get('advancePaymentAmount').patchValue('');
        }
    };
    LeaseFormComponent.prototype.keyUpAdvancePaymentPercentage = function () {
        this.temp2 = this.leaseForm.get('advancePaymentAmount').value;
        this.temp = ((this.leaseForm.get('advancePaymentAmount').value / this.leaseForm.get('assetPrice').value) * 100);
        this.temp1 = (this.leaseForm.get('assetPrice').value * 0.1);
        if (this.temp <= 100 || this.temp >= 10) {
            this.leaseForm.get('advancePaymentPercentage').setValue(this.temp.toFixed(2));
        }
        if (this.temp > 100 || this.temp < 10) {
            this.leaseForm.get('advancePaymentPercentage').setValue(10);
            this.leaseForm.get('advancePaymentAmount').setValue(this.temp1.toFixed(2));
        }
    };
    LeaseFormComponent.prototype.calculatePreliminaryLeasingAmount = function () {
        this.financingAmount = parseFloat(this.leaseForm.get('assetPrice').value)
            - parseFloat(this.leaseForm.get('advancePaymentAmount').value);
        this.totalInterest = parseFloat(this.leaseForm.get('assetPrice').value)
            * parseFloat(this.leaseForm.get('margin').value) / 100;
        this.totalMonthlyPayment = (parseFloat(this.totalInterest) + parseFloat(this.financingAmount)
            + parseFloat(this.leaseForm.get('contractFee').value) + (0.7 * parseFloat(this.leaseForm.get('leasePeriod').value)))
            / parseFloat(this.leaseForm.get('leasePeriod').value);
        this.totalMonthlyPayment = this.totalMonthlyPayment.toFixed(2);
        this.totalInterest = this.totalInterest.toFixed(2);
        this.financingAmount = this.financingAmount.toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LeaseFormComponent.prototype, "showElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LeaseFormComponent.prototype, "resetModels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], LeaseFormComponent.prototype, "nextToSummary", void 0);
    LeaseFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lease-form',
            template: __webpack_require__("./src/app/leasing-application/lease-form/lease-form.component.html"),
            styles: [__webpack_require__("./src/app/leasing-application/lease-form/lease-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */], __WEBPACK_IMPORTED_MODULE_3__services_lease_service__["a" /* LeaseService */]])
    ], LeaseFormComponent);
    return LeaseFormComponent;
}());



/***/ }),

/***/ "./src/app/leasing-application/lease-summary/lease-summary.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n#address{\r\n  /* margin: 8px 0 0 0; */\r\n  font-size: 14px;\r\n}\r\n\r\n.form-check{\r\n  margin-top : 10px;\r\n}\r\n\r\n.btn{\r\n  background-color: #F58321;\r\n  color: white;\r\n  min-width: 80px;\r\n  font-family: 'Exo';\r\n  margin-left: 26%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.button-group{\r\n  margin: 15px 90px;\r\n}\r\n\r\n#phoneNumber{\r\n  display: inline !important;\r\n}\r\n\r\n/* pagrindines formos stilius */\r\n\r\n.container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\nform{\r\n  padding-top: 2%;\r\n}\r\n\r\n.customerType{\r\n  font-size: 18px;\r\n}\r\n\r\n.dropDown label{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 2.3%;\r\n  /* height: auto; */\r\n}\r\n\r\nlabel{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 0%;\r\n  /* height: auto; */\r\n}\r\n\r\ninput,select{\r\n  font-family: 'Roboto';\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  padding: 0%;\r\n  border-radius: 0%;\r\n\r\n  /* height: 110%; */\r\n\r\n  /* font-size: 14px; */\r\n}\r\n\r\nspan{\r\n  float:right;\r\n}\r\n\r\n.form-group {\r\n  border-bottom: 1px solid #F58321;\r\n  margin: 0%;\r\n  padding-top:2%;\r\n\r\n}\r\n\r\n.notBorder{\r\n  border-bottom: none;\r\n\r\n}\r\n\r\n.type{\r\n  margin-bottom: 2.5%;\r\n\r\n}\r\n\r\n.typetext{\r\n  font-size: 19px;\r\n}\r\n\r\n.form-group div{\r\n  padding: 0%;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: inherit;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\ndiv input{\r\n  border-bottom: none;\r\n}\r\n\r\n.radioBlock{\r\n  margin-top: 2.5%;\r\n  margin-bottom: 2.5%;\r\n  display: block;\r\n\r\n}\r\n\r\n.radioInline{\r\n  margin-right: 5%;\r\n\r\n\r\n}\r\n\r\nlabel > input {\r\n  display: none;\r\n}\r\n\r\nlabel > i {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n  vertical-align: middle;\r\n  border: 2px solid #F58321;\r\n  -webkit-box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n          box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n  -webkit-transition: .25s;\r\n  transition: .25s;\r\n}\r\n\r\nlabel > input:checked + i {\r\n  background: #F58321;\r\n}\r\n\r\nlabel:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/* summary style */\r\n\r\n/* .summary .container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.summary .container div div{\r\n  margin-top:0.5%;\r\n  padding-left: 0%;\r\n  /* border-bottom: 1px solid #F58321; */\r\n\r\n}\r\n\r\n.summary .container .borderdiv{\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.summary .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n/* .SummaryButtons{\r\n  margin-top: 1.5%;\r\n  border-bottom: none;\r\n} */\r\n\r\n/* .privatePersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.privatePersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* .businessPersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.businessPersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* #summary{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n/*\r\n  #ok{\r\n    font-family: \"Exo\";\r\n  } */\r\n\r\n.OK .container{\r\n  margin-top: 10%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n"

/***/ }),

/***/ "./src/app/leasing-application/lease-summary/lease-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- id=\"summary\" -->\r\n<div class=\"summary\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"col-xs-12 title\" >\r\n      <h3>VEHICLE LEASE SUMMARY</h3>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12\" style=\"padding:2%;\">\r\n      <div class=\"col-xs-5\">CUSTOMER TYPE</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.customerType}}</div>\r\n      <div class=\"col-xs-5\">ASSET TYPE</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.assetType}}</div>\r\n      <div class=\"col-xs-5\">BRAND</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.vehicleBrand}}</div>\r\n      <div class=\"col-xs-5\">MODEL</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.model}}</div>\r\n      <div class=\"col-xs-5\">YEAR</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.year}}</div>\r\n      <div class=\"col-xs-5\">ENGINE POWER  </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.enginePower}} kW</div>\r\n      <div class=\"col-xs-5\">ASSET PRICE </div>\r\n      <div class=\"col-xs-7 borderdiv\"> {{leaseService.leaseObject.assetPrice}} €</div>\r\n      <div class=\"col-xs-5\">ADVANCE PAYMENT PERCENTAGE</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.advancePaymentPercentage}} %</div>\r\n      <div class=\"col-xs-5\">ADVANCE PAYMENT AMOUNT</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.advancePaymentAmount}} €</div>\r\n      <div class=\"col-xs-5\">LEASE PERIOD </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.leasePeriod}}</div>\r\n      <div class=\"col-xs-5\">PAYMENT DATE </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseService.leaseObject.paymentDate}}</div>\r\n    </div>\r\n\r\n    <div class=\"form-group button-group row \" style=\"border-bottom:none; margin-top:2%;\">\r\n      <div class=\"col-xs-1 SummaryButtons\" style=\"border-bottom:none; margin-top:2%;\">\r\n        <button  (click)=\"goBackToForm1()\" name=\"submit1\" type=\"button\" class=\"btn\">Back</button>\r\n      </div>\r\n      <div class=\"col-xs-offset-9 col-xs-2 SummaryButtons\"  style=\"border-bottom:none; margin-top:2%;\">\r\n        <button style=\"margin-left:38%;\"  (click)=\"goNextToForm2()\" name=\"submit2\" type=\"button\" class=\"btn\">Next</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/leasing-application/lease-summary/lease-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaseSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaseSummaryComponent = /** @class */ (function () {
    function LeaseSummaryComponent(leaseService) {
        this.leaseService = leaseService;
        this.backToForm1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.nextToForm2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LeaseSummaryComponent.prototype.ngOnInit = function () {
    };
    LeaseSummaryComponent.prototype.goBackToForm1 = function () {
        this.backToForm1.emit();
    };
    LeaseSummaryComponent.prototype.goNextToForm2 = function () {
        this.nextToForm2.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], LeaseSummaryComponent.prototype, "backToForm1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], LeaseSummaryComponent.prototype, "nextToForm2", void 0);
    LeaseSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lease-summary',
            template: __webpack_require__("./src/app/leasing-application/lease-summary/lease-summary.component.html"),
            styles: [__webpack_require__("./src/app/leasing-application/lease-summary/lease-summary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_lease_service__["a" /* LeaseService */]])
    ], LeaseSummaryComponent);
    return LeaseSummaryComponent;
}());



/***/ }),

/***/ "./src/app/leasing-application/leasing-application.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n#address{\r\n  /* margin: 8px 0 0 0; */\r\n  font-size: 14px;\r\n}\r\n\r\n.form-check{\r\n  margin-top : 10px;\r\n}\r\n\r\n.btn{\r\n  background-color: #F58321;\r\n  color: white;\r\n  min-width: 80px;\r\n  font-family: 'Exo';\r\n  margin-left: 26%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.button-group{\r\n  margin: 15px 90px;\r\n}\r\n\r\n#phoneNumber{\r\n  display: inline !important;\r\n}\r\n\r\n/* pagrindines formos stilius */\r\n\r\n.container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\nform{\r\n  padding-top: 2%;\r\n}\r\n\r\n.customerType{\r\n  font-size: 18px;\r\n}\r\n\r\n.dropDown label{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 2.3%;\r\n  /* height: auto; */\r\n}\r\n\r\nlabel{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 0%;\r\n  /* height: auto; */\r\n}\r\n\r\ninput,select{\r\n  font-family: 'Roboto';\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  padding: 0%;\r\n  border-radius: 0%;\r\n\r\n  /* height: 110%; */\r\n\r\n  /* font-size: 14px; */\r\n}\r\n\r\nspan{\r\n  float:right;\r\n}\r\n\r\n.form-group {\r\n  border-bottom: 1px solid #F58321;\r\n  margin: 0%;\r\n  padding-top:2%;\r\n\r\n}\r\n\r\n.notBorder{\r\n  border-bottom: none;\r\n\r\n}\r\n\r\n.type{\r\n  margin-bottom: 2.5%;\r\n\r\n}\r\n\r\n.typetext{\r\n  font-size: 19px;\r\n}\r\n\r\n.form-group div{\r\n  padding: 0%;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: inherit;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\ndiv input{\r\n  border-bottom: none;\r\n}\r\n\r\n.radioBlock{\r\n  margin-top: 2.5%;\r\n  margin-bottom: 2.5%;\r\n  display: block;\r\n\r\n}\r\n\r\n.radioInline{\r\n  margin-right: 5%;\r\n\r\n\r\n}\r\n\r\nlabel > input {\r\n  display: none;\r\n}\r\n\r\nlabel > i {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n  vertical-align: middle;\r\n  border: 2px solid #F58321;\r\n  -webkit-box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n          box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n  -webkit-transition: .25s;\r\n  transition: .25s;\r\n}\r\n\r\nlabel > input:checked + i {\r\n  background: #F58321;\r\n}\r\n\r\nlabel:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/* summary style */\r\n\r\n/* .summary .container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.summary .container div div{\r\n  margin-top:0.5%;\r\n  padding-left: 0%;\r\n  /* border-bottom: 1px solid #F58321; */\r\n\r\n}\r\n\r\n.summary .container .borderdiv{\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.summary .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n/* .SummaryButtons{\r\n  margin-top: 1.5%;\r\n  border-bottom: none;\r\n} */\r\n\r\n/* .privatePersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.privatePersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* .businessPersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.businessPersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* #summary{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n/*\r\n  #ok{\r\n    font-family: \"Exo\";\r\n  } */\r\n\r\n.OK .container{\r\n  margin-top: 10%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n"

/***/ }),

/***/ "./src/app/leasing-application/leasing-application.component.html":
/***/ (function(module, exports) {

module.exports = "<app-lease-form [showElement] = \"showForm\" [resetModels]=\"changeScrollValue\" (nextToSummary)=\"onGoToSummary()\"></app-lease-form>\r\n<app-lease-summary *ngIf=\"showSummary\" (backToForm1)='onGoBackToForm1()'\r\n                   (nextToForm2)='onGoNextToForm2()'></app-lease-summary>\r\n<app-private-form [showElement] = \"showCustomerForm\"\r\n                  (privateSubmitted)=\"onSubmitted()\" (privateBackToSummary)=\"onBackToSummary()\"></app-private-form>\r\n<app-business-form [showElement] = \"showCustomerForm\"\r\n                   (businessSubmitted)=\"onSubmitted()\" (businessBackToSummary)=\"onBackToSummary()\" ></app-business-form>\r\n<app-confirmation-page *ngIf=\"showConfirmationPage\"></app-confirmation-page>\r\n\r\n"

/***/ }),

/***/ "./src/app/leasing-application/leasing-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeasingApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_module_error_module_component__ = __webpack_require__("./src/app/leasing-application/error-module/error-module.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeasingApplicationComponent = /** @class */ (function () {
    function LeasingApplicationComponent(vehicleService, leaseService, modalService) {
        this.vehicleService = vehicleService;
        this.leaseService = leaseService;
        this.modalService = modalService;
        this.showForm = true;
        this.showSummary = false;
        this.showCustomerForm = false;
        this.showConfirmationPage = false;
    }
    LeasingApplicationComponent.prototype.ngOnInit = function () {
    };
    LeasingApplicationComponent.prototype.onGoToSummary = function () {
        this.showForm = false;
        this.showSummary = true;
        this.vehicleService.changeScrollValue = false;
    };
    LeasingApplicationComponent.prototype.onGoBackToForm1 = function () {
        this.showSummary = false;
        this.showForm = true;
    };
    LeasingApplicationComponent.prototype.onGoNextToForm2 = function () {
        this.showSummary = false;
        this.showCustomerForm = true;
    };
    LeasingApplicationComponent.prototype.onSubmitted = function () {
        var _this = this;
        this.leaseService.submitLease().then(function (data) {
            _this.showCustomerForm = false;
            _this.showConfirmationPage = true;
            _this.leaseService.response = data;
        }, function (error) {
            _this.modalRef = _this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__error_module_error_module_component__["a" /* ErrorModuleComponent */]);
        });
    };
    LeasingApplicationComponent.prototype.onBackToSummary = function () {
        this.showCustomerForm = false;
        this.showSummary = true;
    };
    LeasingApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-leasing-application',
            template: __webpack_require__("./src/app/leasing-application/leasing-application.component.html"),
            styles: [__webpack_require__("./src/app/leasing-application/leasing-application.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */], __WEBPACK_IMPORTED_MODULE_2__services_lease_service__["a" /* LeaseService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalService */]])
    ], LeasingApplicationComponent);
    return LeasingApplicationComponent;
}());



/***/ }),

/***/ "./src/app/leasing-application/private-form/private-form.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n#address{\r\n  /* margin: 8px 0 0 0; */\r\n  font-size: 14px;\r\n}\r\n\r\n.form-check{\r\n  margin-top : 10px;\r\n}\r\n\r\n.btn{\r\n  background-color: #F58321;\r\n  color: white;\r\n  min-width: 80px;\r\n  font-family: 'Exo';\r\n  margin-left: 26%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.button-group{\r\n  margin: 15px 90px;\r\n}\r\n\r\n#phoneNumber{\r\n  display: inline !important;\r\n}\r\n\r\n/* pagrindines formos stilius */\r\n\r\n.container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\nform{\r\n  padding-top: 2%;\r\n}\r\n\r\n.customerType{\r\n  font-size: 18px;\r\n}\r\n\r\n.dropDown label{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 2.3%;\r\n  /* height: auto; */\r\n}\r\n\r\nlabel{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 0%;\r\n  /* height: auto; */\r\n}\r\n\r\ninput,select{\r\n  font-family: 'Roboto';\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  padding: 0%;\r\n  border-radius: 0%;\r\n\r\n  /* height: 110%; */\r\n\r\n  /* font-size: 14px; */\r\n}\r\n\r\nspan{\r\n  float:right;\r\n}\r\n\r\n.form-group {\r\n  border-bottom: 1px solid #F58321;\r\n  margin: 0%;\r\n  padding-top:2%;\r\n\r\n}\r\n\r\n.notBorder{\r\n  border-bottom: none;\r\n\r\n}\r\n\r\n.type{\r\n  margin-bottom: 2.5%;\r\n\r\n}\r\n\r\n.typetext{\r\n  font-size: 19px;\r\n}\r\n\r\n.form-group div{\r\n  padding: 0%;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: inherit;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\ndiv input{\r\n  border-bottom: none;\r\n}\r\n\r\n.radioBlock{\r\n  margin-top: 2.5%;\r\n  margin-bottom: 2.5%;\r\n  display: block;\r\n\r\n}\r\n\r\n.radioInline{\r\n  margin-right: 5%;\r\n\r\n\r\n}\r\n\r\nlabel > input {\r\n  display: none;\r\n}\r\n\r\nlabel > i {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n  vertical-align: middle;\r\n  border: 2px solid #F58321;\r\n  -webkit-box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n          box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n  -webkit-transition: .25s;\r\n  transition: .25s;\r\n}\r\n\r\nlabel > input:checked + i {\r\n  background: #F58321;\r\n}\r\n\r\nlabel:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/* summary style */\r\n\r\n/* .summary .container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.summary .container div div{\r\n  margin-top:0.5%;\r\n  padding-left: 0%;\r\n  /* border-bottom: 1px solid #F58321; */\r\n\r\n}\r\n\r\n.summary .container .borderdiv{\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.summary .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .title{\r\n  margin-bottom: 1.5%;\r\n  border-bottom: none;\r\n  font-family: \"Exo\";\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n\r\n}\r\n\r\n/* .SummaryButtons{\r\n  margin-top: 1.5%;\r\n  border-bottom: none;\r\n} */\r\n\r\n/* .privatePersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.privatePersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.privatePersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.privatePersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* .businessPersonalInfo .container{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n.businessPersonalInfo .container .form-group {\r\n  /* border-bottom: 1px solid #F58321; */\r\n  border-bottom: none;\r\n  margin: 0%;\r\n  padding-top: 1%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-group label {\r\n  padding: 0%;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group input {\r\n  padding: 0%;\r\n  height: 90%;\r\n\r\n}\r\n\r\n.businessPersonalInfo .container .form-horizontal .form-group div {\r\n  margin-left:2%;\r\n  border-bottom: 1px solid #F58321;\r\n}\r\n\r\n.businessPersonalInfo .container .form-group span{\r\n  float: right;\r\n}\r\n\r\n/* #summary{\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n} */\r\n\r\n/*\r\n  #ok{\r\n    font-family: \"Exo\";\r\n  } */\r\n\r\n.OK .container{\r\n  margin-top: 10%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n"

/***/ }),

/***/ "./src/app/leasing-application/private-form/private-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"privatePersonalInfo\" *ngIf=\"showElement && leaseService.leaseObject.customerType === 'Private'\">\r\n  <!-- <div class=\"container\" *ngIf=\"showCustomerForm && leaseForm.get('customerType').value === 'Private'\"> -->\r\n  <div class=\"container\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"privateForm\">\r\n      <div class=\"col-xs-12 title\" >\r\n        <h3>PERSONAL INFORMATION</h3>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <!-- <div class=\"col-xs-offset-2 col-xs-2 \"><label class=\"labels\" for=\"firstName\" >FIRST NAME</label></div> -->\r\n        <label for=\"personalID\" class=\"control-label col-xs-4\">FIRST NAME</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"firstName\"\r\n            id=\"firstName\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('firstName').invalid && (privateForm.get('firstName').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Only alphabetic values. Required field.</span>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"personalID\" class=\"control-label col-xs-4\">LAST NAME</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"lastName\"\r\n            id=\"lastName\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('lastName').invalid && (privateForm.get('lastName').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Only alphabetic values. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"personalID\" class=\"control-label col-xs-4\">ID CODE</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"personalID\"\r\n            id=\"personalID\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('personalID').invalid && (privateForm.get('personalID').touched || showErrorMessages )\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\" class=\"control-label col-xs-4\">EMAIL</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"email\"\r\n            id=\"email\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('email').invalid && (privateForm.get('email').touched || showErrorMessages )\"\r\n              class=\"label label-warning\">Invalid email. Required field.</span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"phoneNumber\" class=\"control-label col-xs-4\">PHONE NUMBER</label>\r\n        <div  id=\"phoneNumber\" class=\"col-xs-5\">\r\n          <label class=\" control-label col-xs-1\" style=\"background-color:#d3d3d3;\">+</label>\r\n          <div class=\"col-xs-8\" style=\"border-bottom: none;\">\r\n            <input\r\n              formControlName=\"phoneNumber\"\r\n\r\n              class=\"form-control\"\r\n              type=\"text\">\r\n          </div>\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('phoneNumber').invalid && (privateForm.get('phoneNumber').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <label class=\"control-label col-xs-4\" id=\"address\">ADDRESS</label>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"street\" class=\"control-label col-xs-4\">street</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"street\"\r\n            id=\"street\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('street').invalid && (privateForm.get('street').touched || showErrorMessages)\"\r\n              class=\"label label-warning\">Invalid street. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"city\" class=\"control-label col-xs-4\">city</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"city\"\r\n            id=\"city\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('city').invalid && (privateForm.get('city').touched || showErrorMessages) \"\r\n              class=\"label label-warning\">Invalid city. Required field.</span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"postCode\" class=\"control-label col-xs-4\">post code</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"postCode\"\r\n            id=\"postCode\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('postCode').invalid && (privateForm.get('postCode').touched || showErrorMessages) \"\r\n              class=\"label label-warning\">Invalid post code. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"country\" class=\"control-label col-xs-4\">country</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"country\"\r\n            id=\"country\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('country').invalid && (privateForm.get('country').touched || showErrorMessages) \"\r\n              class=\"label label-warning\">Invalid country. Required field.</span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-check col-xs-offset-4\">\r\n        <input style=\"margin-left:3.5%;\"\r\n               type=\"checkbox\"\r\n               formControlName=\"checkbox\"\r\n               class=\"filled-in form-check-input\"\r\n               id=\"checkbox\"\r\n               [(ngModel)]=\"isCheckboxChecked\">\r\n        <label for=\"checkbox\" class=\"form-check-label\">I accept terms and conditions</label>\r\n        <span class=\"col-xs-3\" *ngIf=\"(privateForm.get('checkbox').touched || showErrorMessages) && !isCheckboxChecked\"\r\n              class=\"label label-warning\">You must accept terms and conditions</span>\r\n      </div>\r\n      <!-- <div class=\"form-group button-group row\" >\r\n        <div class=\"col-xs-offset-3\">\r\n          <button (click)=\"goBackToSummary()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n          <button (click)=\"submit()\" [disabled]=\"!privateForm.valid || !isCheckboxChecked\" name=\"submit2\" type=\"submit\" class=\"btn\">Submit</button>\r\n        </div>\r\n      </div> -->\r\n\r\n    </form>\r\n    <div class=\"form-group button-group row \" style=\"border-bottom:none; margin-top:2%;\">\r\n      <div class=\"col-xs-1 SummaryButtons\" style=\"border-bottom:none; margin-top:2%;\">\r\n        <button  (click)=\"goBackToSummary()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n      </div>\r\n      <div class=\"col-xs-offset-9 col-xs-2 SummaryButtons\"  style=\"border-bottom:none; margin-top:2%;\">\r\n        <button style=\"margin-left:38%;\"  (click)=\"submit()\" name=\"submit2\" type=\"submit\" class=\"btn\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/leasing-application/private-form/private-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrivateFormComponent = /** @class */ (function () {
    function PrivateFormComponent(vehicleService, leaseService) {
        this.vehicleService = vehicleService;
        this.leaseService = leaseService;
        this.emailRegex = '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
        this.cityRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
        this.postCodeRegex = '[a-zA-Z0-9\\-]*';
        this.streetRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž0-9\\s\\.\\-]+$';
        this.phoneNumberRegex = '^[0-9]{11}';
        this.personalIDRegex = '^[3-6][0-9]{2}[0,1][0-9][0-9]{2}[0-9]{4}$';
        this.nameRegex = '^[a-zA-ZąčęėįųūšžĄČĖĘĮŲŪČŠŽ ,.\'-]+$';
        this.showErrorMessages = false;
        this.isCheckboxChecked = false;
        this.privateSubmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.privateBackToSummary = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PrivateFormComponent.prototype.ngOnInit = function () {
        this.privateForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({ 'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.nameRegex)]),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.nameRegex)]),
            'personalID': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.personalIDRegex)]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.emailRegex)]),
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.phoneNumberRegex)]),
            'street': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.streetRegex)]),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.cityRegex)]),
            'postCode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.postCodeRegex)]),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.cityRegex)]),
            'checkbox': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required) });
    };
    PrivateFormComponent.prototype.submit = function () {
        if (this.privateForm.valid && this.isCheckboxChecked) {
            var privateCustomerObject = {
                firstName: this.privateForm.get('firstName').value,
                lastName: this.privateForm.get('lastName').value,
                email: this.privateForm.get('email').value,
                phoneNumber: this.privateForm.get('phoneNumber').value,
                street: this.privateForm.get('street').value,
                city: this.privateForm.get('city').value,
                personalCode: this.privateForm.get('personalID').value,
                postCode: this.privateForm.get('postCode').value,
                country: this.privateForm.get('country').value
            };
            this.leaseService.customerObject = privateCustomerObject;
            this.privateSubmitted.emit();
        }
        else {
            this.showErrorMessages = true;
        }
    };
    PrivateFormComponent.prototype.goBackToSummary = function () {
        // this.leaseService.firstName;
        // this.leaseService.lastName;
        // this.leaseService.privateEmail;
        // this.leaseService.privatePhoneNumber;
        // this.leaseService.privateStreet;
        // this.leaseService.privateCity;
        // this.leaseService.privatePostCode;
        // this.leaseService.privateCountry;
        this.privateBackToSummary.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PrivateFormComponent.prototype, "showElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PrivateFormComponent.prototype, "privateSubmitted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PrivateFormComponent.prototype, "privateBackToSummary", void 0);
    PrivateFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-private-form',
            template: __webpack_require__("./src/app/leasing-application/private-form/private-form.component.html"),
            styles: [__webpack_require__("./src/app/leasing-application/private-form/private-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */], __WEBPACK_IMPORTED_MODULE_3__services_lease_service__["a" /* LeaseService */]])
    ], PrivateFormComponent);
    return PrivateFormComponent;
}());



/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #F58321;\r\n  cursor: pointer;\r\n}\r\n\r\n#address{\r\n  /* margin: 8px 0 0 0; */\r\n  font-size: 14px;\r\n}\r\n\r\n.form-check{\r\n  margin-top : 10px;\r\n}\r\n\r\n.btn{\r\n  background-color: #F58321;\r\n  color: white;\r\n  min-width: 80px;\r\n  font-family: 'Exo';\r\n  margin-left: 26%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.button-group{\r\n  margin: 15px 90px;\r\n}\r\n\r\n#phoneNumber{\r\n  display: inline !important;\r\n}\r\n\r\n/* pagrindines formos stilius */\r\n\r\n.container{\r\n  margin-top: 1%;\r\n  width: 70%;\r\n  border-radius: 1%;\r\n  border: 3px solid #F58321;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\nform{\r\n  padding-top: 2%;\r\n}\r\n\r\n.customerType{\r\n  font-size: 18px;\r\n}\r\n\r\n.dropDown label{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 2.3%;\r\n  /* height: auto; */\r\n}\r\n\r\nlabel{\r\n  font-family: 'Roboto';\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0%;\r\n  padding: 0%;\r\n  padding-top: 0%;\r\n  /* height: auto; */\r\n}\r\n\r\ninput,select{\r\n  font-family: 'Roboto';\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  padding: 0%;\r\n  border-radius: 0%;\r\n  \r\n  /* height: 110%; */\r\n  \r\n  /* font-size: 14px; */\r\n}\r\n\r\nspan{\r\n  float:right;\r\n}\r\n\r\n.form-group {\r\n  border-bottom: 1px solid #F58321;\r\n  margin: 0%;\r\n  padding-top:2%;\r\n  \r\n}\r\n\r\n.notBorder{\r\n  border-bottom: none;\r\n  \r\n}\r\n\r\n.type{\r\n  margin-bottom: 2.5%;\r\n  \r\n}\r\n\r\n.typetext{\r\n  font-size: 19px;\r\n}\r\n\r\n.form-group div{\r\n  padding: 0%;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: inherit;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\ndiv input{\r\n  border-bottom: none;\r\n}\r\n\r\n.radioBlock{\r\n  margin-top: 2.5%;\r\n  margin-bottom: 2.5%;\r\n  display: block;\r\n  \r\n}\r\n\r\n.radioInline{\r\n  margin-right: 5%;\r\n\r\n  \r\n}\r\n\r\nlabel > input {\r\n    display: none;\r\n  }\r\n\r\nlabel > i {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n    vertical-align: middle;\r\n    border: 2px solid #F58321;\r\n    -webkit-box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n            box-shadow: inset 0 0 0 4px rgb(255, 255, 255);\r\n    -webkit-transition: .25s;\r\n    transition: .25s;\r\n  }\r\n\r\nlabel > input:checked + i {\r\n    background: #F58321;\r\n  }\r\n\r\nlabel:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n/* summary style */\r\n\r\n/* .summary .container{\r\n    margin-top: 1%;\r\n    width: 70%;\r\n    border-radius: 1%;\r\n    border: 3px solid #F58321;\r\n    background-color: rgb(255, 255, 255);\r\n    font-family: \"Roboto\";\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n  } */\r\n\r\n.summary .container div div{\r\n    margin-top:0.5%;\r\n    padding-left: 0%;\r\n    /* border-bottom: 1px solid #F58321; */\r\n\r\n  }\r\n\r\n.summary .container .borderdiv{\r\n    border-bottom: 1px solid #F58321;\r\n  }\r\n\r\n.summary .container .title{\r\n    margin-bottom: 1.5%;\r\n    border-bottom: none;\r\n    font-family: \"Exo\";\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n\r\n  }\r\n\r\n.privatePersonalInfo .container .title{\r\n    margin-bottom: 1.5%;\r\n    border-bottom: none;\r\n    font-family: \"Exo\";\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n\r\n  }\r\n\r\n.businessPersonalInfo .container .title{\r\n    margin-bottom: 1.5%;\r\n    border-bottom: none;\r\n    font-family: \"Exo\";\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n\r\n  }\r\n\r\n/* .SummaryButtons{\r\n    margin-top: 1.5%;\r\n    border-bottom: none;\r\n  } */\r\n\r\n/* .privatePersonalInfo .container{\r\n    width: 70%;\r\n    border-radius: 1%;\r\n    border: 3px solid #F58321;\r\n    background-color: rgb(255, 255, 255);\r\n    font-family: \"Roboto\";\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n  } */\r\n\r\n.privatePersonalInfo .container .form-group {\r\n    /* border-bottom: 1px solid #F58321; */ \r\n    border-bottom: none;\r\n    margin: 0%;\r\n    padding-top: 1%;\r\n    \r\n  }\r\n\r\n.privatePersonalInfo .container .form-group label {\r\n    padding: 0%;\r\n  }\r\n\r\n.privatePersonalInfo .container .form-group input {\r\n    padding: 0%;\r\n    height: 90%;\r\n    \r\n  }\r\n\r\n.privatePersonalInfo .container .form-horizontal .form-group div {\r\n    margin-left:2%;\r\n    border-bottom: 1px solid #F58321;\r\n  }\r\n\r\n.privatePersonalInfo .container .form-group span{\r\n    float: right;\r\n    }\r\n\r\n/* .businessPersonalInfo .container{\r\n    width: 70%;\r\n    border-radius: 1%;\r\n    border: 3px solid #F58321;\r\n    background-color: rgb(255, 255, 255);\r\n    font-family: \"Roboto\";\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n  } */\r\n\r\n.businessPersonalInfo .container .form-group {\r\n    /* border-bottom: 1px solid #F58321; */ \r\n    border-bottom: none;\r\n    margin: 0%;\r\n    padding-top: 1%;\r\n    \r\n  }\r\n\r\n.businessPersonalInfo .container .form-group label {\r\n    padding: 0%;\r\n  }\r\n\r\n.businessPersonalInfo .container .form-group input {\r\n    padding: 0%;\r\n    height: 90%;\r\n    \r\n  }\r\n\r\n.businessPersonalInfo .container .form-horizontal .form-group div {\r\n    margin-left:2%;\r\n    border-bottom: 1px solid #F58321;\r\n  }\r\n\r\n.businessPersonalInfo .container .form-group span{\r\n    float: right;\r\n    }\r\n\r\n/* #summary{\r\n    width: 70%;\r\n    border-radius: 1%;\r\n    border: 3px solid #F58321;\r\n    background-color: rgb(255, 255, 255);\r\n    font-family: \"Roboto\";\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n  } */\r\n\r\n/* \r\n  #ok{\r\n    font-family: \"Exo\";\r\n  } */\r\n\r\n.OK .container{\r\n    margin-top: 10%;\r\n    width: 70%;\r\n    border-radius: 1%;\r\n    border: 3px solid #F58321;\r\n    background-color: rgb(255, 255, 255);\r\n    font-family: \"Roboto\";\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n  }"

/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"showForm\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"leaseForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"col-xs-6\" >\r\n      <div class=\"form-group notBorder type\">\r\n        <label for=\"customerType\" class=\" typetext col-xs-12\">CUSTOMER TYPE</label>\r\n        <div class=\"col-xs-6\">\r\n          <label class=\"radioBlock\" *ngFor=\"let customerType of customerTypes\">\r\n            <input\r\n            (change) = \"onCustomerTypeChange()\"\r\n              formControlName=\"customerType\"\r\n              type=\"radio\"\r\n              [value]=\"customerType\">\r\n              <i></i>\r\n            {{customerType}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group notBorder\">\r\n        <label for=\"assetType\" class=\"col-xs-12\">ASSET TYPE</label>\r\n        <div class=\"col-xs-6\">\r\n          <label class=\"radioBlock\" *ngFor=\"let assetType of assetTypes\">\r\n            <input\r\n              formControlName=\"assetType\"\r\n              type=\"radio\"\r\n              [value]=\"assetType\">\r\n              <i></i>\r\n            {{assetType}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group dropDown\">\r\n        <label for=\"brand\" class=\"col-xs-6\">BRAND</label>\r\n        <div class=\"col-xs-6\">\r\n          <select [formControlName]=\"'brand'\" [(ngModel)]=\"selectedBrand\" (ngModelChange)=\"getCarModelsByBrand($event)\"\r\n                  id=\"brand\" name=\"brand\"\r\n                  class=\"select form-control\">\r\n            <option selected=\"\" value=\"\" selected disabled hidden></option>\r\n            <option *ngFor=\"let brand of brands\" [value]=\"brand\">{{brand}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group dropDown\">\r\n        <label for=\"model\" class=\"col-xs-6\">MODEL</label>\r\n        <div class=\"col-xs-6\">\r\n          <select [formControlName]=\"'model'\" [(ngModel)]=\"selectedModel\" id=\"model\" name=\"model\"\r\n                  class=\"select form-control\">\r\n            <option value=\"\" selected disabled hidden></option>\r\n            <option *ngFor=\"let model of modelsBySelectedBrand\" [value]=\"model\">{{model}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group dropDown\">\r\n        <label for=\"year\" class=\"col-xs-6\">YEAR</label>\r\n        <div class=\"col-xs-6\">\r\n          <select [formControlName]=\"'year'\" [(ngModel)]=\"selectedYear\" id=\"year\" name=\"year\"\r\n                  class=\"select form-control\">\r\n            <option value=\"\" selected disabled hidden></option>\r\n            <option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"enginePower\" class=\"col-xs-6\">ENGINE POWER kW</label>\r\n        <span class=\"col-xs-6\" *ngIf=\"leaseForm.get('enginePower').invalid && leaseForm.get('enginePower').touched\"\r\n        class=\"label label-warning\">Only numeric values. Required field.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            formControlName=\"enginePower\"\r\n            id=\"enginePower\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-6\" >\r\n      <div class=\"form-group\">\r\n        <label for=\"assetPrice\" class=\"col-xs-4\">ASSET PRICE €</label>\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('assetPrice').invalid && leaseForm.get('assetPrice').touched && leaseForm.get('customerType').value == null\"\r\n                class=\"label label-warning\">Only numeric values. Required field.</span>\r\n        <span class=\"col-xs-8\" *ngIf=\"leaseForm.get('customerType').value == 'Private' && leaseForm.get('assetPrice').invalid && leaseForm.get('assetPrice').touched\"\r\n                class=\"label label-warning\">Lowest asset price for private customers is 5000.</span>\r\n                <span class=\"col-xs-6\" *ngIf=\"leaseForm.get('customerType').value == 'Business' && leaseForm.get('assetPrice').invalid && leaseForm.get('assetPrice').touched\"\r\n                class=\"label label-warning\">Lowest asset price for business customers is 10000.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            formControlName=\"assetPrice\"\r\n            id=\"assetPrice\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"advancePaymentPercentage\" class=\"col-xs-7\">ADVANCE PAYMENT PERCENTAGE</label>\r\n        <span class=\"col-xs-5\" style=\"padding:0%;margin:0%;\"\r\n            *ngIf=\"leaseForm.get('advancePaymentPercentage').invalid && leaseForm.get('advancePaymentPercentage').touched\"\r\n            class=\"label label-warning\">Enter number between 10 and 100.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n          (change)=\"keyUpAdvancePaymentAmount()\"\r\n            formControlName=\"advancePaymentPercentage\"\r\n            id=\"advancePaymentPercentage\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"advancePaymentAmount\" class=\"col-xs-7\">ADVANCE PAYMENT AMOUNT €</label>\r\n        <span *ngIf=\"leaseForm.get('advancePaymentAmount').invalid && leaseForm.get('advancePaymentAmount').touched\"\r\n                class=\"label label-warning\">Only numeric values. Required field.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            (change)=\"keyUpAdvancePaymentPercentage()\"\r\n            formControlName=\"advancePaymentAmount\"\r\n            id=\"advancePaymentAmount\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          <!--<span *ngIf=\"leaseForm.get('advancePaymentAmount').invalid && leaseForm.get('advancePaymentAmount').touched\"-->\r\n          <!--class=\"label label-warning\">Only numeric values. Required field.</span>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label  class=\"col-xs-6\">LEASE PERIOD</label>\r\n\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"col-xs-6\">\r\n          <input style=\"margin-top:4%\"  [formControlName]=\"'leasePeriod'\" type=\"range\" min=\"6\" max=\"84\"  step=\"6\" class=\"slider\" #rangevalue (input)=\"pitch($event)\" value=\"6\">\r\n          </div>\r\n          <div class=\"col-xs-6\">\r\n          <input style=\"background-color: white; margin-left:2%;\" class=\"form-control\" type=\"text\" readonly value=\"{{ rangevalue.value }} months\">\r\n        </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"margin\" class=\"col-xs-6\">MARGIN %</label>\r\n        <span class=\"col-xs-6\" *ngIf=\"leaseForm.get('margin').invalid && leaseForm.get('margin').touched\"\r\n                class=\"label label-warning\">Enter number between 3.2 and 100.</span>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            formControlName=\"margin\"\r\n            id=\"margin\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n           </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"contractFee\" class=\"col-xs-6\">CONTRACT FEE €</label>\r\n        <div class=\"col-xs-12\">\r\n          <input\r\n            formControlName=\"contractFee\"\r\n            readonly\r\n            id=\"contractFee\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group notBorder\">\r\n        <label for=\"paymentDate\" class=\"col-xs-6\">PAYMENT DATE</label>\r\n        <div class=\"col-xs-12\">\r\n          <label class=\"radioInline\" *ngFor=\"let paymentDate of paymentDates\">\r\n            <input\r\n              formControlName=\"paymentDate\"\r\n              type=\"radio\"\r\n              [value]=\"paymentDate\">\r\n              <i></i>\r\n            {{paymentDate}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row notBorder\">\r\n        <div class=\"col-xs-offset-9 col-xs-3\">\r\n          <button\r\n            [disabled]=\"!leaseForm.valid\"\r\n            name=\"submit\"\r\n            type=\"submit\"\r\n            (click)=\"goToSummary()\"\r\n            class=\"btn btn-dark\">Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n\r\n<!-- id=\"summary\" -->\r\n<div class=\"summary\">\r\n  <div class=\"container\" *ngIf=\"showFormSummary\">\r\n\r\n    <div class=\"col-xs-12 title\" >\r\n      <h3>VEHICLE LEASE SUMMARY</h3>\r\n    </div>\r\n    <div class=\"col-xs-12\" style=\"padding:2%;\">\r\n      <div class=\"col-xs-5\">CUSTOMER TYPE</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('customerType').value}}</div>\r\n      <div class=\"col-xs-5\">ASSET TYPE</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('assetType').value}}</div>\r\n      <div class=\"col-xs-5\">BRAND</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('brand').value}}</div>\r\n      <div class=\"col-xs-5\">MODEL</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('model').value}}</div>\r\n      <div class=\"col-xs-5\">YEAR</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('year').value}}</div>\r\n      <div class=\"col-xs-5\">ENGINE POWER  </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('enginePower').value}} kW</div>\r\n      <div class=\"col-xs-5\">ASSET PRICE </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('assetPrice').value}}  € </div>\r\n      <div class=\"col-xs-5\">ADVANCE PAYMENT PERCENTAGE</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('advancePaymentPercentage').value}} %</div>\r\n      <div class=\"col-xs-5\">ADVANCE PAYMENT AMOUNT</div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('advancePaymentAmount').value}} €</div>\r\n      <div class=\"col-xs-5\">LEASE PERIOD </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('leasePeriod').value}} months</div>\r\n      <div class=\"col-xs-5\">MARGIN </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('margin').value}} %</div>\r\n      <div class=\"col-xs-5\">CONTRACT FEE </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('contractFee').value}} €</div>\r\n      <div class=\"col-xs-5\">PAYMENT DATE </div>\r\n      <div class=\"col-xs-7 borderdiv\">{{leaseForm.get('paymentDate').value}}</div>\r\n    </div>\r\n    <div class=\"form-group button-group row \" style=\"border-bottom:none; margin-top:2%;\">\r\n      <div class=\"col-xs-1 SummaryButtons\" style=\"border-bottom:none; margin-top:2%;\">\r\n        <button  (click)=\"goBackToForm1()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n      </div>\r\n      <div class=\"col-xs-offset-9 col-xs-2 SummaryButtons\"  style=\"border-bottom:none; margin-top:2%;\">\r\n        <button style=\"margin-left:38%;\"  (click)=\"goNextToForm2()\" name=\"submit2\" type=\"submit\" class=\"btn\">Next</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <div class=\"privatePersonalInfo\">\r\n      <!-- <div class=\"container\" *ngIf=\"showCustomerForm && leaseForm.get('customerType').value === 'Private'\"> -->\r\n  <div class=\"container\" *ngIf=\"showCustomerForm && leaseForm.get('customerType').value === 'Private'\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"privateForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"col-xs-12 title\" >\r\n            <h3>PERSONAL INFORMATION</h3>\r\n            </div>\r\n      <div class=\"form-group\">\r\n          <!-- <div class=\"col-xs-offset-2 col-xs-2 \"><label class=\"labels\" for=\"firstName\" >FIRST NAME</label></div> -->\r\n          <label for=\"personalID\" class=\"control-label col-xs-4\">FIRST NAME</label>\r\n          <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"firstName\"\r\n            id=\"firstName\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n          <span class=\"col-xs-3\" *ngIf=\"privateForm.get('firstName').invalid && privateForm.get('firstName').touched\"\r\n                class=\"label label-warning\">Only alphabetic values. Required field.</span>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"personalID\" class=\"control-label col-xs-4\">LAST NAME</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"lastName\"\r\n            id=\"lastName\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('lastName').invalid && privateForm.get('lastName').touched\"\r\n                class=\"label label-warning\">Only alphabetic values. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"personalID\" class=\"control-label col-xs-4\">ID CODE</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"personalID\"\r\n            id=\"personalID\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('personalID').invalid && privateForm.get('personalID').touched\"\r\n                class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\" class=\"control-label col-xs-4\">EMAIL</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"email\"\r\n            id=\"email\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('email').invalid && privateForm.get('email').touched\"\r\n                class=\"label label-warning\">Invalid email. Required field.</span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"phoneNumber\" class=\"control-label col-xs-4\">PHONE NUMBER</label>\r\n        <div  id=\"phoneNumber\" class=\"col-xs-5\">\r\n        <label class=\" control-label col-xs-1\" style=\"background-color:#d3d3d3;\">+</label>\r\n        <div class=\"col-xs-8\" style=\"border-bottom: none;\">\r\n          <input\r\n            formControlName=\"phoneNumber\"\r\n\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n        </div>\r\n          <span class=\"col-xs-3\" *ngIf=\"privateForm.get('phoneNumber').invalid && privateForm.get('phoneNumber').touched\"\r\n                class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <label class=\"control-label col-xs-4\" id=\"address\">ADDRESS</label>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"street\" class=\"control-label col-xs-4\">street</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"street\"\r\n            id=\"street\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('street').invalid && privateForm.get('street').touched\"\r\n                class=\"label label-warning\">Invalid street. Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"city\" class=\"control-label col-xs-4\">city</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"city\"\r\n            id=\"city\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('city').invalid && privateForm.get('city').touched\"\r\n                class=\"label label-warning\">Invalid city. Required field.</span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"postCode\" class=\"control-label col-xs-4\">post code</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"postCode\"\r\n            id=\"postCode\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('postCode').invalid && privateForm.get('postCode').touched\"\r\n                class=\"label label-warning\">Invalid post code, eg. LTxxxxx Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"country\" class=\"control-label col-xs-4\">country</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"country\"\r\n            id=\"country\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n        </div>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('country').invalid && privateForm.get('country').touched\"\r\n                class=\"label label-warning\">Invalid country. Required field.</span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-check col-xs-offset-4\">\r\n          <input style=\"margin-left:3.5%;\"\r\n          type=\"checkbox\"\r\n          formControlName=\"checkbox\"\r\n          class=\"filled-in form-check-input\"\r\n          id=\"checkbox\"\r\n          [(ngModel)]=\"isCheckboxChecked\">\r\n        <label for=\"checkbox\" class=\"form-check-label\">I accept terms and conditions</label>\r\n        <span class=\"col-xs-3\" *ngIf=\"privateForm.get('checkbox').touched && !isCheckboxChecked\"\r\n              class=\"label label-warning\">You must accept terms and conditions</span>\r\n      </div>\r\n      <!-- <div class=\"form-group button-group row\" >\r\n        <div class=\"col-xs-offset-3\">\r\n          <button (click)=\"goBackToSummary()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n          <button (click)=\"submit()\" [disabled]=\"!privateForm.valid || !isCheckboxChecked\" name=\"submit2\" type=\"submit\" class=\"btn\">Submit</button>\r\n        </div>\r\n      </div> -->\r\n\r\n    </form>\r\n    <div class=\"form-group button-group row \" style=\"border-bottom:none; margin-top:2%;\">\r\n        <div class=\"col-xs-1 SummaryButtons\" style=\"border-bottom:none; margin-top:2%;\">\r\n          <button  (click)=\"goBackToSummary()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n      </div>\r\n      <div class=\"col-xs-offset-9 col-xs-2 SummaryButtons\"  style=\"border-bottom:none; margin-top:2%;\">\r\n          <button style=\"margin-left:38%;\"  (click)=\"submit()\" [disabled]=\"!privateForm.valid || !isCheckboxChecked\" name=\"submit2\" type=\"submit\" class=\"btn\">Submit</button>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <!--Business form-->\r\n  <div class=\"businessPersonalInfo\">\r\n  <div class=\"container\" *ngIf=\"showCustomerForm && leaseForm.get('customerType').value === 'Business'\">\r\n    <form class=\"form-horizontal\"  [formGroup]=\"businessCustomerForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"col-xs-12 title\" >\r\n            <h3>PERSONAL INFORMATION</h3>\r\n            </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"companyName\" class=\"control-label col-xs-4\">COMPANY NAME</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"companyName\"\r\n            id=\"companyName\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n          <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('companyName').invalid && businessCustomerForm.get('companyName').touched\"\r\n                class=\"label label-warning\">Invalid company name. Required field.</span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"companyCode\" class=\"control-label col-xs-4\">COMPANY CODE</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"companyCode\"\r\n            id=\"companyCode\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n          <span  class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('companyCode').invalid && businessCustomerForm.get('companyCode').touched\"\r\n                class=\"label label-warning\">Invalid company code. Required field.</span>\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\" class=\"control-label col-xs-4\">EMAIL</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"email\"\r\n            id=\"bussinessEmail\"\r\n            class=\"form-control\"\r\n            type=\"email\">\r\n          </div>\r\n          <span class=\"col-xs-3\"\r\n            *ngIf=\"businessCustomerForm.get('email').invalid && businessCustomerForm.get('email').touched\"\r\n            class=\"label label-warning\">Invalid email. Required field.</span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"phoneNumber\" class=\"control-label col-xs-4\">PHONE NUMBER</label>\r\n\r\n        <div  id=\"phoneNumber\" class=\"col-xs-5\">\r\n            <label class=\" control-label col-xs-1\" style=\"background-color:#d3d3d3;\">+</label>\r\n            <div class=\"col-xs-8\" style=\"border-bottom: none;\">\r\n              <input\r\n                formControlName=\"phoneNumber\"\r\n                id=\"businessPhoneNumber\"\r\n                class=\"form-control bfh-phone\"\r\n                type=\"text\">\r\n              </div>\r\n              </div>\r\n        <!-- <div class=\"col-xs-5\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-plus\"></i></span>\r\n          <input\r\n            formControlName=\"phoneNumber\"\r\n            id=\"businessPhoneNumber\"\r\n            class=\"form-control bfh-phone\"\r\n            type=\"text\">\r\n          </div> -->\r\n          <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('phoneNumber').invalid && businessCustomerForm.get('phoneNumber').touched\"\r\n                class=\"label label-warning\">Only numeric values. Required field.</span>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <label class=\"control-label col-xs-4\" id=\"address\">ADDRESS</label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"street\" class=\"control-label col-xs-4\">street</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"street\"\r\n            id=\"businessStreet\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n          <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('street').invalid && businessCustomerForm.get('street').touched\"\r\n                class=\"label label-warning\">Invalid street. Required field.</span>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"city\" class=\"control-label col-xs-4\">city</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"city\"\r\n            id=\"businessCity\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n          <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('city').invalid && businessCustomerForm.get('city').touched\"\r\n                class=\"label label-warning\">Invalid city. Required field.</span>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"postCode\" class=\"control-label col-xs-4\">post code</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"postCode\"\r\n            id=\"businessPostCode\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n         </div>\r\n         <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('postCode').invalid && businessCustomerForm.get('postCode').touched\"\r\n         class=\"label label-warning\">Invalid post code, eg. LTxxxxx Required field.</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"country\" class=\"control-label col-xs-4\">country</label>\r\n        <div class=\"col-xs-5\">\r\n          <input\r\n            formControlName=\"country\"\r\n            id=\"businessCountry\"\r\n            class=\"form-control\"\r\n            type=\"text\">\r\n          </div>\r\n          <span class=\"col-xs-3\" *ngIf=\"businessCustomerForm.get('country').invalid && businessCustomerForm.get('country').touched\"\r\n                class=\"label label-warning\">Invalid country. Required field.</span>\r\n\r\n      </div>\r\n\r\n      <!-- <div class=\"form-group button-group row\" >\r\n        <div class=\"col-xs-offset-3\">\r\n          <button (click)=\"goBackToSummary()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n          <button (click)=\"submit()\" [disabled]=\"!businessCustomerForm.valid\" name=\"submit2\" type=\"submit\" class=\"btn\">Submit</button>\r\n        </div>\r\n      </div> -->\r\n\r\n    </form>\r\n    <div class=\"form-group button-group row \" style=\"border-bottom:none; margin-top:2%;\">\r\n        <div class=\"col-xs-1 SummaryButtons\" style=\"border-bottom:none; margin-top:2%;\">\r\n          <button  (click)=\"goBackToSummary()\" name=\"submit1\" type=\"submit\" class=\"btn\">Back</button>\r\n      </div>\r\n      <div class=\"col-xs-offset-9 col-xs-2 SummaryButtons\"  style=\"border-bottom:none; margin-top:2%;\">\r\n          <button style=\"margin-left:38%;\"  (click)=\"submit()\" [disabled]=\"!businessCustomerForm.valid\" name=\"submit2\" type=\"submit\" class=\"btn\">Submit</button>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"OK\">\r\n  <div class=\"container\" *ngIf=\"showOK\">\r\n    <h3 class=\"text-center\">Lease request was successfully accepted.</h3>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeasingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lease_service__ = __webpack_require__("./src/app/services/lease.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeasingFormComponent = /** @class */ (function () {
    function LeasingFormComponent(vehicleService, leaseService) {
        this.vehicleService = vehicleService;
        this.leaseService = leaseService;
        this.defaultContractFee = 200;
        this.customerTypes = ['Private', 'Business'];
        this.assetTypes = ['New', 'Used'];
        this.paymentDates = [15, 30];
        this.years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
        this.numberRegex = '^\\s*(?=.*[1-9])\\d*(?:\\.\\d{1,2})?\\s*$';
        this.validationRegex = '^([1-9])\\d*(?:\\.\\d{1,2})?\\s*$';
        this.lithuanianRegex = '^[a-zA-Z0-9ĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
        this.companyCodeRegex = '^[a-zA-Z0-9]+$';
        this.emailRegex = '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
        this.cityRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
        this.postCodeRegex = '[LT]{2}\\d{5}';
        this.streetRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž0-9\\s\\.\\-]+$';
        this.phoneNumberRegex = '^[0-9]{11}';
        this.personalIDRegex = '^[3-6][0-9]{2}[0,1][0-9][0-9]{2}[0-9]{4}$';
        this.nameRegex = '^[a-zA-ZąčęėįųūšžĄČĖĘĮŲŪČŠŽ ,.\'-]+$';
        this.onlyNumbersRegex = '^[0-9]{9}$';
        this.selectedBrand = '';
        this.selectedModel = '';
        this.showForm = true;
        this.showFormSummary = false;
        this.showOK = false;
        this.changeScrollValue = true;
        this.showCustomerForm = false;
        this.selectedYear = '';
        this.isCheckboxChecked = false;
    }
    LeasingFormComponent.prototype.onCustomerTypeChange = function () {
        if (this.leaseForm.get('customerType').value == 'Private') {
            console.log(1);
            this.leaseForm.get('assetPrice').clearValidators();
            this.leaseForm.get('assetPrice').setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(5000), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex)]);
            // this.leaseForm.get('assetPrice').setValidators([Validators.min(5000), Validators.required, Validators.pattern(this.validationRegex)]);
            console.log(this.leaseForm.get('assetPrice').validator);
            this.leaseForm.get('assetPrice').updateValueAndValidity();
        }
        else {
            console.log(2);
            this.leaseForm.get('assetPrice').clearValidators();
            this.leaseForm.get('assetPrice').setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(10000), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex)]);
            //this.leaseForm.get('assetPrice').setValidators([Validators.min(10000), Validators.required, Validators.pattern(this.validationRegex)]);
            console.log(this.leaseForm.get('assetPrice').validator);
            this.leaseForm.get('assetPrice').updateValueAndValidity();
        }
    };
    LeasingFormComponent.prototype.loadVehicles = function () {
        var _this = this;
        this.vehicleService.getAllVehicleInfo()
            .then(function (data) {
            _this.listVehicle = data;
            var temp = [];
            _this.listVehicle.forEach(function (data) { return temp.push(data['groupValue']); });
            _this.brands = Array.from(new Set(temp));
        });
    };
    LeasingFormComponent.prototype.ngOnInit = function () {
        this.leaseForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'customerType': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'assetType': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'brand': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'model': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'enginePower': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(1)]),
            'assetPrice': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex)]),
            'advancePaymentPercentage': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](10, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(100),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(10)]),
            'advancePaymentAmount': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null),
            'leasePeriod': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](6, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'margin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](3.2, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.validationRegex), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(100),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(3.2)]),
            'contractFee': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](200, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'paymentDate': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.privateForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({ 'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.nameRegex)]),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.nameRegex)]),
            'personalID': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.personalIDRegex)]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.emailRegex)]),
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.phoneNumberRegex)]),
            'street': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.streetRegex)]),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.cityRegex)]),
            'postCode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.postCodeRegex)]),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.cityRegex)]),
            'checkbox': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required) });
        // Business customer form
        this.businessCustomerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'companyName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.lithuanianRegex)]),
            'companyCode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.onlyNumbersRegex)]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.emailRegex)]),
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.phoneNumberRegex)]),
            'street': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.streetRegex)]),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.cityRegex)]),
            'postCode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.postCodeRegex)]),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(this.cityRegex)])
        });
        //
        this.loadVehicles();
        this.onChanges();
    };
    LeasingFormComponent.prototype.getCarModelsByBrand = function (brand) {
        var _this = this;
        if (this.changeScrollValue) {
            this.selectedModel = '';
        }
        this.changeScrollValue ? this.selectedModel = '' : this.changeScrollValue = true;
        this.modelsBySelectedBrand = [];
        this.listVehicle.forEach(function (data) {
            if (data['groupValue'] === brand) {
                _this.modelsBySelectedBrand.push(data['text']);
            }
        });
    };
    LeasingFormComponent.prototype.goBackToForm1 = function () {
        this.showFormSummary = false;
        this.showForm = true;
    };
    LeasingFormComponent.prototype.goNextToForm2 = function () {
        this.showFormSummary = false;
        this.showCustomerForm = true;
    };
    LeasingFormComponent.prototype.goToSummary = function () {
        this.showFormSummary = true;
        this.showForm = false;
        this.changeScrollValue = false;
    };
    LeasingFormComponent.prototype.goBackToSummary = function () {
        this.showCustomerForm = false;
        this.showFormSummary = true;
    };
    LeasingFormComponent.prototype.pitch = function (event) {
        this.rangeValue = event.value;
    };
    LeasingFormComponent.prototype.submit = function () {
        this.showOK = true;
        this.showCustomerForm = false;
    };
    LeasingFormComponent.prototype.onChanges = function () {
        var _this = this;
        // this.leaseForm.get('advancePaymentPercentage').valueChanges.subscribe(val => {
        //   if (this.leaseForm.get('advancePaymentPercentage').valid) {
        //     this.value = this.leaseForm.get('assetPrice').value * (parseFloat(val) / 100);
        //     this.leaseForm.get('advancePaymentAmount').patchValue(this.value.toFixed(2));
        //   } else {
        //     this.leaseForm.get('advancePaymentAmount').patchValue('');
        //   }
        // });
        this.leaseForm.get('assetPrice').valueChanges.subscribe(function (val) {
            if (_this.leaseForm.get('assetPrice').valid) {
                _this.value = val * (1 / 100);
                if (_this.value > _this.leaseForm.get('contractFee').value && _this.value > 200) {
                    _this.leaseForm.get('contractFee').patchValue(_this.value.toFixed(2));
                }
                if (_this.value > 200) {
                    _this.leaseForm.get('contractFee').patchValue(_this.value.toFixed(2));
                }
                else {
                    _this.leaseForm.get('contractFee').patchValue(200);
                }
                if (_this.leaseForm.get('assetPrice').valid) {
                    _this.leaseForm.get('advancePaymentAmount').patchValue((val * (_this.leaseForm.get('advancePaymentPercentage').value / 100))
                        .toFixed(2));
                }
                else {
                    _this.leaseForm.get('advancePaymentAmount').patchValue('');
                }
            }
            else {
                _this.leaseForm.get('contractFee').patchValue(200);
                _this.leaseForm.get('advancePaymentAmount').patchValue('');
            }
        });
    };
    LeasingFormComponent.prototype.test = function () {
        // this.value = this.leaseForm.get('assetPrice').value * (parseFloat(this.leaseForm.get('advancePaymentAMount').value) * 100);
        // console.log(this.leaseForm.get('assetPrice').value);
        // console.log(this.value);
        // this.leaseForm.get('advancePaymentPercentage').patchValue(this.value);
        if (this.advancePaymentPercentage < 10 && this.advancePaymentPercentage > 100) {
            this.advancePaymentAmount = this.assetPrice * (10 / 100);
        }
        else {
            this.advancePaymentAmount = this.assetPrice * (this.advancePaymentPercentage / 100);
        }
    };
    LeasingFormComponent.prototype.keyUpAdvancePaymentAmount = function () {
        if (this.leaseForm.get('advancePaymentPercentage').valid) {
            this.value = this.leaseForm.get('assetPrice').value * (this.leaseForm.get('advancePaymentPercentage').value / 100);
            this.leaseForm.get('advancePaymentAmount').patchValue(this.value.toFixed(2));
        }
        else {
            this.leaseForm.get('advancePaymentAmount').patchValue('');
        }
    };
    LeasingFormComponent.prototype.keyUpAdvancePaymentPercentage = function () {
        this.temp2 = this.leaseForm.get('advancePaymentAmount').value;
        this.temp = ((this.leaseForm.get('advancePaymentAmount').value / this.leaseForm.get('assetPrice').value) * 100);
        this.temp1 = (this.leaseForm.get('assetPrice').value * 0.1);
        if (this.temp <= 100 || this.temp >= 10) {
            this.leaseForm.get('advancePaymentPercentage').setValue(this.temp.toFixed(2));
        }
        if (this.temp > 100 || this.temp < 10) {
            this.leaseForm.get('advancePaymentPercentage').setValue(10);
            this.leaseForm.get('advancePaymentAmount').setValue(this.temp1);
        }
    };
    LeasingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-leasing-form',
            template: __webpack_require__("./src/app/leasing-form/leasing-form.component.html"),
            styles: [__webpack_require__("./src/app/leasing-form/leasing-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */], __WEBPACK_IMPORTED_MODULE_3__services_lease_service__["a" /* LeaseService */]])
    ], LeasingFormComponent);
    return LeasingFormComponent;
}());



/***/ }),

/***/ "./src/app/services/lease.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaseService = /** @class */ (function () {
    function LeaseService(http) {
        this.http = http;
    }
    LeaseService.prototype.submitLease = function () {
        var lease = {
            customerType: this.leaseObject.customerType,
            assetType: this.leaseObject.assetType,
            brand: this.leaseObject.vehicleBrand,
            model: this.leaseObject.model,
            year: this.leaseObject.year,
            enginePower: this.leaseObject.enginePower,
            assetPrice: this.leaseObject.assetPrice,
            advancePaymentPercentage: this.leaseObject.advancePaymentPercentage,
            advancePaymentAmount: this.leaseObject.advancePaymentAmount,
            leasePeriod: this.leaseObject.leasePeriod,
            margin: this.leaseObject.margin,
            contractFee: this.leaseObject.contractFee,
            paymentDate: this.leaseObject.paymentDate,
            companyName: this.customerObject.companyName,
            companyCode: this.customerObject.companyCode,
            firstName: this.customerObject.firstName,
            lastName: this.customerObject.lastName,
            personalCode: this.customerObject.personalCode,
            email: this.customerObject.email,
            phoneNumber: this.customerObject.phoneNumber,
            street: this.customerObject.street,
            city: this.customerObject.city,
            postCode: this.customerObject.postCode,
            country: this.customerObject.country
        };
        return this.http
            .post('https://leasingbe.herokuapp.com/addLease', lease)
            .toPromise();
    };
    LeaseService.prototype.getLeaseByUniqueId = function (id) {
        return this.http
            .get('https://leasingbe.herokuapp.com/uniqueId/' + id)
            .toPromise();
    };
    LeaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LeaseService);
    return LeaseService;
}());



/***/ }),

/***/ "./src/app/services/vehicle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleService = /** @class */ (function () {
    function VehicleService(http) {
        this.http = http;
        this.changeScrollValue = true;
    }
    VehicleService.prototype.getAllVehicleInfo = function () {
        return this.http
            .get('https://leasingbe.herokuapp.com/vehicles')
            .toPromise();
    };
    VehicleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map