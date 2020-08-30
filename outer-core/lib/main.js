"use strict";

var _objectExtensions = _interopRequireDefault(require("./prototype/objectExtensions"));

var _numberExtensions = _interopRequireDefault(require("./prototype/numberExtensions"));

var _stringExtensions = _interopRequireDefault(require("./prototype/stringExtensions"));

var _appContext = _interopRequireDefault(require("./appContext"));

var _dateTime = _interopRequireDefault(require("./dateTime"));

var _stringBuilder = _interopRequireDefault(require("./stringBuilder"));

var _stringTokenizer = _interopRequireDefault(require("./stringTokenizer"));

var _UUID = _interopRequireDefault(require("./UUID"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  
 */

/**
 * 
 */

/**
 * 
 */
(0, _objectExtensions["default"])();
(0, _numberExtensions["default"])();
(0, _stringExtensions["default"])();
/**
 * 
 */

var globalReference = typeof window !== 'undefined' ? window : global;
globalReference.AppContext = _appContext["default"];
globalReference.DateTime = _dateTime["default"];
globalReference.StringBuilder = _stringBuilder["default"];
globalReference.StringTokenizer = _stringTokenizer["default"];
globalReference.UUID = _UUID["default"];