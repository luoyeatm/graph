import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import Text from './Text';
import Title from './Title';
import Paragraph from './Paragraph';
import PropTypes from '../_util/vue-types';
import { defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import Link from './Link';
import Base from './Base';
import classNames from '../_util/classNames';
var Typography = defineComponent({
  name: 'ATypography',
  Base: Base,
  Text: Text,
  Title: Title,
  Paragraph: Paragraph,
  Link: Link,
  inheritAttrs: false,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = useConfigInject('typography', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var _b = _extends(_extends({}, props), attrs),
          _prefixCls = _b.prefixCls,
          _className = _b.class,
          _b$component = _b.component,
          Component = _b$component === void 0 ? 'article' : _b$component,
          restProps = __rest(_b, ["prefixCls", "class", "component"]);

      return _createVNode(Component, _objectSpread({
        "class": classNames(prefixCls.value, attrs.class)
      }, restProps), {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
Typography.props = {
  prefixCls: PropTypes.string,
  component: PropTypes.string
};

Typography.install = function (app) {
  app.component(Typography.name, Typography);
  app.component(Typography.Text.displayName, Text);
  app.component(Typography.Title.displayName, Title);
  app.component(Typography.Paragraph.displayName, Paragraph);
  app.component(Typography.Link.displayName, Link);
  return app;
};

export default Typography;