"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _ClearableLabeledInput = _interopRequireDefault(require("./ClearableLabeledInput"));

var _ResizableTextArea = _interopRequireDefault(require("./ResizableTextArea"));

var _inputProps = _interopRequireDefault(require("./inputProps"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _Input = require("./Input");

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextAreaProps = _extends(_extends({}, _inputProps.default), {
  autosize: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([Object, Boolean])),
  autoSize: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([Object, Boolean])),
  showCount: _vueTypes.default.looseBool,
  onCompositionstart: _vueTypes.default.func,
  onCompositionend: _vueTypes.default.func
});

var _default = (0, _vue.defineComponent)({
  name: 'ATextarea',
  inheritAttrs: false,
  props: _extends({}, TextAreaProps),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      resizableTextArea: null,
      clearableInput: null
    };
  },
  data: function data() {
    var value = typeof this.value === 'undefined' ? this.defaultValue : this.value;
    return {
      stateValue: typeof value === 'undefined' ? '' : value
    };
  },
  watch: {
    value: function value(val) {
      this.stateValue = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    (0, _vue.nextTick)(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.focus();
        }
      }
    });
  },
  methods: {
    setValue: function setValue(value, callback) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.stateValue = value;
      } else {
        this.$forceUpdate();
      }

      (0, _vue.nextTick)(function () {
        callback && callback();
      });
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.$emit('pressEnter', e);
      }

      this.$emit('keydown', e);
    },
    triggerChange: function triggerChange(e) {
      this.$emit('update:value', e.target.value);
      this.$emit('change', e);
      this.$emit('input', e);
    },
    handleChange: function handleChange(e) {
      var _this2 = this;

      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing,
          isComposing = _e$target.isComposing;
      if ((isComposing || composing) && this.lazy || this.stateValue === value) return;
      this.setValue(e.target.value, function () {
        _this2.resizableTextArea.resizeTextarea();
      });
      (0, _Input.resolveOnChange)(this.resizableTextArea.textArea, e, this.triggerChange);
    },
    focus: function focus() {
      this.resizableTextArea.textArea.focus();
    },
    blur: function blur() {
      this.resizableTextArea.textArea.blur();
    },
    saveTextArea: function saveTextArea(resizableTextArea) {
      this.resizableTextArea = resizableTextArea;
    },
    saveClearableInput: function saveClearableInput(clearableInput) {
      this.clearableInput = clearableInput;
    },
    handleReset: function handleReset(e) {
      var _this3 = this;

      this.setValue('', function () {
        _this3.resizableTextArea.renderTextArea();

        _this3.focus();
      });
      (0, _Input.resolveOnChange)(this.resizableTextArea.textArea, e, this.triggerChange);
    },
    renderTextArea: function renderTextArea(prefixCls) {
      var props = (0, _propsUtil.getOptionProps)(this);
      var _this$$attrs = this.$attrs,
          style = _this$$attrs.style,
          customClass = _this$$attrs.class;

      var resizeProps = _extends(_extends(_extends({}, props), this.$attrs), {
        style: !props.showCount && style,
        class: !props.showCount && customClass,
        showCount: null,
        prefixCls: prefixCls,
        onInput: this.handleChange,
        onChange: this.handleChange,
        onKeydown: this.handleKeyDown
      });

      return (0, _vue.createVNode)(_ResizableTextArea.default, _objectSpread(_objectSpread({}, resizeProps), {}, {
        "ref": this.saveTextArea
      }), null);
    }
  },
  render: function render() {
    var stateValue = this.stateValue,
        customizePrefixCls = this.prefixCls,
        maxlength = this.maxlength,
        showCount = this.showCount;
    var _this$$attrs2 = this.$attrs,
        style = _this$$attrs2.style,
        customClass = _this$$attrs2.class;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input', customizePrefixCls);
    var value = (0, _Input.fixControlledValue)(stateValue); // Max length value

    var hasMaxlength = Number(maxlength) > 0;
    value = hasMaxlength ? value.slice(0, maxlength) : value;

    var props = _extends(_extends(_extends({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs), {
      prefixCls: prefixCls,
      inputType: 'text',
      element: this.renderTextArea(prefixCls),
      handleReset: this.handleReset
    });

    var textareaNode = (0, _vue.createVNode)(_ClearableLabeledInput.default, _objectSpread(_objectSpread({}, props), {}, {
      "value": value,
      "ref": this.saveClearableInput
    }), null);

    if (showCount) {
      var valueLength = _toConsumableArray(value).length;

      var dataCount = "".concat(valueLength).concat(hasMaxlength ? " / ".concat(maxlength) : '');

      var _textareaNode = function () {
        return textareaNode;
      }();

      textareaNode = (0, _vue.createVNode)("div", {
        "class": (0, _classNames.default)("".concat(prefixCls, "-textarea"), "".concat(prefixCls, "-textarea-show-count"), customClass),
        "style": style,
        "data-count": dataCount
      }, [textareaNode]);
    }

    return textareaNode;
  }
});

exports.default = _default;