"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.collapseMotion = exports.TransitionGroup = exports.Transition = exports.getTransitionGroupProps = exports.getTransitionProps = void 0;

var _vue = require("vue");

var _propsUtil = require("./props-util");

var _this = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var getTransitionProps = function getTransitionProps(transitionName) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (process.env.NODE_ENV === 'test') {
    return opt;
  }

  var transitionProps = transitionName ? _extends({
    appear: true,
    appearFromClass: "".concat(transitionName, "-appear ").concat(transitionName, "-appear-prepare"),
    // appearActiveClass: `antdv-base-transtion`,
    appearToClass: "".concat(transitionName, "-appear ").concat(transitionName, "-appear-active"),
    enterFromClass: "".concat(transitionName, "-enter ").concat(transitionName, "-enter-prepare"),
    // enterActiveClass: `antdv-base-transtion`,
    enterToClass: "".concat(transitionName, "-enter ").concat(transitionName, "-enter-active"),
    leaveFromClass: " ".concat(transitionName, "-leave"),
    leaveActiveClass: "".concat(transitionName, "-leave ").concat(transitionName, "-leave-active"),
    leaveToClass: "".concat(transitionName, "-leave ").concat(transitionName, "-leave-active")
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};

exports.getTransitionProps = getTransitionProps;

var getTransitionGroupProps = function getTransitionGroupProps(transitionName) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var transitionProps = transitionName ? _extends({
    appear: true,
    appearFromClass: "".concat(transitionName, "-appear ").concat(transitionName, "-appear-prepare"),
    appearActiveClass: "".concat(transitionName),
    appearToClass: "".concat(transitionName, "-appear ").concat(transitionName, "-appear-active"),
    enterFromClass: "".concat(transitionName, "-appear ").concat(transitionName, "-enter ").concat(transitionName, "-appear-prepare ").concat(transitionName, "-enter-prepare"),
    enterActiveClass: "".concat(transitionName),
    enterToClass: "".concat(transitionName, "-enter ").concat(transitionName, "-appear ").concat(transitionName, "-appear-active ").concat(transitionName, "-enter-active"),
    leaveActiveClass: "".concat(transitionName, " ").concat(transitionName, "-leave"),
    leaveToClass: "".concat(transitionName, "-leave-active")
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};

exports.getTransitionGroupProps = getTransitionGroupProps;
var Transition = _vue.Transition;
exports.Transition = Transition;
var TransitionGroup = _vue.TransitionGroup;
exports.TransitionGroup = TransitionGroup;

if (process.env.NODE_ENV === 'test') {
  exports.Transition = Transition = function Transition(props, _ref) {
    var slots = _ref.slots;

    var _a, _b;

    var child = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];

    if (child && child.dirs && child.dirs[0]) {
      var value = child.dirs[0].value;
      var oldValue = child.dirs[0].oldValue;

      if (!value && value !== oldValue) {
        (0, _vue.nextTick)(function () {
          if (props.onAfterLeave) {
            props.onAfterLeave((0, _propsUtil.findDOMNode)(_this));
          }
        });
      }
    }

    return (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
  };

  Transition.displayName = 'TransitionForTest';
  Transition.inheritAttrs = false;
  exports.TransitionGroup = TransitionGroup = (0, _vue.defineComponent)({
    name: 'TransitionGroupForTest',
    inheritAttrs: false,
    props: ['tag', 'class'],
    setup: function setup(props, _ref2) {
      var slots = _ref2.slots;
      return function () {
        var _a;

        var Tag = props.tag,
            rest = __rest(props, ["tag"]);

        var children = ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || [];

        if (Tag) {
          return (0, _vue.createVNode)(Tag, rest, {
            default: function _default() {
              return [children];
            }
          });
        } else {
          return children;
        }
      };
    }
  });
} // ================== Collapse Motion ==================


var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: "".concat(node.scrollHeight, "px"),
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: "".concat(node.offsetHeight, "px")
  };
};

var collapseMotion = function collapseMotion(style, className) {
  return {
    name: 'ant-motion-collapse',
    appear: true,
    css: true,
    onBeforeEnter: function onBeforeEnter(node) {
      className.value = 'ant-motion-collapse';
      style.value = getCollapsedHeight(node);
    },
    onEnter: function onEnter(node) {
      (0, _vue.nextTick)(function () {
        style.value = getRealHeight(node);
      });
    },
    onAfterEnter: function onAfterEnter() {
      className.value = '';
      style.value = {};
    },
    onBeforeLeave: function onBeforeLeave(node) {
      className.value = 'ant-motion-collapse';
      style.value = getCurrentHeight(node);
    },
    onLeave: function onLeave(node) {
      window.setTimeout(function () {
        style.value = getCollapsedHeight(node);
      });
    },
    onAfterLeave: function onAfterLeave() {
      className.value = '';
      style.value = {};
    }
  };
};

exports.collapseMotion = collapseMotion;
var _default2 = Transition;
exports.default = _default2;