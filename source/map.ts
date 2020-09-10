import { keytype, DepConstaint, AppX } from '.';

export const conf: {
  Promise: {
    all<T>(values: readonly (T | PromiseLike<T>)[]): PromiseLike<T[]>,
    resolve<T>(value: T | PromiseLike<T>): PromiseLike<T>;
  }
} = { Promise }

type Pair = 0 | 1;
export const depMap = <dom extends keytype, cim extends Record<Pair, [any, any]>, k extends DepConstaint<Pair, dom, cim>>(arr: cim[0][1][], p: <X extends dom>(a: AppX<0, cim, k, X>, i: number) => AppX<1, cim, k, X>) => {
  const r: cim[1][1][] = [];
  arr.forEach((v, i) => r[i] = p(v, i));
  return r as cim[1][1][] & { [X in dom]: AppX<1, cim, k, X> };
};


export const asyncDepMap = <dom extends keytype, cim extends Record<Pair, [any, any]>, k extends DepConstaint<Pair, dom, cim>>(
  arr: cim[0][1][],
  p: <X extends dom>(a: AppX<0, cim, k, X>, i: number) => AppX<1, cim, k, X> | PromiseLike<AppX<1, cim, k, X>>,
  Promise = conf.Promise,
) => {
  const r: cim[1][1][] = [];
  return Promise.all(arr.map((v, i) => Promise.resolve(p(v, i)).then(x => r[i] = x))).then(() => r as cim[1][1][] & { [X in dom]: AppX<1, cim, k, X> });
};
