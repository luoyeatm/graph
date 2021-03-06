import { Plugin } from 'vue';
import Form from './Form';
export { FormProps, formProps } from './Form';
export { FormItemProps, formItemProps } from './FormItem';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            name: string;
            prefixCls: string;
            onSubmit: (...args: any[]) => any;
            requiredMark: "" | import("./Form").RequiredMark;
            model: {
                [key: string]: any;
            };
            validateMessages: {
                [key: string]: any;
            };
            onFinish: (...args: any[]) => any;
            onFinishFailed: (...args: any[]) => any;
        }> & Omit<Readonly<{
            name: string;
            prefixCls: string;
            model: {
                [key: string]: any;
            };
            validateMessages: {
                [key: string]: any;
            };
        } & {
            validateTrigger?: string | string[];
            onSubmit?: (...args: any[]) => any;
            layout?: "inline" | "horizontal" | "vertical";
            size?: import("../config-provider").SizeType;
            labelCol?: unknown;
            labelAlign?: "left" | "right";
            colon?: boolean;
            requiredMark?: "" | import("./Form").RequiredMark;
            wrapperCol?: unknown;
            rules?: {
                [k: string]: import("./Form").ValidationRule | import("./Form").ValidationRule[];
            };
            hideRequiredMark?: boolean;
            validateOnRuleChange?: boolean;
            scrollToFirstError?: unknown;
            onFinish?: (...args: any[]) => any;
            onFinishFailed?: (...args: any[]) => any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "name" | "prefixCls" | "onSubmit" | "requiredMark" | "model" | "validateMessages" | "onFinish" | "onFinishFailed">;
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
        $emit: (event: "submit" | "finishFailed" | "finish", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            name: string;
            prefixCls: string;
            model: {
                [key: string]: any;
            };
            validateMessages: {
                [key: string]: any;
            };
        } & {
            validateTrigger?: string | string[];
            onSubmit?: (...args: any[]) => any;
            layout?: "inline" | "horizontal" | "vertical";
            size?: import("../config-provider").SizeType;
            labelCol?: unknown;
            labelAlign?: "left" | "right";
            colon?: boolean;
            requiredMark?: "" | import("./Form").RequiredMark;
            wrapperCol?: unknown;
            rules?: {
                [k: string]: import("./Form").ValidationRule | import("./Form").ValidationRule[];
            };
            hideRequiredMark?: boolean;
            validateOnRuleChange?: boolean;
            scrollToFirstError?: unknown;
            onFinish?: (...args: any[]) => any;
            onFinishFailed?: (...args: any[]) => any;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "finishFailed" | "finish")[], string, {
            name: string;
            prefixCls: string;
            onSubmit: (...args: any[]) => any;
            requiredMark: "" | import("./Form").RequiredMark;
            model: {
                [key: string]: any;
            };
            validateMessages: {
                [key: string]: any;
            };
            onFinish: (...args: any[]) => any;
            onFinishFailed: (...args: any[]) => any;
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
        name: string;
        prefixCls: string;
        model: {
            [key: string]: any;
        };
        validateMessages: {
            [key: string]: any;
        };
    } & {
        validateTrigger?: string | string[];
        onSubmit?: (...args: any[]) => any;
        layout?: "inline" | "horizontal" | "vertical";
        size?: import("../config-provider").SizeType;
        labelCol?: unknown;
        labelAlign?: "left" | "right";
        colon?: boolean;
        requiredMark?: "" | import("./Form").RequiredMark;
        wrapperCol?: unknown;
        rules?: {
            [k: string]: import("./Form").ValidationRule | import("./Form").ValidationRule[];
        };
        hideRequiredMark?: boolean;
        validateOnRuleChange?: boolean;
        scrollToFirstError?: unknown;
        onFinish?: (...args: any[]) => any;
        onFinishFailed?: (...args: any[]) => any;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    name: string;
    prefixCls: string;
    model: {
        [key: string]: any;
    };
    validateMessages: {
        [key: string]: any;
    };
} & {
    validateTrigger?: string | string[];
    onSubmit?: (...args: any[]) => any;
    layout?: "inline" | "horizontal" | "vertical";
    size?: import("../config-provider").SizeType;
    labelCol?: unknown;
    labelAlign?: "left" | "right";
    colon?: boolean;
    requiredMark?: "" | import("./Form").RequiredMark;
    wrapperCol?: unknown;
    rules?: {
        [k: string]: import("./Form").ValidationRule | import("./Form").ValidationRule[];
    };
    hideRequiredMark?: boolean;
    validateOnRuleChange?: boolean;
    scrollToFirstError?: unknown;
    onFinish?: (...args: any[]) => any;
    onFinishFailed?: (...args: any[]) => any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "finishFailed" | "finish")[], "submit" | "finishFailed" | "finish", {
    name: string;
    prefixCls: string;
    onSubmit: (...args: any[]) => any;
    requiredMark: "" | import("./Form").RequiredMark;
    model: {
        [key: string]: any;
    };
    validateMessages: {
        [key: string]: any;
    };
    onFinish: (...args: any[]) => any;
    onFinishFailed: (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: import("vue").DefineComponent<{
        id: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        htmlFor: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        prefixCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        label: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
        help: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
        extra: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
        labelCol: {
            type: import("vue").PropType<Partial<{
                prefixCls: string;
            } & {
                span?: string | number;
                push?: string | number;
                offset?: string | number;
                flex?: string | number;
                xxl?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                xl?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                lg?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                md?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                sm?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                xs?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                order?: string | number;
                pull?: string | number;
            }>>;
        };
        wrapperCol: {
            type: import("vue").PropType<Partial<{
                prefixCls: string;
            } & {
                span?: string | number;
                push?: string | number;
                offset?: string | number;
                flex?: string | number;
                xxl?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                xl?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                lg?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                md?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                sm?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                xs?: string | number | {
                    span: string | number;
                    order: string | number;
                    offset: string | number;
                    push: string | number;
                    pull: string | number;
                };
                order?: string | number;
                pull?: string | number;
            }>>;
        };
        hasFeedback: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        colon: import("vue-types").VueTypeValidableDef<boolean>;
        labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
        prop: {
            type: import("vue").PropType<string | number | string[] | number[]>;
        };
        name: {
            type: import("vue").PropType<string | number | string[] | number[]>;
        };
        rules: import("vue-types").VueTypeDef<unknown[] | {
            [key: string]: any;
        }>;
        autoLink: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        required: import("vue-types").VueTypeValidableDef<boolean>;
        validateFirst: import("vue-types").VueTypeValidableDef<boolean>;
        validateStatus: import("vue-types").VueTypeDef<"" | "validating" | "error" | "success" | "warning">;
        validateTrigger: {
            type: import("vue").PropType<string | string[]>;
        };
        messageVariables: {
            type: import("vue").PropType<Record<string, string>>;
        };
        hidden: BooleanConstructor;
    }, () => JSX.Element, unknown, {}, {}, {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        prefixCls: string;
        hidden: boolean;
        id: string;
        htmlFor: string;
        hasFeedback: boolean;
        autoLink: boolean;
    } & {
        name?: string | number | string[] | number[];
        required?: boolean;
        validateTrigger?: string | string[];
        label?: import("../_util/type").VueNode;
        help?: import("../_util/type").VueNode;
        labelCol?: unknown;
        labelAlign?: "left" | "right";
        colon?: boolean;
        extra?: import("../_util/type").VueNode;
        validateStatus?: "" | "validating" | "error" | "success" | "warning";
        wrapperCol?: unknown;
        prop?: string | number | string[] | number[];
        rules?: unknown[] | {
            [key: string]: any;
        };
        validateFirst?: boolean;
        messageVariables?: Record<string, string>;
    }>, {
        prefixCls: string;
        hidden: boolean;
        id: string;
        htmlFor: string;
        hasFeedback: boolean;
        autoLink: boolean;
    }>;
} & Plugin & {
    readonly Item: typeof Form.Item;
};
export default _default;
