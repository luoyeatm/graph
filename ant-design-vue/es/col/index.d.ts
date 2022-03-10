declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
        }> & Omit<Readonly<{
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
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls">;
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
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
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
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
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
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
