declare const _default: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    inputPrefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    action: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    visibilityToggle: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    iconRender: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    value: import("vue-types").VueTypeDef<string | number>;
    placeholder: {
        type: import("vue").PropType<string | number>;
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
    input: any;
}, {
    visible: boolean;
}, {}, {
    saveInput(node: any): void;
    focus(): void;
    blur(): void;
    onVisibleChange(): void;
    getIcon(): import("vue").VNode<any, any, {
        [key: string]: any;
    }>;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name: string;
    type: string;
    prefixCls: string;
    action: string;
    inputPrefixCls: string;
    lazy: boolean;
    maxlength: number;
    visibilityToggle: boolean;
} & {
    value?: string | number;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    disabled?: boolean;
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
    iconRender?: (...args: any[]) => any;
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
    action: string;
    inputPrefixCls: string;
    lazy: boolean;
    maxlength: number;
    onPressEnter: (...args: any[]) => any;
    "onUpdate:value": (...args: any[]) => any;
    visibilityToggle: boolean;
    iconRender: (...args: any[]) => any;
}>;
export default _default;
