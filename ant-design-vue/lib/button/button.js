"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _wave = _interopRequireDefault(require("../_util/wave"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _buttonTypes = _interopRequireDefault(require("./buttonTypes"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line no-console
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
var props = (0, _buttonTypes.default)();

var _default2 = (0, _vue.defineComponent)({
  name: 'AButton',
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: props,
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      children: [],
      iconCom: undefined,
      delayTimeout: undefined
    };
  },
  data: function data() {
    return {
      sizeMap: {
        large: 'lg',
        small: 'sm'
      },
      sLoading: false,
      hasTwoCNChar: false
    };
  },
  watch: {
    loading: {
      handler: function handler(val, preVal) {
        var _this = this;

        if (preVal && typeof preVal !== 'boolean') {
          clearTimeout(this.delayTimeout);
        }

        if (val && typeof val !== 'boolean' && val.delay) {
          this.delayTimeout = setTimeout(function () {
            _this.sLoading = !!val;
          }, val.delay);
        } else {
          this.sLoading = !!val;
        }
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    this.fixTwoCNChar();
  },
  updated: function updated() {
    this.fixTwoCNChar();
  },
  beforeUnmount: function beforeUnmount() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  },
  methods: {
    getClasses: function getClasses() {
      var _ref;

      var customizePrefixCls = this.prefixCls,
          type = this.type,
          shape = this.shape,
          size = this.size,
          hasTwoCNChar = this.hasTwoCNChar,
          sLoading = this.sLoading,
          ghost = this.ghost,
          block = this.block,
          $attrs = this.$attrs;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var autoInsertSpace = this.configProvider.autoInsertSpaceInButton !== false; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        default:
          break;
      }

      var iconType = sLoading ? 'loading' : this.iconCom;
      return _ref = {}, _defineProperty(_ref, $attrs.class, $attrs.class), _defineProperty(_ref, "".concat(prefixCls), true), _defineProperty(_ref, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_ref, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_ref, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_ref, "".concat(prefixCls, "-icon-only"), this.children.length === 0 && iconType), _defineProperty(_ref, "".concat(prefixCls, "-loading"), sLoading), _defineProperty(_ref, "".concat(prefixCls, "-background-ghost"), ghost || type === 'ghost'), _defineProperty(_ref, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty(_ref, "".concat(prefixCls, "-block"), block), _ref;
    },
    fixTwoCNChar: function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      var node = this.$refs.buttonNode;

      if (!node) {
        return;
      }

      var buttonText = node.textContent;

      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.hasTwoCNChar) {
          this.hasTwoCNChar = true;
        }
      } else if (this.hasTwoCNChar) {
        this.hasTwoCNChar = false;
      }
    },
    handleClick: function handleClick(event) {
      var sLoading = this.$data.sLoading;

      if (sLoading) {
        return;
      }

      this.$emit('click', event);
    },
    insertSpace: function insertSpace(child, needInserted) {
      var SPACE = needInserted ? ' ' : '';

      if (child.type === _vue.Text) {
        var text = child.children.trim();

        if (isTwoCNChar(text)) {
          text = text.split('').join(SPACE);
        }

        return (0, _vue.createVNode)("span", null, [text]);
      }

      return child;
    },
    isNeedInserted: function isNeedInserted() {
      var iconCom = this.iconCom,
          type = this.type;
      return this.children.length === 1 && !iconCom && type !== 'link';
    }
  },
  render: function render() {
    var _this2 = this;

    this.iconCom = (0, _propsUtil.getComponent)(this, 'icon');
    var type = this.type,
        htmlType = this.htmlType,
        iconCom = this.iconCom,
        disabled = this.disabled,
        handleClick = this.handleClick,
        sLoading = this.sLoading,
        href = this.href,
        title = this.title,
        $attrs = this.$attrs;
    var children = (0, _propsUtil.getSlot)(this);
    this.children = children;
    var classes = this.getClasses();

    var buttonProps = _extends(_extends({}, $attrs), {
      title: title,
      disabled: disabled,
      class: classes,
      onClick: handleClick
    });

    var iconNode = sLoading ? (0, _vue.createVNode)(_LoadingOutlined.default, null, null) : iconCom;
    var autoInsertSpace = this.configProvider.autoInsertSpaceInButton !== false;
    var kids = children.map(function (child) {
      return _this2.insertSpace(child, _this2.isNeedInserted() && autoInsertSpace);
    });

    if (href !== undefined) {
      return (0, _vue.createVNode)("a", _objectSpread(_objectSpread({}, buttonProps), {}, {
        "href": href,
        "ref": "buttonNode"
      }), [iconNode, kids]);
    }

    var buttonNode = (0, _vue.createVNode)("button", _objectSpread(_objectSpread({}, buttonProps), {}, {
      "ref": "buttonNode",
      "type": htmlType || 'button'
    }), [iconNode, kids]);

    if (type === 'link') {
      return buttonNode;
    }

    return (0, _vue.createVNode)(_wave.default, {
      "ref": "wave"
    }, {
      default: function _default() {
        return [buttonNode];
      }
    });
  }
});

exports.default = _default2;