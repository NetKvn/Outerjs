"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/**
 * return true if obj and otherObj is equals
 * @param {*} object 
 * @param {*} other 
 */
function _default(obj, otherObj) {
  return JSON.stringify(obj) === JSON.stringify(otherObj);
}