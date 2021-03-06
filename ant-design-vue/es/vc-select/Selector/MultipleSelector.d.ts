import { LabelValueType, RawValueType, CustomTagProps } from '../interface/generator';
import { RenderNode } from '../interface';
import { InnerSelectorProps } from '.';
import { VNodeChild } from 'vue';
interface SelectorProps extends InnerSelectorProps {
    removeIcon?: RenderNode;
    maxTagCount?: number;
    maxTagTextLength?: number;
    maxTagPlaceholder?: VNodeChild;
    tokenSeparators?: string[];
    tagRender?: (props: CustomTagProps) => VNodeChild;
    choiceTransitionName?: string;
    onSelect: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
}
declare const SelectSelector: import("vue").DefineComponent<SelectorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    values?: LabelValueType[];
    prefixCls?: string;
    onSelect?: (value: RawValueType, option: {
        selected: boolean;
    }) => void;
    tabindex?: string | number;
    disabled?: boolean;
    open?: boolean;
    mode?: import("../interface").Mode;
    id?: string;
    searchValue?: string;
    autofocus?: boolean;
    autocomplete?: string;
    accessibilityIndex?: number;
    inputRef?: import("../../_util/createRef").RefObject;
    removeIcon?: RenderNode;
    maxTagCount?: number;
    maxTagTextLength?: number;
    maxTagPlaceholder?: VNodeChild;
    tokenSeparators?: string[];
    tagRender?: (props: CustomTagProps) => VNodeChild;
    choiceTransitionName?: string;
    placeholder?: VNodeChild;
    showSearch?: boolean;
    onInputKeyDown?: EventHandlerNonNull;
    onInputMouseDown?: EventHandlerNonNull;
    onInputChange?: EventHandlerNonNull;
    onInputPaste?: EventHandlerNonNull;
    onInputCompositionStart?: EventHandlerNonNull;
    onInputCompositionEnd?: EventHandlerNonNull;
}>, {}>;
export default SelectSelector;
