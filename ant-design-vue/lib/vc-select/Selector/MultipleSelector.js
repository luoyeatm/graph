"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _TransBtn = _interopRequireDefault(require("../TransBtn"));

var _Input = _interopRequireDefault(require("./Input"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _pickAttrs = _interopRequireDefault(require("../../_util/pickAttrs"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _transition = require("../../_util/transition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var REST_TAG_KEY = '__RC_SELECT_MAX_REST_COUNT__';
var props = {
  id: _vueTypes.default.string,
  prefixCls: _vueTypes.default.string,
  values: _vueTypes.default.array,
  open: _vueTypes.default.looseBool,
  searchValue: _vueTypes.default.string,
  inputRef: _vueTypes.default.any,
  placeholder: _vueTypes.default.any,
  disabled: _vueTypes.default.looseBool,
  mode: _vueTypes.default.string,
  showSearch: _vueTypes.default.looseBool,
  autofocus: _vueTypes.default.looseBool,
  autocomplete: _vueTypes.default.string,
  accessibilityIndex: _vueTypes.default.number,
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  removeIcon: _vueTypes.default.VNodeChild,
  choiceTransitionName: _vueTypes.default.string,
  maxTagCount: _vueTypes.default.number,
  maxTagTextLength: _vueTypes.default.number,
  maxTagPlaceholder: _vueTypes.default.any.def(function () {
    return function (omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    };
  }),
  tagRender: _vueTypes.default.func,
  onSelect: _vueTypes.default.func,
  onInputChange: _vueTypes.default.func,
  onInputPaste: _vueTypes.default.func,
  onInputKeyDown: _vueTypes.default.func,
  onInputMouseDown: _vueTypes.default.func,
  onInputCompositionStart: _vueTypes.default.func,
  onInputCompositionEnd: _vueTypes.default.func
};
var SelectSelector = (0, _vue.defineComponent)({
  name: 'MultipleSelectSelector',
  setup: function setup(props) {
    var motionAppear = false; // not need use ref, because not need trigger watchEffect

    var measureRef = (0, _vue.ref)();
    var inputWidth = (0, _vue.ref)(0); // ===================== Motion ======================

    (0, _vue.onMounted)(function () {
      motionAppear = true;
    }); // ===================== Search ======================

    var inputValue = (0, _vue.computed)(function () {
      return props.open || props.mode === 'tags' ? props.searchValue : '';
    });
    var inputEditable = (0, _vue.computed)(function () {
      return props.mode === 'tags' || props.open && props.showSearch;
    }); // We measure width and set to the input immediately

    (0, _vue.onMounted)(function () {
      (0, _vue.watch)(inputValue, function () {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: 'post'
      });
    });
    var selectionNode = (0, _vue.ref)();
    (0, _vue.watchEffect)(function () {
      var values = props.values,
          prefixCls = props.prefixCls,
          removeIcon = props.removeIcon,
          choiceTransitionName = props.choiceTransitionName,
          maxTagCount = props.maxTagCount,
          maxTagTextLength = props.maxTagTextLength,
          _props$maxTagPlacehol = props.maxTagPlaceholder,
          maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
        return "+ ".concat(omittedValues.length, " ...");
      } : _props$maxTagPlacehol,
          tagRender = props.tagRender,
          onSelect = props.onSelect; // ==================== Selection ====================

      var displayValues = values; // Cut by `maxTagCount`

      var restCount;

      if (typeof maxTagCount === 'number') {
        restCount = values.length - maxTagCount;
        displayValues = values.slice(0, maxTagCount);
      } // Update by `maxTagTextLength`


      if (typeof maxTagTextLength === 'number') {
        displayValues = displayValues.map(function (_a) {
          var label = _a.label,
              rest = __rest(_a, ["label"]);

          var displayLabel = label;

          if (typeof label === 'string' || typeof label === 'number') {
            var strLabel = String(displayLabel);

            if (strLabel.length > maxTagTextLength) {
              displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
            }
          }

          return _extends(_extends({}, rest), {
            label: displayLabel
          });
        });
      } // Fill rest


      if (restCount > 0) {
        displayValues.push({
          key: REST_TAG_KEY,
          label: typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(values.slice(maxTagCount)) : maxTagPlaceholder
        });
      }

      var transitionProps = (0, _transition.getTransitionGroupProps)(choiceTransitionName, {
        appear: motionAppear
      });
      selectionNode.value = (0, _vue.createVNode)(_transition.TransitionGroup, transitionProps, {
        default: function _default() {
          return _toConsumableArray(displayValues.map(function (_ref) {
            var key = _ref.key,
                label = _ref.label,
                value = _ref.value,
                itemDisabled = _ref.disabled,
                className = _ref.class,
                style = _ref.style;
            var mergedKey = key || value;
            var closable = key !== REST_TAG_KEY && !itemDisabled;

            var onMousedown = function onMousedown(event) {
              event.preventDefault();
              event.stopPropagation();
            };

            var onClose = function onClose(event) {
              if (event) event.stopPropagation();
              onSelect(value, {
                selected: false
              });
            };

            return typeof tagRender === 'function' ? (0, _vue.createVNode)("span", {
              "key": mergedKey,
              "onMousedown": onMousedown,
              "class": (0, _classNames2.default)(className),
              "style": style
            }, [tagRender({
              label: label,
              value: value,
              disabled: itemDisabled,
              closable: closable,
              onClose: onClose
            })]) : (0, _vue.createVNode)("span", {
              "key": mergedKey,
              "class": (0, _classNames2.default)(className, "".concat(prefixCls, "-selection-item"), _defineProperty({}, "".concat(prefixCls, "-selection-item-disabled"), itemDisabled)),
              "style": style
            }, [(0, _vue.createVNode)("span", {
              "class": "".concat(prefixCls, "-selection-item-content")
            }, [label]), closable && (0, _vue.createVNode)(_TransBtn.default, {
              "class": "".concat(prefixCls, "-selection-item-remove"),
              "onMousedown": onMousedown,
              "onClick": onClose,
              "customizeIcon": removeIcon
            }, {
              default: function _default() {
                return [(0, _vue.createTextVNode)("\xD7")];
              }
            })]);
          }));
        }
      });
    });
    return function () {
      var id = props.id,
          prefixCls = props.prefixCls,
          values = props.values,
          open = props.open,
          inputRef = props.inputRef,
          placeholder = props.placeholder,
          disabled = props.disabled,
          autofocus = props.autofocus,
          autocomplete = props.autocomplete,
          accessibilityIndex = props.accessibilityIndex,
          tabindex = props.tabindex,
          onInputChange = props.onInputChange,
          onInputPaste = props.onInputPaste,
          onInputKeyDown = props.onInputKeyDown,
          onInputMouseDown = props.onInputMouseDown,
          onInputCompositionStart = props.onInputCompositionStart,
          onInputCompositionEnd = props.onInputCompositionEnd;
      return (0, _vue.createVNode)(_vue.Fragment, null, [selectionNode.value, (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-selection-search"),
        "style": {
          width: inputWidth.value + 'px'
        }
      }, [(0, _vue.createVNode)(_Input.default, {
        "inputRef": inputRef,
        "open": open,
        "prefixCls": prefixCls,
        "id": id,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "accessibilityIndex": accessibilityIndex,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": onInputChange,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": (0, _pickAttrs.default)(props, true)
      }, null), (0, _vue.createVNode)("span", {
        "ref": measureRef,
        "class": "".concat(prefixCls, "-selection-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, (0, _vue.createTextVNode)("\xA0")])]), !values.length && !inputValue.value && (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [placeholder])]);
    };
  }
});
SelectSelector.inheritAttrs = false;
SelectSelector.props = props;
var _default2 = SelectSelector;
exports.default = _default2;