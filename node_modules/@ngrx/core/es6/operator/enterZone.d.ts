import { NgZone } from '@angular/core';
import { Operator } from 'rxjs/Operator';
import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';
export interface EnterZoneSignature<T> {
    (zone: NgZone): Observable<T>;
}
export declare function enterZone<T>(zone: NgZone): Observable<T>;
export declare class EnterZoneOperator<T> implements Operator<T, T> {
    private _zone;
    constructor(_zone: NgZone);
    call(subscriber: Subscriber<T>, source: any): any;
}
