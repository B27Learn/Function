'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const bitShift = (acc, num) => (acc << 8) + +num;
  return ip.split('.').reduce(bitShift, 0);
};

module.exports = { ipToInt };
