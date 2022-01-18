'use strict';

const methods = iface => {
  let res = []
  for (const prop of Object.values(iface)) {
    if (typeof prop === 'function') {
      res.push([prop.name, prop.lenght])
    } 
  }
  return res;
};

module.exports = { methods };
