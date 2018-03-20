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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n</div>\r\n\r\n\r\n\r\n<app-leasing-form></app-leasing-form>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leasing_form_leasing_form_component__ = __webpack_require__("./src/app/leasing-form/leasing-form.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__leasing_form_leasing_form_component__["a" /* LeasingFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.html":
/***/ (function(module, exports) {

module.exports = "  <form class=\"form-horizontal\">\r\n      <div class=\"form-group\">\r\n        <label for=\"customerType\" class=\"control-label col-xs-4\">Customer type:</label> \r\n        <div class=\"col-xs-8\">\r\n          <label class=\"radio-inline\">\r\n            <input name=\"customerType\" [(ngModel)]=\"customerType\" value=\"Business\" type=\"radio\">\r\n                  Business\r\n          </label>\r\n          <label class=\"radio-inline\">\r\n            <input name=\"customerType\" [(ngModel)]=\"customerType\" value=\"Private\" type=\"radio\">\r\n                  Private\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"assetType\" class=\"control-label col-xs-4\">Asset type:</label> \r\n        <div class=\"col-xs-8\">\r\n          <label class=\"radio-inline\">\r\n            <input name=\"assetType\" [(ngModel)]=\"assetType\" value=\"New\" type=\"radio\">\r\n                  New\r\n          </label>\r\n          <label class=\"radio-inline\">\r\n            <input name=\"assetType\" [(ngModel)]=\"assetType\" value=\"Old\" type=\"radio\">\r\n                  Old\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"make\" class=\"control-label col-xs-4\">Make:</label> \r\n        <div class=\"col-xs-8\">\r\n          <select id=\"make\" name=\"make\" required=\"required\" class=\"select form-control\"></select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"model\" class=\"control-label col-xs-4\">Model:</label> \r\n        <div class=\"col-xs-8\">\r\n          <select id=\"model\" name=\"model\" required=\"required\" class=\"select form-control\"></select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"year\" class=\"control-label col-xs-4\">Year:</label> \r\n        <div class=\"col-xs-8\">\r\n          <input id=\"year\" name=\"year\" required=\"required\" class=\"form-control\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"enginePower\" class=\"control-label col-xs-4\">Engine power (kW):</label> \r\n        <div class=\"col-xs-8\">\r\n          <input id=\"enginePower\" name=\"enginePower\" required=\"required\" class=\"form-control\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"assetPrice\" class=\"control-label col-xs-4\">Asset price:</label> \r\n        <div class=\"col-xs-8\">\r\n          <input id=\"assetPrice\" name=\"assetPrice\" class=\"form-control\" required=\"required\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"advancePaymentPercentage\" class=\"control-label col-xs-4\">Advance payment percentage:</label> \r\n        <div class=\"col-xs-8\">\r\n          <input id=\"advancePaymentPercentage\" name=\"advancePaymentPercentage\" class=\"form-control\" required=\"required\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"advancePaymentAmount\" class=\"control-label col-xs-4\">Advance payment amount:</label> \r\n        <div class=\"col-xs-8\">\r\n          <input id=\"advancePaymentAmount\" name=\"advancePaymentAmount\" required=\"required\" class=\"form-control\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\" class=\"control-label col-xs-4\">Slider</label> \r\n        <div class=\"col-xs-8\">\r\n          <input id=\"text\" name=\"text\" class=\"form-control\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"margin\" class=\"control-label col-xs-4\">Margin (%):</label> \r\n        <div class=\"col-xs-8\">\r\n          <input id=\"margin\" name=\"margin\" class=\"form-control\" required=\"required\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"contractFee\" class=\"control-label col-xs-4\">Contract fee:</label> \r\n        <div class=\"col-xs-8\">\r\n          <input id=\"contractFee\" name=\"contractFee\" class=\"form-control\" required=\"required\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"paymentDate\" class=\"control-label col-xs-4\">Payment date:</label> \r\n        <div class=\"col-xs-8\">\r\n          <label class=\"radio-inline\">\r\n            <input name=\"paymentDate\" [(ngModel)]=\"paymentDate\" value=\"15\" type=\"radio\">\r\n                  15\r\n          </label>\r\n          <label class=\"radio-inline\">\r\n            <input name=\"paymentDate\" [(ngModel)]=\"paymentDate\" value=\"30\" type=\"radio\">\r\n                  30\r\n          </label>\r\n        </div>\r\n      </div> \r\n      <div class=\"form-group row\">\r\n        <div class=\"col-xs-offset-4 col-xs-8\">\r\n          <button name=\"submit\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  \r\n\r\n\r\n\r\n{{test}}\r\n\r\n\r\n<h1>{{paymentDate}}</h1>\r\n<h1>{{customerType}}</h1>\r\n<h1>{{assetType}}</h1>"

/***/ }),

/***/ "./src/app/leasing-form/leasing-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeasingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function LeasingFormComponent() {
    }
    LeasingFormComponent.prototype.ngOnInit = function () {
    };
    LeasingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-leasing-form',
            template: __webpack_require__("./src/app/leasing-form/leasing-form.component.html"),
            styles: [__webpack_require__("./src/app/leasing-form/leasing-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeasingFormComponent);
    return LeasingFormComponent;
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