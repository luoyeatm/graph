"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _domAlign = require("dom-align");

var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));

var _vnode = require("../_util/vnode");

var _isVisible = _interopRequireDefault(require("../vc-util/Dom/isVisible"));

var _util = require("./util");

var _useBuffer3 = _interopRequireDefault(require("./hooks/useBuffer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};

function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (_typeof(point) !== 'object' || !point) return null;
  return point;
}

var _default = (0, _vue.defineComponent)({
  name: 'Align',
  props: alignProps,
  emits: ['align'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
        slots = _ref.slots;
    var cacheRef = (0, _vue.ref)({});
    var nodeRef = (0, _vue.ref)();
    var forceAlignPropsRef = (0, _vue.computed)(function () {
      return {
        disabled: props.disabled,
        target: props.target,
        onAlign: props.onAlign
      };
    });

    var _useBuffer = (0, _useBuffer3.default)(function () {
      var _forceAlignPropsRef$v = forceAlignPropsRef.value,
          latestDisabled = _forceAlignPropsRef$v.disabled,
          latestTarget = _forceAlignPropsRef$v.target,
          latestOnAlign = _forceAlignPropsRef$v.onAlign;

      if (!latestDisabled && latestTarget && nodeRef.value && nodeRef.value.$el) {
        var source = nodeRef.value.$el;
        var result;
        var element = getElement(latestTarget);
        var point = getPoint(latestTarget);
        cacheRef.value.element = element;
        cacheRef.value.point = point; // IE lose focus after element realign
        // We should record activeElement and restore later

        // IE lose focus after element realign
        // We should record activeElement and restore later
        var _document = document,
            activeElement = _document.activeElement; // We only align when element is visible

        // We only align when element is visible
        if (element && (0, _isVisible.default)(element)) {
          result = (0, _domAlign.alignElement)(source, element, props.align);
        } else if (point) {
          result = (0, _domAlign.alignPoint)(source, point, props.align);
        }

        (0, _util.restoreFocus)(activeElement, source);

        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }

        return true;
      }

      return false;
    }, (0, _vue.computed)(function () {
      return props.monitorBufferTime;
    })),
        _useBuffer2 = _slicedToArray(_useBuffer, 2),
        _forceAlign = _useBuffer2[0],
        cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
    // Listen for target updated


    var resizeMonitor = (0, _vue.ref)({
      cancel: function cancel() {}
    }); // Listen for source updated

    var sourceResizeMonitor = (0, _vue.ref)({
      cancel: function cancel() {}
    });

    var goAlign = function goAlign() {
      var target = props.target;
      var element = getElement(target);
      var point = getPoint(target);

      if (nodeRef.value && nodeRef.value.$el !== sourceResizeMonitor.value.element) {
        sourceResizeMonitor.value.cancel();
        sourceResizeMonitor.value.element = nodeRef.value.$el;
        sourceResizeMonitor.value.cancel = (0, _util.monitorResize)(nodeRef.value.$el, _forceAlign);
      }

      if (cacheRef.value.element !== element || !(0, _util.isSamePoint)(cacheRef.value.point, point)) {
        _forceAlign(); // Add resize observer


        if (resizeMonitor.value.element !== element) {
          resizeMonitor.value.cancel();
          resizeMonitor.value.element = element;
          resizeMonitor.value.cancel = (0, _util.monitorResize)(element, _forceAlign);
        }
      }
    };

    (0, _vue.onMounted)(function () {
      goAlign();
    });
    (0, _vue.onUpdated)(function () {
      goAlign();
    }); // Listen for disabled change

    (0, _vue.watch)(function () {
      return props.disabled;
    }, function (disabled) {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    }, {
      flush: 'post'
    }); // Listen for window resize

    var winResizeRef = (0, _vue.ref)(null);
    (0, _vue.watch)(function () {
      return props.monitorWindowResize;
    }, function (monitorWindowResize) {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = (0, _addEventListener.default)(window, 'resize', _forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: 'post'
    });
    (0, _vue.onUnmounted)(function () {
      resizeMonitor.value.cancel();
      sourceResizeMonitor.value.cancel();
      if (winResizeRef.value) winResizeRef.value.remove();
      cancelForceAlign();
    });
    expose({
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    });
    return function () {
      var child = slots === null || slots === void 0 ? void 0 : slots.default();

      if (child) {
        return (0, _vnode.cloneElement)(child[0], {
          ref: nodeRef
        });
      }

      return child && child[0];
    };
  }
});

exports.default = _default;