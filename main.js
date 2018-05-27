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

module.exports = "h1 {\n  margin: 10px 50px;\n}\n\n.side {\n  float: left;\n  margin: 20px 0px;\n}\n\napp-main-graph {\n  float: left;\n  margin: 20px 50px;\n}\n\napp-detail-panel {\n  float: left;\n  width: 40%;\n  height: 700px;\n  margin: 20px 0px;\n  padding: 20px;\n  border: solid 2px #b2b2b2;\n  border-radius: 5px;\n}\n\n#main-view {\n  width: 100%;\n  height: 800px;\n}\n\n#map-view {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-view\">\n  <header>\n    <h1> Deutsches Bildungssystem </h1>\n  </header>\n  <app-main-graph [recommendResult]=\"currentRecommendResult\" (courseNode)=\"onSelectCourseNode($event)\" (isDetailMode)=\"changeDetailMode($event)\"\n    [isDetailMode]=\"isDetailMode\"></app-main-graph>\n  <div class=\"side\">\n    <app-edu-side-panel [selectedCourseNode]=\"selectedCourseNode\" [recommendResults]=\"recommendResults\" [isDetailMode]=\"isDetailMode\" (selectedJobIndex)=\"selectJobIndex($event)\"></app-edu-side-panel>\n    <app-user-modal (userData)=\"applyUserData($event)\" [isUserMode]=\"recommendResults != null\"></app-user-modal>\n  </div>\n  <ng-container *ngIf=\"isDetailMode\">\n    <app-detail-panel (isDetailMode)=\"changeDetailMode($event)\" [majorInfos]=\"majorInfos\" (majorInfo)=\"selectMajorInfo($event)\"></app-detail-panel>\n  </ng-container>\n</div>\n<div id=\"map-view\">\n  <ng-container *ngIf=\"schoolInfos && isDetailMode\">\n    <app-map-view [schoolInfos]=\"schoolInfos\" [userData]=\"userData\"></app-map-view>\n  </ng-container>\n</div>"

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
/* harmony import */ var _major_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./major-info */ "./src/app/major-info.ts");
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
    function AppComponent(recommendService) {
        this.recommendService = recommendService;
        this.recommendResults = null;
        this.currentRecommendResult = null;
        this.isDetailMode = false;
        this.majorInfos = [_major_info__WEBPACK_IMPORTED_MODULE_2__["MajorInfo"].NONE];
        this.schoolInfos = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.applyUserData = function (userData) {
        this.selectedCourseNode = null;
        this.recommendResults = this.recommendService.getRecommendResult(userData);
        this.currentRecommendResult = this.recommendResults[0];
        this.userData = userData;
    };
    AppComponent.prototype.onSelectCourseNode = function (courseNode) {
        // detail 모드일 때 
        if (this.isDetailMode) {
            // 대학교를 골랐을 때
            if (courseNode.layer == 4) {
                this.majorInfos = this.recommendService.getMajorInfos(courseNode, this.currentRecommendResult);
                // 그 외의 학교
            }
            else {
                this.majorInfos = [_major_info__WEBPACK_IMPORTED_MODULE_2__["MajorInfo"].NONE];
                this.schoolInfos = this.recommendService.getSchoolInfos(this.selectedCourseNode, this.currentRecommendResult);
            }
            this.selectedCourseNode = courseNode;
            // info 모드일 때 
        }
        else {
            this.selectedCourseNode = courseNode;
        }
    };
    AppComponent.prototype.selectJobIndex = function (index) {
        this.currentRecommendResult = this.recommendResults[index];
    };
    AppComponent.prototype.changeDetailMode = function (isDetailMode) {
        this.isDetailMode = isDetailMode;
    };
    AppComponent.prototype.selectMajorInfo = function (majorInfo) {
        this.schoolInfos = this.recommendService.getSchoolInfos(this.selectedCourseNode, this.currentRecommendResult);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_recommend_service__WEBPACK_IMPORTED_MODULE_1__["RecommendService"]])
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
        this.areaSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("Berlin");
        this.areaObservable = this.areaSource.asObservable();
        this.currentArea = 'Berlin';
    }
    AreaService.prototype.changeCurrentArea = function (area) {
        this.areaSource.next(area);
        this.currentArea = 'Berlin';
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
    Constants.GRAPH_MARGIN_SIDE = 10;
    Constants.GRAPH_MARGIN_TOP = 20;
    Constants.GRAPH_MARGIN_BOTTOM = 2;
    Constants.COURSE_KINDERGARTEN = 'kindergarten';
    Constants.COURSE_GRUNDSCHULE = 'Grundschule';
    Constants.COURSE_GYMNASIUM = 'Gymnasium';
    Constants.COURSE_GEASAMTSCHULE = "Gesamtschule";
    Constants.COURSE_REALSCHULE = "Realschule";
    Constants.COURSE_HAUPTSCHULE = "Hauptschle";
    Constants.COURSE_GYMNASIALE = 'Gymnasiale Oberstufe';
    Constants.COURSE_BERUFSOBERSCHULE = "Berufsoberschule";
    Constants.COURSE_FACHOBERSCHULE = 'Fachoberschule';
    Constants.COURSE_BEFURSFACHSCHULE = "Befursfachschule";
    Constants.COURSE_BETRIEB = "Berufsschule und Betrieb";
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
var CourseNode = /** @class */ (function () {
    function CourseNode(layer, name, fromAge, toAge, info) {
        this.layer = layer;
        this.name = name;
        this.fromAge = fromAge;
        this.toAge = toAge;
        this.info = info;
    }
    return CourseNode;
}());

var CourseInfo = /** @class */ (function () {
    function CourseInfo(info, certificate, options) {
        this.info = info;
        this.certificate = certificate;
        this.options = options;
    }
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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/index.js");
/* harmony import */ var _graph_course_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph/course-link */ "./src/app/graph/course-link.ts");
/* harmony import */ var _graph_layout_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graph/layout-manager */ "./src/app/graph/layout-manager.ts");
/* harmony import */ var _edu_structure_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edu-structure.service */ "./src/app/edu-structure.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import * as d3 from 'd3'




var D3Service = /** @class */ (function () {
    function D3Service(eduService) {
        this.eduService = eduService;
        this.links = [];
        this.layoutManager = new _graph_layout_manager__WEBPACK_IMPORTED_MODULE_7__["LayoutManager"](this.eduService.courseNodes);
    }
    D3Service.prototype.translate = function (x, y) {
        return "translate(" + x + ", " + y + ")";
    };
    D3Service.prototype.applySVG = function (svgRef, width, height) {
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"](svgRef.nativeElement)
            .attr("width", width)
            .attr("height", height);
    };
    D3Service.prototype.initLinks = function (paths) {
        var _this = this;
        paths.forEach(function (path, index) {
            path.paths.forEach(function (subPath) {
                _this.links.push(new _graph_course_link__WEBPACK_IMPORTED_MODULE_6__["CourseLink"](subPath, _this.layoutManager, index));
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
            .transition(d3_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(400).ease(d3_ease__WEBPACK_IMPORTED_MODULE_5__["easeLinear"]))
            .attr("d", function (d) { return d.getPath(); });
    };
    D3Service.prototype.trimLinks = function (detailIndex) {
        this.links = this.links.filter(function (link) { return detailIndex == link.detailIndex; });
        this.svg.selectAll('.link')
            .data(this.links)
            .exit()
            .remove();
        this.updateLinks();
    };
    D3Service.prototype.highlightLinks = function (pathIndex) {
        this.svg.selectAll(".link")
            .data(this.links)
            .transition(d3_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(400))
            .attr("stroke-width", function (d) {
            if (d.detailIndex == pathIndex) {
                return 6;
            }
            else {
                return 3;
            }
        })
            .transition(d3_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(400))
            .attr("stroke-width", 3);
    };
    D3Service.prototype.initYAxis = function () {
        var courseNodes = this.eduService.courseNodes;
        var minAge = 3;
        var maxAge = 28;
        var yScale = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().range([_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_HEIGHT - _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_MARGIN_BOTTOM, _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_MARGIN_TOP])
            .domain([minAge, maxAge]);
        this.svg.append('g')
            .attr("transform", this.translate(_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_MARGIN_SIDE, 0))
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](yScale));
        this.svg.append('text')
            .attr('class', 'legend')
            .attr("transform", this.translate(_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_MARGIN_SIDE - 50, 10))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Jahre");
    };
    D3Service.prototype.setYAxisMode = function (isDetail) {
        var width = isDetail ? _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_DETAIL_WIDTH : _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_WIDTH;
        var transitionTime = isDetail ? 400 : 0;
        var courseNodes = this.eduService.courseNodes;
        var minAge = 3;
        var maxAge = 28;
        var yScale = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().range([_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_HEIGHT - _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_MARGIN_BOTTOM, _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_MARGIN_TOP])
            .domain([minAge, maxAge]);
        this.svg.select('g')
            .transition(d3_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(transitionTime).ease(d3_ease__WEBPACK_IMPORTED_MODULE_5__["easeLinear"]))
            .attr("transform", this.translate(width - _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_MARGIN_SIDE, 0))
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](yScale));
        this.svg.select('.legend')
            .transition(d3_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(transitionTime).ease(d3_ease__WEBPACK_IMPORTED_MODULE_5__["easeLinear"]))
            .attr("transform", this.translate(width - _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_MARGIN_SIDE - 50, 10));
    };
    D3Service.prototype.changeDetailMode = function (recommendResult, detailIndex) {
        var careerPath = recommendResult.paths[0];
        this.layoutManager.trimRects(careerPath);
        this.trimLinks(0);
        this.svg
            .transition(d3_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(400).ease(d3_ease__WEBPACK_IMPORTED_MODULE_5__["easeLinear"]))
            .attr('width', _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_DETAIL_WIDTH);
        this.setYAxisMode(true);
    };
    D3Service.prototype.changeOverviewMode = function (paths) {
        this.layoutManager.generateRects();
        this.deleteLinks();
        this.initLinks(paths);
        this.setYAxisMode(false);
        this.svg
            .attr('width', _constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].GRAPH_WIDTH);
    };
    D3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_edu_structure_service__WEBPACK_IMPORTED_MODULE_8__["EduStructureService"]])
    ], D3Service);
    return D3Service;
}());



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

module.exports = "<div>\n  <button class=\"btn btn-light back\" (click)=\"clickBackBtn()\">Zurück</button>\n</div>\n<ng-container *ngIf=\"currState == DetailPanelState.IDLE\">\n  <div>\n    <span class=\"card-title\">\n      <h3>Detail-Ansicht über das Studienfach</h3>\n    </span>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"currState == DetailPanelState.MAJOR_INFOS\">\n  <div class=\"card\">\n    <div class=\"card-header text-white\">\n      Empfohlene Studienfächer\n    </div>\n    <div class=\"card-body\">\n      <ng-container *ngFor=\"let majorInfo of majorInfos let i = index\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"selectMajorInfo(majorInfo)\">{{ majorInfo.name }}</button>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"selectedMajorInfo != null\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ selectedMajorInfo.name }} </h4>\n    <p class=\"card-text\">\n      {{ selectedMajorInfo.description }}\n    </p>\n    <h4 class=\"card-title\">Lernaufwand: {{ selectedMajorInfo.learningEffort }}</h4>\n    <h4 class=\"card-title\">Durchschnitts-NC-Wert: {{ selectedMajorInfo.ncValue }}</h4>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/detail-panel/detail-panel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/detail-panel/detail-panel.component.ts ***!
  \********************************************************/
/*! exports provided: DetailPanelComponent, DetailPanelState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPanelComponent", function() { return DetailPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPanelState", function() { return DetailPanelState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _major_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../major-info */ "./src/app/major-info.ts");
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
    function DetailPanelComponent() {
        this.detailModeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.majorInfoEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.majorInfos = [_major_info__WEBPACK_IMPORTED_MODULE_1__["MajorInfo"].NONE];
        this.currState = DetailPanelState.IDLE;
        this.DetailPanelState = DetailPanelState;
    }
    DetailPanelComponent.prototype.ngOnInit = function () {
    };
    DetailPanelComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['majorInfos'].isFirstChange() && this.majorInfos[0] != _major_info__WEBPACK_IMPORTED_MODULE_1__["MajorInfo"].NONE) {
            this.goToNextState(DetailPanelState.MAJOR_INFOS);
        }
    };
    DetailPanelComponent.prototype.clickBackBtn = function () {
        switch (this.currState) {
            case DetailPanelState.IDLE:
                this.detailModeEmitter.emit(false);
                break;
            case DetailPanelState.MAJOR_INFOS:
                this.goToNextState(DetailPanelState.IDLE);
                break;
            case DetailPanelState.MAJOR_DETAIL:
                this.goToNextState(DetailPanelState.MAJOR_INFOS);
                break;
        }
    };
    DetailPanelComponent.prototype.selectMajorInfo = function (majorInfo) {
        this.selectedMajorInfo = majorInfo;
        this.goToNextState(DetailPanelState.MAJOR_DETAIL);
    };
    DetailPanelComponent.prototype.goToNextState = function (nextState) {
        switch (nextState) {
            case DetailPanelState.IDLE:
                break;
            case DetailPanelState.MAJOR_INFOS:
                this.selectedMajorInfo = null;
                break;
            case DetailPanelState.MAJOR_DETAIL:
                this.majorInfoEmitter.emit(this.selectedMajorInfo);
                break;
        }
        this.currState = nextState;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('isDetailMode'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailPanelComponent.prototype, "detailModeEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('majorInfo'),
        __metadata("design:type", Object)
    ], DetailPanelComponent.prototype, "majorInfoEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetailPanelComponent.prototype, "majorInfos", void 0);
    DetailPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-panel',
            template: __webpack_require__(/*! ./detail-panel.component.html */ "./src/app/detail-panel/detail-panel.component.html"),
            styles: [__webpack_require__(/*! ./detail-panel.component.css */ "./src/app/detail-panel/detail-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailPanelComponent);
    return DetailPanelComponent;
}());

var DetailPanelState;
(function (DetailPanelState) {
    DetailPanelState[DetailPanelState["IDLE"] = 0] = "IDLE";
    DetailPanelState[DetailPanelState["MAJOR_INFOS"] = 1] = "MAJOR_INFOS";
    DetailPanelState[DetailPanelState["MAJOR_DETAIL"] = 2] = "MAJOR_DETAIL";
})(DetailPanelState || (DetailPanelState = {}));


/***/ }),

/***/ "./src/app/edu-side-panel/edu-side-panel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edu-side-panel/edu-side-panel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Oldenburg');\n#dropdown {\n  display: block;\n  padding: 5px 8px;\n  width: 300px;\n  margin: 0px 10px;\n  position: relative;\n  cursor: pointer;\n  border-left: 4px solid #739cda;\n  background: #fff;\n  font-size: 1.2em;\n  color: #656565;\n  font-weight: normal;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 2px rgba(0,0,0,0.3);\n  transition: all 0.15s linear;\n}\n#dropdown:hover { color: #898989; }\n#dropdown.open {\n  background: #5a90e0;\n  color: #fff;\n  border-left-color: #6c6d70;\n}\nul {\n  position: absolute;\n  top: 70%;\n  left: -4px;\n  width: 300px;\n  padding: 0px 0px;\n  pointer-events: none;\n  opacity: 0;\n  border-left: 4px solid #8e9196;\n  background: #fff;\n  box-shadow: 1px 1px 2px rgba(0,0,0,0.3);\n  list-style-type: none;\n  transition: height 0.3s, opacity 0.3s, top 0.3s;;\n}\nul li { font-size: 0.9em; }\nul li a {\n  text-decoration: none;\n  display: block;\n  color: #447dd3;\n  padding: 5px 8px;\n}\nul li a:hover {\n  color: #6fa0e9;\n  background: #e7f0f7;\n}\nul.open {\n  pointer-events: all;\n  display:block;\n  opacity: 1;\n  top: 100%;\n}\n#detail-view {\n  margin: 20px 10px;\n  width: 300px;\n  transition: margin 0.3s;\n}\n#detail-view.open {\n  margin: 200px 10px;\n  transition: margin 0.3s;\n}\n.elem {\n  margin-top: 15px;\n}\n.card-header {\n  background-color: #447dd3;\n  font-weight: 400;\n  font-size: 1.2em;\n}\n.card-body {\n  min-height: 150px;\n  max-height: 350px;\n  overflow: scroll;\n}\n.btn-light {\n  width: 250px;\n  margin: 10px 0px;\n}\n.btn-light:hover {\n  background-color: #447dd3;\n  color: white;\n}"

/***/ }),

/***/ "./src/app/edu-side-panel/edu-side-panel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edu-side-panel/edu-side-panel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #dropdown id=\"dropdown\" class=\"ddmenu\" (click)=\"toggle()\" [class.open]=\"opened\">\n  {{selectedArea}}\n  <ul [class.open]=\"opened\">\n    <li *ngFor=\"let area of areas\">\n      <a (click)=\"onClickArea(area)\">{{area}}</a>\n    </li>\n  </ul>\n</div>\n\n<ng-container *ngIf=\"recommendResults == null\">\n  <div id=\"detail-view\" [class.open]=\"opened\">\n    <ng-container *ngIf=\"selectedCourseNode\">\n      <ng-container *ngIf=\"selectedCourseNode.layer >= 2 && selectedCourseNode.layer <= 4\">\n        <div class=\"card elem\">\n          <div class=\"card-header text-white\">\n            Mögliche Schulabschlüsse          \n          </div>\n          <div class=\"card-body\">\n            {{selectedCourseNode.info.certificate}}\n          </div>\n        </div>\n        <div class=\"card elem\">\n          <div class=\"card-header text-white\">\n            Anschließende Möglichkeiten:\n          </div>\n          <div class=\"card-body\">\n            {{selectedCourseNode.info.options}}\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"selectedCourseNode.layer <= 1 || selectedCourseNode.layer >= 5\">\n        <div class=\"card elem\">\n          <div class=\"card-header text-white\">\n            Allgemeine Informationen\n          </div>\n          <div class=\"card-body\">\n            {{selectedCourseNode.info.info}}\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n</ng-container>\n\n<ng-container *ngIf=\"recommendResults != null\">\n  <div id=\"detail-view\" [class.open]=\"opened\">\n    <ng-container *ngIf=\"!isDetailMode\">\n      <div class=\"card elem\">\n        <div class=\"card-header text-white\">\n          Suche einen Job aus\n        </div>\n        <div class=\"card-body\">\n          <ng-container *ngFor=\"let result of recommendResults let i = index\">\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"changeCurrentJobIndex(i)\">{{ result.jobInfo.name }}</button>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"card elem\">\n      <div class=\"card-header text-white\">\n        Jobinformationen\n      </div>\n      <ng-container *ngIf=\"recommendResult != null\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Durchschnittl. Gehalt</h5>\n          <p class=\"card-text\">\n            {{ recommendResult.jobInfo.salary }}\n          </p>\n          <h5 class=\"card-title\">Arbeit & Freizeit: </h5>\n          <p class=\"card-text\">\n            {{ recommendResult.jobInfo.balance }}\n          </p>\n          <h5 class=\"card-title\"> Generelle Bewertung: </h5>\n          <ng-container *ngFor=\"let review of recommendResult.jobInfo.reviews\">\n            <p class=\"card-text\">\n              {{ review }}\n            </p>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>"

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
/* harmony import */ var _course_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course-node */ "./src/app/course-node.ts");
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
    function EduSidePanelComponent(areaService) {
        this.areaService = areaService;
        this.selectedJobIndexEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recommendResults = [];
        this.recommendResult = null;
        this.opened = false;
        this.areas = areaService.AREAS;
    }
    EduSidePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.areaObservable.subscribe(function (area) {
            _this.selectedArea = area;
        });
    };
    EduSidePanelComponent.prototype.ngOnChanges = function (changes) {
        if (changes['recommenResults'] && !changes['recommendResults'].isFirstChange()) {
            this.recommendResult = this.recommendResults[0];
        }
    };
    EduSidePanelComponent.prototype.toggle = function () {
        this.opened = !this.opened;
    };
    EduSidePanelComponent.prototype.onClickArea = function (area) {
        this.areaService.changeCurrentArea(area);
    };
    EduSidePanelComponent.prototype.changeCurrentJobIndex = function (index) {
        this.selectedJobIndexEmitter.emit(index);
        this.recommendResult = this.recommendResults[index];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('selectedJobIndex'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EduSidePanelComponent.prototype, "selectedJobIndexEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _course_node__WEBPACK_IMPORTED_MODULE_2__["CourseNode"])
    ], EduSidePanelComponent.prototype, "selectedCourseNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EduSidePanelComponent.prototype, "recommendResults", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EduSidePanelComponent.prototype, "isDetailMode", void 0);
    EduSidePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edu-side-panel',
            template: __webpack_require__(/*! ./edu-side-panel.component.html */ "./src/app/edu-side-panel/edu-side-panel.component.html"),
            styles: [__webpack_require__(/*! ./edu-side-panel.component.css */ "./src/app/edu-side-panel/edu-side-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_area_service__WEBPACK_IMPORTED_MODULE_1__["AreaService"]])
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
/* harmony import */ var _course_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-node */ "./src/app/course-node.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
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
        this.currentArea = 'Berlin';
        this.courseNodes = [
            [
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](0, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_KINDERGARTEN, 3, 5, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('• Elementarstufe des Bildungssystems •	Betreuung, Bildung und Erziehung der Kinder', '', ''))
            ],
            [
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](1, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GRUNDSCHULE, 6, 11, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('• Bildung des Fundaments für weiterführende Schulbildung (Gymnasium, Real-, Haupt- und Gesamtschule) durch Vermittlung grundlegender Lern- und Arbeitsformen, mathematische, sprachliche und sachunterrichtliche Kenntnisse ', '', ''))
            ],
            [
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIUM, 12, 18, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Mittlere Reife (nach 10. Klasse) •	Hauptschulabschluss (nach 9. Klasse)', 'nahtloser Übergang zur gymnasialen Oberstufe •	Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden •	Allgemeine Hochschulreife (Abitur) (nach 12. Klasse) Oder Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule und Berufskolleg oder Lehre/Ausbildung ')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GEASAMTSCHULE, 12, 18, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Mittlere Reife (nach 10. Klasse), Hauptschulabschluss (nach 9. Klasse)', '•	nahtloser Übergang zur gymnasialen Oberstufe, •	Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule und Berufskolleg oder Lehre/Ausbildung ')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_REALSCHULE, 12, 18, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Mittlere Reife (nach 10. Klasse), •	Hauptschulabschluss (nach 9. Klasse)', 'Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule, Berufskolleg, gymnasiale Oberstufe (mittels Qualifikation) oder Lehre/Ausbildung ')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](2, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_HAUPTSCHULE, 12, 18, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Mittlere Reife (nach 10. Klasse), •	Hauptschulabschluss (nach 9. Klasse)', 'Berechtigung zum Besuch von Schulformen der Sekundarstufe II z. B Fachoberschule, Berufskolleg, gymnasiale Oberstufe (mittels Qualifikation) oder Lehre/Ausbildung '))
            ],
            [
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_GYMNASIALE, 19, 21, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Fachoberschulreife (nach 11. Klasse) -> häufig muss praktischer Teil (Praktikum) nachgeholt werden, •	Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)', 'Berechtigung zum Besuch der Universität und gleichwertigen Institutionen ')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_BERUFSOBERSCHULE, 19, 21, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Fachoberschulreife (nach 11. Klasse), •	Allgemeine Hochschulreife (Abitur) (nach 12. Klasse)', 'Berechtigung zum Besuch der Universität und gleichwertigen Institutionen ')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHOBERSCHULE, 19, 21, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Fachoberschulreife (nach 12. Klasse), •	Allgemeine Hochschulreife (Abitur) (nach 13. Klasse)', 'Berechtigung zum Besuch der Universität und gleichwertigen Institutionen wie Fachhochschulen')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_BEFURSFACHSCHULE, 19, 21, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Berufsschulabschluss', 'Weiterbildung oder Berechtigung zum Besuch mancher Universitäten möglich')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](3, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_BETRIEB, 19, 21, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Berufsschulabschluss', 'Weiterbildung oder Berechtigung zum Besuch mancher Universitäten möglich'))
            ],
            [
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_UNIVERSITAT, 22, 25, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Bachelor-, •	Masterabschluss, •	Doktor (Weiterbildung) (derzeitig nur an Universitäten möglich)', '•	Einstieg in den Beruf, •	Tätigkeit in die Forschung, •	Weiterbildung')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_BERUFSAKADEMIE, 22, 25, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Diplom- (jeweilige Studiengang) oder Bachelor', '•	Master-Abschluss an einer Universität oder einer Fachhochschule, •	Einstieg in den Beruf, •	Weiterbildung ')),
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](4, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_FACHHOCH, 22, 25, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('', '•	Bachelor, •	und Masterabschluss', 'Einstieg in den Beruf oder Weiterbildung'))
            ],
            [
                new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseNode"](5, _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].COURSE_WEITERBILDUNG, 26, 28, new _course_node__WEBPACK_IMPORTED_MODULE_1__["CourseInfo"]('Vertiefung und Erweiterung der vorhandenen beruflichen Vorbildung Fachliche Ausrichtung bisher weiter vertieft oder Fortbildung im eigenen Fach: Erweiterung vorhandenen Wissens bzw. Kompetenzen Formen der beruflichen Weiterbildung: Ärztliche Weiterbildung, APO-IT, Ph. D., Habilitation, Verwaltungs- und Wirtschaftsakademie, Meisterprüfung, Staatlich geprüfter Betriebswirt, staatlich geprüfter Gestalter im Handwerk, Staatlich geprüfter Restaurator im Handwerk, Staatlich geprüfter Techniker, Corporate University, Betriebsinformatiker, Lerninseln, Weiterbildende, nicht-konsekutive Master¬studiengänge', '', ''))
            ]
        ];
    }
    EduStructureService.prototype.applyArea = function (area) {
        if (this.currentArea == 'Berlin' && this.currentArea != area) {
            this.courseNodes[2].forEach(function (node) { return node.toAge -= 2; });
            for (var i = 3; i < this.courseNodes.length; i++) {
                this.courseNodes[i].forEach(function (node) { return node.fromAge -= 2; });
                this.courseNodes[i].forEach(function (node) { return node.toAge -= 2; });
            }
        }
        if (this.currentArea != 'Berlin' && area == 'Berlin') {
            this.courseNodes[2].forEach(function (node) { return node.toAge += 2; });
            for (var i = 3; i < this.courseNodes.length; i++) {
                this.courseNodes[i].forEach(function (node) { return node.fromAge += 2; });
                this.courseNodes[i].forEach(function (node) { return node.toAge += 2; });
            }
        }
        this.currentArea = area;
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
        var fromRect = rects.find(function (rect) { return rect.courseNode.name == _this.subPath.from; });
        var toRect = rects.find(function (rect) { return rect.courseNode.name == _this.subPath.to; });
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
            arr.forEach(function (node, i) {
                _this.rects.push(new _rect__WEBPACK_IMPORTED_MODULE_1__["Rect"](node, layer, i));
            });
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
        var courseIndex = 0;
        currCourseNodes.forEach(function (arr, index) {
            var layer = _this.layers[index];
            arr.forEach(function (node, i) {
                _this.rects[courseIndex++].updateRect(layer, i, isDetailMode);
            });
        });
    };
    LayoutManager.prototype.trimRects = function (careerPath) {
        var _this = this;
        this.selectedCourseNodes = [];
        var courseNames = new Set([]);
        careerPath.paths.forEach(function (path) {
            courseNames.add(path.from);
            courseNames.add(path.to);
        });
        this.courseNodes.forEach(function (arr, index) {
            _this.selectedCourseNodes.push([]);
            arr.forEach(function (node) {
                if (courseNames.has(node.name)) {
                    _this.selectedCourseNodes[index].push(node);
                }
            });
        });
        this.layers = [];
        this.selectedCourseNodes.forEach(function (arr) {
            var minAge = Math.min.apply(null, arr.map(function (node) { return node.fromAge; }));
            var maxAge = Math.max.apply(null, arr.map(function (node) { return node.toAge; }));
            _this.layers.push(new _layer__WEBPACK_IMPORTED_MODULE_0__["Layer"](minAge - 3, maxAge - 2, arr.length));
        });
        this.rects = this.rects.filter(function (rect) { return courseNames.has(rect.courseNode.name); });
        console.log(this.rects);
        var courseIndex = 0;
        this.selectedCourseNodes.forEach(function (arr, index) {
            var layer = _this.layers[index];
            arr.forEach(function (node, i) {
                _this.rects[courseIndex++].updateRect(layer, i, true);
            });
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
        var rectWidth = graphWidth / layer.colCount * 0.7;
        var rectOffset = (graphWidth - rectWidth * layer.colCount) / (layer.colCount + 1);
        var rectHeight = (layer.to - layer.from) * 25;
        this.x = index * (rectWidth + rectOffset) + rectOffset;
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_HEIGHT - layer.from * 25;
        this.width = rectWidth;
        this.height = rectHeight;
    }
    Rect.prototype.getStartPos = function () {
        return [Math.floor(this.x + this.width / 2), Math.floor(this.y - this.height * 0.71)];
    };
    Rect.prototype.getEndPos = function () {
        return [Math.floor(this.x + this.width / 2), Math.floor(this.y - this.height * 0.31)];
    };
    Rect.prototype.updateRect = function (layer, index, isDetailMode) {
        if (isDetailMode) {
            this.updateInDetailMode(layer);
        }
        else {
            this.updateInOverviewMode(layer, index);
        }
    };
    Rect.prototype.updateInOverviewMode = function (layer, index) {
        var graphWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_MARGIN_SIDE * 2;
        var rectWidth = graphWidth / layer.colCount * 0.7;
        var rectOffset = (graphWidth - rectWidth * layer.colCount) / (layer.colCount + 1);
        var rectHeight = (layer.to - layer.from) * 25;
        this.x = index * (rectWidth + rectOffset) + rectOffset;
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_HEIGHT - layer.from * 25;
        this.width = rectWidth;
        this.height = rectHeight;
    };
    Rect.prototype.updateInDetailMode = function (layer) {
        var graphWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_DETAIL_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_MARGIN_SIDE * 2;
        var rectWidth = graphWidth / layer.colCount * 0.7;
        var rectHeight = (layer.to - layer.from) * 25;
        this.x = 50;
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].GRAPH_HEIGHT - layer.from * 25;
        this.width = rectWidth;
        this.height = rectHeight;
    };
    Rect.prototype.changeDetailMode = function (layer) {
    };
    return Rect;
}());



/***/ }),

/***/ "./src/app/main-graph/main-graph.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main-graph/main-graph.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center;\n  width: 100%;\n}\n#ground {\n  position:relative;\n  background: #eee;\n}\n#ground.detail-mode {\n  width: 300px;\n}\n#svg-ground {\n  position: relative;\n  left: 0;\n}\n.edge {\n  position: absolute;\n}\n.box {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  transition-duration: 0.4s;\n  transition-property: left, top, width, height;\n  transition-timing-function: linear;\n}\n.inner-box {\n  display: flex;\n  position: absolute;\n  border: 1px solid #ddd;\n  background: #fff;\n  border-radius: 5px;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 3px #ccc;\n  align-items: center;\n  width: 90%;\n  height: 98%;\n}\n.inner-box.info-mode:hover {\n  background-color: #447dd3;\n}\n.inner-box.detail-mode:hover {\n  background-color: #447dd3;\n}\n.text-box {\n  display: flex;\n  position: absolute;\n  border: 1px solid #888;\n  border-radius: 5px;\n  width: 100%;\n  height: 40%;\n  text-align: center;\n  align-items: center;\n  font-size: 0.7em;\n  background-color: white;\n}\nline {\n  stroke:black;\n  stroke-width: 2px;\n  transition: x2 0.3s;\n}\nsvg.info-mode {\n  pointer-events: none;\n}\nsvg.detail-mode {\n  pointer-events: none;\n}\n#select-path-panel {\n  position: absolute;\n  display: flex;\n  left: 10px;\n  top: 5px;\n  align-items: center;\n  justify-content: center;\n  border: solid gray 1px;\n  padding: 3px;\n  border-radius: 3px;\n  color: white;\n  background: #447dd3;\n  height: 40px;\n  width: 80%;\n}\n#select-path-panel .btn.btn-light {\n  margin-right: 20px;\n  width: 140px;\n  height: 30px;\n  justify-content: center;\n  padding: 0;\n}\n#select-path-panel p {\n  margin-bottom: 0;\n  margin-right: 15px;\n  font-size: 1.1em;\n  color: white;\n}\n#select-path-panel .btn.btn-light span {\n  margin-bottom: 15px;\n}"

/***/ }),

/***/ "./src/app/main-graph/main-graph.component.html":
/*!******************************************************!*\
  !*** ./src/app/main-graph/main-graph.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ground\" [class.detail-mode]=\"isDetailMode\">\n  <ng-container *ngFor=\"let box of layoutManager.rects\">\n    <div [style.left.px]=\"box.x\" [style.top.px]=\"box.y - box.height\" [style.width.px]=\"box.width\" [style.height.px]=\"box.height\"\n      class=\"box\">\n      <div class=\"inner-box\" [class.info-mode]=\"recommendResult == null && !isDetailMode\" (click)=\"showInfo(box)\" [class.detail-mode]=\"isDetailMode\">\n        <div class=\"text-box\">\n          <div>\n            {{ box.courseNode.name }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <svg #svg id=\"svg-ground\" [class.info-mode]=\"recommendResult == null && !isDetailMode\" [class.detail-mode]=\"isDetailMode\"\n    >\n  </svg>\n  <ng-container *ngIf=\"recommendResult != null && !isDetailMode\">\n    <div id=\"select-path-panel\">\n      <p>\n        Wähle deinen Weg aus\n      </p>  \n      <ng-container *ngFor=\"let path of recommendResult.paths let i = index\">\n        <button type=\"button\" class=\"btn btn-light\" (mouseenter)=\"highlightPath(i)\" (click)=\"selectPath(i)\"> <span>{{path.name}}</span></button>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>"

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
/* harmony import */ var _recommend_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recommend-result */ "./src/app/recommend-result.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
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
    function MainGraphComponent(d3Service, areaService, eduService) {
        this.d3Service = d3Service;
        this.areaService = areaService;
        this.eduService = eduService;
        this.courseNodeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailModeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MainGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutManager = this.d3Service.layoutManager;
        this.d3Service.applySVG(this.svg, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].GRAPH_HEIGHT);
        this.d3Service.initYAxis();
        this.areaService.areaObservable.subscribe(function (area) {
            _this.eduService.applyArea(area);
            _this.layoutManager.updateRects(_this.isDetailMode);
            _this.d3Service.updateLinks();
        });
    };
    MainGraphComponent.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (change == 'recommendResult' && changes[change].currentValue != changes[change].previousValue) {
                this.d3Service.deleteLinks();
                this.d3Service.initLinks(this.recommendResult.paths);
            }
            if (change == 'isDetailMode' && changes[change].currentValue == false && !changes[change].isFirstChange()) {
                this.d3Service.changeOverviewMode(this.recommendResult.paths);
            }
        }
    };
    MainGraphComponent.prototype.showInfo = function (selectedRect) {
        if (this.recommendResult == null) {
            this.courseNodeEmitter.emit(selectedRect.courseNode);
        }
        if (this.isDetailMode) {
            this.courseNodeEmitter.emit(selectedRect.courseNode);
        }
    };
    MainGraphComponent.prototype.selectPath = function (index) {
        this.detailModeEmitter.emit(true);
        this.d3Service.changeDetailMode(this.recommendResult, index);
    };
    MainGraphComponent.prototype.highlightPath = function (index) {
        this.d3Service.highlightLinks(index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('courseNode'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainGraphComponent.prototype, "courseNodeEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('isDetailMode'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainGraphComponent.prototype, "detailModeEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _recommend_result__WEBPACK_IMPORTED_MODULE_4__["RecommendResult"])
    ], MainGraphComponent.prototype, "recommendResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MainGraphComponent.prototype, "isDetailMode", void 0);
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
            _edu_structure_service__WEBPACK_IMPORTED_MODULE_3__["EduStructureService"]])
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
    MajorInfo.NONE = { name: 'none', description: '', learningEffort: '', ncValue: 0 };
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

module.exports = "<div id=\"map-ground\">\n  <div #gmap id=\"map-panel\">\n\n  </div>\n  <div id=\"detail-panel\">\n    <div class=\"card-header text-white\">\n      Informationen über die Institution\n    </div>\n    <div class=\"card-body\" id=\"detail-content\">\n      <ng-container *ngIf=\"selectedSchoolInfo == null\">\n        <h4 class=\"card-title\">Wähle deine bevorzugte Bildungsinstitution aus</h4>\n      </ng-container>\n      <ng-container *ngIf=\"selectedSchoolInfo\">\n        <h5 class=\"card-title\">{{selectedSchoolInfo.name}}</h5>\n        <p class=\"card-text\">\n            Entfernung: {{distance}} km\n        </p>\n        <h5 class=\"card-title\">Zugangsvoraussetzungen</h5>\n        <ul>\n          <ng-container *ngFor=\"let qualification of selectedSchoolInfo.qualifications\">\n            <li class=\"card-text\">\n              {{ qualification }}\n            </li>\n          </ng-container>\n        </ul>\n        <h5 class=\"card-title\">Curriculum</h5>\n        <ul>\n          <ng-container *ngFor=\"let curriculum of selectedSchoolInfo.curriculums\">\n            <li class=\"card-text\">\n              {{ curriculum }}\n            </li>\n          </ng-container>\n        </ul>\n        <h5 class=\"card-title\">Bewertung</h5>\n        <ul>\n          <ng-container *ngFor=\"let review of selectedSchoolInfo.reviews\">\n            <li class=\"card-text\">\n              {{ review }}\n            </li>\n          </ng-container>\n        </ul>\n      </ng-container>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
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
    function MapViewComponent(areaService) {
        this.areaService = areaService;
        this.schoolMarkers = [];
    }
    MapViewComponent.prototype.ngOnInit = function () {
        this.currAreaLatLng = this.areaService.getCurrAreaLntLng();
        console.log(this.currAreaLatLng);
        this.initGoogleMap();
    };
    MapViewComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['schoolInfos'].isFirstChange()) {
            this.currAreaLatLng = this.areaService.getCurrAreaLntLng();
            this.setOnMarkers(null);
            this.schoolMarkers = [];
            this.updateGoogleMap();
        }
    };
    MapViewComponent.prototype.initGoogleMap = function () {
        var _this = this;
        var mapProp = {
            center: this.currAreaLatLng,
            zoom: 15,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        google.maps.event.addListenerOnce(this.map, 'tilesloaded', function () {
            _this.addUserHomeMarker(_this.map);
        });
    };
    MapViewComponent.prototype.updateGoogleMap = function () {
        var _this = this;
        this.homeMarker.setMap(this.map);
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(this.homeMarker.getPosition());
        this.schoolInfos.forEach(function (schoolInfo) {
            var marker = new google.maps.Marker({
                map: _this.map,
                position: schoolInfo.latlng,
                animation: google.maps.Animation.DROP,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
            bounds.extend(schoolInfo.latlng);
            marker.addListener('click', function () {
                _this.selectedSchoolInfo = schoolInfo;
                var tempLatLng = new google.maps.LatLng(schoolInfo.latlng.lat, schoolInfo.latlng.lng);
                _this.distance = (google.maps.geometry.spherical.computeDistanceBetween(tempLatLng, _this.homeMarker.getPosition()) / 1000).toFixed(2);
            });
            _this.schoolMarkers.push(marker);
            _this.map.fitBounds(bounds);
            _this.map.panToBounds(bounds);
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__("html, body").animate({ scrollTop: 600 }, 400);
        //this.gmapElement.nativeElement.scrollIntoView({bahavior: 'smooth'});
    };
    MapViewComponent.prototype.addUserHomeMarker = function (map) {
        var geocoder = new google.maps.Geocoder();
        //this.userData.address = 'Geeststraße 75, 40589 Düsseldorf'
        var address = this.userData.address;
        var marker = new google.maps.Marker();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                marker.setMap(map);
                marker.setAnimation(google.maps.Animation.DROP);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
        this.homeMarker = marker;
        console.log(this.homeMarker);
    };
    MapViewComponent.prototype.setOnMarkers = function (map) {
        this.homeMarker.setMap(map);
        this.schoolMarkers.forEach(function (marker) { return marker.setMap(map); });
    };
    MapViewComponent.prototype.rad = function (x) {
        return x * Math.PI / 180;
    };
    ;
    MapViewComponent.prototype.getDistance = function (p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.rad(p2.lat - p1.lat);
        var dLong = this.rad(p2.lng - p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d / 1000; // returns the distance in meter
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapViewComponent.prototype, "schoolInfos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _user_data__WEBPACK_IMPORTED_MODULE_1__["UserData"])
    ], MapViewComponent.prototype, "userData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], MapViewComponent.prototype, "gmapElement", void 0);
    MapViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-view',
            template: __webpack_require__(/*! ./map-view.component.html */ "./src/app/map-view/map-view.component.html"),
            styles: [__webpack_require__(/*! ./map-view.component.css */ "./src/app/map-view/map-view.component.css")]
        }),
        __metadata("design:paramtypes", [_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"]])
    ], MapViewComponent);
    return MapViewComponent;
}());



/***/ }),

/***/ "./src/app/recommend-result.ts":
/*!*************************************!*\
  !*** ./src/app/recommend-result.ts ***!
  \*************************************/
/*! exports provided: RecommendResult, CareerPath, CareerSubPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendResult", function() { return RecommendResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerPath", function() { return CareerPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerSubPath", function() { return CareerSubPath; });
var RecommendResult = /** @class */ (function () {
    function RecommendResult(jobInfo, paths) {
        this.jobInfo = jobInfo;
        this.paths = paths;
    }
    return RecommendResult;
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
/* harmony import */ var _recommend_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommend-result */ "./src/app/recommend-result.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
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
    }
    RecommendService.prototype.getRecommendResult = function (userData) {
        return [
            new _recommend_result__WEBPACK_IMPORTED_MODULE_1__["RecommendResult"]({
                name: 'Polizist/in im gehobenen Dienst',
                salary: 'bis zu 54000€/Jahr',
                balance: 'wenig Freizeit',
                reviews: [
                    'überdurchschnittliches Gehalt',
                    'Unkündbar, krisensicher',
                    'automatische Beförderungen möglich',
                    'alle Versicherungen günstiger',
                    'alle Kredite günstiger',
                    'wenn Du nicht gerade auf der',
                    'stationiert bist, nach den ersten Jahren einarbeiten folgt ein lockerer Job',
                    'Frühverrentung sehr einfach möglich Ich habe sehr viel Freude und Spaß bei diesem Job.'
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
            new _recommend_result__WEBPACK_IMPORTED_MODULE_1__["RecommendResult"]({
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
            ])
        ];
    };
    RecommendService.prototype.getMajorInfos = function (courseNode, recommendResult) {
        if (recommendResult.jobInfo.name = 'Polizist/in im gehobenen Dienst') {
            return [
                {
                    name: 'Sportwissenschaften:',
                    description: 'Das Bachelorstudium Sportwissenschaft vermittelt breites und integriertes Grundlagenwissen des Faches. Die Studierenden erwerben ein kritisches Verständnis wichtiger Theorien, Prinzipien und Methoden mit einem besonderen Profil im Bereich "Sport, Bewegung und Bildung". Ziel des sportwissenschaftlichen Studiums ist es, Expertinnen und Experten im Feld Sport, Bewegung und Bildung auszubilden, die in unterschiedlichen bildungsbezogenen Settings Sport- und Bewegungsangebote entwickeln, planen, durchführen, bewerten und evaluieren können.',
                    learningEffort: '67%',
                    ncValue: 1.9
                }
            ];
        }
        else {
            return [
                {
                    name: 'Polizist im gehobenen Dienst:',
                    description: 'Der Fachbereich Polizei der Hochschule für den öffentlichen Dienst in Bayern bietet das Studium zum Einstieg in die Ämter der 3. Qualifikationsebene (3. QE, früher gehobener Dienst) und in die Ämter der vierten Qualifikationsebene (4. QE, früher höherer Dienst), den Masterstudiengang "Öffentliche Verwaltung - Polizeimanagement", an. (allgemeine Info)',
                    learningEffort: '88%',
                    ncValue: 3.2
                }
            ];
        }
    };
    RecommendService.prototype.getSchoolInfos = function (courseNode, recommendResult) {
        if (recommendResult.jobInfo.name = 'Polizist/in im gehobenen Dienst') {
            return [
                {
                    name: 'Geeststraße 75, 40589 Düsseldorf',
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
            ];
        }
        else {
            return [
                {
                    name: 'Akademie der Polizei Hamburg',
                    latlng: { lat: 52.101, lng: 12.72 },
                    commuteTime: 100,
                    learningEffort: '180 ECTS',
                    qualifications: [
                        'Allgemeine Hochschulreife',
                        'Fachhochschulreife',
                        'Das Höchstalter beträgt 34 Jahre bei Einstellung',
                        'die Mindestkörpergröße beträgt 160 cm',
                        'keine sichtbaren Körpermodifikationen (z.B. Tätowierungen oder Flesh-Tunnel), die beim Tragen der Uniform (langärmeliges Diensthemd, Rundhalsausschnitt beim T-Shirt) sichtbar sind oder die eine besondere Eigengefährdung im polizeilichen Alltag begründen',
                        'Fahrerlaubnis der Klasse B muss spätestens zum Ende des Studiums vorliegen',
                        'Schwimmnachweis (Schwimmabzeichen in Bronze oder Jugendschwimmabzeichen in Bronze/Freischwimmer)',
                        'Polizeidiensttauglichkeit',
                        'Erfolgreiche Teilnahme am Einstellungsverfahren',
                        'Verfassungstreue'
                    ],
                    curriculums: [
                        'https://akademie-der-polizei.hamburg.de/contentblob/4334106/02c8819681e6f18a77774b5b96abd2ce/data/la-i-ausbildungs-und-pruefungsordnung.pdf'
                    ],
                    reviews: [
                        'Super interessant, nicht alltäglich. Viele neue Inhalte werden angeboten. Die Dozenten bereiten praxisrelevante Fälle vor und vermischen diese mit einigen Beispielen. Jeder ist bemüht die Studenten mitzuziehen und ausreichende Erklärung zu geben. Ein abwechslungsreiches Studium. Es lohnt sich an der HU Sportwissenschaft zu studieren. Das Institut besteht aus einem Team bestehend aus sympathischen, jungen und klugen Köpfen. Man lernt wahnsinnig viel über sportliche Themen wie alles rundum Bewegung, aber auch viel über Bildung und Lehrmethoden, was sehr spannend für mich gewesen war.',
                        'Lehrpersonal: 4/5'
                    ]
                }
            ];
        }
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

module.exports = "h2 {\n  font-size: 1.5em;\n}\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #447dd3;\n}\n.open-btn {\n  border-color: #447dd3;\n  width: 300px;\n  font-size: 0.9em;\n  margin-top: 20px;\n  margin-left: 10px;\n  color: #447dd3;\n}\n.open-btn:hover {\n  background-color: white;\n  color: #898989;\n\n}\n.modal-body {\n  max-height: 650px;\n  overflow: scroll;\n}\n.register-btn {\n  pointer-events: none;\n}\n.register-btn.actived {\n  pointer-events: all;\n  background-color: #447dd3;\n}"

/***/ }),

/***/ "./src/app/user-modal/user-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-modal/user-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\"> Benutzereingaben </h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h2>Gib hier deine Daten ein:</h2>\n                    <form action=\"\" method=\"\">\n                        <div class=\"form-group\">\n                            <label for=\"currentGrade\">Deine momentane Klasse</label>\n                            <input [(ngModel)]=\"currentGrade\" class=\"form-control\" name=\"currentGrade\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"gpa\">Deine Durchschnittsnote</label>\n                            <input [(ngModel)]=\"gpa\" class=\"form-control\" name=\"gpa\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"address\">Deine Adresse</label>\n                            <input [(ngModel)]=\"address\" class=\"form-control\" name=\"address\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"postalcode\">Deine Postleitzahl</label>\n                            <input [(ngModel)]=\"postalCode\" class=\"form-control\" name=\"postalCode\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"school\">Welche Art von Mittelschule hast du besucht (Gymnasium, Real-, Gesamt-, Hauptschule)?</label>\n                            <input [(ngModel)]=\"school\" class=\"form-control\" name=\"school\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"major\">Bevorzugtes Studienfach (optional)</label>\n                            <input [(ngModel)]=\"major\" class=\"form-control\" name=\"major\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"dreamjob\">Traumjob</label>\n                            <input [(ngModel)]=\"dreamJob\" class=\"form-control\" name=\"dreamJob\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"studyLocation\">In welcher Klasse bist Du momentan?</label>\n                            <input [(ngModel)]=\"studyLocation\" class=\"form-control\" name=\"studyLocation\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"strongestSub\">Dein bestes Fach</label>\n                            <input [(ngModel)]=\"strongestSub\" class=\"form-control\" name=\"strongestSub\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"desSalary\">Dein bevorzugtes Gehalt</label>\n                            <input [(ngModel)]=\"desSalary\" class=\"form-control\" name=\"desSalary\" />\n                        </div>\n                        <h2>Was sind deine Interessen?\n                            <span style=\"color:red\">(*Mehrfachauswahl möglich)</span>\n                        </h2>\n                        <div class=\"row\">\n                            <ng-container *ngFor=\"let interest of interests\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-check\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"check\" (click)=\"checkInterest(interest)\">\n                                            <span class=\"label-text\">{{interest}}</span>\n                                        </label>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <h2>Was sind deine Stärken?\n                            <span style=\"color:red\">(* Mehrfachauswahl möglich)</span>\n                        </h2>\n                        <div class=\"row\">\n                            <ng-container *ngFor=\"let strength of strengths\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-check\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"check\" (click)=\"checkStrength(strength)\">\n                                            <span class=\"label-text\">{{strength}}</span>\n                                        </label>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light register-btn\" [class.actived]=\"currentGrade && gpa && address\n      && postalCode && school && major\n      && dreamJob && studyLocation && strongestSub && desSalary\n      && checkedInterests.length > 0 && checkedStrengths.length > 0\" (click)=\"registerUserInput()\">Abschicken</button>\n      <!-- <button type=\"button\" class=\"btn btn-light register-btn\" [class.actived]=\"true\" (click)=\"registerUserInput()\">Register</button> -->\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Schließen</button>\n    </div>\n</ng-template>\n\n<ng-container *ngIf=\"!isUserMode\">\n    <button class=\"btn btn-outline-primary mb-2 mr-2 open-btn\" (click)=\"openModal(content)\">Gib deine Nutzereingaben bitte ein</button>\n</ng-container>"

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
    function UserModalComponent(modalService) {
        this.modalService = modalService;
        this.userDataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isUserMode = false;
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
            'studyLocation': this.studyLocation,
            'strongestSub': this.strongestSub,
            'desSalary': this.desSalary,
            'interests': this.checkedInterests,
            'strengths': this.checkedStrengths
        });
        this.modalRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('userData'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserModalComponent.prototype, "userDataEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserModalComponent.prototype, "isUserMode", void 0);
    UserModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-modal',
            template: __webpack_require__(/*! ./user-modal.component.html */ "./src/app/user-modal/user-modal.component.html"),
            styles: [__webpack_require__(/*! ./user-modal.component.css */ "./src/app/user-modal/user-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
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