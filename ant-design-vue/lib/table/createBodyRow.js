"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBodyRow;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _omit = _interopRequireDefault(require("omit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BodyRowProps = {
  store: _vueTypes.default.object,
  rowKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  prefixCls: _vueTypes.default.string
};

function createBodyRow() {
  var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';
  var BodyRow = (0, _vue.defineComponent)({
    name: 'BodyRow',
    inheritAttrs: false,
    props: BodyRowProps,
    setup: function setup(props) {
      return {
        selected: (0, _vue.computed)(function () {
          var _a;

          return ((_a = props.store) === null || _a === void 0 ? void 0 : _a.selectedRowKeys.indexOf(props.rowKey)) >= 0;
        })
      };
    },
    render: function render() {
      var _className,
          _this = this;

      var rowProps = (0, _omit.default)(_extends(_extends({}, this.$props), this.$attrs), ['prefixCls', 'rowKey', 'store', 'class']);
      var className = (_className = {}, _defineProperty(_className, "".concat(this.prefixCls, "-row-selected"), this.selected), _defineProperty(_className, this.$attrs.class, !!this.$attrs.class), _className);
      return (0, _vue.createVNode)(Component, _objectSpread({
        "class": className
      }, rowProps), {
        default: function _default() {
          return [(0, _propsUtil.getSlot)(_this)];
        }
      });
    }
  });
  return BodyRow;
}