import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EkoCheckboxComponent = /** @class */ (function () {
    function EkoCheckboxComponent() {
        this.name = 'checkbox';
        this.fontSize = '16px';
        this.color = '#333';
        this.value = null;
        this.data = new EventEmitter();
    }
    /**
     * @return {?}
     */
    EkoCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // const styleElem = document.getElementById('ekoCheckbox').appendChild(document.createElement('style'));
        // styleElem.innerHTML = '#ekoCheckbox:before {background: black;}';
        document.getElementById('ekoCheckbox').style.fontSize = this.fontSize;
        document.getElementById('ekoCheckbox').style.color = this.color;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    EkoCheckboxComponent.prototype.emitData = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // console.log('e:', e.target.checked );
        if (this.name === 'checkbox') {
            this.data.emit(e.target.checked);
        }
        else {
            this.data.emit({
                name: this.name,
                value: e.target.checked
            });
        }
    };
    EkoCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'eko-checkbox',
                    template: "<div>\r\n  <label class=\"custom-control custom-checkbox\" id=\"ekoCheckbox\">\r\n    <input type=\"checkbox\" class=\"custom-control-input\" value=\"{{value}}\" checked=\"{{value}}\" (change)=\"emitData($event)\">\r\n    <span class=\"custom-control-indicator\"></span>\r\n    <ng-content></ng-content>\r\n  </label>\r\n</div>\r\n",
                    styles: [".custom-checkbox{min-height:1rem;padding-left:0;margin-right:0;cursor:pointer}.custom-checkbox .custom-control-indicator{content:\"\";display:inline-block;position:relative;width:30px;height:10px;background-color:#818181;border-radius:15px;transition:background .3s;vertical-align:middle;margin:0 16px;box-shadow:none}.custom-checkbox .custom-control-indicator:after{content:\"\";position:absolute;display:inline-block;width:18px;height:18px;background-color:#f1f1f1;border-radius:21px;box-shadow:0 1px 3px 1px rgba(0,0,0,.4);left:-2px;top:-4px;transition:left .3s,background .3s,box-shadow .1s}.custom-checkbox .custom-control-input:checked~.custom-control-indicator{background-color:#09a4c7;background-image:none;box-shadow:none!important}.custom-checkbox .custom-control-input:checked~.custom-control-indicator:after{background-color:#097a9a;left:15px}.custom-checkbox .custom-control-input:focus~.custom-control-indicator{box-shadow:none!important}"]
                }] }
    ];
    /** @nocollapse */
    EkoCheckboxComponent.ctorParameters = function () { return []; };
    EkoCheckboxComponent.propDecorators = {
        name: [{ type: Input }],
        fontSize: [{ type: Input }],
        color: [{ type: Input }],
        value: [{ type: Input }],
        data: [{ type: Output }]
    };
    return EkoCheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EkoCheckboxModule = /** @class */ (function () {
    function EkoCheckboxModule() {
    }
    EkoCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EkoCheckboxComponent],
                    imports: [],
                    exports: [EkoCheckboxComponent]
                },] }
    ];
    return EkoCheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EkoCheckboxComponent, EkoCheckboxModule };

//# sourceMappingURL=eko-checkbox.js.map