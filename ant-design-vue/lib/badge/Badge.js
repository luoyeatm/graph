"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.badgeProps = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _ScrollNumber = _interopRequireDefault(require("./ScrollNumber"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _transition = require("../_util/transition");

var _type = require("../_util/type");

var _Ribbon = _interopRequireDefault(require("./Ribbon"));

var _utils = require("./utils");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _isNumeric = _interopRequireDefault(require("../_util/isNumeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var badgeProps = {
  /** Number to show in badge */
  count: _vueTypes.default.any,
  showZero: _vueTypes.default.looseBool,

  /** Max count to show */
  overflowCount: _vueTypes.default.number.def(99),

  /** whether to show red dot without number */
  dot: _vueTypes.default.looseBool,
  prefixCls: _vueTypes.default.string,
  scrollNumberPrefixCls: _vueTypes.default.string,
  status: _vueTypes.default.oneOf((0, _type.tuple)('success', 'processing', 'default', 'error', 'warning')),
  // sync antd@4.6.0
  size: _vueTypes.default.oneOf((0, _type.tuple)('default', 'small')).def('default'),
  color: _vueTypes.default.string,
  text: _vueTypes.default.VNodeChild,
  offset: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([String, Number])),
  numberStyle: _vueTypes.default.style,
  title: _vueTypes.default.string
};
exports.badgeProps = badgeProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'ABadge',
  Ribbon: _Ribbon.default,
  inheritAttrs: false,
  props: badgeProps,
  slots: ['text', 'count'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = (0, _useConfigInject2.default)('badge', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction; // ================================ Misc ================================


    var numberedDisplayCount = (0, _vue.computed)(function () {
      return props.count > props.overflowCount ? "".concat(props.overflowCount, "+") : props.count;
    });
    var hasStatus = (0, _vue.computed)(function () {
      return props.status !== null && props.status !== undefined || props.color !== null && props.color !== undefined;
    });
    var isZero = (0, _vue.computed)(function () {
      return numberedDisplayCount.value === '0' || numberedDisplayCount.value === 0;
    });
    var showAsDot = (0, _vue.computed)(function () {
      return props.dot && !isZero.value || hasStatus.value;
    });
    var mergedCount = (0, _vue.computed)(function () {
      return showAsDot.value ? '' : numberedDisplayCount.value;
    });
    var isHidden = (0, _vue.computed)(function () {
      var isEmpty = mergedCount.value === null || mergedCount.value === undefined || mergedCount.value === '';
      return (isEmpty || isZero.value && !props.showZero) && !showAsDot.value;
    }); // Count should be cache in case hidden change it

    var livingCount = (0, _vue.ref)(props.count); // We need cache count since remove motion should not change count display

    var displayCount = (0, _vue.ref)(mergedCount.value); // We will cache the dot status to avoid shaking on leaved motion

    var isDotRef = (0, _vue.ref)(showAsDot.value);
    (0, _vue.watch)([function () {
      return props.count;
    }, mergedCount, showAsDot], function () {
      if (!isHidden.value) {
        livingCount.value = props.count;
        displayCount.value = mergedCount.value;
        isDotRef.value = showAsDot.value;
      }
    }, {
      immediate: true
    }); // Shared styles

    var statusCls = (0, _vue.computed)(function () {
      var _ref2;

      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-status-dot"), hasStatus.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-status-").concat(props.status), !!props.status), _defineProperty(_ref2, "".concat(prefixCls.value, "-status-").concat(props.color), (0, _utils.isPresetColor)(props.color)), _ref2;
    });
    var statusStyle = (0, _vue.computed)(function () {
      if (props.color && !(0, _utils.isPresetColor)(props.color)) {
        return {
          background: props.color
        };
      } else {
        return {};
      }
    });
    var scrollNumberCls = (0, _vue.computed)(function () {
      var _ref3;

      return _ref3 = {}, _defineProperty(_ref3, "".concat(prefixCls.value, "-dot"), isDotRef.value), _defineProperty(_ref3, "".concat(prefixCls.value, "-count"), !isDotRef.value), _defineProperty(_ref3, "".concat(prefixCls.value, "-count-sm"), props.size === 'small'), _defineProperty(_ref3, "".concat(prefixCls.value, "-multiple-words"), !isDotRef.value && displayCount.value && displayCount.value.toString().length > 1), _defineProperty(_ref3, "".concat(prefixCls.value, "-status-").concat(status), !!status), _defineProperty(_ref3, "".concat(prefixCls.value, "-status-").concat(props.color), (0, _utils.isPresetColor)(props.color)), _ref3;
    });
    return function () {
      var _classNames;

      var _a, _b;

      var offset = props.offset,
          title = props.title,
          color = props.color;
      var style = attrs.style;
      var text = (0, _propsUtil.getPropsSlot)(slots, props, 'text');
      var pre = prefixCls.value;
      var count = livingCount.value;
      var children = (0, _propsUtil.flattenChildren)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      children = children.length ? children : null;
      var visible = !!(!isHidden.value || slots.count); // =============================== Styles ===============================

      var mergedStyle = function () {
        if (!offset) {
          return _extends({}, style);
        }

        var offsetStyle = {
          marginTop: (0, _isNumeric.default)(offset[1]) ? "".concat(offset[1], "px") : offset[1]
        };

        if (direction.value === 'rtl') {
          offsetStyle.left = "".concat(parseInt(offset[0], 10), "px");
        } else {
          offsetStyle.right = "".concat(-parseInt(offset[0], 10), "px");
        }

        return _extends(_extends({}, offsetStyle), style);
      }(); // =============================== Render ===============================
      // >>> Title


      var titleNode = title !== null && title !== void 0 ? title : typeof count === 'string' || typeof count === 'number' ? count : undefined; // >>> Status Text

      var statusTextNode = visible || !text ? null : (0, _vue.createVNode)("span", {
        "class": "".concat(pre, "-status-text")
      }, [text]); // >>> Display Component

      var displayNode = (0, _vnode.cloneElement)((_b = slots.count) === null || _b === void 0 ? void 0 : _b.call(slots), {
        style: mergedStyle
      }, false);
      var badgeClassName = (0, _classNames2.default)(pre, (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-status"), hasStatus.value), _defineProperty(_classNames, "".concat(pre, "-not-a-wrapper"), !children), _defineProperty(_classNames, "".concat(pre, "-rtl"), direction.value === 'rtl'), _classNames), attrs.class); // <Badge status="success" />

      if (!children && hasStatus.value) {
        var statusTextColor = mergedStyle.color;
        return (0, _vue.createVNode)("span", _objectSpread(_objectSpread({}, attrs), {}, {
          "class": badgeClassName,
          "style": mergedStyle
        }), [(0, _vue.createVNode)("span", {
          "class": statusCls.value,
          "style": statusStyle.value
        }, null), (0, _vue.createVNode)("span", {
          "style": {
            color: statusTextColor
          },
          "class": "".concat(pre, "-status-text")
        }, [text])]);
      }

      var transitionProps = (0, _transition.getTransitionProps)(children ? "".concat(pre, "-zoom") : '', {
        appear: false
      });

      var scrollNumberStyle = _extends(_extends({}, mergedStyle), props.numberStyle);

      if (color && !(0, _utils.isPresetColor)(color)) {
        scrollNumberStyle = scrollNumberStyle || {};
        scrollNumberStyle.background = color;
      }

      return (0, _vue.createVNode)("span", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": badgeClassName
      }), [children, (0, _vue.createVNode)(_transition.Transition, transitionProps, {
        default: function _default() {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)(_ScrollNumber.default, {
            "prefixCls": props.scrollNumberPrefixCls,
            "show": visible,
            "class": scrollNumberCls.value,
            "count": displayCount.value,
            "title": titleNode,
            "style": scrollNumberStyle,
            "key": "scrollNumber"
          }, {
            default: function _default() {
              return [displayNode];
            }
          }), [[_vue.vShow, visible]])];
        }
      }), statusTextNode]);
    };
  }
});

exports.default = _default2;