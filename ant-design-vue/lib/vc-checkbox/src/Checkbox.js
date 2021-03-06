"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _vueTypes = _interopRequireWildcard(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var _default = (0, _vue.defineComponent)({
  name: 'Checkbox',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes.default.string,
    name: _vueTypes.default.string,
    id: _vueTypes.default.string,
    type: _vueTypes.default.string,
    defaultChecked: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.looseBool])),
    checked: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.looseBool])),
    disabled: _vueTypes.default.looseBool,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    // onChange: PropTypes.func,
    // onClick: PropTypes.func,
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    readonly: _vueTypes.default.looseBool,
    autofocus: _vueTypes.default.looseBool,
    value: _vueTypes.default.any
  }, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  data: function data() {
    var checked = (0, _propsUtil.hasProp)(this, 'checked') ? this.checked : this.defaultChecked;
    return {
      sChecked: checked
    };
  },
  watch: {
    checked: function checked(val) {
      this.sChecked = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    (0, _vue.nextTick)(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.$refs.input && _this.$refs.input.focus();
        }
      }
    });
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    handleChange: function handleChange(e) {
      var props = (0, _propsUtil.getOptionProps)(this);

      if (props.disabled) {
        return;
      }

      if (!('checked' in props)) {
        this.sChecked = e.target.checked;
      }

      e.shiftKey = this.eventShiftKey;
      var eventObj = {
        target: _extends(_extends({}, props), {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      }; // fix https://github.com/vueComponent/ant-design-vue/issues/3047
      // ?????????????????????????????????

      if ('checked' in props) {
        this.$refs.input.checked = props.checked;
      }

      this.__emit('change', eventObj);

      this.eventShiftKey = false;
    },
    onClick: function onClick(e) {
      this.__emit('click', e); // onChange???????????????shiftKey?????????onClick hack


      this.eventShiftKey = e.shiftKey;
    }
  },
  render: function render() {
    var _classNames;

    var _a = (0, _propsUtil.getOptionProps)(this),
        prefixCls = _a.prefixCls,
        name = _a.name,
        id = _a.id,
        type = _a.type,
        disabled = _a.disabled,
        readonly = _a.readonly,
        tabindex = _a.tabindex,
        autofocus = _a.autofocus,
        value = _a.value,
        others = __rest(_a, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value"]);

    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        onFocus = _this$$attrs.onFocus,
        onBlur = _this$$attrs.onBlur;
    var globalProps = Object.keys(_extends(_extends({}, others), this.$attrs)).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }

      return prev;
    }, {});
    var sChecked = this.sChecked;
    var classString = (0, _classNames2.default)(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), sChecked), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));

    var inputProps = _extends(_extends({
      name: name,
      id: id,
      type: type,
      readonly: readonly,
      disabled: disabled,
      tabindex: tabindex,
      class: "".concat(prefixCls, "-input"),
      checked: !!sChecked,
      autofocus: autofocus,
      value: value
    }, globalProps), {
      onChange: this.handleChange,
      onClick: this.onClick,
      onFocus: onFocus,
      onBlur: onBlur
    });

    return (0, _vue.createVNode)("span", {
      "class": classString
    }, [(0, _vue.createVNode)("input", _objectSpread({
      "ref": "input"
    }, inputProps), null), (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-inner")
    }, null)]);
  }
});

exports.default = _default;