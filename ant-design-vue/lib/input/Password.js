"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _Input = _interopRequireDefault(require("./Input"));

var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EyeOutlined"));

var _EyeInvisibleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EyeInvisibleOutlined"));

var _inputProps = _interopRequireDefault(require("./inputProps"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

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

var ActionMap = {
  click: 'onClick',
  hover: 'onMouseover'
};

var _default = (0, _vue.defineComponent)({
  name: 'AInputPassword',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: _extends(_extends({}, _inputProps.default), {
    prefixCls: _vueTypes.default.string.def('ant-input-password'),
    inputPrefixCls: _vueTypes.default.string.def('ant-input'),
    action: _vueTypes.default.string.def('click'),
    visibilityToggle: _vueTypes.default.looseBool.def(true),
    iconRender: _vueTypes.default.func.def(function (visible) {
      return visible ? (0, _vue.createVNode)(_EyeOutlined.default, null, null) : (0, _vue.createVNode)(_EyeInvisibleOutlined.default, null, null);
    })
  }),
  setup: function setup() {
    return {
      input: null
    };
  },
  data: function data() {
    return {
      visible: false
    };
  },
  methods: {
    saveInput: function saveInput(node) {
      this.input = node;
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    onVisibleChange: function onVisibleChange() {
      if (this.disabled) {
        return;
      }

      this.setState({
        visible: !this.visible
      });
    },
    getIcon: function getIcon() {
      var _iconProps;

      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          action = _this$$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconRender = this.$slots.iconRender || this.$props.iconRender;
      var icon = iconRender(this.visible);
      var iconProps = (_iconProps = {}, _defineProperty(_iconProps, iconTrigger, this.onVisibleChange), _defineProperty(_iconProps, "onMousedown", function onMousedown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), _defineProperty(_iconProps, "onMouseup", function onMouseup(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/pull/23633/files
        e.preventDefault();
      }), _defineProperty(_iconProps, "class", "".concat(prefixCls, "-icon")), _defineProperty(_iconProps, "key", 'passwordIcon'), _iconProps);
      return (0, _vnode.cloneElement)(icon, iconProps);
    }
  },
  render: function render() {
    var _a = (0, _propsUtil.getOptionProps)(this),
        prefixCls = _a.prefixCls,
        inputPrefixCls = _a.inputPrefixCls,
        size = _a.size,
        suffix = _a.suffix,
        action = _a.action,
        visibilityToggle = _a.visibilityToggle,
        iconRender = _a.iconRender,
        restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "size", "suffix", "action", "visibilityToggle", "iconRender"]);

    var className = this.$attrs.class;
    var suffixIcon = visibilityToggle && this.getIcon();
    var inputClassName = (0, _classNames2.default)(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));

    var inputProps = _extends(_extends(_extends(_extends({}, restProps), {
      prefixCls: inputPrefixCls,
      size: size,
      suffix: suffixIcon,
      prefix: (0, _propsUtil.getComponent)(this, 'prefix'),
      addonAfter: (0, _propsUtil.getComponent)(this, 'addonAfter'),
      addonBefore: (0, _propsUtil.getComponent)(this, 'addonBefore')
    }), this.$attrs), {
      type: this.visible ? 'text' : 'password',
      class: inputClassName,
      ref: 'input'
    });

    return (0, _vue.createVNode)(_Input.default, _objectSpread(_objectSpread({}, inputProps), {}, {
      "ref": this.saveInput
    }), null);
  }
});

exports.default = _default;