/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class EkoCheckboxComponent {
    constructor() {
        this.name = 'checkbox';
        this.fontSize = '16px';
        this.color = '#333';
        this.value = null;
        this.data = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // const styleElem = document.getElementById('ekoCheckbox').appendChild(document.createElement('style'));
        // styleElem.innerHTML = '#ekoCheckbox:before {background: black;}';
        document.getElementById('ekoCheckbox').style.fontSize = this.fontSize;
        document.getElementById('ekoCheckbox').style.color = this.color;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    emitData(e) {
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
    }
}
EkoCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'eko-checkbox',
                template: "<div>\r\n  <label class=\"custom-control custom-checkbox\" id=\"ekoCheckbox\">\r\n    <input type=\"checkbox\" class=\"custom-control-input\" value=\"{{value}}\" checked=\"{{value}}\" (change)=\"emitData($event)\">\r\n    <span class=\"custom-control-indicator\"></span>\r\n    <ng-content></ng-content>\r\n  </label>\r\n</div>\r\n",
                styles: [".custom-checkbox{min-height:1rem;padding-left:0;margin-right:0;cursor:pointer}.custom-checkbox .custom-control-indicator{content:\"\";display:inline-block;position:relative;width:30px;height:10px;background-color:#818181;border-radius:15px;transition:background .3s;vertical-align:middle;margin:0 16px;box-shadow:none}.custom-checkbox .custom-control-indicator:after{content:\"\";position:absolute;display:inline-block;width:18px;height:18px;background-color:#f1f1f1;border-radius:21px;box-shadow:0 1px 3px 1px rgba(0,0,0,.4);left:-2px;top:-4px;transition:left .3s,background .3s,box-shadow .1s}.custom-checkbox .custom-control-input:checked~.custom-control-indicator{background-color:#09a4c7;background-image:none;box-shadow:none!important}.custom-checkbox .custom-control-input:checked~.custom-control-indicator:after{background-color:#097a9a;left:15px}.custom-checkbox .custom-control-input:focus~.custom-control-indicator{box-shadow:none!important}"]
            }] }
];
/** @nocollapse */
EkoCheckboxComponent.ctorParameters = () => [];
EkoCheckboxComponent.propDecorators = {
    name: [{ type: Input }],
    fontSize: [{ type: Input }],
    color: [{ type: Input }],
    value: [{ type: Input }],
    data: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Vrby1jaGVja2JveC8iLCJzb3VyY2VzIjpbImxpYi9la28tY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxvQkFBb0I7SUFTL0I7UUFSUyxTQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDWixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUlwQixDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTix5R0FBeUc7UUFDekcsb0VBQW9FO1FBQ3BFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBQ0QsUUFBUSxDQUFDLENBQUM7UUFDUix3Q0FBd0M7UUFDeEMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTzthQUN4QixDQUFDLENBQUM7U0FDSjtJQUVILENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHVWQUE0Qzs7YUFFN0M7Ozs7O21CQUVFLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsTUFBTTs7OztJQUpQLG9DQUEyQjs7SUFDM0Isd0NBQTJCOztJQUMzQixxQ0FBd0I7O0lBQ3hCLHFDQUFzQjs7SUFDdEIsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdla28tY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWtvLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZWtvLWNoZWNrYm94LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFa29DaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5hbWUgPSAnY2hlY2tib3gnO1xuICBASW5wdXQoKSBmb250U2l6ZSA9ICcxNnB4JztcbiAgQElucHV0KCkgY29sb3IgPSAnIzMzMyc7XG4gIEBJbnB1dCgpIHZhbHVlID0gbnVsbDtcbiAgQE91dHB1dCgpIGRhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc3Qgc3R5bGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vrb0NoZWNrYm94JykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSk7XG4gICAgLy8gc3R5bGVFbGVtLmlubmVySFRNTCA9ICcjZWtvQ2hlY2tib3g6YmVmb3JlIHtiYWNrZ3JvdW5kOiBibGFjazt9JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWtvQ2hlY2tib3gnKS5zdHlsZS5mb250U2l6ZSA9IHRoaXMuZm9udFNpemU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vrb0NoZWNrYm94Jykuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICB9XG4gIGVtaXREYXRhKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZTonLCBlLnRhcmdldC5jaGVja2VkICk7XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdGhpcy5kYXRhLmVtaXQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5lbWl0KHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICB2YWx1ZTogZS50YXJnZXQuY2hlY2tlZFxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxufVxuIl19