"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _Filler = _interopRequireDefault(require("./Filler"));

var _Item = _interopRequireDefault(require("./Item"));

var _ScrollBar = _interopRequireDefault(require("./ScrollBar"));

var _useHeights3 = _interopRequireDefault(require("./hooks/useHeights"));

var _useScrollTo = _interopRequireDefault(require("./hooks/useScrollTo"));

var _useFrameWheel3 = _interopRequireDefault(require("./hooks/useFrameWheel"));

var _useMobileTouchMove = _interopRequireDefault(require("./hooks/useMobileTouchMove"));

var _useOriginScroll = _interopRequireDefault(require("./hooks/useOriginScroll"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _supportsPassive = _interopRequireDefault(require("../_util/supportsPassive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};

function renderChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {// style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return (0, _vue.createVNode)(_Item.default, {
      "key": key,
      "setRef": function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, {
      default: function _default() {
        return [node];
      }
    });
  });
}

var List = (0, _vue.defineComponent)({
  name: 'List',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    data: _vueTypes.default.array,
    height: _vueTypes.default.number,
    itemHeight: _vueTypes.default.number,

    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: _vueTypes.default.looseBool,
    itemKey: {
      type: [String, Number, Function],
      required: true
    },
    component: {
      type: [String, Object]
    },

    /** Set `false` will always use real scroll instead of virtual one */
    virtual: _vueTypes.default.looseBool,
    children: _vueTypes.default.func,
    onScroll: _vueTypes.default.func,
    onMousedown: _vueTypes.default.func,
    onMouseenter: _vueTypes.default.func
  },
  setup: function setup(props) {
    // ================================= MISC =================================
    var useVirtual = (0, _vue.computed)(function () {
      var height = props.height,
          itemHeight = props.itemHeight,
          virtual = props.virtual;
      return !!(virtual !== false && height && itemHeight);
    });
    var inVirtual = (0, _vue.computed)(function () {
      var height = props.height,
          itemHeight = props.itemHeight,
          data = props.data;
      return useVirtual.value && data && itemHeight * data.length > height;
    });
    var state = (0, _vue.reactive)({
      scrollTop: 0,
      scrollMoving: false,
      mergedData: (0, _vue.computed)(function () {
        return props.data || EMPTY_DATA;
      })
    });
    var componentRef = (0, _vue.ref)();
    var fillerInnerRef = (0, _vue.ref)();
    var scrollBarRef = (0, _vue.ref)(); // Hack on scrollbar to enable flash call
    // =============================== Item Key ===============================

    var getKey = function getKey(item) {
      if (typeof props.itemKey === 'function') {
        return props.itemKey(item);
      }

      return item[props.itemKey];
    };

    var sharedConfig = {
      getKey: getKey
    }; // ================================ Scroll ================================

    function syncScrollTop(newTop) {
      var value;

      if (typeof newTop === 'function') {
        value = newTop(state.scrollTop);
      } else {
        value = newTop;
      }

      var alignedTop = keepInRange(value);

      if (componentRef.value) {
        componentRef.value.scrollTop = alignedTop;
      }

      state.scrollTop = alignedTop;
    } // ================================ Height ================================


    var _useHeights = (0, _useHeights3.default)(getKey, null, null),
        _useHeights2 = _slicedToArray(_useHeights, 3),
        setInstance = _useHeights2[0],
        collectHeight = _useHeights2[1],
        heights = _useHeights2[2];

    var calRes = (0, _vue.ref)();
    (0, _vue.watchEffect)(function () {
      var _a;

      if (!useVirtual.value) {
        calRes.value = {
          scrollHeight: undefined,
          start: 0,
          end: state.mergedData.length - 1,
          offset: undefined
        };
        return;
      } // Always use virtual scroll bar in avoid shaking


      if (!inVirtual.value) {
        calRes.value = {
          scrollHeight: ((_a = fillerInnerRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0,
          start: 0,
          end: state.mergedData.length - 1,
          offset: undefined
        };
        return;
      }

      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = state.mergedData.length;

      for (var i = 0; i < dataLen; i += 1) {
        var item = state.mergedData[i];
        var key = getKey(item);
        var cacheHeight = heights[key];
        var currentItemBottom = itemTop + (cacheHeight === undefined ? props.itemHeight : cacheHeight);

        if (currentItemBottom >= state.scrollTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        } // Check item bottom in the range. We will render additional one item for motion usage


        if (currentItemBottom > state.scrollTop + props.height && endIndex === undefined) {
          endIndex = i;
        }

        itemTop = currentItemBottom;
      } // Fallback to normal if not match. This code should never reach

      /* istanbul ignore next */


      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
      }

      if (endIndex === undefined) {
        endIndex = state.mergedData.length - 1;
      } // Give cache to improve scroll experience


      endIndex = Math.min(endIndex + 1, state.mergedData.length);
      calRes.value = {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }); // =============================== In Range ===============================

    var maxScrollHeight = (0, _vue.computed)(function () {
      return calRes.value.scrollHeight - props.height;
    });

    function keepInRange(newScrollTop) {
      var newTop = Math.max(newScrollTop, 0);

      if (!Number.isNaN(maxScrollHeight.value)) {
        newTop = Math.min(newTop, maxScrollHeight.value);
      }

      return newTop;
    }

    var isScrollAtTop = (0, _vue.computed)(function () {
      return state.scrollTop <= 0;
    });
    var isScrollAtBottom = (0, _vue.computed)(function () {
      return state.scrollTop >= maxScrollHeight.value;
    });
    var originScroll = (0, _useOriginScroll.default)(isScrollAtTop, isScrollAtBottom); // ================================ Scroll ================================

    function onScrollBar(newScrollTop) {
      var newTop = newScrollTop;
      syncScrollTop(newTop);
    } // This code may only trigger in test case.
    // But we still need a sync if some special escape


    function onFallbackScroll(e) {
      var _a;

      var newScrollTop = e.currentTarget.scrollTop;

      if (Math.abs(newScrollTop - state.scrollTop) >= 1) {
        syncScrollTop(newScrollTop);
      } // Trigger origin onScroll


      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
    } // Since this added in global,should use ref to keep update


    var _useFrameWheel = (0, _useFrameWheel3.default)(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
      syncScrollTop(function (top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }),
        _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2),
        onRawWheel = _useFrameWheel2[0],
        onFireFoxScroll = _useFrameWheel2[1]; // Mobile touch move


    (0, _useMobileTouchMove.default)(useVirtual, componentRef, function (deltaY, smoothOffset) {
      if (originScroll(deltaY, smoothOffset)) {
        return false;
      }

      onRawWheel({
        preventDefault: function preventDefault() {},
        deltaY: deltaY
      });
      return true;
    }); // Firefox only

    function onMozMousePixelScroll(e) {
      if (useVirtual.value) {
        e.preventDefault();
      }
    }

    var removeEventListener = function removeEventListener() {
      if (componentRef.value) {
        componentRef.value.removeEventListener('wheel', onRawWheel, _supportsPassive.default ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener('DOMMouseScroll', onFireFoxScroll);
        componentRef.value.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      }
    };

    (0, _vue.watchEffect)(function () {
      (0, _vue.nextTick)(function () {
        if (componentRef.value) {
          removeEventListener();
          componentRef.value.addEventListener('wheel', onRawWheel, _supportsPassive.default ? {
            passive: false
          } : false);
          componentRef.value.addEventListener('DOMMouseScroll', onFireFoxScroll);
          componentRef.value.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      removeEventListener();
    }); // ================================= Ref ==================================

    var scrollTo = (0, _useScrollTo.default)(componentRef, state, heights, props, getKey, collectHeight, syncScrollTop, function () {
      var _a;

      (_a = scrollBarRef.value) === null || _a === void 0 ? void 0 : _a.delayHidden();
    });
    var componentStyle = (0, _vue.computed)(function () {
      var cs = null;

      if (props.height) {
        cs = _extends(_defineProperty({}, props.fullHeight ? 'height' : 'maxHeight', props.height + 'px'), ScrollStyle);

        if (useVirtual.value) {
          cs.overflowY = 'hidden';

          if (state.scrollMoving) {
            cs.pointerEvents = 'none';
          }
        }
      }

      return cs;
    });
    return {
      state: state,
      componentStyle: componentStyle,
      scrollTo: scrollTo,
      onFallbackScroll: onFallbackScroll,
      onScrollBar: onScrollBar,
      componentRef: componentRef,
      useVirtual: useVirtual,
      calRes: calRes,
      collectHeight: collectHeight,
      setInstance: setInstance,
      sharedConfig: sharedConfig,
      scrollBarRef: scrollBarRef,
      fillerInnerRef: fillerInnerRef
    };
  },
  render: function render() {
    var _this = this;

    var _a = _extends(_extends({}, this.$props), this.$attrs),
        _a$prefixCls = _a.prefixCls,
        prefixCls = _a$prefixCls === void 0 ? 'rc-virtual-list' : _a$prefixCls,
        height = _a.height,
        itemHeight = _a.itemHeight,
        fullHeight = _a.fullHeight,
        data = _a.data,
        itemKey = _a.itemKey,
        virtual = _a.virtual,
        _a$component = _a.component,
        Component = _a$component === void 0 ? 'div' : _a$component,
        onScroll = _a.onScroll,
        children = _a.children,
        style = _a.style,
        className = _a.class,
        restProps = __rest(_a, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]);

    var mergedClassName = (0, _classNames.default)(prefixCls, className);
    var _this$state = this.state,
        scrollTop = _this$state.scrollTop,
        mergedData = _this$state.mergedData;
    var _this$calRes = this.calRes,
        scrollHeight = _this$calRes.scrollHeight,
        offset = _this$calRes.offset,
        start = _this$calRes.start,
        end = _this$calRes.end;
    var componentStyle = this.componentStyle,
        onFallbackScroll = this.onFallbackScroll,
        onScrollBar = this.onScrollBar,
        useVirtual = this.useVirtual,
        collectHeight = this.collectHeight,
        sharedConfig = this.sharedConfig,
        setInstance = this.setInstance;
    var listChildren = renderChildren(mergedData, start, end, setInstance, children, sharedConfig);
    return (0, _vue.createVNode)("div", _objectSpread({
      "style": _extends(_extends({}, style), {
        position: 'relative'
      }),
      "class": mergedClassName
    }, restProps), [(0, _vue.createVNode)(Component, {
      "class": "".concat(prefixCls, "-holder"),
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_Filler.default, {
          "prefixCls": prefixCls,
          "height": scrollHeight,
          "offset": offset,
          "onInnerResize": collectHeight,
          "ref": "fillerInnerRef"
        }, {
          default: function _default() {
            return [listChildren];
          }
        })];
      }
    }), useVirtual && (0, _vue.createVNode)(_ScrollBar.default, {
      "ref": "scrollBarRef",
      "prefixCls": prefixCls,
      "scrollTop": scrollTop,
      "height": height,
      "scrollHeight": scrollHeight,
      "count": mergedData.length,
      "onScroll": onScrollBar,
      "onStartMove": function onStartMove() {
        _this.state.scrollMoving = true;
      },
      "onStopMove": function onStopMove() {
        _this.state.scrollMoving = false;
      }
    }, null)]);
  }
});
var _default2 = List;
exports.default = _default2;