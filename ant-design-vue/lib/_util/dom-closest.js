"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _domMatches = _interopRequireDefault(require("./dom-matches"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * source by `dom-closest`
 * https://github.com/necolas/dom-closest.git
 */

/**
 * @param element {Element}
 * @param selector {String}
 * @param context {Element=}
 * @return {Element}
 */
function _default(element, selector, context) {
  context = context || document; // guard against orphans

  element = {
    parentNode: element
  };

  while ((element = element.parentNode) && element !== context) {
    if ((0, _domMatches.default)(element, selector)) {
      return element;
    }
  }
}