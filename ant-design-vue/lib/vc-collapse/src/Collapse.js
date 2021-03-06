"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _vnode = require("../../_util/vnode");

var _openAnimationFactory = _interopRequireDefault(require("./openAnimationFactory"));

var _commonProps = require("./commonProps");

var _util = require("../../_util/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _toArray(activeKey) {
  var currentActiveKey = activeKey;

  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }

  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

var _default = (0, _vue.defineComponent)({
  name: 'Collapse',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)((0, _commonProps.collapseProps)(), {
    prefixCls: 'rc-collapse',
    accordion: false,
    destroyInactivePanel: false
  }),
  data: function data() {
    var _this$$props = this.$props,
        activeKey = _this$$props.activeKey,
        defaultActiveKey = _this$$props.defaultActiveKey,
        openAnimation = _this$$props.openAnimation,
        prefixCls = _this$$props.prefixCls;
    var currentActiveKey = defaultActiveKey;

    if ((0, _propsUtil.hasProp)(this, 'activeKey')) {
      currentActiveKey = activeKey;
    }

    var currentOpenAnimations = openAnimation || (0, _openAnimationFactory.default)(prefixCls);
    return {
      currentOpenAnimations: currentOpenAnimations,
      stateActiveKey: _toArray(currentActiveKey)
    };
  },
  watch: {
    activeKey: function activeKey(val) {
      this.setState({
        stateActiveKey: _toArray(val)
      });
    },
    openAnimation: function openAnimation(val) {
      this.setState({
        currentOpenAnimations: val
      });
    }
  },
  methods: {
    onClickItem: function onClickItem(key) {
      var activeKey = this.stateActiveKey;

      if (this.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = _toConsumableArray(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;

        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }

      this.setActiveKey(activeKey);
    },
    getNewChild: function getNewChild(child, index) {
      if ((0, _propsUtil.isEmptyElement)(child)) return;
      var activeKey = this.stateActiveKey;
      var _this$$props2 = this.$props,
          prefixCls = _this$$props2.prefixCls,
          accordion = _this$$props2.accordion,
          destroyInactivePanel = _this$$props2.destroyInactivePanel,
          expandIcon = _this$$props2.expandIcon; // If there is no key provide, use the panel order as default key

      var key = child.key || String(index);

      var _getPropsData = (0, _propsUtil.getPropsData)(child),
          header = _getPropsData.header,
          headerClass = _getPropsData.headerClass,
          disabled = _getPropsData.disabled;

      var isActive = false;

      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var panelEvents = {};

      if (!disabled && disabled !== '') {
        panelEvents = {
          onItemClick: this.onClickItem
        };
      }

      var props = _extends({
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: destroyInactivePanel,
        openAnimation: this.currentOpenAnimations,
        accordion: accordion,
        expandIcon: expandIcon
      }, panelEvents);

      return (0, _vnode.cloneElement)(child, props);
    },
    getItems: function getItems() {
      var _this = this;

      var newChildren = [];
      var children = (0, _propsUtil.getSlot)(this);
      children && children.forEach(function (child, index) {
        newChildren.push(_this.getNewChild(child, index));
      });
      return newChildren;
    },
    setActiveKey: function setActiveKey(activeKey) {
      if (!(0, _propsUtil.hasProp)(this, 'activeKey')) {
        this.setState({
          stateActiveKey: activeKey
        });
      }

      this.__emit('change', this.accordion ? activeKey[0] : activeKey);
    }
  },
  render: function render() {
    var _collapseClassName;

    var _this$$props3 = this.$props,
        prefixCls = _this$$props3.prefixCls,
        accordion = _this$$props3.accordion;
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    var collapseClassName = (_collapseClassName = {}, _defineProperty(_collapseClassName, prefixCls, true), _defineProperty(_collapseClassName, className, className), _collapseClassName);
    return (0, _vue.createVNode)("div", _objectSpread(_objectSpread({
      "class": collapseClassName
    }, (0, _util.getDataAndAriaProps)(this.$attrs)), {}, {
      "style": style,
      "role": accordion ? 'tablist' : null
    }), [this.getItems()]);
  }
});

exports.default = _default;