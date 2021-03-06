import { createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, inject, provide } from 'vue';
import PropTypes from '../_util/vue-types';
import contains from '../vc-util/Dom/contains';
import { hasProp, getComponent as _getComponent, getEvents, filterEmpty, getSlot, findDOMNode } from '../_util/props-util';
import { requestAnimationTimeout, cancelAnimationTimeout } from '../_util/requestAnimationTimeout';
import addEventListener from '../vc-util/Dom/addEventListener';
import warning from '../_util/warning';
import Popup from './Popup';
import { getAlignFromPlacement, getAlignPopupClassName, noop } from './utils';
import BaseMixin from '../_util/BaseMixin';
import Portal from '../_util/Portal';
import classNames from '../_util/classNames';
import { cloneElement } from '../_util/vnode';
import supportsPassive from '../_util/supportsPassive';

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMousedown', 'onTouchstart', 'onMouseenter', 'onMouseleave', 'onFocus', 'onBlur', 'onContextmenu'];
export default defineComponent({
  name: 'Trigger',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    action: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).def([]),
    showAction: PropTypes.any.def([]),
    hideAction: PropTypes.any.def([]),
    getPopupClassNameFromAlign: PropTypes.any.def(returnEmptyString),
    onPopupVisibleChange: PropTypes.func.def(noop),
    afterPopupVisibleChange: PropTypes.func.def(noop),
    popup: PropTypes.any,
    popupStyle: PropTypes.object.def(function () {
      return {};
    }),
    prefixCls: PropTypes.string.def('rc-trigger-popup'),
    popupClassName: PropTypes.string.def(''),
    popupPlacement: PropTypes.string,
    builtinPlacements: PropTypes.object,
    popupTransitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    popupAnimation: PropTypes.any,
    mouseEnterDelay: PropTypes.number.def(0),
    mouseLeaveDelay: PropTypes.number.def(0.1),
    zIndex: PropTypes.number,
    focusDelay: PropTypes.number.def(0),
    blurDelay: PropTypes.number.def(0.15),
    getPopupContainer: PropTypes.func,
    getDocument: PropTypes.func.def(returnDocument),
    forceRender: PropTypes.looseBool,
    destroyPopupOnHide: PropTypes.looseBool.def(false),
    mask: PropTypes.looseBool.def(false),
    maskClosable: PropTypes.looseBool.def(true),
    // onPopupAlign: PropTypes.func.def(noop),
    popupAlign: PropTypes.object.def(function () {
      return {};
    }),
    popupVisible: PropTypes.looseBool,
    defaultPopupVisible: PropTypes.looseBool.def(false),
    maskTransitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    maskAnimation: PropTypes.string,
    stretch: PropTypes.string,
    alignPoint: PropTypes.looseBool // Maybe we can support user pass position in the future

  },
  setup: function setup() {
    return {
      vcTriggerContext: inject('vcTriggerContext', {}),
      savePopupRef: inject('savePopupRef', noop),
      dialogContext: inject('dialogContext', null)
    };
  },
  data: function data() {
    var _this = this;

    var props = this.$props;
    var popupVisible;

    if (hasProp(this, 'popupVisible')) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    ALL_HANDLERS.forEach(function (h) {
      _this["fire".concat(h)] = function (e) {
        _this.fireEvents(h, e);
      };
    });
    this._component = null;
    this.focusTime = null;
    this.clickOutsideHandler = null;
    this.contextmenuOutsideHandler1 = null;
    this.contextmenuOutsideHandler2 = null;
    this.touchOutsideHandler = null;
    return {
      prevPopupVisible: popupVisible,
      sPopupVisible: popupVisible,
      point: null
    };
  },
  watch: {
    popupVisible: function popupVisible(val) {
      if (val !== undefined) {
        this.prevPopupVisible = this.sPopupVisible;
        this.sPopupVisible = val;
      }
    }
  },
  created: function created() {
    provide('vcTriggerContext', this);
  },
  deactivated: function deactivated() {
    this.setPopupVisible(false);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.updatedCal();
    });
  },
  updated: function updated() {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.updatedCal();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  },
  methods: {
    updatedCal: function updatedCal() {
      var props = this.$props;
      var state = this.$data; // We must listen to `mousedown` or `touchstart`, edge case:
      // https://github.com/ant-design/ant-design/issues/5804
      // https://github.com/react-component/calendar/issues/250
      // https://github.com/react-component/trigger/issues/50

      if (state.sPopupVisible) {
        var currentDocument;

        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
          currentDocument = props.getDocument();
          this.clickOutsideHandler = addEventListener(currentDocument, 'mousedown', this.onDocumentClick);
        } // always hide on mobile


        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props.getDocument();
          this.touchOutsideHandler = addEventListener(currentDocument, 'touchstart', this.onDocumentClick, supportsPassive ? {
            passive: false
          } : false);
        } // close popup when trigger type contains 'onContextmenu' and document is scrolling.


        if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
          currentDocument = currentDocument || props.getDocument();
          this.contextmenuOutsideHandler1 = addEventListener(currentDocument, 'scroll', this.onContextmenuClose);
        } // close popup when trigger type contains 'onContextmenu' and window is blur.


        if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
          this.contextmenuOutsideHandler2 = addEventListener(window, 'blur', this.onContextmenuClose);
        }
      } else {
        this.clearOutsideHandler();
      }
    },
    onMouseenter: function onMouseenter(e) {
      var mouseEnterDelay = this.$props.mouseEnterDelay;
      this.fireEvents('onMouseenter', e);
      this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
    },
    onMouseMove: function onMouseMove(e) {
      this.fireEvents('onMousemove', e);
      this.setPoint(e);
    },
    onMouseleave: function onMouseleave(e) {
      this.fireEvents('onMouseleave', e);
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter: function onPopupMouseenter() {
      this.clearDelayTimer();
    },
    onPopupMouseleave: function onPopupMouseleave(e) {
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && contains(this._component.getPopupDomNode(), e.relatedTarget)) {
        return;
      }

      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onFocus: function onFocus(e) {
      this.fireEvents('onFocus', e); // incase focusin and focusout

      this.clearDelayTimer();

      if (this.isFocusToShow()) {
        this.focusTime = Date.now();
        this.delaySetPopupVisible(true, this.$props.focusDelay);
      }
    },
    onMousedown: function onMousedown(e) {
      this.fireEvents('onMousedown', e);
      this.preClickTime = Date.now();
    },
    onTouchstart: function onTouchstart(e) {
      this.fireEvents('onTouchstart', e);
      this.preTouchTime = Date.now();
    },
    onBlur: function onBlur(e) {
      if (!contains(e.target, e.relatedTarget || document.activeElement)) {
        this.fireEvents('onBlur', e);
        this.clearDelayTimer();

        if (this.isBlurToHide()) {
          this.delaySetPopupVisible(false, this.$props.blurDelay);
        }
      }
    },
    onContextmenu: function onContextmenu(e) {
      e.preventDefault();
      this.fireEvents('onContextmenu', e);
      this.setPopupVisible(true, e);
    },
    onContextmenuClose: function onContextmenuClose() {
      if (this.isContextmenuToShow()) {
        this.close();
      }
    },
    onClick: function onClick(event) {
      this.fireEvents('onClick', event); // focus will trigger click

      if (this.focusTime) {
        var preTime;

        if (this.preClickTime && this.preTouchTime) {
          preTime = Math.min(this.preClickTime, this.preTouchTime);
        } else if (this.preClickTime) {
          preTime = this.preClickTime;
        } else if (this.preTouchTime) {
          preTime = this.preTouchTime;
        }

        if (Math.abs(preTime - this.focusTime) < 20) {
          return;
        }

        this.focusTime = 0;
      }

      this.preClickTime = 0;
      this.preTouchTime = 0; // Only prevent default when all the action is click.
      // https://github.com/ant-design/ant-design/issues/17043
      // https://github.com/ant-design/ant-design/issues/17291

      if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }

      if (event && event.domEvent) {
        event.domEvent.preventDefault();
      }

      var nextVisible = !this.$data.sPopupVisible;

      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.setPopupVisible(!this.$data.sPopupVisible, event);
      }
    },
    onPopupMouseDown: function onPopupMouseDown() {
      var _this4 = this;

      var _this$vcTriggerContex = this.vcTriggerContext,
          vcTriggerContext = _this$vcTriggerContex === void 0 ? {} : _this$vcTriggerContex;
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(function () {
        _this4.hasPopupMouseDown = false;
      }, 0);

      if (vcTriggerContext.onPopupMouseDown) {
        vcTriggerContext.onPopupMouseDown.apply(vcTriggerContext, arguments);
      }
    },
    onDocumentClick: function onDocumentClick(event) {
      if (this.$props.mask && !this.$props.maskClosable) {
        return;
      }

      var target = event.target;
      var root = findDOMNode(this);

      if (!contains(root, target) && !this.hasPopupMouseDown) {
        this.close();
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      if (this._component && this._component.getPopupDomNode) {
        return this._component.getPopupDomNode();
      }

      return null;
    },
    getRootDomNode: function getRootDomNode() {
      return findDOMNode(this);
    },
    handleGetPopupClassFromAlign: function handleGetPopupClassFromAlign(align) {
      var className = [];
      var props = this.$props;
      var popupPlacement = props.popupPlacement,
          builtinPlacements = props.builtinPlacements,
          prefixCls = props.prefixCls,
          alignPoint = props.alignPoint,
          getPopupClassNameFromAlign = props.getPopupClassNameFromAlign;

      if (popupPlacement && builtinPlacements) {
        className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
      }

      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }

      return className.join(' ');
    },
    getPopupAlign: function getPopupAlign() {
      var props = this.$props;
      var popupPlacement = props.popupPlacement,
          popupAlign = props.popupAlign,
          builtinPlacements = props.builtinPlacements;

      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }

      return popupAlign;
    },
    savePopup: function savePopup(node) {
      this._component = node;
      this.savePopupRef(node);
    },
    getComponent: function getComponent() {
      var self = this;
      var mouseProps = {};

      if (this.isMouseEnterToShow()) {
        mouseProps.onMouseenter = self.onPopupMouseenter;
      }

      if (this.isMouseLeaveToHide()) {
        mouseProps.onMouseleave = self.onPopupMouseleave;
      }

      mouseProps.onMousedown = this.onPopupMouseDown;
      mouseProps[supportsPassive ? 'onTouchstartPassive' : 'onTouchstart'] = this.onPopupMouseDown;
      var handleGetPopupClassFromAlign = self.handleGetPopupClassFromAlign,
          getRootDomNode = self.getRootDomNode,
          getContainer = self.getContainer,
          $attrs = self.$attrs;
      var _self$$props = self.$props,
          prefixCls = _self$$props.prefixCls,
          destroyPopupOnHide = _self$$props.destroyPopupOnHide,
          popupClassName = _self$$props.popupClassName,
          action = _self$$props.action,
          popupAnimation = _self$$props.popupAnimation,
          popupTransitionName = _self$$props.popupTransitionName,
          popupStyle = _self$$props.popupStyle,
          mask = _self$$props.mask,
          maskAnimation = _self$$props.maskAnimation,
          maskTransitionName = _self$$props.maskTransitionName,
          zIndex = _self$$props.zIndex,
          stretch = _self$$props.stretch,
          alignPoint = _self$$props.alignPoint;
      var _this$$data = this.$data,
          sPopupVisible = _this$$data.sPopupVisible,
          point = _this$$data.point;
      var align = this.getPopupAlign();

      var popupProps = _extends(_extends({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: sPopupVisible,
        point: alignPoint ? point : null,
        action: action,
        align: align,
        animation: popupAnimation,
        getClassNameFromAlign: handleGetPopupClassFromAlign,
        stretch: stretch,
        getRootDomNode: getRootDomNode,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        getContainer: getContainer,
        popupClassName: popupClassName,
        popupStyle: popupStyle,
        onAlign: $attrs.onPopupAlign || noop
      }, mouseProps), {
        ref: this.savePopup
      });

      return _createVNode(Popup, popupProps, {
        default: function _default() {
          return [_getComponent(self, 'popup')];
        }
      });
    },
    getContainer: function getContainer() {
      var props = this.$props,
          dialogContext = this.dialogContext;
      var popupContainer = document.createElement('div'); // Make sure default popup container will never cause scrollbar appearing
      // https://github.com/react-component/trigger/issues/41

      popupContainer.style.position = 'absolute';
      popupContainer.style.top = '0';
      popupContainer.style.left = '0';
      popupContainer.style.width = '100%';
      var mountNode = props.getPopupContainer ? props.getPopupContainer(findDOMNode(this), dialogContext) : props.getDocument().body;
      mountNode.appendChild(popupContainer);
      this.popupContainer = popupContainer;
      return popupContainer;
    },
    setPopupVisible: function setPopupVisible(sPopupVisible, event) {
      var alignPoint = this.alignPoint,
          prevPopupVisible = this.sPopupVisible,
          onPopupVisibleChange = this.onPopupVisibleChange;
      this.clearDelayTimer();

      if (prevPopupVisible !== sPopupVisible) {
        if (!hasProp(this, 'popupVisible')) {
          this.setState({
            sPopupVisible: sPopupVisible,
            prevPopupVisible: prevPopupVisible
          });
        }

        onPopupVisibleChange && onPopupVisibleChange(sPopupVisible);
      } // Always record the point position since mouseEnterDelay will delay the show


      if (alignPoint && event) {
        this.setPoint(event);
      }
    },
    setPoint: function setPoint(point) {
      var alignPoint = this.$props.alignPoint;
      if (!alignPoint || !point) return;
      this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    },
    handlePortalUpdate: function handlePortalUpdate() {
      if (this.prevPopupVisible !== this.sPopupVisible) {
        this.afterPopupVisibleChange(this.sPopupVisible);
      }
    },
    delaySetPopupVisible: function delaySetPopupVisible(visible, delayS, event) {
      var _this5 = this;

      var delay = delayS * 1000;
      this.clearDelayTimer();

      if (delay) {
        var point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = requestAnimationTimeout(function () {
          _this5.setPopupVisible(visible, point);

          _this5.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible, event);
      }
    },
    clearDelayTimer: function clearDelayTimer() {
      if (this.delayTimer) {
        cancelAnimationTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    },
    clearOutsideHandler: function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }

      if (this.contextmenuOutsideHandler1) {
        this.contextmenuOutsideHandler1.remove();
        this.contextmenuOutsideHandler1 = null;
      }

      if (this.contextmenuOutsideHandler2) {
        this.contextmenuOutsideHandler2.remove();
        this.contextmenuOutsideHandler2 = null;
      }

      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    },
    createTwoChains: function createTwoChains(event) {
      var fn = function fn() {};

      var events = getEvents(this);

      if (this.childOriginEvents[event] && events[event]) {
        return this["fire".concat(event)];
      }

      fn = this.childOriginEvents[event] || events[event] || fn;
      return fn;
    },
    isClickToShow: function isClickToShow() {
      var _this$$props = this.$props,
          action = _this$$props.action,
          showAction = _this$$props.showAction;
      return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
    },
    isContextmenuToShow: function isContextmenuToShow() {
      var _this$$props2 = this.$props,
          action = _this$$props2.action,
          showAction = _this$$props2.showAction;
      return action.indexOf('contextmenu') !== -1 || showAction.indexOf('contextmenu') !== -1;
    },
    isClickToHide: function isClickToHide() {
      var _this$$props3 = this.$props,
          action = _this$$props3.action,
          hideAction = _this$$props3.hideAction;
      return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
    },
    isMouseEnterToShow: function isMouseEnterToShow() {
      var _this$$props4 = this.$props,
          action = _this$$props4.action,
          showAction = _this$$props4.showAction;
      return action.indexOf('hover') !== -1 || showAction.indexOf('mouseenter') !== -1;
    },
    isMouseLeaveToHide: function isMouseLeaveToHide() {
      var _this$$props5 = this.$props,
          action = _this$$props5.action,
          hideAction = _this$$props5.hideAction;
      return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseleave') !== -1;
    },
    isFocusToShow: function isFocusToShow() {
      var _this$$props6 = this.$props,
          action = _this$$props6.action,
          showAction = _this$$props6.showAction;
      return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
    },
    isBlurToHide: function isBlurToHide() {
      var _this$$props7 = this.$props,
          action = _this$$props7.action,
          hideAction = _this$$props7.hideAction;
      return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
    },
    forcePopupAlign: function forcePopupAlign() {
      if (this.$data.sPopupVisible && this._component && this._component.alignInstance) {
        this._component.alignInstance.forceAlign();
      }
    },
    fireEvents: function fireEvents(type, e) {
      if (this.childOriginEvents[type]) {
        this.childOriginEvents[type](e);
      }

      var event = this.$props[type] || this.$attrs[type];

      if (event) {
        event(e);
      }
    },
    close: function close() {
      this.setPopupVisible(false);
    }
  },
  render: function render() {
    var _this6 = this;

    var sPopupVisible = this.sPopupVisible,
        $attrs = this.$attrs;
    var children = filterEmpty(getSlot(this));
    var _this$$props8 = this.$props,
        forceRender = _this$$props8.forceRender,
        alignPoint = _this$$props8.alignPoint;

    if (children.length > 1) {
      warning(false, 'Trigger children just support only one default', true);
    }

    var child = children[0];
    this.childOriginEvents = getEvents(child);
    var newChildProps = {
      key: 'trigger'
    };

    if (this.isContextmenuToShow()) {
      newChildProps.onContextmenu = this.onContextmenu;
    } else {
      newChildProps.onContextmenu = this.createTwoChains('onContextmenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMousedown = this.onMousedown;
      newChildProps[supportsPassive ? 'onTouchstartPassive' : 'onTouchstart'] = this.onTouchstart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMousedown = this.createTwoChains('onMousedown');
      newChildProps[supportsPassive ? 'onTouchstartPassive' : 'onTouchstart'] = this.createTwoChains('onTouchstart');
    }

    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseenter = this.onMouseenter;

      if (alignPoint) {
        newChildProps.onMousemove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseenter = this.createTwoChains('onMouseenter');
    }

    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseleave = this.onMouseleave;
    } else {
      newChildProps.onMouseleave = this.createTwoChains('onMouseleave');
    }

    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');

      newChildProps.onBlur = function (e) {
        if (e && (!e.relatedTarget || !contains(e.target, e.relatedTarget))) {
          _this6.createTwoChains('onBlur')(e);
        }
      };
    }

    var childrenClassName = classNames(child && child.props && child.props.class, $attrs.class);

    if (childrenClassName) {
      newChildProps.class = childrenClassName;
    }

    var trigger = cloneElement(child, newChildProps);
    var portal; // prevent unmounting after it's rendered

    if (sPopupVisible || this._component || forceRender) {
      portal = _createVNode(Portal, {
        "key": "portal",
        "children": this.getComponent(),
        "getContainer": this.getContainer,
        "didUpdate": this.handlePortalUpdate
      }, null);
    }

    return [portal, trigger];
  }
});