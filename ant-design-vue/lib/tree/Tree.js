"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeProps = TreeProps;
exports.default = void 0;

var _vue = require("vue");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _FileOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FileOutlined"));

var _CaretDownFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CaretDownFilled"));

var _MinusSquareOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/MinusSquareOutlined"));

var _PlusSquareOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PlusSquareOutlined"));

var _vcTree = _interopRequireDefault(require("../vc-tree"));

var _openAnimation = _interopRequireDefault(require("../_util/openAnimation"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _vnode = require("../_util/vnode");

var _configProvider = require("../config-provider");

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

var TreeNode = _vcTree.default.TreeNode;

function TreeProps() {
  return {
    showLine: _vueTypes.default.looseBool,

    /** ?????????????????? */
    multiple: _vueTypes.default.looseBool,

    /** ??????????????????????????? */
    autoExpandParent: _vueTypes.default.looseBool,

    /** checkable???????????????????????????????????????????????????????????????????????????*/
    checkStrictly: _vueTypes.default.looseBool,

    /** ?????????????????? */
    checkable: _vueTypes.default.looseBool,

    /** ??????????????? */
    disabled: _vueTypes.default.looseBool,

    /** ??????????????????????????? */
    defaultExpandAll: _vueTypes.default.looseBool,

    /** ??????????????????????????? */
    defaultExpandParent: _vueTypes.default.looseBool,

    /** ?????????????????????????????? */
    defaultExpandedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),

    /** ???????????????????????????????????? */
    expandedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),

    /** ??????????????????????????????????????? */
    checkedKeys: _vueTypes.default.oneOfType([_vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])), _vueTypes.default.shape({
      checked: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),
      halfChecked: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]))
    }).loose]),

    /** ????????????????????????????????? */
    defaultCheckedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),

    /** ???????????????????????????????????? */
    selectedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),

    /** ???????????????????????? */
    defaultSelectedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),
    selectable: _vueTypes.default.looseBool,

    /** filter some AntTreeNodes as you need. it should return true */
    filterAntTreeNode: _vueTypes.default.func,

    /** ?????????????????? */
    loadData: _vueTypes.default.func,
    loadedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),
    // onLoaded: (loadedKeys: string[], info: { event: 'load', node: AntTreeNode; }) => void,

    /** ?????????????????? */
    // onRightClick: (options: AntTreeNodeMouseEvent) => void,

    /** ????????????????????????IE>8???*/
    draggable: _vueTypes.default.looseBool,
    // /** ????????????????????? */
    // onDragStart: (options: AntTreeNodeMouseEvent) => void,
    // /** dragenter ??????????????? */
    // onDragEnter: (options: AntTreeNodeMouseEvent) => void,
    // /** dragover ??????????????? */
    // onDragOver: (options: AntTreeNodeMouseEvent) => void,
    // /** dragleave ??????????????? */
    // onDragLeave: (options: AntTreeNodeMouseEvent) => void,
    // /** drop ??????????????? */
    // onDrop: (options: AntTreeNodeMouseEvent) => void,
    showIcon: _vueTypes.default.looseBool,
    icon: _vueTypes.default.func,
    switcherIcon: _vueTypes.default.any,
    prefixCls: _vueTypes.default.string,
    filterTreeNode: _vueTypes.default.func,
    openAnimation: _vueTypes.default.any,
    treeData: {
      type: Array
    },

    /**
     * @default{title,key,children}
     * ??????treeNode??? title,key,children?????????treeData??????????????????
     */
    replaceFields: _vueTypes.default.object,
    blockNode: _vueTypes.default.looseBool,

    /** ??????/????????????????????? */
    onExpand: _vueTypes.default.func,

    /** ????????????????????? */
    onCheck: _vueTypes.default.func,

    /** ????????????????????? */
    onSelect: _vueTypes.default.func,

    /** ????????????????????? */
    onClick: _vueTypes.default.func,

    /** ????????????????????? */
    onDoubleclick: _vueTypes.default.func,
    onDblclick: _vueTypes.default.func,
    'onUpdate:selectedKeys': _vueTypes.default.func,
    'onUpdate:checkedKeys': _vueTypes.default.func,
    'onUpdate:expandedKeys': _vueTypes.default.func
  };
}

var _default = (0, _vue.defineComponent)({
  name: 'ATree',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(TreeProps(), {
    checkable: false,
    showIcon: false,
    openAnimation: _extends(_extends({}, _openAnimation.default), {
      appear: null
    }),
    blockNode: false
  }),
  setup: function setup() {
    return {
      tree: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  TreeNode: TreeNode,
  methods: {
    renderSwitcherIcon: function renderSwitcherIcon(prefixCls, switcherIcon, _ref) {
      var isLeaf = _ref.isLeaf,
          loading = _ref.loading,
          expanded = _ref.expanded;
      var showLine = this.$props.showLine;

      if (loading) {
        return (0, _vue.createVNode)(_LoadingOutlined.default, {
          "class": "".concat(prefixCls, "-switcher-loading-icon")
        }, null);
      }

      if (isLeaf) {
        return showLine ? (0, _vue.createVNode)(_FileOutlined.default, {
          "class": "".concat(prefixCls, "-switcher-line-icon")
        }, null) : null;
      }

      var switcherCls = "".concat(prefixCls, "-switcher-icon");

      if (switcherIcon) {
        return (0, _vnode.cloneElement)(switcherIcon, {
          class: switcherCls
        });
      }

      return showLine ? expanded ? (0, _vue.createVNode)(_MinusSquareOutlined.default, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : (0, _vue.createVNode)(_PlusSquareOutlined.default, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : (0, _vue.createVNode)(_CaretDownFilled.default, {
        "class": switcherCls
      }, null);
    },
    updateTreeData: function updateTreeData(treeData) {
      var _this = this;

      var $slots = this.$slots;
      var defaultFields = {
        children: 'children',
        title: 'title',
        key: 'key'
      };

      var replaceFields = _extends(_extends({}, defaultFields), this.$props.replaceFields);

      return treeData.map(function (item) {
        var key = item[replaceFields.key];
        var children = item[replaceFields.children];

        var _item$slots = item.slots,
            slots = _item$slots === void 0 ? {} : _item$slots,
            cls = item.class,
            style = item.style,
            restProps = __rest(item, ["slots", "class", "style"]);

        var treeNodeProps = _extends(_extends({}, restProps), {
          icon: $slots[slots.icon] || restProps.icon,
          switcherIcon: $slots[slots.switcherIcon] || restProps.switcherIcon,
          title: $slots[slots.title] || $slots.title || restProps[replaceFields.title],
          dataRef: item,
          key: key,
          class: cls,
          style: style
        });

        if (children) {
          return _extends(_extends({}, treeNodeProps), {
            children: _this.updateTreeData(children)
          });
        }

        return treeNodeProps;
      });
    },
    setTreeRef: function setTreeRef(node) {
      this.tree = node;
    },
    handleCheck: function handleCheck(checkedObj, eventObj) {
      this.$emit('update:checkedKeys', checkedObj);
      this.$emit('check', checkedObj, eventObj);
    },
    handleExpand: function handleExpand(expandedKeys, eventObj) {
      this.$emit('update:expandedKeys', expandedKeys);
      this.$emit('expand', expandedKeys, eventObj);
    },
    handleSelect: function handleSelect(selectedKeys, eventObj) {
      this.$emit('update:selectedKeys', selectedKeys);
      this.$emit('select', selectedKeys, eventObj);
    }
  },
  render: function render() {
    var _this2 = this,
        _classNames;

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls,
        showIcon = props.showIcon,
        treeNodes = props.treeNodes,
        blockNode = props.blockNode;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tree', customizePrefixCls);

    var _switcherIcon = (0, _propsUtil.getComponent)(this, 'switcherIcon');

    var checkable = props.checkable;
    var treeData = props.treeData || treeNodes;

    if (treeData) {
      treeData = this.updateTreeData(treeData);
    }

    var _a = this.$attrs,
        className = _a.class,
        restAttrs = __rest(_a, ["class"]);

    var vcTreeProps = _extends(_extends(_extends(_extends({}, props), {
      prefixCls: prefixCls,
      checkable: checkable ? (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-checkbox-inner")
      }, null) : checkable,
      children: (0, _propsUtil.getSlot)(this),
      switcherIcon: function switcherIcon(nodeProps) {
        return _this2.renderSwitcherIcon(prefixCls, _switcherIcon, nodeProps);
      },
      ref: this.setTreeRef
    }), restAttrs), {
      class: (0, _classNames2.default)(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-icon-hide"), !showIcon), _defineProperty(_classNames, "".concat(prefixCls, "-block-node"), blockNode), _classNames)),
      onCheck: this.handleCheck,
      onExpand: this.handleExpand,
      onSelect: this.handleSelect
    });

    if (treeData) {
      vcTreeProps.treeData = treeData;
    }

    return (0, _vue.createVNode)(_vcTree.default, _objectSpread(_objectSpread({}, vcTreeProps), {}, {
      "__propsSymbol__": []
    }), null);
  }
});

exports.default = _default;