import { VNodeChild, PropType, Plugin } from 'vue';
import { Option, OptGroup, SelectProps as RcSelectProps } from '../vc-select';
import { OptionProps as OptionPropsType } from '../vc-select/Option';
declare type RawValue = string | number;
export declare type OptionProps = OptionPropsType;
export declare type OptionType = typeof Option;
export interface LabeledValue {
    key?: string;
    value: RawValue;
    label: VNodeChild;
}
export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
export declare type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[];
export interface InternalSelectProps<VT> extends Omit<RcSelectProps<VT>, 'mode'> {
    suffixIcon?: VNodeChild;
    itemIcon?: VNodeChild;
    size?: SizeType;
    mode?: 'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
    bordered?: boolean;
}
export interface SelectPropsTypes<VT> extends Omit<InternalSelectProps<VT>, 'inputIcon' | 'mode' | 'getInputElement' | 'backfill' | 'class' | 'style'> {
    mode?: 'multiple' | 'tags';
}
export declare type SelectTypes = SelectPropsTypes<SelectValue>;
export declare const SelectProps: () => {
    value: {
        type: PropType<SelectValue>;
    };
    defaultValue: {
        type: PropType<SelectValue>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    suffixIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    itemIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "middle" | "large">;
    mode: import("vue-types").VueTypeDef<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    choiceTransitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    children: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    virtual: import("vue-types").VueTypeValidableDef<boolean>;
    dropdownMatchSelectWidth: import("vue-types").VueTypeDef<number | boolean>;
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeyup: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
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
    onSelect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    onDeselect: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    open: import("vue-types").VueTypeValidableDef<boolean>;
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    options: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    defaultActiveFirstOption: import("vue-types").VueTypeValidableDef<boolean>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    searchValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    labelInValue: import("vue-types").VueTypeValidableDef<boolean>;
    optionLabelProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    optionFilterProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    filterOption: import("vue-types").VueTypeValidableDef<any>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    animation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    removeIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    maxTagCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxTagTextLength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    tagRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    placeholder: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    showSearch: import("vue-types").VueTypeValidableDef<boolean>;
    onInputKeyDown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onSearch: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
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
    dropdownRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    dropdownAlign: import("vue-types").VueTypeValidableDef<any>;
    showAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    inputValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    autoClearSearchValue: import("vue-types").VueTypeValidableDef<boolean>;
    onClear: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    clearIcon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    showArrow: import("vue-types").VueTypeValidableDef<boolean>;
    defaultOpen: import("vue-types").VueTypeValidableDef<boolean>;
    listHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    listItemHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    onPopupScroll: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onDropdownVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    internalProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            children: unknown[];
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            direction: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onKeyup: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            onMousedown: (...args: any[]) => any;
            onMouseenter: (...args: any[]) => any;
            onMouseleave: (...args: any[]) => any;
            onSelect: (...args: any[]) => any;
            onDeselect: (...args: any[]) => any;
            id: string;
            options: unknown[];
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            tagRender: (...args: any[]) => any;
            choiceTransitionName: string;
            onInputKeyDown: (...args: any[]) => any;
            onSearch: (...args: any[]) => any;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            dropdownRender: (...args: any[]) => any;
            showAction: unknown[];
            inputValue: string;
            onClear: (...args: any[]) => any;
            listHeight: number;
            listItemHeight: number;
            onPopupScroll: (...args: any[]) => any;
            onDropdownVisibleChange: (...args: any[]) => any;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
        }> & Omit<Readonly<{
            children: unknown[];
            prefixCls: string;
            direction: string;
            id: string;
            options: unknown[];
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            choiceTransitionName: string;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            showAction: unknown[];
            inputValue: string;
            listHeight: number;
            listItemHeight: number;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
        } & {
            value?: SelectValue;
            getPopupContainer?: (...args: any[]) => any;
            virtual?: boolean;
            dropdownMatchSelectWidth?: number | boolean;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMousedown?: (...args: any[]) => any;
            onMouseenter?: (...args: any[]) => any;
            onMouseleave?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            tabindex?: string | number;
            onDeselect?: (...args: any[]) => any;
            disabled?: boolean;
            size?: "default" | "small" | "middle" | "large";
            open?: boolean;
            mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            defaultActiveFirstOption?: boolean;
            notFoundContent?: import("../_util/type").VueNode;
            menuItemSelectedIcon?: import("../_util/type").VueNode;
            labelInValue?: boolean;
            filterOption?: any;
            autofocus?: boolean;
            removeIcon?: import("../_util/type").VueNode;
            maxTagPlaceholder?: any;
            tagRender?: (...args: any[]) => any;
            placeholder?: import("../_util/type").VueNode;
            showSearch?: boolean;
            onInputKeyDown?: (...args: any[]) => any;
            onSearch?: (...args: any[]) => any;
            dropdownRender?: (...args: any[]) => any;
            dropdownAlign?: any;
            defaultValue?: SelectValue;
            autoClearSearchValue?: boolean;
            onClear?: (...args: any[]) => any;
            allowClear?: boolean;
            clearIcon?: import("../_util/type").VueNode;
            showArrow?: boolean;
            defaultOpen?: boolean;
            loading?: boolean;
            onPopupScroll?: (...args: any[]) => any;
            onDropdownVisibleChange?: (...args: any[]) => any;
            suffixIcon?: import("../_util/type").VueNode;
            itemIcon?: import("../_util/type").VueNode;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "children" | "getPopupContainer" | "prefixCls" | "direction" | "onFocus" | "onBlur" | "onChange" | "onKeydown" | "onKeyup" | "onClick" | "onMousedown" | "onMouseenter" | "onMouseleave" | "onSelect" | "onDeselect" | "id" | "options" | "searchValue" | "optionLabelProp" | "optionFilterProp" | "animation" | "maxTagCount" | "maxTagTextLength" | "tokenSeparators" | "tagRender" | "choiceTransitionName" | "onInputKeyDown" | "onSearch" | "transitionName" | "dropdownStyle" | "dropdownClassName" | "dropdownRender" | "showAction" | "inputValue" | "onClear" | "listHeight" | "listItemHeight" | "onPopupScroll" | "onDropdownVisibleChange" | "internalProps" | "bordered">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "change" | "update:value", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            children: unknown[];
            prefixCls: string;
            direction: string;
            id: string;
            options: unknown[];
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            choiceTransitionName: string;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            showAction: unknown[];
            inputValue: string;
            listHeight: number;
            listItemHeight: number;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
        } & {
            value?: SelectValue;
            getPopupContainer?: (...args: any[]) => any;
            virtual?: boolean;
            dropdownMatchSelectWidth?: number | boolean;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMousedown?: (...args: any[]) => any;
            onMouseenter?: (...args: any[]) => any;
            onMouseleave?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            tabindex?: string | number;
            onDeselect?: (...args: any[]) => any;
            disabled?: boolean;
            size?: "default" | "small" | "middle" | "large";
            open?: boolean;
            mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            defaultActiveFirstOption?: boolean;
            notFoundContent?: import("../_util/type").VueNode;
            menuItemSelectedIcon?: import("../_util/type").VueNode;
            labelInValue?: boolean;
            filterOption?: any;
            autofocus?: boolean;
            removeIcon?: import("../_util/type").VueNode;
            maxTagPlaceholder?: any;
            tagRender?: (...args: any[]) => any;
            placeholder?: import("../_util/type").VueNode;
            showSearch?: boolean;
            onInputKeyDown?: (...args: any[]) => any;
            onSearch?: (...args: any[]) => any;
            dropdownRender?: (...args: any[]) => any;
            dropdownAlign?: any;
            defaultValue?: SelectValue;
            autoClearSearchValue?: boolean;
            onClear?: (...args: any[]) => any;
            allowClear?: boolean;
            clearIcon?: import("../_util/type").VueNode;
            showArrow?: boolean;
            defaultOpen?: boolean;
            loading?: boolean;
            onPopupScroll?: (...args: any[]) => any;
            onDropdownVisibleChange?: (...args: any[]) => any;
            suffixIcon?: import("../_util/type").VueNode;
            itemIcon?: import("../_util/type").VueNode;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:value")[], string, {
            children: unknown[];
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            direction: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onKeyup: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            onMousedown: (...args: any[]) => any;
            onMouseenter: (...args: any[]) => any;
            onMouseleave: (...args: any[]) => any;
            onSelect: (...args: any[]) => any;
            onDeselect: (...args: any[]) => any;
            id: string;
            options: unknown[];
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            tagRender: (...args: any[]) => any;
            choiceTransitionName: string;
            onInputKeyDown: (...args: any[]) => any;
            onSearch: (...args: any[]) => any;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            dropdownRender: (...args: any[]) => any;
            showAction: unknown[];
            inputValue: string;
            onClear: (...args: any[]) => any;
            listHeight: number;
            listItemHeight: number;
            onPopupScroll: (...args: any[]) => any;
            onDropdownVisibleChange: (...args: any[]) => any;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        children: unknown[];
        prefixCls: string;
        direction: string;
        id: string;
        options: unknown[];
        searchValue: string;
        optionLabelProp: string;
        optionFilterProp: string;
        animation: string;
        maxTagCount: number;
        maxTagTextLength: number;
        tokenSeparators: unknown[];
        choiceTransitionName: string;
        transitionName: string;
        dropdownStyle: {
            [key: string]: any;
        };
        dropdownClassName: string;
        showAction: unknown[];
        inputValue: string;
        listHeight: number;
        listItemHeight: number;
        internalProps: {
            [key: string]: any;
        };
        bordered: boolean;
    } & {
        value?: SelectValue;
        getPopupContainer?: (...args: any[]) => any;
        virtual?: boolean;
        dropdownMatchSelectWidth?: number | boolean;
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onKeyup?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        onMousedown?: (...args: any[]) => any;
        onMouseenter?: (...args: any[]) => any;
        onMouseleave?: (...args: any[]) => any;
        onSelect?: (...args: any[]) => any;
        tabindex?: string | number;
        onDeselect?: (...args: any[]) => any;
        disabled?: boolean;
        size?: "default" | "small" | "middle" | "large";
        open?: boolean;
        mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
        defaultActiveFirstOption?: boolean;
        notFoundContent?: import("../_util/type").VueNode;
        menuItemSelectedIcon?: import("../_util/type").VueNode;
        labelInValue?: boolean;
        filterOption?: any;
        autofocus?: boolean;
        removeIcon?: import("../_util/type").VueNode;
        maxTagPlaceholder?: any;
        tagRender?: (...args: any[]) => any;
        placeholder?: import("../_util/type").VueNode;
        showSearch?: boolean;
        onInputKeyDown?: (...args: any[]) => any;
        onSearch?: (...args: any[]) => any;
        dropdownRender?: (...args: any[]) => any;
        dropdownAlign?: any;
        defaultValue?: SelectValue;
        autoClearSearchValue?: boolean;
        onClear?: (...args: any[]) => any;
        allowClear?: boolean;
        clearIcon?: import("../_util/type").VueNode;
        showArrow?: boolean;
        defaultOpen?: boolean;
        loading?: boolean;
        onPopupScroll?: (...args: any[]) => any;
        onDropdownVisibleChange?: (...args: any[]) => any;
        suffixIcon?: import("../_util/type").VueNode;
        itemIcon?: import("../_util/type").VueNode;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    children: unknown[];
    prefixCls: string;
    direction: string;
    id: string;
    options: unknown[];
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    animation: string;
    maxTagCount: number;
    maxTagTextLength: number;
    tokenSeparators: unknown[];
    choiceTransitionName: string;
    transitionName: string;
    dropdownStyle: {
        [key: string]: any;
    };
    dropdownClassName: string;
    showAction: unknown[];
    inputValue: string;
    listHeight: number;
    listItemHeight: number;
    internalProps: {
        [key: string]: any;
    };
    bordered: boolean;
} & {
    value?: SelectValue;
    getPopupContainer?: (...args: any[]) => any;
    virtual?: boolean;
    dropdownMatchSelectWidth?: number | boolean;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMousedown?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    tabindex?: string | number;
    onDeselect?: (...args: any[]) => any;
    disabled?: boolean;
    size?: "default" | "small" | "middle" | "large";
    open?: boolean;
    mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    defaultActiveFirstOption?: boolean;
    notFoundContent?: import("../_util/type").VueNode;
    menuItemSelectedIcon?: import("../_util/type").VueNode;
    labelInValue?: boolean;
    filterOption?: any;
    autofocus?: boolean;
    removeIcon?: import("../_util/type").VueNode;
    maxTagPlaceholder?: any;
    tagRender?: (...args: any[]) => any;
    placeholder?: import("../_util/type").VueNode;
    showSearch?: boolean;
    onInputKeyDown?: (...args: any[]) => any;
    onSearch?: (...args: any[]) => any;
    dropdownRender?: (...args: any[]) => any;
    dropdownAlign?: any;
    defaultValue?: SelectValue;
    autoClearSearchValue?: boolean;
    onClear?: (...args: any[]) => any;
    allowClear?: boolean;
    clearIcon?: import("../_util/type").VueNode;
    showArrow?: boolean;
    defaultOpen?: boolean;
    loading?: boolean;
    onPopupScroll?: (...args: any[]) => any;
    onDropdownVisibleChange?: (...args: any[]) => any;
    suffixIcon?: import("../_util/type").VueNode;
    itemIcon?: import("../_util/type").VueNode;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:value")[], "change" | "update:value", {
    children: unknown[];
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    direction: string;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onKeyup: (...args: any[]) => any;
    onClick: (...args: any[]) => any;
    onMousedown: (...args: any[]) => any;
    onMouseenter: (...args: any[]) => any;
    onMouseleave: (...args: any[]) => any;
    onSelect: (...args: any[]) => any;
    onDeselect: (...args: any[]) => any;
    id: string;
    options: unknown[];
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    animation: string;
    maxTagCount: number;
    maxTagTextLength: number;
    tokenSeparators: unknown[];
    tagRender: (...args: any[]) => any;
    choiceTransitionName: string;
    onInputKeyDown: (...args: any[]) => any;
    onSearch: (...args: any[]) => any;
    transitionName: string;
    dropdownStyle: {
        [key: string]: any;
    };
    dropdownClassName: string;
    dropdownRender: (...args: any[]) => any;
    showAction: unknown[];
    inputValue: string;
    onClear: (...args: any[]) => any;
    listHeight: number;
    listItemHeight: number;
    onPopupScroll: (...args: any[]) => any;
    onDropdownVisibleChange: (...args: any[]) => any;
    internalProps: {
        [key: string]: any;
    };
    bordered: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Option: typeof Option;
    readonly OptGroup: typeof OptGroup;
    readonly SECRET_COMBOBOX_MODE_DO_NOT_USE: 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
};
export default _default;
