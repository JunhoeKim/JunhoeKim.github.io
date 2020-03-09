function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\r\n    <ng-container *ngIf=\"status && status.active\">\r\n        <mat-toolbar color=\"primary\">\r\n            <a [routerLink]=\"['/']\" class=\"mr-4\">/* Autotator */</a>\r\n            <!-- <a [routerLink]=\"['/edit']\" class=\"menu\">Editor</a> -->\r\n            <!-- <a [routerLink]=\"['/gallery']\" class=\"menu\">Gallery</a> -->\r\n        </mat-toolbar>\r\n        <router-outlet></router-outlet>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"status && !status.active\">\r\n        <app-non-active-page></app-non-active-page>\r\n    </ng-container>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/annotation-module.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/annotation-module.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleAnnotationModuleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-vertical-stepper linear\r\n    (selectionChange)=\"onStepChange($event)\"\r\n    #stepper>\r\n    <ng-container *ngIf=\"config\">\r\n        <ng-container *ngFor=\"let task of config.tasks; let i = index\">\r\n            <mat-step [stepControl]=\"formGroup.get(task.key)\">\r\n                <form [formGroup]=\"formGroup\">\r\n                    <ng-template matStepLabel>{{ task.command }}</ng-template>\r\n                    <ng-container [ngSwitch]=\"task.taskType\">\r\n                        <ng-container *ngSwitchCase=\"'C'\">\r\n                            <app-classification\r\n                                [formGroup]=\"formGroup\"\r\n                                [stepper]=\"stepper\"\r\n                                [index]=\"i\"\r\n                                [task]=\"task\"\r\n                                [currIndex]=\"currIndex\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady($event)\"\r\n                            >\r\n                            </app-classification>\r\n                        </ng-container>\r\n                        <ng-container *ngSwitchCase=\"'R'\">\r\n                            <app-regression\r\n                                [formGroup]=\"formGroup\"\r\n                                [task]=\"task\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady($event)\"\r\n                                >\r\n                            </app-regression>\r\n                        </ng-container>\r\n                        <ng-container *ngSwitchCase=\"'B'\">\r\n                            <app-bounding-box\r\n                                [formGroup]=\"formGroup\"\r\n                                [task]=\"task\"\r\n                                [index]=\"i\"\r\n                                [imgRef]=\"imgRef\"\r\n                                [svgS]=\"svgS\"\r\n                                [currIndex]=\"currIndex\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady($event)\"\r\n                            >\r\n                            </app-bounding-box>\r\n                        </ng-container>\r\n                        <ng-container *ngSwitchCase=\"'T'\">\r\n                            <app-text\r\n                                [formGroup]=\"formGroup\"\r\n                                [task]=\"task\"\r\n                                [index]=\"i\"\r\n                                [imgRef]=\"imgRef\"\r\n                                [svgS]=\"svgS\"\r\n                                [currIndex]=\"currIndex\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady($event)\"\r\n                            >\r\n                            </app-text>\r\n                        </ng-container>\r\n                        <ng-container *ngSwitchCase=\"'O'\">\r\n                            <app-overall\r\n                                [formGroup]=\"formGroup\"\r\n                                [task]=\"task\"\r\n                                [index]=\"i\"\r\n                                [imgRef]=\"imgRef\"\r\n                                [svgS]=\"svgS\"\r\n                                [currIndex]=\"currIndex\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady($event)\"\r\n                                (outdatedFeedback)=\"resolveOutdatedFeedback()\"\r\n                                [mode]=\"mode\"\r\n                            >\r\n                            </app-overall>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </form>\r\n                <div *ngIf=\"i !== config.tasks.length - 1\" class=\"mt-2 text-right\">\r\n                    <button mat-stroked-button matStepperPrevious\r\n                        class=\"mr-1\">Prev</button>\r\n                    <button mat-stroked-button matStepperNext>Next</button>\r\n                </div>\r\n            </mat-step>\r\n        </ng-container>\r\n    </ng-container>\r\n</mat-vertical-stepper>\r\n<app-review-panel *ngIf=\"review && mode === 'revision'\"\r\n    [feedbacks]=\"review.feedbacks\"\r\n    [focusedKey]=\"focusedFeedbackKey\"\r\n    (focus)=\"displayFeedback($event)\">\r\n</app-review-panel>\r\n<div class=\"d-flex justify-content-end submit-section align-items-center p-3 px-4\">\r\n    <button *ngIf=\"submitReady\"\r\n        mat-stroked-button (click)=\"submit($event)\">\r\n        {{ L.submit }}\r\n    </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/bounding-box/bounding-box.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/bounding-box/bounding-box.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleBoundingBoxBoundingBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-2 d-flex flex-wrap table styled-scroll\">\r\n    <div class=\"d-flex w-100 py-1 border-bottom\">\r\n        <div class=\"w-15 text-center\">\r\n            INDEX\r\n        </div>\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-15 text-center\">\r\n            {{feature}}\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.labels.length > 1\"\r\n            class=\"w-25 text-center\">\r\n            Label\r\n        </div>\r\n    </div>\r\n    <div\r\n        *ngFor=\"let box of boxes\"\r\n        class=\"d-flex w-100\"\r\n        [class.focused]=\"focusedBoxIndex === box.key\">\r\n        <div class=\"w-15 text-center py-1\"\r\n            (click)=\"updateFocus(box.key)\">\r\n            {{ box.key }}\r\n        </div>\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-15 text-center py-1\"\r\n            (click)=\"updateFocus(box.key)\">\r\n            {{ box.points[feature].value }}\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.labels.length > 1\"\r\n            class=\"w-25 text-center px-2 py-1\">\r\n            <select [formControl]=\"box.label\"\r\n                class=\"mat-select\">\r\n                <option *ngFor=\"let label of task.labels\" [value]=\"label\">\r\n                        {{ label }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"validate-feedback w-100 py-2\">\r\n        <ng-container *ngFor=\"let msg of task.msgs\">\r\n            *{{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/classification/classification.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/classification/classification.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleClassificationClassificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-2 d-flex flex-wrap\" [formGroup]=\"formGroup\">\r\n    <mat-radio-group\r\n        [formControlName]=\"task.key\"\r\n        (change)=\"onChange($event)\"\r\n        #radioGroup>\r\n        <mat-radio-button *ngFor=\"let label of task.labels\" [value]=\"label\" class=\"mr-3\">\r\n            {{ label }}\r\n        </mat-radio-button>\r\n    </mat-radio-group>\r\n    <div class=\"validate-feedback w-100\">\r\n        <ng-container *ngFor=\"let msg of task.msgs\">\r\n            *{{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleOverallAxisSpecAxisSpecComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100\" [formGroup]=\"group\" #wrapper>\r\n    <div class=\"w-100 d-flex flex-wrap\" #title>\r\n        <mat-form-field class=\"w-100\">\r\n            <input matInput formControlName=\"title\"\r\n                [placeholder]=\"L.title\">\r\n        </mat-form-field>\r\n        <div\r\n            *ngIf= \"focusedElemWithKey('title')\"\r\n            class=\"feedback-region title\">\r\n            <div>\r\n                {{ focusedFeedback.comment }}\r\n            </div>\r\n            <app-resolve-button></app-resolve-button>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\">\r\n        <div #dir class=\"mr-3\">\r\n            <mat-form-field>\r\n                <mat-label>{{ L.dir }}</mat-label>\r\n                <input matInput *ngIf=\"auto\" formControlName=\"dir\" readonly>\r\n                <mat-select\r\n                    *ngIf=\"!auto\"\r\n                    formControlName=\"dir\">\r\n                    <mat-option value=\"x\">X</mat-option>\r\n                    <mat-option value=\"y\">Y</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('dir')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n        <div #type class=\"mr-3\">\r\n            <mat-form-field>\r\n                <mat-label>{{ L.type }}</mat-label>\r\n                <mat-select\r\n                    (selectionChange)=\"onValueTypeChange($event)\"\r\n                    formControlName=\"type\">\r\n                    <mat-option value=\"nominal\">nominal</mat-option>\r\n                    <mat-option value=\"quantitative\">quantitative</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('type')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n        <div #unit\r\n            *ngIf=\"group.get('type').value === 'quantitative'\"\r\n            class=\"mr-3\">\r\n            <mat-form-field>\r\n                <mat-label>{{ L.unit }}</mat-label>\r\n                <mat-select\r\n                    value=\"\"\r\n                    formControlName=\"unit\" >\r\n                    <mat-option value=\"integer\">{{ L.integer }} </mat-option>\r\n                    <mat-option value=\"decimal\">{{ L.decimal }}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('unit')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\" #labels>\r\n        <app-label-chip-list\r\n            formKey=\"labels\"\r\n            [editable]=\"false\"\r\n            [formGroup]=\"group\"\r\n            [focusedFeedback]=\"focusedFeedback\"\r\n            [focusedFeedbackKey]=\"focusedFeedbackKey\">\r\n        </app-label-chip-list>\r\n    </div>\r\n    <div\r\n        *ngIf=\"hasMarkLabels\"\r\n        class=\"w-100 my-1\"\r\n        #markLabels>\r\n        <div class=\"w-100\">\r\n            <mat-checkbox formControlName=\"labeled\">\r\n                {{ L.target }}\r\n            </mat-checkbox>\r\n        </div>\r\n        <ng-container *ngIf=\"group.get('labeled').value\">\r\n            <app-label-chip-list\r\n                formKey=\"markLabels\"\r\n                [editable]=\"true\"\r\n                [formGroup]=\"group\"\r\n                [focusedFeedback]=\"focusedFeedback\"\r\n                [focusedFeedbackKey]=\"focusedFeedbackKey\">\r\n            </app-label-chip-list>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleOverallCanvasPatchCanvasPatchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<canvas #canvas width=\"15px\" height=\"15px\">\r\n</canvas>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleOverallCustomSpecCustomSpecComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 py-2\" [formGroup]=\"group\">\r\n    <div class=\"w-100 position-relative\">\r\n        <app-sub-header [title]=\"title\"></app-sub-header>\r\n        <button mat-icon-button\r\n            class=\"close-button\"\r\n            (click)=\"close()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\" #titleRef>\r\n        <mat-form-field class=\"w-100\">\r\n            <input matInput\r\n                formControlName=\"title\"\r\n                [placeholder]=\"L.title\">\r\n        </mat-form-field>\r\n        <div\r\n            *ngIf= \"focusedElemWithKey('title')\"\r\n            class=\"feedback-region title\">\r\n            <div>\r\n                {{ focusedFeedback.comment }}\r\n            </div>\r\n            <app-resolve-button></app-resolve-button>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\">\r\n        <div #type class=\"mr-3\">\r\n            <mat-form-field class=\"mr-3\">\r\n                <mat-label>{{ L.type }}</mat-label>\r\n                <mat-select\r\n                    formControlName=\"type\"\r\n                    (selectionChange)=\"onValueTypeChange($event)\">\r\n                    <mat-option value=\"nominal\">nominal</mat-option>\r\n                    <mat-option value=\"quantitative\">quantitative</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('type')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n        <div #unit class=\"mr-3\">\r\n            <mat-form-field *ngIf=\"valueType === 'quantitative'\">\r\n                <mat-label>{{ L.unit }}</mat-label>\r\n                <mat-select\r\n                    value=\"\"\r\n                    formControlName=\"unit\">\r\n                    <mat-option value=\"integer\">{{ L.integer }}</mat-option>\r\n                    <mat-option value=\"decimal\">{{ L.decimal }}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('unit')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div\r\n        *ngIf=\"hasMarkLabels\"\r\n        class=\"w-100 my-1 d-flex align-items-center flex-wrap\" #labels>\r\n        <mat-checkbox formControlName=\"labeled\"\r\n            class=\"w-100\"\r\n            (change)=\"checkLabeledByMarks($event)\">\r\n            {{ L.target }}\r\n        </mat-checkbox>\r\n        <app-label-chip-list\r\n            *ngIf=\"labeledByMarks\"\r\n            formKey=\"markLabels\"\r\n            [editable]=\"true\"\r\n            [formGroup]=\"group\"\r\n            [focusedFeedback]=\"focusedFeedback\"\r\n            [focusedFeedbackKey]=\"focusedFeedbackKey\">\r\n        </app-label-chip-list>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleOverallLabelChipListLabelChipListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 d-flex flex-wrap\" [formGroup]=\"formGroup\">\r\n    <mat-form-field class=\"w-100\">\r\n        <mat-chip-list #chipList [formArrayName]=\"formKey\">\r\n            <mat-chip *ngFor=\"let label of labels\"\r\n                color=\"primary\"\r\n                [selectable]=\"editable\"\r\n                [removable]=\"editable\"\r\n                (removed)=\"remove(label)\">\r\n                {{ label }}\r\n                <mat-icon matChipRemove>cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n                *ngIf=\"editable\"\r\n                [placeholder]=\"L.registerLabel\"\r\n                [matChipInputAddOnBlur]=\"true\"\r\n                [matChipInputFor]=\"chipList\"\r\n                [matChipInputSeparatorKeyCodes]=\"separatorKeyCodes\"\r\n                (matChipInputTokenEnd)=\"add($event)\"\r\n                >\r\n        </mat-chip-list>\r\n    </mat-form-field>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey === formKey\"\r\n        class=\"feedback-region\">\r\n        <div class=\"mr-2\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleOverallLegendSpecLegendSpecComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100\" [formGroup]=\"group\">\r\n    <div class=\"w-100 d-flex flex-wrap\" #title>\r\n        <mat-form-field class=\"w-100\">\r\n            <input matInput formControlName=\"title\"\r\n                [placeholder]=\"L.title\">\r\n        </mat-form-field>\r\n        <div\r\n            *ngIf= \"focusedElemWithKey('title')\"\r\n            class=\"feedback-region title\">\r\n            <div>\r\n                {{ focusedFeedback.comment }}\r\n            </div>\r\n            <app-resolve-button></app-resolve-button>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\" #labels>\r\n        <app-label-chip-list\r\n            formKey=\"labels\"\r\n            [editable]=\"false\"\r\n            [formGroup]=\"group\"\r\n            [focusedFeedback]=\"focusedFeedback\"\r\n            [focusedFeedbackKey]=\"focusedFeedbackKey\">\r\n        </app-label-chip-list>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/overall.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/overall.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleOverallOverallComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"stage == 0\">\r\n<div class=\"p-2 w-100\">\r\n    <mat-button-toggle-group\r\n        [value]=\"boxMode\"\r\n        (change)=\"onBoxModeChange($event)\"\r\n        class=\"mr-3\">\r\n        <mat-button-toggle value=\"text\" id=\"text-mode-button\">\r\n            {{ L.textMode }}\r\n        </mat-button-toggle>\r\n        <mat-button-toggle value=\"mark\" id=\"mark-mode-button\">\r\n            {{ L.markMode }}\r\n        </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n</div>\r\n<div *ngIf=\"boxMode === 'mark'\">\r\n    <div class=\"d-flex align-items-center justify-content-between w-100\">\r\n        <div class=\"subtitle py-2 mr-1\">\r\n            {{ L.marks }}\r\n        </div>\r\n        <button mat-button\r\n            (click)=\"clearBoxes()\"\r\n            color=\"warn\"\r\n            clss=\"mr-2\">\r\n            {{ L.deleteAll }}\r\n        </button>\r\n    </div>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey.startsWith('mark.other')\"\r\n        class=\"w-100 feedback-region my-2 justify-content-start\">\r\n        <div class=\"mr-3\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n    <button mat-stroked-button\r\n        *ngIf=\"task.inputType === 'rect'\"\r\n        (click)=\"onCheckBoxRegression()\">\r\n        {{ L.regression }}\r\n    </button>\r\n    <div *ngIf=\"task.inputType === 'point'\">\r\n        <div>\r\n            {{ L.radius }}\r\n        </div>\r\n        <div class=\"d-flex align-items-center\">\r\n            <mat-slider\r\n                min=\"2\"\r\n                max=\"15\"\r\n                step=\"1\"\r\n                [(ngModel)]=\"pointRadius\"\r\n                class=\"mr-3 w-25\"\r\n                (change)=\"onPointSizeChange($event)\"\r\n            >\r\n            </mat-slider>\r\n            <div class=\"mr-1\">\r\n                <svg height=\"48px\" width=\"48px\">\r\n                    <circle cx=\"24px\" cy=\"24px\" r=\"8px\"\r\n                        fill=\"darkorange\" #pointMark>\r\n                    </circle>\r\n                </svg>\r\n            </div>\r\n            <div>\r\n                {{ pointRadius }}px\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div\r\n        class=\"p-2 d-flex flex-wrap table styled-scroll\" #markScroll>\r\n        <div class=\"d-flex w-100 py-1 border-bottom\">\r\n            <div class=\"w-20 text-center py-1\">\r\n                INDEX\r\n            </div>\r\n            <div\r\n                *ngFor=\"let feature of task.features\"\r\n                class=\"w-20 text-center\">\r\n                {{feature}}\r\n            </div>\r\n        </div>\r\n        <div\r\n            *ngFor=\"let box of marks; let i = index\"\r\n            [class]=\"'d-flex flex-wrap w-100 focus-box elem-' + box.key\"\r\n            (click)=\"updateFocus(box.key)\"\r\n            [class.even]=\"i % 2 == 0\"\r\n            #markRows>\r\n            <div class=\"w-100 d-flex\"\r\n                [class.focused]=\"focusedBoxIndex === box.key\">\r\n                <div class=\"w-20 text-center py-1\">\r\n                    {{ i + 1 }}\r\n                </div>\r\n                <div\r\n                    *ngFor=\"let feature of task.features\"\r\n                    class=\"w-20 text-center py-1\">\r\n                    <span>{{ box.points[feature].value }}</span>\r\n                </div>\r\n            </div>\r\n            <div\r\n                [hidden]=\"!focusedFeedback || focusedFeedbackKey !== box.key\"\r\n                class=\"w-100 feedback-region\">\r\n                <div class=\"mr-3\">\r\n                    {{ focusedFeedback ? focusedFeedback.comment : '' }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"boxMode === 'text'\">\r\n    <div class=\"d-flex w-100 justify-content-between\">\r\n        <div class=\"subtitle py-2 mr-1\">\r\n            {{ L.texts }}\r\n        </div>\r\n        <button mat-button\r\n            (click)=\"clearBoxes()\" color=\"warn\">\r\n            {{ L.deleteAll }}\r\n        </button>\r\n    </div>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey.startsWith('text.other')\"\r\n        class=\"w-100 feedback-region my-2 justify-content-start\">\r\n        <div class=\"mr-3\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n    <div class=\"w-100 my-3\">\r\n        <mat-slide-toggle\r\n            [(ngModel)]=\"sortText\"\r\n            (change)=\"updateTextSortOption($event)\">\r\n            {{ L.sort }}\r\n        </mat-slide-toggle>\r\n    </div>\r\n    <mat-divider class=\"w-100\"></mat-divider>\r\n    <div class=\"p-2 d-flex flex-wrap table styled-scroll\" #textScroll>\r\n        <div class=\"d-flex w-100 py-1 border-bottom\">\r\n            <div\r\n                *ngFor=\"let feature of task.features\"\r\n                class=\"feature-cell\">\r\n                {{feature}}\r\n            </div>\r\n            <div\r\n                *ngIf=\"task.textLabels.length > 1\"\r\n                class=\"w-25 text-center label-cell\">\r\n                Label\r\n            </div>\r\n            <div\r\n                class=\"input-cell text-center\">\r\n                Text\r\n            </div>\r\n        </div>\r\n        <div\r\n            *ngFor=\"let box of texts; let i = index\"\r\n            [class]=\"'d-flex flex-wrap w-100 focus-box elem-' + box.key\"\r\n            (click)=\"updateFocus(box.key)\"\r\n            #textRows>\r\n            <div class=\"d-flex w-100\"\r\n                [class.focused]=\"focusedBoxIndex === box.key\">\r\n                <div\r\n                    *ngFor=\"let feature of task.features\"\r\n                    class=\"feature-cell py-1\">\r\n                    <span>{{ box.points[feature].value }} </span>\r\n                </div>\r\n                <div\r\n                    *ngIf=\"task.textLabels.length > 1\"\r\n                    class=\"w-25 text-center px-2 py-1\">\r\n                    <select [formControl]=\"box.label\"\r\n                        class=\"label-select\"\r\n                        (change)=\"onLabelChange()\"\r\n                        (focus)=\"onBlurEvent(box)\">\r\n                        <option *ngFor=\"let label of task.textLabels\" [value]=\"label\">\r\n                                {{ L.label(label) }}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div\r\n                    class=\"input-cell px-2 py-1\">\r\n                    <input [formControl]=\"box.text\"\r\n                        (focusin)=\"onBlurEvent(box)\"\r\n                        (keypress)=\"inputKeyPress($event)\"\r\n                        type=\"search\">\r\n                </div>\r\n            </div>\r\n            <div\r\n                [hidden]=\"!focusedFeedback || focusedFeedbackKey !== box.key\"\r\n                class=\"w-100 feedback-region\">\r\n                <div class=\"mr-3\">\r\n                    {{ focusedFeedback ? focusedFeedback.comment : '' }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"validate-feedback w-100 py-2\">\r\n    <ng-container *ngFor=\"let msg of task.msgs\">\r\n        *{{ msg }} <br/>\r\n    </ng-container>\r\n</div>\r\n</div>\r\n<div *ngIf=\"stage == 1\">\r\n    <div class=\"w-100 position-relative\">\r\n        <app-sub-header [title]=\"L.spec\"></app-sub-header>\r\n        <div class=\"refresh-warning\">\r\n            {{ L.refreshWarning }}\r\n        </div>\r\n        <button mat-icon-button\r\n            class=\"close-button\"\r\n            (click)=\"refresh(1)\">\r\n            <mat-icon>refresh</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey.startsWith('spec.other')\"\r\n        class=\"w-100 feedback-region my-2 justify-content-start\">\r\n        <div class=\"mr-3\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n     <div\r\n        class=\"p-2 d-flex flex-wrap table styled-scroll\"\r\n        [formGroup]=\"specGroup\"\r\n        #specScroll>\r\n        <div class=\"w-100 d-flex flex-wrap spec\">\r\n            <mat-form-field class=\"w-100\">\r\n                <input matInput formControlName=\"title\"\r\n                    [placeholder]=\"L.title\"\r\n                    (change)=\"onChangeTitleSpec($event)\">\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf=\"focusedFeedback && focusedFeedbackKey === 'title'\"\r\n                class=\"w-100 feedback-region title\">\r\n                <div class=\"mr-3\">\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n        <div class=\"w-100 d-flex spec\">\r\n            <mat-form-field class=\"w-100\">\r\n                <input matInput readonly\r\n                    [placeholder]=\"L.numMarks\"\r\n                    [value]=\"marks.length\">\r\n            </mat-form-field>\r\n        </div>\r\n        <app-sub-header *ngIf=\"axesGroup.length > 0\"\r\n            [title]=\"L.axis\">\r\n        </app-sub-header>\r\n        <div *ngFor=\"let axisGroup of axesGroup; let i = index\"\r\n            class=\"w-100 spec\">\r\n            <app-axis-spec\r\n                [auto]=\"auto\"\r\n                [index]=\"i\"\r\n                [group]=\"axisGroup\"\r\n                [imgRef]=\"imgRef\"\r\n                [task]=\"task\"\r\n                [texts]=\"texts\"\r\n                (scroll)=\"onSpecScroll($event)\">\r\n            </app-axis-spec>\r\n        </div>\r\n        <ng-container *ngIf=\"hasLegend\">\r\n            <app-sub-header [title]=\"L.legend\"> </app-sub-header>\r\n            <div class=\"w-100 spec\">\r\n                <app-legend-spec\r\n                    [auto]=\"auto\"\r\n                    [group]=\"legendGroup\"\r\n                    [task]=\"task\"\r\n                    (scroll)=\"onSpecScroll($event)\">\r\n                </app-legend-spec>\r\n            </div>\r\n        </ng-container>\r\n        <app-custom-spec\r\n            class=\"w-100\"\r\n            *ngFor=\"let group of customGroups; let i = index\"\r\n            [index]=\"i\"\r\n            [group]=\"group\"\r\n            [task]=\"task\"\r\n            [texts]=\"texts\"\r\n            (closed)=\"deleteCustomColumn($event)\"\r\n            (scroll)=\"onSpecScroll($event)\">\r\n\r\n        </app-custom-spec>\r\n        <div class=\"mt-2 d-flex w-100\">\r\n            <button mat-stroked-button\r\n                class=\"mr-2\"\r\n                (click)=\"addCustomColumn(false)\">\r\n                {{ L.addCustomColumn }}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"stage == 2\">\r\n    <div class=\"subtitle py-2\">{{ L.rawData }}</div>\r\n    <div class=\"p-2 d-flex flex-wrap w-100\">\r\n        <app-raw-table\r\n            class=\"w-100\"\r\n            [imgRef]=\"imgRef\"\r\n            [formGroup]=\"formGroup.get(task.key)\"\r\n            [task]=\"task\"\r\n            [boxes]=\"boxes\"\r\n            [hasLegend]=\"hasLegend\"\r\n            [focusedBoxIndex]=\"focusedBoxIndex\"\r\n            [inputType]=\"task.inputType\"\r\n            [pointRadius]=\"pointRadius\"\r\n            [auto]=\"auto\"\r\n            [mode]=\"mode\"\r\n            (focusEmitter)=\"updateFocus($event)\"\r\n            (submitEmitter)=\"onSubmitReady()\"\r\n            (outdatedFeedback)=\"outdatedFeedback.emit()\">\r\n\r\n        </app-raw-table>\r\n    </div>\r\n</div>\r\n<div class=\"mt-2 w-100 d-flex justify-content-end\">\r\n    <button mat-button class=\"mr-2\"\r\n        (click)=\"goPrevStage()\"\r\n        [disabled]=\"stage === 0\">\r\n        << {{ L.prev }}\r\n    </button>\r\n    <button mat-button\r\n        (click)=\"goNextStage()\"\r\n        [disabled]=\"stage === 2\">\r\n        >> {{ L.next }}\r\n    </button>\r\n</div>\r\n\r\n<div\r\n    class=\"control-panel p-2 px-3 border-bottom\"\r\n    #controlPanel>\r\n\r\n    <button mat-stroked-button\r\n        (click)=\"deleteBox(focusedBoxIndex)\"\r\n        [disabled]=\"!focusedBoxIndex || stage !== 0\"\r\n        matTooltip=\"Press (d / delete)\"\r\n        class=\"mr-2\">\r\n        {{ L.controlDelete }}\r\n    </button>\r\n\r\n    <button mat-stroked-button\r\n        (click)=\"sortDrawOrder(focusedBoxIndex, true)\"\r\n        [disabled]=\"!focusedBoxIndex || stage !== 0\"\r\n        matTooltip=\"Press f\"\r\n        class=\"mr-2\">\r\n        {{ L.controlForward }}\r\n    </button>\r\n\r\n    <button mat-stroked-button\r\n        (click)=\"sortDrawOrder(focusedBoxIndex, false)\"\r\n        [disabled]=\"!focusedBoxIndex || stage !== 0\"\r\n        matTooltip=\"Press b\"\r\n        class=\"mr-2\">\r\n        {{ L.controlBackward }}\r\n    </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/column-addition-dialog.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/column-addition-dialog.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleOverallRawTableColumnAdditionDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Add custom column</h1>\r\n<div mat-dialog-content>\r\n  <p>Fill the column name</p>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"column.title\">\r\n  </mat-form-field>\r\n<mat-form-field class=\"w-100\">\r\n    <mat-chip-list #chipList>\r\n        <mat-chip *ngFor=\"let label of column.labels\"\r\n            [selectable]=\"true\"\r\n            [removable]=\"true\"\r\n            (removed)=\"remove(label)\">\r\n            {{ label }}\r\n            <mat-icon matChipRemove>cancel</mat-icon>\r\n        </mat-chip>\r\n        <input\r\n            placeholder='Register labels'\r\n            [matChipInputAddOnBlur]=\"true\"\r\n            [matChipInputFor]=\"chipList\"\r\n            [matChipInputSeparatorKeyCodes]=\"separatorKeyCodes\"\r\n            (matChipInputTokenEnd)=\"add($event)\"\r\n            >\r\n    </mat-chip-list>\r\n</mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"column\" cdkFocusInitial>Ok</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/raw-table.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/raw-table.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleOverallRawTableRawTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"styled-scroll raw-table w-100\" [formGroup]=\"formGroup\" #table>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey.startsWith('other')\"\r\n        class=\"w-100 feedback-region my-2 justify-content-start\">\r\n        <div class=\"mr-3\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n    <div class=\"d-flex\" style=\"padding-left: 80px;\">\r\n        <div *ngFor=\"let column of columns; let i = index\"\r\n            class=\"column p-2 column-title d-flex align-items-center\">\r\n            <div>\r\n                {{ column.title }}\r\n            </div>\r\n            <div>\r\n                <button mat-icon-button\r\n                    (click)=\"sortByColumn(column)\">\r\n                    <mat-icon style=\"font-size: 18px;\">sort</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex\">\r\n        <div class=\"index-cell align-self-center\">\r\n            Index\r\n        </div>\r\n        <div *ngFor=\"let column of columns; let i = index\" class=\"column p-2\">\r\n            <mat-form-field>\r\n                <mat-label>{{ L.encoding }}</mat-label>\r\n                <select matNativeControl\r\n                    [formControl]=\"column.encoding ? column.encoding\r\n                    : dummyForm\"\r\n                    (change)=\"onSelectEncoding($event, column)\">\r\n                    <option value=\"\" disabled></option>\r\n                    <option *ngFor=\"let encoding of encodings\"\r\n                        [value]=\"encoding\">\r\n                        {{ L.encodingLabel(encoding) }}\r\n                    </option>\r\n                </select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedFeedbackKey === column.path\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-container *ngIf=\"allChannelsEncoded\">\r\n        <div *ngFor=\"let row of rows let i = index\">\r\n            <div [formGroup]=\"row.group\" class=\"table-row focus-box\"\r\n                (click)=\"updateFocus(row.markKey)\"\r\n                [class.focused]=\"focusedBoxIndex === row.markKey\">\r\n                <div class=\"index-cell\">\r\n                    {{ i + 1 }}\r\n                </div>\r\n                <div *ngFor=\"let column of columns; let j = index\" class=\"column content-cell\">\r\n                    <ng-container\r\n                        *ngIf=\"!column.labels || column.labels.length == 0\">\r\n                        <input [formControlName]=\"column.title\">\r\n                    </ng-container>\r\n                    <ng-container\r\n                        *ngIf=\"column.labels && column.labels.length > 0\">\r\n                        <svg *ngIf=\"column.encoding\r\n                            && column.encoding.value === 'color'\"\r\n                            class=\"patch\"\r\n                        >\r\n                            <rect\r\n                            [attr.fill]=\"row.attrs[column.title] || '#000'\">\r\n                            </rect>\r\n                        </svg>\r\n                        <app-canvas-patch\r\n                            class=\"patch\"\r\n                            *ngIf=\"column.encoding\r\n                                && column.encoding.value === 'shape'\"\r\n                            [data]=\"row.attrs[column.title]\">\r\n                        </app-canvas-patch>\r\n                        <select [formControlName]=\"column.title\"\r\n                            (change)=\"onChangeLabel(column, row, i)\"\r\n                            class=\"w-100\">\r\n                            <option *ngFor=\"let label of column.labels\" [value]=\"label\">\r\n                                {{ label }}\r\n                            </option>\r\n                        </select>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n            <div\r\n                *ngIf=\"row.markKey === focusedFeedbackKey\"\r\n                class=\"feedback-region justify-content-start my-1\">\r\n                <div class=\"mr-3\">\r\n                    {{ focusedFeedback ? focusedFeedback.comment : '' }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n<div class=\"w-100 mt-2 d-flex align-items-center\">\r\n    <!-- <button mat-stroked-button color=\"primary\"\r\n        class=\"mr-2\"\r\n        (click)=\"addRow()\">\r\n        Add Row\r\n    </button> -->\r\n    <button mat-stroked-button color=\"primary\"\r\n        class=\"mr-2\"\r\n        (click)=\"clear()\">\r\n        {{ L.clear }}\r\n    </button>\r\n    <button\r\n        mat-flat-button\r\n            color=\"primary\"\r\n            (click)=\"runPrediction()\"\r\n            [disabled]=\"!allChannelsEncoded\">\r\n        {{ L.predict }}\r\n    </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/regression/regression.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/regression/regression.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleRegressionRegressionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-2 w-75\" [formGroup]=\"formGroup\">\r\n    <div class=\"table styled-scroll\">\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-100 text-center pr-3 py-2\r\n                d-flex justify-content-between\">\r\n                <div class=\"w-50 text-left\">\r\n                    {{ feature }}\r\n                </div>\r\n                <input\r\n                    [formControl]=\"getControl(feature)\"\r\n                    type=\"number\"\r\n                    class=\"w-25 text-center answer-input\">\r\n        </div>\r\n    </div>\r\n    <div class=\"validate-feedback w-100\">\r\n        <ng-container *ngFor=\"let msg of task.msgs\">\r\n            *{{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/text/text.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/text/text.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAnnotationModuleTextTextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-2 d-flex flex-wrap table styled-scroll\">\r\n    <div class=\"d-flex w-100 py-1 border-bottom\">\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-10 text-center\">\r\n            {{feature}}\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.labels.length > 1\"\r\n            class=\"w-25 text-center\">\r\n            Label\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.collectContent\"\r\n            class=\"w-20 text-center\">\r\n            Text\r\n        </div>\r\n    </div>\r\n    <div\r\n        *ngFor=\"let box of boxes\"\r\n        class=\"d-flex w-100\"\r\n        [class.focused]=\"focusedBoxIndex === box.key\">\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-10 text-center py-1\"\r\n            (click)=\"updateFocus(box.key)\">\r\n            {{ box.points[feature].value }}\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.labels.length > 1\"\r\n            class=\"w-25 text-center px-2 py-1\">\r\n            <select [formControl]=\"box.label\"\r\n                class=\"mat-select\">\r\n                <option *ngFor=\"let label of task.labels\" [value]=\"label\">\r\n                        {{ label }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.collectContent\"\r\n            class=\"w-20 text-center px-2 py-1\">\r\n            <input [formControl]=\"box.text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"validate-feedback w-100 py-2\">\r\n        <ng-container *ngFor=\"let msg of task.msgs\">\r\n            *{{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-mark/feedback-mark.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-mark/feedback-mark.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditCommonFeedbackMarkFeedbackMarkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n    [class.focused]=\"focused\"\r\n    (click)=\"focus.emit(feedback)\">\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-modal/feedback-modal.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-modal/feedback-modal.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditCommonFeedbackModalFeedbackModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\" id=\"feedback-container\"\r\n    *ngIf=\"displayModal\"\r\n    #container>\r\n    <div class=\"w-100\r\n        d-flex align-items-center\r\n        position-relative\">\r\n        <div>\r\n            Feedback\r\n        </div>\r\n        <button mat-icon-button\r\n            class=\"close\"\r\n            (click)=\"close()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div class=\"w-100 my-2\">\r\n        {{ feedback ? feedback.comment : '' }}\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end\">\r\n        <button mat-flat-button\r\n            (click)=\"resolve()\">\r\n            Resolve\r\n        </button>\r\n    </div>\r\n    <svg></svg>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/resolve-button/resolve-button.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/resolve-button/resolve-button.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditCommonResolveButtonResolveButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-stroked-button\r\n    class=\"resolve-button\"\r\n    (click)=\"fs.resolve()\">\r\n    {{ L.resolveBtn }}\r\n</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/review-panel/review-panel.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/review-panel/review-panel.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditCommonReviewPanelReviewPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n    *ngIf=\"feedbacks\"\r\n    class=\"w-100 ml-3 p-2 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.title\"></app-sub-header>\r\n    <app-feedback-mark\r\n        class=\"mr-2\"\r\n        *ngFor=\"let feedback of feedbacks let index = i;\"\r\n        [feedback]=\"feedback\"\r\n        [focused]=\"focusedKey === feedback.key\"\r\n        (focus)=\"onFeedbackFocused($event)\">\r\n    </app-feedback-mark>\r\n    <div *ngIf=\"!feedbacks || feedbacks.length === 0\">\r\n        <i>{{ L.msg }}</i>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/sub-header/sub-header.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/sub-header/sub-header.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditCommonSubHeaderSubHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 my-2 sub-header\">\r\n    {{ title }}\r\n</div>\r\n<mat-divider class=\"mb-3\"></mat-divider>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/demo/quiz-complete-dialog.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/demo/quiz-complete-dialog.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditDemoQuizCompleteDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <h1 mat-dialog-title> 귀하께선 퀴즈를 통과하셨습니다. </h1>\r\n    <div mat-dialog-content style=\"height: 150px;\">\r\n        <div class=\"w-100\">\r\n            귀하께선 이 퀴즈를 통과함으로서 본 연구에 참여할 자격이 주어졌습니다. <br/>\r\n            아래의 링크에 접속하셔서 연구 참여에 대한 설명을 읽어보시고 참여를 원하시면 동의와 함께 네이버 아이디를 입력해주세요.\r\n        </div>\r\n        <div class=\"w-100\">\r\n            <a href=\"https://forms.gle/7LQgSnQi8jxx4TMr5\">\r\n                구글 폼 링크\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"w-100 h-100\">\r\n    <mat-sidenav mode=\"side\" opened id=\"side-nav\">\r\n        <app-side-nav\r\n            (remove)=\"onRemoveImage()\"\r\n            [event]=\"eventSubject.asObservable()\"\r\n            [mode]=\"mode\">\r\n        </app-side-nav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <div\r\n            class=\"w-100 h-100 d-flex\">\r\n            <div class=\"w-50 h-100\">\r\n                <div class=\"w-100 p-2 d-flex align-items-center edit-header\">\r\n                    {{ L.mode }}:\r\n                    {{ L.currMode(mode) }}\r\n                    <b *ngIf=\"config\">\r\n                        {{ config.service === 'normal'\r\n                            ? ''\r\n                            : '[' + L.service(config.service) + ']'\r\n                        }}\r\n                    </b>\r\n                </div>\r\n                <div id=\"image-zone\" class=\"w-100 h-75\r\n            d-flex justify-content-center align-items-center\r\n            position-relative\"\r\n                    [class.selected]=\"selectedImage\"\r\n                    #imgZone>\r\n                    <div class=\"position-absolute image-region\" [class.selected]=\"selectedImage\">\r\n                        <img #img>\r\n                    </div>\r\n\r\n                    <div class=\"position-absolute svg-region\" [class.selected]=\"selectedImage\">\r\n                        <svg #svg></svg>\r\n                    </div>\r\n                    <div *ngIf=\"noImagesLeft\"\r\n                        class=\"position-absolute w-100 h-100\r\n                            d-flex flex-column justify-content-center align-items-center\">\r\n                        <h3 class=\"w-100 mb-3 text-center\">\r\n                            COMPLETE\r\n                        </h3>\r\n                        <div class=\"px-4 desc\">\r\n                            {{ L.completeMsg1 }}\r\n                            <br/>\r\n                            {{ L.completeMsg2 }}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"w-50 right-panel styled-scroll\"\r\n                *ngIf=\"mode !== 'verification'\">\r\n                <app-annotation-module\r\n                    *ngIf=\"formGroup\"\r\n                    [formGroup]=\"formGroup\"\r\n                    [config]=\"config\"\r\n                    [imgRef]=\"imgRef\"\r\n                    [spacePressed]=\"spacePressed\"\r\n                    [svgS]=\"svgS\"\r\n                    [event]=\"eventSubject.asObservable()\"\r\n                    [mode]=\"mode\"\r\n                    (submitEmitter)=\"submit()\">\r\n                </app-annotation-module>\r\n            </div>\r\n            <div *ngIf=\"mode === 'verification' && config\"\r\n                class=\"w-50 right-panel styled-scroll\" >\r\n                <app-verification-module\r\n                    [config]=\"config\"\r\n                    [verificationDatas]=\"verificationDatas\"\r\n                    [onImageLoad]=\"onImageLoad\"\r\n                    [imgRef]=\"imgRef\"\r\n                    [svgS]=\"svgS\"\r\n                    (reviewEmitter)=\"onReviewSubmitted()\"\r\n                >\r\n                </app-verification-module>\r\n            </div>\r\n        </div>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<app-feedback-modal></app-feedback-modal>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/side-nav/side-nav.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/side-nav/side-nav.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditSideNavSideNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n    class=\"d-flex align-items-center justify-content-between w-100\r\n        side-panel\">\r\n\r\n</div>\r\n<mat-list *ngIf=\"progress\">\r\n    <div mat-list-item mat-subheader\r\n        *ngIf=\"config && config.isNormalMode\"\r\n        class=\"p-2 pl-3 progress-info\">\r\n        {{ L.sideNav.progress }}:\r\n        <span class=\"annotated mx-1\">{{ progress.approved }}</span>\r\n        /\r\n        {{ progress.total - progress.ignored}}\r\n        <span class=\"ignored mx-1\">({{progress.ignored}})</span>\r\n    </div>\r\n    <div mat-list-item mat-subheader class=\"p-2 pl-3 progress-info\">\r\n        {{ L.sideNav.userName }}:\r\n        <span class=\"mx-1 annotated\">\r\n            <strong>{{ userName }}</strong>\r\n        </span>\r\n    </div>\r\n    <div mat-list-item mat-subheader\r\n        *ngIf=\"config && config.isNormalMode && config.sharedDataset\"\r\n        class=\"p-2 pl-3 progress-info\">\r\n        {{ L.sideNav.userProgress }}:\r\n        <span class=\"mx-1 annotated\">\r\n            <strong>{{ userProgress }}</strong>\r\n        </span>\r\n    </div>\r\n</mat-list>\r\n<mat-action-list>\r\n    <button mat-list-item mat-subheader\r\n        (click)=\"autoListShow= !autoListShow\">\r\n        <div class=\"w-100 px-1\r\n            d-flex justify-content-between align-items-center\">\r\n            <div>\r\n                {{ L.sideNav.useSuggestions }}\r\n            </div>\r\n            <div>\r\n                <mat-icon>{{ autoListShow ? 'remove' : 'add_circle_outline'}}</mat-icon>\r\n            </div>\r\n        </div>\r\n    </button>\r\n    <ng-container *ngIf=\"autoListShow\">\r\n        <div *ngFor=\"let modelInfo of modelInfos\" mat-list-item class=\"py-2\">\r\n            <mat-checkbox mat-subheader (change)=\"onChangeAutoComplete($event, modelInfo)\">{{ modelInfo.name }} ({{ modelInfo.scoreFormat }})</mat-checkbox>\r\n        </div>\r\n    </ng-container>\r\n</mat-action-list>\r\n<ng-container *ngIf=\"config && config.isNormalMode\">\r\n\r\n    <!-- <div *ngIf=\"edit.image\" class=\"p-3 w-100 justify-content-center\">\r\n        {{ imageName }}\r\n    </div> -->\r\n    <div\r\n        class=\"w-100 elapsed-time\">\r\n        {{ L.sideNav.elapsedTime }} : {{ timer.sec }}\r\n    </div>\r\n    <div *ngIf=\"edit.image && mode === 'annotation'\"\r\n        class=\"d-flex align-items-center justify-content-between w-100\r\n            side-panel\">\r\n        <button mat-stroked-button color=\"warn\" (click)=\"removeImage()\">\r\n            <div class=\"d-flex justify-content-between align-items-center\">\r\n                <mat-icon class=\"mr-1\">delete_outline</mat-icon>\r\n                <div>\r\n                    {{ L.sideNav.removeButton }}\r\n                </div>\r\n            </div>\r\n        </button>\r\n    </div>\r\n    <!-- <div *ngIf=\"edit.image\"\r\n        class=\"d-flex align-items-center justify-content-between w-100\r\n            side-panel mt-2\">\r\n        <button mat-stroked-button color=\"warn\" (click)=\"getRandImage()\">\r\n            SKIP\r\n        </button>\r\n    </div> -->\r\n</ng-container>\r\n\r\n<!-- <mat-action-list>\r\n    <button mat-list-item mat-subheader\r\n        (click)=\"imageListShow = !imageListShow\">\r\n        <div class=\"w-100 px-1\r\n            d-flex justify-content-between align-items-center\">\r\n            <div>Image List</div>\r\n            <div>\r\n                <mat-icon>{{ imageListShow ? 'remove' : 'add_circle_outline'}}</mat-icon>\r\n            </div>\r\n        </div>\r\n    </button>\r\n    <ng-container *ngIf=\"imageListShow\">\r\n        <button mat-list-item *ngFor=\"let image of edit.images; let i=index\"\r\n        [class.selected]=\"edit.selectedImage && image.path === edit.selectedImage.path\"\r\n        (click)=\"selectImage(image)\">\r\n\r\n        </button>\r\n    </ng-container>\r\n    <mat-divider></mat-divider>\r\n</mat-action-list> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/dialog/review-send-dialog.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/dialog/review-send-dialog.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditVerificationModuleDialogReviewSendDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>{{ L.title }}</h1>\r\n<div mat-dialog-content>\r\n  <p>{{ L.content }}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onClose()\">{{ L.no }}</button>\r\n  <button mat-button  [mat-dialog-close]=\"data\" cdkFocusInitial>{{ L.ok }}</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/feedback-card/feedback-card.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/feedback-card/feedback-card.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditVerificationModuleFeedbackCardFeedbackCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n    [formGroup]=\"form\"\r\n    [class.focused]=\"feedback.key === focusedKey\"\r\n    (click)=\"onFocus()\"\r\n    class=\"w-100 wrapper\">\r\n    <mat-divider class=\"w-100 my-1\"></mat-divider>\r\n    <div class=\"w-100 d-flex justify-content-between\">\r\n        <div class=\"w-100 d-flex align-items-center\">\r\n            <mat-form-field\r\n                *ngIf=\"!directInput\"\r\n                class=\"w-50\">\r\n                <mat-label>\r\n                    {{ L.feedbackCard.comment }}\r\n                </mat-label>\r\n                <mat-select\r\n                    appStopPropagation\r\n                    formControlName=\"comment\">\r\n                    <mat-option *ngFor=\"let comment of comments\" [value]=\"comment\">\r\n                        {{ comment }}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field\r\n                *ngIf=\"directInput\"\r\n                class=\"w-50\">\r\n                <input\r\n                    appStopPropagation matInput\r\n                    formControlName=\"comment\" placeholder=\"Comment\" />\r\n            </mat-form-field>\r\n            <mat-checkbox\r\n                appStopPropagation\r\n                class=\"ml-3\"\r\n                (change)=\"checkWriteMode($event)\">\r\n                {{ L.feedbackCard.writeDirect }}\r\n            </mat-checkbox>\r\n        </div>\r\n        <button mat-icon-button\r\n            (click)=\"remove.emit(form)\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-classification/v-classification.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-classification/v-classification.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditVerificationModuleVClassificationVClassificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header title=\"Labels\"></app-sub-header>\r\n    <ng-container *ngIf=\"data\">\r\n        <button mat-flat-button\r\n            *ngFor=\"let label of data.labels\"\r\n            (click)=\"clickLabelButton(label)\"\r\n            class=\"mr-2 label-button\"\r\n            [class.selected]=\"label === data.label\">\r\n            {{ label }}\r\n        </button>\r\n    </ng-container>\r\n    <div\r\n        *ngIf=\"!feedbackForm\"\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-button (click)=\"update('')\">\r\n            Add Feedback\r\n        </button>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"feedbackForm\"\r\n    [formGroup]=\"feedbackForm\"\r\n    class=\"my-2\">\r\n    <mat-divider class=\"w-100\"></mat-divider>\r\n    <div class=\"w-100 d-flex justify-content-end\">\r\n        <button mat-icon-button\r\n            (click)=\"remove()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </div>\r\n    <mat-form-field class=\"w-100\">\r\n        <input matInput\r\n            placeholder=\"Comment\"\r\n            formControlName=\"comment\"/>\r\n    </mat-form-field>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditVerificationModuleVOverallAxisSpecCardAxisSpecCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 mt-2 spec-table\">\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.title.key\"\r\n            (click)=\"emit(data.title)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.axis }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ data.title.value }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.dir.key\"\r\n            (click)=\"emit(data.dir)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.dir }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.dir.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.type.key\"\r\n            (click)=\"emit(data.type)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.type }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.type.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.unit.key\"\r\n            (click)=\"emit(data.unit)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.unit }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ L.selectedUnit(data.unit.value) }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.encoding.key\"\r\n            (click)=\"emit(data.encoding)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.encoding }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ L.encodingLabel(data.encoding.value) }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.labels.key\"\r\n            (click)=\"emit(data.labels)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.labels }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ labels }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\"\r\n        *ngIf=\"data.markLabels && data.markLabels.value.length > 0\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.markLabels.key\"\r\n            (click)=\"emit(data.markLabels)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.markLabels }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ markLabels }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditVerificationModuleVOverallCustomSpecCardCustomSpecCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 mt-2 spec-table\">\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.title.key\"\r\n            (click)=\"emit(data.title)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.custom }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ data.title.value }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.type.key\"\r\n            (click)=\"emit(data.type)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.type }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.type.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.unit.key\"\r\n            (click)=\"emit(data.unit)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.unit }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.unit.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-50\"\r\n            [class.focused]=\"focusedKey === data.encoding.key\"\r\n            (click)=\"emit(data.encoding)\">\r\n            <div class=\"w-25 p-2 cell-title\">\r\n                {{ L.encoding }}\r\n            </div>\r\n            <div class=\"w-75 p-2\">\r\n                {{ L.encodingLabel(data.encoding.value) }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.markLabels.key\"\r\n            (click)=\"emit(data.markLabels)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.markLabels }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ markLabels }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditVerificationModuleVOverallLegendSpecCardLegendSpecCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 mt-2 spec-table\">\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.title.key\"\r\n            (click)=\"emit(data.title)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.legend }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ data.title.value }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.encoding.key\"\r\n            (click)=\"emit(data.encoding)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.encoding }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ L.encodingLabel(data.encoding.value) }}\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex w-75\">\r\n            <div class=\"focus-unit w-100\"\r\n                [class.focused]=\"focusedKey === data.labels.key\"\r\n                (click)=\"emit(data.labels)\">\r\n                <div class=\"w-25 p-2 cell-title\">\r\n                    {{ L.labels }}\r\n\r\n                </div>\r\n                <div class=\"w-75 p-2\">\r\n                    {{ labels }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/v-overall.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/v-overall.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditVerificationModuleVOverallVOverallComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 styled-scroll wrapper\">\r\n\r\n<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.marks\"></app-sub-header>\r\n    <ng-container *ngIf=\"data\">\r\n        <div\r\n            *ngFor=\"let mark of data.marks; let i = index\"\r\n            class=\"mr-2 mark-label\"\r\n            [class.focused]=\"focusedKey === mark.key\"\r\n            (click)=\"clickMark(mark)\">\r\n            {{ i + 1 }}\r\n        </div>\r\n    </ng-container>\r\n    <div\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-stroked-button (click)=\"addMarkFeedback()\">\r\n            {{ L.addMarksFeedback }}\r\n        </button>\r\n    </div>\r\n    <app-feedback-card\r\n        *ngFor=\"let form of markFeedbacks\"\r\n        [form]=\"form\"\r\n        [focusedKey]=\"focusedKey\"\r\n        [comments]=\"markComments\"\r\n        (focus)=\"focus.emit($event)\"\r\n        (remove)=\"removeMarkFeedback($event)\">\r\n    </app-feedback-card>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.texts\"></app-sub-header>\r\n    <ng-container *ngIf=\"data\">\r\n        <div class=\"d-flex w-100 align-items-center text-label title\">\r\n            <div class=\"label-cell px-2\">\r\n                Label\r\n            </div>\r\n            <div class=\"label-cell px-2\">\r\n                Text\r\n            </div>\r\n        </div>\r\n        <mat-divider class=\"w-100\"></mat-divider>\r\n        <div\r\n            *ngFor=\"let text of data.texts; let i = index\"\r\n            class=\"d-flex w-100 align-items-center text-label\"\r\n            [class.focused]=\"focusedKey === text.key\"\r\n            [class.odd-row]=\"i % 2 === 1\"\r\n            (click)=\"clickText(text)\">\r\n            <div class=\"label-cell px-2\">\r\n                {{ L.label(text.label) }}\r\n            </div>\r\n            <div class=\"text-cell px-2\">\r\n                {{ text.text }}\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <div\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-stroked-button (click)=\"addTextFeedback()\">\r\n            {{ L.addTextsFeedback }}\r\n        </button>\r\n    </div>\r\n    <app-feedback-card\r\n        *ngFor=\"let form of textFeedbacks\"\r\n        [form]=\"form\"\r\n        [focusedKey]=\"focusedKey\"\r\n        [comments]=\"textComments\"\r\n        (focus)=\"focus.emit($event)\"\r\n        (remove)=\"removeTextFeedback($event)\">\r\n    </app-feedback-card>\r\n</div>\r\n\r\n\r\n<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.spec\"></app-sub-header>\r\n    <ng-container *ngIf=\"data\">\r\n        <div class=\"w-100 spec-table\">\r\n            <div class=\"d-flex w-100 focus-unit\"\r\n                [class.focused]=\"data.spec.title.key === focusedKey\"\r\n                (click)=\"clickCell(data.spec.title.key)\">\r\n                <div class=\"w-125 p-2 cell-title\">\r\n                    {{ L.title }}\r\n                </div>\r\n                <div class=\"w-875 p-2\">\r\n                    {{ data.spec.title.value }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-axis-spec-card\r\n            *ngFor=\"let axis of data.spec.axes; let i = index\"\r\n            [data]=\"axis\"\r\n            [index]=\"i\"\r\n            [focusedKey]=\"focusedKey\"\r\n            (focus)=\"clickCell($event)\">\r\n        </app-axis-spec-card>\r\n        <app-legend-spec-card\r\n            *ngIf=\"data.spec.legend\"\r\n            [data]=\"data.spec.legend\"\r\n            [focusedKey]=\"focusedKey\"\r\n            (focus)=\"clickCell($event)\">\r\n        </app-legend-spec-card>\r\n        <app-custom-spec-card\r\n            *ngFor=\"let custom of data.spec.customs; let i = idnex\"\r\n            [data]=\"custom\"\r\n            [index]=\"i\"\r\n            [focusedKey]=\"focusedKey\"\r\n            (focus)=\"clickCell($event)\">\r\n        </app-custom-spec-card>\r\n    </ng-container>\r\n    <div\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-stroked-button (click)=\"addSpecFeedback()\">\r\n            {{ L.addSpecFeedback }}\r\n        </button>\r\n    </div>\r\n    <app-feedback-card\r\n        *ngFor=\"let form of specFeedbacks\"\r\n        [form]=\"form\"\r\n        [focusedKey]=\"focusedKey\"\r\n        [comments]=\"specComments\"\r\n        (focus)=\"focus.emit($event)\"\r\n        (remove)=\"removeSpecFeedback($event)\">\r\n    </app-feedback-card>\r\n</div>\r\n\r\n\r\n<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.rawData\"></app-sub-header>\r\n    <div *ngIf=\"data\"\r\n        class=\"w-100 raw-table\">\r\n        <div class=\"d-flex w-100 align-items-center text-label title\">\r\n            <div *ngFor=\"let key of data.raw.keys\" class=\"label-cell px-2\">\r\n                {{ key }}\r\n            </div>\r\n        </div>\r\n        <mat-divider class=\"w-100\"></mat-divider>\r\n        <div\r\n            *ngFor=\"let row of data.raw.rows; let i = index\"\r\n            class=\"d-flex w-100 align-items-center text-label\"\r\n            [class.focused]=\"focusedKey === row.key\"\r\n            [class.odd-row]=\"i % 2 === 1\"\r\n            (click)=\"clickRow(row)\">\r\n            <div\r\n                *ngFor=\"let key of data.raw.keys\"\r\n                class=\"label-cell px-2\">\r\n                {{ row.value[key] }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-stroked-button (click)=\"addRawFeedback()\">\r\n            {{ L.addRawFeedback }}\r\n        </button>\r\n    </div>\r\n    <app-feedback-card\r\n        *ngFor=\"let form of rawFeedbacks\"\r\n        [form]=\"form\"\r\n        [focusedKey]=\"focusedKey\"\r\n        [comments]=\"rawComments\"\r\n        (focus)=\"focus.emit($event)\"\r\n        (remove)=\"removeRawFeedback($event)\">\r\n    </app-feedback-card>\r\n</div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/verification-module.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/verification-module.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditVerificationModuleVerificationModuleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-vertical-stepper linear\r\n    #stepper>\r\n    <ng-container *ngFor=\"let task of config.tasks; let i = index\">\r\n        <mat-step>\r\n            <ng-template matStepLabel>{{ task.command }}</ng-template>\r\n            <ng-container [ngSwitch]=\"task.taskType\">\r\n                <ng-container *ngSwitchCase=\"'C'\">\r\n                    <app-v-classification\r\n                        [task]=\"task\"\r\n                        [data]=\"verificationDatas[i]\"\r\n                        (addFeedback)=\"onAddFeedback($event)\"\r\n                        (removeFeedback)=\"onRemoveFeedback($event)\">\r\n                    </app-v-classification\r\n>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-container [ngSwitch]=\"task.taskType\">\r\n                <ng-container *ngSwitchCase=\"'O'\">\r\n                    <app-v-overall\r\n                        [task]=\"task\"\r\n                        [data]=\"verificationDatas[i]\"\r\n                        [onImageLoad]=\"onImageLoad\"\r\n                        [imgRef]=\"imgRef\"\r\n                        [svgS]=\"svgS\"\r\n                        [focusedKey]=\"focusedKey\"\r\n                        (add)=\"onAddFeedback($event)\"\r\n                        (remove)=\"onRemoveFeedback($event)\"\r\n                        (focus)=\"focusedKey = $event\">\r\n                    </app-v-overall>\r\n                </ng-container>\r\n            </ng-container>\r\n        </mat-step>\r\n    </ng-container>\r\n</mat-vertical-stepper>\r\n<app-review-panel\r\n    [feedbackForms]=\"feedbackForms\"\r\n    [focusedKey]=\"focusedKey\"\r\n    (focus)=\"focusedKey = $event\">\r\n</app-review-panel>\r\n<div class=\"w-100 d-flex justify-content-end align-items-center pr-3\">\r\n    <button mat-flat-button\r\n        class=\"mr-3\"\r\n        color=\"primary\"\r\n        [disabled]=\"feedbackForms.length > 0\"\r\n        (click)=\"sendReview(true)\">\r\n        {{ L.verModule.accept }}\r\n    </button>\r\n    <button mat-flat-button\r\n        color=\"primary\"\r\n        [disabled]=\"feedbackForms.length === 0\"\r\n        (click)=\"sendReview(false)\">\r\n        {{ L.verModule.reject }}\r\n    </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 p-3 d-flex justify-content-center\">\r\n    <h1>\r\n        다음은 반자동 어노에티션 연구를 위한 크라우드소싱 실험 페이지입니다.\r\n    </h1>\r\n</div>\r\n<div class=\"w-100 mt-3 p-3 d-flex justify-content-center\">\r\n    <div class=\"mr-4 w-20\">\r\n        <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput\r\n                pattern=\"[A-Za-z0-9_]{1,10}\"\r\n                placeholder=\"Name\"\r\n                [(ngModel)]=\"name\"/>\r\n            <mat-hint>\r\n                아이디는 영문과 숫자의 조합으로만 구성해주세요.\r\n            </mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"w-100\">\r\n            <input matInput\r\n                type=\"password\"\r\n                placeholder=\"Password\"\r\n                [(ngModel)]=\"password\"/>\r\n            <mat-hint>\r\n                비밀번호는 최초 1회 설정한 값으로 지속되며 암호화되서 저장됩니다 (8자리 이상으로 입력해주세요).\r\n            </mat-hint>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <button mat-flat-button\r\n        class=\"my-2\"\r\n        color=\"primary\"\r\n        (click)=\"login()\" >\r\n        LOGIN\r\n    </button>\r\n</div>\r\n<div class=\"w-100 mt-3 p-3 d-flex justify-content-center\"\r\n    color=\"warn\">\r\n    {{ warnMessage }}\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/non-active-page/non-active-page.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/non-active-page/non-active-page.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNonActivePageNonActivePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n    There is no active instance.\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _non_active_page_non_active_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./non-active-page/non-active-page.component */
    "./src/app/non-active-page/non-active-page.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'edit',
      component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'none',
      component: _non_active_page_non_active_page_component__WEBPACK_IMPORTED_MODULE_4__["NonActivePageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#wrapper {\n  height: 100vh;\n  width: 100vw;\n}\n\na {\n  color: white;\n  margin-right: 10px;\n  text-decoration: none;\n}\n\na.menu {\n  font-size: 15px;\n  color: #EEE;\n}\n\na.menu:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEubWVudSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI0VFRTtcclxufVxyXG5cclxuYS5tZW51OmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4iLCIjd3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEubWVudSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNFRUU7XG59XG5cbmEubWVudTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var _common_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./common/config */
    "./src/app/common/config.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_demo_demo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit/demo/demo.service */
    "./src/app/edit/demo/demo.service.ts");
    /* harmony import */


    var _locale_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./locale.service */
    "./src/app/locale.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(network, configService, demo, L, router) {
        _classCallCheck(this, AppComponent);

        this.network = network;
        this.configService = configService;
        this.demo = demo;
        this.L = L;
        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.configService.checkInstanceObservable.subscribe(function (_) {
            _this.checkInstance();
          });
          window.onresize = lodash__WEBPACK_IMPORTED_MODULE_6__["throttle"](function () {
            _this.router.navigate(['/login']);

            _this.demo.init();

            alert(_this.L.resizeMessage);
          }, 1000);
        }
      }, {
        key: "checkInstance",
        value: function checkInstance() {
          var _this2 = this;

          this.network.checkInstance(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mode).then(function (status) {
            _this2.status = status;

            if (_this2.status.active) {
              _this2.configService.setConfig(new _common_config__WEBPACK_IMPORTED_MODULE_4__["Config"](_this2.status.config));
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _edit_demo_demo_service__WEBPACK_IMPORTED_MODULE_8__["DemoService"]
      }, {
        type: _locale_service__WEBPACK_IMPORTED_MODULE_9__["LocaleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _edit_demo_demo_service__WEBPACK_IMPORTED_MODULE_8__["DemoService"], _locale_service__WEBPACK_IMPORTED_MODULE_9__["LocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _edit_file_drop_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit/file-drop.directive */
    "./src/app/edit/file-drop.directive.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./edit/annotation-module */
    "./src/app/edit/annotation-module/index.ts");
    /* harmony import */


    var _edit_verification_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./edit/verification-module */
    "./src/app/edit/verification-module/index.ts");
    /* harmony import */


    var _edit_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./edit/common */
    "./src/app/edit/common/index.ts");
    /* harmony import */


    var _edit_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./edit/side-nav/side-nav.component */
    "./src/app/edit/side-nav/side-nav.component.ts");
    /* harmony import */


    var _non_active_page_non_active_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./non-active-page/non-active-page.component */
    "./src/app/non-active-page/non-active-page.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _edit_annotation_module_overall_custom_spec_custom_spec_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./edit/annotation-module/overall/custom-spec/custom-spec.component */
    "./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.ts");
    /* harmony import */


    var _edit_annotation_module_overall_label_chip_list_label_chip_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./edit/annotation-module/overall/label-chip-list/label-chip-list.component */
    "./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.ts");
    /* harmony import */


    var _edit_verification_module_feedback_card_feedback_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./edit/verification-module/feedback-card/feedback-card.component */
    "./src/app/edit/verification-module/feedback-card/feedback-card.component.ts");
    /* harmony import */


    var _edit_verification_module_v_overall_axis_spec_card_axis_spec_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component */
    "./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.ts");
    /* harmony import */


    var _edit_verification_module_v_overall_legend_spec_card_legend_spec_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component */
    "./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.ts");
    /* harmony import */


    var _edit_verification_module_v_overall_custom_spec_card_custom_spec_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component */
    "./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.ts");
    /* harmony import */


    var _edit_common_stop_propagtion_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./edit/common/stop-propagtion.directive */
    "./src/app/edit/common/stop-propagtion.directive.ts");
    /* harmony import */


    var _edit_common_resolve_button_resolve_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./edit/common/resolve-button/resolve-button.component */
    "./src/app/edit/common/resolve-button/resolve-button.component.ts");
    /* harmony import */


    var _edit_demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./edit/demo/quiz-complete-dialog.component */
    "./src/app/edit/demo/quiz-complete-dialog.component.ts");
    /* harmony import */


    var _edit_verification_module_dialog_review_send_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./edit/verification-module/dialog/review-send-dialog.component */
    "./src/app/edit/verification-module/dialog/review-send-dialog.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _edit_file_drop_directive__WEBPACK_IMPORTED_MODULE_7__["FileDropDirective"], _edit_common_stop_propagtion_directive__WEBPACK_IMPORTED_MODULE_23__["StopPropagationDirective"], _edit_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_14__["SideNavComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["ClassificationComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["RegressionComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["BoundingBoxComponent"], _non_active_page_non_active_page_component__WEBPACK_IMPORTED_MODULE_15__["NonActivePageComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["TextComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["OverallComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["AxisSpecComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["RawTableComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["LegendSpecComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["ColumnAdditionDialogComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["CanvasPatchComponent"], _edit_verification_module__WEBPACK_IMPORTED_MODULE_12__["VerificationModuleComponent"], _edit_verification_module__WEBPACK_IMPORTED_MODULE_12__["VClassificationComponent"], _edit_common__WEBPACK_IMPORTED_MODULE_13__["VSubTitleComponent"], _edit_common__WEBPACK_IMPORTED_MODULE_13__["FeedbackMarkComponent"], _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["AnnotationModuleComponent"], _edit_common__WEBPACK_IMPORTED_MODULE_13__["ReviewPanelComponent"], _edit_common__WEBPACK_IMPORTED_MODULE_13__["FeedbackModalComponent"], _edit_verification_module__WEBPACK_IMPORTED_MODULE_12__["VOverallComponent"], _edit_annotation_module_overall_custom_spec_custom_spec_component__WEBPACK_IMPORTED_MODULE_17__["CustomSpecComponent"], _edit_annotation_module_overall_label_chip_list_label_chip_list_component__WEBPACK_IMPORTED_MODULE_18__["LabelChipListComponent"], _edit_verification_module_feedback_card_feedback_card_component__WEBPACK_IMPORTED_MODULE_19__["FeedbackCardComponent"], _edit_verification_module_v_overall_axis_spec_card_axis_spec_card_component__WEBPACK_IMPORTED_MODULE_20__["AxisSpecCardComponent"], _edit_verification_module_v_overall_legend_spec_card_legend_spec_card_component__WEBPACK_IMPORTED_MODULE_21__["LegendSpecCardComponent"], _edit_verification_module_v_overall_custom_spec_card_custom_spec_card_component__WEBPACK_IMPORTED_MODULE_22__["CustomSpecCardComponent"], _edit_common_resolve_button_resolve_button_component__WEBPACK_IMPORTED_MODULE_24__["ResolveButtonComponent"], _edit_demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["QuizCompleteDialogComponent"], _edit_verification_module_dialog_review_send_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ReviewSendDialogComponent"]],
      entryComponents: [_edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["ColumnAdditionDialogComponent"], _edit_demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["QuizCompleteDialogComponent"], _edit_verification_module_dialog_review_send_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ReviewSendDialogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/config.ts":
  /*!**********************************!*\
    !*** ./src/app/common/config.ts ***!
    \**********************************/

  /*! exports provided: Config */

  /***/
  function srcAppCommonConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task/task */
    "./src/app/common/task/task.ts");
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./task */
    "./src/app/common/task/index.ts");

    var Config =
    /*#__PURE__*/
    function () {
      function Config(raw) {
        _classCallCheck(this, Config);

        this.key = raw['key'];
        this.sharedDataset = raw['sharedDataset'] || false;
        this.verification = raw['verification'] || false;
        this.service = raw['service'];
        this.tasks = raw['tasks'].map(function (task) {
          switch (task['task_type']) {
            case _task_task__WEBPACK_IMPORTED_MODULE_1__["TASK_CLASSIFICATION"]:
              return new _task__WEBPACK_IMPORTED_MODULE_2__["Classification"](task);

            case _task_task__WEBPACK_IMPORTED_MODULE_1__["TASK_REGRESSION"]:
              return new _task__WEBPACK_IMPORTED_MODULE_2__["Regression"](task);

            case _task_task__WEBPACK_IMPORTED_MODULE_1__["TASK_BBOX"]:
              return new _task__WEBPACK_IMPORTED_MODULE_2__["BoundingBox"](task);

            case _task_task__WEBPACK_IMPORTED_MODULE_1__["TASK_TEXT"]:
              return new Text(task);

            case _task_task__WEBPACK_IMPORTED_MODULE_1__["TASK_OVERALL"]:
              return new _task__WEBPACK_IMPORTED_MODULE_2__["Overall"](task);
          }
        });
      }

      _createClass(Config, [{
        key: "parsePrediction",
        value: function parsePrediction(predictData) {
          this.tasks.forEach(function (task) {
            task.parsePrediction(predictData.labels[task.key]);
          });
        }
      }, {
        key: "parsePrevAnnotation",
        value: function parsePrevAnnotation(formGroup, annotation, fb) {
          this.tasks.forEach(function (task) {
            task.parsePrevAnnotation(formGroup, annotation[task.key], fb);
          });
        }
      }, {
        key: "parseVerificationData",
        value: function parseVerificationData(data) {
          return this.tasks.map(function (task) {
            return task.parseForVerification(data.annotation[task.key]);
          });
        }
      }, {
        key: "isNormalMode",
        get: function get() {
          return this.service === 'normal';
        }
      }]);

      return Config;
    }();
    /***/

  },

  /***/
  "./src/app/common/edit-data.ts":
  /*!*************************************!*\
    !*** ./src/app/common/edit-data.ts ***!
    \*************************************/

  /*! exports provided: ModelInfo, ImageElem, PredictData, AnnotatedImageData, AnnotationMeta */

  /***/
  function srcAppCommonEditDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelInfo", function () {
      return ModelInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageElem", function () {
      return ImageElem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictData", function () {
      return PredictData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnotatedImageData", function () {
      return AnnotatedImageData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnotationMeta", function () {
      return AnnotationMeta;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ModelInfo =
    /*#__PURE__*/
    function () {
      function ModelInfo(raw) {
        _classCallCheck(this, ModelInfo);

        this.key = raw['key'];
        this.name = raw['name'];
        this.score = raw['score'];
      }

      _createClass(ModelInfo, [{
        key: "scoreFormat",
        get: function get() {
          if (typeof this.score === 'number') {
            return this.score.toFixed(2);
          } else {
            return Object.values(this.score).map(function (d) {
              return d.toFixed(2);
            }).join(' / ');
          }
        }
      }]);

      return ModelInfo;
    }();

    var ImageElem =
    /*#__PURE__*/
    function () {
      function ImageElem(path, blob, src, meta) {
        _classCallCheck(this, ImageElem);

        this.path = path;
        this.blob = blob;
        this.src = src;
        this.meta = meta;
        this.semi = false;
        var splited = this.path.split('/');
        this.name = splited[splited.length - 1];
      }

      _createClass(ImageElem, [{
        key: "hasPrevAnnotation",
        get: function get() {
          return !!this.meta && !!this.meta.annotation;
        }
      }]);

      return ImageElem;
    }();

    var PredictData =
    /*#__PURE__*/
    function () {
      function PredictData(raw) {
        _classCallCheck(this, PredictData);

        this.semi = raw['semi'];
        this.labels = raw['labels'];
      }

      _createClass(PredictData, [{
        key: "getBoundingBox",
        value: function getBoundingBox(key, width, height) {
          if (this.labels[key][0] < 0.5) {
            return null;
          } else {
            var label = this.labels[key].slice(1);
            label[0] *= width;
            label[2] *= width;
            label[1] *= height;
            label[1] *= height;
            return label;
          }
        }
      }]);

      return PredictData;
    }();

    var AnnotatedImageData = function AnnotatedImageData(raw) {
      _classCallCheck(this, AnnotatedImageData);

      this.path = raw['path'];
      this.annotation = raw['annotation'];
    };

    var AnnotationMeta = function AnnotationMeta(raw) {
      _classCallCheck(this, AnnotationMeta);

      this.path = raw['path'];
      this.feedbacks = raw['feedbacks'];
      this.annotation = raw['annotation'] || null;
    };
    /***/

  },

  /***/
  "./src/app/common/task/bounding-box.ts":
  /*!*********************************************!*\
    !*** ./src/app/common/task/bounding-box.ts ***!
    \*********************************************/

  /*! exports provided: BoundingBox */

  /***/
  function srcAppCommonTaskBoundingBoxTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoundingBox", function () {
      return BoundingBox;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task */
    "./src/app/common/task/task.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BoundingBox =
    /*#__PURE__*/
    function (_task__WEBPACK_IMPORT) {
      _inherits(BoundingBox, _task__WEBPACK_IMPORT);

      function BoundingBox(raw) {
        var _this3;

        _classCallCheck(this, BoundingBox);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BoundingBox).call(this, raw));
        _this3.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_BBOX"];
        _this3.labels = raw['labels'].slice(1);
        _this3.features = ['x0', 'y0', 'x1', 'y1'];
        return _this3;
      }

      _createClass(BoundingBox, [{
        key: "registerControl",
        value: function registerControl(formGroup, fb) {
          formGroup.addControl(this.key, fb.group({}));
        }
      }, {
        key: "updateBox",
        value: function updateBox(formGroup, raw) {
          var group = formGroup.get(this.key);

          var num = function num(value) {
            return +value.toFixed(3);
          };

          if (group.get(raw.key) === null) {
            var newControl = this.features.reduce(function (acc, curr) {
              acc[curr] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](num(raw[curr]));
              return acc;
            }, {});
            newControl['label'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.label || this.labels[0]);
            group.addControl(raw.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](newControl));
          } else {
            this.features.forEach(function (feature) {
              if (raw[feature] !== null) {
                group.get(raw.key).get(feature).setValue(num(raw[feature]));
              }
            });
          }
        }
      }, {
        key: "parsePrediction",
        value: function parsePrediction(raw) {
          var predicts = raw;
          this.prediction = predicts.map(function (d, i) {
            var _d$bound = _slicedToArray(d['bound'], 4),
                x0 = _d$bound[0],
                y0 = _d$bound[1],
                x1 = _d$bound[2],
                y1 = _d$bound[3];

            var label = d['label'];
            return {
              key: i.toString(),
              x0: x0,
              y0: y0,
              x1: x1,
              y1: y1,
              label: label
            };
          });
        }
      }, {
        key: "applyPrediction",
        value: function applyPrediction(formGroup) {
          var _this4 = this;

          if (this.prediction) {
            this.prediction.forEach(function (raw) {
              _this4.updateBox(formGroup, raw);
            });
          }
        }
      }, {
        key: "deleteBox",
        value: function deleteBox(formGroup, key) {
          var group = formGroup.get(this.key);
          group.removeControl(key);
        }
      }, {
        key: "getFormValue",
        value: function getFormValue(formGroup) {
          var _this5 = this;

          var group = formGroup.get(this.key);
          return Object.values(group.controls).map(function (boxControl) {
            return {
              bound: _this5.features.map(function (feature) {
                return boxControl.get(feature).value;
              }),
              label: boxControl.get('label').value
            };
          });
        }
      }]);

      return BoundingBox;
    }(_task__WEBPACK_IMPORTED_MODULE_1__["Task"]);
    /***/

  },

  /***/
  "./src/app/common/task/classification.ts":
  /*!***********************************************!*\
    !*** ./src/app/common/task/classification.ts ***!
    \***********************************************/

  /*! exports provided: Classification */

  /***/
  function srcAppCommonTaskClassificationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Classification", function () {
      return Classification;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task */
    "./src/app/common/task/task.ts");
    /* harmony import */


    var _verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../verification-data */
    "./src/app/common/verification-data.ts");

    var Classification =
    /*#__PURE__*/
    function (_task__WEBPACK_IMPORT2) {
      _inherits(Classification, _task__WEBPACK_IMPORT2);

      function Classification(raw) {
        var _this6;

        _classCallCheck(this, Classification);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Classification).call(this, raw));
        _this6.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_CLASSIFICATION"];
        _this6.labels = raw['labels'];
        return _this6;
      }

      _createClass(Classification, [{
        key: "registerControl",
        value: function registerControl(formGroup, fb) {
          formGroup.addControl(this.key, fb.control(this.labels[0]));
        }
      }, {
        key: "parsePrediction",
        value: function parsePrediction(raw) {
          this.prediction = raw;
        }
      }, {
        key: "parseForVerification",
        value: function parseForVerification(raw) {
          return new _verification_data__WEBPACK_IMPORTED_MODULE_2__["VClassificationData"](this.key, raw['label'], this.labels);
        }
      }, {
        key: "parsePrevAnnotation",
        value: function parsePrevAnnotation(formGroup, raw, fb) {
          formGroup.get(this.key).setValue(raw['label']);
        }
      }, {
        key: "updateBox",
        value: function updateBox(formGroup, raw) {
          formGroup.get(this.key).setValue(raw);
        }
      }, {
        key: "getFormValue",
        value: function getFormValue(formGroup) {
          return {
            label: formGroup.get(this.key).value
          };
        }
      }]);

      return Classification;
    }(_task__WEBPACK_IMPORTED_MODULE_1__["Task"]);
    /***/

  },

  /***/
  "./src/app/common/task/index.js":
  /*!**************************************!*\
    !*** ./src/app/common/task/index.js ***!
    \**************************************/

  /*! exports provided: TASK_CLASSIFICATION, TASK_REGRESSION, TASK_BBOX, TASK_TEXT, TASK_OVERALL, Task, Classification, Regression, KEY_TITLE, KEY_X_AXIS_TITLE, KEY_Y_AXIS_TITLE, KEY_X_AXIS_LABEL, KEY_Y_AXIS_LABEL, KEY_LEGEND_TITLE, KEY_LEGEND_LABEL, KEY_MARK_LABEL, LABEL_PRIORITY, Overall, textComparator, Text, BoundingBox */

  /***/
  function srcAppCommonTaskIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task */
    "./src/app/common/task/task.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_CLASSIFICATION", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_CLASSIFICATION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_REGRESSION", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_REGRESSION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_BBOX", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_BBOX"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_TEXT", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_TEXT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_OVERALL", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_OVERALL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["Task"];
    });
    /* harmony import */


    var _classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./classification */
    "./src/app/common/task/classification.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Classification", function () {
      return _classification__WEBPACK_IMPORTED_MODULE_2__["Classification"];
    });
    /* harmony import */


    var _regression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./regression */
    "./src/app/common/task/regression.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Regression", function () {
      return _regression__WEBPACK_IMPORTED_MODULE_3__["Regression"];
    });
    /* harmony import */


    var _overall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./overall */
    "./src/app/common/task/overall.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_TITLE", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_TITLE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_TITLE", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_TITLE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_TITLE", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_TITLE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_LABEL", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_LABEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_LABEL", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_LABEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_TITLE", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_LEGEND_TITLE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_LABEL", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_LEGEND_LABEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_MARK_LABEL", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LABEL_PRIORITY", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["LABEL_PRIORITY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Overall", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["Overall"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "textComparator", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["textComparator"];
    });
    /* harmony import */


    var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./text */
    "./src/app/common/task/text.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Text", function () {
      return _text__WEBPACK_IMPORTED_MODULE_5__["Text"];
    });
    /* harmony import */


    var _bounding_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bounding-box */
    "./src/app/common/task/bounding-box.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BoundingBox", function () {
      return _bounding_box__WEBPACK_IMPORTED_MODULE_6__["BoundingBox"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./src/app/common/task/index.ts":
  /*!**************************************!*\
    !*** ./src/app/common/task/index.ts ***!
    \**************************************/

  /*! exports provided: TASK_CLASSIFICATION, TASK_REGRESSION, TASK_BBOX, TASK_TEXT, TASK_OVERALL, Task, Classification, Regression, KEY_TITLE, KEY_X_AXIS_TITLE, KEY_Y_AXIS_TITLE, KEY_X_AXIS_LABEL, KEY_Y_AXIS_LABEL, KEY_LEGEND_TITLE, KEY_LEGEND_LABEL, KEY_MARK_LABEL, LABEL_PRIORITY, Overall, textComparator, Text, BoundingBox */

  /***/
  function srcAppCommonTaskIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task */
    "./src/app/common/task/task.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_CLASSIFICATION", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_CLASSIFICATION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_REGRESSION", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_REGRESSION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_BBOX", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_BBOX"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_TEXT", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_TEXT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TASK_OVERALL", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_OVERALL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return _task__WEBPACK_IMPORTED_MODULE_1__["Task"];
    });
    /* harmony import */


    var _classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./classification */
    "./src/app/common/task/classification.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Classification", function () {
      return _classification__WEBPACK_IMPORTED_MODULE_2__["Classification"];
    });
    /* harmony import */


    var _regression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./regression */
    "./src/app/common/task/regression.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Regression", function () {
      return _regression__WEBPACK_IMPORTED_MODULE_3__["Regression"];
    });
    /* harmony import */


    var _overall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./overall */
    "./src/app/common/task/overall.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_TITLE", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_TITLE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_TITLE", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_TITLE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_TITLE", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_TITLE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_LABEL", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_LABEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_LABEL", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_LABEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_TITLE", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_LEGEND_TITLE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_LABEL", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_LEGEND_LABEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KEY_MARK_LABEL", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LABEL_PRIORITY", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["LABEL_PRIORITY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Overall", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["Overall"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "textComparator", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_4__["textComparator"];
    });
    /* harmony import */


    var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./text */
    "./src/app/common/task/text.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Text", function () {
      return _text__WEBPACK_IMPORTED_MODULE_5__["Text"];
    });
    /* harmony import */


    var _bounding_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bounding-box */
    "./src/app/common/task/bounding-box.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BoundingBox", function () {
      return _bounding_box__WEBPACK_IMPORTED_MODULE_6__["BoundingBox"];
    });
    /***/

  },

  /***/
  "./src/app/common/task/overall.ts":
  /*!****************************************!*\
    !*** ./src/app/common/task/overall.ts ***!
    \****************************************/

  /*! exports provided: KEY_TITLE, KEY_X_AXIS_TITLE, KEY_Y_AXIS_TITLE, KEY_X_AXIS_LABEL, KEY_Y_AXIS_LABEL, KEY_LEGEND_TITLE, KEY_LEGEND_LABEL, KEY_MARK_LABEL, LABEL_PRIORITY, Overall, textComparator */

  /***/
  function srcAppCommonTaskOverallTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _LABEL_PRIORITY;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_TITLE", function () {
      return KEY_TITLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_TITLE", function () {
      return KEY_X_AXIS_TITLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_TITLE", function () {
      return KEY_Y_AXIS_TITLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_LABEL", function () {
      return KEY_X_AXIS_LABEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_LABEL", function () {
      return KEY_Y_AXIS_LABEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_TITLE", function () {
      return KEY_LEGEND_TITLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_LABEL", function () {
      return KEY_LEGEND_LABEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_MARK_LABEL", function () {
      return KEY_MARK_LABEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LABEL_PRIORITY", function () {
      return LABEL_PRIORITY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overall", function () {
      return Overall;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "textComparator", function () {
      return textComparator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task */
    "./src/app/common/task/task.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _verification_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../verification-data */
    "./src/app/common/verification-data.ts");

    var KEY_TITLE = 'title';
    var KEY_X_AXIS_TITLE = 'x-axis-title';
    var KEY_Y_AXIS_TITLE = 'y-axis-title';
    var KEY_X_AXIS_LABEL = 'x-axis-label';
    var KEY_Y_AXIS_LABEL = 'y-axis-label';
    var KEY_LEGEND_TITLE = 'legend-title';
    var KEY_LEGEND_LABEL = 'legend-label';
    var KEY_MARK_LABEL = 'mark-label';
    var LABEL_PRIORITY = (_LABEL_PRIORITY = {}, _defineProperty(_LABEL_PRIORITY, KEY_TITLE, 0), _defineProperty(_LABEL_PRIORITY, KEY_LEGEND_TITLE, 1), _defineProperty(_LABEL_PRIORITY, KEY_LEGEND_LABEL, 2), _defineProperty(_LABEL_PRIORITY, KEY_Y_AXIS_TITLE, 3), _defineProperty(_LABEL_PRIORITY, KEY_Y_AXIS_LABEL, 4), _defineProperty(_LABEL_PRIORITY, KEY_X_AXIS_TITLE, 5), _defineProperty(_LABEL_PRIORITY, KEY_X_AXIS_LABEL, 6), _defineProperty(_LABEL_PRIORITY, KEY_MARK_LABEL, 7), _LABEL_PRIORITY);

    var Overall =
    /*#__PURE__*/
    function (_task__WEBPACK_IMPORT3) {
      _inherits(Overall, _task__WEBPACK_IMPORT3);

      function Overall(raw) {
        var _this7;

        _classCallCheck(this, Overall);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Overall).call(this, raw));
        _this7.prediction = [];
        _this7.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_OVERALL"];
        _this7.textLabels = [KEY_Y_AXIS_LABEL, KEY_X_AXIS_LABEL, KEY_LEGEND_LABEL, KEY_MARK_LABEL, KEY_TITLE, KEY_Y_AXIS_TITLE, KEY_X_AXIS_TITLE, KEY_LEGEND_TITLE];
        _this7.features = ['x0', 'y0', 'x1', 'y1'];
        _this7.inputType = raw['input_type'];
        _this7.submitReady = false;
        return _this7;
      }

      _createClass(Overall, [{
        key: "registerControl",
        value: function registerControl(formGroup, fb) {
          formGroup.removeControl(this.key);
          var container = fb.group({});
          container.addControl('boxes', fb.group({}));
          container.addControl('spec', fb.group({
            title: fb.control(''),
            axis: fb.array([]),
            custom: fb.array([])
          }));
          container.addControl('raw', fb.array([]));
          formGroup.addControl(this.key, container);
        }
      }, {
        key: "getDefaultSpecForm",
        value: function getDefaultSpecForm(fb) {
          return fb.group({
            title: fb.control(''),
            axis: fb.array([]),
            custom: fb.array([])
          });
        }
      }, {
        key: "updateBox",
        value: function updateBox(formGroup, raw) {
          var _this8 = this;

          var group = formGroup.get(this.key).get('boxes');

          var num = function num(value) {
            return +value.toFixed(3);
          };

          var center = function center(box) {
            return [(num(box['x0']) + num(box['x1'])) / 2, (num(box['y0']) + num(box['y1'])) / 2];
          };

          var findAdjLabel = function findAdjLabel() {
            var targetCenter = center(raw);
            var texts = Object.values(group.controls).filter(function (d) {
              return d.contains('text');
            }).filter(function (d) {
              return ![KEY_TITLE, KEY_X_AXIS_TITLE, KEY_Y_AXIS_TITLE].includes(d.get('label').value);
            });

            if (texts.length === 0) {
              return _this8.textLabels[0];
            }

            var dists = texts.map(function (d) {
              var other = center(d.value);
              return Math.pow(targetCenter[0] - other[0], 2) + Math.pow(targetCenter[1] - other[1], 2);
            });
            var minIndex = dists.indexOf(d3__WEBPACK_IMPORTED_MODULE_3__["min"](dists));
            return texts[minIndex].get('label').value;
          };

          if (!group.contains(raw.key)) {
            var newControl = this.features.reduce(function (acc, curr) {
              acc[curr] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](num(raw[curr]));
              return acc;
            }, {});

            if (raw.text !== undefined) {
              newControl['text'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.text || '');
              newControl['label'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.label || findAdjLabel());
            } else {
              newControl['label'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
            }

            group.addControl(raw.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](newControl));
          } else {
            this.features.forEach(function (feature) {
              if (raw[feature]) {
                group.get(raw.key).get(feature).setValue(num(raw[feature]));
              }
            });
          }
        }
      }, {
        key: "convertToBox",
        value: function convertToBox(raw) {
          return raw.map(function (d) {
            var _d$bound2 = _slicedToArray(d['bound'], 4),
                x0 = _d$bound2[0],
                y0 = _d$bound2[1],
                x1 = _d$bound2[2],
                y1 = _d$bound2[3];

            var label = d['label'];
            var text = d['text'];
            return {
              x0: x0,
              y0: y0,
              x1: x1,
              y1: y1,
              label: label,
              text: text
            };
          });
        }
      }, {
        key: "parsePrediction",
        value: function parsePrediction(raw) {
          this.prediction = this.convertToBox(raw);
        }
      }, {
        key: "parsePrevAnnotation",
        value: function parsePrevAnnotation(formGroup, raw, fb) {
          var _this9 = this;

          this.registerControl(formGroup, fb);
          var marks = this.convertToBox(raw['marks']);
          var texts = this.convertToBox(raw['texts']);
          marks.concat(texts).map(function (d, i) {
            return Object.assign({}, d, {
              key: i.toString()
            });
          }).forEach(function (d) {
            _this9.updateBox(formGroup, d);
          });
          var spec = raw['spec'];
          formGroup.get("".concat(this.key, ".spec.title")).setValue(spec['title']);
          spec['axis'].forEach(function (axis) {
            formGroup.get("".concat(_this9.key, ".spec.axis")).push(_this9.convertToForm(axis, fb));
          });
          var legend = spec['legend'];

          if (legend) {
            formGroup.get("".concat(this.key, ".spec")).addControl('legend', this.convertToForm(legend, fb));
          }

          spec['custom'].forEach(function (axis) {
            formGroup.get("".concat(_this9.key, ".spec.custom")).push(_this9.convertToForm(axis, fb));
          });
          var rawGroup = fb.array([]);
          raw['raw'].forEach(function (d) {
            rawGroup.push(_this9.convertToForm(d, fb));
          });
          formGroup.get(this.key).setControl('raw', rawGroup);
        }
      }, {
        key: "parseForVerification",
        value: function parseForVerification(raw) {
          return new _verification_data__WEBPACK_IMPORTED_MODULE_4__["VOverallData"](this.key, raw);
        }
      }, {
        key: "applyPrediction",
        value: function applyPrediction(formGroup) {
          var _this10 = this;

          if (this.prediction) {
            var texts = this.prediction.filter(function (d) {
              return d.text !== undefined;
            });
            var marks = this.prediction.filter(function (d) {
              return d.text === undefined;
            }).filter(function (mark) {
              var fp = texts.find(function (text) {
                var xCenter = (mark.x0 + mark.x1) / 2;
                var yCenter = (mark.y0 + mark.y1) / 2;
                return text.x0 < xCenter && text.x1 > xCenter && text.y0 < yCenter && text.y1 > yCenter;
              });
              return !fp;
            });
            marks.concat(texts).map(function (d, i) {
              return Object.assign({}, d, {
                key: i.toString()
              });
            }).forEach(function (raw) {
              _this10.updateBox(formGroup, raw);
            });
          }
        }
      }, {
        key: "deleteBox",
        value: function deleteBox(formGroup, key) {
          var group = formGroup.get(this.key).get('boxes');
          group.removeControl(key);
        }
      }, {
        key: "getFormValue",
        value: function getFormValue(formGroup) {
          var _this11 = this;

          var group = formGroup.get(this.key);
          var marks = Object.values(group.get('boxes').controls).filter(function (d) {
            return !d.contains('text');
          });
          var texts = Object.values(group.get('boxes').controls).filter(function (d) {
            return d.contains('text');
          });
          var result = {
            marks: marks.map(function (d) {
              return {
                bound: _this11.features.map(function (f) {
                  return +d.get(f).value;
                }),
                label: 'object'
              };
            }),
            texts: texts.map(function (d) {
              return {
                bound: _this11.features.map(function (f) {
                  return +d.get(f).value;
                }),
                label: d.get('label').value,
                text: d.get('text').value
              };
            }).sort(textComparator),
            spec: group.get('spec').value,
            raw: group.get('raw').value
          };
          return result;
        }
      }, {
        key: "isEmptyBoxes",
        value: function isEmptyBoxes(formGroup) {
          var group = formGroup.get(this.key);
          return Object.keys(group.controls).length === 0;
        }
      }, {
        key: "convertToForm",
        value: function convertToForm(elem, fb) {
          var formGroup = fb.group({});
          Object.entries(elem).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            if (Array.isArray(value)) {
              formGroup.addControl(key, fb.array(value));
            } else {
              formGroup.addControl(key, fb.control(value));
            }
          });
          return formGroup;
        }
      }], [{
        key: "legendDefaultForm",
        value: function legendDefaultForm(fb) {
          return fb.group({
            title: fb.control(''),
            labels: fb.array([])
          });
        }
      }]);

      return Overall;
    }(_task__WEBPACK_IMPORTED_MODULE_1__["Task"]);

    function textComparator(a, b) {
      var aScore = LABEL_PRIORITY[a.label];
      var bScore = LABEL_PRIORITY[b.label];
      var aCenter = [(a.bound[0] + a.bound[2]) / 2, (a.bound[1] + a.bound[3]) / 2];
      var bCenter = [(b.bound[0] + b.bound[2]) / 2, (b.bound[1] + b.bound[3]) / 2];
      var comp = aScore - bScore;

      if (comp === 0) {
        if (a.label === KEY_X_AXIS_LABEL) {
          return aCenter[0] - bCenter[0];
        } else {
          return aCenter[1] - bCenter[1];
        }
      }

      return comp;
    }
    /***/

  },

  /***/
  "./src/app/common/task/regression.ts":
  /*!*******************************************!*\
    !*** ./src/app/common/task/regression.ts ***!
    \*******************************************/

  /*! exports provided: Regression */

  /***/
  function srcAppCommonTaskRegressionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Regression", function () {
      return Regression;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task */
    "./src/app/common/task/task.ts");

    var Regression =
    /*#__PURE__*/
    function (_task__WEBPACK_IMPORT4) {
      _inherits(Regression, _task__WEBPACK_IMPORT4);

      function Regression(raw) {
        var _this12;

        _classCallCheck(this, Regression);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Regression).call(this, raw));
        _this12.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_REGRESSION"];
        _this12.features = raw['features'];
        _this12.dtypes = raw['dtypes'];
        return _this12;
      }

      _createClass(Regression, [{
        key: "registerControl",
        value: function registerControl(formGroup, fb) {
          var group = fb.group({});
          this.features.forEach(function (feature) {
            group.addControl(feature, fb.control(0));
          });
          formGroup.addControl(this.key, group);
        }
      }, {
        key: "parsePrediction",
        value: function parsePrediction(raw) {
          this.prediction = this.features.reduce(function (acc, curr, i) {
            acc[curr] = raw[i];
            return acc;
          }, {});
        }
      }, {
        key: "updateBox",
        value: function updateBox(formGroup, raw) {
          var _this13 = this;

          this.features.forEach(function (feature, i) {
            var value = +raw[feature];

            if (_this13.dtypes[i] === 'int') {
              value = Math.round(value);
            }

            formGroup.get(_this13.key).get(feature).setValue(value);
          });
        }
      }, {
        key: "getFormValue",
        value: function getFormValue(formGroup) {
          var group = formGroup.get(this.key);
          return this.features.map(function (feature) {
            return +group.get(feature).value;
          });
        }
      }]);

      return Regression;
    }(_task__WEBPACK_IMPORTED_MODULE_1__["Task"]);
    /***/

  },

  /***/
  "./src/app/common/task/task.ts":
  /*!*************************************!*\
    !*** ./src/app/common/task/task.ts ***!
    \*************************************/

  /*! exports provided: TASK_CLASSIFICATION, TASK_REGRESSION, TASK_BBOX, TASK_TEXT, TASK_OVERALL, Task */

  /***/
  function srcAppCommonTaskTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASK_CLASSIFICATION", function () {
      return TASK_CLASSIFICATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASK_REGRESSION", function () {
      return TASK_REGRESSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASK_BBOX", function () {
      return TASK_BBOX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASK_TEXT", function () {
      return TASK_TEXT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASK_OVERALL", function () {
      return TASK_OVERALL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TASK_CLASSIFICATION = 'C';
    var TASK_REGRESSION = 'R';
    var TASK_BBOX = 'B';
    var TASK_TEXT = 'T';
    var TASK_OVERALL = 'O';

    var Task =
    /*#__PURE__*/
    function () {
      function Task(raw) {
        _classCallCheck(this, Task);

        this.key = raw['key'];
        this.name = raw['name'];
        this.taskType = raw['task_type'];
        this.command = raw['command'];
        this.msgs = raw['msgs'];
        this.submitReady = true;
        this.prediction = null;
      }

      _createClass(Task, [{
        key: "registerControl",
        value: function registerControl(formGroup, fb) {
          throw new Error('Not Implemented!!');
        }
      }, {
        key: "updateBox",
        value: function updateBox(raw) {
          var predict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          throw new Error('Not Implemented!!');
        }
      }, {
        key: "parsePrediction",
        value: function parsePrediction(raw) {
          throw new Error('Not Implemented!!');
        }
      }, {
        key: "parsePrevAnnotation",
        value: function parsePrevAnnotation(formGroup, raw, fb) {
          throw new Error('Not Implemented!!');
        }
      }, {
        key: "parseForVerification",
        value: function parseForVerification(raw) {
          throw new Error('Not Implemented!!');
        }
      }, {
        key: "applyPrediction",
        value: function applyPrediction(formGroup) {
          if (this.prediction) {
            this.updateBox(formGroup, this.prediction);
          }
        }
      }, {
        key: "getFormValue",
        value: function getFormValue(formGroup) {
          throw new Error('Not Implemented!!');
        }
      }]);

      return Task;
    }();
    /***/

  },

  /***/
  "./src/app/common/task/text.ts":
  /*!*************************************!*\
    !*** ./src/app/common/task/text.ts ***!
    \*************************************/

  /*! exports provided: Text */

  /***/
  function srcAppCommonTaskTextTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Text", function () {
      return Text;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task */
    "./src/app/common/task/task.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var Text =
    /*#__PURE__*/
    function (_task__WEBPACK_IMPORT5) {
      _inherits(Text, _task__WEBPACK_IMPORT5);

      function Text(raw) {
        var _this14;

        _classCallCheck(this, Text);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, raw));
        _this14.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_TEXT"];
        _this14.labels = raw['labels'];
        _this14.features = ['x0', 'y0', 'x1', 'y1'];
        _this14.collectContent = raw['collectContent'];
        return _this14;
      }

      _createClass(Text, [{
        key: "registerControl",
        value: function registerControl(formGroup, fb) {
          formGroup.addControl(this.key, fb.group({}));
        }
      }, {
        key: "updateBox",
        value: function updateBox(formGroup, raw) {
          var group = formGroup.get(this.key);

          var num = function num(value) {
            return +value.toFixed(3);
          };

          if (group.get(raw.key) === null) {
            var newControl = this.features.reduce(function (acc, curr) {
              acc[curr] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](num(raw[curr]));
              return acc;
            }, {});
            newControl['label'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.label || this.labels[0]);
            newControl['text'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.text || '');
            group.addControl(raw.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](newControl));
          } else {
            this.features.forEach(function (feature) {
              if (raw[feature]) {
                group.get(raw.key).get(feature).setValue(num(raw[feature]));
              }
            });
          }
        }
      }, {
        key: "parsePrediction",
        value: function parsePrediction(raw) {
          var predicts = raw;
          this.prediction = predicts.map(function (d, i) {
            var _d$bound3 = _slicedToArray(d['bound'], 4),
                x0 = _d$bound3[0],
                y0 = _d$bound3[1],
                x1 = _d$bound3[2],
                y1 = _d$bound3[3];

            var label = d['label'];
            var text = d['text'];
            return {
              key: i.toString(),
              x0: x0,
              y0: y0,
              x1: x1,
              y1: y1,
              label: label,
              text: text
            };
          });
        }
      }, {
        key: "applyPrediction",
        value: function applyPrediction(formGroup) {
          var _this15 = this;

          if (this.prediction) {
            this.prediction.forEach(function (raw) {
              _this15.updateBox(formGroup, raw);
            });
          }
        }
      }, {
        key: "deleteBox",
        value: function deleteBox(formGroup, key) {
          var group = formGroup.get(this.key);
          group.removeControl(key);
        }
      }, {
        key: "getFormValue",
        value: function getFormValue(formGroup) {
          var _this16 = this;

          var group = formGroup.get(this.key);
          return Object.values(group.controls).map(function (boxControl) {
            return {
              bound: _this16.features.map(function (feature) {
                return boxControl.get(feature).value;
              }),
              label: boxControl.get('label').value,
              text: boxControl.get('text').value
            };
          });
        }
      }, {
        key: "isEmptyBoxes",
        value: function isEmptyBoxes(formGroup) {
          var group = formGroup.get(this.key);
          return Object.keys(group.controls).length === 0;
        }
      }]);

      return Text;
    }(_task__WEBPACK_IMPORTED_MODULE_1__["Task"]);
    /***/

  },

  /***/
  "./src/app/common/verification-data.js":
  /*!*********************************************!*\
    !*** ./src/app/common/verification-data.js ***!
    \*********************************************/

  /*! exports provided: VerificationData, VClassificationData, KV, MarkAnnotation, TextAnnotation, AxisAnnotation, LegendAnnotation, CustomAnnotation, SpecAnnotation, RawAnnotation, VOverallData, Feedback, Review */

  /***/
  function srcAppCommonVerificationDataJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationData", function () {
      return VerificationData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VClassificationData", function () {
      return VClassificationData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KV", function () {
      return KV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkAnnotation", function () {
      return MarkAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextAnnotation", function () {
      return TextAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AxisAnnotation", function () {
      return AxisAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegendAnnotation", function () {
      return LegendAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomAnnotation", function () {
      return CustomAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecAnnotation", function () {
      return SpecAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RawAnnotation", function () {
      return RawAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOverallData", function () {
      return VOverallData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Feedback", function () {
      return Feedback;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Review", function () {
      return Review;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VerificationData = function VerificationData(taskKey) {
      _classCallCheck(this, VerificationData);

      this.taskKey = taskKey;
    };

    var VClassificationData =
    /*#__PURE__*/
    function (_VerificationData) {
      _inherits(VClassificationData, _VerificationData);

      function VClassificationData(taskKey, label, labels) {
        var _this17;

        _classCallCheck(this, VClassificationData);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(VClassificationData).call(this, taskKey));
        _this17.label = label;
        _this17.labels = labels;
        return _this17;
      }

      return VClassificationData;
    }(VerificationData);

    var KV =
    /*#__PURE__*/
    function () {
      function KV(key, value) {
        _classCallCheck(this, KV);

        this.key = key;
        this.value = value;
      }

      _createClass(KV, [{
        key: "contains",
        value: function contains(key) {
          return this.key === key;
        }
      }]);

      return KV;
    }();

    var MarkAnnotation =
    /*#__PURE__*/
    function () {
      function MarkAnnotation(raw, taskKey, index) {
        _classCallCheck(this, MarkAnnotation);

        this.bound = raw;
        this.key = "".concat(taskKey, ".mark.").concat(index);
      }

      _createClass(MarkAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.key === key;
        }
      }]);

      return MarkAnnotation;
    }();

    var TextAnnotation =
    /*#__PURE__*/
    function () {
      function TextAnnotation(raw, taskKey, index) {
        _classCallCheck(this, TextAnnotation);

        this.bound = raw['bound'];
        this.label = raw['label'];
        this.text = raw['text'];
        this.key = "".concat(taskKey, ".text.").concat(index);
      }

      _createClass(TextAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.key === key;
        }
      }]);

      return TextAnnotation;
    }();

    var AxisAnnotation =
    /*#__PURE__*/
    function () {
      function AxisAnnotation(raw, taskKey, index) {
        _classCallCheck(this, AxisAnnotation);

        this.dir = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".dir"), raw['dir']);
        this.title = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".title"), raw['title']);
        this.type = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".type"), raw['type']);
        this.labels = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".labels"), raw['labels']);
        this.markLabels = raw['markLabels'] ? new KV("".concat(taskKey, ".spec.axis.").concat(index, ".markLabels"), raw['markLabels']) : null;
        this.encoding = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".encoding"), raw['encoding']);
        this.unit = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".unit"), raw['unit']);
        this.labeled = raw['labeled'];
      }

      _createClass(AxisAnnotation, [{
        key: "contains",
        value: function contains(key) {
          var ret = this.dir.contains(key) || this.title.contains(key) || this.type.contains(key) || this.labels.contains(key) || this.encoding.contains(key) || this.unit.contains(key);

          if (this.markLabels) {
            ret = ret || this.markLabels.contains(key);
          }

          return ret;
        }
      }]);

      return AxisAnnotation;
    }();

    var LegendAnnotation =
    /*#__PURE__*/
    function () {
      function LegendAnnotation(raw, taskKey) {
        _classCallCheck(this, LegendAnnotation);

        this.title = new KV("".concat(taskKey, ".spec.legend.title"), raw['title']);
        this.labels = new KV("".concat(taskKey, ".spec.legend.labels"), raw['labels']);
        this.encoding = new KV("".concat(taskKey, ".spec.legend.encoding"), raw['encoding']);
      }

      _createClass(LegendAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.title.contains(key) || this.labels.contains(key) || this.encoding.contains(key);
        }
      }]);

      return LegendAnnotation;
    }();

    var CustomAnnotation =
    /*#__PURE__*/
    function () {
      function CustomAnnotation(raw, taskKey, index) {
        _classCallCheck(this, CustomAnnotation);

        this.title = new KV(this.keyOf(taskKey, index, 'title'), raw['title']);
        this.type = new KV(this.keyOf(taskKey, index, 'type'), raw['type']);
        this.markLabels = new KV(this.keyOf(taskKey, index, 'labels'), raw['markLabels']);
        this.encoding = new KV(this.keyOf(taskKey, index, 'encoding'), raw['encoding']);
        this.unit = new KV(this.keyOf(taskKey, index, 'unit'), raw['unit']);
        this.labeled = raw['labeled'];
      }

      _createClass(CustomAnnotation, [{
        key: "keyOf",
        value: function keyOf(taskKey, index, name) {
          return "".concat(taskKey, ".spec.custom.").concat(index, ".").concat(name);
        }
      }, {
        key: "contains",
        value: function contains(key) {
          return this.title.contains(key) || this.type.contains(key) || this.markLabels.contains(key) || this.encoding.contains(key) || this.unit.contains(key);
        }
      }]);

      return CustomAnnotation;
    }();

    var SpecAnnotation =
    /*#__PURE__*/
    function () {
      function SpecAnnotation(raw, taskKey) {
        _classCallCheck(this, SpecAnnotation);

        this.title = new KV("".concat(taskKey, ".spec.title"), raw['title']);
        this.axes = raw['axis'].map(function (axis, i) {
          return new AxisAnnotation(axis, taskKey, i);
        });
        this.legend = raw['legend'] ? new LegendAnnotation(raw['legend'], taskKey) : null;
        this.customs = raw['custom'].map(function (custom, i) {
          return new CustomAnnotation(custom, taskKey, i);
        });
      }

      _createClass(SpecAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.title.contains(key) || this.axes.reduce(function (acc, curr) {
            return acc || curr.contains(key);
          }, false) || this.customs.reduce(function (acc, curr) {
            return acc || curr.contains(key);
          }, false) || (this.legend ? this.legend.contains(key) : false);
        }
      }]);

      return SpecAnnotation;
    }();

    var RawAnnotation =
    /*#__PURE__*/
    function () {
      function RawAnnotation(raw, taskKey) {
        _classCallCheck(this, RawAnnotation);

        this.keys = [];
        this.rows = raw.map(function (row, i) {
          return new KV("".concat(taskKey, ".raw.").concat(i), row);
        });

        if (this.rows.length > 0) {
          this.keys = Object.keys(this.rows[0].value);
        }
      }

      _createClass(RawAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.rows.reduce(function (acc, curr) {
            return acc || curr.contains(key);
          }, false);
        }
      }]);

      return RawAnnotation;
    }();

    var VOverallData =
    /*#__PURE__*/
    function (_VerificationData2) {
      _inherits(VOverallData, _VerificationData2);

      function VOverallData(taskKey, raw) {
        var _this18;

        _classCallCheck(this, VOverallData);

        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(VOverallData).call(this, taskKey));
        _this18.marks = raw['marks'].map(function (d, i) {
          return new MarkAnnotation(d['bound'], taskKey, i);
        });
        _this18.texts = raw['texts'].map(function (d, i) {
          return new TextAnnotation(d, taskKey, i);
        });
        _this18.spec = new SpecAnnotation(raw['spec'], taskKey);
        _this18.raw = new RawAnnotation(raw['raw'], taskKey);
        return _this18;
      }

      return VOverallData;
    }(VerificationData);

    var Feedback =
    /*#__PURE__*/
    function () {
      function Feedback(raw) {
        _classCallCheck(this, Feedback);

        this.taskKey = raw['taskKey'];
        this.annotationKey = raw['annotationKey'];
        this.comment = raw['comment'];
      }

      _createClass(Feedback, [{
        key: "key",
        get: function get() {
          return "".concat(this.taskKey, ".").concat(this.annotationKey);
        }
      }], [{
        key: "from",
        value: function from(form) {
          return new Feedback(form.value);
        }
      }, {
        key: "dummy",
        value: function dummy() {
          return new Feedback({
            taskKey: '',
            annotationKey: ''
          });
        }
      }]);

      return Feedback;
    }();

    var Review = function Review(raw) {
      _classCallCheck(this, Review);

      this.path = raw['path'];
      this.approved = raw['approved'];
      this.feedbacks = raw['feedbacks'].map(function (feedback) {
        return new Feedback(feedback);
      });
    }; //# sourceMappingURL=verification-data.js.map

    /***/

  },

  /***/
  "./src/app/common/verification-data.ts":
  /*!*********************************************!*\
    !*** ./src/app/common/verification-data.ts ***!
    \*********************************************/

  /*! exports provided: VerificationData, VClassificationData, KV, MarkAnnotation, TextAnnotation, AxisAnnotation, LegendAnnotation, CustomAnnotation, SpecAnnotation, RawAnnotation, VOverallData, Feedback, Review */

  /***/
  function srcAppCommonVerificationDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationData", function () {
      return VerificationData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VClassificationData", function () {
      return VClassificationData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KV", function () {
      return KV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkAnnotation", function () {
      return MarkAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextAnnotation", function () {
      return TextAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AxisAnnotation", function () {
      return AxisAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegendAnnotation", function () {
      return LegendAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomAnnotation", function () {
      return CustomAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecAnnotation", function () {
      return SpecAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RawAnnotation", function () {
      return RawAnnotation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOverallData", function () {
      return VOverallData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Feedback", function () {
      return Feedback;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Review", function () {
      return Review;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VerificationData = function VerificationData(taskKey) {
      _classCallCheck(this, VerificationData);

      this.taskKey = taskKey;
    };

    var VClassificationData =
    /*#__PURE__*/
    function (_VerificationData3) {
      _inherits(VClassificationData, _VerificationData3);

      function VClassificationData(taskKey, label, labels) {
        var _this19;

        _classCallCheck(this, VClassificationData);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(VClassificationData).call(this, taskKey));
        _this19.label = label;
        _this19.labels = labels;
        return _this19;
      }

      return VClassificationData;
    }(VerificationData);

    var KV =
    /*#__PURE__*/
    function () {
      function KV(key, value) {
        _classCallCheck(this, KV);

        this.key = key;
        this.value = value;
      }

      _createClass(KV, [{
        key: "contains",
        value: function contains(key) {
          return this.key === key;
        }
      }]);

      return KV;
    }();

    var MarkAnnotation =
    /*#__PURE__*/
    function () {
      function MarkAnnotation(raw, taskKey, index) {
        _classCallCheck(this, MarkAnnotation);

        this.bound = raw;
        this.key = "".concat(taskKey, ".mark.").concat(index);
      }

      _createClass(MarkAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.key === key;
        }
      }]);

      return MarkAnnotation;
    }();

    var TextAnnotation =
    /*#__PURE__*/
    function () {
      function TextAnnotation(raw, taskKey, index) {
        _classCallCheck(this, TextAnnotation);

        this.bound = raw['bound'];
        this.label = raw['label'];
        this.text = raw['text'];
        this.key = "".concat(taskKey, ".text.").concat(index);
      }

      _createClass(TextAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.key === key;
        }
      }]);

      return TextAnnotation;
    }();

    var AxisAnnotation =
    /*#__PURE__*/
    function () {
      function AxisAnnotation(raw, taskKey, index) {
        _classCallCheck(this, AxisAnnotation);

        this.dir = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".dir"), raw['dir']);
        this.title = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".title"), raw['title']);
        this.type = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".type"), raw['type']);
        this.labels = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".labels"), raw['labels']);
        this.markLabels = raw['markLabels'] ? new KV("".concat(taskKey, ".spec.axis.").concat(index, ".markLabels"), raw['markLabels']) : null;
        this.encoding = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".encoding"), raw['encoding']);
        this.unit = new KV("".concat(taskKey, ".spec.axis.").concat(index, ".unit"), raw['unit']);
        this.labeled = raw['labeled'];
      }

      _createClass(AxisAnnotation, [{
        key: "contains",
        value: function contains(key) {
          var ret = this.dir.contains(key) || this.title.contains(key) || this.type.contains(key) || this.labels.contains(key) || this.encoding.contains(key) || this.unit.contains(key);

          if (this.markLabels) {
            ret = ret || this.markLabels.contains(key);
          }

          return ret;
        }
      }]);

      return AxisAnnotation;
    }();

    var LegendAnnotation =
    /*#__PURE__*/
    function () {
      function LegendAnnotation(raw, taskKey) {
        _classCallCheck(this, LegendAnnotation);

        this.title = new KV("".concat(taskKey, ".spec.legend.title"), raw['title']);
        this.labels = new KV("".concat(taskKey, ".spec.legend.labels"), raw['labels']);
        this.encoding = new KV("".concat(taskKey, ".spec.legend.encoding"), raw['encoding']);
      }

      _createClass(LegendAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.title.contains(key) || this.labels.contains(key) || this.encoding.contains(key);
        }
      }]);

      return LegendAnnotation;
    }();

    var CustomAnnotation =
    /*#__PURE__*/
    function () {
      function CustomAnnotation(raw, taskKey, index) {
        _classCallCheck(this, CustomAnnotation);

        this.title = new KV(this.keyOf(taskKey, index, 'title'), raw['title']);
        this.type = new KV(this.keyOf(taskKey, index, 'type'), raw['type']);
        this.markLabels = new KV(this.keyOf(taskKey, index, 'labels'), raw['markLabels']);
        this.encoding = new KV(this.keyOf(taskKey, index, 'encoding'), raw['encoding']);
        this.unit = new KV(this.keyOf(taskKey, index, 'unit'), raw['unit']);
        this.labeled = raw['labeled'];
      }

      _createClass(CustomAnnotation, [{
        key: "keyOf",
        value: function keyOf(taskKey, index, name) {
          return "".concat(taskKey, ".spec.custom.").concat(index, ".").concat(name);
        }
      }, {
        key: "contains",
        value: function contains(key) {
          return this.title.contains(key) || this.type.contains(key) || this.markLabels.contains(key) || this.encoding.contains(key) || this.unit.contains(key);
        }
      }]);

      return CustomAnnotation;
    }();

    var SpecAnnotation =
    /*#__PURE__*/
    function () {
      function SpecAnnotation(raw, taskKey) {
        _classCallCheck(this, SpecAnnotation);

        this.title = new KV("".concat(taskKey, ".spec.title"), raw['title']);
        this.axes = raw['axis'].map(function (axis, i) {
          return new AxisAnnotation(axis, taskKey, i);
        });
        this.legend = raw['legend'] ? new LegendAnnotation(raw['legend'], taskKey) : null;
        this.customs = raw['custom'].map(function (custom, i) {
          return new CustomAnnotation(custom, taskKey, i);
        });
      }

      _createClass(SpecAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.title.contains(key) || this.axes.reduce(function (acc, curr) {
            return acc || curr.contains(key);
          }, false) || this.customs.reduce(function (acc, curr) {
            return acc || curr.contains(key);
          }, false) || (this.legend ? this.legend.contains(key) : false);
        }
      }]);

      return SpecAnnotation;
    }();

    var RawAnnotation =
    /*#__PURE__*/
    function () {
      function RawAnnotation(raw, taskKey) {
        _classCallCheck(this, RawAnnotation);

        this.keys = [];
        this.rows = raw.map(function (row, i) {
          return new KV("".concat(taskKey, ".raw.").concat(i), row);
        });

        if (this.rows.length > 0) {
          this.keys = Object.keys(this.rows[0].value);
        }
      }

      _createClass(RawAnnotation, [{
        key: "contains",
        value: function contains(key) {
          return this.rows.reduce(function (acc, curr) {
            return acc || curr.contains(key);
          }, false);
        }
      }]);

      return RawAnnotation;
    }();

    var VOverallData =
    /*#__PURE__*/
    function (_VerificationData4) {
      _inherits(VOverallData, _VerificationData4);

      function VOverallData(taskKey, raw) {
        var _this20;

        _classCallCheck(this, VOverallData);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(VOverallData).call(this, taskKey));
        _this20.marks = raw['marks'].map(function (d, i) {
          return new MarkAnnotation(d['bound'], taskKey, i);
        });
        _this20.texts = raw['texts'].map(function (d, i) {
          return new TextAnnotation(d, taskKey, i);
        });
        _this20.spec = new SpecAnnotation(raw['spec'], taskKey);
        _this20.raw = new RawAnnotation(raw['raw'], taskKey);
        return _this20;
      }

      return VOverallData;
    }(VerificationData);

    var Feedback =
    /*#__PURE__*/
    function () {
      function Feedback(raw) {
        _classCallCheck(this, Feedback);

        this.taskKey = raw['taskKey'];
        this.annotationKey = raw['annotationKey'];
        this.comment = raw['comment'];
      }

      _createClass(Feedback, [{
        key: "key",
        get: function get() {
          return "".concat(this.taskKey, ".").concat(this.annotationKey);
        }
      }], [{
        key: "from",
        value: function from(form) {
          return new Feedback(form.value);
        }
      }, {
        key: "dummy",
        value: function dummy() {
          return new Feedback({
            taskKey: '',
            annotationKey: ''
          });
        }
      }]);

      return Feedback;
    }();

    var Review = function Review(raw) {
      _classCallCheck(this, Review);

      this.path = raw['path'];
      this.approved = raw['approved'];
      this.feedbacks = raw['feedbacks'].map(function (feedback) {
        return new Feedback(feedback);
      });
    };
    /***/

  },

  /***/
  "./src/app/config.service.ts":
  /*!***********************************!*\
    !*** ./src/app/config.service.ts ***!
    \***********************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ConfigService =
    /*#__PURE__*/
    function () {
      function ConfigService() {
        _classCallCheck(this, ConfigService);

        this.configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.userNameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.checkInstanceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(ConfigService, [{
        key: "setConfig",
        value: function setConfig(config) {
          this.configSubject.next(config);
        }
      }, {
        key: "setUserName",
        value: function setUserName(user) {
          this.userNameSubject.next(user);
        }
      }, {
        key: "checkInstance",
        value: function checkInstance() {
          this.checkInstanceSubject.next(null);
        }
      }, {
        key: "configObservable",
        get: function get() {
          return this.configSubject.asObservable();
        }
      }, {
        key: "userNameObservable",
        get: function get() {
          return this.userNameSubject.asObservable();
        }
      }, {
        key: "checkInstanceObservable",
        get: function get() {
          return this.checkInstanceSubject.asObservable();
        }
      }, {
        key: "userName",
        get: function get() {
          return this.userNameSubject.getValue();
        }
      }]);

      return ConfigService;
    }();

    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConfigService);
    /***/
  },

  /***/
  "./src/app/d3-utils.ts":
  /*!*****************************!*\
    !*** ./src/app/d3-utils.ts ***!
    \*****************************/

  /*! exports provided: Transform, log10TickFormat, translate, scale, transform, getMinIndex, getMaxIndex, getMinElem, invertTransform, addLegends, binData, rgb2Hex, rgb2hsi */

  /***/
  function srcAppD3UtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transform", function () {
      return Transform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "log10TickFormat", function () {
      return log10TickFormat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translate", function () {
      return translate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scale", function () {
      return scale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transform", function () {
      return transform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMinIndex", function () {
      return getMinIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMaxIndex", function () {
      return getMaxIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMinElem", function () {
      return getMinElem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "invertTransform", function () {
      return invertTransform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addLegends", function () {
      return addLegends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "binData", function () {
      return binData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgb2Hex", function () {
      return rgb2Hex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgb2hsi", function () {
      return rgb2hsi;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var Transform =
    /*#__PURE__*/
    function () {
      function Transform(totalWidth, totalHeight, margin) {
        _classCallCheck(this, Transform);

        this.totalWidth = totalWidth;
        this.totalHeight = totalHeight;
        this.height = this.totalHeight - margin.top - margin.bottom;
        this.width = this.totalWidth - margin.left - margin.right;
        this.left = margin.left;
        this.right = margin.right;
        this.bottom = margin.bottom;
        this.top = margin.top;
      }

      _createClass(Transform, [{
        key: "createSVG",
        value: function createSVG(svgRef) {
          return d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgRef.nativeElement).attr('width', this.totalWidth).attr('height', this.totalHeight);
        }
      }, {
        key: "createG",
        value: function createG(svgRef) {
          return this.createSVG(svgRef).append('g').attr('transform', translate(this.left, this.top));
        }
      }, {
        key: "appendG",
        value: function appendG(g) {
          return g.append('g').attr('transform', translate(this.left, this.top));
        }
      }, {
        key: "xLinear",
        value: function xLinear(maxValue) {
          var scale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, this.width]);
          return maxValue ? scale.domain([0, maxValue]) : scale;
        }
      }, {
        key: "yLinear",
        value: function yLinear(maxValue) {
          var scale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([this.height, 0]);
          return maxValue ? scale.domain([0, maxValue]) : scale;
        }
      }]);

      return Transform;
    }();

    function log10TickFormat(d) {
      var superscript = '⁰¹²³⁴⁵⁶⁷⁸⁹';
      var power = Math.round(Math.log10(d));
      return 10 + (power + '').split('').map(function (c) {
        return superscript[c];
      }).join('');
    }

    function translate(x, y) {
      return "translate(".concat(x, ", ").concat(y, ")");
    }

    function scale(x, y) {
      return "scale(".concat(x, ", ").concat(y, ")");
    }

    function transform(sx, sy, tx, ty) {
      return "scale(".concat(sx, ", ").concat(sy, ") translate(").concat(tx, "px, ").concat(ty, "px)");
    }

    function getMinIndex(arr, func) {
      if (arr.length === 0) {
        return -1;
      }

      var minRet = -1;
      var minValue = Number.POSITIVE_INFINITY;
      arr.forEach(function (el, i) {
        var comp = func(el, i);

        if (comp < minValue) {
          minValue = comp;
          minRet = i;
        }
      });
      return minRet;
    }

    function getMaxIndex(arr, func) {
      if (arr.length === 0) {
        return -1;
      }

      var maxRet = -1;
      var maxValue = Number.POSITIVE_INFINITY;
      arr.forEach(function (el, i) {
        var comp = func(el, i);

        if (comp > maxValue) {
          maxValue = comp;
          maxRet = i;
        }
      });
      return maxRet;
    }

    function getMinElem(arr, func) {
      if (arr.length === 0) {
        return null;
      }

      var minEl = arr[0];
      var minValue = Number.POSITIVE_INFINITY;
      arr.forEach(function (el, i) {
        var comp = func(el, i);

        if (comp < minValue) {
          minValue = comp;
          minEl = el;
        }
      });
      return minEl;
    }

    function invertTransform(s) {
      var re = /scale\((\d+[.]*\d*)[,]\ *(\d+[.]*\d*)\) translate\(([-]*\d+[.]*\d*)px[,]\ *([-]*\d+[.]*\d*)px\)/gi;
      var result = re.exec(s);

      if (!result || result.length !== 5) {
        return {
          sx: 1,
          sy: 1,
          tx: 0,
          ty: 0
        };
      } else {
        var _result$slice$map = result.slice(1).map(function (d) {
          return +d;
        }),
            _result$slice$map2 = _slicedToArray(_result$slice$map, 4),
            sx = _result$slice$map2[0],
            sy = _result$slice$map2[1],
            tx = _result$slice$map2[2],
            ty = _result$slice$map2[3];

        return {
          sx: sx,
          sy: sy,
          tx: tx,
          ty: ty
        };
      }
    }

    function addLegends(svg) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
      var legendData = arguments.length > 3 ? arguments[3] : undefined;
      var margin = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 15;
      var horizontal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var data = Object.values(legendData).slice();

      if (horizontal) {
        data = data.reverse();
      }

      var g = svg.append('g').selectAll('g').data(data).enter().append('g');
      g.append('circle').attr('r', 3).attr('cx', 2).attr('cy', 11).attr('fill', function (d) {
        return d.color;
      });
      g.append('text').attr('dx', 10).attr('dy', 14).style('font-size', '0.8em').text(function (d) {
        return d.attr.viewValue;
      });
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var elem = _step.value;

          if (aggCount == 0) {
            newElem = elem;
            aggCount += 1;
          } else if (aggCount < aggregateSize) {
            newElem = newElem.merge(elem);
            aggCount += 1;
          } else {
            newElem = newElem.merge(elem);
            aggCount += 1;
            binnedData.push(newElem);
            aggSizeData.push(aggCount);
            aggCount = 0;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (aggCount != 0) {
        binnedData.push(newElem);
        aggSizeData.push(aggCount);
      }

      binnedData.forEach(function (data, index) {
        return data[xKey] /= aggSizeData[index];
      });
      return binnedData;
    }

    function rgb2Hex(rgb) {
      var _rgb = _slicedToArray(rgb, 4),
          r = _rgb[0],
          g = _rgb[1],
          b = _rgb[2],
          _rgb$ = _rgb[3],
          a = _rgb$ === void 0 ? 255 : _rgb$;

      var toHex = function toHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0".concat(hex) : hex;
      };

      return "#".concat(toHex(r)).concat(toHex(g)).concat(toHex(b)).concat(toHex(a));
    }

    function rgb2hsi(rgb) {
      var _rgb2 = _slicedToArray(rgb, 4),
          r = _rgb2[0],
          g = _rgb2[1],
          b = _rgb2[2],
          _rgb2$ = _rgb2[3],
          _ = _rgb2$ === void 0 ? 255 : _rgb2$;

      r /= 255;
      g /= 255;
      b /= 255;
      var i = (r + g + b) / 3;
      var s = 0,
          h = 0;

      if (r === g && g === b) {
        s = h = 0;
      } else {
        var w = (r - g + r - b) / Math.sqrt((r - g) * (r - g) + (r - b) * (g - b)) / 2;
        h = Math.acos(w) * 180 / Math.PI;

        if (b > g) {
          h = 360 - h;
        }

        s = 1 - Math.min(r, g, b) / i;
      }

      return [h, s, i];
    }
    /***/

  },

  /***/
  "./src/app/edit.service.ts":
  /*!*********************************!*\
    !*** ./src/app/edit.service.ts ***!
    \*********************************/

  /*! exports provided: EditService */

  /***/
  function srcAppEditServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditService", function () {
      return EditService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _common_edit_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common/edit-data */
    "./src/app/common/edit-data.ts");
    /* harmony import */


    var _network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./network.service */
    "./src/app/network.service.ts");

    var EditService =
    /*#__PURE__*/
    function () {
      function EditService(network) {
        _classCallCheck(this, EditService);

        this.network = network;
        this.imageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.autoCompleteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
      }

      _createClass(EditService, [{
        key: "parseImage",
        value: function parseImage(image, path) {
          var _this21 = this;

          var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var init = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var reader = new FileReader();

          reader.onload = function (_) {
            var imgElem = new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["ImageElem"](path, image, reader.result, meta);

            _this21.imageSubject.next(imgElem);
          };

          reader.readAsDataURL(image);
        }
      }, {
        key: "removeImage",
        value: function removeImage() {
          this.imageSubject.next(null);
        }
      }, {
        key: "ignoreImage",
        value: function ignoreImage() {
          return this.network.ignoreImage(this.image);
        }
      }, {
        key: "updateAutoComplete",
        value: function updateAutoComplete(modelInfo, checked) {
          var map = this.autoCompleteSubject.getValue();
          map[modelInfo.key] = checked;
          this.autoCompleteSubject.next(map);
        }
      }, {
        key: "image",
        get: function get() {
          return this.imageSubject.getValue();
        }
      }]);

      return EditService;
    }();

    EditService.ctorParameters = function () {
      return [{
        type: _network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]
      }];
    };

    EditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]])], EditService);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/annotation-module.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/edit/annotation-module/annotation-module.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleAnnotationModuleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".validate-feedback {\n  color: #f44336;\n  font-size: 12px;\n}\n\n:host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcYW5ub3RhdGlvbi1tb2R1bGVcXGFubm90YXRpb24tbW9kdWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL2Fubm90YXRpb24tbW9kdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvYW5ub3RhdGlvbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGUtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIi52YWxpZGF0ZS1mZWVkYmFjayB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/annotation-module.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/edit/annotation-module/annotation-module.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AnnotationModuleComponent */

  /***/
  function srcAppEditAnnotationModuleAnnotationModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnotationModuleComponent", function () {
      return AnnotationModuleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_common_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/config */
    "./src/app/common/config.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var src_app_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var _common_feedback_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/feedback.service */
    "./src/app/edit/common/feedback.service.ts");
    /* harmony import */


    var _demo_demo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../demo/demo.service */
    "./src/app/edit/demo/demo.service.ts");
    /* harmony import */


    var _demo_quiz_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../demo/quiz.service */
    "./src/app/edit/demo/quiz.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var AnnotationModuleComponent =
    /*#__PURE__*/
    function () {
      function AnnotationModuleComponent(network, edit, fs, demo, quiz, L) {
        _classCallCheck(this, AnnotationModuleComponent);

        this.network = network;
        this.edit = edit;
        this.fs = fs;
        this.demo = demo;
        this.quiz = quiz;
        this.L = L;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currIndex = 0;
        this.submitReady = false;
        this.focusedFeedbackKey = '';
      }

      _createClass(AnnotationModuleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.resetSubmitReady();
          this.sub1 = this.event.subscribe(function (key) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this22, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var path;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(key === 'review')) {
                        _context.next = 15;
                        break;
                      }

                      path = this.edit.image.path;
                      _context.t0 = this.config.service;
                      _context.next = _context.t0 === 'normal' ? 5 : _context.t0 === 'demo' ? 9 : _context.t0 === 'quiz' ? 13 : 15;
                      break;

                    case 5:
                      _context.next = 7;
                      return this.network.getReview(path);

                    case 7:
                      this.review = _context.sent;
                      return _context.abrupt("break", 15);

                    case 9:
                      _context.next = 11;
                      return this.demo.getReview(path);

                    case 11:
                      this.review = _context.sent;
                      return _context.abrupt("break", 15);

                    case 13:
                      this.review = this.quiz.currReview;
                      return _context.abrupt("break", 15);

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
          this.sub2 = this.fs.resolveObservable.subscribe(function (feedback) {
            var findIndex = _this22.review.feedbacks.findIndex(function (d) {
              return d.annotationKey === feedback.annotationKey && d.taskKey === feedback.taskKey;
            });

            _this22.review.feedbacks.splice(findIndex, 1);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.mode) {
            this.resetSubmitReady();
          }
        }
      }, {
        key: "displayFeedback",
        value: function displayFeedback(key) {
          if (this.focusedFeedbackKey === key) {
            this.focusedFeedbackKey = '';
            this.fs.feedbackSubject.next(src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_6__["Feedback"].dummy());
            return;
          }

          this.currIndex = this.config.tasks.findIndex(function (d) {
            return d.key === key.split('.')[0];
          });
          this.stepper.selectedIndex = this.currIndex;
          this.fs.feedbackSubject.next(this.review.feedbacks.find(function (d) {
            return d.key === key;
          }));
          this.focusedFeedbackKey = key;
        }
      }, {
        key: "resolveOutdatedFeedback",
        value: function resolveOutdatedFeedback() {
          var _this23 = this;

          this.review.feedbacks.forEach(function (feedback) {
            if (feedback.annotationKey.startsWith('raw')) {
              _this23.fs.resolveTarget(feedback);
            }
          });
        }
      }, {
        key: "onSubmitReady",
        value: function onSubmitReady(ready) {
          var _this24 = this;

          setTimeout(function () {
            _this24.submitReady = ready;
          }, 0);
        }
      }, {
        key: "submit",
        value: function submit() {
          this.submitEmitter.emit();
          this.currIndex = 0;
          this.resetSubmitReady();

          if (this.focusedFeedbackKey !== '') {
            this.focusedFeedbackKey = '';
            this.fs.resolve();
          }
        }
      }, {
        key: "onStepChange",
        value: function onStepChange(change) {
          this.currIndex = change.selectedIndex;
        }
      }, {
        key: "resetSubmitReady",
        value: function resetSubmitReady() {
          if (this.config.tasks.length === 1 && this.config.tasks[0].submitReady) {
            this.submitReady = true;
          } else {
            this.submitReady = false;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub1) {
            this.sub1.unsubscribe();
          }

          if (this.sub2) {
            this.sub2.unsubscribe();
          }
        }
      }]);

      return AnnotationModuleComponent;
    }();

    AnnotationModuleComponent.ctorParameters = function () {
      return [{
        type: src_app_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"]
      }, {
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_7__["EditService"]
      }, {
        type: _common_feedback_service__WEBPACK_IMPORTED_MODULE_9__["FeedbackService"]
      }, {
        type: _demo_demo_service__WEBPACK_IMPORTED_MODULE_10__["DemoService"]
      }, {
        type: _demo_quiz_service__WEBPACK_IMPORTED_MODULE_11__["QuizService"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], AnnotationModuleComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_config__WEBPACK_IMPORTED_MODULE_4__["Config"])], AnnotationModuleComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AnnotationModuleComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], AnnotationModuleComponent.prototype, "spacePressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AnnotationModuleComponent.prototype, "svgS", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], AnnotationModuleComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AnnotationModuleComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AnnotationModuleComponent.prototype, "submitEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])], AnnotationModuleComponent.prototype, "stepper", void 0);
    AnnotationModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-annotation-module',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./annotation-module.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/annotation-module.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./annotation-module.component.scss */
      "./src/app/edit/annotation-module/annotation-module.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"], src_app_edit_service__WEBPACK_IMPORTED_MODULE_7__["EditService"], _common_feedback_service__WEBPACK_IMPORTED_MODULE_9__["FeedbackService"], _demo_demo_service__WEBPACK_IMPORTED_MODULE_10__["DemoService"], _demo_quiz_service__WEBPACK_IMPORTED_MODULE_11__["QuizService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__["LocaleService"]])], AnnotationModuleComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/annotation-util.ts":
  /*!***********************************************************!*\
    !*** ./src/app/edit/annotation-module/annotation-util.ts ***!
    \***********************************************************/

  /*! exports provided: NUM_REG, getCurrRadius, getCurrStrokeWidth, updateBoxStyleByFocus, updateBoxStyleByScroll, AnnotationBox, isNumberTexts, isNumberText, extractNumber, removeEventArea, createEventArea, removeTempBox, removeMergeLine, drawBoxMark, drawPointMark, addRectDragEvent, addMergeEvent, getImageData, drawBoxBySelectedPixel, regressBoxesByColor, regressArea, drawBoxByPoint, boxComparator, moveGuides */

  /***/
  function srcAppEditAnnotationModuleAnnotationUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_REG", function () {
      return NUM_REG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrRadius", function () {
      return getCurrRadius;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrStrokeWidth", function () {
      return getCurrStrokeWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateBoxStyleByFocus", function () {
      return updateBoxStyleByFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateBoxStyleByScroll", function () {
      return updateBoxStyleByScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnotationBox", function () {
      return AnnotationBox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNumberTexts", function () {
      return isNumberTexts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNumberText", function () {
      return isNumberText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extractNumber", function () {
      return extractNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeEventArea", function () {
      return removeEventArea;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createEventArea", function () {
      return createEventArea;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeTempBox", function () {
      return removeTempBox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeMergeLine", function () {
      return removeMergeLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawBoxMark", function () {
      return drawBoxMark;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawPointMark", function () {
      return drawPointMark;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addRectDragEvent", function () {
      return addRectDragEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addMergeEvent", function () {
      return addMergeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getImageData", function () {
      return getImageData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawBoxBySelectedPixel", function () {
      return drawBoxBySelectedPixel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "regressBoxesByColor", function () {
      return regressBoxesByColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "regressArea", function () {
      return regressArea;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawBoxByPoint", function () {
      return drawBoxByPoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "boxComparator", function () {
      return boxComparator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "moveGuides", function () {
      return moveGuides;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var src_app_d3_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/d3-utils */
    "./src/app/d3-utils.ts");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");

    var NUM_REG = /[-+]?[0-9]*\.?[0-9]+/g;

    function getCurrRadius(svgS) {
      var focused = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var svgEl = svgS.node();
      var scale = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_2__["invertTransform"])(svgEl.style.transform).sx;
      var base = focused ? 7 : 4;
      return "".concat(base / (1 + scale / 2), "px");
    }

    function getCurrStrokeWidth(svgS) {
      var focused = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var svgEl = svgS.node();
      var scale = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_2__["invertTransform"])(svgEl.style.transform).sx;
      var base = focused ? 6 : 3;
      return "".concat(base / (1 + scale / 2), "px");
    }

    function updateBoxStyleByFocus(boxIndex, svgS) {
      var strokeWidth = getCurrStrokeWidth(svgS);
      var focusedStrokeWidth = getCurrStrokeWidth(svgS, true);
      var r = getCurrRadius(svgS);
      var focusedR = getCurrRadius(svgS, true);
      svgS.selectAll(".mark:not(.handle)").classed('focused', false).style('stroke-width', strokeWidth);
      svgS.selectAll('.mark.handle').classed('focused', false).attr('r', r);
      svgS.selectAll(".text:not(.handle)").classed('focused', false).style('stroke-width', strokeWidth);
      svgS.selectAll('.text.handle').classed('focused', false).attr('r', r);
      svgS.select(".rect-".concat(boxIndex, ":not(.handle)")).classed('focused', true).style('stroke-width', focusedStrokeWidth);
      svgS.selectAll(".circle-".concat(boxIndex, ":not(.handle)")).classed('focused', true).style('stroke-width', focusedStrokeWidth);
      svgS.selectAll(".rect-".concat(boxIndex, ".handle")).classed('focused', true).attr('r', focusedR);
      svgS.selectAll(".circle-".concat(boxIndex, ".handle")).classed('focused', true).attr('r', focusedR);
    }

    function updateBoxStyleByScroll(svgS) {
      var strokeWidth = getCurrStrokeWidth(svgS);
      var focusedStrokeWidth = getCurrStrokeWidth(svgS, true);
      var r = getCurrRadius(svgS);
      var focusedR = getCurrRadius(svgS, true);
      svgS.selectAll(".mark:not(.handle)").style('stroke-width', strokeWidth);
      svgS.selectAll('.mark.handle').attr('r', r);
      svgS.selectAll(".text:not(.handle)").style('stroke-width', strokeWidth);
      svgS.selectAll('.text.handle').attr('r', r);
      svgS.select(".focused:not(.handle)").style('stroke-width', focusedStrokeWidth);
      svgS.selectAll(".focused.handle").attr('r', focusedR);
    }

    var AnnotationBox =
    /*#__PURE__*/
    function () {
      function AnnotationBox(key, formGroup) {
        _classCallCheck(this, AnnotationBox);

        this.key = key;
        this.points = {
          x0: formGroup.get('x0'),
          x1: formGroup.get('x1'),
          y0: formGroup.get('y0'),
          y1: formGroup.get('y1')
        };
        this.label = formGroup.get('label');
        this.text = formGroup.get('text');
      }

      _createClass(AnnotationBox, [{
        key: "pointValues",
        get: function get() {
          return [this.points['x0'].value, this.points['y0'].value, this.points['x1'].value, this.points['y1'].value];
        }
      }, {
        key: "width",
        get: function get() {
          return +this.points.x1.value - +this.points.x0.value;
        }
      }, {
        key: "height",
        get: function get() {
          return +this.points.y1.value - +this.points.y0.value;
        }
      }, {
        key: "center",
        get: function get() {
          return [(+this.points.x0.value + +this.points.x1.value) / 2, (+this.points.y0.value + +this.points.y1.value) / 2];
        }
      }, {
        key: "isText",
        get: function get() {
          return this.text !== null;
        }
      }, {
        key: "centerDist",
        get: function get() {
          var center = this.center;
          return center[0] * center[0] + center[1] * center[1];
        }
      }]);

      return AnnotationBox;
    }();

    function getRectHandles(x, y, width, height) {
      return [{
        cx: x,
        cy: y,
        pivotX: x + width,
        pivotY: y + height
      }, {
        cx: x + width,
        cy: y,
        pivotX: x,
        pivotY: y + height
      }, {
        cx: x,
        cy: y + height,
        pivotX: x + width,
        pivotY: y
      }, {
        cx: x + width,
        cy: y + height,
        pivotX: x,
        pivotY: y
      }];
    }

    function isNumberTexts(boxes) {
      var numNumbers = d3__WEBPACK_IMPORTED_MODULE_1__["sum"](boxes.map(function (d) {
        return d.text.value;
      }).map(function (d) {
        return isNumberText(d) ? 1 : 0;
      }));
      return numNumbers === boxes.length;
    }

    function isNumberText(v) {
      var result = v.match(NUM_REG);
      return result && result.length > 0;
    }

    function extractNumber(v) {
      var result = v.match(NUM_REG);
      return result ? +result[0] : 0;
    }

    function removeEventArea(comp) {
      comp.svgS.selectAll('g').remove();
    }

    function createEventArea(comp, mergeEvent) {
      var inputMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rect';
      var svg = comp.svgS;
      var key = comp.task.key;
      var pivotX = 0;
      var pivotY = 0;
      comp.g = svg.append('g').attr('class', key);
      var newBoxIndex = (comp.autoIncBoxIndex + 1).toString();
      var horLine = comp.g.append('line').attr('class', 'guide-horizontal').attr('x1', 0).attr('x2', 1000).attr('y1', 0).attr('y2', 0).attr('stroke-width', 1).attr('stroke', 'rgba(0, 0, 0, 0.3)').style('pointer-events', 'none');
      var verLine = comp.g.append('line').attr('class', 'guide-vertical').attr('y1', 0).attr('y2', 1000).attr('x1', 0).attr('x2', 0).attr('stroke-width', 1).attr('stroke', 'rgba(0, 0, 0, 0.3)').style('pointer-events', 'none');

      var initRect = function initRect() {
        newBoxIndex = (comp.autoIncBoxIndex + 1).toString();
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX;
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY;
        comp.g.append('rect').attr('class', "rect-".concat(newBoxIndex)).attr('x', x).attr('y', y).classed('text', comp.boxMode === 'text').classed('mark', comp.boxMode === 'mark').style('stroke-width', getCurrStrokeWidth(svg));
        pivotX = x;
        pivotY = y;
        comp.isDrawing = true;
        comp.writeForm(newBoxIndex, x, y, 0, 0);
      };

      var drawRect = function drawRect() {
        var eventX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX;
        var eventY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY;
        var x = eventX > pivotX ? pivotX : eventX;
        var y = eventY > pivotY ? pivotY : eventY;
        var width = Math.abs(eventX - pivotX);
        var height = Math.abs(eventY - pivotY);
        svg.select(".".concat(key)).select(".rect-".concat(newBoxIndex)).attr('x', x).attr('y', y).attr('width', width).attr('height', height);
        comp.writeForm(newBoxIndex, x, y, width, height);
      };

      var drawPoint = function drawPoint() {
        newBoxIndex = (comp.autoIncBoxIndex + 1).toString();
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX;
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY;
        var r = comp.pointRadius;
        var circleS = comp.g.append('circle').attr('class', "rect-".concat(newBoxIndex)).attr('cx', x).attr('cy', y).attr('r', r).classed('text', comp.boxMode === 'text').classed('mark', comp.boxMode === 'mark').style('stroke-width', getCurrStrokeWidth(svg));
        comp.writeForm(newBoxIndex, x - r, y - r, 2 * r, 2 * r);
        comp.updateFocus(newBoxIndex);
        addCircleDragEvent(comp, newBoxIndex, circleS);
      };

      var drawCircles = function drawCircles() {
        var g = svg.select(".".concat(key));
        var rectS = g.select(".rect-".concat(newBoxIndex));
        var x = +rectS.attr('x');
        var y = +rectS.attr('y');
        var width = +rectS.attr('width');
        var height = +rectS.attr('height');
        var handles = getRectHandles(x, y, width, height);
        var circleS = g.selectAll(".circle-".concat(newBoxIndex)).data(handles).enter().append('circle').attr('class', "circle-".concat(newBoxIndex, " handle")).classed('focused', comp.focusedBoxIndex === newBoxIndex).classed('text', comp.boxMode === 'text').classed('mark', comp.boxMode === 'mark').attr('cx', function (d) {
          return d.cx;
        }).attr('cy', function (d) {
          return d.cy;
        }).attr('r', getCurrRadius(svg));
        comp.updateFocus(newBoxIndex);
        addCircleEvent(comp, newBoxIndex, rectS, circleS);
        comp.addRectEvent(newBoxIndex, rectS, circleS);
        comp.isDrawing = false;
      };

      var updateLine = function updateLine() {
        comp.g.select('#merge-line').attr('x2', d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX).attr('y2', d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY).attr('stroke-width', 3).attr('stroke', 'rgb(51, 153, 102)').attr('stroke-opacity', 0.6);
      };

      svg.on('click', function () {
        if (comp.spacePressed || comp.stage !== 0) {
          return;
        }

        if (!comp.isDrawing && comp.index === comp.currIndex) {
          if (inputMode === 'point' && comp.boxMode === 'mark') {
            drawPoint();
            comp.autoIncBoxIndex = +newBoxIndex;
          } else {
            initRect();
          }
        } else if (comp.isDrawing) {
          drawCircles();
          comp.autoIncBoxIndex = +newBoxIndex;
        }
      }).on('mouseenter', function () {
        horLine.attr('visibility', 'visible');
        verLine.attr('visibility', 'visible');
      }).on('mousemove', function () {
        if (comp.isDrawing) {
          drawRect();
        }

        if (mergeEvent && comp.isMerging) {
          updateLine();
        }

        moveGuides(horLine, verLine, d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX, d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY);
      }).on('mouseleave', function () {
        horLine.attr('visibility', 'hidden');
        verLine.attr('visibility', 'hidden');
      });

      if (comp.boxes.length > 0) {
        comp.isDrawing = false;

        if (mergeEvent) {
          comp.isMerging = false;
        }

        comp.autoIncBoxIndex = comp.boxes.length;
        comp.boxes.forEach(function (box) {
          if (comp.task.inputType === 'point' && box.text === null) {
            drawPointMark(comp, box);
          } else {
            drawBoxMark(comp, box);
          }
        });
      }
    }

    function removeTempBox(comp) {
      var tempIndex = (comp.autoIncBoxIndex + 1).toString();
      comp.deleteBox(tempIndex);
      comp.isDrawing = false;
    }

    function removeMergeLine(comp) {
      comp.g.select('#merge-line').remove();
      comp.isMerging = false;
    }

    function drawBoxMark(comp, box) {
      var imgElem = comp.imgRef.nativeElement;

      var _box$pointValues = _slicedToArray(box.pointValues, 4),
          x0 = _box$pointValues[0],
          y0 = _box$pointValues[1],
          x1 = _box$pointValues[2],
          y1 = _box$pointValues[3];

      var boxIndex = box.key;
      var x = x0 * imgElem.width + 10;
      var y = y0 * imgElem.height + 10;
      var width = (x1 - x0) * imgElem.width;
      var height = (y1 - y0) * imgElem.height;
      var rectS = comp.g.append('rect').attr('class', "rect-".concat(boxIndex)).classed('focused', comp.focusedBoxIndex === boxIndex).attr('x', x).attr('y', y).attr('width', width).attr('height', height).classed('text', box.isText).classed('mark', !box.isText).style('stroke-width', getCurrStrokeWidth(comp.svgS));
      var handles = getRectHandles(x, y, width, height);
      var circleS = comp.g.selectAll(".circle-".concat(boxIndex)).data(handles).enter().append('circle').attr('class', "circle-".concat(boxIndex, " handle")).classed('focused', comp.focusedBoxIndex === boxIndex).classed('text', box.isText).classed('mark', !box.isText).attr('cx', function (d) {
        return d.cx;
      }).attr('cy', function (d) {
        return d.cy;
      }).attr('r', getCurrRadius(comp.svgS));
      comp.addRectEvent(boxIndex, rectS, circleS);
      addCircleEvent(comp, boxIndex, rectS, circleS);
    }

    function drawPointMark(comp, box) {
      var r = comp.pointRadius;
      var imgElem = comp.imgRef.nativeElement;

      var _box$pointValues2 = _slicedToArray(box.pointValues, 4),
          x0 = _box$pointValues2[0],
          y0 = _box$pointValues2[1],
          x1 = _box$pointValues2[2],
          y1 = _box$pointValues2[3];

      var boxIndex = box.key;
      var x = (x0 + x1) * imgElem.width / 2 + 10;
      var y = (y0 + y1) * imgElem.height / 2 + 10;
      var circleS = comp.g.append('circle').attr('class', "rect-".concat(boxIndex)).classed('focused', comp.focusedBoxIndex === boxIndex).attr('cx', x).attr('cy', y).attr('r', r).classed('text', box.isText).classed('mark', !box.isText).style('stroke-width', getCurrStrokeWidth(comp.svgS));
      addCircleDragEvent(comp, boxIndex, circleS);
    }

    function addRectDragEvent(comp, boxIndex, rectS, circleS) {
      var dragStartX = 0;
      var dragStartY = 0;
      var pivotX = 0;
      var pivotY = 0;
      var width = +rectS.attr('width');
      var height = +rectS.attr('height');
      var horLine = comp.g.select('.guide-horizontal');
      var verLine = comp.g.select('.guide-vertical');
      rectS.on('click', function () {
        if (comp.spacePressed) {
          return;
        }

        comp.updateFocus(boxIndex);
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
        return false;
      }).on('contextmenu', function () {
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].preventDefault();
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();

        if (comp.isMerging) {
          removeMergeLine(comp);
        }
      });
      rectS.call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().on('start', function () {
        if (comp.spacePressed || comp.stage !== 0) {
          return;
        }

        dragStartX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
        dragStartY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
        pivotX = +rectS.attr('x');
        pivotY = +rectS.attr('y');
        width = +rectS.attr('width');
        height = +rectS.attr('height');
        comp.updateFocus(boxIndex);
      }).on('drag', function () {
        if (comp.spacePressed || comp.stage !== 0) {
          return;
        }

        var eventX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
        var eventY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
        var moveX = eventX - dragStartX;
        var moveY = eventY - dragStartY;
        var x = pivotX + moveX;
        var y = pivotY + moveY;
        rectS.attr('x', x).attr('y', y);
        moveGuides(horLine, verLine, eventX, eventY);
        var points = getRectHandles(x, y, width, height);
        circleS.data(points).attr('cx', function (d) {
          return d.cx;
        }).attr('cy', function (d) {
          return d.cy;
        });
        comp.writeForm(boxIndex, x, y, width, height);
      }));
    }

    function addCircleEvent(comp, boxIndex, rectS, circleS) {
      var horLine = comp.g.select('.guide-horizontal');
      var verLine = comp.g.select('.guide-vertical');
      circleS.on('click', function () {
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
      });
      circleS.call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().on('start', function () {
        if (comp.spacePressed || comp.stage !== 0) {
          return;
        }

        comp.updateFocus(boxIndex);
      }).on('drag', function (d) {
        if (comp.spacePressed || comp.stage !== 0) {
          return;
        }

        var pivotX = d.pivotX;
        var pivotY = d.pivotY;
        var eventX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
        var eventY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
        var x = eventX > pivotX ? pivotX : eventX;
        var y = eventY > pivotY ? pivotY : eventY;
        var width = Math.abs(eventX - pivotX);
        var height = Math.abs(eventY - pivotY);
        moveGuides(horLine, verLine, eventX, eventY);
        rectS.attr('x', x).attr('y', y).attr('width', width).attr('height', height);
        var handles = getRectHandles(x, y, width, height);
        circleS.data(handles).attr('cx', function (handle) {
          return handle.cx;
        }).attr('cy', function (handle) {
          return handle.cy;
        });
        comp.writeForm(boxIndex, x, y, width, height);
      }));
    }

    function addCircleDragEvent(comp, boxIndex, circleS) {
      var horLine = comp.g.select('.guide-horizontal');
      var verLine = comp.g.select('.guide-vertical');
      var r = comp.pointRadius;
      circleS.on('click', function () {
        if (comp.spacePressed) {
          return;
        }

        comp.updateFocus(boxIndex);
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
        return false;
      });
      circleS.call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().on('start', function () {
        if (comp.spacePressed || comp.stage !== 0) {
          return;
        }

        comp.updateFocus(boxIndex);
      }).on('drag', function (d) {
        if (comp.spacePressed || comp.stage !== 0) {
          return;
        }

        var x = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
        moveGuides(horLine, verLine, x, y);
        circleS.attr('cx', x).attr('cy', y);
        comp.writeForm(boxIndex, x - r, y - r, 2 * r, 2 * r);
      }));
    }

    function addMergeEvent(comp, boxIndex, rectS) {
      var img = comp.imgRef.nativeElement;
      var imgWidth = img.width;
      var imgHeight = img.height;

      var initLine = function initLine() {
        var initX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX;
        var initY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY;
        comp.g.append('line').attr('id', 'merge-line').attr('x1', initX).attr('y1', initY).attr('x2', initX).attr('y2', initY).attr('stroke-width', 5).attr('stroke', 'gray').style('pointer-events', 'none');
      };

      var merge = function merge() {
        var line = comp.g.select('#merge-line');
        var x1 = +line.attr('x1');
        var x2 = +line.attr('x2');
        var y1 = +line.attr('y1');
        var y2 = +line.attr('y2');
        var points = d3__WEBPACK_IMPORTED_MODULE_1__["range"](0, 1.1, 0.04).map(function (t) {
          return {
            x: x1 + (x2 - x1) * t,
            y: y1 + (y2 - y1) * t
          };
        });
        var mergedBoxes = comp.boxes.filter(function (box) {
          return box.text !== null;
        }).filter(function (box) {
          var rx0 = box.points.x0.value * imgWidth + 10;
          var ry0 = box.points.y0.value * imgHeight + 10;
          var rx1 = box.points.x1.value * imgWidth + 10;
          var ry1 = box.points.y1.value * imgHeight + 10;
          return points.findIndex(function (p) {
            return p.x >= rx0 && p.x <= rx1 && p.y >= ry0 && p.y <= ry1;
          }) !== -1;
        });

        if (mergedBoxes.length === 0) {
          return;
        }

        var labelCounter = {};
        mergedBoxes.forEach(function (box) {
          var label = box.label.value;
          var count = labelCounter[label];

          if (count === undefined) {
            labelCounter[label] = 1;
          } else {
            labelCounter[label] += 1;
          }
        });
        var maxLabel = Object.entries(labelCounter).sort(function (a, b) {
          return b[1] - a[1];
        })[0][0];
        var xMin = d3__WEBPACK_IMPORTED_MODULE_1__["min"](mergedBoxes, function (d) {
          return d.points.x0.value;
        });
        var xMax = d3__WEBPACK_IMPORTED_MODULE_1__["max"](mergedBoxes, function (d) {
          return d.points.x1.value;
        });
        var yMin = d3__WEBPACK_IMPORTED_MODULE_1__["min"](mergedBoxes, function (d) {
          return d.points.y0.value;
        });
        var yMax = d3__WEBPACK_IMPORTED_MODULE_1__["max"](mergedBoxes, function (d) {
          return d.points.y1.value;
        });
        var horizontalBoxes = mergedBoxes.filter(function (d) {
          var _x0 = d.points.x0.value;
          var _x1 = d.points.x1.value;
          var _y0 = d.points.y0.value;
          var _y1 = d.points.y1.value;
          return 1.5 * (_x1 - _x0) > _y1 - _y0;
        });
        var alignHorizontal = horizontalBoxes.length > 0.5 * mergedBoxes.length;
        var lineTan = Math.atan2(y2 - y1, x2 - x1);
        var perpendicularMerge = alignHorizontal ? Math.abs(lineTan) > 1 : Math.abs(lineTan) <= 1;
        mergedBoxes = mergedBoxes.sort(function (a, b) {
          if (alignHorizontal) {
            return perpendicularMerge ? a.points.y0.value - b.points.y0.value : a.points.x0.value - b.points.x0.value;
          } else {
            return perpendicularMerge ? a.points.x0.value - b.points.x0.value : b.points.y0.value - a.points.y0.value;
          }
        });
        var mergedText = mergedBoxes.map(function (d) {
          return d.text.value;
        }).join(' ');
        mergedBoxes.forEach(function (d) {
          var deletedBoxIndex = d.key;

          if (comp.focusedBoxIndex === boxIndex) {
            comp.focusedBoxIndex = null;
          }

          comp.g.select(".rect-".concat(deletedBoxIndex)).remove();
          comp.g.selectAll(".circle-".concat(deletedBoxIndex)).remove();
          comp.task.deleteBox(comp.formGroup, deletedBoxIndex);
        });
        var newBoxIndex = (comp.autoIncBoxIndex + 1).toString();
        var raw = {
          key: newBoxIndex,
          x0: xMin,
          x1: xMax,
          y0: yMin,
          y1: yMax,
          label: maxLabel,
          text: mergedText
        };
        comp.autoIncBoxIndex += 1;
        comp.task.updateBox(comp.formGroup, raw);
        comp.updateBoxes();
        drawBoxMark(comp, comp.boxes.find(function (d) {
          return d.key === newBoxIndex;
        }));
        comp.updateFocus(newBoxIndex);
      };

      rectS.on('contextmenu', function () {
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].preventDefault();
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();

        if (comp.spacePressed || comp.stage !== 0) {
          return;
        }

        if (!comp.isMerging && comp.index === comp.currIndex) {
          initLine();
        } else if (comp.isMerging) {
          merge();
          comp.g.select('#merge-line').remove();
        }

        comp.isMerging = !comp.isMerging;
      });
    }

    function getImageData(imgElem) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var width = imgElem.width,
          height = imgElem.height;
      canvas.height = height;
      canvas.width = width;
      context.drawImage(imgElem, 0, 0, width, height);
      return Array.from(context.getImageData(0, 0, width, height).data);
    }

    function drawBoxBySelectedPixel(comp) {
      d3__WEBPACK_IMPORTED_MODULE_1__["event"].preventDefault();
      var container = comp.svgS;

      var _d3__WEBPACK_IMPORTED = d3__WEBPACK_IMPORTED_MODULE_1__["mouse"](container.node()).map(function (d) {
        return Math.floor(d - 10);
      }),
          _d3__WEBPACK_IMPORTED2 = _slicedToArray(_d3__WEBPACK_IMPORTED, 2),
          x = _d3__WEBPACK_IMPORTED2[0],
          y = _d3__WEBPACK_IMPORTED2[1];

      var imgElem = comp.imgRef.nativeElement;
      var width = imgElem.width,
          height = imgElem.height;
      var imgData = getImageData(imgElem);
      drawBoxByPoint(comp, imgData, width, height, x, y);
    }

    function regressBoxesByColor(comp) {
      var imgElem = comp.imgRef.nativeElement;
      var width = imgElem.width,
          height = imgElem.height;
      var marks = comp.boxes.filter(function (box) {
        return box.text === null;
      });
      var imgData = getImageData(imgElem);
      var markCenters = marks.map(function (mark) {
        return [Math.round(mark.center[0] * width), Math.round(mark.center[1] * height)];
      });
      marks.forEach(function (mark) {
        comp.removeBox(mark.key);
      });
      comp.updateBoxes();
      markCenters.forEach(function (center) {
        var _center = _slicedToArray(center, 2),
            x = _center[0],
            y = _center[1];

        drawBoxByPoint(comp, imgData, width, height, x, y);
      });
    }

    function regressArea(imgData, width, height, x, y) {
      var color = function color(p) {
        var _p = _slicedToArray(p, 2),
            px = _p[0],
            py = _p[1];

        var start = (py * width + px) * 4;
        var rgb = imgData.slice(start, start + 4);
        var hsi = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_2__["rgb2hsi"])(rgb).slice(0, 3);
        var result = {
          type: 'rgb',
          r: rgb[0],
          g: rgb[1],
          b: rgb[2]
        };

        if (hsi[0] > 2) {
          result.type = 'hsi';
          return Object.assign({}, result, {
            h: hsi[0],
            s: hsi[1],
            i: hsi[2]
          });
        } else {
          return result;
        }
      };

      var point = function point(index) {
        return [index % width, Math.floor(index / width)];
      };

      var isSameColor = function isSameColor(a, b) {
        var sameRGB = Math.abs(a.r - b.r) < 10 && Math.abs(a.g - b.g) < 10 && Math.abs(a.b - b.b) < 10;

        if (a.type === 'hsi' && b.type === 'hsi') {
          return Math.abs(a.h - b.h) < 5 && Math.abs(a.s - b.s) < 0.15 && sameRGB;
        } else {
          return sameRGB;
        }
      };

      var startColor = color([x, y]);
      var startIndex = y * width + x;
      var marks = new Array(width * height).fill(false);
      var queue = [];
      var points = [];
      queue.push(startIndex);
      marks[startIndex] = true;
      points.push({
        x: x,
        y: y
      });
      var directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];

      var _loop = function _loop() {
        var currIndex = queue[0];
        queue.shift();

        var _point = point(currIndex),
            _point2 = _slicedToArray(_point, 2),
            px = _point2[0],
            py = _point2[1];

        directions.forEach(function (dir) {
          var nextPoint = [px + dir[0], py + dir[1]];
          var npx = nextPoint[0],
              npy = nextPoint[1];
          var nextIndex = npy * width + npx;

          if (npx < 0 || npx >= width || npy < 0 || npy >= height) {
            return;
          }

          var notMarked = !marks[nextIndex];

          if (notMarked && isSameColor(startColor, color([npx, npy]))) {
            queue.push(nextIndex);
            marks[nextIndex] = true;
            points.push({
              x: npx,
              y: npy
            });
          }
        });
      };

      while (queue.length > 0) {
        _loop();
      }

      return points;
    }

    function drawBoxByPoint(comp, imgData, width, height, x, y) {
      var points = regressArea(imgData, width, height, x, y);
      var x0 = Math.max(0, d3__WEBPACK_IMPORTED_MODULE_1__["min"](points, function (d) {
        return d.x;
      }) - 1) + 10;
      var y0 = Math.max(0, d3__WEBPACK_IMPORTED_MODULE_1__["min"](points, function (d) {
        return d.y;
      }) - 1) + 10;
      var x1 = Math.min(d3__WEBPACK_IMPORTED_MODULE_1__["max"](points, function (d) {
        return d.x;
      }) + 1, width) + 10;
      var y1 = Math.min(d3__WEBPACK_IMPORTED_MODULE_1__["max"](points, function (d) {
        return d.y;
      }) + 1, height) + 10;

      if ((y1 - y0) * (x1 - x0) > width * height * 0.96) {
        return;
      }

      var boxIndex = (comp.autoIncBoxIndex + 1).toString();
      comp.autoIncBoxIndex += 1;
      comp.writeForm(boxIndex, x0, y0, x1 - x0, y1 - y0);
      var box = new AnnotationBox(boxIndex, comp.box(boxIndex));
      drawBoxMark(comp, box);
      comp.updateFocus(boxIndex);
    }

    function boxComparator(a, b) {
      if (a.isText && b.isText) {
        var aLabel = a.label.value;
        var bLabel = b.label.value;
        var comp = src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["LABEL_PRIORITY"][aLabel] - src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["LABEL_PRIORITY"][bLabel];

        if (comp === 0) {
          if (aLabel === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_X_AXIS_LABEL"]) {
            return a.center[0] - b.center[0];
          } else {
            return a.center[1] - b.center[1];
          }
        }

        return comp;
      } else if (a.isText) {
        return -1;
      } else if (b.isText) {
        return 1;
      } else {
        return 0;
      }
    }

    function moveGuides(horLine, verLine, x, y) {
      horLine.attr('y1', y).attr('y2', y);
      verLine.attr('x1', x).attr('x2', x);
    }
    /***/

  },

  /***/
  "./src/app/edit/annotation-module/bounding-box/bounding-box.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/edit/annotation-module/bounding-box/bounding-box.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleBoundingBoxBoundingBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".w-20 {\n  width: 20% !important;\n}\n\n.w-15 {\n  width: 15% !important;\n}\n\n.focused {\n  background-color: rgba(51, 153, 102, 0.4);\n}\n\n.mat-select {\n  padding-left: 5px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #aaa;\n}\n\n.table {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9ib3VuZGluZy1ib3gvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXGFubm90YXRpb24tbW9kdWxlXFxib3VuZGluZy1ib3hcXGJvdW5kaW5nLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9ib3VuZGluZy1ib3gvYm91bmRpbmctYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9ib3VuZGluZy1ib3gvYm91bmRpbmctYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctMjAge1xyXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udy0xNSB7XHJcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjQpO1xyXG59XHJcblxyXG4ubWF0LXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbiIsIi53LTIwIHtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4udy0xNSB7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbn1cblxuLmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC40KTtcbn1cblxuLm1hdC1zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbn1cblxuLnRhYmxlIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/bounding-box/bounding-box.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/edit/annotation-module/bounding-box/bounding-box.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: BoundingBoxComponent */

  /***/
  function srcAppEditAnnotationModuleBoundingBoxBoundingBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoundingBoxComponent", function () {
      return BoundingBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var _annotation_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../annotation-util */
    "./src/app/edit/annotation-module/annotation-util.ts");

    var BoundingBoxComponent =
    /*#__PURE__*/
    function () {
      function BoundingBoxComponent(edit, fb) {
        _classCallCheck(this, BoundingBoxComponent);

        this.edit = edit;
        this.fb = fb;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusedBoxIndex = null;
        this.autoIncBoxIndex = 0;
        this.boxes = [];
        this.isDrawing = false;
      }

      _createClass(BoundingBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.event.subscribe(function (key) {
            _this25.isDrawing = false;

            if (key === 'predict' && _this25.edit.autoCompleteSubject.getValue()[_this25.task.key]) {
              _this25.task.registerControl(_this25.formGroup, _this25.fb);

              _this25.task.applyPrediction(_this25.formGroup);

              _this25.updateBoxes();

              if (_this25.currIndex === _this25.index) {
                _this25.createEventArea();
              }
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.currIndex || changes.formGroup) {
            if (this.currIndex === this.index) {
              this.createEventArea();
              this.autoIncBoxIndex = d3__WEBPACK_IMPORTED_MODULE_4__["max"](this.boxes.map(function (box) {
                return +box.key;
              })) || 0;
            } else {
              Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeEventArea"])(this);
            }
          }
        }
      }, {
        key: "onKey",
        value: function onKey(event) {
          if (document.activeElement.tagName === 'INPUT') {
            return;
          }

          if (event.key === 'Escape' && this.isDrawing) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeTempBox"])(this);
          }

          if ((event.key === 'd' || event.key === 'Delete') && this.focusedBoxIndex) {
            this.deleteBox(this.focusedBoxIndex);
          }
        }
      }, {
        key: "deleteBox",
        value: function deleteBox(boxIndex) {
          this.g.select(".rect-".concat(boxIndex)).remove();
          this.g.selectAll(".circle-".concat(boxIndex)).remove();
          this.task.deleteBox(this.formGroup, boxIndex);

          if (boxIndex === this.focusedBoxIndex) {
            this.focusedBoxIndex = null;
          }

          this.updateBoxes();
        }
      }, {
        key: "createEventArea",
        value: function createEventArea() {
          var _this26 = this;

          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeEventArea"])(this);
          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["createEventArea"])(this, false);
          this.svgS.on('contextmenu', function () {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["drawBoxBySelectedPixel"])(_this26);
          });
        }
      }, {
        key: "writeForm",
        value: function writeForm(boxIndex, x, y, width, height) {
          var imgElem = this.imgRef.nativeElement;

          var clamp = function clamp(value, min, max) {
            return Math.min(max, Math.max(min, value));
          };

          var raw = {
            key: boxIndex,
            x0: clamp(x - 10, 0, imgElem.width) / imgElem.width,
            y0: clamp(y - 10, 0, imgElem.height) / imgElem.height,
            x1: clamp(x + width - 10, 0, imgElem.width) / imgElem.width,
            y1: clamp(y + height - 10, 0, imgElem.height) / imgElem.height
          };
          var addNewBox = !this.formGroup.get(this.task.key).get(raw.key);
          this.task.updateBox(this.formGroup, raw);

          if (addNewBox) {
            this.updateBoxes();
          }
        }
      }, {
        key: "addRectEvent",
        value: function addRectEvent(boxIndex, rectS, circleS) {
          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["addRectDragEvent"])(this, boxIndex, rectS, circleS);
        }
      }, {
        key: "updateFocus",
        value: function updateFocus(boxIndex) {
          this.g.selectAll('rect').classed('focused', false);
          this.g.selectAll('circle').classed('focused', false);
          this.g.select(".rect-".concat(boxIndex)).classed('focused', true);
          this.focusedBoxIndex = boxIndex;
        }
      }, {
        key: "updateBoxes",
        value: function updateBoxes() {
          var formGroup = this.formGroup.get(this.task.key);
          this.boxes = Object.entries(formGroup.controls).map(function (entry) {
            var _entry = _slicedToArray(entry, 2),
                key = _entry[0],
                value = _entry[1];

            return new _annotation_util__WEBPACK_IMPORTED_MODULE_7__["AnnotationBox"](key, value);
          });
        }
      }, {
        key: "box",
        value: function box(boxIndex) {
          return this.formGroup.get(this.task.key).get(boxIndex);
        }
      }, {
        key: "removeBox",
        value: function removeBox(boxIndex) {
          this.g.select(".rect-".concat(boxIndex)).remove();
          this.g.selectAll(".circle-".concat(boxIndex)).remove();
          this.task.deleteBox(this.formGroup, boxIndex);
          this.focusedBoxIndex = null;
        }
      }]);

      return BoundingBoxComponent;
    }();

    BoundingBoxComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], BoundingBoxComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["BoundingBox"])], BoundingBoxComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], BoundingBoxComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BoundingBoxComponent.prototype, "svgS", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], BoundingBoxComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], BoundingBoxComponent.prototype, "currIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], BoundingBoxComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], BoundingBoxComponent.prototype, "spacePressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BoundingBoxComponent.prototype, "submitEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], BoundingBoxComponent.prototype, "onKey", null);
    BoundingBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bounding-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bounding-box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/bounding-box/bounding-box.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bounding-box.component.scss */
      "./src/app/edit/annotation-module/bounding-box/bounding-box.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../edit-module.scss */
      "./src/app/edit/edit-module.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], BoundingBoxComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/classification/classification.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/classification/classification.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleClassificationClassificationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvY2xhc3NpZmljYXRpb24vY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/classification/classification.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/edit/annotation-module/classification/classification.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ClassificationComponent */

  /***/
  function srcAppEditAnnotationModuleClassificationClassificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassificationComponent", function () {
      return ClassificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _common_feedback_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../common/feedback.service */
    "./src/app/edit/common/feedback.service.ts");

    var ClassificationComponent =
    /*#__PURE__*/
    function () {
      function ClassificationComponent(edit, fs) {
        _classCallCheck(this, ClassificationComponent);

        this.edit = edit;
        this.fs = fs;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ClassificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.event.subscribe(function (key) {
            if (key === 'predict' && _this27.edit.autoCompleteSubject.getValue()[_this27.task.key]) {
              _this27.task.applyPrediction(_this27.formGroup);
            }
          });
          this.fs.feedbackObservable.subscribe(function (feedback) {
            if (feedback.taskKey === _this27.task.key) {
              var el = _this27.radioGroupRef.nativeElement;

              var _el$getBoundingClient = el.getBoundingClientRect(),
                  left = _el$getBoundingClient.left,
                  top = _el$getBoundingClient.top;

              _this27.fs.showFeedback(left, top, feedback);
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.currIndex && !changes.currIndex.isFirstChange() && this.index > 0 && changes.currIndex.currentValue === this.index) {
            var annotationLength = Object.keys(this.formGroup.value).length;

            if (annotationLength - 1 === this.index) {
              this.submitEmitter.emit(true);
            }
          }
        }
      }, {
        key: "onChange",
        value: function onChange(change) {
          this.formGroup.get(this.task.key).setValue(change.value);

          if (this.index < this.stepper.steps.length - 1) {
            this.stepper.next();
          }
        }
      }]);

      return ClassificationComponent;
    }();

    ClassificationComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]
      }, {
        type: _common_feedback_service__WEBPACK_IMPORTED_MODULE_7__["FeedbackService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"])], ClassificationComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepper"])], ClassificationComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], ClassificationComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Classification"])], ClassificationComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], ClassificationComponent.prototype, "currIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])], ClassificationComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], ClassificationComponent.prototype, "spacePressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ClassificationComponent.prototype, "submitEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"])], ClassificationComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radioGroup', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ClassificationComponent.prototype, "radioGroupRef", void 0);
    ClassificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-classification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./classification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/classification/classification.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./classification.component.scss */
      "./src/app/edit/annotation-module/classification/classification.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../edit-module.scss */
      "./src/app/edit/edit-module.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"], _common_feedback_service__WEBPACK_IMPORTED_MODULE_7__["FeedbackService"]])], ClassificationComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/edit/annotation-module/index.ts ***!
    \*************************************************/

  /*! exports provided: BoundingBoxComponent, ClassificationComponent, RegressionComponent, TextComponent, AnnotationModuleComponent, AxisSpecComponent, CanvasPatchComponent, LegendSpecComponent, ColumnAdditionDialogComponent, RawTableComponent, OverallComponent */

  /***/
  function srcAppEditAnnotationModuleIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _bounding_box_bounding_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bounding-box/bounding-box.component */
    "./src/app/edit/annotation-module/bounding-box/bounding-box.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BoundingBoxComponent", function () {
      return _bounding_box_bounding_box_component__WEBPACK_IMPORTED_MODULE_1__["BoundingBoxComponent"];
    });
    /* harmony import */


    var _classification_classification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./classification/classification.component */
    "./src/app/edit/annotation-module/classification/classification.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClassificationComponent", function () {
      return _classification_classification_component__WEBPACK_IMPORTED_MODULE_2__["ClassificationComponent"];
    });
    /* harmony import */


    var _overall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overall */
    "./src/app/edit/annotation-module/overall/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AxisSpecComponent", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_3__["AxisSpecComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CanvasPatchComponent", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_3__["CanvasPatchComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LegendSpecComponent", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_3__["LegendSpecComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnAdditionDialogComponent", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_3__["ColumnAdditionDialogComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RawTableComponent", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_3__["RawTableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OverallComponent", function () {
      return _overall__WEBPACK_IMPORTED_MODULE_3__["OverallComponent"];
    });
    /* harmony import */


    var _regression_regression_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./regression/regression.component */
    "./src/app/edit/annotation-module/regression/regression.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegressionComponent", function () {
      return _regression_regression_component__WEBPACK_IMPORTED_MODULE_4__["RegressionComponent"];
    });
    /* harmony import */


    var _text_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./text/text.component */
    "./src/app/edit/annotation-module/text/text.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TextComponent", function () {
      return _text_text_component__WEBPACK_IMPORTED_MODULE_5__["TextComponent"];
    });
    /* harmony import */


    var _annotation_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./annotation-module.component */
    "./src/app/edit/annotation-module/annotation-module.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AnnotationModuleComponent", function () {
      return _annotation_module_component__WEBPACK_IMPORTED_MODULE_6__["AnnotationModuleComponent"];
    });
    /***/

  },

  /***/
  "./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleOverallAxisSpecAxisSpecComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  color: #212529;\n}\n\n.key {\n  color: #777;\n  min-width: 100px;\n  margin-right: 0.5rem;\n  border-right: 1px solid #dee2e6;\n  padding: 0rem 0.5rem !important;\n}\n\n.readonly {\n  cursor: not-allowed;\n}\n\n.readonly .readonly-block {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL2F4aXMtc3BlYy9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcYW5ub3RhdGlvbi1tb2R1bGVcXG92ZXJhbGxcXGF4aXMtc3BlY1xcYXhpcy1zcGVjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvYXhpcy1zcGVjL2F4aXMtc3BlYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURBSTtFQUNJLG9CQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvYXhpcy1zcGVjL2F4aXMtc3BlYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLmtleSB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVhZG9ubHkge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIC5yZWFkb25seS1ibG9jayB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiZGl2IHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi5rZXkge1xuICBjb2xvcjogIzc3NztcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDByZW0gMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yZWFkb25seSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ucmVhZG9ubHkgLnJlYWRvbmx5LWJsb2NrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AxisSpecComponent */

  /***/
  function srcAppEditAnnotationModuleOverallAxisSpecAxisSpecComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AxisSpecComponent", function () {
      return AxisSpecComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _annotation_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../annotation-util */
    "./src/app/edit/annotation-module/annotation-util.ts");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/edit/common/feedback.service */
    "./src/app/edit/common/feedback.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var AxisSpecComponent =
    /*#__PURE__*/
    function () {
      function AxisSpecComponent(fs, fb, _L) {
        _classCallCheck(this, AxisSpecComponent);

        this.fs = fs;
        this.fb = fb;
        this.texts = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasMarkLabels = false;
        this.focusedFeedbackKey = '';
        this.L = _L.axisSpec;
      }

      _createClass(AxisSpecComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.sub = this.fs.feedbackObservable.subscribe(function (feedback) {
            _this28.focusedFeedbackKey = '';
            _this28.focusedFeedback = null;

            if (feedback.taskKey !== _this28.task.key) {
              return;
            }

            var splited = feedback.annotationKey.split('.');

            if (splited[0] !== 'spec' || splited[1] !== 'axis' || +splited[2] !== _this28.index) {
              return;
            }

            _this28.focusedFeedbackKey = splited[3];
            _this28.focusedFeedback = feedback;

            if (_this28.focusedElemWithKey('unit') && _this28.group.get('type').value !== 'quantitative') {
              _this28.fs.resolve();
            }

            if (_this28.focusedElemWithKey('markLabels') && !_this28.group.get('labeled').value) {
              _this28.fs.resolve();
            }

            setTimeout(function () {
              _this28.scrollEvent();
            }, 0);
          });
          this.hasMarkLabels = this.texts.filter(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"];
          }).length > 0;
          this.mapMarkLabelToAxis();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.refMap = {
            'title': this.titleRef,
            'dir': this.dirRef,
            'type': this.typeRef,
            'unit': this.unitRef,
            'labels': this.labelsRef,
            'markLabels': this.markLabelsRef
          };
        }
      }, {
        key: "onValueTypeChange",
        value: function onValueTypeChange(change) {
          if (change.value === 'quantitative') {
            this.group.get('unit').setValue('integer');
            this.obtainValuePerPixel();
          } else {
            this.group.get('unit').setValue('');
          }

          this.mapMarkLabelToAxis();
        }
      }, {
        key: "scrollEvent",
        value: function scrollEvent() {
          var ref = this.refMap[this.focusedFeedbackKey];

          if (!ref) {
            return;
          }

          var el = ref.nativeElement;
          var top = el.getBoundingClientRect().top;
          this.scroll.emit(top);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "focusedElemWithKey",
        value: function focusedElemWithKey(key) {
          return !!this.focusedFeedback && this.focusedFeedbackKey === key;
        }
      }, {
        key: "obtainValuePerPixel",
        value: function obtainValuePerPixel() {
          var dir = this.group.get('dir').value;
          var _this$imgRef$nativeEl = this.imgRef.nativeElement,
              width = _this$imgRef$nativeEl.width,
              height = _this$imgRef$nativeEl.height;
          var axis = dir === 'x' ? this.texts.filter(function (text) {
            return text.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_LABEL"];
          }) : this.texts.filter(function (text) {
            return text.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_LABEL"];
          });
          var axisValues = axis.map(function (d) {
            return {
              value: +d.text.value.match(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["NUM_REG"])[0],
              center: d.center
            };
          }).sort(function (a, b) {
            return a.value - b.value;
          });
          var valuesPerPixel = [];

          for (var i = 0; i < axisValues.length - 1; i++) {
            var curr = axisValues[i];
            var next = axisValues[i + 1];
            var interval = Math.abs(dir === 'x' ? (curr.center[0] - next.center[0]) * width : (curr.center[1] - next.center[1]) * height);
            valuesPerPixel.push((+next.value - +curr.value) / interval);
          }

          var valuePerPixel = +d3__WEBPACK_IMPORTED_MODULE_7__["mean"](valuesPerPixel);
          this.group.get('valuePerPixel').setValue(valuePerPixel);
        }
      }, {
        key: "mapMarkLabelToAxis",
        value: function mapMarkLabelToAxis() {
          var _this29 = this;

          var markLabelBoxes = this.texts.filter(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"];
          });
          var group = this.group;
          var groupType = group.get('type').value;
          var markLabelsForm = group.get('markLabels');

          while (markLabelsForm.length > 0) {
            markLabelsForm.removeAt(0);
          }

          var filterInsertLabels = function filterInsertLabels(s) {
            if (groupType === 'quantitative') {
              var values = group.get('labels').controls.map(function (d) {
                return +d.value.match(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["NUM_REG"])[0];
              });
              var extent = d3__WEBPACK_IMPORTED_MODULE_7__["extent"](values);
              var value = +s.match(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["NUM_REG"])[0];
              return Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["isNumberText"])(s) && value >= extent[0] && value <= extent[1];
            } else {
              var axisLabels = group.get('labels').value;
              return axisLabels.includes(s);
            }
          };

          var insertedMarkLabels = markLabelBoxes.filter(function (box) {
            return filterInsertLabels(box.text.value);
          });
          insertedMarkLabels.filter(function (box) {
            markLabelsForm.push(_this29.fb.control(box.text.value));
          });
          group.get('labeled').setValue(insertedMarkLabels.length > 0);
        }
      }]);

      return AxisSpecComponent;
    }();

    AxisSpecComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], AxisSpecComponent.prototype, "auto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], AxisSpecComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], AxisSpecComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AxisSpecComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["Overall"])], AxisSpecComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], AxisSpecComponent.prototype, "texts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AxisSpecComponent.prototype, "titleRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dir', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AxisSpecComponent.prototype, "dirRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('type', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AxisSpecComponent.prototype, "typeRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unit', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AxisSpecComponent.prototype, "unitRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labels', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AxisSpecComponent.prototype, "labelsRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('markLabels', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AxisSpecComponent.prototype, "markLabelsRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AxisSpecComponent.prototype, "wrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AxisSpecComponent.prototype, "scroll", void 0);
    AxisSpecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-axis-spec',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./axis-spec.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./axis-spec.component.scss */
      "./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../overall.component.scss */
      "./src/app/edit/annotation-module/overall/overall.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])], AxisSpecComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleOverallCanvasPatchCanvasPatchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9jYW52YXMtcGF0Y2gvY2FudmFzLXBhdGNoLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CanvasPatchComponent */

  /***/
  function srcAppEditAnnotationModuleOverallCanvasPatchCanvasPatchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasPatchComponent", function () {
      return CanvasPatchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CanvasPatchComponent =
    /*#__PURE__*/
    function () {
      function CanvasPatchComponent() {
        _classCallCheck(this, CanvasPatchComponent);
      }

      _createClass(CanvasPatchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.data && changes.data.currentValue) {
            var data = changes.data.currentValue;

            if (data.length === 0) {
              return;
            }

            var el = this.canvas.nativeElement;
            var ctx = el.getContext('2d');
            var imgData = ctx.createImageData(15, 15);
            data.forEach(function (pixel, i) {
              for (var j = 0; j < 3; j++) {
                imgData.data[i * 4 + j] = pixel[j];
              }

              imgData.data[i * 4 + 3] = 255;
            });
            ctx.putImageData(imgData, 0, 0);
          }
        }
      }]);

      return CanvasPatchComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], CanvasPatchComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CanvasPatchComponent.prototype, "canvas", void 0);
    CanvasPatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-canvas-patch',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./canvas-patch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./canvas-patch.component.scss */
      "./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CanvasPatchComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleOverallCustomSpecCustomSpecComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9jdXN0b20tc3BlYy9jdXN0b20tc3BlYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CustomSpecComponent */

  /***/
  function srcAppEditAnnotationModuleOverallCustomSpecCustomSpecComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomSpecComponent", function () {
      return CustomSpecComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _annotation_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../annotation-util */
    "./src/app/edit/annotation-module/annotation-util.ts");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/edit/common/feedback.service */
    "./src/app/edit/common/feedback.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var CustomSpecComponent =
    /*#__PURE__*/
    function () {
      function CustomSpecComponent(fs, _L) {
        _classCallCheck(this, CustomSpecComponent);

        this.fs = fs;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.markLabels = [];
        this.focusedFeedbackKey = '';
        this.L = _L.customSpec;
      }

      _createClass(CustomSpecComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.sub = this.fs.feedbackObservable.subscribe(function (feedback) {
            _this30.focusedFeedbackKey = '';
            _this30.focusedFeedback = null;

            if (feedback.taskKey !== _this30.task.key) {
              return;
            }

            var splited = feedback.annotationKey.split('.');

            if (splited[0] !== 'spec' || splited[1] !== 'custom' || +splited[2] !== _this30.index) {
              return;
            }

            _this30.focusedFeedbackKey = splited[3];
            _this30.focusedFeedback = feedback;

            if (_this30.focusedElemWithKey('unit') && _this30.group.get('type').value !== 'quantitative') {
              _this30.fs.resolve();
            }

            if (_this30.focusedElemWithKey('markLabels') && !_this30.group.get('labeled').value) {
              _this30.fs.resolve();
            }

            setTimeout(function () {
              _this30.scrollEvent();
            }, 0);
          });
          this.markLabels = this.texts.filter(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"];
          });
          var labelForms = this.group.get('markLabels');

          if (labelForms.length === 0) {
            this.resetMarkLabels();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.refMap = {
            title: this.titleRef,
            type: this.typeRef,
            unit: this.unitRef,
            markLabels: this.markLabelsRef
          };
        }
      }, {
        key: "close",
        value: function close() {
          this.closed.emit(this.index);
        }
      }, {
        key: "checkLabeledByMarks",
        value: function checkLabeledByMarks(_) {
          this.resetMarkLabels();
        }
      }, {
        key: "resetMarkLabels",
        value: function resetMarkLabels() {
          var _this31 = this;

          var labelForms = this.group.get('markLabels');

          while (labelForms.length) {
            labelForms.removeAt(0);
          }

          if (!this.labeledByMarks) {
            return;
          }

          var filterList = [];

          for (var i = 0; i < this.index; i++) {
            filterList = filterList.concat(this.group.parent.at(i).get('markLabels').value);
          }

          var filteredMarkLabels = this.markLabels.filter(function (markLabel) {
            return filterList.findIndex(function (el) {
              return el === markLabel.text.value;
            }) === -1;
          });
          filteredMarkLabels.forEach(function (label) {
            var isNumber = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["isNumberText"])(label.text.value);
            var bothNominal = _this31.valueType === 'nominal' && !isNumber;
            var bothQuan = _this31.valueType === 'quantitative' && isNumber;
            var alreadyContains = labelForms.value.includes(label.text.value);

            if ((bothNominal || bothQuan) && !alreadyContains) {
              labelForms.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](label.text.value));
            }
          });
        }
      }, {
        key: "onValueTypeChange",
        value: function onValueTypeChange(change) {
          if (change.value === 'quantitative') {
            this.group.get('unit').setValue('integer');
          } else {
            this.group.get('unit').setValue('');
          }

          this.resetMarkLabels();
        }
      }, {
        key: "scrollEvent",
        value: function scrollEvent() {
          var ref = this.refMap[this.focusedFeedbackKey];

          if (!ref) {
            return;
          }

          var el = ref.nativeElement;
          var top = el.getBoundingClientRect().top;
          this.scroll.emit(top);
        }
      }, {
        key: "focusedElemWithKey",
        value: function focusedElemWithKey(key) {
          return !!this.focusedFeedback && this.focusedFeedbackKey === key;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "hasMarkLabels",
        get: function get() {
          return this.markLabels.length > 0;
        }
      }, {
        key: "title",
        get: function get() {
          return this.L.getTitle(this.index);
        }
      }, {
        key: "valueType",
        get: function get() {
          return this.group.get('type').value;
        }
      }, {
        key: "labeledByMarks",
        get: function get() {
          return this.group.get('labeled').value;
        }
      }]);

      return CustomSpecComponent;
    }();

    CustomSpecComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CustomSpecComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], CustomSpecComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["Overall"])], CustomSpecComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], CustomSpecComponent.prototype, "texts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomSpecComponent.prototype, "closed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomSpecComponent.prototype, "scroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('titleRef', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CustomSpecComponent.prototype, "titleRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('type', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CustomSpecComponent.prototype, "typeRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unit', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CustomSpecComponent.prototype, "unitRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('markLabels', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CustomSpecComponent.prototype, "markLabelsRef", void 0);
    CustomSpecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-spec',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-spec.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-spec.component.scss */
      "./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../edit-module.scss */
      "./src/app/edit/edit-module.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../overall.component.scss */
      "./src/app/edit/annotation-module/overall/overall.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])], CustomSpecComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/index.ts":
  /*!*********************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/index.ts ***!
    \*********************************************************/

  /*! exports provided: AxisSpecComponent, CanvasPatchComponent, LegendSpecComponent, ColumnAdditionDialogComponent, RawTableComponent, OverallComponent */

  /***/
  function srcAppEditAnnotationModuleOverallIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _axis_spec_axis_spec_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./axis-spec/axis-spec.component */
    "./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AxisSpecComponent", function () {
      return _axis_spec_axis_spec_component__WEBPACK_IMPORTED_MODULE_1__["AxisSpecComponent"];
    });
    /* harmony import */


    var _canvas_patch_canvas_patch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./canvas-patch/canvas-patch.component */
    "./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CanvasPatchComponent", function () {
      return _canvas_patch_canvas_patch_component__WEBPACK_IMPORTED_MODULE_2__["CanvasPatchComponent"];
    });
    /* harmony import */


    var _legend_spec_legend_spec_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./legend-spec/legend-spec.component */
    "./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LegendSpecComponent", function () {
      return _legend_spec_legend_spec_component__WEBPACK_IMPORTED_MODULE_3__["LegendSpecComponent"];
    });
    /* harmony import */


    var _raw_table_raw_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./raw-table/raw-table.component */
    "./src/app/edit/annotation-module/overall/raw-table/raw-table.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnAdditionDialogComponent", function () {
      return _raw_table_raw_table_component__WEBPACK_IMPORTED_MODULE_4__["ColumnAdditionDialogComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RawTableComponent", function () {
      return _raw_table_raw_table_component__WEBPACK_IMPORTED_MODULE_4__["RawTableComponent"];
    });
    /* harmony import */


    var _overall_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./overall.component */
    "./src/app/edit/annotation-module/overall/overall.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OverallComponent", function () {
      return _overall_component__WEBPACK_IMPORTED_MODULE_5__["OverallComponent"];
    });
    /***/

  },

  /***/
  "./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleOverallLabelChipListLabelChipListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 100% !important;\n}\n\n.feedback-region {\n  width: 100% !important;\n  margin-top: -1.3rem !important;\n  border-top: 2px solid #f44336;\n}\n\n.feedback-region button {\n  height: 20px !important;\n}\n\n::ng-deep input.mat-chip-input {\n  min-width: 50px !important;\n  -webkit-box-flex: 1 !important;\n          flex: 1 0 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL2xhYmVsLWNoaXAtbGlzdC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcYW5ub3RhdGlvbi1tb2R1bGVcXG92ZXJhbGxcXGxhYmVsLWNoaXAtbGlzdFxcbGFiZWwtY2hpcC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvbGFiZWwtY2hpcC1saXN0L2xhYmVsLWNoaXAtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDSTtFQUNJLHVCQUFBO0FDQ1I7O0FESUk7RUFDSSwwQkFBQTtFQUNBLDhCQUFBO1VBQUEseUJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9sYWJlbC1jaGlwLWxpc3QvbGFiZWwtY2hpcC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZlZWRiYWNrLXJlZ2lvbiB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNDQzMzY7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIGlucHV0Lm1hdC1jaGlwLWlucHV0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4OiAxIDAgNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmZlZWRiYWNrLXJlZ2lvbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xLjNyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNDQzMzY7XG59XG4uZmVlZGJhY2stcmVnaW9uIGJ1dHRvbiB7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgaW5wdXQubWF0LWNoaXAtaW5wdXQge1xuICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgZmxleDogMSAwIDUwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: LabelChipListComponent */

  /***/
  function srcAppEditAnnotationModuleOverallLabelChipListLabelChipListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelChipListComponent", function () {
      return LabelChipListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/edit/common/feedback.service */
    "./src/app/edit/common/feedback.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var LabelChipListComponent =
    /*#__PURE__*/
    function () {
      function LabelChipListComponent(fs, L) {
        _classCallCheck(this, LabelChipListComponent);

        this.fs = fs;
        this.L = L;
        this.separatorKeyCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["TAB"]];
      }

      _createClass(LabelChipListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.labelForms = this.formGroup.get(this.formKey);
        }
      }, {
        key: "add",
        value: function add(event) {
          var input = event.input;
          var value = event.value;

          if ((value || '').trim()) {
            this.labelForms.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](value));
          }

          if (input) {
            input.value = '';
          }
        }
      }, {
        key: "remove",
        value: function remove(label) {
          var index = this.labels.indexOf(label);
          this.labelForms.removeAt(index);
        }
      }, {
        key: "labels",
        get: function get() {
          return this.labelForms.value;
        }
      }]);

      return LabelChipListComponent;
    }();

    LabelChipListComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], LabelChipListComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])], LabelChipListComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LabelChipListComponent.prototype, "formKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_4__["Feedback"])], LabelChipListComponent.prototype, "focusedFeedback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LabelChipListComponent.prototype, "focusedFeedbackKey", void 0);
    LabelChipListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-label-chip-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./label-chip-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./label-chip-list.component.scss */
      "./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../overall.component.scss */
      "./src/app/edit/annotation-module/overall/overall.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])], LabelChipListComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleOverallLegendSpecLegendSpecComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  color: #212529;\n}\n\n.key {\n  color: #777;\n  min-width: 100px;\n  margin-right: 0.5rem;\n  border-right: 1px solid #dee2e6;\n  padding: 0rem 0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL2xlZ2VuZC1zcGVjL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFxhbm5vdGF0aW9uLW1vZHVsZVxcb3ZlcmFsbFxcbGVnZW5kLXNwZWNcXGxlZ2VuZC1zcGVjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvbGVnZW5kLXNwZWMvbGVnZW5kLXNwZWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9sZWdlbmQtc3BlYy9sZWdlbmQtc3BlYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLmtleSB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImRpdiB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4ua2V5IHtcbiAgY29sb3I6ICM3Nzc7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: LegendSpecComponent */

  /***/
  function srcAppEditAnnotationModuleOverallLegendSpecLegendSpecComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegendSpecComponent", function () {
      return LegendSpecComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/edit/common/feedback.service */
    "./src/app/edit/common/feedback.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var LegendSpecComponent =
    /*#__PURE__*/
    function () {
      function LegendSpecComponent(fs, _L) {
        _classCallCheck(this, LegendSpecComponent);

        this.fs = fs;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = _L.legendSpec;
      }

      _createClass(LegendSpecComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.sub = this.fs.feedbackObservable.subscribe(function (feedback) {
            _this32.focusedFeedbackKey = '';
            _this32.focusedFeedback = null;

            if (feedback.taskKey !== _this32.task.key) {
              return;
            }

            var splited = feedback.annotationKey.split('.');

            if (splited[0] !== 'spec' || splited[1] !== 'legend') {
              return;
            }

            _this32.focusedFeedbackKey = splited[2];
            _this32.focusedFeedback = feedback;
            setTimeout(function () {
              _this32.scrollEvent();
            }, 0);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.refMap = {
            'title': this.titleRef,
            'labels': this.labelsRef
          };
        }
      }, {
        key: "scrollEvent",
        value: function scrollEvent() {
          var ref = this.refMap[this.focusedFeedbackKey];

          if (!ref) {
            return;
          }

          var el = ref.nativeElement;
          var top = el.getBoundingClientRect().top;
          this.scroll.emit(top);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "focusedElemWithKey",
        value: function focusedElemWithKey(key) {
          return !!this.focusedFeedback && this.focusedFeedbackKey === key;
        }
      }]);

      return LegendSpecComponent;
    }();

    LegendSpecComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], LegendSpecComponent.prototype, "auto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], LegendSpecComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Overall"])], LegendSpecComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], LegendSpecComponent.prototype, "titleRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labels', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], LegendSpecComponent.prototype, "labelsRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], LegendSpecComponent.prototype, "scroll", void 0);
    LegendSpecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-legend-spec',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./legend-spec.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./legend-spec.component.scss */
      "./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../overall.component.scss */
      "./src/app/edit/annotation-module/overall/overall.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"]])], LegendSpecComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/overall.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/overall.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleOverallOverallComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subtitle {\n  color: #777;\n  font-size: 1.2rem;\n  width: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#text-mode-button {\n  color: #3f51b5;\n}\n\n#mark-mode-button {\n  color: red;\n}\n\n.spec {\n  color: #212529;\n  padding: 0.2rem;\n}\n\n.spec div {\n  padding: 0rem 0.3rem !important;\n}\n\n.key {\n  font-size: 1.1rem;\n  color: rgba(0, 0, 0, 0.54);\n  min-width: 100px;\n  margin-bottom: 0.3rem;\n}\n\n.feature-cell {\n  width: 7% !important;\n  text-align: center;\n  font-size: 0.85rem;\n  line-height: 24px;\n}\n\n.label-cell {\n  text-align: center;\n  line-height: 24px;\n  font-size: 0.9rem;\n}\n\n.input-cell {\n  width: 47% !important;\n  text-align: center;\n  line-height: 24px;\n  font-size: 0.9rem;\n}\n\n.input-cell input {\n  font-size: 1rem;\n  width: 100%;\n}\n\n.even {\n  background-color: #F5F5F5;\n}\n\n.w-20 {\n  width: 20% !important;\n}\n\n.refresh-warning {\n  position: absolute;\n  right: 40px;\n  top: 10px;\n  color: #f44336;\n  font-size: 0.9rem;\n  text-align: end;\n}\n\n.control-panel {\n  position: fixed;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: white;\n}\n\n.feedback-region {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-top: -0.4rem;\n  padding: 0.2rem;\n  color: #f44336;\n  background-color: rgba(0, 0, 0, 0);\n  font-size: 0.9rem;\n}\n\n.feedback-region div {\n  margin: 0.2rem;\n  color: #f44336;\n}\n\n.feedback-region.title {\n  width: 100%;\n  border-top: 2px solid #f44336;\n  margin-top: -1.3rem;\n  max-width: 100%;\n}\n\n.feedback-region.select {\n  border-top: 2px solid #f44336;\n  margin-top: -1.3rem;\n  max-width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFxhbm5vdGF0aW9uLW1vZHVsZVxcb3ZlcmFsbFxcb3ZlcmFsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL292ZXJhbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURBSTtFQUNJLCtCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQ1I7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREdJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNEUjs7QURJSTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREtJO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvb3ZlcmFsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0ZXh0LW1vZGUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4jbWFyay1tb2RlLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc3BlYyB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIGRpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMHJlbSAwLjNyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmtleSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxufVxyXG5cclxuLmZlYXR1cmUtY2VsbCB7XHJcbiAgICB3aWR0aDogNyUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ubGFiZWwtY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uaW5wdXQtY2VsbCB7XHJcbiAgICB3aWR0aDogNDclICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ldmVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi53LTIwIHtcclxuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlZnJlc2gtd2FybmluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5jb250cm9sLXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4uZmVlZGJhY2stcmVnaW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IC0wLjRyZW07XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICBjb2xvcjogI2Y0NDMzNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogMC4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgfVxyXG5cclxuICAgICYudGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjQ0MzM2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjNyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2VsZWN0IHtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2Y0NDMzNjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMS4zcmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLnN1YnRpdGxlIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0ZXh0LW1vZGUtYnV0dG9uIHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbiNtYXJrLW1vZGUtYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNwZWMge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuLnNwZWMgZGl2IHtcbiAgcGFkZGluZzogMHJlbSAwLjNyZW0gIWltcG9ydGFudDtcbn1cblxuLmtleSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xufVxuXG4uZmVhdHVyZS1jZWxsIHtcbiAgd2lkdGg6IDclICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmxhYmVsLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmlucHV0LWNlbGwge1xuICB3aWR0aDogNDclICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmlucHV0LWNlbGwgaW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi53LTIwIHtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4ucmVmcmVzaC13YXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDBweDtcbiAgdG9wOiAxMHB4O1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmNvbnRyb2wtcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZlZWRiYWNrLXJlZ2lvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogLTAuNHJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uZmVlZGJhY2stcmVnaW9uIGRpdiB7XG4gIG1hcmdpbjogMC4ycmVtO1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5mZWVkYmFjay1yZWdpb24udGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNDQzMzY7XG4gIG1hcmdpbi10b3A6IC0xLjNyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5mZWVkYmFjay1yZWdpb24uc2VsZWN0IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNDQzMzY7XG4gIG1hcmdpbi10b3A6IC0xLjNyZW07XG4gIG1heC13aWR0aDogMTgwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/overall.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/overall.component.ts ***!
    \*********************************************************************/

  /*! exports provided: OverallComponent */

  /***/
  function srcAppEditAnnotationModuleOverallOverallComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverallComponent", function () {
      return OverallComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _annotation_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../annotation-util */
    "./src/app/edit/annotation-module/annotation-util.ts");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _common_feedback_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../common/feedback.service */
    "./src/app/edit/common/feedback.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var OverallComponent =
    /*#__PURE__*/
    function () {
      function OverallComponent(edit, fb, fs, changeDetector, _L) {
        _classCallCheck(this, OverallComponent);

        this.edit = edit;
        this.fb = fb;
        this.fs = fs;
        this.changeDetector = changeDetector;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outdatedFeedback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // common

        this.auto = false;
        this.visited = [true, false, false];
        this.focusedFeedbackKey = '';
        this.focusedFeedback = null; // Stage 1

        this.focusedBoxIndex = null;
        this.autoIncBoxIndex = 0;
        this.boxes = [];
        this.marks = [];
        this.texts = [];
        this.isDrawing = false;
        this.isMerging = false;
        this._boxMode = 'text';
        this.pointRadius = 8;
        this.sortText = true;
        this.subscriptions = [];
        this._stage = 0;
        this.L = _L.overall;
      }

      _createClass(OverallComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          var sub1 = this.event.subscribe(function (key) {
            _this33.isDrawing = false;
            _this33.isMerging = false;

            if (key === 'predict' && _this33.edit.autoCompleteSubject.getValue()[_this33.task.key]) {
              _this33.task.registerControl(_this33.formGroup, _this33.fb);

              _this33.task.applyPrediction(_this33.formGroup);

              _this33.updateBoxes();

              if (_this33.currIndex === _this33.index) {
                _this33.createEventArea();
              }
            }

            if (key === 'review') {
              _this33.updateBoxes();

              _this33.createEventArea();
            }

            if (key === 'finish') {
              _this33.reset();

              Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeEventArea"])(_this33);
            }
          });
          this.subscriptions.push(sub1);
          var sub2 = this.edit.autoCompleteSubject.asObservable().subscribe(function (map) {
            _this33.auto = map[_this33.task.key];
          });
          this.subscriptions.push(sub2);
          var sub3 = this.fs.feedbackObservable.subscribe(function (feedback) {
            _this33.focusedFeedback = null;
            _this33.focusedFeedbackKey = null;

            if (feedback.taskKey === _this33.task.key) {
              var splited = feedback.annotationKey.split('.');

              switch (splited[0]) {
                case 'mark':
                  {
                    _this33.stage = 0;

                    if (splited[1] === 'other') {
                      _this33.focusedFeedback = feedback;
                      _this33.focusedFeedbackKey = feedback.annotationKey;
                      _this33.boxMode = 'mark';

                      _this33.updateFocus(null);
                    } else {
                      var markIndex = +splited[1];

                      if (markIndex >= _this33.marks.length) {
                        _this33.fs.resolveTarget(feedback);
                      } else {
                        var key = _this33.marks[markIndex].key;
                        _this33.focusedFeedback = feedback;
                        _this33.focusedFeedbackKey = key;

                        _this33.updateFocus(key);
                      }
                    }

                    break;
                  }

                case 'text':
                  {
                    _this33.stage = 0;

                    if (splited[1] === 'other') {
                      _this33.focusedFeedback = feedback;
                      _this33.focusedFeedbackKey = feedback.annotationKey;
                      _this33.boxMode = 'text';

                      _this33.updateFocus(null);
                    } else {
                      var textIndex = +splited[1];

                      if (textIndex >= _this33.texts.length) {
                        _this33.fs.resolveTarget(feedback);
                      } else {
                        var _key = _this33.texts[textIndex].key;
                        _this33.focusedFeedback = feedback;
                        _this33.focusedFeedbackKey = _key;

                        _this33.updateFocus(_key);
                      }
                    }

                    break;
                  }

                case 'spec':
                  {
                    if (splited[splited.length - 1] === 'encoding') {
                      _this33.stage = 2;
                    } else {
                      _this33.stage = 1;
                    }

                    if (splited[1] === 'other') {
                      _this33.focusedFeedback = feedback;
                      _this33.focusedFeedbackKey = feedback.annotationKey;

                      _this33.updateFocus(null);
                    }

                    if (splited[1] === 'title') {
                      _this33.focusedFeedback = feedback;
                      _this33.focusedFeedbackKey = 'title';
                    }

                    _this33.changeDetector.detectChanges();

                    _this33.updateFocus(null);

                    break;
                  }

                case 'raw':
                  {
                    _this33.stage = 2;

                    _this33.changeDetector.detectChanges();

                    _this33.updateFocus(null);

                    break;
                  }

                default:
                  break;
              }
            }
          });
          this.subscriptions.push(sub3);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.currIndex || changes.formGroup) {
            this.updateBoxes();

            if (this.currIndex === this.index) {
              this.createEventArea();
              this.reset();
            } else {
              Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeEventArea"])(this);
            }
          }
        }
      }, {
        key: "onKey",
        value: function onKey(event) {
          if (document.activeElement.tagName === 'INPUT') {
            return;
          }

          if (event.key === 'Escape' && this.isMerging) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeMergeLine"])(this);
          }

          if (event.key === 'Escape' && this.isDrawing) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeTempBox"])(this);
          }

          if (event.key === 'Delete' || event.key === 'd' || event.key === 'D' || event.key === 'ㅇ') {
            this.deleteBox(this.focusedBoxIndex);
          }

          if ((event.key === 'f' || event.key === 'F' || event.key === 'ㄹ') && this.focusedBoxIndex && this._stage === 0) {
            this.sortDrawOrder(this.focusedBoxIndex);
          }

          if (event.key === 'b' || event.key === 'B' || event.key === 'ㅠ') {
            this.sortDrawOrder(this.focusedBoxIndex, false);
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this._stage = 0;
          this.visited = [true, false, false];
          this.autoIncBoxIndex = d3__WEBPACK_IMPORTED_MODULE_7__["max"](this.boxes.map(function (box) {
            return +box.key;
          })) || 0;
          this.focusedBoxIndex = null;
          this.boxMode = 'text';
        }
      }, {
        key: "deleteBox",
        value: function deleteBox(boxIndex) {
          if (!this.focusedBoxIndex || this._stage !== 0 || this.isDrawing) {
            return;
          }

          this.g.select(".rect-".concat(boxIndex)).remove();
          this.g.selectAll(".circle-".concat(boxIndex)).remove();
          this.task.deleteBox(this.formGroup, boxIndex);

          if (boxIndex === this.focusedBoxIndex) {
            this.focusedBoxIndex = null;
          }

          this.updateBoxes();
        }
      }, {
        key: "inputKeyPress",
        value: function inputKeyPress(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
          }
        }
      }, {
        key: "onBlurEvent",
        value: function onBlurEvent(box) {
          if (this.focusedBoxIndex !== box.key) {
            this.updateFocus(box.key);
          }
        }
      }, {
        key: "removeBox",
        value: function removeBox(boxIndex) {
          this.g.select(".rect-".concat(boxIndex)).remove();
          this.g.selectAll(".circle-".concat(boxIndex)).remove();
          this.task.deleteBox(this.formGroup, boxIndex);
          this.focusedBoxIndex = null;
        }
      }, {
        key: "createEventArea",
        value: function createEventArea() {
          var _this34 = this;

          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeEventArea"])(this);
          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["createEventArea"])(this, true, this.task.inputType);
          this.svgS.on('contextmenu', function () {
            if (_this34.isMerging) {
              Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeMergeLine"])(_this34);
              d3__WEBPACK_IMPORTED_MODULE_7__["event"].preventDefault();
            } else if (_this34.task.inputType === 'rect' && _this34.boxMode === 'mark' && !_this34.isDrawing) {
              _this34.isDrawing = true;
              Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["drawBoxBySelectedPixel"])(_this34);
              _this34.isDrawing = false;
            }

            d3__WEBPACK_IMPORTED_MODULE_7__["event"].preventDefault();
            d3__WEBPACK_IMPORTED_MODULE_7__["event"].stopPropagation();
            return false;
          });

          if (this.controlPanelRef) {
            var rect = d3__WEBPACK_IMPORTED_MODULE_7__["select"]('#image-zone').node().getBoundingClientRect();
            d3__WEBPACK_IMPORTED_MODULE_7__["select"](this.controlPanelRef.nativeElement).style('top', "".concat(Math.floor(rect.bottom), "px")).style('left', "".concat(Math.floor(rect.left), "px")).style('width', "".concat(Math.floor(rect.width), "px"));
          }

          if (this.task.inputType === 'point') {
            this.applyPointSizeToMarkForm();
          }
        }
      }, {
        key: "onLabelChange",
        value: function onLabelChange() {
          this.updateBoxes();
          this.updateFocus(this.focusedBoxIndex);
        }
      }, {
        key: "addRectEvent",
        value: function addRectEvent(boxIndex, rectS, circleS) {
          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["addRectDragEvent"])(this, boxIndex, rectS, circleS);

          if (this.boxes.find(function (d) {
            return d.key === boxIndex;
          }).isText) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["addMergeEvent"])(this, boxIndex, rectS);
          }
        }
      }, {
        key: "writeForm",
        value: function writeForm(boxIndex, x, y, width, height) {
          var imgElem = this.imgRef.nativeElement;

          var clamp = function clamp(value, min, max) {
            return Math.min(max, Math.max(min, value));
          };

          var raw = {
            key: boxIndex,
            x0: clamp(x - 10, 0, imgElem.width) / imgElem.width,
            y0: clamp(y - 10, 0, imgElem.height) / imgElem.height,
            x1: clamp(x + width - 10, 0, imgElem.width) / imgElem.width,
            y1: clamp(y + height - 10, 0, imgElem.height) / imgElem.height,
            text: this.boxMode === 'mark' ? undefined : ''
          };
          var addNewBox = !this.formGroup.get(this.task.key).get('boxes').get(raw.key);
          this.task.updateBox(this.formGroup, raw);

          if (addNewBox) {
            this.updateBoxes();
          }
        }
      }, {
        key: "updateFocus",
        value: function updateFocus(boxIndex) {
          var _this35 = this;

          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["updateBoxStyleByFocus"])(boxIndex, this.svgS);
          this.sortDrawOrder(boxIndex, true);
          this.focusedBoxIndex = boxIndex;
          var box = this.boxes.find(function (d) {
            return d.key === _this35.focusedBoxIndex;
          });

          if (!box) {
            return;
          }

          if (box.isText) {
            this.boxMode = 'text';
          } else {
            this.boxMode = 'mark';
          }

          this.changeDetector.detectChanges();

          if (this.markScrollRef) {
            var el = this.markScrollRef.nativeElement;
            var elRect = el.getBoundingClientRect();
            var focusedDiv = d3__WEBPACK_IMPORTED_MODULE_7__["select"](el).select(".elem-".concat(boxIndex)).node();

            if (focusedDiv) {
              var focusedRect = focusedDiv.getBoundingClientRect();

              if (focusedRect.top > elRect.bottom - 50 || focusedRect.bottom < elRect.top + 50) {
                el.scroll({
                  top: focusedDiv.offsetTop - 150
                });
              }
            }
          }

          if (this.textScrollRef) {
            var _el = this.textScrollRef.nativeElement;

            var _elRect = _el.getBoundingClientRect();

            var rowHeight = 38;
            var headerHeight = 33;
            var findIndex = this.boxes.filter(function (d) {
              return d.isText;
            }).findIndex(function (d) {
              return d.key === _this35.focusedBoxIndex;
            });
            var focusedBottom = rowHeight * (findIndex + 1);
            var focusedTop = rowHeight * findIndex;
            var elRange = [_el.scrollTop - headerHeight - 10, _elRect.bottom - _elRect.top + _el.scrollTop - headerHeight + 10];

            if (focusedBottom >= elRange[1] || focusedTop <= elRange[0]) {
              _el.scroll({
                top: focusedTop
              });
            }
          }
        }
      }, {
        key: "updateBoxes",
        value: function updateBoxes() {
          var formGroup = this.formGroup.get(this.task.key).get('boxes');
          this.boxes = Object.entries(formGroup.controls).map(function (entry) {
            var _entry2 = _slicedToArray(entry, 2),
                key = _entry2[0],
                value = _entry2[1];

            return new _annotation_util__WEBPACK_IMPORTED_MODULE_5__["AnnotationBox"](key, value);
          });

          if (this.sortText) {
            this.boxes = this.boxes.sort(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["boxComparator"]);
          }

          this.marks = this.boxes.filter(function (d) {
            return !d.isText;
          });
          this.texts = this.boxes.filter(function (d) {
            return d.isText;
          });
        }
      }, {
        key: "clearBoxes",
        value: function clearBoxes() {
          var _this36 = this;

          var deletedBoxIndices = this.boxes.filter(function (d) {
            return _this36.boxMode === 'mark' ? d.text === null : d.text !== null;
          }).map(function (d) {
            return d.key;
          });
          deletedBoxIndices.forEach(function (boxIndex) {
            _this36.g.select(".rect-".concat(boxIndex)).remove();

            _this36.g.selectAll(".circle-".concat(boxIndex)).remove();

            _this36.task.deleteBox(_this36.formGroup, boxIndex);
          });
          this.updateBoxes();
        }
      }, {
        key: "box",
        value: function box(boxIndex) {
          return this.formGroup.get(this.task.key).get('boxes').get(boxIndex);
        }
      }, {
        key: "onBoxModeChange",
        value: function onBoxModeChange(event) {
          this.boxMode = event.value;
        }
      }, {
        key: "onChangeTitleSpec",
        value: function onChangeTitleSpec(event) {
          var value = event.target.value;
          var titleBox = this.boxes.find(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_TITLE"];
          });

          if (titleBox) {
            titleBox.text.setValue(value);
          }
        }
      }, {
        key: "predictStage2",
        value: function predictStage2() {
          this.formGroup.get(this.task.key).setControl('spec', this.task.getDefaultSpecForm(this.fb));
          this.detectAxes();
          this.mapBoxToTitle();
          this.mapBoxesToLegend();

          if (!this.hasLegend && !this.hasXAxis && !this.hasYAxis) {
            this.addCustomColumn(true);
          }
        }
      }, {
        key: "goNextStage",
        value: function goNextStage() {
          if (this._stage === 0 && !this.visited[1] && this.mode === 'annotation') {
            this.predictStage2();
          }

          this.stage = Math.min(2, this._stage + 1);
        }
      }, {
        key: "goPrevStage",
        value: function goPrevStage() {
          this.stage = Math.max(0, this._stage - 1);
        }
      }, {
        key: "refresh",
        value: function refresh(index) {
          switch (index) {
            case 1:
              this.predictStage2();
              break;

            default:
              break;
          }
        }
      }, {
        key: "addAxis",
        value: function addAxis() {
          var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'nominal';
          var labels = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
          var pre = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var valuePerPixel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
          var formGroup = this.formGroup.get(this.task.key).get('spec').get('axis');
          var unit = pre <= 0 ? 'integer' : 'decimal';

          if (type === 'nominal') {
            unit = '';
          }

          var newGroup = this.fb.group({
            dir: this.fb.control(dir),
            title: this.fb.control(title),
            type: this.fb.control(type),
            labels: this.fb.array(labels),
            precision: this.fb.control(pre),
            unit: this.fb.control(unit),
            labeled: this.fb.control(false),
            markLabels: this.fb.array([]),
            valuePerPixel: this.fb.control(valuePerPixel)
          });
          formGroup.push(newGroup);
        }
      }, {
        key: "addCustomColumn",
        value: function addCustomColumn() {
          var labeled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var formGroup = this.formGroup.get(this.task.key).get('spec').get('custom');
          var newGroup = this.fb.group({
            title: this.fb.control("Unknown column".concat(formGroup.length + 1)),
            type: this.fb.control('nominal'),
            labeled: this.fb.control(labeled),
            markLabels: this.fb.array([]),
            unit: this.fb.control('integer')
          });
          formGroup.push(newGroup);
        }
      }, {
        key: "deleteCustomColumn",
        value: function deleteCustomColumn(index) {
          this.customGroups.splice(index, 1);
        }
      }, {
        key: "detectAxes",
        value: function detectAxes() {
          var _this37 = this;

          var axesGroup = this.formGroup.get(this.task.key).get('spec').get('axis');

          while (axesGroup.length) {
            axesGroup.removeAt(0);
          }

          var _this$imgRef$nativeEl2 = this.imgRef.nativeElement,
              width = _this$imgRef$nativeEl2.width,
              height = _this$imgRef$nativeEl2.height;

          var getPrecision = function getPrecision(v) {
            var splited = v.split('.');

            if (splited.length === 2) {
              return splited[1].length;
            }

            var vs = splited[0];

            for (var i = vs.length - 1; i >= 0; i--) {
              if (vs.charAt(i) !== '0') {
                return i - vs.length + 1;
              }
            }

            return 0;
          };

          var interpret = function interpret(axis, dir, title) {
            if (Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["isNumberTexts"])(axis)) {
              var axisValues = axis.map(function (d) {
                return {
                  value: +d.text.value.match(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["NUM_REG"])[0],
                  center: d.center
                };
              }).sort(function (a, b) {
                return a.value - b.value;
              });
              var pre = d3__WEBPACK_IMPORTED_MODULE_7__["max"](axisValues.filter(function (d) {
                return d.value !== 0;
              }), function (d) {
                return getPrecision(d.value.toString());
              }) + 1;
              var valuesPerPixel = [];

              for (var i = 0; i < axisValues.length - 1; i++) {
                var curr = axisValues[i];
                var next = axisValues[i + 1];
                var interval = Math.abs(dir === 'x' ? (curr.center[0] - next.center[0]) * width : (curr.center[1] - next.center[1]) * height);
                valuesPerPixel.push((+next.value - +curr.value) / interval);
              }

              var valuePerPixel = +d3__WEBPACK_IMPORTED_MODULE_7__["mean"](valuesPerPixel);

              var labels = _this37.boxes.filter(function (d) {
                return d.label.value === "".concat(dir, "-axis-label");
              }).map(function (d) {
                return d.text.value;
              });

              _this37.addAxis(dir, title, 'quantitative', labels, pre, valuePerPixel);
            } else {
              var _labels = _this37.boxes.filter(function (d) {
                return d.label.value === "".concat(dir, "-axis-label");
              }).map(function (d) {
                return d.text.value;
              });

              _this37.addAxis(dir, title, 'nominal', _labels);
            }
          };

          var detectAxis = function detectAxis(dir) {
            var axis = _this37.boxes.filter(function (d) {
              return d.label.value === "".concat(dir, "-axis-label");
            });

            var title = "Unknown ".concat(dir.toUpperCase(), " Axis");

            var axisTitleBox = _this37.boxes.find(function (d) {
              return d.label.value === "".concat(dir, "-axis-title");
            });

            if (axisTitleBox !== undefined) {
              title = axisTitleBox.text.value;
            }

            if (axis.length > 0) {
              interpret(axis, dir, title);
              return true;
            } else {
              return false;
            }
          };

          detectAxis('x');
          detectAxis('y');
        }
      }, {
        key: "onCheckBoxRegression",
        value: function onCheckBoxRegression() {
          var _this38 = this;

          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["regressBoxesByColor"])(this);
          this.marks.forEach(function (mark) {
            _this38.sortDrawOrder(mark.key, false);
          });
        }
      }, {
        key: "onPointSizeChange",
        value: function onPointSizeChange(change) {
          var pointSymbol = this.pointMark.nativeElement;
          var r = change.value;
          d3__WEBPACK_IMPORTED_MODULE_7__["select"](pointSymbol).attr('r', r);
          this.applyPointSizeToMarkForm();
        }
      }, {
        key: "applyPointSizeToMarkForm",
        value: function applyPointSizeToMarkForm() {
          var _this39 = this;

          var r = this.pointRadius;
          this.marks.forEach(function (mark) {
            var boxIndex = mark.key;

            var sel = _this39.g.select(".rect-".concat(boxIndex));

            sel.attr('r', r);
            var x = +sel.attr('cx');
            var y = +sel.attr('cy');

            _this39.writeForm(boxIndex, x - r, y - r, 2 * r, 2 * r);
          });
          this.updateBoxes();
        }
      }, {
        key: "mapBoxToTitle",
        value: function mapBoxToTitle() {
          var titleBox = this.boxes.find(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_TITLE"];
          });
          var titleControl = this.formGroup.get(this.task.key).get('spec.title');

          if (titleBox !== undefined) {
            titleControl.setValue(titleBox.text.value);
          } else if (titleControl.value === '') {
            titleControl.setValue('Unknown Title');
          }
        }
      }, {
        key: "mapBoxesToLegend",
        value: function mapBoxesToLegend() {
          var _this40 = this;

          var titleBox = this.boxes.find(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_LEGEND_TITLE"];
          });
          var legendBoxes = this.boxes.filter(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_LEGEND_LABEL"];
          });

          if (legendBoxes.length === 0) {
            return false;
          }

          var group = src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Overall"].legendDefaultForm(this.fb);
          group.get('title').setValue(titleBox ? titleBox.text.value : 'Unknown Legend');
          legendBoxes.map(function (d) {
            return d.text.value;
          }).forEach(function (legend) {
            group.get('labels').push(_this40.fb.control(legend));
          });
          this.specGroup.setControl('legend', group);
          return true;
        }
      }, {
        key: "sortDrawOrder",
        value: function sortDrawOrder(boxIndex) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (!this.focusedBoxIndex) {
            return;
          }

          if (forward) {
            this.g.select(".rect-".concat(boxIndex)).raise();
            this.g.selectAll(".circle-".concat(boxIndex)).raise();
          } else {
            this.g.selectAll(".circle-".concat(boxIndex)).lower();
            this.g.select(".rect-".concat(boxIndex)).lower();
          }
        }
      }, {
        key: "onSubmitReady",
        value: function onSubmitReady() {
          if (this.index === Object.keys(this.formGroup.value).length - 1) {
            this.submitEmitter.emit(true);
          }
        }
      }, {
        key: "onSpecScroll",
        value: function onSpecScroll(top) {
          var scrollEl = this.specScrollRef.nativeElement;
          this.specScrollRef.nativeElement.scroll({
            top: top - 500 + scrollEl.scrollTop
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
          });
        }
      }, {
        key: "updateTextSortOption",
        value: function updateTextSortOption(change) {
          if (change.checked) {
            this.sortText = true;
            this.updateBoxes();
          }
        }
      }, {
        key: "specGroup",
        get: function get() {
          return this.formGroup.get(this.task.key).get('spec');
        }
      }, {
        key: "axesGroup",
        get: function get() {
          return this.formGroup.get(this.task.key).get('spec').get('axis').controls;
        }
      }, {
        key: "customGroups",
        get: function get() {
          return this.specGroup.get('custom').controls;
        }
      }, {
        key: "legendGroup",
        get: function get() {
          return this.formGroup.get(this.task.key).get('spec').get('legend');
        }
      }, {
        key: "hasLegend",
        get: function get() {
          return this.specGroup.contains('legend');
        }
      }, {
        key: "hasXAxis",
        get: function get() {
          return this.axesGroup.some(function (form) {
            return form.get('dir').value === 'x';
          });
        }
      }, {
        key: "hasYAxis",
        get: function get() {
          return this.axesGroup.some(function (form) {
            return form.get('dir').value === 'y';
          });
        }
      }, {
        key: "stage",
        get: function get() {
          return this._stage;
        },
        set: function set(value) {
          if (value < 2) {
            this.submitEmitter.emit(false);
          }

          this._stage = value;
          this.visited[value] = true;
        }
      }, {
        key: "boxMode",
        get: function get() {
          return this._boxMode;
        },
        set: function set(value) {
          this.svgS.selectAll('line').attr('stroke', value === 'text' ? 'rgba(61, 81, 181, 0.6)' : 'rgba(255, 0, 0, 0.6)');
          this._boxMode = value;
        }
      }]);

      return OverallComponent;
    }();

    OverallComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_feedback_service__WEBPACK_IMPORTED_MODULE_8__["FeedbackService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_9__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], OverallComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Overall"])], OverallComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], OverallComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], OverallComponent.prototype, "svgS", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OverallComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], OverallComponent.prototype, "currIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], OverallComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], OverallComponent.prototype, "spacePressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], OverallComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], OverallComponent.prototype, "submitEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], OverallComponent.prototype, "outdatedFeedback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pointMark', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OverallComponent.prototype, "pointMark", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textScroll', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OverallComponent.prototype, "textScrollRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('markScroll', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OverallComponent.prototype, "markScrollRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('specScroll', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OverallComponent.prototype, "specScrollRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('controlPanel', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OverallComponent.prototype, "controlPanelRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('markRows'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], OverallComponent.prototype, "markRowsRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('textRows'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], OverallComponent.prototype, "textRowsRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], OverallComponent.prototype, "onKey", null);
    OverallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-overall',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./overall.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/overall.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./overall.component.scss */
      "./src/app/edit/annotation-module/overall/overall.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../edit-module.scss */
      "./src/app/edit/edit-module.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _common_feedback_service__WEBPACK_IMPORTED_MODULE_8__["FeedbackService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_9__["LocaleService"]])], OverallComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/raw-table/raw-table.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/raw-table/raw-table.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleOverallRawTableRawTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  font-size: 0.9rem;\n}\n\n.raw-table {\n  max-height: 500px;\n  overflow: scroll;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.raw-table .table-row {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.raw-table .column {\n  width: 200px !important;\n  min-width: 200px !important;\n  position: relative;\n}\n\n.raw-table .index-cell {\n  width: 80px !important;\n  min-width: 80px !important;\n  text-align: center;\n}\n\n.raw-table .content-cell input, .raw-table .content-cell select {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  border-bottom: 1px solid #CBCBCB;\n  border-width: 1px 1px 1px 1px;\n}\n\n.raw-table .column-title {\n  font-size: 1.1rem;\n  color: #777;\n  text-align: center;\n}\n\n.raw-table .patch {\n  position: absolute;\n  top: 5px;\n  right: 30px;\n  width: 15px;\n  height: 15px;\n}\n\n.raw-table .patch rect {\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL3Jhdy10YWJsZS9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcYW5ub3RhdGlvbi1tb2R1bGVcXG92ZXJhbGxcXHJhdy10YWJsZVxccmF3LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvcmF3LXRhYmxlL3Jhdy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FEQ0k7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0FDQ1I7O0FERUk7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURHSTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0RSOztBREtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNIWjs7QURPSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDTFI7O0FEUUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNOUjs7QURRUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTloiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvcmF3LXRhYmxlL3Jhdy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4ucmF3LXRhYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC50YWJsZS1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGV4LWNlbGwge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NCQ0JDQjtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGF0Y2gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcblxyXG4gICAgICAgIHJlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ucmF3LXRhYmxlIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucmF3LXRhYmxlIC50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5yYXctdGFibGUgLmNvbHVtbiB7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYXctdGFibGUgLmluZGV4LWNlbGwge1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJhdy10YWJsZSAuY29udGVudC1jZWxsIGlucHV0LCAucmF3LXRhYmxlIC5jb250ZW50LWNlbGwgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQkNCQ0I7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMXB4O1xufVxuLnJhdy10YWJsZSAuY29sdW1uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmF3LXRhYmxlIC5wYXRjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLnJhdy10YWJsZSAucGF0Y2ggcmVjdCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/overall/raw-table/raw-table.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/edit/annotation-module/overall/raw-table/raw-table.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ColumnAdditionDialogComponent, RawTableComponent */

  /***/
  function srcAppEditAnnotationModuleOverallRawTableRawTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnAdditionDialogComponent", function () {
      return ColumnAdditionDialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RawTableComponent", function () {
      return RawTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _annotation_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../annotation-util */
    "./src/app/edit/annotation-module/annotation-util.ts");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var src_app_d3_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/d3-utils */
    "./src/app/d3-utils.ts");
    /* harmony import */


    var src_app_prediction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/prediction.service */
    "./src/app/prediction.service.ts");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/edit/common/feedback.service */
    "./src/app/edit/common/feedback.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var ColumnAdditionDialogComponent =
    /*#__PURE__*/
    function () {
      function ColumnAdditionDialogComponent(dialogRef, column) {
        _classCallCheck(this, ColumnAdditionDialogComponent);

        this.dialogRef = dialogRef;
        this.column = column;
        this.separatorKeyCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["TAB"]];
      }

      _createClass(ColumnAdditionDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "add",
        value: function add(event) {
          var input = event.input;
          var value = event.value;

          if ((value || '').trim()) {
            this.column.labels.push(value);
          }

          if (input) {
            input.value = '';
          }
        }
      }, {
        key: "remove",
        value: function remove(label) {
          var index = this.column.labels.indexOf(label);
          this.column.labels.splice(index, 1);
        }
      }]);

      return ColumnAdditionDialogComponent;
    }();

    ColumnAdditionDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ColumnAdditionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-column-addition-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./column-addition-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/column-addition-dialog.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])], ColumnAdditionDialogComponent);

    var RawTableComponent =
    /*#__PURE__*/
    function () {
      function RawTableComponent(fb, dialog, edit, predictService, fs, _L) {
        _classCallCheck(this, RawTableComponent);

        this.fb = fb;
        this.dialog = dialog;
        this.edit = edit;
        this.predictService = predictService;
        this.fs = fs;
        this.focusEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outdatedFeedback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columns = [];
        this.marks = [];
        this.rows = [];
        this.allChannelsEncoded = false;
        this.focusedFeedbackKey = '';
        this.dummyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.encodings = ['x-position', 'y-position', 'height', 'width', 'area', 'color', 'none'];
        this.L = _L.rawTable;
      }

      _createClass(RawTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          var specGroup = this.formGroup.get('spec');
          specGroup.get('axis').controls.forEach(function (group, i) {
            var column = {
              title: group.get('title').value,
              path: "axis.".concat(i)
            };

            var targetGroup = _this41.fromPath(specGroup, column.path);

            column.encoding = targetGroup.get('encoding');

            if (group.get('type').value === 'nominal') {
              column['labels'] = group.get('labels').value;
            }

            _this41.columns.push(column);
          });
          specGroup.get('custom').controls.forEach(function (group, i) {
            var column = {
              title: group.get('title').value,
              path: "custom.".concat(i)
            };

            var targetGroup = _this41.fromPath(specGroup, column.path);

            column.encoding = targetGroup.get('encoding');

            if (group.get('type').value === 'nominal') {
              column['labels'] = group.get('markLabels').value;
            }

            _this41.columns.push(column);
          });

          if (this.hasLegend) {
            var column = {
              title: specGroup.get('legend.title').value,
              path: 'legend',
              labels: specGroup.get('legend.labels').value
            };
            var group = specGroup.get(column.path);

            if (group.contains('encoding')) {
              column.encoding = group.get('encoding');
            }

            column['labels'] = group.get('labels').value;
            this.columns.push(column);
          }

          this.marks = this.boxes.filter(function (d) {
            return d.text === null;
          });
          this.rawGroup = this.formGroup.get('raw');
          this.sub = this.fs.feedbackObservable.subscribe(function (feedback) {
            _this41.focusedFeedbackKey = '';
            _this41.focusedFeedback = null;

            if (feedback.taskKey !== _this41.task.key) {
              return;
            }

            var splited = feedback.annotationKey.split('.');
            var lastKey = splited[splited.length - 1];

            if (lastKey === 'encoding') {
              _this41.focusedFeedback = feedback;
              _this41.focusedFeedbackKey = splited.slice(1, splited.length - 1).join('.');
            } else if (splited[0] === 'raw') {
              _this41.focusedFeedback = feedback;

              if (splited[1] === 'other') {
                _this41.focusedFeedbackKey = 'other';
              } else {
                _this41.focusedFeedbackKey = _this41.marks[+splited[1]].key;
              }

              setTimeout(function () {
                _this41.focusEmitter.emit(_this41.focusedFeedbackKey);
              }, 0);
            } else {
              return;
            }
          });
          this.checkEncodedChannels();
          this.initTable();

          if (this.allChannelsEncoded && this.mode === 'revision') {
            this.submitEmitter.emit();
          } else if (this.mode === 'revision') {
            this.outdatedFeedback.emit();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.focusedBoxIndex && this.tableRef) {
            var tableEl = this.tableRef.nativeElement;
            var tableRect = tableEl.getBoundingClientRect();
            var divIndex = this.rows.findIndex(function (d) {
              return d.markKey === changes.focusedBoxIndex.currentValue;
            });

            if (divIndex !== -1) {
              var focusedDiv = d3__WEBPACK_IMPORTED_MODULE_5__["select"](tableEl).selectAll('.focus-box').nodes()[divIndex];

              if (focusedDiv) {
                var focusedRect = focusedDiv.getBoundingClientRect();

                if (focusedRect.top > tableRect.bottom || focusedRect.bottom < tableRect.top) {
                  tableEl.scroll({
                    top: focusedDiv.offsetTop - 100
                  });
                }
              }
            }
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "onSelectEncoding",
        value: function onSelectEncoding(event, column) {
          var target = event.target;
          var targetGroup = this.fromPath(this.formGroup.get('spec'), column.path);
          this.rows.forEach(function (row) {
            row.attrs[column.title] = undefined;
            row.clusterLabels[column.title] = undefined;

            if (row.group.contains(column.title)) {
              row.group.get([column.title]).setValue('');
            }
          });

          if (!targetGroup.contains('encoding')) {
            targetGroup.addControl('encoding', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](target.value));
            column.encoding = targetGroup.get('encoding');
          } else {
            targetGroup.get('encoding').setValue(target.value);
            column.encoding = targetGroup.get('encoding');
          }

          this.checkEncodedChannels();
        }
      }, {
        key: "checkEncodedChannels",
        value: function checkEncodedChannels() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this42 = this;

            var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, column, encoding;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.allChannelsEncoded = this.columns.every(function (column) {
                      var targetGroup = _this42.fromPath(_this42.formGroup.get('spec'), column.path);

                      return targetGroup.contains('encoding');
                    });

                    if (!this.allChannelsEncoded) {
                      _context2.next = 35;
                      break;
                    }

                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context2.prev = 5;
                    _iterator2 = this.columns[Symbol.iterator]();

                  case 7:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context2.next = 21;
                      break;
                    }

                    column = _step2.value;
                    encoding = column.encoding.value;
                    _context2.t0 = encoding;
                    _context2.next = _context2.t0 === 'color' ? 13 : _context2.t0 === 'shape' ? 15 : 17;
                    break;

                  case 13:
                    this.clusterMarksByColor(column);
                    return _context2.abrupt("break", 18);

                  case 15:
                    this.clusterMarksByShape(column);
                    return _context2.abrupt("break", 18);

                  case 17:
                    return _context2.abrupt("break", 18);

                  case 18:
                    _iteratorNormalCompletion2 = true;
                    _context2.next = 7;
                    break;

                  case 21:
                    _context2.next = 27;
                    break;

                  case 23:
                    _context2.prev = 23;
                    _context2.t1 = _context2["catch"](5);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context2.t1;

                  case 27:
                    _context2.prev = 27;
                    _context2.prev = 28;

                    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                      _iterator2["return"]();
                    }

                  case 30:
                    _context2.prev = 30;

                    if (!_didIteratorError2) {
                      _context2.next = 33;
                      break;
                    }

                    throw _iteratorError2;

                  case 33:
                    return _context2.finish(30);

                  case 34:
                    return _context2.finish(27);

                  case 35:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[5, 23, 27, 35], [28,, 30, 34]]);
          }));
        }
      }, {
        key: "clusterMarksByColor",
        value: function clusterMarksByColor(column) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this43 = this;

            var path, k, boxes, _ref3, centers, labels;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    path = this.edit.image.path;

                    if (!(!column.labels || column.labels.length === 0)) {
                      _context3.next = 3;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 3:
                    k = column.labels.length;
                    boxes = this.marks.map(function (d) {
                      return d.pointValues;
                    });
                    _context3.next = 7;
                    return this.predictService.clusterMarks({
                      encoding: 'color',
                      path: path,
                      k: k,
                      boxes: boxes
                    });

                  case 7:
                    _ref3 = _context3.sent;
                    centers = _ref3.centers;
                    labels = _ref3.labels;
                    this.marks.forEach(function (mark, i) {
                      var row = _this43.rows.find(function (d) {
                        return d.markKey === mark.key;
                      });

                      var label = labels[i];
                      row.attrs[column.title] = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_8__["rgb2Hex"])(centers[label]);
                      row.clusterLabels[column.title] = label;
                    });

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "clusterMarksByShape",
        value: function clusterMarksByShape(column) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this44 = this;

            var path, k, boxes, _ref4, centerPatches, labels;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    ;
                    path = this.edit.image.path;
                    k = column.labels.length;
                    boxes = this.marks.map(function (d) {
                      return d.pointValues;
                    });
                    _context4.next = 6;
                    return this.predictService.clusterMarks({
                      encoding: 'shape',
                      path: path,
                      k: k,
                      boxes: boxes
                    });

                  case 6:
                    _ref4 = _context4.sent;
                    centerPatches = _ref4.centerPatches;
                    labels = _ref4.labels;
                    this.marks.forEach(function (mark, i) {
                      var row = _this44.rows.find(function (d) {
                        return d.markKey === mark.key;
                      });

                      var label = labels[i];
                      row.attrs[column.title] = centerPatches[label];
                      row.clusterLabels[column.title] = label;
                    });

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onChangeLabel",
        value: function onChangeLabel(column, row, i) {
          var key = column.title;
          var changedValue = row.group.get([key]).value;
          var targetRow = this.rows.find(function (d, j) {
            return d.group.get([key]).value === changedValue && i !== j;
          });

          if (targetRow) {
            row.attrs[key] = targetRow.attrs[key];
            row.clusterLabels[key] = targetRow.clusterLabels[key];
          }

          this.rows[i] = row;
        }
      }, {
        key: "runPrediction",
        value: function runPrediction() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this45 = this;

            var colorEncodingIndex;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Promise.all(this.columns.map(function (column) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this45, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee5() {
                        var targetGroup;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                targetGroup = this.fromPath(this.formGroup.get('spec'), column.path);

                                if (targetGroup.contains('encoding')) {
                                  _context5.next = 3;
                                  break;
                                }

                                return _context5.abrupt("return");

                              case 3:
                                _context5.next = 5;
                                return this.predict(column, targetGroup.get('encoding').value);

                              case 5:
                                if (targetGroup.contains('labeled') && targetGroup.get('labeled').value) {
                                  this.assignMarkLabels(targetGroup, column);
                                }

                              case 6:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    }));

                  case 2:
                    colorEncodingIndex = this.columns.findIndex(function (column) {
                      var targetGroup = _this45.fromPath(_this45.formGroup.get('spec'), column.path);

                      return targetGroup.contains('encoding') && targetGroup.get('encoding').value === 'color';
                    });

                    if (colorEncodingIndex !== -1) {
                      this.sortByColumn(this.columns[colorEncodingIndex]);
                    }

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "sortByColumn",
        value: function sortByColumn(column) {
          var title = column.title;
          this.rows = this.rows.sort(function (a, b) {
            var aValue = a.group.get([title]).value;
            var bValue = b.group.get([title]).value;
            var aNum = !isNaN(+aValue);
            var bNum = !isNaN(+bValue);

            if (aNum && bNum) {
              return +aValue - +bValue;
            } else {
              return aValue.toLowerCase().localeCompare(bValue.toLowerCase());
            }
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.initTable(true);
          this.checkEncodedChannels();
        }
      }, {
        key: "predict",
        value: function predict(column, encoding) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var targetGroup;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    targetGroup = this.fromPath(this.formGroup.get('spec'), column.path);
                    _context7.t0 = encoding;
                    _context7.next = _context7.t0 === 'width' ? 4 : _context7.t0 === 'height' ? 6 : _context7.t0 === 'x-position' ? 8 : _context7.t0 === 'y-position' ? 10 : _context7.t0 === 'color' ? 12 : _context7.t0 === 'shape' ? 14 : _context7.t0 === 'area' ? 16 : _context7.t0 === 'none' ? 19 : 20;
                    break;

                  case 4:
                    this.predictWidth(targetGroup, column);
                    return _context7.abrupt("break", 21);

                  case 6:
                    this.predictHeight(targetGroup, column);
                    return _context7.abrupt("break", 21);

                  case 8:
                    this.predictPosition(targetGroup, column, 'x');
                    return _context7.abrupt("break", 21);

                  case 10:
                    this.predictPosition(targetGroup, column, 'y');
                    return _context7.abrupt("break", 21);

                  case 12:
                    this.predictByClusterLabels(column);
                    return _context7.abrupt("break", 21);

                  case 14:
                    this.predictByClusterLabels(column);
                    return _context7.abrupt("break", 21);

                  case 16:
                    _context7.next = 18;
                    return this.predictArea(targetGroup, column);

                  case 18:
                    return _context7.abrupt("break", 21);

                  case 19:
                    return _context7.abrupt("break", 21);

                  case 20:
                    return _context7.abrupt("break", 21);

                  case 21:
                    this.submitEmitter.emit();

                  case 22:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "initTable",
        value: function initTable() {
          var _this46 = this;

          var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.rows = [];
          var markIndices = this.marks.map(function (d) {
            return d.key;
          });

          var initCells = function initCells() {
            var _loop2 = function _loop2(i) {
              var group = _this46.fb.group({});

              _this46.columns.forEach(function (column) {
                group.addControl(column.title, _this46.fb.control(''));
              });

              _this46.rawGroup.push(group);
            };

            for (var i = 0; i < markIndices.length; i++) {
              _loop2(i);
            }
          }; // check the raw group is empty


          if (this.rawGroup.length === 0) {
            initCells();
          } else {
            // Check the columns in both second stage
            // and the third stage are same.
            var checkValue = this.rawGroup.controls[0].value;
            var allSameColumns = this.columns.every(function (column) {
              return checkValue[column.title] !== undefined;
            }) && Object.keys(checkValue).length === this.columns.length;
            var anyValueFilled = this.columns.some(function (column) {
              return checkValue[column.title] !== '';
            });
            var sameRowCount = this.rawGroup.length === this.marks.length;

            if (!(allSameColumns && anyValueFilled && sameRowCount) || force) {
              this.rawGroup.clear();
              initCells();
            }
          }

          for (var i = 0; i < markIndices.length; i++) {
            this.rows.push({
              markKey: markIndices[i],
              group: this.rawGroup.controls[i],
              attrs: {},
              clusterLabels: {}
            });
          }
        }
      }, {
        key: "format",
        value: function format(value, pre, unit) {
          var digits = value !== 0 ? Math.log10(Math.abs(value)) : -pre;

          if (unit === 'integer' && pre > 0) {
            value = Math.round(value);
            pre = 0;
          } else if (unit === 'decimal' && pre <= 0) {
            pre = 1;
          }

          var applyPre = digits + 1 + pre;
          return +value.toPrecision(Math.max(applyPre, 1));
        }
      }, {
        key: "predictWidth",
        value: function predictWidth(targetGroup, column) {
          var _this47 = this;

          if (!targetGroup.contains('type') || targetGroup.get('type').value !== 'quantitative' || !targetGroup.contains('valuePerPixel') || !targetGroup.contains('precision') || !targetGroup.contains('unit')) {
            return;
          }

          var imgWidth = this.imgRef.nativeElement.width;
          var valuePerPixel = +targetGroup.get('valuePerPixel').value;
          var pre = +targetGroup.get('precision').value;
          var unit = targetGroup.get('unit').value;
          var centers = this.marks.map(function (d) {
            return d.center[0] * imgWidth;
          });
          var labels = this.boxes.filter(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_LABEL"];
          });
          var minLabel = labels.find(function (label) {
            return label.center[0] === d3__WEBPACK_IMPORTED_MODULE_5__["min"](labels, function (d) {
              return d.center[0];
            });
          });
          var minPos = minLabel.center[0] * imgWidth;
          var minValue = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["extractNumber"])(minLabel.text.value);
          var maxLabel = labels.find(function (label) {
            return label.center[0] === d3__WEBPACK_IMPORTED_MODULE_5__["max"](labels, function (d) {
              return d.center[0];
            });
          });
          var maxPos = maxLabel.center[0] * imgWidth;
          var maxValue = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["extractNumber"])(maxLabel.text.value);
          var positions = [];
          centers.forEach(function (center) {
            var currValue = minValue + (center - minPos) / (maxPos - minPos) * (maxValue - minValue);
            positions.push(currValue);
          });
          var result = this.marks.map(function (d, i) {
            var sign = positions[i] > 0 ? 1 : -1;
            return sign * Math.round(d.width * imgWidth) * valuePerPixel;
          });
          this.rawGroup.controls.forEach(function (control, i) {
            control.get([column.title]).setValue(_this47.format(result[i], pre, unit));
          });
        }
      }, {
        key: "predictHeight",
        value: function predictHeight(targetGroup, column) {
          var _this48 = this;

          if (!targetGroup.contains('type') || targetGroup.get('type').value !== 'quantitative' || !targetGroup.contains('valuePerPixel') || !targetGroup.contains('precision') || !targetGroup.contains('unit')) {
            return;
          }

          var imgHeight = this.imgRef.nativeElement.height;
          var valuePerPixel = +targetGroup.get('valuePerPixel').value;
          var pre = +targetGroup.get('precision').value;
          var unit = targetGroup.get('unit').value;
          var centers = this.marks.map(function (d) {
            return d.center[1] * imgHeight;
          });
          var labels = this.boxes.filter(function (d) {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_LABEL"];
          });
          var minLabel = labels.find(function (label) {
            return label.center[1] === d3__WEBPACK_IMPORTED_MODULE_5__["min"](labels, function (d) {
              return d.center[1];
            });
          });
          var minPos = minLabel.center[1] * imgHeight;
          var minValue = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["extractNumber"])(minLabel.text.value);
          var maxLabel = labels.find(function (label) {
            return label.center[1] === d3__WEBPACK_IMPORTED_MODULE_5__["max"](labels, function (d) {
              return d.center[1];
            });
          });
          var maxPos = maxLabel.center[1] * imgHeight;
          var maxValue = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["extractNumber"])(maxLabel.text.value);
          var positions = [];
          centers.forEach(function (center) {
            var currValue = minValue + (center - minPos) / (maxPos - minPos) * (maxValue - minValue);
            positions.push(currValue);
          });
          var result = this.marks.map(function (d, i) {
            var sign = positions[i] > 0 ? 1 : -1;
            return sign * Math.round(d.height * imgHeight) * valuePerPixel;
          });
          this.rawGroup.controls.forEach(function (control, i) {
            control.get([column.title]).setValue(_this48.format(result[i], pre, unit));
          });
        }
      }, {
        key: "predictPosition",
        value: function predictPosition(targetGroup, column, dir) {
          var _this49 = this;

          var _this$imgRef$nativeEl3 = this.imgRef.nativeElement,
              width = _this$imgRef$nativeEl3.width,
              height = _this$imgRef$nativeEl3.height;
          var mul = dir === 'x' ? width : height;
          var offset = dir === 'x' ? 0 : 1;
          var centers = this.marks.map(function (d) {
            return d.center[offset] * mul;
          });
          var labels = this.boxes.filter(function (d) {
            return d.label.value === (dir === 'x' ? src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_LABEL"] : src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_LABEL"]);
          });

          if (labels.length === 0 || !targetGroup.contains('type')) {
            return;
          }

          var result = [];

          if (targetGroup.get('type').value === 'nominal') {
            centers.forEach(function (center) {
              var minIndex = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_8__["getMinIndex"])(labels, function (label) {
                return Math.abs(label.center[offset] * mul - center);
              });
              result.push(labels[minIndex].text.value);
            });
          } else {
            var pre = +targetGroup.get('precision').value;
            var unit = targetGroup.get('unit').value;
            var minLabel = labels.find(function (label) {
              return label.center[offset] === d3__WEBPACK_IMPORTED_MODULE_5__["min"](labels, function (d) {
                return d.center[offset];
              });
            });
            var minPos = minLabel.center[offset] * mul;
            var minValue = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["extractNumber"])(minLabel.text.value);
            var maxLabel = labels.find(function (label) {
              return label.center[offset] === d3__WEBPACK_IMPORTED_MODULE_5__["max"](labels, function (d) {
                return d.center[offset];
              });
            });
            var maxPos = maxLabel.center[offset] * mul;
            var maxValue = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["extractNumber"])(maxLabel.text.value);
            centers.forEach(function (center) {
              var currValue = minValue + (center - minPos) / (maxPos - minPos) * (maxValue - minValue);
              result.push(_this49.format(currValue, pre, unit));
            });
          }

          this.rawGroup.controls.forEach(function (control, i) {
            control.get([column.title]).setValue(result[i]);
          });
        }
      }, {
        key: "predictArea",
        value: function predictArea(targetGroup, column) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var boxes, path, body, areas, sumOfAreas, ratios, unit;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    boxes = this.marks.map(function (d) {
                      return d.pointValues;
                    });
                    path = this.edit.image.path;

                    if (!(boxes.length === 0 || !targetGroup.contains('type') || targetGroup.get('type').value !== 'quantitative')) {
                      _context8.next = 4;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 4:
                    body = {
                      path: path,
                      boxes: boxes
                    };
                    _context8.next = 7;
                    return this.predictService.predictAreas(body);

                  case 7:
                    areas = _context8.sent;
                    sumOfAreas = d3__WEBPACK_IMPORTED_MODULE_5__["sum"](areas);
                    ratios = areas.map(function (area) {
                      return area / sumOfAreas;
                    }).map(function (ratio) {
                      return ratio.toFixed(3);
                    });
                    unit = targetGroup.get('unit').value;
                    this.rawGroup.controls.forEach(function (control, i) {
                      var value = unit === 'integer' ? Math.round(+ratios[i] * 100).toString() : ratios[i];
                      control.get([column.title]).setValue(value);
                    });

                  case 12:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "assignMarkLabels",
        value: function assignMarkLabels(targetGroup, column) {
          var _this50 = this;

          var targetMarkLabels = targetGroup.get('markLabels').value;
          var markLabelBoxes = this.boxes.filter(function (d) {
            return d.isText && d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"];
          }).filter(function (d) {
            return targetMarkLabels.findIndex(function (label) {
              return label === d.text.value;
            }) !== -1;
          });
          markLabelBoxes.forEach(function (box) {
            var value = box.text.value;

            var targetIndex = _this50.findNearestBoxIndex(box, targetGroup);

            _this50.rows[targetIndex].group.get([column.title]).setValue(value);
          });
        }
      }, {
        key: "findNearestBoxIndex",
        value: function findNearestBoxIndex(queryBox, targetGroup) {
          var _this51 = this;

          var axisDir = targetGroup.contains('dir') ? targetGroup.get('dir').value : 'none'; // First, find the marks which contains the target mark label

          var innerRows = this.rows.filter(function (row) {
            var mark = _this51.marks.find(function (m) {
              return m.key === row.markKey;
            });

            var _mark$pointValues = _slicedToArray(mark.pointValues, 4),
                x0 = _mark$pointValues[0],
                y0 = _mark$pointValues[1],
                x1 = _mark$pointValues[2],
                y1 = _mark$pointValues[3];

            return queryBox.center[0] >= x0 && queryBox.center[0] <= x1 && queryBox.center[1] >= y0 && queryBox.center[1] <= y1;
          });
          var rowsForSearch = innerRows.length > 0 ? innerRows : this.rows;
          var minRow = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_8__["getMinElem"])(rowsForSearch, function (row) {
            var mark = _this51.marks.find(function (m) {
              return m.key === row.markKey;
            });

            var _queryBox$pointValues = _slicedToArray(queryBox.pointValues, 4),
                qx0 = _queryBox$pointValues[0],
                qy0 = _queryBox$pointValues[1],
                qx1 = _queryBox$pointValues[2],
                qy1 = _queryBox$pointValues[3];

            var _mark$pointValues2 = _slicedToArray(mark.pointValues, 4),
                tx0 = _mark$pointValues2[0],
                ty0 = _mark$pointValues2[1],
                tx1 = _mark$pointValues2[2],
                ty1 = _mark$pointValues2[3];

            var qPos;
            var tPos;

            var distBetweenRange = function distBetweenRange(a, b) {
              if (a[0] > b[1]) {
                return a[0] - b[1];
              } else if (b[0] > a[1]) {
                return b[0] - a[1];
              } else {
                return 0;
              }
            };

            switch (axisDir) {
              case 'x':
                qPos = queryBox.center[1];
                tPos = mark.center[1];
                return Math.abs(qPos - tPos);

              case 'y':
                qPos = queryBox.center[0];
                tPos = mark.center[0];
                return Math.abs(qPos - tPos);

              default:
                var xDist = distBetweenRange([qx0, qx1], [tx0, tx1]);
                var yDist = distBetweenRange([qy0, qy1], [ty0, ty1]);

                if (xDist > 0 || yDist > 0) {
                  return Math.pow(xDist, 2) + Math.pow(yDist, 2) + 1000000;
                } else {
                  // If the distance between boxes is zero,
                  // use a euclidian distance between the centers.
                  var _queryBox$center = _slicedToArray(queryBox.center, 2),
                      qcx = _queryBox$center[0],
                      qcy = _queryBox$center[1];

                  var _mark$center = _slicedToArray(mark.center, 2),
                      tcx = _mark$center[0],
                      tcy = _mark$center[1];

                  return Math.pow(qcx - tcx, 2) + Math.pow(qcy - tcy, 2);
                }

            }
          });
          return this.rows.findIndex(function (row) {
            return row.markKey === minRow.markKey;
          });
        }
      }, {
        key: "predictByClusterLabels",
        value: function predictByClusterLabels(column) {
          var _this52 = this;

          var key = column.title;
          var definedPairs = this.marks.map(function (mark, i) {
            var group = _this52.rawGroup.at(i);

            return {
              value: group.get([key]).value,
              label: _this52.rows.find(function (d) {
                return d.markKey === mark.key;
              }).clusterLabels[key]
            };
          }).filter(function (d) {
            return d.value !== '';
          });

          if (definedPairs.length === 0) {
            return;
          }

          this.rawGroup.controls.forEach(function (control, i) {
            var row = _this52.rows.find(function (d) {
              return d.markKey === _this52.marks[i].key;
            });

            var defined = definedPairs.find(function (d) {
              return d.label === row.clusterLabels[key];
            });
            var value = defined ? defined.value : '';
            control.get([key]).setValue(value);
          });
        }
      }, {
        key: "addColumn",
        value: function addColumn() {
          var _this53 = this;

          var dialogRef = this.dialog.open(ColumnAdditionDialogComponent, {
            width: '500px',
            data: {
              title: 'Unknown Column',
              path: "custom",
              labels: []
            }
          });
          dialogRef.afterClosed().subscribe(function (newColumn) {
            var path = "custom-".concat(newColumn.title);

            var specGroup = _this53.formGroup.get('spec');

            newColumn.path = path;
            specGroup.addControl(path, _this53.fb.group({
              title: _this53.fb.control(newColumn.title)
            }));

            if (newColumn.labels && newColumn.labels.length > 0) {
              specGroup.get(path).addControl('labels', _this53.fb.array(newColumn.labels));
            }

            _this53.columns.push(newColumn);

            _this53.rawGroup.controls.forEach(function (control) {
              control.addControl(newColumn.title, _this53.fb.control(''));
            });
          });
        }
      }, {
        key: "addRow",
        value: function addRow() {
          var _this54 = this;

          var group = this.fb.group({});
          this.columns.forEach(function (column) {
            group.addControl(column.title, _this54.fb.control(''));
          });
          this.rawGroup.push(group);
          this.rows.push({
            group: group,
            attrs: {},
            clusterLabels: {}
          });
        }
      }, {
        key: "updateFocus",
        value: function updateFocus(boxIndex) {
          if (boxIndex) {
            this.focusEmitter.emit(boxIndex);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "fromPath",
        value: function fromPath(group, path) {
          var ret = group;
          path.split('.').map(function (d) {
            return isNaN(+d) ? d : +d;
          }).forEach(function (key) {
            if (isNaN(+key)) {
              ret = ret.get(key.toString());
            } else {
              ret = ret.at(+key);
            }
          });
          return ret;
        }
      }]);

      return RawTableComponent;
    }();

    RawTableComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_10__["EditService"]
      }, {
        type: src_app_prediction_service__WEBPACK_IMPORTED_MODULE_9__["PredictionService"]
      }, {
        type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_11__["FeedbackService"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], RawTableComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], RawTableComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["Overall"])], RawTableComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], RawTableComponent.prototype, "hasLegend", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], RawTableComponent.prototype, "boxes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], RawTableComponent.prototype, "focusedBoxIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RawTableComponent.prototype, "inputType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], RawTableComponent.prototype, "pointRadius", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], RawTableComponent.prototype, "auto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RawTableComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RawTableComponent.prototype, "focusEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RawTableComponent.prototype, "submitEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RawTableComponent.prototype, "outdatedFeedback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], RawTableComponent.prototype, "tableRef", void 0);
    RawTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-raw-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./raw-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/raw-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./raw-table.component.scss */
      "./src/app/edit/annotation-module/overall/raw-table/raw-table.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../edit-module.scss */
      "./src/app/edit/edit-module.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../overall.component.scss */
      "./src/app/edit/annotation-module/overall/overall.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], src_app_edit_service__WEBPACK_IMPORTED_MODULE_10__["EditService"], src_app_prediction_service__WEBPACK_IMPORTED_MODULE_9__["PredictionService"], src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_11__["FeedbackService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__["LocaleService"]])], RawTableComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/regression/regression.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/edit/annotation-module/regression/regression.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleRegressionRegressionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".table {\n  min-height: 150px;\n  max-height: 250px;\n  overflow-y: scroll;\n}\n\n.answer-input {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9yZWdyZXNzaW9uL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFxhbm5vdGF0aW9uLW1vZHVsZVxccmVncmVzc2lvblxccmVncmVzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9yZWdyZXNzaW9uL3JlZ3Jlc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9yZWdyZXNzaW9uL3JlZ3Jlc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmFuc3dlci1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcclxufVxyXG4iLCIudGFibGUge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFuc3dlci1pbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/regression/regression.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/edit/annotation-module/regression/regression.component.ts ***!
    \***************************************************************************/

  /*! exports provided: RegressionComponent */

  /***/
  function srcAppEditAnnotationModuleRegressionRegressionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegressionComponent", function () {
      return RegressionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");

    var RegressionComponent =
    /*#__PURE__*/
    function () {
      function RegressionComponent(edit) {
        _classCallCheck(this, RegressionComponent);

        this.edit = edit;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RegressionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this55 = this;

          this.event.subscribe(function (key) {
            if (key === 'predict' && _this55.edit.autoCompleteSubject.getValue()[_this55.task.key]) {
              _this55.task.applyPrediction(_this55.formGroup);
            }
          });
        }
      }, {
        key: "getControl",
        value: function getControl(key) {
          return this.formGroup.get(this.task.key).get(key);
        }
      }]);

      return RegressionComponent;
    }();

    RegressionComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], RegressionComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Regression"])], RegressionComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], RegressionComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], RegressionComponent.prototype, "spacePressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegressionComponent.prototype, "submitEmitter", void 0);
    RegressionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-regression',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./regression.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/regression/regression.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./regression.component.scss */
      "./src/app/edit/annotation-module/regression/regression.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../edit-module.scss */
      "./src/app/edit/edit-module.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]])], RegressionComponent);
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/text/text.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/edit/annotation-module/text/text.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAnnotationModuleTextTextComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/edit/annotation-module/text/text.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/edit/annotation-module/text/text.component.ts ***!
    \***************************************************************/

  /*! exports provided: TextComponent */

  /***/
  function srcAppEditAnnotationModuleTextTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextComponent", function () {
      return TextComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var _annotation_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../annotation-util */
    "./src/app/edit/annotation-module/annotation-util.ts");

    var TextComponent =
    /*#__PURE__*/
    function () {
      function TextComponent(edit, fb) {
        _classCallCheck(this, TextComponent);

        this.edit = edit;
        this.fb = fb;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusedBoxIndex = null;
        this.autoIncBoxIndex = 0;
        this.boxes = [];
        this.isDrawing = false;
        this.isMerging = false;
      }

      _createClass(TextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this56 = this;

          this.event.subscribe(function (key) {
            _this56.isDrawing = false;
            _this56.isMerging = false;

            if (key === 'predict' && _this56.edit.autoCompleteSubject.getValue()[_this56.task.key]) {
              _this56.task.registerControl(_this56.formGroup, _this56.fb);

              _this56.task.applyPrediction(_this56.formGroup);

              _this56.updateBoxes();

              if (_this56.currIndex === _this56.index) {
                _this56.createEventArea();
              }
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.currIndex || changes.formGroup) {
            this.updateBoxes();

            if (this.currIndex === this.index) {
              this.createEventArea();
              this.autoIncBoxIndex = d3__WEBPACK_IMPORTED_MODULE_4__["max"](this.boxes.map(function (box) {
                return +box.key;
              })) || 0;
              this.focusedBoxIndex = null;
            } else {
              Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeEventArea"])(this);
            }
          }
        }
      }, {
        key: "onKey",
        value: function onKey(event) {
          if (document.activeElement.tagName === 'INPUT') {
            return;
          }

          if (event.key === 'Escape' && this.isMerging) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeMergeLine"])(this);
          }

          if (event.key === 'Escape' && this.isDrawing) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeTempBox"])(this);
          }

          if ((event.key === 'Delete' || event.key === 'd') && this.focusedBoxIndex) {
            this.deleteBox(this.focusedBoxIndex);
          }
        }
      }, {
        key: "deleteBox",
        value: function deleteBox(boxIndex) {
          this.g.select(".rect-".concat(boxIndex)).remove();
          this.g.selectAll(".circle-".concat(boxIndex)).remove();
          this.task.deleteBox(this.formGroup, boxIndex);

          if (boxIndex === this.focusedBoxIndex) {
            this.focusedBoxIndex = null;
          }

          this.updateBoxes();
        }
      }, {
        key: "createEventArea",
        value: function createEventArea() {
          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeEventArea"])(this);
          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["createEventArea"])(this, true);
        }
      }, {
        key: "writeForm",
        value: function writeForm(boxIndex, x, y, width, height) {
          var imgElem = this.imgRef.nativeElement;

          var clamp = function clamp(value, min, max) {
            return Math.min(max, Math.max(min, value));
          };

          var raw = {
            key: boxIndex,
            x0: clamp(x - 10, 0, imgElem.width) / imgElem.width,
            y0: clamp(y - 10, 0, imgElem.height) / imgElem.height,
            x1: clamp(x + width - 10, 0, imgElem.width) / imgElem.width,
            y1: clamp(y + height - 10, 0, imgElem.height) / imgElem.height
          };
          var addNewBox = !this.formGroup.get(this.task.key).get(raw.key);
          this.task.updateBox(this.formGroup, raw);

          if (addNewBox) {
            this.updateBoxes();
          }
        }
      }, {
        key: "addRectEvent",
        value: function addRectEvent(boxIndex, rectS, circleS) {
          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["addRectDragEvent"])(this, boxIndex, rectS, circleS);
          Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["addMergeEvent"])(this, boxIndex, rectS);
        }
      }, {
        key: "updateFocus",
        value: function updateFocus(boxIndex) {
          this.g.selectAll('rect').classed('focused', false);
          this.g.selectAll('circle').classed('focused', false);
          this.g.select(".rect-".concat(boxIndex)).classed('focused', true);
          this.focusedBoxIndex = boxIndex;
        }
      }, {
        key: "updateBoxes",
        value: function updateBoxes() {
          var formGroup = this.formGroup.get(this.task.key);
          this.boxes = Object.entries(formGroup.controls).map(function (entry) {
            var _entry3 = _slicedToArray(entry, 2),
                key = _entry3[0],
                value = _entry3[1];

            return new _annotation_util__WEBPACK_IMPORTED_MODULE_7__["AnnotationBox"](key, value);
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          event.stopPropagation();
        }
      }]);

      return TextComponent;
    }();

    TextComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], TextComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Text"])], TextComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], TextComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TextComponent.prototype, "svgS", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TextComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], TextComponent.prototype, "currIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], TextComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], TextComponent.prototype, "spacePressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TextComponent.prototype, "submitEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TextComponent.prototype, "onKey", null);
    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./text.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/text/text.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./text.component.scss */
      "./src/app/edit/annotation-module/text/text.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../edit-module.scss */
      "./src/app/edit/edit-module.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], TextComponent);
    /***/
  },

  /***/
  "./src/app/edit/common/feedback-mark/feedback-mark.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/edit/common/feedback-mark/feedback-mark.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditCommonFeedbackMarkFeedbackMarkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  height: 24px;\n  width: 24px;\n  border-radius: 12px;\n  background-color: #3f51b5;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\ndiv > div {\n  pointer-events: none;\n}\ndiv.focused {\n  background-color: #339966;\n}\ndiv.focused:hover {\n  background-color: #40bf80;\n}\ndiv:hover {\n  background-color: #606fc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vZmVlZGJhY2stbWFyay9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcY29tbW9uXFxmZWVkYmFjay1tYXJrXFxmZWVkYmFjay1tYXJrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9mZWVkYmFjay1tYXJrL2ZlZWRiYWNrLW1hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0ksb0JBQUE7QUNDUjtBREVJO0VBQ0kseUJBQUE7QUNBUjtBREdJO0VBQ0kseUJBQUE7QUNEUjtBREtBO0VBQ0kseUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvY29tbW9uL2ZlZWRiYWNrLW1hcmsvZmVlZGJhY2stbWFyay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTMsIDEwMik7XHJcbiAgICB9XHJcblxyXG4gICAgJi5mb2N1c2VkOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBiZjgwO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNmZjNztcclxufVxyXG4iLCJkaXYge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYgPiBkaXYge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmRpdi5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTk2Njtcbn1cbmRpdi5mb2N1c2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYmY4MDtcbn1cblxuZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNmZjNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit/common/feedback-mark/feedback-mark.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/edit/common/feedback-mark/feedback-mark.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FeedbackMarkComponent */

  /***/
  function srcAppEditCommonFeedbackMarkFeedbackMarkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackMarkComponent", function () {
      return FeedbackMarkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");

    var FeedbackMarkComponent =
    /*#__PURE__*/
    function () {
      function FeedbackMarkComponent() {
        _classCallCheck(this, FeedbackMarkComponent);

        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FeedbackMarkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.focus.emit(this.feedback);
        }
      }]);

      return FeedbackMarkComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"])], FeedbackMarkComponent.prototype, "feedback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], FeedbackMarkComponent.prototype, "focused", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FeedbackMarkComponent.prototype, "focus", void 0);
    FeedbackMarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedback-mark',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback-mark.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-mark/feedback-mark.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback-mark.component.scss */
      "./src/app/edit/common/feedback-mark/feedback-mark.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FeedbackMarkComponent);
    /***/
  },

  /***/
  "./src/app/edit/common/feedback-modal/feedback-modal.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/edit/common/feedback-modal/feedback-modal.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditCommonFeedbackModalFeedbackModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#feedback-container {\n  position: fixed;\n  min-width: 300px;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  z-index: 1000;\n  color: white;\n}\n\n.close {\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  color: white;\n}\n\nsvg {\n  position: absolute;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vZmVlZGJhY2stbW9kYWwvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXGNvbW1vblxcZmVlZGJhY2stbW9kYWxcXGZlZWRiYWNrLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9mZWVkYmFjay1tb2RhbC9mZWVkYmFjay1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9jb21tb24vZmVlZGJhY2stbW9kYWwvZmVlZGJhY2stbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmVlZGJhY2stY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG59XHJcbiIsIiNmZWVkYmFjay1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdG9wOiAtMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/common/feedback-modal/feedback-modal.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/edit/common/feedback-modal/feedback-modal.component.ts ***!
    \************************************************************************/

  /*! exports provided: FeedbackModalComponent */

  /***/
  function srcAppEditCommonFeedbackModalFeedbackModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackModalComponent", function () {
      return FeedbackModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../feedback.service */
    "./src/app/edit/common/feedback.service.ts");

    var FeedbackModalComponent =
    /*#__PURE__*/
    function () {
      function FeedbackModalComponent(fs, renderer, changeDetector) {
        _classCallCheck(this, FeedbackModalComponent);

        this.fs = fs;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.displayModal = false;
      }

      _createClass(FeedbackModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this57 = this;

          this.sub = this.fs.showObservable.subscribe(function (data) {
            _this57.displayModal = true;
            var left = data.left,
                top = data.top,
                feedback = data.feedback;
            _this57.feedback = feedback;

            _this57.changeDetector.detectChanges();

            var el = _this57.ref.nativeElement;
            var rect = el.getBoundingClientRect();

            _this57.renderer.setStyle(el, 'left', "".concat(left - rect.width, "px"));

            _this57.renderer.setStyle(el, 'top', "".concat(top - rect.height / 2, "px"));
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.displayModal = false;
        }
      }, {
        key: "resolve",
        value: function resolve() {
          this.fs.resolveSubject.next(this.feedback);
          this.close();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }]);

      return FeedbackModalComponent;
    }();

    FeedbackModalComponent.ctorParameters = function () {
      return [{
        type: _feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FeedbackModalComponent.prototype, "ref", void 0);
    FeedbackModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedback-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-modal/feedback-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback-modal.component.scss */
      "./src/app/edit/common/feedback-modal/feedback-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], FeedbackModalComponent);
    /***/
  },

  /***/
  "./src/app/edit/common/feedback.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/edit/common/feedback.service.ts ***!
    \*************************************************/

  /*! exports provided: FeedbackService */

  /***/
  function srcAppEditCommonFeedbackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackService", function () {
      return FeedbackService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FeedbackService =
    /*#__PURE__*/
    function () {
      function FeedbackService() {
        _classCallCheck(this, FeedbackService);

        this.resolveSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.showSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.feedbackSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].dummy());
      }

      _createClass(FeedbackService, [{
        key: "showFeedback",
        value: function showFeedback(left, top, feedback) {
          this.showSubject.next({
            left: left,
            top: top,
            feedback: feedback
          });
        }
      }, {
        key: "resolve",
        value: function resolve() {
          this.resolveSubject.next(this.feedbackSubject.getValue());
          this.feedbackSubject.next(src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].dummy());
        }
      }, {
        key: "resolveTarget",
        value: function resolveTarget(feedback) {
          this.resolveSubject.next(feedback);
          this.feedbackSubject.next(src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].dummy());
        }
      }, {
        key: "resolveObservable",
        get: function get() {
          return this.resolveSubject.asObservable();
        }
      }, {
        key: "showObservable",
        get: function get() {
          return this.showSubject.asObservable();
        }
      }, {
        key: "feedbackObservable",
        get: function get() {
          return this.feedbackSubject.asObservable();
        }
      }]);

      return FeedbackService;
    }();

    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FeedbackService);
    /***/
  },

  /***/
  "./src/app/edit/common/index.ts":
  /*!**************************************!*\
    !*** ./src/app/edit/common/index.ts ***!
    \**************************************/

  /*! exports provided: FeedbackMarkComponent, FeedbackModalComponent, ReviewPanelComponent, VSubTitleComponent */

  /***/
  function srcAppEditCommonIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _feedback_mark_feedback_mark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./feedback-mark/feedback-mark.component */
    "./src/app/edit/common/feedback-mark/feedback-mark.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FeedbackMarkComponent", function () {
      return _feedback_mark_feedback_mark_component__WEBPACK_IMPORTED_MODULE_1__["FeedbackMarkComponent"];
    });
    /* harmony import */


    var _feedback_modal_feedback_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./feedback-modal/feedback-modal.component */
    "./src/app/edit/common/feedback-modal/feedback-modal.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FeedbackModalComponent", function () {
      return _feedback_modal_feedback_modal_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackModalComponent"];
    });
    /* harmony import */


    var _review_panel_review_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./review-panel/review-panel.component */
    "./src/app/edit/common/review-panel/review-panel.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReviewPanelComponent", function () {
      return _review_panel_review_panel_component__WEBPACK_IMPORTED_MODULE_3__["ReviewPanelComponent"];
    });
    /* harmony import */


    var _sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sub-header/sub-header.component */
    "./src/app/edit/common/sub-header/sub-header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VSubTitleComponent", function () {
      return _sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_4__["VSubTitleComponent"];
    });
    /***/

  },

  /***/
  "./src/app/edit/common/resolve-button/resolve-button.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/edit/common/resolve-button/resolve-button.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditCommonResolveButtonResolveButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .resolve-button .mat-stroked-button {\n  height: 24px !important;\n  line-height: 24px !important;\n}\n::ng-deep .resolve-button .mat-stroked-button span {\n  line-height: 24px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vcmVzb2x2ZS1idXR0b24vQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXGNvbW1vblxccmVzb2x2ZS1idXR0b25cXHJlc29sdmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9yZXNvbHZlLWJ1dHRvbi9yZXNvbHZlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7QUNEWjtBREVZO0VBQ0ksNEJBQUE7QUNBaEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2NvbW1vbi9yZXNvbHZlLWJ1dHRvbi9yZXNvbHZlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgICAucmVzb2x2ZS1idXR0b24ge1xyXG4gICAgICAgIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5yZXNvbHZlLWJ1dHRvbiAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnJlc29sdmUtYnV0dG9uIC5tYXQtc3Ryb2tlZC1idXR0b24gc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/common/resolve-button/resolve-button.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/edit/common/resolve-button/resolve-button.component.ts ***!
    \************************************************************************/

  /*! exports provided: ResolveButtonComponent */

  /***/
  function srcAppEditCommonResolveButtonResolveButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResolveButtonComponent", function () {
      return ResolveButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../feedback.service */
    "./src/app/edit/common/feedback.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var ResolveButtonComponent =
    /*#__PURE__*/
    function () {
      function ResolveButtonComponent(fs, L) {
        _classCallCheck(this, ResolveButtonComponent);

        this.fs = fs;
        this.L = L;
      }

      _createClass(ResolveButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResolveButtonComponent;
    }();

    ResolveButtonComponent.ctorParameters = function () {
      return [{
        type: _feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]
      }];
    };

    ResolveButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resolve-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resolve-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/resolve-button/resolve-button.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resolve-button.component.scss */
      "./src/app/edit/common/resolve-button/resolve-button.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])], ResolveButtonComponent);
    /***/
  },

  /***/
  "./src/app/edit/common/review-panel/review-panel.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/edit/common/review-panel/review-panel.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditCommonReviewPanelReviewPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  width: 95% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vcmV2aWV3LXBhbmVsL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFxjb21tb25cXHJldmlldy1wYW5lbFxccmV2aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9yZXZpZXctcGFuZWwvcmV2aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2NvbW1vbi9yZXZpZXctcGFuZWwvcmV2aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/edit/common/review-panel/review-panel.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/edit/common/review-panel/review-panel.component.ts ***!
    \********************************************************************/

  /*! exports provided: ReviewPanelComponent */

  /***/
  function srcAppEditCommonReviewPanelReviewPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewPanelComponent", function () {
      return ReviewPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var ReviewPanelComponent =
    /*#__PURE__*/
    function () {
      function ReviewPanelComponent(_L) {
        _classCallCheck(this, ReviewPanelComponent);

        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = _L.reviewPanel;
      }

      _createClass(ReviewPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.feedbackForms && changes.feedbackForms.currentValue) {
            this.feedbacks = this.feedbackForms.map(function (d) {
              return src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].from(d);
            });
          }
        }
      }, {
        key: "onFeedbackFocused",
        value: function onFeedbackFocused(feedback) {
          this.focus.emit(feedback.key);
        }
      }, {
        key: "equals",
        value: function equals(form) {
          return src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].from(form).key === this.focusedKey;
        }
      }]);

      return ReviewPanelComponent;
    }();

    ReviewPanelComponent.ctorParameters = function () {
      return [{
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ReviewPanelComponent.prototype, "feedbacks", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ReviewPanelComponent.prototype, "feedbackForms", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ReviewPanelComponent.prototype, "focusedKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ReviewPanelComponent.prototype, "focus", void 0);
    ReviewPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/review-panel/review-panel.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-panel.component.scss */
      "./src/app/edit/common/review-panel/review-panel.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])], ReviewPanelComponent);
    /***/
  },

  /***/
  "./src/app/edit/common/stop-propagtion.directive.ts":
  /*!**********************************************************!*\
    !*** ./src/app/edit/common/stop-propagtion.directive.ts ***!
    \**********************************************************/

  /*! exports provided: StopPropagationDirective */

  /***/
  function srcAppEditCommonStopPropagtionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StopPropagationDirective", function () {
      return StopPropagationDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StopPropagationDirective =
    /*#__PURE__*/
    function () {
      function StopPropagationDirective() {
        _classCallCheck(this, StopPropagationDirective);
      }

      _createClass(StopPropagationDirective, [{
        key: "onClick",
        value: function onClick(event) {
          event.stopPropagation();
        }
      }]);

      return StopPropagationDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], StopPropagationDirective.prototype, "onClick", null);
    StopPropagationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appStopPropagation]'
    })], StopPropagationDirective);
    /***/
  },

  /***/
  "./src/app/edit/common/sub-header/sub-header.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/edit/common/sub-header/sub-header.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditCommonSubHeaderSubHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 100% !important;\n}\n\n.sub-header {\n  color: rgba(0, 0, 0, 0.56);\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vc3ViLWhlYWRlci9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcY29tbW9uXFxzdWItaGVhZGVyXFxzdWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9zdWItaGVhZGVyL3N1Yi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2NvbW1vbi9zdWItaGVhZGVyL3N1Yi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Nik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/edit/common/sub-header/sub-header.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/edit/common/sub-header/sub-header.component.ts ***!
    \****************************************************************/

  /*! exports provided: VSubTitleComponent */

  /***/
  function srcAppEditCommonSubHeaderSubHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VSubTitleComponent", function () {
      return VSubTitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VSubTitleComponent =
    /*#__PURE__*/
    function () {
      function VSubTitleComponent() {
        _classCallCheck(this, VSubTitleComponent);
      }

      _createClass(VSubTitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VSubTitleComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VSubTitleComponent.prototype, "title", void 0);
    VSubTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sub-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sub-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/sub-header/sub-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sub-header.component.scss */
      "./src/app/edit/common/sub-header/sub-header.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VSubTitleComponent);
    /***/
  },

  /***/
  "./src/app/edit/demo/demo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/edit/demo/demo.service.ts ***!
    \*******************************************/

  /*! exports provided: DemoService */

  /***/
  function srcAppEditDemoDemoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoService", function () {
      return DemoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/edit-data */
    "./src/app/common/edit-data.ts");
    /* harmony import */


    var _demo_bar_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./demo_bar_data.json */
    "./src/app/edit/demo/demo_bar_data.json");

    var _demo_bar_data_json__WEBPACK_IMPORTED_MODULE_4___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ./demo_bar_data.json */
    "./src/app/edit/demo/demo_bar_data.json", 1);
    /* harmony import */


    var _demo_line_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./demo_line_data.json */
    "./src/app/edit/demo/demo_line_data.json");

    var _demo_line_data_json__WEBPACK_IMPORTED_MODULE_5___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ./demo_line_data.json */
    "./src/app/edit/demo/demo_line_data.json", 1);
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_environments_environment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment.js */
    "./src/environments/environment.js");

    var DemoService =
    /*#__PURE__*/
    function () {
      function DemoService(network) {
        _classCallCheck(this, DemoService);

        this.network = network;
        this.index = 0;
        this.currMode = 'init';
        this.data = [];
        this.init();

        if (src_environments_environment_js__WEBPACK_IMPORTED_MODULE_7__["environment"].chartType === 'bar') {
          this.data = _demo_bar_data_json__WEBPACK_IMPORTED_MODULE_4__;
        } else {
          this.data = _demo_line_data_json__WEBPACK_IMPORTED_MODULE_5__;
        }
      }

      _createClass(DemoService, [{
        key: "init",
        value: function init() {
          this.index = 0;
          this.currMode = 'init';
        }
      }, {
        key: "getAnnotationElem",
        value: function getAnnotationElem() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var paths, path, elem, meta, blob;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.network.getPaths();

                  case 2:
                    paths = _context9.sent;

                    if (!(this.index >= paths.length)) {
                      _context9.next = 7;
                      break;
                    }

                    return _context9.abrupt("return", null);

                  case 7:
                    this.currMode = this.getNextMode();
                    path = paths[this.index];
                    elem = this.data[this.index];
                    meta = {
                      path: path,
                      feedbacks: null,
                      annotation: null
                    };
                    _context9.next = 13;
                    return this.network.getImage(meta.path);

                  case 13:
                    blob = _context9.sent;

                    if (this.currMode === 'revision') {
                      meta.feedbacks = elem.feedbacks.map(function (d) {
                        return new src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_6__["Feedback"](d);
                      });
                      meta.annotation = elem.annotation;
                    }

                    return _context9.abrupt("return", [new src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_3__["AnnotationMeta"](meta), blob]);

                  case 16:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getVerificationElem",
        value: function getVerificationElem() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var paths, path, blob, annotatedMeta;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.network.getPaths();

                  case 2:
                    paths = _context10.sent;

                    if (!(this.index >= paths.length)) {
                      _context10.next = 7;
                      break;
                    }

                    return _context10.abrupt("return", null);

                  case 7:
                    path = paths[this.index];
                    this.currMode = this.getNextMode();
                    _context10.next = 11;
                    return this.network.getImage(path);

                  case 11:
                    blob = _context10.sent;
                    annotatedMeta = new src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_3__["AnnotatedImageData"]({
                      path: path,
                      annotation: this.data[this.index].annotation
                    });
                    return _context10.abrupt("return", [annotatedMeta, blob]);

                  case 14:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getReview",
        value: function getReview(path) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var reviewRaw;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    reviewRaw = {
                      path: path,
                      approved: false,
                      feedbacks: this.data[this.index].feedbacks
                    };
                    return _context11.abrupt("return", new src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_6__["Review"](reviewRaw));

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "getNextMode",
        value: function getNextMode() {
          switch (this.currMode) {
            case 'init':
              return 'annotation';

            case 'annotation':
              return 'verification';

            case 'revision':
              this.index += 1;
              return 'annotation';

            case 'verification':
              return 'revision';
          }
        }
      }]);

      return DemoService;
    }();

    DemoService.ctorParameters = function () {
      return [{
        type: src_app_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]
      }];
    };

    DemoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]])], DemoService);
    /***/
  },

  /***/
  "./src/app/edit/demo/demo_bar_data.json":
  /*!**********************************************!*\
    !*** ./src/app/edit/demo/demo_bar_data.json ***!
    \**********************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, default */

  /***/
  function srcAppEditDemoDemo_bar_dataJson(module) {
    module.exports = JSON.parse("[{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.4\",\"comment\":\"경계를 수정해주세요.\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.encoding\",\"comment\":\"높이가 되어야합니다.\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.unit\",\"comment\":\"소수 단위가 되어야합니다.\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"raw.other\",\"comment\":\"바뀐 인코딩에 맞춰서 Degree값이 모두 바뀌어야 합니다.\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.234,0.293,0.297,0.798],\"label\":\"object\"},{\"bound\":[0.504,0.306,0.567,0.798],\"label\":\"object\"},{\"bound\":[0.433,0.281,0.496,0.798],\"label\":\"object\"},{\"bound\":[0.703,0.293,0.766,0.798],\"label\":\"object\"},{\"bound\":[0.64,0.306,0.703,0.798],\"label\":\"object\"},{\"bound\":[0.297,0.437,0.36,0.798],\"label\":\"object\"},{\"bound\":[0.567,0.241,0.63,0.798],\"label\":\"object\"},{\"bound\":[0.369,0.229,0.433,0.798],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.396,0.163,0.606,0.204],\"label\":\"title\",\"text\":\"Bar Degree by Fruit\"},{\"bound\":[0.884,0.204,0.952,0.236],\"label\":\"legend-label\",\"text\":\"Female\"},{\"bound\":[0.884,0.242,0.93,0.274],\"label\":\"legend-label\",\"text\":\"Male\"},{\"bound\":[0.15,0.449,0.174,0.563],\"label\":\"y-axis-title\",\"text\":\"Degree\"},{\"bound\":[0.173,0.258,0.194,0.293],\"label\":\"y-axis-label\",\"text\":\"4\"},{\"bound\":[0.176,0.397,0.19,0.423],\"label\":\"y-axis-label\",\"text\":\"3\"},{\"bound\":[0.176,0.528,0.19,0.557],\"label\":\"y-axis-label\",\"text\":\"2\"},{\"bound\":[0.176,0.659,0.188,0.682],\"label\":\"y-axis-label\",\"text\":\"1\"},{\"bound\":[0.17,0.78,0.196,0.817],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.476,0.921,0.526,0.953],\"label\":\"x-axis-title\",\"text\":\"Fruit\"},{\"bound\":[0.286,0.819,0.308,0.898],\"label\":\"x-axis-label\",\"text\":\"apple\"},{\"bound\":[0.42,0.819,0.442,0.921],\"label\":\"x-axis-label\",\"text\":\"banana\"},{\"bound\":[0.558,0.819,0.58,0.901],\"label\":\"x-axis-label\",\"text\":\"grape\"},{\"bound\":[0.694,0.819,0.716,0.915],\"label\":\"x-axis-label\",\"text\":\"orange\"}],\"spec\":{\"title\":\"Bar Degree by Fruit\",\"axis\":[{\"dir\":\"x\",\"title\":\"Fruit\",\"type\":\"nominal\",\"labels\":[\"apple\",\"banana\",\"grape\",\"orange\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Degree\",\"type\":\"quantitative\",\"labels\":[\"4\",\"3\",\"2\",\"1\",\"0\"],\"precision\":1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.01590806343515539,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"Female\",\"Male\"],\"encoding\":\"color\"}},\"raw\":[{\"Fruit\":\"apple\",\"Degree\":2,\"Unknown Legend\":\"Female\"},{\"Fruit\":\"grape\",\"Degree\":2,\"Unknown Legend\":\"Female\"},{\"Fruit\":\"banana\",\"Degree\":2,\"Unknown Legend\":\"Male\"},{\"Fruit\":\"orange\",\"Degree\":2,\"Unknown Legend\":\"Male\"},{\"Fruit\":\"orange\",\"Degree\":2,\"Unknown Legend\":\"Female\"},{\"Fruit\":\"apple\",\"Degree\":1,\"Unknown Legend\":\"Male\"},{\"Fruit\":\"grape\",\"Degree\":2,\"Unknown Legend\":\"Male\"},{\"Fruit\":\"banana\",\"Degree\":2,\"Unknown Legend\":\"Female\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.16\",\"comment\":\"경계를 확인해주세요.\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"text.other\",\"comment\":\"왼쪽 아래 0에 해당하는 박스 추가\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.other\",\"comment\":\"두 번째 행에 4번째 박스 추가\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.2,0.368,0.327,0.495],\"label\":\"object\"},{\"bound\":[0.431,0.368,0.54,0.495],\"label\":\"object\"},{\"bound\":[0.461,0.503,0.574,0.63],\"label\":\"object\"},{\"bound\":[0.294,0.638,0.324,0.765],\"label\":\"object\"},{\"bound\":[0.391,0.233,0.51,0.362],\"label\":\"object\"},{\"bound\":[0.51,0.233,0.626,0.362],\"label\":\"object\"},{\"bound\":[0.2,0.503,0.284,0.63],\"label\":\"object\"},{\"bound\":[0.327,0.368,0.431,0.495],\"label\":\"object\"},{\"bound\":[0.2,0.638,0.24,0.765],\"label\":\"object\"},{\"bound\":[0.324,0.638,0.427,0.765],\"label\":\"object\"},{\"bound\":[0.294,0.233,0.391,0.362],\"label\":\"object\"},{\"bound\":[0.284,0.503,0.38,0.63],\"label\":\"object\"},{\"bound\":[0.2,0.233,0.294,0.362],\"label\":\"object\"},{\"bound\":[0.626,0.233,0.734,0.362],\"label\":\"object\"},{\"bound\":[0.24,0.638,0.294,0.765],\"label\":\"object\"},{\"bound\":[0.38,0.503,0.461,0.63],\"label\":\"object\"},{\"bound\":[0.647,0.383,0.761,0.495],\"label\":\"object\"},{\"bound\":[0.574,0.503,0.674,0.63],\"label\":\"object\"},{\"bound\":[0.427,0.638,0.51,0.765],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.406,0.163,0.596,0.204],\"label\":\"title\",\"text\":\"Bar Degree by Fruit\"},{\"bound\":[0.882,0.204,0.954,0.236],\"label\":\"legend-label\",\"text\":\"baseball\"},{\"bound\":[0.882,0.239,0.968,0.271],\"label\":\"legend-label\",\"text\":\"basketball\"},{\"bound\":[0.882,0.274,0.946,0.306],\"label\":\"legend-label\",\"text\":\"football\"},{\"bound\":[0.882,0.312,0.94,0.341],\"label\":\"legend-label\",\"text\":\"soccer\"},{\"bound\":[0.882,0.347,0.936,0.379],\"label\":\"legend-label\",\"text\":\"tennis\"},{\"bound\":[0.104,0.472,0.124,0.536],\"label\":\"y-axis-title\",\"text\":\"Fruit\"},{\"bound\":[0.13,0.286,0.192,0.318],\"label\":\"y-axis-label\",\"text\":\"orange\"},{\"bound\":[0.14,0.423,0.19,0.455],\"label\":\"y-axis-label\",\"text\":\"grape\"},{\"bound\":[0.128,0.554,0.19,0.586],\"label\":\"y-axis-label\",\"text\":\"banana\"},{\"bound\":[0.142,0.691,0.192,0.723],\"label\":\"y-axis-label\",\"text\":\"apple\"},{\"bound\":[0.466,0.846,0.534,0.883],\"label\":\"x-axis-title\",\"text\":\"Degree\"},{\"bound\":[0.346,0.822,0.36,0.843],\"label\":\"x-axis-label\",\"text\":\"5\"},{\"bound\":[0.492,0.813,0.516,0.846],\"label\":\"x-axis-label\",\"text\":\"10\"},{\"bound\":[0.644,0.813,0.67,0.846],\"label\":\"x-axis-label\",\"text\":\"15\"}],\"spec\":{\"title\":\"Bar Degree by Fruit\",\"axis\":[{\"dir\":\"x\",\"title\":\"Degree\",\"type\":\"quantitative\",\"labels\":[\"0\",\"5\",\"10\",\"15\"],\"precision\":1,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.04704553413027688,\"encoding\":\"width\"},{\"dir\":\"y\",\"title\":\"Fruit\",\"type\":\"nominal\",\"labels\":[\"orange\",\"grape\",\"banana\",\"apple\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"baseball\",\"basketball\",\"football\",\"soccer\",\"tennis\"],\"encoding\":\"color\"}},\"raw\":[{\"Degree\":4.2,\"Fruit\":\"grape\",\"Unknown Legend\":\"baseball\"},{\"Degree\":3.6,\"Fruit\":\"grape\",\"Unknown Legend\":\"football\"},{\"Degree\":3.7,\"Fruit\":\"banana\",\"Unknown Legend\":\"soccer\"},{\"Degree\":1,\"Fruit\":\"apple\",\"Unknown Legend\":\"football\"},{\"Degree\":3.9,\"Fruit\":\"orange\",\"Unknown Legend\":\"football\"},{\"Degree\":3.8,\"Fruit\":\"orange\",\"Unknown Legend\":\"soccer\"},{\"Degree\":2.8,\"Fruit\":\"banana\",\"Unknown Legend\":\"baseball\"},{\"Degree\":3.4,\"Fruit\":\"grape\",\"Unknown Legend\":\"basketball\"},{\"Degree\":1.3,\"Fruit\":\"apple\",\"Unknown Legend\":\"baseball\"},{\"Degree\":3.4,\"Fruit\":\"apple\",\"Unknown Legend\":\"soccer\"},{\"Degree\":3.2,\"Fruit\":\"orange\",\"Unknown Legend\":\"basketball\"},{\"Degree\":3.2,\"Fruit\":\"banana\",\"Unknown Legend\":\"basketball\"},{\"Degree\":3.1,\"Fruit\":\"orange\",\"Unknown Legend\":\"baseball\"},{\"Degree\":3.6,\"Fruit\":\"orange\",\"Unknown Legend\":\"tennis\"},{\"Degree\":1.8,\"Fruit\":\"apple\",\"Unknown Legend\":\"basketball\"},{\"Degree\":2.7,\"Fruit\":\"banana\",\"Unknown Legend\":\"football\"},{\"Degree\":3.8,\"Fruit\":\"grape\",\"Unknown Legend\":\"tennis\"},{\"Degree\":3.3,\"Fruit\":\"banana\",\"Unknown Legend\":\"tennis\"},{\"Degree\":2.7,\"Fruit\":\"apple\",\"Unknown Legend\":\"tennis\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.1\",\"comment\":\"Change the text\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"text.17\",\"comment\":\"Change the text\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"text.6\",\"comment\":\"Change the text\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.labels\",\"comment\":\"Check this value\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.363,0.397,0.456,0.939],\"label\":\"object\"},{\"bound\":[0.467,0.537,0.561,0.939],\"label\":\"object\"},{\"bound\":[0.571,0.579,0.666,0.939],\"label\":\"object\"},{\"bound\":[0.151,0.096,0.246,0.939],\"label\":\"object\"},{\"bound\":[0.257,0.237,0.35,0.939],\"label\":\"object\"},{\"bound\":[0.677,0.697,0.77,0.939],\"label\":\"object\"},{\"bound\":[0.886,0.84,0.98,0.939],\"label\":\"object\"},{\"bound\":[0.781,0.758,0.874,0.939],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.016,0.027,0.03,0.046],\"label\":\"y-axis-label\",\"text\":\"45\"},{\"bound\":[0.014,0.124,0.038,0.151],\"label\":\"y-axis-label\",\"text\":\"40K\"},{\"bound\":[0.014,0.228,0.032,0.255],\"label\":\"y-axis-label\",\"text\":\"35\"},{\"bound\":[0.014,0.324,0.031,0.355],\"label\":\"y-axis-label\",\"text\":\"30\"},{\"bound\":[0.014,0.429,0.032,0.456],\"label\":\"y-axis-label\",\"text\":\"25\"},{\"bound\":[0.014,0.527,0.031,0.552],\"label\":\"y-axis-label\",\"text\":\"20\"},{\"bound\":[0.014,0.625,0.032,0.652],\"label\":\"y-axis-label\",\"text\":\"15s\"},{\"bound\":[0.016,0.73,0.03,0.753],\"label\":\"y-axis-label\",\"text\":\"10\"},{\"bound\":[0.02,0.834,0.03,0.853],\"label\":\"y-axis-label\",\"text\":\"5\"},{\"bound\":[0.019,0.928,0.031,0.955],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.182,0.958,0.22,0.988],\"label\":\"x-axis-label\",\"text\":\"Topic2\"},{\"bound\":[0.288,0.958,0.322,0.981],\"label\":\"x-axis-label\",\"text\":\"Topic6\"},{\"bound\":[0.394,0.961,0.426,0.981],\"label\":\"x-axis-label\",\"text\":\"Topic7\"},{\"bound\":[0.498,0.958,0.532,0.988],\"label\":\"x-axis-label\",\"text\":\"Topic1\"},{\"bound\":[0.601,0.955,0.636,0.985],\"label\":\"x-axis-label\",\"text\":\"Topic4\"},{\"bound\":[0.708,0.958,0.742,0.988],\"label\":\"x-axis-label\",\"text\":\"Topic3\"},{\"bound\":[0.812,0.958,0.848,0.985],\"label\":\"x-axis-label\",\"text\":\"Topic8\"},{\"bound\":[0.916,0.958,0.952,0.988],\"label\":\"x-axis-label\",\"text\":\"Topics\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Unknown X Axis\",\"type\":\"nominal\",\"labels\":[\"Topic2\",\"Topic6\",\"Topic7\",\"Topic1\",\"Topic4\",\"Topic3\",\"Topic8\",\"Topics\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Unknown Y Axis\",\"type\":\"quantitative\",\"labels\":[\"45\",\"40K\",\"35\",\"30\",\"25\",\"20\",\"15s\",\"10\",\"5\",\"0\"],\"precision\":1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.1370618667401423,\"encoding\":\"height\"}],\"custom\":[]},\"raw\":[{\"Unknown X Axis\":\"Topic7\",\"Unknown Y Axis\":27},{\"Unknown X Axis\":\"Topic1\",\"Unknown Y Axis\":20},{\"Unknown X Axis\":\"Topic4\",\"Unknown Y Axis\":18},{\"Unknown X Axis\":\"Topic2\",\"Unknown Y Axis\":42},{\"Unknown X Axis\":\"Topic6\",\"Unknown Y Axis\":35},{\"Unknown X Axis\":\"Topic3\",\"Unknown Y Axis\":12},{\"Unknown X Axis\":\"Topics\",\"Unknown Y Axis\":5},{\"Unknown X Axis\":\"Topic8\",\"Unknown Y Axis\":9}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.12\",\"comment\":\"Change the text\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.labels\",\"comment\":\"Check this value\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.222,0.415,0.261,0.867],\"label\":\"object\"},{\"bound\":[0.53,0.498,0.566,0.868],\"label\":\"object\"},{\"bound\":[0.378,0.448,0.414,0.868],\"label\":\"object\"},{\"bound\":[0.683,0.544,0.722,0.866],\"label\":\"object\"},{\"bound\":[0.338,0.671,0.377,0.869],\"label\":\"object\"},{\"bound\":[0.49,0.741,0.53,0.868],\"label\":\"object\"},{\"bound\":[0.182,0.728,0.222,0.869],\"label\":\"object\"},{\"bound\":[0.302,0.222,0.339,0.868],\"label\":\"object\"},{\"bound\":[0.607,0.443,0.646,0.868],\"label\":\"object\"},{\"bound\":[0.648,0.771,0.684,0.87],\"label\":\"object\"},{\"bound\":[0.455,0.351,0.491,0.867],\"label\":\"object\"},{\"bound\":[0.147,0.253,0.183,0.867],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.028,0.032,0.976,0.115],\"label\":\"title\",\"text\":\"Cigarette Production, Exports, and Domestic Consumption U.S. 1990-2007\"},{\"bound\":[0.799,0.429,0.903,0.458],\"label\":\"legend-label\",\"text\":\"Production\"},{\"bound\":[0.796,0.455,0.865,0.49],\"label\":\"legend-label\",\"text\":\"Export\"},{\"bound\":[0.796,0.49,0.974,0.522],\"label\":\"legend-label\",\"text\":\"Total Consumption\"},{\"bound\":[0.014,0.426,0.035,0.619],\"label\":\"y-axis-title\",\"text\":\"Billion (Pieces)\"},{\"bound\":[0.038,0.16,0.097,0.192],\"label\":\"y-axis-label\",\"text\":\"800.0\"},{\"bound\":[0.038,0.247,0.097,0.279],\"label\":\"y-axis-label\",\"text\":\"700.0\"},{\"bound\":[0.038,0.333,0.097,0.365],\"label\":\"y-axis-label\",\"text\":\"600.0\"},{\"bound\":[0.038,0.42,0.097,0.452],\"label\":\"y-axis-label\",\"text\":\"500.0\"},{\"bound\":[0.038,0.506,0.097,0.538],\"label\":\"y-axis-label\",\"text\":\"400.0\"},{\"bound\":[0.038,0.593,0.097,0.625],\"label\":\"y-axis-label\",\"text\":\"300.0\"},{\"bound\":[0.038,0.679,0.097,0.712],\"label\":\"y-axis-label\",\"text\":\"200.0\"},{\"bound\":[0.035,0.766,0.097,0.798],\"label\":\"y-axis-label\",\"text\":\"-100.0\"},{\"bound\":[0.062,0.859,0.097,0.885],\"label\":\"y-axis-label\",\"text\":\"0.0\"},{\"bound\":[0.175,0.888,0.23,0.917],\"label\":\"x-axis-label\",\"text\":\"1990\"},{\"bound\":[0.332,0.891,0.384,0.917],\"label\":\"x-axis-label\",\"text\":\"1995\"},{\"bound\":[0.486,0.891,0.538,0.917],\"label\":\"x-axis-label\",\"text\":\"2000\"},{\"bound\":[0.64,0.891,0.692,0.917],\"label\":\"x-axis-label\",\"text\":\"2005\"}],\"spec\":{\"title\":\"Cigarette Production, Exports, and Domestic Consumption U.S. 1990-2007\",\"axis\":[{\"dir\":\"x\",\"title\":\"Years\",\"type\":\"nominal\",\"labels\":[\"1990\",\"1995\",\"2000\",\"2005\"],\"precision\":1,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.046233050367179916,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Billion (Pieces)\",\"type\":\"quantitative\",\"labels\":[\"800.0\",\"700.0\",\"600.0\",\"500.0\",\"400.0\",\"300.0\",\"200.0\",\"-100.0\",\"0.0\"],\"precision\":-1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":2.2138470580626075,\"encoding\":\"height\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"Production\",\"Export\",\"Total Consumption\"],\"encoding\":\"color\"}},\"raw\":[{\"Years\":\"1990\",\"Billion (Pieces)\":520,\"Unknown Legend\":\"Total Consumption\"},{\"Years\":\"2000\",\"Billion (Pieces)\":430,\"Unknown Legend\":\"Total Consumption\"},{\"Years\":\"1995\",\"Billion (Pieces)\":480,\"Unknown Legend\":\"Total Consumption\"},{\"Years\":\"2005\",\"Billion (Pieces)\":370,\"Unknown Legend\":\"Total Consumption\"},{\"Years\":\"1995\",\"Billion (Pieces)\":230,\"Unknown Legend\":\"Export\"},{\"Years\":\"2000\",\"Billion (Pieces)\":150,\"Unknown Legend\":\"Export\"},{\"Years\":\"1990\",\"Billion (Pieces)\":160,\"Unknown Legend\":\"Export\"},{\"Years\":\"1995\",\"Billion (Pieces)\":740,\"Unknown Legend\":\"Production\"},{\"Years\":\"2005\",\"Billion (Pieces)\":490,\"Unknown Legend\":\"Production\"},{\"Years\":\"2005\",\"Billion (Pieces)\":110,\"Unknown Legend\":\"Export\"},{\"Years\":\"2000\",\"Billion (Pieces)\":590,\"Unknown Legend\":\"Production\"},{\"Years\":\"1990\",\"Billion (Pieces)\":700,\"Unknown Legend\":\"Production\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"raw.4\",\"comment\":\"South -> West\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.101,0.08,0.303,0.186],\"label\":\"object\"},{\"bound\":[0.303,0.08,0.584,0.186],\"label\":\"object\"},{\"bound\":[0.584,0.08,0.731,0.186],\"label\":\"object\"},{\"bound\":[0.731,0.08,0.966,0.186],\"label\":\"object\"},{\"bound\":[0.807,0.292,0.966,0.398],\"label\":\"object\"},{\"bound\":[0.597,0.292,0.806,0.398],\"label\":\"object\"},{\"bound\":[0.377,0.292,0.597,0.398],\"label\":\"object\"},{\"bound\":[0.101,0.292,0.377,0.398],\"label\":\"object\"},{\"bound\":[0.101,0.504,0.304,0.61],\"label\":\"object\"},{\"bound\":[0.304,0.504,0.427,0.61],\"label\":\"object\"},{\"bound\":[0.427,0.504,0.61,0.61],\"label\":\"object\"},{\"bound\":[0.61,0.504,0.966,0.61],\"label\":\"object\"},{\"bound\":[0.711,0.716,0.966,0.822],\"label\":\"object\"},{\"bound\":[0.509,0.716,0.711,0.822],\"label\":\"object\"},{\"bound\":[0.407,0.716,0.509,0.822],\"label\":\"object\"},{\"bound\":[0.101,0.716,0.407,0.822],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.334,0.956,0.392,0.989],\"label\":\"legend-label\",\"text\":\"North\"},{\"bound\":[0.43,0.956,0.476,0.989],\"label\":\"legend-label\",\"text\":\"East\"},{\"bound\":[0.512,0.956,0.572,0.989],\"label\":\"legend-label\",\"text\":\"South\"},{\"bound\":[0.612,0.956,0.662,0.989],\"label\":\"legend-label\",\"text\":\"West\"},{\"bound\":[0.018,0.118,0.08,0.151],\"label\":\"y-axis-label\",\"text\":\"brown\"},{\"bound\":[0.024,0.33,0.08,0.36],\"label\":\"y-axis-label\",\"text\":\"black\"},{\"bound\":[0.034,0.547,0.08,0.577],\"label\":\"y-axis-label\",\"text\":\"gray\"},{\"bound\":[0.042,0.753,0.08,0.783],\"label\":\"y-axis-label\",\"text\":\"red\"},{\"bound\":[0.092,0.878,0.112,0.905],\"label\":\"x-axis-label\",\"text\":\"0\"},{\"bound\":[0.258,0.876,0.292,0.909],\"label\":\"x-axis-label\",\"text\":\"0.2\"},{\"bound\":[0.43,0.876,0.466,0.909],\"label\":\"x-axis-label\",\"text\":\"0.4\"},{\"bound\":[0.604,0.876,0.638,0.907],\"label\":\"x-axis-label\",\"text\":\"0.6\"},{\"bound\":[0.776,0.876,0.812,0.909],\"label\":\"x-axis-label\",\"text\":\"0.8\"},{\"bound\":[0.959,0.876,0.976,0.908],\"label\":\"x-axis-label\",\"text\":\"1\"},{\"bound\":[0.172,0.118,0.234,0.151],\"label\":\"mark-label\",\"text\":\"0.23%\"},{\"bound\":[0.412,0.118,0.476,0.151],\"label\":\"mark-label\",\"text\":\"0.33%\"},{\"bound\":[0.63,0.118,0.688,0.151],\"label\":\"mark-label\",\"text\":\"0.17%\"},{\"bound\":[0.818,0.118,0.882,0.151],\"label\":\"mark-label\",\"text\":\"0.27%\"},{\"bound\":[0.208,0.33,0.272,0.36],\"label\":\"mark-label\",\"text\":\"0.32%\"},{\"bound\":[0.456,0.33,0.52,0.36],\"label\":\"mark-label\",\"text\":\"0.25%\"},{\"bound\":[0.672,0.33,0.734,0.36],\"label\":\"mark-label\",\"text\":\"0.24%\"},{\"bound\":[0.856,0.33,0.918,0.36],\"label\":\"mark-label\",\"text\":\"0.18%\"},{\"bound\":[0.758,0.541,0.82,0.571],\"label\":\"mark-label\",\"text\":\"0.41%\"},{\"bound\":[0.172,0.541,0.236,0.574],\"label\":\"mark-label\",\"text\":\"0.24%\"},{\"bound\":[0.336,0.541,0.398,0.574],\"label\":\"mark-label\",\"text\":\"0.14%\"},{\"bound\":[0.49,0.541,0.55,0.574],\"label\":\"mark-label\",\"text\":\"0.21%\"},{\"bound\":[0.224,0.751,0.286,0.781],\"label\":\"mark-label\",\"text\":\"0.35%\"},{\"bound\":[0.428,0.753,0.488,0.783],\"label\":\"mark-label\",\"text\":\"0.12%\"},{\"bound\":[0.58,0.753,0.642,0.783],\"label\":\"mark-label\",\"text\":\"0.24%\"},{\"bound\":[0.808,0.753,0.872,0.786],\"label\":\"mark-label\",\"text\":\"0.29%\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Unknown X Axis\",\"type\":\"quantitative\",\"labels\":[\"0\",\"0.2\",\"0.4\",\"0.6\",\"0.8\",\"1\"],\"precision\":2,\"unit\":\"decimal\",\"labeled\":true,\"markLabels\":[\"0.23%\",\"0.33%\",\"0.17%\",\"0.27%\",\"0.32%\",\"0.25%\",\"0.24%\",\"0.18%\",\"0.41%\",\"0.24%\",\"0.14%\",\"0.21%\",\"0.35%\",\"0.12%\",\"0.24%\",\"0.29%\"],\"valuePerPixel\":0.0016505757739453662,\"encoding\":\"width\"},{\"dir\":\"y\",\"title\":\"Unknown Y Axis\",\"type\":\"nominal\",\"labels\":[\"brown\",\"black\",\"gray\",\"red\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"North\",\"East\",\"South\",\"West\"],\"encoding\":\"color\"}},\"raw\":[{\"Unknown X Axis\":\"0.23%\",\"Unknown Y Axis\":\"brown\",\"Unknown Legend\":\"North\"},{\"Unknown X Axis\":\"0.33%\",\"Unknown Y Axis\":\"brown\",\"Unknown Legend\":\"East\"},{\"Unknown X Axis\":\"0.17%\",\"Unknown Y Axis\":\"brown\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.27%\",\"Unknown Y Axis\":\"brown\",\"Unknown Legend\":\"West\"},{\"Unknown X Axis\":\"0.18%\",\"Unknown Y Axis\":\"black\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.24%\",\"Unknown Y Axis\":\"black\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.25%\",\"Unknown Y Axis\":\"black\",\"Unknown Legend\":\"East\"},{\"Unknown X Axis\":\"0.32%\",\"Unknown Y Axis\":\"black\",\"Unknown Legend\":\"North\"},{\"Unknown X Axis\":\"0.24%\",\"Unknown Y Axis\":\"gray\",\"Unknown Legend\":\"North\"},{\"Unknown X Axis\":\"0.14%\",\"Unknown Y Axis\":\"gray\",\"Unknown Legend\":\"East\"},{\"Unknown X Axis\":\"0.21%\",\"Unknown Y Axis\":\"gray\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.41%\",\"Unknown Y Axis\":\"gray\",\"Unknown Legend\":\"West\"},{\"Unknown X Axis\":\"0.29%\",\"Unknown Y Axis\":\"red\",\"Unknown Legend\":\"West\"},{\"Unknown X Axis\":\"0.24%\",\"Unknown Y Axis\":\"red\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.12%\",\"Unknown Y Axis\":\"red\",\"Unknown Legend\":\"East\"},{\"Unknown X Axis\":\"0.35%\",\"Unknown Y Axis\":\"red\",\"Unknown Legend\":\"North\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.1\",\"comment\":\"Refine the bound\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.other\",\"comment\":\"Add a more box\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.unit\",\"comment\":\"Check this value\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.306,0.158,0.436,0.845],\"label\":\"object\"},{\"bound\":[0.777,0.624,0.908,0.843],\"label\":\"object\"},{\"bound\":[0.463,0.508,0.592,0.845],\"label\":\"object\"},{\"bound\":[0.148,0.117,0.278,0.845],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.176,0.042,0.881,0.081],\"label\":\"title\",\"text\":\"UK 2007 Top 5 Food and Agricultural Commodities\"},{\"bound\":[0.006,0.361,0.039,0.609],\"label\":\"y-axis-title\",\"text\":\"Production (1,000 MT)\"},{\"bound\":[0.063,0.081,0.092,0.155],\"label\":\"y-axis-label\",\"text\":\"14000\"},{\"bound\":[0.063,0.185,0.092,0.26],\"label\":\"y-axis-label\",\"text\":\"12000\"},{\"bound\":[0.063,0.29,0.092,0.364],\"label\":\"y-axis-label\",\"text\":\"10000\"},{\"bound\":[0.063,0.397,0.092,0.463],\"label\":\"y-axis-label\",\"text\":\"8000\"},{\"bound\":[0.063,0.501,0.092,0.567],\"label\":\"y-axis-label\",\"text\":\"6000\"},{\"bound\":[0.063,0.606,0.092,0.672],\"label\":\"y-axis-label\",\"text\":\"4000\"},{\"bound\":[0.063,0.71,0.092,0.776],\"label\":\"y-axis-label\",\"text\":\"2000\"},{\"bound\":[0.065,0.837,0.088,0.857],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.464,0.946,0.592,0.979],\"label\":\"x-axis-title\",\"text\":\"Commodity\"},{\"bound\":[0.164,0.89,0.268,0.919],\"label\":\"x-axis-label\",\"text\":\"Cow milk\"},{\"bound\":[0.33,0.89,0.411,0.919],\"label\":\"x-axis-label\",\"text\":\"Wheat\"},{\"bound\":[0.464,0.89,0.592,0.922],\"label\":\"x-axis-label\",\"text\":\"Sugar beet\"},{\"bound\":[0.634,0.887,0.738,0.919],\"label\":\"x-axis-label\",\"text\":\"Potatoes\"},{\"bound\":[0.806,0.887,0.881,0.922],\"label\":\"x-axis-label\",\"text\":\"Barley\"}],\"spec\":{\"title\":\"UK 2007 Top 5 Food and Agricultural Commodities\",\"axis\":[{\"dir\":\"x\",\"title\":\"Commodity\",\"type\":\"nominal\",\"labels\":[\"Cow milk\",\"Wheat\",\"Sugar beet\",\"Potatoes\",\"Barley\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Production (1,000 MT)\",\"type\":\"quantitative\",\"labels\":[\"14000\",\"12000\",\"10000\",\"8000\",\"6000\",\"4000\",\"2000\",\"0\"],\"precision\":-2,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":32.00831295947728,\"encoding\":\"height\"}],\"custom\":[]},\"raw\":[{\"Commodity\":\"Wheat\",\"Production (1,000 MT)\":13187.4},{\"Commodity\":\"Barley\",\"Production (1,000 MT)\":4193.1},{\"Commodity\":\"Sugar beet\",\"Production (1,000 MT)\":6465.7},{\"Commodity\":\"Cow milk\",\"Production (1,000 MT)\":13987.6}]}}}]");
    /***/
  },

  /***/
  "./src/app/edit/demo/demo_line_data.json":
  /*!***********************************************!*\
    !*** ./src/app/edit/demo/demo_line_data.json ***!
    \***********************************************/

  /*! exports provided: 0, 1, 2, 3, 4, default */

  /***/
  function srcAppEditDemoDemo_line_dataJson(module) {
    module.exports = JSON.parse("[{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.8\",\"comment\":\"Log_(2)(B)\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.0.unit\",\"comment\":\"해당 값을 확인하세요\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"text.0\",\"comment\":\"텍스트를 변경하세요\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.7\",\"comment\":\"해당 박스를 지워주세요\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.681,0.649,0.697,0.686],\"label\":\"object\"},{\"bound\":[0.237,0.768,0.253,0.805],\"label\":\"object\"},{\"bound\":[0.533,0.716,0.549,0.753],\"label\":\"object\"},{\"bound\":[0.385,0.749,0.401,0.786],\"label\":\"object\"},{\"bound\":[0.827,0.542,0.843,0.578],\"label\":\"object\"},{\"bound\":[0.829,0.506,0.844,0.543],\"label\":\"object\"},{\"bound\":[0.977,0.172,0.992,0.208],\"label\":\"object\"},{\"bound\":[0.118,0.183,0.134,0.219],\"label\":\"object\"},{\"bound\":[0.09,0.774,0.105,0.81],\"label\":\"object\"},{\"bound\":[0.977,0.289,0.992,0.325],\"label\":\"object\"},{\"bound\":[0.68,0.666,0.696,0.703],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.14,0.065,0.352,0.167],\"label\":\"legend-label\",\"text\":\"Our Histogran\"},{\"bound\":[0.137,0.159,0.439,0.261],\"label\":\"legend-label\",\"text\":\"Local Histogram [15]\"},{\"bound\":[0.006,0.268,0.041,0.594],\"label\":\"y-axis-title\",\"text\":\"time (ms)\"},{\"bound\":[0.037,0.007,0.1,0.094],\"label\":\"y-axis-label\",\"text\":\"800\"},{\"bound\":[0.037,0.196,0.1,0.283],\"label\":\"y-axis-label\",\"text\":\"600\"},{\"bound\":[0.041,0.384,0.1,0.471],\"label\":\"y-axis-label\",\"text\":\"400\"},{\"bound\":[0.037,0.573,0.1,0.659],\"label\":\"y-axis-label\",\"text\":\"200\"},{\"bound\":[0.073,0.769,0.095,0.834],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.483,0.884,0.601,1],\"label\":\"x-axis-title\",\"text\":\"Log_2(B)\"},{\"bound\":[0.086,0.819,0.107,0.884],\"label\":\"x-axis-label\",\"text\":\"2\"},{\"bound\":[0.232,0.816,0.257,0.884],\"label\":\"x-axis-label\",\"text\":\"3\"},{\"bound\":[0.381,0.819,0.404,0.881],\"label\":\"x-axis-label\",\"text\":\"4 \"},{\"bound\":[0.53,0.818,0.548,0.877],\"label\":\"x-axis-label\",\"text\":\"5\"},{\"bound\":[0.678,0.816,0.7,0.884],\"label\":\"x-axis-label\",\"text\":\"6 \"},{\"bound\":[0.826,0.816,0.846,0.881],\"label\":\"x-axis-label\",\"text\":\"7 \"},{\"bound\":[0.971,0.814,0.994,0.884],\"label\":\"x-axis-label\",\"text\":\"8\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Log_2(B)\",\"type\":\"quantitative\",\"labels\":[\"2\",\"3\",\"4 \",\"5\",\"6 \",\"7 \",\"8\"],\"precision\":1,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.010532601970378787,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"time (ms)\",\"type\":\"quantitative\",\"labels\":[\"800\",\"600\",\"400\",\"200\",\"0\"],\"precision\":-1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":3.8458537174167398,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"Our Histogran\",\"Local Histogram [15]\"],\"encoding\":\"color\"}},\"raw\":[{\"Log_2(B)\":6,\"time (ms)\":140,\"Unknown Legend\":\"Local Histogram [15]\"},{\"Log_2(B)\":3,\"time (ms)\":20,\"Unknown Legend\":\"Local Histogram [15]\"},{\"Log_2(B)\":5,\"time (ms)\":70,\"Unknown Legend\":\"Local Histogram [15]\"},{\"Log_2(B)\":4,\"time (ms)\":40,\"Unknown Legend\":\"Local Histogram [15]\"},{\"Log_2(B)\":7,\"time (ms)\":260,\"Unknown Legend\":\"Our Histogran\"},{\"Log_2(B)\":7,\"time (ms)\":300,\"Unknown Legend\":\"Local Histogram [15]\"},{\"Log_2(B)\":8,\"time (ms)\":650,\"Unknown Legend\":\"Our Histogran\"},{\"Log_2(B)\":2.2,\"time (ms)\":640,\"Unknown Legend\":\"Local Histogram [15]\"},{\"Log_2(B)\":2,\"time (ms)\":10,\"Unknown Legend\":\"Local Histogram [15]\"},{\"Log_2(B)\":8,\"time (ms)\":530,\"Unknown Legend\":\"Our Histogran\"},{\"Log_2(B)\":6,\"time (ms)\":120,\"Unknown Legend\":\"Our Histogran\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.other.0\",\"comment\":\"Y축 0이 없습니다.\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.unit\",\"comment\":\"단위를 확인해주세요\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"raw.other.0\",\"comment\":\"Y축 수정한 단위 적용해주세요\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.23,0.416,0.24,0.43],\"label\":\"object\"},{\"bound\":[0.14,0.618,0.15,0.632],\"label\":\"object\"},{\"bound\":[0.14,0.632,0.15,0.646],\"label\":\"object\"},{\"bound\":[0.229,0.632,0.239,0.646],\"label\":\"object\"},{\"bound\":[0.319,0.563,0.329,0.577],\"label\":\"object\"},{\"bound\":[0.317,0.377,0.327,0.391],\"label\":\"object\"},{\"bound\":[0.411,0.598,0.421,0.611],\"label\":\"object\"},{\"bound\":[0.407,0.331,0.417,0.345],\"label\":\"object\"},{\"bound\":[0.494,0.28,0.504,0.294],\"label\":\"object\"},{\"bound\":[0.494,0.545,0.504,0.559],\"label\":\"object\"},{\"bound\":[0.584,0.168,0.594,0.182],\"label\":\"object\"},{\"bound\":[0.581,0.457,0.591,0.471],\"label\":\"object\"},{\"bound\":[0.679,0.455,0.689,0.469],\"label\":\"object\"},{\"bound\":[0.679,0.17,0.689,0.184],\"label\":\"object\"},{\"bound\":[0.763,0.207,0.773,0.221],\"label\":\"object\"},{\"bound\":[0.763,0.441,0.773,0.455],\"label\":\"object\"},{\"bound\":[0.851,0.391,0.861,0.405],\"label\":\"object\"},{\"bound\":[0.85,0.586,0.86,0.6],\"label\":\"object\"},{\"bound\":[0.94,0.31,0.95,0.324],\"label\":\"object\"},{\"bound\":[0.927,0.609,0.937,0.623],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.174,0.005,0.843,0.069],\"label\":\"title\",\"text\":\"Error Reduction Vs Window Size\"},{\"bound\":[0.191,0.774,0.512,0.834],\"label\":\"legend-label\",\"text\":\"Singer-Specific Training\"},{\"bound\":[0.575,0.774,0.96,0.834],\"label\":\"legend-label\",\"text\":\"Non-Singer-Specific Training\"},{\"bound\":[0.003,0.166,0.043,0.774],\"label\":\"y-axis-title\",\"text\":\"Relative Error Reduction\"},{\"bound\":[0.043,0.069,0.09,0.106],\"label\":\"y-axis-label\",\"text\":\"0.25\"},{\"bound\":[0.057,0.23,0.09,0.263],\"label\":\"y-axis-label\",\"text\":\"0.2\"},{\"bound\":[0.043,0.383,0.09,0.419],\"label\":\"y-axis-label\",\"text\":\"0.15\"},{\"bound\":[0.053,0.539,0.09,0.576],\"label\":\"y-axis-label\",\"text\":\"0.1\"},{\"bound\":[0.043,0.691,0.09,0.728],\"label\":\"y-axis-label\",\"text\":\"0.05\"},{\"bound\":[0.338,0.931,0.762,1],\"label\":\"x-axis-title\",\"text\":\"Window Size (seconds)\"},{\"bound\":[0.124,0.889,0.171,0.926],\"label\":\"x-axis-label\",\"text\":\"0.05\"},{\"bound\":[0.217,0.889,0.254,0.926],\"label\":\"x-axis-label\",\"text\":\"0.1\"},{\"bound\":[0.301,0.889,0.348,0.926],\"label\":\"x-axis-label\",\"text\":\"0.15\"},{\"bound\":[0.395,0.889,0.435,0.926],\"label\":\"x-axis-label\",\"text\":\"0.2\"},{\"bound\":[0.478,0.889,0.528,0.926],\"label\":\"x-axis-label\",\"text\":\"0.25\"},{\"bound\":[0.572,0.889,0.612,0.926],\"label\":\"x-axis-label\",\"text\":\"0.3\"},{\"bound\":[0.659,0.889,0.706,0.926],\"label\":\"x-axis-label\",\"text\":\"0.35\"},{\"bound\":[0.752,0.889,0.789,0.926],\"label\":\"x-axis-label\",\"text\":\"0.4\"},{\"bound\":[0.836,0.889,0.886,0.926],\"label\":\"x-axis-label\",\"text\":\"0.45\"},{\"bound\":[0.93,0.889,0.967,0.926],\"label\":\"x-axis-label\",\"text\":\"0.5\"}],\"spec\":{\"title\":\"Error Reduction Vs Window Size\",\"axis\":[{\"dir\":\"x\",\"title\":\"Window Size (seconds)\",\"type\":\"quantitative\",\"labels\":[\"0.05\",\"0.1\",\"0.15\",\"0.2\",\"0.25\",\"0.3\",\"0.35\",\"0.4\",\"0.45\",\"0.5\"],\"precision\":3,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.000938050101118144,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Relative Error Reduction\",\"type\":\"quantitative\",\"labels\":[\"0.25\",\"0.2\",\"0.15\",\"0.1\",\"0.05\"],\"precision\":3,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.0007393828681532837,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"Singer-Specific Training\",\"Non-Singer-Specific Training\"],\"encoding\":\"color\"}},\"raw\":[{\"Window Size (seconds)\":0.099,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.049,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.049,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.099,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.149,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.148,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.201,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.199,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.247,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.247,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.298,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.296,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.351,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.351,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.399,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.399,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.448,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.447,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"},{\"Window Size (seconds)\":0.498,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Singer-Specific Training\"},{\"Window Size (seconds)\":0.491,\"Relative Error Reduction\":0,\"Unknown Legend\":\"Non-Singer-Specific Training\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.other.0\",\"comment\":\"0을 확인해주세요.\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.108,0.868,0.12,0.883],\"label\":\"object\"},{\"bound\":[0.108,0.913,0.12,0.928],\"label\":\"object\"},{\"bound\":[0.323,0.906,0.335,0.921],\"label\":\"object\"},{\"bound\":[0.321,0.787,0.333,0.801],\"label\":\"object\"},{\"bound\":[0.527,0.682,0.539,0.697],\"label\":\"object\"},{\"bound\":[0.529,0.893,0.541,0.908],\"label\":\"object\"},{\"bound\":[0.723,0.871,0.735,0.886],\"label\":\"object\"},{\"bound\":[0.721,0.7,0.733,0.715],\"label\":\"object\"},{\"bound\":[0.898,0.216,0.91,0.231],\"label\":\"object\"},{\"bound\":[0.898,0.839,0.91,0.854],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.92,0.07,0.956,0.11],\"label\":\"legend-label\",\"text\":\"H^(0)\"},{\"bound\":[0.919,0.11,0.952,0.144],\"label\":\"legend-label\",\"text\":\"H^(1)\"},{\"bound\":[0.012,0.438,0.032,0.547],\"label\":\"y-axis-title\",\"text\":\"Iterations\"},{\"bound\":[0.032,0.04,0.072,0.075],\"label\":\"y-axis-label\",\"text\":\"25000\"},{\"bound\":[0.044,0.208,0.07,0.246],\"label\":\"y-axis-label\",\"text\":\"20000\"},{\"bound\":[0.036,0.398,0.068,0.418],\"label\":\"y-axis-label\",\"text\":\"15000\"},{\"bound\":[0.05,0.566,0.068,0.593],\"label\":\"y-axis-label\",\"text\":\"10000\"},{\"bound\":[0.036,0.746,0.068,0.771],\"label\":\"y-axis-label\",\"text\":\"5000\"},{\"bound\":[0.498,0.97,0.546,1],\"label\":\"x-axis-title\",\"text\":\"SSD\"},{\"bound\":[0.048,0.925,0.1,0.975],\"label\":\"x-axis-label\",\"text\":\"2000\"},{\"bound\":[0.145,0.94,0.201,0.975],\"label\":\"x-axis-label\",\"text\":\"2500\"},{\"bound\":[0.245,0.94,0.301,0.975],\"label\":\"x-axis-label\",\"text\":\"3000\"},{\"bound\":[0.345,0.94,0.402,0.975],\"label\":\"x-axis-label\",\"text\":\"3500\"},{\"bound\":[0.442,0.94,0.502,0.975],\"label\":\"x-axis-label\",\"text\":\"4000\"},{\"bound\":[0.546,0.94,0.602,0.975],\"label\":\"x-axis-label\",\"text\":\"4500\"},{\"bound\":[0.647,0.94,0.699,0.975],\"label\":\"x-axis-label\",\"text\":\"5000\"},{\"bound\":[0.743,0.94,0.799,0.975],\"label\":\"x-axis-label\",\"text\":\"5500\"},{\"bound\":[0.843,0.94,0.9,0.975],\"label\":\"x-axis-label\",\"text\":\"6000\"},{\"bound\":[0.944,0.94,1,0.975],\"label\":\"x-axis-label\",\"text\":\"6500\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"SSD\",\"type\":\"quantitative\",\"labels\":[\"2000\",\"2500\",\"3000\",\"3500\",\"4000\",\"4500\",\"5000\",\"5500\",\"6000\",\"6500\"],\"precision\":-1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":10.043760179906126,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Iterations\",\"type\":\"quantitative\",\"labels\":[\"25000\",\"20000\",\"15000\",\"10000\",\"5000\"],\"precision\":-2,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":70.850070912099,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"H^(0)\",\"H^(1)\"],\"encoding\":\"color\"}},\"raw\":[{\"SSD\":2200,\"Iterations\":1700,\"Unknown Legend\":\"H^(0)\"},{\"SSD\":2200,\"Iterations\":400,\"Unknown Legend\":\"H^(1)\"},{\"SSD\":3280,\"Iterations\":600,\"Unknown Legend\":\"H^(1)\"},{\"SSD\":3270,\"Iterations\":4000,\"Unknown Legend\":\"H^(0)\"},{\"SSD\":4300,\"Iterations\":7000,\"Unknown Legend\":\"H^(0)\"},{\"SSD\":4310,\"Iterations\":900,\"Unknown Legend\":\"H^(1)\"},{\"SSD\":5280,\"Iterations\":1600,\"Unknown Legend\":\"H^(1)\"},{\"SSD\":5270,\"Iterations\":6500,\"Unknown Legend\":\"H^(0)\"},{\"SSD\":6160,\"Iterations\":20300,\"Unknown Legend\":\"H^(0)\"},{\"SSD\":6160,\"Iterations\":2500,\"Unknown Legend\":\"H^(1)\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.other.0\",\"comment\":\"X = 1에 해당하는 부분 마킹\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.encoding\",\"comment\":\"Y 위치 입니다.\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"raw.other.0\",\"comment\":\"인코딩 맞춰서 수정해주세요.\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.228,0.04,0.244,0.05],\"label\":\"object\"},{\"bound\":[0.228,0.68,0.244,0.706],\"label\":\"object\"},{\"bound\":[0.31,0.615,0.325,0.641],\"label\":\"object\"},{\"bound\":[0.312,0.649,0.327,0.675],\"label\":\"object\"},{\"bound\":[0.393,0.606,0.409,0.632],\"label\":\"object\"},{\"bound\":[0.393,0.727,0.409,0.753],\"label\":\"object\"},{\"bound\":[0.475,0.714,0.49,0.74],\"label\":\"object\"},{\"bound\":[0.558,0.723,0.574,0.749],\"label\":\"object\"},{\"bound\":[0.723,0.727,0.739,0.753],\"label\":\"object\"},{\"bound\":[0.807,0.723,0.822,0.749],\"label\":\"object\"},{\"bound\":[0.807,0.753,0.822,0.779],\"label\":\"object\"},{\"bound\":[0.888,0.749,0.904,0.775],\"label\":\"object\"},{\"bound\":[0.31,0.753,0.325,0.779],\"label\":\"object\"},{\"bound\":[0.475,0.753,0.49,0.779],\"label\":\"object\"},{\"bound\":[0.64,0.758,0.655,0.784],\"label\":\"object\"},{\"bound\":[0.165,0.755,0.18,0.781],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.67,0.209,0.848,0.304],\"label\":\"legend-label\",\"text\":\"Detector\"},{\"bound\":[0.67,0.296,0.848,0.383],\"label\":\"legend-label\",\"text\":\"Random\"},{\"bound\":[0.005,0.261,0.056,0.583],\"label\":\"y-axis-title\",\"text\":\"precision\"},{\"bound\":[0.117,0.009,0.147,0.087],\"label\":\"y-axis-label\",\"text\":\"1\"},{\"bound\":[0.081,0.391,0.152,0.461],\"label\":\"y-axis-label\",\"text\":\"0.5\"},{\"bound\":[0.114,0.749,0.147,0.823],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.502,0.93,0.619,1],\"label\":\"x-axis-title\",\"text\":\"recall\"},{\"bound\":[0.14,0.818,0.17,0.883],\"label\":\"x-axis-label\",\"text\":\"0\"},{\"bound\":[0.284,0.814,0.355,0.887],\"label\":\"x-axis-label\",\"text\":\"0.2\"},{\"bound\":[0.449,0.81,0.518,0.887],\"label\":\"x-axis-label\",\"text\":\"0.4\"},{\"bound\":[0.613,0.813,0.68,0.887],\"label\":\"x-axis-label\",\"text\":\"0.6\"},{\"bound\":[0.777,0.812,0.853,0.896],\"label\":\"x-axis-label\",\"text\":\"0.8\"},{\"bound\":[0.959,0.814,0.995,0.883],\"label\":\"x-axis-label\",\"text\":\"1\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"recall\",\"type\":\"quantitative\",\"labels\":[\"0\",\"0.2\",\"0.4\",\"0.6\",\"0.8\",\"1\"],\"precision\":2,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.00308823505212683,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"precision\",\"type\":\"quantitative\",\"labels\":[\"1\",\"0.5\",\"0\"],\"precision\":2,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.005869351107446345,\"encoding\":\"height\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"Detector\",\"Random\"],\"encoding\":\"color\"}},\"raw\":[{\"recall\":0.1,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.1,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.2,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.2,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.3,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.3,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.4,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.5,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.7,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.8,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.8,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.9,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.2,\"precision\":0.04,\"Unknown Legend\":\"Random\"},{\"recall\":0.4,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.6,\"precision\":0.04,\"Unknown Legend\":\"Detector\"},{\"recall\":0.02,\"precision\":0.04,\"Unknown Legend\":\"Detector\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.other.0\",\"comment\":\"Y축 700이 비었습니다.\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"text.28\",\"comment\":\"박스의 경계를 확인하세요\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"raw.0\",\"comment\":\"해당 행을 확인하세요\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.092,0.893,0.117,0.926],\"label\":\"object\"},{\"bound\":[0.114,0.9,0.127,0.917],\"label\":\"object\"},{\"bound\":[0.132,0.898,0.145,0.915],\"label\":\"object\"},{\"bound\":[0.145,0.9,0.158,0.917],\"label\":\"object\"},{\"bound\":[0.205,0.888,0.217,0.904],\"label\":\"object\"},{\"bound\":[0.261,0.854,0.274,0.871],\"label\":\"object\"},{\"bound\":[0.32,0.8,0.333,0.817],\"label\":\"object\"},{\"bound\":[0.378,0.73,0.391,0.746],\"label\":\"object\"},{\"bound\":[0.436,0.609,0.449,0.626],\"label\":\"object\"},{\"bound\":[0.494,0.505,0.507,0.522],\"label\":\"object\"},{\"bound\":[0.554,0.331,0.567,0.347],\"label\":\"object\"},{\"bound\":[0.262,0.897,0.275,0.913],\"label\":\"object\"},{\"bound\":[0.32,0.888,0.333,0.904],\"label\":\"object\"},{\"bound\":[0.378,0.873,0.391,0.89],\"label\":\"object\"},{\"bound\":[0.435,0.852,0.448,0.869],\"label\":\"object\"},{\"bound\":[0.494,0.817,0.507,0.834],\"label\":\"object\"},{\"bound\":[0.554,0.784,0.567,0.8],\"label\":\"object\"},{\"bound\":[0.612,0.73,0.625,0.746],\"label\":\"object\"},{\"bound\":[0.67,0.686,0.683,0.703],\"label\":\"object\"},{\"bound\":[0.728,0.62,0.741,0.636],\"label\":\"object\"},{\"bound\":[0.786,0.516,0.799,0.532],\"label\":\"object\"},{\"bound\":[0.844,0.441,0.857,0.457],\"label\":\"object\"},{\"bound\":[0.902,0.295,0.915,0.312],\"label\":\"object\"},{\"bound\":[0.961,0.173,0.974,0.189],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.181,0.037,0.235,0.079],\"label\":\"legend-label\",\"text\":\"LIDE\"},{\"bound\":[0.184,0.083,0.219,0.121],\"label\":\"legend-label\",\"text\":\"BP\"},{\"bound\":[0.003,0.329,0.032,0.617],\"label\":\"y-axis-title\",\"text\":\"Running time (seconds)\"},{\"bound\":[0.039,0.004,0.09,0.037],\"label\":\"y-axis-label\",\"text\":\"1000\"},{\"bound\":[0.048,0.092,0.09,0.125],\"label\":\"y-axis-label\",\"text\":\"900\"},{\"bound\":[0.048,0.179,0.09,0.212],\"label\":\"y-axis-label\",\"text\":\"800\"},{\"bound\":[0.045,0.35,0.09,0.392],\"label\":\"y-axis-label\",\"text\":\"600\"},{\"bound\":[0.045,0.442,0.09,0.483],\"label\":\"y-axis-label\",\"text\":\"500\"},{\"bound\":[0.042,0.533,0.09,0.575],\"label\":\"y-axis-label\",\"text\":\"400\"},{\"bound\":[0.048,0.625,0.09,0.662],\"label\":\"y-axis-label\",\"text\":\"300\"},{\"bound\":[0.045,0.708,0.09,0.75],\"label\":\"y-axis-label\",\"text\":\"200\"},{\"bound\":[0.045,0.8,0.09,0.838],\"label\":\"y-axis-label\",\"text\":\"100\"},{\"bound\":[0.069,0.894,0.089,0.923],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.132,0.912,0.174,0.95],\"label\":\"x-axis-title\",\"text\":\"100\"},{\"bound\":[0.435,0.958,0.616,0.996],\"label\":\"x-axis-title\",\"text\":\"Number of persons\"},{\"bound\":[0.094,0.916,0.113,0.942],\"label\":\"x-axis-label\",\"text\":\"0\"},{\"bound\":[0.186,0.907,0.234,0.949],\"label\":\"x-axis-label\",\"text\":\"200\"},{\"bound\":[0.245,0.917,0.293,0.95],\"label\":\"x-axis-label\",\"text\":\"300\"},{\"bound\":[0.303,0.912,0.347,0.95],\"label\":\"x-axis-label\",\"text\":\"400\"},{\"bound\":[0.362,0.913,0.404,0.948],\"label\":\"x-axis-label\",\"text\":\"500\"},{\"bound\":[0.419,0.911,0.467,0.95],\"label\":\"x-axis-label\",\"text\":\"600\"},{\"bound\":[0.481,0.911,0.52,0.944],\"label\":\"x-axis-label\",\"text\":\"700\"},{\"bound\":[0.535,0.908,0.584,0.95],\"label\":\"x-axis-label\",\"text\":\"800\"},{\"bound\":[0.596,0.913,0.638,0.948],\"label\":\"x-axis-label\",\"text\":\"900\"},{\"bound\":[0.648,0.911,0.705,0.955],\"label\":\"x-axis-label\",\"text\":\"1000\"},{\"bound\":[0.712,0.911,0.763,0.951],\"label\":\"x-axis-label\",\"text\":\"1100\"},{\"bound\":[0.771,0.913,0.821,0.948],\"label\":\"x-axis-label\",\"text\":\"1200\"},{\"bound\":[0.823,0.908,0.884,0.95],\"label\":\"x-axis-label\",\"text\":\"1300\"},{\"bound\":[0.872,0.91,0.942,0.95],\"label\":\"x-axis-label\",\"text\":\"1400\"},{\"bound\":[0.943,0.91,1,0.95],\"label\":\"x-axis-label\",\"text\":\"1500\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Number of persons\",\"type\":\"quantitative\",\"labels\":[\"0\",\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\",\"1000\",\"1100\",\"1200\",\"1300\",\"1400\",\"1500\"],\"precision\":-1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":2.7888944197163332,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Running time (seconds)\",\"type\":\"quantitative\",\"labels\":[\"1000\",\"900\",\"800\",\"700\",\"600\",\"500\",\"400\",\"300\",\"200\",\"100\",\"0\"],\"precision\":-1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":2.3425408843507367,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"LIDE\",\"BP\"],\"encoding\":\"color\"}},\"raw\":[{\"Number of persons\":2,\"Running time (seconds)\":-1,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":30,\"Running time (seconds)\":0,\"Unknown Legend\":\"BP\"},{\"Number of persons\":60,\"Running time (seconds)\":2,\"Unknown Legend\":\"BP\"},{\"Number of persons\":80,\"Running time (seconds)\":0,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":190,\"Running time (seconds)\":10,\"Unknown Legend\":\"BP\"},{\"Number of persons\":280,\"Running time (seconds)\":50,\"Unknown Legend\":\"BP\"},{\"Number of persons\":390,\"Running time (seconds)\":110,\"Unknown Legend\":\"BP\"},{\"Number of persons\":490,\"Running time (seconds)\":190,\"Unknown Legend\":\"BP\"},{\"Number of persons\":590,\"Running time (seconds)\":330,\"Unknown Legend\":\"BP\"},{\"Number of persons\":690,\"Running time (seconds)\":440,\"Unknown Legend\":\"BP\"},{\"Number of persons\":790,\"Running time (seconds)\":640,\"Unknown Legend\":\"BP\"},{\"Number of persons\":290,\"Running time (seconds)\":4,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":390,\"Running time (seconds)\":10,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":490,\"Running time (seconds)\":30,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":580,\"Running time (seconds)\":50,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":690,\"Running time (seconds)\":90,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":790,\"Running time (seconds)\":130,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":890,\"Running time (seconds)\":190,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":990,\"Running time (seconds)\":240,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":1090,\"Running time (seconds)\":320,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":1190,\"Running time (seconds)\":430,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":1290,\"Running time (seconds)\":520,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":1390,\"Running time (seconds)\":680,\"Unknown Legend\":\"LIDE\"},{\"Number of persons\":1490,\"Running time (seconds)\":820,\"Unknown Legend\":\"BP\"}]}}}]");
    /***/
  },

  /***/
  "./src/app/edit/demo/quiz-complete-dialog.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/edit/demo/quiz-complete-dialog.component.ts ***!
    \*************************************************************/

  /*! exports provided: QuizCompleteDialogComponent */

  /***/
  function srcAppEditDemoQuizCompleteDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizCompleteDialogComponent", function () {
      return QuizCompleteDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QuizCompleteDialogComponent =
    /*#__PURE__*/
    function () {
      function QuizCompleteDialogComponent() {
        _classCallCheck(this, QuizCompleteDialogComponent);
      }

      _createClass(QuizCompleteDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuizCompleteDialogComponent;
    }();

    QuizCompleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-complete-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quiz-complete-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/demo/quiz-complete-dialog.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], QuizCompleteDialogComponent);
    /***/
  },

  /***/
  "./src/app/edit/demo/quiz.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/edit/demo/quiz.service.ts ***!
    \*******************************************/

  /*! exports provided: QuizService */

  /***/
  function srcAppEditDemoQuizServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizService", function () {
      return QuizService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/edit-data */
    "./src/app/common/edit-data.ts");
    /* harmony import */


    var src_app_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var _quiz_bar_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./quiz_bar_data.json */
    "./src/app/edit/demo/quiz_bar_data.json");

    var _quiz_bar_data_json__WEBPACK_IMPORTED_MODULE_4___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ./quiz_bar_data.json */
    "./src/app/edit/demo/quiz_bar_data.json", 1);
    /* harmony import */


    var _quiz_line_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quiz_line_data.json */
    "./src/app/edit/demo/quiz_line_data.json");

    var _quiz_line_data_json__WEBPACK_IMPORTED_MODULE_5___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ./quiz_line_data.json */
    "./src/app/edit/demo/quiz_line_data.json", 1);
    /* harmony import */


    var src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/verification-data.js */
    "./src/app/common/verification-data.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/common/task/index.js */
    "./src/app/common/task/index.js");
    /* harmony import */


    var src_environments_environment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment.js */
    "./src/environments/environment.js");

    var QuizService =
    /*#__PURE__*/
    function () {
      function QuizService(network) {
        _classCallCheck(this, QuizService);

        this.network = network;
        this.textIOU = 0.5;
        this._params = {
          bar: {
            iou: 0.8,
            numXLabels: 4,
            numYLabels: 7
          },
          line: {
            iou: 0.3,
            numXLabels: 9,
            numYLabels: 7
          }
        };
        this.chartType = src_environments_environment_js__WEBPACK_IMPORTED_MODULE_9__["environment"].chartType;
        this.data = this.chartType === 'bar' ? new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["VOverallData"]('quiz', _quiz_bar_data_json__WEBPACK_IMPORTED_MODULE_4__) : new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["VOverallData"]('quiz', _quiz_line_data_json__WEBPACK_IMPORTED_MODULE_5__);
      }

      _createClass(QuizService, [{
        key: "getAnnotationElem",
        value: function getAnnotationElem() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var paths, path, blob, meta;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.network.getPaths();

                  case 2:
                    paths = _context12.sent;
                    path = paths[0];
                    _context12.next = 6;
                    return this.network.getImage(path);

                  case 6:
                    blob = _context12.sent;
                    meta = {
                      path: path,
                      feedbacks: [],
                      annotation: null
                    };
                    return _context12.abrupt("return", [new src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_2__["AnnotationMeta"](meta), blob]);

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "grade",
        value: function grade(path, formGroup, config) {
          var _this58 = this;

          var result = {};
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = config.tasks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var task = _step3.value;
              result[task.key] = task.getFormValue(formGroup);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          var submitted = new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["VOverallData"]('key_0', result['key_0']);
          var feedbacks = [];
          var otherIndex = 0;

          if (submitted.marks.length !== this.data.marks.length) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
              taskKey: 'key_0',
              annotationKey: "mark.other.".concat(otherIndex),
              comment: '마크의 수가 맞지 않습니다.'
            }));
            otherIndex += 1;
          }

          submitted.marks.forEach(function (mark, i) {
            var maxIou = d3__WEBPACK_IMPORTED_MODULE_7__["max"](_this58.data.marks, function (d) {
              return _this58.iou(mark.bound, d.bound);
            });

            if (maxIou <= _this58.params.iou) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "mark.".concat(i),
                comment: '박스의 경계를 다시 확인해주세요.'
              }));
            }
          });
          otherIndex = 0;
          var targetSpec = this.data.spec;
          var xLabelIndices = submitted.texts.map(function (d, i) {
            return [i, d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__["KEY_X_AXIS_LABEL"]];
          }).filter(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                _ = _ref6[0],
                check = _ref6[1];

            return check;
          }).map(function (d) {
            return d[0];
          });
          var xTitleIndices = submitted.texts.map(function (d, i) {
            return [i, d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__["KEY_X_AXIS_TITLE"]];
          }).filter(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                _ = _ref8[0],
                check = _ref8[1];

            return check;
          }).map(function (d) {
            return d[0];
          });
          var yLabelIndices = submitted.texts.map(function (d, i) {
            return [i, d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__["KEY_Y_AXIS_LABEL"]];
          }).filter(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2),
                i = _ref10[0],
                check = _ref10[1];

            return check;
          }).map(function (d) {
            return d[0];
          });

          if (xTitleIndices.length === 0) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
              taskKey: 'key_0',
              annotationKey: "text.other.".concat(otherIndex),
              comment: 'X축 제목을 추가해주세요.'
            }));
            otherIndex += 1;
          } else {
            var target = this.data.texts.find(function (d) {
              return d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__["KEY_X_AXIS_TITLE"];
            });
            var index = xTitleIndices[0];
            var title = submitted.texts[index];

            if (title.text !== target.text) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "text.".concat(index),
                comment: 'X축 제목 텍스트를 확인해주세요.'
              }));
            } else if (this.iou(title.bound, target.bound) < this.textIOU) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "text.".concat(index),
                comment: 'X축 제목의 경계를 확인해주세요.'
              }));
            }
          }

          if (xLabelIndices.length !== this.params.numXLabels) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
              taskKey: 'key_0',
              annotationKey: "text.other.".concat(otherIndex),
              comment: 'X축 라벨의 수를 확인해주세요.'
            }));
            otherIndex += 1;
          } else {
            var targetTexts = this.data.texts.filter(function (d) {
              return d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__["KEY_X_AXIS_LABEL"];
            });
            xLabelIndices.forEach(function (index) {
              var text = submitted.texts[index];
              var maxIou = d3__WEBPACK_IMPORTED_MODULE_7__["max"](targetTexts, function (d) {
                return _this58.iou(text.bound, d.bound);
              });
              var ious = targetTexts.map(function (d) {
                return _this58.iou(text.bound, d.bound);
              });
              var maxIndex = ious.indexOf(Math.max.apply(null, ious));

              if (maxIou <= _this58.textIOU) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                  taskKey: 'key_0',
                  annotationKey: "text.".concat(index),
                  comment: '박스의 경계를 확인해주세요.'
                }));
              } else if (targetTexts[maxIndex].text !== text.text) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                  taskKey: 'key_0',
                  annotationKey: "text.".concat(index),
                  comment: '박스의 텍스트를 확인해주세요.'
                }));
              }
            });
          }

          if (yLabelIndices.length !== this.params.numYLabels) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
              taskKey: 'key_0',
              annotationKey: "text.other.".concat(otherIndex),
              comment: 'Y축 라벨의 수를 확인해주세요.'
            }));
            otherIndex += 1;
          } else {
            var _targetTexts = this.data.texts.filter(function (d) {
              return d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__["KEY_Y_AXIS_LABEL"];
            });

            yLabelIndices.forEach(function (index) {
              var text = submitted.texts[index];

              var ious = _targetTexts.map(function (d) {
                return _this58.iou(text.bound, d.bound);
              });

              var maxIndex = ious.indexOf(Math.max.apply(null, ious));
              var maxIou = ious[maxIndex];

              if (maxIou <= _this58.textIOU) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                  taskKey: 'key_0',
                  annotationKey: "text.".concat(index),
                  comment: '박스의 경계를 확인해주세요.'
                }));
              } else if (_targetTexts[maxIndex].text !== text.text) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                  taskKey: 'key_0',
                  annotationKey: "text.".concat(index),
                  comment: '박스의 텍스트를 확인해주세요.'
                }));
              }
            });
          }

          var legendIndices = submitted.texts.map(function (d, i) {
            return [i, d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__["KEY_LEGEND_LABEL"]];
          }).filter(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
                _ = _ref12[0],
                check = _ref12[1];

            return check;
          }).map(function (d) {
            return d[0];
          });

          if (this.chartType === 'line') {
            if (legendIndices.length !== 2) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "text.other.".concat(otherIndex),
                comment: '범례 라벨의 수를 확인해주세요.'
              }));
              otherIndex += 1;
            } else {
              var _targetTexts2 = this.data.texts.filter(function (d) {
                return d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_8__["KEY_LEGEND_LABEL"];
              });

              legendIndices.forEach(function (index) {
                var text = submitted.texts[index];
                var maxIou = d3__WEBPACK_IMPORTED_MODULE_7__["max"](_targetTexts2, function (d) {
                  return _this58.iou(text.bound, d.bound);
                });

                var ious = _targetTexts2.map(function (d) {
                  return _this58.iou(text.bound, d.bound);
                });

                var maxIndex = ious.indexOf(Math.max.apply(null, ious));

                if (maxIou <= _this58.textIOU) {
                  feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: "text.".concat(index),
                    comment: '박스의 경계를 확인해주세요.'
                  }));
                } else if (_targetTexts2[maxIndex].text !== text.text) {
                  feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: "text.".concat(index),
                    comment: '박스의 텍스트를 확인해주세요.'
                  }));
                }
              });
            }
          }

          var checkAxis = function checkAxis(index) {
            var axis = submitted.spec.axes[index];
            var target = _this58.data.spec.axes[index];

            if (axis.title.value !== target.title.value) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "spec.axis.".concat(index, ".title"),
                comment: '축 제목을 확인해주세요.'
              }));
            }

            if (axis.type.value !== target.type.value) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "spec.axis.".concat(index, ".type"),
                comment: '축의 데이터 타입을 확인해주세요.'
              }));
            }

            var labels = axis.labels.value.sort();
            var targetLabels = target.labels.value.sort();
            var notSame = labels.length !== targetLabels.length || labels.some(function (d, i) {
              return i >= targetLabels.length || targetLabels[i].trim() !== d.trim();
            });

            if (notSame) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "spec.axis.".concat(index, ".labels"),
                comment: '축의 라벨들을 확인해주세요.'
              }));
            }

            if (axis.unit.value !== target.unit.value) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "spec.axis.".concat(index, ".unit"),
                comment: '축의 데이터 단위를 다시 확인해주세요.'
              }));
            }

            if (axis.encoding.value !== target.encoding.value) {
              feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: "spec.axis.".concat(index, ".encoding"),
                comment: '축의 인코딩을 다시 확인해주세요.'
              }));
            }
          };

          otherIndex = 0;

          if (submitted.spec.axes.length !== 2) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
              taskKey: 'key_0',
              annotationKey: "spec.axis.other.".concat(otherIndex),
              comment: '축은 X축, Y축 각각 1개씩 있어야 합니다.'
            }));
            otherIndex += 1;
          } else {
            checkAxis(0);
            checkAxis(1);
          }

          otherIndex = 0;
          var rows = submitted.raw.rows;
          var targetRows = this.data.raw.rows;

          if (submitted.spec.axes.length === 2) {
            var xKey = submitted.spec.axes[0].title.value;
            var yKey = submitted.spec.axes[1].title.value;
            var targetXKey = targetSpec.axes[0].title.value;
            var targetYKey = targetSpec.axes[1].title.value;

            if (this.chartType === 'bar') {
              rows.forEach(function (row, i) {
                var x = row.value[xKey];
                var y = row.value[yKey];
                var targetRow = targetRows.find(function (d) {
                  return d.value[targetYKey] === y;
                });

                if (!targetRow) {
                  feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: "raw.".concat(i),
                    comment: '다음 행의 값을 확인해주세요.'
                  }));
                } else if (isNaN(+x) || Math.abs(+targetRow.value[targetXKey] - +x) > 0.2) {
                  feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: "raw.".concat(i),
                    comment: '다음 행의 값을 확인해주세요.'
                  }));
                }
              });
            } else {
              var legendKey = submitted.spec.legend.title.value;
              var targetLegendKey = targetSpec.legend.title.value;
              rows.forEach(function (row, i) {
                var x = row.value[xKey];
                var y = isNaN(+row.value[yKey]) ? 0 : +row.value[yKey];
                var legend = row.value[legendKey];
                var filteredRows = targetRows.filter(function (d) {
                  return d.value[targetXKey] === x;
                }).sort(function (a, b) {
                  var aDist = Math.abs(+a.value[targetYKey] - y);
                  var bDist = Math.abs(+b.value[targetYKey] - y);
                  return aDist - bDist;
                });

                if (filteredRows.length === 0) {
                  feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: "raw.".concat(i),
                    comment: '다음 행의 값을 확인해주세요.'
                  }));
                } else {
                  var targetRow = filteredRows[0];
                  var dist = Math.abs(+targetRow.value[targetYKey] - y);
                  var targetLegend = targetRow.value[targetLegendKey];

                  if (dist > 5 || targetLegend !== legend) {
                    feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Feedback"]({
                      taskKey: 'key_0',
                      annotationKey: "raw.".concat(i),
                      comment: '다음 행의 값을 확인해주세요.'
                    }));
                  }
                }
              });
            }
          }

          this.currReview = new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_6__["Review"]({
            path: path,
            approved: feedbacks.length === 0,
            feedbacks: feedbacks
          });
          return [feedbacks.length === 0, result];
        }
      }, {
        key: "iou",
        value: function iou(a, b) {
          a[2] = Math.max(a[2], a[0]);
          a[3] = Math.max(a[3], a[1]);
          b[2] = Math.max(b[2], b[0]);
          b[3] = Math.max(b[3], b[1]);
          var rightX1 = Math.max(a[0], b[0]);
          var leftX2 = Math.min(a[2], b[2]);
          var topY2 = Math.min(a[3], b[3]);
          var bottomY1 = Math.max(a[1], b[1]);
          var inter = Math.max(leftX2 - rightX1, 0) * Math.max(topY2 - bottomY1, 0);
          var areaA = (a[2] - a[0]) * (a[3] - a[1]);
          var areaB = (b[2] - b[0]) * (b[3] - b[1]);
          return inter / (areaA + areaB - inter);
        }
      }, {
        key: "params",
        get: function get() {
          return this._params[this.chartType];
        }
      }]);

      return QuizService;
    }();

    QuizService.ctorParameters = function () {
      return [{
        type: src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]
      }];
    };

    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]])], QuizService);
    /***/
  },

  /***/
  "./src/app/edit/demo/quiz_bar_data.json":
  /*!**********************************************!*\
    !*** ./src/app/edit/demo/quiz_bar_data.json ***!
    \**********************************************/

  /*! exports provided: marks, texts, spec, raw, default */

  /***/
  function srcAppEditDemoQuiz_bar_dataJson(module) {
    module.exports = JSON.parse("{\"marks\":[{\"bound\":[0.298,0.076,0.761,0.145],\"label\":\"object\"},{\"bound\":[0.3,0.178,0.803,0.245],\"label\":\"object\"},{\"bound\":[0.3,0.288,0.459,0.353],\"label\":\"object\"},{\"bound\":[0.297,0.393,0.512,0.457],\"label\":\"object\"},{\"bound\":[0.3,0.493,0.444,0.554],\"label\":\"object\"},{\"bound\":[0.3,0.592,0.452,0.658],\"label\":\"object\"},{\"bound\":[0.3,0.694,0.471,0.757],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.144,0.082,0.273,0.136],\"label\":\"y-axis-label\",\"text\":\"Media\"},{\"bound\":[0.133,0.183,0.274,0.236],\"label\":\"y-axis-label\",\"text\":\"DMSO\"},{\"bound\":[0.074,0.286,0.277,0.346],\"label\":\"y-axis-label\",\"text\":\"Asbestos\"},{\"bound\":[0.02,0.389,0.28,0.457],\"label\":\"y-axis-label\",\"text\":\"Vulcan (BC)\"},{\"bound\":[0.067,0.49,0.279,0.556],\"label\":\"y-axis-label\",\"text\":\"SWCNT-1\"},{\"bound\":[0.056,0.594,0.279,0.652],\"label\":\"y-axis-label\",\"text\":\"MWCNT-R\"},{\"bound\":[0.058,0.699,0.276,0.75],\"label\":\"y-axis-label\",\"text\":\"MWCNT-N\"},{\"bound\":[0.405,0.913,0.853,0.973],\"label\":\"x-axis-title\",\"text\":\"Relative Cell Viability\"},{\"bound\":[0.262,0.826,0.332,0.879],\"label\":\"x-axis-label\",\"text\":\"0.0\"},{\"bound\":[0.473,0.822,0.547,0.88],\"label\":\"x-axis-label\",\"text\":\"0.5\"},{\"bound\":[0.697,0.827,0.764,0.879],\"label\":\"x-axis-label\",\"text\":\"1.0\"},{\"bound\":[0.912,0.824,0.979,0.879],\"label\":\"x-axis-label\",\"text\":\"1.5\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Relative Cell Viability\",\"type\":\"quantitative\",\"labels\":[\"0.0\",\"0.5\",\"1.0\",\"1.5\"],\"precision\":2,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.003521960657857802,\"encoding\":\"width\"},{\"dir\":\"y\",\"title\":\"Unknown Y Axis\",\"type\":\"nominal\",\"labels\":[\"Media\",\"DMSO\",\"Asbestos\",\"Vulcan (BC)\",\"SWCNT-1\",\"MWCNT-R\",\"MWCNT-N\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"y-position\"}],\"custom\":[]},\"raw\":[{\"Relative Cell Viability\":1.08,\"Unknown Y Axis\":\"Media\"},{\"Relative Cell Viability\":1.17,\"Unknown Y Axis\":\"DMSO\"},{\"Relative Cell Viability\":0.37,\"Unknown Y Axis\":\"Asbestos\"},{\"Relative Cell Viability\":0.5,\"Unknown Y Axis\":\"Vulcan (BC)\"},{\"Relative Cell Viability\":0.33,\"Unknown Y Axis\":\"SWCNT-1\"},{\"Relative Cell Viability\":0.35,\"Unknown Y Axis\":\"MWCNT-R\"},{\"Relative Cell Viability\":0.4,\"Unknown Y Axis\":\"MWCNT-N\"}]}");
    /***/
  },

  /***/
  "./src/app/edit/demo/quiz_line_data.json":
  /*!***********************************************!*\
    !*** ./src/app/edit/demo/quiz_line_data.json ***!
    \***********************************************/

  /*! exports provided: marks, texts, spec, raw, default */

  /***/
  function srcAppEditDemoQuiz_line_dataJson(module) {
    module.exports = JSON.parse("{\"marks\":[{\"bound\":[0.19,0.767,0.2,0.779],\"label\":\"object\"},{\"bound\":[0.188,0.665,0.198,0.677],\"label\":\"object\"},{\"bound\":[0.277,0.755,0.287,0.767],\"label\":\"object\"},{\"bound\":[0.277,0.554,0.287,0.566],\"label\":\"object\"},{\"bound\":[0.367,0.75,0.377,0.761],\"label\":\"object\"},{\"bound\":[0.367,0.536,0.377,0.548],\"label\":\"object\"},{\"bound\":[0.453,0.724,0.463,0.736],\"label\":\"object\"},{\"bound\":[0.453,0.578,0.463,0.59],\"label\":\"object\"},{\"bound\":[0.542,0.606,0.552,0.617],\"label\":\"object\"},{\"bound\":[0.542,0.746,0.552,0.757],\"label\":\"object\"},{\"bound\":[0.63,0.695,0.64,0.707],\"label\":\"object\"},{\"bound\":[0.629,0.689,0.639,0.701],\"label\":\"object\"},{\"bound\":[0.718,0.685,0.728,0.697],\"label\":\"object\"},{\"bound\":[0.718,0.656,0.728,0.668],\"label\":\"object\"},{\"bound\":[0.807,0.645,0.817,0.657],\"label\":\"object\"},{\"bound\":[0.807,0.527,0.817,0.539],\"label\":\"object\"},{\"bound\":[0.895,0.661,0.905,0.673],\"label\":\"object\"},{\"bound\":[0.895,0.11,0.905,0.122],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.198,0.087,0.257,0.118],\"label\":\"legend-label\",\"text\":\"Male\"},{\"bound\":[0.2,0.124,0.277,0.154],\"label\":\"legend-label\",\"text\":\"Female\"},{\"bound\":[0.055,0.043,0.092,0.073],\"label\":\"y-axis-label\",\"text\":\"300\"},{\"bound\":[0.055,0.176,0.093,0.203],\"label\":\"y-axis-label\",\"text\":\"250\"},{\"bound\":[0.053,0.31,0.093,0.335],\"label\":\"y-axis-label\",\"text\":\"200\"},{\"bound\":[0.055,0.442,0.093,0.465],\"label\":\"y-axis-label\",\"text\":\"150\"},{\"bound\":[0.055,0.574,0.093,0.6],\"label\":\"y-axis-label\",\"text\":\"100\"},{\"bound\":[0.065,0.706,0.092,0.73],\"label\":\"y-axis-label\",\"text\":\"50\"},{\"bound\":[0.077,0.84,0.092,0.862],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.49,0.951,0.602,0.982],\"label\":\"x-axis-title\",\"text\":\"Age groups\"},{\"bound\":[0.177,0.913,0.212,0.937],\"label\":\"x-axis-label\",\"text\":\"1-9\"},{\"bound\":[0.255,0.913,0.312,0.941],\"label\":\"x-axis-label\",\"text\":\"10-19\"},{\"bound\":[0.342,0.909,0.4,0.939],\"label\":\"x-axis-label\",\"text\":\"20-29\"},{\"bound\":[0.43,0.911,0.488,0.941],\"label\":\"x-axis-label\",\"text\":\"30-39\"},{\"bound\":[0.517,0.911,0.577,0.941],\"label\":\"x-axis-label\",\"text\":\"40-49\"},{\"bound\":[0.607,0.911,0.665,0.941],\"label\":\"x-axis-label\",\"text\":\"50-59\"},{\"bound\":[0.693,0.911,0.753,0.939],\"label\":\"x-axis-label\",\"text\":\"60-69\"},{\"bound\":[0.782,0.909,0.843,0.941],\"label\":\"x-axis-label\",\"text\":\"70-79\"},{\"bound\":[0.878,0.911,0.92,0.941],\"label\":\"x-axis-label\",\"text\":\"80+\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Age groups\",\"type\":\"nominal\",\"labels\":[\"1-9\",\"10-19\",\"20-29\",\"30-39\",\"40-49\",\"50-59\",\"60-69\",\"70-79\",\"80+\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Incidence (Per 1000 Population)\",\"type\":\"quantitative\",\"labels\":[\"300\",\"250\",\"200\",\"150\",\"100\",\"50\",\"0\"],\"precision\":0,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.7462190828278095,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"Male\",\"Female\"],\"encoding\":\"color\"}},\"raw\":[{\"Age groups\":\"1-9\",\"Incidence (Per 1000 Population)\":30,\"Unknown Legend\":\"Female\"},{\"Age groups\":\"1-9\",\"Incidence (Per 1000 Population)\":68,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"10-19\",\"Incidence (Per 1000 Population)\":34,\"Unknown Legend\":\"Female\"},{\"Age groups\":\"10-19\",\"Incidence (Per 1000 Population)\":110,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"20-29\",\"Incidence (Per 1000 Population)\":36,\"Unknown Legend\":\"Female\"},{\"Age groups\":\"20-29\",\"Incidence (Per 1000 Population)\":117,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"30-39\",\"Incidence (Per 1000 Population)\":46,\"Unknown Legend\":\"Female\"},{\"Age groups\":\"30-39\",\"Incidence (Per 1000 Population)\":101,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"40-49\",\"Incidence (Per 1000 Population)\":91,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"40-49\",\"Incidence (Per 1000 Population)\":38,\"Unknown Legend\":\"Female\"},{\"Age groups\":\"50-59\",\"Incidence (Per 1000 Population)\":57,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"50-59\",\"Incidence (Per 1000 Population)\":59,\"Unknown Legend\":\"Female\"},{\"Age groups\":\"60-69\",\"Incidence (Per 1000 Population)\":61,\"Unknown Legend\":\"Female\"},{\"Age groups\":\"60-69\",\"Incidence (Per 1000 Population)\":72,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"70-79\",\"Incidence (Per 1000 Population)\":76,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"70-79\",\"Incidence (Per 1000 Population)\":120,\"Unknown Legend\":\"Female\"},{\"Age groups\":\"80+\",\"Incidence (Per 1000 Population)\":70,\"Unknown Legend\":\"Male\"},{\"Age groups\":\"80+\",\"Incidence (Per 1000 Population)\":278,\"Unknown Legend\":\"Female\"}]}");
    /***/
  },

  /***/
  "./src/app/edit/edit-module.scss":
  /*!***************************************!*\
    !*** ./src/app/edit/edit-module.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditEditModuleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".validate-feedback {\n  color: #f44336;\n  font-size: 12px;\n}\n\n::ng-deep .handle {\n  cursor: crosshair;\n}\n\n::ng-deep .mark {\n  stroke: red;\n  fill-opacity: 0;\n}\n\n::ng-deep .mark.handle {\n  fill: darkorange;\n  stroke: darkorange;\n  fill-opacity: 1;\n}\n\n::ng-deep .text.focused {\n  stroke: #216141 !important;\n  fill: rgba(51, 153, 102, 0.3) !important;\n}\n\n::ng-deep .text.focused.handle {\n  fill: #339966 !important;\n  stroke: #339966 !important;\n  fill-opacity: 1 !important;\n}\n\n::ng-deep .text {\n  stroke: #3f51b5;\n  fill-opacity: 0;\n}\n\n::ng-deep .text.handle {\n  fill: #4040ff;\n  stroke: #4040ff;\n  fill-opacity: 1;\n}\n\n::ng-deep .mark.focused {\n  stroke: #216141 !important;\n  fill: rgba(51, 153, 102, 0.3) !important;\n}\n\n::ng-deep .mark.focused.handle {\n  fill: #339966 !important;\n  stroke: #339966 !important;\n  fill-opacity: 1 !important;\n}\n\n::ng-deep circle.mark.focused:not(.handle) {\n  stroke-opacity: 0.7 !important;\n}\n\n.w-20 {\n  width: 20% !important;\n}\n\n.w-15 {\n  width: 15% !important;\n}\n\n.w-10 {\n  width: 10% !important;\n}\n\n.focused {\n  background-color: rgba(51, 153, 102, 0.3);\n}\n\n.label-select {\n  padding-left: 5px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #aaa;\n}\n\n.table {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n\n.focus-box {\n  cursor: pointer;\n}\n\n.focus-box:not(.focused):hover {\n  background-color: #EEE;\n}\n\n.focus-box span {\n  pointer-events: none;\n}\n\n.close-button {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcZWRpdC1tb2R1bGUuc2NzcyIsInNyYy9hcHAvZWRpdC9lZGl0LW1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURJSTtFQUNJLGlCQUFBO0FDRFI7O0FESUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBRElRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGWjs7QURNSTtFQUNJLDBCQUFBO0VBQ0Esd0NBQUE7QUNKUjs7QURNUTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQ0paOztBRFFJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNOUjs7QURRUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ05aOztBRFVJO0VBQ0ksMEJBQUE7RUFDQSx3Q0FBQTtBQ1JSOztBRFVRO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDUlo7O0FEWUk7RUFDSSw4QkFBQTtBQ1ZSOztBRGNBO0VBQ0kscUJBQUE7QUNYSjs7QURjQTtFQUNJLHFCQUFBO0FDWEo7O0FEY0E7RUFDSSxxQkFBQTtBQ1hKOztBRGNBO0VBQ0kseUNBQUE7QUNYSjs7QURjQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNYSjs7QURjQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURjQTtFQU1JLGVBQUE7QUNoQko7O0FEWUk7RUFDSSxzQkFBQTtBQ1ZSOztBRGVJO0VBQ0ksb0JBQUE7QUNiUjs7QURpQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDZEoiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQtbW9kdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGUtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcblxyXG4gICAgLmhhbmRsZSB7XHJcbiAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmsge1xyXG4gICAgICAgIHN0cm9rZTogcmVkO1xyXG4gICAgICAgIGZpbGwtb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgJi5oYW5kbGUge1xyXG4gICAgICAgICAgICBmaWxsOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICBzdHJva2U6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQuZm9jdXNlZCB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMjE2MTQxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmlsbDogcmdiYSg1MSwgMTUzLCAxMDIsIDAuMykgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgJi5oYW5kbGUge1xyXG4gICAgICAgICAgICBmaWxsOiByZ2IoNTEsIDE1MywgMTAyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBzdHJva2U6IHJnYig1MSwgMTUzLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgc3Ryb2tlOiAjM2Y1MWI1O1xyXG4gICAgICAgIGZpbGwtb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgJi5oYW5kbGUge1xyXG4gICAgICAgICAgICBmaWxsOiAjNDA0MGZmO1xyXG4gICAgICAgICAgICBzdHJva2U6ICM0MDQwZmY7XHJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmsuZm9jdXNlZCB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMjE2MTQxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmlsbDogcmdiYSg1MSwgMTUzLCAxMDIsIDAuMykgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgJi5oYW5kbGUge1xyXG4gICAgICAgICAgICBmaWxsOiByZ2IoNTEsIDE1MywgMTAyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBzdHJva2U6IHJnYig1MSwgMTUzLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaXJjbGUubWFyay5mb2N1c2VkOm5vdCguaGFuZGxlKSB7XHJcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDAuNyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4udy0yMCB7XHJcbiAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53LTE1IHtcclxuICAgIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnctMTAge1xyXG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9jdXNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKTtcclxufVxyXG5cclxuLmxhYmVsLXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uZm9jdXMtYm94IHtcclxuXHJcbiAgICAmOm5vdCguZm9jdXNlZCk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICB9XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxufVxyXG5cclxuIiwiLnZhbGlkYXRlLWZlZWRiYWNrIHtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOjpuZy1kZWVwIC5oYW5kbGUge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cbjo6bmctZGVlcCAubWFyayB7XG4gIHN0cm9rZTogcmVkO1xuICBmaWxsLW9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLm1hcmsuaGFuZGxlIHtcbiAgZmlsbDogZGFya29yYW5nZTtcbiAgc3Ryb2tlOiBkYXJrb3JhbmdlO1xuICBmaWxsLW9wYWNpdHk6IDE7XG59XG46Om5nLWRlZXAgLnRleHQuZm9jdXNlZCB7XG4gIHN0cm9rZTogIzIxNjE0MSAhaW1wb3J0YW50O1xuICBmaWxsOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50ZXh0LmZvY3VzZWQuaGFuZGxlIHtcbiAgZmlsbDogIzMzOTk2NiAhaW1wb3J0YW50O1xuICBzdHJva2U6ICMzMzk5NjYgIWltcG9ydGFudDtcbiAgZmlsbC1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnRleHQge1xuICBzdHJva2U6ICMzZjUxYjU7XG4gIGZpbGwtb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAudGV4dC5oYW5kbGUge1xuICBmaWxsOiAjNDA0MGZmO1xuICBzdHJva2U6ICM0MDQwZmY7XG4gIGZpbGwtb3BhY2l0eTogMTtcbn1cbjo6bmctZGVlcCAubWFyay5mb2N1c2VkIHtcbiAgc3Ryb2tlOiAjMjE2MTQxICFpbXBvcnRhbnQ7XG4gIGZpbGw6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjMpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hcmsuZm9jdXNlZC5oYW5kbGUge1xuICBmaWxsOiAjMzM5OTY2ICFpbXBvcnRhbnQ7XG4gIHN0cm9rZTogIzMzOTk2NiAhaW1wb3J0YW50O1xuICBmaWxsLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBjaXJjbGUubWFyay5mb2N1c2VkOm5vdCguaGFuZGxlKSB7XG4gIHN0cm9rZS1vcGFjaXR5OiAwLjcgIWltcG9ydGFudDtcbn1cblxuLnctMjAge1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG59XG5cbi53LTE1IHtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xufVxuXG4udy0xMCB7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbn1cblxuLmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKTtcbn1cblxuLmxhYmVsLXNlbGVjdCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xufVxuXG4udGFibGUge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uZm9jdXMtYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvY3VzLWJveDpub3QoLmZvY3VzZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbn1cbi5mb2N1cy1ib3ggc3BhbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit/edit.component.scss":
  /*!******************************************!*\
    !*** ./src/app/edit/edit.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3.selected {\n  display: none;\n}\n\n.right-panel {\n  border-left: 2px solid #aaa;\n  overflow-y: scroll;\n  height: calc(100% - 64px) !important;\n}\n\n.edit-header {\n  background-color: #fafafa;\n  font-size: 1.3rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n#image-zone {\n  background-color: #CCC;\n  overflow: hidden;\n}\n\n#image-zone .desc {\n  font-style: italic;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n\n@media (min-width: 1360px) and (max-width: 1919px) {\n  img {\n    max-width: 500px;\n    max-height: 400px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n}\n\n@media (min-width: 1920px) {\n  img {\n    max-width: 700px;\n    max-height: 600px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n}\n\n::ng-deep circle.handle {\n  cursor: crosshair;\n}\n\n::ng-deep rect.handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n::ng-deep .mat-radio-label-content {\n  font-size: 14px;\n}\n\n.image-region:not(.selected) {\n  display: none;\n}\n\nsvg.move {\n  cursor: move;\n}\n\n.svg-region:not(.selected) {\n  display: none;\n}\n\n#side-nav {\n  border-right: 2px solid #AAA;\n  width: 15% !important;\n}\n\nmat-radio-button {\n  margin: 0 12px;\n}\n\n.validate-feedback {\n  color: #f44336;\n  font-size: 12px;\n}\n\n.form-label {\n  width: 50px;\n}\n\n.submit-section {\n  background-color: white;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VSOztBRE1BO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7T0FBQSxtQkFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VDSk47QUFDRjs7QURRSTtFQUNJLGlCQUFBO0FDTlI7O0FEU0k7RUFDSSxvQkFBQTtFQUFBLFlBQUE7QUNQUjs7QURVSTtFQUNJLGVBQUE7QUNSUjs7QURZQTtFQUNJLGFBQUE7QUNUSjs7QURZQTtFQUNJLFlBQUE7QUNUSjs7QURZQTtFQUNJLGFBQUE7QUNUSjs7QURZQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7QUNUSjs7QURZQTtFQUNJLGNBQUE7QUNUSjs7QURhQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDVko7O0FEYUE7RUFDSSxXQUFBO0FDVko7O0FEYUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzLnNlbGVjdGVkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNhYWE7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVkaXQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcblxyXG4jaW1hZ2Utem9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuZGVzYyB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5pbWFnZS1yZWdpb24ge1xyXG4vLyAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbi8vIH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMzYwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIGNpcmNsZS5oYW5kbGUge1xyXG4gICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3QuaGFuZGxlIHtcclxuICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWFnZS1yZWdpb246bm90KC5zZWxlY3RlZCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuc3ZnLm1vdmUge1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcblxyXG4uc3ZnLXJlZ2lvbjpub3QoLnNlbGVjdGVkKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jc2lkZS1uYXYge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0FBQTtcclxuICAgIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMTJweDtcclxufVxyXG5cclxuXHJcbi52YWxpZGF0ZS1mZWVkYmFjayB7XHJcbiAgICBjb2xvcjogI2Y0NDMzNjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG4iLCJoMy5zZWxlY3RlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yaWdodC1wYW5lbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2FhYTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuI2ltYWdlLXpvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2ltYWdlLXpvbmUgLmRlc2Mge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTM2MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59XG46Om5nLWRlZXAgY2lyY2xlLmhhbmRsZSB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuOjpuZy1kZWVwIHJlY3QuaGFuZGxlIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLXJlZ2lvbjpub3QoLnNlbGVjdGVkKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnN2Zy5tb3ZlIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uc3ZnLXJlZ2lvbjpub3QoLnNlbGVjdGVkKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNzaWRlLW5hdiB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNBQUE7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuXG4udmFsaWRhdGUtZmVlZGJhY2sge1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uc3VibWl0LXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA2MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/edit/edit.component.ts":
  /*!****************************************!*\
    !*** ./src/app/edit/edit.component.ts ***!
    \****************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_edit_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/edit-data */
    "./src/app/common/edit-data.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _d3_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../d3-utils */
    "./src/app/d3-utils.ts");
    /* harmony import */


    var _network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var _demo_demo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./demo/demo.service */
    "./src/app/edit/demo/demo.service.ts");
    /* harmony import */


    var _timer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./timer.service */
    "./src/app/edit/timer.service.ts");
    /* harmony import */


    var _demo_quiz_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./demo/quiz.service */
    "./src/app/edit/demo/quiz.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./demo/quiz-complete-dialog.component */
    "./src/app/edit/demo/quiz-complete-dialog.component.ts");
    /* harmony import */


    var _locale_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../locale.service */
    "./src/app/locale.service.ts");
    /* harmony import */


    var _annotation_module_annotation_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./annotation-module/annotation-util */
    "./src/app/edit/annotation-module/annotation-util.ts");

    var EditComponent =
    /*#__PURE__*/
    function () {
      function EditComponent(edit, fb, network, configService, router, renderer, demo, quiz, timer, dialog, L) {
        _classCallCheck(this, EditComponent);

        this.edit = edit;
        this.fb = fb;
        this.network = network;
        this.configService = configService;
        this.router = router;
        this.renderer = renderer;
        this.demo = demo;
        this.quiz = quiz;
        this.timer = timer;
        this.dialog = dialog;
        this.L = L;
        this.mode = 'verification';
        this.verificationDatas = [];
        this.eventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.spacePressed = false;
        this.dragging = false;
        this.noImagesLeft = false;
        this.onImageLoad = false;
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this59 = this;

          if (!this.configService.userName) {
            this.router.navigate(['/login']);
            return;
          }

          this.svgS = d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgRef.nativeElement);
          this.configService.configObservable.subscribe(function (config) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this59, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee13() {
              var elem, result;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.config = config;
                      this.formGroup = this.initFormGroup(this.config);

                      if (config.service !== 'normal') {
                        this.mode = 'annotation';
                      }

                      _context13.t0 = this.mode;
                      _context13.next = _context13.t0 === 'annotation' ? 6 : _context13.t0 === 'verification' ? 9 : 19;
                      break;

                    case 6:
                      _context13.next = 8;
                      return this.loadNextData();

                    case 8:
                      return _context13.abrupt("break", 20);

                    case 9:
                      _context13.next = 11;
                      return this.network.getVerificationRandomElem();

                    case 11:
                      elem = _context13.sent;
                      _context13.next = 14;
                      return this.parseVerification(elem);

                    case 14:
                      result = _context13.sent;

                      if (result) {
                        _context13.next = 18;
                        break;
                      }

                      _context13.next = 18;
                      return this.loadNextData();

                    case 18:
                      return _context13.abrupt("break", 20);

                    case 19:
                      return _context13.abrupt("break", 20);

                    case 20:
                      this.eventSubject.next('progress');

                    case 21:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          });
          var imgElem = this.imgRef.nativeElement;
          this.edit.removeImage();
          imgElem.addEventListener('load', function () {
            var boundingBox = _this59.imgRef.nativeElement.getBoundingClientRect();

            _this59.initSVG(boundingBox);

            _this59.noImagesLeft = false;
            _this59.onImageLoad = true;

            _this59.timer.start();

            var path = _this59.selectedImage.path;

            _this59.network.getPrediction(path).then(function (predictData) {
              _this59.config.parsePrediction(predictData);

              if (_this59.mode === 'annotation') {
                _this59.eventSubject.next('predict');
              }
            });

            if (_this59.selectedImage.hasPrevAnnotation) {
              var meta = _this59.selectedImage.meta;

              _this59.config.parsePrevAnnotation(_this59.formGroup, meta.annotation, _this59.fb);

              _this59.eventSubject.next('review');
            }
          });
          this.edit.imageSubject.asObservable().subscribe(function (image) {
            _this59.formGroup = _this59.initFormGroup(_this59.config);
            _this59.selectedImage = image;
            var svg = _this59.svgRef.nativeElement;

            _this59.renderer.setStyle(imgElem, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(1, 1, 0, 0));

            _this59.renderer.setStyle(svg, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(1, 1, 0, 0));

            if (!image) {
              _this59.noImagesLeft = !!imgElem.src;
              imgElem.src = '';
              return;
            }

            imgElem.src = image.src;
          });
          this.edit.autoCompleteSubject.asObservable().subscribe(function (_) {
            if (_this59.mode === 'annotation') {
              _this59.eventSubject.next('predict');
            }
          });
        }
      }, {
        key: "submit",
        value: function submit(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var elem, result;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.onImageLoad = false;
                    elem = null;
                    _context14.t0 = this.config.service;
                    _context14.next = _context14.t0 === 'quiz' ? 5 : _context14.t0 === 'demo' ? 7 : 12;
                    break;

                  case 5:
                    this.gradeQuiz();
                    return _context14.abrupt("return");

                  case 7:
                    if (!(this.mode === 'annotation')) {
                      _context14.next = 11;
                      break;
                    }

                    _context14.next = 10;
                    return this.demo.getVerificationElem();

                  case 10:
                    elem = _context14.sent;

                  case 11:
                    return _context14.abrupt("break", 20);

                  case 12:
                    _context14.next = 14;
                    return this.timer.sendResult(this.mode);

                  case 14:
                    _context14.next = 16;
                    return this.network.submit(this.selectedImage, this.formGroup, this.config);

                  case 16:
                    _context14.next = 18;
                    return this.network.getVerificationRandomElem();

                  case 18:
                    elem = _context14.sent;
                    return _context14.abrupt("break", 20);

                  case 20:
                    if (this.config.verification) {
                      _context14.next = 25;
                      break;
                    }

                    _context14.next = 23;
                    return this.loadNextData();

                  case 23:
                    _context14.next = 31;
                    break;

                  case 25:
                    _context14.next = 27;
                    return this.parseVerification(elem);

                  case 27:
                    result = _context14.sent;

                    if (result) {
                      _context14.next = 31;
                      break;
                    }

                    _context14.next = 31;
                    return this.loadNextData();

                  case 31:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "onRemoveImage",
        value: function onRemoveImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var elem, result;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    this.timer.reset();

                    if (this.config.verification) {
                      _context15.next = 6;
                      break;
                    }

                    _context15.next = 4;
                    return this.loadNextData();

                  case 4:
                    _context15.next = 15;
                    break;

                  case 6:
                    _context15.next = 8;
                    return this.network.getVerificationRandomElem();

                  case 8:
                    elem = _context15.sent;
                    _context15.next = 11;
                    return this.parseVerification(elem);

                  case 11:
                    result = _context15.sent;

                    if (result) {
                      _context15.next = 15;
                      break;
                    }

                    _context15.next = 15;
                    return this.loadNextData();

                  case 15:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "onReviewSubmitted",
        value: function onReviewSubmitted() {
          this.onImageLoad = false;

          if (this.config.service === 'normal') {
            this.timer.sendResult(this.mode);
          }

          this.loadNextData();
        }
      }, {
        key: "loadNextData",
        value: function loadNextData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var elem, _elem, _elem2, data, blob;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.network.clearPending();

                  case 2:
                    elem = null;
                    _context16.t0 = this.config.service;
                    _context16.next = _context16.t0 === 'quiz' ? 6 : _context16.t0 === 'demo' ? 10 : 14;
                    break;

                  case 6:
                    _context16.next = 8;
                    return this.quiz.getAnnotationElem();

                  case 8:
                    elem = _context16.sent;
                    return _context16.abrupt("break", 19);

                  case 10:
                    _context16.next = 12;
                    return this.demo.getAnnotationElem();

                  case 12:
                    elem = _context16.sent;
                    return _context16.abrupt("break", 19);

                  case 14:
                    _context16.next = 16;
                    return this.network.getRandomElem();

                  case 16:
                    elem = _context16.sent;
                    this.eventSubject.next('progress');
                    return _context16.abrupt("break", 19);

                  case 19:
                    if (elem) {
                      _elem = elem, _elem2 = _slicedToArray(_elem, 2), data = _elem2[0], blob = _elem2[1];
                      this.mode = data.annotation ? 'revision' : 'annotation';
                      this.edit.parseImage(blob, data.path, data);
                    } else {
                      this.edit.removeImage();
                      this.mode = 'annotation';
                    }

                  case 20:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "gradeQuiz",
        value: function gradeQuiz() {
          var path = this.edit.image.path;

          var _this$quiz$grade = this.quiz.grade(path, this.formGroup, this.config),
              _this$quiz$grade2 = _slicedToArray(_this$quiz$grade, 2),
              pass = _this$quiz$grade2[0],
              annotation = _this$quiz$grade2[1];

          if (pass) {
            this.dialog.open(_demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_15__["QuizCompleteDialogComponent"], {
              disableClose: true
            });
          } else {
            this.mode = 'revision';
            var meta = new _common_edit_data__WEBPACK_IMPORTED_MODULE_2__["AnnotationMeta"]({
              path: path,
              feedbacks: [],
              annotation: annotation
            });
            this.edit.parseImage(this.edit.image.blob, path, meta);
          }
        }
      }, {
        key: "parseVerification",
        value: function parseVerification(elem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var _elem3, data, blob;

            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    if (!elem) {
                      _context17.next = 6;
                      break;
                    }

                    _elem3 = _slicedToArray(elem, 2), data = _elem3[0], blob = _elem3[1];
                    this.edit.parseImage(blob, data.path);
                    this.verificationDatas = this.config.parseVerificationData(data);
                    this.mode = 'verification';
                    return _context17.abrupt("return", true);

                  case 6:
                    return _context17.abrupt("return", false);

                  case 7:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "onKey",
        value: function onKey(event) {
          if (event.key === ' ') {
            this.spacePressed = false;
            d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgS.node()).classed('move', this.spacePressed);
            event.stopImmediatePropagation();
            return false;
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          if (event.key === ' ') {
            this.spacePressed = true;
            d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgS.node()).classed('move', this.spacePressed);
          }
        }
      }, {
        key: "pointerDown",
        value: function pointerDown(event) {
          var svg = this.svgRef.nativeElement;
          var svgRect = svg.getBoundingClientRect();
          this.dragging = event.clientX < svgRect.right && event.clientX > svgRect.left && event.clientY < svgRect.bottom && event.clientY > svgRect.top;
        }
      }, {
        key: "pointerUp",
        value: function pointerUp() {
          if (this.dragging) {
            this.dragging = false;
          }
        }
      }, {
        key: "pointerMove",
        value: function pointerMove(event) {
          if (this.dragging && this.spacePressed) {
            var img = this.imgRef.nativeElement;
            var svg = this.svgRef.nativeElement;

            var _Object = Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["invertTransform"])(img.style.transform),
                sx = _Object.sx,
                sy = _Object.sy,
                tx = _Object.tx,
                ty = _Object.ty;

            var ntx = tx + event.movementX * (1 / sx);
            var nty = ty + event.movementY * (1 / sy);
            this.renderer.setStyle(img, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(sx, sy, ntx, nty));
            this.renderer.setStyle(svg, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(sx, sy, ntx, nty));
          }
        }
      }, {
        key: "onImageScroll",
        value: function onImageScroll(event) {
          var img = this.imgRef.nativeElement;
          var svg = this.svgRef.nativeElement;

          var _Object2 = Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["invertTransform"])(img.style.transform),
              sx = _Object2.sx,
              sy = _Object2.sy,
              tx = _Object2.tx,
              ty = _Object2.ty;

          if (this.cursorInRect(event)) {
            var scaleDelta = event.deltaY < 0 ? 0.4 : -0.4;
            var nScaleX = Math.min(6, Math.max(1, sx + scaleDelta));
            var nScaleY = Math.min(6, Math.max(1, sy + scaleDelta));

            var _this$cursorOffset = this.cursorOffset(event),
                _this$cursorOffset2 = _slicedToArray(_this$cursorOffset, 2),
                ox = _this$cursorOffset2[0],
                oy = _this$cursorOffset2[1];

            var nTranslateX = event.deltaY < 0 ? (tx * sx - (nScaleX / sx - 1) * (ox - tx * sx)) / nScaleX : tx * (nScaleX - 1) / (sx - 1 + 0.001) * (sx / nScaleX);
            var nTranslateY = event.deltaY < 0 ? (ty * sy - (nScaleY / sy - 1) * (oy - ty * sy)) / nScaleY : ty * (nScaleY - 1) / (sy - 1 + 0.001) * (sy / nScaleY);
            this.renderer.setStyle(img, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(nScaleX, nScaleY, nTranslateX, nTranslateY));
            this.renderer.setStyle(svg, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(nScaleX, nScaleY, nTranslateX, nTranslateY));
            Object(_annotation_module_annotation_util__WEBPACK_IMPORTED_MODULE_17__["updateBoxStyleByScroll"])(d3__WEBPACK_IMPORTED_MODULE_3__["select"](svg));
          }
        }
      }, {
        key: "cursorInRect",
        value: function cursorInRect(event) {
          var rect = this.imgZoneRef.nativeElement.getBoundingClientRect();
          var x = event.clientX;
          var y = event.clientY;
          return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        }
      }, {
        key: "cursorOffset",
        value: function cursorOffset(event) {
          var rect = this.imgZoneRef.nativeElement.getBoundingClientRect();
          var rectCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          };
          return [event.clientX - rectCenter.x, event.clientY - rectCenter.y];
        }
      }, {
        key: "initFormGroup",
        value: function initFormGroup(config) {
          var _this60 = this;

          var formGroup = this.fb.group({});
          config.tasks.forEach(function (task) {
            task.registerControl(formGroup, _this60.fb);
          });
          return formGroup;
        }
      }, {
        key: "initSVG",
        value: function initSVG(boundingBox) {
          this.svgS = d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgRef.nativeElement).attr('width', boundingBox.width + 20).attr('height', boundingBox.height + 20).attr('viewbox', "0 0 ".concat(boundingBox.width + 20, " ").concat(boundingBox.height + 20)).attr('pointer-events', 'visiblePoint');
          this.svgS.select('.border').remove();
          this.svgS.append('rect').attr('class', 'border').attr('width', boundingBox.width + 20).attr('height', boundingBox.height + 20).attr('viewbox', "0 0 ".concat(boundingBox.width + 20, " ").concat(boundingBox.height + 20)).attr('fill-opacity', 0).attr('stroke', '#777').attr('stroke-width', 2).attr('pointer-events', 'none');
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ctorParameters = function () {
      return [{
        type: _edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _demo_demo_service__WEBPACK_IMPORTED_MODULE_11__["DemoService"]
      }, {
        type: _demo_quiz_service__WEBPACK_IMPORTED_MODULE_13__["QuizService"]
      }, {
        type: _timer_service__WEBPACK_IMPORTED_MODULE_12__["TimerService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
      }, {
        type: _locale_service__WEBPACK_IMPORTED_MODULE_16__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('img', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], EditComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imgZone', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], EditComponent.prototype, "imgZoneRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svg', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], EditComponent.prototype, "svgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], EditComponent.prototype, "onKey", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], EditComponent.prototype, "onKeyDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:pointerdown', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [PointerEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], EditComponent.prototype, "pointerDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:pointerup', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], EditComponent.prototype, "pointerUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:pointermove', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [PointerEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], EditComponent.prototype, "pointerMove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousewheel', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [WheelEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], EditComponent.prototype, "onImageScroll", null);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.component.scss */
      "./src/app/edit/edit.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"], _config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _demo_demo_service__WEBPACK_IMPORTED_MODULE_11__["DemoService"], _demo_quiz_service__WEBPACK_IMPORTED_MODULE_13__["QuizService"], _timer_service__WEBPACK_IMPORTED_MODULE_12__["TimerService"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], _locale_service__WEBPACK_IMPORTED_MODULE_16__["LocaleService"]])], EditComponent);
    /***/
  },

  /***/
  "./src/app/edit/file-drop.directive.ts":
  /*!*********************************************!*\
    !*** ./src/app/edit/file-drop.directive.ts ***!
    \*********************************************/

  /*! exports provided: FileDropDirective */

  /***/
  function srcAppEditFileDropDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
      return FileDropDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FileDropDirective =
    /*#__PURE__*/
    function () {
      function FileDropDirective() {
        _classCallCheck(this, FileDropDirective);

        this.filesDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filesHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FileDropDirective, [{
        key: "onDrop",
        value: function onDrop($event) {
          $event.preventDefault();
          this.filesDropped.emit($event.dataTransfer.files);
          this.filesHovered.emit(false);
        }
      }, {
        key: "onDragOver",
        value: function onDragOver($event) {
          $event.preventDefault();
          this.filesHovered.emit(true);
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave($event) {
          $event.preventDefault();
          this.filesHovered.emit(false);
        }
      }]);

      return FileDropDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FileDropDirective.prototype, "filesDropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FileDropDirective.prototype, "filesHovered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FileDropDirective.prototype, "onDrop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FileDropDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FileDropDirective.prototype, "onDragLeave", null);
    FileDropDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[fileDrop]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FileDropDirective);
    /***/
  },

  /***/
  "./src/app/edit/side-nav/side-nav.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/edit/side-nav/side-nav.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditSideNavSideNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button.selected {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.side-panel {\n  padding: 0px 16px;\n}\n\n.progress-info {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.progress-info span.annotated {\n  color: rgba(123, 187, 45, 0.8);\n}\n\n.progress-info span.ignored {\n  color: rgba(0, 0, 0, 0.54);\n}\n\ndiv {\n  font-size: 0.9rem !important;\n}\n\nspan {\n  font-size: 0.9rem !important;\n}\n\n.mat-list-base .mat-subheader {\n  font-size: 0.9rem !important;\n}\n\n.elapsed-time {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  font-size: 1rem !important;\n  padding: 12px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9zaWRlLW5hdi9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcc2lkZS1uYXZcXHNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFFSSxpQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FEQ0k7RUFDSSw4QkFBQTtBQ0NSOztBRENJO0VBQ0ksMEJBQUE7QUNDUjs7QURHQTtFQUNJLDRCQUFBO0FDQUo7O0FER0E7RUFDSSw0QkFBQTtBQ0FKOztBREdBO0VBQ0ksNEJBQUE7QUNBSjs7QURHQTtFQUNJLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcblxyXG4uc2lkZS1wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcclxufVxyXG5cclxuLnByb2dyZXNzLWluZm8ge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHNwYW4uYW5ub3RhdGVkIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgxMjMsIDE4NywgNDUsIDAuOClcclxuICAgIH1cclxuICAgIHNwYW4uaWdub3JlZCB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lbGFwc2VkLXRpbWUge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjByZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxufVxyXG4iLCJidXR0b24uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4uc2lkZS1wYW5lbCB7XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xufVxuXG4ucHJvZ3Jlc3MtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLnByb2dyZXNzLWluZm8gc3Bhbi5hbm5vdGF0ZWQge1xuICBjb2xvcjogcmdiYSgxMjMsIDE4NywgNDUsIDAuOCk7XG59XG4ucHJvZ3Jlc3MtaW5mbyBzcGFuLmlnbm9yZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuZGl2IHtcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbn1cblxuLmVsYXBzZWQtdGltZSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/edit/side-nav/side-nav.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/edit/side-nav/side-nav.component.ts ***!
    \*****************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcAppEditSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var src_app_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");
    /* harmony import */


    var _timer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../timer.service */
    "./src/app/edit/timer.service.ts");

    var SideNavComponent =
    /*#__PURE__*/
    function () {
      function SideNavComponent(edit, network, cs, timer, L) {
        _classCallCheck(this, SideNavComponent);

        this.edit = edit;
        this.network = network;
        this.cs = cs;
        this.timer = timer;
        this.L = L;
        this.autoListShow = true;
        this.imageListShow = true;
        this.userName = '';
        this.userProgress = 0;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this61 = this;

          this.event.subscribe(function (key) {
            if (key === 'progress') {
              _this61.updateProgress();

              _this61.updateModelInfo();
            }
          });
          this.cs.configObservable.subscribe(function (config) {
            _this61.config = config;
          });
          this.cs.userNameObservable.subscribe(function (name) {
            _this61.userName = name;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.updateProgress();
        }
      }, {
        key: "selectImage",
        value: function selectImage(image) {
          this.edit.imageSubject.next(image);
          this.updateModelInfo();
        }
      }, {
        key: "removeImage",
        value: function removeImage() {
          var _this62 = this;

          this.edit.ignoreImage().then(function (_) {
            _this62.remove.emit();
          });
        } // for debug

      }, {
        key: "getRandImage",
        value: function getRandImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var result, _result, meta, blob;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.network.clearPending();

                  case 2:
                    _context18.next = 4;
                    return this.network.getRandomElem();

                  case 4:
                    result = _context18.sent;

                    if (result) {
                      _result = _slicedToArray(result, 2), meta = _result[0], blob = _result[1];
                      this.edit.parseImage(blob, meta.path, meta);
                    } else {
                      this.edit.removeImage();
                    }

                  case 6:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "onChangeAutoComplete",
        value: function onChangeAutoComplete(change, modelInfo) {
          this.edit.updateAutoComplete(modelInfo, change.checked);
        }
      }, {
        key: "updateProgress",
        value: function updateProgress() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.network.getProgress();

                  case 2:
                    this.progress = _context19.sent;

                    if (!this.config.sharedDataset) {
                      _context19.next = 7;
                      break;
                    }

                    _context19.next = 6;
                    return this.network.getUserProgress();

                  case 6:
                    this.userProgress = _context19.sent;

                  case 7:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "updateModelInfo",
        value: function updateModelInfo() {
          var _this63 = this;

          this.network.getModelInfo().then(function (modelInfos) {
            if (!_this63.modelInfos) {
              _this63.modelInfos = modelInfos;
            } else {
              modelInfos.forEach(function (newModelInfo, i) {
                if (i < _this63.modelInfos.length) {
                  _this63.modelInfos[i].score = newModelInfo.score;
                } else {
                  _this63.modelInfos.push(newModelInfo);
                }
              });
            }
          });
        }
      }, {
        key: "imageName",
        get: function get() {
          var splited = this.edit.image.path.split('/');
          return splited[splited.length - 1];
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ctorParameters = function () {
      return [{
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_2__["EditService"]
      }, {
        type: src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]
      }, {
        type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }, {
        type: _timer_service__WEBPACK_IMPORTED_MODULE_7__["TimerService"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SideNavComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], SideNavComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SideNavComponent.prototype, "remove", void 0);
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/side-nav/side-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-nav.component.scss */
      "./src/app/edit/side-nav/side-nav.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_2__["EditService"], src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"], src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _timer_service__WEBPACK_IMPORTED_MODULE_7__["TimerService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])], SideNavComponent);
    /***/
  },

  /***/
  "./src/app/edit/timer.service.ts":
  /*!***************************************!*\
    !*** ./src/app/edit/timer.service.ts ***!
    \***************************************/

  /*! exports provided: TimerService */

  /***/
  function srcAppEditTimerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerService", function () {
      return TimerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var _edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var _demo_demo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./demo/demo.service */
    "./src/app/edit/demo/demo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TimerService =
    /*#__PURE__*/
    function () {
      function TimerService(network, edit, demo, router, zone) {
        _classCallCheck(this, TimerService);

        this.network = network;
        this.edit = edit;
        this.demo = demo;
        this.router = router;
        this.zone = zone;
        this.sec = 0;
      }

      _createClass(TimerService, [{
        key: "start",
        value: function start() {
          var _this64 = this;

          this.reset();
          this.timer = setInterval(function () {
            _this64.sec += 1;

            if (_this64.sec >= 1200) {
              _this64.router.navigate(['/login']);

              _this64.demo.init();

              _this64.sec = 0;
            }
          }, 1000);
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.timer) {
            clearInterval(this.timer);
          }

          this.sec = 0;
        }
      }, {
        key: "sendResult",
        value: function sendResult(mode) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.network.sendElapsedTime(mode, this.edit.image.path, this.sec);

                  case 2:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }]);

      return TimerService;
    }();

    TimerService.ctorParameters = function () {
      return [{
        type: _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]
      }, {
        type: _edit_service__WEBPACK_IMPORTED_MODULE_3__["EditService"]
      }, {
        type: _demo_demo_service__WEBPACK_IMPORTED_MODULE_4__["DemoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    TimerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"], _edit_service__WEBPACK_IMPORTED_MODULE_3__["EditService"], _demo_demo_service__WEBPACK_IMPORTED_MODULE_4__["DemoService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], TimerService);
    /***/
  },

  /***/
  "./src/app/edit/verification-module/dialog/review-send-dialog.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/edit/verification-module/dialog/review-send-dialog.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ReviewSendDialogComponent */

  /***/
  function srcAppEditVerificationModuleDialogReviewSendDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewSendDialogComponent", function () {
      return ReviewSendDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var ReviewSendDialogComponent =
    /*#__PURE__*/
    function () {
      function ReviewSendDialogComponent(dialogRef, data, _L) {
        _classCallCheck(this, ReviewSendDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.L = _L.reviewSendDialog;
      }

      _createClass(ReviewSendDialogComponent, [{
        key: "onClose",
        value: function onClose() {
          this.data.response = '';
          this.dialogRef.close(this.data);
        }
      }]);

      return ReviewSendDialogComponent;
    }();

    ReviewSendDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]
      }];
    };

    ReviewSendDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review-send-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-send-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/dialog/review-send-dialog.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])], ReviewSendDialogComponent);
    /***/
  },

  /***/
  "./src/app/edit/verification-module/feedback-card/feedback-card.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/edit/verification-module/feedback-card/feedback-card.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditVerificationModuleFeedbackCardFeedbackCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 100% !important;\n}\n\n.wrapper.focused {\n  background-color: rgba(51, 153, 102, 0.5);\n}\n\n.wrapper:hover:not(.focused) {\n  background-color: rgba(51, 153, 102, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL2ZlZWRiYWNrLWNhcmQvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXHZlcmlmaWNhdGlvbi1tb2R1bGVcXGZlZWRiYWNrLWNhcmRcXGZlZWRiYWNrLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS9mZWVkYmFjay1jYXJkL2ZlZWRiYWNrLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBRElJO0VBQ0kseUNBQUE7QUNEUjs7QURJSTtFQUNJLHlDQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L3ZlcmlmaWNhdGlvbi1tb2R1bGUvZmVlZGJhY2stY2FyZC9mZWVkYmFjay1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG5cclxuICAgICYuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMTUzLCAxMDIsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3Zlcjpub3QoLmZvY3VzZWQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKTtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyLmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC41KTtcbn1cbi53cmFwcGVyOmhvdmVyOm5vdCguZm9jdXNlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit/verification-module/feedback-card/feedback-card.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/edit/verification-module/feedback-card/feedback-card.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: FeedbackCardComponent */

  /***/
  function srcAppEditVerificationModuleFeedbackCardFeedbackCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackCardComponent", function () {
      return FeedbackCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var FeedbackCardComponent =
    /*#__PURE__*/
    function () {
      function FeedbackCardComponent(L) {
        _classCallCheck(this, FeedbackCardComponent);

        this.L = L;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.directInput = false;
      }

      _createClass(FeedbackCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.feedback = src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_3__["Feedback"].from(this.form);
        }
      }, {
        key: "checkWriteMode",
        value: function checkWriteMode(change) {
          this.directInput = change.checked;

          if (this.directInput) {
            this.form.get('comment').setValue('');
          } else {
            this.form.get('comment').setValue(this.comments[0]);
          }
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.focus.emit(this.focusedKey === this.feedback.key ? null : this.feedback.key);
        }
      }]);

      return FeedbackCardComponent;
    }();

    FeedbackCardComponent.ctorParameters = function () {
      return [{
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_4__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], FeedbackCardComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FeedbackCardComponent.prototype, "focusedKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], FeedbackCardComponent.prototype, "comments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FeedbackCardComponent.prototype, "remove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FeedbackCardComponent.prototype, "focus", void 0);
    FeedbackCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedback-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/feedback-card/feedback-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback-card.component.scss */
      "./src/app/edit/verification-module/feedback-card/feedback-card.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_4__["LocaleService"]])], FeedbackCardComponent);
    /***/
  },

  /***/
  "./src/app/edit/verification-module/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/edit/verification-module/index.ts ***!
    \***************************************************/

  /*! exports provided: VClassificationComponent, VOverallComponent, VerificationModuleComponent */

  /***/
  function srcAppEditVerificationModuleIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _v_classification_v_classification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./v-classification/v-classification.component */
    "./src/app/edit/verification-module/v-classification/v-classification.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VClassificationComponent", function () {
      return _v_classification_v_classification_component__WEBPACK_IMPORTED_MODULE_1__["VClassificationComponent"];
    });
    /* harmony import */


    var _v_overall_v_overall_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./v-overall/v-overall.component */
    "./src/app/edit/verification-module/v-overall/v-overall.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VOverallComponent", function () {
      return _v_overall_v_overall_component__WEBPACK_IMPORTED_MODULE_2__["VOverallComponent"];
    });
    /* harmony import */


    var _verification_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verification-module.component */
    "./src/app/edit/verification-module/verification-module.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VerificationModuleComponent", function () {
      return _verification_module_component__WEBPACK_IMPORTED_MODULE_3__["VerificationModuleComponent"];
    });
    /***/

  },

  /***/
  "./src/app/edit/verification-module/v-classification/v-classification.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-classification/v-classification.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditVerificationModuleVClassificationVClassificationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-button.selected {\n  background-color: #3f51b5;\n  color: #fff;\n}\n\n.label-button:not(.selected) {\n  background-color: #eee;\n  color: #777;\n}\n\n.mat-icon-button {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3YtY2xhc3NpZmljYXRpb24vQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXHZlcmlmaWNhdGlvbi1tb2R1bGVcXHYtY2xhc3NpZmljYXRpb25cXHYtY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LWNsYXNzaWZpY2F0aW9uL3YtY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LWNsYXNzaWZpY2F0aW9uL3YtY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtYnV0dG9uLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxhYmVsLWJ1dHRvbjpub3QoLnNlbGVjdGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuIiwiLmxhYmVsLWJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubGFiZWwtYnV0dG9uOm5vdCguc2VsZWN0ZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5tYXQtaWNvbi1idXR0b24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-classification/v-classification.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-classification/v-classification.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: VClassificationComponent */

  /***/
  function srcAppEditVerificationModuleVClassificationVClassificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VClassificationComponent", function () {
      return VClassificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var VClassificationComponent =
    /*#__PURE__*/
    function () {
      function VClassificationComponent(fb) {
        _classCallCheck(this, VClassificationComponent);

        this.fb = fb;
        this.addFeedback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFeedback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(VClassificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "remove",
        value: function remove() {
          this.removeFeedback.emit(this.feedbackForm);
          this.feedbackForm = null;
        }
      }, {
        key: "clickLabelButton",
        value: function clickLabelButton(label) {
          if (label === this.data.label) {
            this.update("Label [".concat(label, "] might not be selected"));
          } else {
            this.update("Label [".concat(label, "] might be selected"));
          }
        }
      }, {
        key: "update",
        value: function update(comment) {
          if (this.feedbackForm) {
            this.feedbackForm.get('comment').setValue(comment);
          } else {
            this.feedbackForm = this.fb.group({
              taskKey: this.task.key,
              annotationKey: 'label',
              comment: this.fb.control(comment)
            });
            this.addFeedback.emit(this.feedbackForm);
          }
        }
      }]);

      return VClassificationComponent;
    }();

    VClassificationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Classification"])], VClassificationComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["VClassificationData"])], VClassificationComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VClassificationComponent.prototype, "addFeedback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VClassificationComponent.prototype, "removeFeedback", void 0);
    VClassificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-v-classification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./v-classification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-classification/v-classification.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./v-classification.component.scss */
      "./src/app/edit/verification-module/v-classification/v-classification.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../verification-module.component.scss */
      "./src/app/edit/verification-module/verification-module.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], VClassificationComponent);
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditVerificationModuleVOverallAxisSpecCardAxisSpecCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9heGlzLXNwZWMtY2FyZC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcdmVyaWZpY2F0aW9uLW1vZHVsZVxcdi1vdmVyYWxsXFxheGlzLXNwZWMtY2FyZFxcYXhpcy1zcGVjLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvYXhpcy1zcGVjLWNhcmQvYXhpcy1zcGVjLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9heGlzLXNwZWMtY2FyZC9heGlzLXNwZWMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: AxisSpecCardComponent */

  /***/
  function srcAppEditVerificationModuleVOverallAxisSpecCardAxisSpecCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AxisSpecCardComponent", function () {
      return AxisSpecCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var AxisSpecCardComponent =
    /*#__PURE__*/
    function () {
      function AxisSpecCardComponent(_L) {
        _classCallCheck(this, AxisSpecCardComponent);

        this._L = _L;
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = _L.axisSpecCard;
      }

      _createClass(AxisSpecCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "emit",
        value: function emit(el) {
          this.focus.emit(el.key);
        }
      }, {
        key: "labels",
        get: function get() {
          if (this.data && this.data.labels.value.length > 0) {
            return this.data.labels.value.join(', ');
          } else {
            return '';
          }
        }
      }, {
        key: "markLabels",
        get: function get() {
          if (this.data && this.data.markLabels && this.data.markLabels.value.length > 0) {
            return this.data.markLabels.value.join(', ');
          } else {
            return '';
          }
        }
      }]);

      return AxisSpecCardComponent;
    }();

    AxisSpecCardComponent.ctorParameters = function () {
      return [{
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["AxisAnnotation"])], AxisSpecCardComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], AxisSpecCardComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AxisSpecCardComponent.prototype, "focusedKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AxisSpecCardComponent.prototype, "focus", void 0);
    AxisSpecCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-axis-spec-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./axis-spec-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./axis-spec-card.component.scss */
      "./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../v-overall.component.scss */
      "./src/app/edit/verification-module/v-overall/v-overall.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])], AxisSpecCardComponent);
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditVerificationModuleVOverallCustomSpecCardCustomSpecCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9jdXN0b20tc3BlYy1jYXJkL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFx2ZXJpZmljYXRpb24tbW9kdWxlXFx2LW92ZXJhbGxcXGN1c3RvbS1zcGVjLWNhcmRcXGN1c3RvbS1zcGVjLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvY3VzdG9tLXNwZWMtY2FyZC9jdXN0b20tc3BlYy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvY3VzdG9tLXNwZWMtY2FyZC9jdXN0b20tc3BlYy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: CustomSpecCardComponent */

  /***/
  function srcAppEditVerificationModuleVOverallCustomSpecCardCustomSpecCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomSpecCardComponent", function () {
      return CustomSpecCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var CustomSpecCardComponent =
    /*#__PURE__*/
    function () {
      function CustomSpecCardComponent(_L) {
        _classCallCheck(this, CustomSpecCardComponent);

        this._L = _L;
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = this._L.customSpecCard;
      }

      _createClass(CustomSpecCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "emit",
        value: function emit(el) {
          this.focus.emit(el.key);
        }
      }, {
        key: "markLabels",
        get: function get() {
          if (this.data && this.data.markLabels.value.length > 0) {
            return this.data.markLabels.value.join(', ');
          } else {
            return '';
          }
        }
      }]);

      return CustomSpecCardComponent;
    }();

    CustomSpecCardComponent.ctorParameters = function () {
      return [{
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["CustomAnnotation"])], CustomSpecCardComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CustomSpecCardComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CustomSpecCardComponent.prototype, "focusedKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomSpecCardComponent.prototype, "focus", void 0);
    CustomSpecCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-spec-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-spec-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-spec-card.component.scss */
      "./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../v-overall.component.scss */
      "./src/app/edit/verification-module/v-overall/v-overall.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])], CustomSpecCardComponent);
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditVerificationModuleVOverallLegendSpecCardLegendSpecCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9sZWdlbmQtc3BlYy1jYXJkL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFx2ZXJpZmljYXRpb24tbW9kdWxlXFx2LW92ZXJhbGxcXGxlZ2VuZC1zcGVjLWNhcmRcXGxlZ2VuZC1zcGVjLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvbGVnZW5kLXNwZWMtY2FyZC9sZWdlbmQtc3BlYy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvbGVnZW5kLXNwZWMtY2FyZC9sZWdlbmQtc3BlYy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: LegendSpecCardComponent */

  /***/
  function srcAppEditVerificationModuleVOverallLegendSpecCardLegendSpecCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegendSpecCardComponent", function () {
      return LegendSpecCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");

    var LegendSpecCardComponent =
    /*#__PURE__*/
    function () {
      function LegendSpecCardComponent(_L) {
        _classCallCheck(this, LegendSpecCardComponent);

        this._L = _L;
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = _L.legendSpecCard;
      }

      _createClass(LegendSpecCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "emit",
        value: function emit(el) {
          this.focus.emit(el.key);
        }
      }, {
        key: "labels",
        get: function get() {
          if (this.data && this.data.labels.value.length > 0) {
            return this.data.labels.value.join(', ');
          } else {
            return '';
          }
        }
      }]);

      return LegendSpecCardComponent;
    }();

    LegendSpecCardComponent.ctorParameters = function () {
      return [{
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["LegendAnnotation"])], LegendSpecCardComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LegendSpecCardComponent.prototype, "focusedKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], LegendSpecCardComponent.prototype, "focus", void 0);
    LegendSpecCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-legend-spec-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./legend-spec-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./legend-spec-card.component.scss */
      "./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../v-overall.component.scss */
      "./src/app/edit/verification-module/v-overall/v-overall.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])], LegendSpecCardComponent);
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-overall/v-overall.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-overall/v-overall.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditVerificationModuleVOverallVOverallComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n\n.mark-label {\n  border-radius: 5px;\n  border: 2px solid #777;\n  padding: 0 0.3rem;\n  margin-top: 0.5rem;\n  cursor: pointer;\n}\n\n.mark-label:hover {\n  background-color: rgba(51, 153, 102, 0.7);\n}\n\n.mark-label.focused {\n  background-color: #339966;\n}\n\n.text-label {\n  padding: 0.2rem 0rem;\n  cursor: pointer;\n}\n\n.text-label:hover {\n  background-color: rgba(51, 153, 102, 0.7);\n}\n\n.text-label.focused {\n  background-color: #339966;\n}\n\n.text-label > .label-cell {\n  width: 160px !important;\n}\n\n.text-label.title {\n  color: #777;\n  font-weight: 600;\n}\n\n.text-label.odd-row:not(:hover):not(.focused) {\n  background-color: #eee;\n}\n\n.spec-table {\n  border-top: 1px solid #bbb;\n}\n\n.raw-table {\n  overflow-x: auto;\n}\n\n.cell-title {\n  color: #777;\n  font-weight: 600;\n  background-color: #eee;\n  text-align: center;\n}\n\n.focus-unit {\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1px solid #bbb;\n  cursor: pointer;\n}\n\n.focus-unit.focused > .cell-title {\n  background-color: #26734d !important;\n}\n\n.focus-unit.focused > div {\n  background-color: #339966 !important;\n  color: white;\n}\n\n.focus-unit:hover:not(.focused) > .cell-title {\n  background-color: rgba(38, 115, 77, 0.7) !important;\n}\n\n.focus-unit:hover:not(.focused) > div {\n  background-color: rgba(51, 153, 102, 0.7) !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcdmVyaWZpY2F0aW9uLW1vZHVsZVxcdi1vdmVyYWxsXFx2LW92ZXJhbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvdi1vdmVyYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0k7RUFDSSx5Q0FBQTtBQ0NSOztBREVJO0VBQ0kseUJBQUE7QUNBUjs7QURJQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdJO0VBQ0kseUNBQUE7QUNEUjs7QURJSTtFQUNJLHlCQUFBO0FDRlI7O0FES0k7RUFDSSx1QkFBQTtBQ0hSOztBRE1JO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDSlI7O0FET0k7RUFDSSxzQkFBQTtBQ0xSOztBRFVBO0VBQ0ksMEJBQUE7QUNQSjs7QURVQTtFQUNJLGdCQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEVUE7RUFFSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNSSjs7QURXUTtFQUNJLG9DQUFBO0FDVFo7O0FEWVE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7QUNWWjs7QURnQlE7RUFDSSxtREFBQTtBQ2RaOztBRGlCUTtFQUNJLG9EQUFBO0VBQ0EsWUFBQTtBQ2ZaIiwiZmlsZSI6InNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC92LW92ZXJhbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLm1hcmstbGFiZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzc3NztcclxuICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTMsIDEwMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTMsIDEwMik7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5sYWJlbC1jZWxsIHtcclxuICAgICAgICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgICYub2RkLXJvdzpub3QoOmhvdmVyKTpub3QoLmZvY3VzZWQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnNwZWMtdGFibGUge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmI7XHJcbn1cclxuXHJcbi5yYXctdGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmNlbGwtdGl0bGUge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvY3VzLXVuaXQge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICYuZm9jdXNlZCB7XHJcblxyXG4gICAgICAgID4gLmNlbGwtdGl0bGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAxMTUsIDc3LCAxKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE1MywgMTAyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6bm90KC5mb2N1c2VkKSB7XHJcblxyXG4gICAgICAgID4gLmNlbGwtdGl0bGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAxMTUsIDc3LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubWFyay1sYWJlbCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzc3NztcbiAgcGFkZGluZzogMCAwLjNyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hcmstbGFiZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC43KTtcbn1cbi5tYXJrLWxhYmVsLmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OTY2O1xufVxuXG4udGV4dC1sYWJlbCB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGV4dC1sYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpO1xufVxuLnRleHQtbGFiZWwuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk5NjY7XG59XG4udGV4dC1sYWJlbCA+IC5sYWJlbC1jZWxsIHtcbiAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XG59XG4udGV4dC1sYWJlbC50aXRsZSB7XG4gIGNvbG9yOiAjNzc3O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnRleHQtbGFiZWwub2RkLXJvdzpub3QoOmhvdmVyKTpub3QoLmZvY3VzZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLnNwZWMtdGFibGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JiYjtcbn1cblxuLnJhdy10YWJsZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jZWxsLXRpdGxlIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvY3VzLXVuaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvY3VzLXVuaXQuZm9jdXNlZCA+IC5jZWxsLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NzM0ZCAhaW1wb3J0YW50O1xufVxuLmZvY3VzLXVuaXQuZm9jdXNlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk5NjYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvY3VzLXVuaXQ6aG92ZXI6bm90KC5mb2N1c2VkKSA+IC5jZWxsLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgMTE1LCA3NywgMC43KSAhaW1wb3J0YW50O1xufVxuLmZvY3VzLXVuaXQ6aG92ZXI6bm90KC5mb2N1c2VkKSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit/verification-module/v-overall/v-overall.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/edit/verification-module/v-overall/v-overall.component.ts ***!
    \***************************************************************************/

  /*! exports provided: VOverallComponent */

  /***/
  function srcAppEditVerificationModuleVOverallVOverallComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOverallComponent", function () {
      return VOverallComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/task */
    "./src/app/common/task/index.ts");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");
    /* harmony import */


    var _annotation_module_annotation_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../annotation-module/annotation-util */
    "./src/app/edit/annotation-module/annotation-util.ts");

    var VOverallComponent =
    /*#__PURE__*/
    function () {
      function VOverallComponent(fb, _L) {
        _classCallCheck(this, VOverallComponent);

        this.fb = fb;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.markComments = [];
        this.textComments = [];
        this.specComments = [];
        this.rawComments = [];
        this.markFeedbacks = [];
        this.textFeedbacks = [];
        this.specFeedbacks = [];
        this.rawFeedbacks = [];
        this.L = _L.vOverall;
        this.markComments = [this.L.refine, this.L.remove, this.L.addOne];
        this.textComments = [this.L.refine, this.L.remove, this.L.changeLabel, this.L.changeText, this.L.addOne];
        this.specComments = [this.L.check];
        this.rawComments = [this.L.checkRow, this.L.remove, this.L.addRow];
      }

      _createClass(VOverallComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.data && changes.data.currentValue !== undefined && this.onImageLoad || changes.onImageLoad && changes.onImageLoad.currentValue !== false && this.data !== undefined) {
            this.initEventArea();
            this.initMarks();
            this.initTexts();
          }

          if (changes.focusedKey) {
            var key = changes.focusedKey.currentValue;

            if (key) {
              this.updateFocus(key);
            }
          }
        }
      }, {
        key: "clickCell",
        value: function clickCell(cellKey) {
          var key = this.focusedKey === cellKey ? null : cellKey;
          this.focus.emit(key);
        }
      }, {
        key: "clickMark",
        value: function clickMark(mark) {
          var key = this.focusedKey === mark.key ? null : mark.key;
          this.focus.emit(key);
        }
      }, {
        key: "clickText",
        value: function clickText(text) {
          var key = this.focusedKey === text.key ? null : text.key;
          this.focus.emit(key);
        }
      }, {
        key: "clickRow",
        value: function clickRow(row) {
          var key = this.focusedKey === row.key ? null : row.key;
          this.focus.emit(key);
        }
      }, {
        key: "addMarkFeedback",
        value: function addMarkFeedback() {
          var _this65 = this;

          var markIndex = this.data.marks.findIndex(function (mark) {
            return mark.key === _this65.focusedKey;
          });
          var numOtherFeedback = this.markFeedbacks.filter(function (d) {
            return d.get('annotationKey').value.startsWith('mark.other');
          }).length;
          var newGroup = this.fb.group({
            taskKey: this.task.key,
            annotationKey: "mark.".concat(markIndex !== -1 ? markIndex : "other.".concat(numOtherFeedback)),
            comment: this.markComments[0]
          });
          this.markFeedbacks.push(newGroup);
          this.add.emit(newGroup);
        }
      }, {
        key: "removeMarkFeedback",
        value: function removeMarkFeedback(form) {
          var index = this.markFeedbacks.findIndex(function (f) {
            return f === form;
          });
          this.markFeedbacks.splice(index, 1);
          this.remove.emit(form);
        }
      }, {
        key: "addTextFeedback",
        value: function addTextFeedback() {
          var _this66 = this;

          var textIndex = this.data.texts.findIndex(function (text) {
            return text.key === _this66.focusedKey;
          });
          var numOtherFeedback = this.textFeedbacks.filter(function (d) {
            return d.get('annotationKey').value.startsWith('text.other');
          }).length;
          var newGroup = this.fb.group({
            taskKey: this.task.key,
            annotationKey: "text.".concat(textIndex !== -1 ? textIndex : "other.".concat(numOtherFeedback)),
            comment: this.textComments[0]
          });
          this.textFeedbacks.push(newGroup);
          this.add.emit(newGroup);
        }
      }, {
        key: "removeTextFeedback",
        value: function removeTextFeedback(form) {
          var index = this.textFeedbacks.findIndex(function (f) {
            return f === form;
          });
          this.textFeedbacks.splice(index, 1);
          this.remove.emit(form);
        }
      }, {
        key: "addSpecFeedback",
        value: function addSpecFeedback() {
          var contain = this.data.spec.contains(this.focusedKey);
          var numOtherFeedback = this.specFeedbacks.filter(function (d) {
            return d.get('annotationKey').value.startsWith('spec.other');
          }).length;
          var newGroup = this.fb.group({
            taskKey: this.task.key,
            annotationKey: contain ? this.focusedKey.substring(this.task.key.length + 1) : "spec.other.".concat(numOtherFeedback),
            comment: this.specComments[0]
          });
          this.specFeedbacks.push(newGroup);
          this.add.emit(newGroup);
        }
      }, {
        key: "removeSpecFeedback",
        value: function removeSpecFeedback(form) {
          var index = this.specFeedbacks.findIndex(function (f) {
            return f === form;
          });
          this.specFeedbacks.splice(index, 1);
          this.remove.emit(form);
        }
      }, {
        key: "addRawFeedback",
        value: function addRawFeedback() {
          var contain = this.data.raw.contains(this.focusedKey);
          var numOtherFeedback = this.rawFeedbacks.filter(function (d) {
            return d.get('annotationKey').value.startsWith('raw.other');
          }).length;
          var newGroup = this.fb.group({
            taskKey: this.task.key,
            annotationKey: contain ? this.focusedKey.substring(this.task.key.length + 1) : "raw.other.".concat(numOtherFeedback),
            comment: this.rawComments[0]
          });
          this.rawFeedbacks.push(newGroup);
          this.add.emit(newGroup);
        }
      }, {
        key: "removeRawFeedback",
        value: function removeRawFeedback(form) {
          var index = this.rawFeedbacks.findIndex(function (f) {
            return f === form;
          });
          this.rawFeedbacks.splice(index, 1);
          this.remove.emit(form);
        }
      }, {
        key: "initEventArea",
        value: function initEventArea() {
          this.svgS.selectAll('g').remove();
          var g = this.svgS.append('g');
          var horLine = g.append('line').attr('class', 'guide-horizontal').attr('x1', 0).attr('x2', 1000).attr('y1', 0).attr('y2', 0).attr('stroke-width', 1).attr('stroke', 'rgba(0, 0, 0, 0.3)').style('pointer-events', 'none');
          var verLine = g.append('line').attr('class', 'guide-vertical').attr('y1', 0).attr('y2', 1000).attr('x1', 0).attr('x2', 0).attr('stroke-width', 1).attr('stroke', 'rgba(0, 0, 0, 0.3)').style('pointer-events', 'none');
          this.svgS.on('mouseenter', function () {
            horLine.attr('visibility', 'visible');
            verLine.attr('visibility', 'visible');
          }).on('mousemove', function () {
            horLine.attr('y1', d3__WEBPACK_IMPORTED_MODULE_5__["event"].offsetY).attr('y2', d3__WEBPACK_IMPORTED_MODULE_5__["event"].offsetY);
            verLine.attr('x1', d3__WEBPACK_IMPORTED_MODULE_5__["event"].offsetX).attr('x2', d3__WEBPACK_IMPORTED_MODULE_5__["event"].offsetX);
          }).on('mouseleave', function () {
            horLine.attr('visibility', 'hidden');
            verLine.attr('visibility', 'hidden');
          });
        }
      }, {
        key: "initMarks",
        value: function initMarks() {
          var _this67 = this;

          var _this$imgRef$nativeEl4 = this.imgRef.nativeElement,
              width = _this$imgRef$nativeEl4.width,
              height = _this$imgRef$nativeEl4.height;
          var g = this.svgS.append('g').attr('class', 'mark-group');
          g.selectAll('rect').data(this.data.marks).join('rect').attr('x', function (d) {
            return d.bound[0] * width + 10;
          }).attr('y', function (d) {
            return d.bound[1] * height + 10;
          }).attr('width', function (d) {
            return (d.bound[2] - d.bound[0]) * width;
          }).attr('height', function (d) {
            return (d.bound[3] - d.bound[1]) * height;
          }).classed('mark', true).classed('focused', function (mark) {
            return _this67.focusedKey === mark.key;
          }).on('click', function (mark) {
            _this67.clickMark(mark);
          });
          g.select('.focused').raise();
        }
      }, {
        key: "initTexts",
        value: function initTexts() {
          var _this68 = this;

          var _this$imgRef$nativeEl5 = this.imgRef.nativeElement,
              width = _this$imgRef$nativeEl5.width,
              height = _this$imgRef$nativeEl5.height;
          var g = this.svgS.append('g').attr('class', 'text-group');
          g.selectAll('rect').data(this.data.texts).join('rect').attr('x', function (d) {
            return d.bound[0] * width + 10;
          }).attr('y', function (d) {
            return d.bound[1] * height + 10;
          }).attr('width', function (d) {
            return (d.bound[2] - d.bound[0]) * width;
          }).attr('height', function (d) {
            return (d.bound[3] - d.bound[1]) * height;
          }).classed('text', true).classed('focused', function (text) {
            return _this68.focusedKey === text.key;
          }).on('click', function (text) {
            _this68.clickText(text);
          });
          g.select('.focused').raise();
        }
      }, {
        key: "updateFocus",
        value: function updateFocus(key) {
          var _this69 = this;

          var g = this.svgS.selectAll('g');
          g.selectAll('rect').classed('focused', function (d) {
            return d.key === key;
          }).style('stroke-width', function (d) {
            return Object(_annotation_module_annotation_util__WEBPACK_IMPORTED_MODULE_7__["getCurrStrokeWidth"])(_this69.svgS, d.key === key);
          });
          g.select('.focused').raise();

          if (!key) {
            return;
          }

          if (key.startsWith("".concat(this.task.key, ".raw"))) {
            var _key$split = key.split('.'),
                _key$split2 = _slicedToArray(_key$split, 3),
                taskKey = _key$split2[0],
                _ = _key$split2[1],
                index = _key$split2[2];

            var markKey = "".concat(taskKey, ".mark.").concat(index);
            g.selectAll('rect').classed('focused', function (d) {
              return d.key === markKey;
            });
            g.select('.focused').raise();
          }
        }
      }, {
        key: "hasAxes",
        get: function get() {
          return this.data && this.data.spec.axes.length > 0;
        }
      }, {
        key: "hasLegend",
        get: function get() {
          return this.data && !!this.data.spec.legend;
        }
      }, {
        key: "hasCustoms",
        get: function get() {
          return this.data && this.data.spec.customs.length > 0;
        }
      }]);

      return VOverallComponent;
    }();

    VOverallComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_2__["Overall"])], VOverallComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_3__["VOverallData"])], VOverallComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], VOverallComponent.prototype, "onImageLoad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], VOverallComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], VOverallComponent.prototype, "svgS", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VOverallComponent.prototype, "focusedKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VOverallComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VOverallComponent.prototype, "remove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VOverallComponent.prototype, "focus", void 0);
    VOverallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-v-overall',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./v-overall.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/v-overall.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./v-overall.component.scss */
      "./src/app/edit/verification-module/v-overall/v-overall.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../edit-module.scss */
      "./src/app/edit/edit-module.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])], VOverallComponent);
    /***/
  },

  /***/
  "./src/app/edit/verification-module/verification-module.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/edit/verification-module/verification-module.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditVerificationModuleVerificationModuleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background-color: #fff;\n  display: block;\n}\n\ndiv {\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFx2ZXJpZmljYXRpb24tbW9kdWxlXFx2ZXJpZmljYXRpb24tbW9kdWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L3ZlcmlmaWNhdGlvbi1tb2R1bGUvdmVyaWZpY2F0aW9uLW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3ZlcmlmaWNhdGlvbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBjb2xvcjogIzc3NztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYge1xuICBjb2xvcjogIzc3Nztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit/verification-module/verification-module.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/edit/verification-module/verification-module.component.ts ***!
    \***************************************************************************/

  /*! exports provided: VerificationModuleComponent */

  /***/
  function srcAppEditVerificationModuleVerificationModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationModuleComponent", function () {
      return VerificationModuleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_app_common_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/config */
    "./src/app/common/config.ts");
    /* harmony import */


    var src_app_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/edit.service */
    "./src/app/edit.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_locale_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/locale.service */
    "./src/app/locale.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialog_review_send_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dialog/review-send-dialog.component */
    "./src/app/edit/verification-module/dialog/review-send-dialog.component.ts");

    var VerificationModuleComponent =
    /*#__PURE__*/
    function () {
      function VerificationModuleComponent(network, edit, fb, dialog, L) {
        _classCallCheck(this, VerificationModuleComponent);

        this.network = network;
        this.edit = edit;
        this.fb = fb;
        this.dialog = dialog;
        this.L = L;
        this.reviewEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.feedbackForms = [];
        this.focusedKey = null;
      }

      _createClass(VerificationModuleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendReview",
        value: function sendReview(approved) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var _this70 = this;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    this.dialog.open(_dialog_review_send_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ReviewSendDialogComponent"], {
                      width: '400px',
                      data: {
                        response: 'ok'
                      }
                    }).afterClosed().subscribe(function (result) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this70, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee21() {
                        var feedbacks, path;
                        return regeneratorRuntime.wrap(function _callee21$(_context21) {
                          while (1) {
                            switch (_context21.prev = _context21.next) {
                              case 0:
                                if (!(result.response !== 'ok')) {
                                  _context21.next = 2;
                                  break;
                                }

                                return _context21.abrupt("return");

                              case 2:
                                feedbacks = this.feedbackForms.map(function (d) {
                                  return src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].from(d);
                                });
                                path = this.edit.image.path;

                                if (!(this.config.service === 'normal')) {
                                  _context21.next = 7;
                                  break;
                                }

                                _context21.next = 7;
                                return this.network.registerReview({
                                  path: path,
                                  approved: approved,
                                  feedbacks: feedbacks
                                });

                              case 7:
                                this.reviewEmitter.emit();

                              case 8:
                              case "end":
                                return _context21.stop();
                            }
                          }
                        }, _callee21, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "onAddFeedback",
        value: function onAddFeedback(form) {
          var index = this.verificationDatas.findIndex(function (d) {
            return d.taskKey === form.get('taskKey').value;
          });
          form.addControl('index', this.fb.control(index));
          this.feedbackForms.push(form);
          this.feedbackForms = [].concat(this.feedbackForms);
          var _form$value = form.value,
              taskKey = _form$value.taskKey,
              annotationKey = _form$value.annotationKey;
          this.focusedKey = "".concat(taskKey, ".").concat(annotationKey);
        }
      }, {
        key: "onRemoveFeedback",
        value: function onRemoveFeedback(form) {
          var index = this.feedbackForms.findIndex(function (f) {
            return f === form;
          });

          if (index !== -1) {
            this.feedbackForms.splice(index, 1);
            this.feedbackForms = [].concat(this.feedbackForms);
          }
        }
      }]);

      return VerificationModuleComponent;
    }();

    VerificationModuleComponent.ctorParameters = function () {
      return [{
        type: src_app_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]
      }, {
        type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_7__["LocaleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_config__WEBPACK_IMPORTED_MODULE_3__["Config"])], VerificationModuleComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], VerificationModuleComponent.prototype, "verificationDatas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], VerificationModuleComponent.prototype, "onImageLoad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], VerificationModuleComponent.prototype, "imgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], VerificationModuleComponent.prototype, "svgS", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], VerificationModuleComponent.prototype, "reviewEmitter", void 0);
    VerificationModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verification-module',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verification-module.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/verification-module.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verification-module.component.scss */
      "./src/app/edit/verification-module/verification-module.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_7__["LocaleService"]])], VerificationModuleComponent);
    /***/
  },

  /***/
  "./src/app/locale.service.ts":
  /*!***********************************!*\
    !*** ./src/app/locale.service.ts ***!
    \***********************************/

  /*! exports provided: LocaleService */

  /***/
  function srcAppLocaleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocaleService", function () {
      return LocaleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common/task */
    "./src/app/common/task/index.ts");

    var LocaleService =
    /*#__PURE__*/
    function () {
      function LocaleService() {
        var _this71 = this,
            _this$labelMap;

        _classCallCheck(this, LocaleService);

        this.modeMap = {
          'annotation': '어노테이션',
          'verification': '검수',
          'revision': '수정'
        };
        this.serviceMap = {
          'normal': '일반',
          'quiz': '퀴즈',
          'demo': '데모'
        };
        this._sideNav = {
          en: {
            progress: 'Progress',
            userName: 'User',
            userProgress: 'Contribution',
            useSuggestions: 'Use Suggestions',
            removeButton: 'Remove this Image',
            elapsedTime: 'Elapsed Time'
          },
          ko: {
            progress: '진행 상황',
            userName: '사용자명',
            userProgress: '기여도',
            useSuggestions: '자동완성 기능 사용',
            removeButton: '이 이미지를 제외하기',
            elapsedTime: '소요 시간'
          }
        };
        this._verModule = {
          en: {
            accept: 'Accept',
            reject: 'Reject'
          },
          ko: {
            accept: '통과',
            reject: '수정 요청'
          }
        };
        this._feedbackCard = {
          en: {
            comment: 'Comment',
            writeDirect: 'Write directly'
          },
          ko: {
            comment: '코멘트',
            writeDirect: '직접 입력'
          }
        };
        this._resolveBtn = {
          en: 'Resolve',
          ko: '수정 완료'
        };
        this._vOverall = {
          en: {
            title: 'Title',
            addMarksFeedback: 'Add Marks Feedback',
            addTextsFeedback: 'Add Texts Feedback',
            addSpecFeedback: 'Add Spec Feedback',
            addRawFeedback: 'Add Raw Feedback',
            refine: 'Refine the bound',
            remove: 'Remove this',
            addOne: 'Add one more box',
            changeLabel: 'Change the label',
            changeText: 'Change the text',
            check: 'Check this value',
            checkRow: 'Check this row',
            addRow: 'Add one more row',
            marks: 'Marks',
            texts: 'Texts',
            spec: 'Specification',
            rawData: 'Raw Data',
            label: function label(input) {
              return input;
            }
          },
          ko: {
            title: '제목',
            addMarksFeedback: '마크에 대한 피드백 추가',
            addTextsFeedback: '텍스트에 대한 피드백 추가',
            addSpecFeedback: '명세에 대한 피드백 추가',
            addRawFeedback: '원본 데이터에 대한 피드백 추가',
            refine: '박스의 경계를 확인하세요',
            remove: '해당 박스를 지워주세요',
            addOne: '알맞는 박스가 더 필요합니다',
            changeLabel: '라벨을 변경하세요',
            changeText: '텍스트를 변경하세요',
            check: '해당 값을 확인하세요',
            checkRow: '해당 행을 확인하세요',
            addRow: '더 많은 행이 필요합니다',
            marks: '마크 목록',
            texts: '텍스트 목록',
            spec: '명세 정보',
            rawData: '원본 데이터',
            label: function label(input) {
              return _this71.labelMap[input];
            }
          }
        };
        this._axisSpecCard = {
          en: {
            axis: 'Axis',
            dir: 'Direction',
            type: 'Type',
            unit: 'Unit',
            encoding: 'Encoding',
            labels: 'Labels',
            markLabels: 'Mark Labels',
            encodingLabel: function encodingLabel(label) {
              if (!label) {
                return 'Not Selected';
              }

              return _this71.encodingMap[label][_this71.l];
            },
            selectedUnit: function selectedUnit(unit) {
              return unit;
            }
          },
          ko: {
            axis: '축',
            dir: '방향',
            type: '타입',
            unit: '단위',
            encoding: '인코딩',
            labels: '라벨',
            markLabels: '마크 라벨',
            encodingLabel: function encodingLabel(label) {
              if (!label) {
                return '선택 안함';
              }

              return _this71.encodingMap[label][_this71.l];
            },
            selectedUnit: function selectedUnit(unit) {
              switch (unit) {
                case 'integer':
                  return '정수 단위';

                case 'decimal':
                  return '소수 단위';

                default:
                  return '';
              }
            }
          }
        };
        this._legendSpecCard = {
          en: {
            legend: 'Legend',
            encoding: 'Encoding',
            labels: 'Labels',
            encodingLabel: function encodingLabel(label) {
              if (!label) {
                return 'Not Selected';
              }

              return _this71.encodingMap[label][_this71.l];
            }
          },
          ko: {
            legend: '범례',
            encoding: '인코딩',
            labels: '라벨',
            encodingLabel: function encodingLabel(label) {
              if (!label) {
                return '선택 안함';
              }

              return _this71.encodingMap[label][_this71.l];
            }
          }
        };
        this._customSpecCard = {
          en: {
            custom: 'Custom',
            type: 'Type',
            unit: 'Unit',
            encoding: 'Encoding',
            markLabels: 'Mark Labels',
            encodingLabel: function encodingLabel(label) {
              if (!label) {
                return 'Not Selected';
              }

              return _this71.encodingMap[label][_this71.l];
            }
          },
          ko: {
            custom: '사용자 정의 열',
            type: '타입',
            unit: '단위',
            encoding: '인코딩',
            markLabels: '마크 라벨',
            encodingLabel: function encodingLabel(label) {
              if (!label) {
                return '선택 안함';
              }

              return _this71.encodingMap[label][_this71.l];
            }
          }
        };
        this._reviewPanel = {
          en: {
            title: 'Feedback List',
            msg: 'There are no feedbacks.'
          },
          ko: {
            title: '피드백 목록',
            msg: '더 이상의 피드백이 없습니다.'
          }
        };
        this.labelMap = (_this$labelMap = {}, _defineProperty(_this$labelMap, _common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_TITLE"], '제목'), _defineProperty(_this$labelMap, _common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_LEGEND_LABEL"], '범례 라벨'), _defineProperty(_this$labelMap, _common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_LEGEND_TITLE"], '범례 제목'), _defineProperty(_this$labelMap, _common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_X_AXIS_TITLE"], 'X축 제목'), _defineProperty(_this$labelMap, _common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_X_AXIS_LABEL"], 'X축 라벨'), _defineProperty(_this$labelMap, _common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_Y_AXIS_TITLE"], 'Y축 제목'), _defineProperty(_this$labelMap, _common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_Y_AXIS_LABEL"], 'Y축 라벨'), _defineProperty(_this$labelMap, _common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_MARK_LABEL"], '마크 라벨'), _this$labelMap);
        this.encodingMap = {
          'x-position': {
            en: 'Position (X)',
            ko: 'X 위치'
          },
          'y-position': {
            en: 'Position (Y)',
            ko: 'Y 위치'
          },
          height: {
            en: 'Height',
            ko: '높이 (height)'
          },
          width: {
            en: 'Width',
            ko: '너비 (width)'
          },
          area: {
            en: 'Area',
            ko: '넓이'
          },
          color: {
            en: 'Color (Required)',
            ko: '색상 (초기값 필요)'
          },
          none: {
            en: 'None (Only for custom column)',
            ko: '없음 (사용자 정의 열에만 적용)'
          }
        };
        this._overall = {
          en: {
            textMode: 'Text Mode',
            markMode: 'Mark Mode',
            marks: 'Mark List',
            texts: 'Text List',
            regression: 'Apply Box Regression by Center Color',
            radius: 'Point Mark Radius',
            sort: 'Automatically Sort Texts',
            addCustomColumn: 'Add Custom Column',
            rawData: 'Raw Data',
            prev: 'Prev Stage',
            next: 'Next Stage',
            spec: 'Specification',
            legend: 'Legend',
            axis: 'Axes',
            title: 'Title',
            numMarks: 'Number of Marks',
            label: function label(input) {
              return input;
            },
            refreshWarning: 'Click refresh button if you change the label in the previous stage',
            controlDelete: "Delete",
            controlForward: "Send forward",
            controlBackward: "Send backward",
            deleteAll: 'Delete All'
          },
          ko: {
            textMode: '텍스트 모드',
            markMode: '마크 모드',
            marks: '마크 목록',
            texts: '텍스트 목록',
            spec: '명세 정보',
            rawData: '원본 데이터',
            regression: '중심색을 이용한 박스의 경계 보정',
            radius: '점의 반지름',
            sort: '자동 텍스트 정렬',
            addCustomColumn: '사용자 정의 열 추가',
            prev: '이전',
            next: '다음',
            legend: '범례 정보',
            axis: '축 정보',
            title: '제목',
            numMarks: '마크의 개수',
            label: function label(input) {
              return _this71.labelMap[input];
            },
            refreshWarning: '전 단계에서 변경 사항을 반영하려면 새로 고침 버튼을 누르세요',
            controlDelete: "\uC9C0\uC6B0\uAE30",
            controlForward: "\uC55E\uC73C\uB85C \uAC00\uC838\uC624\uAE30",
            controlBackward: "\uB4A4\uB85C \uBCF4\uB0B4\uAE30",
            deleteAll: '전체 삭제'
          }
        };
        this._axisSpec = {
          en: {
            title: 'Title',
            dir: 'Direction',
            type: 'Type',
            unit: 'Unit',
            integer: 'integer',
            decimal: 'decimal',
            target: 'Target of Mark Labels'
          },
          ko: {
            title: '제목',
            dir: '방향',
            type: '타입',
            unit: '단위',
            integer: '정수 단위',
            decimal: '소수 단위',
            target: '마크 라벨의 대상이 되는 열'
          }
        };
        this._customSpec = {
          en: {
            title: 'Title',
            type: 'Type',
            unit: 'Unit',
            integer: 'integer',
            decimal: 'decimal',
            target: 'Target of Mark Labels',
            getTitle: function getTitle(index) {
              return "Custom column ".concat(index + 1);
            }
          },
          ko: {
            title: '제목',
            type: '타입',
            unit: '단위',
            integer: '정수 단위',
            decimal: '소수 단위',
            target: '마크 라벨의 대상이 되는 열',
            getTitle: function getTitle(index) {
              return "\uC0AC\uC6A9\uC790 \uC815\uC758 \uC5F4 ".concat(index + 1);
            }
          }
        };
        this._legendSpec = {
          en: {
            title: 'Title'
          },
          ko: {
            title: '제목'
          }
        };
        this._rawTable = {
          en: {
            encoding: 'Encoding',
            encodingLabel: function encodingLabel(label) {
              if (!label) {
                return 'Not Selected';
              }

              return _this71.encodingMap[label][_this71.l];
            },
            clear: 'Clear',
            predict: 'Predict'
          },
          ko: {
            encoding: '인코딩',
            encodingLabel: function encodingLabel(label) {
              if (!label) {
                return '선택 안함';
              }

              return _this71.encodingMap[label][_this71.l];
            },
            clear: '모두 삭제',
            predict: '값 계산'
          }
        };
        this._reviewSendDialog = {
          en: {
            title: 'Confirm your review',
            content: 'Are you sure you want to submit your review?',
            ok: 'OK',
            no: 'No Thanks'
          },
          ko: {
            title: '당신의 리뷰를 확인하세요.',
            content: '정말로 리뷰를 제출하시겠습니까?',
            ok: '네',
            no: '아니요, 다시 확인해볼게요'
          }
        };
        this.l = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].locale;
      }

      _createClass(LocaleService, [{
        key: "service",
        value: function service(_service) {
          return this.l === 'en' ? _service.toUpperCase() : this.serviceMap[_service];
        }
      }, {
        key: "label",
        value: function label(input) {
          return this.labelMap[input];
        }
      }, {
        key: "currMode",
        value: function currMode(mode) {
          return this.l === 'en' ? mode.toUpperCase() : this.modeMap[mode];
        }
      }, {
        key: "mode",
        get: function get() {
          return this.l === 'en' ? 'MODE' : '모드';
        }
      }, {
        key: "registerLabel",
        get: function get() {
          return this.l === 'en' ? 'Register Labels' : '라벨 등록하기';
        }
      }, {
        key: "completeMsg1",
        get: function get() {
          return this.l === 'en' ? 'Contratulations! You have annotated all the images.' : '축하합니다! 당신은 모든 이미지를 어노테이션하셨습니다.';
        }
      }, {
        key: "completeMsg2",
        get: function get() {
          return this.l === 'en' ? 'There are no more images left.' : '실험 참여비는 공지에 따라 추후에 제공됩니다. 감사합니다!';
        }
      }, {
        key: "submit",
        get: function get() {
          return this.l === 'en' ? 'Submit' : '제출';
        }
      }, {
        key: "keyMessages",
        get: function get() {
          return [this.l === 'en' ? "* Press 'd' or 'delete' to remove the selected box" : "* 'd' \uD0A4\uB098 'delete'\uD0A4\uB97C \uD1B5\uD574 \uC120\uD0DD\uD55C \uC0C1\uC790\uB97C \uC9C0\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4", this.l === 'en' ? "* Press 'f' to upper the layer of selected box" : "* 'f' \uD0A4\uB85C \uC120\uD0DD\uD55C \uC0C1\uC790\uB97C \uCD5C\uC0C1\uB2E8\uC5D0 \uC704\uCE58\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4", this.l === 'en' ? "* Press 'b' to lower the layer of selected box" : "* 'b' \uD0A4\uB85C \uC120\uD0DD\uD55C \uC0C1\uC790\uB97C \uCD5C\uD558\uB2E8\uC5D0 \uC704\uCE58\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4"];
        }
      }, {
        key: "sideNav",
        get: function get() {
          return this._sideNav[this.l];
        }
      }, {
        key: "verModule",
        get: function get() {
          return this._verModule[this.l];
        }
      }, {
        key: "feedbackCard",
        get: function get() {
          return this._feedbackCard[this.l];
        }
      }, {
        key: "resolveBtn",
        get: function get() {
          return this._resolveBtn[this.l];
        }
      }, {
        key: "vOverall",
        get: function get() {
          return this._vOverall[this.l];
        }
      }, {
        key: "axisSpecCard",
        get: function get() {
          return this._axisSpecCard[this.l];
        }
      }, {
        key: "legendSpecCard",
        get: function get() {
          return this._legendSpecCard[this.l];
        }
      }, {
        key: "customSpecCard",
        get: function get() {
          return this._customSpecCard[this.l];
        }
      }, {
        key: "reviewPanel",
        get: function get() {
          return this._reviewPanel[this.l];
        }
      }, {
        key: "overall",
        get: function get() {
          return this._overall[this.l];
        }
      }, {
        key: "axisSpec",
        get: function get() {
          return this._axisSpec[this.l];
        }
      }, {
        key: "legendSpec",
        get: function get() {
          return this._legendSpec[this.l];
        }
      }, {
        key: "customSpec",
        get: function get() {
          return this._customSpec[this.l];
        }
      }, {
        key: "rawTable",
        get: function get() {
          return this._rawTable[this.l];
        }
      }, {
        key: "resizeMessage",
        get: function get() {
          return this.l === 'en' ? 'Please login again when you resize the browse window.' : '브라우저 윈도우 사이즈를 조정할 시 다시 로그인이 필요합니다.';
        }
      }, {
        key: "reviewSendDialog",
        get: function get() {
          return this._reviewSendDialog[this.l];
        }
      }]);

      return LocaleService;
    }();

    LocaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LocaleService);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".warn {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwiLndhcm4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../network.service */
    "./src/app/network.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config.service */
    "./src/app/config.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(network, router, configService) {
        _classCallCheck(this, LoginComponent);

        this.network = network;
        this.router = router;
        this.configService = configService;
        this.name = '';
        this.password = '';
        this.warnMessage = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this72 = this;

          this.configService.configObservable.subscribe(function (config) {
            _this72.config = config;

            if (_this72.config.service !== 'normal') {
              _this72.name = _this72.config.service;
              _this72.password = _this72.config.service;

              _this72.configService.setUserName(_this72.name);

              _this72.login(false);
            }
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this73 = this;

          var validation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var re = /[A-Za-z0-9_]\w+/g;

          if (!re.test(this.name)) {
            return;
          }

          if (validation && this.password.length < 8) {
            return;
          }

          this.network.login(this.config.key, this.name, this.password).then(function (res) {
            if (res.code !== 0) {
              _this73.warnMessage = res.message;
            } else {
              _this73.configService.userNameObservable.subscribe(function (_) {
                _this73.router.navigate(['/edit']);
              });

              _this73.configService.setUserName(_this73.name);
            }
          })["catch"](function (err) {
            console.error(err);
          });
        }
      }, {
        key: "onKey",
        value: function onKey(event) {
          if (event.key === 'Enter') {
            this.login();
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], LoginComponent.prototype, "onKey", null);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/network.service.ts":
  /*!************************************!*\
    !*** ./src/app/network.service.ts ***!
    \************************************/

  /*! exports provided: NetworkService */

  /***/
  function srcAppNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _common_edit_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common/edit-data */
    "./src/app/common/edit-data.ts");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var _common_verification_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/verification-data */
    "./src/app/common/verification-data.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var NetworkService =
    /*#__PURE__*/
    function () {
      function NetworkService(http, configService) {
        _classCallCheck(this, NetworkService);

        this.http = http;
        this.configService = configService; // private BASE_URL = 'http://localhost:1219/api/';

        this.BASE_URL = 'http://147.46.240.21:1219/api/';
        this.token = '';
      }

      _createClass(NetworkService, [{
        key: "login",
        value: function login(key, userName, password) {
          var _this74 = this;

          var body = {
            key: key,
            userName: userName,
            password: password
          };
          return this.http.post("".concat(this.BASE_URL, "login"), body, this.userOptions).toPromise().then(function (raw) {
            return _this74.parseResponse(raw);
          }).then(function (data) {
            if (data.data.token) {
              _this74.token = data.data.token;
            }

            return data;
          });
        }
      }, {
        key: "checkInstance",
        value: function checkInstance(service) {
          return this.httpGetWithUser('check').then(function (raw) {
            return raw;
          });
        }
      }, {
        key: "getModelInfo",
        value: function getModelInfo() {
          return this.httpGetWithUser('model_info').then(function (raw) {
            return raw.map(function (d) {
              return new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["ModelInfo"](d);
            });
          });
        }
      }, {
        key: "getProgress",
        value: function getProgress() {
          return this.httpGetWithUser('progress').then(function (raw) {
            return raw;
          });
        }
      }, {
        key: "getUserProgress",
        value: function getUserProgress() {
          return this.httpGetWithUser('user_progress').then(function (raw) {
            return raw['progress'];
          });
        }
      }, {
        key: "ignoreImage",
        value: function ignoreImage(imageElem) {
          var body = {
            path: imageElem.path
          };
          return this.http.post("".concat(this.BASE_URL, "ignore"), body, this.userOptions).toPromise();
        }
      }, {
        key: "getPaths",
        value: function getPaths() {
          return this.httpGetWithUser('paths').then(function (d) {
            return d;
          });
        }
      }, {
        key: "getList",
        value: function getList() {
          var labeled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return this.http.get("".concat(this.BASE_URL, "list?labeled=").concat(labeled), this.userOptions).toPromise().then(function (raw) {
            return raw.map(function (d) {
              return new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["AnnotationMeta"](d);
            });
          });
        }
      }, {
        key: "clearPending",
        value: function clearPending() {
          return this.httpGetWithUser('clear_pending');
        }
      }, {
        key: "getPrediction",
        value: function getPrediction(path) {
          return this.http.get("".concat(this.BASE_URL, "prediction?path=").concat(path), this.userOptions).toPromise().then(function (raw) {
            return new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["PredictData"](raw);
          });
        }
      }, {
        key: "getImage",
        value: function getImage(path) {
          return this.http.get("".concat(this.BASE_URL, "image?path=").concat(path), Object.assign({
            responseType: 'blob'
          }, this.userOptions)).toPromise();
        }
      }, {
        key: "getRandomElem",
        value: function getRandomElem() {
          var _this75 = this;

          return this.httpGetWithUser('random_image').then(function (raw) {
            return _this75.parseResponse(raw);
          }).then(function (response) {
            var data = response.data;

            if (data) {
              return Promise.all([data, _this75.getImage(data.path)]);
            } else {
              return null;
            }
          });
        }
      }, {
        key: "getVerificationRandomElem",
        value: function getVerificationRandomElem() {
          var _this76 = this;

          return this.httpGetWithUser('verification_image').then(function (response) {
            if (response.data) {
              return new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["AnnotatedImageData"](response.data);
            } else {
              return null;
            }
          }).then(function (meta) {
            if (meta) {
              return Promise.all([meta, _this76.getImage(meta.path)]);
            } else {
              return null;
            }
          });
        }
      }, {
        key: "submit",
        value: function submit(imageElem, formGroup, config) {
          var body = {
            raw: {},
            path: imageElem.path,
            semi: imageElem.semi
          };
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = config.tasks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var task = _step4.value;
              var key = task.key;
              body.raw[key] = task.getFormValue(formGroup);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          return this.http.post(this.BASE_URL + 'submit', body, this.userOptions).toPromise().then(function () {
            return null;
          });
        }
      }, {
        key: "registerReview",
        value: function registerReview(review) {
          var _this77 = this;

          return this.http.post(this.BASE_URL + 'register_review', review, this.userOptions).toPromise().then(function (d) {
            return _this77.parseResponse(d);
          });
        }
      }, {
        key: "getReview",
        value: function getReview(path) {
          return this.http.get("".concat(this.BASE_URL, "review?path=").concat(path), this.userOptions).toPromise().then(function (d) {
            return new _common_verification_data__WEBPACK_IMPORTED_MODULE_5__["Review"](d);
          });
        }
      }, {
        key: "sendElapsedTime",
        value: function sendElapsedTime(mode, path, time) {
          return this.http.post("".concat(this.BASE_URL, "time"), {
            mode: mode,
            path: path,
            time: time,
            userName: this.configService.userName
          }).toPromise();
        }
      }, {
        key: "loadLocalImage",
        value: function loadLocalImage(path) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    return _context23.abrupt("return", this.http.get(path, {
                      responseType: 'blob'
                    }).toPromise());

                  case 1:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "httpGetWithUser",
        value: function httpGetWithUser(path) {
          return this.http.get("".concat(this.BASE_URL).concat(path), this.userOptions).toPromise();
        }
      }, {
        key: "parseResponse",
        value: function parseResponse(raw, className) {
          var data;

          if (!raw['data']) {
            return {
              message: raw['message'],
              code: raw['code'],
              data: null
            };
          }

          try {
            if (className) {
              data = new className(raw['data']);
            } else {
              data = raw['data'];
            }
          } catch (err) {
            data = raw['data'];
          }

          return {
            message: raw['message'],
            code: raw['code'],
            data: data
          };
        }
      }, {
        key: "userOptions",
        get: function get() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          var userName = this.configService.userName;
          headers = headers.append('service', src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].mode);

          if (userName) {
            headers = headers.append('Username', userName);
          }

          if (this.token !== '') {
            headers = headers.append('Authorization', "Bearer ".concat(this.token));
          }

          return {
            headers: headers
          };
        }
      }]);

      return NetworkService;
    }();

    NetworkService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }];
    };

    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])], NetworkService);
    /***/
  },

  /***/
  "./src/app/non-active-page/non-active-page.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/non-active-page/non-active-page.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNonActivePageNonActivePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1hY3RpdmUtcGFnZS9ub24tYWN0aXZlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/non-active-page/non-active-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/non-active-page/non-active-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: NonActivePageComponent */

  /***/
  function srcAppNonActivePageNonActivePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NonActivePageComponent", function () {
      return NonActivePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NonActivePageComponent =
    /*#__PURE__*/
    function () {
      function NonActivePageComponent() {
        _classCallCheck(this, NonActivePageComponent);
      }

      _createClass(NonActivePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NonActivePageComponent;
    }();

    NonActivePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-non-active-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./non-active-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/non-active-page/non-active-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./non-active-page.component.scss */
      "./src/app/non-active-page/non-active-page.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NonActivePageComponent);
    /***/
  },

  /***/
  "./src/app/prediction.service.ts":
  /*!***************************************!*\
    !*** ./src/app/prediction.service.ts ***!
    \***************************************/

  /*! exports provided: PredictionService */

  /***/
  function srcAppPredictionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionService", function () {
      return PredictionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ClusterResult = function ClusterResult(res) {
      _classCallCheck(this, ClusterResult);

      this.centers = res['center_colors'] || [];
      this.centerPatches = res['center_patches'] || [];
      this.labels = res['labels'];
    };

    var PredictionService =
    /*#__PURE__*/
    function () {
      function PredictionService(http) {
        _classCallCheck(this, PredictionService);

        this.http = http;
        this.BASE_URL = 'http://147.46.240.21:1219/api/';
      }

      _createClass(PredictionService, [{
        key: "clusterMarks",
        value: function clusterMarks(body) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var response;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.http.post("".concat(this.BASE_URL, "cluster_marks"), body).toPromise();

                  case 2:
                    response = _context24.sent;
                    return _context24.abrupt("return", new ClusterResult(response));

                  case 4:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "predictAreas",
        value: function predictAreas(body) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    return _context25.abrupt("return", this.http.post("".concat(this.BASE_URL, "predict_area"), body).toPromise().then(function (d) {
                      return d;
                    }));

                  case 1:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }]);

      return PredictionService;
    }();

    PredictionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PredictionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], PredictionService);
    /***/
  },

  /***/
  "./src/environments/environment.js":
  /*!*****************************************!*\
    !*** ./src/environments/environment.js ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      mode: 'demo',
      chartType: 'bar',
      locale: 'ko'
    }; //# sourceMappingURL=environment.js.map

    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      mode: 'demo',
      chartType: 'bar',
      locale: 'ko'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\junhoe\HCIL\dev\Autotator\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map