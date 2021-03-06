"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _UpOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/UpOutlined"));

var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));

var _src = _interopRequireDefault(require("../vc-input-number/src"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var inputNumberProps = {
  prefixCls: _vueTypes.default.string,
  min: _vueTypes.default.number,
  max: _vueTypes.default.number,
  value: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  step: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]).def(1),
  defaultValue: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  disabled: _vueTypes.default.looseBool,
  size: _vueTypes.default.oneOf((0, _type.tuple)('large', 'small', 'default')),
  formatter: _vueTypes.default.func,
  parser: _vueTypes.default.func,
  decimalSeparator: _vueTypes.default.string,
  placeholder: _vueTypes.default.string,
  name: _vueTypes.default.string,
  id: _vueTypes.default.string,
  precision: _vueTypes.default.number,
  autofocus: _vueTypes.default.looseBool,
  onPressEnter: {
    type: Function
  },
  onChange: Function
};
var InputNumber = (0, _vue.defineComponent)({
  name: 'AInputNumber',
  inheritAttrs: false,
  props: inputNumberProps,
  setup: function setup(props) {
    var inputNumberRef = (0, _vue.ref)(null);

    var focus = function focus() {
      inputNumberRef.value.focus();
    };

    var blur = function blur() {
      inputNumberRef.value.blur();
    };

    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        if (process.env.NODE_ENV === 'test') {
          if (props.autofocus && !props.disabled) {
            focus();
          }
        }
      });
    });
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      inputNumberRef: inputNumberRef,
      focus: focus,
      blur: blur
    };
  },
  render: function render() {
    var _classNames;

    var _a = _extends(_extends({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs),
        customizePrefixCls = _a.prefixCls,
        size = _a.size,
        className = _a.class,
        others = __rest(_a, ["prefixCls", "size", "class"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input-number', customizePrefixCls);
    var inputNumberClass = (0, _classNames2.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames), className);
    var upIcon = (0, _vue.createVNode)(_UpOutlined.default, {
      "class": "".concat(prefixCls, "-handler-up-inner")
    }, null);
    var downIcon = (0, _vue.createVNode)(_DownOutlined.default, {
      "class": "".concat(prefixCls, "-handler-down-inner")
    }, null);

    var vcInputNumberProps = _extends(_extends({
      prefixCls: prefixCls,
      upHandler: upIcon,
      downHandler: downIcon
    }, others), {
      class: inputNumberClass
    });

    return (0, _vue.createVNode)(_src.default, _objectSpread(_objectSpread({}, vcInputNumberProps), {}, {
      "ref": "inputNumberRef"
    }), null);
  }
});

var _default = (0, _type.withInstall)(InputNumber);

exports.default = _default;