import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent, inject } from 'vue';
import { tuple } from '../_util/type';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import PlusOutlined from '@ant-design/icons-vue/PlusOutlined';
import VcTabs, { TabPane } from '../vc-tabs/src';
import TabContent from '../vc-tabs/src/TabContent';
import PropTypes, { withUndefined } from '../_util/vue-types';
import { getComponent, getOptionProps, filterEmpty, getPropsData, getSlot } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import isValid from '../_util/isValid';
import { defaultConfigProvider } from '../config-provider';
import TabBar from './TabBar';
export default defineComponent({
  TabPane: TabPane,
  name: 'ATabs',
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hideAdd: PropTypes.looseBool.def(false),
    centered: PropTypes.looseBool.def(false),
    tabBarStyle: PropTypes.object,
    tabBarExtraContent: PropTypes.any,
    destroyInactiveTabPane: PropTypes.looseBool.def(false),
    type: PropTypes.oneOf(tuple('line', 'card', 'editable-card')),
    tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
    size: PropTypes.oneOf(['default', 'small', 'large']),
    animated: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
    tabBarGutter: PropTypes.number,
    renderTabBar: PropTypes.func,
    onChange: {
      type: Function
    },
    onTabClick: PropTypes.func,
    onPrevClick: {
      type: Function
    },
    onNextClick: {
      type: Function
    },
    onEdit: {
      type: Function
    }
  },
  emits: ['update:activeKey', 'edit', 'change'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  methods: {
    removeTab: function removeTab(targetKey, e) {
      e.stopPropagation();

      if (isValid(targetKey)) {
        this.$emit('edit', targetKey, 'remove');
      }
    },
    handleChange: function handleChange(activeKey) {
      this.$emit('update:activeKey', activeKey);
      this.$emit('change', activeKey);
    },
    createNewTab: function createNewTab(targetKey) {
      this.$emit('edit', targetKey, 'add');
    }
  },
  render: function render() {
    var _cls,
        _this = this,
        _contentCls;

    var props = getOptionProps(this);
    var customizePrefixCls = props.prefixCls,
        size = props.size,
        _props$type = props.type,
        type = _props$type === void 0 ? 'line' : _props$type,
        tabPosition = props.tabPosition,
        _props$animated = props.animated,
        animated = _props$animated === void 0 ? true : _props$animated,
        hideAdd = props.hideAdd,
        renderTabBar = props.renderTabBar;

    var _a = this.$attrs,
        className = _a.class,
        restProps = __rest(_a, ["class"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tabs', customizePrefixCls);
    var children = filterEmpty(getSlot(this));
    var tabBarExtraContent = getComponent(this, 'tabBarExtraContent');
    var tabPaneAnimated = _typeof(animated) === 'object' ? animated.tabPane : animated; // card tabs should not have animation

    if (type !== 'line') {
      tabPaneAnimated = 'animated' in props ? tabPaneAnimated : false;
    }

    var cls = (_cls = {}, _defineProperty(_cls, className, className), _defineProperty(_cls, "".concat(prefixCls, "-vertical"), tabPosition === 'left' || tabPosition === 'right'), _defineProperty(_cls, "".concat(prefixCls, "-").concat(size), !!size), _defineProperty(_cls, "".concat(prefixCls, "-card"), type.indexOf('card') >= 0), _defineProperty(_cls, "".concat(prefixCls, "-").concat(type), true), _defineProperty(_cls, "".concat(prefixCls, "-no-animation"), !tabPaneAnimated), _cls); // only card type tabs can be added and closed

    var childrenWithClose = [];

    if (type === 'editable-card') {
      childrenWithClose = [];
      children.forEach(function (child, index) {
        var props = getPropsData(child);
        var closable = props.closable;
        closable = typeof closable === 'undefined' ? true : closable;
        var closeIcon = closable ? _createVNode(CloseOutlined, {
          "class": "".concat(prefixCls, "-close-x"),
          "onClick": function onClick(e) {
            return _this.removeTab(child.key, e);
          }
        }, null) : null;
        childrenWithClose.push(cloneElement(child, {
          tab: _createVNode("div", {
            "class": closable ? undefined : "".concat(prefixCls, "-tab-unclosable")
          }, [getComponent(child, 'tab'), closeIcon]),
          key: child.key || index
        }));
      }); // Add new tab handler

      if (!hideAdd) {
        tabBarExtraContent = _createVNode("span", null, [_createVNode(PlusOutlined, {
          "class": "".concat(prefixCls, "-new-tab"),
          "onClick": this.createNewTab
        }, null), tabBarExtraContent]);
      }
    }

    tabBarExtraContent = tabBarExtraContent ? _createVNode("div", {
      "class": "".concat(prefixCls, "-extra-content")
    }, [tabBarExtraContent]) : null;
    var renderTabBarSlot = renderTabBar || this.$slots.renderTabBar;

    var tabBarProps = _extends(_extends(_extends(_extends({}, props), {
      prefixCls: prefixCls,
      tabBarExtraContent: tabBarExtraContent,
      renderTabBar: renderTabBarSlot
    }), restProps), {
      children: children
    });

    var contentCls = (_contentCls = {}, _defineProperty(_contentCls, "".concat(prefixCls, "-").concat(tabPosition, "-content"), true), _defineProperty(_contentCls, "".concat(prefixCls, "-card-content"), type.indexOf('card') >= 0), _contentCls);

    var tabsProps = _extends(_extends(_extends(_extends({}, props), {
      prefixCls: prefixCls,
      tabBarPosition: tabPosition,
      // https://github.com/vueComponent/ant-design-vue/issues/2030
      // ???????????? tabBarProps ??????????????????????????? renderTabBar ???????????? on ?????????
      // ??????key???????????????babel jsx ??????????????????merge?????????TabBar?????????????????????????????????????????? tabBarProps
      renderTabBar: function renderTabBar() {
        return _createVNode(TabBar, _objectSpread({
          "key": "tabBar"
        }, tabBarProps), null);
      },
      renderTabContent: function renderTabContent() {
        return _createVNode(TabContent, {
          "class": contentCls,
          "animated": tabPaneAnimated,
          "animatedWithMargin": true
        }, null);
      },
      children: childrenWithClose.length > 0 ? childrenWithClose : children
    }), restProps), {
      onChange: this.handleChange,
      class: cls
    });

    return _createVNode(VcTabs, tabsProps, null);
  }
});