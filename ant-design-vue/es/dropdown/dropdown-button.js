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

import { provide, inject, defineComponent } from 'vue';
import Button from '../button';
import classNames from '../_util/classNames';
import buttonTypes from '../button/buttonTypes';
import { ButtonGroupProps } from '../button/button-group';
import Dropdown from './dropdown';
import PropTypes from '../_util/vue-types';
import { hasProp, getComponent, getSlot } from '../_util/props-util';
import getDropdownProps from './getDropdownProps';
import { defaultConfigProvider } from '../config-provider';
import EllipsisOutlined from '@ant-design/icons-vue/EllipsisOutlined';
import { tuple } from '../_util/type';
var ButtonTypesProps = buttonTypes();
var DropdownProps = getDropdownProps();
var ButtonGroup = Button.Group;

var DropdownButtonProps = _extends(_extends(_extends({}, ButtonGroupProps), DropdownProps), {
  type: PropTypes.oneOf(tuple('primary', 'ghost', 'dashed', 'danger', 'default')).def('default'),
  size: PropTypes.oneOf(tuple('small', 'large', 'default')).def('default'),
  htmlType: ButtonTypesProps.htmlType,
  href: PropTypes.string,
  disabled: PropTypes.looseBool,
  prefixCls: PropTypes.string,
  placement: DropdownProps.placement.def('bottomRight'),
  icon: PropTypes.any,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onVisibleChange: PropTypes.func,
  'onUpdate:visible': PropTypes.func
});

export { DropdownButtonProps };
export default defineComponent({
  name: 'ADropdownButton',
  inheritAttrs: false,
  props: DropdownButtonProps,
  emits: ['click', 'visibleChange', 'update:visible'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      popupRef: null
    };
  },
  created: function created() {
    provide('savePopupRef', this.savePopupRef);
  },
  methods: {
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    },
    handleVisibleChange: function handleVisibleChange(val) {
      this.$emit('update:visible', val);
      this.$emit('visibleChange', val);
    }
  },
  render: function render() {
    var _this = this;

    var _a = _extends(_extends({}, this.$props), this.$attrs),
        type = _a.type,
        disabled = _a.disabled,
        onClick = _a.onClick,
        htmlType = _a.htmlType,
        className = _a.class,
        customizePrefixCls = _a.prefixCls,
        overlay = _a.overlay,
        trigger = _a.trigger,
        align = _a.align,
        visible = _a.visible,
        onVisibleChange = _a.onVisibleChange,
        placement = _a.placement,
        getPopupContainer = _a.getPopupContainer,
        href = _a.href,
        title = _a.title,
        restProps = __rest(_a, ["type", "disabled", "onClick", "htmlType", "class", "prefixCls", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "title"]);

    var icon = getComponent(this, 'icon') || _createVNode(EllipsisOutlined, null, null);

    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
    var dropdownProps = {
      align: align,
      disabled: disabled,
      trigger: disabled ? [] : trigger,
      placement: placement,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      onVisibleChange: this.handleVisibleChange
    };

    if (hasProp(this, 'visible')) {
      dropdownProps.visible = visible;
    }

    var buttonGroupProps = _extends(_extends({}, restProps), {
      class: classNames(prefixCls, className)
    });

    return _createVNode(ButtonGroup, buttonGroupProps, {
      default: function _default() {
        return [_createVNode(Button, {
          "type": type,
          "disabled": disabled,
          "onClick": _this.handleClick,
          "htmlType": htmlType,
          "href": href,
          "title": title
        }, {
          default: function _default() {
            return [getSlot(_this)];
          }
        }), _createVNode(Dropdown, _objectSpread(_objectSpread({}, dropdownProps), {}, {
          "overlay": getComponent(_this, 'overlay')
        }), {
          default: function _default() {
            return [_createVNode(Button, {
              "type": type
            }, {
              default: function _default() {
                return [icon];
              }
            })];
          }
        })];
      }
    });
  }
});