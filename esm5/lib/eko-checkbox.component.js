/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export { EkoCheckboxComponent };
if (false) {
    /** @type {?} */
    EkoCheckboxComponent.prototype.name;
    /** @type {?} */
    EkoCheckboxComponent.prototype.fontSize;
    /** @type {?} */
    EkoCheckboxComponent.prototype.color;
    /** @type {?} */
    EkoCheckboxComponent.prototype.value;
    /** @type {?} */
    EkoCheckboxComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Vrby1jaGVja2JveC8iLCJzb3VyY2VzIjpbImxpYi9la28tY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBY0U7UUFSUyxTQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDWixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUlwQixDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtRQUNFLHlHQUF5RztRQUN6RyxvRUFBb0U7UUFDcEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFDRCx1Q0FBUTs7OztJQUFSLFVBQVMsQ0FBQztRQUNSLHdDQUF3QztRQUN4QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQ3hCLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsdVZBQTRDOztpQkFFN0M7Ozs7O3VCQUVFLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsTUFBTTs7SUF5QlQsMkJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQTlCWSxvQkFBb0I7OztJQUMvQixvQ0FBMkI7O0lBQzNCLHdDQUEyQjs7SUFDM0IscUNBQXdCOztJQUN4QixxQ0FBc0I7O0lBQ3RCLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWtvLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vrby1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Vrby1jaGVja2JveC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWtvQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBuYW1lID0gJ2NoZWNrYm94JztcbiAgQElucHV0KCkgZm9udFNpemUgPSAnMTZweCc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMzMzMnO1xuICBASW5wdXQoKSB2YWx1ZSA9IG51bGw7XG4gIEBPdXRwdXQoKSBkYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnN0IHN0eWxlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdla29DaGVja2JveCcpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJykpO1xuICAgIC8vIHN0eWxlRWxlbS5pbm5lckhUTUwgPSAnI2Vrb0NoZWNrYm94OmJlZm9yZSB7YmFja2dyb3VuZDogYmxhY2s7fSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vrb0NoZWNrYm94Jykuc3R5bGUuZm9udFNpemUgPSB0aGlzLmZvbnRTaXplO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdla29DaGVja2JveCcpLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgfVxuICBlbWl0RGF0YShlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2U6JywgZS50YXJnZXQuY2hlY2tlZCApO1xuICAgIGlmICh0aGlzLm5hbWUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHRoaXMuZGF0YS5lbWl0KGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEuZW1pdCh7XG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgdmFsdWU6IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==