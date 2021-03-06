"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vcTooltip = _interopRequireDefault(require("../vc-tooltip"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _placements = _interopRequireDefault(require("./placements"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _colors = require("../_util/colors");

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _configProvider = require("../config-provider");

var _abstractTooltipProps = _interopRequireDefault(require("./abstractTooltipProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = _extends({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var props = (0, _abstractTooltipProps.default)();
var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$"));

var tooltipProps = _extends(_extends({}, props), {
  title: _vueTypes.default.VNodeChild
});

var _default2 = (0, _vue.defineComponent)({
  name: 'ATooltip',
  inheritAttrs: false,
  props: tooltipProps,
  emits: ['update:visible', 'visibleChange'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      sVisible: !!this.$props.visible || !!this.$props.defaultVisible
    };
  },
  watch: {
    visible: function visible(val) {
      this.sVisible = val;
    }
  },
  methods: {
    handleVisibleChange: function handleVisibleChange(visible) {
      if (!(0, _propsUtil.hasProp)(this, 'visible')) {
        this.sVisible = this.isNoTitle() ? false : visible;
      }

      if (!this.isNoTitle()) {
        this.$emit('update:visible', visible);
        this.$emit('visibleChange', visible);
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.tooltip.getPopupDomNode();
    },
    getPlacements: function getPlacements() {
      var _this$$props = this.$props,
          builtinPlacements = _this$$props.builtinPlacements,
          arrowPointAtCenter = _this$$props.arrowPointAtCenter,
          autoAdjustOverflow = _this$$props.autoAdjustOverflow;
      return builtinPlacements || (0, _placements.default)({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    },
    // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18
    getDisabledCompatibleChildren: function getDisabledCompatibleChildren(ele) {
      if ((_typeof(ele.type) === 'object' && (ele.type.__ANT_BUTTON === true || ele.type.__ANT_SWITCH === true || ele.type.__ANT_CHECKBOX === true) || ele.type === 'button') && ele.props && (ele.props.disabled || ele.props.disabled === '')) {
        // Pick some layout related style properties up to span
        // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
        var _splitObject = splitObject((0, _propsUtil.getStyle)(ele), ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omitted = _splitObject.omitted;

        var spanStyle = _extends(_extends({
          display: 'inline-block'
        }, picked), {
          cursor: 'not-allowed',
          width: ele.props && ele.props.block ? '100%' : null
        });

        var buttonStyle = _extends(_extends({}, omitted), {
          pointerEvents: 'none'
        });

        var child = (0, _vnode.cloneElement)(ele, {
          style: buttonStyle
        }, true);
        return (0, _vue.createVNode)("span", {
          "style": spanStyle
        }, [child]);
      }

      return ele;
    },
    isNoTitle: function isNoTitle() {
      var title = (0, _propsUtil.getComponent)(this, 'title');
      return !title && title !== 0;
    },
    getOverlay: function getOverlay() {
      var title = (0, _propsUtil.getComponent)(this, 'title');

      if (title === 0) {
        return title;
      }

      return title || '';
    },
    // ?????????????????????
    onPopupAlign: function onPopupAlign(domNode, align) {
      var placements = this.getPlacements(); // ?????????????????????

      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];

      if (!placement) {
        return;
      } // ?????????????????????????????????


      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };

      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }

      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }

      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    }
  },
  render: function render() {
    var _classNames;

    var $props = this.$props,
        $data = this.$data,
        $attrs = this.$attrs;
    var customizePrefixCls = $props.prefixCls,
        openClassName = $props.openClassName,
        getPopupContainer = $props.getPopupContainer,
        color = $props.color,
        overlayClassName = $props.overlayClassName;
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    var children = this.children || (0, _propsUtil.filterEmpty)((0, _propsUtil.getSlot)(this));
    children = children.length === 1 ? children[0] : children;
    var sVisible = $data.sVisible; // Hide tooltip when there is no title

    if (!(0, _propsUtil.hasProp)(this, 'visible') && this.isNoTitle()) {
      sVisible = false;
    }

    if (!children) {
      return null;
    }

    var child = this.getDisabledCompatibleChildren((0, _propsUtil.isValidElement)(children) ? children : (0, _vue.createVNode)("span", null, [children]));
    var childCls = (0, _classNames3.default)((_classNames = {}, _defineProperty(_classNames, openClassName || "".concat(prefixCls, "-open"), sVisible), _defineProperty(_classNames, child.props && child.props.class, child.props && child.props.class), _classNames));
    var customOverlayClassName = (0, _classNames3.default)(overlayClassName, _defineProperty({}, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)));
    var formattedOverlayInnerStyle;
    var arrowContentStyle;

    if (color && !PresetColorRegex.test(color)) {
      formattedOverlayInnerStyle = {
        backgroundColor: color
      };
      arrowContentStyle = {
        backgroundColor: color
      };
    }

    var vcTooltipProps = _extends(_extends(_extends({}, $attrs), $props), {
      prefixCls: prefixCls,
      getTooltipContainer: getPopupContainer || getContextPopupContainer,
      builtinPlacements: this.getPlacements(),
      overlay: this.getOverlay(),
      visible: sVisible,
      ref: 'tooltip',
      overlayClassName: customOverlayClassName,
      overlayInnerStyle: formattedOverlayInnerStyle,
      arrowContent: (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-arrow-content"),
        "style": arrowContentStyle
      }, null),
      onVisibleChange: this.handleVisibleChange,
      onPopupAlign: this.onPopupAlign
    });

    return (0, _vue.createVNode)(_vcTooltip.default, vcTooltipProps, {
      default: function _default() {
        return [sVisible ? (0, _vnode.cloneElement)(child, {
          class: childCls
        }) : child];
      }
    });
  }
});

exports.default = _default2;