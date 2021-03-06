"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.timeLineItemProps = void 0;

var _vue = require("vue");

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var timeLineItemProps = {
  prefixCls: _vueTypes.default.string,
  color: _vueTypes.default.string,
  dot: _vueTypes.default.any,
  pending: _vueTypes.default.looseBool,
  position: _vueTypes.default.oneOf((0, _type.tuple)('left', 'right', '')).def('')
};
exports.timeLineItemProps = timeLineItemProps;

var _default = (0, _vue.defineComponent)({
  name: 'ATimelineItem',
  props: (0, _initDefaultProps.default)(timeLineItemProps, {
    color: 'blue',
    pending: false
  }),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  render: function render() {
    var _classNames, _classNames2;

    var _a, _b;

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        _getOptionProps$color = _getOptionProps.color,
        color = _getOptionProps$color === void 0 ? '' : _getOptionProps$color,
        pending = _getOptionProps.pending;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('timeline', customizePrefixCls);
    var dot = (0, _propsUtil.getComponent)(this, 'dot');
    var itemClassName = (0, _classNames3.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-item-pending"), pending), _classNames));
    var dotClassName = (0, _classNames3.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-item-head"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-item-head-custom"), dot), _defineProperty(_classNames2, "".concat(prefixCls, "-item-head-").concat(color), true), _classNames2));
    return (0, _vue.createVNode)("li", {
      "class": itemClassName
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-item-tail")
    }, null), (0, _vue.createVNode)("div", {
      "class": dotClassName,
      "style": {
        borderColor: /blue|red|green|gray/.test(color) ? undefined : color
      }
    }, [dot]), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-item-content")
    }, [(_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)])]);
  }
});

exports.default = _default;