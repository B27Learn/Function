'use strict';

const random = (min, max) => {
  const low = max ? min : 0;
  const high = max ? max : min;

  return Math.floor((Math.random() * (high - low)) + low);
};

module.exports = { random };
