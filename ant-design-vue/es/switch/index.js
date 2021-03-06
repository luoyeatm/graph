import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { defineComponent, inject, onBeforeMount, ref, computed, onMounted, nextTick, watch } from 'vue';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import PropTypes from '../_util/vue-types';
import KeyCode from '../_util/KeyCode';
import Wave from '../_util/wave';
import { defaultConfigProvider } from '../config-provider';
import warning from '../_util/warning';
import { tuple, withInstall } from '../_util/type';
import { getPropsSlot } from '../_util/props-util';
import Omit from 'omit.js';
export var SwitchSizes = tuple('small', 'default', 'large');
var switchProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(SwitchSizes),
  disabled: PropTypes.looseBool,
  checkedChildren: PropTypes.any,
  unCheckedChildren: PropTypes.any,
  tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autofocus: PropTypes.looseBool,
  loading: PropTypes.looseBool,
  checked: PropTypes.looseBool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeydown: PropTypes.func,
  onMouseup: PropTypes.func,
  'onUpdate:checked': PropTypes.func
};
var Switch = defineComponent({
  name: 'ASwitch',
  __ANT_SWITCH: true,
  inheritAttrs: false,
  props: switchProps,
  emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        expose = _ref.expose,
        emit = _ref.emit;
    onBeforeMount(function () {
      warning(!('defaultChecked' in attrs), 'Switch', "'defaultChecked' is deprecated, please use 'v-model:checked'");
      warning(!('value' in attrs), 'Switch', '`value` is not validate prop, do you mean `checked`?');
    });
    var checked = ref(props.checked !== undefined ? !!props.checked : !!attrs.defaultChecked);
    watch(function () {
      return props.checked;
    }, function () {
      checked.value = !!props.checked;
    });
    var configProvider = inject('configProvider', defaultConfigProvider);
    var getPrefixCls = configProvider.getPrefixCls;
    var refSwitchNode = ref();

    var focus = function focus() {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.focus();
    };

    var blur = function blur() {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
    };

    expose({
      focus: focus,
      blur: blur
    });
    var prefixCls = computed(function () {
      return getPrefixCls('switch', props.prefixCls);
    });
    onMounted(function () {
      nextTick(function () {
        if (props.autofocus && !props.disabled) {
          refSwitchNode.value.focus();
        }
      });
    });

    var setChecked = function setChecked(check, e) {
      if (props.disabled) {
        return;
      }

      if (props.checked === undefined) {
        checked.value = check;
      }

      emit('update:checked', check);
      emit('change', check, e);
    };

    var handleClick = function handleClick(e) {
      focus();
      var newChecked = !checked.value;
      setChecked(newChecked, e);
      emit('click', newChecked, e);
    };

    var handleKeyDown = function handleKeyDown(e) {
      if (e.keyCode === KeyCode.LEFT) {
        setChecked(false, e);
      } else if (e.keyCode === KeyCode.RIGHT) {
        setChecked(true, e);
      }

      emit('keydown', e);
    };

    var handleMouseUp = function handleMouseUp(e) {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
      emit('mouseup', e);
    };

    return function () {
      var _ref2;

      return _createVNode(Wave, {
        "insertExtraNode": true
      }, {
        default: function _default() {
          return [_createVNode("button", _objectSpread(_objectSpread(_objectSpread({}, Omit(props, ['prefixCls', 'checkedChildren', 'unCheckedChildren', 'checked', 'autofocus', 'defaultChecked'])), attrs), {}, {
            "onKeydown": handleKeyDown,
            "onClick": handleClick,
            "onMouseup": handleMouseUp,
            "type": "button",
            "role": "switch",
            "aria-checked": checked.value,
            "disabled": props.disabled || props.loading,
            "class": (_ref2 = {}, _defineProperty(_ref2, attrs.class, attrs.class), _defineProperty(_ref2, prefixCls.value, true), _defineProperty(_ref2, "".concat(prefixCls.value, "-small"), props.size === 'small'), _defineProperty(_ref2, "".concat(prefixCls.value, "-loading"), props.loading), _defineProperty(_ref2, "".concat(prefixCls.value, "-checked"), checked.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-disabled"), props.disabled), _ref2),
            "ref": refSwitchNode
          }), [props.loading ? _createVNode(LoadingOutlined, {
            "class": "".concat(prefixCls.value, "-loading-icon")
          }, null) : null, _createVNode("span", {
            "class": "".concat(prefixCls.value, "-inner")
          }, [checked.value ? getPropsSlot(slots, props, 'checkedChildren') : getPropsSlot(slots, props, 'unCheckedChildren')])])];
        }
      });
    };
  }
});
export default withInstall(Switch);