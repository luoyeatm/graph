"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.imageProps = void 0;

var _vue = require("vue");

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _classNames = _interopRequireDefault(require("../../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _css = require("../../vc-util/Dom/css");

var _Preview = _interopRequireDefault(require("./Preview"));

var _PreviewGroup = _interopRequireWildcard(require("./PreviewGroup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var imageProps = {
  src: _vueTypes.default.string,
  wrapperClassName: _vueTypes.default.string,
  wrapperStyle: _vueTypes.default.style,
  prefixCls: _vueTypes.default.string,
  previewPrefixCls: _vueTypes.default.string,
  placeholder: _vueTypes.default.VNodeChild,
  fallback: _vueTypes.default.string,
  preview: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.shape({
    visible: _vueTypes.default.bool,
    onVisibleChange: _vueTypes.default.func,
    getContainer: _vueTypes.default.oneOf([_vueTypes.default.func, _vueTypes.default.bool])
  }).loose]).def(true)
};
exports.imageProps = imageProps;

var mergeDefaultValue = function mergeDefaultValue(obj, defaultValues) {
  var res = _extends({}, obj);

  Object.keys(defaultValues).forEach(function (key) {
    if (obj[key] === undefined) {
      res[key] = defaultValues[key];
    }
  });
  return res;
};

var uuid = 0;
var ImageInternal = (0, _vue.defineComponent)({
  name: 'Image',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: imageProps,
  emits: ['click'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        emit = _ref.emit;
    var prefixCls = (0, _vue.computed)(function () {
      return props.prefixCls;
    });
    var previewPrefixCls = (0, _vue.computed)(function () {
      return "".concat(prefixCls.value, "-preview");
    });
    var preview = (0, _vue.computed)(function () {
      var defaultValues = {
        visible: undefined,
        onVisibleChange: function onVisibleChange() {},
        getContainer: undefined
      };
      return _typeof(props.preview) === 'object' ? mergeDefaultValue(props.preview, defaultValues) : defaultValues;
    });
    var isCustomPlaceholder = (0, _vue.computed)(function () {
      return props.placeholder && props.placeholder !== true || slots.placeholder;
    });
    var previewVisible = (0, _vue.computed)(function () {
      return preview.value.visible;
    });
    var onPreviewVisibleChange = (0, _vue.computed)(function () {
      return preview.value.onVisibleChange;
    });
    var getPreviewContainer = (0, _vue.computed)(function () {
      return preview.value.getContainer;
    });
    var isControlled = (0, _vue.computed)(function () {
      return previewVisible.value !== undefined;
    });
    var isShowPreview = (0, _vue.ref)(!!previewVisible.value);
    (0, _vue.watch)(previewVisible, function () {
      isShowPreview.value = !!previewVisible.value;
    });
    (0, _vue.watch)(isShowPreview, function (val, preVal) {
      onPreviewVisibleChange.value(val, preVal);
    });
    var status = (0, _vue.ref)(isCustomPlaceholder.value ? 'loading' : 'normal');
    (0, _vue.watch)(function () {
      return props.src;
    }, function () {
      status.value = isCustomPlaceholder.value ? 'loading' : 'normal';
    });
    var mousePosition = (0, _vue.ref)(null);
    var isError = (0, _vue.computed)(function () {
      return status.value === 'error';
    });

    var groupContext = _PreviewGroup.context.inject();

    var isPreviewGroup = groupContext.isPreviewGroup,
        setCurrent = groupContext.setCurrent,
        setGroupShowPreview = groupContext.setShowPreview,
        setGroupMousePosition = groupContext.setMousePosition,
        registerImage = groupContext.registerImage;
    var currentId = (0, _vue.ref)(uuid++);
    var canPreview = (0, _vue.computed)(function () {
      return props.preview && !isError.value;
    });

    var onLoad = function onLoad() {
      status.value = 'normal';
    };

    var onError = function onError() {
      status.value = 'error';
    };

    var onPreview = function onPreview(e) {
      if (!isControlled.value) {
        var _getOffset = (0, _css.getOffset)(e.target),
            left = _getOffset.left,
            top = _getOffset.top;

        if (isPreviewGroup.value) {
          setCurrent(currentId.value);
          setGroupMousePosition({
            x: left,
            y: top
          });
        } else {
          mousePosition.value = {
            x: left,
            y: top
          };
        }
      }

      if (isPreviewGroup.value) {
        setGroupShowPreview(true);
      } else {
        isShowPreview.value = true;
      }

      emit('click', e);
    };

    var onPreviewClose = function onPreviewClose() {
      isShowPreview.value = false;

      if (!isControlled.value) {
        mousePosition.value = null;
      }
    };

    var img = (0, _vue.ref)(null);
    (0, _vue.watch)(function () {
      return img;
    }, function () {
      if (status.value !== 'loading') return;

      if (img.value.complete && (img.value.naturalWidth || img.value.naturalHeight)) {
        onLoad();
      }
    });

    var unRegister = function unRegister() {};

    (0, _vue.onMounted)(function () {
      (0, _vue.watch)([function () {
        return props.src;
      }, canPreview], function () {
        unRegister();

        if (!isPreviewGroup.value) {
          return function () {};
        }

        unRegister = registerImage(currentId.value, props.src);

        if (!canPreview.value) {
          unRegister();
        }
      }, {
        flush: 'post',
        immediate: true
      });
    });

    var toSizePx = function toSizePx(l) {
      if ((0, _isNumber.default)(l)) return l + 'px';
      return l;
    };

    return function () {
      var prefixCls = props.prefixCls,
          wrapperClassName = props.wrapperClassName,
          fallback = props.fallback,
          src = props.src,
          preview = props.preview,
          placeholder = props.placeholder,
          wrapperStyle = props.wrapperStyle;
      var width = attrs.width,
          height = attrs.height,
          crossorigin = attrs.crossorigin,
          decoding = attrs.decoding,
          alt = attrs.alt,
          sizes = attrs.sizes,
          srcset = attrs.srcset,
          usemap = attrs.usemap,
          cls = attrs.class,
          style = attrs.style;
      var wrappperClass = (0, _classNames.default)(prefixCls, wrapperClassName, _defineProperty({}, "".concat(prefixCls, "-error"), isError.value));
      var mergedSrc = isError.value && fallback ? fallback : src;
      var previewMask = slots.previewMask && slots.previewMask();
      var imgCommonProps = {
        crossorigin: crossorigin,
        decoding: decoding,
        alt: alt,
        sizes: sizes,
        srcset: srcset,
        usemap: usemap,
        class: (0, _classNames.default)("".concat(prefixCls, "-img"), _defineProperty({}, "".concat(prefixCls, "-img-placeholder"), placeholder === true), cls),
        style: _extends({
          height: height
        }, style)
      };
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
        "class": wrappperClass,
        "onClick": preview && !isError.value ? onPreview : function (e) {
          emit('click', e);
        },
        "style": _extends({
          width: toSizePx(width),
          height: toSizePx(height)
        }, wrapperStyle)
      }, [(0, _vue.createVNode)("img", _objectSpread(_objectSpread(_objectSpread({}, imgCommonProps), isError.value && fallback ? {
        src: fallback
      } : {
        onLoad: onLoad,
        onError: onError,
        src: src
      }), {}, {
        "ref": img
      }), null), status.value === 'loading' && (0, _vue.createVNode)("div", {
        "aria-hidden": "true",
        "class": "".concat(prefixCls, "-placeholder")
      }, [placeholder || slots.placeholder && slots.placeholder()]), previewMask && canPreview.value && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-mask")
      }, [previewMask])]), !isPreviewGroup.value && canPreview.value && (0, _vue.createVNode)(_Preview.default, {
        "aria-hidden": !isShowPreview.value,
        "visible": isShowPreview.value,
        "prefixCls": previewPrefixCls.value,
        "onClose": onPreviewClose,
        "mousePosition": mousePosition.value,
        "src": mergedSrc,
        "alt": alt,
        "getContainer": getPreviewContainer.value
      }, null)]);
    };
  }
});
ImageInternal.PreviewGroup = _PreviewGroup.default;
var _default = ImageInternal;
exports.default = _default;