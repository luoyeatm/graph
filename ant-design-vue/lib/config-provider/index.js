"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultConfigProvider = exports.configProviderProps = exports.configConsumerProps = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _renderEmpty = _interopRequireDefault(require("./renderEmpty"));

var _localeProvider = _interopRequireWildcard(require("../locale-provider"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _type = require("../_util/type");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
exports.configConsumerProps = configConsumerProps;
var configProviderProps = {
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: {
    type: Object
  },
  autoInsertSpaceInButton: _vueTypes.default.looseBool,
  locale: {
    type: Object
  },
  pageHeader: {
    type: Object
  },
  componentSize: {
    type: String
  },
  direction: {
    type: String
  },
  space: {
    type: Object
  },
  virtual: _vueTypes.default.looseBool,
  dropdownMatchSelectWidth: _vueTypes.default.looseBool,
  form: {
    type: Object
  }
};
exports.configProviderProps = configProviderProps;
var ConfigProvider = (0, _vue.defineComponent)({
  name: 'AConfigProvider',
  props: configProviderProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var getPrefixCls = function getPrefixCls(suffixCls, customizePrefixCls) {
      var _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === void 0 ? 'ant' : _props$prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };

    var renderEmptyComponent = function renderEmptyComponent(name) {
      var renderEmpty = props.renderEmpty || slots.renderEmpty || _renderEmpty.default;
      return renderEmpty(name);
    };

    var getPrefixClsWrapper = function getPrefixClsWrapper(suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };

    var configProvider = (0, _vue.reactive)(_extends(_extends({}, props), {
      getPrefixCls: getPrefixClsWrapper,
      renderEmpty: renderEmptyComponent
    }));
    (0, _vue.watch)(props, function () {
      _extends(configProvider, props);
    });
    (0, _vue.provide)('configProvider', configProvider);

    var renderProvider = function renderProvider(legacyLocale) {
      var _a;

      return (0, _vue.createVNode)(_localeProvider.default, {
        "locale": props.locale || legacyLocale,
        "ANT_MARK__": _localeProvider.ANT_MARK
      }, {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };

    return function () {
      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "children": function children(_, __, legacyLocale) {
          return renderProvider(legacyLocale);
        }
      }, null);
    };
  }
});
var defaultConfigProvider = (0, _vue.reactive)({
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: _renderEmpty.default,
  direction: 'ltr'
});
exports.defaultConfigProvider = defaultConfigProvider;

var _default2 = (0, _type.withInstall)(ConfigProvider);

exports.default = _default2;