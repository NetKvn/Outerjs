"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Events = /*#__PURE__*/function () {
  function Events() {
    _classCallCheck(this, Events);

    this.listeners = new Map();
  }

  _createClass(Events, [{
    key: "addListener",
    value: function addListener(name, callback) {
      this.listeners.set(name, callback);
    }
  }, {
    key: "getListener",
    value: function getListener(name) {
      return this.listeners.get(name);
    }
  }]);

  return Events;
}();

var Services = /*#__PURE__*/function () {
  function Services() {
    _classCallCheck(this, Services);

    this.Containers = new Map();
  }

  _createClass(Services, [{
    key: "publish",
    value: function publish(name) {
      var api = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.Containers.set(name, api);
    }
  }, {
    key: "getService",
    value: function getService(name) {
      return this.Containers.get(name);
    }
  }, {
    key: "getServices",
    value: function getServices() {
      for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
        names[_key] = arguments[_key];
      }

      var temp_services = {};
      this.Containers.forEach(function (container, key) {
        if (names.some(function (name) {
          return name === key;
        })) temp_services[key] = container;
      });
      return temp_services;
    }
  }, {
    key: "size",
    value: function size() {
      return this.Containers.size;
    }
  }]);

  return Services;
}();

var attributes = {};
var services = new Services();
var events = new Events();
/**
 * This module represents a centralized context, which consists of a set of name to object/events/services bindings.
 * AppContext provides: 
 *      The ability providing configuration information to the application. It is read-write at run time.
 *      The ability to publish events / services.
 *      The ability to resolve services names to registered events.
 *
 * A Context instance is not guaranteed to be synchronized against concurrent access by multiple methods async.
 */

var _default = {
  setAttr: function setAttr(name, value) {
    attributes[name] = value;
  },
  getAttr: function getAttr(name) {
    return attributes[name];
  },
  on: function on(name, callback) {
    events.addListener(name, callback);
  },
  emit: function emit(name) {
    var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var callback = events.getListener(name);

    if (callback) {
      for (var _len2 = arguments.length, nameServices = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        nameServices[_key2 - 2] = arguments[_key2];
      }

      if (nameServices.length !== 0) callback(services.getServices.apply(services, nameServices), properties);else callback(properties);
    }
  },
  Services: services
};
exports["default"] = _default;