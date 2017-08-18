webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {}\n\n.logo {}\n\n@-webkit-keyframes bright {\n  0%, 100% {\n    filter: brightness(0.1);\n    -webkit-filter: brightness(0.1);\n  }\n  50% {\n    filter: brightness(2);\n    -webkit-filter: brightness(2);\n  }\n}\n\n@keyframes bright {\n  0%, 100% {\n    filter: brightness(0.1);\n    -webkit-filter: brightness(0.1);\n  }\n  50% {\n    filter: brightness(2);\n    -webkit-filter: brightness(2);\n  }\n}\n\n\n/*url(https://static.pexels.com/photos/164018/pexels-photo-164018.jpeg); /*forest*/\n\n\n/*url(https://static.pexels.com/photos/426613/pexels-photo-426613.jpeg);*/\n\n.parent {\n  font-family: 'Abel', sans-serif;\n  color: white;\n  background: linear-gradient( rgba(0, 0, 0, .5), rgba(10, 10, 10, .5)),\n  /*url(/assets/images/light.jpeg);*/\n  url(https://static.pexels.com/photos/52910/pexels-photo-52910.jpeg);\n  font-size: 0;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.parent::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient( rgba(0, 0, 0, .5), rgba(10, 10, 10, .5)),\n  /*url(/assets/images/light.jpeg);*/\nurl(https://static.pexels.com/photos/52910/pexels-photo-52910.jpeg);\n  background-size: cover;\n  background-position: center;\n  opacity: .6;\n  -webkit-animation-name: bright;\n          animation-name: bright;\n  -webkit-animation-duration: 20s;\n          animation-duration: 20s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n}\n\n#topSection {\n  position: relative;\n  text-align: center;\n}\n\n#topSection h1{\n  font-size:2.2em;\n  font-family: 'Euphoria Script', cursive;\n  margin:0;\n}\n\n#topSection p{\n  font-size:1.5em;\n  margin:0;\n}\n\n#topSection div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n\n}\n\n.avatar {\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, .8);\n  left:50%;\n  margin-top:10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100px;\n  text-align: center;\n  width: 100px;\n  z-index: 2;\n}\n\nnav {\n  background-color: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  bottom: 0;\n  text-align: right;\n  position: fixed;\n  right: 0;\n  z-index: 1;\n}\n\nnav ul {\n  text-decoration: none;\n}\n\nnav ul li {\n  padding: 16px;\n  color: white;\n  display: inline;\n}\n\nnav ul li a {\n  font-family: 'Abel', sans-serif;\n  color: white;\n  text-decoration: none;\n}\n\n.full {\n  background-color: transparent;\n  display: inline-block;\n  font-size: 16px;\n  height: 100vh;\n  vertical-align: top;\n  width: 100%;\n  -webkit-transform: translateZ( 0);\n  transform: translateZ( 0);\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\na[id=\"topSection\"]:target~.full {\n  -webkit-transform: translateX( 0px);\n  transform: translateX( 0px);\n}\n\na[id=\"careerTimelineSection\"]:target~.full {\n  -webkit-transform: translateX( -100vw);\n  transform: translateX( -100vw);\n}\n\na[id=\"technologiesSection\"]:target~.full {\n  -webkit-transform: translateX( -200vw);\n  transform: translateX( -200vw);\n}\n\na[id=\"projectsSection\"]:target~.full {\n  -webkit-transform: translateX( -300vw);\n  transform: translateX( -300vw);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav>\n  <ul>\n    <li><a href=\"#topSection\">HOME</a></li>\n    <li><a href=\"#careerTimelineSection\">CAREER</a></li>\n    <li><a href=\"#technologiesSection\">TECH STACK</a></li>\n    <li><a href=\"#projectsSection\">PROJECTS</a></li>\n  </ul>\n</nav>\n\n<div class=\"parent\">\n\n  <a id=\"topSection\"></a>\n  <a id=\"careerTimelineSection\"></a>\n  <a id=\"technologiesSection\"></a>\n  <a id=\"projectsSection\"></a>\n\n\n  <section id=\"topSection\" class=\"full\">\n    <div>\n      <h1>{{title}}</h1><small>BCompSci, BSc(Pharm)</small>\n      <p>Android Developer, Web Developer</p>\n      <img src=\"assets/images/avatar2.jpg\" class=\"avatar\">\n\n    </div>\n  </section>\n\n  <section id=\"careerTimelineSection\" class=\"full orange\">\n    <h2>Career Timeline</h2>\n    <ul>\n      <li *ngFor=\"let career of careerTimeline | async\">\n        {{career.label}}\n        {{career.start}} - {{career.end}}:\n        {{career.milestone}}\n      </li>\n    </ul>\n  </section>\n\n  <section id=\"technologiesSection\" class=\"full pink\">\n    <h2>Technologies</h2>\n    <ul>\n      <li *ngFor=\"let technology of technologies | async\">\n        {{technology.name}}: {{technology.proficiency}}\n      </li>\n    </ul>\n  </section>\n\n  <section id=\"projectsSection\" class=\"full green\">\n    <h2>Projects</h2>\n    <ul>\n      <li *ngFor=\"let project of projects | async\">\n        <a href=\"{{project.url}}\">{{project.name}}</a>\n        <div>{{project.details}}</div>\n        <div *ngIf=\"project.github\">\n          {{project.github}}\n        </div>\n        <ul *ngIf=\"project.technologies\">\n          <h3>Technologies</h3>\n          <li *ngFor=\"let technology of project.technologies\">\n            {{technology}}\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("../../../../../src/app/service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    /**
     * DataService is Injectable, Angular supplies an instance of DataService on
     * constructing AppComponent element
     */
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'Kelvin Watson';
    }
    /**
     * Lifecycle callback
     */
    AppComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    /**
     * Data retreival is abstracted to DataService
     */
    AppComponent.prototype.getData = function () {
        this.getCareerTimeline();
        this.getTechnologies();
        this.getProjects();
    };
    AppComponent.prototype.getCareerTimeline = function () {
        var _this = this;
        this.dataService.getCareerTimeline().then(function (careerTimeline) { return _this.careerTimeline = careerTimeline; });
    };
    AppComponent.prototype.getTechnologies = function () {
        var _this = this;
        this.dataService.getTechnologies().then(function (technologies) { return _this.technologies = technologies; });
    };
    AppComponent.prototype.getProjects = function () {
        var _this = this;
        this.dataService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_data_service__ = __webpack_require__("../../../../../src/app/service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//MODULES




//COMPONENTS

//SERVICES

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].firebase, 'kelvinwatson'),
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__service_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(db) {
        this.db = db;
    }
    DataService.prototype.getCareerTimeline = function () {
        return Promise.resolve(this.db.list('careerTimeline/'));
    };
    DataService.prototype.getTechnologies = function () {
        return Promise.resolve(this.db.list('technologies/'));
    };
    DataService.prototype.getProjects = function () {
        return Promise.resolve(this.db.list('projects/'));
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBPY4upYrG7KTASEOS8McUXgZii4Mb0Gr4",
        authDomain: "kelvinwatson-53204.firebaseapp.com",
        databaseURL: "https://kelvinwatson-53204.firebaseio.com",
        projectId: "kelvinwatson-53204",
        storageBucket: "",
        messagingSenderId: "565863015502"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http:/localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map