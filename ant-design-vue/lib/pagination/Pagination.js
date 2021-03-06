"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PaginationConfig = exports.PaginationProps = void 0;

var _vue = require("vue");

var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LeftOutlined"));

var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));

var _DoubleLeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DoubleLeftOutlined"));

var _DoubleRightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DoubleRightOutlined"));

var _type = require("../_util/type");

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _select = _interopRequireDefault(require("../select"));

var _MiniSelect = _interopRequireDefault(require("./MiniSelect"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _propsUtil = require("../_util/props-util");

var _vcPagination = _interopRequireDefault(require("../vc-pagination"));

var _en_US = _interopRequireDefault(require("../vc-pagination/locale/en_US"));

var _configProvider = require("../config-provider");

var _classNames = _interopRequireDefault(require("../_util/classNames"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var PaginationProps = function PaginationProps() {
  return {
    total: _vueTypes.default.number,
    defaultCurrent: _vueTypes.default.number,
    disabled: _vueTypes.default.looseBool,
    current: _vueTypes.default.number,
    defaultPageSize: _vueTypes.default.number,
    pageSize: _vueTypes.default.number,
    hideOnSinglePage: _vueTypes.default.looseBool,
    showSizeChanger: _vueTypes.default.looseBool,
    pageSizeOptions: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string])),
    buildOptionText: _vueTypes.default.func,
    showSizeChange: _vueTypes.default.func,
    showQuickJumper: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
    showTotal: _vueTypes.default.any,
    size: _vueTypes.default.string,
    simple: _vueTypes.default.looseBool,
    locale: _vueTypes.default.object,
    prefixCls: _vueTypes.default.string,
    selectPrefixCls: _vueTypes.default.string,
    itemRender: _vueTypes.default.func,
    role: _vueTypes.default.string,
    showLessItems: _vueTypes.default.looseBool,
    onChange: _vueTypes.default.func,
    onShowSizeChange: _vueTypes.default.func,
    'onUpdate:current': _vueTypes.default.func,
    'onUpdate:pageSize': _vueTypes.default.func
  };
};

exports.PaginationProps = PaginationProps;

var PaginationConfig = function PaginationConfig() {
  return _extends(_extends({}, PaginationProps()), {
    position: _vueTypes.default.oneOf((0, _type.tuple)('top', 'bottom', 'both'))
  });
};

exports.PaginationConfig = PaginationConfig;

var _default = (0, _vue.defineComponent)({
  name: 'APagination',
  inheritAttrs: false,
  props: _extends({}, PaginationProps()),
  emits: ['change', 'showSizeChange', 'update:current', 'update:pageSize'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  methods: {
    getIconsProps: function getIconsProps(prefixCls) {
      var prevIcon = (0, _vue.createVNode)("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, [(0, _vue.createVNode)(_LeftOutlined.default, null, null)]);
      var nextIcon = (0, _vue.createVNode)("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, [(0, _vue.createVNode)(_RightOutlined.default, null, null)]);
      var jumpPrevIcon = (0, _vue.createVNode)("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-item-container")
      }, [(0, _vue.createVNode)(_DoubleLeftOutlined.default, {
        "class": "".concat(prefixCls, "-item-link-icon")
      }, null), (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-item-ellipsis")
      }, [(0, _vue.createTextVNode)("\u2022\u2022\u2022")])])]);
      var jumpNextIcon = (0, _vue.createVNode)("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-item-container")
      }, [(0, _vue.createVNode)(_DoubleRightOutlined.default, {
        "class": "".concat(prefixCls, "-item-link-icon")
      }, null), (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-item-ellipsis")
      }, [(0, _vue.createTextVNode)("\u2022\u2022\u2022")])])]);
      return {
        prevIcon: prevIcon,
        nextIcon: nextIcon,
        jumpPrevIcon: jumpPrevIcon,
        jumpNextIcon: jumpNextIcon
      };
    },
    renderPagination: function renderPagination(contextLocale) {
      var _a = (0, _propsUtil.getOptionProps)(this),
          customizePrefixCls = _a.prefixCls,
          customizeSelectPrefixCls = _a.selectPrefixCls,
          buildOptionText = _a.buildOptionText,
          size = _a.size,
          customLocale = _a.locale,
          restProps = __rest(_a, ["prefixCls", "selectPrefixCls", "buildOptionText", "size", "locale"]);

      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('pagination', customizePrefixCls);
      var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
      var isSmall = size === 'small';

      var paginationProps = _extends(_extends(_extends(_extends(_extends({
        prefixCls: prefixCls,
        selectPrefixCls: selectPrefixCls
      }, restProps), this.getIconsProps(prefixCls)), {
        selectComponentClass: isSmall ? _MiniSelect.default : _select.default,
        locale: _extends(_extends({}, contextLocale), customLocale),
        buildOptionText: buildOptionText || this.$slots.buildOptionText
      }), this.$attrs), {
        class: (0, _classNames.default)({
          mini: isSmall
        }, this.$attrs.class),
        itemRender: this.itemRender || this.$slots.itemRender
      });

      return (0, _vue.createVNode)(_vcPagination.default, paginationProps, null);
    }
  },
  render: function render() {
    return (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "Pagination",
      "defaultLocale": _en_US.default,
      "children": this.renderPagination
    }, null);
  }
});

exports.default = _default;