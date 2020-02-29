(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\">\r\n    <ng-container *ngIf=\"status && status.active\">\r\n        <mat-toolbar color=\"primary\">\r\n            <a [routerLink]=\"['/']\" class=\"mr-4\">/* Autotator */</a>\r\n            <!-- <a [routerLink]=\"['/edit']\" class=\"menu\">Editor</a> -->\r\n            <!-- <a [routerLink]=\"['/gallery']\" class=\"menu\">Gallery</a> -->\r\n        </mat-toolbar>\r\n        <router-outlet></router-outlet>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"status && !status.active\">\r\n        <app-non-active-page></app-non-active-page>\r\n    </ng-container>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/annotation-module.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/annotation-module.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-vertical-stepper linear\r\n    (selectionChange)=\"onStepChange($event)\"\r\n    #stepper>\r\n    <ng-container *ngIf=\"config\">\r\n        <ng-container *ngFor=\"let task of config.tasks; let i = index\">\r\n            <mat-step [stepControl]=\"formGroup.get(task.key)\">\r\n                <form [formGroup]=\"formGroup\">\r\n                    <ng-template matStepLabel>{{ task.command }}</ng-template>\r\n                    <ng-container [ngSwitch]=\"task.taskType\">\r\n                        <ng-container *ngSwitchCase=\"'C'\">\r\n                            <app-classification\r\n                                [formGroup]=\"formGroup\"\r\n                                [stepper]=\"stepper\"\r\n                                [index]=\"i\"\r\n                                [task]=\"task\"\r\n                                [currIndex]=\"currIndex\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady()\"\r\n                            >\r\n                            </app-classification>\r\n                        </ng-container>\r\n                        <ng-container *ngSwitchCase=\"'R'\">\r\n                            <app-regression\r\n                                [formGroup]=\"formGroup\"\r\n                                [task]=\"task\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady()\"\r\n                                >\r\n                            </app-regression>\r\n                        </ng-container>\r\n                        <ng-container *ngSwitchCase=\"'B'\">\r\n                            <app-bounding-box\r\n                                [formGroup]=\"formGroup\"\r\n                                [task]=\"task\"\r\n                                [index]=\"i\"\r\n                                [imgRef]=\"imgRef\"\r\n                                [svgS]=\"svgS\"\r\n                                [currIndex]=\"currIndex\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady()\"\r\n                            >\r\n                            </app-bounding-box>\r\n                        </ng-container>\r\n                        <ng-container *ngSwitchCase=\"'T'\">\r\n                            <app-text\r\n                                [formGroup]=\"formGroup\"\r\n                                [task]=\"task\"\r\n                                [index]=\"i\"\r\n                                [imgRef]=\"imgRef\"\r\n                                [svgS]=\"svgS\"\r\n                                [currIndex]=\"currIndex\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady()\"\r\n                            >\r\n                            </app-text>\r\n                        </ng-container>\r\n                        <ng-container *ngSwitchCase=\"'O'\">\r\n                            <app-overall\r\n                                [formGroup]=\"formGroup\"\r\n                                [task]=\"task\"\r\n                                [index]=\"i\"\r\n                                [imgRef]=\"imgRef\"\r\n                                [svgS]=\"svgS\"\r\n                                [currIndex]=\"currIndex\"\r\n                                [event]=\"event\"\r\n                                [spacePressed]=\"spacePressed\"\r\n                                (submitEmitter)=\"onSubmitReady()\"\r\n                                [mode]=\"mode\"\r\n                            >\r\n                            </app-overall>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </form>\r\n                <div *ngIf=\"i !== config.tasks.length - 1\" class=\"mt-2 text-right\">\r\n                    <button mat-stroked-button matStepperPrevious\r\n                        class=\"mr-1\">Prev</button>\r\n                    <button mat-stroked-button matStepperNext>Next</button>\r\n                </div>\r\n            </mat-step>\r\n        </ng-container>\r\n    </ng-container>\r\n</mat-vertical-stepper>\r\n<app-review-panel *ngIf=\"review && mode === 'revision'\"\r\n    [feedbacks]=\"review.feedbacks\"\r\n    [focusedKey]=\"focusedFeedbackKey\"\r\n    (focus)=\"displayFeedback($event)\">\r\n</app-review-panel>\r\n<div class=\"d-flex justify-content-between submit-section align-items-center p-3 px-4\">\r\n    <div class=\"validate-feedback\">\r\n        <ng-container *ngFor=\"let msg of L.keyMessages\">\r\n            {{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n    <button *ngIf=\"submitReady\"\r\n        mat-stroked-button (click)=\"submit($event)\">\r\n        {{ L.submit }}\r\n    </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/bounding-box/bounding-box.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/bounding-box/bounding-box.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-2 d-flex flex-wrap table styled-scroll\">\r\n    <div class=\"d-flex w-100 py-1 border-bottom\">\r\n        <div class=\"w-15 text-center\">\r\n            INDEX\r\n        </div>\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-15 text-center\">\r\n            {{feature}}\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.labels.length > 1\"\r\n            class=\"w-25 text-center\">\r\n            Label\r\n        </div>\r\n    </div>\r\n    <div\r\n        *ngFor=\"let box of boxes\"\r\n        class=\"d-flex w-100\"\r\n        [class.focused]=\"focusedBoxIndex === box.key\">\r\n        <div class=\"w-15 text-center py-1\"\r\n            (click)=\"updateFocus(box.key)\">\r\n            {{ box.key }}\r\n        </div>\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-15 text-center py-1\"\r\n            (click)=\"updateFocus(box.key)\">\r\n            {{ box.points[feature].value }}\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.labels.length > 1\"\r\n            class=\"w-25 text-center px-2 py-1\">\r\n            <select [formControl]=\"box.label\"\r\n                class=\"mat-select\">\r\n                <option *ngFor=\"let label of task.labels\" [value]=\"label\">\r\n                        {{ label }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"validate-feedback w-100 py-2\">\r\n        <ng-container *ngFor=\"let msg of task.msgs\">\r\n            *{{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/classification/classification.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/classification/classification.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-2 d-flex flex-wrap\" [formGroup]=\"formGroup\">\r\n    <mat-radio-group\r\n        [formControlName]=\"task.key\"\r\n        (change)=\"onChange($event)\"\r\n        #radioGroup>\r\n        <mat-radio-button *ngFor=\"let label of task.labels\" [value]=\"label\" class=\"mr-3\">\r\n            {{ label }}\r\n        </mat-radio-button>\r\n    </mat-radio-group>\r\n    <div class=\"validate-feedback w-100\">\r\n        <ng-container *ngFor=\"let msg of task.msgs\">\r\n            *{{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100\" [formGroup]=\"group\" #wrapper>\r\n    <div class=\"w-100 d-flex flex-wrap\" #title>\r\n        <mat-form-field class=\"w-100\">\r\n            <input matInput formControlName=\"title\"\r\n                [placeholder]=\"L.title\">\r\n        </mat-form-field>\r\n        <div\r\n            *ngIf= \"focusedElemWithKey('title')\"\r\n            class=\"feedback-region title\">\r\n            <div>\r\n                {{ focusedFeedback.comment }}\r\n            </div>\r\n            <app-resolve-button></app-resolve-button>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\">\r\n        <div #dir class=\"mr-3\">\r\n            <mat-form-field>\r\n                <mat-label>{{ L.dir }}</mat-label>\r\n                <input matInput *ngIf=\"auto\" formControlName=\"dir\" readonly>\r\n                <mat-select\r\n                    *ngIf=\"!auto\"\r\n                    formControlName=\"dir\">\r\n                    <mat-option value=\"x\">X</mat-option>\r\n                    <mat-option value=\"y\">Y</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('dir')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n        <div #type class=\"mr-3\">\r\n            <mat-form-field>\r\n                <mat-label>{{ L.type }}</mat-label>\r\n                <mat-select\r\n                    (selectionChange)=\"onValueTypeChange($event)\"\r\n                    formControlName=\"type\">\r\n                    <mat-option value=\"nominal\">nominal</mat-option>\r\n                    <mat-option value=\"quantitative\">quantitative</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('type')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n        <div #unit\r\n            *ngIf=\"group.get('type').value === 'quantitative'\"\r\n            class=\"mr-3\">\r\n            <mat-form-field>\r\n                <mat-label>{{ L.unit }}</mat-label>\r\n                <mat-select\r\n                    value=\"\"\r\n                    formControlName=\"unit\" >\r\n                    <mat-option value=\"integer\">{{ L.integer }} </mat-option>\r\n                    <mat-option value=\"decimal\">{{ L.decimal }}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('unit')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\" #labels>\r\n        <app-label-chip-list\r\n            formKey=\"labels\"\r\n            [editable]=\"false\"\r\n            [formGroup]=\"group\"\r\n            [focusedFeedback]=\"focusedFeedback\"\r\n            [focusedFeedbackKey]=\"focusedFeedbackKey\">\r\n        </app-label-chip-list>\r\n    </div>\r\n    <div\r\n        *ngIf=\"hasMarkLabels\"\r\n        class=\"w-100 my-1\"\r\n        #markLabels>\r\n        <div class=\"w-100\">\r\n            <mat-checkbox formControlName=\"labeled\">\r\n                {{ L.target }}\r\n            </mat-checkbox>\r\n        </div>\r\n        <ng-container *ngIf=\"group.get('labeled').value\">\r\n            <app-label-chip-list\r\n                formKey=\"markLabels\"\r\n                [editable]=\"true\"\r\n                [formGroup]=\"group\"\r\n                [focusedFeedback]=\"focusedFeedback\"\r\n                [focusedFeedbackKey]=\"focusedFeedbackKey\">\r\n            </app-label-chip-list>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas #canvas width=\"15px\" height=\"15px\">\r\n</canvas>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 py-2\" [formGroup]=\"group\">\r\n    <div class=\"w-100 position-relative\">\r\n        <app-sub-header [title]=\"title\"></app-sub-header>\r\n        <button mat-icon-button\r\n            class=\"close-button\"\r\n            (click)=\"close()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\" #titleRef>\r\n        <mat-form-field class=\"w-100\">\r\n            <input matInput\r\n                formControlName=\"title\"\r\n                [placeholder]=\"L.title\">\r\n        </mat-form-field>\r\n        <div\r\n            *ngIf= \"focusedElemWithKey('title')\"\r\n            class=\"feedback-region title\">\r\n            <div>\r\n                {{ focusedFeedback.comment }}\r\n            </div>\r\n            <app-resolve-button></app-resolve-button>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\">\r\n        <div #type class=\"mr-3\">\r\n            <mat-form-field class=\"mr-3\">\r\n                <mat-label>{{ L.type }}</mat-label>\r\n                <mat-select\r\n                    formControlName=\"type\"\r\n                    (selectionChange)=\"onValueTypeChange($event)\">\r\n                    <mat-option value=\"nominal\">nominal</mat-option>\r\n                    <mat-option value=\"quantitative\">quantitative</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('type')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n        <div #unit class=\"mr-3\">\r\n            <mat-form-field *ngIf=\"valueType === 'quantitative'\">\r\n                <mat-label>{{ L.unit }}</mat-label>\r\n                <mat-select\r\n                    value=\"\"\r\n                    formControlName=\"unit\">\r\n                    <mat-option value=\"integer\">{{ L.integer }}</mat-option>\r\n                    <mat-option value=\"decimal\">{{ L.decimal }}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedElemWithKey('unit')\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div\r\n        *ngIf=\"hasMarkLabels\"\r\n        class=\"w-100 my-1 d-flex align-items-center flex-wrap\" #labels>\r\n        <mat-checkbox formControlName=\"labeled\"\r\n            class=\"w-100\"\r\n            (change)=\"checkLabeledByMarks($event)\">\r\n            {{ L.target }}\r\n        </mat-checkbox>\r\n        <app-label-chip-list\r\n            *ngIf=\"labeledByMarks\"\r\n            formKey=\"markLabels\"\r\n            [editable]=\"true\"\r\n            [formGroup]=\"group\"\r\n            [focusedFeedback]=\"focusedFeedback\"\r\n            [focusedFeedbackKey]=\"focusedFeedbackKey\">\r\n        </app-label-chip-list>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex flex-wrap\" [formGroup]=\"formGroup\">\r\n    <mat-form-field class=\"w-100\">\r\n        <mat-chip-list #chipList [formArrayName]=\"formKey\">\r\n            <mat-chip *ngFor=\"let label of labels\"\r\n                color=\"primary\"\r\n                [selectable]=\"editable\"\r\n                [removable]=\"editable\"\r\n                (removed)=\"remove(label)\">\r\n                {{ label }}\r\n                <mat-icon matChipRemove>cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n                *ngIf=\"editable\"\r\n                [placeholder]=\"L.registerLabel\"\r\n                [matChipInputAddOnBlur]=\"true\"\r\n                [matChipInputFor]=\"chipList\"\r\n                [matChipInputSeparatorKeyCodes]=\"separatorKeyCodes\"\r\n                (matChipInputTokenEnd)=\"add($event)\"\r\n                >\r\n        </mat-chip-list>\r\n    </mat-form-field>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey === formKey\"\r\n        class=\"feedback-region\">\r\n        <div class=\"mr-2\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100\" [formGroup]=\"group\">\r\n    <div class=\"w-100 d-flex flex-wrap\" #title>\r\n        <mat-form-field class=\"w-100\">\r\n            <input matInput formControlName=\"title\"\r\n                [placeholder]=\"L.title\">\r\n        </mat-form-field>\r\n        <div\r\n            *ngIf= \"focusedElemWithKey('title')\"\r\n            class=\"feedback-region title\">\r\n            <div>\r\n                {{ focusedFeedback.comment }}\r\n            </div>\r\n            <app-resolve-button></app-resolve-button>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex flex-wrap\" #labels>\r\n        <app-label-chip-list\r\n            formKey=\"labels\"\r\n            [editable]=\"false\"\r\n            [formGroup]=\"group\"\r\n            [focusedFeedback]=\"focusedFeedback\"\r\n            [focusedFeedbackKey]=\"focusedFeedbackKey\">\r\n        </app-label-chip-list>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/overall.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/overall.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"stage == 0\">\r\n<div class=\"p-2 w-100\">\r\n    <mat-button-toggle-group\r\n        [value]=\"boxMode\"\r\n        (change)=\"onBoxModeChange($event)\">\r\n        <mat-button-toggle value=\"text\" id=\"text-mode-button\">\r\n            {{ L.textMode }}\r\n        </mat-button-toggle>\r\n        <mat-button-toggle value=\"mark\" id=\"mark-mode-button\">\r\n            {{ L.markMode }}\r\n        </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n</div>\r\n<div *ngIf=\"boxMode === 'mark'\">\r\n    <div class=\"d-flex align-items-center w-100\">\r\n        <div class=\"subtitle py-2 mr-1\">\r\n            {{ L.marks }}\r\n        </div>\r\n        <button mat-icon-button\r\n            (click)=\"clearBoxes()\"\r\n            color=\"warn\"\r\n            clss=\"mr-2\">\r\n            <mat-icon>delete</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey.startsWith('mark.other')\"\r\n        class=\"w-100 feedback-region my-2 justify-content-start\">\r\n        <div class=\"mr-3\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n    <button mat-stroked-button\r\n        *ngIf=\"task.inputType === 'rect'\"\r\n        (click)=\"onCheckBoxRegression()\">\r\n        {{ L.regression }}\r\n    </button>\r\n    <div *ngIf=\"task.inputType === 'point'\">\r\n        <div>\r\n            {{ L.radius }}\r\n        </div>\r\n        <div class=\"d-flex align-items-center\">\r\n            <mat-slider\r\n                min=\"3\"\r\n                max=\"15\"\r\n                step=\"1\"\r\n                [(ngModel)]=\"pointRadius\"\r\n                class=\"mr-3 w-25\"\r\n                (change)=\"onPointSizeChange($event)\"\r\n            >\r\n            </mat-slider>\r\n            <div class=\"mr-1\">\r\n                <svg height=\"48px\" width=\"48px\">\r\n                    <circle cx=\"24px\" cy=\"24px\" r=\"8px\"\r\n                        fill=\"darkorange\" #pointMark>\r\n                    </circle>\r\n                </svg>\r\n            </div>\r\n            <div>\r\n                {{ pointRadius }}px\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div\r\n        class=\"p-2 d-flex flex-wrap table styled-scroll\" #markScroll>\r\n        <div class=\"d-flex w-100 py-1 border-bottom\">\r\n            <div class=\"w-20 text-center py-1\">\r\n                INDEX\r\n            </div>\r\n            <div\r\n                *ngFor=\"let feature of task.features\"\r\n                class=\"w-20 text-center\">\r\n                {{feature}}\r\n            </div>\r\n        </div>\r\n        <div\r\n            *ngFor=\"let box of marks; let i = index\"\r\n            [class]=\"'d-flex flex-wrap w-100 focus-box elem-' + box.key\"\r\n            (click)=\"updateFocus(box.key)\"\r\n            [class.even]=\"i % 2 == 0\"\r\n            #markRows>\r\n            <div class=\"w-100 d-flex\"\r\n                [class.focused]=\"focusedBoxIndex === box.key\">\r\n                <div class=\"w-20 text-center py-1\">\r\n                    {{ i + 1 }}\r\n                </div>\r\n                <div\r\n                    *ngFor=\"let feature of task.features\"\r\n                    class=\"w-20 text-center py-1\">\r\n                    <span>{{ box.points[feature].value }}</span>\r\n                </div>\r\n            </div>\r\n            <div\r\n                [hidden]=\"!focusedFeedback || focusedFeedbackKey !== box.key\"\r\n                class=\"w-100 feedback-region\">\r\n                <div class=\"mr-3\">\r\n                    {{ focusedFeedback ? focusedFeedback.comment : '' }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"boxMode === 'text'\">\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"subtitle py-2 mr-1\">\r\n            {{ L.texts }}\r\n        </div>\r\n        <button mat-icon-button (click)=\"clearBoxes()\" color=\"warn\">\r\n            <mat-icon>delete</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey.startsWith('text.other')\"\r\n        class=\"w-100 feedback-region my-2 justify-content-start\">\r\n        <div class=\"mr-3\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n    <div class=\"w-100 my-3\">\r\n        <mat-slide-toggle\r\n            [(ngModel)]=\"sortText\"\r\n            (change)=\"updateTextSortOption($event)\">\r\n            {{ L.sort }}\r\n        </mat-slide-toggle>\r\n    </div>\r\n    <mat-divider class=\"w-100\"></mat-divider>\r\n    <div class=\"p-2 d-flex flex-wrap table styled-scroll\" #textScroll>\r\n        <div class=\"d-flex w-100 py-1 border-bottom\">\r\n            <div\r\n                *ngFor=\"let feature of task.features\"\r\n                class=\"feature-cell\">\r\n                {{feature}}\r\n            </div>\r\n            <div\r\n                *ngIf=\"task.textLabels.length > 1\"\r\n                class=\"w-25 text-center label-cell\">\r\n                Label\r\n            </div>\r\n            <div\r\n                class=\"input-cell text-center\">\r\n                Text\r\n            </div>\r\n        </div>\r\n        <div\r\n            *ngFor=\"let box of texts; let i = index\"\r\n            [class]=\"'d-flex flex-wrap w-100 focus-box elem-' + box.key\"\r\n            (click)=\"updateFocus(box.key)\"\r\n            #textRows>\r\n            <div class=\"d-flex w-100\"\r\n                [class.focused]=\"focusedBoxIndex === box.key\">\r\n                <div\r\n                    *ngFor=\"let feature of task.features\"\r\n                    class=\"feature-cell py-1\">\r\n                    <span>{{ box.points[feature].value }} </span>\r\n                </div>\r\n                <div\r\n                    *ngIf=\"task.textLabels.length > 1\"\r\n                    class=\"w-25 text-center px-2 py-1\">\r\n                    <select [formControl]=\"box.label\"\r\n                        class=\"label-select\"\r\n                        (change)=\"onLabelChange()\"\r\n                        (focus)=\"onBlurEvent(box)\">\r\n                        <option *ngFor=\"let label of task.textLabels\" [value]=\"label\">\r\n                                {{ L.label(label) }}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div\r\n                    class=\"input-cell px-2 py-1\">\r\n                    <input [formControl]=\"box.text\"\r\n                        (blur)=\"onBlurEvent(box)\"\r\n                        (keypress)=\"inputKeyPress($event)\"\r\n                        type=\"search\">\r\n                </div>\r\n            </div>\r\n            <div\r\n                [hidden]=\"!focusedFeedback || focusedFeedbackKey !== box.key\"\r\n                class=\"w-100 feedback-region\">\r\n                <div class=\"mr-3\">\r\n                    {{ focusedFeedback ? focusedFeedback.comment : '' }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"validate-feedback w-100 py-2\">\r\n    <ng-container *ngFor=\"let msg of task.msgs\">\r\n        *{{ msg }} <br/>\r\n    </ng-container>\r\n</div>\r\n</div>\r\n<div *ngIf=\"stage == 1\">\r\n    <div class=\"w-100 position-relative\">\r\n        <app-sub-header [title]=\"L.spec\"></app-sub-header>\r\n        <button mat-icon-button\r\n            class=\"close-button\"\r\n            (click)=\"refresh(1)\">\r\n            <mat-icon>refresh</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey.startsWith('spec.other')\"\r\n        class=\"w-100 feedback-region my-2 justify-content-start\">\r\n        <div class=\"mr-3\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n     <div\r\n        class=\"p-2 d-flex flex-wrap table styled-scroll\"\r\n        [formGroup]=\"specGroup\"\r\n        #specScroll>\r\n        <div class=\"w-100 d-flex flex-wrap spec\">\r\n            <mat-form-field class=\"w-100\">\r\n                <input matInput formControlName=\"title\"\r\n                    [placeholder]=\"L.title\"\r\n                    (change)=\"onChangeTitleSpec($event)\">\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf=\"focusedFeedback && focusedFeedbackKey === 'title'\"\r\n                class=\"w-100 feedback-region title\">\r\n                <div class=\"mr-3\">\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n        <div class=\"w-100 d-flex spec\">\r\n            <mat-form-field class=\"w-100\">\r\n                <input matInput readonly\r\n                    [placeholder]=\"L.numMarks\"\r\n                    [value]=\"marks.length\">\r\n            </mat-form-field>\r\n        </div>\r\n        <app-sub-header *ngIf=\"axesGroup.length > 0\"\r\n            [title]=\"L.axis\">\r\n        </app-sub-header>\r\n        <div *ngFor=\"let axisGroup of axesGroup; let i = index\"\r\n            class=\"w-100 spec\">\r\n            <app-axis-spec\r\n                [auto]=\"auto\"\r\n                [index]=\"i\"\r\n                [group]=\"axisGroup\"\r\n                [task]=\"task\"\r\n                [texts]=\"texts\"\r\n                (scroll)=\"onSpecScroll($event)\">\r\n            </app-axis-spec>\r\n        </div>\r\n        <ng-container *ngIf=\"hasLegend\">\r\n            <app-sub-header [title]=\"L.legend\"> </app-sub-header>\r\n            <div class=\"w-100 spec\">\r\n                <app-legend-spec\r\n                    [auto]=\"auto\"\r\n                    [group]=\"legendGroup\"\r\n                    [task]=\"task\"\r\n                    (scroll)=\"onSpecScroll($event)\">\r\n                </app-legend-spec>\r\n            </div>\r\n        </ng-container>\r\n        <app-custom-spec\r\n            class=\"w-100\"\r\n            *ngFor=\"let group of customGroups; let i = index\"\r\n            [index]=\"i\"\r\n            [group]=\"group\"\r\n            [task]=\"task\"\r\n            [texts]=\"texts\"\r\n            (closed)=\"deleteCustomColumn($event)\"\r\n            (scroll)=\"onSpecScroll($event)\">\r\n\r\n        </app-custom-spec>\r\n        <div class=\"mt-2 d-flex w-100\">\r\n            <button mat-stroked-button\r\n                class=\"mr-2\"\r\n                (click)=\"addCustomColumn(false)\">\r\n                {{ L.addCustomColumn }}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"stage == 2\">\r\n    <div class=\"subtitle py-2\">{{ L.rawData }}</div>\r\n    <div class=\"p-2 d-flex flex-wrap w-100\">\r\n        <app-raw-table\r\n            class=\"w-100\"\r\n            [imgRef]=\"imgRef\"\r\n            [formGroup]=\"formGroup.get(task.key)\"\r\n            [task]=\"task\"\r\n            [boxes]=\"boxes\"\r\n            [hasLegend]=\"hasLegend\"\r\n            [focusedBoxIndex]=\"focusedBoxIndex\"\r\n            [inputType]=\"task.inputType\"\r\n            [pointRadius]=\"pointRadius\"\r\n            [auto]=\"auto\"\r\n            [mode]=\"mode\"\r\n            (focusEmitter)=\"updateFocus($event)\"\r\n            (submitEmitter)=\"onSubmitReady()\">\r\n\r\n        </app-raw-table>\r\n    </div>\r\n</div>\r\n<div class=\"mt-2 w-100 d-flex justify-content-end\">\r\n    <button mat-button class=\"mr-2\"\r\n        (click)=\"goPrevStage()\"\r\n        [disabled]=\"stage === 0\">\r\n        << {{ L.prev }}\r\n    </button>\r\n    <button mat-button\r\n        (click)=\"goNextStage()\"\r\n        [disabled]=\"stage === 2\">\r\n        >> {{ L.next }}\r\n    </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/column-addition-dialog.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/column-addition-dialog.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add custom column</h1>\r\n<div mat-dialog-content>\r\n  <p>Fill the column name</p>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"column.title\">\r\n  </mat-form-field>\r\n<mat-form-field class=\"w-100\">\r\n    <mat-chip-list #chipList>\r\n        <mat-chip *ngFor=\"let label of column.labels\"\r\n            [selectable]=\"true\"\r\n            [removable]=\"true\"\r\n            (removed)=\"remove(label)\">\r\n            {{ label }}\r\n            <mat-icon matChipRemove>cancel</mat-icon>\r\n        </mat-chip>\r\n        <input\r\n            placeholder='Register labels'\r\n            [matChipInputAddOnBlur]=\"true\"\r\n            [matChipInputFor]=\"chipList\"\r\n            [matChipInputSeparatorKeyCodes]=\"separatorKeyCodes\"\r\n            (matChipInputTokenEnd)=\"add($event)\"\r\n            >\r\n    </mat-chip-list>\r\n</mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"column\" cdkFocusInitial>Ok</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/raw-table.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/raw-table.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"styled-scroll raw-table w-100\" [formGroup]=\"formGroup\" #table>\r\n    <div\r\n        *ngIf=\"focusedFeedback && focusedFeedbackKey.startsWith('other')\"\r\n        class=\"w-100 feedback-region my-2 justify-content-start\">\r\n        <div class=\"mr-3\">\r\n            {{ focusedFeedback.comment }}\r\n        </div>\r\n        <app-resolve-button></app-resolve-button>\r\n    </div>\r\n    <div class=\"d-flex\" style=\"padding-left: 80px;\">\r\n        <div *ngFor=\"let column of columns; let i = index\" class=\"column p-2 column-title\">\r\n            {{ column.title }}\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex\">\r\n        <div class=\"index-cell align-self-center\">\r\n            Index\r\n        </div>\r\n        <div *ngFor=\"let column of columns; let i = index\" class=\"column p-2\">\r\n            <mat-form-field>\r\n                <mat-label>{{ L.encoding }}</mat-label>\r\n                <select matNativeControl\r\n                    [value]=\"column.encoding ? column.encoding.value: ''\"\r\n                    (change)=\"onSelectEncoding($event, column)\">\r\n                    <option value='' disabled></option>\r\n                    <option *ngFor=\"let encoding of encodings\"\r\n                        [value]=\"encoding\">\r\n                        {{ L.encodingLabel(encoding) }}\r\n                    </option>\r\n                </select>\r\n            </mat-form-field>\r\n            <div\r\n                *ngIf= \"focusedFeedbackKey === column.path\"\r\n                class=\"feedback-region select\">\r\n                <div>\r\n                    {{ focusedFeedback.comment }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-container *ngIf=\"allChannelsEncoded\">\r\n        <div *ngFor=\"let row of rows let i = index\">\r\n            <div [formGroup]=\"row.group\" class=\"d-flex focus-box\"\r\n                (click)=\"updateFocus(row.markKey)\"\r\n                [class.focused]=\"focusedBoxIndex === row.markKey\">\r\n                <div class=\"index-cell\">\r\n                    {{ i + 1 }}\r\n                </div>\r\n                <div *ngFor=\"let column of columns; let j = index\" class=\"column content-cell\">\r\n                    <ng-container\r\n                        *ngIf=\"!column.labels || column.labels.length == 0\">\r\n                        <input [formControlName]=\"column.title\">\r\n                    </ng-container>\r\n                    <ng-container\r\n                        *ngIf=\"column.labels && column.labels.length > 0\">\r\n                        <svg *ngIf=\"column.encoding\r\n                            && column.encoding.value === 'color'\"\r\n                            class=\"patch\"\r\n                        >\r\n                            <rect\r\n                            [attr.fill]=\"row.attrs[column.title] || '#000'\">\r\n                            </rect>\r\n                        </svg>\r\n                        <app-canvas-patch\r\n                            class=\"patch\"\r\n                            *ngIf=\"column.encoding\r\n                                && column.encoding.value === 'shape'\"\r\n                            [data]=\"row.attrs[column.title]\">\r\n                        </app-canvas-patch>\r\n                        <select [formControlName]=\"column.title\"\r\n                            (change)=\"onChangeLabel(column, row, i)\"\r\n                            class=\"w-100\">\r\n                            <option *ngFor=\"let label of column.labels\" [value]=\"label\">\r\n                                {{ label }}\r\n                            </option>\r\n                        </select>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n            <div\r\n                *ngIf=\"row.markKey === focusedFeedbackKey\"\r\n                class=\"feedback-region justify-content-start my-1\">\r\n                <div class=\"mr-3\">\r\n                    {{ focusedFeedback ? focusedFeedback.comment : '' }}\r\n                </div>\r\n                <app-resolve-button></app-resolve-button>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n<div class=\"w-100 mt-2 d-flex align-items-center\">\r\n    <!-- <button mat-stroked-button color=\"primary\"\r\n        class=\"mr-2\"\r\n        (click)=\"addRow()\">\r\n        Add Row\r\n    </button> -->\r\n    <button mat-stroked-button color=\"primary\"\r\n        class=\"mr-2\"\r\n        (click)=\"clear()\">\r\n        {{ L.clear }}\r\n    </button>\r\n    <button\r\n        mat-flat-button\r\n            color=\"primary\"\r\n            (click)=\"runPrediction()\"\r\n            [disabled]=\"!allChannelsEncoded\">\r\n        {{ L.predict }}\r\n    </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/regression/regression.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/regression/regression.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-2 w-75\" [formGroup]=\"formGroup\">\r\n    <div class=\"table styled-scroll\">\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-100 text-center pr-3 py-2\r\n                d-flex justify-content-between\">\r\n                <div class=\"w-50 text-left\">\r\n                    {{ feature }}\r\n                </div>\r\n                <input\r\n                    [formControl]=\"getControl(feature)\"\r\n                    type=\"number\"\r\n                    class=\"w-25 text-center answer-input\">\r\n        </div>\r\n    </div>\r\n    <div class=\"validate-feedback w-100\">\r\n        <ng-container *ngFor=\"let msg of task.msgs\">\r\n            *{{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/text/text.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/text/text.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-2 d-flex flex-wrap table styled-scroll\">\r\n    <div class=\"d-flex w-100 py-1 border-bottom\">\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-10 text-center\">\r\n            {{feature}}\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.labels.length > 1\"\r\n            class=\"w-25 text-center\">\r\n            Label\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.collectContent\"\r\n            class=\"w-20 text-center\">\r\n            Text\r\n        </div>\r\n    </div>\r\n    <div\r\n        *ngFor=\"let box of boxes\"\r\n        class=\"d-flex w-100\"\r\n        [class.focused]=\"focusedBoxIndex === box.key\">\r\n        <div\r\n            *ngFor=\"let feature of task.features\"\r\n            class=\"w-10 text-center py-1\"\r\n            (click)=\"updateFocus(box.key)\">\r\n            {{ box.points[feature].value }}\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.labels.length > 1\"\r\n            class=\"w-25 text-center px-2 py-1\">\r\n            <select [formControl]=\"box.label\"\r\n                class=\"mat-select\">\r\n                <option *ngFor=\"let label of task.labels\" [value]=\"label\">\r\n                        {{ label }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div\r\n            *ngIf=\"task.collectContent\"\r\n            class=\"w-20 text-center px-2 py-1\">\r\n            <input [formControl]=\"box.text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"validate-feedback w-100 py-2\">\r\n        <ng-container *ngFor=\"let msg of task.msgs\">\r\n            *{{ msg }} <br/>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-mark/feedback-mark.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-mark/feedback-mark.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n    [class.focused]=\"focused\"\r\n    (click)=\"focus.emit(feedback)\">\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-modal/feedback-modal.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-modal/feedback-modal.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-3\" id=\"feedback-container\"\r\n    *ngIf=\"displayModal\"\r\n    #container>\r\n    <div class=\"w-100\r\n        d-flex align-items-center\r\n        position-relative\">\r\n        <div>\r\n            Feedback\r\n        </div>\r\n        <button mat-icon-button\r\n            class=\"close\"\r\n            (click)=\"close()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div class=\"w-100 my-2\">\r\n        {{ feedback ? feedback.comment : '' }}\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end\">\r\n        <button mat-flat-button\r\n            (click)=\"resolve()\">\r\n            Resolve\r\n        </button>\r\n    </div>\r\n    <svg></svg>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/resolve-button/resolve-button.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/resolve-button/resolve-button.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-stroked-button\r\n    class=\"resolve-button\"\r\n    (click)=\"fs.resolve()\">\r\n    {{ L.resolveBtn }}\r\n</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/review-panel/review-panel.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/review-panel/review-panel.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n    *ngIf=\"feedbacks\"\r\n    class=\"w-100 ml-3 p-2 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.title\"></app-sub-header>\r\n    <app-feedback-mark\r\n        class=\"mr-2\"\r\n        *ngFor=\"let feedback of feedbacks let index = i;\"\r\n        [feedback]=\"feedback\"\r\n        [focused]=\"focusedKey === feedback.key\"\r\n        (focus)=\"onFeedbackFocused($event)\">\r\n    </app-feedback-mark>\r\n    <div *ngIf=\"!feedbacks || feedbacks.length === 0\">\r\n        <i>{{ L.msg }}</i>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/sub-header/sub-header.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/sub-header/sub-header.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-2 sub-header\">\r\n    {{ title }}\r\n</div>\r\n<mat-divider class=\"mb-3\"></mat-divider>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/demo/quiz-complete-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/demo/quiz-complete-dialog.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <h1 mat-dialog-title> 귀하께선 퀴즈를 통과하셨습니다. </h1>\r\n    <div mat-dialog-content style=\"height: 150px;\">\r\n        <div class=\"w-100\">\r\n            귀하께선 이 퀴즈를 통과함으로서 본 연구에 참여할 자격이 주어졌습니다. <br/>\r\n            아래의 링크에 접속하셔서 연구 참여에 대한 설명을 읽어보시고 참여를 원하시면 동의와 함께 네이버 아이디를 입력해주세요.\r\n        </div>\r\n        <div class=\"w-100\">\r\n            <a href=\"https://forms.gle/7LQgSnQi8jxx4TMr5\">\r\n                구글 폼 링크\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"w-100 h-100\">\r\n    <mat-sidenav mode=\"side\" opened id=\"side-nav\">\r\n        <app-side-nav\r\n            (remove)=\"onRemoveImage()\"\r\n            [event]=\"eventSubject.asObservable()\">\r\n        </app-side-nav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <div\r\n            class=\"w-100 h-100 d-flex\">\r\n            <div class=\"w-50 h-100\">\r\n                <div class=\"w-100 p-2 d-flex align-items-center edit-header\">\r\n                    {{ L.mode }}:\r\n                    {{ L.currMode(mode) }}\r\n                    <b *ngIf=\"config\">\r\n                        {{ config.service === 'normal'\r\n                            ? ''\r\n                            : '[' + L.service(config.service) + ']'\r\n                        }}\r\n                    </b>\r\n                </div>\r\n                <div id=\"image-zone\" class=\"w-100 h-75\r\n            d-flex justify-content-center align-items-center\r\n            position-relative\"\r\n                    [class.selected]=\"selectedImage\"\r\n                    #imgZone>\r\n                    <div class=\"position-absolute image-region\" [class.selected]=\"selectedImage\">\r\n                        <img #img>\r\n                    </div>\r\n\r\n                    <div class=\"position-absolute svg-region\" [class.selected]=\"selectedImage\">\r\n                        <svg #svg></svg>\r\n                    </div>\r\n                    <div *ngIf=\"noImagesLeft\"\r\n                        class=\"position-absolute w-100 h-100\r\n                            d-flex flex-column justify-content-center align-items-center\">\r\n                        <h3 class=\"w-100 mb-3 text-center\">\r\n                            COMPLETE\r\n                        </h3>\r\n                        <div class=\"px-4 desc\">\r\n                            {{ L.completeMsg1 }}\r\n                            <br/>\r\n                            {{ L.completeMsg2 }}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"w-50 right-panel styled-scroll\"\r\n                *ngIf=\"mode !== 'verification'\">\r\n                <app-annotation-module\r\n                    *ngIf=\"formGroup\"\r\n                    [formGroup]=\"formGroup\"\r\n                    [config]=\"config\"\r\n                    [imgRef]=\"imgRef\"\r\n                    [spacePressed]=\"spacePressed\"\r\n                    [svgS]=\"svgS\"\r\n                    [event]=\"eventSubject.asObservable()\"\r\n                    [mode]=\"mode\"\r\n                    (submitEmitter)=\"submit()\">\r\n                </app-annotation-module>\r\n            </div>\r\n            <div *ngIf=\"mode === 'verification' && config\"\r\n                class=\"w-50 right-panel styled-scroll\" >\r\n                <app-verification-module\r\n                    [config]=\"config\"\r\n                    [verificationDatas]=\"verificationDatas\"\r\n                    [onImageLoad]=\"onImageLoad\"\r\n                    [imgRef]=\"imgRef\"\r\n                    [svgS]=\"svgS\"\r\n                    (reviewEmitter)=\"onReviewSubmitted()\"\r\n                >\r\n                </app-verification-module>\r\n            </div>\r\n        </div>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<app-feedback-modal></app-feedback-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/side-nav/side-nav.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/side-nav/side-nav.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n    class=\"d-flex align-items-center justify-content-between w-100\r\n        side-panel\">\r\n\r\n</div>\r\n<mat-list *ngIf=\"progress\">\r\n    <div mat-list-item mat-subheader\r\n        *ngIf=\"config && config.isNormalMode\"\r\n        class=\"p-2 pl-3 progress-info\">\r\n        {{ L.sideNav.progress }}:\r\n        <span class=\"annotated mx-1\">{{ progress.approved }}</span>\r\n        /\r\n        {{ progress.total - progress.ignored}}\r\n        <span class=\"ignored mx-1\">({{progress.ignored}})</span>\r\n    </div>\r\n    <div mat-list-item mat-subheader class=\"p-2 pl-3 progress-info\">\r\n        {{ L.sideNav.userName }}:\r\n        <span class=\"mx-1 annotated\">\r\n            <strong>{{ userName }}</strong>\r\n        </span>\r\n    </div>\r\n    <div mat-list-item mat-subheader\r\n        *ngIf=\"config && config.isNormalMode && config.sharedDataset\"\r\n        class=\"p-2 pl-3 progress-info\">\r\n        {{ L.sideNav.userProgress }}:\r\n        <span class=\"mx-1 annotated\">\r\n            <strong>{{ userProgress }}</strong>\r\n        </span>\r\n    </div>\r\n</mat-list>\r\n<mat-action-list>\r\n    <button mat-list-item mat-subheader\r\n        (click)=\"autoListShow= !autoListShow\">\r\n        <div class=\"w-100 px-1\r\n            d-flex justify-content-between align-items-center\">\r\n            <div>\r\n                {{ L.sideNav.useSuggestions }}\r\n            </div>\r\n            <div>\r\n                <mat-icon>{{ autoListShow ? 'remove' : 'add_circle_outline'}}</mat-icon>\r\n            </div>\r\n        </div>\r\n    </button>\r\n    <ng-container *ngIf=\"autoListShow\">\r\n        <div *ngFor=\"let modelInfo of modelInfos\" mat-list-item class=\"py-2\">\r\n            <mat-checkbox mat-subheader (change)=\"onChangeAutoComplete($event, modelInfo)\">{{ modelInfo.name }} ({{ modelInfo.scoreFormat }})</mat-checkbox>\r\n        </div>\r\n    </ng-container>\r\n</mat-action-list>\r\n<ng-container *ngIf=\"config && config.isNormalMode\">\r\n\r\n    <!-- <div *ngIf=\"edit.image\" class=\"p-3 w-100 justify-content-center\">\r\n        {{ imageName }}\r\n    </div> -->\r\n    <div *ngIf=\"edit.image\"\r\n        class=\"d-flex align-items-center justify-content-between w-100\r\n            side-panel\">\r\n        <button mat-stroked-button color=\"warn\" (click)=\"removeImage()\">\r\n            <div class=\"d-flex justify-content-between align-items-center\">\r\n                <mat-icon class=\"mr-1\">delete_outline</mat-icon>\r\n                <div>\r\n                    {{ L.sideNav.removeButton }}\r\n                </div>\r\n            </div>\r\n        </button>\r\n    </div>\r\n    <!-- <div *ngIf=\"edit.image\"\r\n        class=\"d-flex align-items-center justify-content-between w-100\r\n            side-panel mt-2\">\r\n        <button mat-stroked-button color=\"warn\" (click)=\"getRandImage()\">\r\n            SKIP\r\n        </button>\r\n    </div> -->\r\n</ng-container>\r\n\r\n<!-- <mat-action-list>\r\n    <button mat-list-item mat-subheader\r\n        (click)=\"imageListShow = !imageListShow\">\r\n        <div class=\"w-100 px-1\r\n            d-flex justify-content-between align-items-center\">\r\n            <div>Image List</div>\r\n            <div>\r\n                <mat-icon>{{ imageListShow ? 'remove' : 'add_circle_outline'}}</mat-icon>\r\n            </div>\r\n        </div>\r\n    </button>\r\n    <ng-container *ngIf=\"imageListShow\">\r\n        <button mat-list-item *ngFor=\"let image of edit.images; let i=index\"\r\n        [class.selected]=\"edit.selectedImage && image.path === edit.selectedImage.path\"\r\n        (click)=\"selectImage(image)\">\r\n\r\n        </button>\r\n    </ng-container>\r\n    <mat-divider></mat-divider>\r\n</mat-action-list> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/feedback-card/feedback-card.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/feedback-card/feedback-card.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n    [formGroup]=\"form\"\r\n    [class.focused]=\"feedback.key === focusedKey\"\r\n    (click)=\"onFocus()\"\r\n    class=\"w-100 wrapper\">\r\n    <mat-divider class=\"w-100 my-1\"></mat-divider>\r\n    <div class=\"w-100 d-flex justify-content-between\">\r\n        <div class=\"w-100 d-flex align-items-center\">\r\n            <mat-form-field\r\n                *ngIf=\"!directInput\"\r\n                class=\"w-50\">\r\n                <mat-label>\r\n                    {{ L.feedbackCard.comment }}\r\n                </mat-label>\r\n                <mat-select\r\n                    appStopPropagation\r\n                    formControlName=\"comment\">\r\n                    <mat-option *ngFor=\"let comment of comments\" [value]=\"comment\">\r\n                        {{ comment }}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field\r\n                *ngIf=\"directInput\"\r\n                class=\"w-50\">\r\n                <input\r\n                    appStopPropagation matInput\r\n                    formControlName=\"comment\" placeholder=\"Comment\" />\r\n            </mat-form-field>\r\n            <mat-checkbox\r\n                appStopPropagation\r\n                class=\"ml-3\"\r\n                (change)=\"checkWriteMode($event)\">\r\n                {{ L.feedbackCard.writeDirect }}\r\n            </mat-checkbox>\r\n        </div>\r\n        <button mat-icon-button\r\n            (click)=\"remove.emit(form)\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-classification/v-classification.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-classification/v-classification.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header title=\"Labels\"></app-sub-header>\r\n    <ng-container *ngIf=\"data\">\r\n        <button mat-flat-button\r\n            *ngFor=\"let label of data.labels\"\r\n            (click)=\"clickLabelButton(label)\"\r\n            class=\"mr-2 label-button\"\r\n            [class.selected]=\"label === data.label\">\r\n            {{ label }}\r\n        </button>\r\n    </ng-container>\r\n    <div\r\n        *ngIf=\"!feedbackForm\"\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-button (click)=\"update('')\">\r\n            Add Feedback\r\n        </button>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"feedbackForm\"\r\n    [formGroup]=\"feedbackForm\"\r\n    class=\"my-2\">\r\n    <mat-divider class=\"w-100\"></mat-divider>\r\n    <div class=\"w-100 d-flex justify-content-end\">\r\n        <button mat-icon-button\r\n            (click)=\"remove()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </div>\r\n    <mat-form-field class=\"w-100\">\r\n        <input matInput\r\n            placeholder=\"Comment\"\r\n            formControlName=\"comment\"/>\r\n    </mat-form-field>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 mt-2 spec-table\">\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.title.key\"\r\n            (click)=\"emit(data.title)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.axis }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ data.title.value }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.dir.key\"\r\n            (click)=\"emit(data.dir)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.dir }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.dir.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.type.key\"\r\n            (click)=\"emit(data.type)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.type }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.type.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.unit.key\"\r\n            (click)=\"emit(data.unit)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.unit }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.unit.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.encoding.key\"\r\n            (click)=\"emit(data.encoding)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.encoding }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ L.encodingLabel(data.encoding.value) }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.labels.key\"\r\n            (click)=\"emit(data.labels)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.labels }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ labels }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\"\r\n        *ngIf=\"data.markLabels && data.markLabels.value.length > 0\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.markLabels.key\"\r\n            (click)=\"emit(data.markLabels)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.markLabels }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ markLabels }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 mt-2 spec-table\">\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.title.key\"\r\n            (click)=\"emit(data.title)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.custom }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ data.title.value }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.type.key\"\r\n            (click)=\"emit(data.type)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.type }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.type.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.unit.key\"\r\n            (click)=\"emit(data.unit)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.unit }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ data.unit.value }}\r\n            </div>\r\n        </div>\r\n        <div class=\"focus-unit w-50\"\r\n            [class.focused]=\"focusedKey === data.encoding.key\"\r\n            (click)=\"emit(data.encoding)\">\r\n            <div class=\"w-25 p-2 cell-title\">\r\n                {{ L.encoding }}\r\n            </div>\r\n            <div class=\"w-75 p-2\">\r\n                {{ L.encodingLabel(data.encoding.value) }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.markLabels.key\"\r\n            (click)=\"emit(data.markLabels)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.markLabels }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ markLabels }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 mt-2 spec-table\">\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-100\"\r\n            [class.focused]=\"focusedKey === data.title.key\"\r\n            (click)=\"emit(data.title)\">\r\n            <div class=\"w-125 p-2 cell-title\">\r\n                {{ L.legend }}\r\n            </div>\r\n            <div class=\"w-875 p-2\">\r\n                {{ data.title.value }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex w-100\">\r\n        <div class=\"focus-unit w-25\"\r\n            [class.focused]=\"focusedKey === data.encoding.key\"\r\n            (click)=\"emit(data.encoding)\">\r\n            <div class=\"w-50 p-2 cell-title\">\r\n                {{ L.encoding }}\r\n            </div>\r\n            <div class=\"w-50 p-2\">\r\n                {{ L.encodingLabel(data.encoding.value) }}\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex w-75\">\r\n            <div class=\"focus-unit w-100\"\r\n                [class.focused]=\"focusedKey === data.labels.key\"\r\n                (click)=\"emit(data.labels)\">\r\n                <div class=\"w-25 p-2 cell-title\">\r\n                    {{ L.labels }}\r\n\r\n                </div>\r\n                <div class=\"w-75 p-2\">\r\n                    {{ labels }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/v-overall.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/v-overall.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 styled-scroll wrapper\">\r\n\r\n<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.marks\"></app-sub-header>\r\n    <ng-container *ngIf=\"data\">\r\n        <div\r\n            *ngFor=\"let mark of data.marks; let i = index\"\r\n            class=\"mr-2 mark-label\"\r\n            [class.focused]=\"focusedKey === mark.key\"\r\n            (click)=\"clickMark(mark)\">\r\n            {{ i + 1 }}\r\n        </div>\r\n    </ng-container>\r\n    <div\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-stroked-button (click)=\"addMarkFeedback()\">\r\n            {{ L.addMarksFeedback }}\r\n        </button>\r\n    </div>\r\n    <app-feedback-card\r\n        *ngFor=\"let form of markFeedbacks\"\r\n        [form]=\"form\"\r\n        [focusedKey]=\"focusedKey\"\r\n        [comments]=\"markComments\"\r\n        (focus)=\"focus.emit($event)\"\r\n        (remove)=\"removeMarkFeedback($event)\">\r\n    </app-feedback-card>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.texts\"></app-sub-header>\r\n    <ng-container *ngIf=\"data\">\r\n        <div class=\"d-flex w-100 align-items-center text-label title\">\r\n            <div class=\"label-cell px-2\">\r\n                Label\r\n            </div>\r\n            <div class=\"label-cell px-2\">\r\n                Text\r\n            </div>\r\n        </div>\r\n        <mat-divider class=\"w-100\"></mat-divider>\r\n        <div\r\n            *ngFor=\"let text of data.texts; let i = index\"\r\n            class=\"d-flex w-100 align-items-center text-label\"\r\n            [class.focused]=\"focusedKey === text.key\"\r\n            [class.odd-row]=\"i % 2 === 1\"\r\n            (click)=\"clickText(text)\">\r\n            <div class=\"label-cell px-2\">\r\n                {{ L.label(text.label) }}\r\n            </div>\r\n            <div class=\"text-cell px-2\">\r\n                {{ text.text }}\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <div\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-stroked-button (click)=\"addTextFeedback()\">\r\n            {{ L.addTextsFeedback }}\r\n        </button>\r\n    </div>\r\n    <app-feedback-card\r\n        *ngFor=\"let form of textFeedbacks\"\r\n        [form]=\"form\"\r\n        [focusedKey]=\"focusedKey\"\r\n        [comments]=\"textComments\"\r\n        (focus)=\"focus.emit($event)\"\r\n        (remove)=\"removeTextFeedback($event)\">\r\n    </app-feedback-card>\r\n</div>\r\n\r\n\r\n<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.spec\"></app-sub-header>\r\n    <ng-container *ngIf=\"data\">\r\n        <div class=\"w-100 spec-table\">\r\n            <div class=\"d-flex w-100 focus-unit\"\r\n                [class.focused]=\"data.spec.title.key === focusedKey\"\r\n                (click)=\"clickCell(data.spec.title.key)\">\r\n                <div class=\"w-125 p-2 cell-title\">\r\n                    {{ L.title }}\r\n                </div>\r\n                <div class=\"w-875 p-2\">\r\n                    {{ data.spec.title.value }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-axis-spec-card\r\n            *ngFor=\"let axis of data.spec.axes; let i = index\"\r\n            [data]=\"axis\"\r\n            [index]=\"i\"\r\n            [focusedKey]=\"focusedKey\"\r\n            (focus)=\"clickCell($event)\">\r\n        </app-axis-spec-card>\r\n        <app-legend-spec-card\r\n            *ngIf=\"data.spec.legend\"\r\n            [data]=\"data.spec.legend\"\r\n            [focusedKey]=\"focusedKey\"\r\n            (focus)=\"clickCell($event)\">\r\n        </app-legend-spec-card>\r\n        <app-custom-spec-card\r\n            *ngFor=\"let custom of data.spec.customs; let i = idnex\"\r\n            [data]=\"custom\"\r\n            [index]=\"i\"\r\n            [focusedKey]=\"focusedKey\"\r\n            (focus)=\"clickCell($event)\">\r\n        </app-custom-spec-card>\r\n    </ng-container>\r\n    <div\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-stroked-button (click)=\"addSpecFeedback()\">\r\n            {{ L.addSpecFeedback }}\r\n        </button>\r\n    </div>\r\n    <app-feedback-card\r\n        *ngFor=\"let form of specFeedbacks\"\r\n        [form]=\"form\"\r\n        [focusedKey]=\"focusedKey\"\r\n        [comments]=\"specComments\"\r\n        (focus)=\"focus.emit($event)\"\r\n        (remove)=\"removeSpecFeedback($event)\">\r\n    </app-feedback-card>\r\n</div>\r\n\r\n\r\n<div class=\"w-100 d-flex align-items-center flex-wrap\">\r\n    <app-sub-header [title]=\"L.rawData\"></app-sub-header>\r\n    <div *ngIf=\"data\"\r\n        class=\"w-100 raw-table\">\r\n        <div class=\"d-flex w-100 align-items-center text-label title\">\r\n            <div *ngFor=\"let key of data.raw.keys\" class=\"label-cell px-2\">\r\n                {{ key }}\r\n            </div>\r\n        </div>\r\n        <mat-divider class=\"w-100\"></mat-divider>\r\n        <div\r\n            *ngFor=\"let row of data.raw.rows; let i = index\"\r\n            class=\"d-flex w-100 align-items-center text-label\"\r\n            [class.focused]=\"focusedKey === row.key\"\r\n            [class.odd-row]=\"i % 2 === 1\"\r\n            (click)=\"clickRow(row)\">\r\n            <div\r\n                *ngFor=\"let key of data.raw.keys\"\r\n                class=\"label-cell px-2\">\r\n                {{ row.value[key] }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div\r\n        class=\"w-100 my-2 mt-3 d-flex justify-content-end\">\r\n        <button mat-stroked-button (click)=\"addRawFeedback()\">\r\n            {{ L.addRawFeedback }}\r\n        </button>\r\n    </div>\r\n    <app-feedback-card\r\n        *ngFor=\"let form of rawFeedbacks\"\r\n        [form]=\"form\"\r\n        [focusedKey]=\"focusedKey\"\r\n        [comments]=\"rawComments\"\r\n        (focus)=\"focus.emit($event)\"\r\n        (remove)=\"removeRawFeedback($event)\">\r\n    </app-feedback-card>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/verification-module.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/verification-module.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-vertical-stepper linear\r\n    #stepper>\r\n    <ng-container *ngFor=\"let task of config.tasks; let i = index\">\r\n        <mat-step>\r\n            <ng-template matStepLabel>{{ task.command }}</ng-template>\r\n            <ng-container [ngSwitch]=\"task.taskType\">\r\n                <ng-container *ngSwitchCase=\"'C'\">\r\n                    <app-v-classification\r\n                        [task]=\"task\"\r\n                        [data]=\"verificationDatas[i]\"\r\n                        (addFeedback)=\"onAddFeedback($event)\"\r\n                        (removeFeedback)=\"onRemoveFeedback($event)\">\r\n                    </app-v-classification\r\n>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-container [ngSwitch]=\"task.taskType\">\r\n                <ng-container *ngSwitchCase=\"'O'\">\r\n                    <app-v-overall\r\n                        [task]=\"task\"\r\n                        [data]=\"verificationDatas[i]\"\r\n                        [onImageLoad]=\"onImageLoad\"\r\n                        [imgRef]=\"imgRef\"\r\n                        [svgS]=\"svgS\"\r\n                        [focusedKey]=\"focusedKey\"\r\n                        (add)=\"onAddFeedback($event)\"\r\n                        (remove)=\"onRemoveFeedback($event)\"\r\n                        (focus)=\"focusedKey = $event\">\r\n                    </app-v-overall>\r\n                </ng-container>\r\n            </ng-container>\r\n        </mat-step>\r\n    </ng-container>\r\n</mat-vertical-stepper>\r\n<app-review-panel\r\n    [feedbackForms]=\"feedbackForms\"\r\n    [focusedKey]=\"focusedKey\"\r\n    (focus)=\"focusedKey = $event\">\r\n</app-review-panel>\r\n<div class=\"w-100 d-flex justify-content-end align-items-center pr-3\">\r\n    <button mat-flat-button\r\n        class=\"mr-3\"\r\n        color=\"primary\"\r\n        [disabled]=\"feedbackForms.length > 0\"\r\n        (click)=\"sendReview(true)\">\r\n        {{ L.verModule.accept }}\r\n    </button>\r\n    <button mat-flat-button\r\n        color=\"primary\"\r\n        [disabled]=\"feedbackForms.length === 0\"\r\n        (click)=\"sendReview(false)\">\r\n        {{ L.verModule.reject }}\r\n    </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 p-3 d-flex justify-content-center\">\r\n    <h1>\r\n        다음은 반자동 어노에티션 연구를 위한 크라우드소싱 실험 페이지입니다.\r\n    </h1>\r\n</div>\r\n<div class=\"w-100 mt-3 p-3 d-flex justify-content-center\">\r\n    <div class=\"mr-4 w-20\">\r\n        <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput\r\n                pattern=\"[A-Za-z0-9_]{1,10}\"\r\n                placeholder=\"Name\"\r\n                [(ngModel)]=\"name\"/>\r\n            <mat-hint>\r\n                아이디는 영문과 숫자의 조합으로만 구성해주세요.\r\n            </mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"w-100\">\r\n            <input matInput\r\n                type=\"password\"\r\n                placeholder=\"Password\"\r\n                [(ngModel)]=\"password\"/>\r\n            <mat-hint>\r\n                비밀번호는 최초 1회 설정한 값으로 지속되며 암호화되서 저장됩니다 (8자리 이상으로 입력해주세요).\r\n            </mat-hint>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <button mat-flat-button\r\n        class=\"my-2\"\r\n        color=\"primary\"\r\n        (click)=\"login()\" >\r\n        LOGIN\r\n    </button>\r\n</div>\r\n<div class=\"w-100 mt-3 p-3 d-flex justify-content-center\"\r\n    color=\"warn\">\r\n    {{ warnMessage }}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/non-active-page/non-active-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/non-active-page/non-active-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n    There is no active instance.\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _non_active_page_non_active_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./non-active-page/non-active-page.component */ "./src/app/non-active-page/non-active-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'none', component: _non_active_page_non_active_page_component__WEBPACK_IMPORTED_MODULE_4__["NonActivePageComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\n  height: 100vh;\n  width: 100vw;\n}\n\na {\n  color: white;\n  margin-right: 10px;\n  text-decoration: none;\n}\n\na.menu {\n  font-size: 15px;\n  color: #EEE;\n}\n\na.menu:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEubWVudSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI0VFRTtcclxufVxyXG5cclxuYS5tZW51OmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4iLCIjd3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEubWVudSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNFRUU7XG59XG5cbmEubWVudTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network.service */ "./src/app/network.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/config */ "./src/app/common/config.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let AppComponent = class AppComponent {
    constructor(network, configService) {
        this.network = network;
        this.configService = configService;
    }
    ngOnInit() {
        this.configService.checkInstanceObservable.subscribe(_ => {
            this.checkInstance();
        });
    }
    checkInstance() {
        this.network.checkInstance(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mode)
            .then((status) => {
            this.status = status;
            if (this.status.active) {
                this.configService
                    .setConfig(new _common_config__WEBPACK_IMPORTED_MODULE_4__["Config"](this.status.config));
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
        _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _edit_file_drop_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/file-drop.directive */ "./src/app/edit/file-drop.directive.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/annotation-module */ "./src/app/edit/annotation-module/index.ts");
/* harmony import */ var _edit_verification_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/verification-module */ "./src/app/edit/verification-module/index.ts");
/* harmony import */ var _edit_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit/common */ "./src/app/edit/common/index.ts");
/* harmony import */ var _edit_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit/side-nav/side-nav.component */ "./src/app/edit/side-nav/side-nav.component.ts");
/* harmony import */ var _non_active_page_non_active_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./non-active-page/non-active-page.component */ "./src/app/non-active-page/non-active-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _edit_annotation_module_overall_custom_spec_custom_spec_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit/annotation-module/overall/custom-spec/custom-spec.component */ "./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.ts");
/* harmony import */ var _edit_annotation_module_overall_label_chip_list_label_chip_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit/annotation-module/overall/label-chip-list/label-chip-list.component */ "./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.ts");
/* harmony import */ var _edit_verification_module_feedback_card_feedback_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit/verification-module/feedback-card/feedback-card.component */ "./src/app/edit/verification-module/feedback-card/feedback-card.component.ts");
/* harmony import */ var _edit_verification_module_v_overall_axis_spec_card_axis_spec_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component */ "./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.ts");
/* harmony import */ var _edit_verification_module_v_overall_legend_spec_card_legend_spec_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component */ "./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.ts");
/* harmony import */ var _edit_verification_module_v_overall_custom_spec_card_custom_spec_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component */ "./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.ts");
/* harmony import */ var _edit_common_stop_propagtion_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit/common/stop-propagtion.directive */ "./src/app/edit/common/stop-propagtion.directive.ts");
/* harmony import */ var _edit_common_resolve_button_resolve_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit/common/resolve-button/resolve-button.component */ "./src/app/edit/common/resolve-button/resolve-button.component.ts");
/* harmony import */ var _edit_demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit/demo/quiz-complete-dialog.component */ "./src/app/edit/demo/quiz-complete-dialog.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
            _edit_file_drop_directive__WEBPACK_IMPORTED_MODULE_7__["FileDropDirective"],
            _edit_common_stop_propagtion_directive__WEBPACK_IMPORTED_MODULE_23__["StopPropagationDirective"],
            _edit_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_14__["SideNavComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["ClassificationComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["RegressionComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["BoundingBoxComponent"],
            _non_active_page_non_active_page_component__WEBPACK_IMPORTED_MODULE_15__["NonActivePageComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["TextComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["OverallComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["AxisSpecComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["RawTableComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["LegendSpecComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["ColumnAdditionDialogComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["CanvasPatchComponent"],
            _edit_verification_module__WEBPACK_IMPORTED_MODULE_12__["VerificationModuleComponent"],
            _edit_verification_module__WEBPACK_IMPORTED_MODULE_12__["VClassificationComponent"],
            _edit_common__WEBPACK_IMPORTED_MODULE_13__["VSubTitleComponent"],
            _edit_common__WEBPACK_IMPORTED_MODULE_13__["FeedbackMarkComponent"],
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["AnnotationModuleComponent"],
            _edit_common__WEBPACK_IMPORTED_MODULE_13__["ReviewPanelComponent"],
            _edit_common__WEBPACK_IMPORTED_MODULE_13__["FeedbackModalComponent"],
            _edit_verification_module__WEBPACK_IMPORTED_MODULE_12__["VOverallComponent"],
            _edit_annotation_module_overall_custom_spec_custom_spec_component__WEBPACK_IMPORTED_MODULE_17__["CustomSpecComponent"],
            _edit_annotation_module_overall_label_chip_list_label_chip_list_component__WEBPACK_IMPORTED_MODULE_18__["LabelChipListComponent"],
            _edit_verification_module_feedback_card_feedback_card_component__WEBPACK_IMPORTED_MODULE_19__["FeedbackCardComponent"],
            _edit_verification_module_v_overall_axis_spec_card_axis_spec_card_component__WEBPACK_IMPORTED_MODULE_20__["AxisSpecCardComponent"],
            _edit_verification_module_v_overall_legend_spec_card_legend_spec_card_component__WEBPACK_IMPORTED_MODULE_21__["LegendSpecCardComponent"],
            _edit_verification_module_v_overall_custom_spec_card_custom_spec_card_component__WEBPACK_IMPORTED_MODULE_22__["CustomSpecCardComponent"],
            _edit_common_resolve_button_resolve_button_component__WEBPACK_IMPORTED_MODULE_24__["ResolveButtonComponent"],
            _edit_demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["QuizCompleteDialogComponent"],
        ],
        entryComponents: [
            _edit_annotation_module__WEBPACK_IMPORTED_MODULE_11__["ColumnAdditionDialogComponent"],
            _edit_demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["QuizCompleteDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/config.ts":
/*!**********************************!*\
  !*** ./src/app/common/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task/task */ "./src/app/common/task/task.ts");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/app/common/task/index.ts");



class Config {
    constructor(raw) {
        this.key = raw['key'];
        this.sharedDataset = raw['sharedDataset'] || false;
        this.verification = raw['verification'] || false;
        this.service = raw['service'];
        this.tasks = raw['tasks']
            .map((task) => {
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
    parsePrediction(predictData) {
        this.tasks.forEach(task => {
            task.parsePrediction(predictData.labels[task.key]);
        });
    }
    parsePrevAnnotation(formGroup, annotation, fb) {
        this.tasks.forEach(task => {
            task.parsePrevAnnotation(formGroup, annotation[task.key], fb);
        });
    }
    parseVerificationData(data) {
        return this.tasks.map(task => {
            return task.parseForVerification(data.annotation[task.key]);
        });
    }
    get isNormalMode() {
        return this.service === 'normal';
    }
}


/***/ }),

/***/ "./src/app/common/edit-data.ts":
/*!*************************************!*\
  !*** ./src/app/common/edit-data.ts ***!
  \*************************************/
/*! exports provided: ModelInfo, ImageElem, PredictData, AnnotatedImageData, AnnotationMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelInfo", function() { return ModelInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageElem", function() { return ImageElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictData", function() { return PredictData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotatedImageData", function() { return AnnotatedImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationMeta", function() { return AnnotationMeta; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ModelInfo {
    constructor(raw) {
        this.key = raw['key'];
        this.name = raw['name'];
        this.score = raw['score'];
    }
    get scoreFormat() {
        if (typeof this.score === 'number') {
            return this.score.toFixed(2);
        }
        else {
            return Object.values(this.score)
                .map(d => d.toFixed(2))
                .join(' / ');
        }
    }
}
class ImageElem {
    constructor(path, blob, src, meta) {
        this.path = path;
        this.blob = blob;
        this.src = src;
        this.meta = meta;
        this.semi = false;
        const splited = this.path.split('/');
        this.name = splited[splited.length - 1];
    }
    get hasPrevAnnotation() {
        return !!this.meta && !!this.meta.annotation;
    }
}
class PredictData {
    constructor(raw) {
        this.semi = raw['semi'];
        this.labels = raw['labels'];
    }
    getBoundingBox(key, width, height) {
        if (this.labels[key][0] < 0.5) {
            return null;
        }
        else {
            const label = this.labels[key].slice(1);
            label[0] *= width;
            label[2] *= width;
            label[1] *= height;
            label[1] *= height;
            return label;
        }
    }
}
class AnnotatedImageData {
    constructor(raw) {
        this.path = raw['path'];
        this.annotation = raw['annotation'];
    }
}
class AnnotationMeta {
    constructor(raw) {
        this.path = raw['path'];
        this.feedbacks = raw['feedbacks'];
        this.annotation = raw['annotation'] || null;
    }
}


/***/ }),

/***/ "./src/app/common/task/bounding-box.ts":
/*!*********************************************!*\
  !*** ./src/app/common/task/bounding-box.ts ***!
  \*********************************************/
/*! exports provided: BoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return BoundingBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/app/common/task/task.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



class BoundingBox extends _task__WEBPACK_IMPORTED_MODULE_1__["Task"] {
    constructor(raw) {
        super(raw);
        this.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_BBOX"];
        this.labels = raw['labels'].slice(1);
        this.features = ['x0', 'y0', 'x1', 'y1'];
    }
    registerControl(formGroup, fb) {
        formGroup.addControl(this.key, fb.group({}));
    }
    updateBox(formGroup, raw) {
        const group = formGroup.get(this.key);
        const num = (value) => +value.toFixed(3);
        if (group.get(raw.key) === null) {
            const newControl = this.features.reduce((acc, curr) => {
                acc[curr] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](num(raw[curr]));
                return acc;
            }, {});
            newControl['label'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.label || this.labels[0]);
            group.addControl(raw.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](newControl));
        }
        else {
            this.features.forEach(feature => {
                if (raw[feature] !== null) {
                    group.get(raw.key).get(feature).setValue(num(raw[feature]));
                }
            });
        }
    }
    parsePrediction(raw) {
        const predicts = raw;
        this.prediction = predicts.map((d, i) => {
            const [x0, y0, x1, y1] = d['bound'];
            const label = d['label'];
            return ({
                key: i.toString(),
                x0, y0, x1, y1,
                label: label
            });
        });
    }
    applyPrediction(formGroup) {
        if (this.prediction) {
            this.prediction.forEach(raw => {
                this.updateBox(formGroup, raw);
            });
        }
    }
    deleteBox(formGroup, key) {
        const group = formGroup.get(this.key);
        group.removeControl(key);
    }
    getFormValue(formGroup) {
        const group = formGroup.get(this.key);
        return Object.values(group.controls).map(boxControl => {
            return ({
                bound: this.features.map(feature => boxControl.get(feature).value),
                label: boxControl.get('label').value
            });
        });
    }
}


/***/ }),

/***/ "./src/app/common/task/classification.ts":
/*!***********************************************!*\
  !*** ./src/app/common/task/classification.ts ***!
  \***********************************************/
/*! exports provided: Classification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Classification", function() { return Classification; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/app/common/task/task.ts");
/* harmony import */ var _verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../verification-data */ "./src/app/common/verification-data.ts");



class Classification extends _task__WEBPACK_IMPORTED_MODULE_1__["Task"] {
    constructor(raw) {
        super(raw);
        this.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_CLASSIFICATION"];
        this.labels = raw['labels'];
    }
    registerControl(formGroup, fb) {
        formGroup.addControl(this.key, fb.control(this.labels[0]));
    }
    parsePrediction(raw) {
        this.prediction = raw;
    }
    parseForVerification(raw) {
        return new _verification_data__WEBPACK_IMPORTED_MODULE_2__["VClassificationData"](this.key, raw['label'], this.labels);
    }
    parsePrevAnnotation(formGroup, raw, fb) {
        formGroup.get(this.key).setValue(raw['label']);
    }
    updateBox(formGroup, raw) {
        formGroup.get(this.key).setValue(raw);
    }
    getFormValue(formGroup) {
        return {
            label: formGroup.get(this.key).value
        };
    }
}


/***/ }),

/***/ "./src/app/common/task/index.js":
/*!**************************************!*\
  !*** ./src/app/common/task/index.js ***!
  \**************************************/
/*! exports provided: TASK_CLASSIFICATION, TASK_REGRESSION, TASK_BBOX, TASK_TEXT, TASK_OVERALL, Task, Classification, Regression, KEY_TITLE, KEY_X_AXIS_TITLE, KEY_Y_AXIS_TITLE, KEY_X_AXIS_LABEL, KEY_Y_AXIS_LABEL, KEY_LEGEND_TITLE, KEY_LEGEND_LABEL, KEY_MARK_LABEL, LABEL_PRIORITY, Overall, textComparator, Text, BoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/app/common/task/task.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_CLASSIFICATION", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_CLASSIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_REGRESSION", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_REGRESSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_BBOX", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_BBOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_TEXT", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_OVERALL", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_OVERALL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["Task"]; });

/* harmony import */ var _classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classification */ "./src/app/common/task/classification.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Classification", function() { return _classification__WEBPACK_IMPORTED_MODULE_2__["Classification"]; });

/* harmony import */ var _regression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regression */ "./src/app/common/task/regression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Regression", function() { return _regression__WEBPACK_IMPORTED_MODULE_3__["Regression"]; });

/* harmony import */ var _overall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overall */ "./src/app/common/task/overall.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_TITLE", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_TITLE", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_TITLE", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_LABEL", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_LABEL", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_TITLE", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_LEGEND_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_LABEL", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_LEGEND_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_MARK_LABEL", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LABEL_PRIORITY", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["LABEL_PRIORITY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overall", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["Overall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textComparator", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["textComparator"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./src/app/common/task/text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_5__["Text"]; });

/* harmony import */ var _bounding_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bounding-box */ "./src/app/common/task/bounding-box.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return _bounding_box__WEBPACK_IMPORTED_MODULE_6__["BoundingBox"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/common/task/index.ts":
/*!**************************************!*\
  !*** ./src/app/common/task/index.ts ***!
  \**************************************/
/*! exports provided: TASK_CLASSIFICATION, TASK_REGRESSION, TASK_BBOX, TASK_TEXT, TASK_OVERALL, Task, Classification, Regression, KEY_TITLE, KEY_X_AXIS_TITLE, KEY_Y_AXIS_TITLE, KEY_X_AXIS_LABEL, KEY_Y_AXIS_LABEL, KEY_LEGEND_TITLE, KEY_LEGEND_LABEL, KEY_MARK_LABEL, LABEL_PRIORITY, Overall, textComparator, Text, BoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/app/common/task/task.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_CLASSIFICATION", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_CLASSIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_REGRESSION", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_REGRESSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_BBOX", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_BBOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_TEXT", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TASK_OVERALL", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["TASK_OVERALL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["Task"]; });

/* harmony import */ var _classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classification */ "./src/app/common/task/classification.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Classification", function() { return _classification__WEBPACK_IMPORTED_MODULE_2__["Classification"]; });

/* harmony import */ var _regression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regression */ "./src/app/common/task/regression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Regression", function() { return _regression__WEBPACK_IMPORTED_MODULE_3__["Regression"]; });

/* harmony import */ var _overall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overall */ "./src/app/common/task/overall.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_TITLE", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_TITLE", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_TITLE", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_LABEL", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_X_AXIS_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_LABEL", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_Y_AXIS_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_TITLE", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_LEGEND_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_LABEL", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_LEGEND_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_MARK_LABEL", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LABEL_PRIORITY", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["LABEL_PRIORITY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overall", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["Overall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textComparator", function() { return _overall__WEBPACK_IMPORTED_MODULE_4__["textComparator"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./src/app/common/task/text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_5__["Text"]; });

/* harmony import */ var _bounding_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bounding-box */ "./src/app/common/task/bounding-box.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return _bounding_box__WEBPACK_IMPORTED_MODULE_6__["BoundingBox"]; });










/***/ }),

/***/ "./src/app/common/task/overall.ts":
/*!****************************************!*\
  !*** ./src/app/common/task/overall.ts ***!
  \****************************************/
/*! exports provided: KEY_TITLE, KEY_X_AXIS_TITLE, KEY_Y_AXIS_TITLE, KEY_X_AXIS_LABEL, KEY_Y_AXIS_LABEL, KEY_LEGEND_TITLE, KEY_LEGEND_LABEL, KEY_MARK_LABEL, LABEL_PRIORITY, Overall, textComparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TITLE", function() { return KEY_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_TITLE", function() { return KEY_X_AXIS_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_TITLE", function() { return KEY_Y_AXIS_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_X_AXIS_LABEL", function() { return KEY_X_AXIS_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_Y_AXIS_LABEL", function() { return KEY_Y_AXIS_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_TITLE", function() { return KEY_LEGEND_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_LEGEND_LABEL", function() { return KEY_LEGEND_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_MARK_LABEL", function() { return KEY_MARK_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_PRIORITY", function() { return LABEL_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overall", function() { return Overall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textComparator", function() { return textComparator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/app/common/task/task.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _verification_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../verification-data */ "./src/app/common/verification-data.ts");





const KEY_TITLE = 'title';
const KEY_X_AXIS_TITLE = 'x-axis-title';
const KEY_Y_AXIS_TITLE = 'y-axis-title';
const KEY_X_AXIS_LABEL = 'x-axis-label';
const KEY_Y_AXIS_LABEL = 'y-axis-label';
const KEY_LEGEND_TITLE = 'legend-title';
const KEY_LEGEND_LABEL = 'legend-label';
const KEY_MARK_LABEL = 'mark-label';
const LABEL_PRIORITY = {
    [KEY_TITLE]: 0,
    [KEY_LEGEND_TITLE]: 1,
    [KEY_LEGEND_LABEL]: 2,
    [KEY_Y_AXIS_TITLE]: 3,
    [KEY_Y_AXIS_LABEL]: 4,
    [KEY_X_AXIS_TITLE]: 5,
    [KEY_X_AXIS_LABEL]: 6,
    [KEY_MARK_LABEL]: 7,
};
class Overall extends _task__WEBPACK_IMPORTED_MODULE_1__["Task"] {
    constructor(raw) {
        super(raw);
        this.prediction = [];
        this.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_OVERALL"];
        this.textLabels = [
            KEY_Y_AXIS_LABEL,
            KEY_X_AXIS_LABEL,
            KEY_LEGEND_LABEL,
            KEY_MARK_LABEL,
            KEY_TITLE,
            KEY_Y_AXIS_TITLE,
            KEY_X_AXIS_TITLE,
            KEY_LEGEND_TITLE
        ];
        this.features = ['x0', 'y0', 'x1', 'y1'];
        this.inputType = raw['input_type'];
        this.submitReady = false;
    }
    static legendDefaultForm(fb) {
        return fb.group({
            title: fb.control(''),
            labels: fb.array([])
        });
    }
    registerControl(formGroup, fb) {
        formGroup.removeControl(this.key);
        const container = fb.group({});
        container.addControl('boxes', fb.group({}));
        container.addControl('spec', fb.group({
            title: fb.control(''),
            axis: fb.array([]),
            custom: fb.array([])
        }));
        container.addControl('raw', fb.array([]));
        formGroup.addControl(this.key, container);
    }
    getDefaultSpecForm(fb) {
        return fb.group({
            title: fb.control(''),
            axis: fb.array([]),
            custom: fb.array([])
        });
    }
    updateBox(formGroup, raw) {
        const group = formGroup.get(this.key).get('boxes');
        const num = (value) => +value.toFixed(3);
        const center = (box) => {
            return [
                (num(box['x0']) + num(box['x1'])) / 2,
                (num(box['y0']) + num(box['y1'])) / 2
            ];
        };
        const findAdjLabel = () => {
            const targetCenter = center(raw);
            const texts = Object.values(group.controls)
                .filter((d) => d.contains('text'))
                .filter((d) => {
                return ![KEY_TITLE,
                    KEY_X_AXIS_TITLE,
                    KEY_Y_AXIS_TITLE].includes(d.get('label').value);
            });
            if (texts.length === 0) {
                return this.textLabels[0];
            }
            const dists = texts
                .map(d => {
                const other = center(d.value);
                return Math.pow(targetCenter[0] - other[0], 2)
                    + Math.pow(targetCenter[1] - other[1], 2);
            });
            const minIndex = dists.indexOf(d3__WEBPACK_IMPORTED_MODULE_3__["min"](dists));
            return texts[minIndex].get('label').value;
        };
        if (!group.contains(raw.key)) {
            const newControl = this.features.reduce((acc, curr) => {
                acc[curr] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](num(raw[curr]));
                return acc;
            }, {});
            if (raw.text !== undefined) {
                newControl['text'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.text || '');
                newControl['label'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.label || findAdjLabel());
            }
            else {
                newControl['label'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
            }
            group.addControl(raw.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](newControl));
        }
        else {
            this.features.forEach(feature => {
                if (raw[feature]) {
                    group.get(raw.key).get(feature).setValue(num(raw[feature]));
                }
            });
        }
    }
    convertToBox(raw) {
        return raw.map(d => {
            const [x0, y0, x1, y1] = d['bound'];
            const label = d['label'];
            const text = d['text'];
            return {
                x0, y0, x1, y1,
                label,
                text
            };
        });
    }
    parsePrediction(raw) {
        this.prediction = this.convertToBox(raw);
    }
    parsePrevAnnotation(formGroup, raw, fb) {
        this.registerControl(formGroup, fb);
        const marks = this.convertToBox(raw['marks']);
        const texts = this.convertToBox(raw['texts']);
        marks.concat(texts)
            .map((d, i) => (Object.assign({}, d, { key: i.toString() })))
            .forEach(d => {
            this.updateBox(formGroup, d);
        });
        const spec = raw['spec'];
        formGroup.get(`${this.key}.spec.title`).setValue(spec['title']);
        spec['axis'].forEach(axis => {
            formGroup.get(`${this.key}.spec.axis`)
                .push(this.convertToForm(axis, fb));
        });
        const legend = spec['legend'];
        if (legend) {
            formGroup.get(`${this.key}.spec`)
                .addControl('legend', this.convertToForm(legend, fb));
        }
        spec['custom'].forEach(axis => {
            formGroup.get(`${this.key}.spec.custom`)
                .push(this.convertToForm(axis, fb));
        });
        const rawGroup = fb.array([]);
        raw['raw'].forEach(d => {
            rawGroup.push(this.convertToForm(d, fb));
        });
        formGroup.get(this.key).setControl('raw', rawGroup);
    }
    parseForVerification(raw) {
        return new _verification_data__WEBPACK_IMPORTED_MODULE_4__["VOverallData"](this.key, raw);
    }
    applyPrediction(formGroup) {
        if (this.prediction) {
            const texts = this.prediction.filter(d => d.text !== undefined);
            const marks = this.prediction.filter(d => d.text === undefined)
                .filter(mark => {
                const fp = texts.find(text => {
                    const xCenter = (mark.x0 + mark.x1) / 2;
                    const yCenter = (mark.y0 + mark.y1) / 2;
                    return text.x0 < xCenter
                        && text.x1 > xCenter
                        && text.y0 < yCenter
                        && text.y1 > yCenter;
                });
                return !fp;
            });
            marks.concat(texts)
                .map((d, i) => (Object.assign({}, d, { key: i.toString() })))
                .forEach(raw => {
                this.updateBox(formGroup, raw);
            });
        }
    }
    deleteBox(formGroup, key) {
        const group = formGroup.get(this.key).get('boxes');
        group.removeControl(key);
    }
    getFormValue(formGroup) {
        const group = formGroup.get(this.key);
        const marks = Object.values(group.get('boxes').controls)
            .filter((d) => !d.contains('text'));
        const texts = Object.values(group.get('boxes').controls)
            .filter((d) => d.contains('text'));
        const result = {
            marks: marks.map(d => ({
                bound: this.features.map(f => +d.get(f).value),
                label: 'object'
            })),
            texts: texts.map(d => ({
                bound: this.features.map(f => +d.get(f).value),
                label: d.get('label').value,
                text: d.get('text').value
            })).sort(textComparator),
            spec: group.get('spec').value,
            raw: group.get('raw').value
        };
        return result;
    }
    isEmptyBoxes(formGroup) {
        const group = formGroup.get(this.key);
        return Object.keys(group.controls).length === 0;
    }
    convertToForm(elem, fb) {
        const formGroup = fb.group({});
        Object.entries(elem).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                if (value.length > 0) {
                    formGroup.addControl(key, fb.array(value));
                }
            }
            else {
                formGroup.addControl(key, fb.control(value));
            }
        });
        return formGroup;
    }
}
function textComparator(a, b) {
    const aScore = LABEL_PRIORITY[a.label];
    const bScore = LABEL_PRIORITY[b.label];
    const aCenter = [
        (a.bound[0] + a.bound[2]) / 2,
        (a.bound[1] + a.bound[3]) / 2
    ];
    const bCenter = [
        (b.bound[0] + b.bound[2]) / 2,
        (b.bound[1] + b.bound[3]) / 2
    ];
    const comp = aScore - bScore;
    if (comp === 0) {
        if (a.label === KEY_X_AXIS_LABEL) {
            return aCenter[0] - bCenter[0];
        }
        else {
            return aCenter[1] - bCenter[1];
        }
    }
    return comp;
}


/***/ }),

/***/ "./src/app/common/task/regression.ts":
/*!*******************************************!*\
  !*** ./src/app/common/task/regression.ts ***!
  \*******************************************/
/*! exports provided: Regression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Regression", function() { return Regression; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/app/common/task/task.ts");


class Regression extends _task__WEBPACK_IMPORTED_MODULE_1__["Task"] {
    constructor(raw) {
        super(raw);
        this.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_REGRESSION"];
        this.features = raw['features'];
        this.dtypes = raw['dtypes'];
    }
    registerControl(formGroup, fb) {
        const group = fb.group({});
        this.features.forEach(feature => {
            group.addControl(feature, fb.control(0));
        });
        formGroup.addControl(this.key, group);
    }
    parsePrediction(raw) {
        this.prediction = this.features.reduce((acc, curr, i) => {
            acc[curr] = raw[i];
            return acc;
        }, {});
    }
    updateBox(formGroup, raw) {
        this.features.forEach((feature, i) => {
            let value = +raw[feature];
            if (this.dtypes[i] === 'int') {
                value = Math.round(value);
            }
            formGroup.get(this.key).get(feature)
                .setValue(value);
        });
    }
    getFormValue(formGroup) {
        const group = formGroup.get(this.key);
        return this.features.map(feature => +group.get(feature).value);
    }
}


/***/ }),

/***/ "./src/app/common/task/task.ts":
/*!*************************************!*\
  !*** ./src/app/common/task/task.ts ***!
  \*************************************/
/*! exports provided: TASK_CLASSIFICATION, TASK_REGRESSION, TASK_BBOX, TASK_TEXT, TASK_OVERALL, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CLASSIFICATION", function() { return TASK_CLASSIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_REGRESSION", function() { return TASK_REGRESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_BBOX", function() { return TASK_BBOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_TEXT", function() { return TASK_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_OVERALL", function() { return TASK_OVERALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const TASK_CLASSIFICATION = 'C';
const TASK_REGRESSION = 'R';
const TASK_BBOX = 'B';
const TASK_TEXT = 'T';
const TASK_OVERALL = 'O';
class Task {
    constructor(raw) {
        this.key = raw['key'];
        this.name = raw['name'];
        this.taskType = raw['task_type'];
        this.command = raw['command'];
        this.msgs = raw['msgs'];
        this.submitReady = true;
        this.prediction = null;
    }
    registerControl(formGroup, fb) {
        throw new Error('Not Implemented!!');
    }
    updateBox(raw, predict = false) {
        throw new Error('Not Implemented!!');
    }
    parsePrediction(raw) {
        throw new Error('Not Implemented!!');
    }
    parsePrevAnnotation(formGroup, raw, fb) {
        throw new Error('Not Implemented!!');
    }
    parseForVerification(raw) {
        throw new Error('Not Implemented!!');
    }
    applyPrediction(formGroup) {
        if (this.prediction) {
            this.updateBox(formGroup, this.prediction);
        }
    }
    getFormValue(formGroup) {
        throw new Error('Not Implemented!!');
    }
}


/***/ }),

/***/ "./src/app/common/task/text.ts":
/*!*************************************!*\
  !*** ./src/app/common/task/text.ts ***!
  \*************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/app/common/task/task.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



class Text extends _task__WEBPACK_IMPORTED_MODULE_1__["Task"] {
    constructor(raw) {
        super(raw);
        this.taskType = _task__WEBPACK_IMPORTED_MODULE_1__["TASK_TEXT"];
        this.labels = raw['labels'];
        this.features = ['x0', 'y0', 'x1', 'y1'];
        this.collectContent = raw['collectContent'];
    }
    registerControl(formGroup, fb) {
        formGroup.addControl(this.key, fb.group({}));
    }
    updateBox(formGroup, raw) {
        const group = formGroup.get(this.key);
        const num = (value) => +value.toFixed(3);
        if (group.get(raw.key) === null) {
            const newControl = this.features.reduce((acc, curr) => {
                acc[curr] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](num(raw[curr]));
                return acc;
            }, {});
            newControl['label'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.label || this.labels[0]);
            newControl['text'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](raw.text || '');
            group.addControl(raw.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](newControl));
        }
        else {
            this.features.forEach(feature => {
                if (raw[feature]) {
                    group.get(raw.key).get(feature).setValue(num(raw[feature]));
                }
            });
        }
    }
    parsePrediction(raw) {
        const predicts = raw;
        this.prediction = predicts.map((d, i) => {
            const [x0, y0, x1, y1] = d['bound'];
            const label = d['label'];
            const text = d['text'];
            return ({
                key: i.toString(),
                x0, y0, x1, y1,
                label,
                text
            });
        });
    }
    applyPrediction(formGroup) {
        if (this.prediction) {
            this.prediction.forEach(raw => {
                this.updateBox(formGroup, raw);
            });
        }
    }
    deleteBox(formGroup, key) {
        const group = formGroup.get(this.key);
        group.removeControl(key);
    }
    getFormValue(formGroup) {
        const group = formGroup.get(this.key);
        return Object.values(group.controls).map(boxControl => {
            return ({
                bound: this.features.map(feature => boxControl.get(feature).value),
                label: boxControl.get('label').value,
                text: boxControl.get('text').value
            });
        });
    }
    isEmptyBoxes(formGroup) {
        const group = formGroup.get(this.key);
        return Object.keys(group.controls).length === 0;
    }
}


/***/ }),

/***/ "./src/app/common/verification-data.js":
/*!*********************************************!*\
  !*** ./src/app/common/verification-data.js ***!
  \*********************************************/
/*! exports provided: VerificationData, VClassificationData, KV, MarkAnnotation, TextAnnotation, AxisAnnotation, LegendAnnotation, CustomAnnotation, SpecAnnotation, RawAnnotation, VOverallData, Feedback, Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationData", function() { return VerificationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VClassificationData", function() { return VClassificationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KV", function() { return KV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAnnotation", function() { return MarkAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAnnotation", function() { return TextAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisAnnotation", function() { return AxisAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendAnnotation", function() { return LegendAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAnnotation", function() { return CustomAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecAnnotation", function() { return SpecAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawAnnotation", function() { return RawAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOverallData", function() { return VOverallData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class VerificationData {
    constructor(taskKey) {
        this.taskKey = taskKey;
    }
}
class VClassificationData extends VerificationData {
    constructor(taskKey, label, labels) {
        super(taskKey);
        this.label = label;
        this.labels = labels;
    }
}
class KV {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    contains(key) {
        return this.key === key;
    }
}
class MarkAnnotation {
    constructor(raw, taskKey, index) {
        this.bound = raw;
        this.key = `${taskKey}.mark.${index}`;
    }
    contains(key) {
        return this.key === key;
    }
}
class TextAnnotation {
    constructor(raw, taskKey, index) {
        this.bound = raw['bound'];
        this.label = raw['label'];
        this.text = raw['text'];
        this.key = `${taskKey}.text.${index}`;
    }
    contains(key) {
        return this.key === key;
    }
}
class AxisAnnotation {
    constructor(raw, taskKey, index) {
        this.dir = new KV(`${taskKey}.spec.axis.${index}.dir`, raw['dir']);
        this.title = new KV(`${taskKey}.spec.axis.${index}.title`, raw['title']);
        this.type = new KV(`${taskKey}.spec.axis.${index}.type`, raw['type']);
        this.labels = new KV(`${taskKey}.spec.axis.${index}.labels`, raw['labels']);
        this.markLabels = raw['markLabels']
            ? new KV(`${taskKey}.spec.axis.${index}.markLabels`, raw['markLabels'])
            : null;
        this.encoding = new KV(`${taskKey}.spec.axis.${index}.encoding`, raw['encoding']);
        this.unit = new KV(`${taskKey}.spec.axis.${index}.unit`, raw['unit']);
        this.labeled = raw['labeled'];
    }
    contains(key) {
        let ret = this.dir.contains(key) ||
            this.title.contains(key) ||
            this.type.contains(key) ||
            this.labels.contains(key) ||
            this.encoding.contains(key) ||
            this.unit.contains(key);
        if (this.markLabels) {
            ret = ret || this.markLabels.contains(key);
        }
        return ret;
    }
}
class LegendAnnotation {
    constructor(raw, taskKey) {
        this.title = new KV(`${taskKey}.spec.legend.title`, raw['title']);
        this.labels = new KV(`${taskKey}.spec.legend.labels`, raw['labels']);
        this.encoding = new KV(`${taskKey}.spec.legend.encoding`, raw['encoding']);
    }
    contains(key) {
        return this.title.contains(key) ||
            this.labels.contains(key) ||
            this.encoding.contains(key);
    }
}
class CustomAnnotation {
    constructor(raw, taskKey, index) {
        this.title = new KV(this.keyOf(taskKey, index, 'title'), raw['title']);
        this.type = new KV(this.keyOf(taskKey, index, 'type'), raw['type']);
        this.markLabels = new KV(this.keyOf(taskKey, index, 'labels'), raw['markLabels']);
        this.encoding = new KV(this.keyOf(taskKey, index, 'encoding'), raw['encoding']);
        this.unit = new KV(this.keyOf(taskKey, index, 'unit'), raw['unit']);
        this.labeled = raw['labeled'];
    }
    keyOf(taskKey, index, name) {
        return `${taskKey}.spec.custom.${index}.${name}`;
    }
    contains(key) {
        return this.title.contains(key) ||
            this.type.contains(key) ||
            this.markLabels.contains(key) ||
            this.encoding.contains(key) ||
            this.unit.contains(key);
    }
}
class SpecAnnotation {
    constructor(raw, taskKey) {
        this.title = new KV(`${taskKey}.spec.title`, raw['title']);
        this.axes = raw['axis']
            .map((axis, i) => new AxisAnnotation(axis, taskKey, i));
        this.legend = raw['legend']
            ? new LegendAnnotation(raw['legend'], taskKey)
            : null;
        this.customs = raw['custom']
            .map((custom, i) => new CustomAnnotation(custom, taskKey, i));
    }
    contains(key) {
        return this.title.contains(key) ||
            this.axes.reduce((acc, curr) => {
                return acc || curr.contains(key);
            }, false) ||
            this.customs.reduce((acc, curr) => {
                return acc || curr.contains(key);
            }, false) ||
            (this.legend ? this.legend.contains(key) : false);
    }
}
class RawAnnotation {
    constructor(raw, taskKey) {
        this.keys = [];
        this.rows = raw.map((row, i) => {
            return new KV(`${taskKey}.raw.${i}`, row);
        });
        if (this.rows.length > 0) {
            this.keys = Object.keys(this.rows[0].value);
        }
    }
    contains(key) {
        return this.rows.reduce((acc, curr) => {
            return acc || curr.contains(key);
        }, false);
    }
}
class VOverallData extends VerificationData {
    constructor(taskKey, raw) {
        super(taskKey);
        this.marks = raw['marks']
            .map((d, i) => new MarkAnnotation(d['bound'], taskKey, i));
        this.texts = raw['texts']
            .map((d, i) => new TextAnnotation(d, taskKey, i));
        this.spec = new SpecAnnotation(raw['spec'], taskKey);
        this.raw = new RawAnnotation(raw['raw'], taskKey);
    }
}
class Feedback {
    constructor(raw) {
        this.taskKey = raw['taskKey'];
        this.annotationKey = raw['annotationKey'];
        this.comment = raw['comment'];
    }
    static from(form) {
        return new Feedback(form.value);
    }
    static dummy() {
        return new Feedback({
            taskKey: '',
            annotationKey: ''
        });
    }
    get key() {
        return `${this.taskKey}.${this.annotationKey}`;
    }
}
class Review {
    constructor(raw) {
        this.path = raw['path'];
        this.approved = raw['approved'];
        this.feedbacks = raw['feedbacks']
            .map(feedback => new Feedback(feedback));
    }
}
//# sourceMappingURL=verification-data.js.map

/***/ }),

/***/ "./src/app/common/verification-data.ts":
/*!*********************************************!*\
  !*** ./src/app/common/verification-data.ts ***!
  \*********************************************/
/*! exports provided: VerificationData, VClassificationData, KV, MarkAnnotation, TextAnnotation, AxisAnnotation, LegendAnnotation, CustomAnnotation, SpecAnnotation, RawAnnotation, VOverallData, Feedback, Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationData", function() { return VerificationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VClassificationData", function() { return VClassificationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KV", function() { return KV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAnnotation", function() { return MarkAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAnnotation", function() { return TextAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisAnnotation", function() { return AxisAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendAnnotation", function() { return LegendAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAnnotation", function() { return CustomAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecAnnotation", function() { return SpecAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawAnnotation", function() { return RawAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOverallData", function() { return VOverallData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class VerificationData {
    constructor(taskKey) {
        this.taskKey = taskKey;
    }
}
class VClassificationData extends VerificationData {
    constructor(taskKey, label, labels) {
        super(taskKey);
        this.label = label;
        this.labels = labels;
    }
}
class KV {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    contains(key) {
        return this.key === key;
    }
}
class MarkAnnotation {
    constructor(raw, taskKey, index) {
        this.bound = raw;
        this.key = `${taskKey}.mark.${index}`;
    }
    contains(key) {
        return this.key === key;
    }
}
class TextAnnotation {
    constructor(raw, taskKey, index) {
        this.bound = raw['bound'];
        this.label = raw['label'];
        this.text = raw['text'];
        this.key = `${taskKey}.text.${index}`;
    }
    contains(key) {
        return this.key === key;
    }
}
class AxisAnnotation {
    constructor(raw, taskKey, index) {
        this.dir = new KV(`${taskKey}.spec.axis.${index}.dir`, raw['dir']);
        this.title = new KV(`${taskKey}.spec.axis.${index}.title`, raw['title']);
        this.type = new KV(`${taskKey}.spec.axis.${index}.type`, raw['type']);
        this.labels = new KV(`${taskKey}.spec.axis.${index}.labels`, raw['labels']);
        this.markLabels = raw['markLabels']
            ? new KV(`${taskKey}.spec.axis.${index}.markLabels`, raw['markLabels'])
            : null;
        this.encoding = new KV(`${taskKey}.spec.axis.${index}.encoding`, raw['encoding']);
        this.unit = new KV(`${taskKey}.spec.axis.${index}.unit`, raw['unit']);
        this.labeled = raw['labeled'];
    }
    contains(key) {
        let ret = this.dir.contains(key) ||
            this.title.contains(key) ||
            this.type.contains(key) ||
            this.labels.contains(key) ||
            this.encoding.contains(key) ||
            this.unit.contains(key);
        if (this.markLabels) {
            ret = ret || this.markLabels.contains(key);
        }
        return ret;
    }
}
class LegendAnnotation {
    constructor(raw, taskKey) {
        this.title = new KV(`${taskKey}.spec.legend.title`, raw['title']);
        this.labels = new KV(`${taskKey}.spec.legend.labels`, raw['labels']);
        this.encoding = new KV(`${taskKey}.spec.legend.encoding`, raw['encoding']);
    }
    contains(key) {
        return this.title.contains(key) ||
            this.labels.contains(key) ||
            this.encoding.contains(key);
    }
}
class CustomAnnotation {
    constructor(raw, taskKey, index) {
        this.title = new KV(this.keyOf(taskKey, index, 'title'), raw['title']);
        this.type = new KV(this.keyOf(taskKey, index, 'type'), raw['type']);
        this.markLabels = new KV(this.keyOf(taskKey, index, 'labels'), raw['markLabels']);
        this.encoding = new KV(this.keyOf(taskKey, index, 'encoding'), raw['encoding']);
        this.unit = new KV(this.keyOf(taskKey, index, 'unit'), raw['unit']);
        this.labeled = raw['labeled'];
    }
    keyOf(taskKey, index, name) {
        return `${taskKey}.spec.custom.${index}.${name}`;
    }
    contains(key) {
        return this.title.contains(key) ||
            this.type.contains(key) ||
            this.markLabels.contains(key) ||
            this.encoding.contains(key) ||
            this.unit.contains(key);
    }
}
class SpecAnnotation {
    constructor(raw, taskKey) {
        this.title = new KV(`${taskKey}.spec.title`, raw['title']);
        this.axes = raw['axis']
            .map((axis, i) => new AxisAnnotation(axis, taskKey, i));
        this.legend = raw['legend']
            ? new LegendAnnotation(raw['legend'], taskKey)
            : null;
        this.customs = raw['custom']
            .map((custom, i) => new CustomAnnotation(custom, taskKey, i));
    }
    contains(key) {
        return this.title.contains(key) ||
            this.axes.reduce((acc, curr) => {
                return acc || curr.contains(key);
            }, false) ||
            this.customs.reduce((acc, curr) => {
                return acc || curr.contains(key);
            }, false) ||
            (this.legend ? this.legend.contains(key) : false);
    }
}
class RawAnnotation {
    constructor(raw, taskKey) {
        this.keys = [];
        this.rows = raw.map((row, i) => {
            return new KV(`${taskKey}.raw.${i}`, row);
        });
        if (this.rows.length > 0) {
            this.keys = Object.keys(this.rows[0].value);
        }
    }
    contains(key) {
        return this.rows.reduce((acc, curr) => {
            return acc || curr.contains(key);
        }, false);
    }
}
class VOverallData extends VerificationData {
    constructor(taskKey, raw) {
        super(taskKey);
        this.marks = raw['marks']
            .map((d, i) => new MarkAnnotation(d['bound'], taskKey, i));
        this.texts = raw['texts']
            .map((d, i) => new TextAnnotation(d, taskKey, i));
        this.spec = new SpecAnnotation(raw['spec'], taskKey);
        this.raw = new RawAnnotation(raw['raw'], taskKey);
    }
}
class Feedback {
    constructor(raw) {
        this.taskKey = raw['taskKey'];
        this.annotationKey = raw['annotationKey'];
        this.comment = raw['comment'];
    }
    static from(form) {
        return new Feedback(form.value);
    }
    static dummy() {
        return new Feedback({
            taskKey: '',
            annotationKey: ''
        });
    }
    get key() {
        return `${this.taskKey}.${this.annotationKey}`;
    }
}
class Review {
    constructor(raw) {
        this.path = raw['path'];
        this.approved = raw['approved'];
        this.feedbacks = raw['feedbacks']
            .map(feedback => new Feedback(feedback));
    }
}


/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ConfigService = class ConfigService {
    constructor() {
        this.configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.userNameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.checkInstanceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    get configObservable() {
        return this.configSubject.asObservable();
    }
    get userNameObservable() {
        return this.userNameSubject.asObservable();
    }
    get checkInstanceObservable() {
        return this.checkInstanceSubject.asObservable();
    }
    get userName() {
        return this.userNameSubject.getValue();
    }
    setConfig(config) {
        this.configSubject.next(config);
    }
    setUserName(user) {
        this.userNameSubject.next(user);
    }
    checkInstance() {
        this.checkInstanceSubject.next(null);
    }
};
ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfigService);



/***/ }),

/***/ "./src/app/d3-utils.ts":
/*!*****************************!*\
  !*** ./src/app/d3-utils.ts ***!
  \*****************************/
/*! exports provided: Transform, log10TickFormat, translate, scale, transform, getMinIndex, getMaxIndex, getMinElem, invertTransform, addLegends, binData, rgb2Hex, rgb2hsi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log10TickFormat", function() { return log10TickFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinIndex", function() { return getMinIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxIndex", function() { return getMaxIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinElem", function() { return getMinElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invertTransform", function() { return invertTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLegends", function() { return addLegends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binData", function() { return binData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2Hex", function() { return rgb2Hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hsi", function() { return rgb2hsi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");


class Transform {
    constructor(totalWidth, totalHeight, margin) {
        this.totalWidth = totalWidth;
        this.totalHeight = totalHeight;
        this.height = this.totalHeight - margin.top - margin.bottom;
        this.width = this.totalWidth - margin.left - margin.right;
        this.left = margin.left;
        this.right = margin.right;
        this.bottom = margin.bottom;
        this.top = margin.top;
    }
    createSVG(svgRef) {
        return d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgRef.nativeElement)
            .attr('width', this.totalWidth)
            .attr('height', this.totalHeight);
    }
    createG(svgRef) {
        return this.createSVG(svgRef).append('g')
            .attr('transform', translate(this.left, this.top));
    }
    appendG(g) {
        return g.append('g')
            .attr('transform', translate(this.left, this.top));
    }
    xLinear(maxValue) {
        const scale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, this.width]);
        return maxValue ? scale.domain([0, maxValue]) : scale;
    }
    yLinear(maxValue) {
        const scale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([this.height, 0]);
        return maxValue ? scale.domain([0, maxValue]) : scale;
    }
}
function log10TickFormat(d) {
    const superscript = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    const power = Math.round(Math.log10(d));
    return 10 + (power + '').split('').map(c => superscript[c]).join('');
}
function translate(x, y) {
    return `translate(${x}, ${y})`;
}
function scale(x, y) {
    return `scale(${x}, ${y})`;
}
function transform(sx, sy, tx, ty) {
    return `scale(${sx}, ${sy}) translate(${tx}px, ${ty}px)`;
}
function getMinIndex(arr, func) {
    if (arr.length === 0) {
        return -1;
    }
    let minRet = -1;
    let minValue = Number.POSITIVE_INFINITY;
    arr.forEach((el, i) => {
        const comp = func(el, i);
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
    let maxRet = -1;
    let maxValue = Number.POSITIVE_INFINITY;
    arr.forEach((el, i) => {
        const comp = func(el, i);
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
    let minEl = arr[0];
    let minValue = Number.POSITIVE_INFINITY;
    arr.forEach((el, i) => {
        const comp = func(el, i);
        if (comp < minValue) {
            minValue = comp;
            minEl = el;
        }
    });
    return minEl;
}
function invertTransform(s) {
    const re = /scale\((\d+[.]*\d*)[,]\ *(\d+[.]*\d*)\) translate\(([-]*\d+[.]*\d*)px[,]\ *([-]*\d+[.]*\d*)px\)/gi;
    const result = re.exec(s);
    if (!result || result.length !== 5) {
        return {
            sx: 1,
            sy: 1,
            tx: 0,
            ty: 0
        };
    }
    else {
        const [sx, sy, tx, ty] = result.slice(1).map(d => +d);
        return { sx, sy, tx, ty };
    }
}
function addLegends(svg, width = 500, height = 40, legendData, margin = 15, horizontal = true) {
    let data = Object.values(legendData).slice();
    if (horizontal) {
        data = data.reverse();
    }
    const g = svg.append('g')
        .selectAll('g')
        .data(data)
        .enter().append('g');
    g.append('circle')
        .attr('r', 3)
        .attr('cx', 2)
        .attr('cy', 11)
        .attr('fill', d => d.color);
    g.append('text')
        .attr('dx', 10)
        .attr('dy', 14)
        .style('font-size', '0.8em')
        .text(d => d.attr.viewValue);
    let hOffset = 0;
    g.attr('transform', (_, i, nodes) => {
        hOffset += nodes[i].getBoundingClientRect().width;
        if (i > 0) {
            hOffset += margin;
        }
        if (!horizontal) {
            hOffset = width;
        }
        const vOffset = horizontal ? height / 2 - 10 : i * 30;
        return translate(width - hOffset, vOffset);
    });
}
function binData(data, xKey, yKey, width) {
    const aggregateSize = Math.ceil(data.length / width);
    if (aggregateSize <= 1) {
        return data;
    }
    let aggCount = 0;
    let binnedData = [];
    let aggSizeData = [];
    let newElem = null;
    for (let elem of data) {
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
    binnedData.forEach((data, index) => data[xKey] /= aggSizeData[index]);
    return binnedData;
}
function rgb2Hex(rgb) {
    const [r, g, b, a = 255] = rgb;
    const toHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
}
function rgb2hsi(rgb) {
    let [r, g, b, _ = 255] = rgb;
    r /= 255;
    g /= 255;
    b /= 255;
    const i = (r + g + b) / 3;
    let s = 0, h = 0;
    if (r === g && g === b) {
        s = h = 0;
    }
    else {
        const w = (r - g + r - b) / Math.sqrt((r - g) * (r - g) + (r - b) * (g - b)) / 2;
        h = Math.acos(w) * 180 / Math.PI;
        if (b > g) {
            h = 360 - h;
        }
        s = 1 - Math.min(r, g, b) / i;
    }
    return [h, s, i];
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_edit_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/edit-data */ "./src/app/common/edit-data.ts");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./network.service */ "./src/app/network.service.ts");





let EditService = class EditService {
    constructor(network) {
        this.network = network;
        this.imageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.autoCompleteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    parseImage(image, path, meta = null, init = false) {
        const reader = new FileReader();
        reader.onload = (_) => {
            const imgElem = new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["ImageElem"](path, image, reader.result, meta);
            this.imageSubject.next(imgElem);
        };
        reader.readAsDataURL(image);
    }
    removeImage() {
        this.imageSubject.next(null);
    }
    ignoreImage() {
        return this.network.ignoreImage(this.image);
    }
    updateAutoComplete(modelInfo, checked) {
        const map = this.autoCompleteSubject.getValue();
        map[modelInfo.key] = checked;
        this.autoCompleteSubject.next(map);
    }
    get image() {
        return this.imageSubject.getValue();
    }
};
EditService.ctorParameters = () => [
    { type: _network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] }
];
EditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]])
], EditService);



/***/ }),

/***/ "./src/app/edit/annotation-module/annotation-module.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/edit/annotation-module/annotation-module.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validate-feedback {\n  color: #f44336;\n  font-size: 12px;\n}\n\n:host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcYW5ub3RhdGlvbi1tb2R1bGVcXGFubm90YXRpb24tbW9kdWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL2Fubm90YXRpb24tbW9kdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvYW5ub3RhdGlvbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGUtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIi52YWxpZGF0ZS1mZWVkYmFjayB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit/annotation-module/annotation-module.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/edit/annotation-module/annotation-module.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnnotationModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationModuleComponent", function() { return AnnotationModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_common_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/config */ "./src/app/common/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var src_app_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/network.service */ "./src/app/network.service.ts");
/* harmony import */ var _common_feedback_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/feedback.service */ "./src/app/edit/common/feedback.service.ts");
/* harmony import */ var _demo_demo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../demo/demo.service */ "./src/app/edit/demo/demo.service.ts");
/* harmony import */ var _demo_quiz_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../demo/quiz.service */ "./src/app/edit/demo/quiz.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");













let AnnotationModuleComponent = class AnnotationModuleComponent {
    constructor(network, edit, fs, demo, quiz, L) {
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
    ngOnInit() {
        this.resetSubmitReady();
        this.sub1 = this.event.subscribe((key) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (key === 'review') {
                const path = this.edit.image.path;
                switch (this.config.service) {
                    case 'normal':
                        this.review = yield this.network.getReview(path);
                        break;
                    case 'demo':
                        this.review = yield this.demo.getReview(path);
                        break;
                    case 'quiz':
                        this.review = this.quiz.currReview;
                        break;
                }
            }
        }));
        this.sub2 = this.fs.resolveObservable.subscribe((feedback) => {
            const findIndex = this.review.feedbacks.findIndex(d => {
                return d.annotationKey === feedback.annotationKey &&
                    d.taskKey === feedback.taskKey;
            });
            this.review.feedbacks.splice(findIndex, 1);
        });
    }
    ngOnChanges(changes) {
        if (changes.mode) {
            this.resetSubmitReady();
        }
    }
    displayFeedback(key) {
        if (this.focusedFeedbackKey === key) {
            this.focusedFeedbackKey = '';
            this.fs.feedbackSubject.next(src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_6__["Feedback"].dummy());
            return;
        }
        this.currIndex = this.config.tasks
            .findIndex(d => d.key === key.split('.')[0]);
        this.stepper.selectedIndex = this.currIndex;
        this.fs.feedbackSubject
            .next(this.review.feedbacks.find(d => d.key === key));
        this.focusedFeedbackKey = key;
    }
    onSubmitReady() {
        setTimeout(() => {
            this.submitReady = true;
        }, 0);
    }
    submit() {
        this.submitEmitter.emit();
        this.currIndex = 0;
        this.resetSubmitReady();
        if (this.focusedFeedbackKey !== '') {
            this.focusedFeedbackKey = '';
            this.fs.resolve();
        }
    }
    onStepChange(change) {
        this.currIndex = change.selectedIndex;
    }
    resetSubmitReady() {
        if (this.config.tasks.length === 1
            && this.config.tasks[0].submitReady) {
            this.submitReady = true;
        }
        else {
            this.submitReady = false;
        }
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
    }
};
AnnotationModuleComponent.ctorParameters = () => [
    { type: src_app_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"] },
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_7__["EditService"] },
    { type: _common_feedback_service__WEBPACK_IMPORTED_MODULE_9__["FeedbackService"] },
    { type: _demo_demo_service__WEBPACK_IMPORTED_MODULE_10__["DemoService"] },
    { type: _demo_quiz_service__WEBPACK_IMPORTED_MODULE_11__["QuizService"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], AnnotationModuleComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_config__WEBPACK_IMPORTED_MODULE_4__["Config"])
], AnnotationModuleComponent.prototype, "config", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AnnotationModuleComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AnnotationModuleComponent.prototype, "spacePressed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AnnotationModuleComponent.prototype, "svgS", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
], AnnotationModuleComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AnnotationModuleComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AnnotationModuleComponent.prototype, "submitEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
], AnnotationModuleComponent.prototype, "stepper", void 0);
AnnotationModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-annotation-module',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./annotation-module.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/annotation-module.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./annotation-module.component.scss */ "./src/app/edit/annotation-module/annotation-module.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"],
        src_app_edit_service__WEBPACK_IMPORTED_MODULE_7__["EditService"],
        _common_feedback_service__WEBPACK_IMPORTED_MODULE_9__["FeedbackService"],
        _demo_demo_service__WEBPACK_IMPORTED_MODULE_10__["DemoService"],
        _demo_quiz_service__WEBPACK_IMPORTED_MODULE_11__["QuizService"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_12__["LocaleService"]])
], AnnotationModuleComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/annotation-util.ts":
/*!***********************************************************!*\
  !*** ./src/app/edit/annotation-module/annotation-util.ts ***!
  \***********************************************************/
/*! exports provided: NUM_REG, AnnotationBox, isNumberTexts, isNumberText, removeEventArea, createEventArea, removeTempBox, removeMergeLine, drawBoxMark, drawPointMark, addRectDragEvent, addMergeEvent, getImageData, drawBoxBySelectedPixel, regressBoxesByColor, regressArea, drawBoxByPoint, boxComparator, moveGuides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_REG", function() { return NUM_REG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationBox", function() { return AnnotationBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberTexts", function() { return isNumberTexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberText", function() { return isNumberText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventArea", function() { return removeEventArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventArea", function() { return createEventArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTempBox", function() { return removeTempBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMergeLine", function() { return removeMergeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBoxMark", function() { return drawBoxMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPointMark", function() { return drawPointMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRectDragEvent", function() { return addRectDragEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMergeEvent", function() { return addMergeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageData", function() { return getImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBoxBySelectedPixel", function() { return drawBoxBySelectedPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regressBoxesByColor", function() { return regressBoxesByColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regressArea", function() { return regressArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBoxByPoint", function() { return drawBoxByPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxComparator", function() { return boxComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveGuides", function() { return moveGuides; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_d3_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/d3-utils */ "./src/app/d3-utils.ts");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");




const NUM_REG = /[m|mm|km|s|g|kg|K|M|%|$|,|B|b]/g;
class AnnotationBox {
    constructor(key, formGroup) {
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
    get pointValues() {
        return [
            this.points['x0'].value,
            this.points['y0'].value,
            this.points['x1'].value,
            this.points['y1'].value,
        ];
    }
    get width() {
        return +this.points.x1.value - +this.points.x0.value;
    }
    get height() {
        return +this.points.y1.value - +this.points.y0.value;
    }
    get center() {
        return [
            (+this.points.x0.value + +this.points.x1.value) / 2,
            (+this.points.y0.value + +this.points.y1.value) / 2
        ];
    }
    get isText() {
        return this.text !== null;
    }
    get centerDist() {
        const center = this.center;
        return center[0] * center[0] + center[1] * center[1];
    }
}
function getRectHandles(x, y, width, height) {
    return [
        { cx: x, cy: y, pivotX: x + width, pivotY: y + height, },
        { cx: x + width, cy: y, pivotX: x, pivotY: y + height, },
        { cx: x, cy: y + height, pivotX: x + width, pivotY: y },
        { cx: x + width, cy: y + height, pivotX: x, pivotY: y }
    ];
}
function isNumberTexts(boxes) {
    const numNumbers = d3__WEBPACK_IMPORTED_MODULE_1__["sum"](boxes
        .map(d => d.text.value)
        .map(d => {
        return isNumberText(d)
            ? 1
            : 0;
    }));
    return numNumbers === boxes.length;
}
function isNumberText(v) {
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let findNum = false;
    for (const c of v) {
        findNum = findNum || (nums.findIndex(n => n === c) !== -1);
    }
    return findNum && !isNaN(+(v.replace(NUM_REG, '')));
}
function removeEventArea(comp) {
    comp.svgS.selectAll('g').remove();
}
function createEventArea(comp, mergeEvent, inputMode = 'rect') {
    const svg = comp.svgS;
    const key = comp.task.key;
    let pivotX = 0;
    let pivotY = 0;
    comp.g = svg.append('g').attr('class', key);
    let newBoxIndex = (comp.autoIncBoxIndex + 1).toString();
    const horLine = comp.g.append('line')
        .attr('class', 'guide-horizontal')
        .attr('x1', 0)
        .attr('x2', 1000)
        .attr('y1', 0)
        .attr('y2', 0)
        .attr('stroke-width', 1)
        .attr('stroke', 'rgba(0, 0, 0, 0.3)')
        .style('pointer-events', 'none');
    const verLine = comp.g.append('line')
        .attr('class', 'guide-vertical')
        .attr('y1', 0)
        .attr('y2', 1000)
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('stroke-width', 1)
        .attr('stroke', 'rgba(0, 0, 0, 0.3)')
        .style('pointer-events', 'none');
    const initRect = () => {
        newBoxIndex = (comp.autoIncBoxIndex + 1).toString();
        const x = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX;
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY;
        comp.g.append('rect')
            .attr('class', `rect-${newBoxIndex}`)
            .attr('x', x).attr('y', y)
            .classed('text', comp.boxMode === 'text')
            .classed('mark', comp.boxMode === 'mark');
        pivotX = x;
        pivotY = y;
        comp.isDrawing = true;
        comp.writeForm(newBoxIndex, x, y, 0, 0);
    };
    const drawRect = () => {
        const eventX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX;
        const eventY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY;
        const x = eventX > pivotX ? pivotX : eventX;
        const y = eventY > pivotY ? pivotY : eventY;
        const width = Math.abs(eventX - pivotX);
        const height = Math.abs(eventY - pivotY);
        svg.select(`.${key}`).select(`.rect-${newBoxIndex}`)
            .attr('x', x)
            .attr('y', y)
            .attr('width', width)
            .attr('height', height);
        comp.writeForm(newBoxIndex, x, y, width, height);
    };
    const drawPoint = () => {
        newBoxIndex = (comp.autoIncBoxIndex + 1).toString();
        const x = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX;
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY;
        const r = comp.pointRadius;
        const circleS = comp.g.append('circle')
            .attr('class', `rect-${newBoxIndex}`)
            .attr('cx', x).attr('cy', y)
            .attr('r', r)
            .classed('text', comp.boxMode === 'text')
            .classed('mark', comp.boxMode === 'mark');
        comp.writeForm(newBoxIndex, x - r, y - r, 2 * r, 2 * r);
        comp.updateFocus(newBoxIndex);
        addCircleDragEvent(comp, newBoxIndex, circleS);
    };
    const drawCircles = () => {
        const g = svg.select(`.${key}`);
        const rectS = g.select(`.rect-${newBoxIndex}`);
        const x = +rectS.attr('x');
        const y = +rectS.attr('y');
        const width = +rectS.attr('width');
        const height = +rectS.attr('height');
        const handles = getRectHandles(x, y, width, height);
        const circleS = g.selectAll(`.circle-${newBoxIndex}`)
            .data(handles).enter()
            .append('circle').attr('class', `circle-${newBoxIndex} handle`)
            .classed('focused', comp.focusedBoxIndex === newBoxIndex)
            .classed('text', comp.boxMode === 'text')
            .classed('mark', comp.boxMode === 'mark')
            .attr('cx', d => d.cx)
            .attr('cy', d => d.cy)
            .attr('r', 3);
        comp.updateFocus(newBoxIndex);
        addCircleEvent(comp, newBoxIndex, rectS, circleS);
        comp.addRectEvent(newBoxIndex, rectS, circleS);
        comp.isDrawing = false;
    };
    const updateLine = () => {
        comp.g.select('#merge-line')
            .attr('x2', d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX)
            .attr('y2', d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY)
            .attr('stroke-width', 3)
            .attr('stroke', 'rgb(51, 153, 102)')
            .attr('stroke-opacity', 0.6);
    };
    svg.on('click', () => {
        if (comp.spacePressed || comp.stage !== 0) {
            return;
        }
        if (!comp.isDrawing && comp.index === comp.currIndex) {
            if (inputMode === 'point'
                && comp.boxMode === 'mark') {
                drawPoint();
                comp.autoIncBoxIndex = +newBoxIndex;
            }
            else {
                initRect();
            }
        }
        else if (comp.isDrawing) {
            drawCircles();
            comp.autoIncBoxIndex = +newBoxIndex;
        }
    }).on('mouseenter', () => {
        horLine.attr('visibility', 'visible');
        verLine.attr('visibility', 'visible');
    }).on('mousemove', () => {
        if (comp.isDrawing) {
            drawRect();
        }
        if (mergeEvent && comp.isMerging) {
            updateLine();
        }
        moveGuides(horLine, verLine, d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX, d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY);
    }).on('mouseleave', () => {
        horLine.attr('visibility', 'hidden');
        verLine.attr('visibility', 'hidden');
    });
    if (comp.boxes.length > 0) {
        comp.isDrawing = false;
        if (mergeEvent) {
            comp.isMerging = false;
        }
        comp.autoIncBoxIndex = comp.boxes.length;
        comp.boxes.forEach(box => {
            if (comp.task.inputType === 'point'
                && box.text === null) {
                drawPointMark(comp, box);
            }
            else {
                drawBoxMark(comp, box);
            }
        });
    }
}
function removeTempBox(comp) {
    const tempIndex = (comp.autoIncBoxIndex + 1).toString();
    comp.deleteBox(tempIndex);
    comp.isDrawing = false;
}
function removeMergeLine(comp) {
    comp.g.select('#merge-line').remove();
    comp.isMerging = false;
}
function drawBoxMark(comp, box) {
    const imgElem = comp.imgRef.nativeElement;
    const [x0, y0, x1, y1] = box.pointValues;
    const boxIndex = box.key;
    const x = x0 * imgElem.width + 10;
    const y = y0 * imgElem.height + 10;
    const width = (x1 - x0) * imgElem.width;
    const height = (y1 - y0) * imgElem.height;
    const rectS = comp.g.append('rect')
        .attr('class', `rect-${boxIndex}`)
        .classed('focused', comp.focusedBoxIndex === boxIndex)
        .attr('x', x)
        .attr('y', y)
        .attr('width', width)
        .attr('height', height)
        .classed('text', box.isText)
        .classed('mark', !box.isText);
    const handles = getRectHandles(x, y, width, height);
    const circleS = comp.g.selectAll(`.circle-${boxIndex}`)
        .data(handles).enter()
        .append('circle')
        .attr('class', `circle-${boxIndex} handle`)
        .classed('focused', comp.focusedBoxIndex === boxIndex)
        .classed('text', box.isText)
        .classed('mark', !box.isText)
        .attr('cx', (d) => d.cx)
        .attr('cy', (d) => d.cy)
        .attr('r', 3);
    comp.addRectEvent(boxIndex, rectS, circleS);
    addCircleEvent(comp, boxIndex, rectS, circleS);
}
function drawPointMark(comp, box) {
    const r = comp.pointRadius;
    const imgElem = comp.imgRef.nativeElement;
    const [x0, y0, x1, y1] = box.pointValues;
    const boxIndex = box.key;
    const x = (x0 + x1) * imgElem.width / 2 + 10;
    const y = (y0 + y1) * imgElem.height / 2 + 10;
    const circleS = comp.g.append('circle')
        .attr('class', `rect-${boxIndex}`)
        .classed('focused', comp.focusedBoxIndex === boxIndex)
        .attr('cx', x).attr('cy', y)
        .attr('r', r)
        .classed('text', box.isText)
        .classed('mark', !box.isText);
    addCircleDragEvent(comp, boxIndex, circleS);
}
function addRectDragEvent(comp, boxIndex, rectS, circleS) {
    let dragStartX = 0;
    let dragStartY = 0;
    let pivotX = 0;
    let pivotY = 0;
    let width = +rectS.attr('width');
    let height = +rectS.attr('height');
    const horLine = comp.g.select('.guide-horizontal');
    const verLine = comp.g.select('.guide-vertical');
    rectS.on('click', () => {
        if (comp.spacePressed) {
            return;
        }
        comp.updateFocus(boxIndex);
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
        return false;
    }).on('contextmenu', () => {
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].preventDefault();
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
        if (comp.isMerging) {
            removeMergeLine(comp);
        }
    });
    rectS.call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
        .on('start', () => {
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
    })
        .on('drag', () => {
        if (comp.spacePressed || comp.stage !== 0) {
            return;
        }
        const eventX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
        const eventY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
        const moveX = eventX - dragStartX;
        const moveY = eventY - dragStartY;
        const x = pivotX + moveX;
        const y = pivotY + moveY;
        rectS.attr('x', x).attr('y', y);
        moveGuides(horLine, verLine, eventX, eventY);
        const points = getRectHandles(x, y, width, height);
        circleS.data(points)
            .attr('cx', d => d.cx)
            .attr('cy', d => d.cy);
        comp.writeForm(boxIndex, x, y, width, height);
    }));
}
function addCircleEvent(comp, boxIndex, rectS, circleS) {
    const horLine = comp.g.select('.guide-horizontal');
    const verLine = comp.g.select('.guide-vertical');
    circleS.on('click', () => {
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
    });
    circleS.call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
        .on('start', () => {
        if (comp.spacePressed || comp.stage !== 0) {
            return;
        }
        comp.updateFocus(boxIndex);
    })
        .on('drag', (d) => {
        if (comp.spacePressed || comp.stage !== 0) {
            return;
        }
        const pivotX = d.pivotX;
        const pivotY = d.pivotY;
        const eventX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
        const eventY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
        const x = eventX > pivotX ? pivotX : eventX;
        const y = eventY > pivotY ? pivotY : eventY;
        const width = Math.abs(eventX - pivotX);
        const height = Math.abs(eventY - pivotY);
        moveGuides(horLine, verLine, eventX, eventY);
        rectS
            .attr('x', x)
            .attr('y', y)
            .attr('width', width)
            .attr('height', height);
        const handles = getRectHandles(x, y, width, height);
        circleS.data(handles)
            .attr('cx', (handle) => handle.cx)
            .attr('cy', (handle) => handle.cy);
        comp.writeForm(boxIndex, x, y, width, height);
    }));
}
function addCircleDragEvent(comp, boxIndex, circleS) {
    const horLine = comp.g.select('.guide-horizontal');
    const verLine = comp.g.select('.guide-vertical');
    const r = comp.pointRadius;
    circleS.on('click', () => {
        if (comp.spacePressed) {
            return;
        }
        comp.updateFocus(boxIndex);
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
        return false;
    });
    circleS.call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
        .on('start', () => {
        if (comp.spacePressed || comp.stage !== 0) {
            return;
        }
        comp.updateFocus(boxIndex);
    }).on('drag', (d) => {
        if (comp.spacePressed || comp.stage !== 0) {
            return;
        }
        const x = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
        moveGuides(horLine, verLine, x, y);
        circleS.attr('cx', x).attr('cy', y);
        comp.writeForm(boxIndex, x - r, y - r, 2 * r, 2 * r);
    }));
}
function addMergeEvent(comp, boxIndex, rectS) {
    const img = comp.imgRef.nativeElement;
    const imgWidth = img.width;
    const imgHeight = img.height;
    const initLine = () => {
        const initX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetX;
        const initY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].offsetY;
        comp.g.append('line')
            .attr('id', 'merge-line')
            .attr('x1', initX)
            .attr('y1', initY)
            .attr('x2', initX)
            .attr('y2', initY)
            .attr('stroke-width', 5)
            .attr('stroke', 'gray')
            .style('pointer-events', 'none');
    };
    const merge = () => {
        const line = comp.g.select('#merge-line');
        const x1 = +line.attr('x1');
        const x2 = +line.attr('x2');
        const y1 = +line.attr('y1');
        const y2 = +line.attr('y2');
        const points = d3__WEBPACK_IMPORTED_MODULE_1__["range"](0, 1.1, 0.04).map(t => {
            return {
                x: x1 + (x2 - x1) * t,
                y: y1 + (y2 - y1) * t
            };
        });
        let mergedBoxes = comp.boxes
            .filter((box) => box.text !== null)
            .filter((box) => {
            const rx0 = box.points.x0.value * imgWidth + 10;
            const ry0 = box.points.y0.value * imgHeight + 10;
            const rx1 = box.points.x1.value * imgWidth + 10;
            const ry1 = box.points.y1.value * imgHeight + 10;
            return points.findIndex(p => {
                return p.x >= rx0
                    && p.x <= rx1
                    && p.y >= ry0
                    && p.y <= ry1;
            }) !== -1;
        });
        if (mergedBoxes.length === 0) {
            return;
        }
        const labelCounter = {};
        mergedBoxes.forEach(box => {
            const label = box.label.value;
            const count = labelCounter[label];
            if (count === undefined) {
                labelCounter[label] = 1;
            }
            else {
                labelCounter[label] += 1;
            }
        });
        const maxLabel = Object.entries(labelCounter).sort((a, b) => b[1] - a[1])[0][0];
        const xMin = d3__WEBPACK_IMPORTED_MODULE_1__["min"](mergedBoxes, d => d.points.x0.value);
        const xMax = d3__WEBPACK_IMPORTED_MODULE_1__["max"](mergedBoxes, d => d.points.x1.value);
        const yMin = d3__WEBPACK_IMPORTED_MODULE_1__["min"](mergedBoxes, d => d.points.y0.value);
        const yMax = d3__WEBPACK_IMPORTED_MODULE_1__["max"](mergedBoxes, d => d.points.y1.value);
        const alignHorizontal = 1.5 * (xMax - xMin) > (yMax - yMin);
        const lineTan = Math.atan2(y2 - y1, x2 - x1);
        const perpendicularMerge = alignHorizontal
            ? Math.abs(lineTan) > 1
            : Math.abs(lineTan) <= 1;
        mergedBoxes = mergedBoxes.sort((a, b) => {
            if (alignHorizontal) {
                return perpendicularMerge
                    ? a.points.y0.value - b.points.y0.value
                    : a.points.x0.value - b.points.x0.value;
            }
            else {
                return perpendicularMerge
                    ? a.points.x0.value - b.points.x0.value
                    : b.points.y0.value - a.points.y0.value;
            }
        });
        const mergedText = mergedBoxes.map(d => d.text.value).join(' ');
        mergedBoxes.forEach(d => {
            const deletedBoxIndex = d.key;
            if (comp.focusedBoxIndex === boxIndex) {
                comp.focusedBoxIndex = null;
            }
            comp.g.select(`.rect-${deletedBoxIndex}`).remove();
            comp.g.selectAll(`.circle-${deletedBoxIndex}`).remove();
            comp.task.deleteBox(comp.formGroup, deletedBoxIndex);
        });
        const newBoxIndex = (comp.autoIncBoxIndex + 1).toString();
        const raw = {
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
        drawBoxMark(comp, comp.boxes.find(d => d.key === newBoxIndex));
        comp.updateFocus(newBoxIndex);
    };
    rectS.on('contextmenu', () => {
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].preventDefault();
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
        if (comp.spacePressed || comp.stage !== 0) {
            return;
        }
        if (!comp.isMerging && comp.index === comp.currIndex) {
            initLine();
        }
        else if (comp.isMerging) {
            merge();
            comp.g.select('#merge-line').remove();
        }
        comp.isMerging = !comp.isMerging;
    });
}
function getImageData(imgElem) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const { width, height } = imgElem;
    canvas.height = height;
    canvas.width = width;
    context.drawImage(imgElem, 0, 0, width, height);
    return Array.from(context.getImageData(0, 0, width, height).data);
}
function drawBoxBySelectedPixel(comp) {
    d3__WEBPACK_IMPORTED_MODULE_1__["event"].preventDefault();
    const container = comp.svgS;
    const [x, y] = d3__WEBPACK_IMPORTED_MODULE_1__["mouse"](container.node()).map(d => Math.floor(d - 10));
    const imgElem = comp.imgRef.nativeElement;
    const { width, height } = imgElem;
    const imgData = getImageData(imgElem);
    drawBoxByPoint(comp, imgData, width, height, x, y);
}
function regressBoxesByColor(comp) {
    const imgElem = comp.imgRef.nativeElement;
    const { width, height } = imgElem;
    const marks = comp.boxes.filter(box => box.text === null);
    const imgData = getImageData(imgElem);
    const markCenters = marks.map(mark => {
        return [
            Math.round(mark.center[0] * width),
            Math.round(mark.center[1] * height)
        ];
    });
    marks.forEach(mark => {
        comp.removeBox(mark.key);
    });
    comp.updateBoxes();
    markCenters.forEach(center => {
        const [x, y] = center;
        drawBoxByPoint(comp, imgData, width, height, x, y);
    });
}
function regressArea(imgData, width, height, x, y) {
    const color = (p) => {
        const [px, py] = p;
        const start = (py * width + px) * 4;
        const rgb = imgData.slice(start, start + 4);
        const hsi = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_2__["rgb2hsi"])(rgb).slice(0, 3);
        const result = { type: 'rgb', r: rgb[0], g: rgb[1], b: rgb[2] };
        if (hsi[0] > 2) {
            result.type = 'hsi';
            return Object.assign({}, result, { h: hsi[0], s: hsi[1], i: hsi[2] });
        }
        else {
            return result;
        }
    };
    const point = (index) => {
        return [index % width, Math.floor(index / width)];
    };
    const isSameColor = (a, b) => {
        const sameRGB = Math.abs(a.r - b.r) < 10
            && Math.abs(a.g - b.g) < 10
            && Math.abs(a.b - b.b) < 10;
        if (a.type === 'hsi' && b.type === 'hsi') {
            return Math.abs(a.h - b.h) < 5
                && Math.abs(a.s - b.s) < 0.15
                && sameRGB;
        }
        else {
            return sameRGB;
        }
    };
    const startColor = color([x, y]);
    const startIndex = y * width + x;
    const marks = new Array(width * height).fill(false);
    const queue = [];
    const points = [];
    queue.push(startIndex);
    marks[startIndex] = true;
    points.push({ x, y });
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    while (queue.length > 0) {
        const currIndex = queue[0];
        queue.shift();
        const [px, py] = point(currIndex);
        directions.forEach(dir => {
            const nextPoint = [px + dir[0], py + dir[1]];
            const [npx, npy] = nextPoint;
            const nextIndex = npy * width + npx;
            if (npx < 0 || npx >= width || npy < 0 || npy >= height) {
                return;
            }
            const notMarked = !marks[nextIndex];
            if (notMarked && isSameColor(startColor, color([npx, npy]))) {
                queue.push(nextIndex);
                marks[nextIndex] = true;
                points.push({ x: npx, y: npy });
            }
        });
    }
    return points;
}
function drawBoxByPoint(comp, imgData, width, height, x, y) {
    const points = regressArea(imgData, width, height, x, y);
    const x0 = Math.max(0, d3__WEBPACK_IMPORTED_MODULE_1__["min"](points, d => d.x) - 1) + 10;
    const y0 = Math.max(0, d3__WEBPACK_IMPORTED_MODULE_1__["min"](points, d => d.y) - 1) + 10;
    const x1 = Math.min(d3__WEBPACK_IMPORTED_MODULE_1__["max"](points, d => d.x) + 1, width) + 10;
    const y1 = Math.min(d3__WEBPACK_IMPORTED_MODULE_1__["max"](points, d => d.y) + 1, height) + 10;
    if ((y1 - y0) * (x1 - x0) > width * height * 0.96) {
        return;
    }
    const boxIndex = (comp.autoIncBoxIndex + 1).toString();
    comp.autoIncBoxIndex += 1;
    comp.writeForm(boxIndex, x0, y0, x1 - x0, y1 - y0);
    const box = new AnnotationBox(boxIndex, comp.box(boxIndex));
    drawBoxMark(comp, box);
    comp.updateFocus(boxIndex);
}
function boxComparator(a, b) {
    if (a.isText && b.isText) {
        const aLabel = a.label.value;
        const bLabel = b.label.value;
        const comp = src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["LABEL_PRIORITY"][aLabel] - src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["LABEL_PRIORITY"][bLabel];
        if (comp === 0) {
            if (aLabel === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_X_AXIS_LABEL"]) {
                return a.center[0] - b.center[0];
            }
            else {
                return a.center[1] - b.center[1];
            }
        }
        return comp;
    }
    else if (a.isText) {
        return -1;
    }
    else if (b.isText) {
        return 1;
    }
    else {
        return 0;
    }
}
function moveGuides(horLine, verLine, x, y) {
    horLine.attr('y1', y).attr('y2', y);
    verLine.attr('x1', x).attr('x2', x);
}


/***/ }),

/***/ "./src/app/edit/annotation-module/bounding-box/bounding-box.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/edit/annotation-module/bounding-box/bounding-box.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".w-20 {\n  width: 20% !important;\n}\n\n.w-15 {\n  width: 15% !important;\n}\n\n.focused {\n  background-color: rgba(51, 153, 102, 0.4);\n}\n\n.mat-select {\n  padding-left: 5px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #aaa;\n}\n\n.table {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9ib3VuZGluZy1ib3gvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXGFubm90YXRpb24tbW9kdWxlXFxib3VuZGluZy1ib3hcXGJvdW5kaW5nLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9ib3VuZGluZy1ib3gvYm91bmRpbmctYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9ib3VuZGluZy1ib3gvYm91bmRpbmctYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctMjAge1xyXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udy0xNSB7XHJcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjQpO1xyXG59XHJcblxyXG4ubWF0LXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbiIsIi53LTIwIHtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4udy0xNSB7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbn1cblxuLmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC40KTtcbn1cblxuLm1hdC1zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbn1cblxuLnRhYmxlIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/annotation-module/bounding-box/bounding-box.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/edit/annotation-module/bounding-box/bounding-box.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BoundingBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBoxComponent", function() { return BoundingBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var _annotation_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../annotation-util */ "./src/app/edit/annotation-module/annotation-util.ts");








let BoundingBoxComponent = class BoundingBoxComponent {
    constructor(edit, fb) {
        this.edit = edit;
        this.fb = fb;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusedBoxIndex = null;
        this.autoIncBoxIndex = 0;
        this.boxes = [];
        this.isDrawing = false;
    }
    ngOnInit() {
        this.event.subscribe(key => {
            this.isDrawing = false;
            if (key === 'predict' && this.edit.autoCompleteSubject.getValue()[this.task.key]) {
                this.task.registerControl(this.formGroup, this.fb);
                this.task.applyPrediction(this.formGroup);
                this.updateBoxes();
                if (this.currIndex === this.index) {
                    this.createEventArea();
                }
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.currIndex || changes.formGroup) {
            if (this.currIndex === this.index) {
                this.createEventArea();
                this.autoIncBoxIndex = d3__WEBPACK_IMPORTED_MODULE_4__["max"](this.boxes.map(box => +box.key)) || 0;
            }
            else {
                Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeEventArea"])(this);
            }
        }
    }
    onKey(event) {
        if (document.activeElement.tagName === 'INPUT') {
            return;
        }
        if (event.key === 'Escape' && this.isDrawing) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeTempBox"])(this);
        }
        if ((event.key === 'd' || event.key === 'Delete')
            && this.focusedBoxIndex) {
            this.deleteBox(this.focusedBoxIndex);
        }
    }
    deleteBox(boxIndex) {
        this.g.select(`.rect-${boxIndex}`).remove();
        this.g.selectAll(`.circle-${boxIndex}`).remove();
        this.task.deleteBox(this.formGroup, boxIndex);
        if (boxIndex === this.focusedBoxIndex) {
            this.focusedBoxIndex = null;
        }
        this.updateBoxes();
    }
    createEventArea() {
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeEventArea"])(this);
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["createEventArea"])(this, false);
        this.svgS.on('contextmenu', () => {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["drawBoxBySelectedPixel"])(this);
        });
    }
    writeForm(boxIndex, x, y, width, height) {
        const imgElem = this.imgRef.nativeElement;
        const clamp = (value, min, max) => {
            return Math.min(max, Math.max(min, value));
        };
        const raw = {
            key: boxIndex,
            x0: clamp(x - 10, 0, imgElem.width) / imgElem.width,
            y0: clamp(y - 10, 0, imgElem.height) / imgElem.height,
            x1: clamp((x + width) - 10, 0, imgElem.width) / imgElem.width,
            y1: clamp((y + height) - 10, 0, imgElem.height) / imgElem.height,
        };
        const addNewBox = !this.formGroup
            .get(this.task.key)
            .get(raw.key);
        this.task.updateBox(this.formGroup, raw);
        if (addNewBox) {
            this.updateBoxes();
        }
    }
    addRectEvent(boxIndex, rectS, circleS) {
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["addRectDragEvent"])(this, boxIndex, rectS, circleS);
    }
    updateFocus(boxIndex) {
        this.g.selectAll('rect').classed('focused', false);
        this.g.selectAll('circle').classed('focused', false);
        this.g.select(`.rect-${boxIndex}`).classed('focused', true);
        this.focusedBoxIndex = boxIndex;
    }
    updateBoxes() {
        const formGroup = this.formGroup.get(this.task.key);
        this.boxes = Object
            .entries(formGroup.controls)
            .map(entry => {
            const [key, value] = entry;
            return new _annotation_util__WEBPACK_IMPORTED_MODULE_7__["AnnotationBox"](key, value);
        });
    }
    box(boxIndex) {
        return this.formGroup.get(this.task.key).get(boxIndex);
    }
    removeBox(boxIndex) {
        this.g.select(`.rect-${boxIndex}`).remove();
        this.g.selectAll(`.circle-${boxIndex}`).remove();
        this.task.deleteBox(this.formGroup, boxIndex);
        this.focusedBoxIndex = null;
    }
};
BoundingBoxComponent.ctorParameters = () => [
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], BoundingBoxComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["BoundingBox"])
], BoundingBoxComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], BoundingBoxComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BoundingBoxComponent.prototype, "svgS", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BoundingBoxComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], BoundingBoxComponent.prototype, "currIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
], BoundingBoxComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], BoundingBoxComponent.prototype, "spacePressed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BoundingBoxComponent.prototype, "submitEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], BoundingBoxComponent.prototype, "onKey", null);
BoundingBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bounding-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bounding-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/bounding-box/bounding-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bounding-box.component.scss */ "./src/app/edit/annotation-module/bounding-box/bounding-box.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../edit-module.scss */ "./src/app/edit/edit-module.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], BoundingBoxComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/classification/classification.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/classification/classification.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvY2xhc3NpZmljYXRpb24vY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/edit/annotation-module/classification/classification.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/edit/annotation-module/classification/classification.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClassificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationComponent", function() { return ClassificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_feedback_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/feedback.service */ "./src/app/edit/common/feedback.service.ts");








let ClassificationComponent = class ClassificationComponent {
    constructor(edit, fs) {
        this.edit = edit;
        this.fs = fs;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.event.subscribe(key => {
            if (key === 'predict' && this.edit.autoCompleteSubject.getValue()[this.task.key]) {
                this.task.applyPrediction(this.formGroup);
            }
        });
        this.fs.feedbackObservable.subscribe(feedback => {
            if (feedback.taskKey === this.task.key) {
                const el = this.radioGroupRef.nativeElement;
                const { left, top } = el.getBoundingClientRect();
                this.fs.showFeedback(left, top, feedback);
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.currIndex
            && !changes.currIndex.isFirstChange()
            && this.index > 0 && changes.currIndex.currentValue === this.index) {
            const annotationLength = Object.keys(this.formGroup.value).length;
            if (annotationLength - 1 === this.index) {
                this.submitEmitter.emit();
            }
        }
    }
    onChange(change) {
        this.formGroup.get(this.task.key).setValue(change.value);
        if (this.index < this.stepper.steps.length - 1) {
            this.stepper.next();
        }
    }
};
ClassificationComponent.ctorParameters = () => [
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"] },
    { type: _common_feedback_service__WEBPACK_IMPORTED_MODULE_7__["FeedbackService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"])
], ClassificationComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepper"])
], ClassificationComponent.prototype, "stepper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ClassificationComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Classification"])
], ClassificationComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ClassificationComponent.prototype, "currIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
], ClassificationComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ClassificationComponent.prototype, "spacePressed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClassificationComponent.prototype, "submitEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"])
], ClassificationComponent.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radioGroup', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ClassificationComponent.prototype, "radioGroupRef", void 0);
ClassificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-classification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./classification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/classification/classification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./classification.component.scss */ "./src/app/edit/annotation-module/classification/classification.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../edit-module.scss */ "./src/app/edit/edit-module.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"], _common_feedback_service__WEBPACK_IMPORTED_MODULE_7__["FeedbackService"]])
], ClassificationComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/index.ts":
/*!*************************************************!*\
  !*** ./src/app/edit/annotation-module/index.ts ***!
  \*************************************************/
/*! exports provided: BoundingBoxComponent, ClassificationComponent, RegressionComponent, TextComponent, AnnotationModuleComponent, AxisSpecComponent, CanvasPatchComponent, LegendSpecComponent, ColumnAdditionDialogComponent, RawTableComponent, OverallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bounding_box_bounding_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounding-box/bounding-box.component */ "./src/app/edit/annotation-module/bounding-box/bounding-box.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundingBoxComponent", function() { return _bounding_box_bounding_box_component__WEBPACK_IMPORTED_MODULE_1__["BoundingBoxComponent"]; });

/* harmony import */ var _classification_classification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classification/classification.component */ "./src/app/edit/annotation-module/classification/classification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassificationComponent", function() { return _classification_classification_component__WEBPACK_IMPORTED_MODULE_2__["ClassificationComponent"]; });

/* harmony import */ var _overall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overall */ "./src/app/edit/annotation-module/overall/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisSpecComponent", function() { return _overall__WEBPACK_IMPORTED_MODULE_3__["AxisSpecComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasPatchComponent", function() { return _overall__WEBPACK_IMPORTED_MODULE_3__["CanvasPatchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LegendSpecComponent", function() { return _overall__WEBPACK_IMPORTED_MODULE_3__["LegendSpecComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnAdditionDialogComponent", function() { return _overall__WEBPACK_IMPORTED_MODULE_3__["ColumnAdditionDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawTableComponent", function() { return _overall__WEBPACK_IMPORTED_MODULE_3__["RawTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverallComponent", function() { return _overall__WEBPACK_IMPORTED_MODULE_3__["OverallComponent"]; });

/* harmony import */ var _regression_regression_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regression/regression.component */ "./src/app/edit/annotation-module/regression/regression.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegressionComponent", function() { return _regression_regression_component__WEBPACK_IMPORTED_MODULE_4__["RegressionComponent"]; });

/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text/text.component */ "./src/app/edit/annotation-module/text/text.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return _text_text_component__WEBPACK_IMPORTED_MODULE_5__["TextComponent"]; });

/* harmony import */ var _annotation_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./annotation-module.component */ "./src/app/edit/annotation-module/annotation-module.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnnotationModuleComponent", function() { return _annotation_module_component__WEBPACK_IMPORTED_MODULE_6__["AnnotationModuleComponent"]; });










/***/ }),

/***/ "./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  color: #212529;\n}\n\n.key {\n  color: #777;\n  min-width: 100px;\n  margin-right: 0.5rem;\n  border-right: 1px solid #dee2e6;\n  padding: 0rem 0.5rem !important;\n}\n\n.readonly {\n  cursor: not-allowed;\n}\n\n.readonly .readonly-block {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL2F4aXMtc3BlYy9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcYW5ub3RhdGlvbi1tb2R1bGVcXG92ZXJhbGxcXGF4aXMtc3BlY1xcYXhpcy1zcGVjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvYXhpcy1zcGVjL2F4aXMtc3BlYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURBSTtFQUNJLG9CQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvYXhpcy1zcGVjL2F4aXMtc3BlYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLmtleSB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVhZG9ubHkge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIC5yZWFkb25seS1ibG9jayB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiZGl2IHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi5rZXkge1xuICBjb2xvcjogIzc3NztcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDByZW0gMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yZWFkb25seSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ucmVhZG9ubHkgLnJlYWRvbmx5LWJsb2NrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AxisSpecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisSpecComponent", function() { return AxisSpecComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/edit/common/feedback.service */ "./src/app/edit/common/feedback.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");






let AxisSpecComponent = class AxisSpecComponent {
    constructor(fs, _L) {
        this.fs = fs;
        this.texts = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasMarkLabels = false;
        this.focusedFeedbackKey = '';
        this.L = _L.axisSpec;
    }
    ngOnInit() {
        this.sub = this.fs.feedbackObservable.subscribe(feedback => {
            this.focusedFeedbackKey = '';
            this.focusedFeedback = null;
            if (feedback.taskKey !== this.task.key) {
                return;
            }
            const splited = feedback.annotationKey.split('.');
            if (splited[0] !== 'spec' ||
                splited[1] !== 'axis' ||
                +splited[2] !== this.index) {
                return;
            }
            this.focusedFeedbackKey = splited[3];
            this.focusedFeedback = feedback;
            setTimeout(() => {
                this.scrollEvent();
            }, 0);
        });
        this.hasMarkLabels = this.texts
            .filter(d => d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_MARK_LABEL"]).length > 0;
    }
    ngAfterViewInit() {
        this.refMap = {
            'title': this.titleRef,
            'dir': this.dirRef,
            'type': this.typeRef,
            'unit': this.unitRef,
            'labels': this.labelsRef,
            'markLabels': this.markLabelsRef,
        };
    }
    onValueTypeChange(change) {
        if (change.value === 'quantitative') {
            this.group.get('unit').setValue('integer');
        }
        else {
            this.group.get('unit').setValue('');
        }
    }
    scrollEvent() {
        const ref = this.refMap[this.focusedFeedbackKey];
        if (!ref) {
            return;
        }
        const el = ref.nativeElement;
        const top = el.getBoundingClientRect().top;
        this.scroll.emit(top);
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    focusedElemWithKey(key) {
        return !!this.focusedFeedback && this.focusedFeedbackKey === key;
    }
};
AxisSpecComponent.ctorParameters = () => [
    { type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AxisSpecComponent.prototype, "auto", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AxisSpecComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], AxisSpecComponent.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Overall"])
], AxisSpecComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AxisSpecComponent.prototype, "texts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AxisSpecComponent.prototype, "titleRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dir', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AxisSpecComponent.prototype, "dirRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('type', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AxisSpecComponent.prototype, "typeRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unit', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AxisSpecComponent.prototype, "unitRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labels', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AxisSpecComponent.prototype, "labelsRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('markLabels', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AxisSpecComponent.prototype, "markLabelsRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AxisSpecComponent.prototype, "wrapper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AxisSpecComponent.prototype, "scroll", void 0);
AxisSpecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-axis-spec',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./axis-spec.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./axis-spec.component.scss */ "./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../overall.component.scss */ "./src/app/edit/annotation-module/overall/overall.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"]])
], AxisSpecComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9jYW52YXMtcGF0Y2gvY2FudmFzLXBhdGNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CanvasPatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPatchComponent", function() { return CanvasPatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CanvasPatchComponent = class CanvasPatchComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.data && changes.data.currentValue) {
            const data = changes.data.currentValue;
            if (data.length === 0) {
                return;
            }
            const el = this.canvas.nativeElement;
            const ctx = el.getContext('2d');
            const imgData = ctx.createImageData(15, 15);
            data.forEach((pixel, i) => {
                for (let j = 0; j < 3; j++) {
                    imgData.data[i * 4 + j] = pixel[j];
                }
                imgData.data[i * 4 + 3] = 255;
            });
            ctx.putImageData(imgData, 0, 0);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CanvasPatchComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CanvasPatchComponent.prototype, "canvas", void 0);
CanvasPatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-canvas-patch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./canvas-patch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./canvas-patch.component.scss */ "./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CanvasPatchComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9jdXN0b20tc3BlYy9jdXN0b20tc3BlYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomSpecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSpecComponent", function() { return CustomSpecComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _annotation_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../annotation-util */ "./src/app/edit/annotation-module/annotation-util.ts");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/edit/common/feedback.service */ "./src/app/edit/common/feedback.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");







let CustomSpecComponent = class CustomSpecComponent {
    constructor(fs, _L) {
        this.fs = fs;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.markLabels = [];
        this.focusedFeedbackKey = '';
        this.L = _L.customSpec;
    }
    ngOnInit() {
        this.sub = this.fs.feedbackObservable.subscribe(feedback => {
            this.focusedFeedbackKey = '';
            this.focusedFeedback = null;
            if (feedback.taskKey !== this.task.key) {
                return;
            }
            const splited = feedback.annotationKey.split('.');
            if (splited[0] !== 'spec' ||
                splited[1] !== 'custom' ||
                +splited[2] !== this.index) {
                return;
            }
            this.focusedFeedbackKey = splited[3];
            this.focusedFeedback = feedback;
            setTimeout(() => {
                this.scrollEvent();
            }, 0);
        });
        this.markLabels = this.texts
            .filter(d => d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["KEY_MARK_LABEL"]);
        const labelForms = this.group.get('markLabels');
        if (labelForms.length === 0) {
            this.resetMarkLabels();
        }
    }
    ngAfterViewInit() {
        this.refMap = {
            title: this.titleRef,
            type: this.typeRef,
            unit: this.unitRef,
            markLabels: this.markLabelsRef
        };
    }
    close() {
        this.closed.emit(this.index);
    }
    checkLabeledByMarks(_) {
        this.resetMarkLabels();
    }
    resetMarkLabels() {
        const labelForms = this.group.get('markLabels');
        if (!this.labeledByMarks) {
            while (labelForms.length) {
                labelForms.removeAt(0);
            }
            return;
        }
        let filterList = [];
        for (let i = 0; i < this.index; i++) {
            filterList = filterList.concat(this.group.parent
                .at(i).get('markLabels').value);
        }
        const filteredMarkLabels = this.markLabels
            .filter(markLabel => filterList
            .findIndex(el => el === markLabel.text.value) === -1);
        filteredMarkLabels.forEach(label => {
            const isNumber = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_3__["isNumberText"])(label.text.value);
            if ((this.valueType === 'nominal' && !isNumber) ||
                (this.valueType === 'quantitative' && isNumber)) {
                labelForms.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](label.text.value));
            }
        });
    }
    onValueTypeChange(change) {
        if (change.value === 'quantitative') {
            this.group.get('unit').setValue('integer');
        }
        else {
            this.group.get('unit').setValue('');
        }
    }
    scrollEvent() {
        const ref = this.refMap[this.focusedFeedbackKey];
        if (!ref) {
            return;
        }
        const el = ref.nativeElement;
        const top = el.getBoundingClientRect().top;
        this.scroll.emit(top);
    }
    focusedElemWithKey(key) {
        return !!this.focusedFeedback && this.focusedFeedbackKey === key;
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    get hasMarkLabels() {
        return this.markLabels.length > 0;
    }
    get title() {
        return this.L.getTitle(this.index);
    }
    get valueType() {
        return this.group.get('type').value;
    }
    get labeledByMarks() {
        return this.group.get('labeled').value;
    }
};
CustomSpecComponent.ctorParameters = () => [
    { type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CustomSpecComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], CustomSpecComponent.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_4__["Overall"])
], CustomSpecComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CustomSpecComponent.prototype, "texts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomSpecComponent.prototype, "closed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomSpecComponent.prototype, "scroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('titleRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CustomSpecComponent.prototype, "titleRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('type', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CustomSpecComponent.prototype, "typeRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unit', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CustomSpecComponent.prototype, "unitRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('markLabels', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CustomSpecComponent.prototype, "markLabelsRef", void 0);
CustomSpecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-spec',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-spec.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-spec.component.scss */ "./src/app/edit/annotation-module/overall/custom-spec/custom-spec.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../edit-module.scss */ "./src/app/edit/edit-module.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../overall.component.scss */ "./src/app/edit/annotation-module/overall/overall.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])
], CustomSpecComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/overall/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/index.ts ***!
  \*********************************************************/
/*! exports provided: AxisSpecComponent, CanvasPatchComponent, LegendSpecComponent, ColumnAdditionDialogComponent, RawTableComponent, OverallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _axis_spec_axis_spec_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axis-spec/axis-spec.component */ "./src/app/edit/annotation-module/overall/axis-spec/axis-spec.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisSpecComponent", function() { return _axis_spec_axis_spec_component__WEBPACK_IMPORTED_MODULE_1__["AxisSpecComponent"]; });

/* harmony import */ var _canvas_patch_canvas_patch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-patch/canvas-patch.component */ "./src/app/edit/annotation-module/overall/canvas-patch/canvas-patch.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasPatchComponent", function() { return _canvas_patch_canvas_patch_component__WEBPACK_IMPORTED_MODULE_2__["CanvasPatchComponent"]; });

/* harmony import */ var _legend_spec_legend_spec_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legend-spec/legend-spec.component */ "./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LegendSpecComponent", function() { return _legend_spec_legend_spec_component__WEBPACK_IMPORTED_MODULE_3__["LegendSpecComponent"]; });

/* harmony import */ var _raw_table_raw_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raw-table/raw-table.component */ "./src/app/edit/annotation-module/overall/raw-table/raw-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnAdditionDialogComponent", function() { return _raw_table_raw_table_component__WEBPACK_IMPORTED_MODULE_4__["ColumnAdditionDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawTableComponent", function() { return _raw_table_raw_table_component__WEBPACK_IMPORTED_MODULE_4__["RawTableComponent"]; });

/* harmony import */ var _overall_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overall.component */ "./src/app/edit/annotation-module/overall/overall.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverallComponent", function() { return _overall_component__WEBPACK_IMPORTED_MODULE_5__["OverallComponent"]; });









/***/ }),

/***/ "./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100% !important;\n}\n\n.feedback-region {\n  width: 100% !important;\n  margin-top: -1.3rem !important;\n  border-top: 2px solid #f44336;\n}\n\n.feedback-region button {\n  height: 20px !important;\n}\n\n::ng-deep input.mat-chip-input {\n  min-width: 50px !important;\n  -webkit-box-flex: 1 !important;\n          flex: 1 0 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL2xhYmVsLWNoaXAtbGlzdC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcYW5ub3RhdGlvbi1tb2R1bGVcXG92ZXJhbGxcXGxhYmVsLWNoaXAtbGlzdFxcbGFiZWwtY2hpcC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvbGFiZWwtY2hpcC1saXN0L2xhYmVsLWNoaXAtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDSTtFQUNJLHVCQUFBO0FDQ1I7O0FESUk7RUFDSSwwQkFBQTtFQUNBLDhCQUFBO1VBQUEseUJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9sYWJlbC1jaGlwLWxpc3QvbGFiZWwtY2hpcC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZlZWRiYWNrLXJlZ2lvbiB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNDQzMzY7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIGlucHV0Lm1hdC1jaGlwLWlucHV0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4OiAxIDAgNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmZlZWRiYWNrLXJlZ2lvbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xLjNyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNDQzMzY7XG59XG4uZmVlZGJhY2stcmVnaW9uIGJ1dHRvbiB7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgaW5wdXQubWF0LWNoaXAtaW5wdXQge1xuICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgZmxleDogMSAwIDUwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LabelChipListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelChipListComponent", function() { return LabelChipListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/edit/common/feedback.service */ "./src/app/edit/common/feedback.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");







let LabelChipListComponent = class LabelChipListComponent {
    constructor(fs, L) {
        this.fs = fs;
        this.L = L;
        this.separatorKeyCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["TAB"]];
    }
    ngOnInit() {
        this.labelForms = this.formGroup.get(this.formKey);
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.labelForms.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](value));
        }
        if (input) {
            input.value = '';
        }
    }
    remove(label) {
        const index = this.labels.indexOf(label);
        this.labelForms.removeAt(index);
    }
    get labels() {
        return this.labelForms.value;
    }
};
LabelChipListComponent.ctorParameters = () => [
    { type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], LabelChipListComponent.prototype, "editable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
], LabelChipListComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LabelChipListComponent.prototype, "formKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_4__["Feedback"])
], LabelChipListComponent.prototype, "focusedFeedback", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LabelChipListComponent.prototype, "focusedFeedbackKey", void 0);
LabelChipListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-label-chip-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./label-chip-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./label-chip-list.component.scss */ "./src/app/edit/annotation-module/overall/label-chip-list/label-chip-list.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../overall.component.scss */ "./src/app/edit/annotation-module/overall/overall.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])
], LabelChipListComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  color: #212529;\n}\n\n.key {\n  color: #777;\n  min-width: 100px;\n  margin-right: 0.5rem;\n  border-right: 1px solid #dee2e6;\n  padding: 0rem 0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL2xlZ2VuZC1zcGVjL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFxhbm5vdGF0aW9uLW1vZHVsZVxcb3ZlcmFsbFxcbGVnZW5kLXNwZWNcXGxlZ2VuZC1zcGVjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvbGVnZW5kLXNwZWMvbGVnZW5kLXNwZWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9sZWdlbmQtc3BlYy9sZWdlbmQtc3BlYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLmtleSB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImRpdiB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4ua2V5IHtcbiAgY29sb3I6ICM3Nzc7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LegendSpecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendSpecComponent", function() { return LegendSpecComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/edit/common/feedback.service */ "./src/app/edit/common/feedback.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");






let LegendSpecComponent = class LegendSpecComponent {
    constructor(fs, _L) {
        this.fs = fs;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = _L.legendSpec;
    }
    ngOnInit() {
        this.sub = this.fs.feedbackObservable.subscribe(feedback => {
            this.focusedFeedbackKey = '';
            this.focusedFeedback = null;
            if (feedback.taskKey !== this.task.key) {
                return;
            }
            const splited = feedback.annotationKey.split('.');
            if (splited[0] !== 'spec' ||
                splited[1] !== 'legend') {
                return;
            }
            this.focusedFeedbackKey = splited[2];
            this.focusedFeedback = feedback;
            setTimeout(() => {
                this.scrollEvent();
            }, 0);
        });
    }
    ngAfterViewInit() {
        this.refMap = {
            'title': this.titleRef,
            'labels': this.labelsRef
        };
    }
    scrollEvent() {
        const ref = this.refMap[this.focusedFeedbackKey];
        if (!ref) {
            return;
        }
        const el = ref.nativeElement;
        const top = el.getBoundingClientRect().top;
        this.scroll.emit(top);
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    focusedElemWithKey(key) {
        return !!this.focusedFeedback && this.focusedFeedbackKey === key;
    }
};
LegendSpecComponent.ctorParameters = () => [
    { type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], LegendSpecComponent.prototype, "auto", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], LegendSpecComponent.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Overall"])
], LegendSpecComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LegendSpecComponent.prototype, "titleRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labels', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LegendSpecComponent.prototype, "labelsRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LegendSpecComponent.prototype, "scroll", void 0);
LegendSpecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legend-spec',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./legend-spec.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./legend-spec.component.scss */ "./src/app/edit/annotation-module/overall/legend-spec/legend-spec.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../overall.component.scss */ "./src/app/edit/annotation-module/overall/overall.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"], src_app_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"]])
], LegendSpecComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/overall/overall.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/overall.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subtitle {\n  color: #777;\n  font-size: 1.2rem;\n  width: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#text-mode-button {\n  color: #3f51b5;\n}\n\n#mark-mode-button {\n  color: red;\n}\n\n.spec {\n  color: #212529;\n  padding: 0.2rem;\n}\n\n.spec div {\n  padding: 0rem 0.3rem !important;\n}\n\n.key {\n  font-size: 1.1rem;\n  color: rgba(0, 0, 0, 0.54);\n  min-width: 100px;\n  margin-bottom: 0.3rem;\n}\n\n.feature-cell {\n  width: 7% !important;\n  text-align: center;\n  font-size: 0.85rem;\n  line-height: 24px;\n}\n\n.label-cell {\n  text-align: center;\n  line-height: 24px;\n  font-size: 0.9rem;\n}\n\n.input-cell {\n  width: 47% !important;\n  text-align: center;\n  line-height: 24px;\n  font-size: 0.9rem;\n}\n\n.input-cell input {\n  font-size: 1rem;\n  width: 100%;\n}\n\n.even {\n  background-color: #F5F5F5;\n}\n\n.w-20 {\n  width: 20% !important;\n}\n\n.feedback-region {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-top: -0.4rem;\n  padding: 0.2rem;\n  color: #f44336;\n  background-color: rgba(0, 0, 0, 0);\n  font-size: 0.9rem;\n}\n\n.feedback-region div {\n  margin: 0.2rem;\n  color: #f44336;\n}\n\n.feedback-region.title {\n  width: 100%;\n  border-top: 2px solid #f44336;\n  margin-top: -1.3rem;\n  max-width: 100%;\n}\n\n.feedback-region.select {\n  border-top: 2px solid #f44336;\n  margin-top: -1.3rem;\n  max-width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFxhbm5vdGF0aW9uLW1vZHVsZVxcb3ZlcmFsbFxcb3ZlcmFsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL292ZXJhbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURBSTtFQUNJLCtCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQ1I7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREdJO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FESUk7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvb3ZlcmFsbC9vdmVyYWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3RleHQtbW9kZS1idXR0b24ge1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuXHJcbiNtYXJrLW1vZGUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zcGVjIHtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgZGl2IHtcclxuICAgICAgICBwYWRkaW5nOiAwcmVtIDAuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ua2V5IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jZWxsIHtcclxuICAgIHdpZHRoOiA3JSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5sYWJlbC1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1jZWxsIHtcclxuICAgIHdpZHRoOiA0NyUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmV2ZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuLnctMjAge1xyXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmVlZGJhY2stcmVnaW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IC0wLjRyZW07XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICBjb2xvcjogI2Y0NDMzNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogMC4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgfVxyXG5cclxuICAgICYudGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjQ0MzM2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjNyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2VsZWN0IHtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2Y0NDMzNjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMS4zcmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLnN1YnRpdGxlIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0ZXh0LW1vZGUtYnV0dG9uIHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbiNtYXJrLW1vZGUtYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNwZWMge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuLnNwZWMgZGl2IHtcbiAgcGFkZGluZzogMHJlbSAwLjNyZW0gIWltcG9ydGFudDtcbn1cblxuLmtleSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xufVxuXG4uZmVhdHVyZS1jZWxsIHtcbiAgd2lkdGg6IDclICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmxhYmVsLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmlucHV0LWNlbGwge1xuICB3aWR0aDogNDclICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmlucHV0LWNlbGwgaW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi53LTIwIHtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4uZmVlZGJhY2stcmVnaW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAtMC40cmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5mZWVkYmFjay1yZWdpb24gZGl2IHtcbiAgbWFyZ2luOiAwLjJyZW07XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLmZlZWRiYWNrLXJlZ2lvbi50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2Y0NDMzNjtcbiAgbWFyZ2luLXRvcDogLTEuM3JlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmZlZWRiYWNrLXJlZ2lvbi5zZWxlY3Qge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2Y0NDMzNjtcbiAgbWFyZ2luLXRvcDogLTEuM3JlbTtcbiAgbWF4LXdpZHRoOiAxODBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/annotation-module/overall/overall.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/overall.component.ts ***!
  \*********************************************************************/
/*! exports provided: OverallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverallComponent", function() { return OverallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _annotation_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../annotation-util */ "./src/app/edit/annotation-module/annotation-util.ts");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _common_feedback_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/feedback.service */ "./src/app/edit/common/feedback.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");










let OverallComponent = class OverallComponent {
    constructor(edit, fb, fs, changeDetector, _L) {
        this.edit = edit;
        this.fb = fb;
        this.fs = fs;
        this.changeDetector = changeDetector;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // common
        this.auto = false;
        this.visited = [true, false, false];
        this.focusedFeedbackKey = '';
        this.focusedFeedback = null;
        // Stage 1
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
    ngOnInit() {
        const sub1 = this.event.subscribe(key => {
            this.isDrawing = false;
            this.isMerging = false;
            if (key === 'predict' &&
                this.edit.autoCompleteSubject.getValue()[this.task.key]) {
                this.task.registerControl(this.formGroup, this.fb);
                this.task.applyPrediction(this.formGroup);
                this.updateBoxes();
                if (this.currIndex === this.index) {
                    this.createEventArea();
                }
            }
            if (key === 'review') {
                this.updateBoxes();
                this.createEventArea();
            }
            if (key === 'finish') {
                this.reset();
                Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeEventArea"])(this);
            }
        });
        this.subscriptions.push(sub1);
        const sub2 = this.edit.autoCompleteSubject.asObservable()
            .subscribe(map => {
            this.auto = map[this.task.key];
        });
        this.subscriptions.push(sub2);
        const sub3 = this.fs.feedbackObservable.subscribe(feedback => {
            this.focusedFeedback = null;
            this.focusedFeedbackKey = null;
            if (feedback.taskKey === this.task.key) {
                const splited = feedback.annotationKey.split('.');
                switch (splited[0]) {
                    case 'mark': {
                        this.stage = 0;
                        if (splited[1] === 'other') {
                            this.focusedFeedback = feedback;
                            this.focusedFeedbackKey = feedback.annotationKey;
                            this.boxMode = 'mark';
                            this.updateFocus(null);
                        }
                        else {
                            const markIndex = +splited[1];
                            const key = this.marks[markIndex].key;
                            this.focusedFeedback = feedback;
                            this.focusedFeedbackKey = key;
                            this.updateFocus(key);
                        }
                        break;
                    }
                    case 'text': {
                        this.stage = 0;
                        if (splited[1] === 'other') {
                            this.focusedFeedback = feedback;
                            this.focusedFeedbackKey = feedback.annotationKey;
                            this.boxMode = 'text';
                            this.updateFocus(null);
                        }
                        else {
                            const textIndex = +splited[1];
                            const key = this.texts[textIndex].key;
                            this.focusedFeedback = feedback;
                            this.focusedFeedbackKey = key;
                            this.updateFocus(key);
                        }
                        break;
                    }
                    case 'spec': {
                        if (splited[splited.length - 1] === 'encoding') {
                            this.stage = 2;
                        }
                        else {
                            this.stage = 1;
                        }
                        if (splited[1] === 'other') {
                            this.focusedFeedback = feedback;
                            this.focusedFeedbackKey = feedback.annotationKey;
                            this.updateFocus(null);
                        }
                        if (splited[1] === 'title') {
                            this.focusedFeedback = feedback;
                            this.focusedFeedbackKey = 'title';
                        }
                        this.changeDetector.detectChanges();
                        this.updateFocus(null);
                        break;
                    }
                    case 'raw': {
                        this.stage = 2;
                        this.changeDetector.detectChanges();
                        this.updateFocus(null);
                        break;
                    }
                    default:
                        break;
                }
            }
        });
        this.subscriptions.push(sub3);
    }
    ngOnChanges(changes) {
        if (changes.currIndex || changes.formGroup) {
            this.updateBoxes();
            if (this.currIndex === this.index) {
                this.createEventArea();
                this.reset();
            }
            else {
                Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeEventArea"])(this);
            }
        }
    }
    onKey(event) {
        if (document.activeElement.tagName === 'INPUT') {
            return;
        }
        if (event.key === 'Escape' && this.isMerging) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeMergeLine"])(this);
        }
        if (event.key === 'Escape' && this.isDrawing) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeTempBox"])(this);
        }
        if ((event.key === 'Delete' || event.key === 'd')
            && this.focusedBoxIndex && this._stage === 0
            && !this.isDrawing) {
            this.deleteBox(this.focusedBoxIndex);
        }
        if (event.key === 'f' && this.focusedBoxIndex && this._stage === 0) {
            this.sortDrawOrder(this.focusedBoxIndex);
        }
        if (event.key === 'b' && this.focusedBoxIndex && this._stage === 0) {
            this.sortDrawOrder(this.focusedBoxIndex, false);
        }
    }
    reset() {
        this._stage = 0;
        this.visited = [true, false, false];
        this.autoIncBoxIndex = d3__WEBPACK_IMPORTED_MODULE_7__["max"](this.boxes.map(box => +box.key)) || 0;
        this.focusedBoxIndex = null;
        this.boxMode = 'text';
    }
    deleteBox(boxIndex) {
        this.g.select(`.rect-${boxIndex}`).remove();
        this.g.selectAll(`.circle-${boxIndex}`).remove();
        this.task.deleteBox(this.formGroup, boxIndex);
        if (boxIndex === this.focusedBoxIndex) {
            this.focusedBoxIndex = null;
        }
        this.updateBoxes();
    }
    inputKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onBlurEvent(box) {
        if (this.focusedBoxIndex !== box.key) {
            this.updateFocus(box.key);
        }
    }
    removeBox(boxIndex) {
        this.g.select(`.rect-${boxIndex}`).remove();
        this.g.selectAll(`.circle-${boxIndex}`).remove();
        this.task.deleteBox(this.formGroup, boxIndex);
        this.focusedBoxIndex = null;
    }
    createEventArea() {
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeEventArea"])(this);
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["createEventArea"])(this, true, this.task.inputType);
        this.svgS.on('contextmenu', () => {
            if (this.isMerging) {
                Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["removeMergeLine"])(this);
                d3__WEBPACK_IMPORTED_MODULE_7__["event"].preventDefault();
            }
            else if (this.task.inputType === 'rect'
                && this.boxMode === 'mark'
                && !this.isDrawing) {
                this.isDrawing = true;
                Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["drawBoxBySelectedPixel"])(this);
                this.isDrawing = false;
            }
            d3__WEBPACK_IMPORTED_MODULE_7__["event"].preventDefault();
            d3__WEBPACK_IMPORTED_MODULE_7__["event"].stopPropagation();
            return false;
        });
    }
    onLabelChange() {
        this.updateBoxes();
        this.updateFocus(this.focusedBoxIndex);
    }
    addRectEvent(boxIndex, rectS, circleS) {
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["addRectDragEvent"])(this, boxIndex, rectS, circleS);
        if (this.boxes.find(d => d.key === boxIndex).isText) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["addMergeEvent"])(this, boxIndex, rectS);
        }
    }
    writeForm(boxIndex, x, y, width, height) {
        const imgElem = this.imgRef.nativeElement;
        const clamp = (value, min, max) => {
            return Math.min(max, Math.max(min, value));
        };
        const raw = {
            key: boxIndex,
            x0: clamp(x - 10, 0, imgElem.width) / imgElem.width,
            y0: clamp(y - 10, 0, imgElem.height) / imgElem.height,
            x1: clamp((x + width) - 10, 0, imgElem.width) / imgElem.width,
            y1: clamp((y + height) - 10, 0, imgElem.height) / imgElem.height,
            text: this.boxMode === 'mark' ? undefined : ''
        };
        const addNewBox = !this.formGroup
            .get(this.task.key)
            .get('boxes')
            .get(raw.key);
        this.task.updateBox(this.formGroup, raw);
        if (addNewBox) {
            this.updateBoxes();
        }
    }
    updateFocus(boxIndex) {
        this.g.selectAll('rect').classed('focused', false);
        this.g.selectAll('circle').classed('focused', false);
        this.g.select(`.rect-${boxIndex}`).classed('focused', true);
        this.g.selectAll(`.circle-${boxIndex}`).classed('focused', true);
        this.focusedBoxIndex = boxIndex;
        const box = this.boxes.find(d => d.key === this.focusedBoxIndex);
        if (!box) {
            return;
        }
        if (box.isText) {
            this.boxMode = 'text';
        }
        else {
            this.boxMode = 'mark';
        }
        this.changeDetector.detectChanges();
        if (this.markScrollRef) {
            const el = this.markScrollRef.nativeElement;
            const elRect = el.getBoundingClientRect();
            const focusedDiv = d3__WEBPACK_IMPORTED_MODULE_7__["select"](el).select(`.elem-${boxIndex}`).node();
            if (focusedDiv) {
                const focusedRect = focusedDiv.getBoundingClientRect();
                if (focusedRect.top > elRect.bottom - 50
                    || focusedRect.bottom < elRect.top + 50) {
                    el.scroll({ top: focusedDiv.offsetTop - 150 });
                }
            }
        }
        if (this.textScrollRef) {
            const el = this.textScrollRef.nativeElement;
            const elRect = el.getBoundingClientRect();
            const rowHeight = 38;
            const headerHeight = 33;
            const findIndex = this.boxes
                .filter(d => d.isText)
                .findIndex(d => d.key === this.focusedBoxIndex);
            const focusedBottom = rowHeight * (findIndex + 1);
            const focusedTop = rowHeight * findIndex;
            const elRange = [
                el.scrollTop - headerHeight - 10,
                elRect.bottom - elRect.top + el.scrollTop - headerHeight + 10
            ];
            if (focusedBottom >= elRange[1] || focusedTop <= elRange[0]) {
                el.scroll({ top: focusedTop });
            }
        }
    }
    updateBoxes() {
        const formGroup = this.formGroup
            .get(this.task.key).get('boxes');
        this.boxes = Object
            .entries(formGroup.controls)
            .map(entry => {
            const [key, value] = entry;
            return new _annotation_util__WEBPACK_IMPORTED_MODULE_5__["AnnotationBox"](key, value);
        });
        if (this.sortText) {
            this.boxes = this.boxes.sort(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["boxComparator"]);
        }
        this.marks = this.boxes.filter(d => !d.isText);
        this.texts = this.boxes.filter(d => d.isText);
    }
    clearBoxes() {
        const deletedBoxIndices = this.boxes.filter(d => {
            return this.boxMode === 'mark'
                ? d.text === null
                : d.text !== null;
        })
            .map(d => d.key);
        deletedBoxIndices.forEach(boxIndex => {
            this.g.select(`.rect-${boxIndex}`).remove();
            this.g.selectAll(`.circle-${boxIndex}`).remove();
            this.task.deleteBox(this.formGroup, boxIndex);
        });
        this.updateBoxes();
    }
    box(boxIndex) {
        return this.formGroup.get(this.task.key).get('boxes').get(boxIndex);
    }
    onBoxModeChange(event) {
        this.boxMode = event.value;
    }
    onChangeTitleSpec(event) {
        const value = event.target.value;
        const titleBox = this.boxes.find(d => d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_TITLE"]);
        if (titleBox) {
            titleBox.text.setValue(value);
        }
    }
    predictStage2() {
        this.formGroup.get(this.task.key)
            .setControl('spec', this.task.getDefaultSpecForm(this.fb));
        this.detectAxes();
        this.mapBoxToTitle();
        this.mapBoxesToLegend();
        if (!this.hasLegend && !this.hasXAxis && !this.hasYAxis) {
            this.addCustomColumn(true);
        }
    }
    goNextStage() {
        if (this._stage === 0 && !this.visited[1] && this.mode === 'annotation') {
            this.predictStage2();
        }
        this.stage = Math.min(2, this._stage + 1);
    }
    goPrevStage() {
        this.stage = Math.max(0, this._stage - 1);
    }
    refresh(index) {
        switch (index) {
            case 1:
                this.predictStage2();
                break;
            default:
                break;
        }
    }
    addAxis(dir = 'x', title = '', type = 'nominal', labels = [], pre = 0, valuePerPixel = 0) {
        const formGroup = this.formGroup.get(this.task.key)
            .get('spec').get('axis');
        let unit = pre <= 0 ? 'integer' : 'decimal';
        if (type === 'nominal') {
            unit = '';
        }
        const newGroup = this.fb.group({
            dir: this.fb.control(dir),
            title: this.fb.control(title),
            type: this.fb.control(type),
            labels: this.fb.array(labels),
            precision: this.fb.control(pre),
            unit: this.fb.control(unit),
            labeled: this.fb.control(false),
            markLabels: this.fb.array([]),
            valuePerPixel: this.fb.control(valuePerPixel),
        });
        formGroup.push(newGroup);
    }
    addCustomColumn(labeled = false) {
        const formGroup = this.formGroup.get(this.task.key)
            .get('spec').get('custom');
        const newGroup = this.fb.group({
            title: this.fb.control(`Unknown column${formGroup.length + 1}`),
            type: this.fb.control('nominal'),
            labeled: this.fb.control(labeled),
            markLabels: this.fb.array([]),
            unit: this.fb.control('integer'),
        });
        formGroup.push(newGroup);
    }
    deleteCustomColumn(index) {
        this.customGroups.splice(index, 1);
    }
    detectAxes() {
        const axesGroup = this.formGroup.get(this.task.key)
            .get('spec').get('axis');
        while (axesGroup.length) {
            axesGroup.removeAt(0);
        }
        const { width, height } = this.imgRef.nativeElement;
        const getPrecision = (v) => {
            const splited = v.split('.');
            if (splited.length === 2) {
                return splited[1].length;
            }
            const vs = splited[0];
            for (let i = vs.length - 1; i >= 0; i--) {
                if (vs.charAt(i) !== '0') {
                    return i - vs.length + 1;
                }
            }
            return 0;
        };
        const interpret = (axis, dir, title) => {
            if (Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["isNumberTexts"])(axis)) {
                const axisValues = axis.map(d => {
                    return {
                        value: +d.text.value.replace(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["NUM_REG"], ''),
                        center: d.center
                    };
                }).sort((a, b) => a.value - b.value);
                const pre = d3__WEBPACK_IMPORTED_MODULE_7__["max"](axisValues.filter(d => d.value !== 0), d => getPrecision(d.value.toString())) + 1;
                const valuesPerPixel = [];
                for (let i = 0; i < axisValues.length - 1; i++) {
                    const curr = axisValues[i];
                    const next = axisValues[i + 1];
                    const interval = Math.abs(dir === 'x'
                        ? (curr.center[0] - next.center[0]) * width
                        : (curr.center[1] - next.center[1]) * height);
                    valuesPerPixel.push((+next.value - +curr.value) / interval);
                }
                const valuePerPixel = +d3__WEBPACK_IMPORTED_MODULE_7__["mean"](valuesPerPixel);
                const labels = this.boxes.filter(d => d.label.value === `${dir}-axis-label`).map(d => d.text.value);
                this.addAxis(dir, title, 'quantitative', labels, pre, valuePerPixel);
            }
            else {
                const labels = this.boxes.filter(d => d.label.value === `${dir}-axis-label`).map(d => d.text.value);
                this.addAxis(dir, title, 'nominal', labels);
            }
        };
        const detectAxis = (dir) => {
            const axis = this.boxes.filter(d => d.label.value === `${dir}-axis-label`);
            let title = `Unknown ${dir.toUpperCase()} Axis`;
            const axisTitleBox = this.boxes.find(d => d.label.value === `${dir}-axis-title`);
            if (axisTitleBox !== undefined) {
                title = axisTitleBox.text.value;
            }
            if (axis.length > 0) {
                interpret(axis, dir, title);
                return true;
            }
            else {
                return false;
            }
        };
        detectAxis('x');
        detectAxis('y');
        if (this.hasXAxis || this.hasYAxis) {
            this.mapMarkLabelToAxis();
        }
    }
    onCheckBoxRegression() {
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["regressBoxesByColor"])(this);
        this.marks.forEach(mark => {
            this.sortDrawOrder(mark.key, false);
        });
    }
    onPointSizeChange(change) {
        const pointSymbol = this.pointMark.nativeElement;
        const r = change.value;
        d3__WEBPACK_IMPORTED_MODULE_7__["select"](pointSymbol).attr('r', r);
        this.boxes.filter(box => box.text === null).forEach(mark => {
            const boxIndex = mark.key;
            const sel = this.g.select(`.rect-${boxIndex}`);
            sel.attr('r', r);
            const x = +sel.attr('cx');
            const y = +sel.attr('cy');
            this.writeForm(boxIndex, x - r, y - r, 2 * r, 2 * r);
        });
        this.updateBoxes();
    }
    mapBoxToTitle() {
        const titleBox = this.boxes.find(d => d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_TITLE"]);
        const titleControl = this.formGroup.get(this.task.key)
            .get('spec.title');
        if (titleBox !== undefined) {
            titleControl.setValue(titleBox.text.value);
        }
        else if (titleControl.value === '') {
            titleControl.setValue('Unknown Title');
        }
    }
    mapBoxesToLegend() {
        const titleBox = this.boxes.find(d => d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_LEGEND_TITLE"]);
        const legendBoxes = this.boxes.filter(d => d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_LEGEND_LABEL"]);
        if (legendBoxes.length === 0) {
            return false;
        }
        const group = src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Overall"].legendDefaultForm(this.fb);
        group.get('title').setValue(titleBox ? titleBox.text.value : 'Unknown Legend');
        legendBoxes.map(d => d.text.value).forEach(legend => {
            group.get('labels').push(this.fb.control(legend));
        });
        this.specGroup.setControl('legend', group);
        return true;
    }
    mapMarkLabelToAxis() {
        const markLabelBoxes = this.boxes.filter(d => {
            return d.isText && d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_MARK_LABEL"];
        });
        const markLabelType = Object(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["isNumberTexts"])(markLabelBoxes)
            ? 'quantitative'
            : 'nominal';
        const axesGroup = this.specGroup.get('axis');
        axesGroup.controls.forEach((group) => {
            if (group.get('type').value === markLabelType) {
                if (markLabelType === 'quantitative') {
                    const values = group.get('labels')
                        .controls.map(d => {
                        return +d.value.replace(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["NUM_REG"], '');
                    });
                    const extent = d3__WEBPACK_IMPORTED_MODULE_7__["extent"](values);
                    const numIncludedValues = markLabelBoxes
                        .map(d => +d.text.value.replace(_annotation_util__WEBPACK_IMPORTED_MODULE_5__["NUM_REG"], ''))
                        .map(d => d >= extent[0] && d <= extent[1] ? 1 : 0)
                        .reduce((acc, curr) => acc + curr, 0);
                    const labeled = numIncludedValues > 0.5 * markLabelBoxes.length;
                    group.get('labeled').setValue(labeled);
                    const markLabelsForm = group.get('markLabels');
                    markLabelBoxes.forEach(box => {
                        markLabelsForm.push(this.fb.control(box.text.value));
                    });
                }
                else {
                    const axisLabels = group.get('labels').value;
                    const allIncluded = markLabelBoxes.every(d => {
                        return axisLabels.includes(d.text.value);
                    });
                    group.get('labeled').setValue(allIncluded);
                    const markLabelsForm = group.get('markLabels');
                    markLabelBoxes.forEach(box => {
                        markLabelsForm.push(this.fb.control(box.text.value));
                    });
                }
            }
            else {
                group.addControl('labeled', this.fb.control(false));
            }
        });
    }
    sortDrawOrder(boxIndex, forward = true) {
        if (forward) {
            this.g.select(`.rect-${boxIndex}`).raise();
            this.g.selectAll(`.circle-${boxIndex}`).raise();
        }
        else {
            this.g.select(`.rect-${boxIndex}`).lower();
            this.g.selectAll(`.circle-${boxIndex}`).lower();
        }
    }
    onSubmitReady() {
        if (this.index === Object.keys(this.formGroup.value).length - 1) {
            this.submitEmitter.emit();
        }
    }
    onSpecScroll(top) {
        const scrollEl = this.specScrollRef.nativeElement;
        this.specScrollRef.nativeElement.scroll({
            top: top - 500 + scrollEl.scrollTop
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
    updateTextSortOption(change) {
        if (change.checked) {
            this.sortText = true;
            this.updateBoxes();
        }
    }
    get specGroup() {
        return this.formGroup.get(this.task.key).get('spec');
    }
    get axesGroup() {
        return this.formGroup.get(this.task.key)
            .get('spec').get('axis').controls;
    }
    get customGroups() {
        return this.specGroup.get('custom')
            .controls;
    }
    get legendGroup() {
        return this.formGroup.get(this.task.key)
            .get('spec').get('legend');
    }
    get hasLegend() {
        return this.specGroup.contains('legend');
    }
    get hasXAxis() {
        return this.axesGroup.some(form => form.get('dir').value === 'x');
    }
    get hasYAxis() {
        return this.axesGroup.some(form => form.get('dir').value === 'y');
    }
    get stage() {
        return this._stage;
    }
    set stage(value) {
        this._stage = value;
        this.visited[value] = true;
    }
    get boxMode() {
        return this._boxMode;
    }
    set boxMode(value) {
        this.svgS.selectAll('line')
            .attr('stroke', value === 'text'
            ? 'rgba(61, 81, 181, 0.6)'
            : 'rgba(255, 0, 0, 0.6)');
        this._boxMode = value;
    }
};
OverallComponent.ctorParameters = () => [
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _common_feedback_service__WEBPACK_IMPORTED_MODULE_8__["FeedbackService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_9__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], OverallComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Overall"])
], OverallComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], OverallComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OverallComponent.prototype, "svgS", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OverallComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], OverallComponent.prototype, "currIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], OverallComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], OverallComponent.prototype, "spacePressed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], OverallComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OverallComponent.prototype, "submitEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pointMark', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OverallComponent.prototype, "pointMark", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textScroll', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OverallComponent.prototype, "textScrollRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('markScroll', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OverallComponent.prototype, "markScrollRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('specScroll', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OverallComponent.prototype, "specScrollRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('markRows'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], OverallComponent.prototype, "markRowsRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('textRows'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], OverallComponent.prototype, "textRowsRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], OverallComponent.prototype, "onKey", null);
OverallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overall',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./overall.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/overall.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./overall.component.scss */ "./src/app/edit/annotation-module/overall/overall.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../edit-module.scss */ "./src/app/edit/edit-module.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _common_feedback_service__WEBPACK_IMPORTED_MODULE_8__["FeedbackService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_9__["LocaleService"]])
], OverallComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/overall/raw-table/raw-table.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/raw-table/raw-table.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  font-size: 0.9rem;\n}\n\n.raw-table {\n  max-height: 500px;\n  overflow: scroll;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.raw-table .column {\n  width: 200px !important;\n  min-width: 200px !important;\n  position: relative;\n}\n\n.raw-table .index-cell {\n  width: 80px !important;\n  min-width: 80px !important;\n  text-align: center;\n}\n\n.raw-table .content-cell input, .raw-table .content-cell select {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  border-bottom: 1px solid #CBCBCB;\n  border-width: 1px 1px 1px 1px;\n}\n\n.raw-table .column-title {\n  font-size: 1.1rem;\n  color: #777;\n  text-align: center;\n}\n\n.raw-table .patch {\n  position: absolute;\n  top: 5px;\n  right: 30px;\n  width: 15px;\n  height: 15px;\n}\n\n.raw-table .patch rect {\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9vdmVyYWxsL3Jhdy10YWJsZS9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcYW5ub3RhdGlvbi1tb2R1bGVcXG92ZXJhbGxcXHJhdy10YWJsZVxccmF3LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvcmF3LXRhYmxlL3Jhdy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FEQ0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURFSTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNGWjs7QURNSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSlI7O0FET0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNMUjs7QURPUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2Fubm90YXRpb24tbW9kdWxlL292ZXJhbGwvcmF3LXRhYmxlL3Jhdy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4ucmF3LXRhYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGV4LWNlbGwge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NCQ0JDQjtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGF0Y2gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcblxyXG4gICAgICAgIHJlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ucmF3LXRhYmxlIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucmF3LXRhYmxlIC5jb2x1bW4ge1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmF3LXRhYmxlIC5pbmRleC1jZWxsIHtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYXctdGFibGUgLmNvbnRlbnQtY2VsbCBpbnB1dCwgLnJhdy10YWJsZSAuY29udGVudC1jZWxsIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0JDQkNCO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDFweDtcbn1cbi5yYXctdGFibGUgLmNvbHVtbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzc3NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJhdy10YWJsZSAucGF0Y2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMzBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cbi5yYXctdGFibGUgLnBhdGNoIHJlY3Qge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit/annotation-module/overall/raw-table/raw-table.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/edit/annotation-module/overall/raw-table/raw-table.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ColumnAdditionDialogComponent, RawTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnAdditionDialogComponent", function() { return ColumnAdditionDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawTableComponent", function() { return RawTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var src_app_d3_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/d3-utils */ "./src/app/d3-utils.ts");
/* harmony import */ var src_app_prediction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/prediction.service */ "./src/app/prediction.service.ts");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/edit/common/feedback.service */ "./src/app/edit/common/feedback.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");












let ColumnAdditionDialogComponent = class ColumnAdditionDialogComponent {
    constructor(dialogRef, column) {
        this.dialogRef = dialogRef;
        this.column = column;
        this.separatorKeyCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["TAB"]];
    }
    onNoClick() {
        this.dialogRef.close();
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.column.labels.push(value);
        }
        if (input) {
            input.value = '';
        }
    }
    remove(label) {
        const index = this.column.labels.indexOf(label);
        this.column.labels.splice(index, 1);
    }
};
ColumnAdditionDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
ColumnAdditionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-column-addition-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./column-addition-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/column-addition-dialog.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
], ColumnAdditionDialogComponent);

let RawTableComponent = class RawTableComponent {
    constructor(fb, dialog, edit, predictService, fs, _L) {
        this.fb = fb;
        this.dialog = dialog;
        this.edit = edit;
        this.predictService = predictService;
        this.fs = fs;
        this.focusEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columns = [];
        this.marks = [];
        this.rows = [];
        this.allChannelsEncoded = false;
        this.focusedFeedbackKey = '';
        this.encodings = [
            'x-position',
            'y-position',
            'height',
            'width',
            'area',
            'color',
            'none'
        ];
        this.re = /[m|mm|km|s|g|kg|K|M|%|$|,]/g;
        this.L = _L.rawTable;
    }
    ngOnInit() {
        const specGroup = this.formGroup.get('spec');
        specGroup.get('axis').controls
            .forEach((group, i) => {
            const column = {
                title: group.get('title').value,
                path: `axis.${i}`
            };
            const targetGroup = this.fromPath(specGroup, column.path);
            column.encoding = targetGroup.get('encoding');
            if (group.get('type').value === 'nominal') {
                column['labels'] = group.get('labels').value;
            }
            this.columns.push(column);
        });
        specGroup.get('custom').controls
            .forEach((group, i) => {
            const column = {
                title: group.get('title').value,
                path: `custom.${i}`
            };
            const targetGroup = this.fromPath(specGroup, column.path);
            column.encoding = targetGroup.get('encoding');
            if (group.get('type').value === 'nominal') {
                column['labels'] = group.get('markLabels').value;
            }
            this.columns.push(column);
        });
        if (this.hasLegend) {
            const column = {
                title: specGroup.get('legend.title').value,
                path: 'legend',
                labels: specGroup.get('legend.labels').value
            };
            const group = specGroup.get(column.path);
            if (group.contains('encoding')) {
                column.encoding = group.get('encoding');
            }
            column['labels'] = group.get('labels').value;
            this.columns.push(column);
        }
        this.marks = this.boxes.filter(d => d.text === null);
        this.rawGroup = this.formGroup.get('raw');
        this.sub = this.fs.feedbackObservable.subscribe(feedback => {
            this.focusedFeedbackKey = '';
            this.focusedFeedback = null;
            if (feedback.taskKey !== this.task.key) {
                return;
            }
            const splited = feedback.annotationKey.split('.');
            const lastKey = splited[splited.length - 1];
            if (lastKey === 'encoding') {
                this.focusedFeedback = feedback;
                this.focusedFeedbackKey = splited
                    .slice(1, splited.length - 1)
                    .join('.');
            }
            else if (splited[0] === 'raw') {
                this.focusedFeedback = feedback;
                if (splited[1] === 'other') {
                    this.focusedFeedbackKey = 'other';
                }
                else {
                    this.focusedFeedbackKey = this.marks[+splited[1]].key;
                }
                setTimeout(() => {
                    this.focusEmitter.emit(this.focusedFeedbackKey);
                }, 0);
            }
            else {
                return;
            }
        });
        this.checkEncodedChannels();
        this.initTable();
        if (this.allChannelsEncoded && this.mode === 'revision') {
            this.submitEmitter.emit();
        }
    }
    ngOnChanges(changes) {
        if (changes.focusedBoxIndex && this.tableRef) {
            const tableEl = this.tableRef.nativeElement;
            const tableRect = tableEl.getBoundingClientRect();
            const divIndex = this.rows
                .findIndex(d => d.markKey === changes.focusedBoxIndex.currentValue);
            if (divIndex !== -1) {
                const focusedDiv = d3__WEBPACK_IMPORTED_MODULE_4__["select"](tableEl)
                    .selectAll('.focus-box').nodes()[divIndex];
                if (focusedDiv) {
                    const focusedRect = focusedDiv.getBoundingClientRect();
                    if (focusedRect.top > tableRect.bottom
                        || focusedRect.bottom < tableRect.top) {
                        tableEl.scroll({ top: focusedDiv.offsetTop - 100 });
                    }
                }
            }
        }
    }
    ngAfterViewInit() {
    }
    onSelectEncoding(event, column) {
        const target = event.target;
        const targetGroup = this.fromPath(this.formGroup.get('spec'), column.path);
        this.rows.forEach(row => {
            row.attrs[column.title] = undefined;
            row.clusterLabels[column.title] = undefined;
            if (row.group.contains(column.title)) {
                row.group.get([column.title]).setValue('');
            }
        });
        if (!targetGroup.contains('encoding')) {
            targetGroup.addControl('encoding', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](target.value));
            column.encoding = targetGroup.get('encoding');
        }
        else {
            targetGroup.get('encoding').setValue(target.value);
            column.encoding = targetGroup.get('encoding');
        }
        this.checkEncodedChannels();
    }
    checkEncodedChannels() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.allChannelsEncoded = this.columns.every(column => {
                const targetGroup = this.fromPath(this.formGroup.get('spec'), column.path);
                return targetGroup.contains('encoding');
            });
            if (this.allChannelsEncoded) {
                for (const column of this.columns) {
                    const encoding = column.encoding.value;
                    switch (encoding) {
                        case 'color':
                            this.clusterMarksByColor(column);
                            break;
                        case 'shape':
                            this.clusterMarksByShape(column);
                            break;
                        default:
                            break;
                    }
                }
            }
        });
    }
    clusterMarksByColor(column) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const path = this.edit.image.path;
            if (!column.labels || column.labels.length === 0) {
                return;
            }
            const k = column.labels.length;
            const boxes = this.marks.map(d => d.pointValues);
            const { centers, labels } = yield this.predictService
                .clusterMarks({ encoding: 'color', path, k, boxes });
            this.marks.forEach((mark, i) => {
                const row = this.rows.find(d => d.markKey === mark.key);
                const label = labels[i];
                row.attrs[column.title] = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_7__["rgb2Hex"])(centers[label]);
                row.clusterLabels[column.title] = label;
            });
        });
    }
    clusterMarksByShape(column) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const path = this.edit.image.path;
            const k = column.labels.length;
            const boxes = this.marks.map(d => d.pointValues);
            const { centerPatches, labels } = yield this.predictService
                .clusterMarks({ encoding: 'shape', path, k, boxes });
            this.marks.forEach((mark, i) => {
                const row = this.rows.find(d => d.markKey === mark.key);
                const label = labels[i];
                row.attrs[column.title] = centerPatches[label];
                row.clusterLabels[column.title] = label;
            });
        });
    }
    onChangeLabel(column, row, i) {
        const key = column.title;
        const changedValue = row.group.get([key]).value;
        const targetRow = this.rows
            .find((d, j) => d.group.get([key]).value === changedValue && i !== j);
        if (targetRow) {
            row.attrs[key] = targetRow.attrs[key];
            row.clusterLabels[key] = targetRow.clusterLabels[key];
        }
        this.rows[i] = row;
    }
    runPrediction() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Promise.all(this.columns.map((column) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const targetGroup = this.fromPath(this.formGroup.get('spec'), column.path);
                if (!targetGroup.contains('encoding')) {
                    return;
                }
                yield this.predict(column, targetGroup.get('encoding').value);
                if (targetGroup.contains('labeled')
                    && targetGroup.get('labeled').value) {
                    this.assignMarkLabels(targetGroup, column);
                }
            })));
            const colorEncodingIndex = this.columns.findIndex(column => {
                const targetGroup = this.fromPath(this.formGroup.get('spec'), column.path);
                return targetGroup.contains('encoding')
                    && targetGroup.get('encoding').value === 'color';
            });
            if (colorEncodingIndex !== -1) {
                const title = this.columns[colorEncodingIndex].title;
                this.rows = this.rows.sort((a, b) => {
                    const aValue = a.group.get([title]).value;
                    const bValue = b.group.get([title]).value;
                    return aValue.toLowerCase()
                        .localeCompare(bValue.toLowerCase());
                });
            }
        });
    }
    clear() {
        this.initTable(true);
        this.checkEncodedChannels();
    }
    predict(column, encoding) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const targetGroup = this.fromPath(this.formGroup.get('spec'), column.path);
            switch (encoding) {
                case 'width':
                    yield this.predictWidth(targetGroup, column);
                    break;
                case 'height':
                    yield this.predictHeight(targetGroup, column);
                    break;
                case 'x-position':
                    yield this.predictPosition(targetGroup, column, 'x');
                    break;
                case 'y-position':
                    yield this.predictPosition(targetGroup, column, 'y');
                    break;
                case 'color':
                    yield this.predictByClusterLabels(column);
                    break;
                case 'shape':
                    yield this.predictByClusterLabels(column);
                    break;
                case 'area':
                    yield this.predictArea(targetGroup, column);
                    break;
                case 'none':
                    break;
                default:
                    break;
            }
            this.submitEmitter.emit();
        });
    }
    initTable(force = false) {
        this.rows = [];
        const markIndices = this.marks.map(d => d.key);
        const initCells = () => {
            for (let i = 0; i < markIndices.length; i++) {
                const group = this.fb.group({});
                this.columns.forEach(column => {
                    group.addControl(column.title, this.fb.control(''));
                });
                this.rawGroup.push(group);
            }
        };
        // check the raw group is empty
        if (this.rawGroup.length === 0) {
            initCells();
        }
        else {
            // Check the columns in both second stage
            // and the third stage are same.
            const checkValue = this.rawGroup.controls[0].value;
            const allSameColumns = this.columns.every(column => {
                return checkValue[column.title] !== undefined;
            }) && (Object.keys(checkValue).length === this.columns.length);
            const anyValueFilled = this.columns.some(column => {
                return checkValue[column.title] !== '';
            });
            const sameRowCount = this.rawGroup.length === this.marks.length;
            if (!(allSameColumns && anyValueFilled && sameRowCount) || force) {
                this.rawGroup.clear();
                initCells();
            }
        }
        for (let i = 0; i < markIndices.length; i++) {
            this.rows.push({
                markKey: markIndices[i],
                group: this.rawGroup.controls[i],
                attrs: {},
                clusterLabels: {}
            });
        }
    }
    format(value, pre, unit) {
        const digits = value !== 0
            ? Math.log10(Math.abs(value))
            : -pre;
        if (unit === 'integer' && pre > 0) {
            pre = 0;
        }
        else if (unit === 'decimal' && pre <= 0) {
            pre = 1;
        }
        const applyPre = digits + 1 + pre;
        return +value.toPrecision(Math.max(applyPre, 1));
    }
    predictWidth(targetGroup, column) {
        if (!targetGroup.contains('type') ||
            targetGroup.get('type').value !== 'quantitative') {
            return;
        }
        const imgWidth = this.imgRef.nativeElement.width;
        const valuePerPixel = +targetGroup.get('valuePerPixel').value;
        const pre = +targetGroup.get('precision').value;
        const unit = targetGroup.get('unit').value;
        const centers = this.marks.map(d => d.center[0] * imgWidth);
        const labels = this.boxes.filter(d => {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_X_AXIS_LABEL"];
        });
        const minLabel = labels.find(label => {
            return label.center[0] === d3__WEBPACK_IMPORTED_MODULE_4__["min"](labels, d => d.center[0]);
        });
        const minPos = minLabel.center[0] * imgWidth;
        const minValue = +(minLabel.text.value.replace(this.re, ''));
        const maxLabel = labels.find(label => {
            return label.center[0] === d3__WEBPACK_IMPORTED_MODULE_4__["max"](labels, d => d.center[0]);
        });
        const maxPos = maxLabel.center[0] * imgWidth;
        const maxValue = +(maxLabel.text.value.replace(this.re, ''));
        const positions = [];
        centers.forEach(center => {
            const currValue = minValue + (center - minPos) / (maxPos - minPos) * (maxValue - minValue);
            positions.push(currValue);
        });
        const result = this.marks.map((d, i) => {
            const sign = positions[i] > 0 ? 1 : -1;
            return sign * Math.round(d.width * imgWidth) * valuePerPixel;
        });
        this.rawGroup.controls.forEach((control, i) => {
            control.get([column.title]).setValue(this.format(result[i], pre, unit));
        });
    }
    predictHeight(targetGroup, column) {
        if (!targetGroup.contains('type') ||
            targetGroup.get('type').value !== 'quantitative') {
            return;
        }
        const imgHeight = this.imgRef.nativeElement.height;
        const valuePerPixel = +targetGroup.get('valuePerPixel').value;
        const pre = +targetGroup.get('precision').value;
        const unit = targetGroup.get('unit').value;
        const centers = this.marks.map(d => d.center[1] * imgHeight);
        const labels = this.boxes.filter(d => {
            return d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_Y_AXIS_LABEL"];
        });
        const minLabel = labels.find(label => {
            return label.center[1] === d3__WEBPACK_IMPORTED_MODULE_4__["min"](labels, d => d.center[1]);
        });
        const minPos = minLabel.center[1] * imgHeight;
        const minValue = +(minLabel.text.value.replace(this.re, ''));
        const maxLabel = labels.find(label => {
            return label.center[1] === d3__WEBPACK_IMPORTED_MODULE_4__["max"](labels, d => d.center[1]);
        });
        const maxPos = maxLabel.center[1] * imgHeight;
        const maxValue = +(maxLabel.text.value.replace(this.re, ''));
        const positions = [];
        centers.forEach(center => {
            const currValue = minValue + (center - minPos) / (maxPos - minPos) * (maxValue - minValue);
            positions.push(currValue);
        });
        const result = this.marks.map((d, i) => {
            const sign = positions[i] > 0 ? 1 : -1;
            return sign * Math.round(d.height * imgHeight) * valuePerPixel;
        });
        this.rawGroup.controls.forEach((control, i) => {
            control.get([column.title])
                .setValue(this.format(result[i], pre, unit));
        });
    }
    predictPosition(targetGroup, column, dir) {
        const { width, height } = this.imgRef.nativeElement;
        const mul = dir === 'x' ? width : height;
        const offset = dir === 'x' ? 0 : 1;
        const centers = this.marks.map(d => d.center[offset] * mul);
        const labels = this.boxes.filter(d => {
            return d.label.value === (dir === 'x'
                ? src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_X_AXIS_LABEL"]
                : src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_Y_AXIS_LABEL"]);
        });
        if (labels.length === 0 ||
            !targetGroup.contains('type')) {
            return;
        }
        const result = [];
        if (targetGroup.get('type').value === 'nominal') {
            centers.forEach(center => {
                const minIndex = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_7__["getMinIndex"])(labels, (label) => {
                    return Math.abs(label.center[offset] * mul - center);
                });
                result.push(labels[minIndex].text.value);
            });
        }
        else {
            const pre = +targetGroup.get('precision').value;
            const unit = targetGroup.get('unit').value;
            const minLabel = labels.find(label => {
                return label.center[offset] === d3__WEBPACK_IMPORTED_MODULE_4__["min"](labels, d => d.center[offset]);
            });
            const minPos = minLabel.center[offset] * mul;
            const minValue = +(minLabel.text.value.replace(this.re, ''));
            const maxLabel = labels.find(label => {
                return label.center[offset] === d3__WEBPACK_IMPORTED_MODULE_4__["max"](labels, d => d.center[offset]);
            });
            const maxPos = maxLabel.center[offset] * mul;
            const maxValue = +(maxLabel.text.value.replace(this.re, ''));
            centers.forEach(center => {
                const currValue = minValue + (center - minPos) / (maxPos - minPos) * (maxValue - minValue);
                result.push(this.format(currValue, pre, unit));
            });
        }
        this.rawGroup.controls.forEach((control, i) => {
            control.get([column.title]).setValue(result[i]);
        });
    }
    predictArea(targetGroup, column) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const boxes = this.marks.map(d => d.pointValues);
            const path = this.edit.image.path;
            if (boxes.length === 0 ||
                !targetGroup.contains('type') ||
                targetGroup.get('type').value !== 'quantitative') {
                return;
            }
            const body = { path, boxes };
            const areas = yield this.predictService.predictAreas(body);
            const sumOfAreas = d3__WEBPACK_IMPORTED_MODULE_4__["sum"](areas);
            const ratios = areas.map(area => area / sumOfAreas)
                .map(ratio => ratio.toFixed(3));
            const unit = targetGroup.get('unit').value;
            this.rawGroup.controls.forEach((control, i) => {
                const value = unit === 'integer'
                    ? Math.round(+ratios[i] * 100).toString()
                    : ratios[i];
                control.get([column.title]).setValue(value);
            });
        });
    }
    assignMarkLabels(targetGroup, column) {
        const targetMarkLabels = targetGroup.get('markLabels').value;
        const markLabelBoxes = this.boxes
            .filter(d => d.isText && d.label.value === src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_MARK_LABEL"])
            .filter(d => targetMarkLabels.findIndex(label => label === d.text.value) !== -1);
        markLabelBoxes.forEach(box => {
            const value = box.text.value;
            const targetIndex = this.findNearestBoxIndex(box, targetGroup);
            this.rows[targetIndex]
                .group.get([column.title]).setValue(value);
        });
    }
    findNearestBoxIndex(queryBox, targetGroup) {
        const axisDir = targetGroup.contains('dir')
            ? targetGroup.get('dir').value
            : 'none';
        // First, find the marks which contains the target mark label
        const innerRows = this.rows.filter(row => {
            const mark = this.marks.find(m => m.key === row.markKey);
            const [x0, y0, x1, y1] = mark.pointValues;
            return queryBox.center[0] >= x0 &&
                queryBox.center[0] <= x1 &&
                queryBox.center[1] >= y0 &&
                queryBox.center[1] <= y1;
        });
        const rowsForSearch = innerRows.length > 0 ? innerRows : this.rows;
        const minRow = Object(src_app_d3_utils__WEBPACK_IMPORTED_MODULE_7__["getMinElem"])(rowsForSearch, (row) => {
            const mark = this.marks.find(m => m.key === row.markKey);
            const [qx0, qy0, qx1, qy1] = queryBox.pointValues;
            const [tx0, ty0, tx1, ty1] = mark.pointValues;
            let qPos;
            let tPos;
            const distBetweenRange = (a, b) => {
                if (a[0] > b[1]) {
                    return a[0] - b[1];
                }
                else if (b[0] > a[1]) {
                    return b[0] - a[1];
                }
                else {
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
                    const xDist = distBetweenRange([qx0, qx1], [tx0, tx1]);
                    const yDist = distBetweenRange([qy0, qy1], [ty0, ty1]);
                    if (xDist > 0 || yDist > 0) {
                        return Math.pow(xDist, 2) +
                            Math.pow(yDist, 2) + 1000000;
                    }
                    else {
                        // If the distance between boxes is zero,
                        // use a euclidian distance between the centers.
                        const [qcx, qcy] = queryBox.center;
                        const [tcx, tcy] = mark.center;
                        return Math.pow(qcx - tcx, 2) + Math.pow(qcy - tcy, 2);
                    }
            }
        });
        return this.rows.findIndex(row => row.markKey === minRow.markKey);
    }
    predictByClusterLabels(column) {
        const key = column.title;
        const definedPairs = this.marks
            .map((mark, i) => {
            const group = this.rawGroup.at(i);
            return {
                value: group.get([key]).value,
                label: this.rows.find(d => d.markKey === mark.key).clusterLabels[key]
            };
        })
            .filter(d => d.value !== '');
        if (definedPairs.length === 0) {
            return;
        }
        this.rawGroup.controls.forEach((control, i) => {
            const row = this.rows
                .find(d => d.markKey === this.marks[i].key);
            const defined = definedPairs
                .find(d => d.label === row.clusterLabels[key]);
            const value = defined ? defined.value : '';
            control.get([key]).setValue(value);
        });
    }
    addColumn() {
        const dialogRef = this.dialog.open(ColumnAdditionDialogComponent, {
            width: '500px',
            data: {
                title: 'Unknown Column',
                path: `custom`,
                labels: []
            }
        });
        dialogRef.afterClosed().subscribe((newColumn) => {
            const path = `custom-${newColumn.title}`;
            const specGroup = this.formGroup.get('spec');
            newColumn.path = path;
            specGroup.addControl(path, this.fb.group({
                title: this.fb.control(newColumn.title)
            }));
            if (newColumn.labels && newColumn.labels.length > 0) {
                specGroup.get(path)
                    .addControl('labels', this.fb.array(newColumn.labels));
            }
            this.columns.push(newColumn);
            this.rawGroup.controls.forEach((control) => {
                control.addControl(newColumn.title, this.fb.control(''));
            });
        });
    }
    addRow() {
        const group = this.fb.group({});
        this.columns.forEach(column => {
            group.addControl(column.title, this.fb.control(''));
        });
        this.rawGroup.push(group);
        this.rows.push({ group, attrs: {}, clusterLabels: {} });
    }
    updateFocus(boxIndex) {
        if (boxIndex) {
            this.focusEmitter.emit(boxIndex);
        }
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    fromPath(group, path) {
        let ret = group;
        path.split('.').map(d => isNaN(+d) ? d : +d).forEach(key => {
            if (isNaN(+key)) {
                ret = ret.get(key.toString());
            }
            else {
                ret = ret.at(+key);
            }
        });
        return ret;
    }
};
RawTableComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_9__["EditService"] },
    { type: src_app_prediction_service__WEBPACK_IMPORTED_MODULE_8__["PredictionService"] },
    { type: src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_10__["FeedbackService"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_11__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], RawTableComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], RawTableComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Overall"])
], RawTableComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RawTableComponent.prototype, "hasLegend", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], RawTableComponent.prototype, "boxes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RawTableComponent.prototype, "focusedBoxIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RawTableComponent.prototype, "inputType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RawTableComponent.prototype, "pointRadius", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RawTableComponent.prototype, "auto", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RawTableComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RawTableComponent.prototype, "focusEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RawTableComponent.prototype, "submitEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], RawTableComponent.prototype, "tableRef", void 0);
RawTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-raw-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./raw-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/overall/raw-table/raw-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./raw-table.component.scss */ "./src/app/edit/annotation-module/overall/raw-table/raw-table.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../edit-module.scss */ "./src/app/edit/edit-module.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../overall.component.scss */ "./src/app/edit/annotation-module/overall/overall.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        src_app_edit_service__WEBPACK_IMPORTED_MODULE_9__["EditService"],
        src_app_prediction_service__WEBPACK_IMPORTED_MODULE_8__["PredictionService"],
        src_app_edit_common_feedback_service__WEBPACK_IMPORTED_MODULE_10__["FeedbackService"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_11__["LocaleService"]])
], RawTableComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/regression/regression.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/edit/annotation-module/regression/regression.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  min-height: 150px;\n  max-height: 250px;\n  overflow-y: scroll;\n}\n\n.answer-input {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9yZWdyZXNzaW9uL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFxhbm5vdGF0aW9uLW1vZHVsZVxccmVncmVzc2lvblxccmVncmVzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9yZWdyZXNzaW9uL3JlZ3Jlc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9hbm5vdGF0aW9uLW1vZHVsZS9yZWdyZXNzaW9uL3JlZ3Jlc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmFuc3dlci1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcclxufVxyXG4iLCIudGFibGUge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFuc3dlci1pbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit/annotation-module/regression/regression.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/edit/annotation-module/regression/regression.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegressionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegressionComponent", function() { return RegressionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");






let RegressionComponent = class RegressionComponent {
    constructor(edit) {
        this.edit = edit;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.event.subscribe(key => {
            if (key === 'predict' && this.edit.autoCompleteSubject.getValue()[this.task.key]) {
                this.task.applyPrediction(this.formGroup);
            }
        });
    }
    getControl(key) {
        return this.formGroup.get(this.task.key).get(key);
    }
};
RegressionComponent.ctorParameters = () => [
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], RegressionComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Regression"])
], RegressionComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], RegressionComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RegressionComponent.prototype, "spacePressed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegressionComponent.prototype, "submitEmitter", void 0);
RegressionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-regression',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./regression.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/regression/regression.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./regression.component.scss */ "./src/app/edit/annotation-module/regression/regression.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../edit-module.scss */ "./src/app/edit/edit-module.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]])
], RegressionComponent);



/***/ }),

/***/ "./src/app/edit/annotation-module/text/text.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/edit/annotation-module/text/text.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvYW5ub3RhdGlvbi1tb2R1bGUvdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit/annotation-module/text/text.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/edit/annotation-module/text/text.component.ts ***!
  \***************************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var _annotation_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../annotation-util */ "./src/app/edit/annotation-module/annotation-util.ts");








let TextComponent = class TextComponent {
    constructor(edit, fb) {
        this.edit = edit;
        this.fb = fb;
        this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusedBoxIndex = null;
        this.autoIncBoxIndex = 0;
        this.boxes = [];
        this.isDrawing = false;
        this.isMerging = false;
    }
    ngOnInit() {
        this.event.subscribe(key => {
            this.isDrawing = false;
            this.isMerging = false;
            if (key === 'predict' && this.edit.autoCompleteSubject.getValue()[this.task.key]) {
                this.task.registerControl(this.formGroup, this.fb);
                this.task.applyPrediction(this.formGroup);
                this.updateBoxes();
                if (this.currIndex === this.index) {
                    this.createEventArea();
                }
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.currIndex || changes.formGroup) {
            this.updateBoxes();
            if (this.currIndex === this.index) {
                this.createEventArea();
                this.autoIncBoxIndex = d3__WEBPACK_IMPORTED_MODULE_4__["max"](this.boxes.map(box => +box.key)) || 0;
                this.focusedBoxIndex = null;
            }
            else {
                Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeEventArea"])(this);
            }
        }
    }
    onKey(event) {
        if (document.activeElement.tagName === 'INPUT') {
            return;
        }
        if (event.key === 'Escape' && this.isMerging) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeMergeLine"])(this);
        }
        if (event.key === 'Escape' && this.isDrawing) {
            Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeTempBox"])(this);
        }
        if ((event.key === 'Delete' || event.key === 'd')
            && this.focusedBoxIndex) {
            this.deleteBox(this.focusedBoxIndex);
        }
    }
    deleteBox(boxIndex) {
        this.g.select(`.rect-${boxIndex}`).remove();
        this.g.selectAll(`.circle-${boxIndex}`).remove();
        this.task.deleteBox(this.formGroup, boxIndex);
        if (boxIndex === this.focusedBoxIndex) {
            this.focusedBoxIndex = null;
        }
        this.updateBoxes();
    }
    createEventArea() {
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["removeEventArea"])(this);
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["createEventArea"])(this, true);
    }
    writeForm(boxIndex, x, y, width, height) {
        const imgElem = this.imgRef.nativeElement;
        const clamp = (value, min, max) => {
            return Math.min(max, Math.max(min, value));
        };
        const raw = {
            key: boxIndex,
            x0: clamp(x - 10, 0, imgElem.width) / imgElem.width,
            y0: clamp(y - 10, 0, imgElem.height) / imgElem.height,
            x1: clamp((x + width) - 10, 0, imgElem.width) / imgElem.width,
            y1: clamp((y + height) - 10, 0, imgElem.height) / imgElem.height,
        };
        const addNewBox = !this.formGroup
            .get(this.task.key)
            .get(raw.key);
        this.task.updateBox(this.formGroup, raw);
        if (addNewBox) {
            this.updateBoxes();
        }
    }
    addRectEvent(boxIndex, rectS, circleS) {
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["addRectDragEvent"])(this, boxIndex, rectS, circleS);
        Object(_annotation_util__WEBPACK_IMPORTED_MODULE_7__["addMergeEvent"])(this, boxIndex, rectS);
    }
    updateFocus(boxIndex) {
        this.g.selectAll('rect').classed('focused', false);
        this.g.selectAll('circle').classed('focused', false);
        this.g.select(`.rect-${boxIndex}`).classed('focused', true);
        this.focusedBoxIndex = boxIndex;
    }
    updateBoxes() {
        const formGroup = this.formGroup.get(this.task.key);
        this.boxes = Object
            .entries(formGroup.controls)
            .map(entry => {
            const [key, value] = entry;
            return new _annotation_util__WEBPACK_IMPORTED_MODULE_7__["AnnotationBox"](key, value);
        });
    }
    onSelect(event) {
        event.stopPropagation();
    }
};
TextComponent.ctorParameters = () => [
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], TextComponent.prototype, "formGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Text"])
], TextComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TextComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TextComponent.prototype, "svgS", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TextComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TextComponent.prototype, "currIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
], TextComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TextComponent.prototype, "spacePressed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TextComponent.prototype, "submitEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TextComponent.prototype, "onKey", null);
TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/annotation-module/text/text.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text.component.scss */ "./src/app/edit/annotation-module/text/text.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../edit-module.scss */ "./src/app/edit/edit-module.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], TextComponent);



/***/ }),

/***/ "./src/app/edit/common/feedback-mark/feedback-mark.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/edit/common/feedback-mark/feedback-mark.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  height: 24px;\n  width: 24px;\n  border-radius: 12px;\n  background-color: #3f51b5;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\ndiv > div {\n  pointer-events: none;\n}\ndiv.focused {\n  background-color: #339966;\n}\ndiv.focused:hover {\n  background-color: #40bf80;\n}\ndiv:hover {\n  background-color: #606fc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vZmVlZGJhY2stbWFyay9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcY29tbW9uXFxmZWVkYmFjay1tYXJrXFxmZWVkYmFjay1tYXJrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9mZWVkYmFjay1tYXJrL2ZlZWRiYWNrLW1hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0ksb0JBQUE7QUNDUjtBREVJO0VBQ0kseUJBQUE7QUNBUjtBREdJO0VBQ0kseUJBQUE7QUNEUjtBREtBO0VBQ0kseUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvY29tbW9uL2ZlZWRiYWNrLW1hcmsvZmVlZGJhY2stbWFyay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTMsIDEwMik7XHJcbiAgICB9XHJcblxyXG4gICAgJi5mb2N1c2VkOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBiZjgwO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNmZjNztcclxufVxyXG4iLCJkaXYge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYgPiBkaXYge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmRpdi5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTk2Njtcbn1cbmRpdi5mb2N1c2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYmY4MDtcbn1cblxuZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNmZjNztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/common/feedback-mark/feedback-mark.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/edit/common/feedback-mark/feedback-mark.component.ts ***!
  \**********************************************************************/
/*! exports provided: FeedbackMarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackMarkComponent", function() { return FeedbackMarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");



let FeedbackMarkComponent = class FeedbackMarkComponent {
    constructor() {
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick() {
        this.focus.emit(this.feedback);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"])
], FeedbackMarkComponent.prototype, "feedback", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FeedbackMarkComponent.prototype, "focused", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FeedbackMarkComponent.prototype, "focus", void 0);
FeedbackMarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback-mark',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback-mark.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-mark/feedback-mark.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback-mark.component.scss */ "./src/app/edit/common/feedback-mark/feedback-mark.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FeedbackMarkComponent);



/***/ }),

/***/ "./src/app/edit/common/feedback-modal/feedback-modal.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/edit/common/feedback-modal/feedback-modal.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#feedback-container {\n  position: fixed;\n  min-width: 300px;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  z-index: 1000;\n  color: white;\n}\n\n.close {\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  color: white;\n}\n\nsvg {\n  position: absolute;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vZmVlZGJhY2stbW9kYWwvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXGNvbW1vblxcZmVlZGJhY2stbW9kYWxcXGZlZWRiYWNrLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9mZWVkYmFjay1tb2RhbC9mZWVkYmFjay1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9jb21tb24vZmVlZGJhY2stbW9kYWwvZmVlZGJhY2stbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmVlZGJhY2stY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG59XHJcbiIsIiNmZWVkYmFjay1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdG9wOiAtMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit/common/feedback-modal/feedback-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/edit/common/feedback-modal/feedback-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: FeedbackModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModalComponent", function() { return FeedbackModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feedback.service */ "./src/app/edit/common/feedback.service.ts");



let FeedbackModalComponent = class FeedbackModalComponent {
    constructor(fs, renderer, changeDetector) {
        this.fs = fs;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.displayModal = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.sub = this.fs.showObservable.subscribe(data => {
            this.displayModal = true;
            const { left, top, feedback } = data;
            this.feedback = feedback;
            this.changeDetector.detectChanges();
            const el = this.ref.nativeElement;
            const rect = el.getBoundingClientRect();
            this.renderer.setStyle(el, 'left', `${left - rect.width}px`);
            this.renderer.setStyle(el, 'top', `${top - rect.height / 2}px`);
        });
    }
    close() {
        this.displayModal = false;
    }
    resolve() {
        this.fs.resolveSubject.next(this.feedback);
        this.close();
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
FeedbackModalComponent.ctorParameters = () => [
    { type: _feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FeedbackModalComponent.prototype, "ref", void 0);
FeedbackModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/feedback-modal/feedback-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback-modal.component.scss */ "./src/app/edit/common/feedback-modal/feedback-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], FeedbackModalComponent);



/***/ }),

/***/ "./src/app/edit/common/feedback.service.ts":
/*!*************************************************!*\
  !*** ./src/app/edit/common/feedback.service.ts ***!
  \*************************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let FeedbackService = class FeedbackService {
    constructor() {
        this.resolveSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.showSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.feedbackSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].dummy());
    }
    showFeedback(left, top, feedback) {
        this.showSubject.next({ left, top, feedback });
    }
    get resolveObservable() {
        return this.resolveSubject.asObservable();
    }
    get showObservable() {
        return this.showSubject.asObservable();
    }
    get feedbackObservable() {
        return this.feedbackSubject.asObservable();
    }
    resolve() {
        this.resolveSubject.next(this.feedbackSubject.getValue());
        this.feedbackSubject.next(src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].dummy());
    }
};
FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FeedbackService);



/***/ }),

/***/ "./src/app/edit/common/index.ts":
/*!**************************************!*\
  !*** ./src/app/edit/common/index.ts ***!
  \**************************************/
/*! exports provided: FeedbackMarkComponent, FeedbackModalComponent, ReviewPanelComponent, VSubTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _feedback_mark_feedback_mark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-mark/feedback-mark.component */ "./src/app/edit/common/feedback-mark/feedback-mark.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedbackMarkComponent", function() { return _feedback_mark_feedback_mark_component__WEBPACK_IMPORTED_MODULE_1__["FeedbackMarkComponent"]; });

/* harmony import */ var _feedback_modal_feedback_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-modal/feedback-modal.component */ "./src/app/edit/common/feedback-modal/feedback-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedbackModalComponent", function() { return _feedback_modal_feedback_modal_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackModalComponent"]; });

/* harmony import */ var _review_panel_review_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review-panel/review-panel.component */ "./src/app/edit/common/review-panel/review-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewPanelComponent", function() { return _review_panel_review_panel_component__WEBPACK_IMPORTED_MODULE_3__["ReviewPanelComponent"]; });

/* harmony import */ var _sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-header/sub-header.component */ "./src/app/edit/common/sub-header/sub-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSubTitleComponent", function() { return _sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_4__["VSubTitleComponent"]; });








/***/ }),

/***/ "./src/app/edit/common/resolve-button/resolve-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/edit/common/resolve-button/resolve-button.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .resolve-button .mat-stroked-button {\n  height: 24px !important;\n  line-height: 24px !important;\n}\n::ng-deep .resolve-button .mat-stroked-button span {\n  line-height: 24px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vcmVzb2x2ZS1idXR0b24vQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXGNvbW1vblxccmVzb2x2ZS1idXR0b25cXHJlc29sdmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9yZXNvbHZlLWJ1dHRvbi9yZXNvbHZlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7QUNEWjtBREVZO0VBQ0ksNEJBQUE7QUNBaEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2NvbW1vbi9yZXNvbHZlLWJ1dHRvbi9yZXNvbHZlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgICAucmVzb2x2ZS1idXR0b24ge1xyXG4gICAgICAgIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5yZXNvbHZlLWJ1dHRvbiAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnJlc29sdmUtYnV0dG9uIC5tYXQtc3Ryb2tlZC1idXR0b24gc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit/common/resolve-button/resolve-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/edit/common/resolve-button/resolve-button.component.ts ***!
  \************************************************************************/
/*! exports provided: ResolveButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveButtonComponent", function() { return ResolveButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feedback.service */ "./src/app/edit/common/feedback.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");




let ResolveButtonComponent = class ResolveButtonComponent {
    constructor(fs, L) {
        this.fs = fs;
        this.L = L;
    }
    ngOnInit() { }
};
ResolveButtonComponent.ctorParameters = () => [
    { type: _feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"] }
];
ResolveButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resolve-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resolve-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/resolve-button/resolve-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resolve-button.component.scss */ "./src/app/edit/common/resolve-button/resolve-button.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])
], ResolveButtonComponent);



/***/ }),

/***/ "./src/app/edit/common/review-panel/review-panel.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/edit/common/review-panel/review-panel.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 95% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vcmV2aWV3LXBhbmVsL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFxjb21tb25cXHJldmlldy1wYW5lbFxccmV2aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9yZXZpZXctcGFuZWwvcmV2aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2NvbW1vbi9yZXZpZXctcGFuZWwvcmV2aWV3LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit/common/review-panel/review-panel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/edit/common/review-panel/review-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: ReviewPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPanelComponent", function() { return ReviewPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");




let ReviewPanelComponent = class ReviewPanelComponent {
    constructor(_L) {
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = _L.reviewPanel;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.feedbackForms && changes.feedbackForms.currentValue) {
            this.feedbacks = this.feedbackForms.map(d => src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].from(d));
        }
    }
    onFeedbackFocused(feedback) {
        this.focus.emit(feedback.key);
    }
    equals(form) {
        return src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].from(form).key === this.focusedKey;
    }
};
ReviewPanelComponent.ctorParameters = () => [
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ReviewPanelComponent.prototype, "feedbacks", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ReviewPanelComponent.prototype, "feedbackForms", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ReviewPanelComponent.prototype, "focusedKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ReviewPanelComponent.prototype, "focus", void 0);
ReviewPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./review-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/review-panel/review-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./review-panel.component.scss */ "./src/app/edit/common/review-panel/review-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])
], ReviewPanelComponent);



/***/ }),

/***/ "./src/app/edit/common/stop-propagtion.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit/common/stop-propagtion.directive.ts ***!
  \**********************************************************/
/*! exports provided: StopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPropagationDirective", function() { return StopPropagationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StopPropagationDirective = class StopPropagationDirective {
    onClick(event) {
        event.stopPropagation();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], StopPropagationDirective.prototype, "onClick", null);
StopPropagationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appStopPropagation]'
    })
], StopPropagationDirective);



/***/ }),

/***/ "./src/app/edit/common/sub-header/sub-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/edit/common/sub-header/sub-header.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100% !important;\n}\n\n.sub-header {\n  color: rgba(0, 0, 0, 0.56);\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9jb21tb24vc3ViLWhlYWRlci9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcY29tbW9uXFxzdWItaGVhZGVyXFxzdWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2NvbW1vbi9zdWItaGVhZGVyL3N1Yi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2NvbW1vbi9zdWItaGVhZGVyL3N1Yi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Nik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit/common/sub-header/sub-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/edit/common/sub-header/sub-header.component.ts ***!
  \****************************************************************/
/*! exports provided: VSubTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSubTitleComponent", function() { return VSubTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VSubTitleComponent = class VSubTitleComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], VSubTitleComponent.prototype, "title", void 0);
VSubTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/common/sub-header/sub-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-header.component.scss */ "./src/app/edit/common/sub-header/sub-header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VSubTitleComponent);



/***/ }),

/***/ "./src/app/edit/demo/demo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/edit/demo/demo.service.ts ***!
  \*******************************************/
/*! exports provided: DemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoService", function() { return DemoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/network.service */ "./src/app/network.service.ts");
/* harmony import */ var src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/edit-data */ "./src/app/common/edit-data.ts");
/* harmony import */ var _demo_bar_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo_bar_data.json */ "./src/app/edit/demo/demo_bar_data.json");
var _demo_bar_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./demo_bar_data.json */ "./src/app/edit/demo/demo_bar_data.json", 1);
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");






let DemoService = class DemoService {
    constructor(network) {
        this.network = network;
        this.index = 0;
        this.currMode = 'init';
        this.data = [];
        this.data = _demo_bar_data_json__WEBPACK_IMPORTED_MODULE_4__;
    }
    getAnnotationElem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const paths = yield this.network.getPaths();
            if (this.index >= paths.length) {
                return null;
            }
            else {
                this.currMode = this.getNextMode();
                const path = paths[this.index];
                const elem = this.data[this.index];
                const meta = { path, feedbacks: null, annotation: null };
                const blob = yield this.network.getImage(meta.path);
                if (this.currMode === 'revision') {
                    meta.feedbacks = elem.feedbacks.map((d) => new src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_5__["Feedback"](d));
                    meta.annotation = elem.annotation;
                }
                return [new src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_3__["AnnotationMeta"](meta), blob];
            }
        });
    }
    getVerificationElem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const paths = yield this.network.getPaths();
            if (this.index >= paths.length) {
                return null;
            }
            else {
                const path = paths[this.index];
                this.currMode = this.getNextMode();
                const blob = yield this.network.getImage(path);
                const annotatedMeta = new src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_3__["AnnotatedImageData"]({
                    path,
                    annotation: this.data[this.index].annotation
                });
                return [annotatedMeta, blob];
            }
        });
    }
    getReview(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const reviewRaw = {
                path,
                approved: false,
                feedbacks: this.data[this.index].feedbacks
            };
            return new src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_5__["Review"](reviewRaw);
        });
    }
    getNextMode() {
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
};
DemoService.ctorParameters = () => [
    { type: src_app_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"] }
];
DemoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]])
], DemoService);



/***/ }),

/***/ "./src/app/edit/demo/demo_bar_data.json":
/*!**********************************************!*\
  !*** ./src/app/edit/demo/demo_bar_data.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.4\",\"comment\":\"Refine the bound\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.encoding\",\"comment\":\"Height가 되어야합니다.\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"raw.other\",\"comment\":\"바뀐 encoding에 맞춰서 Degree값이 모두 바뀌어야 합니다.\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.234,0.293,0.297,0.798],\"label\":\"object\"},{\"bound\":[0.504,0.306,0.567,0.798],\"label\":\"object\"},{\"bound\":[0.433,0.281,0.496,0.798],\"label\":\"object\"},{\"bound\":[0.703,0.293,0.766,0.798],\"label\":\"object\"},{\"bound\":[0.64,0.306,0.703,0.798],\"label\":\"object\"},{\"bound\":[0.297,0.437,0.36,0.798],\"label\":\"object\"},{\"bound\":[0.567,0.241,0.63,0.798],\"label\":\"object\"},{\"bound\":[0.369,0.229,0.433,0.798],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.396,0.163,0.606,0.204],\"label\":\"title\",\"text\":\"Bar Degree by Fruit\"},{\"bound\":[0.884,0.204,0.952,0.236],\"label\":\"legend-label\",\"text\":\"Female\"},{\"bound\":[0.884,0.242,0.93,0.274],\"label\":\"legend-label\",\"text\":\"Male\"},{\"bound\":[0.15,0.449,0.174,0.563],\"label\":\"y-axis-title\",\"text\":\"Degree\"},{\"bound\":[0.173,0.258,0.194,0.293],\"label\":\"y-axis-label\",\"text\":\"4\"},{\"bound\":[0.176,0.397,0.19,0.423],\"label\":\"y-axis-label\",\"text\":\"3\"},{\"bound\":[0.176,0.528,0.19,0.557],\"label\":\"y-axis-label\",\"text\":\"2\"},{\"bound\":[0.176,0.659,0.188,0.682],\"label\":\"y-axis-label\",\"text\":\"1\"},{\"bound\":[0.17,0.78,0.196,0.817],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.476,0.921,0.526,0.953],\"label\":\"x-axis-title\",\"text\":\"Fruit\"},{\"bound\":[0.286,0.819,0.308,0.898],\"label\":\"x-axis-label\",\"text\":\"apple\"},{\"bound\":[0.42,0.819,0.442,0.921],\"label\":\"x-axis-label\",\"text\":\"banana\"},{\"bound\":[0.558,0.819,0.58,0.901],\"label\":\"x-axis-label\",\"text\":\"grape\"},{\"bound\":[0.694,0.819,0.716,0.915],\"label\":\"x-axis-label\",\"text\":\"orange\"}],\"spec\":{\"title\":\"Bar Degree by Fruit\",\"axis\":[{\"dir\":\"x\",\"title\":\"Fruit\",\"type\":\"nominal\",\"labels\":[\"apple\",\"banana\",\"grape\",\"orange\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Degree\",\"type\":\"quantitative\",\"labels\":[\"4\",\"3\",\"2\",\"1\",\"0\"],\"precision\":1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.01590806343515539,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"Female\",\"Male\"],\"encoding\":\"color\"}},\"raw\":[{\"Fruit\":\"apple\",\"Degree\":2,\"Unknown Legend\":\"Female\"},{\"Fruit\":\"grape\",\"Degree\":2,\"Unknown Legend\":\"Female\"},{\"Fruit\":\"banana\",\"Degree\":2,\"Unknown Legend\":\"Male\"},{\"Fruit\":\"orange\",\"Degree\":2,\"Unknown Legend\":\"Male\"},{\"Fruit\":\"orange\",\"Degree\":2,\"Unknown Legend\":\"Female\"},{\"Fruit\":\"apple\",\"Degree\":1,\"Unknown Legend\":\"Male\"},{\"Fruit\":\"grape\",\"Degree\":2,\"Unknown Legend\":\"Male\"},{\"Fruit\":\"banana\",\"Degree\":2,\"Unknown Legend\":\"Female\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.16\",\"comment\":\"Refine the bound\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"text.other\",\"comment\":\"왼쪽 아래 0에 해당하는 박스 추가\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.other\",\"comment\":\"두 번째 행에 4번째 박스 추가\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.2,0.368,0.327,0.495],\"label\":\"object\"},{\"bound\":[0.431,0.368,0.54,0.495],\"label\":\"object\"},{\"bound\":[0.461,0.503,0.574,0.63],\"label\":\"object\"},{\"bound\":[0.294,0.638,0.324,0.765],\"label\":\"object\"},{\"bound\":[0.391,0.233,0.51,0.362],\"label\":\"object\"},{\"bound\":[0.51,0.233,0.626,0.362],\"label\":\"object\"},{\"bound\":[0.2,0.503,0.284,0.63],\"label\":\"object\"},{\"bound\":[0.327,0.368,0.431,0.495],\"label\":\"object\"},{\"bound\":[0.2,0.638,0.24,0.765],\"label\":\"object\"},{\"bound\":[0.324,0.638,0.427,0.765],\"label\":\"object\"},{\"bound\":[0.294,0.233,0.391,0.362],\"label\":\"object\"},{\"bound\":[0.284,0.503,0.38,0.63],\"label\":\"object\"},{\"bound\":[0.2,0.233,0.294,0.362],\"label\":\"object\"},{\"bound\":[0.626,0.233,0.734,0.362],\"label\":\"object\"},{\"bound\":[0.24,0.638,0.294,0.765],\"label\":\"object\"},{\"bound\":[0.38,0.503,0.461,0.63],\"label\":\"object\"},{\"bound\":[0.647,0.383,0.761,0.495],\"label\":\"object\"},{\"bound\":[0.574,0.503,0.674,0.63],\"label\":\"object\"},{\"bound\":[0.427,0.638,0.51,0.765],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.406,0.163,0.596,0.204],\"label\":\"title\",\"text\":\"Bar Degree by Fruit\"},{\"bound\":[0.882,0.204,0.954,0.236],\"label\":\"legend-label\",\"text\":\"baseball\"},{\"bound\":[0.882,0.239,0.968,0.271],\"label\":\"legend-label\",\"text\":\"basketball\"},{\"bound\":[0.882,0.274,0.946,0.306],\"label\":\"legend-label\",\"text\":\"football\"},{\"bound\":[0.882,0.312,0.94,0.341],\"label\":\"legend-label\",\"text\":\"soccer\"},{\"bound\":[0.882,0.347,0.936,0.379],\"label\":\"legend-label\",\"text\":\"tennis\"},{\"bound\":[0.104,0.472,0.124,0.536],\"label\":\"y-axis-title\",\"text\":\"Fruit\"},{\"bound\":[0.13,0.286,0.192,0.318],\"label\":\"y-axis-label\",\"text\":\"orange\"},{\"bound\":[0.14,0.423,0.19,0.455],\"label\":\"y-axis-label\",\"text\":\"grape\"},{\"bound\":[0.128,0.554,0.19,0.586],\"label\":\"y-axis-label\",\"text\":\"banana\"},{\"bound\":[0.142,0.691,0.192,0.723],\"label\":\"y-axis-label\",\"text\":\"apple\"},{\"bound\":[0.466,0.846,0.534,0.883],\"label\":\"x-axis-title\",\"text\":\"Degree\"},{\"bound\":[0.346,0.822,0.36,0.843],\"label\":\"x-axis-label\",\"text\":\"5\"},{\"bound\":[0.492,0.813,0.516,0.846],\"label\":\"x-axis-label\",\"text\":\"10\"},{\"bound\":[0.644,0.813,0.67,0.846],\"label\":\"x-axis-label\",\"text\":\"15\"}],\"spec\":{\"title\":\"Bar Degree by Fruit\",\"axis\":[{\"dir\":\"x\",\"title\":\"Degree\",\"type\":\"quantitative\",\"labels\":[\"0\",\"5\",\"10\",\"15\"],\"precision\":1,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.04704553413027688,\"encoding\":\"width\"},{\"dir\":\"y\",\"title\":\"Fruit\",\"type\":\"nominal\",\"labels\":[\"orange\",\"grape\",\"banana\",\"apple\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"baseball\",\"basketball\",\"football\",\"soccer\",\"tennis\"],\"encoding\":\"color\"}},\"raw\":[{\"Degree\":4.2,\"Fruit\":\"grape\",\"Unknown Legend\":\"baseball\"},{\"Degree\":3.6,\"Fruit\":\"grape\",\"Unknown Legend\":\"football\"},{\"Degree\":3.7,\"Fruit\":\"banana\",\"Unknown Legend\":\"soccer\"},{\"Degree\":1,\"Fruit\":\"apple\",\"Unknown Legend\":\"football\"},{\"Degree\":3.9,\"Fruit\":\"orange\",\"Unknown Legend\":\"football\"},{\"Degree\":3.8,\"Fruit\":\"orange\",\"Unknown Legend\":\"soccer\"},{\"Degree\":2.8,\"Fruit\":\"banana\",\"Unknown Legend\":\"baseball\"},{\"Degree\":3.4,\"Fruit\":\"grape\",\"Unknown Legend\":\"basketball\"},{\"Degree\":1.3,\"Fruit\":\"apple\",\"Unknown Legend\":\"baseball\"},{\"Degree\":3.4,\"Fruit\":\"apple\",\"Unknown Legend\":\"soccer\"},{\"Degree\":3.2,\"Fruit\":\"orange\",\"Unknown Legend\":\"basketball\"},{\"Degree\":3.2,\"Fruit\":\"banana\",\"Unknown Legend\":\"basketball\"},{\"Degree\":3.1,\"Fruit\":\"orange\",\"Unknown Legend\":\"baseball\"},{\"Degree\":3.6,\"Fruit\":\"orange\",\"Unknown Legend\":\"tennis\"},{\"Degree\":1.8,\"Fruit\":\"apple\",\"Unknown Legend\":\"basketball\"},{\"Degree\":2.7,\"Fruit\":\"banana\",\"Unknown Legend\":\"football\"},{\"Degree\":3.8,\"Fruit\":\"grape\",\"Unknown Legend\":\"tennis\"},{\"Degree\":3.3,\"Fruit\":\"banana\",\"Unknown Legend\":\"tennis\"},{\"Degree\":2.7,\"Fruit\":\"apple\",\"Unknown Legend\":\"tennis\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.1\",\"comment\":\"Change the text\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"text.17\",\"comment\":\"Change the text\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"text.6\",\"comment\":\"Change the text\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.labels\",\"comment\":\"Check this value\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.363,0.397,0.456,0.939],\"label\":\"object\"},{\"bound\":[0.467,0.537,0.561,0.939],\"label\":\"object\"},{\"bound\":[0.571,0.579,0.666,0.939],\"label\":\"object\"},{\"bound\":[0.151,0.096,0.246,0.939],\"label\":\"object\"},{\"bound\":[0.257,0.237,0.35,0.939],\"label\":\"object\"},{\"bound\":[0.677,0.697,0.77,0.939],\"label\":\"object\"},{\"bound\":[0.886,0.84,0.98,0.939],\"label\":\"object\"},{\"bound\":[0.781,0.758,0.874,0.939],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.016,0.027,0.03,0.046],\"label\":\"y-axis-label\",\"text\":\"45\"},{\"bound\":[0.014,0.124,0.038,0.151],\"label\":\"y-axis-label\",\"text\":\"40K\"},{\"bound\":[0.014,0.228,0.032,0.255],\"label\":\"y-axis-label\",\"text\":\"35\"},{\"bound\":[0.014,0.324,0.031,0.355],\"label\":\"y-axis-label\",\"text\":\"30\"},{\"bound\":[0.014,0.429,0.032,0.456],\"label\":\"y-axis-label\",\"text\":\"25\"},{\"bound\":[0.014,0.527,0.031,0.552],\"label\":\"y-axis-label\",\"text\":\"20\"},{\"bound\":[0.014,0.625,0.032,0.652],\"label\":\"y-axis-label\",\"text\":\"15s\"},{\"bound\":[0.016,0.73,0.03,0.753],\"label\":\"y-axis-label\",\"text\":\"10\"},{\"bound\":[0.02,0.834,0.03,0.853],\"label\":\"y-axis-label\",\"text\":\"5\"},{\"bound\":[0.019,0.928,0.031,0.955],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.182,0.958,0.22,0.988],\"label\":\"x-axis-label\",\"text\":\"Topic2\"},{\"bound\":[0.288,0.958,0.322,0.981],\"label\":\"x-axis-label\",\"text\":\"Topic6\"},{\"bound\":[0.394,0.961,0.426,0.981],\"label\":\"x-axis-label\",\"text\":\"Topic7\"},{\"bound\":[0.498,0.958,0.532,0.988],\"label\":\"x-axis-label\",\"text\":\"Topic1\"},{\"bound\":[0.601,0.955,0.636,0.985],\"label\":\"x-axis-label\",\"text\":\"Topic4\"},{\"bound\":[0.708,0.958,0.742,0.988],\"label\":\"x-axis-label\",\"text\":\"Topic3\"},{\"bound\":[0.812,0.958,0.848,0.985],\"label\":\"x-axis-label\",\"text\":\"Topic8\"},{\"bound\":[0.916,0.958,0.952,0.988],\"label\":\"x-axis-label\",\"text\":\"Topics\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Unknown X Axis\",\"type\":\"nominal\",\"labels\":[\"Topic2\",\"Topic6\",\"Topic7\",\"Topic1\",\"Topic4\",\"Topic3\",\"Topic8\",\"Topics\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Unknown Y Axis\",\"type\":\"quantitative\",\"labels\":[\"45\",\"40K\",\"35\",\"30\",\"25\",\"20\",\"15s\",\"10\",\"5\",\"0\"],\"precision\":1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.1370618667401423,\"encoding\":\"height\"}],\"custom\":[]},\"raw\":[{\"Unknown X Axis\":\"Topic7\",\"Unknown Y Axis\":27},{\"Unknown X Axis\":\"Topic1\",\"Unknown Y Axis\":20},{\"Unknown X Axis\":\"Topic4\",\"Unknown Y Axis\":18},{\"Unknown X Axis\":\"Topic2\",\"Unknown Y Axis\":42},{\"Unknown X Axis\":\"Topic6\",\"Unknown Y Axis\":35},{\"Unknown X Axis\":\"Topic3\",\"Unknown Y Axis\":12},{\"Unknown X Axis\":\"Topics\",\"Unknown Y Axis\":5},{\"Unknown X Axis\":\"Topic8\",\"Unknown Y Axis\":9}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"text.12\",\"comment\":\"Change the text\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.labels\",\"comment\":\"Check this value\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.222,0.415,0.261,0.867],\"label\":\"object\"},{\"bound\":[0.53,0.498,0.566,0.868],\"label\":\"object\"},{\"bound\":[0.378,0.448,0.414,0.868],\"label\":\"object\"},{\"bound\":[0.683,0.544,0.722,0.866],\"label\":\"object\"},{\"bound\":[0.338,0.671,0.377,0.869],\"label\":\"object\"},{\"bound\":[0.49,0.741,0.53,0.868],\"label\":\"object\"},{\"bound\":[0.182,0.728,0.222,0.869],\"label\":\"object\"},{\"bound\":[0.302,0.222,0.339,0.868],\"label\":\"object\"},{\"bound\":[0.607,0.443,0.646,0.868],\"label\":\"object\"},{\"bound\":[0.648,0.771,0.684,0.87],\"label\":\"object\"},{\"bound\":[0.455,0.351,0.491,0.867],\"label\":\"object\"},{\"bound\":[0.147,0.253,0.183,0.867],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.028,0.032,0.976,0.115],\"label\":\"title\",\"text\":\"Cigarette Production, Exports, and Domestic Consumption U.S. 1990-2007\"},{\"bound\":[0.799,0.429,0.903,0.458],\"label\":\"legend-label\",\"text\":\"Production\"},{\"bound\":[0.796,0.455,0.865,0.49],\"label\":\"legend-label\",\"text\":\"Export\"},{\"bound\":[0.796,0.49,0.974,0.522],\"label\":\"legend-label\",\"text\":\"Total Consumption\"},{\"bound\":[0.014,0.426,0.035,0.619],\"label\":\"y-axis-title\",\"text\":\"Billion (Pieces)\"},{\"bound\":[0.038,0.16,0.097,0.192],\"label\":\"y-axis-label\",\"text\":\"800.0\"},{\"bound\":[0.038,0.247,0.097,0.279],\"label\":\"y-axis-label\",\"text\":\"700.0\"},{\"bound\":[0.038,0.333,0.097,0.365],\"label\":\"y-axis-label\",\"text\":\"600.0\"},{\"bound\":[0.038,0.42,0.097,0.452],\"label\":\"y-axis-label\",\"text\":\"500.0\"},{\"bound\":[0.038,0.506,0.097,0.538],\"label\":\"y-axis-label\",\"text\":\"400.0\"},{\"bound\":[0.038,0.593,0.097,0.625],\"label\":\"y-axis-label\",\"text\":\"300.0\"},{\"bound\":[0.038,0.679,0.097,0.712],\"label\":\"y-axis-label\",\"text\":\"200.0\"},{\"bound\":[0.035,0.766,0.097,0.798],\"label\":\"y-axis-label\",\"text\":\"-100.0\"},{\"bound\":[0.062,0.859,0.097,0.885],\"label\":\"y-axis-label\",\"text\":\"0.0\"},{\"bound\":[0.175,0.888,0.23,0.917],\"label\":\"x-axis-label\",\"text\":\"1990\"},{\"bound\":[0.332,0.891,0.384,0.917],\"label\":\"x-axis-label\",\"text\":\"1995\"},{\"bound\":[0.486,0.891,0.538,0.917],\"label\":\"x-axis-label\",\"text\":\"2000\"},{\"bound\":[0.64,0.891,0.692,0.917],\"label\":\"x-axis-label\",\"text\":\"2005\"}],\"spec\":{\"title\":\"Cigarette Production, Exports, and Domestic Consumption U.S. 1990-2007\",\"axis\":[{\"dir\":\"x\",\"title\":\"Years\",\"type\":\"nominal\",\"labels\":[\"1990\",\"1995\",\"2000\",\"2005\"],\"precision\":1,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.046233050367179916,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Billion (Pieces)\",\"type\":\"quantitative\",\"labels\":[\"800.0\",\"700.0\",\"600.0\",\"500.0\",\"400.0\",\"300.0\",\"200.0\",\"-100.0\",\"0.0\"],\"precision\":-1,\"unit\":\"integer\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":2.2138470580626075,\"encoding\":\"height\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"Production\",\"Export\",\"Total Consumption\"],\"encoding\":\"color\"}},\"raw\":[{\"Years\":\"1990\",\"Billion (Pieces)\":520,\"Unknown Legend\":\"Total Consumption\"},{\"Years\":\"2000\",\"Billion (Pieces)\":430,\"Unknown Legend\":\"Total Consumption\"},{\"Years\":\"1995\",\"Billion (Pieces)\":480,\"Unknown Legend\":\"Total Consumption\"},{\"Years\":\"2005\",\"Billion (Pieces)\":370,\"Unknown Legend\":\"Total Consumption\"},{\"Years\":\"1995\",\"Billion (Pieces)\":230,\"Unknown Legend\":\"Export\"},{\"Years\":\"2000\",\"Billion (Pieces)\":150,\"Unknown Legend\":\"Export\"},{\"Years\":\"1990\",\"Billion (Pieces)\":160,\"Unknown Legend\":\"Export\"},{\"Years\":\"1995\",\"Billion (Pieces)\":740,\"Unknown Legend\":\"Production\"},{\"Years\":\"2005\",\"Billion (Pieces)\":490,\"Unknown Legend\":\"Production\"},{\"Years\":\"2005\",\"Billion (Pieces)\":110,\"Unknown Legend\":\"Export\"},{\"Years\":\"2000\",\"Billion (Pieces)\":590,\"Unknown Legend\":\"Production\"},{\"Years\":\"1990\",\"Billion (Pieces)\":700,\"Unknown Legend\":\"Production\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"raw.4\",\"comment\":\"South -> West\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.101,0.08,0.303,0.186],\"label\":\"object\"},{\"bound\":[0.303,0.08,0.584,0.186],\"label\":\"object\"},{\"bound\":[0.584,0.08,0.731,0.186],\"label\":\"object\"},{\"bound\":[0.731,0.08,0.966,0.186],\"label\":\"object\"},{\"bound\":[0.807,0.292,0.966,0.398],\"label\":\"object\"},{\"bound\":[0.597,0.292,0.806,0.398],\"label\":\"object\"},{\"bound\":[0.377,0.292,0.597,0.398],\"label\":\"object\"},{\"bound\":[0.101,0.292,0.377,0.398],\"label\":\"object\"},{\"bound\":[0.101,0.504,0.304,0.61],\"label\":\"object\"},{\"bound\":[0.304,0.504,0.427,0.61],\"label\":\"object\"},{\"bound\":[0.427,0.504,0.61,0.61],\"label\":\"object\"},{\"bound\":[0.61,0.504,0.966,0.61],\"label\":\"object\"},{\"bound\":[0.711,0.716,0.966,0.822],\"label\":\"object\"},{\"bound\":[0.509,0.716,0.711,0.822],\"label\":\"object\"},{\"bound\":[0.407,0.716,0.509,0.822],\"label\":\"object\"},{\"bound\":[0.101,0.716,0.407,0.822],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.334,0.956,0.392,0.989],\"label\":\"legend-label\",\"text\":\"North\"},{\"bound\":[0.43,0.956,0.476,0.989],\"label\":\"legend-label\",\"text\":\"East\"},{\"bound\":[0.512,0.956,0.572,0.989],\"label\":\"legend-label\",\"text\":\"South\"},{\"bound\":[0.612,0.956,0.662,0.989],\"label\":\"legend-label\",\"text\":\"West\"},{\"bound\":[0.018,0.118,0.08,0.151],\"label\":\"y-axis-label\",\"text\":\"brown\"},{\"bound\":[0.024,0.33,0.08,0.36],\"label\":\"y-axis-label\",\"text\":\"black\"},{\"bound\":[0.034,0.547,0.08,0.577],\"label\":\"y-axis-label\",\"text\":\"gray\"},{\"bound\":[0.042,0.753,0.08,0.783],\"label\":\"y-axis-label\",\"text\":\"red\"},{\"bound\":[0.092,0.878,0.112,0.905],\"label\":\"x-axis-label\",\"text\":\"0\"},{\"bound\":[0.258,0.876,0.292,0.909],\"label\":\"x-axis-label\",\"text\":\"0.2\"},{\"bound\":[0.43,0.876,0.466,0.909],\"label\":\"x-axis-label\",\"text\":\"0.4\"},{\"bound\":[0.604,0.876,0.638,0.907],\"label\":\"x-axis-label\",\"text\":\"0.6\"},{\"bound\":[0.776,0.876,0.812,0.909],\"label\":\"x-axis-label\",\"text\":\"0.8\"},{\"bound\":[0.959,0.876,0.976,0.908],\"label\":\"x-axis-label\",\"text\":\"1\"},{\"bound\":[0.172,0.118,0.234,0.151],\"label\":\"mark-label\",\"text\":\"0.23%\"},{\"bound\":[0.412,0.118,0.476,0.151],\"label\":\"mark-label\",\"text\":\"0.33%\"},{\"bound\":[0.63,0.118,0.688,0.151],\"label\":\"mark-label\",\"text\":\"0.17%\"},{\"bound\":[0.818,0.118,0.882,0.151],\"label\":\"mark-label\",\"text\":\"0.27%\"},{\"bound\":[0.208,0.33,0.272,0.36],\"label\":\"mark-label\",\"text\":\"0.32%\"},{\"bound\":[0.456,0.33,0.52,0.36],\"label\":\"mark-label\",\"text\":\"0.25%\"},{\"bound\":[0.672,0.33,0.734,0.36],\"label\":\"mark-label\",\"text\":\"0.24%\"},{\"bound\":[0.856,0.33,0.918,0.36],\"label\":\"mark-label\",\"text\":\"0.18%\"},{\"bound\":[0.758,0.541,0.82,0.571],\"label\":\"mark-label\",\"text\":\"0.41%\"},{\"bound\":[0.172,0.541,0.236,0.574],\"label\":\"mark-label\",\"text\":\"0.24%\"},{\"bound\":[0.336,0.541,0.398,0.574],\"label\":\"mark-label\",\"text\":\"0.14%\"},{\"bound\":[0.49,0.541,0.55,0.574],\"label\":\"mark-label\",\"text\":\"0.21%\"},{\"bound\":[0.224,0.751,0.286,0.781],\"label\":\"mark-label\",\"text\":\"0.35%\"},{\"bound\":[0.428,0.753,0.488,0.783],\"label\":\"mark-label\",\"text\":\"0.12%\"},{\"bound\":[0.58,0.753,0.642,0.783],\"label\":\"mark-label\",\"text\":\"0.24%\"},{\"bound\":[0.808,0.753,0.872,0.786],\"label\":\"mark-label\",\"text\":\"0.29%\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Unknown X Axis\",\"type\":\"quantitative\",\"labels\":[\"0\",\"0.2\",\"0.4\",\"0.6\",\"0.8\",\"1\"],\"precision\":2,\"unit\":\"decimal\",\"labeled\":true,\"markLabels\":[\"0.23%\",\"0.33%\",\"0.17%\",\"0.27%\",\"0.32%\",\"0.25%\",\"0.24%\",\"0.18%\",\"0.41%\",\"0.24%\",\"0.14%\",\"0.21%\",\"0.35%\",\"0.12%\",\"0.24%\",\"0.29%\"],\"valuePerPixel\":0.0016505757739453662,\"encoding\":\"width\"},{\"dir\":\"y\",\"title\":\"Unknown Y Axis\",\"type\":\"nominal\",\"labels\":[\"brown\",\"black\",\"gray\",\"red\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"y-position\"}],\"custom\":[],\"legend\":{\"title\":\"Unknown Legend\",\"labels\":[\"North\",\"East\",\"South\",\"West\"],\"encoding\":\"color\"}},\"raw\":[{\"Unknown X Axis\":\"0.23%\",\"Unknown Y Axis\":\"brown\",\"Unknown Legend\":\"North\"},{\"Unknown X Axis\":\"0.33%\",\"Unknown Y Axis\":\"brown\",\"Unknown Legend\":\"East\"},{\"Unknown X Axis\":\"0.17%\",\"Unknown Y Axis\":\"brown\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.27%\",\"Unknown Y Axis\":\"brown\",\"Unknown Legend\":\"West\"},{\"Unknown X Axis\":\"0.18%\",\"Unknown Y Axis\":\"black\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.24%\",\"Unknown Y Axis\":\"black\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.25%\",\"Unknown Y Axis\":\"black\",\"Unknown Legend\":\"East\"},{\"Unknown X Axis\":\"0.32%\",\"Unknown Y Axis\":\"black\",\"Unknown Legend\":\"North\"},{\"Unknown X Axis\":\"0.24%\",\"Unknown Y Axis\":\"gray\",\"Unknown Legend\":\"North\"},{\"Unknown X Axis\":\"0.14%\",\"Unknown Y Axis\":\"gray\",\"Unknown Legend\":\"East\"},{\"Unknown X Axis\":\"0.21%\",\"Unknown Y Axis\":\"gray\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.41%\",\"Unknown Y Axis\":\"gray\",\"Unknown Legend\":\"West\"},{\"Unknown X Axis\":\"0.29%\",\"Unknown Y Axis\":\"red\",\"Unknown Legend\":\"West\"},{\"Unknown X Axis\":\"0.24%\",\"Unknown Y Axis\":\"red\",\"Unknown Legend\":\"South\"},{\"Unknown X Axis\":\"0.12%\",\"Unknown Y Axis\":\"red\",\"Unknown Legend\":\"East\"},{\"Unknown X Axis\":\"0.35%\",\"Unknown Y Axis\":\"red\",\"Unknown Legend\":\"North\"}]}}},{\"feedbacks\":[{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.1\",\"comment\":\"Refine the bound\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"mark.other\",\"comment\":\"Add a more box\"},{\"taskKey\":\"key_0\",\"annotationKey\":\"spec.axis.1.unit\",\"comment\":\"Check this value\"}],\"annotation\":{\"key_0\":{\"marks\":[{\"bound\":[0.306,0.158,0.436,0.845],\"label\":\"object\"},{\"bound\":[0.777,0.624,0.908,0.843],\"label\":\"object\"},{\"bound\":[0.463,0.508,0.592,0.845],\"label\":\"object\"},{\"bound\":[0.148,0.117,0.278,0.845],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.176,0.042,0.881,0.081],\"label\":\"title\",\"text\":\"UK 2007 Top 5 Food and Agricultural Commodities\"},{\"bound\":[0.006,0.361,0.039,0.609],\"label\":\"y-axis-title\",\"text\":\"Production (1,000 MT)\"},{\"bound\":[0.063,0.081,0.092,0.155],\"label\":\"y-axis-label\",\"text\":\"14000\"},{\"bound\":[0.063,0.185,0.092,0.26],\"label\":\"y-axis-label\",\"text\":\"12000\"},{\"bound\":[0.063,0.29,0.092,0.364],\"label\":\"y-axis-label\",\"text\":\"10000\"},{\"bound\":[0.063,0.397,0.092,0.463],\"label\":\"y-axis-label\",\"text\":\"8000\"},{\"bound\":[0.063,0.501,0.092,0.567],\"label\":\"y-axis-label\",\"text\":\"6000\"},{\"bound\":[0.063,0.606,0.092,0.672],\"label\":\"y-axis-label\",\"text\":\"4000\"},{\"bound\":[0.063,0.71,0.092,0.776],\"label\":\"y-axis-label\",\"text\":\"2000\"},{\"bound\":[0.065,0.837,0.088,0.857],\"label\":\"y-axis-label\",\"text\":\"0\"},{\"bound\":[0.464,0.946,0.592,0.979],\"label\":\"x-axis-title\",\"text\":\"Commodity\"},{\"bound\":[0.164,0.89,0.268,0.919],\"label\":\"x-axis-label\",\"text\":\"Cow milk\"},{\"bound\":[0.33,0.89,0.411,0.919],\"label\":\"x-axis-label\",\"text\":\"Wheat\"},{\"bound\":[0.464,0.89,0.592,0.922],\"label\":\"x-axis-label\",\"text\":\"Sugar beet\"},{\"bound\":[0.634,0.887,0.738,0.919],\"label\":\"x-axis-label\",\"text\":\"Potatoes\"},{\"bound\":[0.806,0.887,0.881,0.922],\"label\":\"x-axis-label\",\"text\":\"Barley\"}],\"spec\":{\"title\":\"UK 2007 Top 5 Food and Agricultural Commodities\",\"axis\":[{\"dir\":\"x\",\"title\":\"Commodity\",\"type\":\"nominal\",\"labels\":[\"Cow milk\",\"Wheat\",\"Sugar beet\",\"Potatoes\",\"Barley\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"x-position\"},{\"dir\":\"y\",\"title\":\"Production (1,000 MT)\",\"type\":\"quantitative\",\"labels\":[\"14000\",\"12000\",\"10000\",\"8000\",\"6000\",\"4000\",\"2000\",\"0\"],\"precision\":-2,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":32.00831295947728,\"encoding\":\"height\"}],\"custom\":[]},\"raw\":[{\"Commodity\":\"Wheat\",\"Production (1,000 MT)\":13187.4},{\"Commodity\":\"Barley\",\"Production (1,000 MT)\":4193.1},{\"Commodity\":\"Sugar beet\",\"Production (1,000 MT)\":6465.7},{\"Commodity\":\"Cow milk\",\"Production (1,000 MT)\":13987.6}]}}}]");

/***/ }),

/***/ "./src/app/edit/demo/quiz-complete-dialog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/edit/demo/quiz-complete-dialog.component.ts ***!
  \*************************************************************/
/*! exports provided: QuizCompleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCompleteDialogComponent", function() { return QuizCompleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuizCompleteDialogComponent = class QuizCompleteDialogComponent {
    constructor() { }
    ngOnInit() { }
};
QuizCompleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-complete-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz-complete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/demo/quiz-complete-dialog.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuizCompleteDialogComponent);



/***/ }),

/***/ "./src/app/edit/demo/quiz.service.ts":
/*!*******************************************!*\
  !*** ./src/app/edit/demo/quiz.service.ts ***!
  \*******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/edit-data */ "./src/app/common/edit-data.ts");
/* harmony import */ var src_app_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/network.service */ "./src/app/network.service.ts");
/* harmony import */ var _quiz_bar_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz_bar_data.json */ "./src/app/edit/demo/quiz_bar_data.json");
var _quiz_bar_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./quiz_bar_data.json */ "./src/app/edit/demo/quiz_bar_data.json", 1);
/* harmony import */ var src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/verification-data.js */ "./src/app/common/verification-data.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/task/index.js */ "./src/app/common/task/index.js");








let QuizService = class QuizService {
    constructor(network) {
        this.network = network;
        this.data = new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["VOverallData"]('quiz', _quiz_bar_data_json__WEBPACK_IMPORTED_MODULE_4__);
    }
    getAnnotationElem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const paths = yield this.network.getPaths();
            const path = paths[0];
            const blob = yield this.network.getImage(path);
            const meta = { path, feedbacks: [], annotation: null };
            return [new src_app_common_edit_data__WEBPACK_IMPORTED_MODULE_2__["AnnotationMeta"](meta), blob];
        });
    }
    grade(path, formGroup, config) {
        const result = {};
        for (const task of config.tasks) {
            result[task.key] = task.getFormValue(formGroup);
        }
        const submitted = new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["VOverallData"]('key_0', result['key_0']);
        const feedbacks = [];
        let otherIndex = 0;
        if (submitted.marks.length !== this.data.marks.length) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: `mark.other.${otherIndex}`,
                comment: '막대의 수가 맞지 않습니다.'
            }));
            otherIndex += 1;
        }
        submitted.marks.forEach((mark, i) => {
            const maxIou = d3__WEBPACK_IMPORTED_MODULE_6__["max"](this.data.marks, d => this.iou(mark.bound, d.bound));
            if (maxIou <= 0.85) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: `mark.${i}`,
                    comment: '박스의 경계를 다시 확인해주세요.'
                }));
            }
        });
        otherIndex = 0;
        const targetSpec = this.data.spec;
        const xLabelIndices = submitted.texts
            .map((d, i) => ([i, d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_7__["KEY_X_AXIS_LABEL"]]))
            .filter(([_, check]) => check)
            .map(d => d[0]);
        const xTitleIndices = submitted.texts
            .map((d, i) => ([i, d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_7__["KEY_X_AXIS_TITLE"]]))
            .filter(([_, check]) => check)
            .map(d => d[0]);
        const yLabelIndices = submitted.texts
            .map((d, i) => ([i, d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_7__["KEY_Y_AXIS_LABEL"]]))
            .filter(([i, check]) => check)
            .map(d => d[0]);
        if (xTitleIndices.length === 0) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: `text.other.${otherIndex}`,
                comment: 'X축 제목을 추가해주세요.'
            }));
            otherIndex += 1;
        }
        else {
            const target = this.data.texts
                .find(d => d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_7__["KEY_X_AXIS_TITLE"]);
            const index = xTitleIndices[0];
            const title = submitted.texts[index];
            if (title.text !== target.text) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: `text.${index}`,
                    comment: 'X축 제목 텍스트를 확인해주세요.'
                }));
            }
            else if (this.iou(title.bound, target.bound) < 0.9) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: `text.${index}`,
                    comment: 'X축 제목의 경계를 확인해주세요.'
                }));
            }
        }
        if (xLabelIndices.length !== 4) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: `text.other.${otherIndex}`,
                comment: 'X축 라벨의 수를 확인해주세요.'
            }));
            otherIndex += 1;
        }
        else {
            const targetTexts = this.data.texts
                .filter(d => d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_7__["KEY_X_AXIS_LABEL"]);
            xLabelIndices.forEach(index => {
                const text = submitted.texts[index];
                const maxIou = d3__WEBPACK_IMPORTED_MODULE_6__["max"](targetTexts, d => this.iou(text.bound, d.bound));
                const ious = targetTexts
                    .map(d => this.iou(text.bound, d.bound));
                const maxIndex = ious.indexOf(Math.max.apply(null, ious));
                if (maxIou <= 0.80) {
                    feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                        taskKey: 'key_0',
                        annotationKey: `text.${index}`,
                        comment: '박스의 경계를 확인해주세요.'
                    }));
                }
                else if (targetTexts[maxIndex].text !== text.text) {
                    feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                        taskKey: 'key_0',
                        annotationKey: `text.${index}`,
                        comment: '박스의 텍스트를 확인해주세요.'
                    }));
                }
            });
        }
        if (yLabelIndices.length !== 7) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: `text.other.${otherIndex}`,
                comment: 'Y축 라벨의 수를 확인해주세요.'
            }));
            otherIndex += 1;
        }
        else {
            const targetTexts = this.data.texts
                .filter(d => d.label === src_app_common_task_index_js__WEBPACK_IMPORTED_MODULE_7__["KEY_Y_AXIS_LABEL"]);
            yLabelIndices.forEach(index => {
                const text = submitted.texts[index];
                const ious = targetTexts
                    .map(d => this.iou(text.bound, d.bound));
                const maxIndex = ious.indexOf(Math.max.apply(null, ious));
                const maxIou = ious[maxIndex];
                if (maxIou <= 0.80) {
                    feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                        taskKey: 'key_0',
                        annotationKey: `text.${index}`,
                        comment: '박스의 경계를 확인해주세요.'
                    }));
                }
                else if (targetTexts[maxIndex].text !== text.text) {
                    feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                        taskKey: 'key_0',
                        annotationKey: `text.${index}`,
                        comment: '박스의 텍스트를 확인해주세요.'
                    }));
                }
            });
        }
        const checkAxis = (index) => {
            const axis = submitted.spec.axes[index];
            const target = this.data.spec.axes[index];
            if (axis.title.value !== target.title.value) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: `spec.axis.${index}.title`,
                    comment: '축 제목을 확인해주세요.'
                }));
            }
            if (axis.type.value !== target.type.value) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: `spec.axis.${index}.type`,
                    comment: '축의 데이터 타입을 확인해주세요.'
                }));
            }
            const labels = axis.labels.value.sort();
            const targetLabels = target.labels.value.sort();
            const notSame = labels.length !== targetLabels.length ||
                labels.some((d, i) => {
                    return i >= targetLabels.length || targetLabels[i].trim() !== d.trim();
                });
            if (notSame) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: `spec.axis.${index}.labels`,
                    comment: '축의 라벨들을 확인해주세요.'
                }));
            }
            if (axis.unit.value !== target.unit.value) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: `spec.axis.${index}.unit`,
                    comment: '축의 데이터 단위를 다시 확인해주세요.'
                }));
            }
            if (axis.encoding.value !== target.encoding.value) {
                feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                    taskKey: 'key_0',
                    annotationKey: `spec.axis.${index}.encoding`,
                    comment: '축의 인코딩을 다시 확인해주세요.'
                }));
            }
        };
        otherIndex = 0;
        if (submitted.spec.axes.length !== 2) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: `spec.axis.other.${otherIndex}`,
                comment: '축은 X축, Y축 각각 1개씩 있어야 합니다.'
            }));
            otherIndex += 1;
        }
        else {
            checkAxis(0);
            checkAxis(1);
        }
        otherIndex = 0;
        const rows = submitted.raw.rows;
        const targetRows = this.data.raw.rows;
        if (rows.length !== targetRows.length) {
            feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                taskKey: 'key_0',
                annotationKey: `raw.other.${otherIndex}`,
                comment: '행의 수를 확인해주세요.'
            }));
            otherIndex += 1;
        }
        if (submitted.spec.axes.length === 2) {
            const xKey = submitted.spec.axes[0].title.value;
            const yKey = submitted.spec.axes[1].title.value;
            const targetXKey = targetSpec.axes[0].title.value;
            const targetYKey = targetSpec.axes[1].title.value;
            rows.forEach((row, i) => {
                const x = row.value[xKey];
                const y = row.value[yKey];
                const targetRow = targetRows.find(d => {
                    return d.value[targetYKey] === y;
                });
                if (!targetRow) {
                    feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                        taskKey: 'key_0',
                        annotationKey: `raw.${i}`,
                        comment: '다음 행의 값을 확인해주세요.'
                    }));
                }
                else if (isNaN(+x) ||
                    Math.abs(+targetRow.value[targetXKey] - +x) > 0.2) {
                    feedbacks.push(new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Feedback"]({
                        taskKey: 'key_0',
                        annotationKey: `raw.${i}`,
                        comment: '다음 행의 값을 확인해주세요.'
                    }));
                }
            });
        }
        this.currReview = new src_app_common_verification_data_js__WEBPACK_IMPORTED_MODULE_5__["Review"]({
            path,
            approved: feedbacks.length === 0,
            feedbacks
        });
        return [feedbacks.length === 0, result];
    }
    iou(a, b) {
        a[2] = Math.max(a[2], a[0]);
        a[3] = Math.max(a[3], a[1]);
        b[2] = Math.max(b[2], b[0]);
        b[3] = Math.max(b[3], b[1]);
        const rightX1 = Math.max(a[0], b[0]);
        const leftX2 = Math.min(a[2], b[2]);
        const topY2 = Math.min(a[3], b[3]);
        const bottomY1 = Math.max(a[1], b[1]);
        const inter = Math.max((leftX2 - rightX1), 0) *
            Math.max((topY2 - bottomY1), 0);
        const areaA = (a[2] - a[0]) * (a[3] - a[1]);
        const areaB = (b[2] - b[0]) * (b[3] - b[1]);
        return inter / (areaA + areaB - inter);
    }
};
QuizService.ctorParameters = () => [
    { type: src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] }
];
QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]])
], QuizService);



/***/ }),

/***/ "./src/app/edit/demo/quiz_bar_data.json":
/*!**********************************************!*\
  !*** ./src/app/edit/demo/quiz_bar_data.json ***!
  \**********************************************/
/*! exports provided: marks, texts, spec, raw, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"marks\":[{\"bound\":[0.298,0.076,0.761,0.145],\"label\":\"object\"},{\"bound\":[0.3,0.178,0.803,0.245],\"label\":\"object\"},{\"bound\":[0.3,0.288,0.459,0.353],\"label\":\"object\"},{\"bound\":[0.297,0.393,0.512,0.457],\"label\":\"object\"},{\"bound\":[0.3,0.493,0.444,0.554],\"label\":\"object\"},{\"bound\":[0.3,0.592,0.452,0.658],\"label\":\"object\"},{\"bound\":[0.3,0.694,0.471,0.757],\"label\":\"object\"}],\"texts\":[{\"bound\":[0.144,0.082,0.273,0.136],\"label\":\"y-axis-label\",\"text\":\"Media\"},{\"bound\":[0.133,0.183,0.274,0.236],\"label\":\"y-axis-label\",\"text\":\"DMSO\"},{\"bound\":[0.074,0.286,0.277,0.346],\"label\":\"y-axis-label\",\"text\":\"Asbestos\"},{\"bound\":[0.02,0.389,0.28,0.457],\"label\":\"y-axis-label\",\"text\":\"Vulcan (BC)\"},{\"bound\":[0.067,0.49,0.279,0.556],\"label\":\"y-axis-label\",\"text\":\"SWCNT-1\"},{\"bound\":[0.056,0.594,0.279,0.652],\"label\":\"y-axis-label\",\"text\":\"MWCNT-R\"},{\"bound\":[0.058,0.699,0.276,0.75],\"label\":\"y-axis-label\",\"text\":\"MWCNT-N\"},{\"bound\":[0.405,0.913,0.853,0.973],\"label\":\"x-axis-title\",\"text\":\"Relative Cell Viability\"},{\"bound\":[0.262,0.826,0.332,0.879],\"label\":\"x-axis-label\",\"text\":\"0.0\"},{\"bound\":[0.473,0.822,0.547,0.88],\"label\":\"x-axis-label\",\"text\":\"0.5\"},{\"bound\":[0.697,0.827,0.764,0.879],\"label\":\"x-axis-label\",\"text\":\"1.0\"},{\"bound\":[0.912,0.824,0.979,0.879],\"label\":\"x-axis-label\",\"text\":\"1.5\"}],\"spec\":{\"title\":\"Unknown Title\",\"axis\":[{\"dir\":\"x\",\"title\":\"Relative Cell Viability\",\"type\":\"quantitative\",\"labels\":[\"0.0\",\"0.5\",\"1.0\",\"1.5\"],\"precision\":2,\"unit\":\"decimal\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0.003521960657857802,\"encoding\":\"width\"},{\"dir\":\"y\",\"title\":\"Unknown Y Axis\",\"type\":\"nominal\",\"labels\":[\"Media\",\"DMSO\",\"Asbestos\",\"Vulcan (BC)\",\"SWCNT-1\",\"MWCNT-R\",\"MWCNT-N\"],\"precision\":0,\"unit\":\"\",\"labeled\":false,\"markLabels\":[],\"valuePerPixel\":0,\"encoding\":\"y-position\"}],\"custom\":[]},\"raw\":[{\"Relative Cell Viability\":1.08,\"Unknown Y Axis\":\"Media\"},{\"Relative Cell Viability\":1.17,\"Unknown Y Axis\":\"DMSO\"},{\"Relative Cell Viability\":0.37,\"Unknown Y Axis\":\"Asbestos\"},{\"Relative Cell Viability\":0.5,\"Unknown Y Axis\":\"Vulcan (BC)\"},{\"Relative Cell Viability\":0.33,\"Unknown Y Axis\":\"SWCNT-1\"},{\"Relative Cell Viability\":0.35,\"Unknown Y Axis\":\"MWCNT-R\"},{\"Relative Cell Viability\":0.4,\"Unknown Y Axis\":\"MWCNT-N\"}]}");

/***/ }),

/***/ "./src/app/edit/edit-module.scss":
/*!***************************************!*\
  !*** ./src/app/edit/edit-module.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validate-feedback {\n  color: #f44336;\n  font-size: 12px;\n}\n\n::ng-deep .handle {\n  cursor: crosshair;\n}\n\n::ng-deep .mark {\n  stroke-width: 2px;\n  stroke: red;\n  fill-opacity: 0;\n}\n\n::ng-deep .mark.handle {\n  fill: darkorange;\n  stroke: darkorange;\n  fill-opacity: 1;\n}\n\n::ng-deep .text.focused {\n  stroke: #216141 !important;\n  stroke-width: 3px !important;\n  fill: rgba(51, 153, 102, 0.3) !important;\n}\n\n::ng-deep .text.focused.handle {\n  fill: #339966 !important;\n  stroke: #339966 !important;\n  fill-opacity: 1 !important;\n}\n\n::ng-deep .text {\n  stroke-width: 2px;\n  stroke: #3f51b5;\n  fill-opacity: 0;\n}\n\n::ng-deep .text.handle {\n  fill: #4040ff;\n  stroke: #4040ff;\n  fill-opacity: 1;\n}\n\n::ng-deep .mark.focused {\n  stroke: #216141 !important;\n  stroke-width: 3px !important;\n  fill: rgba(51, 153, 102, 0.3) !important;\n}\n\n::ng-deep .mark.focused.handle {\n  fill: #339966 !important;\n  stroke: #339966 !important;\n  fill-opacity: 1 !important;\n}\n\n.w-20 {\n  width: 20% !important;\n}\n\n.w-15 {\n  width: 15% !important;\n}\n\n.w-10 {\n  width: 10% !important;\n}\n\n.focused {\n  background-color: rgba(51, 153, 102, 0.3);\n}\n\n.label-select {\n  padding-left: 5px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #aaa;\n}\n\n.table {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n\n.focus-box {\n  cursor: pointer;\n}\n\n.focus-box:not(.focused):hover {\n  background-color: #EEE;\n}\n\n.focus-box span {\n  pointer-events: none;\n}\n\n.close-button {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcZWRpdC1tb2R1bGUuc2NzcyIsInNyYy9hcHAvZWRpdC9lZGl0LW1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURJSTtFQUNJLGlCQUFBO0FDRFI7O0FESUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7O0FESVE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZaOztBRE1JO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0FDSlI7O0FETVE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNKWjs7QURRSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNOUjs7QURRUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ05aOztBRFVJO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0FDUlI7O0FEVVE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNSWjs7QURhQTtFQUNJLHFCQUFBO0FDVko7O0FEYUE7RUFDSSxxQkFBQTtBQ1ZKOztBRGFBO0VBQ0kscUJBQUE7QUNWSjs7QURhQTtFQUNJLHlDQUFBO0FDVko7O0FEYUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDVko7O0FEYUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDVko7O0FEYUE7RUFNSSxlQUFBO0FDZko7O0FEV0k7RUFDSSxzQkFBQTtBQ1RSOztBRGNJO0VBQ0ksb0JBQUE7QUNaUjs7QURnQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDYkoiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQtbW9kdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGUtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcblxyXG4gICAgLmhhbmRsZSB7XHJcbiAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmsge1xyXG4gICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgICAgIHN0cm9rZTogcmVkO1xyXG4gICAgICAgIGZpbGwtb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgJi5oYW5kbGUge1xyXG4gICAgICAgICAgICBmaWxsOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICBzdHJva2U6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQuZm9jdXNlZCB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMjE2MTQxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICBmaWxsOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAmLmhhbmRsZSB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYig1MSwgMTUzLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogcmdiKDUxLCAxNTMsIDEwMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZmlsbC1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgICAgICBzdHJva2U6ICMzZjUxYjU7XHJcbiAgICAgICAgZmlsbC1vcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICAmLmhhbmRsZSB7XHJcbiAgICAgICAgICAgIGZpbGw6ICM0MDQwZmY7XHJcbiAgICAgICAgICAgIHN0cm9rZTogIzQwNDBmZjtcclxuICAgICAgICAgICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFyay5mb2N1c2VkIHtcclxuICAgICAgICBzdHJva2U6ICMyMTYxNDEgIWltcG9ydGFudDtcclxuICAgICAgICBzdHJva2Utd2lkdGg6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZpbGw6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjMpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICYuaGFuZGxlIHtcclxuICAgICAgICAgICAgZmlsbDogcmdiKDUxLCAxNTMsIDEwMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgc3Ryb2tlOiByZ2IoNTEsIDE1MywgMTAyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmaWxsLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53LTIwIHtcclxuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnctMTUge1xyXG4gICAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udy0xMCB7XHJcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjMpO1xyXG59XHJcblxyXG4ubGFiZWwtc2VsZWN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5mb2N1cy1ib3gge1xyXG5cclxuICAgICY6bm90KC5mb2N1c2VkKTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgIH1cclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG4iLCIudmFsaWRhdGUtZmVlZGJhY2sge1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46Om5nLWRlZXAgLmhhbmRsZSB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuOjpuZy1kZWVwIC5tYXJrIHtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIHN0cm9rZTogcmVkO1xuICBmaWxsLW9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLm1hcmsuaGFuZGxlIHtcbiAgZmlsbDogZGFya29yYW5nZTtcbiAgc3Ryb2tlOiBkYXJrb3JhbmdlO1xuICBmaWxsLW9wYWNpdHk6IDE7XG59XG46Om5nLWRlZXAgLnRleHQuZm9jdXNlZCB7XG4gIHN0cm9rZTogIzIxNjE0MSAhaW1wb3J0YW50O1xuICBzdHJva2Utd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICBmaWxsOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50ZXh0LmZvY3VzZWQuaGFuZGxlIHtcbiAgZmlsbDogIzMzOTk2NiAhaW1wb3J0YW50O1xuICBzdHJva2U6ICMzMzk5NjYgIWltcG9ydGFudDtcbiAgZmlsbC1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnRleHQge1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgc3Ryb2tlOiAjM2Y1MWI1O1xuICBmaWxsLW9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLnRleHQuaGFuZGxlIHtcbiAgZmlsbDogIzQwNDBmZjtcbiAgc3Ryb2tlOiAjNDA0MGZmO1xuICBmaWxsLW9wYWNpdHk6IDE7XG59XG46Om5nLWRlZXAgLm1hcmsuZm9jdXNlZCB7XG4gIHN0cm9rZTogIzIxNjE0MSAhaW1wb3J0YW50O1xuICBzdHJva2Utd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICBmaWxsOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXJrLmZvY3VzZWQuaGFuZGxlIHtcbiAgZmlsbDogIzMzOTk2NiAhaW1wb3J0YW50O1xuICBzdHJva2U6ICMzMzk5NjYgIWltcG9ydGFudDtcbiAgZmlsbC1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi53LTIwIHtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4udy0xNSB7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbn1cblxuLnctMTAge1xuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG59XG5cbi5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMTUzLCAxMDIsIDAuMyk7XG59XG5cbi5sYWJlbC1zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbn1cblxuLnRhYmxlIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmZvY3VzLWJveCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb2N1cy1ib3g6bm90KC5mb2N1c2VkKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG59XG4uZm9jdXMtYm94IHNwYW4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit/edit.component.scss":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3.selected {\n  display: none;\n}\n\n.right-panel {\n  border-left: 2px solid #aaa;\n  overflow-y: scroll;\n  height: calc(100% - 64px) !important;\n}\n\n.edit-header {\n  background-color: #fafafa;\n  font-size: 1.3rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n#image-zone {\n  background-color: #CCC;\n  overflow: hidden;\n}\n\n#image-zone .desc {\n  font-style: italic;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n\n.image-region {\n  max-width: 95%;\n}\n\nimg {\n  max-width: 100%;\n  max-height: 600px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n::ng-deep circle.handle {\n  cursor: crosshair;\n}\n\n::ng-deep rect.handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n::ng-deep .mat-radio-label-content {\n  font-size: 14px;\n}\n\n.image-region:not(.selected) {\n  display: none;\n}\n\n.svg-region:not(.selected) {\n  display: none;\n}\n\n#side-nav {\n  border-right: 2px solid #AAA;\n  width: 15% !important;\n}\n\nmat-radio-button {\n  margin: 0 12px;\n}\n\n.validate-feedback {\n  color: #f44336;\n  font-size: 12px;\n}\n\n.form-label {\n  width: 50px;\n}\n\n.submit-section {\n  background-color: white;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VSOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0NKOztBREdJO0VBQ0ksaUJBQUE7QUNBUjs7QURHSTtFQUNJLG9CQUFBO0VBQUEsWUFBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtBQ0ZSOztBRE1BO0VBQ0ksYUFBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtBQ0hKOztBRE1BO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtBQ0hKOztBRE9BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURPQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMuc2VsZWN0ZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJpZ2h0LXBhbmVsIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2FhYTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCkgIWltcG9ydGFudDtcclxufVxyXG4uZWRpdC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbn1cclxuXHJcbiNpbWFnZS16b25lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5kZXNjIHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlLXJlZ2lvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIGNpcmNsZS5oYW5kbGUge1xyXG4gICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3QuaGFuZGxlIHtcclxuICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWFnZS1yZWdpb246bm90KC5zZWxlY3RlZCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnN2Zy1yZWdpb246bm90KC5zZWxlY3RlZCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3NpZGUtbmF2IHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNBQUE7XHJcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbn1cclxuXHJcblxyXG4udmFsaWRhdGUtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uc3VibWl0LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuIiwiaDMuc2VsZWN0ZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmlnaHQtcGFuZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNhYWE7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KSAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbiNpbWFnZS16b25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNpbWFnZS16b25lIC5kZXNjIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmltYWdlLXJlZ2lvbiB7XG4gIG1heC13aWR0aDogOTUlO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG46Om5nLWRlZXAgY2lyY2xlLmhhbmRsZSB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuOjpuZy1kZWVwIHJlY3QuaGFuZGxlIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLXJlZ2lvbjpub3QoLnNlbGVjdGVkKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdmctcmVnaW9uOm5vdCguc2VsZWN0ZWQpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3NpZGUtbmF2IHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0FBQTtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xufVxuXG5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEycHg7XG59XG5cbi52YWxpZGF0ZS1mZWVkYmFjayB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5zdWJtaXQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDYwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_edit_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/edit-data */ "./src/app/common/edit-data.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _d3_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../d3-utils */ "./src/app/d3-utils.ts");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _demo_demo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/demo.service */ "./src/app/edit/demo/demo.service.ts");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timer.service */ "./src/app/edit/timer.service.ts");
/* harmony import */ var _demo_quiz_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./demo/quiz.service */ "./src/app/edit/demo/quiz.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./demo/quiz-complete-dialog.component */ "./src/app/edit/demo/quiz-complete-dialog.component.ts");
/* harmony import */ var _locale_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../locale.service */ "./src/app/locale.service.ts");

















let EditComponent = class EditComponent {
    constructor(edit, fb, network, configService, router, renderer, demo, quiz, timer, dialog, L) {
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
    ngOnInit() {
        if (!this.configService.userName) {
            this.router.navigate(['/login']);
            return;
        }
        this.svgS = d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgRef.nativeElement);
        this.configService.configObservable
            .subscribe((config) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.config = config;
            this.formGroup = this.initFormGroup(this.config);
            if (config.service !== 'normal') {
                this.mode = 'annotation';
            }
            switch (this.mode) {
                case 'annotation':
                    yield this.loadNextData();
                    break;
                case 'verification':
                    const elem = yield this.network.getVerificationRandomElem();
                    const result = yield this.parseVerification(elem);
                    if (!result) {
                        yield this.loadNextData();
                    }
                    break;
                default:
                    break;
            }
            this.eventSubject.next('progress');
        }));
        const imgElem = this.imgRef.nativeElement;
        this.edit.removeImage();
        imgElem.addEventListener('load', () => {
            const boundingBox = this.imgRef.nativeElement.getBoundingClientRect();
            this.initSVG(boundingBox);
            this.noImagesLeft = false;
            this.onImageLoad = true;
            this.timer.start();
            const path = this.selectedImage.path;
            this.network.getPrediction(path)
                .then(predictData => {
                this.config.parsePrediction(predictData);
                if (this.mode === 'annotation') {
                    this.eventSubject.next('predict');
                }
            });
            if (this.selectedImage.hasPrevAnnotation) {
                const { meta } = this.selectedImage;
                this.config.parsePrevAnnotation(this.formGroup, meta.annotation, this.fb);
                this.eventSubject.next('review');
            }
        });
        this.edit.imageSubject.asObservable().subscribe(image => {
            this.formGroup = this.initFormGroup(this.config);
            this.selectedImage = image;
            const svg = this.svgRef.nativeElement;
            this.renderer.setStyle(imgElem, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(1, 1, 0, 0));
            this.renderer.setStyle(svg, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(1, 1, 0, 0));
            if (!image) {
                this.noImagesLeft = !!imgElem.src;
                imgElem.src = '';
                return;
            }
            imgElem.src = image.src;
        });
        this.edit.autoCompleteSubject.asObservable()
            .subscribe(_ => {
            if (this.mode === 'annotation') {
                this.eventSubject.next('predict');
            }
        });
    }
    submit(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.onImageLoad = false;
            let elem = null;
            switch (this.config.service) {
                case 'quiz':
                    this.gradeQuiz();
                    return;
                case 'demo':
                    if (this.mode === 'annotation') {
                        elem = yield this.demo.getVerificationElem();
                    }
                    break;
                default:
                    yield this.timer.sendResult(this.mode);
                    yield this.network.submit(this.selectedImage, this.formGroup, this.config);
                    elem = yield this.network.getVerificationRandomElem();
                    break;
            }
            if (!this.config.verification) {
                yield this.loadNextData();
            }
            else {
                const result = yield this.parseVerification(elem);
                if (!result) {
                    yield this.loadNextData();
                }
            }
        });
    }
    onRemoveImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.timer.reset();
            if (!this.config.verification) {
                yield this.loadNextData();
            }
            else {
                const elem = yield this.network.getVerificationRandomElem();
                const result = yield this.parseVerification(elem);
                if (!result) {
                    yield this.loadNextData();
                }
            }
        });
    }
    onReviewSubmitted() {
        this.onImageLoad = false;
        if (this.config.service === 'normal') {
            this.timer.sendResult(this.mode);
        }
        this.loadNextData();
    }
    loadNextData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.network.clearPending();
            let elem = null;
            switch (this.config.service) {
                case 'quiz':
                    elem = yield this.quiz.getAnnotationElem();
                    break;
                case 'demo':
                    elem = yield this.demo.getAnnotationElem();
                    break;
                default:
                    elem = yield this.network.getRandomElem();
                    this.eventSubject.next('progress');
                    break;
            }
            if (elem) {
                const [data, blob] = elem;
                this.mode = data.annotation ? 'revision' : 'annotation';
                this.edit.parseImage(blob, data.path, data);
            }
            else {
                this.edit.removeImage();
                this.mode = 'annotation';
            }
        });
    }
    gradeQuiz() {
        const path = this.edit.image.path;
        const [pass, annotation] = this.quiz
            .grade(path, this.formGroup, this.config);
        if (pass) {
            this.dialog.open(_demo_quiz_complete_dialog_component__WEBPACK_IMPORTED_MODULE_15__["QuizCompleteDialogComponent"], { disableClose: true });
        }
        else {
            this.mode = 'revision';
            const meta = new _common_edit_data__WEBPACK_IMPORTED_MODULE_2__["AnnotationMeta"]({
                path,
                feedbacks: [],
                annotation
            });
            this.edit.parseImage(this.edit.image.blob, path, meta);
        }
    }
    parseVerification(elem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (elem) {
                const [data, blob] = elem;
                this.edit.parseImage(blob, data.path);
                this.verificationDatas = this.config.parseVerificationData(data);
                this.mode = 'verification';
                return true;
            }
            {
                return false;
                // TODO: Implement this
            }
        });
    }
    onKey(event) {
        if (event.key === ' ') {
            this.spacePressed = false;
            event.stopImmediatePropagation();
            return false;
        }
    }
    onKeyDown(event) {
        if (event.key === ' ') {
            this.spacePressed = true;
        }
    }
    pointerDown(event) {
        const svg = this.svgRef.nativeElement;
        const svgRect = svg.getBoundingClientRect();
        this.dragging = event.clientX < svgRect.right
            && event.clientX > svgRect.left
            && event.clientY < svgRect.bottom
            && event.clientY > svgRect.top;
    }
    pointerUp() {
        if (this.dragging) {
            this.dragging = false;
        }
    }
    pointerMove(event) {
        if (this.dragging && this.spacePressed) {
            const img = this.imgRef.nativeElement;
            const svg = this.svgRef.nativeElement;
            const { sx, sy, tx, ty } = Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["invertTransform"])(img.style.transform);
            const ntx = tx + event.movementX * (1 / sx);
            const nty = ty + event.movementY * (1 / sy);
            this.renderer.setStyle(img, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(sx, sy, ntx, nty));
            this.renderer.setStyle(svg, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(sx, sy, ntx, nty));
        }
    }
    onImageScroll(event) {
        const img = this.imgRef.nativeElement;
        const svg = this.svgRef.nativeElement;
        const { sx, sy, tx, ty } = Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["invertTransform"])(img.style.transform);
        if (this.cursorInRect(event)) {
            const scaleDelta = event.deltaY < 0 ? 0.4 : -0.4;
            const nScaleX = Math.min(5, Math.max(1, sx + scaleDelta));
            const nScaleY = Math.min(5, Math.max(1, sy + scaleDelta));
            const [ox, oy] = this.cursorOffset(event);
            const nTranslateX = event.deltaY < 0
                ? (tx * sx - (nScaleX / sx - 1) * (ox - tx * sx)) / nScaleX
                : tx * (nScaleX - 1) / (sx - 1 + 0.001) * (sx / nScaleX);
            const nTranslateY = event.deltaY < 0
                ? (ty * sy - (nScaleY / sy - 1) * (oy - ty * sy)) / nScaleY
                : ty * (nScaleY - 1) / (sy - 1 + 0.001) * (sy / nScaleY);
            this.renderer.setStyle(img, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(nScaleX, nScaleY, nTranslateX, nTranslateY));
            this.renderer.setStyle(svg, 'transform', Object(_d3_utils__WEBPACK_IMPORTED_MODULE_6__["transform"])(nScaleX, nScaleY, nTranslateX, nTranslateY));
        }
    }
    cursorInRect(event) {
        const rect = this.imgZoneRef.nativeElement.getBoundingClientRect();
        const x = event.clientX;
        const y = event.clientY;
        return x >= rect.left
            && x <= rect.right
            && y >= rect.top
            && y <= rect.bottom;
    }
    cursorOffset(event) {
        const rect = this.imgZoneRef.nativeElement.getBoundingClientRect();
        const rectCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        return [event.clientX - rectCenter.x, event.clientY - rectCenter.y];
    }
    initFormGroup(config) {
        const formGroup = this.fb.group({});
        config.tasks.forEach(task => {
            task.registerControl(formGroup, this.fb);
        });
        return formGroup;
    }
    initSVG(boundingBox) {
        this.svgS = d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgRef.nativeElement)
            .attr('width', boundingBox.width + 20)
            .attr('height', boundingBox.height + 20)
            .attr('viewbox', `0 0 ${boundingBox.width + 20} ${boundingBox.height + 20}`)
            .attr('pointer-events', 'visiblePoint');
        this.svgS.select('.border').remove();
        this.svgS.append('rect')
            .attr('class', 'border')
            .attr('width', boundingBox.width + 20)
            .attr('height', boundingBox.height + 20)
            .attr('viewbox', `0 0 ${boundingBox.width + 20} ${boundingBox.height + 20}`)
            .attr('fill-opacity', 0)
            .attr('stroke', '#777')
            .attr('stroke-width', 2)
            .attr('pointer-events', 'none');
    }
};
EditComponent.ctorParameters = () => [
    { type: _edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _demo_demo_service__WEBPACK_IMPORTED_MODULE_11__["DemoService"] },
    { type: _demo_quiz_service__WEBPACK_IMPORTED_MODULE_13__["QuizService"] },
    { type: _timer_service__WEBPACK_IMPORTED_MODULE_12__["TimerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
    { type: _locale_service__WEBPACK_IMPORTED_MODULE_16__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('img', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], EditComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imgZone', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], EditComponent.prototype, "imgZoneRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svg', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], EditComponent.prototype, "svgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], EditComponent.prototype, "onKey", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], EditComponent.prototype, "onKeyDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:pointerdown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [PointerEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], EditComponent.prototype, "pointerDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:pointerup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], EditComponent.prototype, "pointerUp", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:pointermove', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [PointerEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], EditComponent.prototype, "pointerMove", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousewheel', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [WheelEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], EditComponent.prototype, "onImageScroll", null);
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.scss */ "./src/app/edit/edit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"],
        _config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _demo_demo_service__WEBPACK_IMPORTED_MODULE_11__["DemoService"],
        _demo_quiz_service__WEBPACK_IMPORTED_MODULE_13__["QuizService"],
        _timer_service__WEBPACK_IMPORTED_MODULE_12__["TimerService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"],
        _locale_service__WEBPACK_IMPORTED_MODULE_16__["LocaleService"]])
], EditComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileDropDirective = class FileDropDirective {
    constructor() {
        this.filesDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filesHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onDrop($event) {
        $event.preventDefault();
        this.filesDropped.emit($event.dataTransfer.files);
        this.filesHovered.emit(false);
    }
    onDragOver($event) {
        $event.preventDefault();
        this.filesHovered.emit(true);
    }
    onDragLeave($event) {
        $event.preventDefault();
        this.filesHovered.emit(false);
    }
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



/***/ }),

/***/ "./src/app/edit/side-nav/side-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/edit/side-nav/side-nav.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.selected {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.side-panel {\n  padding: 0px 16px;\n}\n\n.progress-info {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.progress-info span.annotated {\n  color: rgba(123, 187, 45, 0.8);\n}\n\n.progress-info span.ignored {\n  color: rgba(0, 0, 0, 0.54);\n}\n\ndiv {\n  font-size: 0.9rem !important;\n}\n\nspan {\n  font-size: 0.9rem !important;\n}\n\n.mat-list-base .mat-subheader {\n  font-size: 0.9rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9zaWRlLW5hdi9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcc2lkZS1uYXZcXHNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFFSSxpQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FEQ0k7RUFDSSw4QkFBQTtBQ0NSOztBRENJO0VBQ0ksMEJBQUE7QUNDUjs7QURHQTtFQUNJLDRCQUFBO0FDQUo7O0FER0E7RUFDSSw0QkFBQTtBQ0FKOztBREdBO0VBQ0ksNEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG5cclxuLnNpZGUtcGFuZWwge1xyXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1pbmZvIHtcclxuXHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBzcGFuLmFubm90YXRlZCB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTIzLCAxODcsIDQ1LCAwLjgpXHJcbiAgICB9XHJcbiAgICBzcGFuLmlnbm9yZWQge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5zaWRlLXBhbmVsIHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbi5wcm9ncmVzcy1pbmZvIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4ucHJvZ3Jlc3MtaW5mbyBzcGFuLmFubm90YXRlZCB7XG4gIGNvbG9yOiByZ2JhKDEyMywgMTg3LCA0NSwgMC44KTtcbn1cbi5wcm9ncmVzcy1pbmZvIHNwYW4uaWdub3JlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG5kaXYge1xuICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var src_app_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/network.service */ "./src/app/network.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");







let SideNavComponent = class SideNavComponent {
    constructor(edit, network, cs, L) {
        this.edit = edit;
        this.network = network;
        this.cs = cs;
        this.L = L;
        this.autoListShow = true;
        this.imageListShow = true;
        this.userName = '';
        this.userProgress = 0;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.event.subscribe(key => {
            if (key === 'progress') {
                this.updateProgress();
                this.updateModelInfo();
            }
        });
        this.cs.configObservable.subscribe(config => {
            this.config = config;
        });
        this.cs.userNameObservable.subscribe(name => {
            this.userName = name;
        });
    }
    ngAfterViewInit() {
        this.updateProgress();
    }
    selectImage(image) {
        this.edit.imageSubject.next(image);
        this.updateModelInfo();
    }
    removeImage() {
        this.edit.ignoreImage()
            .then(_ => {
            this.remove.emit();
        });
    }
    // for debug
    getRandImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.network.getRandomElem();
            if (result) {
                const [meta, blob] = result;
                this.edit.parseImage(blob, meta.path, meta);
            }
            else {
                this.edit.removeImage();
            }
        });
    }
    onChangeAutoComplete(change, modelInfo) {
        this.edit.updateAutoComplete(modelInfo, change.checked);
    }
    updateProgress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.progress = yield this.network.getProgress();
            console.log(this.progress, this.config.sharedDataset);
            if (this.config.sharedDataset) {
                console.log('here');
                this.userProgress = yield this.network.getUserProgress();
            }
        });
    }
    updateModelInfo() {
        this.network.getModelInfo()
            .then(modelInfos => {
            if (!this.modelInfos) {
                this.modelInfos = modelInfos;
            }
            else {
                modelInfos.forEach((newModelInfo, i) => {
                    if (i < this.modelInfos.length) {
                        this.modelInfos[i].score = newModelInfo.score;
                    }
                    else {
                        this.modelInfos.push(newModelInfo);
                    }
                });
            }
        });
    }
    get imageName() {
        const splited = this.edit.image.path.split('/');
        return splited[splited.length - 1];
    }
};
SideNavComponent.ctorParameters = () => [
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_2__["EditService"] },
    { type: src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], SideNavComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SideNavComponent.prototype, "remove", void 0);
SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/side-nav/side-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/edit/side-nav/side-nav.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_edit_service__WEBPACK_IMPORTED_MODULE_2__["EditService"],
        src_app_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"],
        src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])
], SideNavComponent);



/***/ }),

/***/ "./src/app/edit/timer.service.ts":
/*!***************************************!*\
  !*** ./src/app/edit/timer.service.ts ***!
  \***************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");



let TimerService = class TimerService {
    constructor(network, zone) {
        this.network = network;
        this.zone = zone;
        this.sec = 0;
    }
    start() {
        this.reset();
        this.zone.runOutsideAngular(() => {
            this.timer = setInterval(() => {
                this.sec += 1;
            }, 1000);
        });
    }
    reset() {
        this.zone.runOutsideAngular(() => {
            if (this.timer) {
                clearInterval(this.timer);
            }
        });
        this.sec = 0;
    }
    sendResult(mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.network.sendElapsedTime(mode, this.sec);
        });
    }
};
TimerService.ctorParameters = () => [
    { type: _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
TimerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], TimerService);



/***/ }),

/***/ "./src/app/edit/verification-module/feedback-card/feedback-card.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/edit/verification-module/feedback-card/feedback-card.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100% !important;\n}\n\n.wrapper.focused {\n  background-color: rgba(51, 153, 102, 0.5);\n}\n\n.wrapper:hover:not(.focused) {\n  background-color: rgba(51, 153, 102, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL2ZlZWRiYWNrLWNhcmQvQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXHZlcmlmaWNhdGlvbi1tb2R1bGVcXGZlZWRiYWNrLWNhcmRcXGZlZWRiYWNrLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS9mZWVkYmFjay1jYXJkL2ZlZWRiYWNrLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBRElJO0VBQ0kseUNBQUE7QUNEUjs7QURJSTtFQUNJLHlDQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L3ZlcmlmaWNhdGlvbi1tb2R1bGUvZmVlZGJhY2stY2FyZC9mZWVkYmFjay1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG5cclxuICAgICYuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMTUzLCAxMDIsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3Zlcjpub3QoLmZvY3VzZWQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKTtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyLmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC41KTtcbn1cbi53cmFwcGVyOmhvdmVyOm5vdCguZm9jdXNlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC4zKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/verification-module/feedback-card/feedback-card.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/edit/verification-module/feedback-card/feedback-card.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FeedbackCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackCardComponent", function() { return FeedbackCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");





let FeedbackCardComponent = class FeedbackCardComponent {
    constructor(L) {
        this.L = L;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.directInput = false;
    }
    ngOnInit() {
        this.feedback = src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_3__["Feedback"].from(this.form);
    }
    checkWriteMode(change) {
        this.directInput = change.checked;
        if (this.directInput) {
            this.form.get('comment').setValue('');
        }
        else {
            this.form.get('comment').setValue(this.comments[0]);
        }
    }
    onFocus() {
        this.focus.emit(this.focusedKey === this.feedback.key
            ? null
            : this.feedback.key);
    }
};
FeedbackCardComponent.ctorParameters = () => [
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_4__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], FeedbackCardComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FeedbackCardComponent.prototype, "focusedKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FeedbackCardComponent.prototype, "comments", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FeedbackCardComponent.prototype, "remove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FeedbackCardComponent.prototype, "focus", void 0);
FeedbackCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/feedback-card/feedback-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback-card.component.scss */ "./src/app/edit/verification-module/feedback-card/feedback-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_4__["LocaleService"]])
], FeedbackCardComponent);



/***/ }),

/***/ "./src/app/edit/verification-module/index.ts":
/*!***************************************************!*\
  !*** ./src/app/edit/verification-module/index.ts ***!
  \***************************************************/
/*! exports provided: VClassificationComponent, VOverallComponent, VerificationModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _v_classification_v_classification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-classification/v-classification.component */ "./src/app/edit/verification-module/v-classification/v-classification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VClassificationComponent", function() { return _v_classification_v_classification_component__WEBPACK_IMPORTED_MODULE_1__["VClassificationComponent"]; });

/* harmony import */ var _v_overall_v_overall_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v-overall/v-overall.component */ "./src/app/edit/verification-module/v-overall/v-overall.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VOverallComponent", function() { return _v_overall_v_overall_component__WEBPACK_IMPORTED_MODULE_2__["VOverallComponent"]; });

/* harmony import */ var _verification_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification-module.component */ "./src/app/edit/verification-module/verification-module.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerificationModuleComponent", function() { return _verification_module_component__WEBPACK_IMPORTED_MODULE_3__["VerificationModuleComponent"]; });







/***/ }),

/***/ "./src/app/edit/verification-module/v-classification/v-classification.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-classification/v-classification.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-button.selected {\n  background-color: #3f51b5;\n  color: #fff;\n}\n\n.label-button:not(.selected) {\n  background-color: #eee;\n  color: #777;\n}\n\n.mat-icon-button {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3YtY2xhc3NpZmljYXRpb24vQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGVkaXRcXHZlcmlmaWNhdGlvbi1tb2R1bGVcXHYtY2xhc3NpZmljYXRpb25cXHYtY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LWNsYXNzaWZpY2F0aW9uL3YtY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LWNsYXNzaWZpY2F0aW9uL3YtY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtYnV0dG9uLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxhYmVsLWJ1dHRvbjpub3QoLnNlbGVjdGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuIiwiLmxhYmVsLWJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubGFiZWwtYnV0dG9uOm5vdCguc2VsZWN0ZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5tYXQtaWNvbi1idXR0b24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit/verification-module/v-classification/v-classification.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-classification/v-classification.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: VClassificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VClassificationComponent", function() { return VClassificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let VClassificationComponent = class VClassificationComponent {
    constructor(fb) {
        this.fb = fb;
        this.addFeedback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFeedback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    remove() {
        this.removeFeedback.emit(this.feedbackForm);
        this.feedbackForm = null;
    }
    clickLabelButton(label) {
        if (label === this.data.label) {
            this.update(`Label [${label}] might not be selected`);
        }
        else {
            this.update(`Label [${label}] might be selected`);
        }
    }
    update(comment) {
        if (this.feedbackForm) {
            this.feedbackForm.get('comment').setValue(comment);
        }
        else {
            this.feedbackForm = this.fb.group({
                taskKey: this.task.key,
                annotationKey: 'label',
                comment: this.fb.control(comment)
            });
            this.addFeedback.emit(this.feedbackForm);
        }
    }
};
VClassificationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_3__["Classification"])
], VClassificationComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["VClassificationData"])
], VClassificationComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VClassificationComponent.prototype, "addFeedback", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VClassificationComponent.prototype, "removeFeedback", void 0);
VClassificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-v-classification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-classification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-classification/v-classification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-classification.component.scss */ "./src/app/edit/verification-module/v-classification/v-classification.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../verification-module.component.scss */ "./src/app/edit/verification-module/verification-module.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], VClassificationComponent);



/***/ }),

/***/ "./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9heGlzLXNwZWMtY2FyZC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcdmVyaWZpY2F0aW9uLW1vZHVsZVxcdi1vdmVyYWxsXFxheGlzLXNwZWMtY2FyZFxcYXhpcy1zcGVjLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvYXhpcy1zcGVjLWNhcmQvYXhpcy1zcGVjLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9heGlzLXNwZWMtY2FyZC9heGlzLXNwZWMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AxisSpecCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisSpecCardComponent", function() { return AxisSpecCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");




let AxisSpecCardComponent = class AxisSpecCardComponent {
    constructor(_L) {
        this._L = _L;
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = _L.axisSpecCard;
    }
    ngOnInit() { }
    emit(el) {
        this.focus.emit(el.key);
    }
    get labels() {
        if (this.data && this.data.labels.value.length > 0) {
            return this.data.labels.value.join(', ');
        }
        else {
            return '';
        }
    }
    get markLabels() {
        if (this.data &&
            this.data.markLabels &&
            this.data.markLabels.value.length > 0) {
            return this.data.markLabels.value.join(', ');
        }
        else {
            return '';
        }
    }
};
AxisSpecCardComponent.ctorParameters = () => [
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["AxisAnnotation"])
], AxisSpecCardComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AxisSpecCardComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AxisSpecCardComponent.prototype, "focusedKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AxisSpecCardComponent.prototype, "focus", void 0);
AxisSpecCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-axis-spec-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./axis-spec-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./axis-spec-card.component.scss */ "./src/app/edit/verification-module/v-overall/axis-spec-card/axis-spec-card.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../v-overall.component.scss */ "./src/app/edit/verification-module/v-overall/v-overall.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])
], AxisSpecCardComponent);



/***/ }),

/***/ "./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9jdXN0b20tc3BlYy1jYXJkL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFx2ZXJpZmljYXRpb24tbW9kdWxlXFx2LW92ZXJhbGxcXGN1c3RvbS1zcGVjLWNhcmRcXGN1c3RvbS1zcGVjLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvY3VzdG9tLXNwZWMtY2FyZC9jdXN0b20tc3BlYy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvY3VzdG9tLXNwZWMtY2FyZC9jdXN0b20tc3BlYy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CustomSpecCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSpecCardComponent", function() { return CustomSpecCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");




let CustomSpecCardComponent = class CustomSpecCardComponent {
    constructor(_L) {
        this._L = _L;
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = this._L.customSpecCard;
    }
    ngOnInit() { }
    emit(el) {
        this.focus.emit(el.key);
    }
    get markLabels() {
        if (this.data && this.data.markLabels.value.length > 0) {
            return this.data.markLabels.value.join(', ');
        }
        else {
            return '';
        }
    }
};
CustomSpecCardComponent.ctorParameters = () => [
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["CustomAnnotation"])
], CustomSpecCardComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CustomSpecCardComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CustomSpecCardComponent.prototype, "focusedKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomSpecCardComponent.prototype, "focus", void 0);
CustomSpecCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-spec-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-spec-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-spec-card.component.scss */ "./src/app/edit/verification-module/v-overall/custom-spec-card/custom-spec-card.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../v-overall.component.scss */ "./src/app/edit/verification-module/v-overall/v-overall.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])
], CustomSpecCardComponent);



/***/ }),

/***/ "./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9sZWdlbmQtc3BlYy1jYXJkL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFx2ZXJpZmljYXRpb24tbW9kdWxlXFx2LW92ZXJhbGxcXGxlZ2VuZC1zcGVjLWNhcmRcXGxlZ2VuZC1zcGVjLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvbGVnZW5kLXNwZWMtY2FyZC9sZWdlbmQtc3BlYy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvbGVnZW5kLXNwZWMtY2FyZC9sZWdlbmQtc3BlYy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: LegendSpecCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendSpecCardComponent", function() { return LegendSpecCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");




let LegendSpecCardComponent = class LegendSpecCardComponent {
    constructor(_L) {
        this._L = _L;
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.L = _L.legendSpecCard;
    }
    ngOnInit() { }
    emit(el) {
        this.focus.emit(el.key);
    }
    get labels() {
        if (this.data && this.data.labels.value.length > 0) {
            return this.data.labels.value.join(', ');
        }
        else {
            return '';
        }
    }
};
LegendSpecCardComponent.ctorParameters = () => [
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["LegendAnnotation"])
], LegendSpecCardComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LegendSpecCardComponent.prototype, "focusedKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LegendSpecCardComponent.prototype, "focus", void 0);
LegendSpecCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legend-spec-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./legend-spec-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./legend-spec-card.component.scss */ "./src/app/edit/verification-module/v-overall/legend-spec-card/legend-spec-card.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../v-overall.component.scss */ "./src/app/edit/verification-module/v-overall/v-overall.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"]])
], LegendSpecCardComponent);



/***/ }),

/***/ "./src/app/edit/verification-module/v-overall/v-overall.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-overall/v-overall.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n\n.mark-label {\n  border-radius: 5px;\n  border: 2px solid #777;\n  padding: 0 0.3rem;\n  margin-top: 0.5rem;\n  cursor: pointer;\n}\n\n.mark-label:hover {\n  background-color: rgba(51, 153, 102, 0.7);\n}\n\n.mark-label.focused {\n  background-color: #339966;\n}\n\n.text-label {\n  padding: 0.2rem 0rem;\n  cursor: pointer;\n}\n\n.text-label:hover {\n  background-color: rgba(51, 153, 102, 0.7);\n}\n\n.text-label.focused {\n  background-color: #339966;\n}\n\n.text-label > .label-cell {\n  width: 160px !important;\n}\n\n.text-label.title {\n  color: #777;\n  font-weight: 600;\n}\n\n.text-label.odd-row:not(:hover):not(.focused) {\n  background-color: #eee;\n}\n\n.spec-table {\n  border-top: 1px solid #bbb;\n}\n\n.raw-table {\n  overflow-x: auto;\n}\n\n.cell-title {\n  color: #777;\n  font-weight: 600;\n  background-color: #eee;\n  text-align: center;\n}\n\n.focus-unit {\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1px solid #bbb;\n  cursor: pointer;\n}\n\n.focus-unit.focused > .cell-title {\n  background-color: #26734d !important;\n}\n\n.focus-unit.focused > div {\n  background-color: #339966 !important;\n  color: white;\n}\n\n.focus-unit:hover:not(.focused) > .cell-title {\n  background-color: rgba(38, 115, 77, 0.7) !important;\n}\n\n.focus-unit:hover:not(.focused) > div {\n  background-color: rgba(51, 153, 102, 0.7) !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC9DOlxcVXNlcnNcXGp1bmhvZVxcSENJTFxcZGV2XFxBdXRvdGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcZWRpdFxcdmVyaWZpY2F0aW9uLW1vZHVsZVxcdi1vdmVyYWxsXFx2LW92ZXJhbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQvdmVyaWZpY2F0aW9uLW1vZHVsZS92LW92ZXJhbGwvdi1vdmVyYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0k7RUFDSSx5Q0FBQTtBQ0NSOztBREVJO0VBQ0kseUJBQUE7QUNBUjs7QURJQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdJO0VBQ0kseUNBQUE7QUNEUjs7QURJSTtFQUNJLHlCQUFBO0FDRlI7O0FES0k7RUFDSSx1QkFBQTtBQ0hSOztBRE1JO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDSlI7O0FET0k7RUFDSSxzQkFBQTtBQ0xSOztBRFVBO0VBQ0ksMEJBQUE7QUNQSjs7QURVQTtFQUNJLGdCQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEVUE7RUFFSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNSSjs7QURXUTtFQUNJLG9DQUFBO0FDVFo7O0FEWVE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7QUNWWjs7QURnQlE7RUFDSSxtREFBQTtBQ2RaOztBRGlCUTtFQUNJLG9EQUFBO0VBQ0EsWUFBQTtBQ2ZaIiwiZmlsZSI6InNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3Ytb3ZlcmFsbC92LW92ZXJhbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLm1hcmstbGFiZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzc3NztcclxuICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTMsIDEwMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTMsIDEwMik7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5sYWJlbC1jZWxsIHtcclxuICAgICAgICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgICYub2RkLXJvdzpub3QoOmhvdmVyKTpub3QoLmZvY3VzZWQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnNwZWMtdGFibGUge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmI7XHJcbn1cclxuXHJcbi5yYXctdGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmNlbGwtdGl0bGUge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvY3VzLXVuaXQge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICYuZm9jdXNlZCB7XHJcblxyXG4gICAgICAgID4gLmNlbGwtdGl0bGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAxMTUsIDc3LCAxKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE1MywgMTAyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6bm90KC5mb2N1c2VkKSB7XHJcblxyXG4gICAgICAgID4gLmNlbGwtdGl0bGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAxMTUsIDc3LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubWFyay1sYWJlbCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzc3NztcbiAgcGFkZGluZzogMCAwLjNyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hcmstbGFiZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDEwMiwgMC43KTtcbn1cbi5tYXJrLWxhYmVsLmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OTY2O1xufVxuXG4udGV4dC1sYWJlbCB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGV4dC1sYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpO1xufVxuLnRleHQtbGFiZWwuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk5NjY7XG59XG4udGV4dC1sYWJlbCA+IC5sYWJlbC1jZWxsIHtcbiAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XG59XG4udGV4dC1sYWJlbC50aXRsZSB7XG4gIGNvbG9yOiAjNzc3O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnRleHQtbGFiZWwub2RkLXJvdzpub3QoOmhvdmVyKTpub3QoLmZvY3VzZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLnNwZWMtdGFibGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JiYjtcbn1cblxuLnJhdy10YWJsZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jZWxsLXRpdGxlIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvY3VzLXVuaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvY3VzLXVuaXQuZm9jdXNlZCA+IC5jZWxsLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NzM0ZCAhaW1wb3J0YW50O1xufVxuLmZvY3VzLXVuaXQuZm9jdXNlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk5NjYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvY3VzLXVuaXQ6aG92ZXI6bm90KC5mb2N1c2VkKSA+IC5jZWxsLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgMTE1LCA3NywgMC43KSAhaW1wb3J0YW50O1xufVxuLmZvY3VzLXVuaXQ6aG92ZXI6bm90KC5mb2N1c2VkKSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1MywgMTAyLCAwLjcpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/verification-module/v-overall/v-overall.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/edit/verification-module/v-overall/v-overall.component.ts ***!
  \***************************************************************************/
/*! exports provided: VOverallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOverallComponent", function() { return VOverallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/task */ "./src/app/common/task/index.ts");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");







let VOverallComponent = class VOverallComponent {
    constructor(fb, _L) {
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
        this.markComments = [
            this.L.refine,
            this.L.remove,
            this.L.addOne
        ];
        this.textComments = [
            this.L.refine,
            this.L.remove,
            this.L.changeLabel,
            this.L.changeText,
            this.L.addOne
        ];
        this.specComments = [
            this.L.check
        ];
        this.rawComments = [
            this.L.checkRow,
            this.L.remove,
            this.L.addRow
        ];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if ((changes.data &&
            changes.data.currentValue !== undefined &&
            this.onImageLoad)
            ||
                (changes.onImageLoad &&
                    changes.onImageLoad.currentValue !== false &&
                    this.data !== undefined)) {
            this.initEventArea();
            this.initMarks();
            this.initTexts();
        }
        if (changes.focusedKey) {
            const key = changes.focusedKey.currentValue;
            if (key) {
                this.updateFocus(key);
            }
        }
    }
    clickCell(cellKey) {
        const key = this.focusedKey === cellKey ? null : cellKey;
        this.focus.emit(key);
    }
    clickMark(mark) {
        const key = this.focusedKey === mark.key ? null : mark.key;
        this.focus.emit(key);
    }
    clickText(text) {
        const key = this.focusedKey === text.key ? null : text.key;
        this.focus.emit(key);
    }
    clickRow(row) {
        const key = this.focusedKey === row.key ? null : row.key;
        this.focus.emit(key);
    }
    addMarkFeedback() {
        const markIndex = this.data.marks
            .findIndex(mark => mark.key === this.focusedKey);
        const numOtherFeedback = this.markFeedbacks
            .filter(d => d.get('annotationKey').value.startsWith('mark.other'))
            .length;
        const newGroup = this.fb.group({
            taskKey: this.task.key,
            annotationKey: `mark.${markIndex !== -1
                ? markIndex
                : `other.${numOtherFeedback}`}`,
            comment: this.markComments[0]
        });
        this.markFeedbacks.push(newGroup);
        this.add.emit(newGroup);
    }
    removeMarkFeedback(form) {
        const index = this.markFeedbacks.findIndex(f => f === form);
        this.markFeedbacks.splice(index, 1);
        this.remove.emit(form);
    }
    addTextFeedback() {
        const textIndex = this.data.texts
            .findIndex(text => text.key === this.focusedKey);
        const numOtherFeedback = this.textFeedbacks
            .filter(d => d.get('annotationKey').value.startsWith('text.other'))
            .length;
        const newGroup = this.fb.group({
            taskKey: this.task.key,
            annotationKey: `text.${textIndex !== -1
                ? textIndex
                : `other.${numOtherFeedback}`}`,
            comment: this.textComments[0]
        });
        this.textFeedbacks.push(newGroup);
        this.add.emit(newGroup);
    }
    removeTextFeedback(form) {
        const index = this.textFeedbacks.findIndex(f => f === form);
        this.textFeedbacks.splice(index, 1);
        this.remove.emit(form);
    }
    addSpecFeedback() {
        const contain = this.data.spec.contains(this.focusedKey);
        const numOtherFeedback = this.specFeedbacks
            .filter(d => d.get('annotationKey').value.startsWith('spec.other'))
            .length;
        const newGroup = this.fb.group({
            taskKey: this.task.key,
            annotationKey: contain
                ? this.focusedKey.substring(this.task.key.length + 1)
                : `spec.other.${numOtherFeedback}`,
            comment: this.specComments[0]
        });
        this.specFeedbacks.push(newGroup);
        this.add.emit(newGroup);
    }
    removeSpecFeedback(form) {
        const index = this.specFeedbacks.findIndex(f => f === form);
        this.specFeedbacks.splice(index, 1);
        this.remove.emit(form);
    }
    addRawFeedback() {
        const contain = this.data.raw.contains(this.focusedKey);
        const numOtherFeedback = this.rawFeedbacks
            .filter(d => d.get('annotationKey').value.startsWith('raw.other'))
            .length;
        const newGroup = this.fb.group({
            taskKey: this.task.key,
            annotationKey: contain
                ? this.focusedKey.substring(this.task.key.length + 1)
                : `raw.other.${numOtherFeedback}`,
            comment: this.rawComments[0]
        });
        this.rawFeedbacks.push(newGroup);
        this.add.emit(newGroup);
    }
    removeRawFeedback(form) {
        const index = this.rawFeedbacks.findIndex(f => f === form);
        this.rawFeedbacks.splice(index, 1);
        this.remove.emit(form);
    }
    initEventArea() {
        this.svgS.selectAll('g').remove();
        const horLine = this.svgS.append('line')
            .attr('class', 'guide-horizontal')
            .attr('x1', 0)
            .attr('x2', 1000)
            .attr('y1', 0)
            .attr('y2', 0)
            .attr('stroke-width', 1)
            .attr('stroke', 'rgba(0, 0, 0, 0.3)')
            .style('pointer-events', 'none');
        const verLine = this.svgS.append('line')
            .attr('class', 'guide-vertical')
            .attr('y1', 0)
            .attr('y2', 1000)
            .attr('x1', 0)
            .attr('x2', 0)
            .attr('stroke-width', 1)
            .attr('stroke', 'rgba(0, 0, 0, 0.3)')
            .style('pointer-events', 'none');
        this.svgS.on('mouseenter', () => {
            horLine.attr('visibility', 'visible');
            verLine.attr('visibility', 'visible');
        })
            .on('mousemove', () => {
            horLine.attr('y1', d3__WEBPACK_IMPORTED_MODULE_5__["event"].offsetY)
                .attr('y2', d3__WEBPACK_IMPORTED_MODULE_5__["event"].offsetY);
            verLine.attr('x1', d3__WEBPACK_IMPORTED_MODULE_5__["event"].offsetX)
                .attr('x2', d3__WEBPACK_IMPORTED_MODULE_5__["event"].offsetX);
        })
            .on('mouseleave', () => {
            horLine.attr('visibility', 'hidden');
            verLine.attr('visibility', 'hidden');
        });
    }
    initMarks() {
        const { width, height } = this.imgRef.nativeElement;
        const g = this.svgS
            .append('g')
            .attr('class', 'mark-group');
        g.selectAll('rect')
            .data(this.data.marks)
            .join('rect')
            .attr('x', d => d.bound[0] * width + 10)
            .attr('y', d => d.bound[1] * height + 10)
            .attr('width', d => (d.bound[2] - d.bound[0]) * width)
            .attr('height', d => (d.bound[3] - d.bound[1]) * height)
            .attr('stroke-width', 2)
            .attr('stroke', 'red')
            .attr('fill', 'rgba(0, 0, 0, 0)')
            .classed('focused', mark => this.focusedKey === mark.key)
            .on('click', mark => {
            this.clickMark(mark);
        });
        g.select('.focused').raise();
    }
    initTexts() {
        const { width, height } = this.imgRef.nativeElement;
        const g = this.svgS
            .append('g')
            .attr('class', 'text-group');
        g.selectAll('rect')
            .data(this.data.texts)
            .join('rect')
            .attr('x', d => d.bound[0] * width + 10)
            .attr('y', d => d.bound[1] * height + 10)
            .attr('width', d => (d.bound[2] - d.bound[0]) * width)
            .attr('height', d => (d.bound[3] - d.bound[1]) * height)
            .attr('stroke-width', 2)
            .attr('stroke', 'red')
            .attr('fill', 'rgba(0, 0, 0, 0)')
            .classed('focused', text => this.focusedKey === text.key)
            .on('click', text => {
            this.clickText(text);
        });
        g.select('.focused').raise();
    }
    updateFocus(key) {
        const g = this.svgS.selectAll('g');
        g.selectAll('rect')
            .classed('focused', (d) => d.key === key);
        g.select('.focused').raise();
        if (!key) {
            return;
        }
        if (key.startsWith(`${this.task.key}.raw`)) {
            const [taskKey, _, index] = key.split('.');
            const markKey = `${taskKey}.mark.${index}`;
            g.selectAll('rect')
                .classed('focused', (d) => d.key === markKey);
            g.select('.focused').raise();
        }
    }
    get hasAxes() {
        return this.data && this.data.spec.axes.length > 0;
    }
    get hasLegend() {
        return this.data && !!this.data.spec.legend;
    }
    get hasCustoms() {
        return this.data && this.data.spec.customs.length > 0;
    }
};
VOverallComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_task__WEBPACK_IMPORTED_MODULE_2__["Overall"])
], VOverallComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_3__["VOverallData"])
], VOverallComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], VOverallComponent.prototype, "onImageLoad", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], VOverallComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VOverallComponent.prototype, "svgS", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], VOverallComponent.prototype, "focusedKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VOverallComponent.prototype, "add", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VOverallComponent.prototype, "remove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VOverallComponent.prototype, "focus", void 0);
VOverallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-v-overall',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-overall.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/v-overall/v-overall.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-overall.component.scss */ "./src/app/edit/verification-module/v-overall/v-overall.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../edit-module.scss */ "./src/app/edit/edit-module.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_6__["LocaleService"]])
], VOverallComponent);



/***/ }),

/***/ "./src/app/edit/verification-module/verification-module.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/edit/verification-module/verification-module.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background-color: #fff;\n  display: block;\n}\n\ndiv {\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL0M6XFxVc2Vyc1xcanVuaG9lXFxIQ0lMXFxkZXZcXEF1dG90YXRvclxcY2xpZW50L3NyY1xcYXBwXFxlZGl0XFx2ZXJpZmljYXRpb24tbW9kdWxlXFx2ZXJpZmljYXRpb24tbW9kdWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L3ZlcmlmaWNhdGlvbi1tb2R1bGUvdmVyaWZpY2F0aW9uLW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC92ZXJpZmljYXRpb24tbW9kdWxlL3ZlcmlmaWNhdGlvbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBjb2xvcjogIzc3NztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYge1xuICBjb2xvcjogIzc3Nztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/verification-module/verification-module.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/edit/verification-module/verification-module.component.ts ***!
  \***************************************************************************/
/*! exports provided: VerificationModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationModuleComponent", function() { return VerificationModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_app_common_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/config */ "./src/app/common/config.ts");
/* harmony import */ var src_app_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/network.service */ "./src/app/network.service.ts");
/* harmony import */ var src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/edit.service */ "./src/app/edit.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_locale_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/locale.service */ "./src/app/locale.service.ts");








let VerificationModuleComponent = class VerificationModuleComponent {
    constructor(network, edit, fb, L) {
        this.network = network;
        this.edit = edit;
        this.fb = fb;
        this.L = L;
        this.reviewEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.feedbackForms = [];
        this.focusedKey = null;
    }
    ngOnInit() {
    }
    sendReview(approved) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const feedbacks = this.feedbackForms.map(d => src_app_common_verification_data__WEBPACK_IMPORTED_MODULE_2__["Feedback"].from(d));
            const path = this.edit.image.path;
            if (this.config.service === 'normal') {
                yield this.network.registerReview({ path, approved, feedbacks });
            }
            this.reviewEmitter.emit();
        });
    }
    onAddFeedback(form) {
        const index = this.verificationDatas.findIndex(d => d.taskKey === form.get('taskKey').value);
        form.addControl('index', this.fb.control(index));
        this.feedbackForms.push(form);
        this.feedbackForms = [].concat(this.feedbackForms);
        const { taskKey, annotationKey } = form.value;
        this.focusedKey = `${taskKey}.${annotationKey}`;
    }
    onRemoveFeedback(form) {
        const index = this.feedbackForms.findIndex(f => f === form);
        if (index !== -1) {
            this.feedbackForms.splice(index, 1);
            this.feedbackForms = [].concat(this.feedbackForms);
        }
    }
};
VerificationModuleComponent.ctorParameters = () => [
    { type: src_app_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_locale_service__WEBPACK_IMPORTED_MODULE_7__["LocaleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_config__WEBPACK_IMPORTED_MODULE_3__["Config"])
], VerificationModuleComponent.prototype, "config", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], VerificationModuleComponent.prototype, "verificationDatas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], VerificationModuleComponent.prototype, "onImageLoad", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], VerificationModuleComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VerificationModuleComponent.prototype, "svgS", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VerificationModuleComponent.prototype, "reviewEmitter", void 0);
VerificationModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification-module',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verification-module.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/verification-module/verification-module.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verification-module.component.scss */ "./src/app/edit/verification-module/verification-module.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
        src_app_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_locale_service__WEBPACK_IMPORTED_MODULE_7__["LocaleService"]])
], VerificationModuleComponent);



/***/ }),

/***/ "./src/app/locale.service.ts":
/*!***********************************!*\
  !*** ./src/app/locale.service.ts ***!
  \***********************************/
/*! exports provided: LocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return LocaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/task */ "./src/app/common/task/index.ts");




let LocaleService = class LocaleService {
    constructor() {
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
                removeButton: 'Remove this Image'
            },
            ko: {
                progress: '진행 상황',
                userName: '사용자명',
                userProgress: '기여도',
                useSuggestions: '자동완성 기능 사용',
                removeButton: '이 이미지를 제외하기'
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
            ko: '해결'
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
                label: (input) => {
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
                label: (input) => {
                    return this.labelMap[input];
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
                encodingLabel: (label) => {
                    return this.encodingMap[label][this.l];
                },
            },
            ko: {
                axis: '축',
                dir: '방향',
                type: '타입',
                unit: '단위',
                encoding: '인코딩',
                labels: '라벨',
                markLabels: '마크 라벨',
                encodingLabel: (label) => {
                    return this.encodingMap[label][this.l];
                },
            }
        };
        this._legendSpecCard = {
            en: {
                legend: 'Legend',
                encoding: 'Encoding',
                labels: 'Labels',
                encodingLabel: (label) => {
                    return this.encodingMap[label][this.l];
                },
            },
            ko: {
                legend: '범례',
                encoding: '인코딩',
                labels: '라벨',
                encodingLabel: (label) => {
                    return this.encodingMap[label][this.l];
                },
            }
        };
        this._customSpecCard = {
            en: {
                custom: 'Custom',
                type: 'Type',
                unit: 'Unit',
                encoding: 'Encoding',
                markLabels: 'Mark Labels',
                encodingLabel: (label) => {
                    return this.encodingMap[label][this.l];
                },
            },
            ko: {
                custom: '사용자 정의 열',
                type: '타입',
                unit: '단위',
                encoding: '인코딩',
                markLabels: '마크 라벨',
                encodingLabel: (label) => {
                    return this.encodingMap[label][this.l];
                },
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
        this.labelMap = {
            [_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_TITLE"]]: '제목',
            [_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_LEGEND_LABEL"]]: '범례 라벨',
            [_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_LEGEND_TITLE"]]: '범례 제목',
            [_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_X_AXIS_TITLE"]]: 'X축 제목',
            [_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_X_AXIS_LABEL"]]: 'X축 라벨',
            [_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_Y_AXIS_TITLE"]]: 'Y축 제목',
            [_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_Y_AXIS_LABEL"]]: 'Y축 라벨',
            [_common_task__WEBPACK_IMPORTED_MODULE_3__["KEY_MARK_LABEL"]]: '마크 라벨'
        };
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
                ko: '높이'
            },
            width: {
                en: 'Width',
                ko: '너비'
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
                label: (input) => {
                    return input;
                }
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
                label: (input) => {
                    return this.labelMap[input];
                }
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
                getTitle: (index) => {
                    return `Custom column ${index + 1}`;
                }
            },
            ko: {
                title: '제목',
                type: '타입',
                unit: '단위',
                integer: '정수 단위',
                decimal: '소수 단위',
                target: '마크 라벨의 대상이 되는 열',
                getTitle: (index) => {
                    return `사용자 정의 열 ${index + 1}`;
                }
            }
        };
        this._legendSpec = {
            en: {
                title: 'Title',
            },
            ko: {
                title: '제목',
            }
        };
        this._rawTable = {
            en: {
                encoding: 'Encoding',
                encodingLabel: (label) => {
                    return this.encodingMap[label][this.l];
                },
                clear: 'Clear',
                predict: 'Predict'
            },
            ko: {
                encoding: '인코딩',
                encodingLabel: (label) => {
                    return this.encodingMap[label][this.l];
                },
                clear: '모두 삭제',
                predict: '값 계산'
            }
        };
        this.l = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].locale;
    }
    service(service) {
        return this.l === 'en' ? service.toUpperCase() : this.serviceMap[service];
    }
    get mode() {
        return this.l === 'en' ? 'MODE' : '모드';
    }
    label(input) {
        return this.labelMap[input];
    }
    currMode(mode) {
        return this.l === 'en' ? mode.toUpperCase() : this.modeMap[mode];
    }
    get registerLabel() {
        return this.l === 'en'
            ? 'Register Labels'
            : '라벨 등록하기';
    }
    get completeMsg1() {
        return this.l === 'en'
            ? 'Contratulations! You have annotated all the images.'
            : '축하합니다! 당신은 모든 이미지를 어노테이션하셨습니다.';
    }
    get completeMsg2() {
        return this.l === 'en'
            ? 'There are no more images left.'
            : '더 이상의 이미지가 남지 않았습니다.';
    }
    get submit() {
        return this.l === 'en' ? 'Submit' : '제출';
    }
    get keyMessages() {
        return [
            this.l === 'en'
                ? `* Press 'd' or 'delete' to remove the selected box`
                : `* 'd' 키나 'delete'키를 통해 선택한 상자를 지울 수 있습니다`,
            this.l === 'en'
                ? `* Press 'f' to upper the layer of selected box`
                : `* 'f' 키로 선택한 상자를 최상단에 위치시킬 수 있습니다`,
            this.l === 'en'
                ? `* Press 'b' to lower the layer of selected box`
                : `* 'b' 키로 선택한 상자를 최하단에 위치시킬 수 있습니다`,
        ];
    }
    get sideNav() {
        return this._sideNav[this.l];
    }
    get verModule() {
        return this._verModule[this.l];
    }
    get feedbackCard() {
        return this._feedbackCard[this.l];
    }
    get resolveBtn() {
        return this._resolveBtn[this.l];
    }
    get vOverall() {
        return this._vOverall[this.l];
    }
    get axisSpecCard() {
        return this._axisSpecCard[this.l];
    }
    get legendSpecCard() {
        return this._legendSpecCard[this.l];
    }
    get customSpecCard() {
        return this._customSpecCard[this.l];
    }
    get reviewPanel() {
        return this._reviewPanel[this.l];
    }
    get overall() {
        return this._overall[this.l];
    }
    get axisSpec() {
        return this._axisSpec[this.l];
    }
    get legendSpec() {
        return this._legendSpec[this.l];
    }
    get customSpec() {
        return this._customSpec[this.l];
    }
    get rawTable() {
        return this._rawTable[this.l];
    }
};
LocaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LocaleService);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".warn {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqdW5ob2VcXEhDSUxcXGRldlxcQXV0b3RhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwiLndhcm4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");





let LoginComponent = class LoginComponent {
    constructor(network, router, configService) {
        this.network = network;
        this.router = router;
        this.configService = configService;
        this.name = '';
        this.password = '';
        this.warnMessage = '';
    }
    ngOnInit() {
        this.configService.configObservable.subscribe(config => {
            this.config = config;
            if (this.config.service !== 'normal') {
                this.name = this.config.service;
                this.password = this.config.service;
                this.configService.setUserName(this.name);
                this.login(false);
            }
        });
    }
    login(validation = true) {
        const re = /[A-Za-z0-9_]\w+/g;
        if (!re.test(this.name)) {
            return;
        }
        if (validation && this.password.length < 8) {
            return;
        }
        this.network.login(this.config.key, this.name, this.password)
            .then((res) => {
            if (res.code !== 0) {
                this.warnMessage = res.message;
            }
            else {
                this.configService.userNameObservable.subscribe(_ => {
                    this.router.navigate(['/edit']);
                });
                this.configService.setUserName(this.name);
            }
        })
            .catch(err => {
            console.error(err);
        });
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.login();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LoginComponent.prototype, "onKey", null);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
], LoginComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_edit_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/edit-data */ "./src/app/common/edit-data.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _common_verification_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/verification-data */ "./src/app/common/verification-data.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let NetworkService = class NetworkService {
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
        // private BASE_URL = 'http://localhost:1219/api/';
        this.BASE_URL = 'http://147.46.240.21:1219/api/';
        this.token = '';
    }
    login(key, userName, password) {
        const body = {
            key,
            userName,
            password
        };
        return this.http.post(`${this.BASE_URL}login`, body, this.userOptions)
            .toPromise()
            .then(raw => this.parseResponse(raw))
            .then(data => {
            if (data.data.token) {
                this.token = data.data.token;
            }
            return data;
        });
    }
    checkInstance(service) {
        return this.httpGetWithUser('check')
            .then((raw) => raw);
    }
    getModelInfo() {
        return this.httpGetWithUser('model_info')
            .then((raw) => raw.map(d => new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["ModelInfo"](d)));
    }
    getProgress() {
        return this.httpGetWithUser('progress')
            .then((raw) => {
            return raw;
        });
    }
    getUserProgress() {
        return this.httpGetWithUser('user_progress')
            .then((raw) => raw['progress']);
    }
    ignoreImage(imageElem) {
        const body = { path: imageElem.path };
        return this.http.post(`${this.BASE_URL}ignore`, body, this.userOptions)
            .toPromise();
    }
    getPaths() {
        return this.httpGetWithUser('paths').then(d => d);
    }
    getList(labeled = 0) {
        return this.http.get(`${this.BASE_URL}list?labeled=${labeled}`, this.userOptions)
            .toPromise()
            .then(raw => raw.map(d => new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["AnnotationMeta"](d)));
    }
    clearPending() {
        return this.httpGetWithUser('clear_pending');
    }
    getPrediction(path) {
        return this.http.get(`${this.BASE_URL}prediction?path=${path}`, this.userOptions)
            .toPromise()
            .then(raw => new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["PredictData"](raw));
    }
    getImage(path) {
        return this.http.get(`${this.BASE_URL}image?path=${path}`, Object.assign({ responseType: 'blob' }, this.userOptions))
            .toPromise();
    }
    getRandomElem() {
        return this.httpGetWithUser('random_image')
            .then((raw) => this.parseResponse(raw))
            .then((response) => {
            const data = response.data;
            if (data) {
                return Promise.all([data, this.getImage(data.path)]);
            }
            else {
                return null;
            }
        });
    }
    getVerificationRandomElem() {
        return this.httpGetWithUser('verification_image')
            .then((response) => {
            if (response.data) {
                return new _common_edit_data__WEBPACK_IMPORTED_MODULE_3__["AnnotatedImageData"](response.data);
            }
            else {
                return null;
            }
        })
            .then((meta) => {
            if (meta) {
                return Promise.all([meta, this.getImage(meta.path)]);
            }
            else {
                return null;
            }
        });
    }
    submit(imageElem, formGroup, config) {
        const body = { raw: {}, path: imageElem.path, semi: imageElem.semi };
        for (const task of config.tasks) {
            const key = task.key;
            body.raw[key] = task.getFormValue(formGroup);
        }
        return this.http.post(this.BASE_URL + 'submit', body, this.userOptions)
            .toPromise().then(() => null);
    }
    registerReview(review) {
        return this.http.post(this.BASE_URL + 'register_review', review, this.userOptions)
            .toPromise().then(d => this.parseResponse(d));
    }
    getReview(path) {
        return this.http.get(`${this.BASE_URL}review?path=${path}`, this.userOptions)
            .toPromise()
            .then(d => new _common_verification_data__WEBPACK_IMPORTED_MODULE_5__["Review"](d));
    }
    sendElapsedTime(mode, time) {
        return this.http.post(`${this.BASE_URL}time`, { mode, time })
            .toPromise();
    }
    loadLocalImage(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.get(path, { responseType: 'blob' })
                .toPromise();
        });
    }
    httpGetWithUser(path) {
        return this.http.get(`${this.BASE_URL}${path}`, this.userOptions).toPromise();
    }
    get userOptions() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        const userName = this.configService.userName;
        headers = headers.append('service', src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].mode);
        if (userName) {
            headers = headers.append('Username', userName);
        }
        if (this.token !== '') {
            headers = headers.append('Authorization', `Bearer ${this.token}`);
        }
        return { headers };
    }
    parseResponse(raw, className) {
        let data;
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
            }
            else {
                data = raw['data'];
            }
        }
        catch (err) {
            data = raw['data'];
        }
        return {
            message: raw['message'],
            code: raw['code'],
            data
        };
    }
};
NetworkService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
], NetworkService);



/***/ }),

/***/ "./src/app/non-active-page/non-active-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/non-active-page/non-active-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1hY3RpdmUtcGFnZS9ub24tYWN0aXZlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/non-active-page/non-active-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/non-active-page/non-active-page.component.ts ***!
  \**************************************************************/
/*! exports provided: NonActivePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonActivePageComponent", function() { return NonActivePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NonActivePageComponent = class NonActivePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
NonActivePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-non-active-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./non-active-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/non-active-page/non-active-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./non-active-page.component.scss */ "./src/app/non-active-page/non-active-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NonActivePageComponent);



/***/ }),

/***/ "./src/app/prediction.service.ts":
/*!***************************************!*\
  !*** ./src/app/prediction.service.ts ***!
  \***************************************/
/*! exports provided: PredictionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionService", function() { return PredictionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class ClusterResult {
    constructor(res) {
        this.centers = res['center_colors'] || [];
        this.centerPatches = res['center_patches'] || [];
        this.labels = res['labels'];
    }
}
let PredictionService = class PredictionService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://147.46.240.21:1219/api/';
    }
    clusterMarks(body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield this.http.post(`${this.BASE_URL}cluster_marks`, body).toPromise();
            return new ClusterResult(response);
        });
    }
    predictAreas(body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.post(`${this.BASE_URL}predict_area`, body)
                .toPromise().then(d => d);
        });
    }
};
PredictionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PredictionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PredictionService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: true,
    mode: 'demo',
    locale: 'en'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\junhoe\HCIL\dev\Autotator\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map