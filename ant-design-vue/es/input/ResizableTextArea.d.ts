import { PropType } from 'vue';
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
declare const ResizableTextArea: import("vue").DefineComponent<{
    autosize: {
        type: PropType<AutoSizeType>;
        default: any;
    };
    autoSize: {
        type: PropType<AutoSizeType>;
        default: any;
    };
    onResize: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    inputPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    value: import("vue-types").VueTypeDef<string | number>;
    placeholder: {
        type: PropType<string | number>;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    readonly: import("vue-types").VueTypeValidableDef<boolean>;
    addonBefore: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    addonAfter: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    prefix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    suffix: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    allowClear: import("vue-types").VueTypeValidableDef<boolean>;
    lazy: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    maxlength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    onPressEnter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeyup: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onFocus: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onBlur: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onInput: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:value': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    nextFrameActionId: any;
    textArea: any;
    resizeFrameId: any;
}, {
    textareaStyles: {};
    resizeStatus: number;
}, {}, {
    saveTextArea(textArea: HTMLTextAreaElement): void;
    handleResize(size: {
        width: number;
        height: number;
    }): void;
    resizeOnNextFrame(): void;
    resizeTextarea(): void;
    fixFirefoxAutoScroll(): void;
    renderTextArea(): JSX.Element;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name: string;
    type: string;
    prefixCls: string;
    inputPrefixCls: string;
    lazy: boolean;
    maxlength: number;
} & {
    value?: string | number;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    disabled?: boolean;
    onResize?: (...args: any[]) => any;
    size?: "default" | "small" | "large";
    autofocus?: boolean;
    placeholder?: string | number;
    defaultValue?: string | number;
    allowClear?: boolean;
    loading?: boolean;
    suffix?: import("../_util/type").VueNode;
    prefix?: import("../_util/type").VueNode;
    addonBefore?: import("../_util/type").VueNode;
    addonAfter?: import("../_util/type").VueNode;
    readonly?: boolean;
    onPressEnter?: (...args: any[]) => any;
    "onUpdate:value"?: (...args: any[]) => any;
    autosize?: any;
    autoSize?: any;
}>, {
    name: string;
    type: string;
    prefixCls: string;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onInput: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onKeyup: (...args: any[]) => any;
    onResize: (...args: any[]) => any;
    inputPrefixCls: string;
    lazy: boolean;
    maxlength: number;
    onPressEnter: (...args: any[]) => any;
    "onUpdate:value": (...args: any[]) => any;
    autosize: any;
    autoSize: any;
}>;
export default ResizableTextArea;
