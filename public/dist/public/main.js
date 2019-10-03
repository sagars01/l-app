(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-main/property-list/property-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/app-main/property-list/property-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header-image {\n  background-image: url('https://icon-library.net/images/hotel-vector-icon/hotel-vector-icon-3.jpg');\n  background-size: cover;\n}\n\n.property-card {\n  margin-bottom: 1rem;\n}\n\n.property-card:last-child {\n  margin-bottom: 0;\n}\n\n.book-property-btn {\n  position: absolute;\n  right: 0;\n  top: calc(50% - 15px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW1haW4vcHJvcGVydHktbGlzdC9wcm9wZXJ0eS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrR0FBa0c7RUFDbEcsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAtbWFpbi9wcm9wZXJ0eS1saXN0L3Byb3BlcnR5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pY29uLWxpYnJhcnkubmV0L2ltYWdlcy9ob3RlbC12ZWN0b3ItaWNvbi9ob3RlbC12ZWN0b3ItaWNvbi0zLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucHJvcGVydHktY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9wZXJ0eS1jYXJkOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYm9vay1wcm9wZXJ0eS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IGNhbGMoNTAlIC0gMTVweCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/app-main/property-list/property-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/app-main/property-list/property-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading == false\">\n  <div class=\"property-list-wrapper\" *ngIf=\"properties.length > 1\">\n    <mat-card class=\"property-card\" *ngFor=\"let property of properties\">\n      <mat-card-header class=\"relative-position\">\n        <div mat-card-avatar class=\"card-header-image\"></div>\n        <mat-card-title>{{property.property_name}}</mat-card-title>\n        <mat-card-subtitle>{{property.property_location}}</mat-card-subtitle>\n        <button class=\"book-property-btn\" mat-raised-button color=\"primary\" (click)=\"bookProperty(property)\">Book</button>\n      </mat-card-header>\n    </mat-card>\n  </div>\n  <mat-card class=\"property-card\" *ngIf=\"properties.length == 0\">\n    <mat-card-header class=\"relative-position\">\n      <mat-card-subtitle>\n        <h3>No properties in this area.</h3>\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n</div>\n<mat-card class=\"property-card\" *ngIf=\"isLoading\">\n  <mat-card-header class=\"relative-position\">\n    <mat-card-subtitle>\n      <h5>Loading Properties Near You.....</h5>\n    </mat-card-subtitle>\n  </mat-card-header>\n</mat-card>"

/***/ }),

/***/ "./src/app/app-main/property-list/property-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/app-main/property-list/property-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: PropertyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyListComponent", function() { return PropertyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_get_property_bylocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/get-property-bylocation.service */ "./src/app/services/get-property-bylocation.service.ts");
/* harmony import */ var src_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/app-store.service */ "./src/app/store/app-store.service.ts");
/* harmony import */ var src_app_services_user_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-booking.service */ "./src/app/services/user-booking.service.ts");





var PropertyListComponent = /** @class */ (function () {
    function PropertyListComponent(propertiesNearUserService, store, userBooking) {
        this.propertiesNearUserService = propertiesNearUserService;
        this.store = store;
        this.userBooking = userBooking;
        this.isLoading = true;
    }
    PropertyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.stateChanged.subscribe(function (state) {
            if (state.geoCodingData) {
                var geoCodingData = state.geoCodingData;
                _this.getPropertiesOnLocation(geoCodingData.lat, geoCodingData.lng);
            }
        });
    };
    PropertyListComponent.prototype.getPropertiesOnLocation = function (lat, long) {
        var _this = this;
        this.propertiesNearUserService.getPropertyBasedOnUserLocation(lat, long).subscribe(function (data) {
            _this.isLoading = false;
            _this.properties = data;
        });
    };
    PropertyListComponent.prototype.bookProperty = function (propertyInformation) {
        this.userBooking.bookNewProperty(propertyInformation.idproperty).subscribe(function (bookingConfirmation) {
            if (bookingConfirmation.status === 'OK') {
                // tslint:disable-next-line:max-line-length
                alert("Booking Confirmed for UserId " + bookingConfirmation.booking.user_id + " at PropertyId " + bookingConfirmation.booking.property_id);
            }
        });
    };
    PropertyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-list',
            template: __webpack_require__(/*! ./property-list.component.html */ "./src/app/app-main/property-list/property-list.component.html"),
            styles: [__webpack_require__(/*! ./property-list.component.css */ "./src/app/app-main/property-list/property-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_get_property_bylocation_service__WEBPACK_IMPORTED_MODULE_2__["GetPropertyByLocationService"],
            src_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"],
            src_app_services_user_booking_service__WEBPACK_IMPORTED_MODULE_4__["UserBookingService"]])
    ], PropertyListComponent);
    return PropertyListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#userApp {\n  overflow: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiN1c2VyQXBwIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"flex\" id=\"map\">\n    <app-map-main></app-map-main>\n  </div>\n  <div class=\"flex\" id=\"userApp\">\n    <app-property-list></app-property-list>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_main_map_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map-main/map-main.component */ "./src/app/map/map-main/map-main.component.ts");
/* harmony import */ var _app_main_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-main/property-list/property-list.component */ "./src/app/app-main/property-list/property-list.component.ts");
/* harmony import */ var _services_user_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user-location.service */ "./src/app/services/user-location.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_datasource_datasource_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/datasource/datasource.service */ "./src/app/services/datasource/datasource.service.ts");
/* harmony import */ var _services_get_property_bylocation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/get-property-bylocation.service */ "./src/app/services/get-property-bylocation.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _map_map_main_map_main_component__WEBPACK_IMPORTED_MODULE_9__["MapMainComponent"],
                _app_main_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_10__["PropertyListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].GoogleMAPAPIKey
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            providers: [_services_user_location_service__WEBPACK_IMPORTED_MODULE_11__["UserLocationService"], _services_datasource_datasource_service__WEBPACK_IMPORTED_MODULE_13__["DataSourceService"], _services_get_property_bylocation_service__WEBPACK_IMPORTED_MODULE_14__["GetPropertyByLocationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map-main/map-main.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map/map-main/map-main.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%;\n}\n\n:host {\n  height: 100%;\n}\n\n.map-wrapper {\n  height: 100%;\n  position: relative;\n}\n\n.map-input {\n  position: absolute;\n  z-index: 1;\n  background: #ffffffc4;\n  width: 100%;\n}\n\ninput#search-bar{\n  margin: 0 auto;\n  width: 100%;\n  height: 45px;\n  padding: 0 20px;\n  font-size: 1rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n  &:focus{\n    border: 1px solid #008ABF;\n    transition: 0.35s ease;\n    color: #008ABF;\n    &::-webkit-input-placeholder{\n      transition: opacity 0.45s ease; \n  \t  opacity: 0;\n     }\n    &::-moz-placeholder {\n      transition: opacity 0.45s ease; \n  \t  opacity: 0;\n     }\n    &:-ms-placeholder {\n     transition: opacity 0.45s ease; \n  \t opacity: 0;\n     }    \n   }\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC1tYWluL21hcC1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsYUFBYTtFQUNiO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Q7TUFDRSw4QkFBOEI7S0FDL0IsVUFBVTtLQUNWO0lBQ0Q7TUFDRSw4QkFBOEI7S0FDL0IsVUFBVTtLQUNWO0lBQ0Q7S0FDQyw4QkFBOEI7SUFDL0IsVUFBVTtLQUNUO0dBQ0Y7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAtbWFpbi9tYXAtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFwLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmYzQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCNzZWFyY2gtYmFye1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMENGQ0U7XG4gIG91dGxpbmU6IG5vbmU7XG4gICY6Zm9jdXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOEFCRjtcbiAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xuICAgIGNvbG9yOiAjMDA4QUJGO1xuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7IFxuICBcdCAgb3BhY2l0eTogMDtcbiAgICAgfVxuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjQ1cyBlYXNlOyBcbiAgXHQgIG9wYWNpdHk6IDA7XG4gICAgIH1cbiAgICAmOi1tcy1wbGFjZWhvbGRlciB7XG4gICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTsgXG4gIFx0IG9wYWNpdHk6IDA7XG4gICAgIH0gICAgXG4gICB9XG4gfVxuIl19 */"

/***/ }),

/***/ "./src/app/map/map-main/map-main.component.html":
/*!******************************************************!*\
  !*** ./src/app/map/map-main/map-main.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-wrapper\">\n  <div class=\"form-group map-input\">\n    <input type=\"text\" id=\"search-bar\" [(ngModel)]=\"searchQuery\"\n    placeholder=\"Enter place\"\n    (ngModelChange)=\"onSearch($event)\">\n  </div>\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [animation]=\"'BOUNCE'\">\n        <agm-info-window>\n            {{'USER'}}\n          </agm-info-window>\n    </agm-marker>\n    <!--These are property markers-->\n    <agm-marker [latitude]=\"location.property_lat\" [longitude]=\"location.property_long\"\n      *ngFor=\"let location of properties\">\n      <agm-info-window>\n        {{location.property_name}}\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map-main/map-main.component.ts":
/*!****************************************************!*\
  !*** ./src/app/map/map-main/map-main.component.ts ***!
  \****************************************************/
/*! exports provided: MapMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMainComponent", function() { return MapMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-location.service */ "./src/app/services/user-location.service.ts");
/* harmony import */ var src_app_services_get_property_bylocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-property-bylocation.service */ "./src/app/services/get-property-bylocation.service.ts");
/* harmony import */ var src_app_services_search_query_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search-query-details.service */ "./src/app/services/search-query-details.service.ts");
/* harmony import */ var src_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/app-store.service */ "./src/app/store/app-store.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var MapMainComponent = /** @class */ (function () {
    function MapMainComponent(userLocation, propertiesNearUserService, userQueryGeocodingService, store) {
        this.userLocation = userLocation;
        this.propertiesNearUserService = propertiesNearUserService;
        this.userQueryGeocodingService = userQueryGeocodingService;
        this.store = store;
        this.zoom = 14;
        this.searchQueryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    MapMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserLocationFromDevice();
        this.searchOnUserInput();
        // Store subscription
        this.store.stateChanged.subscribe(function (state) {
            if (state.geoCodingData) {
                var geoCodingData = state.geoCodingData;
                _this.latitude = geoCodingData.lat;
                _this.longitude = geoCodingData.lng;
                _this.getPropertyData(geoCodingData.lat, geoCodingData.lng);
            }
        });
    };
    MapMainComponent.prototype.onSearch = function (searchQuery) {
        this.searchQueryChanged.next(searchQuery);
    };
    MapMainComponent.prototype.getUserLocationFromDevice = function () {
        var _this = this;
        this.userLocation.getCurrentPosition().subscribe(function (userLocationData) {
            console.log(userLocationData);
            _this.latitude = userLocationData.coords.latitude;
            _this.longitude = userLocationData.coords.longitude;
            _this.userLocationData = userLocationData;
            var storeGeoCodingData = {
                geoCodingData: {
                    lat: userLocationData.coords.latitude,
                    lng: userLocationData.coords.longitude
                }
            };
            // Once the location is received now call the backend API
            _this.store.add(storeGeoCodingData.geoCodingData);
            _this.getPropertyData(userLocationData.coords.latitude, userLocationData.coords.longitude);
        }, function (err) {
            // This is hard coded because the database consists only these data.
            var defaultLocation = {
                lat: 52.509677,
                lng: 13.370559
            };
            // this.getPropertyData(defaultLocation.user_lat, defaultLocation.user_long);
            _this.store.add(defaultLocation);
            // console.error(err);
        });
    };
    MapMainComponent.prototype.convertToNumber = function (objects) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
                    obj[prop] = +obj[prop];
                }
            }
        }
        return objects;
    };
    MapMainComponent.prototype.getPropertyData = function (lat, long) {
        var _this = this;
        this.propertiesNearUserService.getPropertyBasedOnUserLocation(lat, long).subscribe(function (data) {
            _this.properties = _this.convertToNumber(data);
            _this.latitude = lat;
            _this.longitude = long;
        });
    };
    MapMainComponent.prototype.getLocationDetailsFromUserInput = function (searchQuery) {
        var query = {
            address: searchQuery,
            responseFormat: 'json'
        };
        this.userQueryGeocodingService.getSearchQueryLocationDetails(query);
    };
    MapMainComponent.prototype.searchOnUserInput = function () {
        var _this = this;
        this.searchQueryChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (model) {
            _this.searchQuery = model;
            _this.getLocationDetailsFromUserInput(model);
        });
    };
    MapMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-main',
            template: __webpack_require__(/*! ./map-main.component.html */ "./src/app/map/map-main/map-main.component.html"),
            styles: [__webpack_require__(/*! ./map-main.component.css */ "./src/app/map/map-main/map-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_location_service__WEBPACK_IMPORTED_MODULE_2__["UserLocationService"],
            src_app_services_get_property_bylocation_service__WEBPACK_IMPORTED_MODULE_3__["GetPropertyByLocationService"],
            src_app_services_search_query_details_service__WEBPACK_IMPORTED_MODULE_4__["SearchQueryDetailsService"],
            src_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_5__["AppStoreService"]])
    ], MapMainComponent);
    return MapMainComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");











































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/datasource/datasource.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/datasource/datasource.service.ts ***!
  \***********************************************************/
/*! exports provided: DataSourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceService", function() { return DataSourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var DataSourceService = /** @class */ (function () {
    function DataSourceService(http) {
        this.http = http;
        this.requestHeaders = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    DataSourceService.prototype.get = function (url, headerOptions) {
        var requestEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceEndPoints + "/" + url;
        if (headerOptions) {
            this.requestHeaders = headerOptions;
        }
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceEndPoints, this.requestHeaders);
    };
    DataSourceService.prototype.post = function (url, body, headerOptions) {
        var requestEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceEndPoints + "/" + url;
        if (headerOptions) {
            this.requestHeaders = headerOptions;
        }
        return this.http.post(requestEndPoint, body, this.requestHeaders);
    };
    DataSourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataSourceService);
    return DataSourceService;
}());



/***/ }),

/***/ "./src/app/services/datasource/google-map-geocoding.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/datasource/google-map-geocoding.service.ts ***!
  \*********************************************************************/
/*! exports provided: GoogleMapGeocodingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapGeocodingService", function() { return GoogleMapGeocodingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _endpoints_dev_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../endpoints/dev/maps */ "./src/endpoints/dev/maps.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var GoogleMapGeocodingService = /** @class */ (function () {
    function GoogleMapGeocodingService(http) {
        this.http = http;
    }
    GoogleMapGeocodingService.prototype.get = function (params) {
        var requestURL = _endpoints_dev_maps__WEBPACK_IMPORTED_MODULE_3__["maps"].GoogleGeoCoding + "/" + params.responseFormat + "?address=" + params.address + "&key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].GoogleMAPAPIKey;
        return this.http.get(requestURL);
    };
    GoogleMapGeocodingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GoogleMapGeocodingService);
    return GoogleMapGeocodingService;
}());



/***/ }),

/***/ "./src/app/services/get-property-bylocation.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/get-property-bylocation.service.ts ***!
  \*************************************************************/
/*! exports provided: GetPropertyByLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPropertyByLocationService", function() { return GetPropertyByLocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datasource_datasource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasource/datasource.service */ "./src/app/services/datasource/datasource.service.ts");
/* harmony import */ var _endpoints_dev_userdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../endpoints/dev/userdata */ "./src/endpoints/dev/userdata.ts");




var GetPropertyByLocationService = /** @class */ (function () {
    function GetPropertyByLocationService(dataSource) {
        this.dataSource = dataSource;
    }
    GetPropertyByLocationService.prototype.getPropertyBasedOnUserLocation = function (latitude, longitude) {
        var locationParams = {
            user_lat: latitude,
            user_long: longitude
        };
        return this.dataSource.post(_endpoints_dev_userdata__WEBPACK_IMPORTED_MODULE_3__["userServices"].GetPropertiesByUserLocation, locationParams);
    };
    GetPropertyByLocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_datasource_datasource_service__WEBPACK_IMPORTED_MODULE_2__["DataSourceService"]])
    ], GetPropertyByLocationService);
    return GetPropertyByLocationService;
}());



/***/ }),

/***/ "./src/app/services/search-query-details.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/search-query-details.service.ts ***!
  \**********************************************************/
/*! exports provided: SearchQueryDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchQueryDetailsService", function() { return SearchQueryDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datasource_datasource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasource/datasource.service */ "./src/app/services/datasource/datasource.service.ts");
/* harmony import */ var _datasource_google_map_geocoding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasource/google-map-geocoding.service */ "./src/app/services/datasource/google-map-geocoding.service.ts");
/* harmony import */ var _store_app_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/app-store.service */ "./src/app/store/app-store.service.ts");





var SearchQueryDetailsService = /** @class */ (function () {
    function SearchQueryDetailsService(dataSource, geoCodingService, store) {
        this.dataSource = dataSource;
        this.geoCodingService = geoCodingService;
        this.store = store;
    }
    /**
     *
     * @param queryParams send the address and response format
     * @description subscribe to state for update search query information
     */
    SearchQueryDetailsService.prototype.getSearchQueryLocationDetails = function (queryParams) {
        var _this = this;
        return this.geoCodingService.get(queryParams).subscribe(function (geoCodingInformation) {
            var locationCoords = geoCodingInformation.results[geoCodingInformation.results.length - 1].geometry.location;
            _this.store.add(locationCoords);
        });
    };
    SearchQueryDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_datasource_datasource_service__WEBPACK_IMPORTED_MODULE_2__["DataSourceService"],
            _datasource_google_map_geocoding_service__WEBPACK_IMPORTED_MODULE_3__["GoogleMapGeocodingService"],
            _store_app_store_service__WEBPACK_IMPORTED_MODULE_4__["AppStoreService"]])
    ], SearchQueryDetailsService);
    return SearchQueryDetailsService;
}());



/***/ }),

/***/ "./src/app/services/user-booking.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-booking.service.ts ***!
  \**************************************************/
/*! exports provided: UserBookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBookingService", function() { return UserBookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datasource_datasource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasource/datasource.service */ "./src/app/services/datasource/datasource.service.ts");
/* harmony import */ var _endpoints_dev_bookings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../endpoints/dev/bookings */ "./src/endpoints/dev/bookings.ts");




var UserBookingService = /** @class */ (function () {
    function UserBookingService(dataSource) {
        this.dataSource = dataSource;
    }
    UserBookingService.prototype.bookNewProperty = function (propertyId) {
        var bookingReqBody = {
            user_id: 8,
            property_id: propertyId,
        };
        return this.dataSource.post(_endpoints_dev_bookings__WEBPACK_IMPORTED_MODULE_3__["bookings"].BookNew, bookingReqBody);
    };
    UserBookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_datasource_datasource_service__WEBPACK_IMPORTED_MODULE_2__["DataSourceService"]])
    ], UserBookingService);
    return UserBookingService;
}());



/***/ }),

/***/ "./src/app/services/user-location.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/user-location.service.ts ***!
  \***************************************************/
/*! exports provided: UserLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationService", function() { return UserLocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");



var UserLocationService = /** @class */ (function () {
    function UserLocationService() {
    }
    /**
     * Tries HTML5 geolocation.
     *
     * Wraps the Geolocation API into an observable.
     *
     * @return An observable of Position
     */
    UserLocationService.prototype.getCurrentPosition = function () {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            // Invokes getCurrentPosition method of Geolocation API.
            navigator.geolocation.getCurrentPosition(function (position) {
                observer.next(position);
                observer.complete();
            }, function (error) {
                console.log('Geolocation service: ' + error.message);
                observer.error(error);
            });
        });
    };
    UserLocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserLocationService);
    return UserLocationService;
}());



/***/ }),

/***/ "./src/app/store/app-store.service.ts":
/*!********************************************!*\
  !*** ./src/app/store/app-store.service.ts ***!
  \********************************************/
/*! exports provided: AppStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return AppStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codewithdan/observable-store */ "./node_modules/@codewithdan/observable-store/dist/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppStoreService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppStoreService, _super);
    function AppStoreService() {
        var _this = _super.call(this, { trackStateHistory: true }) || this;
        var initialState = {
            geoCodingData: null,
        };
        _this.setState(initialState, 'init_state');
        return _this;
    }
    AppStoreService.prototype.get = function () {
        var geoCodingData = this.getState().geoCodingData;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(geoCodingData);
    };
    AppStoreService.prototype.add = function (data) {
        var state = this.getState();
        state.geoCodingData = data;
        this.setState({ geoCodingData: state.geoCodingData }, 'add_geoCodingData');
    };
    AppStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppStoreService);
    return AppStoreService;
}(_codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_2__["ObservableStore"]));



/***/ }),

/***/ "./src/endpoints/dev/bookings.ts":
/*!***************************************!*\
  !*** ./src/endpoints/dev/bookings.ts ***!
  \***************************************/
/*! exports provided: bookings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookings", function() { return bookings; });
var bookings = {
    BookNew: 'bookings/new'
};


/***/ }),

/***/ "./src/endpoints/dev/maps.ts":
/*!***********************************!*\
  !*** ./src/endpoints/dev/maps.ts ***!
  \***********************************/
/*! exports provided: maps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maps", function() { return maps; });
var maps;
(function (maps) {
    maps["GooglePlaces"] = "https://maps.googleapis.com/maps/api/place/findplacefromtext/";
    maps["GoogleGeoCoding"] = "https://maps.googleapis.com/maps/api/geocode";
})(maps || (maps = {}));


/***/ }),

/***/ "./src/endpoints/dev/userdata.ts":
/*!***************************************!*\
  !*** ./src/endpoints/dev/userdata.ts ***!
  \***************************************/
/*! exports provided: userServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userServices", function() { return userServices; });
var userServices = {
    GetPropertiesByUserLocation: 'property/bylocation'
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    GoogleMAPAPIKey: 'AIzaSyAYgEPaCX_KfngPWsnwXfIjOrgbh4Smvf8',
    serviceEndPoints: 'http://localhost:3000'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sagarmoysengupta/Desktop/Projects/lime-apps/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map