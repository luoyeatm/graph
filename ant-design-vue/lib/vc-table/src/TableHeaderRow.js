"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var TableHeaderRow = {
  name: 'TableHeaderRow',
  inheritAttrs: false,
  props: {
    index: _vueTypes.default.number,
    fixed: _vueTypes.default.string,
    columns: _vueTypes.default.array,
    rows: _vueTypes.default.array,
    row: _vueTypes.default.array,
    components: _vueTypes.default.object,
    customHeaderRow: _vueTypes.default.func,
    prefixCls: _vueTypes.default.prefixCls
  },
  setup: function setup(props) {
    var store = (0, _vue.inject)('table-store', function () {
      return {};
    });
    return {
      height: (0, _vue.computed)(function () {
        var fixedColumnsHeadRowsHeight = store.fixedColumnsHeadRowsHeight;
        var columns = props.columns,
            rows = props.rows,
            fixed = props.fixed;
        var headerHeight = fixedColumnsHeadRowsHeight[0];

        if (!fixed) {
          return null;
        }

        if (headerHeight && columns) {
          if (headerHeight === 'auto') {
            return 'auto';
          }

          return "".concat(headerHeight / rows.length, "px");
        }

        return null;
      })
    };
  },
  render: function render() {
    var row = this.row,
        index = this.index,
        height = this.height,
        components = this.components,
        customHeaderRow = this.customHeaderRow,
        prefixCls = this.prefixCls;
    var HeaderRow = components.header.row;
    var HeaderCell = components.header.cell;
    var rowProps = customHeaderRow(row.map(function (cell) {
      return cell.column;
    }), index);
    var customStyle = rowProps ? rowProps.style : {};

    var style = _extends({
      height: height
    }, customStyle);

    if (style.height === null) {
      delete style.height;
    }

    return (0, _vue.createVNode)(HeaderRow, _objectSpread(_objectSpread({}, rowProps), {}, {
      "style": style
    }), {
      default: function _default() {
        return [row.map(function (cell, i) {
          var _classNames;

          var column = cell.column,
              isLast = cell.isLast,
              children = cell.children,
              className = cell.className,
              cellProps = __rest(cell, ["column", "isLast", "children", "className"]);

          var customProps = column.customHeaderCell ? column.customHeaderCell(column) : {};

          var headerCellProps = _extends(_extends(_extends({}, cellProps), customProps), {
            key: column.key || column.dataIndex || i
          });

          if (column.align) {
            headerCellProps.style = _extends(_extends({}, customProps.style), {
              textAlign: column.align
            });
          }

          headerCellProps.class = (0, _classNames2.default)(customProps.class, customProps.className, column.class, column.className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-align-").concat(column.align), !!column.align), _defineProperty(_classNames, "".concat(prefixCls, "-row-cell-ellipsis"), !!column.ellipsis), _defineProperty(_classNames, "".concat(prefixCls, "-row-cell-break-word"), !!column.width), _defineProperty(_classNames, "".concat(prefixCls, "-row-cell-last"), isLast), _classNames));

          if (typeof HeaderCell === 'function') {
            return HeaderCell(headerCellProps, children);
          }

          return (0, _vue.createVNode)(HeaderCell, headerCellProps, {
            default: function _default() {
              return [children];
            }
          });
        })];
      }
    });
  }
};
var _default2 = TableHeaderRow;
exports.default = _default2;