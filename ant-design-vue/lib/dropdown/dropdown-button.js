"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropdownButtonProps = void 0;

var _vue = require("vue");

var _button = _interopRequireDefault(require("../button"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _buttonTypes = _interopRequireDefault(require("../button/buttonTypes"));

var _buttonGroup = require("../button/button-group");

var _dropdown = _interopRequireDefault(require("./dropdown"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _getDropdownProps = _interopRequireDefault(require("./getDropdownProps"));

var _configProvider = require("../config-provider");

var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EllipsisOutlined"));

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

var ButtonTypesProps = (0, _buttonTypes.default)();
var DropdownProps = (0, _getDropdownProps.default)();
var ButtonGroup = _button.default.Group;

var DropdownButtonProps = _extends(_extends(_extends({}, _buttonGroup.ButtonGroupProps), DropdownProps), {
  type: _vueTypes.default.oneOf((0, _type.tuple)('primary', 'ghost', 'dashed', 'danger', 'default')).def('default'),
  size: _vueTypes.default.oneOf((0, _type.tuple)('small', 'large', 'default')).def('default'),
  htmlType: ButtonTypesProps.htmlType,
  href: _vueTypes.default.string,
  disabled: _vueTypes.default.looseBool,
  prefixCls: _vueTypes.default.string,
  placement: DropdownProps.placement.def('bottomRight'),
  icon: _vueTypes.default.any,
  title: _vueTypes.default.string,
  onClick: _vueTypes.default.func,
  onVisibleChange: _vueTypes.default.func,
  'onUpdate:visible': _vueTypes.default.func
});

exports.DropdownButtonProps = DropdownButtonProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'ADropdownButton',
  inheritAttrs: false,
  props: DropdownButtonProps,
  emits: ['click', 'visibleChange', 'update:visible'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      popupRef: null
    };
  },
  created: function created() {
    (0, _vue.provide)('savePopupRef', this.savePopupRef);
  },
  methods: {
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    },
    handleVisibleChange: function handleVisibleChange(val) {
      this.$emit('update:visible', val);
      this.$emit('visibleChange', val);
    }
  },
  render: function render() {
    var _this = this;

    var _a = _extends(_extends({}, this.$props), this.$attrs),
        type = _a.type,
        disabled = _a.disabled,
        onClick = _a.onClick,
        htmlType = _a.htmlType,
        className = _a.class,
        customizePrefixCls = _a.prefixCls,
        overlay = _a.overlay,
        trigger = _a.trigger,
        align = _a.align,
        visible = _a.visible,
        onVisibleChange = _a.onVisibleChange,
        placement = _a.placement,
        getPopupContainer = _a.getPopupContainer,
        href = _a.href,
        title = _a.title,
        restProps = __rest(_a, ["type", "disabled", "onClick", "htmlType", "class", "prefixCls", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "title"]);

    var icon = (0, _propsUtil.getComponent)(this, 'icon') || (0, _vue.createVNode)(_EllipsisOutlined.default, null, null);
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
    var dropdownProps = {
      align: align,
      disabled: disabled,
      trigger: disabled ? [] : trigger,
      placement: placement,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      onVisibleChange: this.handleVisibleChange
    };

    if ((0, _propsUtil.hasProp)(this, 'visible')) {
      dropdownProps.visible = visible;
    }

    var buttonGroupProps = _extends(_extends({}, restProps), {
      class: (0, _classNames.default)(prefixCls, className)
    });

    return (0, _vue.createVNode)(ButtonGroup, buttonGroupProps, {
      default: function _default() {
        return [(0, _vue.createVNode)(_button.default, {
          "type": type,
          "disabled": disabled,
          "onClick": _this.handleClick,
          "htmlType": htmlType,
          "href": href,
          "title": title
        }, {
          default: function _default() {
            return [(0, _propsUtil.getSlot)(_this)];
          }
        }), (0, _vue.createVNode)(_dropdown.default, _objectSpread(_objectSpread({}, dropdownProps), {}, {
          "overlay": (0, _propsUtil.getComponent)(_this, 'overlay')
        }), {
          default: function _default() {
            return [(0, _vue.createVNode)(_button.default, {
              "type": type
            }, {
              default: function _default() {
                return [icon];
              }
            })];
          }
        })];
      }
    });
  }
});

exports.default = _default2;