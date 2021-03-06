"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../../../_util/vue-types"));

var _util = require("../../util");

var _BaseSelector = _interopRequireWildcard(require("../../Base/BaseSelector"));

var _SearchInput = _interopRequireDefault(require("../../SearchInput"));

var _Selection = _interopRequireDefault(require("./Selection"));

var _propsUtil = require("../../../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../../../_util/BaseMixin"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TREE_SELECT_EMPTY_VALUE_KEY = 'RC_TREE_SELECT_EMPTY_VALUE_KEY';
var Selector = (0, _BaseSelector.default)('multiple'); // export const multipleSelectorContextTypes = {
//   onMultipleSelectorRemove: PropTypes.func.isRequired,
// }

var MultipleSelector = {
  name: 'MultipleSelector',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: _extends(_extends(_extends({}, (0, _BaseSelector.selectorPropTypes)()), _SearchInput.default.props), {
    selectorValueList: _vueTypes.default.array,
    disabled: _vueTypes.default.looseBool,
    labelInValue: _vueTypes.default.looseBool,
    maxTagCount: _vueTypes.default.number,
    maxTagPlaceholder: _vueTypes.default.any
  }),
  setup: function setup() {
    return {
      vcTreeSelect: (0, _vue.inject)('vcTreeSelect', {})
    };
  },
  created: function created() {
    this.inputRef = (0, _util.createRef)();
  },
  methods: {
    onPlaceholderClick: function onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    focus: function focus() {
      this.inputRef.current.focus();
    },
    blur: function blur() {
      this.inputRef.current.blur();
    },
    _renderPlaceholder: function _renderPlaceholder() {
      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          placeholder = _this$$props.placeholder,
          searchPlaceholder = _this$$props.searchPlaceholder,
          searchValue = _this$$props.searchValue,
          selectorValueList = _this$$props.selectorValueList;
      var currentPlaceholder = placeholder || searchPlaceholder;
      if (!currentPlaceholder) return null;
      var hidden = searchValue || selectorValueList.length; // [Legacy] Not remove the placeholder

      return (0, _vue.createVNode)("span", {
        "style": {
          display: hidden ? 'none' : 'block'
        },
        "onClick": this.onPlaceholderClick,
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [currentPlaceholder]);
    },
    onChoiceAnimationLeave: function onChoiceAnimationLeave() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.__emit.apply(this, ['choiceAnimationLeave'].concat(args));
    },
    renderSelection: function renderSelection() {
      var _this = this;

      var _this$$props2 = this.$props,
          selectorValueList = _this$$props2.selectorValueList,
          labelInValue = _this$$props2.labelInValue,
          maxTagCount = _this$$props2.maxTagCount;
      var children = (0, _propsUtil.getSlot)(this);
      var onMultipleSelectorRemove = this.vcTreeSelect.onMultipleSelectorRemove; // Check if `maxTagCount` is set

      var myValueList = selectorValueList;

      if (maxTagCount >= 0) {
        myValueList = selectorValueList.slice(0, maxTagCount);
      } // Selector node list


      var selectedValueNodes = myValueList.map(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        return (0, _vue.createVNode)(_Selection.default, _objectSpread(_objectSpread({}, _extends(_extends({}, _this.$props), {
          label: label,
          value: value,
          onRemove: onMultipleSelectorRemove
        })), {}, {
          "key": value || TREE_SELECT_EMPTY_VALUE_KEY
        }), {
          default: function _default() {
            return [children];
          }
        });
      }); // Rest node count

      if (maxTagCount >= 0 && maxTagCount < selectorValueList.length) {
        var content = "+ ".concat(selectorValueList.length - maxTagCount, " ...");
        var maxTagPlaceholder = (0, _propsUtil.getComponent)(this, 'maxTagPlaceholder', {}, false);

        if (typeof maxTagPlaceholder === 'string') {
          content = maxTagPlaceholder;
        } else if (typeof maxTagPlaceholder === 'function') {
          var restValueList = selectorValueList.slice(maxTagCount);
          content = maxTagPlaceholder(labelInValue ? restValueList : restValueList.map(function (_ref2) {
            var value = _ref2.value;
            return value;
          }));
        }

        var restNodeSelect = (0, _vue.createVNode)(_Selection.default, _objectSpread(_objectSpread({}, _extends(_extends({}, this.$props), {
          label: content,
          value: null
        })), {}, {
          "key": "rc-tree-select-internal-max-tag-counter"
        }), {
          default: function _default() {
            return [children];
          }
        });
        selectedValueNodes.push(restNodeSelect);
      }

      selectedValueNodes.push((0, _vue.createVNode)(_SearchInput.default, _objectSpread(_objectSpread(_objectSpread({
        "key": "SearchInput"
      }, this.$props), this.$attrs), {}, {
        "ref": this.inputRef
      }), {
        default: function _default() {
          return [children];
        }
      }));
      return selectedValueNodes;
    }
  },
  render: function render() {
    var _this2 = this;

    return (0, _vue.createVNode)(Selector, _extends(_extends(_extends({}, this.$props), this.$attrs), {
      tabindex: -1,
      showArrow: false,
      renderSelection: this.renderSelection,
      renderPlaceholder: this._renderPlaceholder
    }), {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this2)];
      }
    });
  }
};
var _default2 = MultipleSelector;
exports.default = _default2;