import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
import omit from 'omit.js';
import debounce from 'lodash-es/debounce';
import FolderOpenOutlined from '@ant-design/icons-vue/FolderOpenOutlined';
import FolderOutlined from '@ant-design/icons-vue/FolderOutlined';
import FileOutlined from '@ant-design/icons-vue/FileOutlined';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import { conductExpandParent, convertTreeToEntities } from '../vc-tree/src/util';
import Tree, { TreeProps } from './Tree';
import { calcRangeKeys, getFullKeyList, convertDirectoryKeysToNodes, getFullKeyListByTreeData } from './util';
import BaseMixin from '../_util/BaseMixin';
import { getOptionProps, getComponent, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { defaultConfigProvider } from '../config-provider';

function getIcon(props) {
  var isLeaf = props.isLeaf,
      expanded = props.expanded;

  if (isLeaf) {
    return _createVNode(FileOutlined, null, null);
  }

  return expanded ? _createVNode(FolderOpenOutlined, null, null) : _createVNode(FolderOutlined, null, null);
}

export default defineComponent({
  name: 'ADirectoryTree',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(_extends(_extends({}, TreeProps()), {
    expandAction: PropTypes.oneOf([false, 'click', 'doubleclick', 'dblclick'])
  }), {
    showIcon: true,
    expandAction: 'click'
  }),
  setup: function setup() {
    return {
      children: null,
      onDebounceExpand: null,
      tree: null,
      lastSelectedKey: '',
      cachedSelectedKeys: [],
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    var props = getOptionProps(this);
    var defaultExpandAll = props.defaultExpandAll,
        defaultExpandParent = props.defaultExpandParent,
        expandedKeys = props.expandedKeys,
        defaultExpandedKeys = props.defaultExpandedKeys;
    var children = getSlot(this);

    var _convertTreeToEntitie = convertTreeToEntities(children),
        keyEntities = _convertTreeToEntitie.keyEntities;

    var state = {}; // Selected keys

    state._selectedKeys = props.selectedKeys || props.defaultSelectedKeys || []; // Expanded keys

    if (defaultExpandAll) {
      if (props.treeData) {
        state._expandedKeys = getFullKeyListByTreeData(props.treeData, props.replaceFields);
      } else {
        state._expandedKeys = getFullKeyList(children);
      }
    } else if (defaultExpandParent) {
      state._expandedKeys = conductExpandParent(expandedKeys || defaultExpandedKeys, keyEntities);
    } else {
      state._expandedKeys = expandedKeys || defaultExpandedKeys;
    }

    return _extends({
      _selectedKeys: [],
      _expandedKeys: []
    }, state);
  },
  watch: {
    expandedKeys: function expandedKeys(val) {
      this.setState({
        _expandedKeys: val
      });
    },
    selectedKeys: function selectedKeys(val) {
      this.setState({
        _selectedKeys: val
      });
    }
  },
  created: function created() {
    this.onDebounceExpand = debounce(this.expandFolderNode, 200, {
      leading: true
    });
  },
  methods: {
    handleExpand: function handleExpand(expandedKeys, info) {
      this.setUncontrolledState({
        _expandedKeys: expandedKeys
      });
      this.$emit('update:expandedKeys', expandedKeys);
      this.$emit('expand', expandedKeys, info);
      return undefined;
    },
    handleClick: function handleClick(event, node) {
      var expandAction = this.$props.expandAction; // Expand the tree

      if (expandAction === 'click') {
        this.onDebounceExpand(event, node);
      }

      this.$emit('click', event, node);
    },
    handleDoubleClick: function handleDoubleClick(event, node) {
      var expandAction = this.$props.expandAction; // Expand the tree

      if (expandAction === 'dblclick' || expandAction === 'doubleclick') {
        this.onDebounceExpand(event, node);
      }

      this.$emit('doubleclick', event, node);
      this.$emit('dblclick', event, node);
    },
    hanldeSelect: function hanldeSelect(keys, event) {
      var multiple = this.$props.multiple;
      var children = this.children || [];
      var _this$$data$_expanded = this.$data._expandedKeys,
          expandedKeys = _this$$data$_expanded === void 0 ? [] : _this$$data$_expanded;
      var node = event.node,
          nativeEvent = event.nativeEvent;
      var _node$eventKey = node.eventKey,
          eventKey = _node$eventKey === void 0 ? '' : _node$eventKey;
      var newState = {}; // We need wrap this event since some value is not same

      var newEvent = _extends(_extends({}, event), {
        selected: true
      }); // Windows / Mac single pick


      var ctrlPick = nativeEvent.ctrlKey || nativeEvent.metaKey;
      var shiftPick = nativeEvent.shiftKey; // Generate new selected keys

      var newSelectedKeys;

      if (multiple && ctrlPick) {
        // Control click
        newSelectedKeys = keys;
        this.lastSelectedKey = eventKey;
        this.cachedSelectedKeys = newSelectedKeys;
        newEvent.selectedNodes = convertDirectoryKeysToNodes(children, newSelectedKeys);
      } else if (multiple && shiftPick) {
        // Shift click
        newSelectedKeys = Array.from(new Set([].concat(_toConsumableArray(this.cachedSelectedKeys || []), _toConsumableArray(calcRangeKeys(children, expandedKeys, eventKey, this.lastSelectedKey)))));
        newEvent.selectedNodes = convertDirectoryKeysToNodes(children, newSelectedKeys);
      } else {
        // Single click
        newSelectedKeys = [eventKey];
        this.lastSelectedKey = eventKey;
        this.cachedSelectedKeys = newSelectedKeys;
        newEvent.selectedNodes = [event.node];
      }

      newState._selectedKeys = newSelectedKeys;
      this.$emit('update:selectedKeys', newSelectedKeys);
      this.$emit('select', newSelectedKeys, newEvent);
      this.setUncontrolledState(newState);
    },
    setTreeRef: function setTreeRef(node) {
      this.tree = node;
    },
    expandFolderNode: function expandFolderNode(event, node) {
      var isLeaf = node.isLeaf;

      if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
        return;
      }

      if (this.tree.tree) {
        // Get internal vc-tree
        var internalTree = this.tree.tree; // Call internal rc-tree expand function
        // https://github.com/ant-design/ant-design/issues/12567

        internalTree.onNodeExpand(event, node);
      }
    },
    setUncontrolledState: function setUncontrolledState(state) {
      var newState = omit(state, Object.keys(getOptionProps(this)).map(function (p) {
        return "_".concat(p);
      }));

      if (Object.keys(newState).length) {
        this.setState(newState);
      }
    },
    handleCheck: function handleCheck(checkedObj, eventObj) {
      this.$emit('update:checkedKeys', checkedObj);
      this.$emit('check', checkedObj, eventObj);
    }
  },
  render: function render() {
    var _this = this;

    this.children = getSlot(this);

    var _a = getOptionProps(this),
        customizePrefixCls = _a.prefixCls,
        props = __rest(_a, ["prefixCls"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tree', customizePrefixCls);
    var _this$$data = this.$data,
        expandedKeys = _this$$data._expandedKeys,
        selectedKeys = _this$$data._selectedKeys;

    var _b = this.$attrs,
        className = _b.class,
        restAttrs = __rest(_b, ["class"]);

    var connectClassName = classNames("".concat(prefixCls, "-directory"), className);

    var treeProps = _extends(_extends(_extends({
      icon: getIcon
    }, restAttrs), omit(props, ['onUpdate:selectedKeys', 'onUpdate:checkedKeys', 'onUpdate:expandedKeys'])), {
      prefixCls: prefixCls,
      expandedKeys: expandedKeys,
      selectedKeys: selectedKeys,
      switcherIcon: getComponent(this, 'switcherIcon'),
      ref: this.setTreeRef,
      class: connectClassName,
      onSelect: this.hanldeSelect,
      onClick: this.handleClick,
      onDblclick: this.handleDoubleClick,
      onExpand: this.handleExpand,
      onCheck: this.handleCheck
    });

    return _createVNode(Tree, treeProps, _objectSpread({
      default: function _default() {
        return [_this.children];
      }
    }, omit(this.$slots, ['default'])));
  }
});