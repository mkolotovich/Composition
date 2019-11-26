'use strict';

const compose = (...fns) => {
  const events = {};
  const x = num => fns.reverse().reduce((v, f) => {
    try {
      if (typeof v === 'undefined') return undefined;
      return f(v);
    } catch (e) {
      const err = events['error'];
      if (err) err(e);
      return undefined;
    }
  }, num);
  x.on = (event, callback) => {
    events[event] = callback;
  };
  return x;
};

module.exports = { compose };
