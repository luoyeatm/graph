import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { computed, defineComponent, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import RotateLeftOutlined from '@ant-design/icons-vue/RotateLeftOutlined';
import RotateRightOutlined from '@ant-design/icons-vue/RotateRightOutlined';
import ZoomInOutlined from '@ant-design/icons-vue/ZoomInOutlined';
import ZoomOutOutlined from '@ant-design/icons-vue/ZoomOutOutlined';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import LeftOutlined from '@ant-design/icons-vue/LeftOutlined';
import RightOutlined from '@ant-design/icons-vue/RightOutlined';
import classnames from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import Dialog from '../../vc-dialog';
import getIDialogPropTypes from '../../vc-dialog/IDialogPropTypes';
import { getOffset } from '../../vc-util/Dom/css';
import addEventListener from '../../vc-util/Dom/addEventListener';
import { warning } from '../../vc-util/warning';
import useFrameSetState from './hooks/useFrameSetState';
import getFixScaleEleTransPosition from './getFixScaleEleTransPosition';
import { context } from './PreviewGroup';
var IDialogPropTypes = getIDialogPropTypes();
var initialPosition = {
  x: 0,
  y: 0
};

var PreviewType = _extends({
  src: PropTypes.string,
  alt: PropTypes.string
}, IDialogPropTypes);

var Preview = defineComponent({
  name: 'Preview',
  inheritAttrs: false,
  props: PreviewType,
  emits: ['close', 'afterClose'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs;
    var scale = ref(1);
    var rotate = ref(0);

    var _useFrameSetState = useFrameSetState(initialPosition),
        _useFrameSetState2 = _slicedToArray(_useFrameSetState, 2),
        position = _useFrameSetState2[0],
        setPosition = _useFrameSetState2[1];

    var onClose = function onClose() {
      return emit('close');
    };

    var imgRef = ref();
    var originPositionRef = reactive({
      originX: 0,
      originY: 0,
      deltaX: 0,
      deltaY: 0
    });
    var isMoving = ref(false);
    var groupContext = context.inject();
    var previewUrls = groupContext.previewUrls,
        current = groupContext.current,
        isPreviewGroup = groupContext.isPreviewGroup,
        setCurrent = groupContext.setCurrent;
    var previewGroupCount = computed(function () {
      return Object.keys(previewUrls).length;
    });
    var previewUrlsKeys = computed(function () {
      return Object.keys(previewUrls);
    });
    var currentPreviewIndex = computed(function () {
      return previewUrlsKeys.value.indexOf(String(current.value));
    });
    var combinationSrc = computed(function () {
      return isPreviewGroup.value ? previewUrls[current.value] : props.src;
    });
    var showLeftOrRightSwitches = computed(function () {
      return isPreviewGroup.value && previewGroupCount.value > 1;
    });

    var onAfterClose = function onAfterClose() {
      scale.value = 1;
      rotate.value = 0;
      setPosition(initialPosition);
    };

    var onZoomIn = function onZoomIn() {
      scale.value++;
      setPosition(initialPosition);
    };

    var onZoomOut = function onZoomOut() {
      if (scale.value > 1) {
        scale.value--;
      }

      setPosition(initialPosition);
    };

    var onRotateRight = function onRotateRight() {
      rotate.value += 90;
    };

    var onRotateLeft = function onRotateLeft() {
      rotate.value -= 90;
    };

    var onSwitchLeft = function onSwitchLeft(event) {
      event.preventDefault(); // Without this mask close will abnormal

      event.stopPropagation();

      if (currentPreviewIndex.value > 0) {
        setCurrent(previewUrlsKeys.value[String(currentPreviewIndex.value - 1)]);
      }
    };

    var onSwitchRight = function onSwitchRight(event) {
      event.preventDefault(); // Without this mask close will abnormal

      event.stopPropagation();

      if (currentPreviewIndex.value < previewGroupCount.value - 1) {
        setCurrent(previewUrlsKeys.value[String(currentPreviewIndex.value + 1)]);
      }
    };

    var wrapClassName = classnames(_defineProperty({}, "".concat(props.prefixCls, "-moving"), isMoving.value));
    var toolClassName = "".concat(props.prefixCls, "-operations-operation");
    var iconClassName = "".concat(props.prefixCls, "-operations-icon");
    var tools = [{
      icon: CloseOutlined,
      onClick: onClose,
      type: 'close'
    }, {
      icon: ZoomInOutlined,
      onClick: onZoomIn,
      type: 'zoomIn'
    }, {
      icon: ZoomOutOutlined,
      onClick: onZoomOut,
      type: 'zoomOut',
      disabled: computed(function () {
        return scale.value === 1;
      })
    }, {
      icon: RotateRightOutlined,
      onClick: onRotateRight,
      type: 'rotateRight'
    }, {
      icon: RotateLeftOutlined,
      onClick: onRotateLeft,
      type: 'rotateLeft'
    }];

    var onMouseUp = function onMouseUp() {
      if (props.visible && isMoving.value) {
        var width = imgRef.value.offsetWidth * scale.value;
        var height = imgRef.value.offsetHeight * scale.value;

        var _getOffset = getOffset(imgRef.value),
            left = _getOffset.left,
            top = _getOffset.top;

        var isRotate = rotate.value % 180 !== 0;
        isMoving.value = false;
        var fixState = getFixScaleEleTransPosition(isRotate ? height : width, isRotate ? width : height, left, top);

        if (fixState) {
          setPosition(_extends({}, fixState));
        }
      }
    };

    var onMouseDown = function onMouseDown(event) {
      event.preventDefault(); // Without this mask close will abnormal

      event.stopPropagation();
      originPositionRef.deltaX = event.pageX - position.x;
      originPositionRef.deltaY = event.pageY - position.y;
      originPositionRef.originX = position.x;
      originPositionRef.originY = position.y;
      isMoving.value = true;
    };

    var onMouseMove = function onMouseMove(event) {
      if (props.visible && isMoving.value) {
        setPosition({
          x: event.pageX - originPositionRef.deltaX,
          y: event.pageY - originPositionRef.deltaY
        });
      }
    };

    var removeListeners = function removeListeners() {};

    onMounted(function () {
      watch([function () {
        return props.visible;
      }, isMoving], function () {
        removeListeners();
        var onTopMouseUpListener;
        var onTopMouseMoveListener;
        var onMouseUpListener = addEventListener(window, 'mouseup', onMouseUp, false);
        var onMouseMoveListener = addEventListener(window, 'mousemove', onMouseMove, false);

        try {
          // Resolve if in iframe lost event

          /* istanbul ignore next */
          if (window.top !== window.self) {
            onTopMouseUpListener = addEventListener(window.top, 'mouseup', onMouseUp, false);
            onTopMouseMoveListener = addEventListener(window.top, 'mousemove', onMouseMove, false);
          }
        } catch (error) {
          /* istanbul ignore next */
          warning(false, "[vc-image] ".concat(error));
        }

        removeListeners = function removeListeners() {
          onMouseUpListener.remove();
          onMouseMoveListener.remove();
          /* istanbul ignore next */

          if (onTopMouseUpListener) onTopMouseUpListener.remove();
          /* istanbul ignore next */

          if (onTopMouseMoveListener) onTopMouseMoveListener.remove();
        };
      }, {
        flush: 'post',
        immediate: true
      });
    });
    onUnmounted(function () {
      removeListeners();
    });
    return function () {
      return _createVNode(Dialog, _objectSpread(_objectSpread({}, attrs), {}, {
        "transitionName": "zoom",
        "maskTransitionName": "fade",
        "closable": false,
        "keyboard": true,
        "prefixCls": props.prefixCls,
        "onClose": onClose,
        "afterClose": onAfterClose,
        "visible": props.visible,
        "wrapClassName": wrapClassName,
        "getContainer": props.getContainer
      }), {
        default: function _default() {
          return [_createVNode("ul", {
            "class": "".concat(props.prefixCls, "-operations")
          }, [tools.map(function (_ref2) {
            var IconType = _ref2.icon,
                onClick = _ref2.onClick,
                type = _ref2.type,
                disabled = _ref2.disabled;
            return _createVNode("li", {
              "class": classnames(toolClassName, _defineProperty({}, "".concat(props.prefixCls, "-operations-operation-disabled"), disabled && (disabled === null || disabled === void 0 ? void 0 : disabled.value))),
              "onClick": onClick,
              "key": type
            }, [_createVNode(IconType, {
              "class": iconClassName
            }, null)]);
          })]), _createVNode("div", {
            "class": "".concat(props.prefixCls, "-img-wrapper"),
            "style": {
              transform: "translate3d(".concat(position.x, "px, ").concat(position.y, "px, 0)")
            }
          }, [_createVNode("img", {
            "onMousedown": onMouseDown,
            "ref": imgRef,
            "class": "".concat(props.prefixCls, "-img"),
            "src": combinationSrc.value,
            "alt": props.alt,
            "style": {
              transform: "scale3d(".concat(scale.value, ", ").concat(scale.value, ", 1) rotate(").concat(rotate.value, "deg)")
            }
          }, null)]), showLeftOrRightSwitches.value && _createVNode("div", {
            "class": classnames("".concat(props.prefixCls, "-switch-left"), _defineProperty({}, "".concat(props.prefixCls, "-switch-left-disabled"), currentPreviewIndex.value <= 0)),
            "onClick": onSwitchLeft
          }, [_createVNode(LeftOutlined, null, null)]), showLeftOrRightSwitches.value && _createVNode("div", {
            "class": classnames("".concat(props.prefixCls, "-switch-right"), _defineProperty({}, "".concat(props.prefixCls, "-switch-right-disabled"), currentPreviewIndex.value >= previewGroupCount.value - 1)),
            "onClick": onSwitchRight
          }, [_createVNode(RightOutlined, null, null)])];
        }
      });
    };
  }
});
export default Preview;