"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectProps = void 0;

var _vue = require("vue");

var _omit = _interopRequireDefault(require("omit.js"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _vcSelect = _interopRequireWildcard(require("../vc-select"));

var _iconUtil = _interopRequireDefault(require("./utils/iconUtil"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _type = require("../_util/type");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SelectProps = function SelectProps() {
  return _extends(_extends({}, (0, _omit.default)((0, _vcSelect.BaseProps)(), ['inputIcon', 'mode', 'getInputElement', 'backfill', 'class', 'style'])), {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: _vueTypes.default.VNodeChild,
    suffixIcon: _vueTypes.default.VNodeChild,
    itemIcon: _vueTypes.default.VNodeChild,
    size: _vueTypes.default.oneOf((0, _type.tuple)('small', 'middle', 'large', 'default')),
    mode: _vueTypes.default.oneOf((0, _type.tuple)('multiple', 'tags', 'SECRET_COMBOBOX_MODE_DO_NOT_USE')),
    bordered: _vueTypes.default.looseBool.def(true),
    transitionName: _vueTypes.default.string.def('slide-up'),
    choiceTransitionName: _vueTypes.default.string.def('')
  });
};

exports.SelectProps = SelectProps;
var Select = (0, _vue.defineComponent)({
  name: 'ASelect',
  Option: _vcSelect.Option,
  OptGroup: _vcSelect.OptGroup,
  inheritAttrs: false,
  props: SelectProps(),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
  emits: ['change', 'update:value'],
  slots: ['notFoundContent', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'dropdownRender'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit,
        slots = _ref.slots,
        expose = _ref.expose;
    var selectRef = (0, _vue.ref)(null);

    var focus = function focus() {
      if (selectRef.value) {
        selectRef.value.focus();
      }
    };

    var blur = function blur() {
      if (selectRef.value) {
        selectRef.value.blur();
      }
    };

    var mode = (0, _vue.computed)(function () {
      var mode = props.mode;

      if (mode === 'combobox') {
        return undefined;
      }

      if (mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return 'combobox';
      }

      return mode;
    });

    var _useConfigInject = (0, _useConfigInject2.default)('select', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        configProvider = _useConfigInject.configProvider;

    var mergedClassName = (0, _vue.computed)(function () {
      var _classNames;

      return (0, _classNames3.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-lg"), props.size === 'large'), _defineProperty(_classNames, "".concat(prefixCls.value, "-sm"), props.size === 'small'), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-borderless"), !props.bordered), _classNames));
    });

    var triggerChange = function triggerChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      emit('update:value', args[0]);
      emit.apply(void 0, ['change'].concat(args));
    };

    expose({
      blur: blur,
      focus: focus
    });
    return function () {
      var _a;

      var notFoundContent = props.notFoundContent,
          _props$listHeight = props.listHeight,
          listHeight = _props$listHeight === void 0 ? 256 : _props$listHeight,
          _props$listItemHeight = props.listItemHeight,
          listItemHeight = _props$listItemHeight === void 0 ? 24 : _props$listItemHeight,
          getPopupContainer = props.getPopupContainer,
          dropdownClassName = props.dropdownClassName,
          virtual = props.virtual,
          dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
      var renderEmpty = configProvider.renderEmpty,
          getContextPopupContainer = configProvider.getPopupContainer;
      var isMultiple = mode.value === 'multiple' || mode.value === 'tags'; // ===================== Empty =====================

      var mergedNotFound;

      if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
      } else if (slots.notFoundContent) {
        mergedNotFound = slots.notFoundContent();
      } else if (mode.value === 'combobox') {
        mergedNotFound = null;
      } else {
        mergedNotFound = renderEmpty('Select');
      } // ===================== Icons =====================


      var _getIcons = (0, _iconUtil.default)(_extends(_extends({}, props), {
        multiple: isMultiple,
        prefixCls: prefixCls.value
      }), slots),
          suffixIcon = _getIcons.suffixIcon,
          itemIcon = _getIcons.itemIcon,
          removeIcon = _getIcons.removeIcon,
          clearIcon = _getIcons.clearIcon;

      var selectProps = (0, _omit.default)(props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'size', 'bordered']);
      var rcSelectRtlDropDownClassName = (0, _classNames3.default)(dropdownClassName, _defineProperty({}, "".concat(prefixCls.value, "-dropdown-").concat(direction.value), direction.value === 'rtl'));
      return (0, _vue.createVNode)(_vcSelect.default, _objectSpread(_objectSpread(_objectSpread({
        "ref": selectRef,
        "virtual": virtual,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth
      }, selectProps), attrs), {}, {
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "mode": mode.value,
        "prefixCls": prefixCls.value,
        "direction": direction.value,
        "inputIcon": suffixIcon,
        "menuItemSelectedIcon": itemIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "notFoundContent": mergedNotFound,
        "class": [mergedClassName.value, attrs.class],
        "getPopupContainer": getPopupContainer || getContextPopupContainer,
        "dropdownClassName": rcSelectRtlDropDownClassName,
        "onChange": triggerChange,
        "dropdownRender": selectProps.dropdownRender || slots.dropdownRender
      }), {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
/* istanbul ignore next */

Select.install = function (app) {
  app.component(Select.name, Select);
  app.component(Select.Option.displayName, Select.Option);
  app.component(Select.OptGroup.displayName, Select.OptGroup);
  return app;
};

var _default2 = Select;
exports.default = _default2;