"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckOutlined"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _vcSteps = _interopRequireDefault(require("../vc-steps"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var stepsProps = {
  prefixCls: _vueTypes.default.string,
  iconPrefix: _vueTypes.default.string,
  current: _vueTypes.default.number,
  initial: _vueTypes.default.number,
  labelPlacement: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')).def('horizontal'),
  status: _vueTypes.default.oneOf((0, _type.tuple)('wait', 'process', 'finish', 'error')),
  size: _vueTypes.default.oneOf((0, _type.tuple)('default', 'small')),
  direction: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')),
  progressDot: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func])),
  type: _vueTypes.default.oneOf((0, _type.tuple)('default', 'navigation')),
  onChange: _vueTypes.default.func,
  'onUpdate:current': _vueTypes.default.func
};
var Steps = (0, _vue.defineComponent)({
  name: 'ASteps',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(stepsProps, {
    current: 0
  }),
  emits: ['update:current', 'change'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  Step: _extends(_extends({}, _vcSteps.default.Step), {
    name: 'AStep'
  }),
  methods: {
    handleChange: function handleChange(current) {
      this.$emit('update:current', current);
      this.$emit('change', current);
    }
  },
  render: function render() {
    var _this = this;

    var props = _extends(_extends({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs);

    var customizePrefixCls = props.prefixCls,
        customizeIconPrefixCls = props.iconPrefix;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('steps', customizePrefixCls);
    var iconPrefix = getPrefixCls('', customizeIconPrefixCls);
    var progressDot = (0, _propsUtil.getComponent)(this, 'progressDot', this, false);
    var icons = {
      finish: (0, _vue.createVNode)(_CheckOutlined.default, {
        "class": "".concat(prefixCls, "-finish-icon")
      }, null),
      error: (0, _vue.createVNode)(_CloseOutlined.default, {
        "class": "".concat(prefixCls, "-error-icon")
      }, null)
    };

    var stepsProps = _extends(_extends({
      icons: icons,
      iconPrefix: iconPrefix,
      prefixCls: prefixCls,
      progressDot: progressDot
    }, props), {
      canClick: !!(this.onChange || this['onUpdate:current']),
      onChange: this.handleChange
    });

    return (0, _vue.createVNode)(_vcSteps.default, stepsProps, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)];
      }
    });
  }
});
/* istanbul ignore next */

Steps.install = function (app) {
  app.component(Steps.name, Steps);
  app.component(Steps.Step.name, Steps.Step);
  return app;
};

var _default2 = Steps;
exports.default = _default2;