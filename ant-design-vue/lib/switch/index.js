"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SwitchSizes = void 0;

var _vue = require("vue");

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));

var _wave = _interopRequireDefault(require("../_util/wave"));

var _configProvider = require("../config-provider");

var _warning = _interopRequireDefault(require("../_util/warning"));

var _type = require("../_util/type");

var _propsUtil = require("../_util/props-util");

var _omit = _interopRequireDefault(require("omit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SwitchSizes = (0, _type.tuple)('small', 'default', 'large');
exports.SwitchSizes = SwitchSizes;
var switchProps = {
  prefixCls: _vueTypes.default.string,
  size: _vueTypes.default.oneOf(SwitchSizes),
  disabled: _vueTypes.default.looseBool,
  checkedChildren: _vueTypes.default.any,
  unCheckedChildren: _vueTypes.default.any,
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  autofocus: _vueTypes.default.looseBool,
  loading: _vueTypes.default.looseBool,
  checked: _vueTypes.default.looseBool,
  onChange: _vueTypes.default.func,
  onClick: _vueTypes.default.func,
  onKeydown: _vueTypes.default.func,
  onMouseup: _vueTypes.default.func,
  'onUpdate:checked': _vueTypes.default.func
};
var Switch = (0, _vue.defineComponent)({
  name: 'ASwitch',
  __ANT_SWITCH: true,
  inheritAttrs: false,
  props: switchProps,
  emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        expose = _ref.expose,
        emit = _ref.emit;
    (0, _vue.onBeforeMount)(function () {
      (0, _warning.default)(!('defaultChecked' in attrs), 'Switch', "'defaultChecked' is deprecated, please use 'v-model:checked'");
      (0, _warning.default)(!('value' in attrs), 'Switch', '`value` is not validate prop, do you mean `checked`?');
    });
    var checked = (0, _vue.ref)(props.checked !== undefined ? !!props.checked : !!attrs.defaultChecked);
    (0, _vue.watch)(function () {
      return props.checked;
    }, function () {
      checked.value = !!props.checked;
    });
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    var getPrefixCls = configProvider.getPrefixCls;
    var refSwitchNode = (0, _vue.ref)();

    var focus = function focus() {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.focus();
    };

    var blur = function blur() {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
    };

    expose({
      focus: focus,
      blur: blur
    });
    var prefixCls = (0, _vue.computed)(function () {
      return getPrefixCls('switch', props.prefixCls);
    });
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        if (props.autofocus && !props.disabled) {
          refSwitchNode.value.focus();
        }
      });
    });

    var setChecked = function setChecked(check, e) {
      if (props.disabled) {
        return;
      }

      if (props.checked === undefined) {
        checked.value = check;
      }

      emit('update:checked', check);
      emit('change', check, e);
    };

    var handleClick = function handleClick(e) {
      focus();
      var newChecked = !checked.value;
      setChecked(newChecked, e);
      emit('click', newChecked, e);
    };

    var handleKeyDown = function handleKeyDown(e) {
      if (e.keyCode === _KeyCode.default.LEFT) {
        setChecked(false, e);
      } else if (e.keyCode === _KeyCode.default.RIGHT) {
        setChecked(true, e);
      }

      emit('keydown', e);
    };

    var handleMouseUp = function handleMouseUp(e) {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
      emit('mouseup', e);
    };

    return function () {
      var _ref2;

      return (0, _vue.createVNode)(_wave.default, {
        "insertExtraNode": true
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("button", _objectSpread(_objectSpread(_objectSpread({}, (0, _omit.default)(props, ['prefixCls', 'checkedChildren', 'unCheckedChildren', 'checked', 'autofocus', 'defaultChecked'])), attrs), {}, {
            "onKeydown": handleKeyDown,
            "onClick": handleClick,
            "onMouseup": handleMouseUp,
            "type": "button",
            "role": "switch",
            "aria-checked": checked.value,
            "disabled": props.disabled || props.loading,
            "class": (_ref2 = {}, _defineProperty(_ref2, attrs.class, attrs.class), _defineProperty(_ref2, prefixCls.value, true), _defineProperty(_ref2, "".concat(prefixCls.value, "-small"), props.size === 'small'), _defineProperty(_ref2, "".concat(prefixCls.value, "-loading"), props.loading), _defineProperty(_ref2, "".concat(prefixCls.value, "-checked"), checked.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-disabled"), props.disabled), _ref2),
            "ref": refSwitchNode
          }), [props.loading ? (0, _vue.createVNode)(_LoadingOutlined.default, {
            "class": "".concat(prefixCls.value, "-loading-icon")
          }, null) : null, (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls.value, "-inner")
          }, [checked.value ? (0, _propsUtil.getPropsSlot)(slots, props, 'checkedChildren') : (0, _propsUtil.getPropsSlot)(slots, props, 'unCheckedChildren')])])];
        }
      });
    };
  }
});

var _default2 = (0, _type.withInstall)(Switch);

exports.default = _default2;