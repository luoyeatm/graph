import { createVNode as _createVNode } from "vue";

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

import { defineComponent, inject, nextTick } from 'vue';
import ClearableLabeledInput from './ClearableLabeledInput';
import ResizableTextArea from './ResizableTextArea';
import inputProps from './inputProps';
import { hasProp, getOptionProps } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import { fixControlledValue, resolveOnChange } from './Input';
import classNames from '../_util/classNames';
import PropTypes, { withUndefined } from '../_util/vue-types';

var TextAreaProps = _extends(_extends({}, inputProps), {
  autosize: withUndefined(PropTypes.oneOfType([Object, Boolean])),
  autoSize: withUndefined(PropTypes.oneOfType([Object, Boolean])),
  showCount: PropTypes.looseBool,
  onCompositionstart: PropTypes.func,
  onCompositionend: PropTypes.func
});

export default defineComponent({
  name: 'ATextarea',
  inheritAttrs: false,
  props: _extends({}, TextAreaProps),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
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

    nextTick(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.focus();
        }
      }
    });
  },
  methods: {
    setValue: function setValue(value, callback) {
      if (!hasProp(this, 'value')) {
        this.stateValue = value;
      } else {
        this.$forceUpdate();
      }

      nextTick(function () {
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
      resolveOnChange(this.resizableTextArea.textArea, e, this.triggerChange);
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
      resolveOnChange(this.resizableTextArea.textArea, e, this.triggerChange);
    },
    renderTextArea: function renderTextArea(prefixCls) {
      var props = getOptionProps(this);
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

      return _createVNode(ResizableTextArea, _objectSpread(_objectSpread({}, resizeProps), {}, {
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
    var value = fixControlledValue(stateValue); // Max length value

    var hasMaxlength = Number(maxlength) > 0;
    value = hasMaxlength ? value.slice(0, maxlength) : value;

    var props = _extends(_extends(_extends({}, getOptionProps(this)), this.$attrs), {
      prefixCls: prefixCls,
      inputType: 'text',
      element: this.renderTextArea(prefixCls),
      handleReset: this.handleReset
    });

    var textareaNode = _createVNode(ClearableLabeledInput, _objectSpread(_objectSpread({}, props), {}, {
      "value": value,
      "ref": this.saveClearableInput
    }), null);

    if (showCount) {
      var valueLength = _toConsumableArray(value).length;

      var dataCount = "".concat(valueLength).concat(hasMaxlength ? " / ".concat(maxlength) : '');

      var _textareaNode = function () {
        return textareaNode;
      }();

      textareaNode = _createVNode("div", {
        "class": classNames("".concat(prefixCls, "-textarea"), "".concat(prefixCls, "-textarea-show-count"), customClass),
        "style": style,
        "data-count": dataCount
      }, [textareaNode]);
    }

    return textareaNode;
  }
});