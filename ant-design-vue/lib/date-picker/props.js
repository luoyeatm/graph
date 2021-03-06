"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekPickerProps = exports.RangePickerProps = exports.MonthPickerProps = exports.DatePickerProps = exports.SinglePickerProps = exports.PickerProps = void 0;

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _type = require("../_util/type");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PickerProps = {
  name: _vueTypes.default.string,
  transitionName: _vueTypes.default.string,
  prefixCls: _vueTypes.default.string,
  inputPrefixCls: _vueTypes.default.string,
  format: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.array, _vueTypes.default.func]),
  disabled: _vueTypes.default.looseBool,
  allowClear: _vueTypes.default.looseBool,
  suffixIcon: _vueTypes.default.any,
  popupStyle: _vueTypes.default.object,
  dropdownClassName: _vueTypes.default.string,
  locale: _vueTypes.default.any,
  localeCode: _vueTypes.default.string,
  size: _vueTypes.default.oneOf((0, _type.tuple)('large', 'small', 'default')),
  getCalendarContainer: _vueTypes.default.func,
  open: _vueTypes.default.looseBool,
  disabledDate: _vueTypes.default.func,
  showToday: _vueTypes.default.looseBool,
  dateRender: _vueTypes.default.any,
  pickerClass: _vueTypes.default.string,
  pickerInputClass: _vueTypes.default.string,
  timePicker: _vueTypes.default.any,
  autofocus: _vueTypes.default.looseBool,
  tagPrefixCls: _vueTypes.default.string,
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  align: _vueTypes.default.object.def(function () {
    return {};
  }),
  inputReadOnly: _vueTypes.default.looseBool,
  valueFormat: _vueTypes.default.string,
  onOpenChange: _vueTypes.default.func,
  onFocus: _vueTypes.default.func,
  onBlur: _vueTypes.default.func,
  //'onUpdate:value': PropTypes.func,
  onMouseenter: _vueTypes.default.func,
  onMouseleave: _vueTypes.default.func
};
exports.PickerProps = PickerProps;
var SinglePickerProps = {
  value: {
    type: [String, Object]
  },
  defaultValue: {
    type: [String, Object]
  },
  defaultPickerValue: {
    type: [String, Object]
  },
  renderExtraFooter: _vueTypes.default.any,
  placeholder: _vueTypes.default.string,
  onChange: _vueTypes.default.func
};
exports.SinglePickerProps = SinglePickerProps;

var DatePickerProps = _extends(_extends(_extends({}, PickerProps), SinglePickerProps), {
  showTime: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.looseBool])),
  open: _vueTypes.default.looseBool,
  disabledTime: _vueTypes.default.func,
  mode: _vueTypes.default.oneOf((0, _type.tuple)('time', 'date', 'month', 'year', 'decade')),
  onOpenChange: _vueTypes.default.func,
  onPanelChange: _vueTypes.default.func,
  onOk: _vueTypes.default.func
});

exports.DatePickerProps = DatePickerProps;

var MonthPickerProps = _extends(_extends(_extends({}, PickerProps), SinglePickerProps), {
  placeholder: _vueTypes.default.string,
  monthCellContentRender: _vueTypes.default.func
}); // export const RangePickerPresetRange = PropTypes.oneOfType([TimesType, PropTypes.func])


exports.MonthPickerProps = MonthPickerProps;

var RangePickerProps = _extends(_extends({}, PickerProps), {
  tagPrefixCls: _vueTypes.default.string,
  value: {
    type: Array
  },
  defaultValue: {
    type: Array
  },
  defaultPickerValue: {
    type: Array
  },
  timePicker: _vueTypes.default.any,
  showTime: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.looseBool])),
  ranges: _vueTypes.default.object,
  placeholder: _vueTypes.default.arrayOf(String),
  mode: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(String)]),
  separator: _vueTypes.default.any,
  disabledTime: _vueTypes.default.func,
  showToday: _vueTypes.default.looseBool,
  renderExtraFooter: _vueTypes.default.any,
  onChange: _vueTypes.default.func,
  onCalendarChange: _vueTypes.default.func,
  onOk: _vueTypes.default.func,
  onPanelChange: _vueTypes.default.func,
  onMouseenter: _vueTypes.default.func,
  onMouseleave: _vueTypes.default.func
});

exports.RangePickerProps = RangePickerProps;

var WeekPickerProps = _extends(_extends(_extends({}, PickerProps), SinglePickerProps), {
  placeholder: _vueTypes.default.string
});

exports.WeekPickerProps = WeekPickerProps;