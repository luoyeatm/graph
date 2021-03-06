/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */
import { LabelValueType, RawValueType, CustomTagProps } from '../interface/generator';
import { RenderNode, Mode } from '../interface';
import { VNodeChild } from 'vue';
import { RefObject } from '../../_util/createRef';
import { VueNode } from '../../_util/type';
export interface InnerSelectorProps {
    prefixCls: string;
    id: string;
    mode: Mode;
    inputRef: RefObject;
    placeholder?: VNodeChild;
    disabled?: boolean;
    autofocus?: boolean;
    autocomplete?: string;
    values: LabelValueType[];
    showSearch?: boolean;
    searchValue: string;
    accessibilityIndex: number;
    open: boolean;
    tabindex?: number | string;
    onInputKeyDown: EventHandlerNonNull;
    onInputMouseDown: EventHandlerNonNull;
    onInputChange: EventHandlerNonNull;
    onInputPaste: EventHandlerNonNull;
    onInputCompositionStart: EventHandlerNonNull;
    onInputCompositionEnd: EventHandlerNonNull;
}
export interface SelectorProps {
    id: string;
    prefixCls: string;
    showSearch?: boolean;
    open: boolean;
    /** Display in the Selector value, it's not same as `value` prop */
    values: LabelValueType[];
    multiple: boolean;
    mode: Mode;
    searchValue: string;
    activeValue: string;
    inputElement: VueNode;
    autofocus?: boolean;
    accessibilityIndex: number;
    tabindex?: number | string;
    disabled?: boolean;
    placeholder?: VNodeChild;
    removeIcon?: RenderNode;
    maxTagCount?: number;
    maxTagTextLength?: number;
    maxTagPlaceholder?: VNodeChild;
    tagRender?: (props: CustomTagProps) => VNodeChild;
    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter?: boolean;
    choiceTransitionName?: string;
    onToggleOpen: (open?: boolean) => void;
    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: (searchText: string, fromTyping: boolean, isCompositing: boolean) => boolean;
    onSearchSubmit: (searchText: string) => void;
    onSelect: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    onInputKeyDown?: EventHandlerNonNull;
    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: () => HTMLDivElement;
}
declare const Selector: import("vue").DefineComponent<SelectorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    values?: LabelValueType[];
    prefixCls?: string;
    onSelect?: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    tabindex?: string | number;
    multiple?: boolean;
    disabled?: boolean;
    open?: boolean;
    mode?: Mode;
    id?: string;
    searchValue?: string;
    onToggleOpen?: void;
    inputElement?: VueNode;
    autofocus?: boolean;
    accessibilityIndex?: number;
    removeIcon?: RenderNode;
    maxTagCount?: number;
    maxTagTextLength?: number;
    maxTagPlaceholder?: VNodeChild;
    tagRender?: (props: CustomTagProps) => VNodeChild;
    choiceTransitionName?: string;
    placeholder?: VNodeChild;
    showSearch?: boolean;
    onInputKeyDown?: EventHandlerNonNull;
    activeValue?: string;
    tokenWithEnter?: boolean;
    onSearch?: (searchText: string, fromTyping: boolean, isCompositing: boolean) => boolean;
    onSearchSubmit?: (searchText: string) => void;
    domRef?: HTMLDivElement;
}>, {}>;
export default Selector;
