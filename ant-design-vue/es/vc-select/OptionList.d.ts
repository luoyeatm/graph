import { VNodeChild } from 'vue';
import { OptionsType as SelectOptionsType, RenderNode, OnActiveValue } from './interface';
import { RawValueType, FlattenOptionsType } from './interface/generator';
export interface OptionListProps {
    prefixCls: string;
    id: string;
    options: SelectOptionsType;
    flattenOptions: FlattenOptionsType<SelectOptionsType>;
    height: number;
    itemHeight: number;
    values: Set<RawValueType>;
    multiple: boolean;
    open: boolean;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: VNodeChild;
    menuItemSelectedIcon?: RenderNode;
    childrenAsData: boolean;
    searchValue: string;
    virtual: boolean;
    onSelect: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    onToggleOpen: (open?: boolean) => void;
    /** Tell Select that some value is now active to make accessibility work */
    onActiveValue: OnActiveValue;
    onScroll: EventHandlerNonNull;
    /** Tell Select that mouse enter the popup to force re-render */
    onMouseenter?: EventHandlerNonNull;
}
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
declare const OptionList: import("vue").DefineComponent<OptionListProps, {
    state?: any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    values?: Set<RawValueType>;
    prefixCls?: string;
    virtual?: boolean;
    onMouseenter?: EventHandlerNonNull;
    onSelect?: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    onScroll?: EventHandlerNonNull;
    multiple?: boolean;
    height?: number;
    open?: boolean;
    itemHeight?: number;
    id?: string;
    options?: SelectOptionsType;
    flattenOptions?: FlattenOptionsType<SelectOptionsType>;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: VNodeChild;
    menuItemSelectedIcon?: RenderNode;
    childrenAsData?: boolean;
    searchValue?: string;
    onToggleOpen?: void;
    onActiveValue?: OnActiveValue;
}>, {}>;
export default OptionList;
