export const conf = { Promise };
export const depMap = (arr, p) => {
    const r = [];
    arr.forEach((v, i) => r[i] = p(v, i));
    return r;
};
export const asyncDepMap = (arr, p, Promise = conf.Promise) => {
    const r = [];
    return Promise.all(arr.map((v, i) => Promise.resolve(p(v, i)).then(x => r[i] = x))).then(() => r);
};
//# sourceMappingURL=map.js.map