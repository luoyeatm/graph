"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _ = _interopRequireWildcard(require(".."));

require("../assets/index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var children = [];

var _loop = function _loop(i) {
  children.push((0, _vue.createVNode)(_.Option, {
    "key": i.toString(36) + i,
    "disabled": i === 10,
    "title": "\u4E2D\u6587".concat(i)
  }, {
    default: function _default() {
      return "\u4E2D\u6587".concat(i);
    }
  }));
};

for (var i = 10; i < 36; i += 1) {
  _loop(i);
}

var Test = {
  data: function data() {
    return {
      state: {
        useAnim: true,
        showArrow: false,
        loading: false,
        value: ['a10']
      }
    };
  },
  methods: {
    setState: function setState(state) {
      _extends(this.state, state);
    },
    onChange: function onChange(value, options) {
      console.log('onChange', value, options);
      this.setState({
        value: value
      });
    },
    onSelect: function onSelect() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log(args);
    },
    onDeselect: function onDeselect() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      console.log(args);
    },
    useAnim: function useAnim(e) {
      this.setState({
        useAnim: e.target.checked
      });
    },
    showArrow: function showArrow(e) {
      this.setState({
        showArrow: e.target.checked
      });
    },
    loading: function loading(e) {
      this.setState({
        loading: e.target.checked
      });
    }
  },
  render: function render() {
    var _this$state = this.state,
        useAnim = _this$state.useAnim,
        showArrow = _this$state.showArrow,
        loading = _this$state.loading,
        value = _this$state.value;
    return (0, _vue.createVNode)("div", {
      "style": "margin: 20px"
    }, [(0, _vue.createVNode)("h2", null, [(0, _vue.createTextVNode)("multiple select\uFF08scroll the menu\uFF09")]), (0, _vue.createVNode)("p", null, [(0, _vue.createVNode)("label", {
      "html-for": "useAnim"
    }, [(0, _vue.createTextVNode)("anim"), (0, _vue.createVNode)("input", {
      "id": "useAnim",
      "checked": useAnim,
      "type": "checkbox",
      "onChange": this.useAnim
    }, null)]), (0, _vue.createVNode)("p", null, null), (0, _vue.createVNode)("label", {
      "html-for": "showArrow"
    }, [(0, _vue.createTextVNode)("showArrow"), (0, _vue.createVNode)("input", {
      "id": "showArrow",
      "checked": showArrow,
      "type": "checkbox",
      "onChange": this.showArrow
    }, null)])]), (0, _vue.createVNode)("p", null, [(0, _vue.createVNode)("label", {
      "html-for": "loading"
    }, [(0, _vue.createTextVNode)("loading"), (0, _vue.createVNode)("input", {
      "id": "loading",
      "checked": loading,
      "type": "checkbox",
      "onChange": this.loading
    }, null)])]), (0, _vue.createVNode)("div", {
      "style": {
        width: '300px'
      }
    }, [(0, _vue.createVNode)(_.default, {
      "value": value,
      "animation": useAnim ? 'slide-up' : null,
      "choiceTransitionName": "rc-select-selection__choice-zoom",
      "style": {
        width: '500px'
      },
      "mode": "multiple",
      "loading": loading,
      "showArrow": showArrow,
      "allowClear": true,
      "optionFilterProp": "children",
      "optionLabelProp": "children",
      "onSelect": this.onSelect,
      "onDeselect": this.onDeselect,
      "placeholder": "please select",
      "onChange": this.onChange,
      "onFocus": function onFocus() {
        return console.log('focus');
      },
      "onBlur": function onBlur(v) {
        return console.log('blur', v);
      },
      "tokenSeparators": [' ', ',']
    }, {
      default: function _default() {
        return [children];
      }
    })])]);
  }
};
var _default2 = Test;
/* eslint-enable */

exports.default = _default2;