'use strict';

const pipe = (...fns) => {
  fns.map(x => {
    if (typeof x !== 'function') throw new Error('It is not function');
  });
  return x => fns.reduce((v, f) => f(v), x);
};

module.exports = { pipe };
