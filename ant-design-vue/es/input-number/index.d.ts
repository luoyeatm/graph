import { nextTick, PropType, ExtractPropTypes } from 'vue';
declare const inputNumberProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    min: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    max: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    value: import("vue-types").VueTypeDef<string | number>;
    step: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    tabindex: import("vue-types").VueTypeDef<string | number>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    formatter: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    parser: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    decimalSeparator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    precision: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    onPressEnter: {
        type: PropType<EventHandlerNonNull>;
    };
    onChange: PropType<(num: number) => void>;
};
export declare type InputNumberProps = Partial<ExtractPropTypes<typeof inputNumberProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            name: string;
            max: number;
            min: number;
            prefixCls: string;
            id: string;
            placeholder: string;
            step: string | number;
            formatter: (...args: any[]) => any;
            parser: (...args: any[]) => any;
            decimalSeparator: string;
            precision: number;
        }> & Omit<Readonly<{
            name: string;
            max: number;
            min: number;
            prefixCls: string;
            id: string;
            placeholder: string;
            step: string | number;
            decimalSeparator: string;
            precision: number;
        } & {
            value?: string | number;
            onChange?: (num: number) => void;
            tabindex?: string | number;
            disabled?: boolean;
            size?: "default" | "small" | "large";
            autofocus?: boolean;
            defaultValue?: string | number;
            onPressEnter?: EventHandlerNonNull;
            formatter?: (...args: any[]) => any;
            parser?: (...args: any[]) => any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "name" | "max" | "min" | "prefixCls" | "id" | "placeholder" | "step" | "formatter" | "parser" | "decimalSeparator" | "precision">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            name: string;
            max: number;
            min: number;
            prefixCls: string;
            id: string;
            placeholder: string;
            step: string | number;
            decimalSeparator: string;
            precision: number;
        } & {
            value?: string | number;
            onChange?: (num: number) => void;
            tabindex?: string | number;
            disabled?: boolean;
            size?: "default" | "small" | "large";
            autofocus?: boolean;
            defaultValue?: string | number;
            onPressEnter?: EventHandlerNonNull;
            formatter?: (...args: any[]) => any;
            parser?: (...args: any[]) => any;
        }>, {
            configProvider: {
                locale?: {
                    locale: string;
                    Pagination?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    DatePicker?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    TimePicker?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Calendar?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Table?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Modal?: {
                        okText: string;
                        cancelText: string;
                        justOkText: string;
                    };
                    Popconfirm?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Transfer?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Select?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Upload?: {
                        constructor: Function;
                        toString: () => string;
                        toLocaleString: () => string;
                        valueOf: () => Object;
                        hasOwnProperty: (v: PropertyKey) => boolean;
                        isPrototypeOf: (v: Object) => boolean;
                        propertyIsEnumerable: (v: PropertyKey) => boolean;
                    };
                    Form?: {
                        optional?: string;
                        defaultValidateMessages: {
                            default?: string | (() => string);
                            required?: string | (() => string);
                            enum?: string | (() => string);
                            whitespace?: string | (() => string);
                            date?: {
                                format?: string | (() => string);
                                parse?: string | (() => string);
                                invalid?: string | (() => string);
                            };
                            types?: {
                                string?: string | (() => string);
                                method?: string | (() => string);
                                array?: string | (() => string);
                                object?: string | (() => string);
                                number?: string | (() => string);
                                date?: string | (() => string);
                                boolean?: string | (() => string);
                                integer?: string | (() => string);
                                float?: string | (() => string);
                                regexp?: string | (() => string);
                                email?: string | (() => string);
                                url?: string | (() => string);
                                hex?: string | (() => string);
                            };
                            string?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            number?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            array?: {
                                len?: string | (() => string);
                                min?: string | (() => string);
                                max?: string | (() => string);
                                range?: string | (() => string);
                            };
                            pattern?: {
                                mismatch?: string | (() => string);
                            };
                        };
                    };
                    Image?: {
                        preview: string;
                    };
                };
                getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
                getTargetContainer?: () => HTMLElement;
                getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
                prefixCls?: string;
                renderEmpty?: typeof import("../config-provider/renderEmpty").default;
                transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
                csp?: unknown;
                autoInsertSpaceInButton?: boolean;
                pageHeader?: {
                    ghost: boolean;
                };
                componentSize?: import("../config-provider").SizeType;
                direction?: "ltr" | "rtl";
                space?: {
                    size: number | import("../config-provider").SizeType;
                };
                virtual?: boolean;
                dropdownMatchSelectWidth?: boolean;
                form?: unknown;
            };
            inputNumberRef: any;
            focus: () => void;
            blur: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            name: string;
            max: number;
            min: number;
            prefixCls: string;
            id: string;
            placeholder: string;
            step: string | number;
            formatter: (...args: any[]) => any;
            parser: (...args: any[]) => any;
            decimalSeparator: string;
            precision: number;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        name: string;
        max: number;
        min: number;
        prefixCls: string;
        id: string;
        placeholder: string;
        step: string | number;
        decimalSeparator: string;
        precision: number;
    } & {
        value?: string | number;
        onChange?: (num: number) => void;
        tabindex?: string | number;
        disabled?: boolean;
        size?: "default" | "small" | "large";
        autofocus?: boolean;
        defaultValue?: string | number;
        onPressEnter?: EventHandlerNonNull;
        formatter?: (...args: any[]) => any;
        parser?: (...args: any[]) => any;
    }> & import("vue").ShallowUnwrapRef<{
        configProvider: {
            locale?: {
                locale: string;
                Pagination?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                DatePicker?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                TimePicker?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Calendar?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Table?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Modal?: {
                    okText: string;
                    cancelText: string;
                    justOkText: string;
                };
                Popconfirm?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Transfer?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Select?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Upload?: {
                    constructor: Function;
                    toString: () => string;
                    toLocaleString: () => string;
                    valueOf: () => Object;
                    hasOwnProperty: (v: PropertyKey) => boolean;
                    isPrototypeOf: (v: Object) => boolean;
                    propertyIsEnumerable: (v: PropertyKey) => boolean;
                };
                Form?: {
                    optional?: string;
                    defaultValidateMessages: {
                        default?: string | (() => string);
                        required?: string | (() => string);
                        enum?: string | (() => string);
                        whitespace?: string | (() => string);
                        date?: {
                            format?: string | (() => string);
                            parse?: string | (() => string);
                            invalid?: string | (() => string);
                        };
                        types?: {
                            string?: string | (() => string);
                            method?: string | (() => string);
                            array?: string | (() => string);
                            object?: string | (() => string);
                            number?: string | (() => string);
                            date?: string | (() => string);
                            boolean?: string | (() => string);
                            integer?: string | (() => string);
                            float?: string | (() => string);
                            regexp?: string | (() => string);
                            email?: string | (() => string);
                            url?: string | (() => string);
                            hex?: string | (() => string);
                        };
                        string?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        number?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        array?: {
                            len?: string | (() => string);
                            min?: string | (() => string);
                            max?: string | (() => string);
                            range?: string | (() => string);
                        };
                        pattern?: {
                            mismatch?: string | (() => string);
                        };
                    };
                };
                Image?: {
                    preview: string;
                };
            };
            getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
            getTargetContainer?: () => HTMLElement;
            getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
            prefixCls?: string;
            renderEmpty?: typeof import("../config-provider/renderEmpty").default;
            transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
            csp?: unknown;
            autoInsertSpaceInButton?: boolean;
            pageHeader?: {
                ghost: boolean;
            };
            componentSize?: import("../config-provider").SizeType;
            direction?: "ltr" | "rtl";
            space?: {
                size: number | import("../config-provider").SizeType;
            };
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            form?: unknown;
        };
        inputNumberRef: any;
        focus: () => void;
        blur: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    name: string;
    max: number;
    min: number;
    prefixCls: string;
    id: string;
    placeholder: string;
    step: string | number;
    decimalSeparator: string;
    precision: number;
} & {
    value?: string | number;
    onChange?: (num: number) => void;
    tabindex?: string | number;
    disabled?: boolean;
    size?: "default" | "small" | "large";
    autofocus?: boolean;
    defaultValue?: string | number;
    onPressEnter?: EventHandlerNonNull;
    formatter?: (...args: any[]) => any;
    parser?: (...args: any[]) => any;
}>, {
    configProvider: {
        locale?: {
            locale: string;
            Pagination?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            DatePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            TimePicker?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Calendar?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Table?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Modal?: {
                okText: string;
                cancelText: string;
                justOkText: string;
            };
            Popconfirm?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Transfer?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Select?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Upload?: {
                constructor: Function;
                toString: () => string;
                toLocaleString: () => string;
                valueOf: () => Object;
                hasOwnProperty: (v: PropertyKey) => boolean;
                isPrototypeOf: (v: Object) => boolean;
                propertyIsEnumerable: (v: PropertyKey) => boolean;
            };
            Form?: {
                optional?: string;
                defaultValidateMessages: {
                    default?: string | (() => string);
                    required?: string | (() => string);
                    enum?: string | (() => string);
                    whitespace?: string | (() => string);
                    date?: {
                        format?: string | (() => string);
                        parse?: string | (() => string);
                        invalid?: string | (() => string);
                    };
                    types?: {
                        string?: string | (() => string);
                        method?: string | (() => string);
                        array?: string | (() => string);
                        object?: string | (() => string);
                        number?: string | (() => string);
                        date?: string | (() => string);
                        boolean?: string | (() => string);
                        integer?: string | (() => string);
                        float?: string | (() => string);
                        regexp?: string | (() => string);
                        email?: string | (() => string);
                        url?: string | (() => string);
                        hex?: string | (() => string);
                    };
                    string?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    number?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    array?: {
                        len?: string | (() => string);
                        min?: string | (() => string);
                        max?: string | (() => string);
                        range?: string | (() => string);
                    };
                    pattern?: {
                        mismatch?: string | (() => string);
                    };
                };
            };
            Image?: {
                preview: string;
            };
        };
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
        prefixCls?: string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
        csp?: unknown;
        autoInsertSpaceInButton?: boolean;
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: import("../config-provider").SizeType;
        direction?: "ltr" | "rtl";
        space?: {
            size: number | import("../config-provider").SizeType;
        };
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        form?: unknown;
    };
    inputNumberRef: any;
    focus: () => void;
    blur: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    name: string;
    max: number;
    min: number;
    prefixCls: string;
    id: string;
    placeholder: string;
    step: string | number;
    formatter: (...args: any[]) => any;
    parser: (...args: any[]) => any;
    decimalSeparator: string;
    precision: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
