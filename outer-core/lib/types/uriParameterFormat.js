"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var UriParameterFormat = {
  GET: "Get",
  JSON: "Json",
  getValues: function getValues() {
    return [this.GET, this.JSON];
  },
  isDefined: function isDefined(uriFormat) {
    switch (uriFormat) {
      case UriFormat.GET:
      case UriFormat.JSON:
        return true;

      default:
        return false;
    }
  }
};
var _default = UriParameterFormat;
exports["default"] = _default;