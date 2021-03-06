"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _OptionList = _interopRequireDefault(require("./OptionList"));

var _Option = _interopRequireDefault(require("./Option"));

var _OptGroup = _interopRequireDefault(require("./OptGroup"));

var _legacyUtil = require("./utils/legacyUtil");

var _valueUtil = require("./utils/valueUtil");

var _generate = _interopRequireDefault(require("./generate"));

var _warningPropsUtil = _interopRequireDefault(require("./utils/warningPropsUtil"));

var _propsUtil = require("../_util/props-util");

var _omit = _interopRequireDefault(require("lodash/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RefSelect = (0, _generate.default)({
  prefixCls: 'rc-select',
  components: {
    optionList: _OptionList.default
  },
  convertChildrenToData: _legacyUtil.convertChildrenToData,
  flattenOptions: _valueUtil.flattenOptions,
  getLabeledValue: _valueUtil.getLabeledValue,
  filterOptions: _valueUtil.filterOptions,
  isValueDisabled: _valueUtil.isValueDisabled,
  findValueOption: _valueUtil.findValueOption,
  warningProps: _warningPropsUtil.default,
  fillOptionsWithMissingValue: _valueUtil.fillOptionsWithMissingValue
});
var Select = (0, _vue.defineComponent)({
  setup: function setup() {
    var selectRef = (0, _vue.ref)(null);
    return {
      selectRef: selectRef,
      focus: function focus() {
        var _a;

        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;

        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  },
  render: function render() {
    return (0, _vue.createVNode)(RefSelect, _objectSpread(_objectSpread(_objectSpread({
      "ref": "selectRef"
    }, this.$props), this.$attrs), {}, {
      "children": (0, _propsUtil.getSlot)(this)
    }), null);
  }
});
Select.inheritAttrs = false;
Select.props = (0, _omit.default)(RefSelect.props, ['children']);
Select.Option = _Option.default;
Select.OptGroup = _OptGroup.default;
var _default = Select;
exports.default = _default;