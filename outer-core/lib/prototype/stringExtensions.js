"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = applyStringExtensions;

var _lodash = require("lodash");

function applyStringExtensions() {
  /**
   * Converts string to camel case.
   * @param {String} str 
   */
  String.toCamelCase = function (str) {
    return (0, _lodash.camelCase)(str);
  };
  /**
   * Converts string to pascal case.
   * @param {String} str 
   */


  String.toPascalCase = function (str) {
    return "".concat(str).replace(new RegExp(/[-_]+/, 'g'), ' ').replace(new RegExp(/[^\w\s]/, 'g'), '').replace(new RegExp(/\s+(.)(\w+)/, 'g'), function ($1, $2, $3) {
      return "".concat($2.toUpperCase() + $3.toLowerCase());
    }).replace(new RegExp(/\s/, 'g'), '').replace(new RegExp(/\w/), function (s) {
      return s.toUpperCase();
    });
  };
  /**
   * Check if value is empty
   * @param {String} str 
   */


  String.isEmpty = function (str) {
    return str === undefined || str === "";
  };
  /**
   * Check if value is null or empty
   * @param {String} str 
   */


  String.isNullOrEmpty = function (str) {
    return str === null || str === undefined || str === "";
  };
  /**
   * Check if value is null or whiteSpace
   * @param {String} str 
   */


  String.isNullOrWhiteSpace = function (str) {
    return str === null || str === undefined || /^\s*$/.test(str);
  };
  /**
   * Check if value is Lower Case
   * @param {*} str 
   */


  String.isLowerCase = function (str) {
    return str != undefined && str !== "" && str === (str === null || str === void 0 ? void 0 : str.toLowerCase());
  };
  /**
   * Check if value is Upper Case
   * @param {String} str 
   */


  String.isUpperCase = function (str) {
    return str != undefined && str !== "" && str === (str === null || str === void 0 ? void 0 : str.toUpperCase());
  };
  /**
   * Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
   * @param {String} str 
   */


  String.escape = function (str) {
    return (0, _lodash.escape)(str);
  };
  /**
   * The inverse of function espace; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.
   * @param {*} str 
   */


  String.unescape = function (str) {
    return (0, _lodash.unescape)(str);
  };
  /**
   * Repeats the given string n times.
   * @param {String} str 
   * @param {Integer} number 
   */


  String.repeat = function (str) {
    var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return (0, _lodash.repeat)(str, number);
  };
}