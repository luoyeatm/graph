"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _FilterFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FilterFilled"));

var _menu = _interopRequireWildcard(require("../menu"));

var _domClosest = _interopRequireDefault(require("../_util/dom-closest"));

var _classNames4 = _interopRequireDefault(require("../_util/classNames"));

var _shallowequal = _interopRequireDefault(require("../_util/shallowequal"));

var _dropdown = _interopRequireDefault(require("../dropdown"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _radio = _interopRequireDefault(require("../radio"));

var _FilterDropdownMenuWrapper = _interopRequireDefault(require("./FilterDropdownMenuWrapper"));

var _interface = require("./interface");

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _vnode = require("../_util/vnode");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin2"));

var _util = require("./util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function stopPropagation(e) {
  e.stopPropagation();
}

var _default2 = (0, _vue.defineComponent)({
  name: 'FilterMenu',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(_interface.FilterMenuProps, {
    column: {}
  }),
  setup: function setup(props) {
    var sSelectedKeys = (0, _vue.computed)(function () {
      return props.selectedKeys;
    });
    var sVisible = (0, _vue.computed)(function () {
      return 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;
    });
    var sValueKeys = (0, _vue.computed)(function () {
      return (0, _util.generateValueMaps)(props.column.filters);
    });
    var state = (0, _vue.reactive)({
      neverShown: false,
      sSelectedKeys: sSelectedKeys.value,
      sKeyPathOfSelectedItem: {},
      sVisible: sVisible.value,
      sValueKeys: sValueKeys.value
    });
    (0, _vue.watch)(sSelectedKeys, function () {
      state.sSelectedKeys = sSelectedKeys.value;
    });
    (0, _vue.watch)(sVisible, function () {
      state.sVisible = sVisible.value;
    });
    (0, _vue.watch)(sValueKeys, function () {
      state.sValueKeys = sValueKeys.value;
    }); // watchEffect(
    //   () => {
    //     const { column } = nextProps;
    //     if (!shallowequal(preProps.selectedKeys, nextProps.selectedKeys)) {
    //       state.sSelectedKeys = nextProps.selectedKeys;
    //     }
    //     if (!shallowequal((preProps.column || {}).filters, (nextProps.column || {}).filters)) {
    //       state.sValueKeys = generateValueMaps(nextProps.column.filters);
    //     }
    //     if ('filterDropdownVisible' in column) {
    //       state.sVisible = column.filterDropdownVisible;
    //     }
    //     preProps = { ...nextProps };
    //   },
    //   { flush: 'sync' },
    // );

    return state;
  },
  mounted: function mounted() {
    var _this = this;

    var column = this.column;
    (0, _vue.nextTick)(function () {
      _this.setNeverShown(column);
    });
  },
  updated: function updated() {
    var _this2 = this;

    var column = this.column;
    (0, _vue.nextTick)(function () {
      _this2.setNeverShown(column);
    });
  },
  methods: {
    getDropdownVisible: function getDropdownVisible() {
      return this.neverShown ? false : this.sVisible;
    },
    setNeverShown: function setNeverShown(column) {
      var rootNode = (0, _propsUtil.findDOMNode)(this);
      var filterBelongToScrollBody = !!(0, _domClosest.default)(rootNode, ".ant-table-scroll");

      if (filterBelongToScrollBody) {
        // When fixed column have filters, there will be two dropdown menus
        // Filter dropdown menu inside scroll body should never be shown
        // To fix https://github.com/ant-design/ant-design/issues/5010 and
        // https://github.com/ant-design/ant-design/issues/7909
        this.neverShown = !!column.fixed;
      }
    },
    setSelectedKeys: function setSelectedKeys(_ref) {
      var selectedKeys = _ref.selectedKeys;
      this.setState({
        sSelectedKeys: selectedKeys
      });
    },
    setVisible: function setVisible(visible) {
      var column = this.column;

      if (!('filterDropdownVisible' in column)) {
        this.setState({
          sVisible: visible
        });
      }

      if (column.onFilterDropdownVisibleChange) {
        column.onFilterDropdownVisibleChange(visible);
      }
    },
    handleClearFilters: function handleClearFilters() {
      this.setState({
        sSelectedKeys: []
      }, this.handleConfirm);
    },
    handleConfirm: function handleConfirm() {
      this.setVisible(false); // Call `setSelectedKeys` & `confirm` in the same time will make filter data not up to date
      // https://github.com/ant-design/ant-design/issues/12284

      this.$forceUpdate();
      (0, _vue.nextTick)(this.confirmFilter2);
    },
    onVisibleChange: function onVisibleChange(visible) {
      this.setVisible(visible);
      var column = this.$props.column; // https://github.com/ant-design/ant-design/issues/17833

      if (!visible && !(column.filterDropdown instanceof Function)) {
        this.confirmFilter2();
      }
    },
    handleMenuItemClick: function handleMenuItemClick(info) {
      var selectedKeys = this.sSelectedKeys;

      if (!info.keyPath || info.keyPath.length <= 1) {
        return;
      }

      var keyPathOfSelectedItem = this.sKeyPathOfSelectedItem;

      if (selectedKeys && selectedKeys.indexOf(info.key) >= 0) {
        // deselect SubMenu child
        delete keyPathOfSelectedItem[info.key];
      } else {
        // select SubMenu child
        keyPathOfSelectedItem[info.key] = info.keyPath;
      }

      this.setState({
        sKeyPathOfSelectedItem: keyPathOfSelectedItem
      });
    },
    hasSubMenu: function hasSubMenu() {
      var _this$column$filters = this.column.filters,
          filters = _this$column$filters === void 0 ? [] : _this$column$filters;
      return filters.some(function (item) {
        return !!(item.children && item.children.length > 0);
      });
    },
    confirmFilter2: function confirmFilter2() {
      var _this$$props = this.$props,
          column = _this$$props.column,
          propSelectedKeys = _this$$props.selectedKeys,
          confirmFilter = _this$$props.confirmFilter;
      var selectedKeys = this.sSelectedKeys,
          valueKeys = this.sValueKeys;
      var filterDropdown = column.filterDropdown;

      if (!(0, _shallowequal.default)(selectedKeys, propSelectedKeys)) {
        confirmFilter(column, filterDropdown ? selectedKeys : selectedKeys.map(function (key) {
          return valueKeys[key];
        }).filter(function (key) {
          return key !== undefined;
        }));
      }
    },
    renderMenus: function renderMenus(items) {
      var _this3 = this;

      var _this$$props2 = this.$props,
          dropdownPrefixCls = _this$$props2.dropdownPrefixCls,
          prefixCls = _this$$props2.prefixCls;
      return items.map(function (item) {
        if (item.children && item.children.length > 0) {
          var sKeyPathOfSelectedItem = _this3.sKeyPathOfSelectedItem;
          var containSelected = Object.keys(sKeyPathOfSelectedItem).some(function (key) {
            return sKeyPathOfSelectedItem[key].indexOf(item.value) >= 0;
          });
          var subMenuCls = (0, _classNames4.default)("".concat(prefixCls, "-dropdown-submenu"), _defineProperty({}, "".concat(dropdownPrefixCls, "-submenu-contain-selected"), containSelected));
          return (0, _vue.createVNode)(_menu.SubMenu, {
            "title": item.text,
            "popupClassName": subMenuCls,
            "key": item.value
          }, {
            default: function _default() {
              return [_this3.renderMenus(item.children)];
            }
          });
        }

        return _this3.renderMenuItem(item);
      });
    },
    renderFilterIcon: function renderFilterIcon() {
      var _classNames2;

      var _a, _b;

      var column = this.column,
          locale = this.locale,
          prefixCls = this.prefixCls,
          selectedKeys = this.selectedKeys;
      var filtered = selectedKeys && selectedKeys.length > 0;
      var filterIcon = column.filterIcon;

      if (typeof filterIcon === 'function') {
        filterIcon = filterIcon({
          filtered: filtered,
          column: column
        });
      }

      var dropdownIconClass = (0, _classNames4.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-selected"), 'filtered' in column ? column.filtered : filtered), _defineProperty(_classNames2, "".concat(prefixCls, "-open"), this.getDropdownVisible()), _classNames2));

      if (!filterIcon) {
        return (0, _vue.createVNode)(_FilterFilled.default, {
          "title": locale.filterTitle,
          "class": dropdownIconClass,
          "onClick": stopPropagation
        }, null);
      }

      if (filterIcon.length === 1 && (0, _propsUtil.isValidElement)(filterIcon[0])) {
        return (0, _vnode.cloneElement)(filterIcon[0], {
          title: ((_a = filterIcon.props) === null || _a === void 0 ? void 0 : _a.title) || locale.filterTitle,
          onClick: stopPropagation,
          class: (0, _classNames4.default)("".concat(prefixCls, "-icon"), dropdownIconClass, (_b = filterIcon.props) === null || _b === void 0 ? void 0 : _b.class)
        });
      }

      return (0, _vue.createVNode)("span", {
        "class": (0, _classNames4.default)("".concat(prefixCls, "-icon"), dropdownIconClass),
        "onClick": stopPropagation
      }, [filterIcon]);
    },
    renderMenuItem: function renderMenuItem(item) {
      var column = this.column;
      var selectedKeys = this.sSelectedKeys;
      var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
      var input = multiple ? (0, _vue.createVNode)(_checkbox.default, {
        "checked": selectedKeys && selectedKeys.indexOf(item.value) >= 0
      }, null) : (0, _vue.createVNode)(_radio.default, {
        "checked": selectedKeys && selectedKeys.indexOf(item.value) >= 0
      }, null);
      return (0, _vue.createVNode)(_menu.MenuItem, {
        "key": item.value
      }, {
        default: function _default() {
          return [input, (0, _vue.createVNode)("span", null, [item.text])];
        }
      });
    }
  },
  render: function render() {
    var _this4 = this;

    var originSelectedKeys = this.sSelectedKeys;
    var column = this.column,
        locale = this.locale,
        prefixCls = this.prefixCls,
        dropdownPrefixCls = this.dropdownPrefixCls,
        getPopupContainer = this.getPopupContainer; // default multiple selection in filter dropdown

    var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
    var dropdownMenuClass = (0, _classNames4.default)(_defineProperty({}, "".concat(dropdownPrefixCls, "-menu-without-submenu"), !this.hasSubMenu()));
    var filterDropdown = column.filterDropdown;

    if (filterDropdown instanceof Function) {
      filterDropdown = filterDropdown({
        prefixCls: "".concat(dropdownPrefixCls, "-custom"),
        setSelectedKeys: function setSelectedKeys(selectedKeys) {
          return _this4.setSelectedKeys({
            selectedKeys: selectedKeys
          });
        },
        selectedKeys: originSelectedKeys,
        confirm: this.handleConfirm,
        clearFilters: this.handleClearFilters,
        filters: column.filters,
        visible: this.getDropdownVisible(),
        column: column
      });
    }

    var menus = filterDropdown ? (0, _vue.createVNode)(_FilterDropdownMenuWrapper.default, {
      "class": "".concat(prefixCls, "-dropdown")
    }, {
      default: function _default() {
        return [filterDropdown];
      }
    }) : (0, _vue.createVNode)(_FilterDropdownMenuWrapper.default, {
      "class": "".concat(prefixCls, "-dropdown")
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_menu.default, {
          "multiple": multiple,
          "onClick": _this4.handleMenuItemClick,
          "prefixCls": "".concat(dropdownPrefixCls, "-menu"),
          "class": dropdownMenuClass,
          "onSelect": _this4.setSelectedKeys,
          "onDeselect": _this4.setSelectedKeys,
          "selectedKeys": originSelectedKeys,
          "getPopupContainer": getPopupContainer
        }, {
          default: function _default() {
            return [_this4.renderMenus(column.filters)];
          }
        }), (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-dropdown-btns")
        }, [(0, _vue.createVNode)("a", {
          "class": "".concat(prefixCls, "-dropdown-link confirm"),
          "onClick": _this4.handleConfirm
        }, [locale.filterConfirm]), (0, _vue.createVNode)("a", {
          "class": "".concat(prefixCls, "-dropdown-link clear"),
          "onClick": _this4.handleClearFilters
        }, [locale.filterReset])])];
      }
    });
    return (0, _vue.createVNode)(_dropdown.default, {
      "trigger": ['click'],
      "placement": "bottomRight",
      "visible": this.getDropdownVisible(),
      "onVisibleChange": this.onVisibleChange,
      "getPopupContainer": getPopupContainer,
      "forceRender": true,
      "overlay": menus
    }, {
      default: function _default() {
        return [_this4.renderFilterIcon()];
      }
    });
  }
});

exports.default = _default2;