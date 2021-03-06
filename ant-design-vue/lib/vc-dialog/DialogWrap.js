"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _IDialogPropTypes = _interopRequireDefault(require("./IDialogPropTypes"));

var _PortalWrapper = _interopRequireDefault(require("../_util/PortalWrapper"));

var _propsUtil = require("../_util/props-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IDialogPropTypes = (0, _IDialogPropTypes.default)();
var DialogWrap = (0, _vue.defineComponent)({
  inheritAttrs: false,
  props: _extends(_extends({}, IDialogPropTypes), {
    visible: IDialogPropTypes.visible.def(false)
  }),
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        visible = _this$$props.visible,
        getContainer = _this$$props.getContainer,
        forceRender = _this$$props.forceRender;

    var dialogProps = _extends(_extends(_extends({}, this.$props), this.$attrs), {
      ref: '_component',
      key: 'dialog'
    }); // ??????????????? dom ??????


    if (getContainer === false) {
      return (0, _vue.createVNode)(_Dialog.default, _objectSpread(_objectSpread({}, dialogProps), {}, {
        "getOpenCount": function getOpenCount() {
          return 2;
        }
      }), {
        default: function _default() {
          return [(0, _propsUtil.getSlot)(_this)];
        }
      });
    }

    return (0, _vue.createVNode)(_PortalWrapper.default, {
      "visible": visible,
      "forceRender": forceRender,
      "getContainer": getContainer,
      "children": function children(childProps) {
        dialogProps = _extends(_extends({}, dialogProps), childProps);
        return (0, _vue.createVNode)(_Dialog.default, dialogProps, {
          default: function _default() {
            return [(0, _propsUtil.getSlot)(_this)];
          }
        });
      }
    }, null);
  }
});
var _default2 = DialogWrap;
exports.default = _default2;