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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n</div>\r\n\r\n\r\n\r\n<app-leasing-form ></app-leasing-form>\r\n<router-outlet></router-outlet>\r\n"

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
                __WEBPACK_IMPORTED_MODULE_9__leasing_form_leasing_form_component__["a" /* LeasingFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_vehicle_service__["a" /* VehicleService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\ninput.valid.ng-untouched, select.ng-valid.ng-untouched{\r\n  border: 1px solid green;\r\n}\r\n\r\n.slidecontainer {\r\n    width: 20%;\r\n    margin-left: 34.5%;\r\n}\r\n\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 15px;\r\n    border-radius: 5px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    -webkit-transition: .2s;\r\n    -webkit-transition: opacity .2s;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"showForm\">\r\n  <form class=\"form-horizontal\" [formGroup]=\"leaseForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"customerType\" class=\"control-label col-xs-4\">Customer type:</label>\r\n      <div class=\"col-xs-4\">\r\n        <label class=\"radio-inline\" *ngFor=\"let customerType of customerTypes\">\r\n          <input\r\n            formControlName=\"customerType\"\r\n            type=\"radio\"\r\n            [value]=\"customerType\">\r\n          {{customerType}}\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"assetType\" class=\"control-label col-xs-4\">Asset type:</label>\r\n      <div class=\"col-xs-8\">\r\n        <label class=\"radio-inline\" *ngFor=\"let assetType of assetTypes\">\r\n          <input\r\n            formControlName=\"assetType\"\r\n            type=\"radio\"\r\n            [value]=\"assetType\">\r\n          {{assetType}}\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"brand\" class=\"control-label col-xs-4\">Brand:</label>\r\n      <div class=\"col-xs-2\">\r\n        <select [formControlName]=\"'brand'\" [(ngModel)]=\"selectedBrand\" (ngModelChange)=\"getCarModelsByBrand($event)\"\r\n                id=\"brand\" name=\"brand\"\r\n                class=\"select form-control\">\r\n          <option selected=\"\" value=\"\" selected disabled hidden>Choose brand</option>\r\n          <option *ngFor=\"let brand of brands\" [value]=\"brand\">{{brand}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"model\" class=\"control-label col-xs-4\">Model:</label>\r\n      <div class=\"col-xs-2\">\r\n        <select [formControlName]=\"'model'\" [(ngModel)]=\"selectedModel\" id=\"model\" name=\"model\"\r\n                class=\"select form-control\">\r\n          <option value=\"\" selected disabled hidden>Choose model</option>\r\n          <option *ngFor=\"let model of modelsBySelectedBrand\" [value]=\"model\">{{model}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"year\" class=\"control-label col-xs-4\">Year:</label>\r\n      <div class=\"col-xs-2\">\r\n        <select [formControlName]=\"'year'\" [(ngModel)]=\"selectedYear\" id=\"year\" name=\"year\"\r\n                class=\"select form-control\">\r\n          <option value=\"\" selected disabled hidden>Choose year</option>\r\n          <option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"enginePower\" class=\"control-label col-xs-4\">Engine power (kW):</label>\r\n      <div class=\"col-xs-2\">\r\n        <input\r\n          formControlName=\"enginePower\"\r\n          id=\"enginePower\"\r\n          class=\"form-control\"\r\n          type=\"text\">\r\n        <span *ngIf=\"leaseForm.get('enginePower').invalid && leaseForm.get('enginePower').touched\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"assetPrice\" class=\"control-label col-xs-4\">Asset price (€):</label>\r\n      <div class=\"col-xs-2\">\r\n        <input\r\n          formControlName=\"assetPrice\"\r\n          id=\"assetPrice\"\r\n          class=\"form-control\"\r\n          type=\"text\">\r\n        <span *ngIf=\"leaseForm.get('assetPrice').invalid && leaseForm.get('assetPrice').touched\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"advancePaymentPercentage\" class=\"control-label col-xs-4\">Advance payment percentage:</label>\r\n      <div class=\"col-xs-2\">\r\n        <input\r\n          formControlName=\"advancePaymentPercentage\"\r\n          id=\"advancePaymentPercentage\"\r\n          class=\"form-control\"\r\n          type=\"text\">\r\n        <span\r\n          *ngIf=\"leaseForm.get('advancePaymentPercentage').invalid && leaseForm.get('advancePaymentPercentage').touched\"\r\n          class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"advancePaymentAmount\" class=\"control-label col-xs-4\">Advance payment amount(€):</label>\r\n      <div class=\"col-xs-2\">\r\n        <input\r\n          formControlName=\"advancePaymentAmount\"\r\n          id=\"advancePaymentAmount\"\r\n          class=\"form-control\"\r\n          type=\"text\">\r\n        <span *ngIf=\"leaseForm.get('advancePaymentAmount').invalid && leaseForm.get('advancePaymentAmount').touched\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n    </div>\r\n      <div class=\"form-group\">\r\n      <label  class=\"control-label col-xs-4\">Lease period:</label> \r\n      \r\n      <div class=\"col-xs-2\"> \r\n            <input  [formControlName]=\"'leasePeriod'\" type=\"range\" min=\"6\" max=\"84\"  step=\"6\" class=\"slider\" #rangevalue (input)=\"pitch($event)\" value=\"6\"> \r\n          \r\n          <input  style=\"margin-top:3%\" class=\"form-control\" type=\"text\" readonly value=\"{{ rangevalue.value }} months\"> \r\n        </div>\r\n        \r\n    </div> \r\n    \r\n    <div class=\"form-group\">\r\n      <label for=\"margin\" class=\"control-label col-xs-4\">Margin (%):</label>\r\n      <div class=\"col-xs-2\">\r\n        <input\r\n          formControlName=\"margin\"\r\n          id=\"margin\"\r\n          class=\"form-control\"\r\n          type=\"text\">\r\n        <span *ngIf=\"leaseForm.get('margin').invalid && leaseForm.get('margin').touched\"\r\n              class=\"label label-warning\">Only numeric values. Required field.</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"contractFee\" class=\"control-label col-xs-4\">Contract fee (€):</label>\r\n      <div class=\"col-xs-2\">\r\n        <input\r\n          formControlName=\"contractFee\"\r\n          readonly\r\n          id=\"contractFee\"\r\n          class=\"form-control\"\r\n          type=\"text\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"paymentDate\" class=\"control-label col-xs-4\">Payment date:</label>\r\n      <div class=\"col-xs-8\">\r\n        <label class=\"radio-inline\" *ngFor=\"let paymentDate of paymentDates\">\r\n          <input\r\n            formControlName=\"paymentDate\"\r\n            type=\"radio\"\r\n            [value]=\"paymentDate\">\r\n          {{paymentDate}}\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-xs-offset-4 col-xs-8\">\r\n        <button\r\n          [disabled]=\"!leaseForm.valid\"\r\n          name=\"submit\"\r\n          type=\"submit\"\r\n          (click)=\"onSubmit()\"\r\n          class=\"btn btn-dark\">Next\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div id=\"summary\" *ngIf=\"showFormSummary\">\r\n<div class=\"col-xs-offset-3 col-xs-6\" id=\"summary_div\">\r\n  <h3><b>Vehicle lease summary : </b></h3>\r\n  <p><b>Customer type : </b>{{leaseForm.get('customerType').value}}</p>\r\n  <p><b>Asset type : </b>{{leaseForm.get('assetType').value}}</p>\r\n  <p><b>Brand : </b>{{leaseForm.get('brand').value}}</p>\r\n  <p><b>Model : </b>{{leaseForm.get('model').value}}</p>\r\n  <p><b>Year : </b>{{leaseForm.get('year').value}}</p>\r\n  <p><b>Engine power (kW) : </b>{{leaseForm.get('enginePower').value}}</p>\r\n  <p><b>Asset price (€) : </b>{{leaseForm.get('assetPrice').value}}</p>\r\n  <p><b>Advance payment percentage : </b>{{leaseForm.get('advancePaymentPercentage').value}}</p>\r\n  <p><b>Advance payment amount(€) : </b>{{leaseForm.get('advancePaymentAmount').value}}</p>\r\n  <p><b>Lease period : </b>{{leaseForm.get('leasePeriod').value}}</p>\r\n  <p><b>Margin (%) : </b>{{leaseForm.get('margin').value}}</p>\r\n  <p><b>Contract fee (€) : </b>{{leaseForm.get('contractFee').value}}</p>\r\n  <p><b>Payment date : </b>{{leaseForm.get('paymentDate').value}}</p>\r\n  <div class=\"form-group row\">\r\n        <button (click)=\"goBackToForm()\" name=\"submit1\" type=\"submit\" class=\"btn btn-dark\">Back</button>\r\n        <button (click)=\"submit()\" name=\"submit2\" type=\"submit\" class=\"btn btn-dark\">Submit</button>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"ok\" *ngIf=\"showOK\">\r\n   <h3 class=\"text-center\">Jums pavyko! Valioooooooooooo</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeasingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
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
    function LeasingFormComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.defaultContractFee = 200;
        this.customerTypes = ['Private', 'Business'];
        this.assetTypes = ['New', 'Old'];
        this.paymentDates = [15, 30];
        this.years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
        this.numberRegex = '^\\s*(?=.*[1-9])\\d*(?:\\,\\d{1,2})?\\s*$';
        this.selectedBrand = '';
        this.selectedModel = '';
        this.showForm = true;
        this.showFormSummary = false;
        this.showOK = false;
        this.changeScrollValue = true;
        this.selectedYear = '';
    }
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
            'customerType': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'assetType': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'brand': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'model': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'enginePower': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(this.numberRegex)]),
            'assetPrice': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(this.numberRegex)]),
            'advancePaymentPercentage': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(this.numberRegex), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].max(100), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(4)]),
            'advancePaymentAmount': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(this.numberRegex)]),
            'leasePeriod': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](6, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'margin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(this.numberRegex), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].max(100), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(4)]),
            'contractFee': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](200, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'paymentDate': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
        this.loadVehicles();
    };
    LeasingFormComponent.prototype.getCarModelsByBrand = function (brand) {
        var _this = this;
        if (this.changeScrollValue) {
            this.selectedModel = "";
        }
        this.changeScrollValue ? this.selectedModel = "" : this.changeScrollValue = true;
        this.modelsBySelectedBrand = [];
        this.listVehicle.forEach(function (data) {
            console.log(data['groupValue']);
            if (data['groupValue'] === brand) {
                _this.modelsBySelectedBrand.push(data['text']);
            }
        });
    };
    LeasingFormComponent.prototype.goBackToForm = function () {
        this.showFormSummary = false;
        this.showForm = true;
    };
    LeasingFormComponent.prototype.submit = function () {
        this.showFormSummary = false;
        this.showOK = true;
    };
    LeasingFormComponent.prototype.onSubmit = function () {
        console.log(this.leaseForm);
        this.showFormSummary = true;
        this.showForm = false;
        this.changeScrollValue = false;
    };
    LeasingFormComponent.prototype.pitch = function (event) {
        this.rangeValue = event.value;
    };
    LeasingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-leasing-form',
            template: __webpack_require__("./src/app/leasing-form/leasing-form.component.html"),
            styles: [__webpack_require__("./src/app/leasing-form/leasing-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */]])
    ], LeasingFormComponent);
    return LeasingFormComponent;
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
    }
    /* createPost(content, author, title) {
       const post = {
         title: title,
         content: content,
         author: author,
         date: 'some date'
       };
   
       return this.http
       .post('https://gretasblog.herokuapp.com/add', post)
       .toPromise();
     }*/
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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