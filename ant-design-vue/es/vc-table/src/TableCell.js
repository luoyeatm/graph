import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { inject, toRaw } from 'vue';
import PropTypes from '../../_util/vue-types';
import get from 'lodash-es/get';
import classNames from '../../_util/classNames';
import { isValidElement } from '../../_util/props-util';

function isInvalidRenderCellText(text) {
  return text && !isValidElement(text) && Object.prototype.toString.call(text) === '[object Object]';
}

export default {
  name: 'TableCell',
  inheritAttrs: false,
  props: {
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    index: PropTypes.number,
    indent: PropTypes.number,
    indentSize: PropTypes.number,
    column: PropTypes.object,
    expandIcon: PropTypes.any,
    component: PropTypes.any
  },
  setup: function setup() {
    return {
      table: inject('table', {})
    };
  },
  methods: {
    handleClick: function handleClick(e) {
      var record = this.record,
          onCellClick = this.column.onCellClick;

      if (onCellClick) {
        onCellClick(record, e);
      }
    }
  },
  render: function render() {
    var _classNames;

    var record = this.record,
        indentSize = this.indentSize,
        prefixCls = this.prefixCls,
        indent = this.indent,
        index = this.index,
        expandIcon = this.expandIcon,
        column = this.column,
        BodyCell = this.component;
    var dataIndex = column.dataIndex,
        customRender = column.customRender,
        _column$className = column.className,
        className = _column$className === void 0 ? '' : _column$className;
    var transformCellText = this.table.transformCellText; // We should return undefined if no dataIndex is specified, but in order to
    // be compatible with object-path's behavior, we return the record object instead.

    var text;

    if (typeof dataIndex === 'number') {
      text = get(record, dataIndex);
    } else if (!dataIndex || dataIndex.length === 0) {
      text = record;
    } else {
      text = get(record, dataIndex);
    }

    var tdProps = {
      onClick: this.handleClick
    };
    var colSpan;
    var rowSpan;

    if (customRender) {
      text = customRender({
        text: text,
        record: record,
        index: index,
        column: column
      });

      if (isInvalidRenderCellText(text)) {
        tdProps = text.props || text.attrs || tdProps;
        var _tdProps = tdProps;
        colSpan = _tdProps.colSpan;
        rowSpan = _tdProps.rowSpan;
        text = text.children;
      }
    }

    if (column.customCell) {
      tdProps = _extends(_extends({}, tdProps), column.customCell(record, index));
    } // Fix https://github.com/ant-design/ant-design/issues/1202


    if (isInvalidRenderCellText(text)) {
      text = null;
    }

    if (transformCellText) {
      text = transformCellText({
        text: text,
        column: column,
        record: record,
        index: index
      });
    }

    var indentText = expandIcon ? _createVNode("span", {
      "style": {
        paddingLeft: "".concat(indentSize * indent, "px")
      },
      "class": "".concat(prefixCls, "-indent indent-level-").concat(indent)
    }, null) : null;

    if (rowSpan === 0 || colSpan === 0) {
      return null;
    }

    if (column.align) {
      tdProps.style = _extends({
        textAlign: column.align
      }, tdProps.style);
    }

    var cellClassName = classNames(className, column.class, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-cell-ellipsis"), !!column.ellipsis), _defineProperty(_classNames, "".concat(prefixCls, "-cell-break-word"), !!column.width), _classNames));

    if (column.ellipsis) {
      if (typeof text === 'string') {
        tdProps.title = text;
      } else if (text) {// const { props: textProps } = text;
        // if (textProps && textProps.children && typeof textProps.children === 'string') {
        //   tdProps.attrs.title = textProps.children;
        // }
      }
    }

    return _createVNode(BodyCell, _objectSpread({
      "class": cellClassName
    }, tdProps), {
      default: function _default() {
        return [indentText, expandIcon, toRaw(text)];
      }
    });
  }
};