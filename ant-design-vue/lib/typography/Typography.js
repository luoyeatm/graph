"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _Text = _interopRequireDefault(require("./Text"));

var _Title = _interopRequireDefault(require("./Title"));

var _Paragraph = _interopRequireDefault(require("./Paragraph"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _Link = _interopRequireDefault(require("./Link"));

var _Base = _interopRequireDefault(require("./Base"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Typography = (0, _vue.defineComponent)({
  name: 'ATypography',
  Base: _Base.default,
  Text: _Text.default,
  Title: _Title.default,
  Paragraph: _Paragraph.default,
  Link: _Link.default,
  inheritAttrs: false,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = (0, _useConfigInject2.default)('typography', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var _b = _extends(_extends({}, props), attrs),
          _prefixCls = _b.prefixCls,
          _className = _b.class,
          _b$component = _b.component,
          Component = _b$component === void 0 ? 'article' : _b$component,
          restProps = __rest(_b, ["prefixCls", "class", "component"]);

      return (0, _vue.createVNode)(Component, _objectSpread({
        "class": (0, _classNames.default)(prefixCls.value, attrs.class)
      }, restProps), {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
Typography.props = {
  prefixCls: _vueTypes.default.string,
  component: _vueTypes.default.string
};

Typography.install = function (app) {
  app.component(Typography.name, Typography);
  app.component(Typography.Text.displayName, _Text.default);
  app.component(Typography.Title.displayName, _Title.default);
  app.component(Typography.Paragraph.displayName, _Paragraph.default);
  app.component(Typography.Link.displayName, _Link.default);
  return app;
};

var _default2 = Typography;
exports.default = _default2;