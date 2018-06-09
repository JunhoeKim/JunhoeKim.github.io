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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: auto;\n  text-align: center;\n}\n\n.side {\n  float: left;\n  /* margin: 20px 0px; */\n  margin: 20px auto;\n}\n\napp-main-graph {\n  float: left;\n  margin: 20px 50px;\n}\n\napp-detail-panel {\n  float: left;\n  width: 40%;\n  height: 700px;\n  margin: 20px 0px;\n  padding: 20px;\n  border: solid 2px #b2b2b2;\n  border-radius: 5px;\n}\n\n#main-view {\n  width: 100%;\n  height: 800px;\n}\n\n#map-view {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1> Deutsches Bildungssystem </h1>\n    </div>\n  </div>\n</div>\n\n<app-main-graph (courseNode)=\"onSelectCourseNode($event)\"></app-main-graph>\n\n<div class=\"side\">\n  <app-edu-side-panel></app-edu-side-panel>\n  <app-user-modal *ngIf=\"currState <= 1\" (userData)=\"applyUserData($event)\"></app-user-modal>\n</div>\n\n<ng-container *ngIf=\"currState >= 2\">\n  <app-detail-panel></app-detail-panel>\n</ng-container>\n<div id=\"map-view\">\n  <ng-container *ngIf=\"currState >= 3\">\n    <app-map-view [userData]=\"userData\"></app-map-view>\n  </ng-container>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recommend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommend.service */ "./src/app/recommend.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(recommendService, stateService) {
        this.recommendService = recommendService;
        this.stateService = stateService;
        this.currentRecommendResult = null;
        this.isDetailMode = false;
        this.schoolInfos = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateService.stateObservable.subscribe(function (state) {
            _this.currState = state;
        });
    };
    AppComponent.prototype.applyUserData = function (userData) {
        this.userData = userData;
        this.recommendService.recommendJobs(userData);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_recommend_service__WEBPACK_IMPORTED_MODULE_1__["RecommendService"], _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_graph_main_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-graph/main-graph.component */ "./src/app/main-graph/main-graph.component.ts");
/* harmony import */ var _edu_side_panel_edu_side_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edu-side-panel/edu-side-panel.component */ "./src/app/edu-side-panel/edu-side-panel.component.ts");
/* harmony import */ var _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-modal/user-modal.component */ "./src/app/user-modal/user-modal.component.ts");
/* harmony import */ var _detail_panel_detail_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail-panel/detail-panel.component */ "./src/app/detail-panel/detail-panel.component.ts");
/* harmony import */ var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-view/map-view.component */ "./src/app/map-view/map-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_graph_main_graph_component__WEBPACK_IMPORTED_MODULE_6__["MainGraphComponent"],
                _edu_side_panel_edu_side_panel_component__WEBPACK_IMPORTED_MODULE_7__["EduSidePanelComponent"],
                _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_8__["UserModalComponent"],
                _detail_panel_detail_panel_component__WEBPACK_IMPORTED_MODULE_9__["DetailPanelComponent"],
                _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_10__["MapViewComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/area.service.ts":
/*!*********************************!*\
  !*** ./src/app/area.service.ts ***!
  \*********************************/
/*! exports provided: AreaService, LatLng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLng", function() { return LatLng; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreaService = /** @class */ (function () {
    function AreaService() {
        this.AREAS = [
            'Berlin',
            'Hamburg',
            'Niedersachsen',
            'NRW'
        ];
        this.LNTLNGS = [
            { lat: 52.52, lng: 13.40 },
            { lat: 53.55, lng: 9.99 },
            { lat: 52.63, lng: 9.845 },
            { lat: 51.43, lng: 7.661 }
        ];
        this.areaSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("Overall");
        this.areaObservable = this.areaSource.asObservable();
        this.currentArea = 'Overall';
    }
    AreaService.prototype.changeCurrentArea = function (area) {
        this.areaSource.next(area);
        this.currentArea = area;
    };
    AreaService.prototype.getCurrAreaLntLng = function () {
        var currIndex = this.AREAS.indexOf(this.currentArea);
        return this.LNTLNGS[currIndex];
    };
    AreaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AreaService);
    return AreaService;
}());

var LatLng = /** @class */ (function () {
    function LatLng() {
    }
    return LatLng;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.GRAPH_WIDTH = 1100;
    Constants.GRAPH_DETAIL_WIDTH = 300;
    Constants.GRAPH_HEIGHT = 700;
    Constants.GRAPH_MARGIN_SIDE = 70;
    Constants.GRAPH_MARGIN_TOP = 33;
    Constants.GRAPH_MARGIN_BOTTOM = 2;
    Constants.GRAPH_RECT_MARGIN = 5;
    Constants.GRAPH_RECT_HEIGHT_UNIT = 24;
    Constants.COURSE_KINDERGARTEN = 'Kindergarten';
    Constants.COURSE_GRUNDSCHULE = 'Grundschule';
    Constants.COURSE_GYMNASIUM = 'Gymnasium';
    Constants.COURSE_OBERSCHULE = "Oberschule";
    Constants.COURSE_GEASAMTSCHULE = "Gesamtschule";
    Constants.COURSE_GEASAMTSCHULE_INTEGRIERTE = "Gesamtschule Integrierte und kooperative";
    Constants.COURSE_REALSCHULE = "Realschule";
    Constants.COURSE_HAUPTSCHULE = "Hauptschule";
    Constants.COURSE_INTEGRIERTE_SEKUNDARSCHULE = "Integrierte Sekundarschule";
    Constants.COURSE_GEMEINSCHAFTSSCHULE = "Gemeinschaftsschule";
    Constants.COURSE_STADTTEILSCHULE = "Stadtteilschule";
    Constants.COURSE_GYMNASIALE = 'Gymnasiale Oberstufe';
    Constants.COURSE_BERUFSOBERSCHULE = "Berufsoberschule";
    Constants.COURSE_FACHOBERSCHULE = 'Fachoberschule';
    Constants.COURSE_BERUFSFACHSCHULE = "Berufsfachschule";
    Constants.COURSE_BETRIEB = "Berufsschule und Betrieb";
    Constants.COURSE_VORBEREITUNG = "Vorbereitung";
    Constants.COURSE_BQL = "BQL, BC, IBA";
    Constants.COURSE_FACHGYMNASIUM = "Fachgymnasium";
    Constants.COURSE_BERUFSEINSTIEGSSCHULE = "Berufseinstiegsschule";
    Constants.COURSE_UNIVERSITAT = 'Universitat and gleichwertige Institutionen';
    Constants.COURSE_BERUFSAKADEMIE = "Berufsakadamie";
    Constants.COURSE_FACHHOCH = 'Fachhoch- und Verwaltungshochschule';
    Constants.COURSE_WEITERBILDUNG = 'Weiterbildung';
    return Constants;
}());



/***/ }),

/***/ "./src/app/course-node.ts":
/*!********************************!*\
  !*** ./src/app/course-node.ts ***!
  \********************************/
/*! exports provided: CourseNode, CourseInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNode", function() { return CourseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInfo", function() { return CourseInfo; });
/* harmony import */ var _data_course_info_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/course-info-data */ "./src/app/data/course-info-data.ts");

var CourseNode = /** @class */ (function () {
    function CourseNode(layer, name, fromAge, toAge) {
        this.layer = layer;
        this.name = name;
        this.fromAge = fromAge;
        this.toAge = toAge;
        this.courseInfo = CourseInfo.fromData(name);
    }
    return CourseNode;
}());

var CourseInfo = /** @class */ (function () {
    function CourseInfo(commonInfos, certificates, options) {
        this.commonInfos = commonInfos;
        this.certificates = certificates;
        this.options = options;
    }
    CourseInfo.fromData = function (courseName) {
        var currCourseInfo = _data_course_info_data__WEBPACK_IMPORTED_MODULE_0__["courseInfoData"][courseName];
        return new this(currCourseInfo.commonInfos, currCourseInfo.certificates, currCourseInfo.options);
    };
    return CourseInfo;
}());



/***/ }),

/***/ "./src/app/d3.service.ts":
/*!*******************************!*\
  !*** ./src/app/d3.service.ts ***!
  \*******************************/
/*! exports provided: D3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return D3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _graph_course_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph/course-link */ "./src/app/graph/course-link.ts");
/* harmony import */ var _graph_layout_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph/layout-manager */ "./src/app/graph/layout-manager.ts");
/* harmony import */ var _edu_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edu-structure.service */ "./src/app/edu-structure.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var D3Service = /** @class */ (function () {
    function D3Service(eduService) {
        this.eduService = eduService;
        this.links = [];
        this.layoutManager = new _graph_layout_manager__WEBPACK_IMPORTED_MODULE_3__["LayoutManager"](this.eduService.courseNodes);
    }
    D3Service.prototype.translate = function (x, y) {
        return "translate(" + x + ", " + y + ")";
    };
    D3Service.prototype.applySVG = function (svgRef, width, height) {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgRef.nativeElement)
            .attr("width", width)
            .attr("height", height);
    };
    D3Service.prototype.initLinks = function (paths) {
        var _this = this;
        paths.forEach(function (path, index) {
            path.paths.forEach(function (subPath) {
                _this.links.push(new _graph_course_link__WEBPACK_IMPORTED_MODULE_2__["CourseLink"](subPath, _this.layoutManager, index));
            });
        });
        this.svg.selectAll(".link")
            .data(this.links)
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("d", function (d) { return d.getPath(); })
            .attr('fill', 'none')
            .attr('stroke-width', 3)
            .attr('stroke', function (d) { return d.isPrev ? 'green' : 'red'; });
    };
    D3Service.prototype.deleteLinks = function () {
        this.links.length = 0;
        this.svg.selectAll('.link')
            .data(this.links)
            .exit()
            .remove();
    };
    D3Service.prototype.updateLinks = function () {
        this.svg.selectAll(".link")
            .data(this.links)
            .transition(d3__WEBPACK_IMPORTED_MODULE_1__["transition"]().duration(400).ease(d3__WEBPACK_IMPORTED_MODULE_1__["easeLinear"]))
            .attr("d", function (d) { return d.getPath(); });
    };
    D3Service.prototype.updateLinksWithNoTransition = function () {
        this.svg.selectAll(".link")
            .data(this.links)
            .attr("d", function (d) { return d.getPath(); });
    };
    D3Service.prototype.trimLinks = function (detailIndex) {
        this.links = this.links.filter(function (link) { return detailIndex == link.detailIndex; });
        this.svg.selectAll('.link')
            .data(this.links)
            .exit()
            .remove();
        this.updateLinksWithNoTransition();
    };
    D3Service.prototype.highlightLinks = function (pathIndex) {
        this.svg.selectAll(".link")
            .data(this.links)
            .attr("stroke-width", 2)
            .style("opacity", 0.5);
        this.svg.selectAll(".link")
            .data(this.links)
            .transition(d3__WEBPACK_IMPORTED_MODULE_1__["transition"]().duration(400))
            .attr("stroke-width", function (d) {
            if (d.detailIndex == pathIndex) {
                return 6;
            }
            else {
                return 2;
            }
        })
            .style("opacity", function (d) {
            if (d.detailIndex === pathIndex) {
                return 1;
            }
            else {
                return 0.5;
            }
        });
    };
    D3Service.prototype.initYAxis = function () {
        var courseNodes = this.eduService.courseNodes;
        var minAge = 3;
        var maxAge = 31;
        var yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_HEIGHT - _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_BOTTOM, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_TOP])
            .domain([minAge, maxAge]);
        this.svg.append('g')
            .attr("transform", this.translate(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_SIDE / 2, 0))
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](yScale));
        this.svg.append('text')
            .attr('class', 'legend')
            .attr("transform", this.translate(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_SIDE / 2 - 50, 10))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Jahre");
    };
    D3Service.prototype.setYAxisMode = function (isDetail) {
        var width = isDetail ? _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_DETAIL_WIDTH : _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_WIDTH;
        var rightMargin = isDetail ? _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_SIDE / 3 : _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_SIDE / 2;
        var minAge = 3;
        var maxAge = 31;
        var yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_HEIGHT - _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_BOTTOM, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_TOP])
            .domain([minAge, maxAge]);
        this.svg.select('g')
            .attr("transform", this.translate(width - rightMargin, 0))
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](yScale));
        this.svg.select('.legend')
            .attr("transform", this.translate(width - rightMargin - 50, 10));
    };
    D3Service.prototype.changeDetailMode = function (recommendResult, detailIndex) {
        var careerPath = recommendResult.paths[detailIndex];
        this.layoutManager.trimRects(careerPath);
        this.trimLinks(detailIndex);
        this.svg
            .attr('width', _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_DETAIL_WIDTH);
        this.setYAxisMode(true);
    };
    D3Service.prototype.changeOverviewMode = function (paths, pathIndex) {
        this.layoutManager.generateRects();
        this.deleteLinks();
        this.initLinks(paths);
        this.highlightLinks(pathIndex);
        this.setYAxisMode(false);
        this.svg
            .attr('width', _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_WIDTH);
    };
    D3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_edu_structure_service__WEBPACK_IMPORTED_MODULE_4__["EduStructureService"]])
    ], D3Service);
    return D3Service;
}());



/***/ }),

/***/ "./src/app/data/course-info-data.ts":
/*!******************************************!*\
  !*** ./src/app/data/course-info-data.ts ***!
  \******************************************/
/*! exports provided: courseInfoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseInfoData", function() { return courseInfoData; });
var courseInfoData = {
    "Kindergarten": {
        "commonInfos": [
            "Elementarstufe des Bildungssystems",
            "Betreuung, Bildung und Erziehung der Kinder"
        ],
        "certificates": [],
        "options": []
    },
    "Grundschule": {
        "commonInfos": [
            "Bildung des Fundaments für weiterführende Schulbildung (Gymnasium, Real-, Haupt- und Gesamtschule) durch Vermittlung grundlegender Lern- und Arbeitsformen, mathematische, sprachliche und sachunterrichtliche Kenntnisse "
        ],
        "certificates": [],
        "options": []
    },
    "Gymnasium": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (nach 10. Klasse)",
            "Hauptschulabschluss (nach 9. Klasse)"
        ],
        "options": [
            "nahtloser Übergang zur gymnasialen Oberstufe",
            "Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden",
            "Allgemeine Hochschulreife (Abitur) (nach 12. Klasse) Oder Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule und Berufskolleg oder Lehre/Ausbildung"
        ]
    },
    "Oberschule": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (nach 10. Klasse)",
            "Hauptschulabschluss (nach 9. Klasse)"
        ],
        "options": [
            "nahtloser Übergang zur gymnasialen Oberstufe",
            "Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule und Berufskolleg oder Lehre/Ausbildung"
        ]
    },
    "Gesamtschule": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (nach 10. Klasse)",
            "Hauptschulabschluss (nach 9. Klasse)"
        ],
        "options": [
            "nahtloser Übergang zur gymnasialen Oberstufe",
            "Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule und Berufskolleg oder Lehre/Ausbildung"
        ]
    },
    "Gesamtschule Integrierte und kooperative": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (nach 10. Klasse)",
            "Hauptschulabschluss (nach 9. Klasse)"
        ],
        "options": [
            "nahtloser Übergang zur gymnasialen Oberstufe",
            "Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule und Berufskolleg oder Lehre/Ausbildung"
        ]
    },
    "Realschule": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (nach 10. Klasse)",
            "Hauptschulabschluss (nach 9. Klasse)"
        ],
        "options": [
            "Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule, Berufskolleg, gymnasiale Oberstufe (mittels Qualifikation) oder Lehre/Ausbildung"
        ]
    },
    "Hauptschule": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (nach 10. Klasse)",
            "Hauptschulabschluss (nach 9. Klasse)"
        ],
        "options": [
            "Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule, Berufskolleg, gymnasiale Oberstufe (mittels Qualifikation) oder Lehre/Ausbildung"
        ]
    },
    "Integrierte Sekundarschule": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden",
            "Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)"
        ],
        "options": [
            "Berechtigung zum Besuch der Universität und gleichwertigen Institutionen"
        ]
    },
    "Gemeinschaftsschule": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden",
            "Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)"
        ],
        "options": [
            "Berechtigung zum Besuch der Universität und gleichwertigen Institutionen"
        ]
    },
    "Stadtteilschule": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden",
            "Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)"
        ],
        "options": [
            "Berechtigung zum Besuch der Universität und gleichwertigen Institutionen"
        ]
    },
    "Gymnasiale Oberstufe": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden",
            "Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)"
        ],
        "options": [
            "Berechtigung zum Besuch der Universität und gleichwertigen Institutionen"
        ]
    },
    "Berufsoberschule": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (nach 11. Klasse)",
            "Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)"
        ],
        "options": [
            "Berechtigung zum Besuch der Universität und gleichwertigen Institutionen"
        ]
    },
    "Fachoberschule": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (nach 12. Klasse)",
            "Allgemeine Hochschulreife (Abitur) (nach 13. Klasse)"
        ],
        "options": [
            "Berechtigung zum Besuch der Universität und gleichwertigen Institutionen wie Fachhochschulen"
        ]
    },
    "Berufsfachschule": {
        "commonInfos": [],
        "certificates": [
            "Berufsschulabschluss"
        ],
        "options": [
            "Weiterbildung oder Berechtigung zum Besuch mancher Universitäten möglich"
        ]
    },
    "Berufsschule und Betrieb": {
        "commonInfos": [],
        "certificates": [
            "Berufsschulabschluss"
        ],
        "options": [
            "Berufsschulabschluss','Weiterbildung oder Berechtigung zum Besuch mancher Universitäten möglich"
        ]
    },
    "Vorbereitung": {
        "commonInfos": [],
        "certificates": [
            "Berufsschulabschluss"
        ],
        "options": [
            "Berufsschulabschluss','Weiterbildung oder Berechtigung zum Besuch mancher Universitäten möglich"
        ]
    },
    "Universitat and gleichwertige Institutionen": {
        "commonInfos": [],
        "certificates": [
            "Bachelor-",
            "Masterabschluss",
            "Doktor (Weiterbildung) (derzeitig nur an Universitäten möglich)"
        ],
        "options": [
            "Einstieg in den Beruf",
            "Tätigkeit in die Forschung",
            "Weiterbildung"
        ]
    },
    "Berufsakadamie": {
        "commonInfos": [],
        "certificates": [
            "Diplom- (jeweilige Studiengang) oder Bachelor"
        ],
        "options": [
            "Master-Abschluss an einer Universität oder einer Fachhochschule",
            "Einstieg in den Beruf",
            "Weiterbildung"
        ]
    },
    "Fachhoch- und Verwaltungshochschule": {
        "commonInfos": [],
        "certificates": [
            "Bachelor",
            "und Masterabschluss"
        ],
        "options": [
            "Einstieg in den Beruf oder Weiterbildung"
        ]
    },
    "Weiterbildung": {
        "commonInfos": [
            "Vertiefung und Erweiterung der vorhandenen beruflichen Vorbildung Fachliche Ausrichtung bisher weiter vertieft oder Fortbildung im eigenen Fach: Erweiterung vorhandenen Wissens bzw",
            "Kompetenzen Formen der beruflichen Weiterbildung: Ärztliche Weiterbildung, APO-IT, Ph. D., Habilitation, Verwaltungs- und Wirtschaftsakademie, Meisterprüfung, Staatlich geprüfter Betriebswirt, staatlich geprüfter Gestalter im Handwerk, Staatlich geprüfter Restaurator im Handwerk, Staatlich geprüfter Techniker, Corporate University, Betriebsinformatiker, Lerninseln, Weiterbildende, nicht-konsekutive Master¬studiengänge"
        ],
        "certificates": [],
        "options": []
    },
    "BQL, BC, IBA": {
        "commonInfos": [
            'Berufsqualifizierende Lehrgänge',
            'Vorbereitung für den Beushc einer Berufsfachschule'
        ],
        "certificates": [],
        "options": []
    },
    "Fachgymnasium": {
        "commonInfos": [
            'Berufsqualifizierende Lehrgänge',
            'Vorbereitung für den Beushc einer Berufsfachschule'
        ],
        "certificates": [],
        "options": []
    },
    "Berufseinstiegsschule": {
        "commonInfos": [
            'Berufsqualifizierende Lehrgänge',
            'Vorbereitung für den Beushc einer Berufsfachschule'
        ],
        "certificates": [],
        "options": []
    }
};


/***/ }),

/***/ "./src/app/data/course-node-data.ts":
/*!******************************************!*\
  !*** ./src/app/data/course-node-data.ts ***!
  \******************************************/
/*! exports provided: courseNodeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseNodeData", function() { return courseNodeData; });
/* harmony import */ var _course_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../course-node */ "./src/app/course-node.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");


var courseNodeData = {
    "Overall": [
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](0, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_KINDERGARTEN, 3, 5)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](1, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GRUNDSCHULE, 6, 9)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIUM, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GEASAMTSCHULE, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_REALSCHULE, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_HAUPTSCHULE, 10, 15)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIALE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSOBERSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHOBERSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSFACHSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BETRIEB, 17, 19)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_UNIVERSITAT, 20, 25),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSAKADEMIE, 20, 25),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHHOCH, 20, 25)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](5, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_WEITERBILDUNG, 26, 29)
        ]
    ],
    "Berlin": [
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](0, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_KINDERGARTEN, 3, 5)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](1, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GRUNDSCHULE, 6, 11)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIUM, 12, 18),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_INTEGRIERTE_SEKUNDARSCHULE, 12, 18),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GEMEINSCHAFTSSCHULE, 12, 18),
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIALE, 19, 21),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSOBERSCHULE, 19, 21),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHOBERSCHULE, 19, 21),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSFACHSCHULE, 19, 21),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BETRIEB, 19, 21),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BQL, 19, 20)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_UNIVERSITAT, 22, 27),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSAKADEMIE, 22, 27),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHHOCH, 22, 27)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](5, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_WEITERBILDUNG, 28, 30)
        ]
    ],
    "Niedersachsen": [
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](0, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_KINDERGARTEN, 3, 5)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](1, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GRUNDSCHULE, 6, 9)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIUM, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_OBERSCHULE, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GEASAMTSCHULE_INTEGRIERTE, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_REALSCHULE, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_HAUPTSCHULE, 10, 15)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIALE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSOBERSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHOBERSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSFACHSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BETRIEB, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSEINSTIEGSSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHGYMNASIUM, 17, 19)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_UNIVERSITAT, 20, 25),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSAKADEMIE, 20, 25),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHHOCH, 20, 25)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](5, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_WEITERBILDUNG, 26, 29)
        ]
    ],
    "Hamburg": [
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](0, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_KINDERGARTEN, 3, 5)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](1, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GRUNDSCHULE, 6, 9)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIUM, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_STADTTEILSCHULE, 10, 16)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIALE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSOBERSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHOBERSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSFACHSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BETRIEB, 17, 19)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_UNIVERSITAT, 20, 25),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSAKADEMIE, 20, 25),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHHOCH, 20, 25)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](5, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_WEITERBILDUNG, 26, 29)
        ]
    ],
    "NRW": [
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](0, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_KINDERGARTEN, 3, 5)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](1, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GRUNDSCHULE, 6, 9)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIUM, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GEASAMTSCHULE, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_REALSCHULE, 10, 16),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_HAUPTSCHULE, 10, 15)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_GYMNASIALE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSOBERSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHOBERSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSFACHSCHULE, 17, 19),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BETRIEB, 17, 19)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_UNIVERSITAT, 20, 25),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_BERUFSAKADEMIE, 20, 25),
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_FACHHOCH, 20, 25)
        ],
        [
            new _course_node__WEBPACK_IMPORTED_MODULE_0__["CourseNode"](5, _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].COURSE_WEITERBILDUNG, 26, 29)
        ]
    ],
};


/***/ }),

/***/ "./src/app/data/flex-font.ts":
/*!***********************************!*\
  !*** ./src/app/data/flex-font.ts ***!
  \***********************************/
/*! exports provided: flexFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexFont", function() { return flexFont; });
var flexFont = function () {
    var divs = document.getElementsByClassName("flex-font");
    console.log(divs);
    console.log(divs.namedItem('div'));
    console.log(divs.item(0));
    console.log(divs[0]);
    /*
    divs.forEach(div => {
      var relFontsize = div.offsetWidth * 0.07;
      div.style.fontSize = relFontsize + 'px';
      console.log(div.style.fontSize);
    });
    */
};


/***/ }),

/***/ "./src/app/data/school-info-data.ts":
/*!******************************************!*\
  !*** ./src/app/data/school-info-data.ts ***!
  \******************************************/
/*! exports provided: schoolInfoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schoolInfoData", function() { return schoolInfoData; });
var schoolInfoData = {
    'Polizist im gehobenen Dienst:': [
        {
            name: 'Polizeiakademie Niedersachsen',
            latlng: { lat: 51.427, lng: 9.644 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                ' Du hast die deutsche Staatsbürgerschaft, die eines anderen EU-Staates, eines Staates aus dem europäischen Wirtschaftsraum oder Du bist im Besitz einer gültigen Niederlassungserlaubnis. Darüber hinaus sind bei einem dringenden dienstlichen Interesse weitere Einzelfallregelungen möglich.',
                ' Du hast das Abitur, eine Fachhochschulreife oder einen als gleichwertig anerkannten Bildungsabschluss.',
                ' Du hast sechs Jahre Englischunterricht besucht oder kannst ein Zertifikat über eine abgelegte Prüfung gemäß des gemeinsamen europäischen Referenzrahmens für Sprachen, Level B 1 (entspricht dem Leistungsstand der Klasse 10, Sekundarstufe 1) vorlegen.',
                ' Du bist gerichtlich nicht bestraft.',
                ' Du bist am Tag der Einstellung nicht älter als 31 Jahre.',
                ' Du bist als Bewerberin mindestens 1,63 m und als Bewerber mindestens 1,68 m groß (Abweichungen nach unten sind im Einzelfall bis zu vier Zentimetern möglich).',
                ' Du bist im Besitz der Fahrerlaubnis der Klasse B.',
                ' Du hast das Jugendschwimmabzeichen in Bronze (oder höherwertig).',
                ' Du bist darüber hinaus gesund und sportlich.'
            ],
            curriculums: [
                'https://www.polizei-studium.de/studium,35.html'
            ],
            reviews: [
                ' Die Studieninhalte sind genau so, wie man sie im Dienst brauchen wird. Die Dozenten sind wie an jeder Uni. Es gibt besonders tolle und welche, die man nicht so mag. Die Bibliothek ist zwar klein, bietet aber genau das, was man im Studium braucht. Nur ist leider die Mensa nicht ansprechend. Das Essen ist ziemlich teuer und die Qualität ziemlich schlecht. Dafür wurde jetzt eine neue Sporthalle gebaut. Sie sieht echt super aus. Für die neuen Jahrgänge könnte sie echt ein Highlight sein. Aber vorallem hat sich im Studiengang viel geändert. Ich werde dieses Jahr noch eine Abschlussprüfung haben. Die wird wahrscheinlich für die folgenden Jahrgänge angeschafft. Das Studium wird sich sehr ändern und das in meinen Augen ins Positive. Die Studieninhalte bleiben aber gleich.',
                'Lehrpersonal: 4/5',
                ' Lebenshaltungskosten: 736 €'
            ]
        },
        {
            name: 'Akademie der Polizei Hamburg',
            latlng: { lat: 53.603, lng: 10.005 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife',
                'Fachhochschulreife',
                'Weitere Anforderungen:',
                'Das Höchstalter beträgt 34 Jahre bei Einstellung',
                'die Mindestkörpergröße beträgt 160 cm',
                'keine sichtbaren Körpermodifikationen (z.B. Tätowierungen oder Flesh-Tunnel), die beim Tragen der Uniform (langärmeliges Diensthemd, Rundhalsausschnitt beim T-Shirt) sichtbar sind oder die eine besondere Eigengefährdung im polizeilichen Alltag begründen',
                'Fahrerlaubnis der Klasse B muss spätestens zum Ende des Studiums vorliegen',
                'Schwimmnachweis (Schwimmabzeichen in Bronze oder Jugendschwimmabzeichen in Bronze/Freischwimmer) ',
                'Polizeidiensttauglichkeit',
                'Erfolgreiche Teilnahme am Einstellungsverfahren',
                'Verfassungstreue'
            ],
            curriculums: [
                'Studieninhalte: https://akademie-der-polizei.hamburg.de/contentblob/4334106/02c8819681e6f18a77774b5b96abd2ce/data/la-i-ausbildungs-und-pruefungsordnung.pdf'
            ],
            reviews: [
                'Super interessant, nicht alltäglich. Viele neue Inhalte werden angeboten. Die Dozenten bereiten praxisrelevante Fälle vor und vermischen diese mit einigen Beispielen. Jeder ist bemüht die Studenten mitzuziehen und ausreichende Erklärung zu geben. Ein abwechslungsreiches Studium.',
                'Lehrpersonal: 4/5',
                'Lebenshaltungskosten: bis zu 1150 €'
            ]
        },
        {
            name: ' Hochschule für Wirtschaft und Recht Berlin ',
            latlng: { lat: 52.485, lng: 13.338 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                ' Deutsche/r im Sinne des Artikel 116 des Grundgesetzes der Bundesrepublik Deutschland oder Staatsangehörige/r eines Mitgliedslandes der Europäischen Union ist (Für Angehörige anderer Nationalitäten gelten Sonderregelungen – bei Bedarf bitte erfragen.),',
                ' die Gewähr dafür bietet, dass sie/er jederzeit für die freiheitliche demokratische Grundordnung im Sinne des Grundgesetzes und der Verfassung von Berlin eintritt,',
                'den Besitz einer Fahrerlaubnis für Personenkraftwagen mit Schaltgetriebe nachweist (muss in der Ausbildung bis zum Ende des 3. Semesters bzw. im Studium bis zum Ende des 2. Semesters nachgereicht werden), ',
                ' die Fähigkeit besitzt, eine Strecke von mindestens 200 m ohne Unterbrechung schwimmen zu können und einen entsprechenden Schwimmfähigkeitsnachweis erbringt (z. B. Schwimmabzeichen “Bronze”)',
                'als Bewerberin mindestens 160 cm und als Bewerber mindestens 165 cm groß ist, ',
                'die Einstellungsprüfung besteht, ',
                'nach polizeiärztlicher Untersuchung vollzugsdiensttauglich ist. Auch Brillenträger können eingestellt werden, wenn eine für den Polizeivollzugsdienst ausreichende Sehfähigkeit nach einer Untersuchung durch den Polizeiarzt festgestellt wird. Die Regelungen für die Mindestsehleistungen im Polizeivollzugsdienst entnehmen Sie bitte den Hinweisen zur Polizeidiensttauglichkeit.',
                'nach ihrer/seiner Persönlichkeit für den Polizeivollzugsdienst geeignet ist (einwandfreier Leumund, insbesondere keine Vorstrafen),'
            ],
            curriculums: [
                'https://www.hwr-berlin.de/fachbereich-polizei-und-sicherheitsmanagement/studiengaenge/polizeivollzugsdienst-bachelor/#c22960'
            ],
            reviews: [
                ' Das Studium erfordert viel Disziplin, ist aber machbar. Gelegentlich stößt man an seine Grenzen, aber man lernt sehr viel dazu. Viele Dozenten gehen auf die sehr unterschiedlichen Wissensstände und Bedarfe der Studenten ein und passen Ihre Vorlesungen inhaltlich entsprechend an. Man hat jederzeit die Möglichkeit Fragen zu stellen.',
                'Lehrpersonal: 5/5',
                'Lebenshaltungskosten: bis zu 760,2 €'
            ]
        },
        {
            name: 'Polizei NRW',
            latlng: { lat: 51.205, lng: 6.962 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Vorliegen des Abiturs oder Fachabiturs',
                'Nachweis 6 Jahre Englischunterricht ab Sekundarstufe I oder Sprachkenntnisse der EU-Amtssprache Englisch mit Level B1',
                'Nachweis Schwimmabzeichen mind. Bronze',
                'Tag der Einstellung darf 37. Lebensjahr noch nicht vollendet haben',
                'BMI darf nicht kleiner als 18 und nicht größer sein als 27,5',
                'Mindestgröße für Frauen und Männer bei 163 cm',
                'Sehfähigkeit: Bis zum 20. Lebensjahr 50 % der Restsehschärfe auf jedem Auge, ab dem 20. Lebensjahr mind. 30 % der Sehschärfe',
                'Fahrerlaubnis Klasse B für Fahrzeuge mit Schaltgetriebe als beglaubigte Kopie',
                'Deutsches Sportabzeichen mind. Bronze',
                'Jugendliche: 800-m-Lauf oder Dauer-/Geländelauf (hier muss über eine bestimmte Zeit ununterbrochen gelaufen werden), Erwachsene: 3.000-m-Lauf oder 10.000-m-Lauf.  (Nach der Vollendung 18. Lebensjahr diese Nachweise erforderlich) '
            ],
            curriculums: [
                'https://www.polizeibewerbung.nrw.de/'
            ],
            reviews: [
                'Es gibt sehr viele interessante und praxisrelevante Studieninhalte. Das Rechtswesen spielt dabei eine wichtige Rolle allerdings war das am Anfang des Studiums neu für mich mit Gesetzestexten zu arbeiten.Die erste große Hürde war dann die ersten Klausuren zu meistern und nicht in einen Zweitversuch zu müssen. Das hat bei mir leider in einen von fünf Fächern nicht geklappt. Also musste man nocheinmal lernen und weiter vier Wochen auf dein Ergebnis warten...Am Ergebnistag gab es sowohl positive als auch negative Nachrichten. Positiv ich hatte bestanden, negativ zwei aus meinem Kurs leider nicht. Diese mussten direkt ihre Kündigung unterschreiben.Aber bis jetzt läuft das Studium gut und ich kann es jedem empfehlen der sich für den Polizeiberuf interessiert!',
                'Lehrpersonal: 4/5',
                'Lebenshaltungskosten: bis zu 822,00 €'
            ]
        }
    ],
    'Sportwissenschaften': [
        {
            name: 'Humboldt-Universität zu Berlin',
            latlng: { lat: 53.489, lng: 13.397 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Sportpraktische Affinität und Sporteignung: Nachweis von insgesamt mindestens 33 Notenpunkten im Unterrichtsfach Sport aus 3 Halbjahren der letzten vier Halbjahre des Abiturs (Qualifikationsphase) bzw. entsprechende schulische Leistungen auf einem vergleichbaren Qualifikationsniveau. Bei Belegung des Faches Sport als Leistungskurs genügt bereits ein Leistungsstand von insgesamt mindestens 30 Notenpunkten. Oder bestandener Sporteignungstest einer anderen Hochschule',
                'Sporttauglichkeit: ärztliches Attest (nicht älter als 1 Jahr)'
            ],
            curriculums: [
                'https://www.hu-berlin.de/de/studium/beratung/angebot/sgb/sportmono'
            ],
            reviews: [
                'Es lohnt sich an der HU Sportwissenschaft zu studieren. Das Institut besteht aus einem Team bestehend aus sympathischen, jungen und klugen Köpfen. Man lernt wahnsinnig viel über sportliche Themen wie alles rundum Bewegung, aber auch viel über Bildung und Lehrmethoden, was sehr spannend für mich gewesen war.',
                'Lehrpersonal: 4/5'
            ]
        }
    ],
    'Psychologie:': [
        {
            name: 'University of Applied Sciences Europe ',
            latlng: { lat: 53.550, lng: 9.933 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife oder Fachhochschulreife inkl. praktischen Teil',
                'Erfolgreiches Aufnahmeverfahren',
                'Persönliches Bewerbungsgespräch',
                'Fundierte Deutsch- und Englischkenntnisse',
                'Keinen NC'
            ],
            curriculums: [
                'http://www.bits-hochschule.de/files/downloads/PSych._B.Sc_.pdf'
            ],
            reviews: [
                ' Das Fächern-Spektrum ist vielfältig und bunt. Die besprochenen Themen haben viel Bezug zur Realität und man kann sich gut in die Themen sich hineinversetzen. Das Studium ist durchaus anspruchsvoll, aber mit einer Portion Motivation, Disziplin und Interesse ist dieses Studium durchaus zu schaffen. ',
                'Lehrpersonal: 4/5',
                ' Lebenshaltungskosten: bis zu 1150 €'
            ]
        }
    ],
    'International Management': [
        {
            name: 'Hochschule Düsseldorf ',
            latlng: { lat: 51.246, lng: 6.791 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Abitur (Allgemeine Hochschulreife)/Fachabitur',
                'Vorpraktikum (12 Wochen)',
                'Nachweis qualifizierter Englischkenntnisse',
                'NC: 2.0 (neuster Stand)'
            ],
            curriculums: [
                ' Studieninhalte: https://wiwi.hs-duesseldorf.de/studium/studiengaenge/bachelor-international-management/studieninhalt-aufbau/aufbau-und-inhalte'
            ],
            reviews: [
                ' Gute, anerkannte Hochschule mit sehr guten Dozenten und dem Angebot dual oder berufsbegleitend zu studieren. Würde das Studium jedem weiterempfehlen, der nebenberuflich/dual eine Weiterbildung. Die Kombination von Studium und gleichzeitiger Berufserfahrung ist bei den allermeisten Unternehmen hoch angesehen und eröffnet tolle Karrieremöglichkeiten.',
                'Lehrpersonal: 4/5',
                'Lebenshaltungskosten: ~ 900 Euro'
            ]
        },
        {
            name: 'Hochschule Bonn-Rhein-Sieg',
            latlng: { lat: 50.780, lng: 7.181 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife oder Fachhochschulreife',
                'Oder berufliche Qualifikation oder gleichwertige anerkannte Vorbildung',
                'Nachweis qualifizierter Englischkenntnisse'
            ],
            curriculums: [
                ' Studieninhalte: https://www.h-brs.de/de/wiwi/international-business'
            ],
            reviews: [
                ' Im Studium beschäftigt man sich mit der Frage, wie sich Menschen in einem ökonomischen Umfeld verhalten. So erfährt man welche Kaufentscheidungen Menschen treffen oder wie ein Unternehmen den passenden Bewerber finden kann. Je nach Schwerpunkt kannst man sein Wissen in einem der Bereiche weiter vervollständigen. Mit der Wahl meines Studiengangs bin ich mehr als zufrieden.',
                'Lehrpersonal: 4/5',
                ' Lebenshaltungskosten: 700 - 800€'
            ]
        }
    ],
    'Betriebswirtschaftslehre': [
        {
            name: 'Universität zu Köln ',
            latlng: { lat: 50.928, lng: 6.928 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife',
                'Mathematisches Verständnis',
                'gute sprachliche Ausdrucksfähigkeit in Deutsch und Englisch',
                'NC: 1.3 (neuster Stand) '
            ],
            curriculums: [
                ' Studieninhalte: https://www.wiso.uni-koeln.de/de/studium/bachelor/bwl-bachelor/'
            ],
            reviews: [
                ' Es wird viel Grundlagenwissen vermittelt, die Schwerpunktmodule sind eine gute Hilfe um später eine Vertiefung zu finden und um eine Richtung nach dem Bachelorstudium einzuschlagen. Grundlegend gefällt mir allerdings der reine Frontalunterricht nicht so gut, mehr Praxis wäre toll, ist aber natürlich bei der riesigen Zahl Studierenden schwierig.',
                'Lehrpersonal: 3,5/5',
                'Lebenshaltungskosten: bis zu 822,00 €'
            ]
        },
        {
            name: 'Rheinisch-Wesfälische Technische Hochschule (RWTH) Aachen ',
            latlng: { lat: 50.777, lng: 6.0777 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'deutsche Hochschulzugangsberechtigung',
                'gute Kenntnisse der englischen Sprache',
                'gutes mathematisches Grundverständnis erforderlich',
                'Nachweis der Teilnahme am RWTH-Studienfeld-SelfAssessment Wirtschaftswissenschaften muss bei der Einschreibung vorgewiesen werden',
                'NC: 1,9 (neuster Stand) '
            ],
            curriculums: [
                'http://www.rwth-aachen.de/go/id/bpxl?#aaaaaaaaaaabpxm'
            ],
            reviews: [
                'Sowohl die Studieninhalte als auch das Studentenleben gefallen mir super! Wir behandeln zeitgerechte relevante Themen in den Vorlesungen. Ich bin sehr froh über die Entscheidung, meine Heimat verlassen und in Aachen meine perfekte Studentenstadt gefunden zu haben. Obwohl die Uni so groß ist, ist sie immer noch top organisiert.',
                'Lehrpersonal: 5/5',
                'Lebenshaltungskosten: bis zu 1.110 €'
            ]
        },
        {
            name: 'Universität Bielefeld ',
            latlng: { lat: 52.036, lng: 8.495 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Hochschulzugangsberechtigung',
                'Unterliegt Zulassungsbeschränkung (Numerus Clausus), daher gesonderte Bewerbung bei der Stiftung für Hochschulzulassung (hochschulstart.de) und dann Bewerbung an der Universität Bielefeld',
                'NC: 2.0 (neuster Stand)'
            ],
            curriculums: [
                'https://ekvv.uni-bielefeld.de/sinfo/publ/variante/22966220'
            ],
            reviews: [
                ' Ich finde sowohl die Uni als auch das Fach einfach perfekt! Macht Spaß, ist abwechslungsreich und man ist freigestellt, auf was man sich spezialisiert. Ich finde es super, dass die Uni ein Campus ist und man somit auch in Kontakt mit anderen Studiengängen ist.',
                'Lehrpersonal: 5/5',
                ' Lebenshaltungskosten: 1392€'
            ]
        },
        {
            name: 'Universität Duisburg-Essen ',
            latlng: { lat: 51.427, lng: 6.801 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur) ',
                '12 Wochen berufspraktische Tätigkeit',
                'Solide Englischkenntnisse',
                'Mathematische Affinität',
                'Starkes Interesse am aktiven und passiven Arbeiten mit Texten (Buchwissenschaften)'
            ],
            curriculums: [
                'https://www.msm.uni-due.de/studium/bachelor-of-science-in-betriebswirtschaftslehre/'
            ],
            reviews: [
                'Manche der Fächer, welche man in der BWL absolvieren muss sind super spannend und andere sind sehr langweilig. So ist es mal angenehm und mal muss man sich durchbeißen. Grundsätzlich braucht man für das Studium viel Fleiß und Lernbereitschaft, sonst packt man es nicht!',
                'Lehrpersonal: 3,5/5',
                ' Lebenshaltungskosten: 750-850€'
            ]
        },
        {
            name: 'Humboldt Universität zu Berlin ',
            latlng: { lat: 52.518, lng: 13.393 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Hochschulzugangsberechtigung: Abitur',
                'NC 1.8 (neuster Stand)'
            ],
            curriculums: [
                'https://www.hu-berlin.de/de/studium/beratung/angebot/sgb/bwl/'
            ],
            reviews: [
                'Man meint BWL ist trocken, aber hier an der Humboldt-Universität lerne ich viele essentielle Themen und Trends, die von den kompetenten Dozenten im Detail besprochen und mit lebhaften Beispielen untermauert werden. Ich kann mich gar nicht beschweren. Ich lerne sehr viel, was für meine Zukunft und Karriere sehr bedeutsam ist.',
                'Lehrpersonal: 5/5',
                ' Lebenshaltungskosten: bis zu 760,2 €'
            ]
        },
        {
            name: 'Freie Universität Berlin ',
            latlng: { lat: 52.447, lng: 13.285 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Hochschulzugangsberechtigung (Abitur)',
                'Nachweis von Englischkenntnissen (Niveau B2)',
                'NC: 1.5 (neuster Stand)'
            ],
            curriculums: [
                'https://www.fu-berlin.de/studium/studienangebot/grundstaendige/betriebswirtschaftslehre_mono/index.html'
            ],
            reviews: [
                ' Nach drei schönen, aber auch anstrengenden Jahren an der FU bereue ich es nicht, dieses Studium gewählt zu haben. Zwar stimmt es, dass BWL an der FU durchaus anspruchsvoller ist, jedoch habe ich gerade dadurch während meines Studiums Disziplin, Ehrgeiz und ein Zeitmanagement entwickelt, welches ich vorher von mir selbst nicht kannte. Nachdem ich vorher BWL in Cottbus begonnen hatte, war ich anfangs von dem Arbeitsaufwand und den teilweise sehr anspruchsvollen Klausuren (Mathe, Jahresabschluss&Steuern..) überfordert. Mit entsprechendem Engagement und Fleiß lief es dann aber auch wieder gut. Ich habe zum Glück auch schnell mitbekommen, dass es durchaus üblich ist 1-2 Semster länger zu studieren und sich somit mehr Zeit für die Module nehmen zu können (Qualität vs. Quantität). Insofern kann ich zukünftigen Studenten nur empfehlen: Lieber mal eine Klausur weniger im Semester, dafür aber bessere Noten und auch das ein oder andere Praktikum! Vor allem die ersten Semester sind hart, da man sich durch die Grundmodule kämpfen muss. Danach macht es umso mehr Spaß, da man sich je nach Interesse in den Bereichen Wirtschaftsinformatik, Controlling, Marketing, Management, Personal etc. vertiefen kann. Außerdem sind die Kurse hier deutlich leerer und bestehen teilweise nur noch aus 30-50 Studenten. Ein großer Pluspunkt an der FU ist auch die Mensa sowie die beiden großen, gut ausgestatteten Bibliotheken.',
                'Lehrpersonal: 4/5',
                'Lebenshaltungskosten: bis zu 760,2 €'
            ]
        }
    ]
};


/***/ }),

/***/ "./src/app/detail-panel/detail-panel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/detail-panel/detail-panel.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbutton.btn.btn-light.back {\n  margin: 0;\n  width: 100%;\n}\n\nbutton.btn.btn-light {\n  width: 350px;\n  margin: 10px 0px;\n}\n\nbutton.btn.btn-light:hover {\n  background-color: #447dd3;\n  color: white;\n}\n\nspan.card-title {\n  display: flex;\n  line-height: 50px;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  width: 100%;\n  margin: 20px 0px;\n}\n\n.card-header {\n  background-color: #447dd3;\n  font-weight: 400;\n  font-size: 1.2em;\n}\n\n.card-body {\n  min-height: 150px;\n  max-height: 350px;\n  overflow: scroll;\n}"

/***/ }),

/***/ "./src/app/detail-panel/detail-panel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/detail-panel/detail-panel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class=\"btn btn-light back\" (click)=\"clickBackBtn()\">Zurück</button>\n</div>\n<ng-container *ngIf=\"currState == 2\">\n  <div>\n    <span class=\"card-title\">\n      <h3>Detail-Ansicht über das Studienfach</h3>\n    </span>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"currState == 3\">\n  <div class=\"card\">\n    <div class=\"card-header text-white\">\n      Empfohlene Studienfächer\n    </div>\n    <div class=\"card-body\">\n      <ng-container *ngFor=\"let majorInfo of majorInfos let i = index\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"selectMajorInfo(majorInfo, i)\">{{ majorInfo.name }}</button>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"selectedMajorInfo != null && currState == 4\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ selectedMajorInfo.name }} </h4>\n    <p class=\"card-text\">\n      {{ selectedMajorInfo.description }}\n    </p>\n    <h4 class=\"card-title\">Lernaufwand: {{ selectedMajorInfo.learningEffort }}</h4>\n    <h4 class=\"card-title\">Durchschnitts-NC-Wert: {{ selectedMajorInfo.ncValue }}</h4>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/detail-panel/detail-panel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/detail-panel/detail-panel.component.ts ***!
  \********************************************************/
/*! exports provided: DetailPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPanelComponent", function() { return DetailPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _major_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../major-info */ "./src/app/major-info.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _recommend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recommend.service */ "./src/app/recommend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailPanelComponent = /** @class */ (function () {
    function DetailPanelComponent(stateService, recommendService) {
        this.stateService = stateService;
        this.recommendService = recommendService;
        this.majorInfos = [_major_info__WEBPACK_IMPORTED_MODULE_1__["MajorInfo"].NONE];
    }
    DetailPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateService.stateObservable.subscribe(function (state) {
            if (state == _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].MAJOR) {
                _this.majorInfos = _this.recommendService.getMajorInfos();
            }
            else if (state == _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].SCHOOL) {
            }
            _this.currState = state;
        });
    };
    DetailPanelComponent.prototype.clickBackBtn = function () {
        switch (this.currState) {
            case _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].DETAIL:
                this.stateService.changeState(_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].OVERVIEW);
                this.majorInfos = null;
                this.selectedMajorInfo = null;
                break;
            case _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].MAJOR:
                this.stateService.changeState(_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].DETAIL);
                this.majorInfos = null;
                this.selectedMajorInfo = null;
                break;
            case _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].SCHOOL:
                this.stateService.changeState(_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].DETAIL);
                this.majorInfos = null;
                this.selectedMajorInfo = null;
                break;
        }
    };
    DetailPanelComponent.prototype.selectMajorInfo = function (majorInfo, index) {
        this.stateService.changeState(_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"].SCHOOL);
        this.recommendService.selectMajorInfo(majorInfo, index);
        this.selectedMajorInfo = majorInfo;
    };
    DetailPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-panel',
            template: __webpack_require__(/*! ./detail-panel.component.html */ "./src/app/detail-panel/detail-panel.component.html"),
            styles: [__webpack_require__(/*! ./detail-panel.component.css */ "./src/app/detail-panel/detail-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _recommend_service__WEBPACK_IMPORTED_MODULE_3__["RecommendService"]])
    ], DetailPanelComponent);
    return DetailPanelComponent;
}());



/***/ }),

/***/ "./src/app/edu-side-panel/edu-side-panel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edu-side-panel/edu-side-panel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Oldenburg');\n#dropdown {\n  display: block;\n  padding: 7px 8px;\n  width: 300px;\n  margin: 0px 10px;\n  position: relative;\n  cursor: pointer;\n  border-left: 4px solid #739cda;\n  background: #fff;\n  font-size: 1em;\n  color: #656565;\n  font-weight: normal;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 2px rgba(0,0,0,0.3);\n  transition: all 0.15s linear;\n}\n#dropdown:hover { color: #898989; }\n#dropdown.open {\n  background: #5a90e0;\n  color: #fff;\n  border-left-color: #6c6d70;\n}\n#dropdown ul {\n  position: absolute;\n  top: 70%;\n  left: -4px;\n  width: 300px;\n  padding: 0px 0px;\n  pointer-events: none;\n  opacity: 0;\n  border-left: 4px solid #8e9196;\n  background: #fff;\n  box-shadow: 1px 1px 2px rgba(0,0,0,0.3);\n  list-style-type: none;\n  transition: height 0.3s, opacity 0.3s, top 0.3s;;\n}\n#dropdown ul li { font-size: 0.9em; }\n#dropdown ul li a {\n  text-decoration: none;\n  display: block;\n  color: #447dd3;\n  padding: 5px 8px;\n}\n#dropdown ul li a:hover {\n  color: #6fa0e9;\n  background: #e7f0f7;\n}\n#dropdown ul.open {\n  pointer-events: all;\n  display:block;\n  opacity: 1;\n  top: 100%;\n}\n#detail-view {\n  margin: 20px 10px;\n  width: 300px;\n  transition: margin 0.3s;\n}\n#detail-view.open {\n  margin: 160px 10px 0px 10px;\n  transition: margin 0.3s;\n}\n.card-body ul {\n  margin: 0;\n  padding: 0;\n}\n.card-body li {\n  color: #447dd3;\n  margin-left: 0.8em;\n}\n.card-body li span {\n  margin-left: -0.2em;\n  color: black;\n}\n.elem {\n  margin-top: 15px;\n}\n.card-header {\n  background-color: #447dd3;\n  font-weight: 400;\n  font-size: 1.2em;\n}\n.card-body {\n  min-height: 150px;\n  max-height: 350px;\n  overflow-y: auto;\n}\n.btn-light {\n  width: 250px;\n  margin: 10px 0px;\n}\n.btn-light:hover {\n  background-color: #447dd3;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/edu-side-panel/edu-side-panel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edu-side-panel/edu-side-panel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #dropdown *ngIf=\"currState <= 1\" id=\"dropdown\" class=\"ddmenu\" (click)=\"toggleDropdown()\" [class.open]=\"dropdownOpened\">\n  <ng-container *ngIf=\"!isAreaSelected\">\n    Wählen Sie den Bereich aus\n  </ng-container>\n  <ng-container *ngIf=\"isAreaSelected\">\n    {{ selectedArea }}\n  </ng-container>\n  <ul [class.open]=\"dropdownOpened\">\n    <li *ngFor=\"let area of areas\">\n      <ng-container *ngIf=\"area == selectedArea; else other\">\n        <a (click)=\"onClickArea(area)\">{{area}} (ausgewählt)</a>\n      </ng-container>\n      <ng-template #other>\n        <a (click)=\"onClickArea(area)\">{{area}}</a>\n      </ng-template>\n    </li>\n  </ul>\n</div>\n\n<ng-container *ngIf=\"currState == 0\">\n  <div id=\"detail-view\" [class.open]=\"dropdownOpened\">\n    <ng-container *ngIf=\"selectedCourseNode\">\n      <ng-container *ngIf=\"selectedCourseNode.courseInfo.certificates.length != 0\">\n        <div class=\"card elem\">\n          <div class=\"card-header text-white\">\n            Mögliche Schulabschlüsse\n          </div>\n          <div class=\"card-body\">\n            <ul>\n              <ng-container *ngFor=\"let certificate of selectedCourseNode.courseInfo.certificates\">\n                <li>\n                  <span>{{certificate}}</span>\n                </li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card elem\">\n          <div class=\"card-header text-white\">\n            Anschließende Möglichkeiten:\n          </div>\n          <div class=\"card-body\">\n            <ul>\n              <ng-container *ngFor=\"let option of selectedCourseNode.courseInfo.options\">\n                <li>\n                  <span>{{option}} </span>\n                </li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"selectedCourseNode.courseInfo.commonInfos.length != 0\">\n        <div class=\"card elem\">\n          <div class=\"card-header text-white\">\n            Allgemeine Informationen\n          </div>\n          <div class=\"card-body\">\n            <ul>\n              <ng-container *ngFor=\"let commonInfo of selectedCourseNode.courseInfo.commonInfos\">\n                <li>\n                  <span>{{commonInfo}}</span>\n                </li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n</ng-container>\n\n<ng-container *ngIf=\"currState != 0\">\n  <div id=\"detail-view\" [class.open]=\"dropdownOpened\">\n    <ng-container *ngIf=\"currState == 1\">\n      <div class=\"card elem\">\n        <div class=\"card-header text-white\">\n          Suche einen Job aus\n        </div>\n        <div class=\"card-body\">\n          <ng-container *ngFor=\"let jobInfo of jobInfos let i = index\">\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"changeCurrentJobIndex(i)\">{{ jobInfo.jobMetadata.name }}</button>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"card elem\">\n      <div class=\"card-header text-white\">\n        Jobinformationen\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Durchschnittl. Gehalt</h5>\n        <p class=\"card-text\">\n          {{ jobInfos[currJobIndex].jobMetadata.salary }}\n        </p>\n        <h5 class=\"card-title\">Arbeit & Freizeit: </h5>\n        <p class=\"card-text\">\n          {{ jobInfos[currJobIndex].jobMetadata.balance }}\n        </p>\n        <h5 class=\"card-title\"> Generelle Beschreibung: </h5>\n        <ng-container *ngFor=\"let review of jobInfos[currJobIndex].jobMetadata.reviews\">\n          <p class=\"card-text\">\n            {{ review }}\n          </p>\n        </ng-container>\n        <ng-container *ngFor=\"let generalDesc of jobInfos[currJobIndex].jobMetadata.generalDescs\">\n          <p class=\"card-text\">\n            {{ generalDesc }}\n          </p>\n        </ng-container>\n        <h5 class=\"card-title\"> Generelle Bewertung: </h5>\n        <ng-container *ngFor=\"let review of jobInfos[currJobIndex].jobMetadata.generalReviews\">\n          <p class=\"card-text\">\n            {{ review }}\n          </p>\n          </ng-container> \n      </div>\n    </div>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/edu-side-panel/edu-side-panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edu-side-panel/edu-side-panel.component.ts ***!
  \************************************************************/
/*! exports provided: EduSidePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EduSidePanelComponent", function() { return EduSidePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _area_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../area.service */ "./src/app/area.service.ts");
/* harmony import */ var _recommend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recommend.service */ "./src/app/recommend.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _edu_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edu-structure.service */ "./src/app/edu-structure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EduSidePanelComponent = /** @class */ (function () {
    function EduSidePanelComponent(areaService, recommendService, stateService, eduService) {
        this.areaService = areaService;
        this.recommendService = recommendService;
        this.stateService = stateService;
        this.eduService = eduService;
        this.isAreaSelected = false;
        this.dropdownOpened = false;
        this.jobInfos = [];
        this.currJobIndex = 0;
        this.areas = areaService.AREAS;
    }
    EduSidePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.areaObservable.subscribe(function (area) {
            _this.selectedArea = area;
        });
        this.stateService.stateObservable.subscribe(function (state) {
            if (state == _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"].OVERVIEW) {
                _this.selectedCourseNode = null;
            }
            _this.currState = state;
        });
        this.recommendService.recommendJobInfoObservable.subscribe(function (jobInfos) {
            _this.jobInfos = jobInfos;
        });
        this.recommendService.currJobIndexObservable.subscribe(function (index) {
            _this.currJobIndex = index;
        });
        this.recommendService.selectedCourseNodeObservable.subscribe(function (courseNode) {
            _this.selectedCourseNode = courseNode;
        });
        this.eduService.courseNodeObservable.subscribe(function (courseNode) {
            _this.selectedCourseNode = courseNode;
        });
    };
    EduSidePanelComponent.prototype.toggleDropdown = function () {
        this.dropdownOpened = !this.dropdownOpened;
    };
    EduSidePanelComponent.prototype.ngOnChanges = function (changes) {
    };
    EduSidePanelComponent.prototype.onClickArea = function (area) {
        this.areaService.changeCurrentArea(area);
        this.isAreaSelected = true;
    };
    EduSidePanelComponent.prototype.changeCurrentJobIndex = function (index) {
        this.recommendService.changeJobIndex(index);
    };
    EduSidePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edu-side-panel',
            template: __webpack_require__(/*! ./edu-side-panel.component.html */ "./src/app/edu-side-panel/edu-side-panel.component.html"),
            styles: [__webpack_require__(/*! ./edu-side-panel.component.css */ "./src/app/edu-side-panel/edu-side-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_area_service__WEBPACK_IMPORTED_MODULE_1__["AreaService"], _recommend_service__WEBPACK_IMPORTED_MODULE_2__["RecommendService"], _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"], _edu_structure_service__WEBPACK_IMPORTED_MODULE_4__["EduStructureService"]])
    ], EduSidePanelComponent);
    return EduSidePanelComponent;
}());



/***/ }),

/***/ "./src/app/edu-structure.service.ts":
/*!******************************************!*\
  !*** ./src/app/edu-structure.service.ts ***!
  \******************************************/
/*! exports provided: EduStructureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EduStructureService", function() { return EduStructureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_course_node_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/course-node-data */ "./src/app/data/course-node-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EduStructureService = /** @class */ (function () {
    function EduStructureService() {
        this.selectCourseNodeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentArea = 'Berlin';
        this.courseNodeObservable = this.selectCourseNodeSubject.asObservable();
        this.courseNodes = _data_course_node_data__WEBPACK_IMPORTED_MODULE_2__["courseNodeData"]["Overall"];
    }
    EduStructureService.prototype.applyArea = function (area) {
        var newData = _data_course_node_data__WEBPACK_IMPORTED_MODULE_2__["courseNodeData"][area];
        this.courseNodes.forEach(function (nodes, layer) {
            var newNodes = newData[layer];
            if (nodes.length > newNodes.length) {
                nodes.length = newNodes.length;
            }
            nodes.forEach(function (node, index) {
                if (newNodes[index].name == node.name) {
                    node.fromAge = newNodes[index].fromAge;
                    node.toAge = newNodes[index].toAge;
                }
                else {
                    nodes.splice(index, 1, newNodes[index]);
                }
            });
            if (nodes.length < newNodes.length) {
                for (var i = nodes.length; i < newNodes.length; i++) {
                    nodes.push(newNodes[i]);
                }
            }
        });
        this.currentArea = area;
    };
    EduStructureService.prototype.selectCourseNode = function (courseNode) {
        this.selectCourseNodeSubject.next(courseNode);
    };
    EduStructureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EduStructureService);
    return EduStructureService;
}());



/***/ }),

/***/ "./src/app/graph/course-link.ts":
/*!**************************************!*\
  !*** ./src/app/graph/course-link.ts ***!
  \**************************************/
/*! exports provided: CourseLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseLink", function() { return CourseLink; });
var CourseLink = /** @class */ (function () {
    function CourseLink(subPath, layoutManager, detailIndex) {
        this.subPath = subPath;
        this.layoutManager = layoutManager;
        this.detailIndex = detailIndex;
        this.isPrev = false;
        this.isPrev = subPath.isPrev;
    }
    CourseLink.prototype.getPath = function () {
        var _this = this;
        var rects = this.layoutManager.rects;
        var fromRect = null;
        var toRect = null;
        rects.forEach(function (rectArray) {
            rectArray.forEach(function (rect) {
                if (rect.courseNode.name == _this.subPath.from) {
                    fromRect = rect;
                }
                if (rect.courseNode.name == _this.subPath.to) {
                    toRect = rect;
                }
            });
        });
        var sourceX = fromRect.getStartPos()[0];
        var sourceY = fromRect.getStartPos()[1];
        var targetX = toRect.getEndPos()[0];
        var targetY = toRect.getEndPos()[1];
        return "M" + sourceX + "," + sourceY
            + "C" + sourceX + "," + (sourceY + targetY) / 2
            + " " + targetX + "," + (sourceY + targetY) / 2
            + " " + targetX + "," + targetY;
    };
    CourseLink.prototype.getArrowId = function (index) {
        return 'url(#arrow_' + index + ')';
    };
    return CourseLink;
}());



/***/ }),

/***/ "./src/app/graph/layer.ts":
/*!********************************!*\
  !*** ./src/app/graph/layer.ts ***!
  \********************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
var Layer = /** @class */ (function () {
    function Layer(from, to, colCount) {
        this.from = from;
        this.to = to;
        this.colCount = colCount;
    }
    return Layer;
}());



/***/ }),

/***/ "./src/app/graph/layout-manager.ts":
/*!*****************************************!*\
  !*** ./src/app/graph/layout-manager.ts ***!
  \*****************************************/
/*! exports provided: LayoutManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutManager", function() { return LayoutManager; });
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer */ "./src/app/graph/layer.ts");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rect */ "./src/app/graph/rect.ts");


var LayoutManager = /** @class */ (function () {
    function LayoutManager(courseNodes) {
        this.courseNodes = courseNodes;
        this.rects = [];
        this.selectedCourseNodes = [];
        this.generateRects();
    }
    LayoutManager.prototype.generateRects = function () {
        var _this = this;
        this.layers = [];
        this.courseNodes.forEach(function (arr) {
            var minAge = Math.min.apply(null, arr.map(function (node) { return node.fromAge; }));
            var maxAge = Math.max.apply(null, arr.map(function (node) { return node.toAge; }));
            _this.layers.push(new _layer__WEBPACK_IMPORTED_MODULE_0__["Layer"](minAge - 3, maxAge - 2, arr.length));
        });
        this.rects = [];
        this.courseNodes.forEach(function (arr, index) {
            var layer = _this.layers[index];
            var rectArray = [];
            arr.forEach(function (node, i) {
                rectArray.push(new _rect__WEBPACK_IMPORTED_MODULE_1__["Rect"](node, layer, i));
            });
            _this.rects.push(rectArray);
        });
    };
    LayoutManager.prototype.updateRects = function (isDetailMode) {
        var _this = this;
        var currCourseNodes = isDetailMode ? this.selectedCourseNodes : this.courseNodes;
        this.layers = [];
        currCourseNodes.forEach(function (arr) {
            var minAge = Math.min.apply(null, arr.map(function (node) { return node.fromAge; }));
            var maxAge = Math.max.apply(null, arr.map(function (node) { return node.toAge; }));
            _this.layers.push(new _layer__WEBPACK_IMPORTED_MODULE_0__["Layer"](minAge - 3, maxAge - 2, arr.length));
        });
        currCourseNodes.forEach(function (arr, index) {
            var layer = _this.layers[index];
            if (_this.rects[index].length > arr.length) {
                _this.rects[index].length = arr.length;
            }
            _this.rects[index].forEach(function (rect, i) {
                rect.updateRect(arr[i], layer, i);
            });
            for (var i = _this.rects[index].length; i < arr.length; i++) {
                _this.rects[index].push(new _rect__WEBPACK_IMPORTED_MODULE_1__["Rect"](arr[i], layer, i));
            }
        });
    };
    LayoutManager.prototype.trimRects = function (careerPath) {
        var _this = this;
        careerPath.paths.forEach(function (path, index) {
            _this.rects[index] = _this.rects[index].filter(function (rect) { return (rect.courseNode.name == path.from || rect.courseNode.name == path.to); });
            _this.rects[index + 1] = _this.rects[index + 1].filter(function (rect) { return (rect.courseNode.name == path.from || rect.courseNode.name == path.to); });
            _this.rects[index][0].goToDetailMode();
            _this.rects[index + 1][0].goToDetailMode();
        });
    };
    return LayoutManager;
}());



/***/ }),

/***/ "./src/app/graph/rect.ts":
/*!*******************************!*\
  !*** ./src/app/graph/rect.ts ***!
  \*******************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");

var Rect = /** @class */ (function () {
    function Rect(courseNode, layer, index) {
        this.courseNode = courseNode;
        this.layer = layer;
        this.index = index;
        var graphWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_MARGIN_SIDE * 2;
        var rectWidth = (graphWidth - (layer.colCount - 1) * _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_MARGIN) / layer.colCount;
        var rectHeight = (this.courseNode.toAge - this.courseNode.fromAge + 1)
            * _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_HEIGHT_UNIT - _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_MARGIN;
        this.x = index * (rectWidth + _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_MARGIN) + _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_MARGIN_SIDE;
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_HEIGHT - layer.from * _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_HEIGHT_UNIT;
        this.width = rectWidth;
        this.height = rectHeight;
    }
    Rect.prototype.getStartPos = function () {
        return [Math.floor(this.x + this.width / 2), Math.floor(this.y - this.height * 0.71)];
    };
    Rect.prototype.getEndPos = function () {
        return [Math.floor(this.x + this.width / 2), Math.floor(this.y - this.height * 0.31)];
    };
    Rect.prototype.updateRect = function (courseNode, layer, index) {
        this.courseNode = courseNode;
        this.updateInOverviewMode(layer, index);
    };
    Rect.prototype.goToDetailMode = function () {
        this.width = 200;
        this.x = 50;
    };
    Rect.prototype.updateInOverviewMode = function (layer, index) {
        var graphWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_MARGIN_SIDE * 2;
        var rectWidth = (graphWidth - (layer.colCount - 1) * _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_MARGIN) / layer.colCount;
        var rectHeight = (this.courseNode.toAge - this.courseNode.fromAge + 1)
            * _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_HEIGHT_UNIT - _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_MARGIN;
        this.x = index * (rectWidth + _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_MARGIN) + _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_MARGIN_SIDE;
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_HEIGHT - layer.from * _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_HEIGHT_UNIT;
        this.width = rectWidth;
        this.height = rectHeight;
    };
    Rect.prototype.updateInDetailMode = function (layer) {
        var graphWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_DETAIL_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_MARGIN_SIDE * 2;
        var rectWidth = 200;
        var rectHeight = (this.courseNode.toAge - this.courseNode.fromAge + 1) * _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_HEIGHT_UNIT;
        this.x = 50;
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_HEIGHT - layer.from * _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_RECT_HEIGHT_UNIT;
        this.width = rectWidth;
        this.height = rectHeight;
    };
    return Rect;
}());



/***/ }),

/***/ "./src/app/job-info.ts":
/*!*****************************!*\
  !*** ./src/app/job-info.ts ***!
  \*****************************/
/*! exports provided: JobInfo, CareerPath, CareerSubPath, JobMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobInfo", function() { return JobInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerPath", function() { return CareerPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerSubPath", function() { return CareerSubPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobMetadata", function() { return JobMetadata; });
var JobInfo = /** @class */ (function () {
    function JobInfo(jobMetadata, paths) {
        this.jobMetadata = jobMetadata;
        this.paths = paths;
    }
    return JobInfo;
}());

var CareerPath = /** @class */ (function () {
    function CareerPath() {
    }
    return CareerPath;
}());

var CareerSubPath = /** @class */ (function () {
    function CareerSubPath() {
    }
    return CareerSubPath;
}());

var JobMetadata = /** @class */ (function () {
    function JobMetadata() {
    }
    return JobMetadata;
}());



/***/ }),

/***/ "./src/app/main-graph/main-graph.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main-graph/main-graph.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center;\n  width: 100%;\n}\n\n#container {\n  border: 1px #ddd solid;\n  border-radius: 5px;\n}\n\n#ground {\n  position: relative;\n  background: #eee;\n}\n\n#ground.detail-mode {\n  width: 300px;\n}\n\n#svg-ground {\n  position: relative;\n  left: 0;\n  bottom: 0;\n}\n\n.edge {\n  position: absolute;\n}\n\n.box {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  transition-timing-function: linear;\n}\n\n.box.info-mode {\n  transition: 0.5s width, height, top, left linear;\n}\n\n.inner-box {\n  display: flex;\n  position: absolute;\n  border: 1px solid #ddd;\n  background: white;\n  box-sizing: border-box;\n  border-radius: 5px;\n  align-items: center;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  word-wrap: break-word;\n}\n\n.inner-box:hover {\n  transition:all 0.5s;\n  box-shadow:\n    0 5px 10px 0  #00000044;\n}\n\n.inner-box:hover > .text-box {\n  transition:all 0.5s;\n  background-color: #447dd3;\n  color: white;\n}\n\n.inner-box > div {\n  width: 95%;\n  max-width: 200px;\n}\n\n.text-box {\n  display: block;\n  border-radius: 5px;\n  height: 40%;\n  width: 95%;\n  max-width: 200px;\n  font-weight: 500;\n  background-color: #eee;\n}\n\nline {\n  stroke:black;\n  stroke-width: 2px;\n  transition: x2 0.3s;\n}\n\nsvg.consume-events {\n  pointer-events: none;\n}\n\n.card-header {\n  background-color: #447dd3;\n  color: white;\n}\n\n.card-body {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.card-body .btn.btn-light.selected {\n  box-shadow: 0 0 0.2rem #447dd3 inset;\n}\n"

/***/ }),

/***/ "./src/app/main-graph/main-graph.component.html":
/*!******************************************************!*\
  !*** ./src/app/main-graph/main-graph.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <ng-container *ngIf=\"currState == 1\">\n    <div class=\"card-elem\">\n\n    </div>\n    <div class=\"card-header\">\n      empfohlene Arbeit : {{ jobInfos[currJobIndex].jobMetadata.name }}\n    </div>\n    <div class=\"card-body d-flex justify-content-between\">\n      <div class=\"text-left d-flex align-items-center\">\n        Wähle deinen Weg aus\n      </div>\n      <div>\n        <ng-container *ngFor=\"let path of jobInfos[currJobIndex].paths let i = index\">\n          <button class=\"btn btn-light mx-2\" (click)=\"selectPath(i)\" [class.selected]=\"i == currPathIndex\">\n            <span>{{path.name}}</span>\n          </button>\n        </ng-container>\n      </div>\n      <div class=\"text-right\">\n        <button class=\"btn btn-light\" (click)=\"goToDetailMode()\">\n          Gehe zu den Details \n        </button>\n      </div>\n    </div>\n  </ng-container>\n  <div id=\"ground\" [class.detail-mode]=\"currState == 2\">\n    <ng-container *ngFor=\"let rectArray of layoutManager.rects\">\n      <ng-container *ngFor=\"let box of rectArray\">\n        <div [style.left.px]=\"box.x\" [style.top.px]=\"box.y - box.height\" [style.width.px]=\"box.width\" [style.height.px]=\"box.height\"\n          class=\"box\" [class.info-mode]=\"currState == 0\">\n          <div class=\"inner-box d-flex align-items-center justify-content-center\" (click)=\"showInfo(box)\">\n            <div *ngIf=\"currState != 0\" class=\"text-box d-flex align-items-center justify-content-center flex-font\">\n              {{ box.courseNode.name }}\n            </div>\n            <div *ngIf=\"currState == 0\" class=\"flex-font\">\n              {{ box.courseNode.name }}\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n    <svg #svg id=\"svg-ground\" [class.consume-events]=\"currState == 0 || currState == 2\">\n    </svg>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main-graph/main-graph.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main-graph/main-graph.component.ts ***!
  \****************************************************/
/*! exports provided: MainGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGraphComponent", function() { return MainGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../d3.service */ "./src/app/d3.service.ts");
/* harmony import */ var _area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../area.service */ "./src/app/area.service.ts");
/* harmony import */ var _edu_structure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edu-structure.service */ "./src/app/edu-structure.service.ts");
/* harmony import */ var _recommend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recommend.service */ "./src/app/recommend.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _data_flex_font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/flex-font */ "./src/app/data/flex-font.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainGraphComponent = /** @class */ (function () {
    function MainGraphComponent(d3Service, areaService, eduService, stateService, recommendService) {
        this.d3Service = d3Service;
        this.areaService = areaService;
        this.eduService = eduService;
        this.stateService = stateService;
        this.recommendService = recommendService;
    }
    MainGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutManager = this.d3Service.layoutManager;
        this.d3Service.applySVG(this.svg, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_HEIGHT);
        this.d3Service.initYAxis();
        this.areaService.areaObservable.subscribe(function (area) {
            _this.eduService.applyArea(area);
            _this.layoutManager.updateRects(_this.currState >= _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].DETAIL);
            _this.d3Service.updateLinks();
            Object(_data_flex_font__WEBPACK_IMPORTED_MODULE_7__["flexFont"])();
        });
        this.stateService.stateObservable.subscribe(function (state) {
            if (_this.currState == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].OVERVIEW && state == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].DETAIL) {
                _this.d3Service.changeDetailMode(_this.jobInfos[_this.currJobIndex], _this.currPathIndex);
            }
            else if (_this.currState == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].DETAIL && state == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].OVERVIEW) {
                _this.d3Service.changeOverviewMode(_this.jobInfos[_this.currJobIndex].paths, _this.currPathIndex);
            }
            _this.currState = state;
        });
        this.recommendService.recommendJobInfoObservable.subscribe(function (jobInfos) {
            _this.jobInfos = jobInfos;
            _this.currJobIndex = 0;
            _this.currPathIndex = 0;
            _this.d3Service.deleteLinks();
            _this.d3Service.initLinks(jobInfos[_this.currJobIndex].paths);
            _this.d3Service.highlightLinks(_this.currPathIndex);
        });
        this.recommendService.currJobIndexObservable.subscribe(function (jobIndex) {
            _this.currJobIndex = jobIndex;
            _this.currPathIndex = 0;
            _this.d3Service.deleteLinks();
            _this.d3Service.initLinks(_this.jobInfos[jobIndex].paths);
            _this.d3Service.highlightLinks(_this.currPathIndex);
        });
        this.recommendService.currPathIndexObservable.subscribe(function (pathIndex) {
            _this.currPathIndex = pathIndex;
            _this.d3Service.highlightLinks(pathIndex);
        });
    };
    MainGraphComponent.prototype.showInfo = function (selectedRect) {
        if (this.currState == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].INFO) {
            this.eduService.selectCourseNode(selectedRect.courseNode);
        }
        else if (this.currState == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].DETAIL) {
            // 대학교를 골랐을 때
            if (selectedRect.courseNode.layer == 4) {
                this.stateService.changeState(_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].MAJOR);
                // 그 외의 학교
            }
            else {
                this.stateService.changeState(_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].SCHOOL);
            }
        }
    };
    MainGraphComponent.prototype.selectPath = function (index) {
        this.recommendService.changePathIndex(index);
    };
    MainGraphComponent.prototype.highlightPath = function (index) {
        this.d3Service.highlightLinks(index);
    };
    MainGraphComponent.prototype.goToDetailMode = function () {
        this.stateService.changeState(_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].DETAIL);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainGraphComponent.prototype, "svg", void 0);
    MainGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-graph',
            template: __webpack_require__(/*! ./main-graph.component.html */ "./src/app/main-graph/main-graph.component.html"),
            styles: [__webpack_require__(/*! ./main-graph.component.css */ "./src/app/main-graph/main-graph.component.css")]
        }),
        __metadata("design:paramtypes", [_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"],
            _area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"],
            _edu_structure_service__WEBPACK_IMPORTED_MODULE_3__["EduStructureService"],
            _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"],
            _recommend_service__WEBPACK_IMPORTED_MODULE_4__["RecommendService"]])
    ], MainGraphComponent);
    return MainGraphComponent;
}());



/***/ }),

/***/ "./src/app/major-info.ts":
/*!*******************************!*\
  !*** ./src/app/major-info.ts ***!
  \*******************************/
/*! exports provided: MajorInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MajorInfo", function() { return MajorInfo; });
var MajorInfo = /** @class */ (function () {
    function MajorInfo() {
    }
    MajorInfo.NONE = { name: 'none', description: '', ncValue: 0 };
    return MajorInfo;
}());



/***/ }),

/***/ "./src/app/map-view/map-view.component.css":
/*!*************************************************!*\
  !*** ./src/app/map-view/map-view.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map-ground {\n  width: 100%;\n  margin: 50px;\n  height: 400px;\n  float: left;\n}\n\n#gmap {\n  width: 45%;\n  height: 400px;\n  float: left;\n}\n\n.card-header {\n  background: #447dd3;\n  color: white;\n}\n\n#map-panel {\n  width:40%; \n  height:400px;\n  float: left;\n}\n\n#detail-panel {\n  width: 40%;\n  float: left;\n  margin-left: 40px;\n}\n\n#detail-content {\n  height: 350px;\n  overflow: scroll;\n  border: 1px gray solid;\n  border-radius: 5px;\n}\n\n"

/***/ }),

/***/ "./src/app/map-view/map-view.component.html":
/*!**************************************************!*\
  !*** ./src/app/map-view/map-view.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map-ground\">\n  <div #gmap id=\"map-panel\">\n\n  </div>\n  <div id=\"detail-panel\">\n    <div class=\"card-header text-white\">\n      Informationen über die Institution\n    </div>\n    <div class=\"card-body\" id=\"detail-content\">\n      <ng-container *ngIf=\"selectedSchoolInfo == null\">\n        <h4 class=\"card-title\">Wähle deine bevorzugte Bildungsinstitution aus</h4>\n      </ng-container>\n      <ng-container *ngIf=\"selectedSchoolInfo\">\n        <h5 class=\"card-title\">{{selectedSchoolInfo.name}}</h5>\n        <p class=\"card-text\">\n            Entfernung: {{distance}} km\n        </p>\n        <p class=\"card-text\">\n            Dauer: {{ duration }}\n        </p>\n        <h5 class=\"card-title\">Zugangsvoraussetzungen</h5>\n        <ul>\n          <ng-container *ngFor=\"let qualification of selectedSchoolInfo.qualifications\">\n            <li class=\"card-text\">\n              {{ qualification }}\n            </li>\n          </ng-container>\n        </ul>\n        <h5 class=\"card-title\">Curriculum</h5>\n        <ul>\n          <ng-container *ngFor=\"let curriculum of selectedSchoolInfo.curriculums\">\n            <li class=\"card-text\">\n              {{ curriculum }}\n            </li>\n          </ng-container>\n        </ul>\n        <h5 class=\"card-title\">Bewertung</h5>\n        <ul>\n          <ng-container *ngFor=\"let review of selectedSchoolInfo.reviews\">\n            <li class=\"card-text\">\n              {{ review }}\n            </li>\n          </ng-container>\n        </ul>\n      </ng-container>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/map-view/map-view.component.ts":
/*!************************************************!*\
  !*** ./src/app/map-view/map-view.component.ts ***!
  \************************************************/
/*! exports provided: MapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewComponent", function() { return MapViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-data */ "./src/app/user-data.ts");
/* harmony import */ var _area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../area.service */ "./src/app/area.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _recommend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recommend.service */ "./src/app/recommend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapViewComponent = /** @class */ (function () {
    function MapViewComponent(areaService, stateService, recommendService) {
        this.areaService = areaService;
        this.stateService = stateService;
        this.recommendService = recommendService;
        this.schoolMarkers = [];
        this.directionRenderer = new google.maps.DirectionsRenderer();
    }
    MapViewComponent.prototype.ngOnInit = function () {
        //this.currAreaLatLng = this.areaService.getCurrAreaLntLng();
        this.initGoogleMap();
    };
    MapViewComponent.prototype.initGoogleMap = function () {
        var _this = this;
        var mapProp = {
            zoom: 15,
            center: this.areaService.LNTLNGS[0]
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        google.maps.event.addListenerOnce(this.map, 'tilesloaded', function () {
            _this.addUserHomeMarker(_this.map)
                .then(function (homeMarker) {
                _this.homeMarker = homeMarker;
                _this.recommendService.schoolInfoObservable.subscribe(function (schoolInfos) {
                    _this.schoolInfos = schoolInfos;
                    _this.updateGoogleMap();
                });
            })
                .catch(function (error) { return console.log(error); });
        });
    };
    MapViewComponent.prototype.updateGoogleMap = function () {
        var _this = this;
        this.setOnMarkers(null);
        this.homeMarker.setMap(this.map);
        this.schoolMarkers = [];
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(this.homeMarker.getPosition());
        this.schoolInfos.forEach(function (schoolInfo) {
            var marker = new google.maps.Marker({
                map: _this.map,
                position: schoolInfo.latlng,
                animation: google.maps.Animation.DROP,
                icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
            bounds.extend(schoolInfo.latlng);
            marker.addListener('click', function () {
                _this.selectedSchoolInfo = schoolInfo;
                var tempLatLng = new google.maps.LatLng(schoolInfo.latlng.lat, schoolInfo.latlng.lng);
                _this.distance = (google.maps.geometry.spherical.computeDistanceBetween(tempLatLng, _this.homeMarker.getPosition()) / 1000).toFixed(2);
                var directionService = new google.maps.DirectionsService();
                directionService.route({
                    origin: _this.homeMarker.getPosition(),
                    destination: marker.getPosition(),
                    travelMode: google.maps.TravelMode.TRANSIT
                }, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        console.log(response);
                        _this.directionRenderer.setMap(_this.map);
                        _this.directionRenderer.setDirections(response);
                        _this.duration = response.routes[0].legs[0].duration.text;
                    }
                    else {
                        _this.duration = "there are no appropriate routes";
                    }
                });
            });
            _this.schoolMarkers.push(marker);
            _this.map.fitBounds(bounds);
            _this.map.panToBounds(bounds);
        });
        //this.gmapElement.nativeElement.scrollIntoView({bahavior: 'smooth'});
    };
    MapViewComponent.prototype.addUserHomeMarker = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var geocoder = new google.maps.Geocoder();
            //this.userData.address = 'Geeststraße 75, 40589 Düsseldorf'
            var address = _this.userData.address;
            var marker = new google.maps.Marker();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    marker.setPosition(results[0].geometry.location);
                    marker.setMap(map);
                    marker.setAnimation(google.maps.Animation.DROP);
                    resolve(marker);
                }
                else {
                    reject(Error('Geocode was not successful for the following reason: ' + status));
                }
            });
        });
    };
    MapViewComponent.prototype.setOnMarkers = function (map) {
        this.homeMarker.setMap(map);
        this.schoolMarkers.forEach(function (marker) { return marker.setMap(map); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], MapViewComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _user_data__WEBPACK_IMPORTED_MODULE_1__["UserData"])
    ], MapViewComponent.prototype, "userData", void 0);
    MapViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-view',
            template: __webpack_require__(/*! ./map-view.component.html */ "./src/app/map-view/map-view.component.html"),
            styles: [__webpack_require__(/*! ./map-view.component.css */ "./src/app/map-view/map-view.component.css")]
        }),
        __metadata("design:paramtypes", [_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"], _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _recommend_service__WEBPACK_IMPORTED_MODULE_4__["RecommendService"]])
    ], MapViewComponent);
    return MapViewComponent;
}());



/***/ }),

/***/ "./src/app/recommend.service.ts":
/*!**************************************!*\
  !*** ./src/app/recommend.service.ts ***!
  \**************************************/
/*! exports provided: RecommendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendService", function() { return RecommendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-info */ "./src/app/job-info.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_school_info_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/school-info-data */ "./src/app/data/school-info-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecommendService = /** @class */ (function () {
    function RecommendService() {
        this.currJobIndex = 0;
        this.currPathIndex = 0;
        this.currMajorIndex = 0;
        this.recommendJobInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currJobIndexSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currPathIndexSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.courseNodeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.majorIndexSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.schoolInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.recommendJobInfoObservable = this.recommendJobInfoSubject.asObservable();
        this.currJobIndexObservable = this.currJobIndexSubject.asObservable();
        this.currPathIndexObservable = this.currPathIndexSubject.asObservable();
        this.selectedCourseNodeObservable = this.courseNodeSubject.asObservable();
        this.majorIndexObservable = this.majorIndexSubject.asObservable();
        this.schoolInfoObservable = this.schoolInfoSubject.asObservable();
    }
    RecommendService.prototype.changeJobIndex = function (index) {
        this.currJobIndex = index;
        this.currJobIndexSubject.next(index);
    };
    RecommendService.prototype.selectJobIndex = function (index) {
        this.currJobIndexSubject.next(index);
    };
    RecommendService.prototype.changePathIndex = function (index) {
        this.currPathIndex = index;
        this.currPathIndexSubject.next(index);
    };
    RecommendService.prototype.selectCourseNode = function (courseNode) {
        this.selectedCourseNode = courseNode;
        this.courseNodeSubject.next(courseNode);
    };
    RecommendService.prototype.selectMajorInfo = function (majorInfo, index) {
        this.currMajorIndex = index;
        if (majorInfo == null) {
            this.schoolInfoSubject.next([]);
        }
        else {
            this.schoolInfoSubject.next(this.getSchoolInfos(majorInfo, index));
        }
    };
    RecommendService.prototype.recommendJobs = function (userData) {
        var newJobInfos = [
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: 'Polizist/in im gehobenen Dienst',
                salary: 'bis zu 54000€/Jahr',
                balance: 'wenig Freizeit',
                generalDescs: [
                    'überdurchschnittliches Gehalt',
                    'Unkündbar, krisensicher',
                    'automatische Beförderungen möglich',
                    'alle Versicherungen günstiger',
                    'alle Kredite günstiger',
                ],
                generalReviews: [
                    'nach den ersten paar Jahren Einarbeitung wird es ein ziemlich lockerer Job.Frühverrentung ist ebenfalls sehr einfach möglich. Ich habe sehr viel Freude und Spaß bei diesem Job.'
                ]
            }, [
                {
                    name: 'Primär',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                },
                {
                    name: 'Alternative Wege',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                }
            ]),
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: 'Sportpädagoge/Sportpädagogin:',
                salary: 'bis zu 31.200 €/Jahr (Berufsanfänger) im späteren Verlauf 3.800 €/monatlich oder höher möglich',
                balance: 'guter Ausgleich zwischen Arbeit und Freizeit, Generelle Bewertung: Der Beruf als Sportspädagoge ist sehr vielfältig. Arbeitsplätze finden sich in Schulen, Universitäten, Sportstudios, Vereine oder Verbänden (vorwiegend gemeinnützige Einrichtungen). Darüber hinaus sind die Tätigkeiten eines Sportpädagogen sehr vielfältig. ',
                reviews: [
                    'Der Beruf als Sportspädagoge ist sehr vielfältig. Arbeitsplätze finden sich in Schulen, Universitäten, Sportstudios, Vereine oder Verbänden (vorwiegend gemeinnützige Einrichtungen). Darüber hinaus sind die Tätigkeiten eines Sportpädagogen sehr vielfältig.',
                    'Mögliche Tätigkeiten:',
                    '• Durchführen von Sportunterricht',
                    '• Gesundheitlicher Sport/medizinische Vorbeugung von Erkrankungen durch Sport',
                    'Sportpädagogik mit Behinderten und schwer erziehbaren Kindern Die Tätigkeit als Sportpädagoge bereitet mir jeden Tag viel Freude und Spaß. Ich habe die Möglichkeit, das Potenzial meiner Teilnehmer zu entfalten, sie zu motivieren, und ich kann ihnen die Freude an der Bewegung vermitteln.',
                ]
            }, [
                {
                    name: 'Primär',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                },
                {
                    name: 'Alternative Wege',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_BERUFSOBERSCHULE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_BERUFSOBERSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                }
            ]),
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: ' Projektmanager/in',
                salary: '50700 €/Jahr ',
                balance: ' mittelmäßig ',
                generalDescs: ['Projektmanager befassen sich mit der Organisation, Steuerung und Kontrolle von Projekten. Diese können zum Beispiel technische, kaufmännische oder informationstechnische Lösungen sein – von der Entwicklung eines neuen Bauteils bis zur Einführung einer modernen IT-Anlage. Der Projektmanager muss im Laufe seines jeweiligen Projektes Zeit und Kosten im Blick haben, um aus den verfügbaren Ressourcen das optimale Ergebnis herauszuholen.'],
                generalReviews: ['In meinem Job als Projektmanager habe ich stets die Möglichkeit, stets an spannenden Projekten teilzunehmen, mein Durchhaltevermögen wird öfter unter die Probe gestellt und muss mich oftmals größeren Herausforderungen stellen. ']
            }, [
                {
                    name: 'Primär',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                },
                {
                    name: 'Alternative Wege',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                }
            ]),
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: 'Qualitätsmanager/in ',
                salary: '60.540 €/Jahr',
                balance: ' intensiv/anspruchsvoll ',
                generalDescs: ['Die Nachfrage nach fähigen Qualitätsmanagern steigt immer mehr. Da Abläufe und Prozesse mittels der Digitalisierung immer schneller werden, verlangen Kunden binnen kurzer Zeit neue Produkte. Jedoch muss nichtdestotrotz stets auf die Qualität geachtet werden, um das Vertrauen zu dem Kunden beizubehalten. Hier kommen Qualitätsmanager ins Spiel, die Qualitätsmängel erkennen und dafür sorgen, dass Produkte, Dienstleistungen und Prozesse verbessert werden.'],
                generalReviews: ['Meine Arbeitsstelle ist sehr anspruchsvoll. Nahezu jeden Tag muss ich mich auf neue Herausforderungen gefasst machen und mögliche Lösungswege und Herangehensweisen entwickeln. Ich arbeite mit verschiedenen Gruppen von Menschen zusammen, die alle einen verschiedenen Hintergrund besitzen. Ich lerne viel und kann mich rapide im Job weiterentwickeln.']
            }, [
                {
                    name: 'Primär',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                },
                {
                    name: 'Alternative Wege',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                }
            ]),
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: 'Unternehmensberater/in',
                salary: '55.000€/Jahr ',
                balance: 'wenig Platz für Freizeit ',
                generalDescs: ['Als Consultant bietest Du anderen Unternehmen eine Beratung (Consulting) als entsprechende Dienstleistung an.  Oftmals ist das Management des Auftraggebers bzw. Klientens Gegenstand Deiner Beratung. Häufig ist die Beratung aber auch ausschließlich auf Veränderungen innerhalb eines Unternehmens oder auf die Optimierung von fachlichen Entscheidungen fokussiert. Dies kommt vor allem in Verbindungen mit speziellen IT- oder Ingenieurleistungen, mit einer umfassenden Wirtschaftsprüfung oder mit Personalfragen vor. Als Consultant agierst Du diesbezüglich quasi als Problemlöser.'],
                generalReviews: ['Frische und innovative Ideen sind stets willkommen. Als Unternehmensberater habe ich die Möglichkeit, meine Potenziale zu entdecken und an ihnen zu arbeiten. Das Arbeitsumfeld ist international und man trifft immer wieder auf neue Leute, von denen man wiederrum sehr viel mitnehmen und lernen kann.']
            }, [
                {
                    name: 'Primär',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                },
                {
                    name: 'Alternative Wege',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                }
            ]),
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: ' Psychologischer Psychotherapeut',
                salary: '44.532€/Jahr',
                balance: 'ausgewogen ',
                generalDescs: ['PsychotherapeutInnen führen eigenständig Behandlungen von Menschen mit psychischen oder psychosomatischen Problemen oder Erkrankungen durch. Sie betreuen ihre KlientInnen in beruflichen, persönlichen oder familiären Krisen- und Entscheidungssituationen. PsychotherapeutInnen haben sich in mindestens einer Psychotherapie-Methode, wie z. B. Systemische Familientherapie, Verhaltenstherapie, Gesprächspsychotherapie (=Klientenzentrierte Psychotherapie) oder Psychoanalyse spezialisiert. Entsprechend ihrer Spezialisierung planen sie die Behandlung und setzen gezielt psychotherapeutische Interventionen. Ihr Ziel ist, die bestehenden Probleme oder Symptome gemeinsam mit den KlientInnen zu mildern oder zu beseitigen.'],
                generalReviews: ['Mein Beruf ist sehr vielfältig. Jeden Tag treffe ich auf neue Leute, die verschiedene Probleme haben und unterschiedliche Hintergründe besitzen. Ich habe die Möglichkeit, Menschen zu helfen und sie in eine positive Richtung zu führen. Meistens nach einem langen Arbeitstag verspüre ich, dass ich etwas Großes geleistet habe.']
            }, [
                {
                    name: 'Primär',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                },
                {
                    name: 'Alternative Wege',
                    paths: [
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            isPrev: true
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            isPrev: false
                        },
                        {
                            from: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                            to: _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG,
                            isPrev: false
                        }
                    ]
                }
            ]),
        ];
        this.recommendJobInfos = newJobInfos;
        this.recommendJobInfoSubject.next(newJobInfos);
        this.currJobIndexSubject.next(0);
    };
    RecommendService.prototype.getMajorInfos = function () {
        if (this.recommendJobInfos[this.currJobIndex].jobMetadata.name == 'Polizist/in im gehobenen Dienst') {
            return [
                {
                    name: 'Polizist im gehobenen Dienst:',
                    description: ' Der Fachbereich Polizei der Hochschule für den öffentlichen Dienst in Bayern bietet das Studium zum Einstieg in die Ämter der 3. Qualifikationsebene (3. QE, früher gehobener Dienst) und in die Ämter der vierten Qualifikationsebene (4. QE, früher höherer Dienst), den Masterstudiengang "Öffentliche Verwaltung - Polizeimanagement", an. (allgemeine Info)',
                    ncValue: 3.2
                }
            ];
        }
        else {
            return [
                {
                    name: 'Sportwissenschaften:',
                    description: 'Das Bachelorstudium Sportwissenschaft vermittelt breites und integriertes Grundlagenwissen des Faches. Die Studierenden erwerben ein kritisches Verständnis wichtiger Theorien, Prinzipien und Methoden mit einem besonderen Profil im Bereich "Sport, Bewegung und Bildung". Ziel des sportwissenschaftlichen Studiums ist es, Expertinnen und Experten im Feld Sport, Bewegung und Bildung auszubilden, die in unterschiedlichen bildungsbezogenen Settings Sport- und Bewegungsangebote entwickeln, planen, durchführen, bewerten und evaluieren können.',
                    ncValue: 1.9
                },
                {
                    name: 'Psychologie:',
                    description: ' Psychologie beschreibt und erklärt das menschliche Handeln. In Experimenten versuchen Psychologen vorherzusagen, wie sich ihre Versuchspersonen in einer bestimmten Situation verhalten. Um selbst forschen zu können, erhältst Du im Psychologie Bachelor Studium alle nötigen Grundlagen. Neben Einführungskursen, die Dich an das wissenschaftliche Arbeiten heranführen, hält der Studiengang eine umfassende Methodenausbildung für Dich bereit. Dazu gehören Veranstaltungen wie Statistik, Versuchsplanung und Forschungsmethoden. ',
                    ncValue: 1.2
                },
                {
                    name: 'International Management',
                    description: ' Unsere Wirtschaft unterliegt stetigen Änderungen und Herausforderungen: steigende Mobilität, technische Weiterentwicklungen und die Globalisierung sind hierfür die Ursachen und Hauptauslöser. Der Studiengang Internationales Management und die fachverwandten Studiengänge mit Spezialisierungen bereiten dich auf zukünftige Managementaufgaben in internationalen Unternehmen vor.',
                    ncValue: 2.0
                },
                {
                    name: 'Betriebswirtschaftslehre',
                    description: ' Die Betriebswirtschaftslehre (BWL) ist Teil der Wirtschaftswissenschaften. Sie befasst sich mit den wirtschaftlichen Zusammenhängen und Gesetzmäßigkeiten einzelner Unternehmen und liefert Erkenntnisse über betriebliche Strukturen und Prozesse. Die Fachgebiete und die Forschungsgegenstände des BWL-Bachelor ergeben sich somit aus Fragestellungen, mit denen die verschiedenen Unternehmensbereiche konfrontiert werden.',
                    ncValue: 1.8
                }
            ];
        }
    };
    RecommendService.prototype.getSchoolInfos = function (majorInfo, majorIndex) {
        return _data_school_info_data__WEBPACK_IMPORTED_MODULE_4__["schoolInfoData"][majorInfo.name];
    };
    RecommendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RecommendService);
    return RecommendService;
}());



/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = /** @class */ (function () {
    function StateService() {
        this.stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](StateService_1.INFO);
        this.recommendResultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.stateObservable = this.stateSubject.asObservable();
        this.recommendResultObservable = this.recommendResultSubject.asObservable();
        this.currState = 0;
    }
    StateService_1 = StateService;
    StateService.prototype.changeState = function (nextState) {
        this.stateSubject.next(nextState);
    };
    StateService.prototype.applyRecommendResult = function (recommendResult) {
        this.recommendResultSubject.next(recommendResult);
    };
    StateService.INFO = 0;
    StateService.OVERVIEW = 1;
    StateService.DETAIL = 2;
    StateService.MAJOR = 3;
    StateService.SCHOOL = 4;
    StateService = StateService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
    var StateService_1;
}());



/***/ }),

/***/ "./src/app/user-data.ts":
/*!******************************!*\
  !*** ./src/app/user-data.ts ***!
  \******************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
var UserData = /** @class */ (function () {
    function UserData() {
    }
    return UserData;
}());



/***/ }),

/***/ "./src/app/user-modal/user-modal.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-modal/user-modal.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-size: 1.5em;\n}\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #447dd3;\n}\n.open-btn {\n  border-color: #447dd3;\n  width: 300px;\n  font-size: 0.9em;\n  margin-top: 20px;\n  margin-left: 10px;\n  color: #447dd3;\n}\n.open-btn:hover {\n  background-color: white;\n  color: #898989;\n}\n.modal-body {\n  max-height: 650px;\n  overflow: scroll;\n}\n.register-btn {\n  pointer-events: none;\n}\n.register-btn.actived {\n  pointer-events: all;\n  background-color: #447dd3;\n}\n"

/***/ }),

/***/ "./src/app/user-modal/user-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-modal/user-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\"> Benutzereingaben </h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h2>Gib hier deine Daten ein:</h2>\n                    <form action=\"\" method=\"\">\n                        <div class=\"form-group\">\n                            <label for=\"currentGrade\">Deine momentane Klasse</label>\n                            <input [(ngModel)]=\"currentGrade\" class=\"form-control\" name=\"currentGrade\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"gpa\">Deine Durchschnittsnote</label>\n                            <input [(ngModel)]=\"gpa\" class=\"form-control\" name=\"gpa\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"address\">Deine Adresse</label>\n                            <input [(ngModel)]=\"address\" class=\"form-control\" name=\"address\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"postalcode\">Deine Postleitzahl</label>\n                            <input [(ngModel)]=\"postalCode\" class=\"form-control\" name=\"postalCode\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"school\">Welche Art von Mittelschule hast du besucht (Gymnasium, Real-, Gesamt-, Hauptschule)?</label>\n                            <input [(ngModel)]=\"school\" class=\"form-control\" name=\"school\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"major\">Bevorzugtes Studienfach (optional)</label>\n                            <input [(ngModel)]=\"major\" class=\"form-control\" name=\"major\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"dreamjob\">Traumjob (optional)</label>\n                            <input [(ngModel)]=\"dreamJob\" class=\"form-control\" name=\"dreamJob\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"strongestSub\">Dein bestes Fach</label>\n                            <input [(ngModel)]=\"strongestSub\" class=\"form-control\" name=\"strongestSub\" />\n                        </div>\n                        <h2>Was sind deine Interessen?\n                            <span style=\"color:red\">(*Mehrfachauswahl möglich)</span>\n                        </h2>\n                        <div class=\"row\">\n                            <ng-container *ngFor=\"let interest of interests\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-check\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"check\" (click)=\"checkInterest(interest)\">\n                                            <span class=\"label-text\">{{interest}}</span>\n                                        </label>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <h2>Was sind deine Stärken?\n                            <span style=\"color:red\">(* Mehrfachauswahl möglich)</span>\n                        </h2>\n                        <div class=\"row\">\n                            <ng-container *ngFor=\"let strength of strengths\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-check\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"check\" (click)=\"checkStrength(strength)\">\n                                            <span class=\"label-text\">{{strength}}</span>\n                                        </label>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light register-btn\" [class.actived]=\"currentGrade && gpa && address\n      && postalCode && school && strongestSub \n      && checkedInterests.length > 0 && checkedStrengths.length > 0\" (click)=\"registerUserInput()\">Abschicken</button>\n      <!-- <button type=\"button\" class=\"btn btn-light register-btn\" [class.actived]=\"true\" (click)=\"registerUserInput()\">Register</button> -->\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Schließen</button>\n    </div>\n</ng-template>\n\n<ng-container>\n    <button class=\"btn btn-outline-primary mb-2 mr-2 open-btn\" (click)=\"openModal(content)\">Gib deine Nutzereingaben bitte ein</button>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/user-modal/user-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-modal/user-modal.component.ts ***!
  \****************************************************/
/*! exports provided: UserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalComponent", function() { return UserModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserModalComponent = /** @class */ (function () {
    function UserModalComponent(modalService, stateService) {
        this.modalService = modalService;
        this.stateService = stateService;
        this.userDataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.interests = [
            'Produktion', 'BWL', 'Organisation', 'Sport', 'Musik', 'Kunst', 'Naturwissenschaften', 'Sprachen'
        ];
        this.strengths = [
            'Leadership', 'Kreativität', 'athlethisch', 'Fleiß', 'Starkes Durchhaltevermögen', 'Starkes Durchsetzungsvermögen', 'Selbstständigkeit', 'Sorgfalt',
            'Teamfähigkeit', 'Kommunikationsfähigkeit', 'Verantwortungsbewusstsein'
        ];
        this.checkedInterests = [];
        this.checkedStrengths = [];
    }
    UserModalComponent.prototype.ngOnInit = function () {
    };
    UserModalComponent.prototype.openModal = function (content) {
        this.modalRef = this.modalService.open(content, { size: 'lg', centered: true });
    };
    UserModalComponent.prototype.checkInterest = function (interest) {
        var index = this.checkedInterests.indexOf(interest, 0);
        if (index > -1) {
            this.checkedInterests.splice(index, 1);
        }
        else {
            this.checkedInterests.push(interest);
        }
    };
    UserModalComponent.prototype.checkStrength = function (strength) {
        var index = this.checkedStrengths.indexOf(strength, 0);
        if (index > -1) {
            this.checkedStrengths.splice(index, 1);
        }
        else {
            this.checkedStrengths.push(strength);
        }
    };
    UserModalComponent.prototype.registerUserInput = function () {
        this.userDataEmitter.emit({
            'currentGrade': this.currentGrade,
            'gpa': this.gpa,
            'address': this.address,
            'postalCode': this.postalCode,
            'school': this.school,
            'major': this.major,
            'dreamJob': this.dreamJob,
            'strongestSub': this.strongestSub,
            'interests': this.checkedInterests,
            'strengths': this.checkedStrengths
        });
        this.modalRef.close();
        this.stateService.changeState(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('userData'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserModalComponent.prototype, "userDataEmitter", void 0);
    UserModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-modal',
            template: __webpack_require__(/*! ./user-modal.component.html */ "./src/app/user-modal/user-modal.component.html"),
            styles: [__webpack_require__(/*! ./user-modal.component.css */ "./src/app/user-modal/user-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], UserModalComponent);
    return UserModalComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/junhoe/Git/HCIProject/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map