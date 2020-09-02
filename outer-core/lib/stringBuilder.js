"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StringBuilder = /*#__PURE__*/function () {
  function StringBuilder(sequence) {
    _classCallCheck(this, StringBuilder);

    this.arraySequence = [];
    if (sequence instanceof Array) this.arraySequence = _toConsumableArray(sequence);else if (sequence instanceof String) this.arraySequence.push(sequence);else this.arraySequence.push(sequence.toString());
  }

  _createClass(StringBuilder, [{
    key: "append",
    value: function append(str) {
      this.arraySequence.push(str);
      return this;
    }
  }, {
    key: "insert",
    value: function insert(index, str) {
      this.arraySequence.splice(index, 0, str);
      return this;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this.arraySequence = this.arraySequence.reverse();
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.arraySequence.length = 0;
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new StringBuilder(this.toString());
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.arraySequence.join("");
    }
  }]);

  return StringBuilder;
}();

exports["default"] = StringBuilder;