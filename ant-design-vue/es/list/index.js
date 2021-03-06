import { createVNode as _createVNode } from "vue";

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

import { provide, inject, defineComponent } from 'vue';
import omit from 'omit.js';
import PropTypes, { withUndefined } from '../_util/vue-types';
import classNames from '../_util/classNames';
import { defaultConfigProvider } from '../config-provider';
import Spin from '../spin';
import Pagination, { PaginationConfig } from '../pagination';
import { Row } from '../grid';
import Item from './Item';
import { getComponent, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { cloneElement } from '../_util/vnode';
import { tuple } from '../_util/type';
export { ListItemProps, ListItemMetaProps, ListItemMeta } from './Item';
export var ColumnCount = ['', 1, 2, 3, 4, 6, 8, 12, 24];
export var ColumnType = ['gutter', 'column', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export var ListGridType = {
  gutter: PropTypes.number,
  column: PropTypes.oneOf(ColumnCount),
  xs: PropTypes.oneOf(ColumnCount),
  sm: PropTypes.oneOf(ColumnCount),
  md: PropTypes.oneOf(ColumnCount),
  lg: PropTypes.oneOf(ColumnCount),
  xl: PropTypes.oneOf(ColumnCount),
  xxl: PropTypes.oneOf(ColumnCount)
};
export var ListSize = tuple('small', 'default', 'large');
var paginationProps = PaginationConfig();
export var ListProps = function ListProps() {
  return {
    bordered: PropTypes.looseBool,
    dataSource: PropTypes.array,
    extra: PropTypes.any,
    grid: PropTypes.shape(ListGridType).loose,
    itemLayout: PropTypes.string,
    loading: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
    loadMore: PropTypes.any,
    pagination: withUndefined(PropTypes.oneOfType([PropTypes.shape(paginationProps).loose, PropTypes.looseBool])),
    prefixCls: PropTypes.string,
    rowKey: PropTypes.any,
    renderItem: PropTypes.any,
    size: PropTypes.oneOf(ListSize),
    split: PropTypes.looseBool,
    header: PropTypes.any,
    footer: PropTypes.any,
    locale: PropTypes.object
  };
};
var List = defineComponent({
  name: 'AList',
  inheritAttrs: false,
  Item: Item,
  props: initDefaultProps(ListProps(), {
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
      configProvider: inject('configProvider', defaultConfigProvider)
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

    provide('listContext', this);
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
      var loadMore = getComponent(this, 'loadMore');
      var footer = getComponent(this, 'footer');
      return !!(loadMore || pagination || footer);
    },
    renderEmpty: function renderEmpty(prefixCls, _renderEmpty) {
      var locale = this.locale;
      return _createVNode("div", {
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

    var loadMore = getComponent(this, 'loadMore');
    var footer = getComponent(this, 'footer');
    var header = getComponent(this, 'header');
    var children = getSlot(this);
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

    var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-split"), split), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), isLoading), _defineProperty(_classNames, "".concat(prefixCls, "-grid"), grid), _defineProperty(_classNames, "".concat(prefixCls, "-something-after-last-item"), this.isSomethingAfterLastItem()), _classNames), className);

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

    var paginationContent = pagination ? _createVNode("div", {
      "class": "".concat(prefixCls, "-pagination")
    }, [_createVNode(Pagination, _extends(_extends({}, omit(restProps, ['onChange'])), {
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
    childrenContent = isLoading && _createVNode("div", {
      "style": {
        minHeight: 53
      }
    }, null);

    if (splitDataSource.length > 0) {
      var items = splitDataSource.map(function (item, index) {
        return _this3.innerRenderItem(item, index);
      });
      var childrenList = items.map(function (child, index) {
        return cloneElement(child, {
          key: _this3.keys[index]
        });
      });
      childrenContent = grid ? _createVNode(Row, {
        "gutter": grid.gutter
      }, {
        default: function _default() {
          return [childrenList];
        }
      }) : _createVNode("ul", {
        "class": "".concat(prefixCls, "-items")
      }, [childrenList]);
    } else if (!children.length && !isLoading) {
      var renderEmpty = this.configProvider.renderEmpty;
      childrenContent = this.renderEmpty(prefixCls, renderEmpty);
    }

    var paginationPosition = paginationProps.position || 'bottom';
    return _createVNode("div", _objectSpread({
      "class": classString
    }, restAttrs), [(paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && _createVNode("div", {
      "class": "".concat(prefixCls, "-header")
    }, [header]), _createVNode(Spin, loadingProp, {
      default: function _default() {
        return [childrenContent, children];
      }
    }), footer && _createVNode("div", {
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

export default List;