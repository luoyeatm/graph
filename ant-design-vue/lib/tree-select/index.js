"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TreeData", {
  enumerable: true,
  get: function get() {
    return _interface.TreeData;
  }
});
Object.defineProperty(exports, "TreeSelectProps", {
  enumerable: true,
  get: function get() {
    return _interface.TreeSelectProps;
  }
});
exports.default = void 0;

var _vue = require("vue");

var _vcTreeSelect = _interopRequireWildcard(require("../vc-tree-select"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _interface = require("./interface");

var _warning = _interopRequireDefault(require("../_util/warning"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _configProvider = require("../config-provider");

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _CaretDownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CaretDownOutlined"));

var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _omit = _interopRequireDefault(require("omit.js"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var TreeSelect = (0, _vue.defineComponent)({
  TreeNode: _vcTreeSelect.TreeNode,
  SHOW_ALL: _vcTreeSelect.SHOW_ALL,
  SHOW_PARENT: _vcTreeSelect.SHOW_PARENT,
  SHOW_CHILD: _vcTreeSelect.SHOW_CHILD,
  name: 'ATreeSelect',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)((0, _interface.TreeSelectProps)(), {
    transitionName: 'slide-up',
    choiceTransitionName: ''
  }),
  setup: function setup() {
    return {
      vcTreeSelect: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  created: function created() {
    (0, _warning.default)(this.multiple !== false || !this.treeCheckable, 'TreeSelect', '`multiple` will alway be `true` when `treeCheckable` is true');
  },
  methods: {
    saveTreeSelect: function saveTreeSelect(node) {
      this.vcTreeSelect = node;
    },
    focus: function focus() {
      this.vcTreeSelect.focus();
    },
    blur: function blur() {
      this.vcTreeSelect.blur();
    },
    renderSwitcherIcon: function renderSwitcherIcon(prefixCls, _ref) {
      var isLeaf = _ref.isLeaf,
          loading = _ref.loading;

      if (loading) {
        return (0, _vue.createVNode)(_LoadingOutlined.default, {
          "class": "".concat(prefixCls, "-switcher-loading-icon")
        }, null);
      }

      if (isLeaf) {
        return null;
      }

      return (0, _vue.createVNode)(_CaretDownOutlined.default, {
        "class": "".concat(prefixCls, "-switcher-icon")
      }, null);
    },
    handleChange: function handleChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit('update:value', args[0]);
      this.$emit.apply(this, ['change'].concat(args));
    },
    handleTreeExpand: function handleTreeExpand() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.$emit('update:treeExpandedKeys', args[0]);
      this.$emit.apply(this, ['treeExpand'].concat(args));
    },
    handleSearch: function handleSearch() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.$emit('update:searchValue', args[0]);
      this.$emit.apply(this, ['search'].concat(args));
    },
    updateTreeData: function updateTreeData(treeData) {
      var _this = this;

      var $slots = this.$slots;
      var defaultFields = {
        children: 'children',
        title: 'title',
        key: 'key',
        label: 'label',
        value: 'value'
      };

      var replaceFields = _extends(_extends({}, defaultFields), this.$props.replaceFields);

      return treeData.map(function (item) {
        var _item$slots = item.slots,
            slots = _item$slots === void 0 ? {} : _item$slots;
        var label = item[replaceFields.label];
        var title = item[replaceFields.title];
        var value = item[replaceFields.value];
        var key = item[replaceFields.key];
        var children = item[replaceFields.children];
        var newLabel = typeof label === 'function' ? label() : label;
        var newTitle = typeof title === 'function' ? title() : title;

        if (!newLabel && slots.label && $slots[slots.label]) {
          newLabel = (0, _vue.createVNode)(_vue.Fragment, null, [$slots.label(item)]);
        }

        if (!newTitle && slots.title && $slots[slots.title]) {
          newTitle = (0, _vue.createVNode)(_vue.Fragment, null, [$slots.title(item)]);
        }

        var treeNodeProps = _extends(_extends({}, item), {
          title: newTitle || newLabel,
          value: value,
          dataRef: item,
          key: key
        });

        if (children) {
          return _extends(_extends({}, treeNodeProps), {
            children: _this.updateTreeData(children)
          });
        }

        return treeNodeProps;
      });
    }
  },
  render: function render() {
    var _cls,
        _this2 = this;

    var props = (0, _propsUtil.getOptionProps)(this);

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        dropdownStyle = props.dropdownStyle,
        dropdownClassName = props.dropdownClassName,
        getPopupContainer = props.getPopupContainer,
        restProps = __rest(props, ["prefixCls", "size", "dropdownStyle", "dropdownClassName", "getPopupContainer"]);

    var className = this.$attrs.class;
    var _this$configProvider = this.configProvider,
        renderEmpty = _this$configProvider.renderEmpty,
        getPrefixCls = _this$configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var notFoundContent = (0, _propsUtil.getComponent)(this, 'notFoundContent');
    var removeIcon = (0, _propsUtil.getComponent)(this, 'removeIcon');
    var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var rest = (0, _omit.default)(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon', 'suffixIcon']);
    var suffixIcon = (0, _propsUtil.getComponent)(this, 'suffixIcon');
    suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
    var treeData = props.treeData;

    if (treeData) {
      treeData = this.updateTreeData(treeData);
    }

    var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_cls, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_cls, className, className), _cls); // showSearch: single - false, multiple - true

    var showSearch = restProps.showSearch;

    if (!('showSearch' in restProps)) {
      showSearch = !!(restProps.multiple || restProps.treeCheckable);
    }

    var checkable = (0, _propsUtil.getComponent)(this, 'treeCheckable');

    if (checkable) {
      checkable = (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-tree-checkbox-inner")
      }, null);
    }

    var inputIcon = suffixIcon || (0, _vue.createVNode)(_DownOutlined.default, {
      "class": "".concat(prefixCls, "-arrow-icon")
    }, null);
    var finalRemoveIcon = removeIcon || (0, _vue.createVNode)(_CloseOutlined.default, {
      "class": "".concat(prefixCls, "-remove-icon")
    }, null);
    var finalClearIcon = clearIcon || (0, _vue.createVNode)(_CloseCircleFilled.default, {
      "class": "".concat(prefixCls, "-clear-icon")
    }, null);

    var VcTreeSelectProps = _extends(_extends(_extends(_extends({}, this.$attrs), {
      switcherIcon: function switcherIcon(nodeProps) {
        return _this2.renderSwitcherIcon(prefixCls, nodeProps);
      },
      inputIcon: inputIcon,
      removeIcon: finalRemoveIcon,
      clearIcon: finalClearIcon
    }), rest), {
      showSearch: showSearch,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      dropdownClassName: (0, _classNames.default)(dropdownClassName, "".concat(prefixCls, "-tree-dropdown")),
      prefixCls: prefixCls,
      dropdownStyle: _extends({
        maxHeight: '100vh',
        overflow: 'auto'
      }, dropdownStyle),
      treeCheckable: checkable,
      notFoundContent: notFoundContent || renderEmpty('Select'),
      class: cls,
      onChange: this.handleChange,
      onSearch: this.handleSearch,
      onTreeExpand: this.handleTreeExpand,
      ref: this.saveTreeSelect,
      treeData: treeData ? treeData : (0, _utils.convertChildrenToData)((0, _propsUtil.getSlot)(this))
    });

    return (0, _vue.createVNode)(_vcTreeSelect.default, _objectSpread(_objectSpread({}, VcTreeSelectProps), {}, {
      "__propsSymbol__": []
    }), (0, _omit.default)(this.$slots, ['default']));
  }
});
/* istanbul ignore next */

TreeSelect.install = function (app) {
  app.component(TreeSelect.name, TreeSelect);
  app.component(TreeSelect.TreeNode.displayName, TreeSelect.TreeNode);
  return app;
};

var _default = TreeSelect;
exports.default = _default;