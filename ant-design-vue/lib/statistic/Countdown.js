"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _moment = _interopRequireDefault(require("moment"));

var _interopDefault = _interopRequireDefault(require("../_util/interopDefault"));

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _Statistic = _interopRequireWildcard(require("./Statistic"));

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var REFRESH_INTERVAL = 1000 / 30;

function getTime(value) {
  return (0, _interopDefault.default)(_moment.default)(value).valueOf();
}

var _default = (0, _vue.defineComponent)({
  name: 'AStatisticCountdown',
  props: (0, _initDefaultProps.default)(_Statistic.StatisticProps, {
    format: 'HH:mm:ss'
  }),
  emits: ['finish', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var countdownId = (0, _vue.ref)();
    var statistic = (0, _vue.ref)();

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
      return (0, _utils.formatCountdown)(value, _extends(_extends({}, config), {
        format: format
      }));
    };

    var valueRenderHtml = function valueRenderHtml(node) {
      return node;
    };

    (0, _vue.onMounted)(function () {
      syncTimer();
    });
    (0, _vue.onUpdated)(function () {
      syncTimer();
    });
    (0, _vue.onBeforeUnmount)(function () {
      stopTimer();
    });
    return function () {
      return (0, _vue.createVNode)(_Statistic.default, _objectSpread({
        "ref": statistic
      }, _extends(_extends({}, props), {
        valueRender: valueRenderHtml,
        formatter: formatCountdown
      })), null);
    };
  }
});

exports.default = _default;