"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _isFlexSupported = _interopRequireDefault(require("../_util/isFlexSupported"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _vue.defineComponent)({
  name: 'Steps',
  mixins: [_BaseMixin.default],
  props: {
    type: _vueTypes.default.string.def('default'),
    prefixCls: _vueTypes.default.string.def('rc-steps'),
    iconPrefix: _vueTypes.default.string.def('rc'),
    direction: _vueTypes.default.string.def('horizontal'),
    labelPlacement: _vueTypes.default.string.def('horizontal'),
    status: _vueTypes.default.string.def('process'),
    size: _vueTypes.default.string.def(''),
    progressDot: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func])),
    initial: _vueTypes.default.number.def(0),
    current: _vueTypes.default.number.def(0),
    icons: _vueTypes.default.shape({
      finish: _vueTypes.default.any,
      error: _vueTypes.default.any
    }).loose,
    canClick: _vueTypes.default.looseBool
  },
  data: function data() {
    this.calcStepOffsetWidth = (0, _debounce.default)(this.calcStepOffsetWidth, 150);
    return {
      flexSupported: true,
      lastStepOffsetWidth: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.calcStepOffsetWidth();

      if (!(0, _isFlexSupported.default)()) {
        _this.setState({
          flexSupported: false
        });
      }
    });
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.calcStepOffsetWidth();
    });
  },
  beforeUnmount: function beforeUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }

    if (this.calcStepOffsetWidth && this.calcStepOffsetWidth.cancel) {
      this.calcStepOffsetWidth.cancel();
    }
  },
  methods: {
    onStepClick: function onStepClick(next) {
      var current = this.$props.current;

      if (current !== next) {
        this.__emit('change', next);
      }
    },
    calcStepOffsetWidth: function calcStepOffsetWidth() {
      var _this3 = this;

      if ((0, _isFlexSupported.default)()) {
        return;
      }

      var lastStepOffsetWidth = this.$data.lastStepOffsetWidth; // Just for IE9

      var domNode = this.$refs.vcStepsRef;

      if (domNode.children.length > 0) {
        if (this.calcTimeout) {
          clearTimeout(this.calcTimeout);
        }

        this.calcTimeout = setTimeout(function () {
          // +1 for fit edge bug of digit width, like 35.4px
          var offsetWidth = (domNode.lastChild.offsetWidth || 0) + 1; // Reduce shake bug

          if (lastStepOffsetWidth === offsetWidth || Math.abs(lastStepOffsetWidth - offsetWidth) <= 3) {
            return;
          }

          _this3.setState({
            lastStepOffsetWidth: offsetWidth
          });
        });
      }
    }
  },
  render: function render() {
    var _classString,
        _this4 = this;

    var prefixCls = this.prefixCls,
        direction = this.direction,
        type = this.type,
        labelPlacement = this.labelPlacement,
        iconPrefix = this.iconPrefix,
        status = this.status,
        size = this.size,
        current = this.current,
        progressDot = this.progressDot,
        initial = this.initial,
        icons = this.icons,
        canClick = this.canClick;
    var isNav = type === 'navigation';
    var lastStepOffsetWidth = this.lastStepOffsetWidth,
        flexSupported = this.flexSupported;
    var filteredChildren = (0, _propsUtil.getSlot)(this);
    var lastIndex = filteredChildren.length - 1;
    var adjustedlabelPlacement = progressDot ? 'vertical' : labelPlacement;
    var classString = (_classString = {}, _defineProperty(_classString, prefixCls, true), _defineProperty(_classString, "".concat(prefixCls, "-").concat(direction), true), _defineProperty(_classString, "".concat(prefixCls, "-").concat(size), size), _defineProperty(_classString, "".concat(prefixCls, "-label-").concat(adjustedlabelPlacement), direction === 'horizontal'), _defineProperty(_classString, "".concat(prefixCls, "-dot"), !!progressDot), _defineProperty(_classString, "".concat(prefixCls, "-navigation"), isNav), _defineProperty(_classString, "".concat(prefixCls, "-flex-not-supported"), !flexSupported), _classString);
    var stepsProps = {
      class: classString,
      ref: 'vcStepsRef'
    };
    return (0, _vue.createVNode)("div", stepsProps, [filteredChildren.map(function (child, index) {
      var childProps = (0, _propsUtil.getPropsData)(child);
      var stepNumber = initial + index;

      var stepProps = _extends({
        stepNumber: "".concat(stepNumber + 1),
        stepIndex: stepNumber,
        prefixCls: prefixCls,
        iconPrefix: iconPrefix,
        progressDot: progressDot,
        icons: icons
      }, childProps);

      if (canClick) {
        stepProps.onStepClick = _this4.onStepClick;
      }

      if (!flexSupported && direction !== 'vertical') {
        if (isNav) {
          stepProps.itemWidth = "".concat(100 / (lastIndex + 1), "%");
          stepProps.adjustMarginRight = 0;
        } else if (index !== lastIndex) {
          stepProps.itemWidth = "".concat(100 / lastIndex, "%");
          stepProps.adjustMarginRight = "".concat(-Math.round(lastStepOffsetWidth / lastIndex + 1), "px");
        }
      } // fix tail color


      if (status === 'error' && index === current - 1) {
        stepProps.class = "".concat(prefixCls, "-next-error");
      }

      if (!childProps.status) {
        if (stepNumber === current) {
          stepProps.status = status;
        } else if (stepNumber < current) {
          stepProps.status = 'finish';
        } else {
          stepProps.status = 'wait';
        }
      }

      stepProps.active = stepNumber === current;
      return (0, _vnode.cloneElement)(child, stepProps);
    })]);
  }
});

exports.default = _default;