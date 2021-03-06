"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _warning = _interopRequireDefault(require("../_util/warning"));

var _Base = _interopRequireWildcard(require("./Base"));

var _omit = _interopRequireDefault(require("omit.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Text = function Text(props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;
  var ellipsis = props.ellipsis;
  (0, _warning.default)(_typeof(ellipsis) !== 'object' || !ellipsis || !('expandable' in ellipsis) && !('rows' in ellipsis), 'Typography.Text', '`ellipsis` do not support `expandable` or `rows` props.');

  var textProps = _extends(_extends(_extends({}, props), {
    ellipsis: ellipsis && _typeof(ellipsis) === 'object' ? (0, _omit.default)(ellipsis, ['expandable', 'rows']) : ellipsis,
    component: 'span'
  }), attrs);

  return (0, _vue.createVNode)(_Base.default, textProps, slots);
};

Text.displayName = 'ATypographyText';
Text.inheritAttrs = false;
Text.props = (0, _omit.default)((0, _Base.baseProps)(), ['component']);
var _default = Text;
exports.default = _default;