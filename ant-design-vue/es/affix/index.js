import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, ref, reactive, watch, onMounted, getCurrentInstance, computed, onUnmounted, onUpdated } from 'vue';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import omit from 'omit.js';
import ResizeObserver from '../vc-resize-observer';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import { withInstall } from '../_util/type';
import { addObserveTarget, removeObserveTarget, getTargetRect, getFixedTop, getFixedBottom } from './utils';
import useConfigInject from '../_util/hooks/useConfigInject';

function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

var AffixStatus;

(function (AffixStatus) {
  AffixStatus[AffixStatus["None"] = 0] = "None";
  AffixStatus[AffixStatus["Prepare"] = 1] = "Prepare";
})(AffixStatus || (AffixStatus = {})); // Affix


var affixProps = {
  /**
   * ????????????????????????????????????????????????
   */
  offsetTop: PropTypes.number,
  offset: PropTypes.number,

  /** ???????????????????????????????????????????????? */
  offsetBottom: PropTypes.number,

  /** ?????????????????????????????????????????? */
  // onChange?: (affixed?: boolean) => void;

  /** ?????? Affix ??????????????????????????????????????????????????????????????? DOM ??????????????? */
  target: PropTypes.func.def(getDefaultTarget),
  prefixCls: PropTypes.string,
  onChange: PropTypes.func,
  onTestUpdatePosition: PropTypes.func
};
var Affix = defineComponent({
  name: 'AAffix',
  props: affixProps,
  emits: ['change', 'testUpdatePosition'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        expose = _ref.expose;
    var placeholderNode = ref();
    var fixedNode = ref();
    var state = reactive({
      affixStyle: undefined,
      placeholderStyle: undefined,
      status: AffixStatus.None,
      lastAffix: false,
      prevTarget: null,
      timeout: null
    });
    var currentInstance = getCurrentInstance();
    var offsetTop = computed(function () {
      return props.offsetBottom === undefined && props.offsetTop === undefined ? 0 : props.offsetTop;
    });
    var offsetBottom = computed(function () {
      return props.offsetBottom;
    });

    var measure = function measure() {
      var status = state.status,
          lastAffix = state.lastAffix;
      var target = props.target;

      if (status !== AffixStatus.Prepare || !fixedNode.value || !placeholderNode.value || !target) {
        return;
      }

      var targetNode = target();

      if (!targetNode) {
        return;
      }

      var newState = {
        status: AffixStatus.None
      };
      var targetRect = getTargetRect(targetNode);
      var placeholderReact = getTargetRect(placeholderNode.value);
      var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop.value);
      var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom.value);

      if (fixedTop !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          top: fixedTop,
          width: placeholderReact.width + 'px',
          height: placeholderReact.height + 'px'
        };
        newState.placeholderStyle = {
          width: placeholderReact.width + 'px',
          height: placeholderReact.height + 'px'
        };
      } else if (fixedBottom !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          bottom: fixedBottom,
          width: placeholderReact.width + 'px',
          height: placeholderReact.height + 'px'
        };
        newState.placeholderStyle = {
          width: placeholderReact.width + 'px',
          height: placeholderReact.height + 'px'
        };
      }

      newState.lastAffix = !!newState.affixStyle;

      if (lastAffix !== newState.lastAffix) {
        emit('change', newState.lastAffix);
      } // update state


      _extends(state, newState);
    };

    var prepareMeasure = function prepareMeasure() {
      _extends(state, {
        status: AffixStatus.Prepare,
        affixStyle: undefined,
        placeholderStyle: undefined
      });

      currentInstance.update(); // Test if `updatePosition` called

      if (process.env.NODE_ENV === 'test') {
        emit('testUpdatePosition');
      }
    };

    var updatePosition = throttleByAnimationFrame(function () {
      prepareMeasure();
    });
    var lazyUpdatePosition = throttleByAnimationFrame(function () {
      var target = props.target;
      var affixStyle = state.affixStyle; // Check position change before measure to make Safari smooth

      if (target && affixStyle) {
        var targetNode = target();

        if (targetNode && placeholderNode.value) {
          var targetRect = getTargetRect(targetNode);
          var placeholderReact = getTargetRect(placeholderNode.value);
          var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop.value);
          var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom.value);

          if (fixedTop !== undefined && affixStyle.top === fixedTop || fixedBottom !== undefined && affixStyle.bottom === fixedBottom) {
            return;
          }
        }
      } // Directly call prepare measure since it's already throttled.


      prepareMeasure();
    });
    expose({
      updatePosition: updatePosition,
      lazyUpdatePosition: lazyUpdatePosition
    });
    watch(function () {
      return props.target;
    }, function (val) {
      var newTarget = null;

      if (val) {
        newTarget = val() || null;
      }

      if (state.prevTarget !== newTarget) {
        removeObserveTarget(currentInstance);

        if (newTarget) {
          addObserveTarget(newTarget, currentInstance); // Mock Event object.

          updatePosition();
        }

        state.prevTarget = newTarget;
      }
    });
    watch(function () {
      return [props.offsetTop, props.offsetBottom];
    }, updatePosition);
    onMounted(function () {
      var target = props.target;

      if (target) {
        // [Legacy] Wait for parent component ref has its value.
        // We should use target as directly element instead of function which makes element check hard.
        state.timeout = setTimeout(function () {
          addObserveTarget(target(), currentInstance); // Mock Event object.

          updatePosition();
        });
      }
    });
    onUpdated(function () {
      measure();
    });
    onUnmounted(function () {
      clearTimeout(state.timeout);
      removeObserveTarget(currentInstance);
      updatePosition.cancel(); // https://github.com/ant-design/ant-design/issues/22683

      lazyUpdatePosition.cancel();
    });

    var _useConfigInject = useConfigInject('affix', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var affixStyle = state.affixStyle,
          placeholderStyle = state.placeholderStyle;
      var className = classNames(_defineProperty({}, prefixCls.value, affixStyle));
      var restProps = omit(props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target']);
      return _createVNode(ResizeObserver, {
        "onResize": updatePosition
      }, {
        default: function _default() {
          return [_createVNode("div", _objectSpread(_objectSpread({}, restProps), {}, {
            "style": placeholderStyle,
            "ref": placeholderNode
          }), [_createVNode("div", {
            "class": className,
            "ref": fixedNode,
            "style": affixStyle
          }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])])];
        }
      });
    };
  }
});
export default withInstall(Affix);