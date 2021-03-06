"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _Modal = _interopRequireWildcard(require("./Modal"));

var _confirm = _interopRequireDefault(require("./confirm"));

var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleOutlined"));

var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleOutlined"));

var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleOutlined"));

var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var info = function info(props) {
  var config = _extends({
    type: 'info',
    icon: (0, _vue.createVNode)(_InfoCircleOutlined.default, null, null),
    okCancel: false
  }, props);

  return (0, _confirm.default)(config);
};

var success = function success(props) {
  var config = _extends({
    type: 'success',
    icon: (0, _vue.createVNode)(_CheckCircleOutlined.default, null, null),
    okCancel: false
  }, props);

  return (0, _confirm.default)(config);
};

var error = function error(props) {
  var config = _extends({
    type: 'error',
    icon: (0, _vue.createVNode)(_CloseCircleOutlined.default, null, null),
    okCancel: false
  }, props);

  return (0, _confirm.default)(config);
};

var warning = function warning(props) {
  var config = _extends({
    type: 'warning',
    icon: (0, _vue.createVNode)(_ExclamationCircleOutlined.default, null, null),
    okCancel: false
  }, props);

  return (0, _confirm.default)(config);
};

var warn = warning;

var confirm = function confirmFn(props) {
  var config = _extends({
    type: 'confirm',
    okCancel: true
  }, props);

  return (0, _confirm.default)(config);
};

_Modal.default.info = info;
_Modal.default.success = success;
_Modal.default.error = error;
_Modal.default.warning = warning;
_Modal.default.warn = warn;
_Modal.default.confirm = confirm;

_Modal.default.destroyAll = function destroyAllFn() {
  while (_Modal.destroyFns.length) {
    var close = _Modal.destroyFns.pop();

    if (close) {
      close();
    }
  }
};
/* istanbul ignore next */


_Modal.default.install = function (app) {
  app.component(_Modal.default.name, _Modal.default);
  return app;
};

var _default = _Modal.default;
exports.default = _default;