"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

var _throttleByAnimationFrame = _interopRequireDefault(require("../_util/throttleByAnimationFrame"));

var _type = require("../_util/type");

var _utils = require("./utils");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  offsetTop: _vueTypes.default.number,
  offset: _vueTypes.default.number,

  /** ???????????????????????????????????????????????? */
  offsetBottom: _vueTypes.default.number,

  /** ?????????????????????????????????????????? */
  // onChange?: (affixed?: boolean) => void;

  /** ?????? Affix ??????????????????????????????????????????????????????????????? DOM ??????????????? */
  target: _vueTypes.default.func.def(getDefaultTarget),
  prefixCls: _vueTypes.default.string,
  onChange: _vueTypes.default.func,
  onTestUpdatePosition: _vueTypes.default.func
};
var Affix = (0, _vue.defineComponent)({
  name: 'AAffix',
  props: affixProps,
  emits: ['change', 'testUpdatePosition'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        expose = _ref.expose;
    var placeholderNode = (0, _vue.ref)();
    var fixedNode = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      affixStyle: undefined,
      placeholderStyle: undefined,
      status: AffixStatus.None,
      lastAffix: false,
      prevTarget: null,
      timeout: null
    });
    var currentInstance = (0, _vue.getCurrentInstance)();
    var offsetTop = (0, _vue.computed)(function () {
      return props.offsetBottom === undefined && props.offsetTop === undefined ? 0 : props.offsetTop;
    });
    var offsetBottom = (0, _vue.computed)(function () {
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
      var targetRect = (0, _utils.getTargetRect)(targetNode);
      var placeholderReact = (0, _utils.getTargetRect)(placeholderNode.value);
      var fixedTop = (0, _utils.getFixedTop)(placeholderReact, targetRect, offsetTop.value);
      var fixedBottom = (0, _utils.getFixedBottom)(placeholderReact, targetRect, offsetBottom.value);

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

    var updatePosition = (0, _throttleByAnimationFrame.default)(function () {
      prepareMeasure();
    });
    var lazyUpdatePosition = (0, _throttleByAnimationFrame.default)(function () {
      var target = props.target;
      var affixStyle = state.affixStyle; // Check position change before measure to make Safari smooth

      if (target && affixStyle) {
        var targetNode = target();

        if (targetNode && placeholderNode.value) {
          var targetRect = (0, _utils.getTargetRect)(targetNode);
          var placeholderReact = (0, _utils.getTargetRect)(placeholderNode.value);
          var fixedTop = (0, _utils.getFixedTop)(placeholderReact, targetRect, offsetTop.value);
          var fixedBottom = (0, _utils.getFixedBottom)(placeholderReact, targetRect, offsetBottom.value);

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
    (0, _vue.watch)(function () {
      return props.target;
    }, function (val) {
      var newTarget = null;

      if (val) {
        newTarget = val() || null;
      }

      if (state.prevTarget !== newTarget) {
        (0, _utils.removeObserveTarget)(currentInstance);

        if (newTarget) {
          (0, _utils.addObserveTarget)(newTarget, currentInstance); // Mock Event object.

          updatePosition();
        }

        state.prevTarget = newTarget;
      }
    });
    (0, _vue.watch)(function () {
      return [props.offsetTop, props.offsetBottom];
    }, updatePosition);
    (0, _vue.onMounted)(function () {
      var target = props.target;

      if (target) {
        // [Legacy] Wait for parent component ref has its value.
        // We should use target as directly element instead of function which makes element check hard.
        state.timeout = setTimeout(function () {
          (0, _utils.addObserveTarget)(target(), currentInstance); // Mock Event object.

          updatePosition();
        });
      }
    });
    (0, _vue.onUpdated)(function () {
      measure();
    });
    (0, _vue.onUnmounted)(function () {
      clearTimeout(state.timeout);
      (0, _utils.removeObserveTarget)(currentInstance);
      updatePosition.cancel(); // https://github.com/ant-design/ant-design/issues/22683

      lazyUpdatePosition.cancel();
    });

    var _useConfigInject = (0, _useConfigInject2.default)('affix', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var affixStyle = state.affixStyle,
          placeholderStyle = state.placeholderStyle;
      var className = (0, _classNames2.default)(_defineProperty({}, prefixCls.value, affixStyle));
      var restProps = (0, _omit.default)(props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target']);
      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": updatePosition
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", _objectSpread(_objectSpread({}, restProps), {}, {
            "style": placeholderStyle,
            "ref": placeholderNode
          }), [(0, _vue.createVNode)("div", {
            "class": className,
            "ref": fixedNode,
            "style": affixStyle
          }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])])];
        }
      });
    };
  }
});

var _default2 = (0, _type.withInstall)(Affix);

exports.default = _default2;