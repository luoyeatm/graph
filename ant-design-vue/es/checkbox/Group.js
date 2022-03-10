import { createVNode as _createVNode } from "vue";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, inject, provide } from 'vue';
import PropTypes from '../_util/vue-types';
import Checkbox from './Checkbox';
import hasProp, { getSlot } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';

function noop() {}

export default defineComponent({
  name: 'ACheckboxGroup',
  props: {
    name: PropTypes.string,
    prefixCls: PropTypes.string,
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    options: {
      type: Array
    },
    disabled: PropTypes.looseBool,
    onChange: PropTypes.func
  },
  emits: ['change', 'update:value'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue;
    return {
      sValue: value || defaultValue || [],
      registeredValues: []
    };
  },
  watch: {
    value: function value(val) {
      this.sValue = val || [];
    }
  },
  created: function created() {
    provide('checkboxGroupContext', this);
  },
  methods: {
    getOptions: function getOptions() {
      var _this$options = this.options,
          options = _this$options === void 0 ? [] : _this$options,
          $slots = this.$slots;
      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }

        var label = option.label;

        if (label === undefined && $slots.label) {
          label = $slots.label(option);
        }

        return _extends(_extends({}, option), {
          label: label
        });
      });
    },
    cancelValue: function cancelValue(value) {
      this.registeredValues = this.registeredValues.filter(function (val) {
        return val !== value;
      });
    },
    registerValue: function registerValue(value) {
      this.registeredValues = [].concat(_toConsumableArray(this.registeredValues), [value]);
    },
    toggleOption: function toggleOption(option) {
      var registeredValues = this.registeredValues;
      var optionIndex = this.sValue.indexOf(option.value);

      var value = _toConsumableArray(this.sValue);

      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }

      if (!hasProp(this, 'value')) {
        this.sValue = value;
      }

      var options = this.getOptions();
      var val = value.filter(function (val) {
        return registeredValues.indexOf(val) !== -1;
      }).sort(function (a, b) {
        var indexA = options.findIndex(function (opt) {
          return opt.value === a;
        });
        var indexB = options.findIndex(function (opt) {
          return opt.value === b;
        });
        return indexA - indexB;
      }); // this.$emit('input', val);

      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  },
  render: function render() {
    var props = this.$props,
        state = this.$data;
    var customizePrefixCls = props.prefixCls,
        options = props.options;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    var children = getSlot(this);
    var groupPrefixCls = "".concat(prefixCls, "-group");

    if (options && options.length > 0) {
      children = this.getOptions().map(function (option) {
        return _createVNode(Checkbox, {
          "prefixCls": prefixCls,
          "key": option.value.toString(),
          "disabled": 'disabled' in option ? option.disabled : props.disabled,
          "indeterminate": option.indeterminate,
          "value": option.value,
          "checked": state.sValue.indexOf(option.value) !== -1,
          "onChange": option.onChange || noop,
          "class": "".concat(groupPrefixCls, "-item")
        }, {
          default: function _default() {
            return [option.label];
          }
        });
      });
    }

    return _createVNode("div", {
      "class": groupPrefixCls
    }, [children]);
  }
});