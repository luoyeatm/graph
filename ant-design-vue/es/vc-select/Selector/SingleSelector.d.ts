import { InnerSelectorProps } from '.';
import { VNodeChild } from 'vue';
interface SelectorProps extends InnerSelectorProps {
    inputElement: VNodeChild;
    activeValue: string;
    backfill?: boolean;
}
declare const SingleSelector: import("vue").DefineComponent<SelectorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    values?: import("../interface/generator").LabelValueType[];
    prefixCls?: string;
    tabindex?: string | number;
    disabled?: boolean;
    open?: boolean;
    mode?: import("../interface").Mode;
    id?: string;
    searchValue?: string;
    inputElement?: VNodeChild;
    autofocus?: boolean;
    autocomplete?: string;
    accessibilityIndex?: number;
    inputRef?: import("../../_util/createRef").RefObject;
    placeholder?: VNodeChild;
    showSearch?: boolean;
    onInputKeyDown?: EventHandlerNonNull;
    onInputMouseDown?: EventHandlerNonNull;
    onInputChange?: EventHandlerNonNull;
    onInputPaste?: EventHandlerNonNull;
    onInputCompositionStart?: EventHandlerNonNull;
    onInputCompositionEnd?: EventHandlerNonNull;
    activeValue?: string;
    backfill?: boolean;
}>, {}>;
export default SingleSelector;
