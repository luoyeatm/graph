import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import classnames from '../../_util/classNames';
import { Teleport, nextTick, defineComponent } from 'vue';
import BaseMixin from '../../_util/BaseMixin';
import { initDefaultProps, getSlot } from '../../_util/props-util';
import getScrollBarSize from '../../_util/getScrollBarSize';
import { IDrawerProps } from './IDrawerPropTypes';
import KeyCode from '../../_util/KeyCode';
import { dataToArray, transitionEnd, transitionStr, addEventListener, removeEventListener, transformArguments, isNumeric } from './utils';
import supportsPassive from '../../_util/supportsPassive';
import { cloneElement } from '../../_util/vnode';

function noop() {}

var currentDrawer = {};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var Drawer = defineComponent({
  name: 'Drawer',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(IDrawerProps, {
    prefixCls: 'drawer',
    placement: 'left',
    getContainer: 'body',
    level: 'all',
    duration: '.3s',
    ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    firstEnter: false,
    showMask: true,
    handler: true,
    maskStyle: {},
    wrapperClassName: ''
  }),
  data: function data() {
    this.levelDom = [];
    this.contentDom = null;
    this.maskDom = null;
    this.handlerdom = null;
    this.mousePos = null;
    this.sFirstEnter = this.firstEnter;
    this.timeout = null;
    this.children = null;
    this.dom = null;
    this.drawerId = Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9))).toString(16);
    var open = this.open !== undefined ? this.open : !!this.defaultOpen;
    currentDrawer[this.drawerId] = open;
    this.orignalOpen = this.open;
    this.preProps = _extends({}, this.$props);
    return {
      sOpen: open,
      isOpenChange: undefined,
      passive: undefined,
      container: undefined
    };
  },
  watch: {
    open: function (_open) {
      function open(_x) {
        return _open.apply(this, arguments);
      }

      open.toString = function () {
        return _open.toString();
      };

      return open;
    }(function (val) {
      var _this = this;

      if (val !== undefined && val !== this.preProps.open) {
        this.isOpenChange = true; // ????????? dom ????????????????????????;

        if (!this.container) {
          this.getDefault(this.$props);
        }

        this.setState({
          sOpen: open
        });
      }

      this.preProps.open = val;

      if (val) {
        nextTick(function () {
          _this.domFocus();
        });
      }
    }),
    placement: function placement(val) {
      if (val !== this.preProps.placement) {
        // test ??? bug, ???????????????????????? dom
        this.contentDom = null;
      }

      this.preProps.placement = val;
    },
    level: function level(val) {
      if (this.preProps.level !== val) {
        this.getParentAndLevelDom(this.$props);
      }

      this.preProps.level = val;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    nextTick(function () {
      if (!windowIsUndefined) {
        _this2.passive = supportsPassive ? {
          passive: false
        } : false;
      }

      var open = _this2.getOpen();

      if (_this2.handler || open || _this2.sFirstEnter) {
        _this2.getDefault(_this2.$props);

        if (open) {
          _this2.isOpenChange = true;
          nextTick(function () {
            _this2.domFocus();
          });
        }

        _this2.$forceUpdate();
      }
    });
  },
  updated: function updated() {
    var _this3 = this;

    nextTick(function () {
      // dom ??????????????????????????????
      if (!_this3.sFirstEnter && _this3.container) {
        _this3.$forceUpdate();

        _this3.sFirstEnter = true;
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    delete currentDrawer[this.drawerId];
    delete this.isOpenChange;

    if (this.container) {
      if (this.sOpen) {
        this.setLevelDomTransform(false, true);
      }

      document.body.style.overflow = '';
    }

    this.sFirstEnter = false;
    clearTimeout(this.timeout);
  },
  methods: {
    domFocus: function domFocus() {
      if (this.dom) {
        this.dom.focus();
      }
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === KeyCode.ESC) {
        e.stopPropagation();

        this.__emit('close', e);
      }
    },
    onMaskTouchEnd: function onMaskTouchEnd(e) {
      this.__emit('close', e);

      this.onTouchEnd(e, true);
    },
    onIconTouchEnd: function onIconTouchEnd(e) {
      this.__emit('handleClick', e);

      this.onTouchEnd(e);
    },
    onTouchEnd: function onTouchEnd(e, close) {
      if (this.open !== undefined) {
        return;
      }

      var open = close || this.sOpen;
      this.isOpenChange = true;
      this.setState({
        sOpen: !open
      });
    },
    onWrapperTransitionEnd: function onWrapperTransitionEnd(e) {
      if (e.target === this.contentWrapper && e.propertyName.match(/transform$/)) {
        var _open2 = this.getOpen();

        this.dom.style.transition = '';

        if (!_open2 && this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (this.maskDom) {
            this.maskDom.style.left = '';
            this.maskDom.style.width = '';
          }
        }

        if (this.afterVisibleChange) {
          this.afterVisibleChange(!!_open2);
        }
      }
    },
    getDefault: function getDefault(props) {
      this.getParentAndLevelDom(props);

      if (props.getContainer || props.parent) {
        this.container = this.defaultGetContainer();
      }
    },
    getCurrentDrawerSome: function getCurrentDrawerSome() {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    },
    getSelfContainer: function getSelfContainer() {
      return this.container;
    },
    getParentAndLevelDom: function getParentAndLevelDom(props) {
      var _this4 = this;

      if (windowIsUndefined) {
        return;
      }

      var level = props.level,
          getContainer = props.getContainer;
      this.levelDom = [];

      if (getContainer) {
        if (typeof getContainer === 'string') {
          var dom = document.querySelectorAll(getContainer)[0];
          this.parent = dom;
        }

        if (typeof getContainer === 'function') {
          this.parent = getContainer();
        }

        if (_typeof(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
          this.parent = getContainer;
        }
      }

      if (!getContainer && this.container) {
        this.parent = this.container.parentNode;
      }

      if (level === 'all') {
        var children = Array.prototype.slice.call(this.parent.children);
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== _this4.container) {
            _this4.levelDom.push(child);
          }
        });
      } else if (level) {
        dataToArray(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this4.levelDom.push(item);
          });
        });
      }
    },
    setLevelDomTransform: function setLevelDomTransform(open, openTransition, placementName, value) {
      var _this5 = this;

      var _this$$props = this.$props,
          placement = _this$$props.placement,
          levelMove = _this$$props.levelMove,
          duration = _this$$props.duration,
          ease = _this$$props.ease,
          getContainer = _this$$props.getContainer;

      if (!windowIsUndefined) {
        this.levelDom.forEach(function (dom) {
          if (dom && (_this5.isOpenChange || openTransition)) {
            /* eslint no-param-reassign: "error" */
            dom.style.transition = "transform ".concat(duration, " ").concat(ease);
            addEventListener(dom, transitionEnd, _this5.trnasitionEnd);
            var levelValue = open ? value : 0;

            if (levelMove) {
              var $levelMove = transformArguments(levelMove, {
                target: dom,
                open: open
              });
              levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
            }

            var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
            var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
            dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
            dom.style.msTransform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
          }
        }); // ?????? body ??????

        if (getContainer === 'body') {
          var eventArray = ['touchstart'];
          var domArray = [document.body, this.maskDom, this.handlerdom, this.contentDom];
          var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? getScrollBarSize(1) : 0;
          var widthTransition = "width ".concat(duration, " ").concat(ease);
          var trannsformTransition = "transform ".concat(duration, " ").concat(ease);

          if (open && document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';

            if (right) {
              document.body.style.position = 'relative';
              document.body.style.width = "calc(100% - ".concat(right, "px)");
              clearTimeout(this.timeout);

              if (this.dom) {
                this.dom.style.transition = 'none';

                switch (placement) {
                  case 'right':
                    this.dom.style.transform = "translateX(-".concat(right, "px)");
                    this.dom.style.msTransform = "translateX(-".concat(right, "px)");
                    break;

                  case 'top':
                  case 'bottom':
                    this.dom.style.width = "calc(100% - ".concat(right, "px)");
                    this.dom.style.transform = 'translateZ(0)';
                    break;

                  default:
                    break;
                }

                this.timeout = setTimeout(function () {
                  _this5.dom.style.transition = "".concat(trannsformTransition, ",").concat(widthTransition);
                  _this5.dom.style.width = '';
                  _this5.dom.style.transform = '';
                  _this5.dom.style.msTransform = '';
                });
              }
            } // ????????????


            domArray.forEach(function (item, i) {
              if (!item) {
                return;
              }

              addEventListener(item, eventArray[i] || 'touchmove', i ? _this5.removeMoveHandler : _this5.removeStartHandler, _this5.passive);
            });
          } else if (this.getCurrentDrawerSome()) {
            document.body.style.overflow = '';

            if ((this.isOpenChange || openTransition) && right) {
              document.body.style.position = '';
              document.body.style.width = '';

              if (transitionStr) {
                document.body.style.overflowX = 'hidden';
              }

              if (placement === 'right' && this.maskDom) {
                this.maskDom.style.left = "-".concat(right, "px");
                this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
              }

              clearTimeout(this.timeout);

              if (this.dom) {
                this.dom.style.transition = 'none';
                var heightTransition;

                switch (placement) {
                  case 'right':
                    {
                      this.dom.style.transform = "translateX(".concat(right, "px)");
                      this.dom.style.msTransform = "translateX(".concat(right, "px)");
                      this.dom.style.width = '100%';
                      widthTransition = "width 0s ".concat(ease, " ").concat(duration);
                      break;
                    }

                  case 'top':
                  case 'bottom':
                    {
                      this.dom.style.width = "calc(100% + ".concat(right, "px)");
                      this.dom.style.height = '100%';
                      this.dom.style.transform = 'translateZ(0)';
                      heightTransition = "height 0s ".concat(ease, " ").concat(duration);
                      break;
                    }

                  default:
                    break;
                }

                this.timeout = setTimeout(function () {
                  _this5.dom.style.transition = "".concat(trannsformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
                  _this5.dom.style.transform = '';
                  _this5.dom.style.msTransform = '';
                  _this5.dom.style.width = '';
                  _this5.dom.style.height = '';
                });
              }
            }

            domArray.forEach(function (item, i) {
              if (!item) {
                return;
              }

              removeEventListener(item, eventArray[i] || 'touchmove', i ? _this5.removeMoveHandler : _this5.removeStartHandler, _this5.passive);
            });
          }
        }
      }

      var onChange = this.$attrs.onChange;

      if (onChange && this.isOpenChange && this.sFirstEnter) {
        onChange(open);
        this.isOpenChange = false;
      }
    },
    getChildToRender: function getChildToRender(open) {
      var _classnames,
          _this6 = this;

      var _this$$props2 = this.$props,
          prefixCls = _this$$props2.prefixCls,
          placement = _this$$props2.placement,
          handler = _this$$props2.handler,
          showMask = _this$$props2.showMask,
          maskStyle = _this$$props2.maskStyle,
          width = _this$$props2.width,
          height = _this$$props2.height,
          wrapStyle = _this$$props2.wrapStyle,
          keyboard = _this$$props2.keyboard,
          maskClosable = _this$$props2.maskClosable;

      var _a = this.$attrs,
          cls = _a.class,
          style = _a.style,
          restAttrs = __rest(_a, ["class", "style"]);

      var children = getSlot(this);
      var wrapperClassname = classnames(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-").concat(placement), true), _defineProperty(_classnames, "".concat(prefixCls, "-open"), open), _defineProperty(_classnames, 'no-mask', !showMask), _defineProperty(_classnames, cls, cls), _classnames));
      var isOpenChange = this.isOpenChange;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y'); // ???????????????????????????????????????????????????????????????????????????
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;

      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");

      if (isOpenChange === undefined || isOpenChange) {
        var contentValue = this.contentDom ? this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
        var value = (isHorizontal ? width : height) || contentValue;
        this.setLevelDomTransform(open, false, placementName, value);
      }

      var handlerChildren;

      if (handler !== false) {
        var handlerDefalut = _createVNode("div", {
          "class": "drawer-handle",
          "onClick": function onClick() {}
        }, [_createVNode("i", {
          "class": "drawer-handle-icon"
        }, null)]);

        var handlerSlot = this.handler;
        var handlerSlotVnode = handlerSlot || handlerDefalut;
        var handleIconClick = handlerSlotVnode.props && handlerSlotVnode.props.onClick;
        handlerChildren = cloneElement(handlerSlotVnode, {
          onClick: function onClick(e) {
            handleIconClick && handleIconClick(e);

            _this6.onIconTouchEnd(e);
          },
          ref: function ref(c) {
            _this6.handlerdom = c;
          }
        });
      }

      var domContProps = _extends(_extends({}, restAttrs), {
        class: wrapperClassname,
        onTransitionend: this.onWrapperTransitionEnd,
        onKeydown: open && keyboard ? this.onKeyDown : noop,
        style: _extends(_extends({}, wrapStyle), style)
      });

      return _createVNode("div", _objectSpread(_objectSpread({
        "ref": function ref(c) {
          _this6.dom = c;
        }
      }, domContProps), {}, {
        "tabindex": -1
      }), [showMask && _createVNode("div", {
        "key": open,
        "class": "".concat(prefixCls, "-mask"),
        "onClick": maskClosable ? this.onMaskTouchEnd : noop,
        "style": maskStyle,
        "ref": function ref(c) {
          _this6.maskDom = c;
        }
      }, null), _createVNode("div", {
        "class": "".concat(prefixCls, "-content-wrapper"),
        "style": {
          transform: transform,
          msTransform: transform,
          width: isNumeric(width) ? "".concat(width, "px") : width,
          height: isNumeric(height) ? "".concat(height, "px") : height
        },
        "ref": function ref(c) {
          _this6.contentWrapper = c;
        }
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-content"),
        "ref": function ref(c) {
          _this6.contentDom = c;
        },
        "onTouchstart": open ? this.removeStartHandler : noop,
        "onTouchmove": open ? this.removeMoveHandler : noop
      }, [children]), handlerChildren])]);
    },
    getOpen: function getOpen() {
      return this.open !== undefined ? this.open : this.sOpen;
    },
    getTouchParentScroll: function getTouchParentScroll(root, currentTarget, differX, differY) {
      if (!currentTarget || currentTarget === document) {
        return false;
      } // root ??? drawer-content ????????? overflow, ????????? root ??? parent ??????????????????


      if (currentTarget === root.parentNode) {
        return true;
      }

      var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
      var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
      var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
      var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
      /**
       * <div style="height: 300px">
       *   <div style="height: 900px"></div>
       * </div>
       * ???????????? overflow: auto ??? scroll ??????currentTarget ??????????????? scrollTop ??? scrollLeft,
       * ????????? scrollTo ???????????????????????????????????????????????????????????? currnetTarget ???????????? overflow; ???????????????????????????
       */

      var t = currentTarget.scrollTop;
      var l = currentTarget.scrollLeft;

      if (currentTarget.scrollTo) {
        currentTarget.scrollTo(currentTarget.scrollLeft + 1, currentTarget.scrollTop + 1);
      }

      var currentT = currentTarget.scrollTop;
      var currentL = currentTarget.scrollLeft;

      if (currentTarget.scrollTo) {
        currentTarget.scrollTo(currentTarget.scrollLeft - 1, currentTarget.scrollTop - 1);
      }

      if (isY && (!scrollY || !(currentT - t) || scrollY && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!scrollX || !(currentL - l) || scrollX && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
        return this.getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
      }

      return false;
    },
    removeStartHandler: function removeStartHandler(e) {
      if (e.touches.length > 1) {
        return;
      }

      this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    },
    removeMoveHandler: function removeMoveHandler(e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - this.startPos.x;
      var differY = e.changedTouches[0].clientY - this.startPos.y;

      if (currentTarget === this.maskDom || currentTarget === this.handlerdom || currentTarget === this.contentDom && this.getTouchParentScroll(currentTarget, e.target, differX, differY)) {
        e.preventDefault();
      }
    },
    trnasitionEnd: function trnasitionEnd(e) {
      removeEventListener(e.target, transitionEnd, this.trnasitionEnd);
      e.target.style.transition = '';
    },
    defaultGetContainer: function defaultGetContainer() {
      if (windowIsUndefined) {
        return null;
      }

      var container = document.createElement('div');
      this.parent.appendChild(container);

      if (this.wrapperClassName) {
        container.className = this.wrapperClassName;
      }

      return container;
    }
  },
  render: function render() {
    var _this7 = this;

    var _this$$props3 = this.$props,
        getContainer = _this$$props3.getContainer,
        wrapperClassName = _this$$props3.wrapperClassName,
        handler = _this$$props3.handler,
        forceRender = _this$$props3.forceRender;
    var open = this.getOpen();
    var portal = null;
    currentDrawer[this.drawerId] = open ? this.container : open;
    var children = this.getChildToRender(this.sFirstEnter ? open : false);

    if (!getContainer) {
      return _createVNode("div", {
        "class": wrapperClassName,
        "ref": function ref(c) {
          _this7.container = c;
        }
      }, [children]);
    }

    if (!this.container || !open && !this.sFirstEnter) {
      return null;
    } // ????????? handler ????????????????????????


    var $forceRender = !!handler || forceRender;

    if ($forceRender || open || this.dom) {
      portal = _createVNode(Teleport, {
        "to": this.getSelfContainer()
      }, {
        default: function _default() {
          return [children];
        }
      });
    }

    return portal;
  }
});
export default Drawer;