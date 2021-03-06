"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _type = require("../_util/type");

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _PlusOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PlusOutlined"));

var _src = _interopRequireWildcard(require("../vc-tabs/src"));

var _TabContent = _interopRequireDefault(require("../vc-tabs/src/TabContent"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _isValid = _interopRequireDefault(require("../_util/isValid"));

var _configProvider = require("../config-provider");

var _TabBar = _interopRequireDefault(require("./TabBar"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _default = (0, _vue.defineComponent)({
  TabPane: _src.TabPane,
  name: 'ATabs',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    activeKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    defaultActiveKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    hideAdd: _vueTypes.default.looseBool.def(false),
    centered: _vueTypes.default.looseBool.def(false),
    tabBarStyle: _vueTypes.default.object,
    tabBarExtraContent: _vueTypes.default.any,
    destroyInactiveTabPane: _vueTypes.default.looseBool.def(false),
    type: _vueTypes.default.oneOf((0, _type.tuple)('line', 'card', 'editable-card')),
    tabPosition: _vueTypes.default.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
    size: _vueTypes.default.oneOf(['default', 'small', 'large']),
    animated: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
    tabBarGutter: _vueTypes.default.number,
    renderTabBar: _vueTypes.default.func,
    onChange: {
      type: Function
    },
    onTabClick: _vueTypes.default.func,
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
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  methods: {
    removeTab: function removeTab(targetKey, e) {
      e.stopPropagation();

      if ((0, _isValid.default)(targetKey)) {
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

    var props = (0, _propsUtil.getOptionProps)(this);
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
    var children = (0, _propsUtil.filterEmpty)((0, _propsUtil.getSlot)(this));
    var tabBarExtraContent = (0, _propsUtil.getComponent)(this, 'tabBarExtraContent');
    var tabPaneAnimated = _typeof(animated) === 'object' ? animated.tabPane : animated; // card tabs should not have animation

    if (type !== 'line') {
      tabPaneAnimated = 'animated' in props ? tabPaneAnimated : false;
    }

    var cls = (_cls = {}, _defineProperty(_cls, className, className), _defineProperty(_cls, "".concat(prefixCls, "-vertical"), tabPosition === 'left' || tabPosition === 'right'), _defineProperty(_cls, "".concat(prefixCls, "-").concat(size), !!size), _defineProperty(_cls, "".concat(prefixCls, "-card"), type.indexOf('card') >= 0), _defineProperty(_cls, "".concat(prefixCls, "-").concat(type), true), _defineProperty(_cls, "".concat(prefixCls, "-no-animation"), !tabPaneAnimated), _cls); // only card type tabs can be added and closed

    var childrenWithClose = [];

    if (type === 'editable-card') {
      childrenWithClose = [];
      children.forEach(function (child, index) {
        var props = (0, _propsUtil.getPropsData)(child);
        var closable = props.closable;
        closable = typeof closable === 'undefined' ? true : closable;
        var closeIcon = closable ? (0, _vue.createVNode)(_CloseOutlined.default, {
          "class": "".concat(prefixCls, "-close-x"),
          "onClick": function onClick(e) {
            return _this.removeTab(child.key, e);
          }
        }, null) : null;
        childrenWithClose.push((0, _vnode.cloneElement)(child, {
          tab: (0, _vue.createVNode)("div", {
            "class": closable ? undefined : "".concat(prefixCls, "-tab-unclosable")
          }, [(0, _propsUtil.getComponent)(child, 'tab'), closeIcon]),
          key: child.key || index
        }));
      }); // Add new tab handler

      if (!hideAdd) {
        tabBarExtraContent = (0, _vue.createVNode)("span", null, [(0, _vue.createVNode)(_PlusOutlined.default, {
          "class": "".concat(prefixCls, "-new-tab"),
          "onClick": this.createNewTab
        }, null), tabBarExtraContent]);
      }
    }

    tabBarExtraContent = tabBarExtraContent ? (0, _vue.createVNode)("div", {
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
        return (0, _vue.createVNode)(_TabBar.default, _objectSpread({
          "key": "tabBar"
        }, tabBarProps), null);
      },
      renderTabContent: function renderTabContent() {
        return (0, _vue.createVNode)(_TabContent.default, {
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

    return (0, _vue.createVNode)(_src.default, tabsProps, null);
  }
});

exports.default = _default;