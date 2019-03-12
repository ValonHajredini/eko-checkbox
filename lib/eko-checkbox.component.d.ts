import { OnInit, EventEmitter } from '@angular/core';
export declare class EkoCheckboxComponent implements OnInit {
    name: string;
    fontSize: string;
    color: string;
    value: any;
    data: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    emitData(e: any): void;
}
