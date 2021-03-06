import { createVNode as _createVNode } from "vue";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, inject } from 'vue';
import Select from '../select';
import { Group, Button } from '../radio';
import PropTypes from '../_util/vue-types';
import { defaultConfigProvider } from '../config-provider';

function getMonthsLocale(value) {
  var current = value.clone();
  var localeData = value.localeData();
  var months = [];

  for (var i = 0; i < 12; i++) {
    current.month(i);
    months.push(localeData.monthsShort(current));
  }

  return months;
}

export var HeaderProps = {
  prefixCls: PropTypes.string,
  locale: PropTypes.any,
  fullscreen: PropTypes.looseBool,
  yearSelectOffset: PropTypes.number,
  yearSelectTotal: PropTypes.number,
  type: PropTypes.string,
  value: {
    type: Object
  },
  validRange: {
    type: Array
  },
  headerRender: PropTypes.func,
  onValueChange: PropTypes.func,
  onTypeChange: PropTypes.func
};
export default defineComponent({
  name: 'CalendarHeader',
  inheritAttrs: false,
  props: _extends(_extends({}, HeaderProps), {
    yearSelectOffset: PropTypes.number.def(10),
    yearSelectTotal: PropTypes.number.def(20)
  }),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      calendarHeaderNode: undefined
    };
  },
  // private calendarHeaderNode: HTMLDivElement;
  methods: {
    getYearSelectElement: function getYearSelectElement(prefixCls, year) {
      var _this = this;

      var yearSelectOffset = this.yearSelectOffset,
          yearSelectTotal = this.yearSelectTotal,
          _this$locale = this.locale,
          locale = _this$locale === void 0 ? {} : _this$locale,
          fullscreen = this.fullscreen,
          validRange = this.validRange;
      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;

      if (validRange) {
        start = validRange[0].get('year');
        end = validRange[1].get('year') + 1;
      }

      var suffix = locale && locale.year === '???' ? '???' : '';
      var options = [];

      for (var index = start; index < end; index++) {
        options.push({
          label: "".concat(index).concat(suffix),
          value: index
        });
      }

      return _createVNode(Select, {
        "size": fullscreen ? undefined : 'small',
        "class": "".concat(prefixCls, "-year-select"),
        "onChange": this.onYearChange,
        "value": year,
        "options": options,
        "getPopupContainer": function getPopupContainer() {
          return _this.calendarHeaderNode;
        }
      }, null);
    },
    getMonthSelectElement: function getMonthSelectElement(prefixCls, month, months) {
      var _this2 = this;

      var fullscreen = this.fullscreen,
          validRange = this.validRange,
          value = this.value;
      var start = 0;
      var end = 11;

      if (validRange) {
        var _validRange = _slicedToArray(validRange, 2),
            rangeStart = _validRange[0],
            rangeEnd = _validRange[1];

        var currentYear = value.get('year');

        if (rangeEnd.get('year') === currentYear) {
          end = rangeEnd.get('month') + 1;
        }

        if (rangeStart.get('year') === currentYear) {
          start = rangeStart.get('month');
        }
      }

      var options = [];

      for (var index = start; index <= end; index += 1) {
        options.push({
          label: months[index],
          value: index
        });
      }

      return _createVNode(Select, {
        "size": fullscreen ? undefined : 'small',
        "class": "".concat(prefixCls, "-month-select"),
        "value": month,
        "options": options,
        "onChange": this.onMonthChange,
        "getPopupContainer": function getPopupContainer() {
          return _this2.calendarHeaderNode;
        }
      }, null);
    },
    onYearChange: function onYearChange(year) {
      var value = this.value,
          validRange = this.validRange;
      var newValue = value.clone();
      newValue.year(parseInt(year, 10)); // switch the month so that it remains within range when year changes

      if (validRange) {
        var _validRange2 = _slicedToArray(validRange, 2),
            start = _validRange2[0],
            end = _validRange2[1];

        var newYear = newValue.get('year');
        var newMonth = newValue.get('month');

        if (newYear === end.get('year') && newMonth > end.get('month')) {
          newValue.month(end.get('month'));
        }

        if (newYear === start.get('year') && newMonth < start.get('month')) {
          newValue.month(start.get('month'));
        }
      }

      this.$emit('valueChange', newValue);
    },
    onMonthChange: function onMonthChange(month) {
      var newValue = this.value.clone();
      newValue.month(parseInt(month, 10));
      this.$emit('valueChange', newValue);
    },
    onInternalTypeChange: function onInternalTypeChange(e) {
      this.triggerTypeChange(e.target.value);
    },
    triggerTypeChange: function triggerTypeChange(val) {
      this.$emit('typeChange', val);
    },
    getMonthYearSelections: function getMonthYearSelections(getPrefixCls) {
      var _this$$props = this.$props,
          customizePrefixCls = _this$$props.prefixCls,
          type = _this$$props.type,
          value = _this$$props.value;
      var prefixCls = getPrefixCls('fullcalendar', customizePrefixCls);
      var yearReactNode = this.getYearSelectElement(prefixCls, value.year());
      var monthReactNode = type === 'month' ? this.getMonthSelectElement(prefixCls, value.month(), getMonthsLocale(value)) : null;
      return {
        yearReactNode: yearReactNode,
        monthReactNode: monthReactNode
      };
    },
    getTypeSwitch: function getTypeSwitch() {
      var _this$$props2 = this.$props,
          _this$$props2$locale = _this$$props2.locale,
          locale = _this$$props2$locale === void 0 ? {} : _this$$props2$locale,
          type = _this$$props2.type,
          fullscreen = _this$$props2.fullscreen;
      var size = fullscreen ? 'default' : 'small';
      return _createVNode(Group, {
        "onChange": this.onInternalTypeChange,
        "value": type,
        "size": size
      }, {
        default: function _default() {
          return [_createVNode(Button, {
            "value": "month"
          }, {
            default: function _default() {
              return [locale.month];
            }
          }), _createVNode(Button, {
            "value": "year"
          }, {
            default: function _default() {
              return [locale.year];
            }
          })];
        }
      });
    },
    triggerValueChange: function triggerValueChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['valueChange'].concat(args));
    },
    saveCalendarHeaderNode: function saveCalendarHeaderNode(node) {
      this.calendarHeaderNode = node;
    },
    headerRenderCustom: function headerRenderCustom(headerRender) {
      var _this$$props3 = this.$props,
          type = _this$$props3.type,
          value = _this$$props3.value;
      return headerRender({
        value: value,
        type: type || 'month',
        onChange: this.triggerValueChange,
        onTypeChange: this.triggerTypeChange
      });
    }
  },
  render: function render() {
    var customizePrefixCls = this.prefixCls,
        headerRender = this.headerRender;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('fullcalendar', customizePrefixCls);
    var typeSwitch = this.getTypeSwitch();

    var _this$getMonthYearSel = this.getMonthYearSelections(getPrefixCls),
        yearReactNode = _this$getMonthYearSel.yearReactNode,
        monthReactNode = _this$getMonthYearSel.monthReactNode;

    return headerRender ? this.headerRenderCustom(headerRender) : _createVNode("div", {
      "class": "".concat(prefixCls, "-header"),
      "ref": this.saveCalendarHeaderNode
    }, [yearReactNode, monthReactNode, typeSwitch]);
  }
});