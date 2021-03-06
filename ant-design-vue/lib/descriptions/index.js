"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DescriptionsItem = exports.DescriptionsItemProps = void 0;

var _vue = require("vue");

var _warning = _interopRequireDefault(require("../_util/warning"));

var _responsiveObserve = _interopRequireWildcard(require("../_util/responsiveObserve"));

var _configProvider = require("../config-provider");

var _Row = _interopRequireDefault(require("./Row"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _type = require("../_util/type");

var _vnode = require("../_util/vnode");

var _propsUtil = require("../_util/props-util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DescriptionsItemProps = {
  prefixCls: _vueTypes.default.string,
  label: _vueTypes.default.any,
  span: _vueTypes.default.number
};
exports.DescriptionsItemProps = DescriptionsItemProps;
var DescriptionsItem = (0, _vue.defineComponent)({
  name: 'ADescriptionsItem',
  props: {
    prefixCls: _vueTypes.default.string,
    label: _vueTypes.default.VNodeChild,
    span: _vueTypes.default.number.def(1)
  },
  render: function render() {
    return null;
  }
});
exports.DescriptionsItem = DescriptionsItem;
var DEFAULT_COLUMN_MAP = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};

function getColumn(column, screens) {
  if (typeof column === 'number') {
    return column;
  }

  if (_typeof(column) === 'object') {
    for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
      var breakpoint = _responsiveObserve.responsiveArray[i];

      if (screens[breakpoint] && column[breakpoint] !== undefined) {
        return column[breakpoint] || DEFAULT_COLUMN_MAP[breakpoint];
      }
    }
  }

  return 3;
}

function getFilledItem(node, span, rowRestCol) {
  var clone = node;

  if (span === undefined || span > rowRestCol) {
    clone = (0, _vnode.cloneElement)(node, {
      span: rowRestCol
    });
    (0, _warning.default)(span === undefined, 'Descriptions', 'Sum of column `span` in a line not match `column` of Descriptions.');
  }

  return clone;
}

function getRows(children, column) {
  var childNodes = (0, _propsUtil.filterEmpty)(children);
  var rows = [];
  var tmpRow = [];
  var rowRestCol = column;
  childNodes.forEach(function (node, index) {
    var _a;

    var span = (_a = node.props) === null || _a === void 0 ? void 0 : _a.span;
    var mergedSpan = span || 1; // Additional handle last one

    if (index === childNodes.length - 1) {
      tmpRow.push(getFilledItem(node, span, rowRestCol));
      rows.push(tmpRow);
      return;
    }

    if (mergedSpan < rowRestCol) {
      rowRestCol -= mergedSpan;
      tmpRow.push(node);
    } else {
      tmpRow.push(getFilledItem(node, mergedSpan, rowRestCol));
      rows.push(tmpRow);
      rowRestCol = column;
      tmpRow = [];
    }
  });
  return rows;
}

var descriptionsProps = {
  prefixCls: _vueTypes.default.string,
  bordered: _vueTypes.default.looseBool,
  size: _vueTypes.default.oneOf((0, _type.tuple)('default', 'middle', 'small')).def('default'),
  title: _vueTypes.default.VNodeChild,
  extra: _vueTypes.default.VNodeChild,
  column: {
    type: [Number, Object],
    default: function _default() {
      return DEFAULT_COLUMN_MAP;
    }
  },
  layout: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')),
  colon: _vueTypes.default.looseBool
};
var Descriptions = (0, _vue.defineComponent)({
  name: 'ADescriptions',
  props: descriptionsProps,
  Item: DescriptionsItem,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _inject = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
        getPrefixCls = _inject.getPrefixCls;

    var token;
    var screens = (0, _vue.ref)({});
    (0, _vue.onMounted)(function () {
      token = _responsiveObserve.default.subscribe(function (screen) {
        if (_typeof(props.column) !== 'object') {
          return;
        }

        screens.value = screen;
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      _responsiveObserve.default.unsubscribe(token);
    });
    return function () {
      var _ref2;

      var _a, _b, _c;

      var customizePrefixCls = props.prefixCls,
          column = props.column,
          size = props.size,
          _props$bordered = props.bordered,
          bordered = _props$bordered === void 0 ? false : _props$bordered,
          _props$layout = props.layout,
          layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
          _props$colon = props.colon,
          colon = _props$colon === void 0 ? true : _props$colon,
          _props$title = props.title,
          title = _props$title === void 0 ? (_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$title,
          _props$extra = props.extra,
          extra = _props$extra === void 0 ? (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$extra;
      var prefixCls = getPrefixCls('descriptions', customizePrefixCls);
      var mergeColumn = getColumn(column, screens.value);
      var children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      var rows = getRows(children, mergeColumn);
      return (0, _vue.createVNode)("div", {
        "class": [prefixCls, (_ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls, "-").concat(size), size !== 'default'), _defineProperty(_ref2, "".concat(prefixCls, "-bordered"), !!bordered), _ref2)]
      }, [(title || extra) && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-header")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-title")
      }, [title]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-extra")
      }, [extra])]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-view")
      }, [(0, _vue.createVNode)("table", null, [(0, _vue.createVNode)("tbody", null, [rows.map(function (row, index) {
        return (0, _vue.createVNode)(_Row.default, {
          "key": index,
          "index": index,
          "colon": colon,
          "prefixCls": prefixCls,
          "vertical": layout === 'vertical',
          "bordered": bordered,
          "row": row
        }, null);
      })])])])]);
    };
  }
});

Descriptions.install = function (app) {
  app.component(Descriptions.name, Descriptions);
  app.component(Descriptions.Item.name, Descriptions.Item);
  return app;
};

var _default2 = Descriptions;
exports.default = _default2;