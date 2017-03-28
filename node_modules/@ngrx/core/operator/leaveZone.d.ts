import { NgZone } from '@angular/core';
import { Operator } from 'rxjs/Operator';
import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';
export declare function leaveZone<T>(zone: NgZone): Observable<T>;
export interface LeaveZoneSignature<T> {
    (zone: NgZone): Observable<T>;
}
export declare class LeaveZoneOperator<T> implements Operator<T, T> {
    private _zone;
    constructor(_zone: NgZone);
    call(subscriber: Subscriber<T>, source: any): any;
}
