import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Dialog from './Dialog';
import getDialogPropTypes from './IDialogPropTypes';
import Portal from '../_util/PortalWrapper';
import { getSlot } from '../_util/props-util';
import { defineComponent } from 'vue';
var IDialogPropTypes = getDialogPropTypes();
var DialogWrap = defineComponent({
  inheritAttrs: false,
  props: _extends(_extends({}, IDialogPropTypes), {
    visible: IDialogPropTypes.visible.def(false)
  }),
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        visible = _this$$props.visible,
        getContainer = _this$$props.getContainer,
        forceRender = _this$$props.forceRender;

    var dialogProps = _extends(_extends(_extends({}, this.$props), this.$attrs), {
      ref: '_component',
      key: 'dialog'
    }); // ??????????????? dom ??????


    if (getContainer === false) {
      return _createVNode(Dialog, _objectSpread(_objectSpread({}, dialogProps), {}, {
        "getOpenCount": function getOpenCount() {
          return 2;
        }
      }), {
        default: function _default() {
          return [getSlot(_this)];
        }
      });
    }

    return _createVNode(Portal, {
      "visible": visible,
      "forceRender": forceRender,
      "getContainer": getContainer,
      "children": function children(childProps) {
        dialogProps = _extends(_extends({}, dialogProps), childProps);
        return _createVNode(Dialog, dialogProps, {
          default: function _default() {
            return [getSlot(_this)];
          }
        });
      }
    }, null);
  }
});
export default DialogWrap;