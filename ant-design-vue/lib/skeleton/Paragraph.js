"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.skeletonParagraphProps = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var widthUnit = _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]);

var skeletonParagraphProps = {
  prefixCls: _vueTypes.default.string,
  width: _vueTypes.default.oneOfType([widthUnit, _vueTypes.default.arrayOf(widthUnit)]),
  rows: _vueTypes.default.number
};
exports.skeletonParagraphProps = skeletonParagraphProps;
var SkeletonParagraph = (0, _vue.defineComponent)({
  name: 'SkeletonParagraph',
  props: skeletonParagraphProps,
  setup: function setup(props) {
    var getWidth = function getWidth(index) {
      var width = props.width,
          _props$rows = props.rows,
          rows = _props$rows === void 0 ? 2 : _props$rows;

      if (Array.isArray(width)) {
        return width[index];
      } // last paragraph


      if (rows - 1 === index) {
        return width;
      }

      return undefined;
    };

    return function () {
      var prefixCls = props.prefixCls,
          rows = props.rows;

      var rowList = _toConsumableArray(Array(rows)).map(function (_, index) {
        var width = getWidth(index);
        return (0, _vue.createVNode)("li", {
          "key": index,
          "style": {
            width: typeof width === 'number' ? "".concat(width, "px") : width
          }
        }, null);
      });

      return (0, _vue.createVNode)("ul", {
        "class": prefixCls
      }, [rowList]);
    };
  }
});
var _default = SkeletonParagraph;
exports.default = _default;