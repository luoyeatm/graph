"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireWildcard(require("../../_util/vue-types"));

var _classNames = _interopRequireDefault(require("../../_util/classNames"));

var _ColGroup = _interopRequireDefault(require("./ColGroup"));

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _ExpandableRow = _interopRequireDefault(require("./ExpandableRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function noop() {}

var BaseTable = {
  name: 'BaseTable',
  inheritAttrs: false,
  props: {
    fixed: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.looseBool])),
    columns: _vueTypes.default.array.isRequired,
    tableClassName: _vueTypes.default.string.isRequired,
    hasHead: _vueTypes.default.looseBool.isRequired,
    hasBody: _vueTypes.default.looseBool.isRequired,
    expander: _vueTypes.default.object.isRequired,
    getRowKey: _vueTypes.default.func,
    isAnyColumnsFixed: _vueTypes.default.looseBool
  },
  setup: function setup() {
    return {
      table: (0, _vue.inject)('table', function () {
        return {};
      }),
      store: (0, _vue.inject)('table-store', function () {
        return {};
      })
    };
  },
  methods: {
    getColumns: function getColumns(cols) {
      var _this$$props = this.$props,
          _this$$props$columns = _this$$props.columns,
          columns = _this$$props$columns === void 0 ? [] : _this$$props$columns,
          fixed = _this$$props.fixed;
      var table = this.table;
      var prefixCls = table.$props.prefixCls;
      return (cols || columns).map(function (column) {
        return _extends(_extends({}, column), {
          className: !!column.fixed && !fixed ? (0, _classNames.default)("".concat(prefixCls, "-fixed-columns-in-body"), column.className, column.class) : (0, _classNames.default)(column.className, column.class)
        });
      });
    },
    handleRowHover: function handleRowHover(isHover, key) {
      this.store.currentHoverKey = isHover ? key : null;
    },
    renderRows: function renderRows(renderData, indent) {
      var _this = this;

      var ancestorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var _Object$assign = _extends(_extends(_extends({}, this.table.$attrs), this.table.$props), this.table.$data),
          columnManager = _Object$assign.columnManager,
          components = _Object$assign.sComponents,
          prefixCls = _Object$assign.prefixCls,
          childrenColumnName = _Object$assign.childrenColumnName,
          rowClassName = _Object$assign.rowClassName,
          _Object$assign$custom = _Object$assign.customRow,
          customRow = _Object$assign$custom === void 0 ? noop : _Object$assign$custom,
          _Object$assign$onRowC = _Object$assign.onRowClick,
          onRowClick = _Object$assign$onRowC === void 0 ? noop : _Object$assign$onRowC,
          _Object$assign$onRowD = _Object$assign.onRowDoubleClick,
          onRowDoubleClick = _Object$assign$onRowD === void 0 ? noop : _Object$assign$onRowD,
          _Object$assign$onRowC2 = _Object$assign.onRowContextMenu,
          onRowContextMenu = _Object$assign$onRowC2 === void 0 ? noop : _Object$assign$onRowC2,
          _Object$assign$onRowM = _Object$assign.onRowMouseEnter,
          onRowMouseEnter = _Object$assign$onRowM === void 0 ? noop : _Object$assign$onRowM,
          _Object$assign$onRowM2 = _Object$assign.onRowMouseLeave,
          onRowMouseLeave = _Object$assign$onRowM2 === void 0 ? noop : _Object$assign$onRowM2,
          rowRef = _Object$assign.rowRef;

      var getRowKey = this.getRowKey,
          fixed = this.fixed,
          expander = this.expander,
          isAnyColumnsFixed = this.isAnyColumnsFixed;
      var rows = [];

      var _loop = function _loop(i) {
        var record = renderData[i];
        var key = getRowKey(record, i);
        var className = typeof rowClassName === 'string' ? rowClassName : rowClassName(record, i, indent);
        var onHoverProps = {};

        if (columnManager.isAnyColumnsFixed()) {
          onHoverProps.onHover = _this.handleRowHover;
        }

        var leafColumns = void 0;

        if (fixed === 'left') {
          leafColumns = columnManager.leftLeafColumns();
        } else if (fixed === 'right') {
          leafColumns = columnManager.rightLeafColumns();
        } else {
          leafColumns = _this.getColumns(columnManager.leafColumns());
        }

        var rowPrefixCls = "".concat(prefixCls, "-row");

        var expandableRowProps = _extends(_extends({}, expander.props), {
          fixed: fixed,
          index: i,
          prefixCls: rowPrefixCls,
          record: record,
          rowKey: key,
          needIndentSpaced: expander.needIndentSpaced,
          key: key,
          onRowClick: onRowClick,
          onExpandedChange: expander.handleExpandChange
        });

        var row = (0, _vue.createVNode)(_ExpandableRow.default, expandableRowProps, {
          default: function _default(expandableRow) {
            var tableRowProps = _extends(_extends(_extends({
              fixed: fixed,
              indent: indent,
              record: record,
              index: i,
              prefixCls: rowPrefixCls,
              childrenColumnName: childrenColumnName,
              columns: leafColumns,
              rowKey: key,
              ancestorKeys: ancestorKeys,
              components: components,
              isAnyColumnsFixed: isAnyColumnsFixed,
              customRow: customRow,
              onRowDoubleClick: onRowDoubleClick,
              onRowContextMenu: onRowContextMenu,
              onRowMouseEnter: onRowMouseEnter,
              onRowMouseLeave: onRowMouseLeave
            }, onHoverProps), {
              class: className,
              ref: rowRef(record, i, indent)
            }), expandableRow);

            return (0, _vue.createVNode)(_TableRow.default, tableRowProps, null);
          }
        });
        rows.push(row);
        expander.renderRows(_this.renderRows, rows, record, i, indent, fixed, key, ancestorKeys);
      };

      for (var i = 0; i < renderData.length; i += 1) {
        _loop(i);
      }

      return rows;
    }
  },
  render: function render() {
    var _this2 = this;

    var _this$table = this.table,
        components = _this$table.sComponents,
        prefixCls = _this$table.prefixCls,
        scroll = _this$table.scroll,
        data = _this$table.data;
    var _this$$props2 = this.$props,
        expander = _this$$props2.expander,
        tableClassName = _this$$props2.tableClassName,
        hasHead = _this$$props2.hasHead,
        hasBody = _this$$props2.hasBody,
        fixed = _this$$props2.fixed,
        isAnyColumnsFixed = _this$$props2.isAnyColumnsFixed;
    var columns = this.getColumns();
    var tableStyle = {};

    if (!fixed && scroll.x) {
      // ?????????????????????width auto ????????? body table ????????????????????????????????????????????????
      // ????????????https://github.com/ant-design/ant-design/issues/22160
      var tableWidthScrollX = isAnyColumnsFixed ? 'max-content' : 'auto'; // not set width, then use content fixed width

      tableStyle.width = scroll.x === true ? tableWidthScrollX : scroll.x;
      tableStyle.width = typeof tableStyle.width === 'number' ? "".concat(tableStyle.width, "px") : tableStyle.width;
    }

    if (fixed) {
      var width = columns.reduce(function (sum, _ref) {
        var w = _ref.width;
        return sum + parseFloat(w, 10);
      }, 0);

      if (width > 0) {
        tableStyle.width = width + 'px';
      }
    }

    var Table = hasBody ? components.table : 'table';
    var BodyWrapper = components.body.wrapper;
    var body;

    if (hasBody) {
      body = (0, _vue.createVNode)(BodyWrapper, {
        "class": "".concat(prefixCls, "-tbody")
      }, {
        default: function _default() {
          return [_this2.renderRows(data, 0)];
        }
      });
    }

    return (0, _vue.createVNode)(Table, {
      "class": tableClassName,
      "style": tableStyle,
      "key": "table"
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_ColGroup.default, {
          "columns": columns,
          "fixed": fixed
        }, null), hasHead && (0, _vue.createVNode)(_TableHeader.default, {
          "expander": expander,
          "columns": columns,
          "fixed": fixed
        }, null), body];
      }
    });
  }
};
var _default2 = BaseTable;
exports.default = _default2;