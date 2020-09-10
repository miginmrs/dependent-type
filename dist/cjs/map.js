"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncDepMap = exports.depMap = exports.conf = void 0;
exports.conf = { Promise };
exports.depMap = (arr, p) => {
    const r = [];
    arr.forEach((v, i) => r[i] = p(v, i));
    return r;
};
exports.asyncDepMap = (arr, p, Promise = exports.conf.Promise) => {
    const r = [];
    return Promise.all(arr.map((v, i) => Promise.resolve(p(v, i)).then(x => r[i] = x))).then(() => r);
};
//# sourceMappingURL=map.js.map