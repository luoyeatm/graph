"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "imageProps", {
  enumerable: true,
  get: function get() {
    return _Image.imageProps;
  }
});
exports.default = void 0;

var _vue = require("vue");

var _configProvider = require("../config-provider");

var _vcImage = _interopRequireDefault(require("../vc-image"));

var _Image = require("../vc-image/src/Image");

var _PreviewGroup = _interopRequireDefault(require("./PreviewGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Image = (0, _vue.defineComponent)({
  name: 'AImage',
  inheritAttrs: false,
  props: _Image.imageProps,
  setup: function setup(props, ctx) {
    var slots = ctx.slots,
        attrs = ctx.attrs;
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    return function () {
      var getPrefixCls = configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('image', props.prefixCls);
      return (0, _vue.createVNode)(_vcImage.default, _extends(_extends(_extends({}, attrs), props), {
        prefixCls: prefixCls
      }), slots);
    };
  }
});
Image.PreviewGroup = _PreviewGroup.default;

Image.install = function (app) {
  app.component(Image.name, Image);
  app.component(Image.PreviewGroup.name, Image.PreviewGroup);
  return app;
};

var _default = Image;
exports.default = _default;