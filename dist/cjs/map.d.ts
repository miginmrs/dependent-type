import type { DepConstaint, AppX } from './types';
export declare const conf: {
    Promise: {
        all<T>(values: readonly (T | PromiseLike<T>)[]): PromiseLike<T[]>;
        resolve<T>(value: T | PromiseLike<T>): PromiseLike<T>;
    };
};
declare type Pair = 0 | 1;
export declare const depMap: <dom extends string | number | symbol, cim extends Record<Pair, [any, any]>, k extends DepConstaint<Pair, dom, cim>>(arr: cim[0][1][], p: <X extends dom>(a: AppX<0, cim, k, X>, i: number) => AppX<1, cim, k, X>) => cim[1][1][] & { [X_1 in dom]: AppX<1, cim, k, X_1>; };
export declare const asyncDepMap: <dom extends string | number | symbol, cim extends Record<Pair, [any, any]>, k extends DepConstaint<Pair, dom, cim>>(arr: cim[0][1][], p: <X extends dom>(a: AppX<0, cim, k, X>, i: number) => AppX<1, cim, k, X> | PromiseLike<AppX<1, cim, k, X>>, Promise?: {
    all<T>(values: readonly (T | PromiseLike<T>)[]): PromiseLike<T[]>;
    resolve<T_1>(value: T_1 | PromiseLike<T_1>): PromiseLike<T_1>;
}) => PromiseLike<cim[1][1][] & { [X_1 in dom]: AppX<1, cim, k, X_1>; }>;
export {};
