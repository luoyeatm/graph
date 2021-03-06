"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HeaderProps", {
  enumerable: true,
  get: function get() {
    return _Header.HeaderProps;
  }
});
exports.default = exports.CalendarProps = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

var _moment = _interopRequireDefault(require("moment"));

var _FullCalendar = _interopRequireDefault(require("../vc-calendar/src/FullCalendar"));

var _Header = _interopRequireWildcard(require("./Header"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _interopDefault = _interopRequireDefault(require("../_util/interopDefault"));

var _configProvider = require("../config-provider");

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _momentUtil = require("../_util/moment-util");

var _type = require("../_util/type");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function noop() {
  return null;
}

function zerofixed(v) {
  if (v < 10) {
    return "0".concat(v);
  }

  return "".concat(v);
}

var CalendarModeTypes = (0, _type.tuple)('month', 'year');
var CalendarProps = {
  monthCellRender: _vueTypes.default.func,
  dateCellRender: _vueTypes.default.func,
  monthFullCellRender: _vueTypes.default.func,
  dateFullCellRender: _vueTypes.default.func,
  prefixCls: _vueTypes.default.string,
  value: _momentUtil.TimeType,
  defaultValue: _momentUtil.TimeType,
  mode: _vueTypes.default.oneOf(CalendarModeTypes),
  fullscreen: _vueTypes.default.looseBool.def(true),
  locale: _vueTypes.default.object.def({}),
  disabledDate: _vueTypes.default.func,
  validRange: {
    type: Array
  },
  headerRender: _vueTypes.default.func,
  valueFormat: _vueTypes.default.string,
  onPanelChange: _vueTypes.default.func,
  onSelect: _vueTypes.default.func,
  onChange: _vueTypes.default.func,
  'onUpdate:value': _vueTypes.default.func
};
exports.CalendarProps = CalendarProps;
var Calendar = (0, _vue.defineComponent)({
  name: 'ACalendar',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: CalendarProps,
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      sPrefixCls: undefined
    };
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue,
        valueFormat = this.valueFormat;
    var sValue = value || defaultValue || (0, _interopDefault.default)(_moment.default)();
    (0, _momentUtil.checkValidate)('Calendar', defaultValue, 'defaultValue', valueFormat);
    (0, _momentUtil.checkValidate)('Calendar', value, 'value', valueFormat);
    return {
      sValue: (0, _momentUtil.stringToMoment)(sValue, valueFormat),
      sMode: this.mode || 'month'
    };
  },
  watch: {
    value: function value(val) {
      (0, _momentUtil.checkValidate)('Calendar', val, 'value', this.valueFormat);
      this.setState({
        sValue: (0, _momentUtil.stringToMoment)(val, this.valueFormat)
      });
    },
    mode: function mode(val) {
      this.setState({
        sMode: val
      });
    }
  },
  methods: {
    onHeaderValueChange: function onHeaderValueChange(value) {
      this.setValue(value, 'changePanel');
    },
    onHeaderTypeChange: function onHeaderTypeChange(mode) {
      this.sMode = mode;
      this.triggerPanelChange(this.sValue, mode);
    },
    triggerPanelChange: function triggerPanelChange(value, mode) {
      var val = this.valueFormat ? (0, _momentUtil.momentToString)(value, this.valueFormat) : value;

      if (value !== this.sValue) {
        this.$emit('update:value', val);
        this.$emit('change', val);
      }

      this.$emit('panelChange', val, mode);
    },
    triggerSelect: function triggerSelect(value) {
      this.setValue(value, 'select');
    },
    setValue: function setValue(value, way) {
      var prevValue = this.value ? (0, _momentUtil.stringToMoment)(this.value, this.valueFormat) : this.sValue;
      var mode = this.sMode,
          valueFormat = this.valueFormat;

      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      if (way === 'select') {
        var val = valueFormat ? (0, _momentUtil.momentToString)(value, valueFormat) : value;

        if (prevValue && prevValue.month() !== value.month()) {
          this.triggerPanelChange(value, mode);
        } else {
          this.$emit('update:value', val);
        }

        this.$emit('select', val);
      } else if (way === 'changePanel') {
        this.triggerPanelChange(value, mode);
      }
    },
    getDateRange: function getDateRange(validRange, disabledDate) {
      return function (current) {
        if (!current) {
          return false;
        }

        var _validRange = _slicedToArray(validRange, 2),
            startDate = _validRange[0],
            endDate = _validRange[1];

        var inRange = !current.isBetween(startDate, endDate, 'days', '[]');

        if (disabledDate) {
          return disabledDate(current) || inRange;
        }

        return inRange;
      };
    },
    getDefaultLocale: function getDefaultLocale() {
      var result = _extends(_extends({}, _en_US.default), this.$props.locale);

      result.lang = _extends(_extends({}, result.lang), (this.$props.locale || {}).lang);
      return result;
    },
    monthCellRender2: function monthCellRender2(_ref) {
      var value = _ref.current;
      var sPrefixCls = this.sPrefixCls,
          $slots = this.$slots;
      var monthCellRender = this.monthCellRender || $slots.monthCellRender || noop;
      return (0, _vue.createVNode)("div", {
        "class": "".concat(sPrefixCls, "-month")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(sPrefixCls, "-value")
      }, [value.localeData().monthsShort(value)]), (0, _vue.createVNode)("div", {
        "class": "".concat(sPrefixCls, "-content")
      }, [monthCellRender({
        current: value
      })])]);
    },
    dateCellRender2: function dateCellRender2(_ref2) {
      var value = _ref2.current;
      var sPrefixCls = this.sPrefixCls,
          $slots = this.$slots;
      var dateCellRender = this.dateCellRender || $slots.dateCellRender || noop;
      return (0, _vue.createVNode)("div", {
        "class": "".concat(sPrefixCls, "-date")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(sPrefixCls, "-value")
      }, [zerofixed(value.date())]), (0, _vue.createVNode)("div", {
        "class": "".concat(sPrefixCls, "-content")
      }, [dateCellRender({
        current: value
      })])]);
    },
    renderCalendar: function renderCalendar(locale, localeCode) {
      var props = _extends(_extends({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs);

      var value = this.sValue,
          mode = this.sMode,
          $slots = this.$slots;

      if (value && localeCode) {
        value.locale(localeCode);
      }

      var customizePrefixCls = props.prefixCls,
          fullscreen = props.fullscreen,
          dateFullCellRender = props.dateFullCellRender,
          monthFullCellRender = props.monthFullCellRender,
          className = props.class,
          style = props.style;
      var headerRender = this.headerRender || $slots.headerRender;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('fullcalendar', customizePrefixCls); // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397

      this.sPrefixCls = prefixCls;
      var cls = className || '';

      if (fullscreen) {
        cls += " ".concat(prefixCls, "-fullscreen");
      }

      var monthCellRender = monthFullCellRender || $slots.monthFullCellRender || this.monthCellRender2;
      var dateCellRender = dateFullCellRender || $slots.dateFullCellRender || this.dateCellRender2;
      var disabledDate = props.disabledDate;

      if (props.validRange) {
        disabledDate = this.getDateRange(props.validRange, disabledDate);
      }

      var fullCalendarProps = _extends(_extends(_extends({}, props), this.$attrs), {
        Select: {},
        locale: locale.lang,
        type: mode === 'year' ? 'month' : 'date',
        prefixCls: prefixCls,
        showHeader: false,
        value: value,
        monthCellRender: monthCellRender,
        dateCellRender: dateCellRender,
        disabledDate: disabledDate,
        onSelect: this.triggerSelect
      });

      return (0, _vue.createVNode)("div", {
        "class": cls,
        "style": style
      }, [(0, _vue.createVNode)(_Header.default, {
        "fullscreen": fullscreen,
        "type": mode,
        "headerRender": headerRender,
        "value": value,
        "locale": locale.lang,
        "prefixCls": prefixCls,
        "onTypeChange": this.onHeaderTypeChange,
        "onValueChange": this.onHeaderValueChange,
        "validRange": props.validRange
      }, null), (0, _vue.createVNode)(_FullCalendar.default, fullCalendarProps, null)]);
    }
  },
  render: function render() {
    return (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "Calendar",
      "defaultLocale": this.getDefaultLocale,
      "children": this.renderCalendar
    }, null);
  }
});

var _default = (0, _type.withInstall)(Calendar);

exports.default = _default;