import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, inject } from 'vue';
import { defaultConfigProvider } from '../config-provider';
import ImageInternal from '../vc-image';
import { imageProps } from '../vc-image/src/Image';
import PreviewGroup from './PreviewGroup';
var Image = defineComponent({
  name: 'AImage',
  inheritAttrs: false,
  props: imageProps,
  setup: function setup(props, ctx) {
    var slots = ctx.slots,
        attrs = ctx.attrs;
    var configProvider = inject('configProvider', defaultConfigProvider);
    return function () {
      var getPrefixCls = configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('image', props.prefixCls);
      return _createVNode(ImageInternal, _extends(_extends(_extends({}, attrs), props), {
        prefixCls: prefixCls
      }), slots);
    };
  }
});
export { imageProps };
Image.PreviewGroup = PreviewGroup;

Image.install = function (app) {
  app.component(Image.name, Image);
  app.component(Image.PreviewGroup.name, Image.PreviewGroup);
  return app;
};

export default Image;