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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <a class=\"navbar-brand\" href=\"/\">Logo</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" href=\"#\">Home</a>\n      <a class=\"nav-item nav-link\" (click) = \"registration()\" >Registration</a>\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-nav\">\n      <input type=\"text\" name=\"search\" placeholder=\"Search...\" autocomplete=\"off\" [(ngModel)]=\"query\" class=\"form-control input-underline\" />\n      <button class=\"btn btn-outline bg-dark\" style=\" color:white\">Search</button>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n    <div class=\"jumbotron\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>DOB</th>\n            <th>Email</th>\n            <th>Country</th>\n          </tr>\n        </thead>\n        <tbody *ngIf = \"query\">\n          <tr *ngFor=\"let user of users| startsWith : query\">\n            <td>{{user.first_name}}</td>\n            <td>{{user.last_name}}</td>\n            <td>{{user.dob}}</td>\n            <td>{{user.email}}</td>\n            <td>{{user.country}}</td>\n            <td class = \"btn btn-primary\" (click)=\"edit(user.id)\">Edit</td>\n            <td class=\"btn btn-danger\" (click)= \"delete(user.id)\" >Delete</td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"!query\">\n          <tr *ngFor=\"let user of users\">\n            <td>{{user.first_name}}</td>\n            <td>{{user.last_name}}</td>\n            <td>{{user.dob}}</td>\n            <td>{{user.email}}</td>\n            <td>{{user.country}}</td>\n            <td class=\"btn btn-primary\" (click)=\"edit(user.id)\">Edit</td>\n            <td class=\"btn btn-danger\" (click)=\"delete(user.id)\">Delete</td>\n          </tr>\n        </tbody>\n      </table>\n      <button class=\"btn btn-primary pull-right\" (click)=\"registration()\">New</button>\n    </div>\n      <ng-container *ngIf = showWindow>\n        <div class=\"container\">\n          <div class=\"jumbotron\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"text-input\">First Name</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" [(ngModel)]=\"userData.first_name\" id=\"first\" name=\"text-input\"\n                  type=\"text\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"text-input\">Last Name</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" [(ngModel)]=\"userData.last_name\" id=\"last\" name=\"text-input\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"text-input\">DOB</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" [(ngModel)]=\"userData.dob\" id=\"dob\" name=\"text-input\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"text-input\">Email</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" [(ngModel)]=\"userData.email\" id=\"email\" name=\"text-input\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"text-input\">Password</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" [(ngModel)]=\"userData.password\" id=\"text-input\" name=\"text-input\" type=\"password\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"text-input\">Country</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" [(ngModel)]=\"userData.country\" id=\"password\" name=\"text-input\" type=\"text\">\n              </div>\n            </div>\n            <button class=\"btn btn-warning pull-right\" (click)=\"cancel()\">Cancel</button>\n            <button class = \"btn btn-primary pull-right\" (click) = \"submit(userData)\">Submit</button>\n           </div> \n          </div>\n      </ng-container>\n</div>\n\n"

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
        this.title = 'app';
        this.showWindow = false;
        this.userData = {};
        this.users = [{ id: 1, first_name: 'Johan', last_name: 'Peter', dob: '12/2/1990', email: 'johan@gmail.com', country: 'UK', password: '12345' },
            { id: 2, first_name: 'Mahamed', last_name: 'Tariq', dob: '12/2/1990', email: 'tariq@gmail.com', country: 'UAE', password: '12345' }
        ];
        this.query = null;
    }
    AppComponent.prototype.registration = function () {
        this.userData = {};
        this.showWindow = true;
    };
    AppComponent.prototype.cancel = function () {
        this.showWindow = false;
    };
    AppComponent.prototype.edit = function (id) {
        var _this = this;
        this.showWindow = true;
        this.users.forEach(function (element) {
            if (id == element.id) {
                _this.userData = element;
                // console.log(this.userData);
            }
        });
    };
    AppComponent.prototype.delete = function (id) {
        var _this = this;
        this.users.forEach(function (element) {
            if (id == element.id) {
                var index = _this.users.indexOf(element);
                _this.users.splice(index);
            }
        });
    };
    AppComponent.prototype.submit = function (user) {
        var _this = this;
        if (user.id != null && typeof user.id != 'undefined') {
            console.log('in if');
            this.users.forEach(function (element) {
                if (user.id == element.id) {
                    var index = _this.users.indexOf(element);
                    _this.users.splice(index);
                    _this.users.push(user);
                }
            });
            this.showWindow = false;
        }
        else {
            console.log('In else');
            var userIds_1 = [];
            this.users.forEach(function (element) {
                userIds_1.push(element.id);
            });
            var largestId = Math.max.apply(null, userIds_1);
            user.id = largestId + 1;
            this.users.push(user);
            console.log(largestId);
        }
        this.showWindow = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_pipe__ = __webpack_require__("./src/app/search.pipe.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__search_pipe__["a" /* SearchPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, term) {
        return value.filter(function (x) { return x.first_name.toLowerCase().startsWith(term.toLowerCase()); });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'startsWith'
        })
    ], SearchPipe);
    return SearchPipe;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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