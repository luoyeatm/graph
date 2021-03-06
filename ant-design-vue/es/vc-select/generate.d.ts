/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabindex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 */
import { RenderNode, Mode, RenderDOMFunc } from './interface';
import { GetLabeledValue, FilterOptions, FilterFunc, DefaultValueType, RawValueType, LabelValueType, Key, FlattenOptionsType, SingleType, OnClear, SelectSource, CustomTagProps, DropdownRender } from './interface/generator';
import { OptionListProps } from './OptionList';
import { CSSProperties, DefineComponent, VNodeChild } from 'vue';
export declare const BaseProps: () => {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    class: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<any>;
    options: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    mode: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: import("vue-types").VueTypeValidableDef<any>;
    labelInValue: import("vue-types").VueTypeValidableDef<boolean>;
    inputValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    searchValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    optionFilterProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: import("vue-types").VueTypeValidableDef<any>;
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    autoClearSearchValue: import("vue-types").VueTypeValidableDef<boolean>;
    onSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    clearIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    showArrow: import("vue-types").VueTypeValidableDef<boolean>;
    inputIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    removeIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    open: import("vue-types").VueTypeValidableDef<boolean>;
    defaultOpen: import("vue-types").VueTypeValidableDef<boolean>;
    listHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    listItemHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    dropdownStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dropdownClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    dropdownMatchSelectWidth: import("vue-types").VueTypeDef<number | boolean>;
    virtual: import("vue-types").VueTypeValidableDef<boolean>;
    dropdownRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dropdownAlign: import("vue-types").VueTypeValidableDef<any>;
    animation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    defaultActiveFirstOption: import("vue-types").VueTypeValidableDef<boolean>;
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    placeholder: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    backfill: import("vue-types").VueTypeValidableDef<boolean>;
    getInputElement: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    optionLabelProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maxTagTextLength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxTagCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    tagRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    onKeyup: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onPopupScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDropdownVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDeselect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onInputKeyDown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMousedown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseenter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseleave: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    choiceTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /**
     * Only used in current version for internal event process.
     * Do not use in production environment.
     */
    internalProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    children: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
};
export interface SelectProps<OptionsType extends object[], ValueType> {
    prefixCls?: string;
    id?: string;
    class?: string;
    style?: CSSProperties;
    options?: OptionsType;
    children?: any[];
    mode?: Mode;
    value?: ValueType;
    defaultValue?: ValueType;
    labelInValue?: boolean;
    inputValue?: string;
    searchValue?: string;
    optionFilterProp?: string;
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption?: boolean | FilterFunc<OptionsType[number]>;
    showSearch?: boolean;
    autoClearSearchValue?: boolean;
    onSearch?: (value: string) => void;
    onClear?: OnClear;
    allowClear?: boolean;
    clearIcon?: VNodeChild;
    showArrow?: boolean;
    inputIcon?: RenderNode;
    removeIcon?: VNodeChild;
    menuItemSelectedIcon?: RenderNode;
    open?: boolean;
    defaultOpen?: boolean;
    listHeight?: number;
    listItemHeight?: number;
    dropdownStyle?: CSSProperties;
    dropdownClassName?: string;
    dropdownMatchSelectWidth?: boolean | number;
    virtual?: boolean;
    dropdownRender?: DropdownRender;
    dropdownAlign?: any;
    animation?: string;
    transitionName?: string;
    getPopupContainer?: RenderDOMFunc;
    direction?: string;
    disabled?: boolean;
    loading?: boolean;
    autofocus?: boolean;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: VNodeChild;
    placeholder?: VNodeChild;
    backfill?: boolean;
    getInputElement?: () => VNodeChild | JSX.Element;
    optionLabelProp?: string;
    maxTagTextLength?: number;
    maxTagCount?: number;
    maxTagPlaceholder?: VNodeChild | ((omittedValues: LabelValueType[]) => VNodeChild);
    tokenSeparators?: string[];
    tagRender?: (props: CustomTagProps) => VNodeChild;
    showAction?: ('focus' | 'click')[];
    tabindex?: number | string;
    onKeyup?: EventHandlerNonNull;
    onKeydown?: EventHandlerNonNull;
    onPopupScroll?: EventHandlerNonNull;
    onDropdownVisibleChange?: (open: boolean) => void;
    onSelect?: (value: SingleType<ValueType>, option: OptionsType[number]) => void;
    onDeselect?: (value: SingleType<ValueType>, option: OptionsType[number]) => void;
    onInputKeyDown?: EventHandlerNonNull;
    onClick?: EventHandlerNonNull;
    onChange?: (value: ValueType, option: OptionsType[number] | OptionsType) => void;
    onBlur?: EventHandlerNonNull;
    onFocus?: EventHandlerNonNull;
    onMousedown?: EventHandlerNonNull;
    onMouseenter?: EventHandlerNonNull;
    onMouseleave?: EventHandlerNonNull;
    choiceTransitionName?: string;
    /**
     * Only used in current version for internal event process.
     * Do not use in production environment.
     */
    internalProps?: {
        mark?: string;
        onClear?: OnClear;
        skipTriggerChange?: boolean;
        skipTriggerSelect?: boolean;
        onRawSelect?: (value: RawValueType, option: OptionsType[number], source: SelectSource) => void;
        onRawDeselect?: (value: RawValueType, option: OptionsType[number], source: SelectSource) => void;
    };
}
export interface GenerateConfig<OptionsType extends object[]> {
    prefixCls: string;
    components: {
        optionList: DefineComponent<Omit<OptionListProps, 'options'> & {
            options?: OptionsType;
        }>;
    };
    /** Convert jsx tree into `OptionsType` */
    convertChildrenToData: (children: VNodeChild | JSX.Element) => OptionsType;
    /** Flatten nest options into raw option list */
    flattenOptions: (options: OptionsType, props: any) => FlattenOptionsType<OptionsType>;
    /** Convert single raw value into { label, value } format. Will be called by each value */
    getLabeledValue: GetLabeledValue<FlattenOptionsType<OptionsType>>;
    filterOptions: FilterOptions<OptionsType>;
    findValueOption: ((values: RawValueType[], options: FlattenOptionsType<OptionsType>) => OptionsType) | ((values: RawValueType[], options: FlattenOptionsType<OptionsType>, info?: {
        prevValueOptions?: OptionsType[];
    }) => OptionsType);
    /** Check if a value is disabled */
    isValueDisabled: (value: RawValueType, options: FlattenOptionsType<OptionsType>) => boolean;
    warningProps?: (props: any) => void;
    fillOptionsWithMissingValue?: (options: OptionsType, value: DefaultValueType, optionLabelProp: string, labelInValue: boolean) => OptionsType;
    omitDOMProps?: (props: object) => object;
}
/**
 * This function is in internal usage.
 * Do not use it in your prod env since we may refactor this.
 */
export default function generateSelector<OptionsType extends {
    value?: RawValueType;
    label?: VNodeChild;
    key?: Key;
    disabled?: boolean;
}[]>(config: GenerateConfig<OptionsType>): DefineComponent<SelectProps<OptionsType, DefaultValueType>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{ [K in "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)]: [SelectProps<OptionsType, DefaultValueType>[K]] extends [null] ? any : [SelectProps<OptionsType, DefaultValueType>[K]] extends [{
    type: true;
}] ? any : [SelectProps<OptionsType, DefaultValueType>[K]] extends [ObjectConstructor | {
    type: ObjectConstructor;
}] ? Record<string, any> : [SelectProps<OptionsType, DefaultValueType>[K]] extends [BooleanConstructor | {
    type: BooleanConstructor;
}] ? boolean : [SelectProps<OptionsType, DefaultValueType>[K]] extends [DateConstructor | {
    type: DateConstructor;
}] ? Date : [SelectProps<OptionsType, DefaultValueType>[K]] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? D : V : SelectProps<OptionsType, DefaultValueType>[K]; } & { [K_1 in Exclude<"style", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"class", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"value", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"children", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"getPopupContainer", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"prefixCls", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"direction", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"virtual", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"dropdownMatchSelectWidth", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onFocus", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onBlur", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onChange", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onKeydown", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onKeyup", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onClick", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onMousedown", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onMouseenter", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onMouseleave", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onSelect", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"tabindex", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onDeselect", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"disabled", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"open", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"mode", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"id", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"options", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"defaultActiveFirstOption", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"notFoundContent", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"menuItemSelectedIcon", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"searchValue", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"labelInValue", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"optionLabelProp", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"optionFilterProp", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"filterOption", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"autofocus", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"animation", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"removeIcon", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"maxTagCount", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"maxTagTextLength", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"maxTagPlaceholder", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"tokenSeparators", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"tagRender", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"choiceTransitionName", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"placeholder", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"showSearch", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onInputKeyDown", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"backfill", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onSearch", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"transitionName", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"dropdownStyle", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"dropdownClassName", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"dropdownRender", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"dropdownAlign", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"showAction", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"defaultValue", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"inputValue", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"autoClearSearchValue", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onClear", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"allowClear", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"clearIcon", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"showArrow", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"inputIcon", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"defaultOpen", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"listHeight", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"listItemHeight", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"loading", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"getInputElement", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onPopupScroll", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"onDropdownVisibleChange", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)> | Exclude<"internalProps", "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    required: true;
} | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    default: () => undefined;
} ? never : "options" : never)>]?: [SelectProps<OptionsType, DefaultValueType>[K_1]] extends [null] ? any : [SelectProps<OptionsType, DefaultValueType>[K_1]] extends [{
    type: true;
}] ? any : [SelectProps<OptionsType, DefaultValueType>[K_1]] extends [ObjectConstructor | {
    type: ObjectConstructor;
}] ? Record<string, any> : [SelectProps<OptionsType, DefaultValueType>[K_1]] extends [BooleanConstructor | {
    type: BooleanConstructor;
}] ? boolean : [SelectProps<OptionsType, DefaultValueType>[K_1]] extends [DateConstructor | {
    type: DateConstructor;
}] ? Date : [SelectProps<OptionsType, DefaultValueType>[K_1]] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? D : V : SelectProps<OptionsType, DefaultValueType>[K_1]; }>, { [K_2 in "dropdownAlign" | (OptionsType extends BooleanConstructor | {
    default: any;
} | {
    type: BooleanConstructor;
} ? OptionsType extends {
    type: BooleanConstructor;
    required: true;
} ? never : "options" : never)]: [SelectProps<OptionsType, DefaultValueType>[K_2]] extends [null] ? any : [SelectProps<OptionsType, DefaultValueType>[K_2]] extends [{
    type: true;
}] ? any : [SelectProps<OptionsType, DefaultValueType>[K_2]] extends [ObjectConstructor | {
    type: ObjectConstructor;
}] ? Record<string, any> : [SelectProps<OptionsType, DefaultValueType>[K_2]] extends [BooleanConstructor | {
    type: BooleanConstructor;
}] ? boolean : [SelectProps<OptionsType, DefaultValueType>[K_2]] extends [DateConstructor | {
    type: DateConstructor;
}] ? Date : [SelectProps<OptionsType, DefaultValueType>[K_2]] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? D : V : SelectProps<OptionsType, DefaultValueType>[K_2]; }>;
