"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultTableProps = void 0;

var _vue = require("vue");

var _CaretUpFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CaretUpFilled"));

var _CaretDownFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CaretDownFilled"));

var _vcTable = _interopRequireWildcard(require("../vc-table"));

var _classNames5 = _interopRequireDefault(require("../_util/classNames"));

var _shallowequal = _interopRequireDefault(require("../_util/shallowequal"));

var _filterDropdown = _interopRequireDefault(require("./filterDropdown"));

var _SelectionBox = _interopRequireDefault(require("./SelectionBox"));

var _SelectionCheckboxAll = _interopRequireDefault(require("./SelectionCheckboxAll"));

var _Column = _interopRequireDefault(require("./Column"));

var _ColumnGroup = _interopRequireDefault(require("./ColumnGroup"));

var _createBodyRow = _interopRequireDefault(require("./createBodyRow"));

var _util = require("./util");

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _configProvider = require("../config-provider");

var _interface = require("./interface");

var _pagination = _interopRequireDefault(require("../pagination"));

var _spin = _interopRequireDefault(require("../spin"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _default3 = _interopRequireDefault(require("../locale-provider/default"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));

var _transButton = _interopRequireDefault(require("../_util/transButton"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function noop() {}

function stopPropagation(e) {
  e.stopPropagation();
}

function getRowSelection(props) {
  return props.rowSelection || {};
}

function getColumnKey(column, index) {
  return column.key || column.dataIndex || index;
}

function isSameColumn(a, b) {
  if (a && b && a.key && a.key === b.key) {
    return true;
  }

  return a === b || (0, _shallowequal.default)(a, b, function (value, other) {
    // https://github.com/ant-design/ant-design/issues/12737
    if (typeof value === 'function' && typeof other === 'function') {
      return value === other || value.toString() === other.toString();
    } // https://github.com/ant-design/ant-design/issues/19398


    if (Array.isArray(value) && Array.isArray(other)) {
      return value === other || (0, _shallowequal.default)(value, other);
    }
  });
}

var defaultPagination = {
  onChange: noop,
  onShowSizeChange: noop
};
/**
 * Avoid creating new object, so that parent component's shouldComponentUpdate
 * can works appropriately???
 */

var emptyObject = {};

var createComponents = function createComponents() {
  var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var bodyRow = components && components.body && components.body.row;
  return _extends(_extends({}, components), {
    body: _extends(_extends({}, components.body), {
      row: (0, _createBodyRow.default)(bodyRow)
    })
  });
};

function isTheSameComponents() {
  var components1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return components1 === components2 || ['table', 'header', 'body'].every(function (key) {
    return (0, _shallowequal.default)(components1[key], components2[key]);
  });
}

function getFilteredValueColumns(state, columns) {
  return (0, _util.flatFilter)(columns || (state || {}).columns || [], function (column) {
    return typeof column.filteredValue !== 'undefined';
  });
}

function getFiltersFromColumns(state, columns) {
  var filters = {};
  getFilteredValueColumns(state, columns).forEach(function (col) {
    var colKey = getColumnKey(col);
    filters[colKey] = col.filteredValue;
  });
  return filters;
}

function isFiltersChanged(state, filters) {
  if (Object.keys(filters).length !== Object.keys(state.filters).length) {
    return true;
  }

  return Object.keys(filters).some(function (columnKey) {
    return filters[columnKey] !== state.filters[columnKey];
  });
}

var defaultTableProps = (0, _initDefaultProps.default)(_interface.tableProps, {
  dataSource: [],
  useFixedHeader: false,
  // rowSelection: null,
  size: 'default',
  loading: false,
  bordered: false,
  indentSize: 20,
  locale: {},
  rowKey: 'key',
  showHeader: true,
  sortDirections: ['ascend', 'descend'],
  childrenColumnName: 'children'
});
exports.defaultTableProps = defaultTableProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'Table',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  Column: _Column.default,
  ColumnGroup: _ColumnGroup.default,
  props: defaultTableProps,
  setup: function setup(props) {
    var store = (0, _vue.reactive)({
      selectedRowKeys: getRowSelection(props).selectedRowKeys || [],
      selectionDirty: false
    });
    return {
      vcTable: null,
      checkboxPropsCache: {},
      store: store,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    var props = (0, _propsUtil.getOptionProps)(this);
    (0, _warning.default)(!props.expandedRowRender || !('scroll' in props), '`expandedRowRender` and `scroll` are not compatible. Please use one of them at one time.');
    var getDefaultSortOrder = this.getDefaultSortOrder,
        getDefaultFilters = this.getDefaultFilters,
        getDefaultPagination = this.getDefaultPagination;
    return _extends(_extends({}, getDefaultSortOrder(props.columns || [])), {
      // ????????????
      sFilters: getDefaultFilters(props.columns),
      sPagination: getDefaultPagination(this.$props),
      pivot: undefined,
      sComponents: (0, _vue.markRaw)(createComponents(this.components)),
      filterDataCnt: 0
    });
  },
  watch: {
    pagination: {
      handler: function handler(val) {
        this.setState(function (previousState) {
          var newPagination = _extends(_extends(_extends({}, defaultPagination), previousState.sPagination), val);

          newPagination.current = newPagination.current || 1;
          newPagination.pageSize = newPagination.pageSize || 10;
          return {
            sPagination: val !== false ? newPagination : emptyObject
          };
        });
      },
      deep: true
    },
    rowSelection: {
      handler: function handler(val, oldVal) {
        if (val && 'selectedRowKeys' in val) {
          this.store.selectedRowKeys = val.selectedRowKeys || [];
          var rowSelection = this.rowSelection;

          if (rowSelection && val.getCheckboxProps !== rowSelection.getCheckboxProps) {
            this.checkboxPropsCache = {};
          }
        } else if (oldVal && !val) {
          this.store.selectedRowKeys = [];
        }
      },
      deep: true
    },
    dataSource: function dataSource() {
      this.store.selectionDirty = false;
      this.checkboxPropsCache = {};
    },
    columns: function columns(val) {
      var filteredValueColumns = getFilteredValueColumns({
        columns: val
      }, val);

      if (filteredValueColumns.length > 0) {
        var filtersFromColumns = getFiltersFromColumns({
          columns: val
        }, val);

        var newFilters = _extends({}, this.sFilters);

        Object.keys(filtersFromColumns).forEach(function (key) {
          newFilters[key] = filtersFromColumns[key];
        });

        if (isFiltersChanged({
          filters: this.sFilters
        }, newFilters)) {
          this.setState({
            sFilters: newFilters
          });
        }
      }
    },
    components: {
      handler: function handler(val, oldVal) {
        if (!isTheSameComponents(val, oldVal)) {
          var components = createComponents(val);
          this.setState({
            sComponents: components
          });
        }
      },
      deep: true
    }
  },
  updated: function updated() {
    var columns = this.columns,
        sortColumn = this.sSortColumn,
        sortOrder = this.sSortOrder;

    if (this.getSortOrderColumns(columns).length > 0) {
      var sortState = this.getSortStateFromColumns(columns);

      if (!isSameColumn(sortState.sSortColumn, sortColumn) || sortState.sSortOrder !== sortOrder) {
        this.setState(sortState);
      }
    }
  },
  methods: {
    setTableRef: function setTableRef(table) {
      this.vcTable = table;
    },
    getCheckboxPropsByItem: function getCheckboxPropsByItem(item, index) {
      var rowSelection = getRowSelection(this.$props);

      if (!rowSelection.getCheckboxProps) {
        return {};
      }

      var key = this.getRecordKey(item, index); // Cache checkboxProps

      if (!this.checkboxPropsCache[key]) {
        this.checkboxPropsCache[key] = rowSelection.getCheckboxProps(item) || {};
      }

      return this.checkboxPropsCache[key];
    },
    getDefaultSelection: function getDefaultSelection() {
      var _this = this;

      var rowSelection = getRowSelection(this.$props);

      if (!rowSelection.getCheckboxProps) {
        return [];
      }

      return this.getFlatData().filter(function (item, rowIndex) {
        return _this.getCheckboxPropsByItem(item, rowIndex).defaultChecked;
      }).map(function (record, rowIndex) {
        return _this.getRecordKey(record, rowIndex);
      });
    },
    getDefaultPagination: function getDefaultPagination(props) {
      var pagination = _typeof(props.pagination) === 'object' ? props.pagination : {};
      var current;

      if ('current' in pagination) {
        current = pagination.current;
      } else if ('defaultCurrent' in pagination) {
        current = pagination.defaultCurrent;
      }

      var pageSize;

      if ('pageSize' in pagination) {
        pageSize = pagination.pageSize;
      } else if ('defaultPageSize' in pagination) {
        pageSize = pagination.defaultPageSize;
      }

      return this.hasPagination(props) ? _extends(_extends(_extends({}, defaultPagination), pagination), {
        current: current || 1,
        pageSize: pageSize || 10
      }) : {};
    },
    getSortOrderColumns: function getSortOrderColumns(columns) {
      return (0, _util.flatFilter)(columns || this.columns || [], function (column) {
        return 'sortOrder' in column;
      });
    },
    getDefaultFilters: function getDefaultFilters(columns) {
      var definedFilters = getFiltersFromColumns({
        columns: this.columns
      }, columns);
      var defaultFilteredValueColumns = (0, _util.flatFilter)(columns || [], function (column) {
        return typeof column.defaultFilteredValue !== 'undefined';
      });
      var defaultFilters = defaultFilteredValueColumns.reduce(function (soFar, col) {
        var colKey = getColumnKey(col);
        soFar[colKey] = col.defaultFilteredValue;
        return soFar;
      }, {});
      return _extends(_extends({}, defaultFilters), definedFilters);
    },
    getDefaultSortOrder: function getDefaultSortOrder(columns) {
      var definedSortState = this.getSortStateFromColumns(columns);
      var defaultSortedColumn = (0, _util.flatFilter)(columns || [], function (column) {
        return column.defaultSortOrder != null;
      })[0];

      if (defaultSortedColumn && !definedSortState.sortColumn) {
        return {
          sSortColumn: defaultSortedColumn,
          sSortOrder: defaultSortedColumn.defaultSortOrder
        };
      }

      return definedSortState;
    },
    getSortStateFromColumns: function getSortStateFromColumns(columns) {
      // return first column which sortOrder is not falsy
      var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
        return col.sortOrder;
      })[0];

      if (sortedColumn) {
        return {
          sSortColumn: sortedColumn,
          sSortOrder: sortedColumn.sortOrder
        };
      }

      return {
        sSortColumn: null,
        sSortOrder: null
      };
    },
    getMaxCurrent: function getMaxCurrent(total) {
      var _this$sPagination = this.sPagination,
          current = _this$sPagination.current,
          pageSize = _this$sPagination.pageSize;

      if ((current - 1) * pageSize >= total) {
        return Math.floor((total - 1) / pageSize) + 1;
      }

      return current;
    },
    getRecordKey: function getRecordKey(record, index) {
      var rowKey = this.rowKey;
      var recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
      (0, _warning.default)(recordKey !== undefined, 'Table', 'Each record in dataSource of table should have a unique `key` prop, ' + 'or set `rowKey` of Table to an unique primary key, ');
      return recordKey === undefined ? index : recordKey;
    },
    getSorterFn: function getSorterFn(state) {
      var _ref = state || this.$data,
          sortOrder = _ref.sSortOrder,
          sortColumn = _ref.sSortColumn;

      if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
        return;
      }

      return function (a, b) {
        var result = sortColumn.sorter(a, b, sortOrder);

        if (result !== 0) {
          return sortOrder === 'descend' ? -result : result;
        }

        return 0;
      };
    },
    getCurrentPageData: function getCurrentPageData() {
      var data = this.getLocalData();
      this.filterDataCnt = data.length;
      var current;
      var pageSize;
      var sPagination = this.sPagination; // ?????????????????????????????????????????????

      if (!this.hasPagination()) {
        pageSize = Number.MAX_VALUE;
        current = 1;
      } else {
        pageSize = sPagination.pageSize;
        current = this.getMaxCurrent(sPagination.total || data.length);
      } // ??????
      // ---
      // ????????????????????????????????????????????????????????????
      // ??????????????????????????????


      if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
        data = data.slice((current - 1) * pageSize, current * pageSize);
      }

      return data;
    },
    getFlatData: function getFlatData() {
      var childrenColumnName = this.$props.childrenColumnName;
      return (0, _util.flatArray)(this.getLocalData(null, false), childrenColumnName);
    },
    getFlatCurrentPageData: function getFlatCurrentPageData() {
      var childrenColumnName = this.$props.childrenColumnName;
      return (0, _util.flatArray)(this.getCurrentPageData(), childrenColumnName);
    },
    getLocalData: function getLocalData(state) {
      var _this2 = this;

      var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var currentState = state || this.$data;
      var filters = currentState.sFilters;
      var dataSource = this.$props.dataSource;
      var data = dataSource || []; // ??????????????????

      data = data.slice(0);
      var sorterFn = this.getSorterFn(currentState);

      if (sorterFn) {
        // ???????????????????????????????????????????????????????????????
        // https://github.com/vueComponent/ant-design-vue/issues/2270
        data = this.recursiveSort(_toConsumableArray(data), sorterFn);
      } // ??????


      if (filter && filters) {
        Object.keys(filters).forEach(function (columnKey) {
          var col = _this2.findColumn(columnKey);

          if (!col) {
            return;
          }

          var values = filters[columnKey] || [];

          if (values.length === 0) {
            return;
          }

          var onFilter = col.onFilter;
          data = onFilter ? data.filter(function (record) {
            return values.some(function (v) {
              return onFilter(v, record);
            });
          }) : data;
        });
      }

      return data;
    },
    onRow: function onRow(prefixCls, record, index) {
      var customRow = this.customRow;
      var custom = customRow ? customRow(record, index) : {};
      return _extends(_extends({}, custom), {
        prefixCls: prefixCls,
        store: this.store,
        rowKey: this.getRecordKey(record, index)
      });
    },
    setSelectedRowKeys: function setSelectedRowKeys(selectedRowKeys, selectionInfo) {
      var _this3 = this;

      var selectWay = selectionInfo.selectWay,
          record = selectionInfo.record,
          checked = selectionInfo.checked,
          changeRowKeys = selectionInfo.changeRowKeys,
          nativeEvent = selectionInfo.nativeEvent;
      var rowSelection = getRowSelection(this.$props);

      if (rowSelection && !('selectedRowKeys' in rowSelection)) {
        this.store.selectedRowKeys = selectedRowKeys;
      }

      var data = this.getFlatData();

      if (!rowSelection.onChange && !rowSelection[selectWay]) {
        return;
      }

      var selectedRows = data.filter(function (row, i) {
        return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
      });

      if (rowSelection.onChange) {
        rowSelection.onChange(selectedRowKeys, selectedRows);
      }

      if (selectWay === 'onSelect' && rowSelection.onSelect) {
        rowSelection.onSelect(record, checked, selectedRows, nativeEvent);
      } else if (selectWay === 'onSelectMultiple' && rowSelection.onSelectMultiple) {
        var changeRows = data.filter(function (row, i) {
          return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
        });
        rowSelection.onSelectMultiple(checked, selectedRows, changeRows);
      } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
        var _changeRows = data.filter(function (row, i) {
          return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
        });

        rowSelection.onSelectAll(checked, selectedRows, _changeRows);
      } else if (selectWay === 'onSelectInvert' && rowSelection.onSelectInvert) {
        rowSelection.onSelectInvert(selectedRowKeys);
      }
    },
    generatePopupContainerFunc: function generatePopupContainerFunc(getPopupContainer) {
      var scroll = this.$props.scroll;
      var table = this.vcTable;

      if (getPopupContainer) {
        return getPopupContainer;
      } // Use undefined to let rc component use default logic.


      return scroll && table ? function () {
        return table.tableNode;
      } : undefined;
    },
    scrollToFirstRow: function scrollToFirstRow() {
      var _this4 = this;

      var scroll = this.$props.scroll;

      if (scroll && scroll.scrollToFirstRowOnChange !== false) {
        (0, _scrollTo.default)(0, {
          getContainer: function getContainer() {
            return _this4.vcTable.ref_bodyTable;
          }
        });
      }
    },
    isSameColumn: function isSameColumn(a, b) {
      if (a && b && a.key && a.key === b.key) {
        return true;
      }

      return a === b || (0, _shallowequal.default)(a, b, function (value, other) {
        if (typeof value === 'function' && typeof other === 'function') {
          return value === other || value.toString() === other.toString();
        }
      });
    },
    handleFilter: function handleFilter(column, nextFilters) {
      var _this5 = this;

      var props = this.$props;

      var pagination = _extends({}, this.sPagination);

      var filters = _extends(_extends({}, this.sFilters), _defineProperty({}, getColumnKey(column), nextFilters)); // Remove filters not in current columns


      var currentColumnKeys = [];
      (0, _util.treeMap)(this.columns, function (c) {
        if (!c.children) {
          currentColumnKeys.push(getColumnKey(c));
        }
      });
      Object.keys(filters).forEach(function (columnKey) {
        if (currentColumnKeys.indexOf(columnKey) < 0) {
          delete filters[columnKey];
        }
      });

      if (props.pagination) {
        // Reset current prop
        pagination.current = 1;
        pagination.onChange(pagination.current);
      }

      var newState = {
        sPagination: pagination,
        sFilters: {}
      };

      var filtersToSetState = _extends({}, filters); // Remove filters which is controlled


      getFilteredValueColumns({
        columns: props.columns
      }).forEach(function (col) {
        var columnKey = getColumnKey(col);

        if (columnKey) {
          delete filtersToSetState[columnKey];
        }
      });

      if (Object.keys(filtersToSetState).length > 0) {
        newState.sFilters = filtersToSetState;
      } // Controlled current prop will not respond user interaction


      if (_typeof(props.pagination) === 'object' && 'current' in props.pagination) {
        newState.sPagination = _extends(_extends({}, pagination), {
          current: this.sPagination.current
        });
      }

      this.setState(newState, function () {
        _this5.scrollToFirstRow();

        _this5.store.selectionDirty = false;

        _this5.$emit.apply(_this5, ['change'].concat(_toConsumableArray(_this5.prepareParamsArguments(_extends(_extends({}, _this5.$data), {
          sSelectionDirty: false,
          sFilters: filters,
          sPagination: pagination
        })))));
      });
    },
    handleSelect: function handleSelect(record, rowIndex, e) {
      var _this6 = this;

      var checked = e.target.checked;
      var nativeEvent = e.nativeEvent;
      var defaultSelection = this.store.selectionDirty ? [] : this.getDefaultSelection();
      var selectedRowKeys = this.store.selectedRowKeys.concat(defaultSelection);
      var key = this.getRecordKey(record, rowIndex);
      var pivot = this.$data.pivot;
      var rows = this.getFlatCurrentPageData();
      var realIndex = rowIndex;

      if (this.$props.expandedRowRender) {
        realIndex = rows.findIndex(function (row) {
          return _this6.getRecordKey(row, rowIndex) === key;
        });
      }

      if (nativeEvent.shiftKey && pivot !== undefined && realIndex !== pivot) {
        var changeRowKeys = [];
        var direction = Math.sign(pivot - realIndex);
        var dist = Math.abs(pivot - realIndex);
        var step = 0;

        var _loop = function _loop() {
          var i = realIndex + step * direction;
          step += 1;
          var row = rows[i];

          var rowKey = _this6.getRecordKey(row, i);

          var checkboxProps = _this6.getCheckboxPropsByItem(row, i);

          if (!checkboxProps.disabled) {
            if (selectedRowKeys.includes(rowKey)) {
              if (!checked) {
                selectedRowKeys = selectedRowKeys.filter(function (j) {
                  return rowKey !== j;
                });
                changeRowKeys.push(rowKey);
              }
            } else if (checked) {
              selectedRowKeys.push(rowKey);
              changeRowKeys.push(rowKey);
            }
          }
        };

        while (step <= dist) {
          _loop();
        }

        this.setState({
          pivot: realIndex
        });
        this.store.selectionDirty = true;
        this.setSelectedRowKeys(selectedRowKeys, {
          selectWay: 'onSelectMultiple',
          record: record,
          checked: checked,
          changeRowKeys: changeRowKeys,
          nativeEvent: nativeEvent
        });
      } else {
        if (checked) {
          selectedRowKeys.push(this.getRecordKey(record, realIndex));
        } else {
          selectedRowKeys = selectedRowKeys.filter(function (i) {
            return key !== i;
          });
        }

        this.setState({
          pivot: realIndex
        });
        this.store.selectionDirty = true;
        this.setSelectedRowKeys(selectedRowKeys, {
          selectWay: 'onSelect',
          record: record,
          checked: checked,
          changeRowKeys: undefined,
          nativeEvent: nativeEvent
        });
      }
    },
    handleRadioSelect: function handleRadioSelect(record, rowIndex, e) {
      var checked = e.target.checked;
      var nativeEvent = e.nativeEvent;
      var key = this.getRecordKey(record, rowIndex);
      var selectedRowKeys = [key];
      this.store.selectionDirty = true;
      this.setSelectedRowKeys(selectedRowKeys, {
        selectWay: 'onSelect',
        record: record,
        checked: checked,
        changeRowKeys: undefined,
        nativeEvent: nativeEvent
      });
    },
    handleSelectRow: function handleSelectRow(selectionKey, index, onSelectFunc) {
      var _this7 = this;

      var data = this.getFlatCurrentPageData();
      var defaultSelection = this.store.selectionDirty ? [] : this.getDefaultSelection();
      var selectedRowKeys = this.store.selectedRowKeys.concat(defaultSelection);
      var changeableRowKeys = data.filter(function (item, i) {
        return !_this7.getCheckboxPropsByItem(item, i).disabled;
      }).map(function (item, i) {
        return _this7.getRecordKey(item, i);
      });
      var changeRowKeys = [];
      var selectWay = 'onSelectAll';
      var checked; // handle default selection

      switch (selectionKey) {
        case 'all':
          changeableRowKeys.forEach(function (key) {
            if (selectedRowKeys.indexOf(key) < 0) {
              selectedRowKeys.push(key);
              changeRowKeys.push(key);
            }
          });
          selectWay = 'onSelectAll';
          checked = true;
          break;

        case 'removeAll':
          changeableRowKeys.forEach(function (key) {
            if (selectedRowKeys.indexOf(key) >= 0) {
              selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
              changeRowKeys.push(key);
            }
          });
          selectWay = 'onSelectAll';
          checked = false;
          break;

        case 'invert':
          changeableRowKeys.forEach(function (key) {
            if (selectedRowKeys.indexOf(key) < 0) {
              selectedRowKeys.push(key);
            } else {
              selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
            }

            changeRowKeys.push(key);
            selectWay = 'onSelectInvert';
          });
          break;

        default:
          break;
      }

      this.store.selectionDirty = true; // when select custom selection, callback selections[n].onSelect

      var rowSelection = this.rowSelection;
      var customSelectionStartIndex = 2;

      if (rowSelection && rowSelection.hideDefaultSelections) {
        customSelectionStartIndex = 0;
      }

      if (index >= customSelectionStartIndex && typeof onSelectFunc === 'function') {
        return onSelectFunc(changeableRowKeys);
      }

      this.setSelectedRowKeys(selectedRowKeys, {
        selectWay: selectWay,
        checked: checked,
        changeRowKeys: changeRowKeys
      });
    },
    handlePageChange: function handlePageChange(current) {
      var props = this.$props;

      var pagination = _extends({}, this.sPagination);

      if (current) {
        pagination.current = current;
      } else {
        pagination.current = pagination.current || 1;
      }

      for (var _len = arguments.length, otherArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        otherArguments[_key - 1] = arguments[_key];
      }

      pagination.onChange.apply(pagination, [pagination.current].concat(otherArguments));
      var newState = {
        sPagination: pagination
      }; // Controlled current prop will not respond user interaction

      if (props.pagination && _typeof(props.pagination) === 'object' && 'current' in props.pagination) {
        newState.sPagination = _extends(_extends({}, pagination), {
          current: this.sPagination.current
        });
      }

      this.setState(newState, this.scrollToFirstRow);
      this.store.selectionDirty = false;
      this.$emit.apply(this, ['change'].concat(_toConsumableArray(this.prepareParamsArguments(_extends(_extends({}, this.$data), {
        sSelectionDirty: false,
        sPagination: pagination
      })))));
    },
    handleShowSizeChange: function handleShowSizeChange(current, pageSize) {
      var pagination = this.sPagination;
      pagination.onShowSizeChange(current, pageSize);

      var nextPagination = _extends(_extends({}, pagination), {
        pageSize: pageSize,
        current: current
      });

      this.setState({
        sPagination: nextPagination
      }, this.scrollToFirstRow);
      this.$emit.apply(this, ['change'].concat(_toConsumableArray(this.prepareParamsArguments(_extends(_extends({}, this.$data), {
        sPagination: nextPagination
      })))));
    },
    toggleSortOrder: function toggleSortOrder(column) {
      var sortDirections = column.sortDirections || this.sortDirections;
      var sortOrder = this.sSortOrder,
          sortColumn = this.sSortColumn; // ??????????????????????????????????????????????????????????????????????????????

      var newSortOrder; // ??????????????????????????? sortOrder ?????????

      if (isSameColumn(sortColumn, column) && sortOrder !== undefined) {
        // ??????sortDirections?????????????????????????????????
        var methodIndex = sortDirections.indexOf(sortOrder) + 1;
        newSortOrder = methodIndex === sortDirections.length ? undefined : sortDirections[methodIndex];
      } else {
        newSortOrder = sortDirections[0];
      }

      var newState = {
        sSortOrder: newSortOrder,
        sSortColumn: newSortOrder ? column : null
      }; // Controlled

      if (this.getSortOrderColumns().length === 0) {
        this.setState(newState, this.scrollToFirstRow);
      }

      this.$emit.apply(this, ['change'].concat(_toConsumableArray(this.prepareParamsArguments(_extends(_extends({}, this.$data), newState), column))));
    },
    hasPagination: function hasPagination(props) {
      return (props || this.$props).pagination !== false;
    },
    isSortColumn: function isSortColumn(column) {
      var sortColumn = this.sSortColumn;

      if (!column || !sortColumn) {
        return false;
      }

      return getColumnKey(sortColumn) === getColumnKey(column);
    },
    // Get pagination, filters, sorter
    prepareParamsArguments: function prepareParamsArguments(state, column) {
      var pagination = _extends({}, state.sPagination); // remove useless handle function in Table.onChange


      delete pagination.onChange;
      delete pagination.onShowSizeChange;
      var filters = state.sFilters;
      var sorter = {};
      var currentColumn = column;

      if (state.sSortColumn && state.sSortOrder) {
        currentColumn = state.sSortColumn;
        sorter.column = state.sSortColumn;
        sorter.order = state.sSortOrder;
      }

      if (currentColumn) {
        sorter.field = currentColumn.dataIndex;
        sorter.columnKey = getColumnKey(currentColumn);
      }

      var extra = {
        currentDataSource: this.getLocalData(state)
      };
      return [pagination, filters, sorter, extra];
    },
    findColumn: function findColumn(myKey) {
      var column;
      (0, _util.treeMap)(this.columns, function (c) {
        if (getColumnKey(c) === myKey) {
          column = c;
        }
      });
      return column;
    },
    recursiveSort: function recursiveSort(data, sorterFn) {
      var _this8 = this;

      var _this$childrenColumnN = this.childrenColumnName,
          childrenColumnName = _this$childrenColumnN === void 0 ? 'children' : _this$childrenColumnN;
      return data.sort(sorterFn).map(function (item) {
        return item[childrenColumnName] ? _extends(_extends({}, item), _defineProperty({}, childrenColumnName, _this8.recursiveSort(_toConsumableArray(item[childrenColumnName]), sorterFn))) : item;
      });
    },
    renderExpandIcon: function renderExpandIcon(prefixCls) {
      if (this.expandIcon) {
        return this.expandIcon;
      }

      return function (_ref2) {
        var expandable = _ref2.expandable,
            expanded = _ref2.expanded,
            needIndentSpaced = _ref2.needIndentSpaced,
            record = _ref2.record,
            onExpand = _ref2.onExpand;

        if (expandable) {
          return (0, _vue.createVNode)(_LocaleReceiver.default, {
            "componentName": "Table",
            "defaultLocale": _default3.default.Table,
            "children": function children(locale) {
              var _classNames;

              return (0, _vue.createVNode)(_transButton.default, {
                "class": (0, _classNames5.default)("".concat(prefixCls, "-row-expand-icon"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _defineProperty(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), _classNames)),
                "onClick": function onClick(event) {
                  onExpand(record, event);
                },
                "aria-label": expanded ? locale.collapse : locale.expand,
                "noStyle": true
              }, null);
            }
          }, null);
        }

        if (needIndentSpaced) {
          return (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-row-expand-icon ").concat(prefixCls, "-row-spaced")
          }, null);
        }

        return null;
      };
    },
    renderPagination: function renderPagination(prefixCls, paginationPosition) {
      // ?????????????????????
      if (!this.hasPagination()) {
        return null;
      }

      var size = 'default';
      var pagination = this.sPagination;

      if (pagination.size) {
        size = pagination.size;
      } else if (this.size === 'middle' || this.size === 'small') {
        size = 'small';
      }

      var position = pagination.position || 'bottom';
      var total = pagination.total || this.filterDataCnt;

      var cls = pagination.class,
          style = pagination.style,
          onChange = pagination.onChange,
          onShowSizeChange = pagination.onShowSizeChange,
          restProps = __rest(pagination, ["class", "style", "onChange", "onShowSizeChange"]); // eslint-disable-line


      var paginationProps = _extends(_extends({
        key: "pagination-".concat(paginationPosition),
        class: (0, _classNames5.default)(cls, "".concat(prefixCls, "-pagination"))
      }, restProps), {
        total: total,
        size: size,
        current: this.getMaxCurrent(total),
        style: style,
        onChange: this.handlePageChange,
        onShowSizeChange: this.handleShowSizeChange
      });

      return total > 0 && (position === paginationPosition || position === 'both') ? (0, _vue.createVNode)(_pagination.default, paginationProps, null) : null;
    },
    renderSelectionBox: function renderSelectionBox(type) {
      var _this9 = this;

      return function (_ref3) {
        var record = _ref3.record,
            index = _ref3.index;

        var rowKey = _this9.getRecordKey(record, index); // ??? 1 ??????


        var props = _this9.getCheckboxPropsByItem(record, index);

        var handleChange = function handleChange(e) {
          type === 'radio' ? _this9.handleRadioSelect(record, index, e) : _this9.handleSelect(record, index, e);
        };

        var selectionBoxProps = _extends({
          type: type,
          store: _this9.store,
          rowIndex: rowKey,
          defaultSelection: _this9.getDefaultSelection(),
          onChange: handleChange
        }, props);

        return (0, _vue.createVNode)("span", {
          "onClick": stopPropagation
        }, [(0, _vue.createVNode)(_SelectionBox.default, selectionBoxProps, null)]);
      };
    },
    renderRowSelection: function renderRowSelection(_ref4) {
      var _this10 = this;

      var prefixCls = _ref4.prefixCls,
          locale = _ref4.locale,
          getPopupContainer = _ref4.getPopupContainer;
      var rowSelection = this.rowSelection;
      var columns = this.columns.concat();

      if (rowSelection) {
        var data = this.getFlatCurrentPageData().filter(function (item, index) {
          if (rowSelection.getCheckboxProps) {
            return !_this10.getCheckboxPropsByItem(item, index).disabled;
          }

          return true;
        });
        var selectionColumnClass = (0, _classNames5.default)("".concat(prefixCls, "-selection-column"), _defineProperty({}, "".concat(prefixCls, "-selection-column-custom"), rowSelection.selections));

        var selectionColumn = _defineProperty({
          key: 'selection-column',
          customRender: this.renderSelectionBox(rowSelection.type),
          className: selectionColumnClass,
          fixed: rowSelection.fixed,
          width: rowSelection.columnWidth,
          title: rowSelection.columnTitle
        }, _vcTable.INTERNAL_COL_DEFINE, {
          class: "".concat(prefixCls, "-selection-col")
        });

        if (rowSelection.type !== 'radio') {
          var checkboxAllDisabled = data.every(function (item, index) {
            return _this10.getCheckboxPropsByItem(item, index).disabled;
          });
          selectionColumn.title = selectionColumn.title || (0, _vue.createVNode)(_SelectionCheckboxAll.default, {
            "store": this.store,
            "locale": locale,
            "data": data,
            "getCheckboxPropsByItem": this.getCheckboxPropsByItem,
            "getRecordKey": this.getRecordKey,
            "disabled": checkboxAllDisabled,
            "prefixCls": prefixCls,
            "onSelect": this.handleSelectRow,
            "selections": rowSelection.selections,
            "hideDefaultSelections": rowSelection.hideDefaultSelections,
            "getPopupContainer": this.generatePopupContainerFunc(getPopupContainer),
            "propsSymbol": Symbol()
          }, null);
        }

        if ('fixed' in rowSelection) {
          selectionColumn.fixed = rowSelection.fixed;
        } else if (columns.some(function (column) {
          return column.fixed === 'left' || column.fixed === true;
        })) {
          selectionColumn.fixed = 'left';
        }

        if (columns[0] && columns[0].key === 'selection-column') {
          columns[0] = selectionColumn;
        } else {
          columns.unshift(selectionColumn);
        }
      }

      return columns;
    },
    renderColumnsDropdown: function renderColumnsDropdown(_ref5) {
      var _this11 = this;

      var prefixCls = _ref5.prefixCls,
          dropdownPrefixCls = _ref5.dropdownPrefixCls,
          columns = _ref5.columns,
          locale = _ref5.locale,
          getPopupContainer = _ref5.getPopupContainer;
      var sortOrder = this.sSortOrder,
          filters = this.sFilters;
      return (0, _util.treeMap)(columns, function (column, i) {
        var _classNames3;

        var key = getColumnKey(column, i);
        var filterDropdown;
        var sortButton;
        var customHeaderCell = column.customHeaderCell;

        var isSortColumn = _this11.isSortColumn(column);

        if (column.filters && column.filters.length > 0 || column.filterDropdown) {
          var colFilters = key in filters ? filters[key] : [];
          filterDropdown = (0, _vue.createVNode)(_filterDropdown.default, {
            "locale": locale,
            "column": column,
            "selectedKeys": colFilters,
            "confirmFilter": _this11.handleFilter,
            "prefixCls": "".concat(prefixCls, "-filter"),
            "dropdownPrefixCls": dropdownPrefixCls || 'ant-dropdown',
            "getPopupContainer": _this11.generatePopupContainerFunc(getPopupContainer),
            "key": "filter-dropdown"
          }, null);
        }

        if (column.sorter) {
          var sortDirections = column.sortDirections || _this11.sortDirections;
          var isAscend = isSortColumn && sortOrder === 'ascend';
          var isDescend = isSortColumn && sortOrder === 'descend';
          var ascend = sortDirections.indexOf('ascend') !== -1 && (0, _vue.createVNode)(_CaretUpFilled.default, {
            "class": "".concat(prefixCls, "-column-sorter-up ").concat(isAscend ? 'on' : 'off'),
            "key": "caret-up"
          }, null);
          var descend = sortDirections.indexOf('descend') !== -1 && (0, _vue.createVNode)(_CaretDownFilled.default, {
            "class": "".concat(prefixCls, "-column-sorter-down ").concat(isDescend ? 'on' : 'off'),
            "key": "caret-down"
          }, null);
          sortButton = (0, _vue.createVNode)("div", {
            "title": locale.sortTitle,
            "class": (0, _classNames5.default)("".concat(prefixCls, "-column-sorter-inner"), ascend && descend && "".concat(prefixCls, "-column-sorter-inner-full")),
            "key": "sorter"
          }, [ascend, descend]);

          customHeaderCell = function customHeaderCell(col) {
            var colProps = {}; // Get original first

            if (column.customHeaderCell) {
              colProps = _extends({}, column.customHeaderCell(col));
            } // Add sorter logic


            var onHeaderCellClick = colProps.onClick;

            colProps.onClick = function () {
              _this11.toggleSortOrder(column);

              if (onHeaderCellClick) {
                onHeaderCellClick.apply(void 0, arguments);
              }
            };

            return colProps;
          };
        }

        return _extends(_extends({}, column), {
          className: (0, _classNames5.default)(column.className, (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-column-has-actions"), sortButton || filterDropdown), _defineProperty(_classNames3, "".concat(prefixCls, "-column-has-filters"), filterDropdown), _defineProperty(_classNames3, "".concat(prefixCls, "-column-has-sorters"), sortButton), _defineProperty(_classNames3, "".concat(prefixCls, "-column-sort"), isSortColumn && sortOrder), _classNames3)),
          title: [(0, _vue.createVNode)("span", {
            "key": "title",
            "class": "".concat(prefixCls, "-header-column")
          }, [(0, _vue.createVNode)("div", {
            "class": sortButton ? "".concat(prefixCls, "-column-sorters") : undefined
          }, [(0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-column-title")
          }, [_this11.renderColumnTitle(column.title)]), (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-column-sorter")
          }, [sortButton])])]), filterDropdown],
          customHeaderCell: customHeaderCell
        });
      });
    },
    renderColumnTitle: function renderColumnTitle(title) {
      var _this$$data = this.$data,
          filters = _this$$data.sFilters,
          sortOrder = _this$$data.sSortOrder,
          sortColumn = _this$$data.sSortColumn; // https://github.com/ant-design/ant-design/issues/11246#issuecomment-405009167

      if (title instanceof Function) {
        return title({
          filters: filters,
          sortOrder: sortOrder,
          sortColumn: sortColumn
        });
      }

      return title;
    },
    renderTable: function renderTable(_ref6) {
      var _classNames4,
          _this12 = this;

      var prefixCls = _ref6.prefixCls,
          renderEmpty = _ref6.renderEmpty,
          dropdownPrefixCls = _ref6.dropdownPrefixCls,
          contextLocale = _ref6.contextLocale,
          contextGetPopupContainer = _ref6.getPopupContainer,
          transformCellText = _ref6.transformCellText;

      var _a = _extends(_extends({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs),
          showHeader = _a.showHeader,
          locale = _a.locale,
          getPopupContainer = _a.getPopupContainer,
          style = _a.style,
          restProps = __rest(_a, ["showHeader", "locale", "getPopupContainer", "style"]);

      var data = this.getCurrentPageData();
      var expandIconAsCell = this.expandedRowRender && this.expandIconAsCell !== false; // use props.getPopupContainer first

      var realGetPopupContainer = getPopupContainer || contextGetPopupContainer; // Merge too locales

      var mergedLocale = _extends(_extends({}, contextLocale), locale);

      if (!locale || !locale.emptyText) {
        mergedLocale.emptyText = renderEmpty('Table');
      }

      var classString = (0, _classNames5.default)((_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-").concat(this.size), true), _defineProperty(_classNames4, "".concat(prefixCls, "-bordered"), this.bordered), _defineProperty(_classNames4, "".concat(prefixCls, "-empty"), !data.length), _defineProperty(_classNames4, "".concat(prefixCls, "-without-column-header"), !showHeader), _classNames4));
      var columnsWithRowSelection = this.renderRowSelection({
        prefixCls: prefixCls,
        locale: mergedLocale,
        getPopupContainer: realGetPopupContainer
      });
      var columns = this.renderColumnsDropdown({
        columns: columnsWithRowSelection,
        prefixCls: prefixCls,
        dropdownPrefixCls: dropdownPrefixCls,
        locale: mergedLocale,
        getPopupContainer: realGetPopupContainer
      }).map(function (column, i) {
        var newColumn = _extends({}, column);

        newColumn.key = getColumnKey(newColumn, i);
        return newColumn;
      });
      var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;

      if ('expandIconColumnIndex' in restProps) {
        expandIconColumnIndex = restProps.expandIconColumnIndex;
      }

      var vcTableProps = _extends(_extends({
        key: 'table',
        expandIcon: this.renderExpandIcon(prefixCls)
      }, restProps), {
        customRow: function customRow(record, index) {
          return _this12.onRow(prefixCls, record, index);
        },
        components: this.sComponents,
        prefixCls: prefixCls,
        data: data,
        columns: columns,
        showHeader: showHeader,
        expandIconColumnIndex: expandIconColumnIndex,
        expandIconAsCell: expandIconAsCell,
        emptyText: mergedLocale.emptyText,
        transformCellText: transformCellText,
        class: classString,
        ref: this.setTableRef
      });

      return (0, _vue.createVNode)(_vcTable.default, vcTableProps, null);
    }
  },
  render: function render() {
    var _this13 = this;

    var customizePrefixCls = this.prefixCls,
        customizeDropdownPrefixCls = this.dropdownPrefixCls,
        customizeTransformCellText = this.transformCellText;
    var data = this.getCurrentPageData();
    var _this$configProvider = this.configProvider,
        getContextPopupContainer = _this$configProvider.getPopupContainer,
        tct = _this$configProvider.transformCellText;
    var getPopupContainer = this.getPopupContainer || getContextPopupContainer;
    var transformCellText = customizeTransformCellText || tct;
    var loading = this.loading;

    if (typeof loading === 'boolean') {
      loading = {
        spinning: loading
      };
    }

    var getPrefixCls = this.configProvider.getPrefixCls;
    var renderEmpty = this.configProvider.renderEmpty;
    var prefixCls = getPrefixCls('table', customizePrefixCls);
    var dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls);
    var table = (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "Table",
      "defaultLocale": _default3.default.Table,
      "children": function children(locale) {
        return _this13.renderTable({
          prefixCls: prefixCls,
          renderEmpty: renderEmpty,
          dropdownPrefixCls: dropdownPrefixCls,
          contextLocale: locale,
          getPopupContainer: getPopupContainer,
          transformCellText: transformCellText
        });
      }
    }, null); // if there is no pagination or no data,
    // the height of spin should decrease by half of pagination

    var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? "".concat(prefixCls, "-with-pagination") : "".concat(prefixCls, "-without-pagination");

    var spinProps = _extends(_extends({}, loading), {
      class: loading && loading.spinning ? "".concat(paginationPatchClass, " ").concat(prefixCls, "-spin-holder") : ''
    });

    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    return (0, _vue.createVNode)("div", {
      "class": (0, _classNames5.default)("".concat(prefixCls, "-wrapper"), className),
      "style": style
    }, [(0, _vue.createVNode)(_spin.default, spinProps, {
      default: function _default() {
        return [_this13.renderPagination(prefixCls, 'top'), table, _this13.renderPagination(prefixCls, 'bottom')];
      }
    })]);
  }
});

exports.default = _default2;