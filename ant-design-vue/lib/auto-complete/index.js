"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _select = _interopRequireWildcard(require("../select"));

var _input = _interopRequireDefault(require("../input"));

var _InputElement = _interopRequireDefault(require("./InputElement"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _configProvider = require("../config-provider");

var _propsUtil = require("../_util/props-util");

var _omit = _interopRequireDefault(require("omit.js"));

var _warning = _interopRequireDefault(require("../_util/warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Option = _select.default.Option,
    OptGroup = _select.default.OptGroup;

function isSelectOptionOrSelectOptGroup(child) {
  var _a, _b;

  return ((_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.isSelectOption) || ((_b = child === null || child === void 0 ? void 0 : child.type) === null || _b === void 0 ? void 0 : _b.isSelectOptGroup);
}

var AutoCompleteProps = _extends(_extends({}, (0, _select.SelectProps)()), {
  dataSource: _vueTypes.default.array,
  dropdownMenuStyle: _vueTypes.default.style,
  optionLabelProp: _vueTypes.default.string,
  dropdownMatchSelectWidth: _vueTypes.default.looseBool
});

var AutoComplete = (0, _vue.defineComponent)({
  name: 'AAutoComplete',
  inheritAttrs: false,
  props: _extends(_extends({}, AutoCompleteProps), {
    prefixCls: _vueTypes.default.string.def('ant-select'),
    showSearch: _vueTypes.default.looseBool,
    transitionName: _vueTypes.default.string.def('slide-up'),
    choiceTransitionName: _vueTypes.default.string.def('zoom'),
    autofocus: _vueTypes.default.looseBool,
    backfill: _vueTypes.default.looseBool,
    optionLabelProp: _vueTypes.default.string.def('children'),
    filterOption: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func]).def(false),
    defaultActiveFirstOption: _vueTypes.default.looseBool.def(true)
  }),
  emits: ['change', 'select', 'focus', 'blur'],
  Option: _extends(_extends({}, Option), {
    name: 'AAutoCompleteOption'
  }),
  OptGroup: _extends(_extends({}, OptGroup), {
    name: 'AAutoCompleteOptGroup'
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    (0, _warning.default)(!(props.dataSource !== undefined || 'dataSource' in slots), 'AutoComplete', '`dataSource` is deprecated, please use `options` instead.');
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      popupRef: null,
      select: null
    };
  },
  created: function created() {
    (0, _vue.provide)('savePopupRef', this.savePopupRef);
  },
  methods: {
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    saveSelect: function saveSelect(node) {
      this.select = node;
    },
    getInputElement: function getInputElement() {
      var children = (0, _propsUtil.getSlot)(this);
      var element = children.length ? children[0] : (0, _vue.createVNode)(_input.default, {
        "lazy": false
      }, null);
      return (0, _vue.createVNode)(_InputElement.default, element.props, {
        default: function _default() {
          return [element];
        }
      });
    },
    focus: function focus() {
      if (this.select) {
        this.select.focus();
      }
    },
    blur: function blur() {
      if (this.select) {
        this.select.blur();
      }
    }
  },
  render: function render() {
    var _cls;

    var size = this.size,
        customizePrefixCls = this.prefixCls,
        dataSource = this.dataSource;
    var optionChildren;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var className = this.$attrs.class;
    var cls = (_cls = {}, _defineProperty(_cls, className, !!className), _defineProperty(_cls, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_cls, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_cls, "".concat(prefixCls, "-show-search"), true), _defineProperty(_cls, "".concat(prefixCls, "-auto-complete"), true), _cls);
    var childArray = (0, _propsUtil.getSlot)(this, 'dataSource');

    if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
      optionChildren = childArray;
    } else {
      optionChildren = dataSource ? dataSource.map(function (item) {
        if ((0, _propsUtil.isValidElement)(item)) {
          return item;
        }

        switch (_typeof(item)) {
          case 'string':
            return (0, _vue.createVNode)(Option, {
              "key": item,
              "value": item
            }, {
              default: function _default() {
                return [item];
              }
            });

          case 'object':
            return (0, _vue.createVNode)(Option, {
              "key": item.value,
              "value": item.value
            }, {
              default: function _default() {
                return [item.text];
              }
            });

          default:
            throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
        }
      }) : [];
    }

    var selectProps = _extends(_extends(_extends({}, (0, _omit.default)((0, _propsUtil.getOptionProps)(this), ['dataSource', 'optionLabelProp'])), this.$attrs), {
      mode: _select.default.SECRET_COMBOBOX_MODE_DO_NOT_USE,
      // optionLabelProp,
      getInputElement: this.getInputElement,
      notFoundContent: (0, _propsUtil.getComponent)(this, 'notFoundContent'),
      // placeholder: '',
      class: cls,
      ref: this.saveSelect
    });

    return (0, _vue.createVNode)(_select.default, selectProps, {
      default: function _default() {
        return [optionChildren];
      }
    });
  }
});
/* istanbul ignore next */

AutoComplete.install = function (app) {
  app.component(AutoComplete.name, AutoComplete);
  app.component(AutoComplete.Option.name, AutoComplete.Option);
  app.component(AutoComplete.OptGroup.name, AutoComplete.OptGroup);
  return app;
};

var _default2 = AutoComplete;
exports.default = _default2;