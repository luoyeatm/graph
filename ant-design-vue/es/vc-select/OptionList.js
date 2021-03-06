import { Fragment as _Fragment, createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import TransBtn from './TransBtn';
import PropTypes from '../_util/vue-types';
import KeyCode from '../_util/KeyCode';
import classNames from '../_util/classNames';
import pickAttrs from '../_util/pickAttrs';
import { isValidElement } from '../_util/props-util';
import createRef from '../_util/createRef';
import { computed, defineComponent, nextTick, reactive, watch } from 'vue';
import List from '../vc-virtual-list/List';
var OptionListProps = {
  prefixCls: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
  flattenOptions: PropTypes.array,
  height: PropTypes.number,
  itemHeight: PropTypes.number,
  values: PropTypes.any,
  multiple: PropTypes.looseBool,
  open: PropTypes.looseBool,
  defaultActiveFirstOption: PropTypes.looseBool,
  notFoundContent: PropTypes.any,
  menuItemSelectedIcon: PropTypes.any,
  childrenAsData: PropTypes.looseBool,
  searchValue: PropTypes.string,
  virtual: PropTypes.looseBool,
  onSelect: PropTypes.func,
  onToggleOpen: PropTypes.func,

  /** Tell Select that some value is now active to make accessibility work */
  onActiveValue: PropTypes.func,
  onScroll: PropTypes.func,

  /** Tell Select that mouse enter the popup to force re-render */
  onMouseenter: PropTypes.func
};
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */

var OptionList = defineComponent({
  name: 'OptionList',
  inheritAttrs: false,
  setup: function setup(props) {
    var itemPrefixCls = computed(function () {
      return "".concat(props.prefixCls, "-item");
    }); // =========================== List ===========================

    var listRef = createRef();

    var onListMouseDown = function onListMouseDown(event) {
      event.preventDefault();
    };

    var scrollIntoView = function scrollIntoView(index) {
      if (listRef.current) {
        listRef.current.scrollTo({
          index: index
        });
      }
    }; // ========================== Active ==========================


    var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var len = props.flattenOptions.length;

      for (var i = 0; i < len; i += 1) {
        var current = (index + i * offset + len) % len;
        var _props$flattenOptions = props.flattenOptions[current],
            group = _props$flattenOptions.group,
            data = _props$flattenOptions.data;

        if (!group && !data.disabled) {
          return current;
        }
      }

      return -1;
    };

    var state = reactive({
      activeIndex: getEnabledActiveIndex(0)
    });

    var setActive = function setActive(index) {
      var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      state.activeIndex = index;
      var info = {
        source: fromKeyboard ? 'keyboard' : 'mouse'
      }; // Trigger active event

      var flattenItem = props.flattenOptions[index];

      if (!flattenItem) {
        props.onActiveValue(null, -1, info);
        return;
      }

      props.onActiveValue(flattenItem.data.value, index, info);
    }; // Auto active first item when list length or searchValue changed


    watch(computed(function () {
      return [props.flattenOptions.length, props.searchValue];
    }), function () {
      setActive(props.defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, {
      immediate: true
    }); // Auto scroll to item position in single mode

    watch(computed(function () {
      return props.open;
    }), function () {
      if (!props.multiple && props.open && props.values.size === 1) {
        var value = Array.from(props.values)[0];
        var index = props.flattenOptions.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });
        setActive(index);
        scrollIntoView(index);
      } // Force trigger scrollbar visible when open


      if (props.open) {
        nextTick(function () {
          var _a;

          (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(undefined);
        });
      }
    }, {
      immediate: true,
      flush: 'post'
    }); // ========================== Values ==========================

    var onSelectValue = function onSelectValue(value) {
      if (value !== undefined) {
        props.onSelect(value, {
          selected: !props.values.has(value)
        });
      } // Single mode should always close by select


      if (!props.multiple) {
        props.onToggleOpen(false);
      }
    };

    function renderItem(index) {
      var item = props.flattenOptions[index];
      if (!item) return null;
      var itemData = item.data || {};
      var value = itemData.value,
          label = itemData.label,
          children = itemData.children;
      var attrs = pickAttrs(itemData, true);
      var mergedLabel = props.childrenAsData ? children : label;
      return item ? _createVNode("div", _objectSpread(_objectSpread({
        "aria-label": typeof mergedLabel === 'string' ? mergedLabel : undefined
      }, attrs), {}, {
        "key": index,
        "role": "option",
        "id": "".concat(props.id, "_list_").concat(index),
        "aria-selected": props.values.has(value)
      }), [value]) : null;
    }

    return {
      renderItem: renderItem,
      listRef: listRef,
      state: state,
      onListMouseDown: onListMouseDown,
      itemPrefixCls: itemPrefixCls,
      setActive: setActive,
      onSelectValue: onSelectValue,
      onKeydown: function onKeydown(event) {
        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case KeyCode.UP:
          case KeyCode.DOWN:
            {
              var offset = 0;

              if (which === KeyCode.UP) {
                offset = -1;
              } else if (which === KeyCode.DOWN) {
                offset = 1;
              }

              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(state.activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }

              break;
            }
          // >>> Select

          case KeyCode.ENTER:
            {
              // value
              var item = props.flattenOptions[state.activeIndex];

              if (item && !item.data.disabled) {
                onSelectValue(item.data.value);
              } else {
                onSelectValue(undefined);
              }

              if (props.open) {
                event.preventDefault();
              }

              break;
            }
          // >>> Close

          case KeyCode.ESC:
            {
              props.onToggleOpen(false);
            }
        }
      },
      onKeyup: function onKeyup() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  },
  render: function render() {
    var renderItem = this.renderItem,
        listRef = this.listRef,
        onListMouseDown = this.onListMouseDown,
        itemPrefixCls = this.itemPrefixCls,
        setActive = this.setActive,
        onSelectValue = this.onSelectValue;
    var _this$$props = this.$props,
        id = _this$$props.id,
        childrenAsData = _this$$props.childrenAsData,
        values = _this$$props.values,
        height = _this$$props.height,
        itemHeight = _this$$props.itemHeight,
        flattenOptions = _this$$props.flattenOptions,
        menuItemSelectedIcon = _this$$props.menuItemSelectedIcon,
        notFoundContent = _this$$props.notFoundContent,
        virtual = _this$$props.virtual,
        onScroll = _this$$props.onScroll,
        onMouseenter = _this$$props.onMouseenter;
    var activeIndex = this.state.activeIndex; // ========================== Render ==========================

    if (flattenOptions.length === 0) {
      return _createVNode("div", {
        "role": "listbox",
        "id": "".concat(id, "_list"),
        "class": "".concat(itemPrefixCls, "-empty"),
        "onMousedown": onListMouseDown
      }, [notFoundContent]);
    }

    return _createVNode(_Fragment, null, [_createVNode("div", {
      "role": "listbox",
      "id": "".concat(id, "_list"),
      "style": {
        height: 0,
        width: 0,
        overflow: 'hidden'
      }
    }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), _createVNode(List, {
      "itemKey": "key",
      "ref": listRef,
      "data": flattenOptions,
      "height": height,
      "itemHeight": itemHeight,
      "fullHeight": false,
      "onMousedown": onListMouseDown,
      "onScroll": onScroll,
      "virtual": virtual,
      "onMouseenter": onMouseenter,
      "children": function children(_ref2, itemIndex) {
        var _classNames;

        var group = _ref2.group,
            groupOption = _ref2.groupOption,
            data = _ref2.data;
        var label = data.label,
            key = data.key; // Group

        if (group) {
          return _createVNode("div", {
            "class": classNames(itemPrefixCls, "".concat(itemPrefixCls, "-group"))
          }, [label !== undefined ? label : key]);
        }

        var disabled = data.disabled,
            value = data.value,
            title = data.title,
            children = data.children,
            style = data.style,
            cls = data.class,
            className = data.className,
            otherProps = __rest(data, ["disabled", "value", "title", "children", "style", "class", "className"]); // Option


        var selected = values.has(value);
        var optionPrefixCls = "".concat(itemPrefixCls, "-option");
        var optionClassName = classNames(itemPrefixCls, optionPrefixCls, cls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
        var mergedLabel = childrenAsData ? children : label;
        var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
        var content = mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

        var optionTitle = typeof content === 'string' || typeof content === 'number' ? content.toString() : undefined;

        if (title !== undefined) {
          optionTitle = title;
        }

        return _createVNode("div", _objectSpread(_objectSpread({}, otherProps), {}, {
          "aria-selected": selected,
          "class": optionClassName,
          "title": optionTitle,
          "onMousemove": function onMousemove(e) {
            if (otherProps.onMousemove) {
              otherProps.onMousemove(e);
            }

            if (activeIndex === itemIndex || disabled) {
              return;
            }

            setActive(itemIndex);
          },
          "onClick": function onClick(e) {
            if (!disabled) {
              onSelectValue(value);
            }

            if (otherProps.onClick) {
              otherProps.onClick(e);
            }
          },
          "style": style
        }), [_createVNode("div", {
          "class": "".concat(optionPrefixCls, "-content")
        }, [content]), isValidElement(menuItemSelectedIcon) || selected, iconVisible && _createVNode(TransBtn, {
          "class": "".concat(itemPrefixCls, "-option-state"),
          "customizeIcon": menuItemSelectedIcon,
          "customizeIconProps": {
            isSelected: selected
          }
        }, {
          default: function _default() {
            return [selected ? '???' : null];
          }
        })]);
      }
    }, null)]);
  }
});
OptionList.props = OptionListProps;
export default OptionList;