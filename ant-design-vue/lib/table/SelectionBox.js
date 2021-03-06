"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _radio = _interopRequireDefault(require("../radio"));

var _interface = require("./interface");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _default = (0, _vue.defineComponent)({
  name: 'SelectionBox',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: _interface.SelectionBoxProps,
  setup: function setup(props) {
    return {
      checked: (0, _vue.computed)(function () {
        var store = props.store,
            defaultSelection = props.defaultSelection,
            rowIndex = props.rowIndex;
        var checked = false;

        if (store.selectionDirty) {
          checked = store.selectedRowKeys.indexOf(rowIndex) >= 0;
        } else {
          checked = store.selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
        }

        return checked;
      })
    };
  },
  render: function render() {
    var _a = _extends(_extends({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs),
        type = _a.type,
        rowIndex = _a.rowIndex,
        rest = __rest(_a, ["type", "rowIndex"]);

    var checked = this.checked;

    var checkboxProps = _extends({
      checked: checked
    }, rest);

    if (type === 'radio') {
      checkboxProps.value = rowIndex;
      return (0, _vue.createVNode)(_radio.default, checkboxProps, null);
    }

    return (0, _vue.createVNode)(_checkbox.default, checkboxProps, null);
  }
});

exports.default = _default;