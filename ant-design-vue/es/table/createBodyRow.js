import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from '../_util/vue-types';
import { computed, defineComponent } from 'vue';
import { getSlot } from '../_util/props-util';
import omit from 'omit.js';
var BodyRowProps = {
  store: PropTypes.object,
  rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  prefixCls: PropTypes.string
};
export default function createBodyRow() {
  var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';
  var BodyRow = defineComponent({
    name: 'BodyRow',
    inheritAttrs: false,
    props: BodyRowProps,
    setup: function setup(props) {
      return {
        selected: computed(function () {
          var _a;

          return ((_a = props.store) === null || _a === void 0 ? void 0 : _a.selectedRowKeys.indexOf(props.rowKey)) >= 0;
        })
      };
    },
    render: function render() {
      var _className,
          _this = this;

      var rowProps = omit(_extends(_extends({}, this.$props), this.$attrs), ['prefixCls', 'rowKey', 'store', 'class']);
      var className = (_className = {}, _defineProperty(_className, "".concat(this.prefixCls, "-row-selected"), this.selected), _defineProperty(_className, this.$attrs.class, !!this.$attrs.class), _className);
      return _createVNode(Component, _objectSpread({
        "class": className
      }, rowProps), {
        default: function _default() {
          return [getSlot(_this)];
        }
      });
    }
  });
  return BodyRow;
}