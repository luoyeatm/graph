import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { defineComponent, inject, nextTick } from 'vue';
import moment from 'moment';
import RangeCalendar from '../vc-calendar/src/RangeCalendar';
import VcDatePicker from '../vc-calendar/src/Picker';
import classNames from '../_util/classNames';
import shallowequal from '../_util/shallowequal';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import Tag from '../tag';
import { defaultConfigProvider } from '../config-provider';
import interopDefault from '../_util/interopDefault';
import { RangePickerProps } from './props';
import { hasProp, getOptionProps, getComponent } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
import { formatDate } from './utils';
import InputIcon from './InputIcon';
import { getDataAndAriaProps } from '../_util/util';
import initDefaultProps from '../_util/props-util/initDefaultProps';

function getShowDateFromValue(value, mode) {
  var _value = _slicedToArray(value, 2),
      start = _value[0],
      end = _value[1]; // value could be an empty array, then we should not reset showDate


  if (!start && !end) {
    return;
  }

  if (mode && mode[0] === 'month') {
    return [start, end];
  }

  var newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
  return [start, newEnd];
}

function pickerValueAdapter(value) {
  if (!value) {
    return;
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [value, value.clone().add(1, 'month')];
}

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0 || arr.every(function (i) {
      return !i;
    });
  }

  return false;
}

function fixLocale(value, localeCode) {
  if (!localeCode) {
    return;
  }

  if (!value || value.length === 0) {
    return;
  }

  var _value2 = _slicedToArray(value, 2),
      start = _value2[0],
      end = _value2[1];

  if (start) {
    start.locale(localeCode);
  }

  if (end) {
    end.locale(localeCode);
  }
}

export default defineComponent({
  name: 'ARangePicker',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(RangePickerProps, {
    allowClear: true,
    showToday: false,
    separator: '~'
  }),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      picker: null,
      sTagPrefixCls: undefined,
      sPrefixCls: ''
    };
  },
  data: function data() {
    var value = this.value || this.defaultValue || [];

    var _value3 = _slicedToArray(value, 2),
        start = _value3[0],
        end = _value3[1];

    if (start && !interopDefault(moment).isMoment(start) || end && !interopDefault(moment).isMoment(end)) {
      throw new Error('The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' + 'see: https://u.ant.design/date-picker-value');
    }

    var pickerValue = !value || isEmptyArray(value) ? this.defaultPickerValue : value;
    return {
      sValue: value,
      sShowDate: pickerValueAdapter(pickerValue || interopDefault(moment)()),
      sOpen: this.open,
      sHoverValue: []
    };
  },
  watch: {
    value: function value(val) {
      var value = val || [];
      var state = {
        sValue: value
      };

      if (!shallowequal(val, this.sValue)) {
        state = _extends(_extends({}, state), {
          sShowDate: getShowDateFromValue(value, this.mode) || this.sShowDate
        });
      }

      this.setState(state);
    },
    open: function open(val) {
      var state = {
        sOpen: val
      };
      this.setState(state);
    },
    sOpen: function sOpen(val, oldVal) {
      var _this = this;

      nextTick(function () {
        if (!hasProp(_this, 'open') && oldVal && !val) {
          _this.focus();
        }
      });
    }
  },
  methods: {
    setValue: function setValue(value, hidePanel) {
      this.handleChange(value);

      if ((hidePanel || !this.showTime) && !hasProp(this, 'open')) {
        this.setState({
          sOpen: false
        });
      }
    },
    savePicker: function savePicker(node) {
      this.picker = node;
    },
    clearSelection: function clearSelection(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        sValue: []
      });
      this.handleChange([]);
    },
    clearHoverValue: function clearHoverValue() {
      this.setState({
        sHoverValue: []
      });
    },
    handleChange: function handleChange(value) {
      if (!hasProp(this, 'value')) {
        this.setState(function (_ref) {
          var sShowDate = _ref.sShowDate;
          return {
            sValue: value,
            sShowDate: getShowDateFromValue(value) || sShowDate
          };
        });
      }

      if (value[0] && value[1] && value[0].diff(value[1]) > 0) {
        value[1] = undefined;
      }

      var _value4 = _slicedToArray(value, 2),
          start = _value4[0],
          end = _value4[1];

      this.$emit('change', value, [formatDate(start, this.format), formatDate(end, this.format)]);
    },
    handleOpenChange: function handleOpenChange(open) {
      if (!hasProp(this, 'open')) {
        this.setState({
          sOpen: open
        });
      }

      if (open === false) {
        this.clearHoverValue();
      }

      this.$emit('openChange', open);
    },
    handleShowDateChange: function handleShowDateChange(showDate) {
      this.setState({
        sShowDate: showDate
      });
    },
    handleHoverChange: function handleHoverChange(hoverValue) {
      this.setState({
        sHoverValue: hoverValue
      });
    },
    handleRangeMouseLeave: function handleRangeMouseLeave() {
      if (this.sOpen) {
        this.clearHoverValue();
      }
    },
    handleCalendarInputSelect: function handleCalendarInputSelect(value) {
      var _value5 = _slicedToArray(value, 1),
          start = _value5[0];

      if (!start) {
        return;
      }

      this.setState(function (_ref2) {
        var sShowDate = _ref2.sShowDate;
        return {
          sValue: value,
          sShowDate: getShowDateFromValue(value) || sShowDate
        };
      });
    },
    handleRangeClick: function handleRangeClick(value) {
      if (typeof value === 'function') {
        value = value();
      }

      this.setValue(value, true);
      this.$emit('ok', value);
      this.$emit('openChange', false);
    },
    onMouseEnter: function onMouseEnter(e) {
      this.$emit('mouseenter', e);
    },
    onMouseLeave: function onMouseLeave(e) {
      this.$emit('mouseleave', e);
    },
    focus: function focus() {
      this.picker.focus();
    },
    blur: function blur() {
      this.picker.blur();
    },
    renderFooter: function renderFooter() {
      var _this2 = this;

      var ranges = this.ranges,
          $slots = this.$slots;
      var prefixCls = this.sPrefixCls,
          tagPrefixCls = this.sTagPrefixCls;
      var renderExtraFooter = this.renderExtraFooter || $slots.renderExtraFooter;

      if (!ranges && !renderExtraFooter) {
        return null;
      }

      var customFooter = renderExtraFooter ? _createVNode("div", {
        "class": "".concat(prefixCls, "-footer-extra"),
        "key": "extra"
      }, [typeof renderExtraFooter === 'function' ? renderExtraFooter() : renderExtraFooter]) : null;
      var operations = ranges && Object.keys(ranges).map(function (range) {
        var value = ranges[range];
        var hoverValue = typeof value === 'function' ? value.call(_this2) : value;
        return _createVNode(Tag, {
          "key": range,
          "prefixCls": tagPrefixCls,
          "color": "blue",
          "onClick": function onClick() {
            return _this2.handleRangeClick(value);
          },
          "onMouseenter": function onMouseenter() {
            return _this2.setState({
              sHoverValue: hoverValue
            });
          },
          "onMouseleave": _this2.handleRangeMouseLeave
        }, {
          default: function _default() {
            return [range];
          }
        });
      });
      var rangeNode = operations && operations.length > 0 ? _createVNode("div", {
        "class": "".concat(prefixCls, "-footer-extra ").concat(prefixCls, "-range-quick-selector"),
        "key": "range"
      }, [operations]) : null;
      return [rangeNode, customFooter];
    }
  },
  render: function render() {
    var _classNames,
        _this3 = this;

    var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

    var suffixIcon = getComponent(this, 'suffixIcon');
    suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
    var value = this.sValue,
        showDate = this.sShowDate,
        hoverValue = this.sHoverValue,
        open = this.sOpen,
        $slots = this.$slots;
    var customizePrefixCls = props.prefixCls,
        customizeTagPrefixCls = props.tagPrefixCls,
        popupStyle = props.popupStyle,
        disabledDate = props.disabledDate,
        disabledTime = props.disabledTime,
        showTime = props.showTime,
        showToday = props.showToday,
        ranges = props.ranges,
        locale = props.locale,
        localeCode = props.localeCode,
        format = props.format,
        separator = props.separator,
        inputReadOnly = props.inputReadOnly,
        style = props.style,
        onCalendarChange = props.onCalendarChange,
        onOk = props.onOk,
        onBlur = props.onBlur,
        onFocus = props.onFocus,
        onPanelChange = props.onPanelChange;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('calendar', customizePrefixCls);
    var tagPrefixCls = getPrefixCls('tag', customizeTagPrefixCls);
    this.sPrefixCls = prefixCls;
    this.sTagPrefixCls = tagPrefixCls;
    var dateRender = props.dateRender || $slots.dateRender;
    fixLocale(value, localeCode);
    fixLocale(showDate, localeCode);
    var calendarClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-time"), showTime), _defineProperty(_classNames, "".concat(prefixCls, "-range-with-ranges"), ranges), _classNames)); // ?????????????????????????????? ok ???????????? onChange

    var pickerChangeHandler = {
      onChange: this.handleChange
    };
    var calendarProps = {
      onOk: this.handleChange
    };

    if (props.timePicker) {
      pickerChangeHandler.onChange = function (changedValue) {
        return _this3.handleChange(changedValue);
      };
    } else {
      calendarProps = {};
    }

    if ('mode' in props) {
      calendarProps.mode = props.mode;
    }

    var startPlaceholder = Array.isArray(props.placeholder) ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
    var endPlaceholder = Array.isArray(props.placeholder) ? props.placeholder[1] : locale.lang.rangePlaceholder[1];

    var rangeCalendarProps = _extends(_extends({}, calendarProps), {
      separator: separator,
      format: format,
      prefixCls: prefixCls,
      renderFooter: this.renderFooter,
      timePicker: props.timePicker,
      disabledDate: disabledDate,
      disabledTime: disabledTime,
      dateInputPlaceholder: [startPlaceholder, endPlaceholder],
      locale: locale.lang,
      dateRender: dateRender,
      value: showDate,
      hoverValue: hoverValue,
      showToday: showToday,
      inputReadOnly: inputReadOnly,
      onChange: onCalendarChange,
      onOk: onOk,
      onValueChange: this.handleShowDateChange,
      onHoverChange: this.handleHoverChange,
      onPanelChange: onPanelChange,
      onInputSelect: this.handleCalendarInputSelect,
      class: calendarClassName
    });

    var calendar = _createVNode(RangeCalendar, rangeCalendarProps, $slots); // default width for showTime


    var pickerStyle = {};

    if (props.showTime) {
      pickerStyle.width = '350px';
    }

    var _value6 = _slicedToArray(value, 2),
        startValue = _value6[0],
        endValue = _value6[1];

    var clearIcon = !props.disabled && props.allowClear && value && (startValue || endValue) ? _createVNode(CloseCircleFilled, {
      "class": "".concat(prefixCls, "-picker-clear"),
      "onClick": this.clearSelection
    }, null) : null;

    var inputIcon = _createVNode(InputIcon, {
      "suffixIcon": suffixIcon,
      "prefixCls": prefixCls
    }, null);

    var input = function input(_ref3) {
      var inputValue = _ref3.value;

      var _inputValue = _slicedToArray(inputValue, 2),
          start = _inputValue[0],
          end = _inputValue[1];

      return _createVNode("span", {
        "class": props.pickerInputClass
      }, [_createVNode("input", {
        "disabled": props.disabled,
        "readonly": true,
        "value": formatDate(start, props.format),
        "placeholder": startPlaceholder,
        "class": "".concat(prefixCls, "-range-picker-input"),
        "tabindex": -1
      }, null), _createVNode("span", {
        "class": "".concat(prefixCls, "-range-picker-separator")
      }, [_createTextVNode(" "), separator, _createTextVNode(" ")]), _createVNode("input", {
        "disabled": props.disabled,
        "readonly": true,
        "value": formatDate(end, props.format),
        "placeholder": endPlaceholder,
        "class": "".concat(prefixCls, "-range-picker-input"),
        "tabindex": -1
      }, null), clearIcon, inputIcon]);
    };

    var vcDatePickerProps = _extends(_extends(_extends({}, props), pickerChangeHandler), {
      calendar: calendar,
      value: value,
      open: open,
      prefixCls: "".concat(prefixCls, "-picker-container"),
      onOpenChange: this.handleOpenChange,
      style: popupStyle
    });

    return _createVNode("span", _objectSpread({
      "ref": this.savePicker,
      "id": props.id,
      "class": classNames(props.class, props.pickerClass),
      "style": _extends(_extends({}, pickerStyle), style),
      "tabindex": props.disabled ? -1 : 0,
      "onFocus": onFocus,
      "onBlur": onBlur,
      "onMouseenter": this.onMouseEnter,
      "onMouseleave": this.onMouseLeave
    }, getDataAndAriaProps(props)), [_createVNode(VcDatePicker, vcDatePickerProps, _extends({
      default: input
    }, $slots))]);
  }
});