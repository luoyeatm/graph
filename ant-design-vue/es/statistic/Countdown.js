import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue';
import moment from 'moment';
import interopDefault from '../_util/interopDefault';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import Statistic, { StatisticProps } from './Statistic';
import { formatCountdown as formatCD } from './utils';
var REFRESH_INTERVAL = 1000 / 30;

function getTime(value) {
  return interopDefault(moment)(value).valueOf();
}

export default defineComponent({
  name: 'AStatisticCountdown',
  props: initDefaultProps(StatisticProps, {
    format: 'HH:mm:ss'
  }),
  emits: ['finish', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var countdownId = ref();
    var statistic = ref();

    var syncTimer = function syncTimer() {
      var value = props.value;
      var timestamp = getTime(value);

      if (timestamp >= Date.now()) {
        startTimer();
      } else {
        stopTimer();
      }
    };

    var startTimer = function startTimer() {
      if (countdownId.value) return;
      var timestamp = getTime(props.value);
      countdownId.value = window.setInterval(function () {
        statistic.value.$forceUpdate();

        if (timestamp > Date.now()) {
          emit('change', timestamp - Date.now());
        }
      }, REFRESH_INTERVAL);
    };

    var stopTimer = function stopTimer() {
      var value = props.value;

      if (countdownId.value) {
        clearInterval(countdownId.value);
        countdownId.value = undefined;
        var timestamp = getTime(value);

        if (timestamp < Date.now()) {
          emit('finish');
        }
      }
    };

    var formatCountdown = function formatCountdown(_ref2) {
      var value = _ref2.value,
          config = _ref2.config;
      var format = props.format;
      return formatCD(value, _extends(_extends({}, config), {
        format: format
      }));
    };

    var valueRenderHtml = function valueRenderHtml(node) {
      return node;
    };

    onMounted(function () {
      syncTimer();
    });
    onUpdated(function () {
      syncTimer();
    });
    onBeforeUnmount(function () {
      stopTimer();
    });
    return function () {
      return _createVNode(Statistic, _objectSpread({
        "ref": statistic
      }, _extends(_extends({}, props), {
        valueRender: valueRenderHtml,
        formatter: formatCountdown
      })), null);
    };
  }
});