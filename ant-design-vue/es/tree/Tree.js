import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

import { defineComponent, inject } from 'vue';
import classNames from '../_util/classNames';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import FileOutlined from '@ant-design/icons-vue/FileOutlined';
import CaretDownFilled from '@ant-design/icons-vue/CaretDownFilled';
import MinusSquareOutlined from '@ant-design/icons-vue/MinusSquareOutlined';
import PlusSquareOutlined from '@ant-design/icons-vue/PlusSquareOutlined';
import VcTree from '../vc-tree';
import animation from '../_util/openAnimation';
import PropTypes from '../_util/vue-types';
import { getOptionProps, getComponent, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { cloneElement } from '../_util/vnode';
import { defaultConfigProvider } from '../config-provider';
var TreeNode = VcTree.TreeNode;

function TreeProps() {
  return {
    showLine: PropTypes.looseBool,

    /** ?????????????????? */
    multiple: PropTypes.looseBool,

    /** ??????????????????????????? */
    autoExpandParent: PropTypes.looseBool,

    /** checkable???????????????????????????????????????????????????????????????????????????*/
    checkStrictly: PropTypes.looseBool,

    /** ?????????????????? */
    checkable: PropTypes.looseBool,

    /** ??????????????? */
    disabled: PropTypes.looseBool,

    /** ??????????????????????????? */
    defaultExpandAll: PropTypes.looseBool,

    /** ??????????????????????????? */
    defaultExpandParent: PropTypes.looseBool,

    /** ?????????????????????????????? */
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** ???????????????????????????????????? */
    expandedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** ??????????????????????????????????????? */
    checkedKeys: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])), PropTypes.shape({
      checked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      halfChecked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    }).loose]),

    /** ????????????????????????????????? */
    defaultCheckedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** ???????????????????????????????????? */
    selectedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** ???????????????????????? */
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    selectable: PropTypes.looseBool,

    /** filter some AntTreeNodes as you need. it should return true */
    filterAntTreeNode: PropTypes.func,

    /** ?????????????????? */
    loadData: PropTypes.func,
    loadedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    // onLoaded: (loadedKeys: string[], info: { event: 'load', node: AntTreeNode; }) => void,

    /** ?????????????????? */
    // onRightClick: (options: AntTreeNodeMouseEvent) => void,

    /** ????????????????????????IE>8???*/
    draggable: PropTypes.looseBool,
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
    showIcon: PropTypes.looseBool,
    icon: PropTypes.func,
    switcherIcon: PropTypes.any,
    prefixCls: PropTypes.string,
    filterTreeNode: PropTypes.func,
    openAnimation: PropTypes.any,
    treeData: {
      type: Array
    },

    /**
     * @default{title,key,children}
     * ??????treeNode??? title,key,children?????????treeData??????????????????
     */
    replaceFields: PropTypes.object,
    blockNode: PropTypes.looseBool,

    /** ??????/????????????????????? */
    onExpand: PropTypes.func,

    /** ????????????????????? */
    onCheck: PropTypes.func,

    /** ????????????????????? */
    onSelect: PropTypes.func,

    /** ????????????????????? */
    onClick: PropTypes.func,

    /** ????????????????????? */
    onDoubleclick: PropTypes.func,
    onDblclick: PropTypes.func,
    'onUpdate:selectedKeys': PropTypes.func,
    'onUpdate:checkedKeys': PropTypes.func,
    'onUpdate:expandedKeys': PropTypes.func
  };
}

export { TreeProps };
export default defineComponent({
  name: 'ATree',
  inheritAttrs: false,
  props: initDefaultProps(TreeProps(), {
    checkable: false,
    showIcon: false,
    openAnimation: _extends(_extends({}, animation), {
      appear: null
    }),
    blockNode: false
  }),
  setup: function setup() {
    return {
      tree: null,
      configProvider: inject('configProvider', defaultConfigProvider)
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
        return _createVNode(LoadingOutlined, {
          "class": "".concat(prefixCls, "-switcher-loading-icon")
        }, null);
      }

      if (isLeaf) {
        return showLine ? _createVNode(FileOutlined, {
          "class": "".concat(prefixCls, "-switcher-line-icon")
        }, null) : null;
      }

      var switcherCls = "".concat(prefixCls, "-switcher-icon");

      if (switcherIcon) {
        return cloneElement(switcherIcon, {
          class: switcherCls
        });
      }

      return showLine ? expanded ? _createVNode(MinusSquareOutlined, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : _createVNode(PlusSquareOutlined, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : _createVNode(CaretDownFilled, {
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

    var props = getOptionProps(this);
    var customizePrefixCls = props.prefixCls,
        showIcon = props.showIcon,
        treeNodes = props.treeNodes,
        blockNode = props.blockNode;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tree', customizePrefixCls);

    var _switcherIcon = getComponent(this, 'switcherIcon');

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
      checkable: checkable ? _createVNode("span", {
        "class": "".concat(prefixCls, "-checkbox-inner")
      }, null) : checkable,
      children: getSlot(this),
      switcherIcon: function switcherIcon(nodeProps) {
        return _this2.renderSwitcherIcon(prefixCls, _switcherIcon, nodeProps);
      },
      ref: this.setTreeRef
    }), restAttrs), {
      class: classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-icon-hide"), !showIcon), _defineProperty(_classNames, "".concat(prefixCls, "-block-node"), blockNode), _classNames)),
      onCheck: this.handleCheck,
      onExpand: this.handleExpand,
      onSelect: this.handleSelect
    });

    if (treeData) {
      vcTreeProps.treeData = treeData;
    }

    return _createVNode(VcTree, _objectSpread(_objectSpread({}, vcTreeProps), {}, {
      "__propsSymbol__": []
    }), null);
  }
});