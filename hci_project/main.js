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

module.exports = "#title {\n  margin: auto;\n  text-align: left;\n  background-color:  #447dd3;\n  padding: 10px;\n  padding-left: 60px;\n  margin-bottom: 15px;\n  font-size: 1.3em;\n  color: white;\n}\n\ni {\n  margin-right: 5px;\n}\n\n.side {\n  float: left;\n  width: 22%;\n  /* margin: 20px 0px; */\n  margin: 20px 0px 20px 50px;\n}\n\n.side.detail-mode {\n  display: none;\n}\n\napp-main-graph {\n  float: left;\n  margin: 20px 50px;\n}\n\n#detail {\n  margin: 20px 0px;\n  float: left;\n  width: 75%;\n}\n\napp-detail-panel {\n  width: 100%;\n  height: 400px;\n  margin: 20px 0px;\n  border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"title\">\n  <i class=\"fas fa-graduation-cap\"></i>\n  German Education System\n</div>\n\n<div class=\"side\" [class.detail-mode]=\"currState >= 2\">\n  <app-edu-side-panel></app-edu-side-panel>\n  <app-user-modal *ngIf=\"currState <= 1\" (userData)=\"applyUserData($event)\"></app-user-modal>\n</div>\n\n<app-main-graph (courseNode)=\"onSelectCourseNode($event)\"></app-main-graph>\n\n<ng-container *ngIf=\"currState == 2\">\n  <div id=\"detail\">\n    <app-detail-panel></app-detail-panel>\n    <app-map-view [userData]=\"userData\"></app-map-view>\n  </div>\n</ng-container>"

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
    Constants.GRAPH_WIDTH = 1150;
    Constants.GRAPH_DETAIL_WIDTH = 300;
    Constants.GRAPH_HEIGHT = 700;
    Constants.GRAPH_MARGIN_SIDE = 70;
    Constants.GRAPH_MARGIN_TOP = 33;
    Constants.GRAPH_MARGIN_BOTTOM = 2;
    Constants.GRAPH_RECT_MARGIN = 5;
    Constants.GRAPH_RECT_HEIGHT_UNIT = 24;
    Constants.COURSE_KINDERGARTEN = 'Kindergarten';
    Constants.COURSE_GRUNDSCHULE = 'Primary school';
    Constants.COURSE_GYMNASIUM = 'Gymnasium';
    Constants.COURSE_OBERSCHULE = "Oberschule";
    Constants.COURSE_GEASAMTSCHULE = "Gesamtschule";
    Constants.COURSE_GEASAMTSCHULE_INTEGRIERTE = "Integrated and Cooperative Gesamtschule";
    Constants.COURSE_REALSCHULE = "Realschule";
    Constants.COURSE_HAUPTSCHULE = "Hauptschule";
    Constants.COURSE_INTEGRIERTE_SEKUNDARSCHULE = "Integrated secondary school";
    Constants.COURSE_GEMEINSCHAFTSSCHULE = "Comprehensive school";
    Constants.COURSE_STADTTEILSCHULE = "District school";
    Constants.COURSE_GYMNASIALE = 'Gymnasiale Oberstufe';
    Constants.COURSE_BERUFSOBERSCHULE = "Berufsoberschule";
    Constants.COURSE_FACHOBERSCHULE = 'Fachoberschule';
    Constants.COURSE_BERUFSFACHSCHULE = "Berufsfachschule";
    Constants.COURSE_BETRIEB = "Vocational school and factory";
    Constants.COURSE_VORBEREITUNG = "Vorbereitung";
    Constants.COURSE_BQL = "BQL, BV, IBA";
    Constants.COURSE_FACHGYMNASIUM = "Fachgymnasium";
    Constants.COURSE_BERUFSEINSTIEGSSCHULE = "Berufseinstiegsschule";
    Constants.COURSE_UNIVERSITAT = 'University and equivalent institutions';
    Constants.COURSE_BERUFSAKADEMIE = "Vocational academy";
    Constants.COURSE_FACHHOCH = 'Fachhoch- and Verwaltungshochschule';
    Constants.COURSE_WEITERBILDUNG = 'Continuing education';
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
            .attr('stroke-width', 6)
            .style('opacity', 1)
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
            .attr('class', 'axis')
            .style('font-size', 14)
            .attr("transform", this.translate(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_SIDE / 3, 0))
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisRight"](yScale));
        this.svg.append('text')
            .attr('class', 'legend')
            .attr("transform", this.translate(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_SIDE / 3, 5))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Age");
    };
    D3Service.prototype.setYAxisMode = function (isDetail) {
        var rightMargin = isDetail ? _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_SIDE / 3 : _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_SIDE / 3;
        var minAge = 3;
        var maxAge = 31;
        var yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_HEIGHT - _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_BOTTOM, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_MARGIN_TOP])
            .domain([minAge, maxAge]);
        this.svg.select('g')
            .attr("transform", this.translate(rightMargin, 0))
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisRight"](yScale));
        this.svg.select('.legend')
            .attr("transform", this.translate(rightMargin, 10));
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
            "Elementary level of education system",
            "Care and education of children"
        ],
        "certificates": [],
        "options": []
    },
    "Primary school": {
        "commonInfos": [
            "Building the foundation for further school education (Gymnasium, Real-, Haupt- and Gesamtschule) through teaching topics such as fundamental approaches of learning and work, math, languages, and general sciences"
        ],
        "certificates": [],
        "options": []
    },
    "Gymnasium": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (after 10th grade)",
            "Hauptschulabschluss (after 9th grade)",
            "(Specifically in Berlin) Allgemeine Hochschulreife (Abitur) (after 13th grade) => some secondary schools have their own gymnasiale Oberstufe or otherwise transition to gymnasiale Oberstufe at a regular Gymnasium"
        ],
        "options": [
            "Seamless transition to gymnasiale Oberstufe",
            "Fachoberschulreife (after 11th grade) => oftentimes practical part needs to be made up (internship)",
            "Allgemeine Hochschulreife (Abitur) (after 12th grade)"
        ]
    },
    "Oberschule": {
        "commonInfos": [],
        "certificates": [
            'Hauptschulabschluss (after 9th grade)',
            'Mittlere Reife (after 10th grade)',
            'Allgemeine Hochschulreife (Abitur) (after 13th grade)  some secondary schools have their own gymnasiale Oberstufe or otherwise transition to gymnasiale Oberstufe at a regular Gymnasium'
        ],
        "options": [
            "nahtloser Übergang zur gymnasialen Oberstufe",
            "Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule und Berufskolleg oder Lehre/Ausbildung"
        ]
    },
    "Gesamtschule": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (after 10th grade)",
            "Hauptschulabschluss (after 9th grade)"
        ],
        "options": [
            "Seamless transition to gymnasiale Oberstufe",
            "Entitled to attend school forms of the upper secondary level e.g. Fachoberschule, Berufskolleg or education or vocational training"
        ]
    },
    "Integrated and Cooperative Gesamtschule": {
        "commonInfos": [],
        "certificates": [
            "Integrated Gesamtschule: Some schools also consist of the gymnasiale Oberstufe, whereas others do not provide it. This school form provides advanced courses for the main subjects to give courses at different difficulty levels.",
            "Cooperative Gesamtschule: Some schools provide classes until the gymnasiale Oberstufe, whereas others do not. Students with different knowledge levels treated equally. The distinct school forms like Gymnasium, Real- and Hauptschule are considered as strongly related to each other in terms of the Cooperative Gesamtschule.",
            "Hauptschulabschluss (after 9th grade)",
            'Mittlere Reife (after 10th grade)',
            'Allgemeine Hochschulreife (Abitur) (after 13th grade) => some secondary schools have their own gymnasiale Oberstufe or otherwise transition to gymnasiale Oberstufe at a regular Gymnasium'
        ],
        "options": [
            'Entitled to attend school forms of the upper secondary level e.g. Fachoberschule, Berufskolleg, gymnasiale Oberstufe (through qualifications) or education or vocational training'
        ]
    },
    "Realschule": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (after 10th grade)",
            "Hauptschulabschluss (after 9th grade)"
        ],
        "options": [
            "Entitled to attend school forms of the upper secondary level e.g. Fachoberschule, Berufskolleg, gymnasiale Oberstufe (through qualifications) or education or vocational training"
        ]
    },
    "Hauptschule": {
        "commonInfos": [],
        "certificates": [
            "Mittlere Reife (after 10th grade)",
            "Hauptschulabschluss (after 9th grade)"
        ],
        "options": [
            "Entitled to attend school forms of the upper secondary level e.g. Fachoberschule, Berufskolleg, gymnasiale Oberstufe (through qualifications) or education or vocational training"
        ]
    },
    "Integrated secondary school": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden",
            "Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)",
            "(Specifically in Berlin) Allgemeine Hochschulreife (Abitur) (after 13th grade) => some secondary schools have their own gymnasiale Oberstufe or otherwise transition to gymnasiale Oberstufe at a regular Gymnasium"
        ],
        "options": [
            'Entitled to attend school forms of the upper secondary level e.g. Fachoberschule, Berufskolleg, gymnasiale Oberstufe (through qualifications) or education or vocational training'
        ]
    },
    "Comprehensive school": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden",
            "Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)",
            "(Specifically in Berlin) Allgemeine Hochschulreife (Abitur) (after 13th grade) => some secondary schools have their own gymnasiale Oberstufe or otherwise transition to gymnasiale Oberstufe at a regular Gymnasium"
        ],
        "options": [
            'Entitled to attend school forms of the upper secondary level e.g. Fachoberschule, Berufskolleg, gymnasiale Oberstufe (through qualifications) or education or vocational training'
        ]
    },
    "District school": {
        "commonInfos": [],
        "certificates": [
            'Hauptschulabschluss (after 9th grade)',
            'Mittlere Reife (after 10th grade)',
            'Allgemeine Hochschulreife (Abitur) (after 13th grade)'
        ],
        "options": [
            'Entitled to attend school forms of the upper secondary level e.g. Fachoberschule, Berufskolleg, gymnasiale Oberstufe (through qualifications) or education or vocational training'
        ]
    },
    "Gymnasiale Oberstufe": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (after 11th grade) => oftentimes practical part needs to be made up (internship)",
            "Allgemeine Hochschulreife (Abitur) (after 12th grade)",
            "(Specifically in Niedersachsen) Allgemeine Hochschulreife (Abitur) (after 12th grade  after 2019 Abitur after completion of 13th grade)"
        ],
        "options": [
            "Entitled to attend university and equivalent educational institutions"
        ]
    },
    "Berufsoberschule": {
        "commonInfos": [],
        "certificates": [
            "Fachoberschulreife (after 11th grade)",
            "Allgemeine Hochschulreife (Abitur) (after 12th grade)"
        ],
        "options": [
            "Entitled to attend university and equivalent educational institutions"
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
            "Fachoberschulreife (after 11th grade)",
            "Allgemeine Hochschulreife (Abitur) (after 13th grade)"
        ],
        "options": [
            "Entitled to attend university and equivalent educational institutions like Fachhochschulen"
        ]
    },
    "Vocational school and factory": {
        "commonInfos": [],
        "certificates": [
            "Vocational qualification"
        ],
        "options": [
            "Continuing education or entitlement to attend certain universities"
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
    "University and equivalent institutions": {
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
    "Vocational academy": {
        "commonInfos": [],
        "certificates": [
            "Diploma or Bachelor degree"
        ],
        "options": [
            "Pursuing a Master degree at university or Fachhochschule",
            "Enter the profession",
            "Continuing education"
        ]
    },
    "Fachhoch- and Verwaltungshochschule": {
        "commonInfos": [],
        "certificates": [
            "Bachelor degree",
            "Master degree"
        ],
        "options": [
            "Enter the profession",
            "Continuing education"
        ]
    },
    "Continuing education": {
        "commonInfos": [
            "Consolidation and expanding on existing education in a given career",
            "Further deepening of specialized direction or advanced training in own field:",
            "Enhancement of prior knowledge respectively skills",
            "Form of continuing training: ",
            "Postgraduate medical training",
            "APO-IT (further training in the information technology sector)",
            "Ph. D. (highest degree of postgraduate degree)",
            "habilitation (classical path towards professorship)",
            "Academy of Administration and Economics",
            "Master Craftsman’s certificate",
            "State Certified Management Expert",
            "State Certified Designer in the craft’s sector",
            "State Certified restorer in the craft’s sector",
            "State certified technician, corporate university (operated by company for training and further training of employees)",
            "Business Information Technology Specialist",
            "learning islands (case-based learning  form of continuing training)",
            "non-consecutive Master programs (major of master different than major of bachelor’s program)"
        ],
        "certificates": [],
        "options": []
    },
    "BQL, BV, IBA": {
        "commonInfos": [
            'Berufsqualifizierender Lehrgang (BQL)',
            'Berufsvorbereitende Maßnahme (BV)',
            'Integrierte Berufsausbildungsvorbereitung (IBA)',
            'Berufsqualifizierende Lehrgänge',
            'Vorbereitung für den Besuch einer Berufsfachschule'
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
    'Police in higher service': [
        {
            name: 'Polizeiakademie Niedersachsen',
            latlng: { lat: 51.427, lng: 9.644 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'German citizenship, citizenship from another EU country or of the European Economic Area or possession of a valid settlement permit',
                'Individual ruling possible in terms of urgent interests of service',
                'Abitur, Fachhochschulreife or an equivalent approved educational qualification',
                '6 years of English lessons  or proof of passed exam through a certificate according the Common European Framework of Reference for Languages (level B1)',
                'Legally not punished',
                'Day of recruitment not older than 31 years old',
                'At least 163 cm (female) and at least 168 cm (male) (deviations up to 4 cms possible)',
                'Possession of driving licence of class B',
                'Swimming badge in bronze (or higher)',
                'Healthy and athletic'
            ],
            curriculums: [
                'https://www.polizei-studium.de/studium,35.html'
            ],
            reviews: [
                ' The study content is exactly how you are going to use it when you are on a duty. The lecturer are similar as other lecturer from other universities. Some are extremely competent, then there are some rather don’t like. The library may be small, but it provides everything you are looking for. Unfortunately, the cafeteria is not that appealing. The food is rather expensive and the quality is rather bad. On the other hand, a gym has been built and it looks fantastic. For the freshmen that should be a great highlight. In particular, the major has been altered a lot. In my case I still have the final examination, however for the subsequent years it will be abolished. In my perspective the study program is going to change positively.',
                'Teaching personnel: 4/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): 736 €'
            ]
        },
        {
            name: 'Akademie der Polizei Hamburg',
            latlng: { lat: 53.603, lng: 10.005 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur)',
                'Fachhochschulreife',
                'Further requirements: ',
                'Maximum age is 34 for the recruitment',
                'Minimum body height is 160 cm',
                'No visible body modifications (e. g. tatoo or flesh tunnel) that are visible when wearing the uniform (long-sleeved service shirt, round neck shirt) or that can depict a self-endangement',
                'Driving licence of class B by the end of the of the studies the latest',
                'Swimming certificate (swimming badge in bronze or youth swimming badges in bronze or “Freischwimmer”)',
                'Suitability to become a policeman',
                'Successful participation in the recruitment procedure',
                'Allegiance to the constitution'
            ],
            curriculums: [
                'https://akademie-der-polizei.hamburg.de/contentblob/4334106/02c8819681e6f18a77774b5b96abd2ce/data/la-i-ausbildungs-und-pruefungsordnung.pdf'
            ],
            reviews: [
                ' Super interesting, not commonplace. Many new contents are provided. The lecturer prepare practice-oriented cases and combine them with lively examples. Every is trying hard to engage the students and to give them sufficient explanations. It’s a very varied study program.',
                'Teaching personnel: 4/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 1150€ '
            ]
        },
        {
            name: ' Hochschule für Wirtschaft und Recht Berlin ',
            latlng: { lat: 52.485, lng: 13.338 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'German According to article 116 of the Basic Law from the Federal Republic of Germany or citizen of one of the member state of the European Union (For member from other nationalities special provisions apply – if required please inquire)',
                'Possession of driving licence of class B',
                'Abitur, Fachhochschulreife or an equivalent approved educational qualification',
                '6 years of English lessons  or proof of passed exam through a certificate according the Common European Framework of Reference for Languages (level B1)',
                'Legally not punished',
                'Day of recruitment not older than 31 years old',
                'At least 163 cm (female) and at least 168 cm (male) (deviations up to 4 cms possible)',
                'Possession of driving licence of class B (During the vocational training it has to be handed it later at least at the end of 3rd semester respectively during the degree program at the end of the 2nd semester)',
                'Ability to at least swim for 200 m without any interruptions and proof of swimming certificate (e. g. swimming badge in bronze)',
                'At least 160 cm (female) and at least 165 cm (male)',
                'Successfully passed recruitment test',
                'After police medical examination whether fit for service',
                'Spectacle wearers can be employed, as well, if after police medical examination sufficient eyesight has been determined',
                'Personality suitable for the occupation policeman (perfect reputation and no criminal record)'
            ],
            curriculums: [
                'https://www.hwr-berlin.de/fachbereich-polizei-und-sicherheitsmanagement/studiengaenge/polizeivollzugsdienst-bachelor/#c22960'
            ],
            reviews: [
                ' This study program involves a lot of discipline, but it is definitely manageable. Occasionally you are going to encounter your limits, however you experience and learn a lot. The lecturer in particular show interests on the different knowledge levels and the demands of the students. Subsequently, they adjust their lecture in accordance with the students’ level. You always have the opportunity to pose questions.',
                'Teaching personnel: 5/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 760,2 €'
            ]
        },
        {
            name: 'Polizei NRW',
            latlng: { lat: 51.205, lng: 6.962 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur) or Fachhochschulreife (Fachabitur)',
                'Proof of 6 years English classes from secondary level 1 or language skills of the EU official language with level B1',
                'Proof swimming badge at least in bronze',
                'On day of recruitment not older than 37 years old',
                'BMI should not lower than 18, but also not greater than 27,5',
                'Minimum height for women and men 163 cm',
                'Eyesight: until 20th year of life 50 % of the residual vision on both eyes, from the 20th year onwards at least 30 % of the residual vision',
                'Driving licence of class B as certified copy',
                'German Sports Badge',
                'As adolescent: 800-m course endurance/trail run (for a certain period of time run continuously)',
                'as adults: 3000-m run or 10000-m run (after reaching the age of 18 prove necessary)'
            ],
            curriculums: [
                'https://polizei.nrw/aus-und-fortbildung-der-polizei-nordrhein-westfalen'
            ],
            reviews: [
                'There are many interesting and practice-oriented aspects regarding the study content. The law plays an essential role. In my case at the beginning it was very new to operate with legal texts. The first big obstacle for me was it to manage the first exams and not run into the second attempt. Unfortunately, that intention could not work out with 5 subjects. That’s why I had to study again for these subjects and wait for another one month to get my results. On the announcement of the results there were good and bad news. But, eventually I could pass these exams. But, now the studies are going well and I can just recommend everyone this study program who is interested in the occupation in field of police.',
                'Teaching personnel: 5/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 822,00 €'
            ]
        }
    ],
    'Sport Sciences': [
        {
            name: 'Humboldt-Universität zu Berlin',
            latlng: { lat: 53.489, lng: 13.397 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur)',
                'Practical sport affinity and suitability for sports: Proof of in total 33 grade points in the PE class in the last 3 half-years from the 4 half-years.or a corresponding academic performance at a comparable level of qualification. By taking sports as an advanced course 30 grade points are sufficient. Or successfully pass the sport aptitude test provided by the university.',
                'Sports capability: medical certificate (not older than one year)'
            ],
            curriculums: [
                'https://www.hu-berlin.de/de/studium/beratung/angebot/sgb/sportmono'
            ],
            reviews: [
                ' It is absolutely worth it to study Sports Sciences at the HU. The institution consists of a very nice, young and intelligent team. You not only learn a lot about sports topics, but also everything regarding movement, education, and teaching methods what is tremendously excited and interesting for me.',
                'Teaching personnel: 4/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 760,2 €'
            ]
        },
        {
            name: 'Bergische Universität Wuppertal',
            latlng: { lat: 51.245, lng: 7.148694 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur)',
                'Succesfully pass the sports aptitude test provided by the university',
                'All applicants got admitted, but normally region related NC'
            ],
            curriculums: [
                ' https://www.sportwissenschaft.uni-wuppertal.de/fileadmin/sportwissenschaft/pdf/BA_Studienverlauf_HRG-Gym-BK_ab_2011.pdf '
            ],
            reviews: [
                'I have a lot of fun while listening to the classes. The professors and the students are very kind. The professors are very competent and very helpful and likewise are the staff members of the university. I cannot imagine a better university and I feel very comfortable here in this university.',
                'Teaching personnel: 4/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 1300 €'
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
                '(Allgemeine Hochschulreife)/Fachabitur',
                'pre-study internship',
                'Proof of qualifying english language skills',
                'NC: 2.0 (updated)'
            ],
            curriculums: [
                ' Studieninhalte: https://wiwi.hs-duesseldorf.de/studium/studiengaenge/bachelor-international-management/studieninhalt-aufbau/aufbau-und-inhalte'
            ],
            reviews: [
                'Good, recognized college with extremely good professors and with the opportunity to study on a part-time basis, as well. I would recommend the study program who would like to study while pursuing an occupation and who would like to gain further knowledge. The combination of studying and working is highly regarded among the companies and opens up great career opportunities. ',
                'Teaching personnel: 5/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 900 €'
            ]
        },
        {
            name: 'Hochschule Bonn-Rhein-Sieg',
            latlng: { lat: 50.780, lng: 7.181 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife oder Fachhochschulreife',
                'Or vocational qualificatioin or of prior training recognized as equivalent',
                'Proof of qualifying english language skills',
                'NC: 2.0 (updated)'
            ],
            curriculums: [
                ' Studieninhalte: https://www.h-brs.de/de/wiwi/international-business'
            ],
            reviews: [
                'In this study program you deal with the question how the human behaves in the economic environment. So, you comprehend which kinds of purchase decisions the humans make or how enterprises find the suitable applicants. Depending on the focus you can deepen your knowledge in one of these fields. I don’t regret my choice of selecting this program. I am more than satisfied.',
                'Teaching personnel: 4/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): 700-800 €'
            ]
        }
    ],
    'Business Administration': [
        {
            name: 'Universität zu Köln ',
            latlng: { lat: 50.928, lng: 6.928 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                ' Allgemeine Hochschulreife',
                'Mathematical understanding',
                'Good verbal skills in German and English',
                'NC: 1.3 (updated)'
            ],
            curriculums: [
                ' Studieninhalte: https://www.wiso.uni-koeln.de/de/studium/bachelor/bwl-bachelor/'
            ],
            reviews: [
                'Basic knowledge will be conveyed. The focus modules are very helpful to find the specialization later and to find a distinct direction after the completion of the degree program. Basically, I don’t like the traditional teaching approach. I would appreciate it, if there is more practice. But due to the great number of the students that can be difficult. ',
                'Teaching personnel: 3,5/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 822,00 €'
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
                ' I like and enjoy both the study content and the study life. We discuss about modern and relevant topics in the lectures. I am very glad that I have left my home and that I have decided to come to Aachen. Aachen ist he perfect city for students. Even though the university is huge, everything is well organized.',
                'Teaching personnel: 5/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 1110 €'
            ]
        },
        {
            name: 'Universität Bielefeld',
            latlng: { lat: 52.036, lng: 8.495 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur)',
                'Underlies NC',
                'That’s why a separate application to the foundation for university admission (hochschulstart.de) is necessary afterwards application at Universität Bielefeld',
                'Proof of participation in the RWTH study field self-assessment',
                'Economic sciences should be shown at enrollment',
                'NC: 2.0 (updated)'
            ],
            curriculums: [
                'https://ekvv.uni-bielefeld.de/sinfo/publ/variante/22966220'
            ],
            reviews: [
                'I like the university, but also the major is just perfect! Ich finde sowohl die Uni als auch das Fach einfach perfekt! The major gives me joy and it’s very varied. And you are free to decide in what field you want to specify. I also like that on the campus you can easily get to know other people from other majors. ',
                'Teaching personnel: 5/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 1392 €'
            ]
        },
        {
            name: 'Universität Duisburg-Essen ',
            latlng: { lat: 51.427, lng: 6.801 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur)',
                '12 weeks of occupational training',
                'Mathematic affinity',
                'Strong interest in operating actively and passively with texts (book science)',
                'NC: 2.0 (updated)'
            ],
            curriculums: [
                'https://www.msm.uni-due.de/studium/bachelor-of-science-in-betriebswirtschaftslehre/'
            ],
            reviews: [
                'Some of the subjects that you have to complete are very exciting and other subjects on the other hand are rather boring. So, sometimes it is pleasant and on other days you have to work really hard. Basically, for this study program you need a lot of diligence and the willingness to learn. Otherwise, you are not able to manage this study program.',
                'Teaching personnel: 3,5/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): 750-850 €'
            ]
        },
        {
            name: 'Humboldt Universität zu Berlin ',
            latlng: { lat: 52.518, lng: 13.393 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur)',
                'NC: 1.8 (updated)'
            ],
            curriculums: [
                'https://www.hu-berlin.de/de/studium/beratung/angebot/sgb/bwl/'
            ],
            reviews: [
                'Many people say that Business Administration is rather dry and boring, but at the Humboldt university I could learn so many essential topics and trends that were explained by the competent professors in a very vivid way. I cannot complain one bit. I learn so much what is essential for my future.',
                'Teaching personnel: 5/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 760,2 €'
            ]
        },
        {
            name: 'Freie Universität Berlin ',
            latlng: { lat: 52.447, lng: 13.285 },
            commuteTime: 80,
            learningEffort: '180 ECTS',
            qualifications: [
                'Allgemeine Hochschulreife (Abitur)',
                'Proof of English language skills (B2 level)',
                'NC: 1.5 (updated)'
            ],
            curriculums: [
                'https://www.fu-berlin.de/studium/studienangebot/grundstaendige/betriebswirtschaftslehre_mono/index.html'
            ],
            reviews: [
                ' After 3 beautiful, but also tough years at the FU, I don’t regret that I have chosen this major. Of course, I have to admit that studying Business Administration at the FU is more sophisticated than other universities. However, due to this aspect I could develop a better sense for self-discipline, ambition, and time management that I did not know that I had these capabilities. Initially, I was very overwhelmed with the course work and the difficult exams (Math & Annual accounts and taxes). But, with a lot of diligence and engagement everything has worked out well. I could realize that it is normal to study one or two semesters longer and concentrate on the difficult modules. Better is it to have one exam less, instead you have better grades and can find some time to pursue an internship. One big plus point is definitely the cafeteria of the FU and also the both huge libraries.',
                'Teaching personnel: 4/5',
                'Living expenses (e.g. rental fee, study fee, food, etc.): up to 760,2 €'
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

module.exports = "\nbutton.btn.btn-light.back {\n  margin: 0;\n  width: 100%;\n}\n\nbutton.btn.btn-light {\n  width: 350px;\n  margin: 10px 0px;\n}\n\nbutton.btn.btn-light:hover {\n  background-color: #447dd3;\n  color: white;\n}\n\nbutton.btn.btn-light.selected {\n  background-color: #447dd3;\n  color: white;\n}\n\nspan.card-title {\n  display: flex;\n  line-height: 50px;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.card-header {\n  background-color: #447dd3;\n  font-weight: 400;\n  font-size: 1.2em;\n}\n\n.card-body {\n  height: 30vh;\n  overflow: scroll;\n}\n\n.col {\n  padding-left: 15px;\n  padding-right: 15px;\n}"

/***/ }),

/***/ "./src/app/detail-panel/detail-panel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/detail-panel/detail-panel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <button class=\"btn btn-light back\" (click)=\"clickBackBtn()\">\n      <i class=\"fas fa-undo\"></i>\n      Back to main results\n    </button>\n  </div>\n  <div class=\"row\">\n    <div class=\"col card-header text-white\">\n      {{ currCourseNode.name }}\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"majorInfos.length > 0\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header text-white\">\n          Possible Major list\n        </div>\n        <div class=\"card-body d-flex flex-column justify-content-center align-items-center\">\n          <ng-container *ngFor=\"let majorInfo of majorInfos let i = index\">\n            <button type=\"button\" class=\"btn btn-light\" [class.selected]=\"majorInfo == selectedMajorInfo\" (click)=\"selectMajorInfo(majorInfo, i)\">{{ majorInfo.name }}</button>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"card\" id=\"major-info\">\n        <div class=\"card-header text-white\">\n          Major information\n        </div>\n        <div class=\"card-body\">\n          <ng-container *ngIf=\"selectedMajorInfo != null\">\n            <h4 class=\"card-title\">{{ selectedMajorInfo.name }} </h4>\n            <p class=\"card-text\">\n              {{ selectedMajorInfo.description }}\n            </p>\n            <h4 class=\"card-title\">Average NC-value : {{ selectedMajorInfo.ncValue }}</h4>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _recommend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recommend.service */ "./src/app/recommend.service.ts");
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
        this.majorInfos = [];
    }
    DetailPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 본인이 속해있는 곳으로 initialize
        this.currCourseNode = this.recommendService.userCourseNode;
        this.recommendService.selectSchool(this.currCourseNode);
        this.recommendService.selectedCourseNodeObservable.subscribe(function (courseNode) {
            _this.currCourseNode = courseNode;
            if (courseNode.layer == 4) {
                _this.majorInfos = _this.recommendService.getMajorInfos();
            }
            else {
                _this.majorInfos = [];
                _this.recommendService.selectSchool(_this.currCourseNode);
            }
        });
    };
    DetailPanelComponent.prototype.clickBackBtn = function () {
        this.stateService.changeState(_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"].OVERVIEW);
        this.majorInfos = null;
        this.selectedMajorInfo = null;
    };
    DetailPanelComponent.prototype.selectMajorInfo = function (majorInfo, index) {
        this.recommendService.selectMajorInfo(majorInfo, index);
        this.selectedMajorInfo = majorInfo;
    };
    DetailPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-panel',
            template: __webpack_require__(/*! ./detail-panel.component.html */ "./src/app/detail-panel/detail-panel.component.html"),
            styles: [__webpack_require__(/*! ./detail-panel.component.css */ "./src/app/detail-panel/detail-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"], _recommend_service__WEBPACK_IMPORTED_MODULE_2__["RecommendService"]])
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Oldenburg');\n#dropdown {\n  display: block;\n  padding: 7px 8px;\n  width: 100%;\n  margin: 0px 10px;\n  position: relative;\n  cursor: pointer;\n  border-left: 4px solid #739cda;\n  background: #fff;\n  font-size: 1em;\n  color: #656565;\n  font-weight: normal;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 2px rgba(0,0,0,0.3);\n  transition: all 0.15s linear;\n}\n#dropdown:hover { color: #898989; }\n#dropdown.open {\n  background: #5a90e0;\n  color: #fff;\n  border-left-color: #6c6d70;\n}\n#dropdown ul {\n  position: absolute;\n  top: 70%;\n  left: -4px;\n  width: 100%;\n  padding: 0px 0px;\n  pointer-events: none;\n  opacity: 0;\n  border-left: 4px solid #8e9196;\n  background: #fff;\n  box-shadow: 1px 1px 2px rgba(0,0,0,0.3);\n  list-style-type: none;\n  transition: height 0.3s, opacity 0.3s, top 0.3s;;\n}\n#dropdown ul li { font-size: 0.9em; }\n#dropdown ul li a {\n  text-decoration: none;\n  display: block;\n  color: #447dd3;\n  padding: 5px 8px;\n}\n#dropdown ul li a:hover {\n  color: #6fa0e9;\n  background: #e7f0f7;\n}\n#dropdown ul.open {\n  pointer-events: all;\n  display:block;\n  opacity: 1;\n  top: 100%;\n}\n#dropdown i {\n  color: #447dd3;\n  margin-right: 3px;\n}\n#dropdown.open i {\n  color: white;\n  margin-right: 3px;\n}\ni {\n  color: #749DD8;\n  margin-right: 8px;\n}\n#detail-view {\n  margin: 10px 10px;\n  width: 100%;\n  transition: margin 0.3s;\n}\n#detail-view.open {\n  margin: 150px 10px 0px 10px;\n  transition: margin 0.3s;\n}\n.card-body ul {\n  margin: 0;\n  padding: 0;\n}\n.card-body li {\n  color: #447dd3;\n  margin-left: 0.8em;\n}\n.card-body li span {\n  margin-left: -0.2em;\n  color: black;\n}\n.elem {\n  margin-top: 15px;\n}\n.card-header {\n  background-color: #447dd3;\n  font-weight: 400;\n  font-size: 1.1em;\n  height: 40px;\n  padding: .75rem 8px\n}\n.card-body {\n  min-height: 130px;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.btn-light {\n  width: 80%;\n  margin: 10px 0px;\n  font-size: 0.9em;\n}\n.btn-light:hover {\n  background-color: #447dd3;\n  color: white;\n}\n.btn-light.selected {\n  background-color: #447dd3;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/edu-side-panel/edu-side-panel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edu-side-panel/edu-side-panel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"currState <= 1\">\n  <div #dropdown *ngIf=\"currState <= 1\" id=\"dropdown\" class=\"ddmenu\" (click)=\"toggleDropdown()\" [class.open]=\"dropdownOpened\">\n    <ng-container *ngIf=\"!isAreaSelected\">\n      <i class=\"fas fa-map-marker-alt\"></i>\n      Select the federal state\n    </ng-container>\n    <ng-container *ngIf=\"isAreaSelected\">\n      <i class=\"fas fa-map-marker-alt\"></i>\n      {{ selectedArea }}\n    </ng-container>\n    <ul [class.open]=\"dropdownOpened\">\n      <li *ngFor=\"let area of areas\">\n        <ng-container *ngIf=\"area == selectedArea; else other\">\n          <a (click)=\"onClickArea(area)\">{{area}} (selected)</a>\n        </ng-container>\n        <ng-template #other>\n          <a (click)=\"onClickArea(area)\">{{area}}</a>\n        </ng-template>\n      </li>\n    </ul>\n  </div>\n\n  <ng-container *ngIf=\"currState == 0\">\n    <div id=\"detail-view\" [class.open]=\"dropdownOpened\">\n      <ng-container *ngIf=\"selectedCourseNode\">\n        <ng-container *ngIf=\"selectedCourseNode.courseInfo.certificates.length != 0\">\n          <div class=\"card elem\">\n            <div class=\"card-header text-white\">\n              Possible school-leaving qualification\n            </div>\n            <div class=\"card-body\">\n              <ul>\n                <ng-container *ngFor=\"let certificate of selectedCourseNode.courseInfo.certificates\">\n                  <li>\n                    <span>{{certificate}}</span>\n                  </li>\n                </ng-container>\n              </ul>\n            </div>\n          </div>\n          <div class=\"card elem\">\n            <div class=\"card-header text-white\">\n              Subsequent possibilities\n            </div>\n            <div class=\"card-body\">\n              <ul>\n                <ng-container *ngFor=\"let option of selectedCourseNode.courseInfo.options\">\n                  <li>\n                    <span>{{option}} </span>\n                  </li>\n                </ng-container>\n              </ul>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"selectedCourseNode.courseInfo.commonInfos.length != 0\">\n          <div class=\"card elem\">\n            <div class=\"card-header text-white\">\n              General Information\n            </div>\n            <div class=\"card-body\">\n              <ul>\n                <ng-container *ngFor=\"let commonInfo of selectedCourseNode.courseInfo.commonInfos\">\n                  <li>\n                    <span>{{commonInfo}}</span>\n                  </li>\n                </ng-container>\n              </ul>\n            </div>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n\n  </ng-container>\n\n  <ng-container *ngIf=\"currState != 0\">\n    <div id=\"detail-view\" [class.open]=\"dropdownOpened\">\n      <ng-container *ngIf=\"currState == 1\">\n        <div class=\"card elem\">\n          <div class=\"card-header text-white d-flex align-items-center\">\n            <i class=\"far fa-id-card text-white\"></i>\n            Select the job\n          </div>\n          <div class=\"card-body d-flex flex-column align-items-center\">\n            <ng-container *ngFor=\"let jobInfo of jobInfos let i = index\">\n              <button class=\"btn btn-light\" [class.selected]=\"i == currJobIndex\" (click)=\"changeCurrentJobIndex(i)\">{{ jobInfo.jobMetadata.name }}</button>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"card elem\">\n        <div class=\"card-header text-white d-flex align-items-center\">\n          <i class=\"fas fa-info-circle text-white\"></i>\n          Job Information\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Average salary</h5>\n          <p class=\"card-text\">\n            {{ jobInfos[currJobIndex].jobMetadata.salary }}\n          </p>\n          <h5 class=\"card-title\">Work & Balance</h5>\n          <p class=\"card-text\">\n            {{ jobInfos[currJobIndex].jobMetadata.balance }}\n          </p>\n          <h5 class=\"card-title\">General Description: </h5>\n          <ng-container *ngFor=\"let review of jobInfos[currJobIndex].jobMetadata.reviews\">\n            <p class=\"card-text\">\n              {{ review }}\n            </p>\n          </ng-container>\n          <ng-container *ngFor=\"let generalDesc of jobInfos[currJobIndex].jobMetadata.generalDescs\">\n            <p class=\"card-text\">\n              {{ generalDesc }}\n            </p>\n          </ng-container>\n          <h5 class=\"card-title\"> General Review: </h5>\n          <ng-container *ngFor=\"let review of jobInfos[currJobIndex].jobMetadata.generalReviews\">\n            <p class=\"card-text\">\n              {{ review }}\n            </p>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>"

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
        this.totalRectCount = 0;
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
        this.totalRectCount = this.getTotalRectCount();
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
        this.totalRectCount = this.getTotalRectCount();
    };
    LayoutManager.prototype.trimRects = function (careerPath) {
        var _this = this;
        careerPath.paths.forEach(function (path, index) {
            _this.rects[index] = _this.rects[index].filter(function (rect) { return (rect.courseNode.name == path.from || rect.courseNode.name == path.to); });
            _this.rects[index + 1] = _this.rects[index + 1].filter(function (rect) { return (rect.courseNode.name == path.from || rect.courseNode.name == path.to); });
            _this.rects[index][0].goToDetailMode();
            _this.rects[index + 1][0].goToDetailMode();
        });
        this.totalRectCount = this.getTotalRectCount();
    };
    LayoutManager.prototype.getTotalRectCount = function () {
        var count = 0;
        this.rects.forEach(function (rectArr) {
            rectArr.forEach(function (rect) { return count++; });
        });
        return count;
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
        return [Math.floor(this.x + this.width / 2), Math.floor(this.y - this.height * 0.74)];
    };
    Rect.prototype.getEndPos = function () {
        return [Math.floor(this.x + this.width / 2), Math.floor(this.y - this.height * 0.26)];
    };
    Rect.prototype.updateRect = function (courseNode, layer, index) {
        this.courseNode = courseNode;
        this.updateInOverviewMode(layer, index);
    };
    Rect.prototype.goToDetailMode = function () {
        this.width = 200;
        this.x = 70;
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
    function CareerPath(name, courses, currCourseName) {
        this.name = name;
        this.courses = courses;
        this.currCourseName = currCourseName;
        this.paths = this.getPaths();
        this.currIndex = this.getCurrentIndex();
    }
    CareerPath.prototype.getPaths = function () {
        var paths = [];
        var isPrev = true;
        for (var i = 0; i < this.courses.length - 1; i++) {
            if (this.courses[i] == this.currCourseName) {
                isPrev = false;
            }
            paths.push({ from: this.courses[i], to: this.courses[i + 1], isPrev: isPrev });
        }
        return paths;
    };
    CareerPath.prototype.getCurrentIndex = function () {
        var _this = this;
        return this.courses.findIndex(function (course) { return course == _this.currCourseName; });
    };
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

module.exports = "div {\n  text-align: center;\n  width: 100%;\n}\n\ni {\n  color: #749dd8;\n  margin: 0px 5px;\n}\n\n#container {\n  border: 1px #ddd solid;\n  border-radius: 5px;\n}\n\n#ground {\n  position: relative;\n  background: #eee;\n}\n\n#ground.detail-mode {\n  width: 300px;\n}\n\n#svg-ground {\n  position: relative;\n  left: 0;\n  bottom: 0;\n}\n\n.edge {\n  position: absolute;\n}\n\n.box {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n}\n\n.box.info-mode {\n  transition: 0.5s width, height, top, left linear;\n}\n\n.inner-box {\n  display: flex;\n  position: absolute;\n  border-bottom: 4px solid #ddd;\n  /* background: linear-gradient(white, white 80%, #eee); */\n  background: white;\n  box-sizing: border-box;\n  border-radius: 5px;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  word-wrap: break-word;\n  cursor: pointer;\n}\n\n.inner-box.clicked {\n  background: #749DD8;\n  border-bottom: 4px solid #12508C;\n  color: white;\n}\n\n.inner-box.overview {\n  border: none\n}\n\n.inner-box:hover {\n  transition:all 0.3s;\n  background: #749DD8;\n  border-bottom: 4px solid #12508C;\n  color: white;\n}\n\n.inner-box:hover > .text-box {\n  transition:all 0.5s;\n  background-color: #749DD8;\n  color: white;\n}\n\n.inner-box > div {\n  width: 95%;\n  max-width: 200px;\n}\n\n.text-box {\n  display: block;\n  border-radius: 5px;\n  height: 50%;\n  width: 95%;\n  max-width: 200px;\n  font-weight: 500;\n}\n\n.text-box.curr-course {\n  border: 6px green solid;\n}\n\n.text-box.before-course {\n  border: 2px green solid;\n}\n\n.text-box.after-course {\n  border: 2px red solid;\n}\n\nline {\n  stroke:black;\n  stroke-width: 2px;\n  transition: x2 0.3s;\n}\n\nsvg.consume-events {\n  pointer-events: none;\n}\n\n.card-header {\n  background-color:  #447dd3;\n  color: white;\n}\n\n.card-body {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  height: 45px;\n}\n\n.card-body .btn.btn-light.selected {\n  background: #447dd3;\n  color: white;\n}\n\nsvg .axis .tick text{\n  font-size: 14px;\n}\n\n#tutorial {\n  position: absolute;\n  font-size: 2.0em;\n  top: 80px;\n  right: 450px;\n  text-align: right;\n  pointer-events: none;\n  width: 50px;\n}\n\n#tutorial i {\n  color: black;\n}\n\n.text-box i {\n  color: inherit;\n}"

/***/ }),

/***/ "./src/app/main-graph/main-graph.component.html":
/*!******************************************************!*\
  !*** ./src/app/main-graph/main-graph.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <ng-container *ngIf=\"currState == 1\">\n    <!-- <div class=\"card-header\">\n      empfohlene Arbeit : {{ jobInfos[currJobIndex].jobMetadata.name }}\n    </div> -->\n    <div class=\"card-body d-flex justify-content-between\">\n      <div class=\"text-left d-flex align-items-center\">\n        Please select your path\n      </div>\n      <div>\n        <ng-container *ngFor=\"let path of jobInfos[currJobIndex].paths let i = index\">\n          <button class=\"btn btn-light mx-2\" (click)=\"selectPath(i)\" [class.selected]=\"i == currPathIndex\">\n            <span>{{path.name}}</span>\n          </button>\n        </ng-container>\n      </div>\n      <div class=\"text-right\">\n        <button class=\"btn btn-light\" (click)=\"goToDetailMode()\">\n          Go to the details\n        </button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"currState == 0 || currState >= 2\">\n    <div class=\"card-body d-flex justify-content-center align-items-center\" [style.font-size.em]='1.3'>\n      <ng-container *ngIf=\"currState == 0\">\n        <i class=\"fas fa-arrow-down\"></i>\n        Click an educational institution to show the detail information\n        <i class=\"fas fa-arrow-down\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"currState >= 2\">\n        <div [@click-indicator]=\"clickAnimState\" (@click-indicator.done)=\"onClickAnimationDone($event)\">\n          <i class=\"fas fa-arrow-down\"></i>\n          Click here!\n          <i class=\"fas fa-arrow-down\"></i>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n  <div id=\"ground\" [class.detail-mode]=\"currState == 2\">\n    <ng-container *ngFor=\"let rectArray of layoutManager.rects let i = index\">\n      <ng-container *ngFor=\"let rect of rectArray\">\n        <div [style.left.px]=\"rect.x\" [style.top.px]=\"rect.y - rect.height\" [style.width.px]=\"rect.width\" [style.height.px]=\"rect.height\"\n          class=\"box\" [class.info-mode]=\"currState == 0\">\n          <div *ngIf=\"i != 5; else initelem\" [class.clicked]=\"selectedRect == rect\" [class.overview]=\"currState == 1\" class=\"inner-box d-flex align-items-center justify-content-center\"\n            (click)=\"showInfo(rect)\">\n            <div [style.font-size.em]=\"getFlexFont(rect)\" *ngIf=\"currState != 0\" \n              [class.after-course]=\"currCoursePath.currIndex < i && currCoursePath.courses[i] == rect.courseNode.name\"\n              [class.before-course]=\"currCoursePath.currIndex > i && currCoursePath.courses[i] == rect.courseNode.name\"\n              [class.curr-course]=\"currCoursePath.currCourseName == rect.courseNode.name\" class=\"text-box d-flex align-items-center justify-content-center\">\n              <ng-container *ngIf=\"currCoursePath.currCourseName == rect.courseNode.name\">\n                <i class=\"fas fa-child\" [style.font-size.em]=\"'1.3'\"></i>\n              </ng-container>\n              {{ rect.courseNode.name }}\n            </div>\n            <div [style.font-size.em]=\"getFlexFont(rect)\" *ngIf=\"currState == 0\">\n              {{ rect.courseNode.name }}\n            </div>\n          </div>\n          <ng-template #initelem>\n            <div [@initAnimation]=\"initAnimState\" (@initAnimation.done)=\"onInitAnimationDone($event)\" [class.clicked]=\"selectedRect == rect\"\n              [class.overview]=\"currState == 1\" class=\"inner-box d-flex align-items-center justify-content-center\" (click)=\"showInfo(rect)\">\n              <div *ngIf=\"currState != 0\" \n              class=\"text-box d-flex align-items-center justify-content-center\"\n              [class.after-course]=\"currCoursePath.currIndex < i && currCoursePath.courses[i] == rect.courseNode.name\"\n              [class.before-course]=\"currCoursePath.currIndex > i && currCoursePath.courses[i] == rect.courseNode.name\"\n              [class.curr-course]=\"currCoursePath.currCourseName == rect.courseNode.name\"\n              [style.font-size.em]=\"getFlexFont(rect)\">\n                <ng-container *ngIf=\"currCoursePath.currCourseName == rect.courseNode.name\">\n                  <i class=\"fas fa-child\" [style.font-size.em]=\"'1.3'\"></i>\n                </ng-container>\n                {{ rect.courseNode.name }}\n              </div>\n              <div [style.font-size.em]=\"getFlexFont(rect)\" *ngIf=\"currState == 0\">\n                {{ rect.courseNode.name }}\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"currState == 0 && selectedRect == null\">\n      <div [@pointer]=\"enter\" id=\"tutorial\">\n        <i class=\"fas fa-mouse-pointer\"></i>\n      </div>\n    </ng-container>\n    <svg #svg id=\"svg-ground\" [class.consume-events]=\"currState == 0 || currState == 2\" />\n  </div>\n</div>"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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
        this.currState = _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].INFO;
        this.initAnimState = 'on';
        this.clickAnimState = 'on';
        this.initAnimationCount = 0;
    }
    MainGraphComponent.prototype.ngOnInit = function () {
        this.layoutManager = this.d3Service.layoutManager;
        this.d3Service.applySVG(this.svg, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_HEIGHT);
        this.d3Service.initYAxis();
    };
    MainGraphComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.areaService.areaObservable.subscribe(function (area) {
            _this.eduService.applyArea(area);
            _this.layoutManager.updateRects(_this.currState >= _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].DETAIL);
            _this.d3Service.updateLinks();
        });
        this.stateService.stateObservable.subscribe(function (state) {
            _this.selectedRect = null;
            if (state >= _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].OVERVIEW) {
                _this.initAnimState = 'none';
                _this.recommendService.applyUserCourseNode(_this.getUserRect().courseNode);
            }
            if (_this.currState == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].OVERVIEW && state == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].DETAIL) {
                _this.selectedRect = _this.getUserRect();
                _this.showInfo(_this.selectedRect);
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
            _this.currCoursePath = _this.jobInfos[_this.currJobIndex].paths[_this.currPathIndex];
        });
        this.recommendService.currPathIndexObservable.subscribe(function (pathIndex) {
            _this.currPathIndex = pathIndex;
            _this.d3Service.highlightLinks(pathIndex);
            _this.currCoursePath = _this.jobInfos[_this.currJobIndex].paths[_this.currPathIndex];
        });
    };
    MainGraphComponent.prototype.showInfo = function (selectedRect) {
        this.selectedRect = selectedRect;
        this.initAnimState = 'none';
        if (this.currState == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].INFO) {
            this.eduService.selectCourseNode(selectedRect.courseNode);
        }
        else if (this.currState == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].DETAIL) {
            this.recommendService.selectCourseNode(selectedRect.courseNode);
        }
    };
    MainGraphComponent.prototype.ngAfterViewChecked = function () {
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
    MainGraphComponent.prototype.getFlexFont = function (rect) {
        var maxWidth = 0;
        switch (this.currState) {
            case _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].INFO:
                maxWidth = Math.min(rect.width, 300);
                return '' + (maxWidth / 280);
            default:
                maxWidth = Math.min(rect.width, 250);
                return '' + (maxWidth / 300);
        }
    };
    MainGraphComponent.prototype.onInitAnimationDone = function () {
        if (this.selectedRect == null && this.currState == _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"].INFO) {
            this.initAnimState = this.initAnimState === 'on' ? 'off' : 'on';
        }
    };
    MainGraphComponent.prototype.onClickAnimationDone = function () {
        this.clickAnimState = this.clickAnimState === 'on' ? 'off' : 'on';
    };
    MainGraphComponent.prototype.getUserRect = function () {
        var userRect;
        this.layoutManager.rects.forEach(function (rectArr) {
            return rectArr.forEach(function (rect) {
                if (rect.courseNode.name == _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].COURSE_GYMNASIUM) {
                    userRect = rect;
                }
            });
        });
        return userRect;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainGraphComponent.prototype, "svg", void 0);
    MainGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-graph',
            template: __webpack_require__(/*! ./main-graph.component.html */ "./src/app/main-graph/main-graph.component.html"),
            styles: [__webpack_require__(/*! ./main-graph.component.css */ "./src/app/main-graph/main-graph.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('initAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => on', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms 1200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ backgroundColor: '#749dd8' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => off', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ backgroundColor: '#fff' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => on', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ backgroundColor: '#749dd8' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => none', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ backgroundColor: '#fff' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('pointer', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateX(1000%) scale(1.3)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateX(0%) scale(1.3)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(1.0)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('click-indicator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('on => off', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('off => on', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 }))
                    ])
                ])
            ]
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

/***/ "./src/app/map-view/map-view.component.css":
/*!*************************************************!*\
  !*** ./src/app/map-view/map-view.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map-ground {\n  margin-top: 20px;\n}\n\n.card-header {\n  background: #447dd3;\n  color: white;\n}\n\n#map-panel {\n  width: 50%; \n  height: 35vh;\n}\n\n#detail-panel {\n  width: 50%;\n  height: 35vh;\n}\n\n#detail-panel > .card-header {\n  height: 20%;\n}\n\n#detail-content {\n  height: 80%;\n  overflow: scroll;\n  border: 1px #eee solid;\n  border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/map-view/map-view.component.html":
/*!**************************************************!*\
  !*** ./src/app/map-view/map-view.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"map-ground\">\n  <div class=\"row\">\n    <div #gmap id=\"map-panel\" class=\"col\">\n    </div>\n    <div id=\"detail-panel\" class=\"col\">\n      <div class=\"card-header text-white d-flex align-items-center\">\n        Information about the institution\n      </div>\n      <div class=\"card-body\" id=\"detail-content\">\n        <ng-container *ngIf=\"selectedSchoolInfo\">\n          <h5 class=\"card-title\">{{selectedSchoolInfo.name}}</h5>\n          <p class=\"card-text\">\n            Distance: {{distance}} km\n          </p>\n          <p class=\"card-text\">\n            Duration: {{ duration }}\n          </p>\n          <h5 *ngIf=\"selectedSchoolInfo.qualifications.length > 0\" class=\"card-title\">Admission requirements</h5>\n          <ul>\n            <ng-container *ngFor=\"let qualification of selectedSchoolInfo.qualifications\">\n              <li class=\"card-text\">\n                {{ qualification }}\n              </li>\n            </ng-container>\n          </ul>\n          <h5 class=\"card-title\">Curriculum</h5>\n          <ul>\n            <ng-container *ngFor=\"let curriculum of selectedSchoolInfo.curriculums\">\n              <li class=\"card-text\">\n                {{ curriculum }}\n              </li>\n            </ng-container>\n          </ul>\n          <h5 *ngIf=\"selectedSchoolInfo.reviews.length > 0\" class=\"card-title\">Review</h5>\n          <ul>\n            <ng-container *ngFor=\"let review of selectedSchoolInfo.reviews\">\n              <li class=\"card-text\">\n                {{ review }}\n              </li>\n            </ng-container>\n          </ul>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.schoolInfos = [];
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
                    _this.selectedSchoolInfo = null;
                    _this.directionRenderer.setMap(null);
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
        this.schoolInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.recommendJobInfoObservable = this.recommendJobInfoSubject.asObservable();
        this.currJobIndexObservable = this.currJobIndexSubject.asObservable();
        this.currPathIndexObservable = this.currPathIndexSubject.asObservable();
        this.selectedCourseNodeObservable = this.courseNodeSubject.asObservable();
        this.majorIndexObservable = this.majorIndexSubject.asObservable();
        this.schoolInfoObservable = this.schoolInfoSubject.asObservable();
    }
    RecommendService.prototype.applyUserCourseNode = function (courseNode) {
        this.userCourseNode = courseNode;
    };
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
        this.selectSchool(courseNode);
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
    RecommendService.prototype.selectSchool = function (courseNode) {
        if (courseNode.layer == 2) {
            this.schoolInfoSubject.next([
                {
                    name: 'Leibniz Gymnasium',
                    latlng: { lat: 52.489, lng: 13.397 },
                    commuteTime: 80,
                    learningEffort: '180 ECTS',
                    qualifications: [],
                    curriculums: [
                        'https://www.leibnizschule-berlin.de/'
                    ],
                    reviews: []
                },
                {
                    name: 'Helene Lange Gymnasium',
                    latlng: { lat: 53.573, lng: 9.975 },
                    commuteTime: 80,
                    learningEffort: '180 ECTS',
                    qualifications: [],
                    curriculums: [
                        'http://www.hlg-hamburg.de/'
                    ],
                    reviews: []
                },
                {
                    name: 'Fellx-Klein-Gymnasium',
                    latlng: { lat: 51.525, lng: 9.930 },
                    commuteTime: 80,
                    learningEffort: '180 ECTS',
                    qualifications: [],
                    curriculums: [
                        'http://www.fkg-goettingen.de/'
                    ],
                    reviews: []
                },
                {
                    name: 'Georg-Büchner-Gymnasium',
                    latlng: { lat: 51.253, lng: 6.761 },
                    commuteTime: 80,
                    learningEffort: '180 ECTS',
                    qualifications: [],
                    curriculums: [
                        'https://gbg-duesseldorf.lms.schulon.org'
                    ],
                    reviews: []
                }
            ]);
        }
        else {
            this.schoolInfoSubject.next([]);
        }
    };
    RecommendService.prototype.recommendJobs = function (userData) {
        var newJobInfos = [
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: 'Police in higher service',
                salary: 'up to 54000€/year',
                balance: 'less free time',
                generalDescs: [
                    'Policemen in higher services perform management, stuff, and administrative functions in variable areas of responsibility',
                    'Among other things tasks such as border and railway police duties, tasks in regarding air safety, protection of the federal body, and supporting the police force in the federal states are included in the areas of responsiblity'
                ],
                generalReviews: [
                    'I have a lot of pleasure and joy by conducting the job as a policeman in higher services. There are also a lot of advantages which come along with this job. They look as the following:',
                    'above average salary',
                    'contract is rarely cancellable, crisis-proof',
                    'automatic career promotions',
                    'all insurances more inexpensive',
                    'all credits more inexpensive',
                    'after the first years in this job, the work will become easy-going',
                    'Early retirement is very easily possible',
                    'I definitely cannot complain about my job.'
                ]
            }, [
                new _job_info__WEBPACK_IMPORTED_MODULE_1__["CareerPath"]('Primary', [
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG
                ], _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM),
                new _job_info__WEBPACK_IMPORTED_MODULE_1__["CareerPath"]("Alternative1", [
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_BERUFSOBERSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG
                ], _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM),
                new _job_info__WEBPACK_IMPORTED_MODULE_1__["CareerPath"]('Alternative2', [
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG
                ], _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM),
            ]),
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: 'Sports educationist',
                salary: '31200€/year (young professionals), During the subsequent course 45600/year or higher possible',
                balance: 'Good balance between work and leisure',
                generalDescs: [
                    'The occupation as a sports educationist is very diverse. Job opportunities can be found in schools, universities, sport studios, clubs and associations. (predominantely non-profit institutions). Possible occupations of a sports educationist can look like the following: ',
                    'Conducting PE classes',
                    'Health sport/medical prevention of diseases with the aid of sports',
                    'Sports pedagogy with disabled people and difficult children'
                ],
                generalReviews: [
                    'The occupation as a sports educationist gives me every single day fun and joy. I have the opportunity to develop the potential of my participants, to motivate them, and can convey them the joy of exercise and movement.'
                ]
            }, [
                new _job_info__WEBPACK_IMPORTED_MODULE_1__["CareerPath"]('Primary', [
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG
                ], _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM),
                new _job_info__WEBPACK_IMPORTED_MODULE_1__["CareerPath"]('Alternative1', [
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG
                ], _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM),
                new _job_info__WEBPACK_IMPORTED_MODULE_1__["CareerPath"]('Alternative2', [
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_BERUFSOBERSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG
                ], _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM)
            ]),
            new _job_info__WEBPACK_IMPORTED_MODULE_1__["JobInfo"]({
                name: 'Project manager',
                salary: '50700 €/year',
                balance: 'fairly balanced',
                generalDescs: [
                    'Project managers are responsible for the organization, management, and control of projects. These projects can depict technical, business, or information technology solutions – from the development of a novel component up to an introduction of a modern information technology system. During the course of a project the project manager has to keep an eye on the available time and the costs to obtain the most optimal result from the available resources.'
                ],
                generalReviews: [
                    'By working as a project manager, I always have the opportunity to participate in exciting projects. Furthermore, constantly my perseverance is put to the test and I have to confront myself with great challenges.'
                ]
            }, [
                new _job_info__WEBPACK_IMPORTED_MODULE_1__["CareerPath"]('Primary', [
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG
                ], _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM),
                new _job_info__WEBPACK_IMPORTED_MODULE_1__["CareerPath"]('Alternatives', [
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH,
                    _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG
                ], _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM),
            ]),
        ];
        this.recommendJobInfos = newJobInfos;
        this.recommendJobInfoSubject.next(newJobInfos);
        this.currJobIndexSubject.next(0);
    };
    RecommendService.prototype.getMajorInfos = function () {
        switch (this.recommendJobInfos[this.currJobIndex].jobMetadata.name) {
            case 'Police in higher service':
                return [
                    {
                        name: 'Police in higher service',
                        description: ' In terms of theory you are mainly involved with the criminology, laws, and police science and regarding the practical training modules you get firing and safety training. Furthermore, you will be able to accompany experienced colleagues and you will get to know the daily life of the police. With the dual course of study, you will complete one of the most sophisticated police trainings. You will not just acquire the theory knowledge, but also develop your social skills and in the training modules you will be physically challenged.',
                        ncValue: '3.2'
                    }
                ];
            case 'Sports educationist':
                return [{
                        name: 'Sport Sciences',
                        description: 'The Bachelor program Sports Sciences impart a broad and integrated foundation. The students acquire a critical comprehension of crucial theories, principles, and methods with a particular profile in the field of sports, movement, and education. The objective of this major is it to train and develop experts in the field of sports, movement, and education, that are able to work in varied educational related settings where they have to create sports and movement programs, plan them, conduct them, and evaluate them.',
                        ncValue: '1.9'
                    }
                ];
            case 'Project manager':
                return [
                    {
                        name: 'International Management',
                        description: 'Our economy is subject to constant changes and challenges: increasing mobility, technical development and the globalization are the causes and the primary driver. The study program International Management and the related majors can prepare you well for future management tasks in terms of the international enterprises.',
                        ncValue: '2.0'
                    },
                    {
                        name: 'Business Administration',
                        description: ' Business Administration is part of economic sciences. It deals with the economic interrelations and regularities of individual enterprises and deliver findings about structures and processes. The fields and research areas of the Business Administration major are a result of questions that the business units have to encounter.',
                        ncValue: '1.8'
                    }
                ];
            default:
                return [
                    {
                        name: 'International Management',
                        description: 'Our economy is subject to constant changes and challenges: increasing mobility, technical development and the globalization are the causes and the primary driver. The study program International Management and the related majors can prepare you well for future management tasks in terms of the international enterprises.',
                        ncValue: '2.0'
                    },
                    {
                        name: 'Business Administration',
                        description: 'Business Administration is part of economic sciences. It deals with the economic interrelations and regularities of individual enterprises and deliver findings about structures and processes. The fields and research areas of the Business Administration major are a result of questions that the business units have to encounter.',
                        ncValue: '1.8'
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

module.exports = "h2 {\n  font-size: 1.5em;\n}\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #447dd3;\n}\ni {\n  color: #447dd3;\n  margin-right: 5px;\n}\n.open-btn {\n  border-color: #447dd3;\n  width: 100%;\n  font-size: 0.9em;\n  margin-top: 20px;\n  margin-left: 10px;\n  color: #447dd3;\n  text-align: left;\n}\n.open-btn:hover {\n  background-color: white;\n  color: #898989;\n}\n.modal-body {\n  max-height: 650px;\n  overflow: scroll;\n}\n.register-btn {\n  pointer-events: none;\n}\n.register-btn.actived {\n  pointer-events: all;\n  background-color: #447dd3;\n}\n"

/***/ }),

/***/ "./src/app/user-modal/user-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-modal/user-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Please enter your data</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <form action=\"\" method=\"\">\n                        <div class=\"form-group\">\n                            <label for=\"currentGrade\">Your current grade</label>\n                            <input [(ngModel)]=\"currentGrade\" class=\"form-control\" name=\"currentGrade\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"gpa\">Your current average GPA</label>\n                            <input [(ngModel)]=\"gpa\" class=\"form-control\" name=\"gpa\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"address\">Your address</label>\n                            <input [(ngModel)]=\"address\" class=\"form-control\" name=\"address\" value=\"Berlin\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"postalcode\">Your postal code</label>\n                            <input [(ngModel)]=\"postalCode\" class=\"form-control\" name=\"postalCode\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"school\">Which form of middle school have you attended (Gymnasium, Real-, Gesamt-, or Hauptschule)? </label>\n                            <input [(ngModel)]=\"school\" class=\"form-control\" name=\"school\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"major\">Preferred major (optional)</label>\n                            <input [(ngModel)]=\"major\" class=\"form-control\" name=\"major\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"dreamjob\">Dream job (optional)</label>\n                            <input [(ngModel)]=\"dreamJob\" class=\"form-control\" name=\"dreamJob\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"strongestSub\">Your best subject</label>\n                            <input [(ngModel)]=\"strongestSub\" class=\"form-control\" name=\"strongestSub\" />\n                        </div>\n                        <h2>What are your interests?\n                            <span style=\"color:red\">(*Multiple selection possible)</span>\n                        </h2>\n                        <div class=\"row\">\n                            <ng-container *ngFor=\"let interest of interests\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-check\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"check\" (click)=\"checkInterest(interest)\">\n                                            <span class=\"label-text\">{{interest}}</span>\n                                        </label>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <h2>What are your strengths?\n                            <span style=\"color:red\">(* Multiple selection possible)</span>\n                        </h2>\n                        <div class=\"row\">\n                            <ng-container *ngFor=\"let strength of strengths\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-check\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"check\" (click)=\"checkStrength(strength)\">\n                                            <span class=\"label-text\">{{strength}}</span>\n                                        </label>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light register-btn\" [class.actived]=\"currentGrade && gpa && address\n      && postalCode && school && strongestSub \n      && checkedInterests.length > 0 && checkedStrengths.length > 0\" (click)=\"registerUserInput()\">Send</button>\n        <!-- <button type=\"button\" class=\"btn btn-light register-btn\" [class.actived]=\"true\" (click)=\"registerUserInput()\">Register</button> -->\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Cancel</button>\n    </div>\n</ng-template>\n\n<ng-container>\n    <button class=\"btn btn-outline-primary mb-2 mr-2 open-btn\" (click)=\"openModal(content)\">\n        <i class=\"fas fa-user\"></i>\n        Input the user information\n    </button>\n</ng-container>"

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
            'Production', 'Business Administration', 'Organization', 'Sport', 'Music', 'Art', 'Natural Science', 'Languages'
        ];
        this.strengths = [
            'Leadership', 'Strong perseverance', 'Athletic', 'Independence', 'Ability to work in a team', 'Sense of responsibility', 'Creativity', 'Diligence',
            'Strong assertiveness', 'Accurateness', 'Communication skills'
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