import { createVNode as _createVNode } from "vue";
import { inject } from 'vue';
import PropTypes from '../../_util/vue-types';
import TableHeaderRow from './TableHeaderRow';

function getHeaderRows(_ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$currentRow = _ref.currentRow,
      currentRow = _ref$currentRow === void 0 ? 0 : _ref$currentRow,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows,
      _ref$isLast = _ref.isLast,
      isLast = _ref$isLast === void 0 ? true : _ref$isLast;
  rows = rows || [];
  rows[currentRow] = rows[currentRow] || [];
  columns.forEach(function (column, i) {
    if (column.rowSpan && rows.length < column.rowSpan) {
      while (rows.length < column.rowSpan) {
        rows.push([]);
      }
    }

    var cellIsLast = isLast && i === columns.length - 1;
    var cell = {
      key: column.key,
      className: column.className || column.class || '',
      children: column.title,
      isLast: cellIsLast,
      column: column
    };

    if (column.children) {
      getHeaderRows({
        columns: column.children,
        currentRow: currentRow + 1,
        rows: rows,
        isLast: cellIsLast
      });
    }

    if ('colSpan' in column) {
      cell.colSpan = column.colSpan;
    }

    if ('rowSpan' in column) {
      cell.rowSpan = column.rowSpan;
    }

    if (cell.colSpan !== 0) {
      rows[currentRow].push(cell);
    }
  });
  return rows.filter(function (row) {
    return row.length > 0;
  });
}

export default {
  name: 'TableHeader',
  inheritAttrs: false,
  props: {
    fixed: PropTypes.string,
    columns: PropTypes.array.isRequired,
    expander: PropTypes.object.isRequired
  },
  setup: function setup() {
    return {
      table: inject('table', {})
    };
  },
  render: function render() {
    var _this$table = this.table,
        components = _this$table.sComponents,
        prefixCls = _this$table.prefixCls,
        showHeader = _this$table.showHeader,
        customHeaderRow = _this$table.customHeaderRow;
    var expander = this.expander,
        columns = this.columns,
        fixed = this.fixed;

    if (!showHeader) {
      return null;
    }

    var rows = getHeaderRows({
      columns: columns
    });
    expander.renderExpandIndentCell(rows, fixed);
    var HeaderWrapper = components.header.wrapper;
    return _createVNode(HeaderWrapper, {
      "class": "".concat(prefixCls, "-thead")
    }, {
      default: function _default() {
        return [rows.map(function (row, index) {
          return _createVNode(TableHeaderRow, {
            "prefixCls": prefixCls,
            "key": index,
            "index": index,
            "fixed": fixed,
            "columns": columns,
            "rows": rows,
            "row": row,
            "components": components,
            "customHeaderRow": customHeaderRow
          }, null);
        })];
      }
    });
  }
};