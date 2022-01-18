'use strict';

const generateKey = (length, possible) => {
  let res = '';
  for (let i = 0; i < length; i++) {
    const n = Math.floor(Math.random() * possible.length);
    res += possible[n];
  }
  return res;
};

module.exports = { generateKey };
