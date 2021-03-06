"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _propsUtil = require("../_util/props-util");

var _vcCollapse = _interopRequireDefault(require("../vc-collapse"));

var _configProvider = require("../config-provider");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _default2 = (0, _vue.defineComponent)({
  name: 'ACollapsePanel',
  inheritAttrs: false,
  props: {
    openAnimation: _vueTypes.default.object,
    prefixCls: _vueTypes.default.string,
    header: _vueTypes.default.VNodeChild,
    headerClass: _vueTypes.default.string,
    showArrow: _vueTypes.default.looseBool,
    isActive: _vueTypes.default.looseBool,
    destroyInactivePanel: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool,
    accordion: _vueTypes.default.looseBool,
    forceRender: _vueTypes.default.looseBool,
    expandIcon: _vueTypes.default.func,
    extra: _vueTypes.default.VNodeChild,
    panelKey: _vueTypes.default.VNodeChild
  },
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  render: function render() {
    var _collapsePanelClassNa,
        _this = this;

    var customizePrefixCls = this.prefixCls,
        _this$showArrow = this.showArrow,
        showArrow = _this$showArrow === void 0 ? true : _this$showArrow;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('collapse', customizePrefixCls);

    var _a = this.$attrs,
        className = _a.class,
        restAttrs = __rest(_a, ["class"]);

    var collapsePanelClassName = (_collapsePanelClassNa = {}, _defineProperty(_collapsePanelClassNa, className, className), _defineProperty(_collapsePanelClassNa, "".concat(prefixCls, "-no-arrow"), !showArrow), _collapsePanelClassNa);

    var rcCollapePanelProps = _extends(_extends(_extends({}, (0, _propsUtil.getOptionProps)(this)), {
      header: (0, _propsUtil.getComponent)(this, 'header'),
      prefixCls: prefixCls,
      extra: (0, _propsUtil.getComponent)(this, 'extra'),
      class: collapsePanelClassName
    }), restAttrs);

    return (0, _vue.createVNode)(_vcCollapse.default.Panel, rcCollapePanelProps, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)];
      }
    });
  }
});

exports.default = _default2;