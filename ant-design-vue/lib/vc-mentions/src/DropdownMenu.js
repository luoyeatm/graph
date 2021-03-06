"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _menu = _interopRequireWildcard(require("../../menu"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _Option = require("./Option");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function noop() {}

var _default2 = {
  name: 'DropdownMenu',
  props: {
    prefixCls: _vueTypes.default.string,
    options: _vueTypes.default.arrayOf(_Option.OptionProps)
  },
  setup: function setup() {
    return {
      mentionsContext: (0, _vue.inject)('mentionsContext')
    };
  },
  render: function render() {
    var _this$mentionsContext = this.mentionsContext,
        notFoundContent = _this$mentionsContext.notFoundContent,
        activeIndex = _this$mentionsContext.activeIndex,
        setActiveIndex = _this$mentionsContext.setActiveIndex,
        selectOption = _this$mentionsContext.selectOption,
        _this$mentionsContext2 = _this$mentionsContext.onFocus,
        onFocus = _this$mentionsContext2 === void 0 ? noop : _this$mentionsContext2,
        _this$mentionsContext3 = _this$mentionsContext.onBlur,
        onBlur = _this$mentionsContext3 === void 0 ? noop : _this$mentionsContext3;
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        options = _this$$props.options;
    var activeOption = options[activeIndex] || {};
    return (0, _vue.createVNode)(_menu.default, {
      "prefixCls": "".concat(prefixCls, "-menu"),
      "activeKey": activeOption.value,
      "onSelect": function onSelect(_ref) {
        var key = _ref.key;
        var option = options.find(function (_ref2) {
          var value = _ref2.value;
          return value === key;
        });
        selectOption(option);
      },
      "onBlur": onBlur,
      "onFocus": onFocus
    }, {
      default: function _default() {
        return [[].concat(_toConsumableArray(options.map(function (option, index) {
          var value = option.value,
              disabled = option.disabled,
              children = option.children;
          return (0, _vue.createVNode)(_menu.Item, {
            "key": value,
            "disabled": disabled,
            "onMouseenter": function onMouseenter() {
              setActiveIndex(index);
            }
          }, {
            default: function _default() {
              return [children];
            }
          });
        })), [!options.length && (0, _vue.createVNode)(_menu.Item, {
          "key": "notFoundContent",
          "disabled": true
        }, {
          default: function _default() {
            return [notFoundContent];
          }
        })]).filter(Boolean)];
      }
    });
  }
};
exports.default = _default2;