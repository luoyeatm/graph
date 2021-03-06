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

import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import { getComponent, isStringElement, isEmptyElement, getSlot } from '../_util/props-util';
import { Col } from '../grid';
import { defaultConfigProvider } from '../config-provider';
import { cloneElement } from '../_util/vnode';
import { defineComponent, inject } from 'vue';
export var ListItemProps = {
  prefixCls: PropTypes.string,
  extra: PropTypes.any,
  actions: PropTypes.array,
  grid: PropTypes.any
};
export var ListItemMetaProps = {
  avatar: PropTypes.any,
  description: PropTypes.any,
  prefixCls: PropTypes.string,
  title: PropTypes.any
};
export var ListItemMeta = function ListItemMeta(props, _ref) {
  var slots = _ref.slots;

  var _a, _b, _c;

  var configProvider = inject('configProvider', defaultConfigProvider);
  var getPrefixCls = configProvider.getPrefixCls;
  var customizePrefixCls = props.prefixCls;
  var prefixCls = getPrefixCls('list', customizePrefixCls);
  var avatar = props.avatar || ((_a = slots.avatar) === null || _a === void 0 ? void 0 : _a.call(slots));
  var title = props.title || ((_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots));
  var description = props.description || ((_c = slots.description) === null || _c === void 0 ? void 0 : _c.call(slots));

  var content = _createVNode("div", {
    "class": "".concat(prefixCls, "-item-meta-content")
  }, [title && _createVNode("h4", {
    "class": "".concat(prefixCls, "-item-meta-title")
  }, [title]), description && _createVNode("div", {
    "class": "".concat(prefixCls, "-item-meta-description")
  }, [description])]);

  return _createVNode("div", {
    "class": "".concat(prefixCls, "-item-meta")
  }, [avatar && _createVNode("div", {
    "class": "".concat(prefixCls, "-item-meta-avatar")
  }, [avatar]), (title || description) && content]);
};

_extends(ListItemMeta, {
  props: ListItemMetaProps,
  __ANT_LIST_ITEM_META: true,
  displayName: 'AListItemMeta'
});

function getGrid(grid, t) {
  return grid[t] && Math.floor(24 / grid[t]);
}

export default defineComponent({
  name: 'AListItem',
  inheritAttrs: false,
  Meta: ListItemMeta,
  props: ListItemProps,
  setup: function setup() {
    var listContext = inject('listContext', {});
    var configProvider = inject('configProvider', defaultConfigProvider);
    return {
      listContext: listContext,
      configProvider: configProvider
    };
  },
  methods: {
    isItemContainsTextNodeAndNotSingular: function isItemContainsTextNodeAndNotSingular() {
      var children = getSlot(this) || [];
      var result;
      children.forEach(function (element) {
        if (isStringElement(element) && !isEmptyElement(element)) {
          result = true;
        }
      });
      return result && children.length > 1;
    },
    isFlexMode: function isFlexMode() {
      var extra = getComponent(this, 'extra');
      var itemLayout = this.listContext.itemLayout;

      if (itemLayout === 'vertical') {
        return !!extra;
      }

      return !this.isItemContainsTextNodeAndNotSingular();
    }
  },
  render: function render() {
    var _this$listContext = this.listContext,
        grid = _this$listContext.grid,
        itemLayout = _this$listContext.itemLayout;
    var customizePrefixCls = this.prefixCls,
        $attrs = this.$attrs;

    var _className = $attrs.class,
        restAttrs = __rest($attrs, ["class"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('list', customizePrefixCls);
    var extra = getComponent(this, 'extra');
    var actions = getComponent(this, 'actions');
    actions = actions && !Array.isArray(actions) ? [actions] : actions;

    var actionsContent = actions && actions.length > 0 && _createVNode("ul", {
      "class": "".concat(prefixCls, "-item-action"),
      "key": "actions"
    }, [actions.map(function (action, i) {
      return _createVNode("li", {
        "key": "".concat(prefixCls, "-item-action-").concat(i)
      }, [action, i !== actions.length - 1 && _createVNode("em", {
        "class": "".concat(prefixCls, "-item-action-split")
      }, null)]);
    })]);

    var children = getSlot(this);
    var Tag = grid ? 'div' : 'li';

    var itemChildren = _createVNode(Tag, _objectSpread(_objectSpread({}, restAttrs), {}, {
      "class": classNames("".concat(prefixCls, "-item"), _className, _defineProperty({}, "".concat(prefixCls, "-item-no-flex"), !this.isFlexMode()))
    }), {
      default: function _default() {
        return [itemLayout === 'vertical' && extra ? [_createVNode("div", {
          "class": "".concat(prefixCls, "-item-main"),
          "key": "content"
        }, [children, actionsContent]), _createVNode("div", {
          "class": "".concat(prefixCls, "-item-extra"),
          "key": "extra"
        }, [extra])] : [children, actionsContent, cloneElement(extra, {
          key: 'extra'
        })]];
      }
    });

    var mainContent = grid ? _createVNode(Col, {
      "span": getGrid(grid, 'column'),
      "xs": getGrid(grid, 'xs'),
      "sm": getGrid(grid, 'sm'),
      "md": getGrid(grid, 'md'),
      "lg": getGrid(grid, 'lg'),
      "xl": getGrid(grid, 'xl'),
      "xxl": getGrid(grid, 'xxl')
    }, {
      default: function _default() {
        return [itemChildren];
      }
    }) : itemChildren;
    return mainContent;
  }
});