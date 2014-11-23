"use strict";

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

require("6to5/polyfill");var Promise = require("lodash-next").Promise;var __DEV__ = (process.env.NODE_ENV !== "production");var __PROD__ = !__DEV__;var __BROWSER__ = (typeof window === "object");var __NODE__ = !__BROWSER__;module.exports = function (R) {
  function Plugin(opts) {
    if (opts === undefined) opts = {};
    var _Cordova = (function (R) {
      var _Cordova = function _Cordova() {
        R.App.Plugin.apply(this, arguments);
      };

      _extends(_Cordova, R.App.Plugin);

      return _Cordova;
    })(R);

    return _Cordova;
  }

  return Plugin;
};