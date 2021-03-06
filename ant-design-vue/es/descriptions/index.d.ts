import { PropType, HTMLAttributes, ExtractPropTypes, Plugin } from 'vue';
import { Breakpoint } from '../_util/responsiveObserve';
export declare const DescriptionsItemProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    label: import("vue-types").VueTypeValidableDef<any>;
    span: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
};
export declare const DescriptionsItem: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    label: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    span: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls: string;
    span: number;
} & {
    label?: import("../_util/type").VueNode;
}>, {
    prefixCls: string;
    span: number;
}>;
declare const descriptionsProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bordered: import("vue-types").VueTypeValidableDef<boolean>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "middle"> & {
        default: "default" | "small" | "middle";
    };
    title: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    extra: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    column: {
        type: PropType<number | Partial<Record<Breakpoint, number>>>;
        default: () => number | Partial<Record<Breakpoint, number>>;
    };
    layout: import("vue-types").VueTypeDef<"horizontal" | "vertical">;
    colon: import("vue-types").VueTypeValidableDef<boolean>;
};
export declare type DescriptionsProps = HTMLAttributes & Partial<ExtractPropTypes<typeof descriptionsProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
        }> & Omit<Readonly<{
            prefixCls: string;
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
        } & {
            title?: import("../_util/type").VueNode;
            layout?: "horizontal" | "vertical";
            colon?: boolean;
            extra?: import("../_util/type").VueNode;
            bordered?: boolean;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "column" | "size">;
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
            prefixCls: string;
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
        } & {
            title?: import("../_util/type").VueNode;
            layout?: "horizontal" | "vertical";
            colon?: boolean;
            extra?: import("../_util/type").VueNode;
            bordered?: boolean;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
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
        prefixCls: string;
        column: number | Partial<Record<Breakpoint, number>>;
        size: "default" | "small" | "middle";
    } & {
        title?: import("../_util/type").VueNode;
        layout?: "horizontal" | "vertical";
        colon?: boolean;
        extra?: import("../_util/type").VueNode;
        bordered?: boolean;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls: string;
    column: number | Partial<Record<Breakpoint, number>>;
    size: "default" | "small" | "middle";
} & {
    title?: import("../_util/type").VueNode;
    layout?: "horizontal" | "vertical";
    colon?: boolean;
    extra?: import("../_util/type").VueNode;
    bordered?: boolean;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    column: number | Partial<Record<Breakpoint, number>>;
    size: "default" | "small" | "middle";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof DescriptionsItem;
};
export default _default;
