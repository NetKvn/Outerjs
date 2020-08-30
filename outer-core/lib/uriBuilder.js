"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uriParameterFormat = _interopRequireDefault(require("./types/uriParameterFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function handlerParams(uriParameterFormat) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (uriParameterFormat) {
    case _uriParameterFormat["default"].GET:
      return handler_Get(params);

    case _uriParameterFormat["default"].JSON:
      return handler_Json(params);

    default:
      return "";
  }
}

function handler_Get(params) {
  var pairKeyValue = Object.entries(params);
  if (pairKeyValue.length == 0) return "";
  paramsFormat = pairKeyValue.map(function (key, value) {
    return "".concat(key, "=").concat(value);
  }).join('&');
  return "?".concat(encodeURI(paramsFormat));
}

function handler_Json(params) {
  return "?params=".concat(encodeURI(JSON.stringify(params)));
}

var UriBuilder = /*#__PURE__*/function () {
  function UriBuilder() {
    var hostname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localhost';
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, UriBuilder);

    _hostname.set(this, {
      writable: true,
      value: void 0
    });

    _path.set(this, {
      writable: true,
      value: void 0
    });

    _port.set(this, {
      writable: true,
      value: void 0
    });

    _params.set(this, {
      writable: true,
      value: {}
    });

    _secure.set(this, {
      writable: true,
      value: "http"
    });

    _classPrivateFieldSet(this, _hostname, hostname);

    _classPrivateFieldSet(this, _path, path);
  }

  _createClass(UriBuilder, [{
    key: "setPath",
    value: function setPath(path) {
      _classPrivateFieldSet(this, _path, path);

      return this;
    }
  }, {
    key: "setPort",
    value: function setPort(port) {
      _classPrivateFieldSet(this, _port, port);

      return this;
    }
  }, {
    key: "isHttps",
    value: function isHttps() {
      _classPrivateFieldSet(this, _secure, "https");

      return this;
    }
  }, {
    key: "addParam",
    value: function addParam(name) {
      for (var _len = arguments.length, value = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        value[_key - 1] = arguments[_key];
      }

      if (_classPrivateFieldGet(this, _params)[name] == undefined) {
        _classPrivateFieldSet(this, _params, new ([].concat(value))());
      } else {
        var _classPrivateFieldGet2;

        (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _params)).push.apply(_classPrivateFieldGet2, value);
      }

      return this;
    }
  }, {
    key: "builder",
    value: function builder(uriParameterFormat) {
      if (!_uriParameterFormat["default"].isDefined(uriParameterFormat)) {
        throw new Error("type not defined: ".concat(uriParameterFormat));
      }

      return "".concat(_classPrivateFieldGet(this, _secure), "://").concat(_classPrivateFieldGet(this, _hostname)).concat(_classPrivateFieldGet(this, _port) ? ':' + _classPrivateFieldGet(this, _port) : "", "/").concat(_classPrivateFieldGet(this, _path)).concat(handlerParams(uriParameterFormat, _classPrivateFieldGet(this, _params)));
    }
  }]);

  return UriBuilder;
}();

exports["default"] = UriBuilder;

var _hostname = new WeakMap();

var _path = new WeakMap();

var _port = new WeakMap();

var _params = new WeakMap();

var _secure = new WeakMap();