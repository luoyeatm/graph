"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckableTag = (0, _vue.defineComponent)({
  name: 'ACheckableTag',
  props: {
    prefixCls: _vueTypes.default.string,
    checked: _vueTypes.default.looseBool,
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    }
  },
  emits: ['update:checked', 'change', 'click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var _useConfigInject = (0, _useConfigInject2.default)('tag', props),
        prefixCls = _useConfigInject.prefixCls;

    var handleClick = function handleClick(e) {
      var checked = props.checked;
      emit('update:checked', !checked);
      emit('change', !checked);
      emit('click', e);
    };

    var cls = (0, _vue.computed)(function () {
      var _classNames;

      return (0, _classNames2.default)(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-checkable"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-checkable-checked"), props.checked), _classNames));
    });
    return function () {
      var _a;

      return (0, _vue.createVNode)("span", {
        "class": cls.value,
        "onClick": handleClick
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var _default = CheckableTag;
exports.default = _default;