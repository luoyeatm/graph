import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PreviewGroup from '../vc-image/src/PreviewGroup';
import { defineComponent, inject } from 'vue';
import { defaultConfigProvider } from '../config-provider';
import PropTypes from '../_util/vue-types';
var InternalPreviewGroup = defineComponent({
  name: 'AImagePreviewGroup',
  inheritAttrs: false,
  props: {
    previewPrefixCls: PropTypes.string
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;
    var configProvider = inject('configProvider', defaultConfigProvider);
    return function () {
      var getPrefixCls = configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('image-preview', props.previewPrefixCls);
      return _createVNode(PreviewGroup, _objectSpread({
        "previewPrefixCls": prefixCls
      }, _extends(_extends({}, attrs), props)), slots);
    };
  }
});
export default InternalPreviewGroup;