import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, inject, nextTick } from 'vue';
import moment from 'moment';
import Calendar from '../vc-calendar';
import VcDatePicker from '../vc-calendar/src/Picker';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import { defaultConfigProvider } from '../config-provider';
import { hasProp, getOptionProps, getComponent } from '../_util/props-util';
import classNames from '../_util/classNames';
import BaseMixin from '../_util/BaseMixin';
import { WeekPickerProps } from './props';
import interopDefault from '../_util/interopDefault';
import InputIcon from './InputIcon';
import { getDataAndAriaProps } from '../_util/util';
import initDefaultProps from '../_util/props-util/initDefaultProps';

function formatValue(value, format) {
  return value && value.format(format) || '';
}

function noop() {}

export default defineComponent({
  name: 'AWeekPicker',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(WeekPickerProps, {
    allowClear: true
  }),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      prevState: {},
      input: undefined,
      sPrefixCls: undefined
    };
  },
  data: function data() {
    var value = this.value || this.defaultValue;

    if (value && !interopDefault(moment).isMoment(value)) {
      throw new Error('The value/defaultValue of WeekPicker or MonthPicker must be ' + 'a moment object');
    }

    return {
      _value: value,
      _open: this.open
    };
  },
  watch: {
    value: function value(val) {
      var state = {
        _value: val
      };
      this.setState(state);
      this.prevState = _extends(_extends({}, this.$data), state);
    },
    open: function open(val) {
      var state = {
        _open: val
      };
      this.setState(state);
      this.prevState = _extends(_extends({}, this.$data), state);
    },
    _open: function _open(val, oldVal) {
      var _this = this;

      nextTick(function () {
        if (!hasProp(_this, 'open') && oldVal && !val) {
          _this.focus();
        }
      });
    }
  },
  mounted: function mounted() {
    this.prevState = _extends({}, this.$data);
  },
  updated: function updated() {
    var _this2 = this;

    nextTick(function () {
      if (!hasProp(_this2, 'open') && _this2.prevState._open && !_this2._open) {
        _this2.focus();
      }
    });
  },
  methods: {
    saveInput: function saveInput(node) {
      this.input = node;
    },
    weekDateRender: function weekDateRender(_ref) {
      var current = _ref.current;
      var selectedValue = this.$data._value;
      var prefixCls = this.sPrefixCls,
          $slots = this.$slots;
      var dateRender = this.dateRender || $slots.dateRender;
      var dateNode = dateRender ? dateRender({
        current: current
      }) : current.date();

      if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
        return _createVNode("div", {
          "class": "".concat(prefixCls, "-selected-day")
        }, [_createVNode("div", {
          "class": "".concat(prefixCls, "-date")
        }, [dateNode])]);
      }

      return _createVNode("div", {
        "class": "".concat(prefixCls, "-date")
      }, [dateNode]);
    },
    handleChange: function handleChange(value) {
      if (!hasProp(this, 'value')) {
        this.setState({
          _value: value
        });
      }

      this.$emit('change', value, formatValue(value, this.format));
    },
    handleOpenChange: function handleOpenChange(open) {
      if (!hasProp(this, 'open')) {
        this.setState({
          _open: open
        });
      }

      this.$emit('openChange', open);
    },
    clearSelection: function clearSelection(e) {
      e.preventDefault();
      e.stopPropagation();
      this.handleChange(null);
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    renderFooter: function renderFooter() {
      var prefixCls = this.sPrefixCls,
          $slots = this.$slots;
      var renderExtraFooter = this.renderExtraFooter || $slots.renderExtraFooter;
      return renderExtraFooter ? _createVNode("div", {
        "class": "".concat(prefixCls, "-footer-extra")
      }, [renderExtraFooter.apply(void 0, arguments)]) : null;
    }
  },
  render: function render() {
    var _this3 = this;

    var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

    var suffixIcon = getComponent(this, 'suffixIcon');
    suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
    var customizePrefixCls = this.prefixCls,
        disabled = this.disabled,
        pickerClass = this.pickerClass,
        popupStyle = this.popupStyle,
        pickerInputClass = this.pickerInputClass,
        format = this.format,
        allowClear = this.allowClear,
        locale = this.locale,
        localeCode = this.localeCode,
        disabledDate = this.disabledDate,
        defaultPickerValue = this.defaultPickerValue,
        $data = this.$data,
        $slots = this.$slots;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('calendar', customizePrefixCls);
    this.sPrefixCls = prefixCls;
    var pickerValue = $data._value,
        open = $data._open;
    var className = props.class,
        style = props.style,
        id = props.id,
        _props$onFocus = props.onFocus,
        onFocus = _props$onFocus === void 0 ? noop : _props$onFocus,
        _props$onBlur = props.onBlur,
        onBlur = _props$onBlur === void 0 ? noop : _props$onBlur;

    if (pickerValue && localeCode) {
      pickerValue.locale(localeCode);
    }

    var placeholder = hasProp(this, 'placeholder') ? this.placeholder : locale.lang.placeholder;
    var weekDateRender = this.dateRender || $slots.dateRender || this.weekDateRender;

    var calendar = _createVNode(Calendar, {
      "showWeekNumber": true,
      "dateRender": weekDateRender,
      "prefixCls": prefixCls,
      "format": format,
      "locale": locale.lang,
      "showDateInput": false,
      "showToday": false,
      "disabledDate": disabledDate,
      "renderFooter": this.renderFooter,
      "defaultValue": defaultPickerValue
    }, null);

    var clearIcon = !disabled && allowClear && $data._value ? _createVNode(CloseCircleFilled, {
      "class": "".concat(prefixCls, "-picker-clear"),
      "onClick": this.clearSelection
    }, null) : null;

    var inputIcon = _createVNode(InputIcon, {
      "suffixIcon": suffixIcon,
      "prefixCls": prefixCls
    }, null);

    var input = function input(_ref2) {
      var value = _ref2.value;
      return _createVNode("span", {
        "style": {
          display: 'inline-block',
          width: '100%'
        }
      }, [_createVNode("input", {
        "ref": _this3.saveInput,
        "disabled": disabled,
        "readonly": true,
        "value": value && value.format(format) || '',
        "placeholder": placeholder,
        "class": pickerInputClass,
        "onFocus": onFocus,
        "onBlur": onBlur
      }, null), clearIcon, inputIcon]);
    };

    var vcDatePickerProps = _extends(_extends({}, props), {
      calendar: calendar,
      prefixCls: "".concat(prefixCls, "-picker-container"),
      value: pickerValue,
      open: open,
      onChange: this.handleChange,
      onOpenChange: this.handleOpenChange,
      style: popupStyle
    });

    return _createVNode("span", _objectSpread({
      "class": classNames(className, pickerClass),
      "style": style,
      "id": id
    }, getDataAndAriaProps(props)), [_createVNode(VcDatePicker, vcDatePickerProps, _extends({
      default: input
    }, $slots))]);
  }
});