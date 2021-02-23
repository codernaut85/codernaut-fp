

export const flatten = x => x.flat();



export const map = x => y => y.map(x);



export const pipe = (...fns) => (x) => fns.reduce((acc, curr) => curr(acc), x);



export const reverse = x => x.reverse();



export const self = x => x;



export const sort = x => x.sort();



export const unique = x => Array.from(new Set(x));






export default {
    flatten,
    map,
    pipe,
    reverse,
    self,
    sort,
    unique,
};
