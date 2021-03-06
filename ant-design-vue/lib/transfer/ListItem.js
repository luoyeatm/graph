"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vcLazyLoad = _interopRequireDefault(require("../vc-lazy-load"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function noop() {}

var _default2 = (0, _vue.defineComponent)({
  name: 'ListItem',
  inheritAttrs: false,
  props: {
    renderedText: _vueTypes.default.any,
    renderedEl: _vueTypes.default.any,
    item: _vueTypes.default.any,
    lazy: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
    checked: _vueTypes.default.looseBool,
    prefixCls: _vueTypes.default.string,
    disabled: _vueTypes.default.looseBool,
    onClick: _vueTypes.default.func
  },
  render: function render() {
    var _classNames,
        _this = this;

    var _this$$props = this.$props,
        renderedText = _this$$props.renderedText,
        renderedEl = _this$$props.renderedEl,
        item = _this$$props.item,
        lazy = _this$$props.lazy,
        checked = _this$$props.checked,
        disabled = _this$$props.disabled,
        prefixCls = _this$$props.prefixCls;
    var className = (0, _classNames2.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-content-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), _classNames));
    var title;

    if (typeof renderedText === 'string' || typeof renderedText === 'number') {
      title = String(renderedText);
    }

    var listItem = (0, _vue.createVNode)("li", {
      "class": className,
      "title": title,
      "onClick": disabled || item.disabled ? noop : function () {
        _this.$emit('click', item);
      }
    }, [(0, _vue.createVNode)(_checkbox.default, {
      "checked": checked,
      "disabled": disabled || item.disabled
    }, null), (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-content-item-text")
    }, [renderedEl])]);
    var children = null;

    if (lazy) {
      var lazyProps = _extends({
        height: 32,
        offset: 500,
        throttle: 0,
        debounce: false
      }, lazy);

      children = (0, _vue.createVNode)(_vcLazyLoad.default, lazyProps, {
        default: function _default() {
          return [listItem];
        }
      });
    } else {
      children = listItem;
    }

    return children;
  }
});

exports.default = _default2;