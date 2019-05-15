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
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");





var routes = [
    { path: '', redirectTo: '/edit', pathMatch: 'full' },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <mat-toolbar color=\"primary\">\r\n        <a [routerLink]=\"['/']\" class=\"mr-4\">Chart Dataset</a>\r\n        <a [routerLink]=\"['/edit']\" class=\"menu\">Editor</a>\r\n        <a [routerLink]=\"['/gallery']\" class=\"menu\">Gallery</a>\r\n    </mat-toolbar>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  height: 100vh;\n  width: 100vw; }\n\na {\n  color: white;\n  margin-right: 10px;\n  text-decoration: none; }\n\na.menu {\n  font-size: 15px;\n  color: #EEE; }\n\na.menu:hover {\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcY2hhcnQtZGF0YXNldFxcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLm1lbnUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNFRUU7XHJcbn1cclxuXHJcbmEubWVudTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbiJdfQ== */"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _edit_file_drop_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/file-drop.directive */ "./src/app/edit/file-drop.directive.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/side-nav/side-nav.component */ "./src/app/edit/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _gallery_gallery_elem_gallery_elem_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gallery/gallery-elem/gallery-elem.component */ "./src/app/gallery/gallery-elem/gallery-elem.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                _edit_file_drop_directive__WEBPACK_IMPORTED_MODULE_7__["FileDropDirective"],
                _edit_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__["SideNavComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"],
                _gallery_gallery_elem_gallery_elem_component__WEBPACK_IMPORTED_MODULE_13__["GalleryElemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/d3-utils.ts":
/*!*****************************!*\
  !*** ./src/app/d3-utils.ts ***!
  \*****************************/
/*! exports provided: Transform, log10TickFormat, translate, addLegends, binData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log10TickFormat", function() { return log10TickFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLegends", function() { return addLegends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binData", function() { return binData; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

var Transform = /** @class */ (function () {
    function Transform(totalWidth, totalHeight, margin) {
        this.totalWidth = totalWidth;
        this.totalHeight = totalHeight;
        this.height = this.totalHeight - margin.top - margin.bottom;
        this.width = this.totalWidth - margin.left - margin.right;
        this.left = margin.left;
        this.right = margin.right;
        this.bottom = margin.bottom;
        this.top = margin.top;
    }
    Transform.prototype.createSVG = function (svgRef) {
        return d3__WEBPACK_IMPORTED_MODULE_0__["select"](svgRef.nativeElement)
            .attr('width', this.totalWidth)
            .attr('height', this.totalHeight);
    };
    Transform.prototype.createG = function (svgRef) {
        return this.createSVG(svgRef).append('g')
            .attr('transform', translate(this.left, this.top));
    };
    Transform.prototype.appendG = function (g) {
        return g.append('g')
            .attr('transform', translate(this.left, this.top));
    };
    Transform.prototype.xLinear = function (maxValue) {
        var scale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, this.width]);
        return maxValue ? scale.domain([0, maxValue]) : scale;
    };
    Transform.prototype.yLinear = function (maxValue) {
        var scale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([this.height, 0]);
        return maxValue ? scale.domain([0, maxValue]) : scale;
    };
    return Transform;
}());

function log10TickFormat(d) {
    var superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹";
    var power = Math.round(Math.log10(d));
    return 10 + (power + "").split("").map(function (c) { return superscript[c]; }).join("");
}
function translate(x, y) {
    return 'translate(' + x + ', ' + y + ')';
}
function addLegends(svg, width, height, legendData, margin, horizontal) {
    if (width === void 0) { width = 500; }
    if (height === void 0) { height = 40; }
    if (margin === void 0) { margin = 15; }
    if (horizontal === void 0) { horizontal = true; }
    var data = Object.values(legendData).slice();
    if (horizontal) {
        data = data.reverse();
    }
    var g = svg.append('g')
        .selectAll('g')
        .data(data)
        .enter().append('g');
    g.append('circle')
        .attr('r', 3)
        .attr('cx', 2)
        .attr('cy', 11)
        .attr('fill', function (d) { return d.color; });
    g.append('text')
        .attr('dx', 10)
        .attr('dy', 14)
        .style('font-size', '0.8em')
        .text(function (d) { return d.attr.viewValue; });
    var hOffset = 0;
    g.attr('transform', function (_, i, nodes) {
        hOffset += nodes[i].getBoundingClientRect().width;
        if (i > 0) {
            hOffset += margin;
        }
        if (!horizontal) {
            hOffset = width;
        }
        var vOffset = horizontal ? height / 2 - 10 : i * 30;
        return translate(width - hOffset, vOffset);
    });
}
function binData(data, xKey, yKey, width) {
    var aggregateSize = Math.ceil(data.length / width);
    if (aggregateSize <= 1) {
        return data;
    }
    var aggCount = 0;
    var binnedData = [];
    var aggSizeData = [];
    var newElem = null;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var elem = data_1[_i];
        if (aggCount == 0) {
            newElem = elem;
            aggCount += 1;
        }
        else if (aggCount < aggregateSize) {
            newElem = newElem.merge(elem);
            aggCount += 1;
        }
        else {
            newElem = newElem.merge(elem);
            aggCount += 1;
            binnedData.push(newElem);
            aggSizeData.push(aggCount);
            aggCount = 0;
        }
    }
    if (aggCount != 0) {
        binnedData.push(newElem);
        aggSizeData.push(aggCount);
    }
    binnedData.forEach(function (data, index) { return data[xKey] /= aggSizeData[index]; });
    return binnedData;
}


/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: ImageElem, ImageInfo, LegendInfo, AnnotationData, VIS_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageElem", function() { return ImageElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInfo", function() { return ImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendInfo", function() { return LegendInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationData", function() { return AnnotationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIS_TYPES", function() { return VIS_TYPES; });
var ImageElem = /** @class */ (function () {
    function ImageElem(index, blob, src) {
        this.index = index;
        this.name = index.toString();
        this.blob = blob;
        this.src = src;
    }
    ImageElem.prototype.setImageInfo = function (blob, src) {
        this.blob = blob;
        this.src = src;
    };
    return ImageElem;
}());

var ImageInfo = /** @class */ (function () {
    function ImageInfo(raw) {
        this.path = raw['path'];
        this.data = raw['data'].map(function (elem) { return new AnnotationData(elem['semi'], elem['raw']); });
    }
    return ImageInfo;
}());

var LegendInfo = /** @class */ (function () {
    function LegendInfo(raw) {
    }
    return LegendInfo;
}());

var AnnotationData = /** @class */ (function () {
    function AnnotationData(semi, raw) {
        this.semi = semi;
        this.visType = raw['visTypes'];
        this.legend = raw['legend'];
        this.xAxis = raw['xAxis'];
        this.yAxis = raw['yAxis'];
    }
    return AnnotationData;
}());

var VIS_TYPES = [
    'bar',
    'line',
    'pie',
    'scatter',
    'map',
    'area',
    'pareto',
    'radar',
    'table',
    'venn',
    'other',
    'unknown',
];


/***/ }),

/***/ "./src/app/edit.service.ts":
/*!*********************************!*\
  !*** ./src/app/edit.service.ts ***!
  \*********************************/
/*! exports provided: EditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var EditService = /** @class */ (function () {
    function EditService() {
        this.imagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.selectImageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    EditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditService);
    return EditService;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"w-100 h-100\">\r\n    <mat-sidenav mode=\"side\" opened id=\"side-nav\" class=\"w-25\">\r\n        <app-side-nav\r\n            [totalImageLength]=\"totalImageLength\"\r\n            [annotatedCount]=\"annotatedCount\">\r\n        </app-side-nav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <div\r\n            class=\"m-3 p-3 w-100 h-75\r\n            d-flex\">\r\n            <div id=\"dropzone\" class=\"w-50 h-100\r\n        d-flex justify-content-center align-items-center\r\n        position-relative\"\r\n                [class.hovered]=\"dropzoneHovered\" [class.selected]=\"selectedImage\">\r\n\r\n                <!-- <h3 [class.selected]=\"selectedImage\">\r\n                    Drop Here\r\n                </h3> -->\r\n\r\n                <div class=\"position-absolute image-region\" [class.selected]=\"selectedImage\">\r\n                    <img #img>\r\n                </div>\r\n\r\n                <div class=\"position-absolute image-region\" [class.selected]=\"selectedImage\">\r\n                    <svg #svg></svg>\r\n                </div>\r\n            </div>\r\n            <div class=\"w-50 h-100\" *ngIf=\"selectedImage\">\r\n                <mat-vertical-stepper linear\r\n                    (selectionChange)=\"onStepChange($event)\"\r\n                    #stepper >\r\n                    <mat-step [stepControl]=\"formGroup.get('visTypes')\">\r\n                        <form [formGroup]=\"formGroup\">\r\n                            <ng-template matStepLabel>Select the type of this chart</ng-template>\r\n                            <div class=\"p-2 d-flex flex-wrap\">\r\n                                <mat-radio-group formControlName=\"visTypes\">\r\n                                    <mat-radio-button *ngFor=\"let visType of visTypes\" [value]=\"visType.value\" class=\"w-25\">\r\n                                        {{ visType.viewValue }}\r\n                                    </mat-radio-button>\r\n                                </mat-radio-group>\r\n                            </div>\r\n                            <div class=\"mt-2 text-right\">\r\n                                <button mat-stroked-button matStepperPrevious\r\n                                    class=\"mr-1\">Prev</button>\r\n                                <button mat-stroked-button matStepperNext>Next</button>\r\n                            </div>\r\n                        </form>\r\n                    </mat-step>\r\n                    <mat-step [stepControl]=\"formGroup.get('checkLegend')\">\r\n                        <form [formGroup]=\"formGroup\">\r\n                            <ng-template matStepLabel>Annotate a legend in the chart</ng-template>\r\n                            <div class=\"p-2\">\r\n                                <mat-checkbox\r\n                                    [formControl]=\"formGroup.get('legend.haveLegend')\"\r\n                                    (change)=\"onCheck($event, 'legend')\">\r\n                                    The chart has a legend\r\n                                </mat-checkbox>\r\n                                <ng-container *ngIf=\"formGroup.get('legend.haveLegend').value\">\r\n                                    <div class=\"p-2 d-flex flex-wrap\">\r\n                                        <div class=\"w-100 d-flex\">\r\n                                            <mat-form-field class=\"mr-3\">\r\n                                                <input matInput readonly placeholder=\"X\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('legend.x')\">\r\n                                            </mat-form-field>\r\n                                            <mat-form-field>\r\n                                                <input matInput readonly placeholder=\"Y\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('legend.y')\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"w-100 d-flex\">\r\n                                            <mat-form-field class=\"mr-3\">\r\n                                                <input matInput readonly placeholder=\"Width\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('legend.width')\">\r\n                                            </mat-form-field>\r\n                                            <mat-form-field>\r\n                                                <input matInput readonly placeholder=\"Height\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('legend.height')\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"formGroup.get('legend').invalid\" class=\"validate-feedback\">\r\n                                        * The area should be annotated, Please click the image\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                            <div class=\"mt-2 text-right\">\r\n                                <button mat-stroked-button matStepperPrevious\r\n                                    class=\"mr-1\">Prev</button>\r\n                                <button mat-stroked-button matStepperNext>Next</button>\r\n                            </div>\r\n                        </form>\r\n                    </mat-step>\r\n                    <mat-step [stepControl]=\"formGroup.get('xAxis')\">\r\n                        <form [formGroup]=\"formGroup.get('xAxis')\">\r\n                            <ng-template matStepLabel>Annotate a X axis in the chart</ng-template>\r\n                            <div class=\"p-2 d-flex flex-wrap\">\r\n                                <mat-checkbox class=\"w-100\"\r\n                                    [formControl]=\"formGroup.get('xAxis.haveAxis')\"\r\n                                    (change)=\"onCheck($event, 'xAxis')\">\r\n                                    There is a X axis\r\n                                </mat-checkbox>\r\n                                <ng-container *ngIf=\"formGroup.get('xAxis.haveAxis').value\">\r\n                                     <div class=\"p-2 d-flex flex-wrap\">\r\n                                        <div class=\"w-100 d-flex\">\r\n                                            <mat-form-field class=\"mr-3\">\r\n                                                <input matInput readonly placeholder=\"X\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('xAxis.x')\">\r\n                                            </mat-form-field>\r\n                                            <mat-form-field>\r\n                                                <input matInput readonly placeholder=\"Y\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('xAxis.y')\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"w-100 d-flex\">\r\n                                            <mat-form-field class=\"mr-3\">\r\n                                                <input matInput readonly placeholder=\"Width\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('xAxis.width')\">\r\n                                            </mat-form-field>\r\n                                            <mat-form-field>\r\n                                                <input matInput readonly placeholder=\"Height\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('xAxis.height')\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"w-100 mt-2 d-flex\">\r\n                                        <div class=\"mr-3 form-label\">\r\n                                            Type\r\n                                        </div>\r\n                                        <mat-radio-group formControlName=\"type\">\r\n                                            <mat-radio-button value=\"0\">Nominal</mat-radio-button>\r\n                                            <mat-radio-button value=\"1\">Linear</mat-radio-button>\r\n                                            <mat-radio-button value=\"2\">Logarithm</mat-radio-button>\r\n                                        </mat-radio-group>\r\n                                    </div>\r\n                                    <div *ngIf=\"formGroup.get('xAxis').invalid\" class=\"validate-feedback\">\r\n                                        * The axis and the axis tick values should be annotated, Please click the image\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                            <div class=\"mt-2 text-right\">\r\n                                <button mat-stroked-button matStepperPrevious\r\n                                    class=\"mr-1\">Prev</button>\r\n                                <button mat-stroked-button matStepperNext>Next</button>\r\n                            </div>\r\n                        </form>\r\n                    </mat-step>\r\n                    <mat-step [stepControl]=\"formGroup.get('yAxis')\">\r\n                        <form [formGroup]=\"formGroup.get('yAxis')\">\r\n                            <ng-template matStepLabel>Annotate a Y axis in the chart</ng-template>\r\n                            <div class=\"p-2 d-flex flex-wrap\">\r\n                                <mat-checkbox class=\"w-100\"\r\n                                    [formControl]=\"formGroup.get('yAxis.haveAxis')\"\r\n                                    (change)=\"onCheck($event, 'yAxis')\">\r\n                                    There is a Y axis\r\n                                </mat-checkbox>\r\n                                <ng-container *ngIf=\"formGroup.get('yAxis.haveAxis').value\">\r\n                                    <div class=\"p-2 d-flex flex-wrap\">\r\n                                        <div class=\"w-100 d-flex\">\r\n                                            <mat-form-field class=\"mr-3\">\r\n                                                <input matInput readonly placeholder=\"X\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('yAxis.x')\">\r\n                                            </mat-form-field>\r\n                                            <mat-form-field>\r\n                                                <input matInput readonly placeholder=\"Y\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('yAxis.y')\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"w-100 d-flex\">\r\n                                            <mat-form-field class=\"mr-3\">\r\n                                                <input matInput readonly placeholder=\"Width\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('yAxis.width')\">\r\n                                            </mat-form-field>\r\n                                            <mat-form-field>\r\n                                                <input matInput readonly placeholder=\"Height\" type=\"number\"\r\n                                                    [formControl]=\"formGroup.get('yAxis.height')\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"w-100 mt-2 d-flex\">\r\n                                        <div class=\"mr-3 form-label\">\r\n                                            Type\r\n                                        </div>\r\n                                        <mat-radio-group formControlName=\"type\">\r\n                                            <mat-radio-button value=\"0\">Nominal</mat-radio-button>\r\n                                            <mat-radio-button value=\"1\">Linear</mat-radio-button>\r\n                                            <mat-radio-button value=\"2\">Logarithm</mat-radio-button>\r\n                                        </mat-radio-group>\r\n                                    </div>\r\n                                    <div *ngIf=\"formGroup.get('yAxis').invalid\" class=\"validate-feedback\">\r\n                                        * The axis and the axis tick values should be annotated, Please click the image\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                            <div class=\"mt-2 text-right\">\r\n                                <button mat-stroked-button matStepperPrevious\r\n                                    class=\"mr-1\">Prev</button>\r\n                                <button mat-stroked-button matStepperNext\r\n                                    (click)=\"submit()\">Submit</button>\r\n                            </div>\r\n                        </form>\r\n                    </mat-step>\r\n                </mat-vertical-stepper>\r\n            </div>\r\n        </div>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/edit/edit.component.scss":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dropzone {\n  border-radius: 10px;\n  border: 3px dashed #AAA; }\n\n#dropzone.hovered:not(.selected) {\n  border-color: skyblue;\n  border-style: solid;\n  cursor: copy; }\n\n#dropzone.selected {\n  border: 1px solid #AAA;\n  background-color: #CCC; }\n\nh3.selected {\n  display: none; }\n\nimg {\n  max-width: 600px;\n  max-height: 800px;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n::ng-deep circle.handle {\n  cursor: crosshair; }\n\n::ng-deep rect.handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.image-region:not(.selected) {\n  display: none; }\n\n#side-nav {\n  border-right: 2px solid #AAA; }\n\nmat-radio-button {\n  margin: 0 12px; }\n\n.validate-feedback {\n  color: #f44336;\n  font-size: 12px; }\n\n.form-label {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxjaGFydC1kYXRhc2V0XFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXGVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFtQjtLQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFFUSxpQkFBaUIsRUFBQTs7QUFGekI7RUFNUSxvQkFBWTtFQUFaLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksY0FBYyxFQUFBOztBQUlsQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Ryb3B6b25lIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDNweCBkYXNoZWQgI0FBQTtcclxufVxyXG5cclxuI2Ryb3B6b25lLmhvdmVyZWQ6bm90KC5zZWxlY3RlZCkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBza3libHVlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGN1cnNvcjogY29weTtcclxufVxyXG5cclxuI2Ryb3B6b25lLnNlbGVjdGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQUE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xyXG59XHJcblxyXG5oMy5zZWxlY3RlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIGNpcmNsZS5oYW5kbGUge1xyXG4gICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3QuaGFuZGxlIHtcclxuICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWFnZS1yZWdpb246bm90KC5zZWxlY3RlZCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3NpZGUtbmF2IHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNBQUE7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbn1cclxuXHJcblxyXG4udmFsaWRhdGUtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");








var EditComponent = /** @class */ (function () {
    function EditComponent(edit, fb, network) {
        this.edit = edit;
        this.fb = fb;
        this.network = network;
        this.imageList = [];
        this.visTypes = [
            { value: 'bar', viewValue: 'Bar Chart' },
            { value: 'line', viewValue: 'Line Chart' },
            { value: 'pie', viewValue: 'Pie Chart' },
            { value: 'scatter', viewValue: 'Scatter Plot' },
            { value: 'map', viewValue: 'Geographical Map' },
            { value: 'area', viewValue: 'Area Chart' },
            { value: 'pareto', viewValue: 'Pareto Chart' },
            { value: 'radar', viewValue: 'Radar Chart' },
            { value: 'table', viewValue: 'Table' },
            { value: 'venn', viewValue: 'Venn Diagram' },
            { value: 'other', viewValue: 'Other' },
            { value: 'unknown', viewValue: 'Unknown' },
        ];
        this.totalImageLength = 0;
        this.annotatedCount = 0;
        this.currStepIndex = 0;
        this.legendState = 0;
        this.xAxisState = 0;
        this.yAxisState = 0;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFormGroup();
        this.svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgRef.nativeElement);
        this.network.getList()
            .then(function (indices) {
            _this.imageList = indices.map(function (index) { return new _data__WEBPACK_IMPORTED_MODULE_2__["ImageElem"](index); });
            var requests = indices.map(function (index) { return _this.network.getImage(index.toString()); });
            Promise.all(requests).then(function (images) {
                images.forEach(function (image, i) {
                    _this.parseImage(image, i, indices[i].toString());
                });
            });
        });
        this.network.getTotalImageLength().then(function (length) {
            _this.totalImageLength = length;
        });
        this.edit.selectImageSubject.asObservable().subscribe(function (image) {
            _this.selectedImage = image;
            _this.initFormGroup();
            var imgElem = _this.imgRef.nativeElement;
            imgElem.src = null;
            _this.svg.selectAll('g').remove();
            imgElem.addEventListener('load', function () {
                var boundingBox = _this.imgRef.nativeElement.getBoundingClientRect();
                _this.initSVG(boundingBox);
            });
            imgElem.src = image.src;
        });
    };
    EditComponent.prototype.submit = function () {
        var _this = this;
        this.network.submit(this.imgRef.nativeElement, this.selectedImage, this.formGroup)
            .then(function (index) {
            _this.annotatedCount += 1;
            _this.imageList.splice(_this.imageList
                .findIndex(function (d) { return d.name === _this.selectedImage.name; }), 1);
            _this.imageList.push(new _data__WEBPACK_IMPORTED_MODULE_2__["ImageElem"](index));
            _this.edit.imagesSubject.next(_this.imageList);
            _this.selectedImage = _this.imageList[0];
            _this.edit.selectImageSubject.next(_this.selectedImage);
            _this.network.getImage(index.toString()).then(function (image) {
                _this.parseImage(image, _this.imageList.length - 1, index.toString());
            });
            _this.initFormGroup();
            _this.legendState = 0;
            _this.xAxisState = 0;
            _this.yAxisState = 0;
            _this.stepper.reset();
        });
    };
    EditComponent.prototype.onStepChange = function (change) {
        this.currStepIndex = change.selectedIndex;
        switch (change.selectedIndex) {
            case 1:
                this.registerAreaEvent('legend');
                break;
            case 2:
                this.registerAreaEvent('xAxis');
                break;
            case 3:
                this.registerAreaEvent('yAxis');
                break;
            default:
                break;
        }
        switch (change.previouslySelectedIndex) {
            case 1:
                if (this.legendState < 2) {
                    d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.legend').remove();
                    this.legendState = 0;
                    this.initAreaForm(this.formGroup.get('legend'));
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.legend').attr('display', 'none');
                }
                break;
            case 2:
                if (this.xAxisState < 2) {
                    d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.xAxis').remove();
                    this.xAxisState = 0;
                    this.initAreaForm(this.formGroup.get('xAxis'));
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.xAxis').attr('display', 'none');
                }
                break;
            case 3:
                if (this.yAxisState < 2) {
                    d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.yAxis').remove();
                    this.yAxisState = 0;
                    this.initAreaForm(this.formGroup.get('yAxis'));
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.yAxis').attr('display', 'none');
                }
                break;
            default:
                break;
        }
    };
    EditComponent.prototype.onCheck = function (change, key) {
        var _this = this;
        var resetState = function () {
            switch (key) {
                case 'legend':
                    _this.legendState = 0;
                    break;
                case 'xAxis':
                    _this.xAxisState = 0;
                    break;
                case 'yAxis':
                    _this.yAxisState = 0;
                    break;
            }
        };
        if (!change.checked) {
            resetState();
            d3__WEBPACK_IMPORTED_MODULE_3__["select"]("." + key).remove();
            this.svg.on('click', function () { });
        }
        else {
            var group = this.formGroup.get(key);
            this.initAreaForm(group);
            this.registerAreaEvent(key);
        }
    };
    EditComponent.prototype.initFormGroup = function () {
        var _this = this;
        this.formGroup = this.fb.group({
            visTypes: this.fb.control(this.visTypes[0].value),
            legend: this.fb.group({
                haveLegend: this.fb.control(false),
                x: this.fb.control(''),
                y: this.fb.control(''),
                width: this.fb.control(''),
                height: this.fb.control(''),
            }),
            xAxis: this.fb.group({
                haveAxis: this.fb.control(false),
                x: this.fb.control(''),
                y: this.fb.control(''),
                width: this.fb.control(''),
                height: this.fb.control(''),
                type: this.fb.control('0'),
            }),
            yAxis: this.fb.group({
                haveAxis: this.fb.control(false),
                x: this.fb.control(''),
                y: this.fb.control(''),
                width: this.fb.control(''),
                height: this.fb.control(''),
                type: this.fb.control('0'),
            }),
        });
        this.formGroup.get('legend').setValidators(function () {
            var group = _this.formGroup.get('legend');
            if (group.get('haveLegend').value && _this.legendState < 2) {
                return {
                    required: true
                };
            }
            else {
                return null;
            }
        });
        this.formGroup.get('xAxis').setValidators(function () {
            var group = _this.formGroup.get('xAxis');
            if (group.get('haveAxis').value && _this.xAxisState < 2) {
                return {
                    required: true
                };
            }
            else {
                return null;
            }
        });
        this.formGroup.get('yAxis').setValidators(function () {
            var group = _this.formGroup.get('yAxis');
            if (group.get('haveAxis').value && _this.yAxisState < 2) {
                return {
                    required: true
                };
            }
            else {
                return null;
            }
        });
    };
    EditComponent.prototype.parseImage = function (image, index, name) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (_) {
            _this.imageList[index].setImageInfo(image, reader.result);
            _this.edit.imagesSubject.next(_this.imageList);
        };
        reader.readAsDataURL(image);
    };
    EditComponent.prototype.initSVG = function (boundingBox) {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgRef.nativeElement)
            .attr('width', boundingBox.width + 20)
            .attr('height', boundingBox.height + 20).attr('pointer-events', 'visiblePoint');
    };
    EditComponent.prototype.initAreaForm = function (group) {
        group.get('x').setValue('');
        group.get('y').setValue('');
        group.get('width').setValue('');
        group.get('height').setValue('');
    };
    EditComponent.prototype.registerAreaEvent = function (type) {
        var _this = this;
        if (type === void 0) { type = 'xAxis'; }
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]("." + type).attr('display', '');
        var svg = this.svg;
        var left = svg.node().getBoundingClientRect().left;
        var top = svg.node().getBoundingClientRect().top;
        var pivotX = 0;
        var pivotY = 0;
        var stepIndex = function () {
            switch (type) {
                case 'legend':
                    return 1;
                case 'xAxis':
                    return 2;
                case 'yAxis':
                    return 3;
            }
        };
        var state = function (value) {
            switch (type) {
                case 'legend':
                    return value ? (_this.legendState = value) : _this.legendState;
                case 'xAxis':
                    return value ? (_this.xAxisState = value) : _this.xAxisState;
                case 'yAxis':
                    return value ? (_this.yAxisState = value) : _this.yAxisState;
                default:
                    return 0;
            }
        };
        svg.on('click', function () {
            var obtainPoints = function (x, y, width, height) {
                return [
                    { cx: x, cy: y, pivotX: x + width, pivotY: y + height, },
                    { cx: x + width, cy: y, pivotX: x, pivotY: y + height, },
                    { cx: x, cy: y + height, pivotX: x + width, pivotY: y },
                    { cx: x + width, cy: y + height, pivotX: x, pivotY: y },
                ];
            };
            var formGroup = _this.formGroup.get(type);
            var checked = function () {
                switch (type) {
                    case 'xAxis':
                    case 'yAxis':
                        return formGroup.get('haveAxis').value;
                    case 'legend':
                        return formGroup.get('haveLegend').value;
                }
            };
            if (_this.currStepIndex === stepIndex() && checked()) {
                if (state() === 0) {
                    var x = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x - left;
                    var y = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y - top;
                    var g = svg.append('g').attr('class', type);
                    g.append('rect')
                        .attr('class', 'handle')
                        .attr('x', x).attr('y', y)
                        .attr('stroke-width', 2)
                        .attr('stroke', 'red')
                        .attr('fill', 'rgba(255, 0, 0, 0.2)');
                    formGroup.get('x').setValue(x.toFixed(0));
                    formGroup.get('y').setValue(y.toFixed(0));
                    pivotX = x;
                    pivotY = y;
                    formGroup.get('width').setValue('0');
                    formGroup.get('height').setValue('0');
                    state(1);
                }
                else if (state() === 1) {
                    var g_1 = svg.select("." + type);
                    var x_1 = +g_1.select('rect').attr('x');
                    var y_1 = +g_1.select('rect').attr('y');
                    var width_1 = +g_1.select('rect').attr('width');
                    var height_1 = +g_1.select('rect').attr('height');
                    var points_1 = obtainPoints(x_1, y_1, width_1, height_1);
                    var circleS_1 = g_1.selectAll('circle')
                        .data(points_1).enter()
                        .append('circle').attr('class', 'handle')
                        .attr('cx', function (d) { return d.cx; })
                        .attr('cy', function (d) { return d.cy; })
                        .attr('r', 5).attr('fill', 'darkorange');
                    circleS_1.call(d3__WEBPACK_IMPORTED_MODULE_3__["drag"]().on('drag', function (d) {
                        var pivotX = d.pivotX;
                        var pivotY = d.pivotY;
                        var eventX = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x;
                        var eventY = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y;
                        x_1 = eventX > pivotX ? pivotX : eventX;
                        y_1 = eventY > pivotY ? pivotY : eventY;
                        width_1 = Math.abs(eventX - pivotX);
                        height_1 = Math.abs(eventY - pivotY);
                        g_1.select('rect')
                            .attr('x', x_1)
                            .attr('y', y_1)
                            .attr('width', width_1)
                            .attr('height', height_1);
                        points_1 = obtainPoints(x_1, y_1, width_1, height_1);
                        circleS_1.data(points_1)
                            .attr('cx', function (d) { return d.cx; })
                            .attr('cy', function (d) { return d.cy; });
                        var formGroup = _this.formGroup.get(type);
                        formGroup.get('x').setValue(x_1.toFixed(0));
                        formGroup.get('y').setValue(y_1.toFixed(0));
                        formGroup.get('width').setValue(width_1.toFixed(0));
                        formGroup.get('height').setValue(height_1.toFixed(0));
                    }));
                    var dragStartX_1 = 0;
                    var dragStartY_1 = 0;
                    g_1.select('rect').call(d3__WEBPACK_IMPORTED_MODULE_3__["drag"]()
                        .on('start', function () {
                        dragStartX_1 = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x;
                        dragStartY_1 = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y;
                        pivotX = +g_1.select('rect').attr('x');
                        pivotY = +g_1.select('rect').attr('y');
                    })
                        .on('drag', function () {
                        var eventX = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x;
                        var eventY = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y;
                        var moveX = eventX - dragStartX_1;
                        var moveY = eventY - dragStartY_1;
                        x_1 = pivotX + moveX;
                        y_1 = pivotY + moveY;
                        g_1.select('rect').attr('x', x_1).attr('y', y_1);
                        points_1 = obtainPoints(x_1, y_1, width_1, height_1);
                        circleS_1.data(points_1)
                            .attr('cx', function (d) { return d.cx; })
                            .attr('cy', function (d) { return d.cy; });
                        var formGroup = _this.formGroup.get(type);
                        formGroup.get('x').setValue(x_1.toFixed(0));
                        formGroup.get('y').setValue(y_1.toFixed(0));
                        formGroup.get('width').setValue(width_1.toFixed(0));
                        formGroup.get('height').setValue(height_1.toFixed(0));
                    }));
                    state(2);
                    _this.formGroup.get(type).updateValueAndValidity();
                }
            }
        });
        svg.on('mousemove', function () {
            if (_this.currStepIndex === stepIndex() && state() === 1) {
                var eventX = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x - left;
                var eventY = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y - top;
                var x = eventX > pivotX ? pivotX : eventX;
                var y = eventY > pivotY ? pivotY : eventY;
                var width = Math.abs(eventX - pivotX);
                var height = Math.abs(eventY - pivotY);
                svg.select("." + type).select('rect')
                    .attr('x', x)
                    .attr('y', y)
                    .attr('width', width)
                    .attr('height', height);
                var formGroup = _this.formGroup.get(type);
                formGroup.get('x').setValue(x.toFixed(0));
                formGroup.get('y').setValue(y.toFixed(0));
                formGroup.get('width').setValue(width.toFixed(0));
                formGroup.get('height').setValue(height.toFixed(0));
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('img'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditComponent.prototype, "svgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatVerticalStepper"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatVerticalStepper"])
    ], EditComponent.prototype, "stepper", void 0);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/edit/file-drop.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/edit/file-drop.directive.ts ***!
  \*********************************************/
/*! exports provided: FileDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileDropDirective = /** @class */ (function () {
    function FileDropDirective() {
        this.filesDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filesHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FileDropDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.filesDropped.emit($event.dataTransfer.files);
        this.filesHovered.emit(false);
    };
    FileDropDirective.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.filesHovered.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.filesHovered.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileDropDirective.prototype, "filesDropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileDropDirective.prototype, "filesHovered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileDropDirective.prototype, "onDrop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileDropDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileDropDirective.prototype, "onDragLeave", null);
    FileDropDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[fileDrop]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileDropDirective);
    return FileDropDirective;
}());



/***/ }),

/***/ "./src/app/edit/side-nav/side-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/edit/side-nav/side-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\r\n    <div mat-list-item mat-subheader class=\"p-2 pl-3\">\r\n        Progress: {{ annotatedCount }} / {{ totalImageLength }}\r\n    </div>\r\n</mat-list>\r\n<mat-action-list>\r\n    <button mat-list-item mat-subheader\r\n        (click)=\"projectShow = !projectShow\">\r\n        <div class=\"w-100 px-1\r\n            d-flex justify-content-between align-items-center\">\r\n            <div>Image List</div>\r\n            <div>\r\n                <mat-icon>{{ projectShow ? 'remove' : 'add_circle_outline'}}</mat-icon>\r\n            </div>\r\n        </div>\r\n    </button>\r\n    <ng-container *ngIf=\"projectShow\">\r\n        <button mat-list-item *ngFor=\"let image of images\"\r\n        [class.selected]=\"selectedImage && image.name === selectedImage.name\"\r\n        (click)=\"selectImage(image)\">\r\n            {{ image.name }}\r\n        </button>\r\n    </ng-container>\r\n    <mat-divider></mat-divider>\r\n</mat-action-list>\r\n"

/***/ }),

/***/ "./src/app/edit/side-nav/side-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/edit/side-nav/side-nav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.selected {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9zaWRlLW5hdi9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxjaGFydC1kYXRhc2V0XFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXHNpZGUtbmF2XFxzaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/edit/side-nav/side-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit/side-nav/side-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");



var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(edit) {
        this.edit = edit;
        this.images = [];
        this.projectShow = true;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edit.imagesSubject.asObservable().subscribe(function (images) {
            _this.images = images;
        });
        this.edit.selectImageSubject.asObservable().subscribe(function (image) {
            _this.selectedImage = image;
        });
    };
    SideNavComponent.prototype.selectImage = function (image) {
        this.edit.selectImageSubject.next(image);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SideNavComponent.prototype, "totalImageLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SideNavComponent.prototype, "annotatedCount", void 0);
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/edit/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/edit/side-nav/side-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_2__["EditService"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery-elem/gallery-elem.component.html":
/*!******************************************************************!*\
  !*** ./src/app/gallery/gallery-elem/gallery-elem.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 h-100 d-flex justify-content-center align-items-center flex-column p-3\">\n    <div class=\"p-2 w-100 h-35\">\n        <div>\n            File path: {{ info ? info.path : ''}}\n        </div>\n        <svg #hist>\n        </svg>\n    </div>\n    <div class=\"w-100 h-65 position-relative border\">\n        <div class=\"position-absolute w-100 h-100 p-2\">\n            <img #img>\n        </div>\n        <div class=\"position-absolute w-100 h-100 p-2\">\n            <svg #svg></svg>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery-elem/gallery-elem.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/gallery/gallery-elem/gallery-elem.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: 340px;\n  max-height: 320px; }\n\n.h-35 {\n  height: 35% !important; }\n\n.h-65 {\n  height: 65% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LWVsZW0vQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcY2hhcnQtZGF0YXNldFxcY2xpZW50L3NyY1xcYXBwXFxnYWxsZXJ5XFxnYWxsZXJ5LWVsZW1cXGdhbGxlcnktZWxlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1lbGVtL2dhbGxlcnktZWxlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzIwcHg7XHJcbn1cclxuXHJcbi5oLTM1IHtcclxuICAgIGhlaWdodDogMzUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oLTY1IHtcclxuICAgIGhlaWdodDogNjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/gallery/gallery-elem/gallery-elem.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/gallery/gallery-elem/gallery-elem.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryElemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryElemComponent", function() { return GalleryElemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
/* harmony import */ var src_app_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/network.service */ "./src/app/network.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_d3_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/d3-utils */ "./src/app/d3-utils.ts");






var GalleryElemComponent = /** @class */ (function () {
    function GalleryElemComponent(network) {
        this.network = network;
        this.histTf = new src_app_d3_utils__WEBPACK_IMPORTED_MODULE_5__["Transform"](320, 100, { top: 10, left: 25, right: 5, bottom: 50 });
    }
    GalleryElemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.network.getImage(this.imageElem.name)
            .then(function (image) {
            var reader = new FileReader();
            reader.onload = function (_) {
                _this.imageElem.setImageInfo(image, reader.result);
                var img = _this.imgRef.nativeElement;
                img.addEventListener('load', function () {
                    var boundingBox = _this.imgRef.nativeElement.getBoundingClientRect();
                    d3__WEBPACK_IMPORTED_MODULE_4__["select"](_this.svgRef.nativeElement)
                        .attr('width', boundingBox.width)
                        .attr('height', boundingBox.height);
                    _this.network.getAnnotation(_this.imageElem.name)
                        .then(function (info) {
                        _this.info = info;
                        _this.drawAnnotation();
                        _this.drawHistogram();
                    });
                });
                img.src = reader.result;
            };
            reader.readAsDataURL(image);
        });
        this.histG = this.histTf.createG(this.histRef);
    };
    GalleryElemComponent.prototype.drawAnnotation = function () {
        this.drawRect('legend', 'yellow');
        this.drawRect('xAxis', 'darkorange');
        this.drawRect('yAxis', 'indigo');
    };
    GalleryElemComponent.prototype.drawRect = function (key, color) {
        var img = this.imgRef.nativeElement;
        var ratio = img.getBoundingClientRect().height / img.naturalHeight;
        d3__WEBPACK_IMPORTED_MODULE_4__["select"](this.svgRef.nativeElement).selectAll("." + key)
            .data(this.info.data
            .map(function (d) { return d[key]; })
            .filter(function (d) { return d['haveAxis'] || d['haveLegend']; })).enter()
            .append('rect')
            .attr('x', function (d) { return d.x * ratio; })
            .attr('y', function (d) { return d.y * ratio; })
            .attr('width', function (d) { return d.width * ratio; })
            .attr('height', function (d) { return d.height * ratio; })
            .attr('fill', color)
            .attr('fill-opacity', 0.2);
    };
    GalleryElemComponent.prototype.drawHistogram = function () {
        var _this = this;
        var indexDict = {};
        src_app_data__WEBPACK_IMPORTED_MODULE_2__["VIS_TYPES"].forEach(function (d, i) {
            indexDict[d] = i;
        });
        var data = new Array(src_app_data__WEBPACK_IMPORTED_MODULE_2__["VIS_TYPES"].length).fill(0);
        this.info.data.map(function (d) { return d.visType; }).forEach(function (d) {
            data[indexDict[d]] += 1;
        });
        data = data.map(function (d, i) { return ({
            type: src_app_data__WEBPACK_IMPORTED_MODULE_2__["VIS_TYPES"][i],
            count: d,
        }); });
        var xScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleBand"]().paddingInner(0.3)
            .range([0, this.histTf.width])
            .domain(src_app_data__WEBPACK_IMPORTED_MODULE_2__["VIS_TYPES"]);
        var yScale = this.histTf.yLinear(d3__WEBPACK_IMPORTED_MODULE_4__["max"](data, function (d) { return d.count; }));
        this.histG.append('g').attr('transform', Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_5__["translate"])(0, this.histTf.height))
            .call(d3__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](xScale))
            .selectAll('text')
            .attr('transform', 'rotate(-60)')
            .attr('text-anchor', 'end')
            .attr('dy', 0)
            .attr('dx', -8);
        this.histG.append('g').call(d3__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](yScale).ticks(3));
        this.histG.selectAll('rect').data(data).enter()
            .append('rect')
            .attr('x', function (d) { return xScale(d.type); })
            .attr('y', function (d) { return yScale(d.count); })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) { return _this.histTf.height - yScale(d.count); })
            .attr('fill', 'indigo');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('img'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GalleryElemComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GalleryElemComponent.prototype, "svgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hist'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GalleryElemComponent.prototype, "histRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_data__WEBPACK_IMPORTED_MODULE_2__["ImageElem"])
    ], GalleryElemComponent.prototype, "imageElem", void 0);
    GalleryElemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-elem',
            template: __webpack_require__(/*! ./gallery-elem.component.html */ "./src/app/gallery/gallery-elem/gallery-elem.component.html"),
            styles: [__webpack_require__(/*! ./gallery-elem.component.scss */ "./src/app/gallery/gallery-elem/gallery-elem.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]])
    ], GalleryElemComponent);
    return GalleryElemComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 h-100 p-2 d-flex flex-wrap\">\n    <div *ngFor=\"let imageElem of imageList\" class=\"w-20 h-50 border\">\n        <app-gallery-elem [imageElem]=\"imageElem\">\n\n        </app-gallery-elem>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w-20 {\n  width: 20% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxjaGFydC1kYXRhc2V0XFxjbGllbnQvc3JjXFxhcHBcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53LTIwIHtcclxuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(network) {
        this.network = network;
        this.imageList = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.network.getList(1)
            .then(function (pairs) {
            _this.imageList = pairs.map(function (pair) { return new _data__WEBPACK_IMPORTED_MODULE_3__["ImageElem"](pair); });
        });
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/network.service.ts":
/*!************************************!*\
  !*** ./src/app/network.service.ts ***!
  \************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");




var NetworkService = /** @class */ (function () {
    function NetworkService(http) {
        this.http = http;
        this.BASE_URL = 'https://147.46.240.21:1218/';
    }
    NetworkService.prototype.getTotalImageLength = function () {
        return this.http.get(this.BASE_URL + 'image_length')
            .toPromise().then(function (raw) { return raw['length']; });
    };
    NetworkService.prototype.getList = function (labeled) {
        if (labeled === void 0) { labeled = 0; }
        return this.http.get(this.BASE_URL + ("?labeled=" + labeled))
            .toPromise()
            .then(function (raw) { return raw; });
    };
    NetworkService.prototype.getAnnotation = function (name) {
        return this.http.get(this.BASE_URL + 'annotation/' + name)
            .toPromise()
            .then(function (raw) { return new _data__WEBPACK_IMPORTED_MODULE_3__["ImageInfo"](raw); });
    };
    NetworkService.prototype.getImage = function (name) {
        return this.http.get(this.BASE_URL + name, { responseType: 'blob' })
            .toPromise();
    };
    NetworkService.prototype.submit = function (imageElem, image, formGroup) {
        var ratio = imageElem.naturalHeight / imageElem.height;
        var raw = formGroup.getRawValue();
        var body = { raw: null, name: image.name, index: image.index, semi: false };
        var clamp = function (value, min, max) {
            return Math.min(max, Math.max(min, value));
        };
        var mulRatio = function (rectObj) {
            rectObj.x = clamp(+rectObj.x - 10, 0, imageElem.width);
            rectObj.y = clamp(+rectObj.y - 10, 0, imageElem.height);
            rectObj.width = (+rectObj.width - Math.max(0, (rectObj.x + +rectObj.width - imageElem.width)));
            rectObj.height = (+rectObj.height - Math.max(0, (rectObj.y + +rectObj.height - imageElem.height)));
            rectObj.x *= ratio;
            rectObj.y *= ratio;
            rectObj.width *= ratio;
            rectObj.height *= ratio;
            return rectObj;
        };
        if (raw.legend.haveLegend) {
            raw.legend = mulRatio(raw.legend);
        }
        if (raw.xAxis.haveAxis) {
            raw.xAxis = mulRatio(raw.xAxis);
        }
        if (raw.yAxis.haveAxis) {
            raw.yAxis = mulRatio(raw.yAxis);
        }
        body.raw = raw;
        return this.http.post(this.BASE_URL + 'submit', body)
            .toPromise().then(function (raw) { return raw[0]; });
    };
    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NetworkService);
    return NetworkService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! C:\Users\junhoe\HCIL\dev\chart-dataset\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map