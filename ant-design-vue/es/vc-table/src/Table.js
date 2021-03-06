import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable camelcase */
import { provide, markRaw, defineComponent, nextTick, reactive } from 'vue';
import shallowequal from '../../_util/shallowequal';
import merge from 'lodash-es/merge';
import classes from '../../_util/component-classes';
import classNames from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import { debounce, getDataAndAriaProps } from './utils';
import warning from '../../_util/warning';
import addEventListener from '../../vc-util/Dom/addEventListener';
import ColumnManager from './ColumnManager';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';
import ExpandableTable from './ExpandableTable';
import { initDefaultProps, getOptionProps } from '../../_util/props-util';
import BaseMixin from '../../_util/BaseMixin';
export default defineComponent({
  name: 'Table',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps({
    data: PropTypes.array,
    useFixedHeader: PropTypes.looseBool,
    columns: PropTypes.array,
    prefixCls: PropTypes.string,
    bodyStyle: PropTypes.object,
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    rowClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    customRow: PropTypes.func,
    customHeaderRow: PropTypes.func,
    // onRowClick: PropTypes.func,
    // onRowDoubleClick: PropTypes.func,
    // onRowContextMenu: PropTypes.func,
    // onRowMouseEnter: PropTypes.func,
    // onRowMouseLeave: PropTypes.func,
    showHeader: PropTypes.looseBool,
    title: PropTypes.func,
    id: PropTypes.string,
    footer: PropTypes.func,
    emptyText: PropTypes.any,
    scroll: PropTypes.object,
    rowRef: PropTypes.func,
    // getBodyWrapper: PropTypes.func,
    components: PropTypes.shape({
      table: PropTypes.any,
      header: PropTypes.shape({
        wrapper: PropTypes.any,
        row: PropTypes.any,
        cell: PropTypes.any
      }).loose,
      body: PropTypes.shape({
        wrapper: PropTypes.any,
        row: PropTypes.any,
        cell: PropTypes.any
      }).loose
    }).loose,
    expandIconAsCell: PropTypes.looseBool,
    expandedRowKeys: PropTypes.array,
    expandedRowClassName: PropTypes.func,
    defaultExpandAllRows: PropTypes.looseBool,
    defaultExpandedRowKeys: PropTypes.array,
    expandIconColumnIndex: PropTypes.number,
    expandedRowRender: PropTypes.func,
    childrenColumnName: PropTypes.string,
    indentSize: PropTypes.number,
    expandRowByClick: PropTypes.looseBool,
    expandIcon: PropTypes.func,
    tableLayout: PropTypes.string,
    transformCellText: PropTypes.func
  }, {
    data: [],
    useFixedHeader: false,
    rowKey: 'key',
    rowClassName: function rowClassName() {
      return '';
    },
    prefixCls: 'rc-table',
    bodyStyle: {},
    showHeader: true,
    scroll: {},
    rowRef: function rowRef() {
      return null;
    },
    emptyText: function emptyText() {
      return 'No Data';
    },
    customHeaderRow: function customHeaderRow() {}
  }),
  setup: function setup() {
    var store = reactive({
      currentHoverKey: null,
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: {},
      expandedRowsHeight: {},
      expandedRowKeys: []
    });
    provide('table-store', store);
    return {
      store: store
    };
  },
  data: function data() {
    this.preData = _toConsumableArray(this.data);
    return {
      columnManager: markRaw(new ColumnManager(this.columns)),
      sComponents: markRaw(merge({
        table: 'table',
        header: {
          wrapper: 'thead',
          row: 'tr',
          cell: 'th'
        },
        body: {
          wrapper: 'tbody',
          row: 'tr',
          cell: 'td'
        }
      }, this.components))
    };
  },
  computed: {
    dataLen: function dataLen() {
      return this.$props.data.length;
    }
  },
  watch: {
    components: function components() {
      this._components = merge({
        table: 'table',
        header: {
          wrapper: 'thead',
          row: 'tr',
          cell: 'th'
        },
        body: {
          wrapper: 'tbody',
          row: 'tr',
          cell: 'td'
        }
      }, this.components);
    },
    columns: function columns(val) {
      if (val) {
        this.columnManager.reset(val);
      }
    },
    dataLen: function dataLen(val, preVal) {
      var _this = this;

      if ((val === 0 || preVal === 0) && this.hasScrollX()) {
        nextTick(function () {
          _this.resetScrollX();
        });
      }
    }
  },
  created: function created() {
    provide('table', this); // ['rowClick', 'rowDoubleclick', 'rowContextmenu', 'rowMouseenter', 'rowMouseleave'].forEach(
    //   name => {
    //     warning(
    //       getListeners(this)[name] === undefined,
    //       `${name} is deprecated, please use customRow instead.`,
    //     );
    //   },
    // );
    // warning(
    //   this.getBodyWrapper === undefined,
    //   'getBodyWrapper is deprecated, please use custom components instead.',
    // );
    // this.columnManager = new ColumnManager(this.columns, this.$slots.default)

    this.setScrollPosition('left');
    this.debouncedWindowResize = debounce(this.handleWindowResize, 150);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      if (_this2.columnManager.isAnyColumnsFixed()) {
        _this2.handleWindowResize();

        _this2.resizeEvent = addEventListener(window, 'resize', _this2.debouncedWindowResize);
      } // https://github.com/ant-design/ant-design/issues/11635


      if (_this2.ref_headTable) {
        _this2.ref_headTable.scrollLeft = 0;
      }

      if (_this2.ref_bodyTable) {
        _this2.ref_bodyTable.scrollLeft = 0;
      }
    });
  },
  updated: function updated() {
    var _this3 = this;

    this.$nextTick(function () {
      if (_this3.columnManager.isAnyColumnsFixed()) {
        _this3.handleWindowResize();

        if (!_this3.resizeEvent) {
          _this3.resizeEvent = addEventListener(window, 'resize', _this3.debouncedWindowResize);
        }
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }

    if (this.debouncedWindowResize) {
      this.debouncedWindowResize.cancel();
    }
  },
  methods: {
    getRowKey: function getRowKey(record, index) {
      var rowKey = this.rowKey;
      var key = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
      warning(key !== undefined, 'Each record in table should have a unique `key` prop,' + 'or set `rowKey` to an unique primary key.');
      return key === undefined ? index : key;
    },
    setScrollPosition: function setScrollPosition(position) {
      this.scrollPosition = position;

      if (this.tableNode) {
        var prefixCls = this.prefixCls;

        if (position === 'both') {
          classes(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-left")).add("".concat(prefixCls, "-scroll-position-right"));
        } else {
          classes(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-").concat(position));
        }
      }
    },
    setScrollPositionClassName: function setScrollPositionClassName() {
      var node = this.ref_bodyTable;
      var scrollToLeft = node.scrollLeft === 0;
      var scrollToRight = node.scrollLeft + 1 >= node.children[0].getBoundingClientRect().width - node.getBoundingClientRect().width;

      if (scrollToLeft && scrollToRight) {
        this.setScrollPosition('both');
      } else if (scrollToLeft) {
        this.setScrollPosition('left');
      } else if (scrollToRight) {
        this.setScrollPosition('right');
      } else if (this.scrollPosition !== 'middle') {
        this.setScrollPosition('middle');
      }
    },
    isTableLayoutFixed: function isTableLayoutFixed() {
      var _this$$props = this.$props,
          tableLayout = _this$$props.tableLayout,
          _this$$props$columns = _this$$props.columns,
          columns = _this$$props$columns === void 0 ? [] : _this$$props$columns,
          useFixedHeader = _this$$props.useFixedHeader,
          _this$$props$scroll = _this$$props.scroll,
          scroll = _this$$props$scroll === void 0 ? {} : _this$$props$scroll;

      if (typeof tableLayout !== 'undefined') {
        return tableLayout === 'fixed';
      } // if one column is ellipsis, use fixed table layout to fix align issue


      if (columns.some(function (_ref) {
        var ellipsis = _ref.ellipsis;
        return !!ellipsis;
      })) {
        return true;
      } // if header fixed, use fixed table layout to fix align issue


      if (useFixedHeader || scroll.y) {
        return true;
      } // if scroll.x is number/px/% width value, we should fixed table layout
      // to avoid long word layout broken issue


      if (scroll.x && scroll.x !== true && scroll.x !== 'max-content') {
        return true;
      }

      return false;
    },
    handleWindowResize: function handleWindowResize() {
      this.syncFixedTableRowHeight();
      this.setScrollPositionClassName();
    },
    syncFixedTableRowHeight: function syncFixedTableRowHeight() {
      var tableRect = this.tableNode.getBoundingClientRect(); // If tableNode's height less than 0, suppose it is hidden and don't recalculate rowHeight.
      // see: https://github.com/ant-design/ant-design/issues/4836

      if (tableRect.height !== undefined && tableRect.height <= 0) {
        return;
      }

      var prefixCls = this.prefixCls;
      var headRows = this.ref_headTable ? this.ref_headTable.querySelectorAll('thead') : this.ref_bodyTable.querySelectorAll('thead');
      var bodyRows = this.ref_bodyTable.querySelectorAll(".".concat(prefixCls, "-row")) || [];
      var fixedColumnsHeadRowsHeight = [].map.call(headRows, function (row) {
        return row.getBoundingClientRect().height ? row.getBoundingClientRect().height - 0.5 : 'auto';
      });
      var state = this.store;
      var fixedColumnsBodyRowsHeight = [].reduce.call(bodyRows, function (acc, row) {
        var rowKey = row.getAttribute('data-row-key');
        var height = row.getBoundingClientRect().height || state.fixedColumnsBodyRowsHeight[rowKey] || 'auto';
        acc[rowKey] = height;
        return acc;
      }, {});

      if (shallowequal(state.fixedColumnsHeadRowsHeight, fixedColumnsHeadRowsHeight) && shallowequal(state.fixedColumnsBodyRowsHeight, fixedColumnsBodyRowsHeight)) {
        return;
      }

      this.store.fixedColumnsHeadRowsHeight = fixedColumnsHeadRowsHeight;
      this.store.fixedColumnsBodyRowsHeight = fixedColumnsBodyRowsHeight;
    },
    resetScrollX: function resetScrollX() {
      if (this.ref_headTable) {
        this.ref_headTable.scrollLeft = 0;
      }

      if (this.ref_bodyTable) {
        this.ref_bodyTable.scrollLeft = 0;
      }
    },
    hasScrollX: function hasScrollX() {
      var _this$scroll = this.scroll,
          scroll = _this$scroll === void 0 ? {} : _this$scroll;
      return 'x' in scroll;
    },
    handleBodyScrollLeft: function handleBodyScrollLeft(e) {
      var target = e.target;
      var _this$scroll2 = this.scroll,
          scroll = _this$scroll2 === void 0 ? {} : _this$scroll2;
      var ref_headTable = this.ref_headTable,
          ref_bodyTable = this.ref_bodyTable;

      if (target.scrollLeft !== this.lastScrollLeft && scroll.x) {
        if (target === ref_bodyTable && ref_headTable) {
          ref_headTable.scrollLeft = target.scrollLeft;
        } else if (target === ref_headTable && ref_bodyTable) {
          ref_bodyTable.scrollLeft = target.scrollLeft;
        }

        this.setScrollPositionClassName();
      } // Remember last scrollLeft for scroll direction detecting.


      this.lastScrollLeft = target.scrollLeft;
    },
    handleBodyScrollTop: function handleBodyScrollTop(e) {
      var target = e.target; // Fix https://github.com/ant-design/ant-design/issues/9033

      if (e.currentTarget !== target) {
        return;
      }

      var _this$scroll3 = this.scroll,
          scroll = _this$scroll3 === void 0 ? {} : _this$scroll3;
      var ref_headTable = this.ref_headTable,
          ref_bodyTable = this.ref_bodyTable,
          ref_fixedColumnsBodyLeft = this.ref_fixedColumnsBodyLeft,
          ref_fixedColumnsBodyRight = this.ref_fixedColumnsBodyRight;

      if (target.scrollTop !== this.lastScrollTop && scroll.y && target !== ref_headTable) {
        var scrollTop = target.scrollTop;

        if (ref_fixedColumnsBodyLeft && target !== ref_fixedColumnsBodyLeft) {
          ref_fixedColumnsBodyLeft.scrollTop = scrollTop;
        }

        if (ref_fixedColumnsBodyRight && target !== ref_fixedColumnsBodyRight) {
          ref_fixedColumnsBodyRight.scrollTop = scrollTop;
        }

        if (ref_bodyTable && target !== ref_bodyTable) {
          ref_bodyTable.scrollTop = scrollTop;
        }
      } // Remember last scrollTop for scroll direction detecting.


      this.lastScrollTop = target.scrollTop;
    },
    handleBodyScroll: function handleBodyScroll(e) {
      this.handleBodyScrollLeft(e);
      this.handleBodyScrollTop(e);
    },
    handleWheel: function handleWheel(event) {
      var _this$$props$scroll2 = this.$props.scroll,
          scroll = _this$$props$scroll2 === void 0 ? {} : _this$$props$scroll2;

      if (window.navigator.userAgent.match(/Trident\/7\./) && scroll.y) {
        event.preventDefault();
        var wd = event.deltaY;
        var target = event.target;
        var bodyTable = this.ref_bodyTable,
            fixedColumnsBodyLeft = this.ref_fixedColumnsBodyLeft,
            fixedColumnsBodyRight = this.ref_fixedColumnsBodyRight;
        var scrollTop = 0;

        if (this.lastScrollTop) {
          scrollTop = this.lastScrollTop + wd;
        } else {
          scrollTop = wd;
        }

        if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
          fixedColumnsBodyLeft.scrollTop = scrollTop;
        }

        if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
          fixedColumnsBodyRight.scrollTop = scrollTop;
        }

        if (bodyTable && target !== bodyTable) {
          bodyTable.scrollTop = scrollTop;
        }
      }
    },
    // saveChildrenRef(name, node) {
    //   this[`ref_${name}`] = node;
    // },
    saveRef: function saveRef(name) {
      var _this4 = this;

      return function (node) {
        _this4["ref_".concat(name)] = node;
      };
    },
    saveTableNodeRef: function saveTableNodeRef(node) {
      this.tableNode = node;
    },
    renderMainTable: function renderMainTable() {
      var scroll = this.scroll,
          prefixCls = this.prefixCls;
      var isAnyColumnsFixed = this.columnManager.isAnyColumnsFixed();
      var scrollable = isAnyColumnsFixed || scroll.x || scroll.y;
      var table = [this.renderTable({
        columns: this.columnManager.groupedColumns(),
        isAnyColumnsFixed: isAnyColumnsFixed
      }), this.renderEmptyText(), this.renderFooter()];
      return scrollable ? _createVNode("div", {
        "class": "".concat(prefixCls, "-scroll")
      }, [table]) : table;
    },
    renderLeftFixedTable: function renderLeftFixedTable() {
      var prefixCls = this.prefixCls;
      return _createVNode("div", {
        "class": "".concat(prefixCls, "-fixed-left")
      }, [this.renderTable({
        columns: this.columnManager.leftColumns(),
        fixed: 'left'
      })]);
    },
    renderRightFixedTable: function renderRightFixedTable() {
      var prefixCls = this.prefixCls;
      return _createVNode("div", {
        "class": "".concat(prefixCls, "-fixed-right")
      }, [this.renderTable({
        columns: this.columnManager.rightColumns(),
        fixed: 'right'
      })]);
    },
    renderTable: function renderTable(options) {
      var columns = options.columns,
          fixed = options.fixed,
          isAnyColumnsFixed = options.isAnyColumnsFixed;
      var prefixCls = this.prefixCls,
          _this$scroll4 = this.scroll,
          scroll = _this$scroll4 === void 0 ? {} : _this$scroll4;
      var tableClassName = scroll.x || fixed ? "".concat(prefixCls, "-fixed") : '';

      var headTable = _createVNode(HeadTable, {
        "key": "head",
        "columns": columns,
        "fixed": fixed,
        "tableClassName": tableClassName,
        "handleBodyScrollLeft": this.handleBodyScrollLeft,
        "expander": this.expander
      }, null);

      var bodyTable = _createVNode(BodyTable, {
        "key": "body",
        "columns": columns,
        "fixed": fixed,
        "tableClassName": tableClassName,
        "getRowKey": this.getRowKey,
        "handleWheel": this.handleWheel,
        "handleBodyScroll": this.handleBodyScroll,
        "expander": this.expander,
        "isAnyColumnsFixed": isAnyColumnsFixed
      }, null);

      return [headTable, bodyTable];
    },
    renderTitle: function renderTitle() {
      var title = this.title,
          prefixCls = this.prefixCls,
          data = this.data;
      return title ? _createVNode("div", {
        "class": "".concat(prefixCls, "-title"),
        "key": "title"
      }, [title(data)]) : null;
    },
    renderFooter: function renderFooter() {
      var footer = this.footer,
          prefixCls = this.prefixCls,
          data = this.data;
      return footer ? _createVNode("div", {
        "class": "".concat(prefixCls, "-footer"),
        "key": "footer"
      }, [footer(data)]) : null;
    },
    renderEmptyText: function renderEmptyText() {
      var emptyText = this.emptyText,
          prefixCls = this.prefixCls,
          data = this.data;

      if (data.length) {
        return null;
      }

      var emptyClassName = "".concat(prefixCls, "-placeholder");
      return _createVNode("div", {
        "class": emptyClassName,
        "key": "emptyText"
      }, [typeof emptyText === 'function' ? emptyText() : emptyText]);
    }
  },
  render: function render() {
    var _classNames,
        _this5 = this;

    var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

    var columnManager = this.columnManager,
        getRowKey = this.getRowKey;
    var prefixCls = props.prefixCls;
    var tableClassName = classNames(props.prefixCls, props.class, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-fixed-header"), props.useFixedHeader || props.scroll && props.scroll.y), _defineProperty(_classNames, "".concat(prefixCls, "-scroll-position-left ").concat(prefixCls, "-scroll-position-right"), this.scrollPosition === 'both'), _defineProperty(_classNames, "".concat(prefixCls, "-scroll-position-").concat(this.scrollPosition), this.scrollPosition !== 'both'), _defineProperty(_classNames, "".concat(prefixCls, "-layout-fixed"), this.isTableLayoutFixed()), _classNames));
    var hasLeftFixed = columnManager.isAnyColumnsLeftFixed();
    var hasRightFixed = columnManager.isAnyColumnsRightFixed();
    var dataAndAriaProps = getDataAndAriaProps(props);

    var expandableTableProps = _extends(_extends({}, props), {
      columnManager: columnManager,
      getRowKey: getRowKey
    });

    return _createVNode(ExpandableTable, expandableTableProps, {
      default: function _default(expander) {
        _this5.expander = expander;
        return _createVNode("div", _objectSpread({
          "ref": _this5.saveTableNodeRef,
          "class": tableClassName,
          "style": props.style,
          "id": props.id
        }, dataAndAriaProps), [_this5.renderTitle(), _createVNode("div", {
          "class": "".concat(prefixCls, "-content")
        }, [_this5.renderMainTable(), hasLeftFixed && _this5.renderLeftFixedTable(), hasRightFixed && _this5.renderRightFixedTable()])]);
      }
    });
  }
});