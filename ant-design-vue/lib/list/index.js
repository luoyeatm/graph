"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ListItemProps", {
  enumerable: true,
  get: function get() {
    return _Item.ListItemProps;
  }
});
Object.defineProperty(exports, "ListItemMetaProps", {
  enumerable: true,
  get: function get() {
    return _Item.ListItemMetaProps;
  }
});
Object.defineProperty(exports, "ListItemMeta", {
  enumerable: true,
  get: function get() {
    return _Item.ListItemMeta;
  }
});
exports.default = exports.ListProps = exports.ListSize = exports.ListGridType = exports.ColumnType = exports.ColumnCount = void 0;

var _vue = require("vue");

var _omit = _interopRequireDefault(require("omit.js"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _configProvider = require("../config-provider");

var _spin = _interopRequireDefault(require("../spin"));

var _pagination = _interopRequireWildcard(require("../pagination"));

var _grid = require("../grid");

var _Item = _interopRequireWildcard(require("./Item"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _vnode = require("../_util/vnode");

var _type = require("../_util/type");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var ColumnCount = ['', 1, 2, 3, 4, 6, 8, 12, 24];
exports.ColumnCount = ColumnCount;
var ColumnType = ['gutter', 'column', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
exports.ColumnType = ColumnType;
var ListGridType = {
  gutter: _vueTypes.default.number,
  column: _vueTypes.default.oneOf(ColumnCount),
  xs: _vueTypes.default.oneOf(ColumnCount),
  sm: _vueTypes.default.oneOf(ColumnCount),
  md: _vueTypes.default.oneOf(ColumnCount),
  lg: _vueTypes.default.oneOf(ColumnCount),
  xl: _vueTypes.default.oneOf(ColumnCount),
  xxl: _vueTypes.default.oneOf(ColumnCount)
};
exports.ListGridType = ListGridType;
var ListSize = (0, _type.tuple)('small', 'default', 'large');
exports.ListSize = ListSize;
var paginationProps = (0, _pagination.PaginationConfig)();

var ListProps = function ListProps() {
  return {
    bordered: _vueTypes.default.looseBool,
    dataSource: _vueTypes.default.array,
    extra: _vueTypes.default.any,
    grid: _vueTypes.default.shape(ListGridType).loose,
    itemLayout: _vueTypes.default.string,
    loading: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
    loadMore: _vueTypes.default.any,
    pagination: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.shape(paginationProps).loose, _vueTypes.default.looseBool])),
    prefixCls: _vueTypes.default.string,
    rowKey: _vueTypes.default.any,
    renderItem: _vueTypes.default.any,
    size: _vueTypes.default.oneOf(ListSize),
    split: _vueTypes.default.looseBool,
    header: _vueTypes.default.any,
    footer: _vueTypes.default.any,
    locale: _vueTypes.default.object
  };
};

exports.ListProps = ListProps;
var List = (0, _vue.defineComponent)({
  name: 'AList',
  inheritAttrs: false,
  Item: _Item.default,
  props: (0, _initDefaultProps.default)(ListProps(), {
    dataSource: [],
    bordered: false,
    split: true,
    loading: false,
    pagination: false
  }),
  setup: function setup() {
    return {
      keys: [],
      defaultPaginationProps: {},
      onPaginationChange: null,
      onPaginationShowSizeChange: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    var pagination = this.$props.pagination;
    var paginationObj = pagination && _typeof(pagination) === 'object' ? pagination : {};
    return {
      paginationCurrent: paginationObj.defaultCurrent || 1,
      paginationSize: paginationObj.defaultPageSize || 10
    };
  },
  created: function created() {
    var _this = this;

    (0, _vue.provide)('listContext', this);
    this.defaultPaginationProps = {
      current: 1,
      pageSize: 10,
      onChange: function onChange(page, pageSize) {
        var pagination = _this.pagination;
        _this.paginationCurrent = page;

        if (pagination && pagination.onChange) {
          pagination.onChange(page, pageSize);
        }
      },
      total: 0
    };
    this.onPaginationChange = this.triggerPaginationEvent('onChange');
    this.onPaginationShowSizeChange = this.triggerPaginationEvent('onShowSizeChange');
  },
  methods: {
    triggerPaginationEvent: function triggerPaginationEvent(eventName) {
      var _this2 = this;

      return function (page, pageSize) {
        var pagination = _this2.$props.pagination;
        _this2.paginationCurrent = page;
        _this2.paginationSize = pageSize;

        if (pagination && pagination[eventName]) {
          pagination[eventName](page, pageSize);
        }
      };
    },
    innerRenderItem: function innerRenderItem(item, index) {
      var renderItem = this.$slots.renderItem,
          rowKey = this.rowKey;
      var renderer = this.renderItem || renderItem;
      if (!renderer) return null;
      var key;

      if (typeof rowKey === 'function') {
        key = rowKey(item);
      } else if (typeof rowKey === 'string') {
        key = item[rowKey];
      } else {
        key = item.key;
      }

      if (!key) {
        key = "list-item-".concat(index);
      }

      this.keys[index] = key;
      return renderer({
        item: item,
        index: index
      });
    },
    isSomethingAfterLastItem: function isSomethingAfterLastItem() {
      var pagination = this.pagination;
      var loadMore = (0, _propsUtil.getComponent)(this, 'loadMore');
      var footer = (0, _propsUtil.getComponent)(this, 'footer');
      return !!(loadMore || pagination || footer);
    },
    renderEmpty: function renderEmpty(prefixCls, _renderEmpty) {
      var locale = this.locale;
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-empty-text")
      }, [locale && locale.emptyText || _renderEmpty('List')]);
    }
  },
  render: function render() {
    var _classNames,
        _this3 = this;

    var customizePrefixCls = this.prefixCls,
        bordered = this.bordered,
        split = this.split,
        itemLayout = this.itemLayout,
        pagination = this.pagination,
        grid = this.grid,
        _this$dataSource = this.dataSource,
        dataSource = _this$dataSource === void 0 ? [] : _this$dataSource,
        size = this.size,
        loading = this.loading,
        paginationCurrent = this.paginationCurrent,
        paginationSize = this.paginationSize,
        $attrs = this.$attrs;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('list', customizePrefixCls);

    var className = $attrs.class,
        restAttrs = __rest($attrs, ["class"]);

    var loadMore = (0, _propsUtil.getComponent)(this, 'loadMore');
    var footer = (0, _propsUtil.getComponent)(this, 'footer');
    var header = (0, _propsUtil.getComponent)(this, 'header');
    var children = (0, _propsUtil.getSlot)(this);
    var loadingProp = loading;

    if (typeof loadingProp === 'boolean') {
      loadingProp = {
        spinning: loadingProp
      };
    }

    var isLoading = loadingProp && loadingProp.spinning; // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      default:
        break;
    }

    var classString = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-split"), split), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), isLoading), _defineProperty(_classNames, "".concat(prefixCls, "-grid"), grid), _defineProperty(_classNames, "".concat(prefixCls, "-something-after-last-item"), this.isSomethingAfterLastItem()), _classNames), className);

    var paginationProps = _extends(_extends(_extends({}, this.defaultPaginationProps), {
      total: dataSource.length,
      current: paginationCurrent,
      pageSize: paginationSize
    }), pagination || {});

    classString;
    var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);

    if (paginationProps.current > largestPage) {
      paginationProps.current = largestPage;
    }

    var cls = paginationProps.class,
        style = paginationProps.style,
        restProps = __rest(paginationProps, ["class", "style"]);

    var paginationContent = pagination ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-pagination")
    }, [(0, _vue.createVNode)(_pagination.default, _extends(_extends({}, (0, _omit.default)(restProps, ['onChange'])), {
      class: cls,
      style: style,
      onChange: this.onPaginationChange,
      onShowSizeChange: this.onPaginationShowSizeChange
    }), null)]) : null;

    var splitDataSource = _toConsumableArray(dataSource);

    if (pagination) {
      if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
        splitDataSource = _toConsumableArray(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
      }
    }

    var childrenContent;
    childrenContent = isLoading && (0, _vue.createVNode)("div", {
      "style": {
        minHeight: 53
      }
    }, null);

    if (splitDataSource.length > 0) {
      var items = splitDataSource.map(function (item, index) {
        return _this3.innerRenderItem(item, index);
      });
      var childrenList = items.map(function (child, index) {
        return (0, _vnode.cloneElement)(child, {
          key: _this3.keys[index]
        });
      });
      childrenContent = grid ? (0, _vue.createVNode)(_grid.Row, {
        "gutter": grid.gutter
      }, {
        default: function _default() {
          return [childrenList];
        }
      }) : (0, _vue.createVNode)("ul", {
        "class": "".concat(prefixCls, "-items")
      }, [childrenList]);
    } else if (!children.length && !isLoading) {
      var renderEmpty = this.configProvider.renderEmpty;
      childrenContent = this.renderEmpty(prefixCls, renderEmpty);
    }

    var paginationPosition = paginationProps.position || 'bottom';
    return (0, _vue.createVNode)("div", _objectSpread({
      "class": classString
    }, restAttrs), [(paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-header")
    }, [header]), (0, _vue.createVNode)(_spin.default, loadingProp, {
      default: function _default() {
        return [childrenContent, children];
      }
    }), footer && (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footer]), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent]);
  }
});
/* istanbul ignore next */

List.install = function (app) {
  app.component(List.name, List);
  app.component(List.Item.name, List.Item);
  app.component(List.Item.Meta.displayName, List.Item.Meta);
  return app;
};

var _default2 = List;
exports.default = _default2;