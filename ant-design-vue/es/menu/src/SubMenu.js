import { resolveDirective as _resolveDirective, withDirectives as _withDirectives, vShow as _vShow, Fragment as _Fragment, createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import PropTypes from '../../_util/vue-types';
import { computed, defineComponent, getCurrentInstance, ref, watch, onBeforeUnmount } from 'vue';
import useProvideKeyPath, { useInjectKeyPath } from './hooks/useKeyPath';
import { useInjectMenu, useProvideFirstLevel, MenuContextProvider } from './hooks/useMenuContext';
import { getPropsSlot, isValidElement } from '../../_util/props-util';
import classNames from '../../_util/classNames';
import useDirectionStyle from './hooks/useDirectionStyle';
import PopupTrigger from './PopupTrigger';
import SubMenuList from './SubMenuList';
import InlineSubMenuList from './InlineSubMenuList';
import Transition, { getTransitionProps } from '../../_util/transition';
import { cloneElement } from '../../_util/vnode';
import Overflow from '../../vc-overflow';
var indexGuid = 0;
var subMenuProps = {
  icon: PropTypes.VNodeChild,
  title: PropTypes.VNodeChild,
  disabled: Boolean,
  level: Number,
  popupClassName: String,
  popupOffset: Array,
  internalPopupClose: Boolean,
  eventKey: String
};
export default defineComponent({
  name: 'ASubMenu',
  inheritAttrs: false,
  props: subMenuProps,
  slots: ['icon', 'title'],
  emits: ['titleClick', 'mouseenter', 'mouseleave'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;

    var _a, _b;

    useProvideFirstLevel(false);
    var instance = getCurrentInstance();
    var key = instance.vnode.key !== null ? instance.vnode.key : "sub_menu_".concat(++indexGuid, "_$$_not_set_key");
    var eventKey = (_a = props.eventKey) !== null && _a !== void 0 ? _a : instance.vnode.key !== null ? "sub_menu_".concat(++indexGuid, "_$$_").concat(instance.vnode.key) : key;

    var _useInjectKeyPath = useInjectKeyPath(),
        parentEventKeys = _useInjectKeyPath.parentEventKeys,
        parentInfo = _useInjectKeyPath.parentInfo,
        parentKeys = _useInjectKeyPath.parentKeys;

    var keysPath = computed(function () {
      return [].concat(_toConsumableArray(parentKeys.value), [key]);
    });
    var eventKeysPath = computed(function () {
      return [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]);
    });
    var childrenEventKeys = ref([]);
    var menuInfo = {
      eventKey: eventKey,
      key: key,
      parentEventKeys: parentEventKeys,
      childrenEventKeys: childrenEventKeys,
      parentKeys: parentKeys
    };
    (_b = parentInfo.childrenEventKeys) === null || _b === void 0 ? void 0 : _b.value.push(eventKey);
    onBeforeUnmount(function () {
      var _a;

      if (parentInfo.childrenEventKeys) {
        parentInfo.childrenEventKeys.value = (_a = parentInfo.childrenEventKeys) === null || _a === void 0 ? void 0 : _a.value.filter(function (k) {
          return k != eventKey;
        });
      }
    });
    useProvideKeyPath(eventKey, key, menuInfo);

    var _useInjectMenu = useInjectMenu(),
        prefixCls = _useInjectMenu.prefixCls,
        activeKeys = _useInjectMenu.activeKeys,
        contextDisabled = _useInjectMenu.disabled,
        changeActiveKeys = _useInjectMenu.changeActiveKeys,
        mode = _useInjectMenu.mode,
        inlineCollapsed = _useInjectMenu.inlineCollapsed,
        antdMenuTheme = _useInjectMenu.antdMenuTheme,
        openKeys = _useInjectMenu.openKeys,
        overflowDisabled = _useInjectMenu.overflowDisabled,
        onOpenChange = _useInjectMenu.onOpenChange,
        registerMenuInfo = _useInjectMenu.registerMenuInfo,
        unRegisterMenuInfo = _useInjectMenu.unRegisterMenuInfo,
        selectedSubMenuEventKeys = _useInjectMenu.selectedSubMenuEventKeys,
        motion = _useInjectMenu.motion,
        defaultMotions = _useInjectMenu.defaultMotions;

    registerMenuInfo(eventKey, menuInfo);
    onBeforeUnmount(function () {
      unRegisterMenuInfo(eventKey);
    });
    var subMenuPrefixCls = computed(function () {
      return "".concat(prefixCls.value, "-submenu");
    });
    var mergedDisabled = computed(function () {
      return contextDisabled.value || props.disabled;
    });
    var elementRef = ref();
    var popupRef = ref(); // // ================================ Icon ================================
    // const mergedItemIcon = itemIcon || contextItemIcon;
    // const mergedExpandIcon = expandIcon || contextExpandIcon;
    // ================================ Open ================================

    var originOpen = computed(function () {
      return openKeys.value.includes(key);
    });
    var open = computed(function () {
      return !overflowDisabled.value && originOpen.value;
    }); // =============================== Select ===============================

    var childrenSelected = computed(function () {
      return selectedSubMenuEventKeys.value.includes(eventKey);
    });
    var isActive = ref(false);
    watch(activeKeys, function () {
      isActive.value = !!activeKeys.value.find(function (val) {
        return val === key;
      });
    }, {
      immediate: true
    }); // =============================== Events ===============================
    // >>>> Title click

    var onInternalTitleClick = function onInternalTitleClick(e) {
      // Skip if disabled
      if (mergedDisabled.value) {
        return;
      }

      emit('titleClick', e, key); // Trigger open by click when mode is `inline`

      if (mode.value === 'inline') {
        onOpenChange(eventKey, !originOpen.value);
      }
    };

    var onMouseEnter = function onMouseEnter(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit('mouseenter', event);
      }
    };

    var onMouseLeave = function onMouseLeave(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit('mouseleave', event);
      }
    }; // ========================== DirectionStyle ==========================


    var directionStyle = useDirectionStyle(computed(function () {
      return eventKeysPath.value.length;
    })); // >>>>> Visible change

    var onPopupVisibleChange = function onPopupVisibleChange(newVisible) {
      if (mode.value !== 'inline') {
        onOpenChange(eventKey, newVisible);
      }
    };
    /**
     * Used for accessibility. Helper will focus element without key board.
     * We should manually trigger an active
     */


    var onInternalFocus = function onInternalFocus() {
      changeActiveKeys(keysPath.value);
    }; // =============================== Render ===============================


    var popupId = eventKey && "".concat(eventKey, "-popup");
    var popupClassName = computed(function () {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-").concat(antdMenuTheme.value), props.popupClassName);
    });

    var renderTitle = function renderTitle(title, icon) {
      if (!icon) {
        return inlineCollapsed.value && !parentEventKeys.value.length && title && typeof title === 'string' ? _createVNode("div", {
          "class": "".concat(prefixCls.value, "-inline-collapsed-noicon")
        }, [title.charAt(0)]) : _createVNode("span", {
          "class": "".concat(prefixCls.value, "-title-content")
        }, [title]);
      } // inline-collapsed.md demo ?????? span ???????????????,??? icon ?????????????????????????????? span
      // ref: https://github.com/ant-design/ant-design/pull/23456


      var titleIsSpan = isValidElement(title) && title.type === 'span';
      return _createVNode(_Fragment, null, [cloneElement(icon, {
        class: "".concat(prefixCls.value, "-item-icon")
      }, false), titleIsSpan ? title : _createVNode("span", {
        "class": "".concat(prefixCls.value, "-title-content")
      }, [title])]);
    }; // Cache mode if it change to `inline` which do not have popup motion


    var triggerModeRef = computed(function () {
      return mode.value !== 'inline' && eventKeysPath.value.length > 1 ? 'vertical' : mode.value;
    });
    var renderMode = computed(function () {
      return mode.value === 'horizontal' ? 'vertical' : mode.value;
    });
    var style = ref({});
    var className = ref('');
    var mergedMotion = computed(function () {
      var _a, _b;

      var m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[mode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      var res = typeof m === 'function' ? m(style, className) : m;
      return res ? getTransitionProps(res.name) : undefined;
    });
    var subMenuTriggerModeRef = computed(function () {
      return triggerModeRef.value === 'horizontal' ? 'vertical' : triggerModeRef.value;
    });
    return function () {
      var _classNames;

      var _a;

      var icon = getPropsSlot(slots, props, 'icon');
      var title = renderTitle(getPropsSlot(slots, props, 'title'), icon);
      var subMenuPrefixClsValue = subMenuPrefixCls.value;

      var titleNode = _createVNode("div", {
        "style": directionStyle.value,
        "class": "".concat(subMenuPrefixClsValue, "-title"),
        "tabindex": mergedDisabled.value ? null : -1,
        "ref": elementRef,
        "title": typeof title === 'string' ? title : null,
        "data-menu-id": key,
        "aria-expanded": open.value,
        "aria-haspopup": true,
        "aria-controls": popupId,
        "aria-disabled": mergedDisabled.value,
        "onClick": onInternalTitleClick,
        "onFocus": onInternalFocus
      }, [title, mode.value !== 'horizontal' && slots.expandIcon ? slots.expandIcon(_extends(_extends({}, props), {
        isOpen: open.value
      })) : _createVNode("i", {
        "class": "".concat(subMenuPrefixClsValue, "-arrow")
      }, null)]);

      if (!overflowDisabled.value && mode.value !== 'inline') {
        var triggerMode = triggerModeRef.value;

        var _titleNode = function () {
          return titleNode;
        }();

        titleNode = _createVNode(PopupTrigger, {
          "mode": triggerMode,
          "prefixCls": subMenuPrefixClsValue,
          "visible": !props.internalPopupClose && open.value,
          "popupClassName": popupClassName.value,
          "popupOffset": props.popupOffset,
          "disabled": mergedDisabled.value,
          "onVisibleChange": onPopupVisibleChange
        }, {
          default: function _default() {
            return [_titleNode];
          },
          popup: function popup(_ref2) {
            var visible = _ref2.visible;

            var _a;

            return _createVNode(MenuContextProvider, {
              "props": {
                mode: subMenuTriggerModeRef,
                isRootMenu: false
              }
            }, {
              default: function _default() {
                return [_createVNode(Transition, mergedMotion.value, {
                  default: function _default() {
                    return [_withDirectives(_createVNode(SubMenuList, {
                      "id": popupId,
                      "ref": popupRef
                    }, {
                      default: function _default() {
                        return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
                      }
                    }), [[_vShow, visible]])];
                  }
                })];
              }
            });
          }
        });
      }

      return _createVNode(MenuContextProvider, {
        "props": {
          mode: renderMode
        }
      }, {
        default: function _default() {
          return [_createVNode(Overflow.Item, _objectSpread(_objectSpread({
            "component": "li"
          }, attrs), {}, {
            "role": "none",
            "class": classNames(subMenuPrefixClsValue, "".concat(subMenuPrefixClsValue, "-").concat(mode.value), attrs.class, (_classNames = {}, _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-open"), open.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-active"), isActive.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-selected"), childrenSelected.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-disabled"), mergedDisabled.value), _classNames)),
            "onMouseenter": onMouseEnter,
            "onMouseleave": onMouseLeave
          }), {
            default: function _default() {
              return [titleNode, !overflowDisabled.value && _createVNode(InlineSubMenuList, {
                "id": popupId,
                "open": open.value,
                "keyPath": keysPath.value
              }, {
                default: function _default() {
                  return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
                }
              })];
            }
          })];
        }
      });
    };
  }
});