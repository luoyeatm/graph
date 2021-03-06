import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, inject, nextTick } from 'vue';
import moment from 'moment';
import omit from 'lodash-es/omit';
import MonthCalendar from '../vc-calendar/src/MonthCalendar';
import VcDatePicker from '../vc-calendar/src/Picker';
import classNames from '../_util/classNames';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import CalendarOutlined from '@ant-design/icons-vue/CalendarOutlined';
import { defaultConfigProvider } from '../config-provider';
import interopDefault from '../_util/interopDefault';
import BaseMixin from '../_util/BaseMixin';
import PropTypes from '../_util/vue-types';
import { hasProp, getOptionProps, getComponent, isValidElement } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import { formatDate } from './utils';
import { getDataAndAriaProps } from '../_util/util';
import { isEmptySlot } from '../_util/props-util';
export default function createPicker(TheCalendar, props, name) {
  return defineComponent({
    name: name,
    mixins: [BaseMixin],
    inheritAttrs: false,
    props: _extends(_extends({}, props), {
      allowClear: PropTypes.looseBool.def(true),
      showToday: PropTypes.looseBool.def(true)
    }),
    setup: function setup() {
      return {
        configProvider: inject('configProvider', defaultConfigProvider),
        input: undefined,
        sPrefixCls: undefined
      };
    },
    data: function data() {
      var value = this.value || this.defaultValue;
      return {
        sValue: value,
        showDate: value,
        sOpen: !!this.open
      };
    },
    watch: {
      open: function open(val) {
        var props = getOptionProps(this);
        var state = {};
        state.sOpen = val;

        if ('value' in props && !val && props.value !== this.showDate) {
          state.showDate = props.value;
        }

        this.setState(state);
      },
      value: function value(val) {
        var state = {};
        state.sValue = val;

        if (val !== this.sValue) {
          state.showDate = val;
        }

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
      saveInput: function saveInput(node) {
        this.input = node;
      },
      clearSelection: function clearSelection(e) {
        e.preventDefault();
        e.stopPropagation();
        this.handleChange(null);
      },
      handleChange: function handleChange(value) {
        if (!hasProp(this, 'value')) {
          this.setState({
            sValue: value,
            showDate: value
          });
        }

        this.$emit('change', value, formatDate(value, this.format));
      },
      handleCalendarChange: function handleCalendarChange(value) {
        this.setState({
          showDate: value
        });
      },
      handleOpenChange: function handleOpenChange(open) {
        var props = getOptionProps(this);

        if (!('open' in props)) {
          this.setState({
            sOpen: open
          });
        }

        this.$emit('openChange', open);
      },
      focus: function focus() {
        var _a;

        (_a = this.input) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;

        (_a = this.input) === null || _a === void 0 ? void 0 : _a.blur();
      },
      renderFooter: function renderFooter() {
        var $slots = this.$slots,
            prefixCls = this.sPrefixCls;
        var renderExtraFooter = this.renderExtraFooter || $slots.renderExtraFooter;
        return renderExtraFooter ? _createVNode("div", {
          "class": "".concat(prefixCls, "-footer-extra")
        }, [typeof renderExtraFooter === 'function' ? renderExtraFooter.apply(void 0, arguments) : renderExtraFooter]) : null;
      },
      onMouseEnter: function onMouseEnter(e) {
        this.$emit('mouseenter', e);
      },
      onMouseLeave: function onMouseLeave(e) {
        this.$emit('mouseleave', e);
      }
    },
    render: function render() {
      var _classNames,
          _this2 = this;

      var $slots = this.$slots;
      var _this$$data = this.$data,
          value = _this$$data.sValue,
          showDate = _this$$data.showDate,
          open = _this$$data.sOpen;
      var suffixIcon = getComponent(this, 'suffixIcon');
      suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
      var props = omit(_extends(_extends({}, getOptionProps(this)), this.$attrs), ['onChange']);
      var customizePrefixCls = props.prefixCls,
          locale = props.locale,
          localeCode = props.localeCode,
          inputReadOnly = props.inputReadOnly;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('calendar', customizePrefixCls);
      this.sPrefixCls = prefixCls;
      var dateRender = props.dateRender || $slots.dateRender;
      var monthCellContentRender = props.monthCellContentRender || $slots.monthCellContentRender;
      var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
      var disabledTime = props.showTime ? props.disabledTime : null;
      var calendarClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-time"), props.showTime), _defineProperty(_classNames, "".concat(prefixCls, "-month"), MonthCalendar === TheCalendar), _classNames));

      if (value && localeCode) {
        value.locale(localeCode);
      }

      var pickerProps = {};
      var calendarProps = {};
      var pickerStyle = {};

      if (props.showTime) {
        // fix https://github.com/ant-design/ant-design/issues/1902
        calendarProps.onSelect = this.handleChange;
        pickerStyle.minWidth = '195px';
      } else {
        pickerProps.onChange = this.handleChange;
      }

      if ('mode' in props) {
        calendarProps.mode = props.mode;
      }

      var theCalendarProps = _extends(_extends({}, calendarProps), {
        disabledDate: props.disabledDate,
        disabledTime: disabledTime,
        locale: locale.lang,
        timePicker: props.timePicker,
        defaultValue: props.defaultPickerValue || interopDefault(moment)(),
        dateInputPlaceholder: placeholder,
        prefixCls: prefixCls,
        dateRender: dateRender,
        format: props.format,
        showToday: props.showToday,
        monthCellContentRender: monthCellContentRender,
        renderFooter: this.renderFooter,
        value: showDate,
        inputReadOnly: inputReadOnly,
        onOk: props.onOk,
        onPanelChange: props.onPanelChange,
        onChange: this.handleCalendarChange,
        class: calendarClassName
      });

      var calendar = _createVNode(TheCalendar, theCalendarProps, $slots);

      var clearIcon = !props.disabled && props.allowClear && value ? _createVNode(CloseCircleFilled, {
        "class": "".concat(prefixCls, "-picker-clear"),
        "onClick": this.clearSelection
      }, null) : null;

      var inputIcon = suffixIcon && (isValidElement(suffixIcon) ? cloneElement(suffixIcon, {
        class: "".concat(prefixCls, "-picker-icon")
      }) : _createVNode("span", {
        "class": "".concat(prefixCls, "-picker-icon")
      }, [suffixIcon])) || _createVNode(CalendarOutlined, {
        "class": "".concat(prefixCls, "-picker-icon")
      }, null);

      var input = function input(_ref) {
        var inputValue = _ref.value;
        return _createVNode("div", null, [_createVNode("input", {
          "ref": _this2.saveInput,
          "disabled": props.disabled,
          "onFocus": props.onFocus,
          "onBlur": props.onBlur,
          "readonly": true,
          "value": formatDate(inputValue, _this2.format),
          "placeholder": placeholder,
          "class": props.pickerInputClass,
          "tabindex": props.tabindex,
          "name": _this2.name
        }, null), clearIcon, inputIcon]);
      };

      var vcDatePickerProps = _extends(_extends(_extends({}, props), pickerProps), {
        calendar: calendar,
        value: value,
        prefixCls: "".concat(prefixCls, "-picker-container"),
        open: open,
        onOpenChange: this.handleOpenChange,
        style: props.popupStyle
      });

      return _createVNode("span", _objectSpread(_objectSpread({
        "id": props.id,
        "class": classNames(props.class, props.pickerClass),
        "style": _extends(_extends({}, pickerStyle), props.style)
      }, getDataAndAriaProps(this.$attrs)), {}, {
        "onMouseenter": this.onMouseEnter,
        "onMouseleave": this.onMouseLeave
      }), [_createVNode(VcDatePicker, vcDatePickerProps, _extends(_extends({}, $slots), {
        default: isEmptySlot($slots.default) ? input : $slots.default
      }))]);
    }
  });
}