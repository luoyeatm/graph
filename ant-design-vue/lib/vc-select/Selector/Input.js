"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vnode = require("../../_util/vnode");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _antInputDirective = _interopRequireDefault(require("../../_util/antInputDirective"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Input = (0, _vue.defineComponent)({
  name: 'Input',
  inheritAttrs: false,
  setup: function setup(props) {
    if (process.env.NODE_ENV === 'test') {
      (0, _vue.onMounted)(function () {
        var ins = (0, _vue.getCurrentInstance)();

        if (props.autofocus) {
          if (ins.vnode && ins.vnode.el) {
            ins.vnode.el.focus();
          }
        }
      });
    }

    return {
      blurTimeout: null,
      VCSelectContainerEvent: (0, _vue.inject)('VCSelectContainerEvent')
    };
  },
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        id = _this$$props.id,
        inputElement = _this$$props.inputElement,
        disabled = _this$$props.disabled,
        tabindex = _this$$props.tabindex,
        autofocus = _this$$props.autofocus,
        autocomplete = _this$$props.autocomplete,
        editable = _this$$props.editable,
        accessibilityIndex = _this$$props.accessibilityIndex,
        value = _this$$props.value,
        _onKeydown = _this$$props.onKeydown,
        _onMousedown = _this$$props.onMousedown,
        onChange = _this$$props.onChange,
        onPaste = _this$$props.onPaste,
        _onCompositionstart = _this$$props.onCompositionstart,
        _onCompositionend = _this$$props.onCompositionend,
        open = _this$$props.open,
        inputRef = _this$$props.inputRef,
        attrs = _this$$props.attrs;
    var inputNode = (0, _vue.withDirectives)(inputElement || (0, _vue.createVNode)("input", null, null), [[_antInputDirective.default]]);
    var inputProps = inputNode.props || {};
    var onOriginKeyDown = inputProps.onKeydown,
        onOriginInput = inputProps.onInput,
        onOriginMouseDown = inputProps.onMousedown,
        onOriginCompositionStart = inputProps.onCompositionstart,
        onOriginCompositionEnd = inputProps.onCompositionend,
        style = inputProps.style;
    inputNode = (0, _vnode.cloneElement)(inputNode, _extends(_extends(_extends({
      id: id,
      ref: inputRef,
      disabled: disabled,
      tabindex: tabindex,
      autocomplete: autocomplete || 'off',
      autofocus: autofocus,
      class: "".concat(prefixCls, "-selection-search-input"),
      style: _extends(_extends({}, style), {
        opacity: editable ? null : 0
      }),
      role: 'combobox',
      'aria-expanded': open,
      'aria-haspopup': 'listbox',
      'aria-owns': "".concat(id, "_list"),
      'aria-autocomplete': 'list',
      'aria-controls': "".concat(id, "_list"),
      'aria-activedescendant': "".concat(id, "_list_").concat(accessibilityIndex)
    }, attrs), {
      value: editable ? value : '',
      readonly: !editable,
      unselectable: !editable ? 'on' : null,
      onKeydown: function onKeydown(event) {
        _onKeydown(event);

        if (onOriginKeyDown) {
          onOriginKeyDown(event);
        }
      },
      onMousedown: function onMousedown(event) {
        _onMousedown(event);

        if (onOriginMouseDown) {
          onOriginMouseDown(event);
        }
      },
      onInput: function onInput(event) {
        onChange(event);

        if (onOriginInput) {
          onOriginInput(event);
        }
      },
      onCompositionstart: function onCompositionstart(event) {
        _onCompositionstart(event);

        if (onOriginCompositionStart) {
          onOriginCompositionStart(event);
        }
      },
      onCompositionend: function onCompositionend(event) {
        _onCompositionend(event);

        if (onOriginCompositionEnd) {
          onOriginCompositionEnd(event);
        }
      },
      onPaste: onPaste,
      onFocus: function onFocus() {
        var _a;

        clearTimeout(_this.blurTimeout);
        (_a = _this.VCSelectContainerEvent) === null || _a === void 0 ? void 0 : _a.focus(arguments.length <= 0 ? undefined : arguments[0]);
      },
      onBlur: function onBlur() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.blurTimeout = setTimeout(function () {
          var _a;

          (_a = _this.VCSelectContainerEvent) === null || _a === void 0 ? void 0 : _a.blur(args[0]);
        }, 200);
      }
    }), inputNode.type === 'textarea' ? {} : {
      type: 'search'
    }), true, true);
    return inputNode;
  }
});
Input.props = {
  inputRef: _vueTypes.default.any,
  prefixCls: _vueTypes.default.string,
  id: _vueTypes.default.string,
  inputElement: _vueTypes.default.any,
  disabled: _vueTypes.default.looseBool,
  autofocus: _vueTypes.default.looseBool,
  autocomplete: _vueTypes.default.string,
  editable: _vueTypes.default.looseBool,
  accessibilityIndex: _vueTypes.default.number,
  value: _vueTypes.default.string,
  open: _vueTypes.default.looseBool,
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),

  /** Pass accessibility props to input */
  attrs: _vueTypes.default.object,
  onKeydown: _vueTypes.default.func,
  onMousedown: _vueTypes.default.func,
  onChange: _vueTypes.default.func,
  onPaste: _vueTypes.default.func,
  onCompositionstart: _vueTypes.default.func,
  onCompositionend: _vueTypes.default.func
};
var _default = Input;
exports.default = _default;