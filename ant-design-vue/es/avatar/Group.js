import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { cloneElement } from '../_util/vnode';
import Avatar, { avatarProps } from './Avatar';
import Popover from '../popover';
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { flattenChildren, getPropsSlot } from '../_util/props-util';
import { tuple } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import useProvideSize from '../_util/hooks/useSize';
var groupProps = {
  prefixCls: PropTypes.string,
  maxCount: PropTypes.number,
  maxStyle: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  maxPopoverPlacement: PropTypes.oneOf(tuple('top', 'bottom')).def('top'),

  /*
   * Size of avatar, options: `large`, `small`, `default`
   * or a custom number size
   * */
  size: avatarProps.size
};
var Group = defineComponent({
  name: 'AAvatarGroup',
  inheritAttrs: false,
  props: groupProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = useConfigInject('avatar-group', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    useProvideSize(props);
    return function () {
      var _cls;

      var _props$maxPopoverPlac = props.maxPopoverPlacement,
          maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac,
          maxCount = props.maxCount,
          maxStyle = props.maxStyle;
      var cls = (_cls = {}, _defineProperty(_cls, prefixCls.value, true), _defineProperty(_cls, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_cls, "".concat(attrs.class), !!attrs.class), _cls);
      var children = getPropsSlot(slots, props);
      var childrenWithProps = flattenChildren(children).map(function (child, index) {
        return cloneElement(child, {
          key: "avatar-key-".concat(index)
        });
      });
      var numOfChildren = childrenWithProps.length;

      if (maxCount && maxCount < numOfChildren) {
        var childrenShow = childrenWithProps.slice(0, maxCount);
        var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
        childrenShow.push(_createVNode(Popover, {
          "key": "avatar-popover-key",
          "content": childrenHidden,
          "trigger": "hover",
          "placement": maxPopoverPlacement,
          "overlayClassName": "".concat(prefixCls.value, "-popover")
        }, {
          default: function _default() {
            return [_createVNode(Avatar, {
              "style": maxStyle
            }, {
              default: function _default() {
                return ["+".concat(numOfChildren - maxCount)];
              }
            })];
          }
        }));
        return _createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
          "class": cls,
          "style": attrs.style
        }), [childrenShow]);
      }

      return _createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": cls,
        "style": attrs.style
      }), [childrenWithProps]);
    };
  }
});
export default Group;