
export const curry = func => {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
};

export const pipe = (...fns) => (x) => fns.reduce((acc, curr) => curr(acc), x);

export const allPass = curry((x, y) => y.every(x));

export const anyPass = curry((x, y) => y.some(x));

export const add = curry((x, y) => x + y);

export const divide = curry((x, y) => y / x);

export const flatten = x => x.flat();

export const map = x => y => y.map(x);

export const multiply = curry((x, y) => x * y);

export const reverse = x => x.reverse();

export const self = x => x;

export const sort = x => x.sort();

export const subtract = curry((x, y) => y - x);

export const sum = x => x.reduce(add, 0);

export const unique = x => Array.from(new Set(x));

export default {
    add,
    flatten,
    map,
    multiply,
    pipe,
    reverse,
    self,
    sort,
    subtract,
    sum,
    unique,
};
