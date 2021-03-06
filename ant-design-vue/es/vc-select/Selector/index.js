import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */
import KeyCode from '../../_util/KeyCode';
import MultipleSelector from './MultipleSelector';
import SingleSelector from './SingleSelector';
import useLock from '../hooks/useLock';
import { defineComponent } from 'vue';
import createRef from '../../_util/createRef';
import PropTypes from '../../_util/vue-types';
var Selector = defineComponent({
  name: 'Selector',
  setup: function setup(props) {
    var inputRef = createRef();
    var compositionStatus = false; // ====================== Input ======================

    var _useLock = useLock(0),
        _useLock2 = _slicedToArray(_useLock, 2),
        getInputMouseDown = _useLock2[0],
        setInputMouseDown = _useLock2[1];

    var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
      var which = event.which;

      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        event.preventDefault();
      }

      if (props.onInputKeyDown) {
        props.onInputKeyDown(event);
      }

      if (which === KeyCode.ENTER && props.mode === 'tags' && !compositionStatus && !props.open) {
        // When menu isn't open, OptionList won't trigger a value change
        // So when enter is pressed, the tag's input value should be emitted here to let selector know
        props.onSearchSubmit(event.target.value);
      }

      if (![KeyCode.SHIFT, KeyCode.TAB, KeyCode.BACKSPACE, KeyCode.ESC].includes(which)) {
        props.onToggleOpen(true);
      }
    };
    /**
     * We can not use `findDOMNode` sine it will get warning,
     * have to use timer to check if is input element.
     */


    var onInternalInputMouseDown = function onInternalInputMouseDown() {
      setInputMouseDown(true);
    }; // When paste come, ignore next onChange


    var pastedText = null;

    var triggerOnSearch = function triggerOnSearch(value) {
      if (props.onSearch(value, true, compositionStatus) !== false) {
        props.onToggleOpen(true);
      }
    };

    var onInputCompositionStart = function onInputCompositionStart() {
      compositionStatus = true;
    };

    var onInputCompositionEnd = function onInputCompositionEnd() {
      compositionStatus = false;
    };

    var onInputChange = function onInputChange(event) {
      var value = event.target.value; // Pasted text should replace back to origin content

      if (props.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        // CRLF will be treated as a single space for input element
        var replacedText = pastedText.replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
        value = value.replace(replacedText, pastedText);
      }

      pastedText = null;
      triggerOnSearch(value);
    };

    var onInputPaste = function onInputPaste(e) {
      var clipboardData = e.clipboardData;
      var value = clipboardData.getData('text');
      pastedText = value;
    };

    var onClick = function onClick(_ref) {
      var target = _ref.target;

      if (target !== inputRef.current) {
        // Should focus input if click the selector
        var isIE = document.body.style.msTouchAction !== undefined;

        if (isIE) {
          setTimeout(function () {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };

    var onMousedown = function onMousedown(event) {
      var inputMouseDown = getInputMouseDown();

      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }

      if (props.mode !== 'combobox' && (!props.showSearch || !inputMouseDown) || !props.open) {
        if (props.open) {
          props.onSearch('', true, false);
        }

        props.onToggleOpen();
      }
    };

    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      },
      onMousedown: onMousedown,
      onClick: onClick,
      onInputPaste: onInputPaste,
      inputRef: inputRef,
      onInternalInputKeyDown: onInternalInputKeyDown,
      onInternalInputMouseDown: onInternalInputMouseDown,
      onInputChange: onInputChange,
      onInputCompositionEnd: onInputCompositionEnd,
      onInputCompositionStart: onInputCompositionStart
    };
  },
  render: function render() {
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        domRef = _this$$props.domRef,
        multiple = _this$$props.multiple;
    var onMousedown = this.onMousedown,
        onClick = this.onClick,
        inputRef = this.inputRef,
        onInputPaste = this.onInputPaste,
        onInternalInputKeyDown = this.onInternalInputKeyDown,
        onInternalInputMouseDown = this.onInternalInputMouseDown,
        onInputChange = this.onInputChange,
        onInputCompositionStart = this.onInputCompositionStart,
        onInputCompositionEnd = this.onInputCompositionEnd;
    var sharedProps = {
      inputRef: inputRef,
      onInputKeyDown: onInternalInputKeyDown,
      onInputMouseDown: onInternalInputMouseDown,
      onInputChange: onInputChange,
      onInputPaste: onInputPaste,
      onInputCompositionStart: onInputCompositionStart,
      onInputCompositionEnd: onInputCompositionEnd
    };
    var selectNode = multiple ? _createVNode(MultipleSelector, _objectSpread(_objectSpread({}, this.$props), sharedProps), null) : _createVNode(SingleSelector, _objectSpread(_objectSpread({}, this.$props), sharedProps), null);
    return _createVNode("div", {
      "ref": domRef,
      "class": "".concat(prefixCls, "-selector"),
      "onClick": onClick,
      "onMousedown": onMousedown
    }, [selectNode]);
  }
});
Selector.inheritAttrs = false;
Selector.props = {
  id: PropTypes.string,
  prefixCls: PropTypes.string,
  showSearch: PropTypes.looseBool,
  open: PropTypes.looseBool,

  /** Display in the Selector value, it's not same as `value` prop */
  values: PropTypes.array,
  multiple: PropTypes.looseBool,
  mode: PropTypes.string,
  searchValue: PropTypes.string,
  activeValue: PropTypes.string,
  inputElement: PropTypes.any,
  autofocus: PropTypes.looseBool,
  accessibilityIndex: PropTypes.number,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.looseBool,
  placeholder: PropTypes.any,
  removeIcon: PropTypes.any,
  // Tags
  maxTagCount: PropTypes.number,
  maxTagTextLength: PropTypes.number,
  maxTagPlaceholder: PropTypes.any,
  tagRender: PropTypes.func,

  /** Check if `tokenSeparators` contains `\n` or `\r\n` */
  tokenWithEnter: PropTypes.looseBool,
  // Motion
  choiceTransitionName: PropTypes.string,
  onToggleOpen: PropTypes.func,

  /** `onSearch` returns go next step boolean to check if need do toggle open */
  onSearch: PropTypes.func,
  onSearchSubmit: PropTypes.func,
  onSelect: PropTypes.func,
  onInputKeyDown: PropTypes.func,

  /**
   * @private get real dom for trigger align.
   * This may be removed after React provides replacement of `findDOMNode`
   */
  domRef: PropTypes.func
};
export default Selector;