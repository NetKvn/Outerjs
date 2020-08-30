"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/**
 * Returns true if the keys and values in properties are contained in object. 
 * @param {*} object 
 * @param {*} properties 
 */
function _default(object, properties) {
  var keys = Object.keys(properties);
  if (keys.length == 0) return false;

  for (var i = 0; i < keys.length; i++) {
    console.log(properties[keys[i]]);
    console.log(object[keys[i]]);
    if (properties[keys[i]] !== object[keys[i]]) return false;
  }

  return true;
}