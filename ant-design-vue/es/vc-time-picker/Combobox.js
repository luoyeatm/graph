import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import Select from './Select';
import BaseMixin from '../_util/BaseMixin';

var formatOption = function formatOption(option, disabledOptions) {
  var value = "".concat(option);

  if (option < 10) {
    value = "0".concat(option);
  }

  var disabled = false;

  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = {
  inheritAttrs: false,
  mixins: [BaseMixin],
  name: 'Combobox',
  props: {
    format: PropTypes.string,
    defaultOpenValue: PropTypes.object,
    prefixCls: PropTypes.string,
    value: PropTypes.object,
    // onChange: PropTypes.func,
    // onAmPmChange: PropTypes.func,
    showHour: PropTypes.looseBool,
    showMinute: PropTypes.looseBool,
    showSecond: PropTypes.looseBool,
    hourOptions: PropTypes.array,
    minuteOptions: PropTypes.array,
    secondOptions: PropTypes.array,
    disabledHours: PropTypes.func,
    disabledMinutes: PropTypes.func,
    disabledSeconds: PropTypes.func,
    // onCurrentSelectPanelChange: PropTypes.func,
    use12Hours: PropTypes.looseBool,
    isAM: PropTypes.looseBool
  },
  methods: {
    onItemChange: function onItemChange(type, itemValue) {
      var defaultOpenValue = this.defaultOpenValue,
          use12Hours = this.use12Hours,
          propValue = this.value,
          isAM = this.isAM;
      var value = (propValue || defaultOpenValue).clone();

      if (type === 'hour') {
        if (use12Hours) {
          if (isAM) {
            value.hour(+itemValue % 12);
          } else {
            value.hour(+itemValue % 12 + 12);
          }
        } else {
          value.hour(+itemValue);
        }
      } else if (type === 'minute') {
        value.minute(+itemValue);
      } else if (type === 'ampm') {
        var ampm = itemValue.toUpperCase();

        if (use12Hours) {
          if (ampm === 'PM' && value.hour() < 12) {
            value.hour(value.hour() % 12 + 12);
          }

          if (ampm === 'AM') {
            if (value.hour() >= 12) {
              value.hour(value.hour() - 12);
            }
          }
        }

        this.__emit('amPmChange', ampm);
      } else {
        value.second(+itemValue);
      }

      this.__emit('change', value);
    },
    onEnterSelectPanel: function onEnterSelectPanel(range) {
      this.__emit('currentSelectPanelChange', range);
    },
    onEsc: function onEsc(e) {
      this.__emit('esc', e);
    },
    getHourSelect: function getHourSelect(hour) {
      var _this = this;

      var prefixCls = this.prefixCls,
          hourOptions = this.hourOptions,
          disabledHours = this.disabledHours,
          showHour = this.showHour,
          use12Hours = this.use12Hours;

      if (!showHour) {
        return null;
      }

      var disabledOptions = disabledHours();
      var hourOptionsAdj;
      var hourAdj;

      if (use12Hours) {
        hourOptionsAdj = [12].concat(hourOptions.filter(function (h) {
          return h < 12 && h > 0;
        }));
        hourAdj = hour % 12 || 12;
      } else {
        hourOptionsAdj = hourOptions;
        hourAdj = hour;
      }

      return _createVNode(Select, {
        "prefixCls": prefixCls,
        "options": hourOptionsAdj.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        "selectedIndex": hourOptionsAdj.indexOf(hourAdj),
        "type": "hour",
        "onSelect": this.onItemChange,
        "onMouseenter": function onMouseenter() {
          return _this.onEnterSelectPanel('hour');
        },
        "onEsc": this.onEsc
      }, null);
    },
    getMinuteSelect: function getMinuteSelect(minute) {
      var _this2 = this;

      var prefixCls = this.prefixCls,
          minuteOptions = this.minuteOptions,
          disabledMinutes = this.disabledMinutes,
          defaultOpenValue = this.defaultOpenValue,
          showMinute = this.showMinute,
          propValue = this.value;

      if (!showMinute) {
        return null;
      }

      var value = propValue || defaultOpenValue;
      var disabledOptions = disabledMinutes(value.hour());
      return _createVNode(Select, {
        "prefixCls": prefixCls,
        "options": minuteOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        "selectedIndex": minuteOptions.indexOf(minute),
        "type": "minute",
        "onSelect": this.onItemChange,
        "onMouseenter": function onMouseenter() {
          return _this2.onEnterSelectPanel('minute');
        },
        "onEsc": this.onEsc
      }, null);
    },
    getSecondSelect: function getSecondSelect(second) {
      var _this3 = this;

      var prefixCls = this.prefixCls,
          secondOptions = this.secondOptions,
          disabledSeconds = this.disabledSeconds,
          showSecond = this.showSecond,
          defaultOpenValue = this.defaultOpenValue,
          propValue = this.value;

      if (!showSecond) {
        return null;
      }

      var value = propValue || defaultOpenValue;
      var disabledOptions = disabledSeconds(value.hour(), value.minute());
      return _createVNode(Select, {
        "prefixCls": prefixCls,
        "options": secondOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        "selectedIndex": secondOptions.indexOf(second),
        "type": "second",
        "onSelect": this.onItemChange,
        "onMouseenter": function onMouseenter() {
          return _this3.onEnterSelectPanel('second');
        },
        "onEsc": this.onEsc
      }, null);
    },
    getAMPMSelect: function getAMPMSelect() {
      var _this4 = this;

      var prefixCls = this.prefixCls,
          use12Hours = this.use12Hours,
          format = this.format,
          isAM = this.isAM;

      if (!use12Hours) {
        return null;
      }

      var AMPMOptions = ['am', 'pm'] // If format has A char, then we should uppercase AM/PM
      .map(function (c) {
        return format.match(/\sA/) ? c.toUpperCase() : c;
      }).map(function (c) {
        return {
          value: c
        };
      });
      var selected = isAM ? 0 : 1;
      return _createVNode(Select, {
        "prefixCls": prefixCls,
        "options": AMPMOptions,
        "selectedIndex": selected,
        "type": "ampm",
        "onSelect": this.onItemChange,
        "onMouseenter": function onMouseenter() {
          return _this4.onEnterSelectPanel('ampm');
        },
        "onEsc": this.onEsc
      }, null);
    }
  },
  render: function render() {
    var prefixCls = this.prefixCls,
        defaultOpenValue = this.defaultOpenValue,
        propValue = this.value;
    var value = propValue || defaultOpenValue;
    return _createVNode("div", {
      "class": "".concat(prefixCls, "-combobox")
    }, [this.getHourSelect(value.hour()), this.getMinuteSelect(value.minute()), this.getSecondSelect(value.second()), this.getAMPMSelect(value.hour())]);
  }
};
export default Combobox;