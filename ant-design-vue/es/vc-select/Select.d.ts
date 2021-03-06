/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */
import { OptionsType as SelectOptionsType } from './interface';
import { SelectProps } from './generate';
import { DefaultValueType } from './interface/generator';
export declare type ExportedSelectProps<ValueType extends DefaultValueType = DefaultValueType> = SelectProps<SelectOptionsType, ValueType>;
declare const Select: import("vue").DefineComponent<Omit<ExportedSelectProps<DefaultValueType>, "children">, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    dropdownAlign: any;
} & {
    style?: import("vue").CSSProperties;
    class?: string;
    value?: DefaultValueType;
    getPopupContainer?: import("./interface").RenderDOMFunc;
    prefixCls?: string;
    direction?: string;
    virtual?: boolean;
    dropdownMatchSelectWidth?: number | boolean;
    onFocus?: EventHandlerNonNull;
    onBlur?: EventHandlerNonNull;
    onChange?: (value: DefaultValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData | SelectOptionsType) => void;
    onKeydown?: EventHandlerNonNull;
    onKeyup?: EventHandlerNonNull;
    onClick?: EventHandlerNonNull;
    onMousedown?: EventHandlerNonNull;
    onMouseenter?: EventHandlerNonNull;
    onMouseleave?: EventHandlerNonNull;
    onSelect?: (value: import("./interface/generator").RawValueType | import("./interface/generator").LabelValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData) => void;
    tabindex?: string | number;
    onDeselect?: (value: import("./interface/generator").RawValueType | import("./interface/generator").LabelValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData) => void;
    disabled?: boolean;
    open?: boolean;
    mode?: import("./interface").Mode;
    id?: string;
    options?: SelectOptionsType;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: import("vue").VNodeChild;
    menuItemSelectedIcon?: import("./interface").RenderNode;
    searchValue?: string;
    labelInValue?: boolean;
    optionLabelProp?: string;
    optionFilterProp?: string;
    filterOption?: boolean | import("./interface/generator").FilterFunc<import("./interface").OptionData | import("./interface").OptionGroupData>;
    autofocus?: boolean;
    animation?: string;
    removeIcon?: import("vue").VNodeChild;
    maxTagCount?: number;
    maxTagTextLength?: number;
    maxTagPlaceholder?: import("vue").VNodeChild | ((omittedValues: import("./interface/generator").LabelValueType[]) => import("vue").VNodeChild);
    tokenSeparators?: string[];
    tagRender?: (props: import("./interface/generator").CustomTagProps) => import("vue").VNodeChild;
    choiceTransitionName?: string;
    placeholder?: import("vue").VNodeChild;
    showSearch?: boolean;
    onInputKeyDown?: EventHandlerNonNull;
    backfill?: boolean;
    onSearch?: (value: string) => void;
    transitionName?: string;
    dropdownStyle?: import("vue").CSSProperties;
    dropdownClassName?: string;
    dropdownRender?: import("../_util/type").VueNode;
    showAction?: ("click" | "focus")[];
    defaultValue?: DefaultValueType;
    inputValue?: string;
    autoClearSearchValue?: boolean;
    onClear?: void;
    allowClear?: boolean;
    clearIcon?: import("vue").VNodeChild;
    showArrow?: boolean;
    inputIcon?: import("./interface").RenderNode;
    defaultOpen?: boolean;
    listHeight?: number;
    listItemHeight?: number;
    loading?: boolean;
    getInputElement?: import("vue").VNodeChild | JSX.Element;
    onPopupScroll?: EventHandlerNonNull;
    onDropdownVisibleChange?: (open: boolean) => void;
    internalProps?: {
        mark?: string;
        onClear?: import("./interface/generator").OnClear;
        skipTriggerChange?: boolean;
        skipTriggerSelect?: boolean;
        onRawSelect?: (value: import("./interface/generator").RawValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData, source: import("./interface/generator").SelectSource) => void;
        onRawDeselect?: (value: import("./interface/generator").RawValueType, option: import("./interface").OptionData | import("./interface").OptionGroupData, source: import("./interface/generator").SelectSource) => void;
    };
}>, {
    dropdownAlign: any;
}>;
export default Select;
